# Sample Project by @SamirZ

Sample Project using NodeJS Express backend and React fronted. The application also uses MongoDB to store user data as well as Redis to manage user sessions.  
The applicaiton uses a API key from https://www.themoviedb.org to provide some data about Top Rated Movies and TV Shows to authenticated user of the web app.

## Requirements


    NodeJS <= version 14.8
    Docker <= version 19.03.13
    Docker Compose <= version 4.3.1
    git <= 2.28.0


### Pull the project and create an .env file in project root directory

    $ git pull https://github.com/SamirZ/sample-project.git
    $ touch .env

### Copy content into the newly created .env file


    MONGO_INITDB_ROOT_USERNAME=xxxxxx  
    MONGO_INITDB_ROOT_PASSWORD=xxxxxx  
    MONGO_DATABASE=sample  
    MONGO_USERNAME=xxxxxx  
    MONGO_PASSWORD=xxxxxx  
    MONGO_HOST=db  
    MONGO_PORT=27017  
    REDIS_HOST=cache  
    REDIS_PASSWORD=xxxxxx  
    REACT_APP_API_KEY=xxxxxx  
    ALLOWED_ORIGINS="http://localhost http://localhost:3000 ..." 



Note: Change the xxxxxx to variables you desire or have available. You can add aditional origins to the ALLOWED_ORIGINS key
      if you want to access the server from a different location


## How to get up and running
    

### Run in production


    $ npm run up 


### Run in development


    $ npm run dev --> Starts databases

    $ npm run server --> Starts NodeJS Express Server

    $ npm run client --> Starts React Client
