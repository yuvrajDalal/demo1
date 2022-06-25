FROM mysql 

ENV MYSQL_ROOT_PASSWORD "password"
ENV MYSQL_DATABASE "newuser"

EXPOSE 3306

COPY db.sql /docker-entrypoint-initdb.d