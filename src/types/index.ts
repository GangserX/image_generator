export interface ImageStyle {
  id: string;
  name: string;
  description: string;
}

export interface Resolution {
  id: string;
  name: string;
  width: number;
  height: number;
}

export interface AspectRatio {
  id: string;
  name: string;
}

export interface GenerationSettings {
  prompt: string;
  negativePrompt: string;
  style: string;
  aspectRatio: string;
  resolution: string;
  image?: File | null;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
  settings: GenerationSettings;
}
