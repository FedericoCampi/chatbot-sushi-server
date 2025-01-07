"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    items: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'MenuItem' }],
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Order', OrderSchema);
