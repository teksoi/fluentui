import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M22.852 18.148A.484.484 0 0 1 23 18.5v.578c0 .917-.438 1.677-1.312 2.281-.714.489-1.672.856-2.875 1.102-.917.192-1.855.289-2.813.289-.677 0-1.352-.052-2.023-.156-.875-.136-1.644-.328-2.305-.578-.802-.297-1.43-.672-1.883-1.125-.526-.527-.789-1.13-.789-1.813V18.5a.48.48 0 0 1 .148-.352A.484.484 0 0 1 9.5 18h13c.135 0 .252.05.352.148zm-5.508-8.875a3.553 3.553 0 0 1 1.883 1.883c.182.427.273.875.273 1.344s-.092.917-.273 1.344a3.553 3.553 0 0 1-1.883 1.883c-.427.182-.875.273-1.344.273s-.917-.091-1.344-.273a3.553 3.553 0 0 1-1.883-1.883c-.182-.427-.273-.875-.273-1.344s.091-.917.273-1.344a3.537 3.537 0 0 1 1.883-1.883C15.083 9.091 15.531 9 16 9s.917.091 1.344.273zm6.922-.539c.099.099.148.216.148.352s-.05.253-.148.352L23.211 10.5l1.055 1.062c.099.099.148.216.148.352s-.05.253-.148.352a.483.483 0 0 1-.352.148.484.484 0 0 1-.352-.148L22.5 11.211l-1.062 1.055a.483.483 0 0 1-.352.148.484.484 0 0 1-.352-.148c-.1-.099-.148-.216-.148-.352s.049-.253.148-.352l1.055-1.062-1.055-1.062c-.1-.099-.148-.216-.148-.352s.049-.253.148-.352a.48.48 0 0 1 .352-.148c.135 0 .252.05.352.148L22.5 9.789l1.062-1a.48.48 0 0 1 .352-.148c.135-.055.252-.005.352.093z"
        />
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M22.85 18.15c.1.1.15.22.15.35v.58c0 .92-.44 1.68-1.31 2.28-.71.49-1.67.86-2.88 1.1-.92.19-1.85.29-2.81.29-.68 0-1.35-.05-2.02-.16-.88-.14-1.64-.33-2.3-.58-.8-.3-1.43-.67-1.88-1.12-.54-.53-.8-1.13-.8-1.81v-.58c0-.14.05-.25.15-.35.1-.1.21-.15.35-.15h13c.13 0 .25.05.35.15zM10 19c0 .53.24.99.71 1.38.39.33.94.61 1.67.84.59.19 1.25.33 1.98.41.63.08 1.17.12 1.63.12.77 0 1.53-.07 2.3-.2 1.08-.19 1.92-.47 2.52-.82.8-.46 1.19-1.03 1.19-1.73H10zm7.34-9.73c.43.18.8.44 1.12.76.32.32.58.7.76 1.12.18.43.27.88.27 1.34 0 .47-.09.92-.27 1.34-.18.42-.43.79-.76 1.12s-.71.58-1.13.77c-.42.19-.87.28-1.33.28a3.413 3.413 0 0 1-2.46-1.04c-.32-.33-.58-.7-.77-1.12-.18-.42-.27-.87-.27-1.34a3.45 3.45 0 0 1 1.04-2.47c.33-.33.7-.58 1.12-.76.42-.18.87-.27 1.34-.27.47 0 .92.09 1.34.27zm-2.3.93c-.3.13-.57.31-.8.54-.23.23-.41.5-.54.8-.13.31-.2.63-.2.96 0 .33.06.65.2.95.13.3.31.57.55.8s.5.42.8.55a2.38 2.38 0 0 0 1.91 0c.31-.13.58-.31.8-.54.23-.23.41-.5.54-.8a2.392 2.392 0 0 0 0-1.92c-.13-.31-.31-.58-.54-.8-.23-.23-.5-.41-.8-.54-.31-.13-.63-.2-.96-.2-.33 0-.65.07-.96.2zm9.23-1.47a.485.485 0 0 1 0 .7l-1.05 1.06 1.05 1.06a.485.485 0 0 1 0 .7.485.485 0 0 1-.7 0l-1.06-1.05-1.06 1.05a.485.485 0 0 1-.7 0 .485.485 0 0 1 0-.7l1.05-1.06-1.05-1.06a.485.485 0 0 1 0-.7.485.485 0 0 1 .7 0l1.06 1.05 1.06-1.05c.1-.1.22-.15.35-.15.13.01.25.06.35.15z"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'participant-remove',
} as TeamsProcessedSvgIconSpec;
