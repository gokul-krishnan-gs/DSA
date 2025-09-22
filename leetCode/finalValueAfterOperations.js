const finalValueAfterOperations = function(operations) {
     let X = 0;

    for (let op of operations) {
        if (op.includes('++')) {
            X += 1;
        } else {
            X -= 1; 
        }
    }

    return X;   
};
