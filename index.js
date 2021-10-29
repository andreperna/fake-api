const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
// server.get("/hello", (req, res) => {
//   res.send("Hello");
// });

// Use default router
server.use(router);

// port
var port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("JSON Server is running");
});
