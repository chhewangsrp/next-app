-- Check if the database exists before attempting to create it
SELECT 'CREATE DATABASE portfolio'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'portfolio');
