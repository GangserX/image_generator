import { useState, useCallback } from 'react';
import GradientText from './GradientText';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function PromptInput({
  value,
  onChange,
  placeholder = "Describe your image in detail... (e.g., 'A serene mountain landscape at sunset with pine trees')",
  required = true
}: PromptInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(value.length);
  const maxChars = 2000;
  const minChars = 10;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxChars) {
      onChange(newValue);
      setCharCount(newValue.length);
    }
  }, [onChange, maxChars]);

  const isValid = value.trim().length >= minChars;
  const showWarning = value.trim().length > 0 && value.trim().length < minChars;

  return (
    <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(64,255,170,0.1)]">
      <div className="flex items-center justify-between mb-4">
        <GradientText
          colors={['#40ffaa', '#4079ff', '#40ffaa']}
          animationSpeed={3}
          className="text-2xl font-semibold"
        >
          Your Prompt
        </GradientText>
        {required && (
          <span className="text-red-400 text-sm font-medium">* Required</span>
        )}
      </div>

      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full h-40 bg-dark-bg/50 border rounded-xl px-4 py-3 text-dark-text placeholder:text-dark-textMuted focus:outline-none resize-none transition-all duration-300 ${
            isFocused
              ? 'border-[#40ffaa] ring-2 ring-[#40ffaa]/30 shadow-lg shadow-[#40ffaa]/10'
              : showWarning
              ? 'border-yellow-500/50'
              : value.trim().length > 0
              ? 'border-[#40ffaa]/50'
              : 'border-dark-border/50'
          }`}
          required={required}
        />
        
        {/* Character counter */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {isValid && value.trim().length > 0 && (
            <span className="text-[#40ffaa] text-xs">✓</span>
          )}
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

      {/* Validation messages */}
      <div className="mt-3 space-y-1">
        {showWarning && (
          <p className="text-xs text-yellow-400 flex items-center gap-1">
            <span>⚠️</span>
            <span>Please enter at least {minChars} characters for better results</span>
          </p>
        )}
        
        {isValid && (
          <p className="text-xs text-[#40ffaa] flex items-center gap-1">
            <span>✓</span>
            <span>Great! Your prompt is ready</span>
          </p>
        )}

        {!value.trim() && (
          <p className="text-xs text-dark-textMuted">
            💡 Tip: Be specific and descriptive for best results. Include details about style, mood, lighting, and composition.
          </p>
        )}
      </div>

      {/* Example prompts */}
      {!value.trim() && (
        <div className="mt-4 pt-4 border-t border-dark-border/30">
          <p className="text-xs text-dark-textMuted mb-2 font-medium">Example prompts:</p>
          <div className="space-y-1">
            {[
              "A majestic dragon flying over a medieval castle at sunset, detailed scales, dramatic lighting",
              "Cyberpunk city street at night, neon signs, rain-soaked pavement, flying cars",
              "Peaceful zen garden with cherry blossoms, koi pond, traditional Japanese architecture"
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => onChange(example)}
                className="block w-full text-left text-xs text-dark-textMuted hover:text-[#40ffaa] transition-colors p-2 rounded hover:bg-dark-bg/30"
              >
                "{example}"
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
