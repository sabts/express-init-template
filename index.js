// Server creation and configuration
const http = require("node:http");
const app = require("./src/app");

// Config .env
require("dotenv").config();

//Configuración de DB es necesario para que se concecte a la base de datos
require('./src/config/db')

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
    console.log(error);
});
