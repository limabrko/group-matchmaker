(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GroupMatchmaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GroupMatchmaker */ "./src/components/GroupMatchmaker.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);






function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Group Matchmaker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GroupMatchmaker__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

var rootElement = document.getElementById("root");
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), rootElement);

/***/ }),

/***/ "./src/components/DifferentGroupInput.js":
/*!***********************************************!*\
  !*** ./src/components/DifferentGroupInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DifferentGroupInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DifferentGroupInput, _React$Component);

  function DifferentGroupInput(props) {
    var _this;

    _classCallCheck(this, DifferentGroupInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DifferentGroupInput).call(this, props));
    _this.state = {
      value: ''
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DifferentGroupInput, [{
    key: "onChange",
    value: function onChange(evt) {
      var _this$props = this.props,
          participants = _this$props.participants,
          participantData = _this$props.participantData,
          onAddDifferentGroup = _this$props.onAddDifferentGroup;
      var selectedParticipant = participants.find(function (participant) {
        return participant.name === evt.currentTarget.value;
      });
      onAddDifferentGroup(participantData, selectedParticipant);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          participants = _this$props2.participants,
          participantData = _this$props2.participantData;
      var value = this.state.value;
      var availableParticipants = participants.filter(function (participant) {
        var isAlreadyInDifferent = participantData.differentGroup.some(function (differentGroupPart) {
          return differentGroupPart.name === participant.name;
        });
        return !isAlreadyInDifferent && participantData.name !== participant.name;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: value,
        onChange: this.onChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "\uC120\uD0DD\uD558\uC138\uC694"), availableParticipants.map(function (participant) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: participant.name,
          key: participant.name
        }, participant.name);
      })));
    }
  }]);

  return DifferentGroupInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DifferentGroupInput.propTypes = {
  participants: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  participantData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onAddDifferentGroup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (DifferentGroupInput);

/***/ }),

/***/ "./src/components/GroupMatchmaker.js":
/*!*******************************************!*\
  !*** ./src/components/GroupMatchmaker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Participant */ "./src/components/Participant.js");
