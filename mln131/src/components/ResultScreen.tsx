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
    message: 'Bạn đã hiểu rõ vai trò của liên minh giai cấp và nội dung đấu tranh giai cấp hiện nay.',
    color: '#4CAF50',
  },
  average: {
    title: 'Trung bình',
    icon: '📚',
    message: 'Bạn đã hiểu một phần nội dung. Hãy ôn lại để nắm vững hơn.',
    color: '#FF9800',
  },
  'needs-improvement': {
    title: 'Cần cố gắng thêm',
    icon: '📖',
    message: 'Bạn cần học lại nội dung lý luận để hiểu rõ hơn về liên minh giai cấp và đấu tranh giai cấp.',
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
          <h3>Kiến thức đã học</h3>
          <ul>
            <li>✓ Đặc điểm xã hội Việt Nam trong thời kỳ quá độ</li>
            <li>✓ Mục đích và ý nghĩa của liên minh giai cấp</li>
            <li>✓ Mối quan hệ giữa liên minh và đấu tranh giai cấp</li>
            <li>✓ Nội dung đấu tranh giai cấp hiện nay</li>
            <li>✓ So sánh nhận thức trước 1980 và hiện nay</li>
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
