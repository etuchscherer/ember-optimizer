import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @tracked shouldShowLeftPane = true;
  @tracked shouldShowRightPane = true;

  @action
  toggleLeftPane() {
    this.shouldShowLeftPane = !this.shouldShowLeftPane;
  }

  @action
  toggleRightPane() {
    this.shouldShowRightPane = !this.shouldShowRightPane;
  }
}
