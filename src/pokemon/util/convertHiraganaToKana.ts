export const convertHiraganaToKana = (hiragana: string): string => hiragana.replace(/[ぁ-ん]/g, (s: string) => String.fromCharCode(s.charCodeAt(0) + 0x60));
