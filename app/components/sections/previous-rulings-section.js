import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PreviousRulingSectionComponent extends Component {
  @tracked data;

  constructor(...args) {
    super(...args);

    if (this.args.data) {
      this.data = this.args.data;
    }
  }
}