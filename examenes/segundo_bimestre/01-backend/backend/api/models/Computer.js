/**
 * Computer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    model: {
      type: 'string',
      minLength: 5,
      required: true,
      unique: true
    },
    brand: {
      type: 'string',
      isIn: ['MSI', 'HP', 'LENOVO', 'TOSHIBA', 'SONY', 'ACER'],
      required: true
    },
    price:{
      type: 'number',
      columnType: 'float',
      required: true,
    },
    isNew:{
      type: 'boolean',
      defaultsTo: false,
    },

    // Relationships

    owners:{
      collection: 'user',
      via: 'computers',
    },
  },

};

