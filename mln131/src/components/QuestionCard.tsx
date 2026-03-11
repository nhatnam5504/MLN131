import React from 'react';
import type { Question, Stage } from '../types/game';

interface QuestionCardProps {
  stage: Stage;
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  showExplanation: boolean;
  lastAnswerCorrect: boolean | null;
  selectedAnswerId: string | null;
  onAnswer: (answerId: string) => void;
  onNext: () => void;
  score: number;
  consecutiveCorrect: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  stage,
  question,
  questionNumber,
  totalQuestions,
  showExplanation,
  lastAnswerCorrect,
  selectedAnswerId,
  onAnswer,
  onNext,
  score,
  consecutiveCorrect,
}) => {
  return (
    <div className="question-card">
      <div className="stage-header">
        <div className="stage-badge">Màn {stage.id}</div>
        <h2 className="stage-title">{stage.title}</h2>
        <p className="stage-objective">{stage.objective}</p>
      </div>

      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Điểm</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Câu hỏi</span>
          <span className="stat-value">
            {questionNumber}/{totalQuestions}
          </span>
        </div>
        {consecutiveCorrect > 0 && (
          <div className="stat streak">
            <span className="stat-label">Streak</span>
            <span className="stat-value">🔥 {consecutiveCorrect}</span>
          </div>
        )}
      </div>

      <div className="question-content">
        <div className="question-text">
          <span className="question-number">Câu {questionNumber}:</span>
          {question.text}
        </div>

        <div className="answers-container">
          {question.answers.map((answer, index) => {
            const answerLabel = ['A', 'B', 'C', 'D'][index] || answer.id.toUpperCase();
            let answerClass = 'answer-button';

            if (showExplanation) {
              if (answer.isCorrect) {
                answerClass += ' correct';
              } else if (selectedAnswerId === answer.id) {
                answerClass += ' incorrect';
              } else {
                answerClass += ' disabled';
              }
            }

            return (
              <button
                key={answer.id}
                className={answerClass}
                onClick={() => !showExplanation && onAnswer(answer.id)}
                disabled={showExplanation}
              >
                <span className="answer-label">{answerLabel}</span>
                <span className="answer-text">{answer.text}</span>
                {showExplanation && answer.isCorrect && (
                  <span className="answer-icon">✓</span>
                )}
                {showExplanation && selectedAnswerId === answer.id && !answer.isCorrect && (
                  <span className="answer-icon">✗</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && (
        <div className={`explanation-box ${lastAnswerCorrect ? 'correct' : 'incorrect'}`}>
          <div className="explanation-header">
            <span className="explanation-icon">
              {lastAnswerCorrect ? '✓' : '✗'}
            </span>
            <span className="explanation-title">
              {lastAnswerCorrect ? 'Chính xác!' : 'Chưa đúng!'}
            </span>
            <span className="explanation-points">
              {lastAnswerCorrect ? '+10 điểm' : '-5 điểm'}
            </span>
          </div>
          <p className="explanation-text">{question.explanation}</p>
          <button className="next-button" onClick={onNext}>
            Tiếp tục →
          </button>
        </div>
      )}
    </div>
  );
};
