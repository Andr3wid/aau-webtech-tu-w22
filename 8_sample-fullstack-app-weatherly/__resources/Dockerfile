FROM postgres

# standard user is also 'postgres'
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB weatherly
COPY location.sql /docker-entrypoint-initdb.d/
