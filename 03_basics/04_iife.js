
// IIFE -> Immediately Invoke Functions Expressions

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();
// chai()

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
} )('Deepali')