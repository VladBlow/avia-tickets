import { injectStyles } from './injectStyles';
import { injectSprite } from './injectSprite';

export const applyGlobalStyles = () => {
  injectStyles();
  console.log(injectSprite);
  injectSprite();
};
