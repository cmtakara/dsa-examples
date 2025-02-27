// The idea is that you are starting at the first element and keep track of the largest sum
// negative numbers do no contribute to a larger sum, 
// at each element, compare 
const maxSubArray = function(nums) {

    // set both the max_store (which is the largest max) and the max_sum (which is the current max)
    // to the first number in the array
    let max_store = nums[0], max_sum = nums[0];

    for (let i=1; i<nums.length; i++) {
        // go through the array, for each element, look at whether adding it
        // to the sum increases the sum, 
        // if it does, add it, if not, start over
        max_sum = Math.max(max_sum + nums[i], nums[i]);
        
        // compare this max to the previouse max
        // keep the biggest one
        max_store = Math.max(max_store, max_sum);
    }

    return max_store;
};

let test1 = [-2, -5, -1], test2 = [-3, 2, 4, 0, -7, 2], test3 = [1, 2, 3, 4], test4 = [-2,1,-3,4,-1,2,1,-5,4];


console.log (`The max sum in the array ${test1} is ${maxSubArray(test1)}`);
console.log (`The max sum in the array ${test2} is ${maxSubArray(test2)}`);
console.log (`The max sum in the array ${test3} is ${maxSubArray(test3)}`);
console.log (`The max sum in the array ${test4} is ${maxSubArray(test4)}`);