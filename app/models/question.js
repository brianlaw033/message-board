import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  q: DS.attr(),
  note: DS.attr(),
  profilePic: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  thumbsup: DS.attr(),
  thumbsdown:DS.attr()
});
