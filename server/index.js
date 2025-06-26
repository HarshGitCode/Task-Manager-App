const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors");
const userRoutes = require("./routes/User");
const taskRoutes = require("./routes/Task");
const dbConnect = require("./config/database");
const path = require("path");
// const __dirname = path.resolve();
// import { fileURLToPath } from "url";
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:5173",
		credentials:true,
	})
)

dbConnect.connect();
console.log("db connected");



app.use("/api/auth",userRoutes);
app.use("/api/tasks",taskRoutes);
// app._router.stack.forEach((middleware) => {
//   if (middleware.route) {
//     console.log("➡️ ROUTE:", middleware.route.path);
//   } else if (middleware.name === "router") {
//     middleware.handle.stack.forEach((handler) => {
//       console.log("➡️ ROUTE:", handler.route?.path);
//     });
//   }
// });

app.get('/', (req, res)=>{
    res.send('hello welcome to server');
});

// Serve static files from Vite
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const distPath = path.join(__dirname, "../dist");
// app.use(express.static(distPath));

const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
	// app._router.stack.forEach((middleware) => {
  //   if (middleware.route) {
  //     console.log("➡️ ROUTE:", middleware.route.path);
  //   } else if (middleware.name === "router") {
  //     middleware.handle.stack.forEach((handler) => {
  //       console.log("➡️ ROUTE:", handler.route?.path);
  //     });
  //   }
  // });
    console.log("welcome to server")
});