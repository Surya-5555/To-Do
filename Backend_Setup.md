    1. cd backend
    2. npm init -y --> gives package json file
    3. npm install express@4.18.2
    4. Gives package-lock-json and nodemodules
    5. When we run it wont work for both npm run dev and npm run server.js
    6. node server.js
    7. In package json change type as module from common js
    8. Change scripts so that it contains "dev" : "node.server.js" --> so we can npm run dev
    9. npm install nodemon -D & change scripts as nodemon server.js
    10. Add "start":"node server.js" for the production purpose
    11. 1.server.js 2.routes 3.controllers 4.Config 5.model
    12. Change main as src/server.js & nodemon src/server.js after putting all in src
    13. create new project and create a cluster --> DB 
    14. Go to networkaccess in DB --> Add IP address --> 0.0.0.0/0
    15. Navigate to cluster - browse collection in DB
    16. npm install mongoose@latest
    17. npm i dotenv
    18. npm i @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9
    19. Upstash.js
    20. RateLimit.js
    21. npm i cors --> for connecting backend and frontend