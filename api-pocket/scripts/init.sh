#!/bin/sh

echo "Aplying migrations..."
until nc -z -v -w30 db 5432
do
  echo "Waiting for database connection..."
  # wait for 10 seconds before retrying
  sleep 10
done

npm run migration

if [ $? -eq 0 ]; then
  echo "Populando o banco de dados com seeds..."
  npm run seed
fi

echo "Iniciando o servidor..."
npm run dev
