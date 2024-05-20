import { Router } from 'express'
import userController from '../../controllers/user.controller.js'

const router = Router()

router.get('/users', userController.get)

export default router