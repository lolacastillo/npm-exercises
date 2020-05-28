import {niceMsg} from './say-hello.js                                                                                                             ';
const $ = require('jquery');

var sayHello= () => console.log('hello!');

sayHello();

$('body').css('background-color','blue');

console.log(niceMsg());