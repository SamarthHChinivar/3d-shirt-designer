import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#2e2e2e',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './shirt.png',
    fullDecal: './tiger.webp',
});

export default state;