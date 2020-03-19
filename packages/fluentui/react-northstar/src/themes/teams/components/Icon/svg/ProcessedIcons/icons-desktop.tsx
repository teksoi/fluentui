import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M22.41 9.56c.18.08.35.19.5.34.14.15.26.32.34.5.08.19.12.38.12.58v7.21a1.531 1.531 0 0 1-.46 1.08c-.15.15-.32.27-.5.35-.19.08-.38.12-.58.12h-3.61v1.03l.34-.02c.08 0 .19-.01.33-.01.25 0 .44.03.58.1.2.09.3.24.3.45 0 .14-.05.26-.15.36-.1.1-.22.15-.36.15h-6.18c-.14 0-.26-.05-.36-.15-.1-.1-.15-.22-.15-.36 0-.21.1-.36.3-.45.15-.06.34-.1.58-.1.15 0 .26 0 .34.01l.33.02v-1.03h-3.61c-.2 0-.4-.04-.58-.12-.19-.08-.35-.2-.5-.35-.15-.14-.27-.31-.35-.5s-.14-.37-.14-.57v-7.21c0-.2.04-.4.12-.58s.2-.35.35-.5c.15-.14.31-.26.5-.34s.38-.12.58-.12h11.34c.2-.01.39.03.58.11zm-11.92.91c-.14 0-.26.05-.36.15-.1.1-.15.22-.15.36v7.21c0 .14.05.26.15.36.1.1.22.15.36.15h11.34c.14 0 .26-.05.36-.15.1-.1.15-.22.15-.36v-7.21c0-.14-.05-.26-.15-.36-.1-.1-.22-.15-.36-.15H10.49zm4.63 9.27v1.03h2.06v-1.03h-2.06z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
