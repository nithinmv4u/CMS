# Customer Management System

This is a simple CMS in which user can login and perform CRUD operations on customer data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)

## Overview

Welcome to the Customer Management System (CMS) project, a comprehensive solution for efficiently managing customer records. This Full Stack Development project seamlessly integrates a robust backend API with a responsive React web application to facilitate seamless CRUD operations on customer data.

## Features

- **Create, Read, Update, Delete (CRUD):** Perform fundamental operations on customer records with ease.
- **Scalable and Secure API:** Designed to handle a substantial number of concurrent requests with a focus on data security.
- **Optimized Database Interactions:** Enhance performance by optimizing interactions with the underlying database.
- **React Components:** A user-friendly React web application with components for listing, adding, updating, and deleting customers.

## Prerequisites

- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

Follow these steps to set up and run the project locally:

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nithinmv4u/CMS.git

2. **Navigate to the Project Directory**
    ```bash
    cd CMS

3. **Create and Activate Virtual Environment**
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\activate

    # Linux/macOS
    python3 -m venv venv
    source venv/bin/activate

4. **Install Backend Dependencies**
    ```bash
    cd backend
    pip install -r requirements.txt

5. **Database Setup**
- Create a PostgreSQL database and update the database configuration in .env.
    ```bash
    python manage.py migrate

### Frontend Setup

1. **Install Frontend Dependencies**
    ```bash
    cd frontend
    npm install

2. **Run the Frontend Development Server**
    ```bash
    cd frontend
    npm start

## API Documentation
### UI API documentation: http://127.0.0.1:8000/api/schema/swagger-ui/

***Note:*** *since using default localhost base url, it is not included in .env*