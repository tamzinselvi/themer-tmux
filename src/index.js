import layouts from './layouts';

export const render = (colors) => {

  return Object.keys(colors).map((cs) => {
    const colorSet = colors[cs];

    for (let colorName in colorSet) {
      colorSet[colorName] = colorSet[colorName].toLowerCase();
    }

    return Object.keys(layouts).map((layout) => {
      const result = [];

      for (let i = 0; i < Math.floor(Object.keys(colorSet).length / 4); i++) {
        result.push(Promise.resolve({
          name: `themer-tmux.${cs}.${layout}.v${i}.tmuxtheme`,
          contents: Buffer.from(layouts[layout](colorSet, i), 'utf8')
        }));
      }

      return result;
    }).reduce((a, b) => a.concat(b), []);
  }).reduce((a, b) => a.concat(b), []);

};
