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
const Guide_1 = __importDefault(require("../models/Guide"));
function getGuides(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // retrieving records
        const guides = yield Guide_1.default.find();
        // response from the server
        return res.json(guides);
    });
}
exports.getGuides = getGuides;
function getGuide(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // receiving the searched ID
        const { id } = req.params;
        const guide = yield Guide_1.default.findById(id, (err, doc) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error making request',
                    err
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: "The guide doesn't exist"
                });
            }
        });
        // response from the server
        return res.status(200).json(guide);
    });
}
exports.getGuide = getGuide;
function createGuide(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // recovering data
        const guide = new Guide_1.default({
            subject: req.body.subject,
            numberLab: req.body.numberLab,
            semester: req.body.semester,
            docent: req.body.docent
        });
        // saving data
        const savedGuide = yield guide.save();
        // response from the server
        return res.status(200).json({
            message: 'Guide successfully saved',
            savedGuide
        });
    });
}
exports.createGuide = createGuide;
function deleteGuide(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // receiving the ID to delete
        const { id } = req.params;
        const guide = yield Guide_1.default.findByIdAndRemove(id);
        // response from the server
        return res.status(200).json({
            message: 'Guide successfully deleted',
            guide
        });
    });
}
exports.deleteGuide = deleteGuide;
function updateGuide(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // receiving the ID to update
        const { id } = req.params;
        // receiving the data to update
        const { subject, numberLab, semester, docent } = req.body;
        const updateGuide = yield Guide_1.default.findByIdAndUpdate(id, {
            subject,
            numberLab,
            semester,
            docent
        }, { new: true });
        // response from the server
        return res.status(200).json({
            message: 'Guide successfully updated',
            updateGuide
        });
    });
}
exports.updateGuide = updateGuide;
//# sourceMappingURL=guide.controller.js.map