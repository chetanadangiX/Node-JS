const EventEmitter = require('events');  //imported Eventemitter class
const emitter= new EventEmitter(); // create an instance of EventEmitter
emitter.on("greet",()=>  //define an event Listener
{
    console.log('Hello Chetana Dangi'); // callback function
});
emitter.emit("greet"); //call or trigger(emit) the "greet " event 


emitter.on("greet",(username)=>
{
    console.log('Hello  ${username}');
});
emitter.emit("greet","Chetana Dangi");



emitter.on("greet",(arg) =>
{
    console.log('hello  ${arg.username},You are ${arg.prof},RIGHT');

});
emitter.emit("greet",{ username:"Chetana Dangi", prof:"Student"});