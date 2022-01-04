function receivesAFunction (thing) {
    return thing();
}
function returnsANamedFunction () {
    return receivesAFunction;
}
function returnsAnAnonymousFunction () {
    return () => {};
}