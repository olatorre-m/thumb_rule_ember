import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PreviousRulingSectionComponent extends Component {
  @tracked data;
  @tracked view = 'grid';
  @service media;

  constructor(...args) {
    super(...args);

    if (this.args.data) {
      this.data = this.args.data;
    }
  }

  /**
   * This action updates view value when one option is selected
   */
  @action
  onSelectOption(option) {
    this.view = option.target.value;
  }
}
