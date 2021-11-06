/**
 *
 * @author Md. Masud Rana
 * [Problem ref]{@link  https://leetcode.com/problems/two-sum/}
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let towSum = (nums, target) => {
  let sumResult = [];
  let obj = {};

  for (let index = 0; index < nums.length; index++) {
    const value = target - nums[index];
    if (obj.hasOwnProperty(value)) {
      sumResult = [obj[value], index];
      break;
    } else {
      obj[nums[index]] = index;
    }
  }
  return sumResult;
};
