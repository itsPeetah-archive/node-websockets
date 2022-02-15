import express from "express";
import expressWs from "express-ws";

const main = async () => {
  const app = express();
  const ews = expressWs(app);

  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  app.ws("/echo", (ws, req) => {
    ws.on("message", (msg) => {
      console.log("received:", msg);
      ws.send(msg);
    });
  });

  app.listen(4000, () => console.log("I'm live!"));
};

await main();
