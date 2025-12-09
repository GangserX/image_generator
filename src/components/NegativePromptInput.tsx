import { useState, useCallback } from 'react';

interface NegativePromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function NegativePromptInput({
  value,
  onChange,
  placeholder = "What to avoid in your image... (e.g., 'blurry, low quality, distorted')"
}: NegativePromptInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(value.length);
  const maxChars = 1000;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxChars) {
      onChange(newValue);
      setCharCount(newValue.length);
    }
  }, [onChange, maxChars]);

  const commonNegatives = [
    "blurry, low quality, distorted, watermark, text, signature",
    "ugly, deformed, noisy, bad anatomy, mutation",
    "oversaturated, grainy, pixelated, artifacts",
    "duplicate, cropped, out of frame, poorly drawn"
  ];

  return (
    <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(64,121,255,0.1)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-dark-text flex items-center gap-2">
          Negative Prompt
          <span className="text-dark-textMuted text-sm font-normal">(Optional)</span>
        </h3>
        <span className="text-[#4079ff] text-xs bg-[#4079ff]/10 px-2 py-1 rounded-full">
          Refine Results
        </span>
      </div>

      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full h-28 bg-dark-bg/50 border rounded-xl px-4 py-3 text-dark-text placeholder:text-dark-textMuted focus:outline-none resize-none transition-all duration-300 ${
            isFocused
              ? 'border-[#4079ff] ring-2 ring-[#4079ff]/30 shadow-lg shadow-[#4079ff]/10'
              : value.trim().length > 0
              ? 'border-[#4079ff]/50'
              : 'border-dark-border/50'
          }`}
        />
        
        {/* Character counter */}
        <div className="absolute bottom-3 right-3">
          <span
            className={`text-xs transition-colors ${
              charCount > maxChars * 0.9
                ? 'text-red-400'
                : charCount > maxChars * 0.7
                ? 'text-yellow-400'
                : 'text-dark-textMuted'
            }`}
          >
            {charCount}/{maxChars}
          </span>
        </div>
      </div>

      {/* Info and tips */}
      <div className="mt-3 space-y-2">
        {value.trim().length > 0 ? (
          <p className="text-xs text-[#4079ff] flex items-center gap-1">
            <span>✓</span>
            <span>Negative prompts will help refine your generation</span>
          </p>
        ) : (
          <p className="text-xs text-dark-textMuted">
            💡 Tip: Specify elements you want to exclude from the generated image for more precise control.
          </p>
        )}
      </div>

      {/* Common negative prompts */}
      {!value.trim() && (
        <div className="mt-4 pt-4 border-t border-dark-border/30">
          <p className="text-xs text-dark-textMuted mb-2 font-medium">Quick add common exclusions:</p>
          <div className="flex flex-wrap gap-2">
            {commonNegatives.map((negative, index) => (
              <button
                key={index}
                onClick={() => onChange(negative)}
                className="text-xs text-dark-textMuted hover:text-[#4079ff] bg-dark-bg/30 hover:bg-[#4079ff]/10 transition-all px-3 py-1.5 rounded-lg border border-dark-border/30 hover:border-[#4079ff]/30"
              >
                {negative.split(',')[0]}...
              </button>
            ))}
          </div>
          <button
            onClick={() => onChange(commonNegatives[0])}
            className="mt-2 w-full text-xs text-[#4079ff] hover:text-[#40ffaa] transition-colors text-left"
          >
            + Use quality preset: "{commonNegatives[0]}"
          </button>
        </div>
      )}

      {/* Clear button when has value */}
      {value.trim().length > 0 && (
        <div className="mt-3 flex justify-end">
          <button
            onClick={() => onChange('')}
            className="text-xs text-dark-textMuted hover:text-red-400 transition-colors flex items-center gap-1"
          >
            <span>✕</span>
            <span>Clear negative prompt</span>
          </button>
        </div>
      )}
    </div>
  );
}
