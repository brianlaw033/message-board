import Ember from 'ember';

export default Ember.Route.extend({
  lm: Ember.inject.service(),
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

    upBtn(num, diff, model){
      var count = parseInt(num);
      count++;
      var tempDiff = parseInt(diff);
      tempDiff++;
      model.set("thumbsup", count);
      model.set("thumbsdiff", tempDiff);
      model.save();
    },

    downBtn(num, diff, model){
      var count = parseInt(num);
      count--;
      var tempDiff = parseInt(diff);
      tempDiff--;
      model.set("thumbsdown", count);
      model.set("thumbsdiff", tempDiff);
      model.save();
    },

    addToLm(item){
      this.get('lm').add(item);
    }
  }
});
