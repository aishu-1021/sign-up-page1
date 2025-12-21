# Mock Job Simulation Application

## Project Overview

This application simulates a multi-round job interview process for students and job seekers. It includes:

- **Aptitude / Logical Reasoning Round**
- **Technical Round**
- **Interview Round** (AI simulated with detailed analysis)
- **HR Round** (AI simulated with detailed analysis)

Candidates receive emails after each round with pass/fail notifications, detailed feedback, and resources for improvement if they fail.

## Features

- User registration and authentication (JWT-based)
- Multi-round tests with questions and cutoff scoring
- AI-powered interview and HR round analysis via OpenAI API
- Email notifications with detailed performance analysis
- User dashboard to track progress and feedback
- Responsive React frontend with form validation
- Comprehensive backend API with Sequelize and PostgreSQL
- Dockerized for easy deployment and local development
- Unit and integration tests for backend and frontend

---

## Technology Stack

- **Backend:** Node.js, Express, Sequelize ORM, PostgreSQL, OpenAI API, Nodemailer
- **Frontend:** React, React Router, Axios, React Hook Form, Yup validation
- **Testing:** Jest, Supertest, React Testing Library
- **Deployment:** Docker, Docker Compose, Nginx (frontend)

---

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- PostgreSQL (if not using Docker)
- OpenAI API key
- SMTP email account for sending notifications

---

## Environment Configuration

Create a `.env` file in the root with variables as shown in `.env.example`:

