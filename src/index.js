import layouts from './layouts';

export const render = (colors) => {

  return Object.keys(colors).map((cs) => {
    const colorSet = colors[cs];

    for (let colorName in colorSet) {
      colorSet[colorName] = colorSet[colorName].toLowerCase();
    }

    return Object.keys(layouts).map((layout) => {
      return Promise.resolve({
        name: `themer-tmux.${cs}.${layout}.tmuxtheme`,
        contents: Buffer.from(layouts[layout](colorSet), 'utf8')
      });
    });
  }).reduce((a, b) => a.concat(b), []);

};
