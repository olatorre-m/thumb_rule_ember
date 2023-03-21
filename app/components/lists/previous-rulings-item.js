import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import moment from 'moment';

export default class PreviousRulingItemComponent extends Component {
  @tracked person;
  @tracked voted = false;
  @tracked canVote = false;
  @tracked view;
  @service media;

  constructor(...args) {
    super(...args);

    if (this.args.person) {
      this.person = this.args.person;
    }

    this.setlocalStorage();
    this.setPercentages();
  }

  /**
   * This function sets the local storage with the positive and negatives
   * values of each person
   *
   * Params void
   * returns void
   */
  setlocalStorage() {
    let positiveVotes = localStorage.getItem(this.person.picture + '_positive');
    let negativeVotes = localStorage.getItem(this.person.picture + '_negative');

    if (!positiveVotes) {
      localStorage.setItem(
        this.person.picture + '_positive',
        this.person.votes.positive
      );
    } else {
      set(this.person.votes, 'positive', parseInt(positiveVotes));
    }

    if (!negativeVotes) {
      localStorage.setItem(
        this.person.picture + '_negative',
        this.person.votes.negative
      );
    } else {
      set(this.person.votes, 'negative', parseInt(negativeVotes));
    }
  }

  /**
   * This function set the percentage of negatives votes
   *
   * Params void
   * returns float with 1 decimal
   */
  setPercentages() {
    let percentage = (
      (this.person.votes.negative * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);

    set(this.person.votes, 'negativePercentage', percentage);

    percentage = (
      (this.person.votes.positive * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);

    set(this.person.votes, 'positivePercentage', percentage);
  }

  /**
   * This helper uses moment to calculate the time between the post and today
   *
   * Params void
   * returns string, sentence with natural language with the time
   */
  get timeFromNow() {
    return moment(this.person.lastUpdated).fromNow();
  }

  /**
   * This action uses updates positive votes when positive vote button is clicked
   */
  @action
  sumOnePositive() {
    set(this.person.votes, 'positive', (this.person.votes.positive += 1));
    this.toggleCanVote();
  }

  /**
   * This action uses updates negative votes when negative vote button is clicked
   */
  @action
  sumOneNegative() {
    set(this.person.votes, 'negative', (this.person.votes.negative += 1));
    this.toggleCanVote();
  }

  /**
   * Toogle boolean voted
   */
  toggleVoted() {
    this.voted = !this.voted;
  }

  /**
   * Toogle boolean canVote
   */
  toggleCanVote() {
    this.canVote = !this.canVote;
  }

  /**
   * This action updates percentage values and votes in local storage and local object
   */
  @action
  submitVote() {
    localStorage.setItem(
      this.person.picture + '_negative',
      this.person.votes.negative
    );
    localStorage.setItem(
      this.person.picture + '_positive',
      this.person.votes.positive
    );
    this.setPercentages();
    this.toggleCanVote();
    this.toggleVoted();
  }

  /**
   * This action toogle boolean voted to reset buttons
   */
  @action
  reset() {
    this.toggleVoted();
  }

  /**
   * This action updates view value when one option is selected
   */
  @action
  changeView() {
    if (this.args.view) {
      this.view = this.args.view;
    }
  }
}
