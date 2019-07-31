import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../client/App';
import html from '../client/html';

const port = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const body = renderToString(<App />);
  const sheet = new ServerStyleSheet();
  const styles = sheet.getStyleTags();

  res.send(
    html({
      body,
      styles,
    }),
  );
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`);
