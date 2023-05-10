# Node.js Project with WebSocket and Vite Vanilla

This project is a Node.js application that uses the "ws" library to implement a WebSocket server, as well as the Vite framework to build a client applicatio

## Project Description

This project is a simple WebSocket application that allows clients to connect to the WebSocket server and send messages to other connected clients. The WebSocket server uses the "ws" library to handle WebSocket connections and incoming messages.

The client application is a vanilla JavaScript application that connects to the WebSocket server and allows the user to send messages. The client application uses the Vite Vanilla framework to serve and build the application.


## **Prerequisite**

Make sure you have Node.js and npm installed on your machine.

## Installation

To install the dependencies for this project, run the following command in the root directory:

```
npm install
```

## Usage

### Server

To start the WebSocket server, run the following command:

```
npm run server
```

The server will start on port `3050`.

### Client

To start the client application in development mode, run the following command:

```
npm run dev-client
```

This command launches the Vite development server, which serves the client application on port `5173`. You can access the application by opening a web browser and visiting the address `http://localhost:5173/`.

To build the client application for production, run the following command:

```
npm run build-client
```

This command builds the client application in the `dist` directory.


## Project Structure

- `server/server.js` : the entry point for the WebSocket server application.
- `client/index.html` : the HTML page for the client application.
- `client/main.js` : the JavaScript code for the client application.
- `vite.config.js` : the configuration for Vite Vanilla to serve and build the client application.
- `package.json` : the npm configuration file for dependencies and scripts.

## **Eslint**

This project has a popular static analysis tool 
(`Eslint`) that helps developers identify and fix problems in their JavaScript code.

To run ESLint on your code, you can use the command :

```
npm run lint
```