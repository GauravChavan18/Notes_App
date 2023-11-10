# React Notes App

A simple note-taking web application built with ReactJS, allowing users to organize their notes into different groups. The application provides a user-friendly interface for creating, managing, and persisting notes locally.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

## Features

1. **Create and Manage Groups**: Users can create custom groups for organizing their notes. The application supports a popup interface for creating new groups, ensuring a seamless user experience.

2. **Add Notes to Groups**: Users can add notes to specific groups, making it easy to categorize and find related information. The application supports dynamic loading of notes based on the selected group.

3. **Save Notes**: Notes can be saved either by pressing the Enter key or by clicking the Save button. All notes and group information persist in the local storage, ensuring data persistence across page reloads.

4. **Metadata Tracking**: The application captures metadata such as the date and time when a note is saved and last updated, providing users with additional context about their notes.
5. **Mobile Responsiveness:**: Ensures a seamless and responsive user experience on various devices, from desktops to mobiles.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/react-notes-app.git`
2. Navigate to the project directory: `cd react-notes-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

The application will be accessible at `http://localhost:3000` by default.

## Technologies Used

- ReactJS: A JavaScript library for building user interfaces.
- HTML/CSS: Basic styling and structure for the application.
- Local Storage: Used for persisting notes and group information on the client-side.
- Mobile-First Design: Ensures responsiveness across devices.
