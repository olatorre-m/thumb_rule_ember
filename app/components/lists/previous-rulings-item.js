import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class PreviousRulingItemComponent extends Component {
  @tracked person;
  @tracked voted = false;

  constructor(...args) {
    super(...args);

    if (this.args.person) {
      this.person = this.args.person;
    }
  }

  get positivePercentage() {
    return (
      (this.person.votes.positive * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);
  }

  get negativePercentage() {
    return (
      (this.person.votes.negative * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);
  }

  get timeFromNow() {
    return moment(this.person.lastUpdated).fromNow();
  }
}
