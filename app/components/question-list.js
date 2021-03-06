import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['thumbsdiff:desc'],
  sortedAns: Ember.computed.sort('qandas', 'sortBy'),
  lm: Ember.inject.service(),
  actions:{
    addToLm(item){
      this.get('lm').add(item);
    }
  }
});
