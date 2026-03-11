import React from 'react';
import type { SocialIndicators as SocialIndicatorsType } from '../types/game';

interface SocialIndicatorsProps {
  indicators: SocialIndicatorsType;
}

const indicatorConfig = [
  { key: 'doanKet' as const, label: 'Đoàn kết', icon: '🤝', color: '#4CAF50' },
  { key: 'onDinh' as const, label: 'Ổn định', icon: '⚖️', color: '#2196F3' },
  { key: 'congBang' as const, label: 'Công bằng', icon: '⚡', color: '#FF9800' },
  { key: 'nhanThuc' as const, label: 'Nhận thức', icon: '💡', color: '#9C27B0' },
];

export const SocialIndicators: React.FC<SocialIndicatorsProps> = ({ indicators }) => {
  return (
    <div className="social-indicators">
      <h3 className="indicators-title">Chỉ số xã hội</h3>
      <div className="indicators-grid">
        {indicatorConfig.map((config) => {
          const value = indicators[config.key];
          return (
            <div key={config.key} className="indicator-item">
              <div className="indicator-header">
                <span className="indicator-icon">{config.icon}</span>
                <span className="indicator-name">{config.label}</span>
                <span className="indicator-value">{value}%</span>
              </div>
              <div className="indicator-bar">
                <div
                  className="indicator-fill"
                  style={{
                    width: `${value}%`,
                    backgroundColor: config.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
