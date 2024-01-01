(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\development\angular\roll-the-dices\src\main.ts */"zUnb");


/***/ }),

/***/ "7yyl":
/*!****************************************************!*\
  !*** ./src/app/game-board/game-board.component.ts ***!
  \****************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "Bf6M");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../functions */ "Flrk");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../storage.service */ "qkCY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










const _c0 = ["popupEndGame"];
const _c1 = function (a0) { return { "active": a0 }; };
function GameBoardComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_span_25_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const selectPlayerIndex_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.setPlayer(selectPlayerIndex_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r8 = ctx.$implicit;
    const selectPlayerIndex_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("border-top:solid 3px " + player_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, selectPlayerIndex_r9 === (ctx_r2.game == null ? null : ctx_r2.game.selectedPlayerIndex)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", player_r8.name, "");
} }
function GameBoardComponent_div_26_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_fa_icon_2_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.setUndoDiceBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r14.faUndo);
} }
const _c2 = function (a0, a1, a2) { return { "hide": a0, "accent": a1, "striped": a2 }; };
function GameBoardComponent_div_26_div_6_div_4_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_div_6_div_4_div_3_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.fillColField(col_r27, playerIndex_r13, col_r27.suggestionScore); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c2, !ctx_r29.showSuggestions, col_r27.suggestionScore, col_r27.suggestionScore == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r27.suggestionScore == 0 ? "" : col_r27.suggestionScore, " ");
} }
function GameBoardComponent_div_26_div_6_div_4_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 53);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", item_r24.info, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
const _c3 = function (a0, a1) { return { "active": a0, "striped": a1 }; };
function GameBoardComponent_div_26_div_6_div_4_div_3_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_div_6_div_4_div_3_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const diceIndex_r42 = ctx.index; const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.fillColField(col_r27, playerIndex_r13, item_r24.value * (diceIndex_r42 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diceIndex_r42 = ctx.index;
    const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, col_r27.value == (diceIndex_r42 + 1) * item_r24.value, item_r24.value * (diceIndex_r42 + 1) == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r24.value * (diceIndex_r42 + 1), " ");
} }
function GameBoardComponent_div_26_div_6_div_4_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameBoardComponent_div_26_div_6_div_4_div_3_div_8_div_1_Template, 2, 5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.makeArray(ctx_r32.game.gameList.numberOfDices));
} }
function GameBoardComponent_div_26_div_6_div_4_div_3_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_div_6_div_4_div_3_div_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const score_r51 = ctx.$implicit; const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.fillColField(col_r27, playerIndex_r13, score_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r51 = ctx.$implicit;
    const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, col_r27.value == score_r51, score_r51 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", score_r51, " ");
} }
function GameBoardComponent_div_26_div_6_div_4_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameBoardComponent_div_26_div_6_div_4_div_3_div_9_div_1_Template, 2, 5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r24.fixedPoints);
} }
const _c4 = function (a0) { return { "striped": a0 }; };
const _c5 = function (a0, a1) { return { "filled": a0, "striped": a1 }; };
const _c6 = function (a0) { return { "hide": a0 }; };
function GameBoardComponent_div_26_div_6_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_div_6_div_4_div_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r59.checkToggleOptions(_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameBoardComponent_div_26_div_6_div_4_div_3_span_2_Template, 2, 6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GameBoardComponent_div_26_div_6_div_4_div_3_div_7_Template, 1, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GameBoardComponent_div_26_div_6_div_4_div_3_div_8_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GameBoardComponent_div_26_div_6_div_4_div_3_div_9_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_div_6_div_4_div_3_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const col_r27 = ctx.$implicit; const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.fillColField(col_r27, playerIndex_r13, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_div_6_div_4_div_3_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const col_r27 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r63.resetScore(col_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Verwijder score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r27 = ctx.$implicit;
    const colIndex_r28 = ctx.index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const itemIndex_r25 = ctx_r66.index;
    const item_r24 = ctx_r66.$implicit;
    const partIndex_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate4"]("id", "list-field-", playerIndex_r13, "-", partIndex_r20, "-", colIndex_r28, "-", itemIndex_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c4, col_r27.value == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](col_r27.value > 0 ? item_r24.cssClasses : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate4"]("id", "list-field-", playerIndex_r13, "-", partIndex_r20, "-", colIndex_r28, "-", itemIndex_r25, "-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r24.playerscores[playerIndex_r13].columns[colIndex_r28].value)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c5, col_r27.value || col_r27.value == 0, col_r27.value == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r27.value == null && ctx_r26.isShowDiceBoard);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.calculationType == ctx_r26.calculationType.numberOfEyes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.calculationType == ctx_r26.calculationType.fixedNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c1, col_r27.value == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c6, !ctx_r26.showResetItem(col_r27.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r27.value);
} }
function GameBoardComponent_div_26_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameBoardComponent_div_26_div_6_div_4_div_3_Template, 16, 30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r24.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r24.playerscores[playerIndex_r13].columns);
} }
function GameBoardComponent_div_26_div_6_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r71 = ctx.index;
    const partIndex_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("id", "list-field-", playerIndex_r13, "-", partIndex_r20, "-", colIndex_r71, "-subtotal");
} }
function GameBoardComponent_div_26_div_6_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r75 = ctx.index;
    const partIndex_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("id", "list-field-", playerIndex_r13, "-", partIndex_r20, "-", colIndex_r75, "-subtotal-sign");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("id", "list-field-", playerIndex_r13, "-", partIndex_r20, "-", colIndex_r75, "-bonus");
} }
function GameBoardComponent_div_26_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sub Totaal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameBoardComponent_div_26_div_6_div_5_div_4_Template, 2, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Bonus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GameBoardComponent_div_26_div_6_div_5_div_10_Template, 3, 6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.makeArray(ctx_r22.game.numberOfGameLists));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Vanaf ", part_r19.bonusTarget, " punten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.makeArray(ctx_r22.game.numberOfGameLists));
} }
function GameBoardComponent_div_26_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r80 = ctx.index;
    const partIndex_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("id", "list-field-", playerIndex_r13, "-", partIndex_r20, "-", colIndex_r80, "-total");
} }
function GameBoardComponent_div_26_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameBoardComponent_div_26_div_6_div_4_Template, 4, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GameBoardComponent_div_26_div_6_div_5_Template, 11, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GameBoardComponent_div_26_div_6_div_9_Template, 2, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r19 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", part_r19.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", part_r19.listItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", part_r19.hasBonusPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Totaal ", part_r19.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.makeArray(ctx_r15.game.numberOfGameLists));
} }
function GameBoardComponent_div_26_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r84 = ctx.index;
    const playerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "list-field-", playerIndex_r13, "-", colIndex_r84, "-totalgeneral");
} }
const _c7 = function (a0) { return { "show-panel": a0 }; };
const _c8 = function (a0) { return { "dice-board-margin": a0 }; };
function GameBoardComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameBoardComponent_div_26_fa_icon_2_Template, 1, 1, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GameBoardComponent_div_26_div_6_Template, 10, 5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " TOTAAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_div_26_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.showPopupEndGame(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GameBoardComponent_div_26_div_12_Template, 2, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerIndex_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c7, playerIndex_r13 == (ctx_r3.game == null ? null : ctx_r3.game.selectedPlayerIndex)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showUndo && !ctx_r3.showSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.game.players[playerIndex_r13].currentRound);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" / ", ctx_r3.totalRounds * ctx_r3.game.numberOfGameLists, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.game.gameList.listParts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c8, ctx_r3.isShowDiceBoard));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.makeArray(ctx_r3.game.numberOfGameLists));
} }
function GameBoardComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r89 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rij ", colIndex_r89 + 1, "");
} }
function GameBoardComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameBoardComponent_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r95 = ctx.index;
    const playerIndex_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "list-field-", colIndex_r95, "-", playerIndex_r91, "-totalgeneral-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r92.setPopupRowTotal(playerIndex_r91, colIndex_r95));
} }
function GameBoardComponent_div_37_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerIndex_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", playerIndex_r91, "-overall-total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r93.setTotalofCols(playerIndex_r91));
} }
function GameBoardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GameBoardComponent_div_37_div_5_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GameBoardComponent_div_37_div_6_Template, 2, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r90 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("background-color:" + player_r90.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", player_r90.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.makeArray(ctx_r7.game.numberOfGameLists));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.game.numberOfGameLists > 1);
} }
const _c9 = function (a0) { return { "show": a0 }; };
class GameBoardComponent {
    constructor(storage) {
        this.storage = storage;
        this.restartGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDiceBoard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetDiceBoard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.undoDiceBoard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.calculationType = _interfaces__WEBPACK_IMPORTED_MODULE_2__["CalculationType"];
        this.bonus = 0;
        this.currentRound = 0;
        this.initialCalculateTimeOut = 700;
        this.filledItemsInColTemp = 0;
        this.isInitialCalc = true;
        this.isShowDiceBoard = false;
        this.showSuggestions = false;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"];
        this.faDice = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDice"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faList"];
        this.faUndo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUndo"];
        this.makeArray = _functions__WEBPACK_IMPORTED_MODULE_4__["makeArray"];
    }
    ngOnChanges(changes) {
        if (changes.diceScore && this.game) {
            this.diceScore = changes.diceScore.currentValue;
            this.calculateAll();
        }
    }
    setUndoDiceBoard() {
        this.game = this.storage.loadGame('gamePrevious');
        this.diceScore = this.storage.loadDiceSettings('diceSettingsPrevious');
        this.undoDiceBoard.emit(!this.undoDiceBoard);
        this.storage.saveDiceSettings(this.diceScore);
        this.showUndo = false;
    }
    fillColField(col, playerIndex, playerScore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.saveGame(this.game, 'gamePrevious');
            this.storage.saveDiceSettings(this.diceScore, 'diceSettingsPrevious');
            this.showUndo = true;
            col.value = playerScore;
            this.saveAndCalculateFilledCol(playerIndex);
            this.resetSuggestions();
        });
    }
    saveAndCalculateFilledCol(playerIndex) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.saveGame(this.game);
            this.calculateAll();
            this.hidePopUp();
            this.showSuggestions = false;
            this.resetDiceBoard.emit(!this.resetDiceBoard);
            yield this.checkGameFinished();
            this.setNextPlayerIndex(playerIndex);
        });
    }
    checkGameFinished() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let round = 0;
            let totalRounds = 0;
            this.game.gameList.listParts.forEach((part) => {
                totalRounds += part.listItems.length * this.game.players.length * part.listItems[0].playerscores[0].columns.length;
            });
            this.game.players.forEach((player) => {
                round += player.currentRound;
            });
            if (round == totalRounds) {
                document.getElementById('end-game-popup').className = 'popup';
                document.getElementById('overLayer').style.display = 'block';
                this.showUndo = false;
            }
        });
    }
    showPopupEndGame(isPreview) {
        document.getElementById('end-game-popup').className = 'popup';
        document.getElementById('overLayer').style.display = 'block';
        if (isPreview) {
            document.getElementById('btn-end-game').style.display = 'none';
            document.getElementById('title-end-game').innerHTML = 'Tussenstand';
        }
    }
    resetScore(col) {
        col.value = null;
        this.calculateAll();
        this.storage.saveGame(this.game);
        this.hidePopUp();
    }
    calculateAll() {
        // loop through players of game
        for (let playerIndex = 0; playerIndex < this.game.players.length; playerIndex++) {
            this.game.players[playerIndex].currentRound = 0;
            // loop through lists of player
            for (let colIndex = 0; colIndex < this.game.numberOfGameLists; colIndex++) {
                let partIndex = 0;
                this.totalRounds = 0;
                // loop through parts of list
                this.game.gameList.listParts.forEach((part) => {
                    // set totalrounds  -- TODO this is calculated way to often.
                    this.totalRounds += part.listItems.length;
                    const idName = 'list-field-' + playerIndex + '-' + partIndex + '-' + colIndex;
                    const idCalculateCols = document.querySelectorAll('[id^="' + idName + '"][id$="-value"]');
                    const idColstotal = document.querySelectorAll('[id^="list-field-' + playerIndex + '"][id$="' + colIndex + '-total"]');
                    // calculate all items in col of part
                    this.calculateCol(idCalculateCols, idColstotal, idName, colIndex, partIndex, playerIndex);
                    partIndex++;
                });
            }
        }
        if (this.diceScore && !this.isInitialCalc) {
            this.showSuggestions = true;
        }
        // Game is initially calculated
        this.isInitialCalc = false;
        this.checkGameFinished();
    }
    calculateCol(idCols, idColstotal, idBase, colIndex, partIndex, playerIndex) {
        const total = this.calculateTotalofColItems(playerIndex, colIndex, partIndex);
        // check filled items of column
        const filledItemsInCol = this.filledItemsInColTemp;
        this.filledItemsInColTemp = 0;
        const elTotal = document.getElementById(idBase + '-total');
        if (document.getElementById(idBase + '-bonus')) {
            const bonusTarget = this.game.gameList.listParts[partIndex].bonusTarget;
            const bonusValue = this.game.gameList.listParts[partIndex].bonusValue;
            let remainingPointsForBonus = (bonusTarget - total) * -1;
            const totalSignClass = remainingPointsForBonus < 0 ? 'error' : remainingPointsForBonus > 0 ? 'success' : 'info';
            const elSubtotalSign = document.getElementById(idBase + '-subtotal-sign');
            const elSubTotal = document.getElementById(idBase + '-subtotal');
            const elBonus = document.getElementById(idBase + '-bonus');
            elSubtotalSign.className = 'sign ' + totalSignClass;
            elBonus.className = 'info';
            if (filledItemsInCol > 0 && filledItemsInCol < idCols.length) {
                elSubtotalSign.className = 'total sign ' + totalSignClass;
                elSubtotalSign.innerHTML = remainingPointsForBonus.toString();
            }
            if (filledItemsInCol == idCols.length) {
                if (total < bonusTarget) {
                    elBonus.className = 'error';
                }
            }
            elSubTotal.value = total.toString();
            elBonus.value = '0';
            elTotal.value = total.toString();
            if (total > bonusTarget - 1) {
                elBonus.value = bonusValue.toString();
                elBonus.className = 'success';
                elTotal.value = (total + bonusValue).toString();
            }
        }
        else {
            elTotal.value = total.toString();
        }
        // total general (sum of all parts)
        let totalGeneral = 0;
        idColstotal.forEach((elementGeneral) => {
            totalGeneral += elementGeneral.value ? +elementGeneral.value : 0;
        });
        document.getElementById('list-field-' + playerIndex + '-' + colIndex + '-totalgeneral')
            .value = totalGeneral.toString();
    }
    calculateTotalofColItems(playerIndex, colIndex, partIndex) {
        let total = 0;
        this.game.gameList.listParts[partIndex].listItems.forEach((item, itemIndex) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const playerItemScore = item.playerscores[playerIndex].columns[colIndex];
            const score = playerItemScore.value;
            total += score;
            if (score !== null) {
                this.game.players[playerIndex].currentRound++;
                this.filledItemsInColTemp++;
            }
            else {
                // calculate suggestions for thrown dices
                if (this.diceScore) {
                    playerItemScore.suggestionScore = this.checkDiceScores(partIndex, itemIndex);
                }
            }
        }));
        return total;
    }
    checkDiceScores(partIndex, itemIndex) {
        let score = 0;
        let selectedDices = [...this.diceScore.thrownDices];
        const holdDices = [...this.diceScore.holdDices];
        holdDices.forEach((dice, index) => {
            if (dice) {
                selectedDices[index] = dice;
            }
        });
        const item = this.game.gameList.listParts[partIndex].listItems[itemIndex];
        const itemValidation = item.validation;
        switch (item.calculationType) {
            case 1:
                const numberOfDiceValues = selectedDices.filter(val => val == item.value).length;
                score = numberOfDiceValues * item.value;
                return score;
            case 2:
                if (itemValidation) {
                    if (itemValidation.possibleCombinations) {
                        selectedDices = selectedDices.sort((a, b) => {
                            return a > b ? 1 : a < b ? -1 : 0;
                        });
                        selectedDices = selectedDices.filter((c, index) => {
                            return selectedDices.indexOf(c) === index;
                        });
                        let dicesString = selectedDices.toString();
                        itemValidation.possibleCombinations.forEach((diceValues) => {
                            if (dicesString.includes(diceValues.toString())) {
                                score = item.fixedPoints[0];
                            }
                        });
                    }
                    if (itemValidation.numberOfSameDices) {
                        score = _functions__WEBPACK_IMPORTED_MODULE_4__["scoreSameValues"](selectedDices, itemValidation, item, item.fixedPoints);
                    }
                }
                return score;
            default:
                return score;
        }
    }
    showSuggestion(value) {
        return value == null && this.showDiceBoard ? true : false;
    }
    resetSuggestions() {
        this.game.gameList.listParts.forEach((part) => {
            part.listItems.forEach((item) => {
                item.playerscores.forEach((playerScore) => {
                    playerScore.columns.forEach((col) => {
                        col.suggestionScore = 0;
                    });
                });
            });
        });
    }
    showResetItem(value) {
        return value == null ? false : true;
    }
    setPopupRowTotal(playerIndex, colIndex) {
        return document.getElementById('list-field-' + playerIndex + '-' + colIndex + '-totalgeneral').value;
    }
    setTotalofCols(playerIndex) {
        let value = 0;
        const idTotalGeneral = document.querySelectorAll('[id$="' + playerIndex + '-totalgeneral-end"]');
        idTotalGeneral.forEach(item => {
            value += +item.value;
        });
        return value.toString();
    }
    setNextPlayerIndex(index) {
        document.getElementById('overLayertrans').style.display = 'block';
        setTimeout(() => {
            const nextIndex = index < (this.game.players.length - 1) ? index + 1 : 0;
            this.setPlayer(nextIndex);
            document.getElementById('overLayertrans').style.display = 'none';
        }, 700);
    }
    setPlayer(index) {
        this.game.selectedPlayerIndex = index;
    }
    toggleSuggestions(hide) {
        var items = document.querySelectorAll('[class^="suggestion-panel"]');
        for (var i = 0; i < items.length; i++) {
            if (hide) {
                items[i].innerHTML = '';
                items[i].className = 'suggestion-panel hide';
            }
            else {
                items[i].className.replace(' hide', ' ');
            }
        }
    }
    hidePopUp() {
        var items = document.getElementsByClassName('popup');
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'popup hide';
            document.getElementById('overLayer').style.display = 'none';
        }
    }
    checkToggleOptions(popup) {
        if (!this.isShowDiceBoard) {
            this.toggleOptions(popup);
        }
    }
    toggleOptions(popup) {
        this.hidePopUp();
        if (popup.className == 'popup hide') {
            popup.className = 'popup';
            document.getElementById('overLayer').style.display = 'block';
            document.getElementById('overLayer').className = 'overLayer';
        }
        else {
            popup.className = 'popup hide';
            document.getElementById('overLayer').style.display = 'none';
        }
    }
    saveGame() {
        const date = new Date(this.game.dateTime).toString();
        const type = this.game.gameList.name;
        let names = '';
        this.game.players.forEach((player, index) => {
            names += index < this.game.players.length - 1 ? player.name + ', ' : player.name;
        });
        const fileName = 'saved-game_' + date + '_' + type + '_' + names;
        this.storage.saveGame(this.game, fileName);
    }
    stopSaveGame() {
        this.saveGame();
        this.storage.deleteGame();
        this.storage.deleteGame('gamePrevious');
        this.storage.deleteDiceSettings('diceSettingsPrevious');
        this.hidePopUp();
        this.restartGame.emit(true);
        this.game = null;
        this.showUndo = false;
    }
    stopGame(popup) {
        popup.className = 'popup';
        document.getElementById('overLayer').style.display = 'block';
        document.getElementById('overLayer').className = 'overLayer';
    }
    toggleDiceBoard() {
        this.isShowDiceBoard = !this.isShowDiceBoard;
        this.showDiceBoard.emit(this.isShowDiceBoard);
        this.game.showDiceBoard = this.isShowDiceBoard;
        this.storage.saveGame(this.game);
    }
    generateGame() {
        this.game = {
            dateTime: new Date(),
            selectedPlayerIndex: 0,
            players: this.storage.loadPlayers(),
            gameList: this.storage.loadGameList(),
            numberOfGameLists: this.storage.loadNumberOfLists(),
        };
        this.game.gameList.listParts.forEach((part) => {
            part.listItems.forEach((item) => {
                item.playerscores = [];
                const players = this.game.players;
                players.forEach((player) => {
                    let col = 1;
                    let colScores = [];
                    player.currentRound = 0;
                    while (col <= this.game.numberOfGameLists) {
                        const colScore = {
                            column: col,
                            value: null
                        };
                        colScores.push(colScore);
                        col++;
                    }
                    const playerscore = {
                        player: player,
                        columns: colScores
                    };
                    item.playerscores.push(playerscore);
                });
            });
        });
        this.storage.saveGame(this.game);
        setTimeout(() => {
            this.calculateAll();
        }, this.initialCalculateTimeOut);
    }
    startGame() {
        this.isShowDiceBoard = this.game.showDiceBoard || false;
        this.showDiceBoard.emit(this.game.showDiceBoard);
        setTimeout(() => {
            this.calculateAll();
        }, this.initialCalculateTimeOut);
    }
    ngOnInit() {
        this.game = this.storage.loadGame();
        this.game ? this.startGame() : this.generateGame();
        // translations
        this.translations = this.storage.loadSelectedLanguage('nl');
        //undo
        if (localStorage.getItem("gamePrevious") !== null) {
            this.showUndo = true;
        }
    }
}
GameBoardComponent.ɵfac = function GameBoardComponent_Factory(t) { return new (t || GameBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
GameBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameBoardComponent, selectors: [["app-game-board"]], viewQuery: function GameBoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popupEndGame = _t.first);
    } }, inputs: { diceScore: "diceScore" }, outputs: { restartGame: "restartGame", showDiceBoard: "showDiceBoard", resetDiceBoard: "resetDiceBoard", undoDiceBoard: "undoDiceBoard" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 43, vars: 14, consts: [[1, "board-panel", "show", 3, "ngClass"], ["id", "overLayer", 1, "overLayer", "hide", 3, "click"], ["id", "overLayertrans", 1, "overLayer", "transparent", "hide"], [1, "header"], [1, "btn", "btn-diceboard", 3, "ngClass", "click"], [3, "icon"], [1, "btn", "btn-new-game", 3, "click"], [1, "popup", "hide"], ["popupHome", ""], [1, "row", "no-border"], [1, "row", "action-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "game-progress"], ["gameProgressPanel", ""], [1, "player-switch-panel"], [3, "style", "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "player-panel", 3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "end-game-popup", 1, "popup", "hide"], ["popupEndGame", ""], ["id", "title-end-game"], [1, "row", "endgame", "endgame-header"], [1, "col", "description"], ["class", "col endgame-width", 4, "ngFor", "ngForOf"], ["class", "col endgame-width", 4, "ngIf"], ["class", "row endgame", 4, "ngFor", "ngForOf"], ["id", "btn-end-game", 1, "btn", "btn-primary", 3, "click"], [3, "ngClass", "click"], [1, "player-panel", 3, "ngClass"], [1, "round-info"], ["style", "font-size:14px;margin-right:10px;", 3, "icon", "click", 4, "ngIf"], ["class", "part", 4, "ngFor", "ngForOf"], [1, "row", "total-general", 3, "ngClass"], [1, "col", "description", "total", "total-general"], [1, "btn", "btn-transparent", 3, "click"], ["class", "col", 4, "ngFor", "ngForOf"], [2, "font-size", "14px", "margin-right", "10px", 3, "icon", "click"], [1, "part"], [1, "row", "part"], [1, "col", "description", "part"], ["class", "row row-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "total"], [1, "row", "row-item"], ["class", "col col-value", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "col", "col-value", 3, "id", "ngClass"], ["readonly", "true", "type", "text", 3, "id", "ngModel", "ngClass", "click"], ["class", "suggestion-panel", 3, "ngClass", "click", 4, "ngIf"], ["popupId", ""], ["class", "info", 3, "innerHtml", 4, "ngIf"], [1, "dice-select-item", "striped", 2, "margin-top", "20px", 3, "ngClass", "click"], [1, "dice-select-item", 2, "margin-top", "20px", "width", "180px", 3, "ngClass", "click"], [1, "suggestion-panel", 3, "ngClass", "click"], [1, "info", 3, "innerHtml"], ["class", "dice-select-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dice-select-item", 3, "ngClass", "click"], [1, "row", "sub-total"], [1, "col", "description", "total", "sub-total"], ["class", "col col-value", 4, "ngFor", "ngForOf"], [1, "row", "bonus"], [1, "remarks"], [1, "col", "col-value"], ["readonly", "true", "value", "0", 3, "id"], [1, "total", "sign", "info", 3, "id"], [1, "col"], [1, "col", "endgame-width"], [1, "row", "endgame"], [1, "player-colors-endgame"], ["readonly", "true", 1, "endgame", 3, "id", "value"], ["readonly", "true", 1, "endgame", "total", "bold", 3, "id", "value"]], template: function GameBoardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_div_click_1_listener() { return ctx.hidePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_button_click_6_listener() { return ctx.toggleDiceBoard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.stopGame(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Stoppen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Weet je zeker dat je wilt stoppen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_button_click_18_listener() { return ctx.stopSaveGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_button_click_20_listener() { return ctx.hidePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Annuleren");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GameBoardComponent_span_25_Template, 3, 6, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, GameBoardComponent_div_26_Template, 13, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Spel afgelopen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Speler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, GameBoardComponent_div_35_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, GameBoardComponent_div_36_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, GameBoardComponent_div_37_Template, 7, 5, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_button_click_39_listener() { return ctx.stopSaveGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Nieuw spel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBoardComponent_Template_button_click_41_listener() { return ctx.hidePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Sluiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c9, !ctx.isInitialCalc && ctx.game));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.game.gameList.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.isShowDiceBoard));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faDice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.game.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.game.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.makeArray(ctx.game.numberOfGameLists));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game.numberOfGameLists > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.game.players);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: orangered;\n  color: white;\n  padding: 3px 10px;\n  margin-bottom: 0px;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 8px;\n  border: solid 1px rgba(255, 255, 255, 0.5);\n}\n.header[_ngcontent-%COMP%]   .btn.btn-diceboard[_ngcontent-%COMP%] {\n  right: 95px;\n  padding-right: 20px;\n}\n.header[_ngcontent-%COMP%]   .btn.btn-diceboard.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n.header[_ngcontent-%COMP%]   .btn.btn-new-game[_ngcontent-%COMP%] {\n  right: 10px;\n}\n.header[_ngcontent-%COMP%]   .btn.btn-save-game[_ngcontent-%COMP%] {\n  right: 0;\n}\n.game-progress[_ngcontent-%COMP%] {\n  position: relative;\n  background: #214478;\n  color: #fff !important;\n  padding: 8px 5px;\n  height: 25px;\n}\n.game-progress[_ngcontent-%COMP%]   .player-switch-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 10px;\n}\n.game-progress[_ngcontent-%COMP%]   .player-switch-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1px;\n  padding: 3px 10px 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n.game-progress[_ngcontent-%COMP%]   .player-switch-panel[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #333;\n}\n.game-progress[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1;\n  padding: 1px 10px 0px 5px;\n  margin-bottom: 5px;\n  font-size: 20px;\n}\n.player-panel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  visibility: hidden;\n  animation-duration: 1.2s;\n}\n.player-panel.show-panel[_ngcontent-%COMP%] {\n  visibility: visible;\n  animation-name: fadeIn;\n}\n.player-panel[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: right;\n  padding-right: 15px;\n  font-size: 16px;\n  top: -31px;\n  right: 5px;\n  z-index: 10;\n  color: #fff;\n}\n.suggestion-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  left: 11px;\n  top: 6px;\n  text-align: center;\n  line-height: 15px;\n  height: 15px;\n  width: 30px;\n  background-color: #fffde7;\n  border: solid 1px #e79d9d;\n  border-radius: 15px;\n  opacity: 0.6;\n  color: red;\n  cursor: pointer;\n}\n.suggestion-panel.accent[_ngcontent-%COMP%] {\n  top: 4px;\n  line-height: 18px;\n  height: 19px;\n  font-weight: bold;\n  opacity: 0.9;\n  color: #0d4e2a;\n  border: solid 1px #80d4a6;\n  background-color: #d7eed3;\n}\n.suggestion-panel[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.suggestion-panel.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.suggestion-panel.striped[_ngcontent-%COMP%] {\n  background: linear-gradient(-35deg, white 0%, white 48%, red 49%, red 51%, white 52%, white 100%);\n}\n.trophy[_ngcontent-%COMP%] {\n  border-color: goldenrod;\n  font-weight: bold;\n  background-color: gold;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  border: solid 0px transparent;\n  background-color: #b7c3db;\n  padding: 1px 5px;\n  width: 15px;\n  text-align: center;\n  color: #333;\n  border-radius: 10px;\n  margin-right: 6px;\n  display: inline-block;\n  cursor: pointer;\n}\n.tooltip-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 5px 10px;\n  border: solid 1px #a6c0cf;\n  background-color: #dce7ee;\n  z-index: 10;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxnYW1lLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDQywyQkRGZTtFQ0dmLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUQ7QUFDQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwwQ0FBQTtBQUNGO0FBQUU7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7QUFFSDtBQURHO0VBQ0Msb0NBQUE7RUFDQSxnREFBQTtBQUdKO0FBQUU7RUFDQyxXQUFBO0FBRUg7QUFBRTtFQUNDLFFBQUE7QUFFSDtBQUdBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUQ7QUFDQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBRUg7QUFERztFQUNDLHNCQUFBO0VBQ0EsV0FBQTtBQUdKO0FBRUM7RUFDQyxTQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7QUFJQTtFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFESjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUFSO0FBRUM7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGO0FBSUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUREO0FBRUM7RUFDQyxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVDO0VBQ0MsYUFBQTtBQUFGO0FBRUM7RUFDQyxhQUFBO0FBQUY7QUFFQztFQUNDLGlHRHhHUTtBQ3dHVjtBQUlBO0VBQ0MsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBREQ7QUFJQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBREQ7QUFHQTtFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFEO0FBR0E7RUFDSTtJQUFJLFVBQUE7RUFDTjtFQUFFO0lBQU0sVUFBQTtFQUdSO0FBQ0YiLCJmaWxlIjoiZ2FtZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuJHByaW1hcnktY29sb3I6IG9yYW5nZXJlZDtcclxuJHNlY29uZGFyeS1jb2xvcjogIzQ0NDtcclxuJGJvYXJkLWNvbG9yOiByZ2IoMjYsIDEyMSwgNDIpO1xyXG4kYm9yZGVyOiBzb2xpZCAxcHggcmdiKDEyNCwgMTI0LCAxMjQpO1xyXG4kY29sb3Itc3VjY2VzczogcmdiKDEsIDEwNCwgMSk7XHJcbiRjb2xvci1lcnJvcjogcmVkO1xyXG4kYnV0dG9uLXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLDAsMC41KTtcclxuXHJcblxyXG4kc3RyaXBlZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTM1ZGVnLCBcclxuICAgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIFxyXG4gICAgcmdiYSgyNTUsMjU1LDI1NSwxKSA0OCUsIFxyXG4gICAgcmdiYSgyNTUsMCwwLDEpIDQ5JSwgXHJcbiAgICByZ2JhKDI1NSwwLDAsMSkgNTElLCBcclxuICAgIHJnYmEoMjU1LDI1NSwyNTUsMSkgNTIlLCBcclxuICAgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7IiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDNweCAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHQuYnRuIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAxNXB4O1xyXG5cdFx0dG9wOiA4cHg7XHJcblx0XHRib3JkZXI6c29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG5cdFx0Ji5idG4tZGljZWJvYXJkIHtcclxuXHRcdFx0cmlnaHQ6IDk1cHg7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6MjBweDtcclxuXHRcdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsLjUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmLmJ0bi1uZXctZ2FtZSB7XHJcblx0XHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdFx0Ji5idG4tc2F2ZS1nYW1lIHtcclxuXHRcdFx0cmlnaHQ6MDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5nYW1lLXByb2dyZXNzIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogIzIxNDQ3ODtcclxuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDhweCA1cHg7XHJcblx0aGVpZ2h0OjI1cHg7XHJcblx0LnBsYXllci1zd2l0Y2gtcGFuZWwge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOjA7XHJcblx0XHRsZWZ0OjEwcHg7XHJcblx0XHRzcGFuIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6MXB4O1xyXG5cdFx0XHRwYWRkaW5nOjNweCAxMHB4IDVweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Y29sb3I6IzMzMztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aDMge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRwYWRkaW5nOiAxcHggMTBweCAwcHggNXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLnBsYXllci1wYW5lbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OjA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgICAmLnNob3ctcGFuZWwge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIH1cclxuXHQucm91bmQtaW5mbyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHR0b3A6IC0zMXB4O1xyXG5cdFx0cmlnaHQ6IDVweDtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcbn1cclxuXHJcbi5zdWdnZXN0aW9uLXBhbmVsIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMjtcclxuXHRsZWZ0OjExcHg7XHJcblx0dG9wOjZweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDE1cHg7XHJcblx0aGVpZ2h0OjE1cHg7XHJcblx0d2lkdGg6MzBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTMsIDIzMSk7XHJcblx0Ym9yZGVyOnNvbGlkIDFweCByZ2IoMjMxLCAxNTcsIDE1Nyk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRvcGFjaXR5OiAwLjY7XHJcblx0Y29sb3I6cmVkO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHQmLmFjY2VudCB7XHJcblx0XHR0b3A6NHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRoZWlnaHQ6MTlweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0b3BhY2l0eTogMC45O1xyXG5cdFx0Y29sb3I6ICMwZDRlMmE7XHJcblx0XHRib3JkZXI6c29saWQgMXB4ICM4MGQ0YTY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlZWQzO1xyXG5cdH1cclxuXHQmOmVtcHR5e1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0Ji5oaWRlIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdCYuc3RyaXBlZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAkc3RyaXBlZDtcclxuXHR9XHJcbn1cclxuXHJcbi50cm9waHkge1xyXG5cdGJvcmRlci1jb2xvcjpnb2xkZW5yb2Q7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOmdvbGQ7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxuXHRib3JkZXI6c29saWQgMHB4IHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDE5NSwgMjE5KTtcclxuXHRwYWRkaW5nOjFweCA1cHg7XHJcblx0d2lkdGg6MTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IzMzMztcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdG1hcmdpbi1yaWdodDo2cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udG9vbHRpcC1wYW5lbCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBhZGRpbmc6NXB4IDEwcHg7XHJcblx0Ym9yZGVyOnNvbGlkIDFweCAjYTZjMGNmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2U3ZWU7XHJcblx0ei1pbmRleDoxMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCUge29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-board',
                templateUrl: './game-board.component.html',
                styleUrls: ['./game-board.component.scss']
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }]; }, { popupEndGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['popupEndGame']
        }], diceScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], restartGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], showDiceBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], resetDiceBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], undoDiceBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bf6M":
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/*! exports provided: CalculationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationType", function() { return CalculationType; });
var CalculationType;
(function (CalculationType) {
    CalculationType[CalculationType["numberOfEyes"] = 1] = "numberOfEyes";
    CalculationType[CalculationType["fixedNumber"] = 2] = "fixedNumber";
})(CalculationType || (CalculationType = {}));


/***/ }),

/***/ "Flrk":
/*!******************************!*\
  !*** ./src/app/functions.ts ***!
  \******************************/
/*! exports provided: makeArray, scoreSameValues, setDicesTill, orderBy, sumOfNumberedArray, setSelectedLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeArray", function() { return makeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreSameValues", function() { return scoreSameValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDicesTill", function() { return setDicesTill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumOfNumberedArray", function() { return sumOfNumberedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedLanguage", function() { return setSelectedLanguage; });
function makeArray(i) {
    return new Array(i);
}
function scoreSameValues(selectedDices, itemValidation, item, fixedPoints) {
    let dices = [1, 2, 3, 4, 5, 6];
    let score = 0;
    let numberValid = [];
    let valid = true;
    selectedDices = orderBy(selectedDices);
    const uniqueNumbers = itemValidation.numberOfSameDices.filter((item, i, ar) => ar.indexOf(item) === i).length;
    if (itemValidation.numberOfSameDices) {
        let numberIndex = 0;
        while (numberIndex < itemValidation.numberOfSameDices.length) {
            let numberValidSet = false;
            if (valid) {
                const number = itemValidation.numberOfSameDices[numberIndex];
                for (const dice of dices) {
                    const diceCount = selectedDices.filter((sd) => sd == dice).length;
                    if (diceCount >= number) {
                        const scoreTemp = dice * number;
                        if (numberValidSet == false) {
                            numberValid.push({ sameValues: diceCount, required: number, valid: true, score: scoreTemp });
                            numberValidSet = true;
                        }
                        else {
                            numberValid[numberIndex] = { sameValues: diceCount, required: number, valid: true, score: scoreTemp };
                        }
                        dices = dices.filter(d => d !== dice);
                        if (uniqueNumbers == 1) {
                            dices = setDicesTill(dice);
                        }
                    }
                }
                ;
            }
            if (numberValid.length == 0) {
                valid = false;
            }
            numberIndex++;
        }
        ;
        const numberValidItems = numberValid.filter(nv => nv.sameValues >= itemValidation.numberOfSameDices.length);
        if (numberValidItems.length >= itemValidation.numberOfSameDices.length) {
            numberValidItems.forEach((item) => {
                score += item.score;
            });
        }
    }
    if (score > 0 && itemValidation.countAllDices) {
        score = sumOfNumberedArray(selectedDices);
    }
    else if (score > 0 && (itemValidation === null || itemValidation === void 0 ? void 0 : itemValidation.fixedScore)) {
        score = fixedPoints[0];
    }
    return score;
}
function setDicesTill(dice) {
    let item = 1;
    let dices = [];
    while (item < dice) {
        dices.push(item);
        item++;
    }
    return dices;
}
function orderBy(array, sortOrder, property) {
    const sort = (sortOrder === null || sortOrder === void 0 ? void 0 : sortOrder.toLowerCase()) == 'desc' ? -1 : 1;
    if (property) {
        return array.sort((a, b) => {
            return a[property] > b[property] ? sort : a[property] < b[property] ? (-1 * sort) : 0;
        });
    }
    else {
        return array.sort((a, b) => {
            return a > b ? sort : a < b ? (-1 * sort) : 0;
        });
    }
}
function sumOfNumberedArray(array) {
    return array.reduce((a, b) => {
        return a + b;
    });
}
function setSelectedLanguage(lang) {
    return this.httpClient.get("assets/lang/" + lang + ".json").subscribe((data) => {
        return this.storage.saveSelectedLanguage(data);
    });
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "Flrk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "qkCY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-board/game-board.component */ "7yyl");
/* harmony import */ var _roll_dice_roll_dice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roll-dice/roll-dice.component */ "vPqk");








