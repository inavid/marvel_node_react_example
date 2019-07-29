# MARVEL'S API EXAMPLE
This is a example of how to get information from MARVEL DEVELOPER API and show it in a react app

# HOW TO INSTALL
* `To work correctly with this code you should have docker client installed`

1.- clone the repo and cd into project folder

2.- First you need to set the .env variables used by docker, get into the project folder and exec: 

```bash
cp .envexample .env
```

3.- You need to set the environment variables used by node, go into backend folder and exec:
```bash
cp .envexample .env
```

> You need to set the `MARVEL_API_PUBLIC_KEY` and `MARVEL_API_PRIVATE_KEY` variables with your keys, if you dont have those keys yet please make your developer account at https://developer.marvel.com/ and after that put those keys in the .env file of backend folder

4.- Return to the root of the project and exec:
```sh
 docker-compose up --build
```
* Remember that you can build the compose in detached mode with the parameter -d
```sh
 docker-compose up --build -d
```
5.- After that you should have available both front and backend containers so, you should be able to see the project in:

* http://localhost:3000/

# LINT

You can do a review on the code of the frontend and backend projects, you just need to got to the desired folder and exec:

```sh
    npm run lint
```