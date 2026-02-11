//View: Displays the data to the user.
import readline from "readline/promises";// Import the readline module to handle user input from the terminal
import { stdin as input, stdout as output} from "process"; // Import stdin and stdout from the process module to use as input and output for the readline interface
//stdin= standard input, the input stream for the terminal
//stdout= standard output, the output stream for the terminal

class InputHandler {
    /**
     * 
     * @param {string} question 
     * @returns {Promise<string>} The user's input as a string
     */

    async ask(question) { // Ask a question to the user and return their input
        const rl = readline.createInterface({input, output}); // Create a readline interface using the standard input and output
        const answer = await rl.question(question); // Ask the question and wait for the user's answer
        rl.close(); // Close the readline interface after getting the answer
        return answer; // Return the user's answer

    }
}

export default new InputHandler(); // Export an instance of the InputHandler class for use in other parts of the application
