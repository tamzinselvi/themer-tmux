# themer-tmux [![Travis](https://img.shields.io/travis/tomselvi/themer-tmux.svg)](https://travis-ci.org/tomselvi/themer-tmux)

A tmux theme template for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-tmux

Then pass `themer-tmux` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-tmux -o gen

## Output

`themer-tmux` will generate multiple colorscheme files for you to choose from. These will include both the light and
dark pallettes, as well as 3 layouts (default, block & double) and 4 accent pairs (v0, v1, v2, v3).

These layouts require a powerline font and were adapted from [jimeh/tmux-themepack](https://github.com/jimeh/tmux-themepack)

I would be more than happy to add a non-powerline layout if requested.

Finally, set the colorscheme in your .tmux.conf:

    source path/to/colorscheme
