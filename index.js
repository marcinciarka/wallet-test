const proxy = require("express-http-proxy");
const app = require("express")();

// proxy will return localhost:2137 and then localhost:2138 after 10 seconds
let swap = false;
setInterval(() => {
  swap = !swap;
}, 10000);

app.use(
  "/",
  proxy(() => {
    if (swap) {
      return "http://localhost:2137";
    }
    return "http://localhost:2138";
  })
);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
