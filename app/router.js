import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('message-board', {path: '/message-board/:question_id'});
  this.route('new-question');
  this.route('lmlist');
});

export default Router;
