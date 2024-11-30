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
exports.CarServices = void 0;
const car_model_1 = require("./car.model");
/**
 * @param car --> Data that should be saved to the DB
 */
const savingCarToDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.create(car);
    return result;
});
/**
 * @param terms --> Terms to run the search query. If not provided then this will find all the data from the database
 */
const getAllCarDataFromDB = (terms) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.find(terms || {});
    return result;
});
/**
 * @param id --> This will search the data with the matching ID
 */
const getSingleCarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findById(id);
    return result;
});
/**
 * @param id --> This will search the data with the matching ID
 * @param data --> This is the data that is to be updated
 */
const updateSingleCarFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndUpdate(id, data, { new: true });
    return result;
});
/**
 * @param id --> This is ID of the data that is to be deleted.
 */
const deleteCarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.Car.findByIdAndDelete(id);
    console.log(result);
    return result;
});
exports.CarServices = {
    savingCarToDB,
    getAllCarDataFromDB,
    getSingleCarFromDB,
    updateSingleCarFromDB,
    deleteCarFromDB,
};
