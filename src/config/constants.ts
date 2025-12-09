import type { ImageStyle, Resolution, AspectRatio } from '../types';

export const IMAGE_STYLES: ImageStyle[] = [
  {
    id: 'realistic',
    name: 'Realistic',
    description: 'Photorealistic imagery with detailed textures'
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Vibrant, animated style with bold colors'
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Japanese animation aesthetic'
  },
  {
    id: 'oil-painting',
    name: 'Oil Painting',
    description: 'Classic painted look with brush strokes'
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    description: 'Soft, artistic watercolor effect'
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Hand-drawn pencil sketch style'
  },
  {
    id: '3d-render',
    name: '3D Render',
    description: 'Modern 3D CGI style'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon aesthetic'
  }
];

export const RESOLUTIONS: Resolution[] = [
  {
    id: 'hd',
    name: 'HD',
    width: 1280,
    height: 720
  },
  {
    id: 'fullhd',
    name: 'Full HD',
    width: 1920,
    height: 1080
  },
  {
    id: '4k',
    name: '4K',
    width: 3840,
    height: 2160
  },
  {
    id: '8k',
    name: '8K',
    width: 7680,
    height: 4320
  }
];

export const ASPECT_RATIOS: AspectRatio[] = [
  {
    id: 'portrait',
    name: 'Portrait'
  },
  {
    id: 'landscape',
    name: 'Landscape'
  }
];

export const DEFAULT_SETTINGS = {
  style: 'realistic',
  aspectRatio: 'portrait',
  resolution: 'fullhd',
  negativePrompt: ''
};
