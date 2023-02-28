//https://css-tricks.com/debouncing-throttling-explained-examples/

//Use debounce, throttle and requestAnimationFrame to optimize your event handlers.Each technique is slightly different, but all three of them are useful and complement each other.

//In summary:

//debounce: Grouping a sudden burst of events(like keystrokes) into a single one.
//throttle: Guaranteeing a constant flow of executions every X milliseconds.Like checking every 200ms your scroll position to trigger a CSS animation.By using _.throttle, we don’t allow to our function to execute more than once every X milliseconds.The main difference between this and debouncing is that throttle guarantees the execution of the function regularly, at least every X milliseconds.The same way than debounce, throttle technique is covered by Ben’s plugin, underscore.js and lodash.
//requestAnimationFrame: a throttle alternative.When your function recalculates and renders elements on screen and you want to guarantee smooth changes or animations.Note: no IE9 support.

// console.log('script start'); --------1

// setTimeout(function () {
//     console.log('setTimeout'); --------2
// }, 0);

// Promise.resolve()
//     .then(function () {
//         console.log('promise1'); --------3
//     })
//     .then(function () {
//         console.log('promise2'); --------4
//     });

// console.log('script end'); --------5

// The reason behind why the ans is 1 5 3 4 2 because setTimeout function only run when nothing is present in microtask queue or call stack.When the promise resolve then their fullfill function go in the microtask queue and wait for the execution because there is some global code available for execution, when the global code executed the microtask queue function comes in call stack and execute one by one.After all the microtask function is done then setTimeout function will run which is waiting in the callback queue.