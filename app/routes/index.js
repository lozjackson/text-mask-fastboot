import Ember from 'ember';
import { createNumberMask } from 'ember-text-mask-addons';

export default Ember.Route.extend({
  model() {
    console.log(createNumberMask);
  }
});
