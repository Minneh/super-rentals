// A blueprint that lists all the attributes each rental should contain

import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});

// The DS in this file stands for "data store", and .attr() stands for 'attribute'.
