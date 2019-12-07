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
exports.getGuides = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const guide = yield Guide_1.default.findOne({});
});
exports.listGuide = () => {
};
exports.createGuide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const guide = new Guide_1.default({
        subject: req.body.subject,
        number: req.body.number,
        semester: req.body.semester,
        docent: req.body.docent
    });
    const savedGuide = yield guide.save();
    res.json({
        message: 'Guide successfully saved',
        savedGuide
    });
});
exports.modifyGuide = () => {
};
exports.deleteGuide = () => {
};
//# sourceMappingURL=guide.controller.js.map