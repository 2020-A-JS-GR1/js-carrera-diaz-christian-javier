/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    DNI: {
      type: 'string',
      minLength: 10,
      required: true,
      unique:true,
    },
    name:{
      type: 'string',
      required: true,
      minLength: 4,
    },
    last_name:{
      type: 'string',
      required: true,
      minLength: 4
    },
    birt_date: {
      type: 'string',
      required: true,
      columnType: 'date'
    },
    isMarried: {
      type: 'boolean',
      defaultsTo: false,
    },

    // Relationships

    computers:{
      collection: 'computer',
      via: 'owners',
    },
  },

};

