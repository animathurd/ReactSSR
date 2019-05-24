import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/client/js/App";

const app = express();

app.use(express.static(path.resolve(__dirname, "./dist")));

app.get("/resources/:filepath", (req, res) => {
  res.sendFile(path.resolve(__dirname, `../dist/${req.params.filepath}`));
});

app.get("/*", (req, res) => {
  const jsx = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const reactDom = renderToString(jsx);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlTemplate(reactDom));
});

app.listen(2048, () => {
  console.log("Server running on port 2048...");
});

function htmlTemplate(reactDom) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
            <base href="/" />
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script src="/resources/bundle.js"></script>
        </body>
        </html>
    `;
}
