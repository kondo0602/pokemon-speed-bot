export const convertHiraganaToKana = (hiragana: string): string => {
  return hiragana.replace(/[ぁ-ん]/g, (s: string) => {
    return String.fromCharCode(s.charCodeAt(0) + 0x60);
  });
};
