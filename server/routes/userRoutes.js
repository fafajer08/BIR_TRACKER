const express = require('express');
const router = express.Router();
const { 
  getAllUsers, 
  updateUserRole, 
  getMyProfile, 
  updateMyProfile 
} = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/me', auth(['user', 'admin']), getMyProfile);
router.put('/me', auth(['user', 'admin']), updateMyProfile);

router.get('/', auth(['admin']), getAllUsers);
router.put('/:id', auth(['admin']), updateUserRole);


module.exports = router;
