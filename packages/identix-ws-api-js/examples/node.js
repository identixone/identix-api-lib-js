const { createIDXWsApi } = require("../src");

const IDXWsApi = createIDXWsApi({
  version: 1,
  token: "TOKEN",
});

IDXWsApi.connect();

IDXWsApi.on("connect", () => {
  console.log("🤝 connected!");
});

IDXWsApi.on("message", message => {
  console.log("✉️ message received!", { message });
});
