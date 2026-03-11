import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="intro-screen">
      {/* Decorative golden corner accents */}
      <div className="intro-corner corner-tl"></div>
      <div className="intro-corner corner-tr"></div>
      <div className="intro-corner corner-bl"></div>
      <div className="intro-corner corner-br"></div>

      <div className="intro-content">
        <button className="start-button" onClick={onStart}>
          <span className="button-star">★</span>
          <span>Bắt đầu</span>
          <span className="button-star">★</span>
        </button>

        <div className="hero-image">
          <img
            src="https://kinhtevadubao.vn/stores/news_dataimages/hoenh/052023/31/16/ly-luan-ve-thoi-ky-qua-do-len-chu-nghia-xa-hoi-o-viet-nam-tu-di-san-vo-gia-cua-chu-tich-ho-chi-minh-den-ly-luan-sau-sac-cua-tong-bi-thu-nguyen-phu-trong_2.jpg?rt=20230531163300"
            alt="Thời kỳ quá độ lên CNXH"
          />
        </div>

        <div className="game-badge">🎓 Triết học Mác-Lênin</div>
        <h1 className="game-title">
          Liên minh & Đấu tranh giai cấp
          <span className="subtitle">Thời kỳ quá độ lên CNXH</span>
        </h1>

        <p className="intro-description">
          Khám phá vai trò của liên minh công - nông - trí thức và bản chất đấu tranh giai cấp trong xây dựng CNXH tại Việt Nam.
        </p>

        <div className="game-info">
          <div className="info-card">
            <span className="info-icon">📚</span>
            <span>5 Màn chơi</span>
          </div>
          <div className="info-card">
            <span className="info-icon">⭐</span>
            <span>+10/-5 điểm</span>
          </div>
          <div className="info-card">
            <span className="info-icon">🔥</span>
            <span>Bonus x3</span>
          </div>
        </div>
      </div>
    </div>
  );
};
