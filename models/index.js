// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    foreignKey: "category_id",
    unique: false
  }
}),

// Categories have many Products
Category.hasMany(Product, {

    foreignKey: "category_id",
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: "product_id"
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: "Tag_id"
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
