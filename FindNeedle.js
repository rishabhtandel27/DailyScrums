function findNeedle(haystack, needle) {
    if (needle.length == 0) return 0;
    if (needle.length > haystack.length) return -1;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let found = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }
    return -1;
}

let haystack1 = "sabutsad";
let needle1 = "sad";
console.log("Haystack:", haystack1);
console.log("Needle:", needle1);
console.log("Index:", findNeedle(haystack1, needle1));