const _c0 = ["popup"];
const _c1 = function (a0) { return { "active": a0 }; };
function AppComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const gameType_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.setSelectedGameType(gameType_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameType_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, gameType_r10 == ctx_r2.selectedGameType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameType_r10);
} }
function AppComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const index_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.setNumberOfLists(index_r14 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r14 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, index_r14 + 1 == ctx_r3.selectedNumberOfLists));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r14 + 1);
} }
function AppComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showAddPllayer(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_25_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_25_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const color_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.setColor(color_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("background-color:" + color_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r20.selectedColor == color_r21));
} }
function AppComponent_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Naam speler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_25_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.addPlayer(_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Opslaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_1_div_25_span_8_Template, 2, 5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("margin-right:5px;padding:5px;width:70%;border-left:solid 5px " + ctx_r6.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.availableColors);
} }
function AppComponent_div_1_div_26_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_26_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const index_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.movePlayer(index_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_26_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const index_r28 = ctx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.deletePlayer(index_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_1_div_26_button_6_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r27 = ctx.$implicit;
    const index_r28 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("border-left:solid 8px " + player_r27.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "player-item-" + index_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r27.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.showMoveButton(index_r28));
} }
function AppComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Voeg eerst 1 of meerdere spelers toe. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_31_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_31_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const savedGame_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.startSavedGame(savedGame_r37.fileName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_31_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const savedGame_r37 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.deleteSavedGame(savedGame_r37.fileName, ctx_r40.savedGames); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const savedGame_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", savedGame_r37.dateString, " | ", savedGame_r37.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savedGame_r37.players, " ");
} }
function AppComponent_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_31_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.showSavedGames(_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Selecteer een opgeslagen spel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Opgeslagen spellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_1_div_31_div_7_Template, 8, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.savedGames);
} }
const _c2 = function (a0) { return { "show": a0 }; };
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kies een spel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_1_div_9_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Aantal rijen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_1_div_14_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Spelers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Max 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_1_div_21_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_div_1_div_25_Template, 9, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_div_1_div_26_Template, 7, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_div_1_div_27_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.startGame("player"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Start nieuw spel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_div_1_div_31_Template, 8, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gameTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.makeArray(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.players == null ? null : ctx_r0.players.length) < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r0.players.length == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.players == null ? null : ctx_r0.players.length) < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.players == null ? null : ctx_r0.players.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx_r0.players == null ? null : ctx_r0.players.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.savedGames.length > 0);
} }
const _c3 = function (a0) { return { "diceboard": a0 }; };
const _c4 = function (a0) { return { "hidden": a0 }; };
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-game-board", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("restartGame", function AppComponent_div_2_Template_app_game_board_restartGame_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.killGame(); })("resetDiceBoard", function AppComponent_div_2_Template_app_game_board_resetDiceBoard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.setResetDiceBoard($event); })("undoDiceBoard", function AppComponent_div_2_Template_app_game_board_undoDiceBoard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.setUndoDiceBoard($event); })("showDiceBoard", function AppComponent_div_2_Template_app_game_board_showDiceBoard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.toggleDiceBoard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-roll-dice", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showDiceScores", function AppComponent_div_2_Template_app_roll_dice_showDiceScores_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.showDiceScores($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r1.showDiceBoard));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diceScore", ctx_r1.diceScores);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, !ctx_r1.showDiceBoard))("resetDiceBoard", ctx_r1.resetDiceBoard)("undoDiceBoard", ctx_r1.undoDiceBoard);
} }
class AppComponent {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.savedGame = null;
        this.players = [];
        this.selectedNumberOfLists = 1;
        this.showDiceBoard = false;
        this.resetDiceBoard = false;
        this.isGameStarted = false;
        this.title = 'Dobbel score';
        this.selectedGameType = 'Yahtzee';
        this.colors = ['#2200e2', '#00a308', '#f3db02', '#e20101', '#f07a0c', '#ca07a0', '#a52a2a'];
        this.gameTypes = ['Yahtzee', 'Cassy'];
        this.defaultGameType = 'Yahtzee';
        this.makeArray = _functions__WEBPACK_IMPORTED_MODULE_1__["makeArray"];
    }
    setSelectedGameType(gameType) {
        this.selectedGameType = gameType;
        this.storage.saveGameType(gameType);
        this.httpClient.get("assets/config/" + gameType.toLowerCase() + ".json").subscribe((data) => {
            this.list = data;
            this.storage.saveGameList(this.list);
        });
    }
    addPlayer(player) {
        if (player.value.length > 0) {
            this.players.push({ name: player.value, color: this.selectedColor });
            player.value = "";
            this.storage.savePlayers(this.players);
            this.hideAllOptions();
        }
    }
    showAddPllayer(popup) {
        popup.className = "popup";
        document.getElementById('overLayer').style.display = 'block';
        this.setAvailableColors();
        this.selectedColor = this.availableColors[0];
    }
    deletePlayer(index) {
        this.players.splice(index, 1);
        this.storage.savePlayers(this.players);
        this.setAvailableColors();
    }
    movePlayer(index) {
        const playerToMove = this.players.splice(index, 1)[0];
        this.players.splice(index + 1, 0, playerToMove);
        this.storage.savePlayers(this.players);
    }
    showMoveButton(index) {
        return index < this.players.length - 1 ? true : false;
    }
    hideAllOptions() {
        var items = document.getElementsByClassName('popup');
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'popup hide';
            document.getElementById('overLayer').style.display = 'none';
        }
    }
    setNumberOfLists(value) {
        this.selectedNumberOfLists = value;
        this.storage.saveNumberOfLists(value);
    }
    killGame() {
        this.savedGame = null;
        this.isGameStarted = false;
        this.showDiceBoard = false;
        this.storage.deleteDiceSettings();
        this.loadSavedGames();
    }
    selectGame(name) {
        this.httpClient.get("assets/" + name + ".json").subscribe(resultList => {
            this.list = resultList;
            this.storage.saveGameList(this.list);
        });
    }
    toggleDiceBoard(showDiceBoard) {
        this.showDiceBoard = showDiceBoard;
    }
    setUndoDiceBoard() {
        this.undoDiceBoard = !this.undoDiceBoard;
    }
    setResetDiceBoard() {
        this.resetDiceBoard = !this.resetDiceBoard;
    }
    setColor(color) {
        this.selectedColor = color;
    }
    startGame() {
        this.storage.savePlayers(this.players);
        this.isGameStarted = true;
    }
    showSavedGames(popup) {
        popup.className = "popup";
        document.getElementById('overLayer').style.display = 'block';
    }
    deleteSavedGame(fileName, savedGames) {
        if (confirm('Dit spel verwijderen?')) {
            this.storage.deleteGame(fileName);
            this.loadSavedGames();
            // if all savedGames are removed. Popup can be closed
            if (savedGames.length == 1) {
                this.hideAllOptions();
            }
        }
    }
    loadSavedGames() {
        let savedGames = [];
        // get all names of saved games from localstorage.
        const names = Object.keys(localStorage).filter(item => item.includes('saved-game_'));
        // loop throught names
        names.forEach((gameName) => {
            const name = gameName.replace('saved-game_', '');
            const nameParts = name.split('_');
            const dateStrings = nameParts[0];
            const dateStringParts = dateStrings.split(' ');
            const date = new Date(dateStringParts[1] + ' ' + dateStringParts[2] + ' ' + dateStringParts[3] + ' ' + dateStringParts[4]);
            const dateString = date.toLocaleString();
            const players = nameParts[2];
            const gameType = nameParts[1];
            savedGames.push({
                fileName: gameName,
                name: gameType,
                date: date,
                dateString: date.toLocaleString(),
                players: players
            });
        });
        this.savedGames = savedGames;
        // sort by date desc
        savedGames = savedGames.sort(function (a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
        });
        return savedGames;
    }
    startSavedGame(fileName) {
        this.savedGame = this.storage.loadGame(fileName);
        this.storage.saveGame(this.savedGame);
        if (this.savedGame) {
            this.startGame();
            this.hideAllOptions();
        }
    }
    setAvailableColors() {
        this.availableColors = this.colors;
        this.players.forEach((player) => {
            this.availableColors = this.availableColors.filter(color => !color.includes(player.color));
            this.selectedColor = this.availableColors[0];
        });
    }
    showDiceScores(event) {
        this.diceScores = JSON.parse(JSON.stringify(event)); // Hack to let onChanges work
    }
    ngOnInit() {
        // load saved games 
        this.loadSavedGames();
        this.availableColors = this.colors;
        this.selectedColor = this.availableColors[0];
        // get last players
        this.players = this.storage.loadPlayers() || [];
        // get Last played gameType
        const gameType = this.storage.loadGameType() || this.defaultGameType;
        this.setSelectedGameType(gameType);
        // load active game
        this.game = this.storage.loadGame();
        this.selectedNumberOfLists = this.storage.loadNumberOfLists() || 1; // get latest number of list. Default 1 
        this.storage.saveNumberOfLists(this.selectedNumberOfLists);
        // translaton
        this.translations = this.storage.loadSelectedLanguage('nl');
        // check if there is an active game. then start game directly
        if (this.game) {
            this.startGame();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popupAddPlayer = _t.first);
    } }, decls: 3, vars: 2, consts: [["id", "overLayer", 1, "overLayer", "hide", 3, "click"], ["class", "game-board-panel new-game", 4, "ngIf"], ["id", "game-board-lists", "class", "game-board-panel", 3, "ngClass", 4, "ngIf"], [1, "game-board-panel", "new-game"], [1, "new-game-panel"], [1, "logo-panel"], ["src", "assets/images/logo.svg", 1, "logo"], [1, "game-options-panel", "negative-margin"], [1, "row", "transparent", "block"], [1, "col", "description"], [1, "col"], ["class", "item width-auto", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col", "description", "block"], [1, "col", "block"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", "transparent", "block", "top", 2, "padding-bottom", "5px"], [2, "font-weight", "normal"], ["class", "col width-auto", 4, "ngIf"], ["id", "add-player-popup", 1, "popup", "hide", 3, "ngClass"], ["popup", ""], [4, "ngIf"], ["class", "row transparent no-border no-margin", 4, "ngFor", "ngForOf"], ["class", "row center column block no-border", "style", "margin-top:15px", 4, "ngIf"], [1, "row", "center", "column", "block", "no-border"], [1, "btn-start-game", 3, "disabled", "click"], ["class", "game-options-panel saved-games link", 4, "ngIf"], [1, "item", "width-auto", 3, "ngClass", "click"], [1, "item", 3, "ngClass", "click"], [1, "col", "width-auto"], [1, "btn", 3, "click"], ["maxlength", "8", "type", "text", 1, "player-input"], ["newPlayer", ""], [1, "player-color-panel", 2, "padding-top", "8px"], ["class", "color-item", 3, "ngClass", "style", "click", 4, "ngFor", "ngForOf"], [1, "color-item", 3, "ngClass", "click"], ["playerColor", ""], [1, "row", "transparent", "no-border", "no-margin"], [1, "item", "width-80", "item-player", "no-margin", 3, "id"], [1, "btn", "delete", 3, "click"], ["class", "btn move", 3, "click", 4, "ngIf"], [1, "btn", "move", 3, "click"], [1, "row", "center", "column", "block", "no-border", 2, "margin-top", "15px"], [1, "game-options-panel", "saved-games", "link"], [1, "row", "transparent", "no-border", 3, "click"], [1, "popup", "hide"], ["popupSavedgames", ""], ["class", "row link", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "link", 3, "click"], [1, "col", "flex"], ["id", "game-board-lists", 1, "game-board-panel", 3, "ngClass"], [3, "diceScore", "restartGame", "resetDiceBoard", "undoDiceBoard", "showDiceBoard"], [1, "dice-board", 3, "ngClass", "resetDiceBoard", "undoDiceBoard", "showDiceScores"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_0_listener() { return ctx.hideAllOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 32, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 3, 9, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_5__["GameBoardComponent"], _roll_dice_roll_dice_component__WEBPACK_IMPORTED_MODULE_6__["RollDiceComponent"]], styles: [".new-game[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n  background: #214478;\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  margin-top: 30px;\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 310px;\n  margin-top: -30px;\n  filter: drop-shadow(2px 2px 5px #000001);\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%]   .game-options-panel[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 20px 10px 15px 10px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  border: solid 2px orangered;\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%]   .game-options-panel.negative-margin[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%]   .game-options-panel[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.2);\n  padding: 3px 0px 0px 0px;\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%]   .game-options-panel.link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.new-game[_ngcontent-%COMP%]   .new-game-panel[_ngcontent-%COMP%]   .game-options-panel.saved-games[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 3px 15px 10px 15px !important;\n  border: solid 2px rgba(255, 255, 255, 0.5);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #eee;\n  font-weight: normal;\n}\n.new-game[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: orangered !important;\n  font-size: 40px;\n  font-weight: bold;\n  padding-top: 15px;\n  height: 50px;\n}\n.new-game[_ngcontent-%COMP%]   .logo-panel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  margin-bottom: 20px;\n}\n.new-game[_ngcontent-%COMP%]   .logo-panel[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  left: 30px;\n}\n.player-color-panel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.player-color-panel[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  margin: 2px;\n  border: solid 2px #ddd;\n}\n.player-color-panel[_ngcontent-%COMP%]   .color-item.active[_ngcontent-%COMP%] {\n  border: solid 2px orangered;\n}\n.btn-start-game[_ngcontent-%COMP%] {\n  margin: 10px;\n  border: solid 1px orangered;\n  background-color: orangered;\n  padding: 10px 15px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px #000001;\n  cursor: pointer;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n}\n.btn-start-game[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 0;\n  color: rgba(255, 255, 255, 0.3);\n}\n.btn.btn-add-player[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 115px !important;\n  margin-right: 0 !important;\n  padding: 3px 0;\n  background-color: orangered;\n}\n.btn.move[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  padding: 0px;\n  width: 20px;\n  height: 20px;\n  color: #555;\n  background-color: transparent;\n}\n.col[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  text-align: center;\n  border: solid 1px #aaa;\n  padding: 5px 8px;\n  font-weight: bold;\n  cursor: pointer;\n  background-color: #fff;\n  margin: 5px 4px;\n}\n.col[_ngcontent-%COMP%]   .item.width-80[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.col[_ngcontent-%COMP%]   .item.width-100[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.col[_ngcontent-%COMP%]   .item.width-120[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.col[_ngcontent-%COMP%]   .item.width-150[_ngcontent-%COMP%] {\n  width: 150px;\n  text-align: left;\n  padding: 5px 5px 5px 30px;\n}\n.col[_ngcontent-%COMP%]   .item.item-player[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 2px 1px 2px 12px;\n  text-align: left;\n  width: 125px;\n  border-radius: 15px;\n  background-color: #eee;\n}\n.col[_ngcontent-%COMP%]   .item.width-auto[_ngcontent-%COMP%] {\n  width: unset;\n}\n.col[_ngcontent-%COMP%]   .item.hover[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.col[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%] {\n  background-color: orangered !important;\n  color: #fff;\n  border-color: orangered;\n}\n.col[_ngcontent-%COMP%]   .item.spacing-right[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.col[_ngcontent-%COMP%]   .item.no-margin[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.col[_ngcontent-%COMP%]   .item.rounded[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 15px;\n}\n.col[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 0px;\n  padding: 0px;\n  width: 20px;\n  height: 20px;\n  color: red;\n  border: solid 1px transparent;\n  background-color: transparent;\n}\ninput.player-input[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: left;\n  box-sizing: border-box;\n}\n.dice-board[_ngcontent-%COMP%] {\n  position: fixed;\n  visibility: visible;\n  bottom: 17px;\n  left: 0;\n  width: 100vw;\n  background-color: #1a792a;\n  border-top: solid 1px #aaa;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FBQ1o7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDWjtBQUFZO0VBQ0ksaUJBQUE7QUFFaEI7QUFBWTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7QUFFaEI7QUFBWTtFQUNJLGVBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRWhCO0FBR0k7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQVo7QUFLQTtFQUNJLGtCQUFBO0FBRko7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQURSO0FBRVE7RUFDSSwyQkFBQTtBQUFaO0FBS0E7RUFDQyxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkRsRmU7RUNtRmYsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkRsRmU7RUNtRmYsZUFBQTtFQUNBLDBDQUFBO0FBRkQ7QUFHQztFQUNDLG9DQUFBO0VBQ00sU0FBQTtFQUNBLCtCQUFBO0FBRFI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkR4R1E7QUNxR2hCO0FBS0k7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUhSO0FBUUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBTVE7RUFDSSxXQUFBO0FBSlo7QUFNUTtFQUNJLFlBQUE7QUFKWjtBQU1RO0VBQ0ksWUFBQTtBQUpaO0FBTVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUpaO0FBTVE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUpaO0FBTVE7RUFDSSxZQUFBO0FBSlo7QUFNUTtFQUNJLHNCQUFBO0FBSlo7QUFNUTtFQUNJLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLHVCRC9KSTtBQzJKaEI7QUFNUTtFQUNJLGtCQUFBO0FBSlo7QUFPUTtFQUNJLG9CQUFBO0FBTFo7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFMWjtBQU9RO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBTFo7QUFXSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBUlI7QUFZQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRHRNVTtFQ3VNViwwQkFBQTtFQUNBLFlBQUE7QUFUSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbiRwcmltYXJ5LWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM0NDQ7XHJcbiRib2FyZC1jb2xvcjogcmdiKDI2LCAxMjEsIDQyKTtcclxuJGJvcmRlcjogc29saWQgMXB4IHJnYigxMjQsIDEyNCwgMTI0KTtcclxuJGNvbG9yLXN1Y2Nlc3M6IHJnYigxLCAxMDQsIDEpO1xyXG4kY29sb3ItZXJyb3I6IHJlZDtcclxuJGJ1dHRvbi1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAuNSk7XHJcblxyXG5cclxuJHN0cmlwZWQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0zNWRlZywgXHJcbiAgICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCBcclxuICAgIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDglLCBcclxuICAgIHJnYmEoMjU1LDAsMCwxKSA0OSUsIFxyXG4gICAgcmdiYSgyNTUsMCwwLDEpIDUxJSwgXHJcbiAgICByZ2JhKDI1NSwyNTUsMjU1LDEpIDUyJSwgXHJcbiAgICByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpOyIsIkBpbXBvcnQgJy4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm5ldy1nYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogIzIxNDQ3ODtcclxuXHJcbiAgICAubmV3LWdhbWUtcGFuZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDIwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6MzEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA1cHggcmdiYSgwLDAsMC41KSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FtZS1vcHRpb25zLXBhbmVsIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4IDEwcHggMTVweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDJweCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgJi5uZWdhdGl2ZS1tYXJnaW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93ICB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzozcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5saW5rIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNhdmVkLWdhbWVzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6M3B4IDE1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZWVlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cdFx0XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nby1wYW5lbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgICAgLmxvZ28taW1hZ2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxMDBweDtcclxuICAgICAgICAgICAgbGVmdDozMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBsYXllci1jb2xvci1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY29sb3ItaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW46MnB4O1xyXG4gICAgICAgIGJvcmRlcjpzb2xpZCAycHggI2RkZDtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAycHggJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLmJ0bi1zdGFydC1nYW1lIHtcclxuXHRtYXJnaW46IDEwcHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggJHByaW1hcnktY29sb3I7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcblx0cGFkZGluZzogMTBweCAxNXB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRib3JkZXItcmFkaXVzOjVweDtcclxuXHRib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuMik7XHJcblx0JjpkaXNhYmxlZCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuXHR9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgJi5idG4tYWRkLXBsYXllciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6MTE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJi5tb3ZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufSBcclxuXHJcbi5jb2wge1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNhYWE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW46IDVweCA0cHg7XHJcbiAgICAgICAgJi53aWR0aC04MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndpZHRoLTEwMCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi53aWR0aC0xMjAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYud2lkdGgtMTUwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4IDVweCA1cHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pdGVtLXBsYXllciB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzoycHggMXB4IDJweCAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndpZHRoLWF1dG8ge1xyXG4gICAgICAgICAgICB3aWR0aDp1bnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5ob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc3BhY2luZy1yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubm8tbWFyZ2luIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucm91bmRlZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MnB4IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6NnB4O1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJi5wbGF5ZXItaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uZGljZS1ib2FyZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYm90dG9tOjE3cHg7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2FyZC1jb2xvcjtcclxuICAgIGJvcmRlci10b3A6c29saWQgMXB4ICNhYWE7XHJcbiAgICB6LWluZGV4OjEwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, { popupAddPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['popup']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-board/game-board.component */ "7yyl");
/* harmony import */ var _roll_dice_roll_dice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roll-dice/roll-dice.component */ "vPqk");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_6__["GameBoardComponent"],
        _roll_dice_roll_dice_component__WEBPACK_IMPORTED_MODULE_7__["RollDiceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_6__["GameBoardComponent"],
                    _roll_dice_roll_dice_component__WEBPACK_IMPORTED_MODULE_7__["RollDiceComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qkCY":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LocalStorageService {
    constructor() {
        this.activeGame = 'active-game';
        this.savedGame = 'saved-game';
        this.gameType = 'gameType';
        this.gameList = 'gameList';
        this.numberOfLists = 'numberOfLists';
        this.diceSettings = 'diceSettings';
        this.players = 'players';
        this.langCode = 'lang';
    }
    // Game
    loadGame(fileName) {
        const name = fileName || this.activeGame;
        return JSON.parse(localStorage.getItem(name));
    }
    saveGame(game, fileName) {
        const name = fileName || this.activeGame;
        localStorage.setItem(name, JSON.stringify(game));
    }
    deleteGame(fileName) {
        const name = fileName || this.activeGame;
        localStorage.removeItem(name);
    }
    // Players
    loadPlayers() {
        return JSON.parse(localStorage.getItem(this.players));
    }
    savePlayers(players) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem(this.players, JSON.stringify(players));
        });
    }
    deleteDiceSettings(fileName) {
        const name = fileName || this.diceSettings;
        localStorage.removeItem(name);
    }
    saveDiceSettings(diceSettings, fileName) {
        const name = fileName || this.diceSettings;
        localStorage.setItem(name, JSON.stringify(diceSettings));
    }
    loadDiceSettings(fileName) {
        const name = fileName || this.diceSettings;
        return JSON.parse(localStorage.getItem(name));
    }
    // GameType
    loadGameType() {
        return localStorage.getItem(this.gameType);
    }
    saveGameType(gameType) {
        localStorage.setItem(this.gameType, gameType);
    }
    loadGameList() {
        return JSON.parse(localStorage.getItem(this.gameList));
    }
    saveGameList(list) {
        localStorage.setItem(this.gameList, JSON.stringify(list));
    }
    // NumberOfLists
    loadNumberOfLists() {
        return +localStorage.getItem(this.numberOfLists);
    }
    saveNumberOfLists(value) {
        localStorage.setItem(this.numberOfLists, value.toString());
    }
    // Languages
    loadSelectedLanguage(lang) {
        return JSON.parse(localStorage.getItem(lang));
    }
    saveSelectedLanguage(lang) {
        localStorage.setItem(this.langCode, JSON.stringify(lang));
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vPqk":
/*!**************************************************!*\
  !*** ./src/app/roll-dice/roll-dice.component.ts ***!
  \**************************************************/
/*! exports provided: RollDiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollDiceComponent", function() { return RollDiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../storage.service */ "qkCY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







const _c0 = function (a0) { return { "active": a0 }; };
function RollDiceComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 10);
} if (rf & 2) {
    const throwIndex_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.diceSettings.currentThrow - 1 >= throwIndex_r3 + 1));
} }
function RollDiceComponent_span_7_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RollDiceComponent_span_7_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const diceIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.holdDice(diceIndex_r5, ctx_r8.diceSettings.thrownDices[diceIndex_r5]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diceIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/dices/dice-" + ctx_r6.diceSettings.thrownDices[diceIndex_r5] + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RollDiceComponent_span_7_span_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const diceIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/dices/dice-" + ctx_r12.diceSettings.holdDices[diceIndex_r5] + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RollDiceComponent_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RollDiceComponent_span_7_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const diceIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.releaseDice(diceIndex_r5, ctx_r14.diceSettings.holdDices[diceIndex_r5]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RollDiceComponent_span_7_span_2_img_1_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diceIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.diceSettings.holdDices[diceIndex_r5]);
} }
function RollDiceComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RollDiceComponent_span_7_span_1_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RollDiceComponent_span_7_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diceIndex_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.diceSettings.thrownDices[diceIndex_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.diceSettings.holdDices[diceIndex_r5]);
} }
class RollDiceComponent {
    constructor(storage) {
        this.storage = storage;
        this.showDiceScores = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalThrows = 3;
        this.numberOfDices = 5;
        this.throwTime = false;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.faThrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlay"];
    }
    roll(currentThrow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.throwTime = true;
            yield this.rollTheDices();
            if (this.diceSettings.newStart) {
                this.resetDiceSets();
                this.diceSettings.newStart = false;
                var diceCount = 1;
                while (diceCount <= this.numberOfDices) {
                    const diceValue = Math.floor(Math.random() * 6) + 1;
                    this.diceSettings.thrownDices[diceCount - 1] = diceValue;
                    this.diceSettings.restDices[diceCount - 1] = diceValue;
                    diceCount++;
                }
            }
            else {
                let count = 0;
                this.diceSettings.restDices.forEach((dice) => {
                    if (dice) {
                        const diceValue = Math.floor(Math.random() * 6) + 1;
                        this.diceSettings.thrownDices[count] = diceValue;
                    }
                    count++;
                });
            }
            this.diceSettings.currentThrow++;
            this.throwTime = false;
            if (currentThrow == this.totalThrows) {
                this.diceSettings.newStart = true;
            }
            this.storage.saveDiceSettings(this.diceSettings);
            this.showDiceScores.emit(this.diceSettings);
        });
    }
    wait(seconds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(resolve, seconds * 1000);
            });
        });
    }
    rollTheDices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let randomDice = 1; randomDice <= 8; randomDice++) {
                yield this.wait(0.07);
                for (let diceCount = 1; diceCount <= this.numberOfDices; diceCount++) {
                    const diceValue = Math.floor(Math.random() * 6) + 1;
                    this.diceSettings.thrownDices[diceCount - 1] = diceValue;
                }
            }
        });
    }
    resetRoll() {
        this.resetDiceSets();
        this.diceSettings.newStart = true;
        this.storage.saveDiceSettings(this.diceSettings);
    }
    resetDiceSets() {
        this.diceSettings.currentThrow = 1;
        this.diceSettings.holdDices = this.resetDiceArray();
        this.diceSettings.thrownDices = this.resetDiceArray();
        this.diceSettings.restDices = this.resetDiceArray();
    }
    resetDiceArray() {
        let array = [];
        for (let index = 1; index <= this.numberOfDices; index++) {
            array.push(null);
        }
        return array;
    }
    releaseDice(diceIndex, diceValue) {
        this.diceSettings.thrownDices[diceIndex] = diceValue;
        this.diceSettings.holdDices[diceIndex] = null;
        this.storage.saveDiceSettings(this.diceSettings);
    }
    holdDice(diceIndex, diceValue) {
        this.diceSettings.holdDices[diceIndex] = diceValue;
        this.diceSettings.thrownDices[diceIndex] = null;
        this.storage.saveDiceSettings(this.diceSettings);
    }
    makeArray(i) {
        return new Array(i);
    }
    updateLocalStoreDices() {
        const diceSettings = {
            currentThrow: this.diceSettings.currentThrow,
            holdDices: this.diceSettings.holdDices,
            thrownDices: this.diceSettings.thrownDices,
            totalDices: this.diceSettings.totalDices,
            restDices: this.diceSettings.restDices,
            newStart: this.diceSettings.newStart
        };
        this.storage.saveDiceSettings(diceSettings);
    }
    undoDiceSettings() {
        this.diceSettings = this.storage.loadDiceSettings('diceSettingsPrevious');
        this.showDiceScores.emit(this.diceSettings);
        localStorage.removeItem('diceSettingsPrevious');
        localStorage.removeItem('gamePrevious');
    }
    startDiceSettings() {
        this.diceSettings = {
            currentThrow: 1,
            newStart: false,
            totalDices: [],
            holdDices: [],
            restDices: [],
            thrownDices: []
        };
        for (let index = 1; index <= this.numberOfDices; index++) {
            this.diceSettings.totalDices.push(index);
        }
        this.storage.saveDiceSettings(this.diceSettings);
    }
    ngOnInit() {
        this.diceSettings = this.storage.loadDiceSettings();
        this.translations = this.storage.loadSelectedLanguage('nl');
        if (!this.diceSettings) {
            this.startDiceSettings();
        }
    }
    ngOnChanges(changes) {
        if (changes.undoDiceBoard && !changes.undoDiceBoard.isFirstChange()) {
            this.undoDiceSettings();
        }
        if (changes.resetDiceBoard) {
            this.startDiceSettings();
        }
    }
}
RollDiceComponent.ɵfac = function RollDiceComponent_Factory(t) { return new (t || RollDiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
RollDiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RollDiceComponent, selectors: [["app-roll-dice"]], inputs: { resetDiceBoard: "resetDiceBoard", undoDiceBoard: "undoDiceBoard" }, outputs: { showDiceScores: "showDiceScores" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 7, consts: [[1, "throw-indicator-panel"], ["class", "throw-indicator", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col", "flex"], [1, "btn", 2, "width", "50px", "text-align", "center", 3, "disabled", "click"], [3, "icon"], [1, "col"], ["class", "dice dice-placeholder", 4, "ngFor", "ngForOf"], [1, "col", "flex", "align-right"], [1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "throw-indicator", 3, "ngClass"], [1, "dice", "dice-placeholder"], ["class", "thrown link", 3, "click", 4, "ngIf"], ["class", "hold link", 3, "click", 4, "ngIf"], [1, "thrown", "link", 3, "click"], [3, "src"], [1, "hold", "link", 3, "click"], [3, "src", 4, "ngIf"]], template: function RollDiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RollDiceComponent_span_1_Template, 1, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RollDiceComponent_Template_button_click_4_listener() { return ctx.roll(ctx.diceSettings.currentThrow); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RollDiceComponent_span_7_Template, 3, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RollDiceComponent_Template_button_click_9_listener() { return ctx.resetRoll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.makeArray(ctx.totalThrows));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.diceSettings.currentThrow > ctx.totalThrows || ctx.throwTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faThrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.diceSettings.totalDices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.diceSettings.currentThrow == 1 || ctx.throwTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".throw-indicator-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  margin: auto;\n  z-index: 10;\n  background: #333;\n  padding: 0px 4px 4px;\n  line-height: 1;\n  box-sizing: border-box;\n  text-align: center;\n}\n.throw-indicator-panel[_ngcontent-%COMP%]   .throw-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1;\n  height: 5px;\n  width: 18px;\n  position: relative;\n  border-radius: 10px;\n  margin: 0px 3px;\n  border: solid 1px #aaa;\n  background: #777;\n}\n.throw-indicator-panel[_ngcontent-%COMP%]   .throw-indicator.active[_ngcontent-%COMP%] {\n  background-color: #4bcc00;\n}\n.row[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  padding-left: 5px;\n  max-width: 470px !important;\n  margin: auto;\n  box-sizing: border-box;\n  position: relative;\n  background: transparent;\n}\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1;\n}\n.row[_ngcontent-%COMP%]   .col.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.dice[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  margin-right: 4px;\n  border: solid 1px #ccc;\n  position: relative;\n}\n.dice.dice-placeholder[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.dice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.dice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2px;\n  width: 32px;\n  height: 32px;\n  background-color: #fff;\n  border-radius: 5px;\n}\n.dice[_ngcontent-%COMP%]   .thrown[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n.dice[_ngcontent-%COMP%]   .hold[_ngcontent-%COMP%] {\n  background-color: orangered;\n  border-color: orangered !important;\n  z-index: 4;\n}\n.dice[_ngcontent-%COMP%]   .random[_ngcontent-%COMP%] {\n  z-index: 5;\n  background: transparent;\n  background-color: transparent;\n  border-color: green;\n}\n.dice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxyb2xsLWRpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQVE7RUFDSSx5QkFBQTtBQUVaO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDUjtBQUFRO0VBQ0ksaUJBQUE7QUFFWjtBQUVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLDBDQUFBO0FBRVI7QUFBSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUFJO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVIiLCJmaWxlIjoicm9sbC1kaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4kcHJpbWFyeS1jb2xvcjogb3JhbmdlcmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNDQ0O1xyXG4kYm9hcmQtY29sb3I6IHJnYigyNiwgMTIxLCA0Mik7XHJcbiRib3JkZXI6IHNvbGlkIDFweCByZ2IoMTI0LCAxMjQsIDEyNCk7XHJcbiRjb2xvci1zdWNjZXNzOiByZ2IoMSwgMTA0LCAxKTtcclxuJGNvbG9yLWVycm9yOiByZWQ7XHJcbiRidXR0b24tc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLjUpO1xyXG5cclxuXHJcbiRzdHJpcGVkOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMzVkZWcsIFxyXG4gICAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgXHJcbiAgICByZ2JhKDI1NSwyNTUsMjU1LDEpIDQ4JSwgXHJcbiAgICByZ2JhKDI1NSwwLDAsMSkgNDklLCBcclxuICAgIHJnYmEoMjU1LDAsMCwxKSA1MSUsIFxyXG4gICAgcmdiYSgyNTUsMjU1LDI1NSwxKSA1MiUsIFxyXG4gICAgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTsiLCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGhyb3ctaW5kaWNhdG9yLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDojMzMzO1xyXG4gICAgcGFkZGluZzowcHggNHB4IDRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC50aHJvdy1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICB3aWR0aDoxOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjowcHggM3B4OyAgICBcclxuICAgICAgICBib3JkZXI6c29saWQgMXB4ICNhYWE7XHJcbiAgICAgICAgYmFja2dyb3VuZDojNzc3O1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAyMDQsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDoycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgbWF4LXdpZHRoOjQ3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC5jb2wge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgICAgICAgJi5hbGlnbi1yaWdodCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZGljZSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjM2cHg7XHJcbiAgICBoZWlnaHQ6MzZweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcclxuICAgIGJvcmRlcjpzb2xpZCAxcHggI2NjYztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICYuZGljZS1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luOjJweDtcclxuICAgICAgICAgICAgd2lkdGg6MzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjMycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGhyb3duIHtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG4gICAgLmhvbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OjQ7XHJcbiAgICB9XHJcbiAgICAucmFuZG9tIHtcclxuICAgICAgICB6LWluZGV4OjU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOmdyZWVuO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDozMnB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RollDiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-roll-dice',
                templateUrl: './roll-dice.component.html',
                styleUrls: ['./roll-dice.component.scss']
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, { resetDiceBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], undoDiceBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDiceScores: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map