# Catfact backend

As an introduction to node.js in the WebTech tutorial on the AAU Klagenfurt, we try to resemble the backend from `catfact.ninja/fact` in this project.

## Local build
1. Build Docker image for hosting database: `docker build -t postgres-factdb  ./__resources`
2. Start an instance of the built image: `docker run --publish 127.0.0.1:5432:5432 --name webtech-postgres-instance -e POSTGRES_PASSWORD=postgres -d postgres-factdb`
3. Start the node application in dev mode with `npm run start`
