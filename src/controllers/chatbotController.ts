import { Request, Response } from 'express';
import { fetchMenu, createNewOrder, handleFAQ } from '../services/chatbotService';
import { getErrorMessage } from '../utils/errorHandler';

export const getMenu = async (req: Request, res: Response) => {
  try {
    const menu = await fetchMenu();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { items, total } = req.body;
    const newOrder = await createNewOrder(items, total);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};

export const faq = (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    const answer = handleFAQ(question);
    res.status(200).json({ answer });
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};