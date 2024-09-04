# Backend NodeJS MySQL

This project Backend.

## `Tools Specification`

node and npm version:

- node v20.14.0
- npm 10.8.1

## Dependencies

```json
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-fileupload": "^1.5.1",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.10.3",
    "sequelize": "^6.37.3"
  }
```

## `Installation`

Download or Clone Project From Github

```bash
  git clone --branch be-nodejs-mysql https://github.com/amriarendy/react-app.git
```

Go to the project directory

```bash
  cd react-app
```

Install npm dependencies

```bash
  npm update or npm install
```

Migrate Database and seeder

## `Running Tests`

To run tests, run the following command

Server **PORT** 3001

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

Change **PORT** at entrypoint in file index.js:

```javascript
dotenv.config();
const app = express();
const port = 3001; // <== change port here at line 14

app.listen(port, () => {
  console.log(`Server running | app listening at http://127.0.0.1:${port}`);
});
```

## Rest API Reference

### Authorization

_endpoint:_ Login

```http
  POST http://localhost:3001/login
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `email`    | `string` | **Required**, **Valid Email**, **Trim** |
| `password` | `string` | **Required**.                           |

_endpoint:_ Register

```http
  POST http://localhost:3001/register
```

| Parameter         | Type     | Description                              |
| :---------------- | :------- | :--------------------------------------- |
| `name`            | `string` | **Required, Min: 3 char, Max: 50 char**. |
| `email`           | `string` | **Required**, **Valid Email**, **Trim**  |
| `password`        | `string` | **Required**.                            |
| `passwordConfirm` | `string` | **Required, match: password**.           |

_endpoint:_ Email Verify

```http
  GET http://localhost:3001/email-verify
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `email`   | `string` | **Required**, **Valid Email**, **Trim** |

_endpoint:_ Logout

```http
  DELETE http://localhost:3001/logout
```

_endpoint:_ Get Token

```http
  GET http://localhost:3001/token
```

## Code Response

| Code | Status                | Response   |
| :--- | :-------------------- | :--------- |
| 200  | OK                    | ✅ success |
| 201  | Created               | ✅ success |
| 204  | No Content            | ❌ errors  |
| 400  | Bad Request           | ❌ errors  |
| 401  | Unathorized           | ❌ errors  |
| 402  | Payment Required      | ❌ errors  |
| 403  | Forbidden             | ❌ errors  |
| 404  | Not Found             | ❌ errors  |
| 405  | Method Not Allowed    | ❌ errors  |
| 408  | Request Timeout       | ❌ errors  |
| 410  | Gone                  | ❌ errors  |
| 422  | Unprocessable Content | ❌ errors  |
| 500  | Internal Server Error | ❌ errors  |
| 502  | Bad Gateway           | ❌ errors  |
| 503  | Service Unvailable    | ❌ errors  |
| 504  | Gateway Timeout       | ❌ errors  |

## 🔗 Follow Me!!

[![github](https://img.shields.io/badge/github-0C0C0C?style=for-the-badge&logo=github&logoColor=dark)](https://github.com/amriarendy/)
[![instagram](https://img.shields.io/badge/instagram-FD1D1D?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/amriarendy/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amriarendy/)
[![twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/amriarendy/)

## ☕ Donate Coffee

[![saweria](https://img.shields.io/badge/Buy%20coffee-6F4E37?style=for-the-badge&logo=ko-fi&logoColor=white)](https://saweria.co/amriarendy/)
