#!/bin/bash

set -e

echo "waiting for postgres..."

while ! nc -z database 5432; do
    sleep 0.1
done

echo "PostgreSQL started"
# Apply migrations, create database tables
if [ "$RUN_SETUP_DJANGO" = "true" ]; then
    echo "Django Is startedddd"
    python manage.py migrate
    python manage.py runscript scripts.populate_model
fi

PORT="${WSGI_PORT:-8000}"
DBG_PORT="${DBG_PORT:-5678}"
python manage.py diffsettings --all
exec python -m debugpy --wait-for-client --listen 0.0.0.0:"$DBG_PORT" manage.py runserver 0.0.0.0:"$PORT"

exec "$@"