import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import html from '../client/html';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const body = renderToString(<App />);
  const title = 'Server side Rendering with Styled Components';

  res.send(
    html({
      body,
      title,
    }),
  );
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`);
