//Objective is the same as 'Majority Element' except with ⌊ n/3 ⌋ instead of ⌊ n/2 ⌋

let nums = [1,1,1,3,3,2,2,2]


//O(n) solution that uses a hashmap to keep track of the frequency of each element

let majority = Math.floor(nums.length / 3)
let map = {}

for (let num of nums) {
    if (!map[num]) {
        map[num] = 1
    } else {
        map[num]++
    }
}

return Object.keys(map).filter(key => map[key] > majority)