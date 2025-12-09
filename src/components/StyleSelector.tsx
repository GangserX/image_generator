import { useState } from 'react';
import { IMAGE_STYLES } from '../config/constants';

interface StyleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StyleSelector({ value, onChange }: StyleSelectorProps) {
  const [showAll, setShowAll] = useState(false);
  const selectedStyle = IMAGE_STYLES.find((s) => s.id === value);
  const displayedStyles = showAll ? IMAGE_STYLES : IMAGE_STYLES.slice(0, 4);

  const getStyleEmoji = (styleId: string) => {
    const emojiMap: Record<string, string> = {
      'realistic': '📸',
      'cartoon': '🎨',
      'anime': '🎌',
      'oil-painting': '🖼️',
      'watercolor': '💧',
      'sketch': '✏️',
      '3d-render': '🎮',
      'cyberpunk': '🌃'
    };
    return emojiMap[styleId] || '🎨';
  };

  return (
    <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(64,121,255,0.1)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dark-text">Image Style</h3>
        <span className="text-xs text-[#4079ff] bg-[#4079ff]/10 px-2 py-1 rounded-full">
          8 Styles
        </span>
      </div>
      
      {/* Style Grid */}
      <div className="space-y-2 mb-3">
        {displayedStyles.map((style) => {
          const isSelected = value === style.id;
          
          return (
            <button
              key={style.id}
              onClick={() => onChange(style.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#4079ff] to-[#9c40ff] text-white shadow-lg shadow-[#4079ff]/30 scale-105'
                  : 'bg-dark-bg/50 text-dark-text border border-dark-border/50 hover:border-[#4079ff]/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getStyleEmoji(style.id)}</span>
                  <div>
                    <div className="font-semibold text-sm">{style.name}</div>
                    <div className={`text-xs mt-0.5 ${
                      isSelected ? 'text-white/70' : 'text-dark-textMuted'
                    }`}>
                      {style.description}
                    </div>
                  </div>
                </div>
                {isSelected && (
                  <span className="text-white text-lg">✓</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Show More/Less Toggle */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="w-full py-2 text-sm text-[#4079ff] hover:text-[#40ffaa] transition-colors border border-dark-border/30 rounded-lg hover:border-[#4079ff]/30 bg-dark-bg/30"
      >
        {showAll ? '▲ Show Less' : '▼ Show All 8 Styles'}
      </button>

      {/* Current Selection Info */}
      {selectedStyle && (
        <div className="mt-4 pt-4 border-t border-dark-border/30">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{getStyleEmoji(selectedStyle.id)}</span>
            <div>
              <div className="text-xs text-dark-textMuted">Current Style:</div>
              <div className="text-sm text-[#4079ff] font-semibold">
                {selectedStyle.name}
              </div>
            </div>
          </div>
          <p className="text-xs text-dark-textMuted">
            {selectedStyle.id === 'realistic' && '✨ Default - Perfect for photorealistic results'}
            {selectedStyle.id === 'cartoon' && '🎨 Great for fun and vibrant images'}
            {selectedStyle.id === 'anime' && '🎌 Popular for character illustrations'}
            {selectedStyle.id === 'oil-painting' && '🖼️ Classic artistic style'}
            {selectedStyle.id === 'watercolor' && '💧 Soft and dreamy aesthetic'}
            {selectedStyle.id === 'sketch' && '✏️ Hand-drawn pencil look'}
            {selectedStyle.id === '3d-render' && '🎮 Modern CGI appearance'}
            {selectedStyle.id === 'cyberpunk' && '🌃 Futuristic neon vibes'}
          </p>
        </div>
      )}
    </div>
  );
}
