import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let data = await fetch('/assets/data.json');
    let parsedData = await data.json();
    return parsedData;
  }
}