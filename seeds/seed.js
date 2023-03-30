const sequelize = require('../config/connection');
const { Category, Product, ProductTags, Tag } = require('../models');

const categoryData = [
    {
      category_name: 'Shirts',
    },
    {
      category_name: 'Shorts',
    },
    {
      category_name: 'Music',
    },
    {
      category_name: 'Hats',
    },
    {
      category_name: 'Shoes',
    },
  ];

  const productData = [
    {
      product_name: 'Plain T-Shirt',
      price: 14.99,
      stock: 14,
      category_id: 1,
    },
    {
      product_name: 'Running Sneakers',
      price: 90.0,
      stock: 25,
      category_id: 5,
    },
    {
      product_name: 'Branded Baseball Hat',
      price: 22.99,
      stock: 12,
      category_id: 4,
    },
    {
      product_name: 'Top 40 Music Compilation Vinyl Record',
      price: 12.99,
      stock: 50,
      category_id: 3,
    },
    {
      product_name: 'Cargo Shorts',
      price: 29.99,
      stock: 22,
      category_id: 2,
    },
  ];

  const productTagData = [
    {
      product_id: 1,
      tag_id: 6,
    },
    {
      product_id: 1,
      tag_id: 7,
    },
    {
      product_id: 1,
      tag_id: 8,
    },
    {
      product_id: 2,
      tag_id: 6,
    },
    {
      product_id: 3,
      tag_id: 1,
    },
    {
      product_id: 3,
      tag_id: 3,
    },
    {
      product_id: 3,
      tag_id: 4,
    },
    {
      product_id: 3,
      tag_id: 5,
    },
    {
      product_id: 4,
      tag_id: 1,
    },
    {
      product_id: 4,
      tag_id: 2,
    },
    {
      product_id: 4,
      tag_id: 8,
    },
    {
      product_id: 5,
      tag_id: 3,
    },
  ];
  const tagData = [
    {
      tag_name: 'rock music',
    },
    {
      tag_name: 'pop music',
    },
    {
      tag_name: 'blue',
    },
    {
      tag_name: 'red',
    },
    {
      tag_name: 'green',
    },
    {
      tag_name: 'white',
    },
    {
      tag_name: 'gold',
    },
    {
      tag_name: 'pop culture',
    },
  ];
  
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const categories = await Category.bulkCreate(categoryData);

    const products = await Product.bulkCreate(productData);
  
    const tags = await Tag.bulkCreate(tagData);

    const productTags = await ProductTags.bulkCreate(productTagData);
  
  
    process.exit(0);
  };
  
  seedDatabase();