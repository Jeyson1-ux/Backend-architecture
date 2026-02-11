import usersModel from '../model/UsersModel.js'

class UsersController {

  // Middleware för att verifiera att userId är giltigt
  verifyUserId(req, res, next, id) {
    const userId = parseInt(id, 10);
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    req.userId = userId;
    next();
  }

  // GET /users
  async getAllUsers(req, res, next) {
    try {
      const users = await usersModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch users' });
    }
  }

  // Get by Id
  async getUserById(req, res, next) {
    try {
        const user = await usersModel.getUserById(req.userId);
        if (!user) return res.status(404).json({ error: 'User not found'});
        res.json(user); // returnera användaren som JSON
    } catch (error) {
        res.status(500).json({error: 'Could not fetch user', details: error.message});
    }
  }


  // POST /users
  async addUser(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const id = await usersModel.addUser(username, email, password);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: 'Could not add user', details: error.message });
    }
  }

  // PUT /users/:id
  async updateUser(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const success = await usersModel.updateUser(req.userId, username, email, password);
      if (success) {
        res.json({ message: 'User updated successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not update user', details: error.message });
    }
  }

  // DELETE /users/:id
  async deleteUser(req, res, next) {
    try {
      const success = await usersModel.deleteUser(req.userId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Could not delete user', details: error.message });
    }
  }

  // GET /users/search?query=...
  async searchUsers(req, res, next) {
    try {
      const searchString = req.query.query || '';
      const users = await usersModel.searchUsers(searchString);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Search failed', details: error.message });
    }
  }
}

export default new UsersController();
