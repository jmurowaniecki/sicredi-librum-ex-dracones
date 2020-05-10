FROM mariadb:10.3

COPY ./e*.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["mysqld"]
