'use strict';
const {
  Model
} = require('sequelize');

/**
 * @swagger
 * components:
 *  schemas:
 *    Menu_items:
 *      type: object
 *      required:
 *        - name
 *        - description
 *        - price
 *        - category_id
 *      properties:
 *        name:
 *          type: string
 *          default: Chicken Burger
 *        description:
 *          type: string
 *          default: Grilled chicken with fresh vegetables
 *        price:
 *          type: integer
 *          default: 150
 *        category_id:
 *          type: integer
 *          default: 1
 * 
 */

module.exports = (sequelize, DataTypes) => {
  class Menu_items extends Model {
    static associate(models) {
      Menu_items.belongsTo(models.Category, {
        foreignKey: 'category_id'
      })
      Menu_items.hasMany(models.order_items, {
        foreignKey: 'menu_item_id'
      })
    }
  }
  Menu_items.init({
    name: { 
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'A menu item name is required'
      }
    }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A menu item description is required'
        }
      }
    },
    price: {
       type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A menu item price is required'
        }
      }
    },
    category_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
     notNull: {
       msg: 'A menu item category is required'
     }
     }
    }
  }, {
    sequelize,
    modelName: 'Menu_items',
  });
  return Menu_items;
};