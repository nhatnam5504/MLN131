import { useState, useCallback } from 'react';
import type { GameState, SocialIndicators, GameResult, SocialImpact } from '../types/game';
import { gameStages, getTotalQuestions } from '../data/questions';

const initialSocialIndicators: SocialIndicators = {
  doanKet: 50,
  onDinh: 50,
  congBang: 50,
  nhanThuc: 50,
};

const initialGameState: GameState = {
  currentStage: 0,
  currentQuestion: 0,
  score: 0,
  consecutiveCorrect: 0,
  socialIndicators: { ...initialSocialIndicators },
  answers: [],
  gamePhase: 'intro',
  showExplanation: false,
  lastAnswerCorrect: null,
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const startGame = useCallback(() => {
    setGameState({
      ...initialGameState,
      socialIndicators: { ...initialSocialIndicators },
      answers: [],
      gamePhase: 'playing',
    });
  }, []);

  const applyImpact = (
    indicators: SocialIndicators,
    impact: SocialImpact
  ): SocialIndicators => {
    const clamp = (value: number) => Math.max(0, Math.min(100, value));
    return {
      doanKet: clamp(indicators.doanKet + (impact.doanKet || 0)),
      onDinh: clamp(indicators.onDinh + (impact.onDinh || 0)),
      congBang: clamp(indicators.congBang + (impact.congBang || 0)),
      nhanThuc: clamp(indicators.nhanThuc + (impact.nhanThuc || 0)),
    };
  };

  const answerQuestion = useCallback((answerId: string) => {
    setGameState((prev) => {
      const currentStage = gameStages[prev.currentStage];
      const currentQuestion = currentStage.questions[prev.currentQuestion];
      const selectedAnswer = currentQuestion.answers.find((a) => a.id === answerId);
      const isCorrect = selectedAnswer?.isCorrect || false;

      // Tính điểm
      let newScore = prev.score;
      let newConsecutive = prev.consecutiveCorrect;

      if (isCorrect) {
        newScore += 10; // +10 cho câu đúng
        newConsecutive += 1;
        if (newConsecutive === 3) {
          newScore += 10; // +10 bonus cho 3 câu đúng liên tiếp
          newConsecutive = 0; // Reset streak
        }
      } else {
        newScore = Math.max(0, newScore - 5); // -5 cho câu sai
        newConsecutive = 0;
      }

      // Áp dụng tác động xã hội
      const impact = isCorrect ? currentQuestion.correctImpact : currentQuestion.wrongImpact;
      const newIndicators = applyImpact(prev.socialIndicators, impact);

      return {
        ...prev,
        score: newScore,
        consecutiveCorrect: newConsecutive,
        socialIndicators: newIndicators,
        answers: [
          ...prev.answers,
          {
            stageId: currentStage.id,
            questionId: currentQuestion.id,
            selectedAnswerId: answerId,
            isCorrect,
          },
        ],
        showExplanation: true,
        lastAnswerCorrect: isCorrect,
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setGameState((prev) => {
      const currentStage = gameStages[prev.currentStage];
      const isLastQuestionInStage = prev.currentQuestion >= currentStage.questions.length - 1;
      const isLastStage = prev.currentStage >= gameStages.length - 1;

      if (isLastQuestionInStage) {
        // Hoàn thành màn - cộng 20 điểm
        const newScore = prev.score + 20;

        if (isLastStage) {
          // Kết thúc game
          return {
            ...prev,
            score: newScore,
            showExplanation: false,
            lastAnswerCorrect: null,
            gamePhase: 'finished',
          };
        } else {
          // Chuyển màn
          return {
            ...prev,
            score: newScore,
            showExplanation: false,
            lastAnswerCorrect: null,
            gamePhase: 'stage-complete',
          };
        }
      } else {
        // Next question trong cùng màn
        return {
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          showExplanation: false,
          lastAnswerCorrect: null,
        };
      }
    });
  }, []);

  const nextStage = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      currentStage: prev.currentStage + 1,
      currentQuestion: 0,
      gamePhase: 'playing',
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      ...initialGameState,
      socialIndicators: { ...initialSocialIndicators },
      answers: [],
    });
  }, []);

  const getGameResult = useCallback((): GameResult => {
    const totalQuestions = getTotalQuestions();
    const correctAnswers = gameState.answers.filter((a) => a.isCorrect).length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    let resultLevel: GameResult['resultLevel'];
    if (percentage >= 80) {
      resultLevel = 'excellent';
    } else if (percentage >= 50) {
      resultLevel = 'average';
    } else {
      resultLevel = 'needs-improvement';
    }

    return {
      totalScore: gameState.score,
      correctAnswers,
      totalQuestions,
      socialIndicators: gameState.socialIndicators,
      resultLevel,
    };
  }, [gameState]);

  const getCurrentStage = useCallback(() => {
    return gameStages[gameState.currentStage];
  }, [gameState.currentStage]);

  const getCurrentQuestion = useCallback(() => {
    const stage = gameStages[gameState.currentStage];
    return stage?.questions[gameState.currentQuestion];
  }, [gameState.currentStage, gameState.currentQuestion]);

  return {
    gameState,
    startGame,
    answerQuestion,
    nextQuestion,
    nextStage,
    resetGame,
    getGameResult,
    getCurrentStage,
    getCurrentQuestion,
    totalStages: gameStages.length,
  };
};
