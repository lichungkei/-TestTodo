const { Router } = require('express');
const todo = require('./todo');

const router = new Router();

// GET /list
router.get('/list', async (req, res) => {
  const todos = await todo.list();
  res.status(200).json({
    code: 200,
    body: todos,
  });
});

// POST /add
router.post('/add', async (req, res) => {
  const { task } = req.body;
  const result = await todo.add(task);
  if (result) {
    res.status(200).json({
      code: 200,
      body: result,
    });
  } else {
    res.status(400).json({
      code: 400,
      body: 'Task not added',
    });
  }
});

// DELETE /remove
router.delete('/remove', async (req, res) => {
  const { name } = req.body;
  const result = await todo.remove(name);
  if (result) {
    res.status(200).json({
      code: 200,
      body: result,
    });
  } else {
    res.status(400).json({
      code: 400,
      body: 'Task not removed',
    });
  }
});

module.exports = router;