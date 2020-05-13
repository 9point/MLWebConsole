import React from 'react';

import { PageWithToolbar } from './utils/Page';

import './RouteNotFoundPage.css';

export default function RouteNoteFoundScreen() {
  return (
    <PageWithToolbar
      canvas={<>Route not found</>}
      className="RouteNotFoundPage-Root"
    ></PageWithToolbar>
  );
}
