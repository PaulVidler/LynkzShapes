# Lynkz - Coding Challenge by Paul Vidler

This project is a coding challenge submission by Paul Vidler for Lynkz. It's a React web application with a backend API built using .NET 7.

## Description

The project is a web application that demonstrates various shapes and their dimensions by asking in a common language direction to build the shapes (in pixels). It includes a frontend built with React, a .NET 7 backend API, and NUnit tests for the backend.

The frontend is bootstrapped with Create React App and provides an interactive interface for creating and visualizing shapes. It is also using React-Bootstrap for basic styling. The project specifies Angular to be used on the front end, but Lauren is aware I have not used it beofre, but am willing to learn it, and instead to write it in React.
I stole your logo and colour scheme from your website, I hope that's ok. Sometimes it's the little things....

The backend API is built using ASP.NET Core and utilizes the Microsoft.AspNetCore.OpenAPI and Swashbuckle.AspNetCore packages to generate a Swagger API documentation.

## Features

- Create and visualize various shapes with dimensions.
- Swagger API documentation available at [API Documentation](#swagger-api-documentation).
- Factory pattern in back end for newing up of class instances
- Unit tests - Basic due to time limitations, but included.
- No front end tests as I am out of time.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- Node.js and npm (or Yarn)
- Visual Studio (for running NUnit tests)

## Installation

To set up and run the frontend React app:

Build project, ensure dependancies are installed and Start backend API in .NET

```bash
cd frontend
npm install   # or yarn install
npm start     # or yarn start
