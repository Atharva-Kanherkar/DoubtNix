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


## Future Plans

-**Resource Sharing:** Allow mentors to share educational resources, articles, videos, or recommended reading materials with their students directly through the platform.
-**Progress Tracking:** Implement a system where students can track their progress over time. This could include goal-setting, milestone tracking, or even visualization tools like charts or graphs.
-**Calendar and Scheduling:** Integrate a calendar system that enables easy scheduling of mentoring sessions or meetings. Notifications and reminders could also be included.
-**Task Assignment and Management:** Enable mentors to assign tasks or projects to students and track their completion within the platform. Students can submit their work, and mentors can provide feedback.
-**Feedback and Ratings:** Implement a system where students can provide feedback on mentoring sessions, and mentors can rate student progress. This can help improve the mentoring experience.
-**Leetcode, But better:** Today's leetcode is so unorganised. You go to leetcode, you try to solve problems, there's thousands of problems for one single topic. Its jarring, and the 1000 problems are multi topic too. You just get frustrated and leave leetcode. Wait, doubtnix is here: We want to make it easier for people to solve problems, and also make it more fun.
We aim to simplify the process, offering a curated selection of problems that are structured by topic, ensuring a smoother learning journey.
 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE