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
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // recovering data
        const user = new User_1.default({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        // encrypting password
        user.password = yield user.encryptPassword(user.password);
        // saving data
        const savedUser = yield user.save();
        // generating token
        const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'tokentest');
        // returning token through the header and response to the server
        return res.header('auth-token', token).json({
            message: 'User successfully saved',
            savedUser
        });
    });
}
exports.signup = signup;
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // reading the email and looking for him
        const user = yield User_1.default.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json('Email or password are wrong');
        }
        // reading the password and checking it
        const correctPassword = yield user.validatePassword(req.body.password);
        if (!correctPassword) {
            return res.status(400).json('Invalid password');
        }
        // generating token to expire in 24 hours
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24
        });
        // returning token through the header and response to the server
        return res.header('auth-token', token).json({
            message: 'User successfully signin',
            user
        });
    });
}
exports.signin = signin;
function profile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // looking for the user
        const user = yield User_1.default.findById(req.userId, { password: 0 });
        if (!user) {
            return res.status(404).json('No user found');
        }
        // response to the server
        return res.json({
            message: 'User found',
            user
        });
    });
}
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map