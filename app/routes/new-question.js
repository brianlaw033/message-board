import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions:{
    submitPost(params){
      var newPost = this.store.createRecord('question', params);
      newPost.save();
      this.transitionTo('index');
    }
  }

});
