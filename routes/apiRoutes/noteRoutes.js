const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require ('../../db/db.json');


router.get('/notes', (req, res) => {
// parseNote = JSON.parse(notes);
  return res.json(notes);
});


// router.get('/api/notes', (req, res) => {
//     // const retrieveNote = JSON.parse(db);
//     // res.sendFile(path.join(__dirname, '../../db/db.json'));
//     // res.json(retrieveNote);
//     res.json(dataBase);
// });

// router.get('/api/notes', (req, res) => {
//     // Inform the client
//     res.json(`${req.method} request received to get reviews`);
  
//     // Log our request to the terminal
//     console.info(`${req.method} request received to get reviews`);
//   });

// router.post('/api/notes', (req, res) => {
//     const note = req.body;
    // fs.readFile('../../db/db.json', (data));
    // let saveNote = JSON.parse(data)
    
    // fs.readFile('../../db/db.json', JSON.parse(db), function () {
    //     res.json(db);
    // });

//     db.push(note);
//     fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify( { db }));
//     res.json(note);

// });

module.exports = router;