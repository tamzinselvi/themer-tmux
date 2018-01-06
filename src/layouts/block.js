export default (colorSet, i) => `#
# Powerline Themer Block - Tmux Theme
# Originally created by Jim Myhrberg <contact@jimeh.me>.
# Modified for use by Themer by Tom Selvi <tomselvi@gmail.com>.
#
# Inspired by vim-powerline: https://github.com/Lokaltog/powerline
#
# Requires terminal to be using a powerline compatible font, find one here:
# https://github.com/Lokaltog/powerline-fonts
#

# Status update interval
set -g status-interval 1

# Basic status bar colors
set -g status-fg "${colorSet.shade3}"
set -g status-bg "${colorSet.shade1}"

# Left side of status bar
set -g status-left-bg "${colorSet.shade1}"
set -g status-left-fg "${colorSet.shade5}"
set -g status-left-length 40
set -g status-left "#[fg=${colorSet.shade0},bg=${colorSet[`accent${i * 2}`]},bold] #S #[fg=${colorSet[`accent${i * 2}`]},bg=${colorSet.shade4},nobold]#[fg=${colorSet.shade1},bg=${colorSet.shade4}] #(whoami) #[fg=${colorSet.shade4},bg=${colorSet.shade2}]#[fg=${colorSet.shade4},bg=${colorSet.shade2}] #I:#P #[fg=${colorSet.shade2},bg=${colorSet.shade1},nobold]"

# Right side of status bar
set -g status-right-bg ${colorSet.shade1}
set -g status-right-fg ${colorSet.shade5}
set -g status-right-length 150
set -g status-right "#[fg=${colorSet.shade2},bg=${colorSet.shade1}]#[fg=${colorSet.shade4},bg=${colorSet.shade2}] %H:%M:%S #[fg=${colorSet.shade4},bg=${colorSet.shade2}]#[fg=${colorSet.shade1},bg=${colorSet.shade4}] %d-%b-%y #[fg=${colorSet.shade6},bg=${colorSet.shade4}]#[fg=${colorSet.shade0},bg=${colorSet.shade6},bold] #H "

# Window status
set -g window-status-format "#[fg=${colorSet.shade7}]#[bg=${colorSet.shade1}] #I:#W#F "
set -g window-status-current-format "#[fg=${colorSet[`accent${i * 2 + 1}`]},bg=black] #I:#W#F "

# Current window status
set -g window-status-current-bg ${colorSet[`accent${i * 2}`]}
set -g window-status-current-fg ${colorSet.shade0}

# Window with activity status
set -g window-status-activity-bg ${colorSet[`accent${i * 2 + 1}`]}  # fg and bg are flipped here due to
set -g window-status-activity-fg ${colorSet.shade1} # a bug in tmux

# Window separator
set -g window-status-separator ""

# Window status alignment
set -g status-justify centre

# Pane border
set -g pane-border-bg default
set -g pane-border-fg ${colorSet.shade3}

# Active pane border
set -g pane-active-border-bg default
set -g pane-active-border-fg ${colorSet[`accent${i * 2}`]}

# Pane number indicator
set -g display-panes-colour ${colorSet.shade1}
set -g display-panes-active-colour ${colorSet.shade6}

# Clock mode
set -g clock-mode-colour ${colorSet[`accent${i * 2}`]}
set -g clock-mode-style 24

# Message
set -g message-bg ${colorSet[`accent${i * 2}`]}
set -g message-fg black

# Command message
set -g message-command-bg ${colorSet.shade1}
set -g message-command-fg black

# Mode
set -g mode-bg ${colorSet[`accent${i * 2}`]}
set -g mode-fg ${colorSet.shade7}`;
