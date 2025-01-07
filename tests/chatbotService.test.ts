import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import MenuItem from '../src/models/menuItem';
import Order from '../src/models/order';
import { fetchMenu, createNewOrder, handleFAQ } from '../src/services/chatbotService';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Chatbot Service Tests', () => {
  beforeEach(async () => {
    await MenuItem.deleteMany({});
    await Order.deleteMany({});
  });

  /**
   * ✅ Test fetchMenu
   */
  it('Debe retornar el menú correctamente', async () => {
    await MenuItem.create([
      { name: 'Sushi Roll', price: 12.99, description: 'Delicious sushi roll' },
      { name: 'California Roll', price: 10.99, description: 'Classic California roll' },
    ]);

    const menu = await fetchMenu();
    expect(menu).toHaveLength(2);
    expect(menu[0].name).toBe('Sushi Roll');
    expect(menu[1].name).toBe('California Roll');
  });

  /**
   * ✅ Test createNewOrder
   */
  it('Debe crear un nuevo pedido correctamente', async () => {
    const item = await MenuItem.create({ name: 'Sushi Roll', price: 12.99, description: 'Delicious sushi roll' });

    const order = await createNewOrder([item._id.toString()], 12.99);
    expect(order).toHaveProperty('_id');
    expect(order.items).toHaveLength(1);
    expect(order.total).toBe(12.99);
  });

  /**
   * ✅ Test handleFAQ
   */
  it('Debe responder correctamente a preguntas frecuentes', () => {
    expect(handleFAQ('¿Están abiertos?')).toBe('Estamos abiertos de 10:00 a 22:00.');
    expect(handleFAQ('¿Dónde están ubicados?')).toBe('Estamos ubicados en Av. Principal 123, Ciudad Sushi.');
    expect(handleFAQ('¿Hacen entregas?')).toBe('Sí, hacemos entregas a domicilio. Puedes pedir a través de nuestra web o por WhatsApp.');
    expect(handleFAQ('¿Cuáles son los métodos de pago?')).toBe('Aceptamos efectivo, tarjetas de crédito y débito, y pagos por MercadoPago.');
    expect(handleFAQ('Pregunta sin sentido')).toBe('No entiendo tu pregunta. ¿Podrías reformularla?');
  });
});
