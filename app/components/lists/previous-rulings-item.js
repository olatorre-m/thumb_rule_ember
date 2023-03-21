import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import moment from 'moment';

export default class PreviousRulingItemComponent extends Component {
  @tracked person;
  @tracked voted = false;
  @tracked view;
  @service media;

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

  get greater() {
    return this.positivePercentage > this.negativePercentage;
  }


  @action
  sumOnePositive() {
    set(this.person.votes, 'positive', (this.person.votes.positive += 1));
    this.toggleVoted;
    console.log(this.person.votes.positive);
  }

  @action
  sumOneNegative() {
    set(this.person.votes, 'negative', (this.person.votes.negative += 1));
    this.toggleVoted;
  }

  toggleVoted() {
    this.voted = !this.voted;
  }

  @action
  changeView(){
    if (this.args.view) {
      this.view = this.args.view;
    }
  }
}
