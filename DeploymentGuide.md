1. npm init -y in root directory

2. Change the scripts as 
"build": "npm install --prefix backedn && npm install --prefix frontend" 

3. We can check by deleting nodemodules in both frontend and backend and running npm run build in root directory it creates again for each

4. For production level we add the commands
"build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend" 
This creates a production level folder struct for react

5. Both running in different port lets make it run in same port

6. Add these in server.js for connecting dist file production level

import path from "path"

const __dirname = path.resolve()

We have changed cors --> Putted inside condition block 
if(process.env.NODE_ENV !== "production"){
    app.use(cors
    ({
    origin:"http://localhost:5173",
    })
);
}

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "../frontend/dist"))) // Put a path for frontend dist folder
    app.get("*" , (req , res) => {
        res.sendFile(path.join(__dirname , "../frontend" , "dist" , "index.html")) // Any other request except our notes
    })
}

7. Node_ENV = production --> in .env --> Make it development before pushing to github

8. In axios.js
const BASE_URL = import.meta.env.MODE === "development" ? ... : ...

import axios from "axios"

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL : BASE_URL,
})
export default api;