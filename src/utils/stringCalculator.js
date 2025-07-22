export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numberStr = numbers;

  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n(.*)/);
    if (match) {
      delimiter = new RegExp(match[1]);
      numberStr = match[2];
    }
  }

  const numberArray = numberStr.split(delimiter).map(n => parseInt(n, 10)).filter(n => !isNaN(n));

  const negatives = numberArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 1);
}
