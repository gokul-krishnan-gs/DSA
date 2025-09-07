
var numberOfSteps = function(num) {
    let steps = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;   // even → divide by 2
        } else {
            num = num - 1;   // odd → subtract 1
        }
        steps++;
    }

    return steps;
};
