import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      users: this.store.query('user',{
        orderBy: 'username',
        equalTo: "admin"
      })
    });
  }
});
