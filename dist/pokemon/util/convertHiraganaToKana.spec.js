"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertHiraganaToKana_1 = require("./convertHiraganaToKana");
test("ひらがながカタカナに変換されること", () => {
    // Arrange
    const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉっゃゅょ";
    const expected = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュョ";
    // Act
    const actual = (0, convertHiraganaToKana_1.convertHiraganaToKana)(hiragana);
    // Assert
    expect(actual).toBe(expected);
});
