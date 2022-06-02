docker run-d \
    --name portfolio-db \
    -p "34532:5432" \
    -e "POSTGRES_PASSWORD=mypassword1" \
    -e "POSTGRES_NAME=portfolio" \
    postgres

docker exec portfolio-db psql -U postgres -c "create database portfolio"