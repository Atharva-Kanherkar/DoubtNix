 # DoubtNix Web App API

## Overview
DoubtNix is an API powering a coding doubt-solving web application, facilitating users to post coding-related queries, access solutions, and engage within a community of learners and educators.

## Features
- **User Authentication:** Secure sign-up and login functionality.
- **Doubt Posting:** Users can post coding queries, including code snippets and images.
- **Role-based Access:** Differentiates between student and teacher roles, enabling solutions for teachers and doubts for students. Also, allows upvoting/downvoting of solutions.
- **Tagging and Categorization:** Ability to add tags (e.g., languages, frameworks) for doubt organization and search.
- **Time Tracking:** Displays upload duration and tracks views.
- **Bookmarks:** Users can bookmark doubts for later reference.
- **Secure Authentication:** Implements JWT-based authentication for secure API access.

 ### Routes and Endpoints

- **`/teacher`:** 
  Route accessible only to teachers, providing a specialized interface.

- **`/student`:** 
  Route dedicated for students accessing the platform.

- **`/api/auth`:** 
  Endpoint for authentication and user verification.

- **`/api/doubt`:** 
  Endpoint for doubt submission by students.

- **`/api/reply`:** 
  Endpoint for teachers to respond to student doubts.


## Technologies Used
- **Node.js & Express:** Backend server framework.
- **MongoDB:** Database for storing user data, doubts, and solutions.
- **JWT:** JSON Web Tokens for user authentication.
- **Bcrypt:** Password hashing for user security.

## Usage
Developers can integrate this API into their web or mobile applications for doubt-solving functionalities. For detailed API documentation outlining endpoints, request formats, and responses, please refer to [Link will be added soon].

## Contributions
Contributions and suggestions for improvements are welcome! Fork the repository and submit pull requests. 
*Still in development!* 
