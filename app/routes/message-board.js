import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions:{
    showEdit(){
      this.set('torf', true);
    },
    submitReply(params){
      var newReply = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newReply);
      newReply.save().then(function() {
        return question.save();
      });
    },

    saveEdit(qanda, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          qanda.set(key,params[key]);
        }
      });
      qanda.save();
    },

    upBtn(num, model){
      var count = parseInt(num);
      count++;
      model.set("thumbsup", count);
      model.save();
    },

    downBtn(num, model){
      var count = parseInt(num);
      count--;
      model.set("thumbsdown", count);
      model.save();
    }

  }
});
