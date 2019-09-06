
var assert = {
    isTrue: function (assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        }
        else
            console.log("The circle has a radius of 10")
    }
};