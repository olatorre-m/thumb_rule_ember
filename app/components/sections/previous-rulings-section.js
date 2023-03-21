import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PreviousRulingSectionComponent extends Component {
  @tracked data;
  @service media;

  constructor(...args) {
    super(...args);

    if (this.args.data) {
      this.data = this.args.data;
    }
  }

  get isMobile() {
    return this.media.isMobile;
  }

  get isTablet() {
    return this.media.isTablet;
  }

  get isDesktop() {
    return this.media.isDesktop;
  }
}
