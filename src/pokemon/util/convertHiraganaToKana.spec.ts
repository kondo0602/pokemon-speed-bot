import { convertHiraganaToKana } from "./convertHiraganaToKana";

test("ひらがながカタカナに変換されること", () => {
  // Arrange
  const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉっゃゅょ";
  const expected = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュョ";

  // Act
  const actual = convertHiraganaToKana(hiragana);

  // Assert
  expect(actual).toBe(expected);
});
