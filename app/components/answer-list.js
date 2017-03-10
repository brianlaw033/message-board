import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['thumbsdiff:desc'],
  sortedAns: Ember.computed.sort('answers', 'sortBy'),
  actions:{
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
  }
});
