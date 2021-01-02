// .storybook/preview.js

import '../src/index.scss';

// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};