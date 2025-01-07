import { Router } from 'express';
import { getMenu, createOrder, faq } from '../controllers/chatbotController';

const router = Router();

router.get('/menu', getMenu);
router.post('/order', createOrder);
router.post('/faq', faq);

export default router;