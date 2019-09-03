- git status
- mkdir folderName
- cd folderName
- git init
- npm init -y
- code .
- add `"dev": "node index.js"` to package.json scripts
- npm i nodemon -D <- install nodemon as a development time dependency
- npm run scriptName
- npx gitigore node (creates .gitignore with all your stuff)
  - read about it here: https://www.npmjs.com/package/gitignore
- install express library `npm i express`

endpoint (url + http method) === function

POST /api/movies (body: movie) ==== postApiMovies(movie)

| non REST         | REST                   |
| :--------------- | :--------------------- |
| /createMovie     | POST /api/movies       |
| /removeMovie/:id | DELETE /api/movies/:id |

Other approaches to building Web Apis

- GraphQL
- gRPC
- RPC
- SOAP
