import MenuItem from '../models/menuItem';
import Order from '../models/order';
import { getErrorMessage } from '../utils/errorHandler';

/**
 * Obtiene el menú completo desde la base de datos.
 */
export const fetchMenu = async () => {
  try {
    const menu = await MenuItem.find();
    return menu;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error('Error fetching menu: ' + errorMessage);
  }
};

/**
 * Crea un nuevo pedido en la base de datos.
 * @param items Array de IDs de los productos solicitados.
 * @param total Monto total del pedido.
 */
export const createNewOrder = async (items: string[], total: number) => {
  try {
    const newOrder = new Order({ items, total });
    await newOrder.save();
    return newOrder;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error('Error creating order: ' + errorMessage);
  }
};

/**
 * Responde preguntas frecuentes basadas en palabras clave.
 * @param question Pregunta ingresada por el usuario.
 */
export const handleFAQ = (question: string) => {
  const lowerCaseQuestion = question.toLowerCase();

  if (lowerCaseQuestion.includes('abiertos') || lowerCaseQuestion.includes('horario')) {
    return 'Estamos abiertos de 10:00 a 22:00.';
  }

  if (lowerCaseQuestion.includes('dónde están ubicados') || lowerCaseQuestion.includes('ubicación') || lowerCaseQuestion.includes('dirección')) {
    return 'Estamos ubicados en Av. Principal 123, Ciudad Sushi.';
  }

  if (lowerCaseQuestion.includes('hacen entregas') || lowerCaseQuestion.includes('delivery')) {
    return 'Sí, hacemos entregas a domicilio. Puedes pedir a través de nuestra web o por WhatsApp.';
  }

  if (lowerCaseQuestion.includes('métodos de pago') || lowerCaseQuestion.includes('pago')) {
    return 'Aceptamos efectivo, tarjetas de crédito y débito, y pagos por MercadoPago.';
  }

  if (lowerCaseQuestion.includes('menú') || lowerCaseQuestion.includes('carta')) {
    return 'Puedes ver nuestro menú completo en nuestra página web o solicitándolo aquí.';
  }

  if (lowerCaseQuestion.includes('tienen opciones vegetarianas') || lowerCaseQuestion.includes('vegetariano') || lowerCaseQuestion.includes('veganas')) {
    return 'Sí, contamos con opciones vegetarianas y veganas, como rolls de aguacate y tempura de vegetales.';
  }

  if (lowerCaseQuestion.includes('tienen promociones') || lowerCaseQuestion.includes('descuentos')) {
    return 'Sí, tenemos promociones especiales los fines de semana. Pregunta por nuestras ofertas del día.';
  }

  if (lowerCaseQuestion.includes('reservas') || lowerCaseQuestion.includes('reservar')) {
    return 'Sí, puedes hacer una reserva llamándonos al 555-1234 o enviándonos un mensaje por WhatsApp.';
  }

  if (lowerCaseQuestion.includes('cuánto tarda el pedido') || lowerCaseQuestion.includes('tiempo de entrega')) {
    return 'El tiempo de entrega es de aproximadamente 30-45 minutos dependiendo de la cantidad de pedidos.';
  }

  return 'No entiendo tu pregunta. ¿Podrías reformularla?';
};