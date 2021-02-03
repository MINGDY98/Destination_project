var express = require('express');
var mysql = require('../utils/pool');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/place/:place', async function(req, res) {
  const { place } = req.params;
  try{
    const sql = `
      SELECT * 
      FROM Course
      LEFT JOIN Area
      ON Course.area = Area.areaId
      WHERE classification = ?
    `
    const result = await mysql.execute(sql, [
      place
    ])
    res.status(200).json({ code: 200, result: "success", data: result[0] });
  }catch(e){
    res.status(200).json({ code: 500, result: "error", message: e.message });
  }
})


router.get('/course/:course', async function(req, res) {
  const { course } = req.params;
  try{
    const sql = `
      SELECT * 
      FROM Course
      WHERE courseId = ?
    `
    const result = await mysql.execute(sql, [
      course
    ])
    res.status(200).json({ code: 200, result: "success", data: result[0] });
  }catch(e){
    res.status(200).json({ code: 500, result: "error", message: e.message });
  }
})

router.get('/attraction/:attraction', async function(req, res) {
  const { attraction } = req.params;
  
  try{
    const sql = `
      SELECT * 
      FROM Attraction
      WHERE attractionId = ?
    `
    const result = await mysql.execute(sql, [
      attraction
    ])
    res.status(200).json({ code: 200, result: "success", data: result[0] });
  }catch(e){
    res.status(200).json({ code: 500, result: "error", message: e.message });
  }
})

module.exports = router;
