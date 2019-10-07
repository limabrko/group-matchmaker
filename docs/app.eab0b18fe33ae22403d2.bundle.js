(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GroupMatchmaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GroupMatchmaker */ "./src/components/GroupMatchmaker.jsx");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_5__);







function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Group Matchmaker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GroupMatchmaker__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, "Made by \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/fill-lima"
  }, "Felipe Lima")));
}

var rootElement = document.getElementById('root');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), rootElement);

/***/ }),

/***/ "./src/components/DifferentGroupList.jsx":
/*!***********************************************!*\
  !*** ./src/components/DifferentGroupList.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





function DifferentGroupList(props) {
  var differenteGroupParts = props.differenteGroupParts,
      onDelete = props.onDelete;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "different-group-list list-unstyled"
  }, differenteGroupParts.map(function (differentGroupPart) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: differentGroupPart.name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, differentGroupPart.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-danger btn-sm",
      onClick: function onClick() {
        return onDelete(differentGroupPart);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"]
    })));
  }));
}

DifferentGroupList.propTypes = {
  differenteGroupParts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DifferentGroupList);

/***/ }),

/***/ "./src/components/EditParticipant.jsx":
/*!********************************************!*\
  !*** ./src/components/EditParticipant.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DifferentGroupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DifferentGroupList */ "./src/components/DifferentGroupList.jsx");
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Participant */ "./src/models/Participant.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var EditParticipant =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditParticipant, _React$Component);

  function EditParticipant(props) {
    var _this;

    _classCallCheck(this, EditParticipant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditParticipant).call(this, props));
    _this.state = {
      editData: props.participantData.clone()
    };
    _this.setName = _this.setName.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onProceed = _this.onProceed.bind(_assertThisInitialized(_this));
    _this.onDeleteDifferentGroupPart = _this.onDeleteDifferentGroupPart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditParticipant, [{
    key: "onDeleteDifferentGroupPart",
    value: function onDeleteDifferentGroupPart(differentGroupPart) {
      var editData = this.state.editData;
      var index = editData.differentGroup.indexOf(differentGroupPart);
      editData.differentGroup.splice(index, 1);
      this.setState({
        editData: editData
      });
    }
  }, {
    key: "onChange",
    value: function onChange(evt) {
      var participants = this.props.participants;
      var editData = this.state.editData;
      var selectedParticipant = participants.find(function (participant) {
        return participant.name === evt.currentTarget.value;
      });
      editData.differentGroup.push(selectedParticipant);
      this.setState({
        editData: editData
      });
    }
  }, {
    key: "onProceed",
    value: function onProceed() {
      var _this$props = this.props,
          participants = _this$props.participants,
          onEdit = _this$props.onEdit,
          participantData = _this$props.participantData;
      var editData = this.state.editData;

      if (!editData.name) {
        alert('참가자명을 입력하세요.');
        return;
      }

      var hasSameName = participants.some(function (participant) {
        return participantData.name !== editData.name && participant.name.toLowerCase() === editData.name.toLowerCase();
      });

      if (hasSameName) {
        alert('같은 이름 팀이 있습니다.');
        return;
      }

      onEdit(participantData, editData);
    }
  }, {
    key: "setName",
    value: function setName(evt) {
      var editData = this.state.editData;
      editData.name = evt.currentTarget.value;
      this.setState({
        editData: editData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          participants = _this$props2.participants,
          participantData = _this$props2.participantData,
          onCancel = _this$props2.onCancel;
      var _this$state = this.state,
          editData = _this$state.editData,
          value = _this$state.value;
      var availableParticipants = participants.filter(function (participant) {
        var isAlreadyInDifferent = editData.differentGroup.some(function (differentGroupPart) {
          return differentGroupPart.name === participant.name;
        });
        return !isAlreadyInDifferent && participantData.name !== participant.name;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "edit-participant-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-title"
      }, "".concat(participantData.name, " \uD3B8\uC9D1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "participant_name"
      }, "\uCC38\uAC00\uC790\uBA85"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "participant_name",
        placeholder: "\uADF8\uB8F9\uC218",
        onChange: this.setName,
        value: editData.name
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "participant_name"
      }, "\uAC19\uC740 \uADF8\uB8F9 \uBC30\uC815 \uC81C\uC678\uD560 \uCC38\uAC00\uC790"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        value: value,
        onChange: this.onChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "\uC120\uD0DD\uD558\uC138\uC694"), availableParticipants.map(function (participant) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: participant.name,
          key: participant.name
        }, participant.name);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DifferentGroupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        differenteGroupParts: editData.differentGroup,
        onDelete: this.onDeleteDifferentGroupPart
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group modal-actions"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: onCancel
      }, "\uCDE8\uC18C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-success",
        onClick: this.onProceed
      }, "\uD655\uC778"))));
    }
  }]);

  return EditParticipant;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

