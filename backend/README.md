# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

With Docker, Node/NPM, YARN installed
Create at Docker two Databases: Redis and Postgres.
Rename .env.example to .env and adjust configs according you create databases.

### Migrations
Run the following command to run startup migrations.
```bash
adonis migrations:run
```

### Start server
```bash
adonis server --dev 
``` 
