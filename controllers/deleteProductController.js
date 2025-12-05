const Product = require('../mongodb/models/Product');
const cloudinary = require('../config/cloudinary');

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        let publicId = null;

        if (product.imageUrl) {
            const parts = product.imageUrl.split('/');
            const filename = parts.pop();
            const folder = parts.pop();
            const fileWithoutExt = filename.split('.')[0];

            publicId = `${folder}/${fileWithoutExt}`;
        }

        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }

        const deletedProduct = await Product.findByIdAndDelete(id);

        res.json({
            message: 'Product and its image deleted successfully',
            deletedProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

module.exports = deleteProduct;
