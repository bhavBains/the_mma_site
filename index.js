const app = require("./server/server");

const PORT = process.env.PORT || 5000;
// Booting up server
app.listen(PORT, () => console.log(`App is running at port ${PORT}`));
