const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
  let response = {
    message: "This is a JSON POST response."
  }
  res.send(response);
});

module.exports = router;
