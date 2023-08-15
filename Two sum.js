/*
  @param {number[]} nums
  @param {number} target
  @return {number[]}
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


  */
  var twoSum = function(nums, target) {
    var hash={}; 
    for (let i = 0; i <nums.length; i++)
    {
        var differanse = target-nums[i] 
        if(differanse in hash) // i det vi finner differansen som matcher i hashmapet så har vi funnet vår match
        {
            return [hash[differanse],i];
        }
        hash[nums[i]]=i //bruker nums values som keys og dytter i hashmappet med dex plass
    }
    
    };