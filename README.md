# IT6037 Final Project

## Purpose

We have been tasked with developing a database and implementing a full-stack interface for a company that provides digital resources to students. The database is to contain reference materials for students in art, mathematics and technology. The databse should be accessible by adminsitrators, tutors and students, with various access levels. 

## The Team

| Name | Title |
| ----------- | ----------- |
| Inna Klushunova | Project Manager |
| Benjamin Charles Olds | Full-Stack Engineer |
| Gurjeet Kaur | Database Engineer |
| Neelam Ranjit | Database Engineer |
| Shane Hislop | System Analyst | 

## What was this built in?

| Role | Technology |
| ----------- | ----------- |
| Back-End | NodeJS/Express |
| Database | MongoDB/Mongoose |
| Front-End | Tailwind CSS |
| Template Engine | EJS |
| Authentication | JWT | 

 
## How do I use this?

### Install Dependencies

`npm install`

### Connect the Database

Create a file called Database.js and create a connection to the database, for purposes of development I called mine connect, which is called within the app.js file.

### Create a Secret. 

Create a file called secret.js and export the secret. This is used for authentication. 

`module.exports = 'thisisasupersecretsecretusedforauthentication`

### Make sure CSS is properly built using Tailwind CSS. 

`npm run build-css`

### Run the webserver

`npm run test` or `nodemon`