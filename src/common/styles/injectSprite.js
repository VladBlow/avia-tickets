import loadSprite from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const __svgsprite__ = {
  path: '../../../static/svg/*.svg',
  name: 'sprite.svg',
};

export const injectSprite = () =>
  loadSprite(
    process.env.NODE_ENV === 'production'
      ? {
          filename: `avia-tickets/public/${__svgsprite__.filename}`,
        }
      : __svgsprite__,
  );
