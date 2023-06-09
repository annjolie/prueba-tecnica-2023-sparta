﻿# Tecnical-test-2023-sparta

# ToDo Tasks Website

This is a web application for managing day-to-day tasks. It allows users to create, update, mark as done, and remove tasks after signing in through a login page. The website is built using React with Next.js, Storybook, Jest, and TypeScript.

## Installation

To install the dependencies, run the following command:

`yarn`

## Usage

To start the development server, run the following command:

`yarn dev`

This will start the server on http://localhost:3000.

To run the tests, run the following command:

`yarn test`

To start Storybook, run the following command:

`yarn storybook`

This will start the Storybook server on http://localhost:6006.

## Authentication

The authentication mechanism used for this website is a simple user/password login page. Once the user logs in, a token is generated and saved in the Redux store. This token is used to persist the login between browser sessions.
