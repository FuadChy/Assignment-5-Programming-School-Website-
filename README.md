# Programming School

Programming School is a simple and interactive web application for exploring different technologies and building your own development stack.

Users can explore technologies such as React, JavaScript, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, Docker, and more. They can also add technologies to their personal stack and remove them whenever they want.

## Technologies Used

This project was built using:

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON 

## Features

### 1. Explore Technologies

Browse different technologies and see useful information about them, including:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge

### 2. Build Your Own Stack

Users can add technologies to their personal development stack.

The application also prevents the same technology from being added more than once.

Users can also remove individual technologies or clear the entire stack.

### 3. Responsive Design

The website is responsive and works across different screen sizes, including:

- Desktop
- Tablet
- Mobile

The layout adjusts automatically to provide a better experience on smaller screens.



<!-- Question & Answers -->

1. What is JSX, and why is it used in React?
   JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write.

2. What is the difference between props and state?
   Props pass data between components, while state stores data that can change.

3. What does the useState hook do, and where did you use it in this project?
   useState stores and updates data in a component. I used it to manage the technology list, loading state, and my stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   useEffect runs code after rendering. I used it to load the JSON data when the component starts.

5. Why does every item in a .map() list need a unique key prop?
   The key helps React identify each item and update the list properly.

6. What is conditional rendering?
   Conditional rendering means showing something based on a condition.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   A parent passes data using props. A child can send something back by calling a function passed through props.
