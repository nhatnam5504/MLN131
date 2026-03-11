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
      {indicatorConfig.map((config) => {
        const value = indicators[config.key];
        return (
          <div key={config.key} className="indicator">
            <div className="indicator-header">
              <span className="indicator-icon">{config.icon}</span>
              <span className="indicator-label">{config.label}</span>
            </div>
            <div className="indicator-bar-container">
              <div
                className="indicator-bar"
                style={{
                  width: `${value}%`,
                  backgroundColor: config.color,
                }}
              />
            </div>
            <span className="indicator-value">{value}%</span>
          </div>
        );
      })}
    </div>
  );
};
