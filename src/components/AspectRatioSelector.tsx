import { ASPECT_RATIOS } from '../config/constants';

interface AspectRatioSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AspectRatioSelector({ value, onChange }: AspectRatioSelectorProps) {
  return (
    <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(156,64,255,0.1)]">
      <h3 className="text-lg font-semibold text-dark-text mb-4">Aspect Ratio</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {ASPECT_RATIOS.map((ratio) => {
          const isSelected = value === ratio.id;
          const isPortrait = ratio.id === 'portrait';
          
          return (
            <button
              key={ratio.id}
              onClick={() => onChange(ratio.id)}
              className={`relative group px-4 py-6 rounded-xl font-medium transition-all duration-300 ${
                isSelected
                  ? 'bg-gradient-to-br from-[#9c40ff] to-[#4079ff] text-white shadow-lg shadow-[#9c40ff]/30 scale-105'
                  : 'bg-dark-bg/50 text-dark-text border border-dark-border/50 hover:border-[#9c40ff]/50 hover:shadow-lg'
              }`}
            >
              {/* Icon representation */}
              <div className="flex flex-col items-center gap-3">
                <div className={`border-2 rounded transition-all ${
                  isSelected ? 'border-white' : 'border-dark-border group-hover:border-[#9c40ff]'
                }`}>
                  {isPortrait ? (
                    <div className="w-8 h-12" />
                  ) : (
                    <div className="w-12 h-8" />
                  )}
                </div>
                
                <div className="text-center">
                  <div className="font-semibold">{ratio.name}</div>
                  <div className={`text-xs mt-1 ${
                    isSelected ? 'text-white/80' : 'text-dark-textMuted'
                  }`}>
                    {isPortrait ? '9:16' : '16:9'}
                  </div>
                </div>
              </div>
              
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <span className="text-white text-sm">✓</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Info text */}
      <div className="mt-4 pt-4 border-t border-dark-border/30">
        <p className="text-xs text-dark-textMuted text-center">
          {value === 'portrait' 
            ? '📱 Perfect for mobile wallpapers and social media stories' 
            : '🖥️ Ideal for desktop wallpapers and wide displays'}
        </p>
      </div>
    </div>
  );
}
