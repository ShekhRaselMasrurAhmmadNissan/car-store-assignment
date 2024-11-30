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
exports.CarController = void 0;
const errorMessage_1 = __importDefault(require("../../generators/errorMessage"));
const notFoundMessage_1 = __importDefault(require("../../generators/notFoundMessage"));
const successMessage_1 = __importDefault(require("../../generators/successMessage"));
const car_model_1 = require("./car.model");
const car_service_1 = require("./car.service");
const car_validation_1 = __importDefault(require("./car.validation"));
// * Saving a Car in the Database
const saveCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParseData = car_validation_1.default.saveCarValidationSchema.parse(req.body);
        if (zodParseData.quantity === 0) {
            zodParseData.inStock = false;
        }
        const result = yield car_service_1.CarServices.savingCarToDB(zodParseData);
        const message = `Car created successfully`;
        res.status(200).json((0, successMessage_1.default)(message, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
// * Get all data from the database
const getAllCarData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    // Making the query case insensitive
    const finalQuery = {};
    for (const key in query) {
        finalQuery[key] = { $regex: query[key], $options: 'i' };
    }
    console.log(finalQuery);
    try {
        const result = yield car_service_1.CarServices.getAllCarDataFromDB(finalQuery);
        res.status(200).json((0, successMessage_1.default)(`Cars retrieved successfully`, result));
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
// * Get single data from the database
const getSingleCarData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carID } = req.params;
        const result = yield car_service_1.CarServices.getSingleCarFromDB(carID);
        if (result == null) {
            res.status(404).json((0, notFoundMessage_1.default)(`Car not found`));
        }
        else {
            res.status(200).json((0, successMessage_1.default)(`Car retrieved successfully`, result));
        }
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
// * Update single car data
const updateSingleCarData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carID = req.params.carID;
        const data = req.body;
        const zodParseData = car_validation_1.default.updateCarValidationSchema.parse(data);
        if (!(yield car_model_1.Car.isCarExists(carID))) {
            res.status(404).json((0, notFoundMessage_1.default)(`Car not found`));
        }
        else {
            if ((zodParseData === null || zodParseData === void 0 ? void 0 : zodParseData.quantity) && (zodParseData === null || zodParseData === void 0 ? void 0 : zodParseData.quantity) === 0) {
                zodParseData.inStock = false;
            }
            if ((zodParseData === null || zodParseData === void 0 ? void 0 : zodParseData.quantity) && (zodParseData === null || zodParseData === void 0 ? void 0 : zodParseData.quantity) >= 0) {
                zodParseData.inStock = true;
            }
            const result = yield car_service_1.CarServices.updateSingleCarFromDB(carID, zodParseData);
            res.status(200).json((0, successMessage_1.default)(`Car updated successfully`, result));
        }
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
// * Delete Single Car Data from the Database
const deleteCarData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carID = req.params.carID;
        if (!(yield car_model_1.Car.isCarExists(carID))) {
            res.status(404).json((0, notFoundMessage_1.default)(`Car not found`));
        }
        else {
            let result = yield car_service_1.CarServices.deleteCarFromDB(carID);
            if (result) {
                result = {};
            }
            res.status(200).json((0, successMessage_1.default)('Car deleted successfully', result));
        }
    }
    catch (error) {
        res.status(400).json((0, errorMessage_1.default)(error));
    }
});
exports.CarController = {
    saveCar,
    getAllCarData,
    getSingleCarData,
    updateSingleCarData,
    deleteCarData,
};
