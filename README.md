# Smart Collateral Backend

Smart Collateral is a backend service built with Node.js and Express.js, designed to provide a secure and efficient API for managing user authentication, historical data, and predictive analytics. The project integrates PostgreSQL as the database and includes features such as JWT-based authentication, rate limiting, and input sanitization for security.

## Features

- **User Authentication**: Secure login and registration using JWT and bcrypt for password hashing.
- **Predictive Analytics**: Provides insights using external APIs.
- **Data Security**: Implements security middleware like helmet, xss sanitizer, and compression.
- **REST API Documentation**: Uses Swagger for API documentation.
- **Database Integration**: PostgreSQL with Sequelize ORM.
- **Docker Support**: Deployable with Docker and Docker Compose.
- **Rate Limiting**: Prevents abuse by limiting request rates.

## Project Structure

```
smart-collateral-be/
├── src/
│   ├── config/              # Configuration files
│   ├── controllers/         # Express route controllers
│   ├── middlewares/         # Middleware functions
│   ├── models/              # Database models
│   ├── repositories/        # Data access layer
│   ├── routes/              # API route handlers
│   ├── services/            # Business logic layer
│   ├── utils/               # Utility functions
│   ├── validators/          # Input validation schemas
│   ├── swaggerConfig.js     # Swagger API documentation setup
│   ├── server.js            # Entry point
│   ├── container.js         # Dependency injection container
├── .env.example             # Environment variables example
├── docker-compose.yaml      # Docker Compose setup
├── package.json             # Project dependencies
├── README.md                # Project documentation
└── swagger.json             # OpenAPI Specification
```

## Installation

### Prerequisites

- Node.js (>= 16.x)
- Docker & Docker Compose (optional for containerized setup)

### Steps

1. Clone the repository:
   ```sh
   git clone git@github.com:andrawicaksono/smart-collateral-be.git
   cd smart-collateral-be
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Copy and configure environment variables:
   ```sh
   cp .env.example .env
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Start with Docker:
   ```sh
   docker-compose up --build
   ```

## API Documentation

After starting the server, access Swagger documentation at:

```
http://localhost:3000/api/v1/swagger
```

## License

This project is licensed under the ISC License.

## Author

**Andra Wicaksono**  
GitHub: [@andrawicaksono](https://github.com/andrawicaksono)
