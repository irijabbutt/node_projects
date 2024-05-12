"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  export (file sy koi chez send krni)
// default export (1 file me 1 hi default export hoti h)
// export{}; // object based export{key:value}
// jis file  m apko data chahiye waha import use krna
// import {a,b,c} from "./export.js";
const test_js_1 = __importDefault(require("./test.js"));
const test_js_2 = require("./test.js");
console.log("a", test_js_1.default);
console.log("abc", test_js_2.abc);
console.log(test_js_2.array, test_js_2.sum, test_js_2.obj);
