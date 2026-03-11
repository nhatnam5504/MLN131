import React from 'react';
import type { GameResult } from '../types/game';
import { SocialIndicators } from './SocialIndicators';

interface ResultScreenProps {
  result: GameResult;
  onRestart: () => void;
}

const resultConfig = {
  excellent: {
    title: 'Xuất sắc!',
    icon: '🏆',
    message: 'Bạn nắm vững kiến thức về liên minh và đấu tranh giai cấp.',
    color: '#4CAF50',
  },
  average: {
    title: 'Khá tốt',
    icon: '📚',
    message: 'Bạn đã hiểu một phần. Hãy ôn lại để nắm vững hơn.',
    color: '#FF9800',
  },
  'needs-improvement': {
    title: 'Cần cố gắng',
    icon: '📖',
    message: 'Bạn cần học lại để hiểu rõ hơn nội dung lý luận.',
    color: '#f44336',
  },
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  const config = resultConfig[result.resultLevel];

  return (
    <div className="result-screen">
      <div className="result-content">
        <div
          className="result-icon"
          style={{ backgroundColor: config.color }}
        >
          {config.icon}
        </div>

        <h2 className="result-title" style={{ color: config.color }}>
          {config.title}
        </h2>

        <p className="result-message">{config.message}</p>

        <div className="result-stats">
          <div className="result-stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <span className="stat-value">{result.totalScore}</span>
              <span className="stat-label">Tổng điểm</span>
            </div>
          </div>

          <div className="result-stat-card">
            <div className="stat-icon">✓</div>
            <div className="stat-content">
              <span className="stat-value">
                {result.correctAnswers}/{result.totalQuestions}
              </span>
              <span className="stat-label">Câu đúng</span>
            </div>
          </div>

          <div className="result-stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <span className="stat-value">
                {Math.round((result.correctAnswers / result.totalQuestions) * 100)}%
              </span>
              <span className="stat-label">Tỷ lệ đúng</span>
            </div>
          </div>
        </div>

        <div className="final-indicators">
          <h3>Chỉ số xã hội cuối cùng</h3>
          <SocialIndicators indicators={result.socialIndicators} />
        </div>

        <div className="knowledge-summary">
          <h3>Nội dung chính</h3>
          <ul>
            <li>✓ Thời kỳ quá độ lên CNXH</li>
            <li>✓ Liên minh công - nông - trí thức</li>
            <li>✓ Quan hệ liên minh & đấu tranh</li>
            <li>✓ Đấu tranh giai cấp hiện nay</li>
          </ul>
        </div>

        <button className="restart-button" onClick={onRestart}>
          <span>Chơi lại</span>
          <span className="button-icon">↻</span>
        </button>
      </div>
    </div>
  );
};
