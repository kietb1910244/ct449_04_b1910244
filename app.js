const app = require("./app");
const config = require("./app/config");

const PORT = config.app.port;
app.listen(PORT, () => {
	console.log('Server os running on port ${PORT}.');	
});