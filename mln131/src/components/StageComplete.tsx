import React from 'react';
import type { Stage } from '../types/game';
import { gameStages } from '../data/questions';

interface StageCompleteProps {
  completedStage: Stage;
  score: number;
  onNextStage: () => void;
}

export const StageComplete: React.FC<StageCompleteProps> = ({
  completedStage,
  score,
  onNextStage,
}) => {
  const currentStageIndex = gameStages.findIndex((s) => s.id === completedStage.id);
  const nextStage = gameStages[currentStageIndex + 1];

  return (
    <div className="stage-complete">
      <div className="completion-animation">
        <div className="checkmark">✓</div>
      </div>

      <h2 className="completion-title">
        Hoàn thành Màn {completedStage.id}!
      </h2>

      <p className="completion-subtitle">{completedStage.title}</p>

      <div className="completion-stats">
        <div className="stat-item">
          <span className="stat-icon">⭐</span>
          <span className="stat-value">+20</span>
        </div>
        <div className="stat-item total">
          <span className="stat-icon">🏆</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>

      {nextStage && (
        <div className="next-stage-preview">
          <span className="preview-badge">Màn {nextStage.id}:</span>
          <span className="preview-title">{nextStage.title}</span>
        </div>
      )}

      <button className="continue-button" onClick={onNextStage}>
        <span>Tiếp tục Màn {completedStage.id + 1}</span>
        <span className="button-icon">→</span>
      </button>
    </div>
  );
};
