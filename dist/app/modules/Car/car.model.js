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
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const car_interfaces_1 = require("./car.interfaces");
const carSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: -1,
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: Object.values(car_interfaces_1.Category),
        },
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
// * Static Method
carSchema.statics.isCarExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield exports.Car.findById(id);
    return car;
});
exports.Car = (0, mongoose_1.model)('Car', carSchema);
