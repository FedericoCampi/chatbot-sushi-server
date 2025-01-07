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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFAQ = exports.createNewOrder = exports.fetchMenu = void 0;
const menuItem_1 = __importDefault(require("../models/menuItem"));
const order_1 = __importDefault(require("../models/order"));
const errorHandler_1 = require("../utils/errorHandler");
/**
 * Obtiene el menú completo desde la base de datos.
 */
const fetchMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield menuItem_1.default.find();
        return menu;
    }
    catch (error) {
        const errorMessage = (0, errorHandler_1.getErrorMessage)(error);
        throw new Error('Error fetching menu: ' + errorMessage);
    }
});
exports.fetchMenu = fetchMenu;
/**
 * Crea un nuevo pedido en la base de datos.
 * @param items Array de IDs de los productos solicitados.
 * @param total Monto total del pedido.
 */
const createNewOrder = (items, total) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = new order_1.default({ items, total });
        yield newOrder.save();
        return newOrder;
    }
    catch (error) {
        const errorMessage = (0, errorHandler_1.getErrorMessage)(error);
        throw new Error('Error creating order: ' + errorMessage);
    }
});
exports.createNewOrder = createNewOrder;
/**
 * Responde preguntas frecuentes basadas en palabras clave.
 * @param question Pregunta ingresada por el usuario.
 */
const handleFAQ = (question) => {
    const lowerCaseQuestion = question.toLowerCase();
    if (lowerCaseQuestion.includes('abiertos')) {
        return 'Estamos abiertos de 10:00 a 22:00.';
    }
    if (lowerCaseQuestion.includes('dónde están ubicados')) {
        return 'Estamos ubicados en Av. Principal 123, Ciudad Sushi.';
    }
    return 'No entiendo tu pregunta. ¿Podrías reformularla?';
};
exports.handleFAQ = handleFAQ;
