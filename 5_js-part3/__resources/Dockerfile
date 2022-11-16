FROM postgres

# standard user is also 'postgres'
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB catfactdb
COPY fact.sql /docker-entrypoint-initdb.d/
