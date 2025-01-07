"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatbotController_1 = require("../controllers/chatbotController");
const router = (0, express_1.Router)();
router.get('/menu', chatbotController_1.getMenu);
router.post('/order', chatbotController_1.createOrder);
router.post('/faq', chatbotController_1.faq);
exports.default = router;
