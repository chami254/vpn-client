console.log("VPN Client Service started");

process.stdin.on("data", (data) => {
  const command = data.toString().trim();

  if (command === "connect") {
    console.log("Client Service: CONNECT command received");
  }

  if (command === "disconnect") {
    console.log("Client Service: DISCONNECT command received");
  }
});