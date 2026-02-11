import InputHandler from "./view/InputHandler.js";
import UsersController from "./controller/UsersController.js";

class Menu {
    show() { // Display the menu options to the user
        console.log (` 
            ----- Menu ----
            1. Show Users
            2. Add User
            3. Update user
            4. Delete user
            5. Search user
            6. Exit`);
        }
    
    async handleInput() { // Handle user input and call the appropriate controller methods based on the user's choice
        const choice = await InputHandler.ask("Enter your choice: ");
        switch (choice) { //Switch = A control flow statement that allows you to execute different code blocks based on the value of a variable or expression
            case "1":
                await UsersController.showUsers(); // Call the showUsers method of the UsersController to display the list of users
                break;
            case "2": 
                const name = await InputHandler.ask("Enter name: ");
                const email = await InputHandler.ask("Enter email: ");
                const password = await InputHandler.ask("Enter password:");
                await UsersController.addUser(name, email, password); // Call the adduser method of the UsersController to add a new user to the database
                break;
            case "3":
                const idToUpdate = parseInt (await InputHandler.ask("Enter user ID to update:")) // Ask the user for the ID of the user they want to update
                const newemail = await InputHandler.ask("Enter email: ");
                const newpassword = await InputHandler.ask("Enter password:");
                await UsersController.updateUser(idToUpdate, newemail, newpassword);
                break;

            case "4":
                const idToDelete = parseInt (await InputHandler.ask("Enter ID to Delete: ")); // Ask the user for the ID of the user they want to delete
                await UsersController.deleteUser(idToDelete); // Call the deleteUser method of the UsersController to delete the user from the database
                break;

            case "5":
                const searchString = await InputHandler.ask("Enter search string (name or email): ");
                await UsersController.searchForUsers(searchString); // Call the searchForUsers method of the UsersController to 
                // search for users based on the provided search string and display the results to the user
                break;
            case "6":
                console.log("Exiting the program..."); // Log a message to the console indicating that the program is exiting
                return false; // Return false to indicate the exit of the program
                default:
                    console.log("Invalid choice. Please try again.")
        }
        return true; // Return true to indicate that the program should continue running
    }
        
}

export default new Menu() // exportera en instans av Menu-klassen så att den kan användas i andra delar av applikationen, 
// såsom i app.js där den importeras och används för att visa menyn och hantera användarens input