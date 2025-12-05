const Product = require('../mongodb/models/Product');
const cloudinary = require('../config/cloudinary');

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        let newImageUrl = product.imageUrl;

        if (req.file) {
            if (product.imageUrl) {
                const parts = product.imageUrl.split('/');
                const filename = parts.pop();
                const folder = parts.pop();
                const fileWithoutExt = filename.split('.')[0];
                const publicId = `${folder}/${fileWithoutExt}`;

                await cloudinary.uploader.destroy(publicId);
            }

            newImageUrl = req.file.path;
        }

        product.name = req.body.name || product.name;
        product.sku = req.body.sku || product.sku;
        product.brand = req.body.brand || product.brand;
        product.category = req.body.category || product.category;
        product.availableQuantity = req.body.availableQuantity ?? product.availableQuantity;
        product.status = req.body.status || product.status;
        product.price = req.body.price ?? product.price;
        product.imageUrl = newImageUrl;

        await product.save();

        res.json({
            message: 'Product updated successfully',
            product
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update product' });
    }
};

module.exports = updateProduct;
