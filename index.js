function callBack() {
    return "Hey";
}

function receivesAFunction(callBack) {
    let hi = callBack();
    return hi
}

function returnsANamedFunction() {
    callBack();
    return callBack;
}

function returnsAnAnonymousFunction() {
   return function() {
    " "
   }
}