# **Twitter Backend System**

This project is a Twitter backend system built using **Node.js**, **Express**, **MongoDB**, and **AWS S3**. It includes authentication using **Passport.js**, a clean layered architecture, and multiple features like creating tweets, nested comments, likes, and CRUD APIs. The system is scalable, secure, and optimized for performance.

---

## **Features**

- **Tweet Management**
  - Create, read, update, and delete tweets.
  - Like/Unlike tweets with a toggling feature.
  - Nested comments: Add comments on tweets and replies to comments.

- **Authentication**
  - Secure authentication implemented using **Passport.js**.
  - Token-based authentication for session management.

- **Image Upload**
  - Used **AWS S3** to handle image uploads for user profiles and tweets.
  - Secure access with proper permissions and URLs for uploaded images.

- **Layered Architecture**
  - Clean architecture with **Repository, Service, Controller, and Model layers** for scalability and maintainability.
  - Ensures separation of concerns and simplifies testing.

- **Database Design**
  - Optimized schema design in **MongoDB** for handling users, tweets, comments, and likes.
  - Efficient relationships for nested data like comments and likes.

- **CRUD APIs**
  - Built robust and RESTful APIs for managing all entities (users, tweets, comments, etc.).
  - Endpoints are secured and validated.

- **Scalability and Maintainability**
  - Modular code structure to easily integrate new features and adapt to future requirements.

---

## **Tech Stack**

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database for storing users, tweets, comments, and likes.

### Authentication
- **Passport.js**: Secure authentication.

### Cloud Services
- **AWS S3**: For image uploads and secure storage.

### Additional Tools
- **Postman**: For API testing.
- **Mongoose**: ODM for MongoDB.
- **npm**: For managing dependencies.

---

## **System Architecture**

1. **Controller Layer**:
   - Handles HTTP requests and responses.
   - Orchestrates calls to service layer.

2. **Service Layer**:
   - Contains business logic for application features.
   - Communicates with the repository layer.

3. **Repository Layer**:
   - Interfaces with the database.
   - Abstracts the MongoDB queries for scalability and reusability.

4. **Model Layer**:
   - Defines the MongoDB schemas for entities like users, tweets, comments, and likes.

---



## **Benefits of the Architecture**

1. **Scalability**:
   - Separation of concerns allows for adding new features or scaling services without disrupting the existing system.
   
2. **Maintainability**:
   - Layered design simplifies debugging and makes the codebase more readable and testable.

3. **Security**:
   - Authentication with Passport.js ensures secure access to APIs.
   - AWS S3 permissions protect image data.

4. **Performance**:
   - Optimized queries in the repository layer ensure efficient data handling.

---

## **How to Run Locally**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YourUsername/YourRepository.git
   cd YourRepository
   npm install


   Set Up Environment Variables Create a .env file in the root directory and configure the following:
PORT=3000
MONGO_URI=your_mongodb_connection_string
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
JWT_SECRET=your_jwt_secret


npm start
```