/* harmony import */ var _DifferentGroupInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DifferentGroupInput */ "./src/components/DifferentGroupInput.js");
/* harmony import */ var _GroupsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupsTable */ "./src/components/GroupsTable.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GroupMatchmaker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GroupMatchmaker, _React$Component);

  function GroupMatchmaker(props) {
    var _this;

    _classCallCheck(this, GroupMatchmaker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupMatchmaker).call(this, props));
    _this.state = {
      groupTotal: 4,
      newParticipantName: '',
      participants: [],
      showModal: false,
      ModalComp: null,
      groups: []
    };
    _this.onKeyPressed = _this.onKeyPressed.bind(_assertThisInitialized(_this));
    _this.addParticipant = _this.addParticipant.bind(_assertThisInitialized(_this));
    _this.createGroups = _this.createGroups.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.onShowDifferentGroup = _this.onShowDifferentGroup.bind(_assertThisInitialized(_this));
    _this.onAddDifferentGroup = _this.onAddDifferentGroup.bind(_assertThisInitialized(_this));
    _this.deleteParticipant = _this.deleteParticipant.bind(_assertThisInitialized(_this));
    _this.deleteDifferentGroup = _this.deleteDifferentGroup.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GroupMatchmaker, [{
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "onKeyPressed",
    value: function onKeyPressed(evt) {
      if (evt.key === 'Enter') {
        this.addParticipant();
      }
    }
  }, {
    key: "onAddDifferentGroup",
    value: function onAddDifferentGroup(participantData, differentGroupParticipant) {
      participantData.differentGroup.push(differentGroupParticipant);
      differentGroupParticipant.differentGroup.push(participantData);
      this.setState({
        showModal: false,
        ModalComp: null
      });
    }
  }, {
    key: "addParticipant",
    value: function addParticipant() {
      var _this$state = this.state,
          participants = _this$state.participants,
          newParticipantName = _this$state.newParticipantName;

      if (!newParticipantName) {
        return;
      }

      var hasSameName = participants.some(function (participant) {
        return participant.name === newParticipantName;
      });

      if (hasSameName) {
        alert('같은 이름 팀이 있습니다.');
        return;
      }

      var newParticipant = {
        name: newParticipantName,
        differentGroup: [],
        group: null
      };
      this.setState({
        newParticipantName: '',
        participants: [].concat(_toConsumableArray(participants), [newParticipant])
      });
    }
  }, {
    key: "createGroups",
    value: function createGroups() {
      var _this$state2 = this.state,
          participants = _this$state2.participants,
          groupTotal = _this$state2.groupTotal;
      this.setState({
        groups: _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["default"].createGroups(participants, parseInt(groupTotal, 10))
      });
    }
  }, {
    key: "onShowDifferentGroup",
    value: function onShowDifferentGroup(participantData) {
      var participants = this.state.participants;
      var ModalComp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DifferentGroupInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        participants: participants,
        participantData: participantData,
        onAddDifferentGroup: this.onAddDifferentGroup
      });
      this.setState({
        showModal: true,
        ModalComp: ModalComp
      });
    }
  }, {
    key: "deleteDifferentGroup",
    value: function deleteDifferentGroup(participantData, differentGroupPart) {
      var index1 = participantData.differentGroup.indexOf(differentGroupPart);
      var index2 = differentGroupPart.differentGroup.indexOf(participantData);
      participantData.differentGroup.splice(index1, 1);
      differentGroupPart.differentGroup.splice(index2, 1);
      this.setState({
        groups: this.state.groups
      });
    }
  }, {
    key: "deleteParticipant",
    value: function deleteParticipant(participantData) {
      var newParticipants = this.state.participants.filter(function (participant) {
        return participantData !== participant;
      });
      this.setState({
        participants: newParticipants
      });
    }
  }, {
    key: "renderParticipantsList",
    value: function renderParticipantsList() {
      var _this2 = this;

      var participants = this.state.participants;

      if (!participants.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uB4F1\uB85D\uB41C \uD300\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
      }

      return participants.map(function (participant, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Participant__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: participant,
          key: participant.name,
          onShowDifferentGroup: _this2.onShowDifferentGroup,
          onDelete: _this2.deleteParticipant,
          onDeleteDifferentGroup: _this2.deleteDifferentGroup,
          index: i
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          newParticipantName = _this$state3.newParticipantName,
          groupTotal = _this$state3.groupTotal,
          showModal = _this$state3.showModal,
          ModalComp = _this$state3.ModalComp,
          groups = _this$state3.groups;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-matchmaker"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "participant-control"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-add",
        placeholder: "\uD300\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
        onChange: function onChange(evt) {
          return _this3.setState({
            newParticipantName: evt.currentTarget.value
          });
        },
        onKeyPress: this.onKeyPressed,
        value: newParticipantName,
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.addParticipant
      }, "\uD300 \uCD94\uAC00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "participant-list"
      }, this.renderParticipantsList()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "\uADF8\uB8F9\uC218",
        onChange: function onChange(evt) {
          return _this3.setState({
            groupTotal: evt.currentTarget.value
          });
        },
        value: groupTotal,
        type: "number"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.createGroups
      }, "\uADF8\uB8F9 \uC0DD\uC131")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        groupsData: groups
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        ariaHideApp: false,
        isOpen: showModal,
        onRequestClose: this.closeModal // style={customStyles}
        ,
        contentLabel: "Example Modal"
      }, ModalComp ? ModalComp : null));
    }
  }]);

  return GroupMatchmaker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GroupMatchmaker);

/***/ }),

/***/ "./src/components/GroupsTable.js":
/*!***************************************!*\
  !*** ./src/components/GroupsTable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function GroupsTable(_ref) {
  var groupsData = _ref.groupsData;

  if (!groupsData.length) {
    return null;
  }

  var tableRows = [];
  var hasParticipant = true;
  var i = 0;

  while (hasParticipant) {
    tableRows.push({
      id: i,
      items: groupsData.map(function (group) {
        if (!group.participants[i]) {
          hasParticipant = false;
          return '';
        }

        return group.participants[i].name;
      })
    });
    i++;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, groupsData.map(function (group) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      key: group.name
    }, group.name);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, tableRows.map(function (_ref2) {
    var id = _ref2.id,
        items = _ref2.items;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: id
    }, items.map(function (groupName, j) {
      return groupName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: groupName
      }, groupName) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: "".concat(id, "_").concat(j)
      });
    }));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (GroupsTable);

/***/ }),

