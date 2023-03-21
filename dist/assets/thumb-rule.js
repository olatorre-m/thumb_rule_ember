'use strict';



;define("thumb-rule/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("thumb-rule/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "thumb-rule/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"thumb-rule/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("thumb-rule/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = {
    mobile: '(max-width: 650px)',
    tablet: '(min-width: 650px) and (max-width: 1000px)',
    desktop: '(min-width: 1000px)'
  };
  _exports.default = _default;
});
;define("thumb-rule/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/-dynamic-element-alt", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  class DynamicElementAlt extends _component.default {}
  _exports.default = DynamicElementAlt;
});
;define("thumb-rule/components/-dynamic-element", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  class DynamicElement extends _component.default {}
  _exports.default = DynamicElement;
});
;define("thumb-rule/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-content"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/ember-popover", ["exports", "ember-tooltips/components/ember-popover"], function (_exports, _emberPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopover.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-tooltips/components/ember-popover"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/ember-tooltip", ["exports", "ember-tooltips/components/ember-tooltip"], function (_exports, _emberTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTooltip.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-tooltips/components/ember-tooltip"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/lists/previous-rulings-item", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "moment"], function (_exports, _component, _templateFactory, _component2, _tracking, _object, _service, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/object",0,"moment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="outline">
      <div class="card" style="background-image: {{if (eq this.view "list")
      "linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 14%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%),"
      "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%),"}}
      url(assets/img/{{this.person.picture}});" 
      alt="Picture of {{this.person.name}}"
      {{did-update this.changeView @view}}
      >
          <div class="card-body" style={{if (eq this.view "list") "background-image: 
      linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%),"}}>
              <div class="card-title">
                  <div class="winner">
                      {{#if (gt this.person.votes.positivePercentage this.person.votes.negativePercentage)}}
                          <button class="thumbs-up">
                              <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
                          </button>
                      {{else}}
                          <button class="thumbs-down" aria-label="thumbs down">
                              <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
                          </button>
                      {{/if}}
                  </div>
                  <div id="title-text">
                      <div class="title">
                          {{this.person.name}}
                          <EmberTooltip>
                              {{this.person.name}}
                          </EmberTooltip>
                      </div>
                      <div class="description">
                          {{this.person.description}}
                          <EmberTooltip>
                              {{this.person.description}}
                          </EmberTooltip>
                      </div>
                  </div>
              </div>
              <div class="card-footer">
                  <div class="date-section">
                      {{#unless this.voted}}
                          <span>    
                              {{this.timeFromNow}}
                          </span> in
                          <span>
                              {{this.person.category}}
                          </span>
                      {{else}}
                          Thank you for your vote!
                      {{/unless}}
                  </div>
                  <div class="voting-buttons">
                      {{#unless this.voted}}
                          <button type="button" class="icon-button" aria-label="thumbs up"
                          disabled={{this.canVote}} 
                          {{on "click" this.sumOnePositive}} >
                              <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
                          </button>
                          <button type="button" class="icon-button" aria-label="thumbs down"
                          disabled={{this.canVote}} 
                          {{on "click" this.sumOneNegative}}>
                              <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
                          </button>
                      {{/unless}}
                      {{#unless this.voted}}
                          <button type="button" class="vote-button {{if this.canVote "allowed" "not-allowed"}}"
                          disabled={{not this.canVote}}
                          {{on "click" this.submitVote}}>
                              Vote Now
                          </button>
                      {{else}}
                          <button type="button" class="vote-button"
                          {{on "click" this.reset}}>
                              Vote Again
                          </button>
                      {{/unless}}
                  </div>
              </div>
          </div>
          <div class="percentage-bar">
              <button class="icon-button thumbs" aria-label="thumbs up" style="width: {{this.person.votes.positivePercentage}}%">
                  <img src="assets/img/thumbs-up.svg" alt="thumbs up" /> {{this.person.votes.positivePercentage}}
              </button>
              <button class="icon-button thumbs" aria-label="thumbs down" style="width: {{this.person.votes.negativePercentage}}%" >
                  {{this.person.votes.negativePercentage}} <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
              </button>
          </div>
      </div>
  </div>
  */
  {
    "id": "UPZmOGkd",
    "block": "[[[10,0],[14,0,\"outline\"],[12],[1,\"\\n    \"],[11,0],[24,0,\"card\"],[16,5,[29,[\"background-image: \",[52,[28,[37,1],[[30,0,[\"view\"]],\"list\"],null],\"linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 14%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%),\",\"linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%),\"],\"\\n    url(assets/img/\",[30,0,[\"person\",\"picture\"]],\");\"]]],[16,\"alt\",[29,[\"Picture of \",[30,0,[\"person\",\"name\"]]]]],[4,[38,2],[[30,0,[\"changeView\"]],[30,1]],null],[12],[1,\"\\n        \"],[10,0],[14,0,\"card-body\"],[15,5,[52,[28,[37,1],[[30,0,[\"view\"]],\"list\"],null],\"background-image: \\r\\n    linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%),\"]],[12],[1,\"\\n            \"],[10,0],[14,0,\"card-title\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"winner\"],[12],[1,\"\\n\"],[41,[28,[37,3],[[30,0,[\"person\",\"votes\",\"positivePercentage\"]],[30,0,[\"person\",\"votes\",\"negativePercentage\"]]],null],[[[1,\"                        \"],[10,\"button\"],[14,0,\"thumbs-up\"],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-up.svg\"],[14,\"alt\",\"thumbs up\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n\"]],[]],[[[1,\"                        \"],[10,\"button\"],[14,0,\"thumbs-down\"],[14,\"aria-label\",\"thumbs down\"],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-down.svg\"],[14,\"alt\",\"thumbs down\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n\"]],[]]],[1,\"                \"],[13],[1,\"\\n                \"],[10,0],[14,1,\"title-text\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n                        \"],[1,[30,0,[\"person\",\"name\"]]],[1,\"\\n                        \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n                            \"],[1,[30,0,[\"person\",\"name\"]]],[1,\"\\n                        \"]],[]]]]],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"description\"],[12],[1,\"\\n                        \"],[1,[30,0,[\"person\",\"description\"]]],[1,\"\\n                        \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n                            \"],[1,[30,0,[\"person\",\"description\"]]],[1,\"\\n                        \"]],[]]]]],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"card-footer\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"date-section\"],[12],[1,\"\\n\"],[41,[51,[30,0,[\"voted\"]]],[[[1,\"                        \"],[10,1],[12],[1,\"    \\n                            \"],[1,[30,0,[\"timeFromNow\"]]],[1,\"\\n                        \"],[13],[1,\" in\\n                        \"],[10,1],[12],[1,\"\\n                            \"],[1,[30,0,[\"person\",\"category\"]]],[1,\"\\n                        \"],[13],[1,\"\\n\"]],[]],[[[1,\"                        Thank you for your vote!\\n\"]],[]]],[1,\"                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"voting-buttons\"],[12],[1,\"\\n\"],[41,[51,[30,0,[\"voted\"]]],[[[1,\"                        \"],[11,\"button\"],[24,0,\"icon-button\"],[24,\"aria-label\",\"thumbs up\"],[16,\"disabled\",[30,0,[\"canVote\"]]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"sumOnePositive\"]]],null],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-up.svg\"],[14,\"alt\",\"thumbs up\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[11,\"button\"],[24,0,\"icon-button\"],[24,\"aria-label\",\"thumbs down\"],[16,\"disabled\",[30,0,[\"canVote\"]]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"sumOneNegative\"]]],null],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-down.svg\"],[14,\"alt\",\"thumbs down\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n\"]],[]],null],[41,[51,[30,0,[\"voted\"]]],[[[1,\"                        \"],[11,\"button\"],[16,0,[29,[\"vote-button \",[52,[30,0,[\"canVote\"]],\"allowed\",\"not-allowed\"]]]],[16,\"disabled\",[28,[37,7],[[30,0,[\"canVote\"]]],null]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"submitVote\"]]],null],[12],[1,\"\\n                            Vote Now\\n                        \"],[13],[1,\"\\n\"]],[]],[[[1,\"                        \"],[11,\"button\"],[24,0,\"vote-button\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"reset\"]]],null],[12],[1,\"\\n                            Vote Again\\n                        \"],[13],[1,\"\\n\"]],[]]],[1,\"                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"percentage-bar\"],[12],[1,\"\\n            \"],[10,\"button\"],[14,0,\"icon-button thumbs\"],[14,\"aria-label\",\"thumbs up\"],[15,5,[29,[\"width: \",[30,0,[\"person\",\"votes\",\"positivePercentage\"]],\"%\"]]],[12],[1,\"\\n                \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-up.svg\"],[14,\"alt\",\"thumbs up\"],[12],[13],[1,\" \"],[1,[30,0,[\"person\",\"votes\",\"positivePercentage\"]]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"button\"],[14,0,\"icon-button thumbs\"],[14,\"aria-label\",\"thumbs down\"],[15,5,[29,[\"width: \",[30,0,[\"person\",\"votes\",\"negativePercentage\"]],\"%\"]]],[12],[1,\"\\n                \"],[1,[30,0,[\"person\",\"votes\",\"negativePercentage\"]]],[1,\" \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-down.svg\"],[14,\"alt\",\"thumbs down\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"@view\"],false,[\"if\",\"eq\",\"did-update\",\"gt\",\"ember-tooltip\",\"unless\",\"on\",\"not\"]]",
    "moduleName": "thumb-rule/components/lists/previous-rulings-item.hbs",
    "isStrictMode": false
  });
  let PreviousRulingItemComponent = (_class = class PreviousRulingItemComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "person", _descriptor, this);
      _initializerDefineProperty(this, "voted", _descriptor2, this);
      _initializerDefineProperty(this, "canVote", _descriptor3, this);
      _initializerDefineProperty(this, "view", _descriptor4, this);
      _initializerDefineProperty(this, "media", _descriptor5, this);
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
        localStorage.setItem(this.person.picture + '_positive', this.person.votes.positive);
      } else {
        (0, _object.set)(this.person.votes, 'positive', parseInt(positiveVotes));
      }
      if (!negativeVotes) {
        localStorage.setItem(this.person.picture + '_negative', this.person.votes.negative);
      } else {
        (0, _object.set)(this.person.votes, 'negative', parseInt(negativeVotes));
      }
    }

    /**
     * This function set the percentage of negatives votes
     *
     * Params void
     * returns float with 1 decimal
     */
    setPercentages() {
      let percentage = (this.person.votes.negative * 100 / (this.person.votes.positive + this.person.votes.negative)).toFixed(1);
      (0, _object.set)(this.person.votes, 'negativePercentage', percentage);
      percentage = (this.person.votes.positive * 100 / (this.person.votes.positive + this.person.votes.negative)).toFixed(1);
      (0, _object.set)(this.person.votes, 'positivePercentage', percentage);
    }

    /**
     * This helper uses moment to calculate the time between the post and today
     *
     * Params void
     * returns string, sentence with natural language with the time
     */
    get timeFromNow() {
      return (0, _moment.default)(this.person.lastUpdated).fromNow();
    }

    /**
     * This action uses updates positive votes when positive vote button is clicked
     */
    sumOnePositive() {
      (0, _object.set)(this.person.votes, 'positive', this.person.votes.positive += 1);
      this.toggleCanVote();
    }

    /**
     * This action uses updates negative votes when negative vote button is clicked
     */
    sumOneNegative() {
      (0, _object.set)(this.person.votes, 'negative', this.person.votes.negative += 1);
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
    submitVote() {
      localStorage.setItem(this.person.picture + '_negative', this.person.votes.negative);
      localStorage.setItem(this.person.picture + '_positive', this.person.votes.positive);
      this.setPercentages();
      this.toggleCanVote();
      this.toggleVoted();
    }

    /**
     * This action toogle boolean voted to reset buttons
     */
    reset() {
      this.toggleVoted();
    }

    /**
     * This action updates view value when one option is selected
     */
    changeView() {
      if (this.args.view) {
        this.view = this.args.view;
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "person", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "voted", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "canVote", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "view", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "media", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "sumOnePositive", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sumOnePositive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sumOneNegative", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sumOneNegative"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submitVote", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submitVote"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reset", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "reset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeView", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeView"), _class.prototype)), _class);
  _exports.default = PreviousRulingItemComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PreviousRulingItemComponent);
});
;define("thumb-rule/components/maybe-in-element", ["exports", "ember-maybe-in-element/components/maybe-in-element"], function (_exports, _maybeInElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _maybeInElement.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-maybe-in-element/components/maybe-in-element"eaimeta@70e063a35619d71f
});
;define("thumb-rule/components/sections/previous-rulings-section", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div id="section-title"><h2>Previous Rulings</h2>
  
   {{#unless (media 'isMobile')}}
   {{!--This select is only visible in tablet or desktop screen size--}}
      <div id="view-select">
          <select name="view" id="view" {{on 'change' this.onSelectOption}}>
              <option value="grid">Grid</option>
              <option value="list">List</option>
          </select>
      </div>
   {{/unless}}
  </div>
  
  {{!--Calling to Previous Ruling list--}}
  <div class="{{if (eq this.view "grid") "grid" "list"}}">
      <div class="{{if (media 'isMobile') 'card-container-mobile'}}
                  {{if (media 'isTablet') 'card-container-tablet'}}
                  {{if (media 'isDesktop') 'card-container-desktop'}} 
                  {{this.view}}">
  
          {{#each this.data.data as |person|}}
              <Lists::PreviousRulingsItem 
                  @person = {{person}}
                  @view = {{this.view}}
              />
          {{/each}}
      </div>
  </div>
  */
  {
    "id": "nhZWfdXg",
    "block": "[[[10,0],[14,1,\"section-title\"],[12],[10,\"h2\"],[12],[1,\"Previous Rulings\"],[13],[1,\"\\n\\n\"],[41,[51,[28,[37,1],[\"isMobile\"],null]],[[[1,\"    \"],[10,0],[14,1,\"view-select\"],[12],[1,\"\\n        \"],[11,\"select\"],[24,3,\"view\"],[24,1,\"view\"],[4,[38,2],[\"change\",[30,0,[\"onSelectOption\"]]],null],[12],[1,\"\\n            \"],[10,\"option\"],[14,2,\"grid\"],[12],[1,\"Grid\"],[13],[1,\"\\n            \"],[10,\"option\"],[14,2,\"list\"],[12],[1,\"List\"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13],[1,\"\\n\\n\"],[10,0],[15,0,[29,[[52,[28,[37,4],[[30,0,[\"view\"]],\"grid\"],null],\"grid\",\"list\"]]]],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[[52,[28,[37,1],[\"isMobile\"],null],\"card-container-mobile\"],\"\\n                \",[52,[28,[37,1],[\"isTablet\"],null],\"card-container-tablet\"],\"\\n                \",[52,[28,[37,1],[\"isDesktop\"],null],\"card-container-desktop\"],\" \\n                \",[30,0,[\"view\"]]]]],[12],[1,\"\\n\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,0,[\"data\",\"data\"]]],null]],null],null,[[[1,\"            \"],[8,[39,7],null,[[\"@person\",\"@view\"],[[30,1],[30,0,[\"view\"]]]],null],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"person\"],false,[\"unless\",\"media\",\"on\",\"if\",\"eq\",\"each\",\"-track-array\",\"lists/previous-rulings-item\"]]",
    "moduleName": "thumb-rule/components/sections/previous-rulings-section.hbs",
    "isStrictMode": false
  });
  let PreviousRulingSectionComponent = (_class = class PreviousRulingSectionComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _initializerDefineProperty(this, "view", _descriptor2, this);
      _initializerDefineProperty(this, "media", _descriptor3, this);
      if (this.args.data) {
        this.data = this.args.data;
      }
    }

    /**
     * This action updates view value when one option is selected
     */
    onSelectOption(option) {
      this.view = option.target.value;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "view", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'grid';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "media", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "onSelectOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onSelectOption"), _class.prototype)), _class);
  _exports.default = PreviousRulingSectionComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PreviousRulingSectionComponent);
});
;define("thumb-rule/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("thumb-rule/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/app-version", ["exports", "@ember/component/helper", "thumb-rule/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"thumb-rule/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("thumb-rule/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/element"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/helpers/media"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("thumb-rule/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("thumb-rule/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("thumb-rule/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("thumb-rule/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("thumb-rule/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "thumb-rule/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"thumb-rule/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("thumb-rule/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("thumb-rule/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("thumb-rule/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("thumb-rule/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/initializers/responsive"eaimeta@70e063a35619d71f
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("thumb-rule/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("thumb-rule/modifiers/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/modifiers/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/modifiers/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("thumb-rule/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("thumb-rule/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("thumb-rule/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-style-modifier/modifiers/style"eaimeta@70e063a35619d71f
});
;define("thumb-rule/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("thumb-rule/router", ["exports", "@ember/routing/router", "thumb-rule/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"thumb-rule/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("thumb-rule/routes/application", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ApplicationRoute extends _route.default {
    async model() {
      let data = await fetch('/assets/data.json');
      let parsedData = await data.json();
      return parsedData;
    }
  }
  _exports.default = ApplicationRoute;
});
;define("thumb-rule/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("thumb-rule/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("thumb-rule/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("thumb-rule/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("thumb-rule/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/services/media"eaimeta@70e063a35619d71f
  var _default = _media.default;
  _exports.default = _default;
});
;define("thumb-rule/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("thumb-rule/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("thumb-rule/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("thumb-rule/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Rule of Thumb</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
      <link href="css/main.css" rel="stylesheet">
  </head>
  <body>
      <nav class="nav" role="navigation">
          <div class="max-centered">
              <h1 class="nav__logo">Rule of thumb.</h1>
              <button class="nav__hamburger icon-button" alt="Open Menu">
                  <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fill-rule="nonzero"/></svg>
              </button>
              <ul class="nav__links">
                  <li>
                      <a href="#">Past Trials</a>
                  </li>
                  <li>
                      <a href="#">How It Works</a>
                  </li>
                  <li>
                      <a href="#">Login / Sign Up</a>
                  </li>
                  <li>
                      <form action="javascript:void(0)">
                          <input class="nav__search-input" aria-label="search" type="text">
                          <button class="nav__search icon-button" alt="Search" type="submit">
                              <img src="assets/img/search.svg" alt="search">
                          </button>
                      </form>
                  </li>
              </ul>
          </div>
      </nav>
      <header class="hero">
          <img
              class="hero__background"
              srcset="assets/img/pope-francis.png 750w, assets/img/pope-francis.@2x.png 1440w"
              sizes="(min-width: 750px) 1440px, 100vw"
              src="assets/img/pope-francis.png"
              alt="Pope Francis">
          <div class="max-centered">
              <div class="hero__featured-card">
                  <div class="featured-card__glass-background"></div>
                  <div class="featured-card__content">
                      <p class="featured-card__hairline">What's your opinion on</p>
                      <h2 class="featured-card__title">Pope Francis?</h2>
                      <p class="featured-card__desc">
                          He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
                      </p>
                      <p class="featured-card__more-info">
                          <a href="http://wikipedia.com">
                              <svg class="featured-card__more-info-icon" preserveAspectRatio xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18"><path d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z" fill="#FFF" fill-rule="nonzero"/></svg>More information
                          </a>
                      </p>
                      <p class="featured-card__cta">
                          What’s Your Veredict?
                      </p>
                      <div class="featured-card__buttons">
                          <button class="icon-button" aria-label="thumbs up">
                              <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
                          </button>
                          <button class="icon-button" aria-label="thumbs down">
                              <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="hero__closing-gauge">
              <div class="closing-gauge__left">
                  <span class="closing-gauge__title">closing in</span>
              </div>
              <div class="closing-gauge__right">
                  <span class="closing-gauge__number">22</span>
                  <span class="closing-gauge__desc">days</span>
              </div>
          </div>
      </header>
      <div class="max-centered">
          <aside class="banner banner-top" role="doc-tip" aria-label="Speak Out">
              <div class="banner__left">
                  <span class="banner__hairline">Speak out. Be heard.</span>
                  <span class="banner__title">Be counted</span>
              </div>
              <div class="banner__right">
                  <p class="banner__text">
                      Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
                  </p>
              </div>
              <button class="icon-button" aria-label="close">
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M1 19L19 1M1 1l18 18"/></g></svg>
              </button>
          </aside>
          <main role="main">
              <!-- Start: Implementation -->
              
              <Sections::PreviousRulingsSection @data = {{@model}}/>
  
              <!-- End: Implementation -->
          </main>
          <aside class="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
              <img
                  srcset="assets/img/bg-people.png 750w, assets/img/bg-people.@2x.png 1440w"
                  sizes="(min-width: 750px) 1440px, 100vw"
                  class="banner__background" src="assets/img/bg-people.png"
                  alt=""
                  role="none">
              <div class="banner__left">
                  <h2 class="banner__heading">Is there anyone else you would want us to add?</h2>
              </div>
              <div class="banner__right">
                  <button class="banner__cta">
                      Submit a name
                  </button>
              </div>
          </aside>
          <hr role="separator">
          <footer class="footer">
              <div class="footer__links">
                  <ul>
                      <li>
                          <a href="#">Terms and Conditions</a>
                      </li>
                      <li>
                          <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div class="footer__social">
                  <span>Follow us</span>
                  <ul>
                      <li>
                          <a href="#">
                              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.771c0-1.048.292-1.763 1.796-1.763h1.918v-3.24a25.663 25.663 0 00-2.795-.143c-2.766 0-4.659 1.688-4.659 4.788v2.671H9.691v3.622h3.128V24H1.325A1.325 1.325 0 010 22.676V1.325A1.325 1.325 0 011.325 0h21.35A1.325 1.325 0 0124 1.325z" fill="#262626" fill-rule="nonzero"/></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg"><path d="M23.329 6.204c.01.23.01.458.01.687A15.182 15.182 0 01-.008 19.688c.421.05.845.075 1.27.073a10.7 10.7 0 006.627-2.289 5.335 5.335 0 01-4.984-3.704c.798.151 1.62.12 2.404-.094a5.346 5.346 0 01-4.276-5.233v-.073a5.396 5.396 0 002.413.666 5.357 5.357 0 01-1.654-7.127A15.15 15.15 0 0012.79 7.484a5.898 5.898 0 01-.135-1.217 5.336 5.336 0 019.228-3.652 10.612 10.612 0 003.392-1.29 5.368 5.368 0 01-2.351 2.955 10.811 10.811 0 003.07-.843 10.868 10.868 0 01-2.664 2.767z" fill="#262626" fill-rule="nonzero"/></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </footer>
      </div>
  </body>
  </html>
  */
  {
    "id": "/lRFH6ne",
    "block": "[[[1,\"\\n\"],[10,\"html\"],[14,\"lang\",\"en\"],[12],[1,\"\\n\"],[10,\"head\"],[12],[1,\"\\n    \"],[10,\"meta\"],[14,\"charset\",\"UTF-8\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,3,\"viewport\"],[14,\"content\",\"width=device-width, initial-scale=1.0\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,\"http-equiv\",\"X-UA-Compatible\"],[14,\"content\",\"ie=edge\"],[12],[13],[1,\"\\n    \"],[10,\"title\"],[12],[1,\"Rule of Thumb\"],[13],[1,\"\\n    \"],[10,\"link\"],[14,6,\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\"],[14,\"rel\",\"stylesheet\"],[12],[13],[1,\"\\n    \"],[10,\"link\"],[14,6,\"css/main.css\"],[14,\"rel\",\"stylesheet\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"body\"],[12],[1,\"\\n    \"],[10,\"nav\"],[14,0,\"nav\"],[14,\"role\",\"navigation\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"max-centered\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"nav__logo\"],[12],[1,\"Rule of thumb.\"],[13],[1,\"\\n            \"],[10,\"button\"],[14,0,\"nav__hamburger icon-button\"],[14,\"alt\",\"Open Menu\"],[12],[1,\"\\n                \"],[10,\"svg\"],[14,\"width\",\"25\"],[14,\"height\",\"20\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[10,\"path\"],[14,\"d\",\"M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z\"],[14,\"fill\",\"#FFF\"],[14,\"fill-rule\",\"nonzero\"],[12],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"nav__links\"],[12],[1,\"\\n                \"],[10,\"li\"],[12],[1,\"\\n                    \"],[10,3],[14,6,\"#\"],[12],[1,\"Past Trials\"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"li\"],[12],[1,\"\\n                    \"],[10,3],[14,6,\"#\"],[12],[1,\"How It Works\"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"li\"],[12],[1,\"\\n                    \"],[10,3],[14,6,\"#\"],[12],[1,\"Login / Sign Up\"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"li\"],[12],[1,\"\\n                    \"],[10,\"form\"],[14,\"action\",\"javascript:void(0)\"],[12],[1,\"\\n                        \"],[10,\"input\"],[14,0,\"nav__search-input\"],[14,\"aria-label\",\"search\"],[14,4,\"text\"],[12],[13],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"nav__search icon-button\"],[14,\"alt\",\"Search\"],[14,4,\"submit\"],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/search.svg\"],[14,\"alt\",\"search\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"header\"],[14,0,\"hero\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"hero__background\"],[14,\"srcset\",\"assets/img/pope-francis.png 750w, assets/img/pope-francis.@2x.png 1440w\"],[14,\"sizes\",\"(min-width: 750px) 1440px, 100vw\"],[14,\"src\",\"assets/img/pope-francis.png\"],[14,\"alt\",\"Pope Francis\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"max-centered\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"hero__featured-card\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"featured-card__glass-background\"],[12],[13],[1,\"\\n                \"],[10,0],[14,0,\"featured-card__content\"],[12],[1,\"\\n                    \"],[10,2],[14,0,\"featured-card__hairline\"],[12],[1,\"What's your opinion on\"],[13],[1,\"\\n                    \"],[10,\"h2\"],[14,0,\"featured-card__title\"],[12],[1,\"Pope Francis?\"],[13],[1,\"\\n                    \"],[10,2],[14,0,\"featured-card__desc\"],[12],[1,\"\\n                        He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)\\n                    \"],[13],[1,\"\\n                    \"],[10,2],[14,0,\"featured-card__more-info\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"http://wikipedia.com\"],[12],[1,\"\\n                            \"],[10,\"svg\"],[14,0,\"featured-card__more-info-icon\"],[14,\"preserveAspectRatio\",\"\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,\"viewBox\",\"0 0 27 18\"],[12],[10,\"path\"],[14,\"d\",\"M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z\"],[14,\"fill\",\"#FFF\"],[14,\"fill-rule\",\"nonzero\"],[12],[13],[13],[1,\"More information\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,2],[14,0,\"featured-card__cta\"],[12],[1,\"\\n                        What’s Your Veredict?\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"featured-card__buttons\"],[12],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"icon-button\"],[14,\"aria-label\",\"thumbs up\"],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-up.svg\"],[14,\"alt\",\"thumbs up\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"icon-button\"],[14,\"aria-label\",\"thumbs down\"],[12],[1,\"\\n                            \"],[10,\"img\"],[14,\"src\",\"assets/img/thumbs-down.svg\"],[14,\"alt\",\"thumbs down\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"hero__closing-gauge\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"closing-gauge__left\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"closing-gauge__title\"],[12],[1,\"closing in\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"closing-gauge__right\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"closing-gauge__number\"],[12],[1,\"22\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"closing-gauge__desc\"],[12],[1,\"days\"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"max-centered\"],[12],[1,\"\\n        \"],[10,\"aside\"],[14,0,\"banner banner-top\"],[14,\"role\",\"doc-tip\"],[14,\"aria-label\",\"Speak Out\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"banner__left\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"banner__hairline\"],[12],[1,\"Speak out. Be heard.\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"banner__title\"],[12],[1,\"Be counted\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"banner__right\"],[12],[1,\"\\n                \"],[10,2],[14,0,\"banner__text\"],[12],[1,\"\\n                    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"button\"],[14,0,\"icon-button\"],[14,\"aria-label\",\"close\"],[12],[1,\"\\n                \"],[10,\"svg\"],[14,\"width\",\"20\"],[14,\"height\",\"20\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[10,\"g\"],[14,\"stroke\",\"#000\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"fill-rule\",\"evenodd\"],[12],[10,\"path\"],[14,\"d\",\"M1 19L19 1M1 1l18 18\"],[12],[13],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"main\"],[14,\"role\",\"main\"],[12],[1,\"\\n            \"],[3,\" Start: Implementation \"],[1,\"\\n            \\n            \"],[8,[39,0],null,[[\"@data\"],[[30,1]]],null],[1,\"\\n\\n            \"],[3,\" End: Implementation \"],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"aside\"],[14,0,\"banner banner-bottom\"],[14,\"role\",\"doc-tip\"],[14,\"aria-label\",\"Submit a name\"],[12],[1,\"\\n            \"],[10,\"img\"],[14,\"srcset\",\"assets/img/bg-people.png 750w, assets/img/bg-people.@2x.png 1440w\"],[14,\"sizes\",\"(min-width: 750px) 1440px, 100vw\"],[14,0,\"banner__background\"],[14,\"src\",\"assets/img/bg-people.png\"],[14,\"alt\",\"\"],[14,\"role\",\"none\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"banner__left\"],[12],[1,\"\\n                \"],[10,\"h2\"],[14,0,\"banner__heading\"],[12],[1,\"Is there anyone else you would want us to add?\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"banner__right\"],[12],[1,\"\\n                \"],[10,\"button\"],[14,0,\"banner__cta\"],[12],[1,\"\\n                    Submit a name\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"hr\"],[14,\"role\",\"separator\"],[12],[13],[1,\"\\n        \"],[10,\"footer\"],[14,0,\"footer\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"footer__links\"],[12],[1,\"\\n                \"],[10,\"ul\"],[12],[1,\"\\n                    \"],[10,\"li\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"#\"],[12],[1,\"Terms and Conditions\"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"#\"],[12],[1,\"Privacy Policy\"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"#\"],[12],[1,\"Contact Us\"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"footer__social\"],[12],[1,\"\\n                \"],[10,1],[12],[1,\"Follow us\"],[13],[1,\"\\n                \"],[10,\"ul\"],[12],[1,\"\\n                    \"],[10,\"li\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n                            \"],[10,\"svg\"],[14,\"width\",\"24\"],[14,\"height\",\"24\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[10,\"path\"],[14,\"d\",\"M24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.771c0-1.048.292-1.763 1.796-1.763h1.918v-3.24a25.663 25.663 0 00-2.795-.143c-2.766 0-4.659 1.688-4.659 4.788v2.671H9.691v3.622h3.128V24H1.325A1.325 1.325 0 010 22.676V1.325A1.325 1.325 0 011.325 0h21.35A1.325 1.325 0 0124 1.325z\"],[14,\"fill\",\"#262626\"],[14,\"fill-rule\",\"nonzero\"],[12],[13],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n                            \"],[10,\"svg\"],[14,\"width\",\"26\"],[14,\"height\",\"23\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[10,\"path\"],[14,\"d\",\"M23.329 6.204c.01.23.01.458.01.687A15.182 15.182 0 01-.008 19.688c.421.05.845.075 1.27.073a10.7 10.7 0 006.627-2.289 5.335 5.335 0 01-4.984-3.704c.798.151 1.62.12 2.404-.094a5.346 5.346 0 01-4.276-5.233v-.073a5.396 5.396 0 002.413.666 5.357 5.357 0 01-1.654-7.127A15.15 15.15 0 0012.79 7.484a5.898 5.898 0 01-.135-1.217 5.336 5.336 0 019.228-3.652 10.612 10.612 0 003.392-1.29 5.368 5.368 0 01-2.351 2.955 10.811 10.811 0 003.07-.843 10.868 10.868 0 01-2.664 2.767z\"],[14,\"fill\",\"#262626\"],[14,\"fill-rule\",\"nonzero\"],[12],[13],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13]],[\"@model\"],false,[\"sections/previous-rulings-section\"]]",
    "moduleName": "thumb-rule/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("thumb-rule/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("thumb-rule/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("thumb-rule/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("thumb-rule/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("thumb-rule/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _calculatePosition.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/utils/calculate-position"eaimeta@70e063a35619d71f
});
;

;define('thumb-rule/config/environment', [], function() {
  var prefix = 'thumb-rule';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("thumb-rule/app")["default"].create({"name":"thumb-rule","version":"0.0.0+250f9dc0"});
          }
        
//# sourceMappingURL=thumb-rule.map
