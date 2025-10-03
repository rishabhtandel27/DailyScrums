var num=[1,2,3,4,5,6,6];

function rotate(k){
    let rotated = [];

    for(let i=0; i<num.length; i++){
        rotated[(i+k)%num.length] = num[i];
    }
    console.log("rotate " + k + " steps to the right:",rotated);
}

rotate(3);
