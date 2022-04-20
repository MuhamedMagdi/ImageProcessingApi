# Image Processing API

## Table of contents
- [Image Processing API](#image-processing-api)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Endpoints](#endpoints)
  - [Run the server](#run-the-server)
  - [Usage](#usage)
  
## Installation
- After cloneing the repo open the folder in the terminal and run the following command to install all third part packages
```
npm i
```
- You should also install `ts-node` globally for `nodemon` to work
```
npm i -g ts-node
```

## Scripts
- Bulid the project from `TypeScript` to `JavaScript` and save it to `/build`
```
npm run build
```

- Starting the final built of the project
```
npm run start
```

- Running the `TypeScript` server in development with `nodemon`
```
npm run dev
```

- Getting linting errors using `eslint`
```
npm run lint
```

- Fixing linting errors using `eslint`
```
npm run lint:fix
```

- Formating the project using `prettier`
```
npm run format
```

- Testing the scripts using `jasmine`
```
npm run jasmine
```

- Building the project and testing the scripts
```
npm run test
```

## Endpoints
|URI|Example|URL parameters|Usage|
|-|-|-|-|
|`/api`|`/api`|`-`|List all the images inside the `media/images` directory|
|`/api/:imagename`|`/api/fjord.jpg`|`width` and `height`|Send the image with the default dimensions|
|`/api/:imagename?width=&height=`|`api/fjord.jpg?width=500&height=500`|`width` and `height`|Send the image with the specified width and hegight|

## Run the server 
- You should build the project first with 
```
npm run build
```

- You can now run the project with
```
npm run strart
```

- The server should be running on port `3000`
```
http://127.0.0.1:3000/api
```

## Usage
- Retrive the available image you can get thim with a GET request to `/api`:
  * Example: `http://127.0.0.1:3000/api`
- Retrive a specific image you can get it with a GET request to `/api/imagename.jpg`
  * Example: `http://127.0.0.1:3000/api/fjord.jpg`
- Retrive a specific image with a specific `width` and `height`
  * Example: `http://127.0.0.1:3000/api/fjord.jpg?width=500&height=500`
