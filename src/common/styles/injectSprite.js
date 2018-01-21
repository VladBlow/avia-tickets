import loadSprite from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const __svgsprite__ = {
  path: '../../../static/svg/*.svg',
  name: 'sprite.svg',
};

export const injectSprite = () =>
  loadSprite({
    filename: `/${__svgsprite__.filename}`,
  });
