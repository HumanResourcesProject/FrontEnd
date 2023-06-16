# Human Resources Management System

This repository contains the source code for a comprehensive Human Resources Management System (HRMS). The project focuses on developing a robust microservice architecture to effectively manage various HR processes and enhance the overall efficiency of HR management.

## Backend

The backend components of the HRMS system are built using Spring Frameworks and utilize various technologies for data storage, messaging, and deployment.

### Technologies Used

- Spring Frameworks (Spring Boot, Spring Data, etc.)
- Gradle (Dependency management and build tool)
- PostgreSQL (Relational database for data storage)
- MongoDB (NoSQL database for data storage)
- RabbitMQ (Message broker for asynchronous communication)
- Zipkin (Distributed tracing and performance monitoring)

### Prerequisites

Before running the HRMS backend services, ensure that you have the following prerequisites installed:

- Java Development Kit (JDK) version X or above.
- Gradle (latest version recommended)
- PostgreSQL database
- MongoDB database
- RabbitMQ message broker

### Getting Started

To get started with the HRMS backend services, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/HumanResourcesProject/HumanResourcesProject.git`.

2. Navigate to the project directory: `cd HumanResourcesProject/HumanResourcesProject`.

3. Configure the backend components:
   - Open the `src/main/resources/application.properties` file and update the necessary configuration settings for database connections, RabbitMQ, etc.

4. Build and run the backend services:
   - Run `gradle bootRun` to build and start each microservice.

## Frontend

The frontend of the HRMS system is built using React and leverages Axios for making HTTP requests to the backend APIs.

### Technologies Used

- React (JavaScript library for building user interfaces)
- Axios (HTTP client for making API requests)

### Prerequisites

Before running the HRMS frontend, ensure that you have the following prerequisites installed:

- Node.js (with npm)

### Getting Started

To get started with the HRMS frontend, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/HumanResourcesProject/FrontEnd.git`.

2. Navigate to the project directory: `cd HumanResourcesProject/FrontEnd`.

3. Configure the frontend components:
   - Open the `src/config.js` file and set the appropriate backend API endpoints.

4. Install the dependencies:
   - Run `npm install` to install the necessary packages.

5. Start the frontend development server:
   - Run `npm start` to start the development server.

6. Access the HRMS system by visiting `http://localhost:3000` in your web browser.

## Contribution Guidelines

If you would like to contribute to the HRMS project, please follow these guidelines:

1. Fork the repository and create your branch: `git checkout -b feature/my-feature`.

2. Commit your changes: `git commit -am 'Add some feature'`.

3. Push to the branch: `git push origin feature/my-feature`.

4. Submit a pull request detailing your changes and their purpose.

## Contact

For any inquiries or questions, feel free to reach out to the project team:

- Buse Cankaya - [LinkedIn](https://linkedin.com/in/buse-cankaya/)
- Email: cankayabuse94@gmail.com

We appreciate your interest and contributions to the HRMS project!

