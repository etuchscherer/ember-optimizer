import Component from '@ember/component';
import { throttle } from '@ember/runloop';

export function initialize(/* application */) {
  Component.reopen({
    didRender() {
      window.dataLayer.push({'event': 'optimize.activate'});
      return this._super(...arguments);
    }
  })
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  initialize
};
