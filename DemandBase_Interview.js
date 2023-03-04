
// function reverseString(arr,srt,end){// a, h, s, i , m, i ,N
//     if(srt>=end){
//      return arr.join('');
//     }
//     [arr[srt],arr[end]] = [arr[end],arr[srt]];

//     return reverseString(arr,srt+1,end-1);
// }

// const string = "Nimisha";

// console.log(reverseString(string.split(''),0,string.length-1));



// function isStrBalanced(arr){
//     let stack  = []; //[ '[', '{',  
//     let ans =  true;
//     for (let br of arr) {//[{]}()
//         if(ans == false){
//             return false;
//         }
//         switch(br){
//             case '[': 
//             case '{':
//             case '(': stack.push(br);
//             break;
//             case ')': if(stack.length>=0 && stack[stack.length-1]==='('){
//                 stack.pop();
//             }else {
//                 ans = false;
//             }
//             break;
//             case '}': if (stack.length >= 0 && stack[stack.length - 1] === '{') {
//                 stack.pop();
//             }else {
//                 ans = false;
//             }
//             break;
//             case ']': if (stack.length >= 0 && stack[stack.length - 1] === '[') {
//                 stack.pop();
//             } else {
//                 ans =  false;
//             }
//             break;
//             default: return true;
//         }
//     }
//     if(stack.length==0){
//         return true;
//     }
//     return false;
// }


// let str1  = "[{()}]"

// let str2 = "[]{}()"

// let str3 = "[{]}()"

// console.log(isStrBalanced("[".split('')));


//const A= [3, 0, 2, 0, 4]
const A = [4, 2, 0, 3, 2, 5];
//const A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
//const A = [3, 0, 4, 0, 4] 

//A = [3,3,4,4,4]
//B=[4,4,4,4,4]

//3,0,4


function waterProblem(A){
    let left = new Array(A.length);
    let right = new Array(A.length);
    left[0] = A[0];
    right[A.length-1] = A[A.length-1];
   for(let i=1;i<A.length;i++){
    left[i] = Math.max(A[i],left[i-1]);
   }
    for (let i = A.length-2; i >=0; i--) {
        right[i] = Math.max(A[i],right[i+1]);
    }
    let sum = 0;
    for(let i=1;i<A.length-1;i++){
    let potential = Math.min(left[i],right[i]);
    sum += potential - A[i];
    }
    return sum;
}

console.log(waterProblem(A));

