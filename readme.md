
# Express Typescript Rest API

A REST api server based on express.js and Typescript. Support to mongodb added using mongoose package . Express validation middleware added for validation.
Using `jwt` and `bcrypt` packages for encryption.


## How To Start

* clone repository
* rename .env-demo to .env and change env variables
* install node_modules using ` npm install`

#### Avilable NPM Commands
* `npm run dev` run in development node_modules.
* `npm run start` run in production mode.
* `npm run build` take build.
* `npm run seed` seed mongodb database. 


## Folder Structure



| Folder     | Description                       |
| :--------  |  :----------------------------|
| `src/bin`       | www file is from where the prject starts  |
| `src/config`      |  all the configuration files  |
| `src/controllers`      |  all the controller files (route handlers)  |
| `src/db`      |  files related to database and schemas |
| `src/middlewares`      |  avialable middlewares |
| `src/services`      |  database queries and business logic |
| `src/util`      |  helper functions |
| `src/validators`      |   validation files |

## API Reference

#### Base url

```http
  GET /
```


#### Create user

```http
  POST /users
```

| body | Type     | Description                       |
| :-------- | :------- | :----------------------------|
| `username`      | `string` | **Required**  |
| `password`      | `string` | **Required**  |



## Author

- [@Akhil E M](https://github.com/Akhil-EM)

