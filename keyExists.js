// Detect if a key exists in an object.
// Includes keys whose value is `undefined`.
// Also includes non-enumerable keys in ECMAScript 5.
// Does not include properties from the object's prototypes.

function keyExists(obj, key) {
    var objectProperties = Object.getOwnPropertyNames(obj);
    return objectProperties.indexOf(key) > -1;
}

