"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHiraganaToKana = void 0;
const convertHiraganaToKana = (hiragana) => {
    return hiragana.replace(/[ぁ-ん]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });
};
exports.convertHiraganaToKana = convertHiraganaToKana;
