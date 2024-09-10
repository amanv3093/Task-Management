# Task Management Dashboard
This project is a responsive Task Management Dashboard, allowing users to manage their tasks with features such as task creation, editing, deletion, filtering, and theme toggling. Tasks and preferences are persisted using localStorage.

## Hosted-Link : [https://task-management-psi-sepia.vercel.app/]
## Features
 Core Features
- Add Task: Users can add tasks with a title, description, and due date.
- Edit Task: Users can update the task details and mark tasks as complete or incomplete.
- Delete Task: A task can be removed from the list after confirming deletion.
- Filter Tasks: Filter tasks by "All," "Completed," or "Incomplete."
- Search Functionality: Real-time search to filter tasks by title.
- Dark/Light Mode: Toggle between dark and light themes, saved in localStorage.
- Data Persistence: Tasks and the theme preference are saved in localStorage and persist between page reloads.
- Date Validation: Prevent users from selecting past dates when adding or editing tasks.
  
## UI Requirements
- Responsive Design: Optimized for both mobile and desktop views.
- Modal: For adding and editing tasks.
- Empty States: Displays "No tasks found" when no tasks match the criteria.
- Confirmation Modal: Ensures the user confirms before deleting a task.
  
## Tech Stack
- React.js: For building the user interface.
- Context API: For state management across components.
- localStorage: For task and theme persistence.
- Tailwind CSS: For styling and responsiveness.
Getting Started
Prerequisites
Make sure you have the following installed:

## Getting Started
### Prerequisites
Make sure you have the following installed:
- Node.js: v14 or higher
- npm or yarn
 
### Installation
1. Clone the repository:
 ```Users 
 https://github.com/amanv3093/Task-Management.git
cd Task-Management
   ```
2. Install dependencies::
 ```Users 
npm install
```
3. Start the development server:
 ```Users 
 npm start
   ```
