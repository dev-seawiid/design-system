import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: `
  <div style="display: flex; align-items: center; gap: 8px;">
    <img src="/logo.png" width="24" height="24" alt="Logo" />
    <span>@wiid-get/design-system</span>
  </div>
`,
  brandUrl: './',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});

