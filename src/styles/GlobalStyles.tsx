import { Global, css } from '@emotion/core';

import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --grid-max-width: 1240px;
      }

      /* ---------------------------------- */
      /* ----- Layout Helpers ----- */
      /* ---------------------------------- */

      .row {
        max-width: var(--grid-max-width);
        margin: 0 auto;
      }
    `}
  />
);

export default GlobalStyles;
