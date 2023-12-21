 # DoubtNix Web App API

## Overview
DoubtNix is an API powering a coding doubt-solving web application, facilitating users to post coding-related queries, access solutions, and engage within a community of learners and educators.

## Features
- **Make Mentor Groups::** Teachers (just a name for admins) can create groups of mentors to help them solve doubts. Theey can be assigned a mentor, and they wil ask doubts to their mentor only. A close nit relationship between students and mentors will be created.
- **User Authentication:** Secure sign-up and login functionality.
- **Doubt Posting:** Users can post coding queries, including code snippets and images.
- **Role-based Access:** Differentiates between student ,  teacher and mentor roles, enabling solutions for teachers and doubts for students. Also, allows upvoting/downvoting of solutions. Mentors are also students, which just did execptionally well so that they can teach thier juniors. 
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
- **`/api/mentor`:** 
  Endpoint for mentors to respond to student doubts, create solutions, teachers can also upgrade normal students to mentors through this endpoint.
  


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
