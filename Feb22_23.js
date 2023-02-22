//Note :- 
//undefined != null OR null != undefined -> false

//undefined == null  OR null == undefined  -> true
//null !== undefined OR undefined !== null -> true
//undefined === null OR null === undefined -> false

//Question :- https://www.greatfrontend.com/questions/javascript/get
export default function get(object,path,defaultValue){
    path = Array.isArray(path) ? path : path.split('.');
    let length = path.length;
    let index = 0;
    while(object!=undefined && index<length){
        object = object[String(path[index])];
        index++;
    }

    const value = index && index==length ? object : undefined;
    return value !== undefined ? value : defaultValue;
}

//Question :- https://www.greatfrontend.com/questions/javascript/array-square
Array.prototype.square = function () {
    return this.map((el) => el * el);
};

//Question :- https://www.greatfrontend.com/questions/user-interface/counter/react/solution
//Using React
import { useState } from 'react';

import './styles.css';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Clicks: {count}
            </button>
        </div>
    );
}

//Using VanillaJS
//index.html
<html>
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <button>Clicks: <span id="count">0</span></button>
        <script src="src/index.js"></script>
    </body>
</html>
//index.js
import './styles.css';

(() => {
    let count = 0;
    const $countEl = document.querySelector('#count');

    document
        .querySelector('button')
        .addEventListener('click', () => {
            count++;
            $countEl.textContent = count;
        });
})();

//https://www.youtube.com/watch?v=vxggZffOqek&t=15s
//Currying in Javascript
const add = function(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}
//Alternative solution of currying //very important question
export default function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        }

        return function (...args2) {
            return curried.apply(this, [...args, ...args2]);
        };
    };
}
console.log(add(1)(2)(3)(4)());

//Implement this code
const calc = {
    total: 0,
    add(a) {
        this.total+=a;
        return this;
    },
    multilply(a){
        this.total*=a;
        return this;
    },
    subtract(a){
        this.total-=a;
        return this;
    }
}

const result = calc.add(10).multilply(5).subtract(30).add(10);
console.log(result);


//Implement a caching function //very important question
function myMemoize(fn,context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

const clumsyProduct = (num1,num2) => {
        for(let i=1;i<=1000000000;i++){
            return num1*num2;
        }
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9467,7469));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7469));
console.timeEnd("Second call");
