export const fractionToDecimal = (fraction: string): number => {
  // split the string into  two
  let [leftSide, rightSide] = fraction.trim().split('.');
  let base = 2;

  return (
    (parseInt(leftSide.replace('-', ''), base) +
      (rightSide || '').split('').reduceRight((sum, bit) => (sum + parseInt(bit, base)) / base, 0)) *
    (fraction[0] === '-' ? -1 : 1)
  );
};
export const stringToFraction = (fractionString: string): string => {
  let nums = fractionString.split(' ');
  let leftSide = '';
  let rightSide = '';
  let number = 0;
  let fraction = '';
  if (nums.length > 1) {
    number = Number(nums[0]);
    fraction = nums[1];
  } else if (nums.length === 1) {
    if (nums[0].indexOf('/') >= 0) {
      fraction = nums[0];
      let [numerator, denominator] = fraction.split('/');
      let index = 0;
    } else {
      number = Number(nums[0]);
    }
  }

  // convert number to binary
  leftSide = number.toString(2);

  return `${leftSide}${rightSide && '.' + rightSide}`;
};
