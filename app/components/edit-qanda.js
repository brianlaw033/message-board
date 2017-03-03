import Ember from 'ember';

export default Ember.Component.extend({
  torf: true,
  actions:{
    showEdit(){
      this.set('torf', false);
    },
    saveEdit(qanda){
      var params = {
        author2: this.get('author2')? this.get('author2'): "",
        note2: this.get('note2')? this.get('note2'): "",
        profilePic2: this.get('profilePic2')? this.get('profilePic2'): "http://vignette4.wikia.nocookie.net/evchk/images/b/bb/NomoreP.png/revision/latest?cb=20100822150604",
        q2: this.get('q2')? this.get('q2'): "",
      };
        this.set('torf', true);
        this.sendAction('saveEdit', qanda, params);
        console.log(params);
      }

  }
});
