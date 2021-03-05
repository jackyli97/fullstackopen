const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: "Machine Learning",
    author: "Scale AI",
    url: "reddit.com/ML",
    likes: 324,
  },
  {
    title: "Lebron Sucks",
    author: "Skip Bayless",
    url: "reddit.com/undisputed",
    likes: 10000,
  },
  {
    title: "Buy Bitcoin",
    author: "Elon Musk",
    url: "reddit.com/elon",
    likes: 5242232,
  }
];

const blogsInDb = async () => {
    const blogs = await Blog.find({});
    return blogs.map(blog=>blog.toJSON());
}

module.exports = {
    initialBlogs, blogsInDb 
}