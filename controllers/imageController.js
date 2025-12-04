const Image = require('../mongodb/models/Data');

exports.getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};
