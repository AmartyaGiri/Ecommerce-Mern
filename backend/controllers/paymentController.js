const razorpay = require('razorpay');
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const instance = new razorpay({
    
    key_id: process.env.RAZOR_PAY_ID,
    key_secret: process.env.RAZOR_PAY_SECRET_KEY
});

exports.checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    }

    try {
        const response = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order: response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
            });
    }
}

exports.getKey = async (req, res) => {
    
    res.status(200).json({
        
        key: process.env.RAZOR_PAY_ID
    })
}

