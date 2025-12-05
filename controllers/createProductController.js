const Product = require('../mongodb/models/Product');

const createProduct = async (req, res) => {
    try {
        const {
            name,
            sku,
            brand,
            category,
            availableQuantity,
            status,
            price
        } = req.body;

        const imageUrl = req.file?.path || null;

        const product = await Product.create({
            name,
            sku,
            brand,
            category,
            availableQuantity,
            status,
            price,
            imageUrl
        });

        res.json({
            message: "Product created successfully",
            product
        });

    } catch (error) {
        console.error('Create product error:', error);
        res.status(500).json({ error: error.message || "Failed to create product" });
    }
};

module.exports = createProduct;
