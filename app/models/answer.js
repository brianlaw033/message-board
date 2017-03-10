import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  profilePic: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  thumbsup: DS.attr(),
  thumbsdown:DS.attr(),
  thumbsdiff: DS.attr()
});
