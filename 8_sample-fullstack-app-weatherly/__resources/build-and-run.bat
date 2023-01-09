docker build -t postgres-weatherly .
docker run --publish 127.0.0.1:5432:5432 --name webtech-postgres-weatherly -d postgres-weatherly