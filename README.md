# React + TypeScript + Vite + Docker

## This is the template for creating a React application with TypeScript, Vite, and Docker

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/kavinda-100/docker-frontend-practice.git
   ```

2. Navigate to the project directory

   ```bash
   cd docker-frontend-practice
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`

## Use Docker

>[!Important]
> You need to have Docker installed on your machine to run the application in a container.

### To run the application using Docker, follow these steps

1. Build the Docker image

   ```bash
   docker build -t react-ts-vite-app .
   ```

2. Run the Docker container

   ```bash
   docker run --name react-ts-vite-container -p 5173:5173 react-ts-vite-app
   ```

3. Open your browser and go to `http://localhost:5173`

## Additional Commands

- To remove the Docker container

   ```bash
   docker rm react-ts-vite-container
   ```

- To remove the Docker image

   ```bash
   docker rmi react-ts-vite-app
   ```
