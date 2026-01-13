export function isValid(binaryString) {
  return /^[01]+$/.test(binaryString);
}

export function convertToDecimal(binaryString) {
  return parseInt(binaryString, 2);
}
