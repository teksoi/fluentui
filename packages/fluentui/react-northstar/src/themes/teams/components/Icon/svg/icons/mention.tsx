import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M23.5 16c0-4.1-3.4-7.5-7.5-7.5S8.5 11.9 8.5 16s3.4 7.5 7.5 7.5c1 0 2.1-.2 3-.6.3-.1.4-.4.3-.7-.1-.3-.4-.4-.7-.3-.8.4-1.7.5-2.6.5-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5c0 1-.3 2.1-.7 3-.2.4-.7.7-1.2.7-.6 0-1.6-.3-1.6-1.4v-5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.6c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8v.1c0 1.6 1.3 2.4 2.6 2.4.8 0 1.6-.4 2-1.1v-.1c.6-1.1.9-2.3.9-3.5zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M24 16a8.73 8.73 0 0 1-.309 2.266 6.244 6.244 0 0 1-.422 1.11 3.861 3.861 0 0 1-.64.937 2.922 2.922 0 0 1-.883.648 2.602 2.602 0 0 1-1.144.242c-.333 0-.66-.047-.98-.14s-.617-.229-.888-.407a2.807 2.807 0 0 1-.703-.656 2.518 2.518 0 0 1-.43-.89 3.43 3.43 0 0 1-1.593.39c-.48 0-.93-.092-1.356-.277a3.556 3.556 0 0 1-1.867-1.867A3.36 3.36 0 0 1 12.508 16c0-.479.093-.93.277-1.355.185-.425.437-.796.754-1.114a3.581 3.581 0 0 1 1.113-.754 3.362 3.362 0 0 1 1.356-.277c.536 0 1.055.123 1.555.367.073-.192.195-.351.367-.476a.949.949 0 0 1 .949-.106 1.064 1.064 0 0 1 .539.54.921.921 0 0 1 .082.378v5.133c0 .151.032.281.098.39s.151.2.258.27.225.123.355.156c.13.034.26.051.39.051.177 0 .337-.06.477-.184.14-.122.263-.279.367-.472a3.29 3.29 0 0 0 .262-.649A7.181 7.181 0 0 0 22 16c0-.547-.071-1.075-.215-1.586-.143-.51-.345-.988-.605-1.434s-.574-.85-.942-1.214a6.21 6.21 0 0 0-1.219-.942 6.008 6.008 0 0 0-1.433-.61A5.848 5.848 0 0 0 16 10c-.552 0-1.082.072-1.59.215a6.12 6.12 0 0 0-1.43.605c-.445.261-.85.574-1.214.942s-.679.773-.942 1.218-.466.924-.61 1.434A5.829 5.829 0 0 0 10 16c0 .552.071 1.082.215 1.59s.347.984.61 1.43a6.072 6.072 0 0 0 2.155 2.156A5.928 5.928 0 0 0 16 22c.422 0 .83-.052 1.223-.156.393-.104.785-.219 1.176-.344l.199-.059a.764.764 0 0 1 .199-.027c.13 0 .257.027.379.082s.23.128.32.219c.09.092.164.198.219.32a.922.922 0 0 1 .082.38c0 .224-.071.417-.215.581s-.329.305-.558.422-.486.214-.77.29a8.106 8.106 0 0 1-.848.179A9.874 9.874 0 0 1 16 24a7.712 7.712 0 0 1-2.121-.29 8.118 8.118 0 0 1-1.906-.808 7.97 7.97 0 0 1-1.621-1.254 8.01 8.01 0 0 1-2.063-3.527C8.097 17.441 8 16.734 8 16s.097-1.441.29-2.121.461-1.315.808-1.906a8.052 8.052 0 0 1 2.875-2.875 8.162 8.162 0 0 1 1.906-.809C14.559 8.097 15.266 8 16 8s1.441.097 2.121.29a8.038 8.038 0 0 1 3.527 2.063 8.05 8.05 0 0 1 2.063 3.526c.192.68.289 1.387.289 2.121zm-6.5.016c0-.208-.04-.404-.117-.586a1.551 1.551 0 0 0-.793-.809 1.407 1.407 0 0 0-.582-.121c-.203 0-.396.04-.578.121-.183.081-.341.19-.477.324a1.565 1.565 0 0 0-.324.477c-.081.182-.121.375-.121.578s.04.396.12.578a1.557 1.557 0 0 0 .802.8c.182.082.375.122.578.122.198 0 .387-.04.566-.117a1.545 1.545 0 0 0 .805-.793 1.38 1.38 0 0 0 .121-.574z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
