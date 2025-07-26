# ITP GUIDE 10.1
### Basic Node.js Backend Setup Guide
> **Note:** You are viewing the documentation for the `BE/node` branch. For other guides, please switch to the appropriate branch as described in the main branch's README.

## Prerequisites

- Node.js v20.19.4 ([Download Here](https://nodejs.org/en/blog/release/v20.19.4))
  - Windows 32-bit Installer (.msi)
  - Windows 64-bit Installer (.msi)
  - macOS 64-bit Installer (.pkg)

## Getting Started

### 1. Clone the Repository and Switch Branch

```bash
git clone https://github.com/sahanperera00/ITP-10.1.git
cd ITP-10.1
git checkout BE/node
```

### 2. Install Dependencies

```bash
npm install
```

Note: The `node_modules` directory is not pushed to the remote repository. You'll need to run this command after cloning to install all dependencies locally.

### 3. Configure Environment

1. Create a `.env` file in the root directory (this file will not be pushed to the remote repository for security reasons)
2. Add the following environment variables:
   ```
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   ```
   Note: You can change the PORT number to any available port on your system (e.g., 3000, 8000, etc.)

### 4. Database Setup

1. Create a MongoDB Atlas account if you don't have one
2. Create a new cluster (select the FREE tier option)
3. Create a database user with read/write permissions
4. Get your MongoDB connection string from Atlas
5. Replace `your_mongodb_connection_string` in your `.env` file with the actual connection string

The database configuration can be found in `config/database.js`.

### 5. Start the Server

For development:
```bash
npm run dev
```

The server should now be running on `http://localhost:5000`

### 6. Health Check

Access `http://localhost:5000/health` to verify if the server is running properly. The health check endpoint returns:
```json
{
  "status": "UP",
  "service": "ITP-10.1 API",
  "timestamp": "current-timestamp"
}
```
This helps you confirm that the API server is up and running.

## Final Project Structure
After following all setup instructions, your local machine should have this structure:

```
├── config/
│   └── database.js
├── controller/
│   ├── ItemController.js
│   └── UserController.js
├── model/
│   ├── Item.js
│   └── User.js
├── node_modules/         # Created after npm install (not pushed to remote)
├── routes/
│   ├── ItemRoutes.js
│   └── UserRoutes.js
├── service/
│   ├── ItemService.js
│   └── UserService.js
├── .env                 # Created manually (not pushed to remote)
├── .gitignore
├── index.js
├── package-lock.json    # Created after npm install
└── package.json
```

## API Endpoints

- User Routes: `/api/users`
- Item Routes: `/api/items`
- Health Check: `/health`

## Recommendations for Advanced Implementation

This setup provides a basic foundation for a Node.js backend. Here are some recommendations to make it more robust and production-ready:

1. Authentication & Authorization
   - Implement JWT authentication
   - Add role-based access control (RBAC)
   - Set up refresh token mechanism
   - Add rate limiting for API endpoints

2. Error Handling & Logging
   - Implement a global error handling middleware
   - Add request logging with Winston or Morgan
   - Implement request validation using Joi or express-validator

3. Security Enhancements
   - Implement helmet.js for security headers
   - Add input sanitization

4. Development & DevOps
   - Add unit tests (Jest, Mocha)
   - Setup CI/CD pipeline
   - Add API documentation (Swagger/OpenAPI)
   - Implement Docker containerization

...and more. These improvements will make your backend more scalable, secure, and maintainable.

## Troubleshooting

If you encounter any issues:

1. Make sure you're using Node.js version 20.19.4
2. Check if all dependencies are installed correctly
3. Verify your database connection
4. Ensure all environment variables are set correctly in your `.env` file