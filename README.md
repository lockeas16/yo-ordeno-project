![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Module 3 | Project **"Yo Ordeno"**
## Introduction
---
This is the third and final project for the Web Development Part Time started in January 2019. Developed by Pedro Aviles.

The project aims to bring a platform that enhances the user experience at any reataurant giving a customer the ability to order its own meals always having the control about what was ordered and when. 

Features:
* Login/Signup through email and authentication using json web tokens
* Full CRUD for dishes
* Full CRUD for tables
* Use of QR to access views to submit an order
* "Mobile first" views to submit orders
* Real time views to track order status

## Setup
---
Node version required: ^10.15.3
If you'd like to view the project, you'll need the following environment variables setup:
* PORT= your preferred port (for local setup)
* ENV= development (for debug purposes)
* DB= a string connection to a remote cloud mongo database
* SECRET= a *secret* string (for json web token)
* MAIL_USER= an email account, used for account verification purposes
* MAIL_PASS= the email account password
* CLOUDNAME= Cloudinary name storage
* CLOUDAPIKEY= Cloudinary API Key
* CLOUDSECRET= Cloudinary secret
* NODE_ENV=development || production (set by heroku at deploy)
* MAILGUNAPIKEY= Mailgun API Key
* MAILGUNDOMAIN= Your own domain or the one provided by Mailgun
* TOKENLIFETIME= Lifetime for tokens, for further reference on valid values [go to jsonwebtoken github](https://github.com/auth0/node-jsonwebtoken)

Follow the next steps to run the project locally:
1. Clone the repository `git clone https://github.com/lockeas16/yo-ordeno-project`, this will create a folder structure like this
````
/Ironhack-project-3
   /yo-ordeno-api   -> Backend source code
   /yo-ordeno-react -> React Frontend source code
  README.md
````
2. Inside /yo-ordeno-api folder, create the environment variables file .env setting all variables needed
3. Install and link all dependencies for Backend using `npm install` or `yarn install`
4. Install and link all dependencies for React Frontend using `npm install` or `yarn install`
5. This project uses a custom UIkit theme, in order to build it follow the next steps:
    5.1. Inside /yo-ordeno-react run script to install UIkit dependencies to prepare the custom theme compilation: `npm run install-uikit-dep` or `yarn install-uikit-dep`
    5.2 Also inside /yo-ordeno-react run script to build the custom theme required: `npm run build-custom-uikit` or `yarn build-custom-uikit`
6. Run the Backend side of the project running script inside /yo-ordeno-api folder: `npm run dev` or `yarn dev`
7. Run the React side of the project running script inside /yo-ordeno-react folder: `npm run start` or `yarn start`

This will finally deploy the project locally.

## Unsolved problems/gaps and possible next features
---
### Unsolved problems and gaps
There's no major issues or problems, there may be some missing validations on routes. The most relevant gap might be that anyone can change any order status on the same table, there's no validation to avoid changing the order of someone else.

### Possible Next Features
Kitchen management to track and change the status of each dish
Detailed and differentiated order tracking for customer, kitchen and waiters
Login and signup process for customers, in order to save favorite dishes for next visits