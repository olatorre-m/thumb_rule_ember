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

    this.setLocalStorage();
    this.setNegativePercentage();
    this.setPositivePercentage();
  }

  /**
   * This function sets the local storage with the positive and negatives
   * values of each person
   *
   * Params void
   * returns void
   */
  setLocalStorage() {
    let positiveVotes = localStorage.getItem(this.person.name + '_positive');
    let negativeVotes = localStorage.getItem(this.person.name + '_negative');

    if (!positiveVotes) {
      localStorage.setItem(
        this.person.picture + '_positive',
        this.person.votes.positive
      );
    } else {
      set(this.person.votes, 'positive', positiveVotes);
    }

    if (!negativeVotes) {
      localStorage.setItem(
        this.person.picture + '_negative',
        this.person.votes.negative
      );
    } else {
      set(this.person.votes, 'negative', negativeVotes);
    }
  }

  /**
   * This helper calculates the percentage of positive votes
   *
   * Params void
   * returns float with 1 decimal
   */
  get positivePercentage() {
    return (
      (this.person.votes.positive * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);
  }

  /**
   * This function set the percentage of negatives votes
   *
   * Params void
   * returns float with 1 decimal
   */
  setNegativePercentage() {
    let percentage = (
      (this.person.votes.negative * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);

    set(this.person.votes, 'negativePercentage', percentage);
  }

  /**
   * This function set the percentage of positive votes
   *
   * Params void
   * returns float with 1 decimal
   */
  setPositivePercentage() {
    let percentage = (
      (this.person.votes.positive * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);

    set(this.person.votes, 'positivePercentage', percentage);
  }

  /**
   * This helper calculates the percentage of negatives votes
   *
   * Params void
   * returns float with 1 decimal
   */
  get negativePercentage() {
    return (
      (this.person.votes.negative * 100) /
      (this.person.votes.positive + this.person.votes.negative)
    ).toFixed(1);
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
   * This helper uses another two ones to return true if positive votes are greater
   *
   * Params void
   * returns bool
   */
  get greater() {
    return this.positivePercentage > this.negativePercentage;
  }

  @action
  sumOnePositive() {
    set(this.person.votes, 'positive', (this.person.votes.positive += 1));
    this.toggleCanVote();
  }

  @action
  sumOneNegative() {
    set(this.person.votes, 'negative', (this.person.votes.negative += 1));
    this.toggleCanVote();
  }

  toggleVoted() {
    this.voted = !this.voted;
  }

  toggleCanVote() {
    this.canVote = !this.canVote;
  }

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
    this.setNegativePercentage();
    this.setPositivePercentage();
    this.toggleCanVote();
    this.toggleVoted();
  }

  @action
  reset() {
    this.toggleVoted();
  }

  @action
  changeView() {
    if (this.args.view) {
      this.view = this.args.view;
    }
  }
}
