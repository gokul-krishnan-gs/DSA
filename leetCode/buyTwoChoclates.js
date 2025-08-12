const buyChoco = function(prices, money) {
    // Step 1: Sort prices in ascending order
    prices.sort((a, b) => a - b);

    // Step 2: Calculate the cost of the two cheapest chocolates
    let cost = prices[0] + prices[1];

    // Step 3: Check if you can afford them
    if (cost > money) {
        return money; // Can't buy without going into debt
    }

    // Step 4: Return leftover money
    return money - cost;
};