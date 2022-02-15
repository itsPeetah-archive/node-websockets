import WebSocket from "ws";

const main = async () => {
  const ws = new WebSocket("ws://localhost:4000/echo", {
    perMessageDeflate: false,
  });

  ws.on("open", () => {
    ws.send("Hello websocket! (1)");
    ws.send("Hello websocket! (2)");
    ws.send("Hello websocket! (3)");
  });

  ws.on("message", (data) => {
    console.log("Received:", data.toString());
  });
};

await main();
