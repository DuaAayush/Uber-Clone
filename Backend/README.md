# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user in the system. It accepts user details, validates the input, and creates a new user record in the database.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

- `username` (string, required): The username of the new user.
- `email` (string, required): The email address of the new user.
- `password` (string, required): The password for the new user.

Example:
```json
{
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

### Response

#### Success Response
- **Status Code**: `201 Created`
- **Body**:
    ```json
    {
        "message": "User registered successfully",
        "userId": "unique_user_id"
    }
    ```

#### Error Responses
- **Status Code**: `400 Bad Request`
    - **Reason**: Missing or invalid input data.
    - **Body**:
        ```json
        {
            "error": "Invalid input data"
        }
        ```

- **Status Code**: `409 Conflict`
    - **Reason**: Email or username already exists.
    - **Body**:
        ```json
        {
            "error": "Email or username already exists"
        }
        ```

### Files Involved

- **Controllers**: Handles the request and response logic.
    - `controllers/userController.js`
- **Database**: Manages the database connection and queries.
    - `db/database.js`
- **Models**: Defines the user schema and model.
    - `models/userModel.js`
- **Routes**: Defines the endpoint and maps it to the controller.
    - `routes/userRoutes.js`
- **Services**: Contains the business logic for user registration.
    - `services/userService.js`

### Example Usage
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "securePassword123"
}'
/**
 * @api {post} /user/login User Login
 * @apiName UserLogin
 * @apiGroup User
 * 
 * @apiDescription This endpoint allows a user to log in by providing their credentials. 
 * Upon successful authentication, a token is returned which can be used for subsequent requests.
 * 
 * @apiParam {String} username The username of the user.
 * @apiParam {String} password The password of the user.
 * 
 * @apiSuccess {String} token The authentication token.
 * @apiSuccess {String} message Success message.
 * 
 * @apiError {String} message Error message.
 * @apiError {String} error Detailed error information.
 * 
 * @apiExample {json} Request-Example:
 *     {
 *       "username": "exampleUser",
 *       "password": "examplePassword"
 *     }
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "abcdef123456",
 *       "message": "Login successful"
 *     }
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "Invalid credentials",
 *       "error": "Authentication failed"
 *     }
 */