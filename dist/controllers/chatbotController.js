"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faq = exports.createOrder = exports.getMenu = void 0;
const chatbotService_1 = require("../services/chatbotService");
const errorHandler_1 = require("../utils/errorHandler");
const getMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield (0, chatbotService_1.fetchMenu)();
        res.status(200).json(menu);
    }
    catch (error) {
        res.status(500).json({ error: (0, errorHandler_1.getErrorMessage)(error) });
    }
});
exports.getMenu = getMenu;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { items, total } = req.body;
        const newOrder = yield (0, chatbotService_1.createNewOrder)(items, total);
        res.status(201).json(newOrder);
    }
    catch (error) {
        res.status(500).json({ error: (0, errorHandler_1.getErrorMessage)(error) });
    }
});
exports.createOrder = createOrder;
const faq = (req, res) => {
    try {
        const { question } = req.body;
        const answer = (0, chatbotService_1.handleFAQ)(question);
        res.status(200).json({ answer });
    }
    catch (error) {
        res.status(500).json({ error: (0, errorHandler_1.getErrorMessage)(error) });
    }
};
exports.faq = faq;
