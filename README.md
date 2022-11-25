# SportSee

SportSee is a startup based on sports coaching. To improve the user experience, we have created a new version of the profile page.

## Prerequisites

- NodeJS
- Yarn (or Npm)
- An IDE (Visual Studio Code or another)

## Principal Dependencies

- React v18.2
- React-router v6.4.2
- Recharts v2.1.14
- Sass v1.55
- Axios v1.1.2

## Installation

### Backend API

- Clone Backend API : `git clone https://github.com/erischon/sportsee-backend.git`
- Install the dependencies: `yarn install`

### Frontend APP

- Clone FrontEnd App : `git clone https://github.com/erischon/sportsee-frontend.git`
- Install the dependencies with: `yarn install`

## Usage

### Backend API

- In your terminal (or IDE) go to sportsee-backend folder
- Run the Backend Api : `yarn dev`
- The API will run on [http://localhost:3000/](http://localhost:3001/)

### Frontend APP

- In your terminal (or IDE) go to sportsee-frontend folder
- Run the Frontend App : `yarn dev`
    
    ```powershell
    ? Something is already running on port 3000.
    
    Would you like to run the app on another port instead? » (Y/n)
    ```
    
    - Choice and type Y
- The App will run on [http://localhost:3001/](http://localhost:3001/)

## Usage of App

### mode Development (default mode)

- you must have `REACT_APP_MODE = "development”` active in the file sportsee-frontend/.env
- This mode use Mocked Data

### mode Production

- you must have `REACT_APP_MODE = "production”` active in the file sportsee-frontend/.env
- This mode use Backend API

When you switch the mode you must re start the App :

- Ctrl + C
- `yarn start`

### Available routes

you only have access to :

- [http://localhost:3001/dashboard/12](http://localhost:3001/dashboard/18)
- [http://localhost:3001/dashboard/18](http://localhost:3001/dashboard/18)

## Author

[Eri Schön](https://github.com/erischon)