import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submitPost(){
      var params = {
        author: this.get('author')? this.get('author'): "",
        note: this.get('note')? this.get('note'): "",
        profilePic: this.get('profilePic')? this.get('profilePic'): "http://vignette4.wikia.nocookie.net/evchk/images/b/bb/NomoreP.png/revision/latest?cb=20100822150604",
        q: this.get('q')? this.get('q'): "",
        thumbsup: 0,
        thumbsdown: 0
      };
      this.sendAction('submitPost', params);
    }
  }
});
