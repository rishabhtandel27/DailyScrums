function reverseVowels(s) {
    const vowels = "aeiouAEIOU";
    let arr = s.split("");
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
            continue;
        }
        if (!vowels.includes(arr[right])) { 
            right--; continue; 
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++; right--;
    }

    return arr.join("");
}

console.log(reverseVowels("YIceCreAmO")); 
