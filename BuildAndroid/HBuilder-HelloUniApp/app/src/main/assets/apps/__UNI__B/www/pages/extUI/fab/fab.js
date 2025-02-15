!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var o = (e[i] = { i: i, l: !1, exports: {} });
		return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var o in t)
					n.d(
						i,
						o,
						function (e) {
							return t[e];
						}.bind(null, o),
					);
			return i;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ""),
		n((n.s = 684));
})({
	0: function (t, e, n) {
		"use strict";
		function i(t, e, n, i, o, r, a, s, c, l) {
			var f,
				u = "function" == typeof t ? t.options : t;
			if (c) {
				u.components || (u.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var d in c) p.call(c, d) && !p.call(u.components, d) && (u.components[d] = c[d]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(u.mixins || (u.mixins = [])).push(l)),
				e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
				i && (u.functional = !0),
				r && (u._scopeId = "data-v-" + r),
				a
					? ((f = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								o && o.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (u._ssrRegister = f))
					: o &&
					  (f = s
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				f)
			)
				if (u.functional) {
					u._injectStyles = f;
					var h = u.render;
					u.render = function (t, e) {
						return f.call(e), h(t, e);
					};
				} else {
					var _ = u.beforeCreate;
					u.beforeCreate = _ ? [].concat(_, f) : [f];
				}
			return { exports: t, options: u };
		}
		n.d(e, "a", function () {
			return i;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	14: function (t, e, n) {
		"use strict";
		function i(t) {
			var e = Object.prototype.toString.call(t);
			return e.substring(8, e.length - 1);
		}
		function o() {
			return "string" == typeof __channelId__ && __channelId__;
		}
		function r(t, e) {
			switch (i(e)) {
				case "Function":
					return "function() { [native code] }";
				default:
					return e;
			}
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.log = function (t) {
				for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
				console[t].apply(console, n);
			}),
			(e.default = function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var a = e.shift();
				if (o()) return e.push(e.pop().replace("at ", "uni-app:///")), console[a].apply(console, e);
				var s = e.map(function (t) {
						var e = Object.prototype.toString.call(t).toLowerCase();
						if ("[object object]" === e || "[object array]" === e)
							try {
								t = "---BEGIN:JSON---" + JSON.stringify(t, r) + "---END:JSON---";
							} catch (n) {
								t = e;
							}
						else if (null === t) t = "---NULL---";
						else if (void 0 === t) t = "---UNDEFINED---";
						else {
							var n = i(t).toUpperCase();
							t = "NUMBER" === n || "BOOLEAN" === n ? "---BEGIN:" + n + "---" + t + "---END:" + n + "---" : String(t);
						}
						return t;
					}),
					c = "";
				if (s.length > 1) {
					var l = s.pop();
					(c = s.join("---COMMA---")), 0 === l.indexOf(" at ") ? (c += l) : (c += "---COMMA---" + l);
				} else c = s[0];
				console[a](c);
			});
	},
	249: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(250),
			o = n.n(i);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		e.default = o.a;
	},
	250: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var i;
		i = uni.getSystemInfoSync().platform;
		var o = {
			name: "UniFab",
			props: {
				pattern: {
					type: Object,
					default: function () {
						return {};
					},
				},
				horizontal: { type: String, default: "left" },
				vertical: { type: String, default: "bottom" },
				direction: { type: String, default: "horizontal" },
				content: {
					type: Array,
					default: function () {
						return [];
					},
				},
				show: { type: Boolean, default: !1 },
				popMenu: { type: Boolean, default: !0 },
			},
			data: function () {
				return {
					fabShow: !1,
					isShow: !1,
					isAndroidNvue: "android" === i,
					styles: { color: "#3c3e49", selectedColor: "#007AFF", backgroundColor: "#fff", buttonColor: "#007AFF" },
				};
			},
			computed: {
				contentWidth: function (t) {
					return 55 * (this.content.length + 1) + 10 + "px";
				},
				contentWidthMin: function () {
					return "55px";
				},
				boxWidth: function () {
					return this.getPosition(3, "horizontal");
				},
				boxHeight: function () {
					return this.getPosition(3, "vertical");
				},
				leftBottom: function () {
					return this.getPosition(0, "left", "bottom");
				},
				rightBottom: function () {
					return this.getPosition(0, "right", "bottom");
				},
				leftTop: function () {
					return this.getPosition(0, "left", "top");
				},
				rightTop: function () {
					return this.getPosition(0, "right", "top");
				},
				flexDirectionStart: function () {
					return this.getPosition(1, "vertical", "top");
				},
				flexDirectionEnd: function () {
					return this.getPosition(1, "vertical", "bottom");
				},
				horizontalLeft: function () {
					return this.getPosition(2, "horizontal", "left");
				},
				horizontalRight: function () {
					return this.getPosition(2, "horizontal", "right");
				},
			},
			watch: {
				pattern: function (t, e) {
					this.styles = Object.assign({}, this.styles, t);
				},
			},
			created: function () {
				(this.isShow = this.show), 0 === this.top && (this.fabShow = !0), (this.styles = Object.assign({}, this.styles, this.pattern));
			},
			methods: {
				_onClick: function () {
					this.$emit("fabClick"), this.popMenu && (this.isShow = !this.isShow);
				},
				open: function () {
					this.isShow = !0;
				},
				close: function () {
					this.isShow = !1;
				},
				_onItemClick: function (t, e) {
					this.$emit("trigger", { index: t, item: e });
				},
				getPosition: function (t, e, n) {
					return 0 === t
						? this.horizontal === e && this.vertical === n
						: 1 === t
						? this.direction === e && this.vertical === n
						: 2 === t
						? this.direction === e && this.horizontal === n
						: this.isShow && this.direction === e
						? this.contentWidth
						: this.contentWidthMin;
				},
			},
		};
		e.default = o;
	},
	251: function (t, e) {
		t.exports = {
			".uni-fab": { "": { position: ["fixed", 0, 0, 0], justifyContent: ["center", 0, 0, 0], alignItems: ["center", 0, 0, 0], zIndex: [10, 0, 0, 0] } },
			".uni-fab--active": { "": { opacity: [1, 0, 0, 2] } },
			".uni-fab--leftBottom": {
				"": {
					left: ["5", 0, 0, 3],
					bottom: ["20", 0, 0, 3],
					paddingTop: ["10", 0, 0, 3],
					paddingRight: ["10", 0, 0, 3],
					paddingBottom: ["10", 0, 0, 3],
					paddingLeft: ["10", 0, 0, 3],
				},
			},
			".uni-fab--leftTop": {
				"": {
					left: ["5", 0, 0, 4],
					top: ["30", 0, 0, 4],
					paddingTop: ["10", 0, 0, 4],
					paddingRight: ["10", 0, 0, 4],
					paddingBottom: ["10", 0, 0, 4],
					paddingLeft: ["10", 0, 0, 4],
				},
			},
			".uni-fab--rightBottom": {
				"": {
					right: ["5", 0, 0, 5],
					bottom: ["20", 0, 0, 5],
					paddingTop: ["10", 0, 0, 5],
					paddingRight: ["10", 0, 0, 5],
					paddingBottom: ["10", 0, 0, 5],
					paddingLeft: ["10", 0, 0, 5],
				},
			},
			".uni-fab--rightTop": {
				"": {
					right: ["5", 0, 0, 6],
					top: ["30", 0, 0, 6],
					paddingTop: ["10", 0, 0, 6],
					paddingRight: ["10", 0, 0, 6],
					paddingBottom: ["10", 0, 0, 6],
					paddingLeft: ["10", 0, 0, 6],
				},
			},
			".uni-fab__circle": {
				"": {
					position: ["fixed", 0, 0, 7],
					justifyContent: ["center", 0, 0, 7],
					alignItems: ["center", 0, 0, 7],
					width: ["55", 0, 0, 7],
					height: ["55", 0, 0, 7],
					backgroundColor: ["#3c3e49", 0, 0, 7],
					borderRadius: ["55", 0, 0, 7],
					zIndex: [11, 0, 0, 7],
				},
			},
			".uni-fab__circle--leftBottom": { "": { left: ["15", 0, 0, 8], bottom: ["30", 0, 0, 8] } },
			".uni-fab__circle--leftTop": { "": { left: ["15", 0, 0, 9], top: ["40", 0, 0, 9] } },
			".uni-fab__circle--rightBottom": { "": { right: ["15", 0, 0, 10], bottom: ["30", 0, 0, 10] } },
			".uni-fab__circle--rightTop": { "": { right: ["15", 0, 0, 11], top: ["40", 0, 0, 11] } },
			".uni-fab__circle--left": { "": { left: [0, 0, 0, 12] } },
			".uni-fab__circle--right": { "": { right: [0, 0, 0, 13] } },
			".uni-fab__circle--top": { "": { top: [0, 0, 0, 14] } },
			".uni-fab__circle--bottom": { "": { bottom: [0, 0, 0, 15] } },
			".uni-fab__plus": { "": { fontWeight: ["bold", 0, 0, 16] } },
			".fab-circle-v": {
				"": {
					position: ["absolute", 0, 0, 17],
					width: ["3", 0, 0, 17],
					height: ["31", 0, 0, 17],
					left: ["26", 0, 0, 17],
					top: ["12", 0, 0, 17],
					backgroundColor: ["#FFFFFF", 0, 0, 17],
					transform: ["rotate(0deg)", 0, 0, 17],
					transitionProperty: ["transform", 0, 0, 17],
					transitionDuration: [300, 0, 0, 17],
				},
			},
			".fab-circle-h": {
				"": {
					position: ["absolute", 0, 0, 18],
					width: ["31", 0, 0, 18],
					height: ["3", 0, 0, 18],
					left: ["12", 0, 0, 18],
					top: ["26", 0, 0, 18],
					backgroundColor: ["#FFFFFF", 0, 0, 18],
					transform: ["rotate(0deg)", 0, 0, 18],
					transitionProperty: ["transform", 0, 0, 18],
					transitionDuration: [300, 0, 0, 18],
				},
			},
			".uni-fab__plus--active": { "": { transform: ["rotate(135deg)", 0, 0, 19] } },
			".uni-fab__content": {
				"": {
					flexDirection: ["row", 0, 0, 20],
					borderRadius: ["55", 0, 0, 20],
					overflow: ["hidden", 0, 0, 20],
					transitionProperty: ["width,height", 0, 0, 20],
					transitionDuration: [200, 0, 0, 20],
					width: ["55", 0, 0, 20],
					borderColor: ["#DDDDDD", 0, 0, 20],
					borderWidth: ["1rpx", 0, 0, 20],
					borderStyle: ["solid", 0, 0, 20],
				},
			},
			".uni-fab__content--other-platform": { "": { borderWidth: ["0", 0, 0, 21], boxShadow: ["0 0 5px 2px rgba(0, 0, 0, 0.2)", 0, 0, 21] } },
			".uni-fab__content--left": { "": { justifyContent: ["flex-start", 0, 0, 22] } },
			".uni-fab__content--right": { "": { justifyContent: ["flex-end", 0, 0, 23] } },
			".uni-fab__content--flexDirection": { "": { flexDirection: ["column", 0, 0, 24], justifyContent: ["flex-end", 0, 0, 24] } },
			".uni-fab__content--flexDirectionStart": { "": { flexDirection: ["column", 0, 0, 25], justifyContent: ["flex-start", 0, 0, 25] } },
			".uni-fab__content--flexDirectionEnd": { "": { flexDirection: ["column", 0, 0, 26], justifyContent: ["flex-end", 0, 0, 26] } },
			".uni-fab__item": {
				"": {
					flexDirection: ["column", 0, 0, 27],
					justifyContent: ["center", 0, 0, 27],
					alignItems: ["center", 0, 0, 27],
					width: ["55", 0, 0, 27],
					height: ["55", 0, 0, 27],
					opacity: [0, 0, 0, 27],
					transitionProperty: ["opacity", 0, 0, 27],
					transitionDuration: [200, 0, 0, 27],
				},
			},
			".uni-fab__item--active": { "": { opacity: [1, 0, 0, 28] } },
			".uni-fab__item-image": { "": { width: ["25", 0, 0, 29], height: ["25", 0, 0, 29], marginBottom: ["3", 0, 0, 29] } },
			".uni-fab__item-text": { "": { color: ["#FFFFFF", 0, 0, 30], fontSize: ["12", 0, 0, 30] } },
			".uni-fab__item--first": { "": { width: ["55", 0, 0, 31] } },
			"@VERSION": 2,
		};
	},
	252: function (t, e, n) {
		"use strict";
		var i = n(253),
			o = n.n(i);
		e.default = o.a;
	},
	253: function (t, e, n) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var n = {
				components: {},
				data: function () {
					return {
						title: "uni-fab",
						directionStr: "\u5782\u76f4",
						horizontal: "left",
						vertical: "bottom",
						direction: "horizontal",
						pattern: { color: "#7A7E83", backgroundColor: "#fff", selectedColor: "#007AFF" },
						content: [
							{ iconPath: "/static/component.png", selectedIconPath: "/static/componentHL.png", text: "\u7ec4\u4ef6", active: !1 },
							{ iconPath: "/static/api.png", selectedIconPath: "/static/apiHL.png", text: "API", active: !1 },
							{ iconPath: "/static/template.png", selectedIconPath: "/static/templateHL.png", text: "\u6a21\u7248", active: !1 },
						],
					};
				},
				onBackPress: function () {
					return !!this.$refs.fab.isShow && (this.$refs.fab.close(), !0);
				},
				methods: {
					trigger: function (e) {
						t("log", e, " at pages/extUI/fab/fab.nvue:59"),
							(this.content[e.index].active = !e.item.active),
							uni.showModal({
								title: "\u63d0\u793a",
								content: "\u60a8".concat(this.content[e.index].active ? "\u9009\u4e2d\u4e86" : "\u53d6\u6d88\u4e86").concat(e.item.text),
								success: function (e) {
									e.confirm
										? t("log", "\u7528\u6237\u70b9\u51fb\u786e\u5b9a", " at pages/extUI/fab/fab.nvue:66")
										: e.cancel && t("log", "\u7528\u6237\u70b9\u51fb\u53d6\u6d88", " at pages/extUI/fab/fab.nvue:68");
								},
							});
					},
					fabClick: function () {
						uni.showToast({ title: "\u70b9\u51fb\u4e86\u60ac\u6d6e\u6309\u94ae", icon: "none" });
					},
					switchBtn: function (t, e) {
						0 === t
							? ((this.direction = "horizontal" === this.direction ? "vertical" : "horizontal"),
							  (this.directionStr = "horizontal" === this.direction ? "\u5782\u76f4" : "\u6c34\u5e73"))
							: ((this.horizontal = t), (this.vertical = e)),
							this.$forceUpdate();
					},
				},
			};
			e.default = n;
		}).call(this, n(14).default);
	},
	254: function (t, e) {
		t.exports = {
			".example": { "": { paddingTop: [0, 0, 0, 2], paddingRight: ["15", 0, 0, 2], paddingBottom: [0, 0, 0, 2], paddingLeft: ["15", 0, 0, 2] } },
			".example-info": {
				"": {
					paddingTop: ["15", 0, 0, 3],
					paddingRight: ["15", 0, 0, 3],
					paddingBottom: ["15", 0, 0, 3],
					paddingLeft: ["15", 0, 0, 3],
					color: ["#3b4144", 0, 0, 3],
					backgroundColor: ["#ffffff", 0, 0, 3],
					fontSize: ["14", 0, 0, 3],
					lineHeight: ["20", 0, 0, 3],
				},
			},
			".example-info-text": { "": { fontSize: ["14", 0, 0, 4], lineHeight: ["20", 0, 0, 4], color: ["#3b4144", 0, 0, 4] } },
			".example-body": {
				"": {
					flexDirection: ["column", 0, 0, 5],
					paddingTop: ["15", 0, 0, 5],
					paddingRight: ["15", 0, 0, 5],
					paddingBottom: ["15", 0, 0, 5],
					paddingLeft: ["15", 0, 0, 5],
					backgroundColor: ["#ffffff", 0, 0, 5],
				},
			},
			".word-btn-white": { "": { fontSize: ["18", 0, 0, 6], color: ["#FFFFFF", 0, 0, 6] } },
			".word-btn": {
				"": {
					flexDirection: ["row", 0, 0, 7],
					alignItems: ["center", 0, 0, 7],
					justifyContent: ["center", 0, 0, 7],
					borderRadius: ["6", 0, 0, 7],
					height: ["48", 0, 0, 7],
					marginTop: ["15", 0, 0, 7],
					marginRight: ["15", 0, 0, 7],
					marginBottom: ["15", 0, 0, 7],
					marginLeft: ["15", 0, 0, 7],
					backgroundColor: ["#007AFF", 0, 0, 7],
					width: ["250", 0, 0, 11],
				},
			},
			".word-btn--hover": { "": { backgroundColor: ["#4ca2ff", 0, 0, 8] } },
			".uni-fab-box": {
				"": {
					flexDirection: ["row", 0, 0, 9],
					justifyContent: ["center", 0, 0, 9],
					position: ["absolute", 0, 0, 9],
					top: [0, 0, 0, 9],
					bottom: [0, 0, 0, 9],
					left: [0, 0, 0, 9],
					right: [0, 0, 0, 9],
				},
			},
			".uni-padding-wrap": { "": { flexDirection: ["column", 0, 0, 10], justifyContent: ["center", 0, 0, 10], alignItems: ["center", 0, 0, 10] } },
			"@VERSION": 2,
		};
	},
	463: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {
				return i;
			});
		var i = { uniFab: n(685).default },
			o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						{ staticClass: ["uni-fab-box"] },
						[
							n("view", { staticClass: ["uni-padding-wrap"] }, [
								n(
									"view",
									{
										staticClass: ["word-btn"],
										attrs: { hoverClass: "word-btn--hover", hoverStartTime: 20, hoverStayTime: 70 },
										on: {
											click: function (e) {
												t.switchBtn(0);
											},
										},
									},
									[
										n("u-text", { staticClass: ["word-btn-white"], appendAsTree: !0, attrs: { append: "tree" } }, [
											t._v("\u5207\u6362\u83dc\u5355(" + t._s(t.directionStr) + "\u663e\u793a)"),
										]),
									],
								),
								n(
									"view",
									{
										staticClass: ["word-btn"],
										attrs: { hoverClass: "word-btn--hover", hoverStartTime: 20, hoverStayTime: 70 },
										on: {
											click: function (e) {
												t.switchBtn("left", "bottom");
											},
										},
									},
									[n("u-text", { staticClass: ["word-btn-white"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u5de6\u4e0b\u89d2\u663e\u793a")])],
								),
								n(
									"view",
									{
										staticClass: ["word-btn"],
										attrs: { hoverClass: "word-btn--hover", hoverStartTime: 20, hoverStayTime: 70 },
										on: {
											click: function (e) {
												t.switchBtn("right", "bottom");
											},
										},
									},
									[n("u-text", { staticClass: ["word-btn-white"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u53f3\u4e0b\u89d2\u663e\u793a")])],
								),
								n(
									"view",
									{
										staticClass: ["word-btn"],
										attrs: { hoverClass: "word-btn--hover", hoverStartTime: 20, hoverStayTime: 70 },
										on: {
											click: function (e) {
												t.switchBtn("left", "top");
											},
										},
									},
									[n("u-text", { staticClass: ["word-btn-white"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u5de6\u4e0a\u89d2\u663e\u793a")])],
								),
								n(
									"view",
									{
										staticClass: ["word-btn"],
										attrs: { hoverClass: "word-btn--hover", hoverStartTime: 20, hoverStayTime: 70 },
										on: {
											click: function (e) {
												t.switchBtn("right", "top");
											},
										},
									},
									[n("u-text", { staticClass: ["word-btn-white"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u53f3\u4e0a\u89d2\u663e\u793a")])],
								),
							]),
							n("uni-fab", {
								ref: "fab",
								attrs: { pattern: t.pattern, content: t.content, horizontal: t.horizontal, vertical: t.vertical, direction: t.direction },
								on: { trigger: t.trigger, fabClick: t.fabClick },
							}),
						],
						1,
					),
				]);
			},
			r = [];
	},
	499: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {});
		var i = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("view", { staticClass: ["uni-cursor-point"] }, [
					t.popMenu && (t.leftBottom || t.rightBottom || t.leftTop || t.rightTop) && t.content.length > 0
						? n(
								"view",
								{
									staticClass: ["uni-fab"],
									class: {
										"uni-fab--leftBottom": t.leftBottom,
										"uni-fab--rightBottom": t.rightBottom,
										"uni-fab--leftTop": t.leftTop,
										"uni-fab--rightTop": t.rightTop,
									},
								},
								[
									n(
										"view",
										{
											staticClass: ["uni-fab__content"],
											class: {
												"uni-fab__content--left": "left" === t.horizontal,
												"uni-fab__content--right": "right" === t.horizontal,
												"uni-fab__content--flexDirection": "vertical" === t.direction,
												"uni-fab__content--flexDirectionStart": t.flexDirectionStart,
												"uni-fab__content--flexDirectionEnd": t.flexDirectionEnd,
												"uni-fab__content--other-platform": !t.isAndroidNvue,
											},
											style: { width: t.boxWidth, height: t.boxHeight, backgroundColor: t.styles.backgroundColor },
											attrs: { elevation: "5" },
										},
										[
											t.flexDirectionStart || t.horizontalLeft ? n("view", { staticClass: ["uni-fab__item", "uni-fab__item--first"] }) : t._e(),
											t._l(t.content, function (e, i) {
												return n(
													"view",
													{
														key: i,
														staticClass: ["uni-fab__item"],
														class: { "uni-fab__item--active": t.isShow },
														on: {
															click: function (n) {
																t._onItemClick(i, e);
															},
														},
													},
													[
														n("u-image", {
															staticClass: ["uni-fab__item-image"],
															attrs: { src: e.active ? e.selectedIconPath : e.iconPath, mode: "widthFix" },
														}),
														n(
															"u-text",
															{
																staticClass: ["uni-fab__item-text"],
																style: { color: e.active ? t.styles.selectedColor : t.styles.color },
																appendAsTree: !0,
																attrs: { append: "tree" },
															},
															[t._v(t._s(e.text))],
														),
													],
													1,
												);
											}),
											t.flexDirectionEnd || t.horizontalRight ? n("view", { staticClass: ["uni-fab__item", "uni-fab__item--first"] }) : t._e(),
										],
										2,
									),
								],
						  )
						: t._e(),
					n(
						"view",
						{
							staticClass: ["uni-fab__circle", "uni-fab__plus"],
							class: {
								"uni-fab__circle--leftBottom": t.leftBottom,
								"uni-fab__circle--rightBottom": t.rightBottom,
								"uni-fab__circle--leftTop": t.leftTop,
								"uni-fab__circle--rightTop": t.rightTop,
								"uni-fab__content--other-platform": !t.isAndroidNvue,
							},
							style: { "background-color": t.styles.buttonColor },
							on: { click: t._onClick },
						},
						[
							n("view", { staticClass: ["fab-circle-v"], class: { "uni-fab__plus--active": t.isShow && t.content.length > 0 } }),
							n("view", { staticClass: ["fab-circle-h"], class: { "uni-fab__plus--active": t.isShow && t.content.length > 0 } }),
						],
					),
				]);
			},
			o = [];
	},
	582: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(251),
			o = n.n(i);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		e.default = o.a;
	},
	583: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(254),
			o = n.n(i);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		e.default = o.a;
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	684: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var i = n(93);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (t) {
				var e = this.constructor;
				return this.then(
					function (n) {
						return e.resolve(t()).then(function () {
							return n;
						});
					},
					function (n) {
						return e.resolve(t()).then(function () {
							throw n;
						});
					},
				);
			}),
			(i.default.mpType = "page"),
			(i.default.route = "pages/extUI/fab/fab"),
			(i.default.el = "#root"),
			new Vue(i.default);
	},
	685: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(499),
			o = n(249);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		var a = n(0);
		var s = Object(a.a)(o.default, i.b, i.c, !1, null, "7b2cfbba", "7b8e42ea", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(582).default, this.options.style) : Object.assign(this.options.style, n(582).default);
		}).call(s),
			(e.default = s.exports);
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(1),
			o = n.n(i);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		e.default = o.a;
	},
	93: function (t, e, n) {
		"use strict";
		var i = n(463),
			o = n(252),
			r = n(0);
		var a = Object(r.a)(o.default, i.b, i.c, !1, null, null, "1170ab84", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(583).default, this.options.style) : Object.assign(this.options.style, n(583).default);
		}).call(a),
			(e.default = a.exports);
	},
});
