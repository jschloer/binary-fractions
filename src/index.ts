export const fractionToDecimal = (fraction: string): number => {
  // split the string into  two
  const [leftSide, rightSide] = fraction.trim().split('.');
  const base = 2;

  return (
    (parseInt(leftSide.replace('-', ''), base) +
      (rightSide || '').split('').reduceRight((sum, bit) => (sum + parseInt(bit, base)) / base, 0)) *
    (fraction[0] === '-' ? -1 : 1)
  );
};
export const stringToFraction = (fractionString: string): string => {
  const nums = fractionString.split(' ');
  let leftSide = '';
  const rightSide = '';
  let num = 0;
  let fraction = '';
  if (nums.length > 1) {
    num = Number(nums[0]);
    fraction = nums[1];
  } else if (nums.length === 1) {
    if (nums[0].indexOf('/') >= 0) {
      fraction = nums[0];
      const [numerator, denominator] = fraction.split('/');
      const index = 0;
    } else {
      num = Number(nums[0]);
    }
  }

  // convert number to binary
  leftSide = num.toString(2);

  return `${leftSide}${rightSide && '.' + rightSide}`;
};
