const express = require('express');
const router = express.Router();
const { createTin, getAllTins, updateTin, deactivateTin, activateTin, deleteTin } = require('../controllers/tinController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth(), createTin);
router.get('/', auth(), getAllTins);
router.put('/:id', auth(['admin']), updateTin);
router.put('/:id/deactivate', auth(['admin']), deactivateTin);
router.put('/:id/activate', auth(['admin']), activateTin);  // NEW route
router.delete('/:id', auth(['admin']), deleteTin);

module.exports = router;
