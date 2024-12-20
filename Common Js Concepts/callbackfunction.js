function greeting(greetingHandler, name) {
    greetingHandler(name);
}
function greetingHandler(name) {
    console.log('Hello, World ! Good Morning,', name);
}
greeting(greetingHandler, 'I am Amit Sarkar');