const News = require('../models/News');

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(news);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.getTopNews = async (req, res) => {
  try {
    const news = await News.find().populate('author', 'name').limit(6).sort({ createdAt: -1 });
    res.json(news);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate('author', 'name');
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json(news);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.createNews = async (req, res) => {
  try {
    const { title, content, category, image } = req.body;
    const newNews = new News({ title, content, category, image, author: req.user.id });
    const news = await newNews.save();
    res.json(news);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.getUserNews = async (req, res) => {
  try {
    const news = await News.find({ author: req.user.id }).sort({ createdAt: -1 });
    res.json(news);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.updateNews = async (req, res) => {
  try {
    let news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    if (news.author.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

    news = await News.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(news);
  } catch (err) { res.status(500).send('Server Error'); }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    if (news.author.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

    await news.deleteOne();
    res.json({ message: 'News removed' });
  } catch (err) { res.status(500).send('Server Error'); }
};