/* Every day you rent the car costs `$40`.
If you rent the car for `7` or more days, you
get `$50` off your total. Alternatively,
if you rent the car for `3` or more days,you
get `$20` off your total.

Implement `calculateRentalCost` function
that returns the total amount for different
number of days.
*/
/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40 * days;

  if (days >= 7) {
    return rentCost - 50;
  }

  if (days >= 3) {
    return rentCost - 20;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
