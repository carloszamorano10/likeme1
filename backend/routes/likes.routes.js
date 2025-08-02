import {Router} from "express"
import { createLike, deleteLikes, getAllLikes, modifyLikes } from "../src/controllers/like.controllers.js"

const router = Router()

router.get("/posts", getAllLikes)
router.post("/posts", createLike)
router.put("/posts/like/:id", modifyLikes)
router.delete("/posts/:id/", deleteLikes)

export default router