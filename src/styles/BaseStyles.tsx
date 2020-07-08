import { Global, css } from '@emotion/core';

import React from 'react';

const BaseStyles = () => (
  <Global
    styles={css`
      /* ---------------------------------- */
      /* ----- Basic Setup ----- */
      /* ---------------------------------- */

      :root {
        --lightBlue: #63b3ed;
        --outline: 2px solid var(--lightBlue);
        --grid-max-width: 1240px;
      }

      @font-face {
        font-family: 'Aestetico';
        src: url('/fonts/Aestetico-Regular.woff2') format('woff2');
        font-display: swap;
        font-style: normal;
        font-weight: 400;
      }

      @font-face {
        font-family: 'Aestetico';
        src: url('/fonts/Aestetico-Bold.woff2') format('woff2');
        font-display: swap;
        font-style: normal;
        font-weight: 700;
      }

      body {
        font-family: 'Aestetico';
      }

      /* ---------------------------------- */
      /* ----- Layout Helpers ----- */
      /* ---------------------------------- */

      .row {
        max-width: var(--grid-max-width);
        margin: 0 auto;
      }

      /* ---------------------------------- */
      /* ----- Accessibility ----- */
      /* ---------------------------------- */

      a:focus,
      a:active,
      button::-moz-focus-inner,
      input::-moz-focus-inner,
      select::-moz-focus-inner {
        border: 0;
      }

      button:focus,
      input:focus,
      select:focus,
      textarea:focus,
      a:focus {
        outline: var(--outline);
      }

      body:not(.user-is-tabbing) {
        button:focus,
        input:focus,
        select:focus,
        textarea:focus,
        a:focus {
          outline: none;
        }
      }

      .outline-bordered {
        border: 2px solid transparent;
      }

      body.user-is-tabbing {
        .outline-bordered:focus {
          outline: none;
          border: var(--outline);
        }

        .breadcrumb:focus {
          box-shadow: none;
        }
      }
    `}
  />
);

export default BaseStyles;