EditParticipant.propTypes = {
  participants: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  participantData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Participant__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EditParticipant);

/***/ }),

/***/ "./src/components/GroupMatchmaker.jsx":
/*!********************************************!*\
  !*** ./src/components/GroupMatchmaker.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Participant */ "./src/components/Participant.jsx");
/* harmony import */ var _EditParticipant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditParticipant */ "./src/components/EditParticipant.jsx");
/* harmony import */ var _GroupsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupsTable */ "./src/components/GroupsTable.jsx");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Participant */ "./src/models/Participant.js");
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
      participantsPerGroup: 0,
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
    _this.onShowEdit = _this.onShowEdit.bind(_assertThisInitialized(_this));
    _this.onAddDifferentGroup = _this.onAddDifferentGroup.bind(_assertThisInitialized(_this));
    _this.deleteParticipant = _this.deleteParticipant.bind(_assertThisInitialized(_this));
    _this.deleteDifferentGroup = _this.deleteDifferentGroup.bind(_assertThisInitialized(_this));
    _this.onEdit = _this.onEdit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GroupMatchmaker, [{
    key: "onKeyPressed",
    value: function onKeyPressed(evt) {
      if (evt.key === 'Enter') {
        this.addParticipant();
      }
    }
  }, {
    key: "onEdit",
    value: function onEdit(originalData, newEditData) {
      var participants = this.state.participants;
      originalData.differentGroup.forEach(function (participant) {
        return participant.removeDifferentGroup(originalData);
      });
      newEditData.differentGroup.forEach(function (participant) {
        return participant.addDifferentGroup(newEditData);
      });
      var index = participants.indexOf(originalData);
      participants.splice(index, 1, newEditData);
      this.setState({
        participants: participants,
        showModal: false,
        ModalComp: null
      });
    }
  }, {
    key: "onShowEdit",
    value: function onShowEdit(participantData) {
      var participants = this.state.participants;
      var ModalComp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditParticipant__WEBPACK_IMPORTED_MODULE_3__["default"], {
        participants: participants,
        participantData: participantData,
        onCancel: this.closeModal,
        onEdit: this.onEdit
      });
      this.setState({
        showModal: true,
        ModalComp: ModalComp
      });
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
    key: "setParticipantsPerGroup",
    value: function setParticipantsPerGroup(value) {
      var participantsPerGroup = parseInt(value, 10);
      var participants = this.state.participants;
      var groupTotal = participantsPerGroup > 0 ? Math.ceil(participants.length / participantsPerGroup) : 0;
      this.setState({
        groupTotal: groupTotal,
        participantsPerGroup: participantsPerGroup
      });
    }
  }, {
    key: "setGroupTotal",
    value: function setGroupTotal(value) {
      var groupTotal = parseInt(value, 10);
      var participants = this.state.participants;
      var participantsPerGroup = groupTotal > 0 ? Math.ceil(participants.length / groupTotal) : 0;
      this.setState({
        groupTotal: groupTotal,
        participantsPerGroup: participantsPerGroup
      });
    }
  }, {
    key: "deleteDifferentGroup",
    value: function deleteDifferentGroup(participantData, differentGroupPart) {
      var groups = this.state.groups;
      var index1 = participantData.differentGroup.indexOf(differentGroupPart);
      var index2 = differentGroupPart.differentGroup.indexOf(participantData);
      participantData.differentGroup.splice(index1, 1);
      differentGroupPart.differentGroup.splice(index2, 1);
      this.setState({
        groups: groups
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
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
          newParticipantName = _this$state.newParticipantName,
          groupTotal = _this$state.groupTotal;

      if (!newParticipantName) {
        return;
      }

      var hasSameName = participants.some(function (participant) {
        return participant.name.toLowerCase() === newParticipantName.toLowerCase();
      });

      if (hasSameName) {
        alert('같은 이름 팀이 있습니다.');
        return;
      }

      var newParticipant = new _models_Participant__WEBPACK_IMPORTED_MODULE_6__["default"](newParticipantName);
      var participantsPerGroup = Math.ceil((participants.length + 1) / groupTotal);
      this.setState({
        newParticipantName: '',
        participants: [].concat(_toConsumableArray(participants), [newParticipant]),
        participantsPerGroup: participantsPerGroup
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
    key: "deleteParticipant",
    value: function deleteParticipant(participantData) {
      var participants = this.state.participants;
      participants.forEach(function (participant) {
        return participant.removeDifferentGroup(participantData);
      });
      var newParticipants = participants.filter(function (participant) {
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "participant-container text-center"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uB4F1\uB85D\uB41C \uCC38\uAC00\uC790\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "participant-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uCC38\uAC00\uC790", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " (".concat(participants.length, ")"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "participant-list"
      }, participants.map(function (participant, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Participant__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: participant,
          key: participant.name,
          onShowEdit: _this2.onShowEdit,
          onDelete: _this2.deleteParticipant,
          onDeleteDifferentGroup: _this2.deleteDifferentGroup,
          index: i
        });
      })));
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
          groups = _this$state3.groups,
          participantsPerGroup = _this$state3.participantsPerGroup;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-matchmaker"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control form-control-lg",
        placeholder: "\uCC38\uAC00\uC790\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
        onChange: function onChange(evt) {
          return _this3.setState({
            newParticipantName: evt.currentTarget.value
          });
        },
        onKeyPress: this.onKeyPressed,
        value: newParticipantName,
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.addParticipant
      }, "\uCC38\uAC00\uC790 \uCD94\uAC00"))))), this.renderParticipantsList(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-controls"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "group_total"
      }, "\uADF8\uB8F9\uC218"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        id: "group_total",
        placeholder: "\uADF8\uB8F9\uC218",
        onChange: function onChange(evt) {
          return _this3.setGroupTotal(evt.currentTarget.value);
        },
        value: groupTotal
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "participants_per_group"
      }, "\uADF8\uB8F9\uC758 \uCC38\uAC00\uC790\uC218"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        id: "participants_per_group",
        placeholder: "\uADF8\uB8F9\uC218",
        onChange: function onChange(evt) {
          return _this3.setParticipantsPerGroup(evt.currentTarget.value);
        },
        value: participantsPerGroup
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group wrap-btn-create"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-success btn-lg",
        onClick: this.createGroups
      }, "\uADF8\uB8F9 \uC0DD\uC131")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        groupsData: groups
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        ariaHideApp: false,
        isOpen: showModal,
        onRequestClose: this.closeModal,
        className: "Modal",
        overlayClassName: "Overlay"
      }, ModalComp || null));
    }
  }]);

  return GroupMatchmaker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GroupMatchmaker);

