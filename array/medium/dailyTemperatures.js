// Problem Statement: Daily Temperatures
// Given an array temperatures of integers representing the daily temperatures, return an array answer such that, 
// for each day in the input, answer[i] is the number of days you would have to wait until a warmer temperature. 
// If there is no future day for which this is possible, answer[i] should be 0.

// Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// Explanation:
// - For day 0 (73 degrees), the next warmer day is day 1 (74 degrees), so answer[0] = 1.
// - For day 1 (74 degrees), the next warmer day is day 2 (75 degrees), so answer[1] = 1.
// - For day 2 (75 degrees), the next warmer day is day 6 (76 degrees), so answer[2] = 4.
// - For day 3 (71 degrees), the next warmer day is day 5 (72 degrees), so answer[3] = 2.
// - For day 4 (69 degrees), the next warmer day is day 5 (72 degrees), so answer[4] = 1.
// - For day 5 (72 degrees), the next warmer day is day 6 (76 degrees), so answer[5] = 1.
// - For day 6 (76 degrees), there is no future warmer day, so answer[6] = 0.
// - For day 7 (73 degrees), there is no future warmer day, so answer[7] = 0.


// Approach
// To solve this problem efficiently, we can use a monotonic decreasing stack. The key idea is to maintain a 
// stack of indices representing days in descending order of temperature values.

// Initialize an empty stack and an answer array filled with zeros, of the same length as temperatures.
// Iterate through each temperature:
// While the stack is not empty and the current temperature is warmer than the temperature at the index stored at the top of the stack:
// Pop the top of the stack and calculate the difference in indices to get the number of days until a warmer temperature.
// Push the current day's index onto the stack.
// Return the answer array, which will have the number of days for each position.
// Using a stack ensures we only go through the array once, resulting in an efficient solution.


function dailyTemperatures(temperatures) {
    // Initialize the result array with zeros, same length as temperatures
    const answer = new Array(temperatures.length).fill(0);
    // Stack to keep track of indices of temperatures
    const stack = [];
    
    // Loop through each day (temperature)
    for (let i = 0; i < temperatures.length; i++) {
        // While there's a colder temperature in the stack and the current temperature is warmer
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // Pop the colder day's index
            const prevDay = stack.pop();
            // Calculate the number of days difference
            answer[prevDay] = i - prevDay;
        }
        // Push the current day's index onto the stack
        stack.push(i);
    }
    
    return answer;
}

// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]



// Time and Space Complexity
// Time Complexity: O(n), where 
// n is the length of the temperatures array. Each element is pushed and popped from the stack at most once.

// Space Complexity: 
// O(n) for the answer array and the stack.

// Explanation
// For each temperature at index i, we check if it’s higher than the temperature at the index stored at the top of the stack.
// If it is, this means that a warmer temperature has been found for the day at the top of the stack, so we pop the 
// stack and set answer[prevDay] = i - prevDay.
// If not, we push the index i onto the stack and continue to the next day.
// Any indices remaining in the stack at the end have no future warmer temperature, so they remain 0 in answer.
