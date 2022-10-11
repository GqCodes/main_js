/* 

ARE GREAT FOR CODE REUSEABILITY. 

ALSO HELPS WITH DEPENDENCY RESOLUTION (script tags in order so everything runs in order) 

BROWSERIFY introduced modules, exports, require to simplify the scripts on the HTML document.

modules are like 'a la carte' for JS. Pull from here...pull from there just using import & export 


*/

// { Module Example with ES6 + Webpack2 (module bundler so browsers can understand whats going on) }
// js1
export const add = (a, b) => a + b;
// or
export default function add() {
  return a + b;
}

// js2
import { add } from "./add";
// or
import add from "./add";
