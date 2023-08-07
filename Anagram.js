
var isAnagram = function(s, t) {
    let str1 = s.split('').sort().join('').toLowerCase(); //split gjør det om til array, sortererer det, tilbake til string
    let str2 = t.split('').sort().join('').toLowerCase(); 
    return (str1 === str2)
  
  };
  https://leetcode.com/problems/valid-anagram/submissions/1014638934/