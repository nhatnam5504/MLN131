import './App.css';
import { useGameState } from './hooks/useGameState';
import { IntroScreen } from './components/IntroScreen';
import { QuestionCard } from './components/QuestionCard';
import { StageComplete } from './components/StageComplete';
import { ResultScreen } from './components/ResultScreen';
import { SocialIndicators } from './components/SocialIndicators';
import { gameStages } from './data/questions';

function App() {
  const {
    gameState,
    startGame,
    answerQuestion,
    nextQuestion,
    nextStage,
    resetGame,
    getGameResult,
    getCurrentStage,
    getCurrentQuestion,
    totalStages,
  } = useGameState();

  const renderContent = () => {
    switch (gameState.gamePhase) {
      case 'intro':
        return <IntroScreen onStart={startGame} />;

      case 'playing': {
        const stage = getCurrentStage();
        const question = getCurrentQuestion();
        if (!stage || !question) return null;

        const selectedAnswer = gameState.answers.find(
          (a) => a.questionId === question.id
        );

        return (
          <div className="game-container">
            <div className="game-sidebar">
              <div className="progress-section">
                <h3>Tiến độ</h3>
                <div className="progress-stages">
                  {Array.from({ length: totalStages }, (_, i) => (
                    <div
                      key={i}
                      className={`progress-stage ${
                        i < gameState.currentStage
                          ? 'completed'
                          : i === gameState.currentStage
                          ? 'current'
                          : ''
                      }`}
                    >
                      <span className="stage-number">{i + 1}</span>
                      <div className="stage-info">
                        <span className="stage-name">Màn {i + 1}</span>
                        <span className="stage-context">{gameStages[i].title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <SocialIndicators indicators={gameState.socialIndicators} />
            </div>

            <div className="game-main">
              <QuestionCard
                stage={stage}
                question={question}
                questionNumber={gameState.currentQuestion + 1}
                totalQuestions={stage.questions.length}
                showExplanation={gameState.showExplanation}
                lastAnswerCorrect={gameState.lastAnswerCorrect}
                selectedAnswerId={selectedAnswer?.selectedAnswerId || null}
                onAnswer={answerQuestion}
                onNext={nextQuestion}
                score={gameState.score}
                consecutiveCorrect={gameState.consecutiveCorrect}
              />
            </div>
          </div>
        );
      }

      case 'stage-complete': {
        const stage = getCurrentStage();
        if (!stage) return null;

        return (
          <StageComplete
            completedStage={stage}
            score={gameState.score}
            onNextStage={nextStage}
          />
        );
      }

      case 'finished':
        return <ResultScreen result={getGameResult()} onRestart={resetGame} />;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Trò chơi học thuật - Triết học Mác-Lênin</h1>
      </header>
      <main className="app-main">{renderContent()}</main>
      <footer className="app-footer">
        <p>MLN131 - Liên minh giai cấp và đấu tranh giai cấp trong thời kỳ quá độ</p>
      </footer>
    </div>
  );
}

export default App;
