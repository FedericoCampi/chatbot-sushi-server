# Sushi Chatbot - Backend

Este proyecto es un chatbot para realizar pedidos de sushi. Implementado con **Node.js**, **TypeScript** y **MongoDB**.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FedericoCampi/chatbot-sushi-server.git
   cd chatbot-sushi_server

   npm install

2. Agregar al .env

   ```bash
   MONGO_URI=mongodb://localhost:27017/sushi-chatbot
    PORT=5000       

3. Instalar Datos de Ejemplo en MongoDb

     ```bash
     npm run seed

4. Iniciar el Servidor

     ```bash
     npm run dev

---

# Probar endpoint:

    - Consultar menú
   GET **http://localhost:8000/api/menu**

    - Crear orden
   POST **http://localhost:8000/api/order**

    {
    "items": ["id_producto1", "id_producto2"],
    "total": 25.99
    }

    - Preguntas frecuentes para usar en chat

    POST **http://localhost:8000/api/faq**

    {
    "question": "¿Están abiertos?" 
    }           "¿Hacen entregas?" 
                "Métodos de pago" 

---

# Ejecutar test:

     ```bash
     npm run test