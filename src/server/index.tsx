import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import config, { Config } from '../config';
import App from '../client/App';
import html from '../client/html';

const app: express.Express = express();
const { port }: Config = config;

app.use(express.static('public'));

app.get('/', (_, res) => {
  const sheet = new ServerStyleSheet();

  try {
    const body: string = renderToString(sheet.collectStyles(<App />));
    const styles: string = sheet.getStyleTags();

    res.send(
      html({
        body,
        styles,
      }),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    sheet.seal();
  }
});

app.get('*', (req, res) => {
  console.log("Request for unknown path:", req.path);

  res.send("Page not found");
})

app.listen(port);
// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`);
