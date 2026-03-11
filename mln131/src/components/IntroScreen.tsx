import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="intro-screen">
      <div className="intro-content">
        <div className="game-badge">Trò chơi học thuật</div>
        <h1 className="game-title">
          Liên minh giai cấp và đấu tranh giai cấp
          <span className="subtitle">trong thời kỳ quá độ</span>
        </h1>

        <div className="intro-description">
          <p>
            Chào mừng bạn đến với trò chơi học thuật về chủ đề "Liên minh giai cấp
            và đấu tranh giai cấp trong thời kỳ quá độ". Bạn sẽ đóng vai một nhà
            hoạch định chính sách xã hội.
          </p>
        </div>

        <div className="game-info">
          <div className="info-card">
            <div className="info-icon">📚</div>
            <div className="info-text">
              <h3>5 Màn chơi</h3>
              <p>Từ bối cảnh đến so sánh lịch sử</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">⭐</div>
            <div className="info-text">
              <h3>Hệ thống điểm</h3>
              <p>+10 đúng, -5 sai, bonus liên tiếp</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📊</div>
            <div className="info-text">
              <h3>4 Chỉ số xã hội</h3>
              <p>Đoàn kết, Ổn định, Công bằng, Nhận thức</p>
            </div>
          </div>
        </div>

        <div className="scoring-rules">
          <h3>Cách tính điểm</h3>
          <ul>
            <li>✓ Trả lời đúng: <strong>+10 điểm</strong></li>
            <li>✗ Trả lời sai: <strong>-5 điểm</strong></li>
            <li>🎯 Hoàn thành một màn: <strong>+20 điểm</strong></li>
            <li>🔥 3 câu đúng liên tiếp: <strong>+10 điểm bonus</strong></li>
          </ul>
        </div>

        <button className="start-button" onClick={onStart}>
          <span>Bắt đầu trò chơi</span>
          <span className="button-icon">→</span>
        </button>
      </div>
    </div>
  );
};
