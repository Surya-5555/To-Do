project-root/
│
├── backend/                     # Backend code (APIs, database, server logic)
│   ├── node_modules/            # Backend dependencies
│   ├── src/                     # Source code for backend
│   │   ├── config/              # Config files (DB, environment, etc.)
│   │   ├── controllers/         # Business logic
│   │   ├── middleware/          # Middlewares
│   │   ├── models/              # Database models
│   │   ├── routes/              # API routes
│   │   └── server.js            # Backend entry point
│   ├── .env                     # Environment variables
│   ├── package.json             # Backend dependencies
│   └── package-lock.json        # Dependency lock file
│
├── frontend/                    # Frontend code (UI - React + Vite + Tailwind)
│   ├── node_modules/            # Frontend dependencies
│   ├── public/                  # Public assets
│   ├── src/                     # Frontend source code
│   │   ├── pages/               # Application pages
│   │   ├── App.jsx              # Main App component
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # Frontend entry file
│   ├── index.html               # Main HTML file
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   ├── postcss.config.js        # PostCSS configuration
│   ├── eslint.config.js         # ESLint configuration
│   ├── package.json             # Frontend dependencies
│   └── package-lock.json        # Dependency lock file
│
├── .gitignore                   # Git ignore file
├── Backend_Setup.md             # Backend setup guide
├── Frontend_Setup.md            # Frontend setup guide
├── FolderStruct.md              # This file (folder structure)
└── README.md                    # Project overview & instructions
