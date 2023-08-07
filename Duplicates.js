/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/

let nums = [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function(nums)  {
    for (let i = 0; i<nums.length; i++)
    {
        for (let j = 1; j<nums.length; j++){
        
           let duplicate = nums[j] == nums[i]

            if(duplicate)
            return true;
        }
        return false;
    }
};
https://leetcode.com/problems/contains-duplicate/submissions/1014545565/