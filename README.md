# ![RealWorld Example App](logo.png)

> **React / Vite + SWC / Express.js / Sequelize / PostgreSQL codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://realworld.io/) spec and API.**

This codebase was created to demonstrate a fully fledged fullstack application built with **React / Vite + SWC / Express.js / Sequelize / PostgreSQL** including CRUD operations, authentication, routing, pagination, and more.

> For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

---

## Getting Started

These instructions will help you install and run the project on your local machine for development and testing.

### Prerequisites

Before you run the project, make sure that you have the following tools and software installed on your computer:

- Text editor/IDE (e.g., VS Code, Sublime Text, Atom)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) `v18.11.0+`
- [NPM](https://www.npmjs.com/) (usually included with Node.js)
- SQL database

  ![Screenshot 2024-08-18 160105](https://github.com/user-attachments/assets/78b27b4e-d6f6-4e79-85c9-5b5c1adaba0a)

  ![Screenshot 2024-08-18 160206](https://github.com/user-attachments/assets/20ce1a6b-2931-4c91-ba44-507e1eb496f7)

  ![Screenshot 2024-08-18 160335](https://github.com/user-attachments/assets/84919a93-73b7-43fb-8c39-c7894323790c)

### Installation

To install the project on your computer, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/arpita199812/conduit-realworld-example-app.git
   ```

2. Navigate to the project directory.

   ```bash
   cd conduit-realworld-example-app
   ```

3. Install project dependencies by running the command:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project
2. Add the required environment variables as specified in the [`.env.example`](backend/.env.example) file
3. (Optional) update the Sequelize configuration parameters in the [`config.js`](backend/config/config.js) file
4. If you are **not** using PostgreSQL, you may also have to install the driver for your database:

   <details>
   <summary>Use one of the following commands to install:</summary><br/>

   > Note: `-w backend` option is used to install it in the backend [`package.json`](backend/package.json).

   ```bash
   npm install -w backend pg pg-hstore  # Postgres (already installed)
   npm install -w backend mysql2
   npm install -w backend mariadb
   npm install -w backend sqlite3
   npm install -w backend tedious       # Microsoft SQL Server
   npm install -w backend oracledb      # Oracle Database
   ```

   > :information_source: Visit [Sequelize - Installing](https://sequelize.org/docs/v6/getting-started/#installing) for more infomation.
   >
   > npm install --save-dev sequelize-cli
   > npx sequelize –version

   ***

   </details>

5. Create database specified by configuration by executing

   > :warning: Please, make sure you have already created a superuser for your database.

   ```bash
   npx sequelize db:create --config backend/config/config.js 
   ```

   > :information_source: The command `npm run sqlz` is an alias for `npx -w backend sequelize-cli`.  
   > Execute `npm run sqlz -- --help` to see more of `sequelize-cli` commands availables.

6. Optionally you can run the following command to populate your database with some dummy data:

   ```bash
   npm run sqlz -- db:seed:all
   ```

### Usage

#### Development Server

To run the project, follow these steps:

1. Start the development server by executing the command:

   ```bash
   npm run dev
   ```

2. Open a web browser and navigate to:
   - Home page should be available at [`http://localhost:3000/`](http://localhost:3000).
   - API endpoints should be available at [`http://localhost:3001/api`](http://localhost:3001/api).
   ![Screenshot 2024-08-17 130809](https://github.com/user-attachments/assets/35628ea4-65a2-449a-9f0b-e7c59a8a7041)

   ![Screenshot 2024-08-18 153359](https://github.com/user-attachments/assets/3f6f3d85-e42c-44b1-b483-ce1195ff8618)
   
   ![Screenshot 2024-08-18 153255](https://github.com/user-attachments/assets/5031b8bf-e9a8-46f9-8d35-1c290b21aeab)
   
   ![Screenshot 2024-08-18 153334](https://github.com/user-attachments/assets/d1ab5080-b0ed-4987-8b85-f7b6bf6342e3)
   
   ![Screenshot 2024-08-18 153419](https://github.com/user-attachments/assets/dddc44af-52f5-47aa-92c0-51e896554048)

   ![Screenshot 2024-08-17 125106](https://github.com/user-attachments/assets/0380894f-5f72-4ce5-8ad1-024d0aa0153e)

#### Running Tests

To run tests, simply run the following command:

```bash
npm run test
```

#### Production

The following command will build the production version of the app:

```bash
npm run start
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [RealWorld](https://realworld.io/)
- [RealWorld (GitHub)](https://github.com/gothinkster/realworld)
- [CodebaseShow](https://codebase.show/)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
