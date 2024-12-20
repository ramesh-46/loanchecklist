﻿
README: Loan Checklist System
Overview
The Loan Checklist System is a simple web application that allows users to input a unique application ID to check whether the loan application meets certain predefined criteria. The system fetches data based on the application ID from an API and evaluates it against rules like Valuation Fee Paid, UK Residency, Risk Rating, and Loan-to-Value (LTV) ratio. These rules are used to generate a checklist that indicates whether the application passes or fails each rule.

This system consists of two primary parts: a Backend (Node.js server) that communicates with an external API to fetch loan data, and a Frontend (HTML, CSS, and JavaScript) where users interact with the system.

Features
User Input: Users can enter an application ID.
Data Fetching: The application sends the application ID to the backend, which fetches the relevant loan data from an external API.
Loan Criteria Evaluation: The data is evaluated against predefined criteria:
Valuation Fee Paid: Checks if the valuation fee has been paid.
UK Resident: Confirms if the applicant is a UK resident.
Risk Rating Medium: Verifies that the risk rating is set to "Medium".
LTV Below 60%: Ensures that the Loan-to-Value ratio is below 60%.
Results Display: The results are shown in a simple checklist format, indicating whether each rule is passed or failed.
UI/UX: The interface is designed to be user-friendly and visually appealing, with modern UI elements and animations.
Project Structure
The project consists of the following key directories and files:

less
Copy code
loanchecklistsysytem/
│
├── backend/
│   ├── server.js         // Main server file for API routing and logic
│
└── frontend/
    ├── index.html        // HTML file with basic structure and user input
    ├── app.js            // JavaScript for handling API requests and dynamic page updates
    ├── styles.css        // CSS file for styling the page and user interface
    ├── .gitignore        // Specifies files to be ignored by Git
    └── README.md         // Project documentation
Backend: server.js
The backend is built using Node.js and Express to handle HTTP requests. The backend listens for a GET request with the application ID and then fetches data from an external API. Based on the retrieved data, the backend evaluates the loan application against the following rules:

Valuation Fee Paid: Checks if the isValuationFeePaid field is true.
UK Resident: Verifies if the isUkResident field is true.
Risk Rating: Confirms that the riskRating is equal to "Medium".
LTV Below 60%: Calculates the Loan-to-Value ratio and ensures that it is below 60%.
Once the evaluation is complete, the backend sends a JSON response containing the results to the frontend.

Frontend
The frontend is designed using HTML, CSS, and JavaScript. It includes the following components:

index.html
This is the main HTML structure for the Loan Checklist System. It contains:

An input field where users can enter the Application ID.
A button labeled "Check Checklist" that triggers the evaluation.
A div element to display the results of the checklist evaluation once the data is fetched and processed.
app.js
This JavaScript file handles the interaction between the user interface and the backend:

When the user submits an application ID, the frontend sends a GET request to the backend.
Upon receiving the results, the script dynamically updates the HTML to show the checklist results.
Each rule is displayed with either a "Passed" or "Failed" status, depending on the evaluation.
styles.css
This file defines the styles for the frontend interface:

It uses a gradient background to create a visually appealing backdrop.
The input field and button are styled with modern design patterns, including focus effects and hover states.
The results section is styled with padding, borders, and conditional coloring to indicate the status of each rule (passed or failed).
How It Works
User Input: The user enters an Application ID in the input field and clicks the "Check Checklist" button.
Request to Backend: The frontend sends the application ID to the backend via a GET request.
Data Fetching and Evaluation: The backend fetches the loan data using the provided application ID, evaluates it against the predefined checklist rules, and returns the results.
Displaying Results: The frontend dynamically updates the page to show the evaluation results. Each rule is marked as Passed or Failed based on the evaluation.
Installation
Prerequisites
Before setting up the project, ensure that you have the following installed:

Node.js: The backend is built with Node.js. Download it from Node.js official website.
npm: npm comes bundled with Node.js, and it is used to manage dependencies.
Setting Up the Backend
Clone the project repository or download it to your local machine.
Navigate to the backend/ directory and install the required dependencies by running:
Copy code
npm install
Start the backend server:
Copy code
node server.js
The backend server will now be running at http://localhost:3000.
Setting Up the Frontend
Navigate to the frontend/ directory.
Open the index.html file in a web browser.
The frontend will now be running, and you can interact with the Loan Checklist System.
Usage
Enter a valid Application ID in the input field.
Click the "Check Checklist" button.
The system will fetch the loan application data from the backend and evaluate it against the defined rules.
The results will be displayed on the page, showing whether each rule passed or failed.
Additional Features
Dynamic Results: As users interact with the system, the results are updated in real-time based on the fetched data.
Responsive Design: The frontend is designed to be fully responsive, making it accessible on both desktop and mobile devices.
Future Enhancements
Authentication: Adding user authentication to secure access to loan data.
More Evaluation Criteria: Additional rules can be implemented to evaluate other aspects of the loan application.
Improved Error Handling: Enhance error handling for situations where the external API is unavailable or returns an invalid response.
Database Integration: Storing loan applications and their evaluations in a database for easier management.
Conclusion
The Loan Checklist System is a simple yet powerful tool for evaluating loan applications based on predefined criteria. It integrates a Node.js backend to fetch and process loan data, while the frontend provides a user-friendly interface to interact with the system. The project can be expanded with more features, such as authentication, additional evaluation criteria, and database integration.

License
This project is licensed under the MIT License. See the LICENSE file for more details.










