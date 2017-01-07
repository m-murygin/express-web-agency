# Web agency site build with ExpressJS with email notification.

## Init configs
1. Create `config.json` file in project directory.

2. Fill configs

  ```javascript
  {
    "email": "email to send from",
    "password": "send email password",
    "service": "send email service",
    "destinationEmail": "destination email"
  }
  ```

  [The list of available services](https://github.com/nodemailer/nodemailer-wellknown#supported-services)

## Getting started

1. Install dependencies

  ```bash
  npm install
  ```

2. Run

  ```bash
  npm start
  ```

## Dockerized version

1. Build docker image

  ```bash
  docker build -t agency .
  ```

2. Run docker container

  ```bash
  docker run -d -p 8000:3000 agency
  ```

3. Navigate to `localhost:8000`
