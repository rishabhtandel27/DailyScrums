function removeDuplicates(nums) {
    if (nums.length === 0){
        return 0;
    }

    let k = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k; 
}


let nums = [1, 1, 2, 2];
let k = removeDuplicates(nums);

console.log(k);        
console.log(nums.slice(0, k));     
