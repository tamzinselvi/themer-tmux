import { render } from './index';
import { colors } from 'themer-colors-default';
import layouts from './layouts';

const layoutCount = Object.keys(layouts).length;

describe('themer tmux color scheme generator', () => {

  const testColorSetConfiguration = (message, colors) => {
    it(message, async() => {
      const files = await Promise.all(render(colors, {}));

      expect(files.length).toBe(Object.keys(colors).length * layoutCount);

      let unknownCount = 0;
      let darkCount = 0;
      let lightCount = 0;

      files.forEach((file) => {
        if (/dark/.test(file.name)) {
          darkCount++;
        }
        else if (/light/.test(file.name)) {
          lightCount++;
        }
        else {
          unknownCount++;
        }
      });

      expect(darkCount).toBe(layoutCount * ('dark' in colors));
      expect(lightCount).toBe(layoutCount * ('light' in colors));
      expect(unknownCount).toBe(0);
    });
  };

  testColorSetConfiguration('should produce six files containing both schemes if passed both a dark and light theme', colors);
  testColorSetConfiguration('should produce three file containing only a dark scheme if passed only a dark color set', { dark: colors.dark });
  testColorSetConfiguration('should produce three file containing only a light scheme if passed only a light color set', { light: colors.light });

});