/***/ "./src/components/Participant.js":
/*!***************************************!*\
  !*** ./src/components/Participant.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Participant =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Participant, _React$Component);

  function Participant(props) {
    var _this;

    _classCallCheck(this, Participant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Participant).call(this, props));
    _this.state = {
      name: props.data.name
    };
    _this.onNameChange = _this.onNameChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Participant, [{
    key: "onNameChange",
    value: function onNameChange() {
      var id = this.state.id;
      var name = this.state.name;

      if (!name) {
        name = "\uD300".concat(this.props.index + 1);
        this.setState({
          name: name
        });
      }

      this.props.onNameChange(id, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          onShowDifferentGroup = _this$props.onShowDifferentGroup,
          onDelete = _this$props.onDelete,
          onDeleteDifferentGroup = _this$props.onDeleteDifferentGroup;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "participant"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name"
      }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, data.differentGroup.map(function (differentGroupPart) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: differentGroupPart.name
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, differentGroupPart.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return onDeleteDifferentGroup(data, differentGroupPart);
          }
        }, "\uB04A\uB2E4"));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return onShowDifferentGroup(data);
        }
      }, "\uCC28\uB2E8\uD300 \uCD94\uAC00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return onDelete(data);
        }
      }, "\uC0AD\uC81C"))));
    }
  }]);

  return Participant;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Participant.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Participant);

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get random number between min (included) and max (excluded)
 * @param {number} min 
 * @param {number} max 
 * @param {number[]} blockedValues 
 */
function getRndInteger(min, max) {
  var blockedValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var selectedValue = Math.floor(Math.random() * (max - min)) + min;

  if (blockedValues.indexOf(selectedValue) !== -1) {
    return getRndInteger(min, max, blockedValues);
  }

  return selectedValue;
}
/**
 * Shuffles array in place
 * @param {Array} a
 */


function shuffleArray(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }

  return a;
}
/**
 * Create randomized groups based on preferences
 * @param {object[]} participants 
 * @param {number} groupTotal 
 */


function createGroups(participants, groupTotal) {
  var groups = [];
  var participantsPerGroup = Math.ceil(participants.length / groupTotal); // Reset participants groups

  participants.forEach(function (participant) {
    participant.group = null;
  }); // Create groups

  for (var _i = 0; _i < groupTotal; _i++) {
    groups.push({
      name: "\uADF8\uB8F9".concat(String.fromCharCode(97 + _i)),
      participants: []
    });
  } // Create priority list


  var priorityParticipants = participants.filter(function (participant) {
    return participant.differentGroup.length !== 0;
  });

  for (var _i2 = 0; _i2 < priorityParticipants.length; _i2++) {
    var curParticipant = priorityParticipants[_i2];
    var unavailableGroups = curParticipant.differentGroup.reduce(function (acc, differentGroupPart) {
      if (differentGroupPart.group && acc.indexOf(differentGroupPart.group) === -1) {
        acc.push(differentGroupPart.group);
      }

      return acc;
    }, []);
    var unavailableGroupsIndex = unavailableGroups.map(function (unavailableGroup) {
      return groups.indexOf(unavailableGroup);
    });
    var selectedGroupIndex = getRndInteger(0, groups.length, unavailableGroupsIndex);
    var selectedGroup = groups[selectedGroupIndex];
    curParticipant.group = selectedGroup;
    selectedGroup.participants.push(curParticipant);
  } // Select other participants


  var missingParticipants = participants.filter(function (participant) {
    return participant.group === null;
  });
  var i = 0;

  while (missingParticipants.length !== 0) {
    for (var j = 0; j < groupTotal; j++) {
      if (!groups[j].participants[i]) {
        if (!missingParticipants.length) {
          continue;
        }

        var selectedParticipantIndex = getRndInteger(0, missingParticipants.length);
        var selectedParticipant = missingParticipants[selectedParticipantIndex];
        selectedParticipant.group = groups[j];
        groups[j].participants.push(selectedParticipant);
        missingParticipants.splice(selectedParticipantIndex, 1);
      }
    }

    i++;
  } // Shuffle participants inside the group


  groups.forEach(function (group) {
    shuffleArray(group.participants);
  });
  return groups;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getRndInteger: getRndInteger,
  createGroups: createGroups
});

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/App.js","runtime","vendors"]]]);