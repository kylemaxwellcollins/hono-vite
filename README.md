# Hono Vite Prismic Boilerplate

## Overview

The intent of this project is to provide a robust boilerplate for web development, utilizing basic HTML, CSS/SCSS, and Vanilla JavaScript/TypeScript. It leverages the power of JSX syntax for rendering HTML templates. The project aims to streamline the development process and give familiarity to developers who are accustomed to working with React without the need for a large framework.

## Features

1. **JSX for HTML Templates:**

   - This project embraces JSX syntax for rendering HTML templates, providing a more expressive and dynamic way to create user interfaces.

2. **Hono Backend Framework:**

   - Integrates the Hono backend framework to handle server-side logic, allowing for efficient communication between the frontend and backend components.

3. **Vite/Rollup Build System:**

   - Utilizes the Vite or Rollup build system to enhance the development workflow, ensuring faster builds and efficient bundling of assets for production.

4. **Prismic Headless CMS Integration:**
   - Incorporates Prismic headless CMS for content management, enabling seamless content creation and updates while maintaining a flexible and decoupled frontend.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm

### Installation

1.  Clone the repo

    ```sh
    git clone https://github.com/kylemaxwellcollins/hono-vite.git

    ```

2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a .env file in the root directory and add the  
    following environment variables:

    ```
    PRISMIC_REPOSITORY_NAME=
    PRISMIC_ACCESS_TOKEN=
    PRISMIC_CLIENT_ID=
    PRISMIC_CLIENT_SECRET=
    PRISMIC_ENDPOINT=
    ```

4.  Run the development server
    ```sh
    npm run dev
    ```

### View in production mode

1. Run the build script
   ```sh
   npm run build
   ```
2. Run the production server
   ```sh
   npm run start
   ```
