<img src="https://github.com/gpfurlaneto/buzzvel-holidays-app/blob/main/public/logo-light.svg">

**Backend - API**


This is Buzzvel - Holidays: is a user-friendly interface to perform create and to manage operations on holiday plans. This is the backend project built using express-js and mongo database.



## Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [TODO](#todo)

## Requirements
Buzzvel - Holidays is built in two repositories, api (backend) and app (frontend). After finishing the setup for the backend, got for the step 2 of the frontend setup [here](https://github.com/gpfurlaneto/buzzvel-holidays-app)

Here are all the projeject dependencies:
    
- [ExpressJs](https://expressjs.com/pt-br/)
- [NodeJs](https://nodejs.org)
- [MongoDb](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## Setup

1 - Install the libraries dependencies with the command: `npm install`

2 - Start the mongo database docker container executing the following command from the root folder of the project 
`docker-compose up`

3 - Copy `enc.example` file with the name `.env`, this files has the base express server port and database url.

4 - Start the server with the command: `npm run start`

5 - And that is it, now go to setup the frontend app [here](https://github.com/gpfurlaneto/buzzvel-holidays-app)

## TODO
- To create tests
- To deploy the application, both back end and front end;
- To setup eslint/prettier;
- To setup git actions to ensure the code quality, validating the code and running tests.
