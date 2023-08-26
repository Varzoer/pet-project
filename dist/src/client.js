const { app, CLIENT_PORT, SERVER_PORT } = require("./frontend.js");

app.listen(CLIENT_PORT, () => {
  console.log(`Client running at http://localhost:${CLIENT_PORT}`);
});
