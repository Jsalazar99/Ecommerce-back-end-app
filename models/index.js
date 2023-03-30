const Category = require("./Categories");
const Product = require("./Product");
const ProductTags = require("./ProductTags");
const Tag = require("./Tag");

Product.belongsTo(Category, {
    foreignKey: "category_id"
});

Category.hasMany(Product, {
    foreignKey: "category_id"
});

Product.belongsToMany(Tag, {
    foreignKey: "product_id",
    through: ProductTags
});

Tag.belongsToMany(Product, {
    foreignKey: "tag_id",
    through: ProductTags
});

module.exports = { Category, Product, ProductTags, Tag }