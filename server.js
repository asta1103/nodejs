const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :body')); 


app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const Num1 = Number(num1);  
    const Num2 = Number(num2);
    const sum = Num1 + Num2;
    res.json({ receivedData: sum });
    console.log('ANSWER IS: ' + sum);
 
});

app.post('/subtraction', (req, res) => {
    const { num1, num2 } = req.body;
    const Num1 = Number(num1);
    const Num2 = Number(num2);
    const difference = Num1 - Num2;  
    res.json({ receivedData: difference });
    console.log('ANSWER IS: ' + difference);
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const Num1 = Number(num1);
    const Num2 = Number(num2);
    const product = Num1 * Num2;  
    res.json({ receivedData: product });
    console.log('ANSWER IS: ' + product);
});

app.post('/division', (req, res) => {
    const { num1, num2 } = req.body;
    const Num1 = Number(num1);
    const Num2 = Number(num2);
    const quotient = Num1 / Num2;  
    res.json({ receivedData: quotient });
    console.log('ANSWER IS: ' + quotient);
});

app.get("/home", (req, res) =>{
    res.json("Message: My first arithmetic web services API");
})
app.listen(11003);