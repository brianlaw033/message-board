import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submitReply(){
      var params = {
        author: this.get('author')? this.get('author'): "",
        content: this.get('content')? this.get('content'): "",
        profilePic: this.get('profilePic')? this.get('profilePic'): "http://vignette4.wikia.nocookie.net/evchk/images/b/bb/NomoreP.png/revision/latest?cb=20100822150604",
        question: this.get('question'),
      };
      this.sendAction('submitReply', params);
    }
  }
});
