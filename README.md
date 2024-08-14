# Word Memory

## Description

Word Memory is a web-based game where users match randomly paired English and French words. The goal is to correctly match as many pairs as possible and achieve the highest score. The game also includes a ranking system to track user performance.

## Technologies Used

- **Next.js**.
- **Tailwind CSS**.
- **Prisma**.

## Prerequisite

- **Node.js:** Download and install Node.js, which includes npm, from [nodejs.org](https://nodejs.org/).

## Setup Instructions

Follow these steps to set up and run the project:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/khuu94/word-memory.git
    cd word-memory
    ```

2. **Create a `.env` file:**

    The database server has already been configured on Vercel using PostgreSQL. The `.env` file contains the necessary connection details for the database.

    In the project root directory, create a `.env` file and add the following environment variables:

    ```bash
    POSTGRES_URL="postgres://default:oc3HrpwjD2TK@ep-frosty-voice-a1m1kvk2-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
    POSTGRES_PRISMA_URL="postgres://default:oc3HrpwjD2TK@ep-frosty-voice-a1m1kvk2-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
    POSTGRES_URL_NO_SSL="postgres://default:oc3HrpwjD2TK@ep-frosty-voice-a1m1kvk2-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb"
    POSTGRES_URL_NON_POOLING="postgres://default:oc3HrpwjD2TK@ep-frosty-voice-a1m1kvk2.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
    POSTGRES_USER="default"
    POSTGRES_HOST="ep-frosty-voice-a1m1kvk2-pooler.ap-southeast-1.aws.neon.tech"
    POSTGRES_PASSWORD="oc3HrpwjD2TK"
    POSTGRES_DATABASE="verceldb"
    ```

3. **Install Dependencies:**

    Run the following command to install the necessary npm packages:

    ```bash
    npm install
    ```

4. **Run the Development Server:**

    Start the development server with:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Demo

Check out the live demo of the application here: [Word Memory Demo](https://word-memory-gilt.vercel.app/)

The project is deployed on Vercel, and it uses Prisma to manage the database connected to PostgreSQL on Vercel Database.
