
# Image Processing API

## Installation

- After cloneing the repo open the folder in the terminal and run the following command to install all third part packages
    > npm i

## Scripts
- Bulid the project from `TypeScript` to `JavaScript` and save it to `/build`
    > npm run build

- Starting the final built of the project
    > npm run start

- Running the `TypeScript` server in development with `nodemon`
    > npm run dev

- Getting linting errors using `eslint`
    > npm run lint

- Fixing linting errors using `eslint`
   > npm run lint:fix

- Formating the project using `prettier`
    > npm run format

- Testing the scripts using `jasmine`
    > npm run jasmine

- Building the project and testing the scripts
    > npm run test

## Endpoints
|URI|Usage|
|-|-|
|`/api`|List all the images inside the `media/images` directory|
|`/api/:imagename`|Send the image with the default dimensions|
|`/api/:imagename?width=&height=`|Send the image with the specified width and hegight|

## Finally to run the server 
- You should build the project first with 
    > npm run build

- You can now run the project with
    > npm run strart

- The server should be running on port `3000`
    > http://127.0.0.1:3000/api