var strs = ["eat","tea","tan","ate","nat","bat"]
groupanagram(strs);

function groupanagram(strs) {
    let hashmap ={};
    
    for (let str of strs)
    {
    let sorted = str.split("").sort().join("");
    if(!hashmap[sorted]){
        hashmap[sorted]=[]
    };
    hashmap[sorted].push(str);
}
    for (key in hashmap)
    {
        console.log(hashmap)
        console.log(hashmap[key])
        
    }
    return hashmap[key];
}
https://leetcode.com/problems/group-anagrams/submissions/1021946057/