const cors = require('cors');
const express = require('express');
const path = require('path'); //built in module
const app = express();
const stripe = require('stripe')("sk_test_NoyOCnlCTQrSWnCMVF9RJY3b00WSeEPIeG");
const uuid = require('uuid/v4');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/*', (req, res) => {

        console.log('hi from app.get');
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });

}
app.get("/", (req,res)=>{
    res.send("It works!!!");
    console.log("Get is working");
})
app.use(cors());
app.post("/payment",(req,res)=>{
    const {product, token} = req.body;
    console.log("Product", product);
    console.log("Price", product.price);
    const idempontencyKey = uuid() //Makes sure same user doesnt get charged twice
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount:product.price*100,
            currency: 'usd',
            customer: customer.id,
            receiptEmail: token.email,
            description: product.name,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        },{idempontencyKey})
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
    })
})
//LISTEN
app.listen(port, ()=> console.log(`Server is starting at ${port}`))