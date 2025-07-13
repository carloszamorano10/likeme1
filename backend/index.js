import express from "express" 
import "dotenv/config" 
import likesRoutes from "./routes/likes.routes.js"
import cors from "cors"


const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(likesRoutes)

app.listen(PORT, console.log(`server on http://localhost:${PORT}`))