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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const menuItem_1 = __importDefault(require("../models/menuItem"));
// Cargar variables de entorno
dotenv_1.default.config();
// Datos de prueba
const menuItems = [
    {
        name: 'Sushi Roll',
        price: 12.99,
        description: 'Delicious sushi roll with fresh salmon and avocado.',
    },
    {
        name: 'California Roll',
        price: 10.99,
        description: 'Classic California roll with crab, cucumber, and avocado.',
    },
    {
        name: 'Spicy Tuna Roll',
        price: 11.99,
        description: 'Spicy tuna roll with a kick of wasabi.',
    },
    {
        name: 'Vegetarian Roll',
        price: 8.99,
        description: 'Fresh vegetarian roll with cucumber, avocado, and carrots.',
    },
    {
        name: 'Tempura Shrimp Roll',
        price: 14.99,
        description: 'Crispy tempura shrimp wrapped in sushi rice and seaweed.',
    },
];
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Conectar a MongoDB
        yield mongoose_1.default.connect(process.env.MONGO_URI || '');
        console.log('✅ MongoDB connected successfully.');
        // Limpiar la colección existente
        yield menuItem_1.default.deleteMany();
        console.log('🗑️ Collection cleared.');
        // Insertar datos de prueba
        yield menuItem_1.default.insertMany(menuItems);
        console.log('🍣 Menu items seeded successfully.');
        // Cerrar conexión
        yield mongoose_1.default.connection.close();
        console.log('🔒 MongoDB connection closed.');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
    }
});
// Ejecutar el seeder
seedDatabase();
