const router = require("express").Router();
const Product = require("../models/Product");
const checkValidObjectId = require("../middleware/checkValidObjectId")

router.get("/", async (req, res) => {
    try {
        const allProducts = await Product.find()
        res.json(allProducts)
    }
    catch (err) {
        console.log(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const { title, description, category, price, quantity } = req.body
        const createdProduct = await Product.create({ title, description, category, price, quantity })
        res.status(201).json(createdProduct)
    }
    catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: err.message,
            });
        }
        console.log(err)
    }
})

// BONUS
router.get("/low-stock", async (req,res)=>{
    try {
        const products = await Product.find()
        const lowStockProducts = []

        for (const oneProudct of products) {
            if (oneProudct.quantity < 3) {
                lowStockProducts.push(oneProudct)
            }
        }

        res.json(lowStockProducts)
    }
    catch(err){
        console.log(err)
    }


})

router.get("/statistics", async (req,res)=>{

    try{
        const products = await Product.find()
        const totalProducts = products.length
        let totalValue = 0
        let lowStockItems = 0

        for (const oneProduct of products){
            totalValue = totalValue + (oneProduct.price * oneProduct.quantity)
            if(oneProduct.quantity < 3){
                lowStockItems = lowStockItems +1
            }
        }
        res.json({
            totalProducts, totalValue, lowStockItems
        })
    }
    catch(err){
        console.log(err)
    }

})


router.get("/:productId", checkValidObjectId, async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.productId)
        if (!foundProduct) {
            return res.status(404).json({
                message: "Product Not Found",
            });
        }
        res.json(foundProduct)
    }
    catch (err) {
        console.log(err)
    }
})

router.put("/:productId", checkValidObjectId, async (req, res) => {
    try {
        const updatedProudct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedProudct) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        res.json(updatedProudct)

    }
    catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: err.message,
            });
        }
        console.log(err);
    }

})

router.delete("/:productId", checkValidObjectId, async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        res.json(deletedProduct)
    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router