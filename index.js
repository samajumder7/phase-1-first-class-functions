function receivesAFunction(invokeThis){
    invokeThis();
}
function returnsANamedFunction(){
    function areaTri(b,h){
        const area = b * h * 0.5;
        return area;
    }
    return areaTri;
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("I am a nameless function, here to help if i can.");
    }
}