/***/ }),

/***/ "./src/components/GroupsTable.jsx":
/*!****************************************!*\
  !*** ./src/components/GroupsTable.jsx ***!
  \****************************************/
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
    if (!groupsData[0].participants[i]) {
      hasParticipant = false;
      continue;
    }

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, groupsData.map(function (group) {
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

/***/ "./src/components/Participant.jsx":
/*!****************************************!*\
  !*** ./src/components/Participant.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Participant */ "./src/models/Participant.js");






function Participant(props) {
  var data = props.data,
      onShowEdit = props.onShowEdit,
      onDelete = props.onDelete,
      onDeleteDifferentGroup = props.onDeleteDifferentGroup;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "participant"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-block",
    onClick: function onClick() {
      return onShowEdit(data);
    }
  }, data.differentGroup.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill badge-danger"
  }, data.differentGroup.length) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-close",
    onClick: function onClick() {
      return onDelete(data);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"]
  })))));
}

Participant.propTypes = {
  onShowEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Participant__WEBPACK_IMPORTED_MODULE_4__["default"]).isRequired
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
/* harmony import */ var _models_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Group */ "./src/models/Group.js");

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
  var groups = []; // Reset participants groups

  participants.forEach(function (participant) {
    participant.group = null;
  }); // Create groups

  for (var _i = 0; _i < groupTotal; _i++) {
    groups.push(new _models_Group__WEBPACK_IMPORTED_MODULE_0__["default"]("\uADF8\uB8F9".concat(String.fromCharCode(97 + _i))));
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

/***/ "./src/models/Group.js":
/*!*****************************!*\
  !*** ./src/models/Group.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Group = function Group(name) {
  _classCallCheck(this, Group);

  this.name = name;
  this.participants = [];
};

/* harmony default export */ __webpack_exports__["default"] = (Group);

/***/ }),

/***/ "./src/models/Participant.js":
/*!***********************************!*\
  !*** ./src/models/Participant.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Participant =
/*#__PURE__*/
function () {
  function Participant(name) {
    _classCallCheck(this, Participant);

    this.name = name;
    this.differentGroup = [];
    this.group = null;
  }

  _createClass(Participant, [{
    key: "clone",
    value: function clone() {
      var clonie = new Participant(this.name);
      this.differentGroup.forEach(function (part) {
        return clonie.differentGroup.push(part);
      });
      clonie.group = this.group;
      return clonie;
    }
  }, {
    key: "addDifferentGroup",
    value: function addDifferentGroup(participantData) {
      var index = this.differentGroup.indexOf(participantData);

      if (index === -1) {
        this.differentGroup.push(participantData);
      }
    }
  }, {
    key: "removeDifferentGroup",
    value: function removeDifferentGroup(participantData) {
      var index = this.differentGroup.indexOf(participantData);

      if (index !== -1) {
        this.differentGroup.splice(index, 1);
      }
    }
  }]);

  return Participant;
}();

/* harmony default export */ __webpack_exports__["default"] = (Participant);

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/App.jsx","runtime","vendors"]]]);