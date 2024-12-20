function greeting(greetingHandler, name) {
    greetingHandler(name);
}
function greetingHandler(name) {
    console.log('Hello, World !!', name);
}
greeting(greetingHandler);