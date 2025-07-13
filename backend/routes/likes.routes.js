import {Router} from "express"
import { createLike, getAllLikes } from "../src/controllers/like.controllers.js"

const router = Router()

router.get("/posts", getAllLikes)
router.post("/posts", createLike)

export default router