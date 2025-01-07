import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MenuItem from '../models/menuItem';

dotenv.config();

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

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');

    console.log('✅ MongoDB connected successfully.');

    await MenuItem.deleteMany();
    console.log('🗑️ Collection cleared.');

    await MenuItem.insertMany(menuItems);
    console.log('🍣 Menu items seeded successfully.');

    await mongoose.connection.close();
    console.log('🔒 MongoDB connection closed.');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};

// Ejecutar el seeder
seedDatabase();