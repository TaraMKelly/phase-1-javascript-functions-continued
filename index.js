// Your code here
function saturdayFun(funThing="roller-skate") {
    return `This Saturday, I want to ${funThing}!`;
}
saturdayFun();

const mondayWork = function(thingToDo="go to the office") {
    return `This Monday, I will ${thingToDo}.`;
}

const wrapAdjective = function(someFlair="*") {
    return function (anAdjective="special") {
        return `You are ${someFlair}${anAdjective}${someFlair}!`;
    }
}
