import { useState } from 'react';
import DarkVeil from './components/DarkVeil';
import GradientText from './components/GradientText';
import ClickSpark from './components/ClickSpark';
import { DEFAULT_SETTINGS } from './config/constants';
import type { GenerationSettings } from './types';

function App() {
  const [settings, setSettings] = useState<GenerationSettings>({
    prompt: '',
    negativePrompt: DEFAULT_SETTINGS.negativePrompt,
    style: DEFAULT_SETTINGS.style,
    aspectRatio: DEFAULT_SETTINGS.aspectRatio,
    resolution: DEFAULT_SETTINGS.resolution,
    image: null
  });

  return (
    <ClickSpark sparkColor="#40ffaa" sparkCount={12} sparkRadius={20}>
      <div className="relative min-h-screen w-full overflow-hidden bg-dark-bg">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <DarkVeil
            hueShift={180}
            noiseIntensity={0.03}
            scanlineIntensity={0.08}
            speed={0.3}
            scanlineFrequency={0.8}
            warpAmount={0.15}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <header className="border-b border-dark-border/30 backdrop-blur-xl bg-dark-bg/30">
            <div className="container mx-auto px-4 py-6">
              <GradientText
                colors={['#40ffaa', '#4079ff', '#9c40ff', '#4079ff', '#40ffaa']}
                animationSpeed={4}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                ✨ Gemini AI Image Generator
              </GradientText>
              <p className="text-center text-dark-textMuted mt-3 text-sm md:text-base">
                Transform your imagination into stunning visuals with AI
              </p>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              {/* Generation Form */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Left Column - Settings */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Prompt Input Section */}
                  <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                    <GradientText
                      colors={['#40ffaa', '#4079ff', '#40ffaa']}
                      animationSpeed={3}
                      className="text-2xl font-semibold mb-4"
                    >
                      Your Prompt
                    </GradientText>
                    <textarea
                      value={settings.prompt}
                      onChange={(e) => setSettings({ ...settings, prompt: e.target.value })}
                      placeholder="Describe your image in detail... (e.g., 'A serene mountain landscape at sunset with pine trees')"
                      className="w-full h-32 bg-dark-bg/50 border border-dark-border/50 rounded-xl px-4 py-3 text-dark-text placeholder:text-dark-textMuted focus:outline-none focus:ring-2 focus:ring-[#40ffaa] focus:border-transparent resize-none"
                      required
                    />
                    <p className="text-xs text-dark-textMuted mt-2">
                      * Required - Be specific and descriptive for best results
                    </p>
                  </div>

                  {/* Negative Prompt Section */}
                  <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-xl font-semibold text-dark-text mb-4">
                      Negative Prompt <span className="text-dark-textMuted text-sm">(Optional)</span>
                    </h3>
                    <textarea
                      value={settings.negativePrompt}
                      onChange={(e) => setSettings({ ...settings, negativePrompt: e.target.value })}
                      placeholder="What to avoid in your image... (e.g., 'blurry, low quality, distorted')"
                      className="w-full h-24 bg-dark-bg/50 border border-dark-border/50 rounded-xl px-4 py-3 text-dark-text placeholder:text-dark-textMuted focus:outline-none focus:ring-2 focus:ring-[#4079ff] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Image Upload Section */}
                  <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-xl font-semibold text-dark-text mb-4">
                      Image to Image <span className="text-dark-textMuted text-sm">(Optional)</span>
                    </h3>
                    <div className="border-2 border-dashed border-dark-border/50 rounded-xl p-8 text-center hover:border-[#40ffaa]/50 transition-colors cursor-pointer">
                      <p className="text-dark-textMuted">
                        Click to upload an image or drag and drop
                      </p>
                      <p className="text-xs text-dark-textMuted mt-2">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Options */}
                <div className="space-y-6">
                  {/* Style Selector */}
                  <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-lg font-semibold text-dark-text mb-4">Style</h3>
                    <p className="text-sm text-dark-textMuted mb-2">
                      Current: <span className="text-[#40ffaa]">Realistic</span>
                    </p>
                    <p className="text-xs text-dark-textMuted">
                      8 styles available - Full selector coming next
                    </p>
                  </div>

                  {/* Aspect Ratio Selector */}
                  <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-lg font-semibold text-dark-text mb-4">Aspect Ratio</h3>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-[#40ffaa] text-dark-bg rounded-lg font-medium">
                        Portrait
                      </button>
                      <button className="flex-1 px-4 py-2 bg-dark-bg/50 text-dark-text border border-dark-border/50 rounded-lg font-medium hover:border-[#40ffaa]/50">
                        Landscape
                      </button>
                    </div>
                  </div>

                  {/* Resolution Selector */}
                  <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-lg font-semibold text-dark-text mb-4">Resolution</h3>
                    <p className="text-sm text-dark-textMuted mb-2">
                      Current: <span className="text-[#40ffaa]">Full HD (1920x1080)</span>
                    </p>
                    <p className="text-xs text-dark-textMuted">
                      HD, Full HD, 4K, 8K options
                    </p>
                  </div>

                  {/* Generate Button */}
                  <button
                    disabled={!settings.prompt.trim()}
                    className="w-full py-4 bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#9c40ff] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    ✨ Generate Image
                  </button>
                </div>
              </div>

              {/* Generated Images Gallery */}
              <div className="backdrop-blur-xl bg-dark-surface/50 border border-dark-border/30 rounded-2xl p-6 shadow-2xl">
                <GradientText
                  colors={['#40ffaa', '#4079ff', '#40ffaa']}
                  animationSpeed={3}
                  className="text-2xl font-semibold mb-6"
                >
                  Your Creations
                </GradientText>
                <div className="text-center py-12 text-dark-textMuted">
                  <p className="text-lg">No images generated yet</p>
                  <p className="text-sm mt-2">Enter a prompt and click generate to create your first image</p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-dark-border/30 backdrop-blur-xl bg-dark-bg/30 mt-16">
            <div className="container mx-auto px-4 py-6 text-center text-dark-textMuted text-sm">
              <p>Made with ❤️ by Riya | Powered by Google Gemini AI</p>
            </div>
          </footer>
        </div>
      </div>
    </ClickSpark>
  );
}

export default App;

