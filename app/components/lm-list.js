import Ember from 'ember';

export default Ember.Component.extend({
  lm: Ember.inject.service(),
  actions:{
    removeFromCart(item){
      this.get('lm').remove(item);
    },
    addToCart(item){
      this.get('lm').add(item);
    },

  }
});
