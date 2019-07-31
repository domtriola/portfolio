const html = ({ body, styles }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
      -->
      <link rel="manifest" href="/manifest.json">
      <link rel="shortcut icon" href="/favicon.png">
      ${styles}
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
      <title>Dominick Triola</title>
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root">${body}</div>
      <!--
        This HTML file is a template.
        If you open it directly in the browser, you will see an empty page.
      -->
    </body>
  </html>
`;

export default html;