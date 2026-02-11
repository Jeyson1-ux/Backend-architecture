import DatabaseService from "./src/service/DatabaseService.js";

import menu from "./src/Menu.js";

async function main() {
    await DatabaseService.connect(); // Connect to the database before starting the application

    let running = true; // Variable to control the main loop of the application
    do {
        menu.show(); //display the whole menu
        running = await menu.handleInput(); // Handle user input and update the running variable based on the user's choice
        
    } while (running); // Continue the loop as long as running is true
    
    await DatabaseService.closeConnection(); // Close the connection to the database when the application is exiting
    process.exit(0); // Exit the application gracefully, 0 means that the process exited without any errors
}

main(); // Call the main function to start the application

