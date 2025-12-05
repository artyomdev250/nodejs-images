const Product = require('../mongodb/models/Product');

exports.getProducts = async (req, res) => {
    try {
        const images = await Product.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
