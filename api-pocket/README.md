# Next Level Week 17 - Back-End Application

This repository contains the code for building the back-end of the application developed during the 17th edition of the Next Level Week, held from September 9 to 11, 2024. In this workshop, we explored various technologies to create the back-end of an application using Node.js and other modern tools.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Fastify**: A fast and efficient framework for building APIs.
- **Zod**: A schema validation library.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.
- **Drizzle ORM**: ORM for database management.
- **PostgreSQL**: Relational database.

## Project Context

During the workshop, we developed the back-end for an application that allows for goal management. Key features include:

- **Create Goals**: Define goals to be achieved.
- **Pending Goals**: View goals that have not yet been completed.
- **Complete Goals**: Mark goals as completed.

## Setup and Execution Instructions

### Prerequisites

Ensure the following are installed:

- Docker
- Docker Compose
- Node.js (for local development and execution)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Frankdias92/NLW-Pocket
   cd /api-pocket
   ```

2. **Create a `.env` File or rename `.env.exemple` to `.env`**

   Create a `.env` file at the root of the project and add the following variables:

   ```env
   APP_PORT=3333

   POSTGRES_HOST=db
   POSTGRES_PORT=5432
   POSTGRES_USER=docker
   POSTGRES_PASSWORD=docker
   POSTGRES_DB=inorbit
   DATABASE_URL=postgresql://docker:docker@db:5432/inorbit
   ```

### Dockerfile

The Dockerfile is used to build the Docker image for the application. It performs the following steps:

1. **Environment Setup**

   ```Dockerfile
   FROM node:18.20.4-alpine3.20

   WORKDIR /app

   COPY package*.json ./
   COPY scripts/init.sh /app/scripts/init.sh

   RUN chmod +x /app/scripts/init.sh
   RUN npm install

   COPY . .

   EXPOSE 3333

   CMD ["sh", "-c", "./scripts/init.sh"]
   ```

   - **Base Image**: Uses `node:18.20.4-alpine3.20` as the base image.
   - **Working Directory**: Sets the working directory to `/app`.
   - **Copy Files**: Copies `package*.json` and the `init.sh` script.
   - **Permissions**: Changes the permissions of the `init.sh` script to be executable.
   - **Install Dependencies**: Runs `npm install` to install dependencies.
   - **Copy Remaining Code**: Copies the rest of the files into the container.
   - **Expose Port**: Exposes port 3333.
   - **Start Command**: Runs the `init.sh` script to start the application.

### Docker Compose

Docker Compose is used to orchestrate the database and application containers.

1. **`docker-compose.yml` File**

   ```yaml
   name: pocket-js-server

   services:
     db:
       image: postgres:10.22-alpine3.16
       ports:
         - "5432:5432"
       environment:
         - POSTGRES_USER=docker
         - POSTGRES_PASSWORD=docker
         - POSTGRES_DB=inorbit
       volumes:
         - pgdata:/var/lib/postgresql/data
       networks:
         - pocket_net

     app:
       build:
         context: .
       environment:
         - DATABASE_URL=postgresql://docker:docker@db:5432/inorbit
       ports:
         - "3333:3333"
       depends_on:
         - db
       volumes:
         - .:/app
       command: ["sh", "-c", "./scripts/init.sh"]
       networks:
         - pocket_net

   volumes:
     pgdata:

   networks:
     pocket_net:
       driver: bridge
   ```

   - **`db` Service**: Configures the PostgreSQL container.
   - **`app` Service**: Builds and runs the application container, executing the `init.sh` script.

### Execution

1. **Build and Run Containers**

   Use Docker Compose to build and run the containers:

   ```bash
   docker-compose up --build
   ```

   This will start the PostgreSQL database and the Node.js application.

2. **Manual Script Execution**

   If you need to run the script manually, use the following command:

   ```bash
   docker-compose exec app ./scripts/init.sh
   ```

### Scripts

- **`scripts/init.sh`**: Script to apply migrations, populate the database with initial data, and start the server. The script waits until the database is available before applying migrations and running seeding.

### Commands

- **`npm run migration`**: Applies database migrations.
- **`npm run seed`**: Populates the database with initial data.
- **`npm run dev`**: Starts the development server.
