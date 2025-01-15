exports.handler = async (event) => {
    try {
        // Parse numbers from the event body
        const { number1, number2 } = JSON.parse(event.body);

        // Validate inputs
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Invalid input. Both number1 and number2 must be numbers." }),
            };
        }

        // Calculate the sum
        const result = number1 + number2;

        // Return the result
        return {
            statusCode: 200,
            body: JSON.stringify({ result }),
        };
    } catch (error) {
        // Handle errors
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred while processing your request." }),
        };
    }
};
