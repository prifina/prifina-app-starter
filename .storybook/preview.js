import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
//import { addDecorator, addParameters } from "@storybook/react";
//import { withInfo } from '@storybook/addon-info';

//import { addParameters } from '@storybook/react';
//import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

//import { ThemeProvider } from "@blend-ui/core";

//import { DocsPage } from 'storybook-addon-deps/blocks/DocsPage';
//import { DocsPage } from 'storybook-addon-deps/blocks';
//addParameters({ docs: { page: DocsPage } });

/// Root behavious will change
/// https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#simplified-hierarchy-separators
/*
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
*/

/*
const themeProviderDecorator = (story) => (
  <ThemeProvider>
    <React.Fragment>{story()}</React.Fragment>
  </ThemeProvider>
);

addDecorator(themeProviderDecorator);
*/

/*
const customViewports = {
  iPhoneX: {
    name: "iPhone X",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
};
*/
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      /* ...customViewports, */
    },
  },
};
