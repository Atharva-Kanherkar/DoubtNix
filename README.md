 # DoubtNix Web App API

## Overview
DoubtNix is an API powering a coding doubt-solving web application, facilitating users to post coding-related queries, access solutions, and engage within a community of learners and educators.

### Features
- **Make Mentor Groups:** Teachers (admins) can create mentor groups for personalized doubt-solving interactions, fostering strong mentor-student relationships.
- **User Authentication:** Secure sign-up and login functionality.
- **Doubt Posting:** Users can post coding queries, including code snippets and images.
- **Role-based Access:** Categorizes users as students, teachers, or mentors, enabling specific solutions and doubts. Allows upvoting/downvoting of solutions.
- **Tagging and Categorization:** Organizes doubts using tags (e.g., languages, frameworks) for efficient search.
- **Time Tracking:** Displays upload duration and tracks views.
- **Bookmarks:** Users can save doubts for future reference.
- **Secure Authentication:** Implements JWT-based authentication for secure API access.

### Routes and Endpoints
- **`/teacher`:** Route for teachers, providing a specialized interface.
- **`/student`:** Route dedicated to students accessing the platform.
- **`/api/auth`:** Endpoint for authentication and user verification.
- **`/api/doubt`:** Endpoint for doubt submission by students.
- **`/api/reply`:** Endpoint for teachers to respond to student doubts.
- **`/api/mentor`:** Endpoint for mentors to respond to student doubts and manage mentor roles.

## Technologies Used
- **Node.js & Express:** Backend server framework.
- **MongoDB:** Database for user data, doubts, and solutions.
- **JWT:** JSON Web Tokens for user authentication.
- **Bcrypt:** Password hashing for user security.

## Usage
Developers can integrate this API into their web or mobile applications for doubt-solving functionalities. For detailed API documentation outlining endpoints, request formats, and responses, please refer to [Link will be added soon].

---

## Contributions
Contributions and suggestions for improvements are welcome! Fork the repository and submit pull requests. *Still in development!*

## Future Plans
- **Resource Sharing:** Allow mentors to share educational resources directly through the platform.
- **Progress Tracking:** Enable students to track their progress over time with goal-setting and milestone tracking.
- **Calendar and Scheduling:** Integrate a calendar system for easy mentoring session scheduling.
- **Task Assignment and Management:** Enable mentors to assign and track student tasks or projects.
- **Feedback and Ratings:** Implement a system for student feedback and mentor ratings.
- **Leetcode Improvement:** Today's leetcode is so unorganised. You go to leetcode, you try to solve problems, there's thousands of problems for one single topic. Its jarring, and the 1000 problems are multi topic too. You just get frustrated and leave leetcode. Wait, doubtnix is here: We want to make it easier for people to solve problems, and also make it more fun.
We aim to simplify the process, offering a curated selection of problems that are structured by topic, ensuring a smoother learning journey.

 

---

  Contributions and feedback are welcomed and appreciated! 🚀✨
