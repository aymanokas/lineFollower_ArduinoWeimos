const express = require('express');
const app = express();



/*Methodes 
app.get(); (if url == '   ' {})
app.post();
app.put();
app.delete();
*/

app.get('/' , (req , res) => {
    res.send ('Hello World');
});

var test = [];

app.get('/api/test/' , (req , res) => {
    console.log(req.query.c1 + " "  + req.query.c2 + " " + req.query.c3 + " " + req.query.c4);
test = [req.query.c1,req.query.c2,req.query.c3,req.query.c4];
});

app.get('/api/gettest/' , (req , res) => {
    res.json (test);

});

//PORT
const port = 3000;
app.listen(port, () =>{
    console.log('M listening on port ' + port);
})