import { WebSocketServer } from "ws";

const main = async () => {
  const wss = new WebSocketServer({ path: "/echo", port: 4000 });

  wss.on("connection", (ws) => {
    ws.on("message", (data) => {
      console.log("Received:", data.toString());
      ws.send(data.toString());
    });
  });
};

await main();
