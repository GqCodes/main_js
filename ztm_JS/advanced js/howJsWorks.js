/* 

What is a program? - it has to allocate memory and parse & execute OR (read & run) commands.

Memory leaks - happens when there are variables or something stored in memory that is unused, filling up the memory heap. Global variables can eventually fill up the memory heap. 

Call Stack - it's what reads and executes the script. Usually in a particular order 

JS in single threaded, meaning it only has ONE call stack. Which means JS is a synchronous language.
If there are functions that will take a long time, we can use asynchronous programming to allow the program to continue while the other function finishes it's job OR we can set a timeout 

JS Run-Time Environment consist of: 
-The browser: JS, Memory Heap  & the call stack
-Web API's: DOM, AJAX(XMLHttpRequest), Timeout(setTimeout) 
-Callback Queue: onClick, onLoad, onDone
-Event Loop - continuosly checks the call stack to see what, if anything, needs to be executed.

*/

// Recursion - when a function calls itself. this can lead to overflow of the call stack or "Stack Overflow"
function foo() {
  foo();
}
