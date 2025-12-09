import { RESOLUTIONS } from '../config/constants';

interface ResolutionSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ResolutionSelector({ value, onChange }: ResolutionSelectorProps) {
  const selectedResolution = RESOLUTIONS.find((r) => r.id === value);

  return (
    <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(64,255,170,0.1)]">
      <h3 className="text-lg font-semibold text-dark-text mb-4">Resolution</h3>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        {RESOLUTIONS.map((resolution) => {
          const isSelected = value === resolution.id;
          const isPremium = resolution.id === '4k' || resolution.id === '8k';
          
          return (
            <button
              key={resolution.id}
              onClick={() => onChange(resolution.id)}
              className={`relative px-3 py-3 rounded-lg font-medium transition-all duration-300 text-sm ${
                isSelected
                  ? 'bg-[#40ffaa] text-dark-bg shadow-lg shadow-[#40ffaa]/30 scale-105'
                  : 'bg-dark-bg/50 text-dark-text border border-dark-border/50 hover:border-[#40ffaa]/50 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-base">{resolution.name}</span>
                <span className={`text-xs ${
                  isSelected ? 'text-dark-bg/70' : 'text-dark-textMuted'
                }`}>
                  {resolution.width}×{resolution.height}
                </span>
              </div>
              
              {/* Premium badge */}
              {isPremium && (
                <div className={`absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-xs ${
                  isSelected 
                    ? 'bg-dark-bg text-[#40ffaa]' 
                    : 'bg-[#40ffaa]/20 text-[#40ffaa]'
                }`}>
                  ⚡
                </div>
              )}
              
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute -top-1 -left-1">
                  <span className="text-dark-bg text-sm">✓</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Current selection info */}
      {selectedResolution && (
        <div className="pt-4 border-t border-dark-border/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-dark-textMuted">Selected:</span>
            <span className="text-sm text-[#40ffaa] font-semibold">
              {selectedResolution.name}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-dark-textMuted">Dimensions:</span>
            <span className="text-sm text-dark-text font-mono">
              {selectedResolution.width} × {selectedResolution.height}
            </span>
          </div>
        </div>
      )}
      
      {/* Info/Warning text */}
      <div className="mt-4 pt-4 border-t border-dark-border/30">
        <p className="text-xs text-dark-textMuted text-center">
          {value === '8k' || value === '4k' 
            ? '⚡ Ultra HD quality - May take longer to generate' 
            : value === 'fullhd'
            ? '✨ Recommended - Perfect balance of quality and speed'
            : '⚡ Fast generation with good quality'}
        </p>
      </div>
    </div>
  );
}
