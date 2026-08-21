var groupAnagrams = function(strs) {
    let map={};
    for(let i=0;i<strs.length;i++){
        let sortedStrs=strs[i].split("").sort().join("");
        if(!map[sortedStrs]){
            map[sortedStrs]=[strs[i]];
        }
        else{
            map[sortedStrs].push(strs[i]);
        }
    }
    return [...Object.values(map)];
};