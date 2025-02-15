!(function (t) {
	var e = {};
	function n(o) {
		if (e[o]) return e[o].exports;
		var i = (e[o] = { i: o, l: !1, exports: {} });
		return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, o) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var o = Object.create(null);
			if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var i in t)
					n.d(
						o,
						i,
						function (e) {
							return t[e];
						}.bind(null, i),
					);
			return o;
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
		n((n.s = 672));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, i, r, s, u, a, l) {
			var c,
				f = "function" == typeof t ? t.options : t;
			if (a) {
				f.components || (f.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var d in a) p.call(a, d) && !p.call(f.components, d) && (f.components[d] = a[d]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(l)),
				e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
				o && (f.functional = !0),
				r && (f._scopeId = "data-v-" + r),
				s
					? ((c = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								i && i.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(s);
					  }),
					  (f._ssrRegister = c))
					: i &&
					  (c = u
							? function () {
									i.call(this, this.$root.$options.shadowRoot);
							  }
							: i),
				c)
			)
				if (f.functional) {
					f._injectStyles = c;
					var _ = f.render;
					f.render = function (t, e) {
						return c.call(e), _(t, e);
					};
				} else {
					var h = f.beforeCreate;
					f.beforeCreate = h ? [].concat(h, c) : [c];
				}
			return { exports: t, options: f };
		}
		n.d(e, "a", function () {
			return o;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	13: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(5),
			i = n(2);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		var s = n(0);
		var u = Object(s.a)(i.default, o.b, o.c, !1, null, "168bca6c", "39eb9647", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(8).default, this.options.style) : Object.assign(this.options.style, n(8).default);
		}).call(u),
			(e.default = u.exports);
	},
	2: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(3),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	213: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(214),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	214: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			name: "uniLink",
			props: {
				href: { type: String, default: "" },
				text: { type: String, default: "" },
				showUnderLine: { type: [Boolean, String], default: !0 },
				copyTips: {
					type: String,
					default: "\u5df2\u81ea\u52a8\u590d\u5236\u7f51\u5740\uff0c\u8bf7\u5728\u624b\u673a\u6d4f\u89c8\u5668\u91cc\u7c98\u8d34\u8be5\u7f51\u5740",
				},
				color: { type: String, default: "#999999" },
				fontSize: { type: [Number, String], default: 14 },
			},
			computed: {
				isShowA: function () {
					return !((!this.isMail() && !this.isTel()) || !0 !== this._isH5);
				},
			},
			created: function () {
				this._isH5 = null;
			},
			methods: {
				isMail: function () {
					return this.href.startsWith("mailto:");
				},
				isTel: function () {
					return this.href.startsWith("tel:");
				},
				openURL: function () {
					this.isTel() ? this.makePhoneCall(this.href.replace("tel:", "")) : plus.runtime.openURL(this.href);
				},
				makePhoneCall: function (t) {
					uni.makePhoneCall({ phoneNumber: t });
				},
			},
		};
		e.default = o;
	},
	215: function (t, e) {
		t.exports = { ".uni-link--withline": { "": { textDecoration: ["underline", 0, 0, 0] } }, "@VERSION": 2 };
	},
	216: function (t, e, n) {
		"use strict";
		var o = n(217),
			i = n.n(o);
		e.default = i.a;
	},
	217: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		e.default = {
			components: {},
			data: function () {
				return {};
			},
		};
	},
	218: function (t, e) {
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
					flexDirection: ["row", 0, 0, 9],
					paddingTop: ["15", 0, 0, 5],
					paddingRight: ["15", 0, 0, 5],
					paddingBottom: ["15", 0, 0, 5],
					paddingLeft: ["15", 0, 0, 5],
					backgroundColor: ["#ffffff", 0, 0, 5],
					justifyContent: ["flex-start", 0, 0, 9],
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
				},
			},
			".word-btn--hover": { "": { backgroundColor: ["#4ca2ff", 0, 0, 8] } },
			"@VERSION": 2,
		};
	},
	3: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			name: "UniSection",
			props: { type: { type: String, default: "" }, title: { type: String, default: "" }, subTitle: { type: String, default: "" } },
			data: function () {
				return {};
			},
			watch: {
				title: function (t) {
					uni.report && "" !== t && uni.report("title", t);
				},
			},
			methods: {
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		e.default = o;
	},
	4: function (t, e) {
		t.exports = {
			".uni-section": {
				"": {
					position: ["relative", 0, 0, 0],
					marginTop: ["10", 0, 0, 0],
					flexDirection: ["row", 0, 0, 0],
					alignItems: ["center", 0, 0, 0],
					paddingTop: [0, 0, 0, 0],
					paddingRight: ["10", 0, 0, 0],
					paddingBottom: [0, 0, 0, 0],
					paddingLeft: ["10", 0, 0, 0],
					height: ["50", 0, 0, 0],
					backgroundColor: ["#f8f8f8", 0, 0, 0],
					fontWeight: ["normal", 0, 0, 0],
				},
			},
			".uni-section__head": {
				"": { flexDirection: ["row", 0, 0, 1], justifyContent: ["center", 0, 0, 1], alignItems: ["center", 0, 0, 1], marginRight: ["10", 0, 0, 1] },
			},
			".line": { "": { height: ["15", 0, 0, 2], backgroundColor: ["#c0c0c0", 0, 0, 2], borderRadius: ["5", 0, 0, 2], width: ["3", 0, 0, 2] } },
			".circle": {
				"": {
					width: ["8", 0, 0, 3],
					height: ["8", 0, 0, 3],
					borderTopRightRadius: ["50", 0, 0, 3],
					borderTopLeftRadius: ["50", 0, 0, 3],
					borderBottomLeftRadius: ["50", 0, 0, 3],
					borderBottomRightRadius: ["50", 0, 0, 3],
					backgroundColor: ["#c0c0c0", 0, 0, 3],
				},
			},
			".uni-section__content": { "": { flexDirection: ["column", 0, 0, 4], flex: [1, 0, 0, 4], color: ["#333333", 0, 0, 4] } },
			".uni-section__content-title": { "": { fontSize: ["14", 0, 0, 5], color: ["#333333", 0, 0, 5] } },
			".distraction": { "": { flexDirection: ["row", 0, 0, 6], alignItems: ["center", 0, 0, 6] } },
			".uni-section__content-sub": { "": { fontSize: ["12", 0, 0, 7], color: ["#999999", 0, 0, 7] } },
			"@VERSION": 2,
		};
	},
	441: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {
				return o;
			});
		var o = { uniSection: n(13).default, uniLink: n(673).default },
			i = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					e(
						"view",
						{ staticClass: ["page"] },
						[
							e("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								this._v(
									"\u8d85\u94fe\u63a5\u7ec4\u4ef6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u5185\u590d\u5236url\uff0c\u5728app\u5185\u6253\u5f00\u5916\u90e8\u6d4f\u89c8\u5668\uff0c\u5728h5\u7aef\u6253\u5f00\u65b0\u7f51\u9875\u3002",
								),
							]),
							e("uni-section", { attrs: { title: "\u57fa\u672c\u793a\u4f8b", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[e("uni-link", { attrs: { href: "https://uniapp.dcloud.io/", text: "https://uniapp.dcloud.io/" } })],
								1,
							),
							e("uni-section", { attrs: { title: "\u81ea\u5b9a\u4e49\u6837\u5f0f", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[e("uni-link", { attrs: { href: "https://uniapp.dcloud.io/", text: "https://uniapp.dcloud.io/", showUnderLine: "false", color: "#0000FF" } })],
								1,
							),
						],
						1,
					),
				]);
			},
			r = [];
	},
	5: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						t.type ? n("view", { staticClass: ["uni-section__head"] }, [n("view", { staticClass: ["uni-section__head-tag"], class: t.type })]) : t._e(),
						n("view", { staticClass: ["uni-section__content"] }, [
							n("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !t.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(t._s(t.title)),
							]),
							t.subTitle
								? n("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.subTitle))])
								: t._e(),
						]),
						t._t("default"),
					],
					2,
				);
			},
			i = [];
	},
	509: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return t.isShowA
					? n(
							"a",
							{
								staticClass: ["uni-link"],
								class: { "uni-link--withline": !0 === t.showUnderLine || "true" === t.showUnderLine },
								style: { color: t.color, fontSize: t.fontSize + "px" },
								attrs: { href: t.href },
							},
							[n("u-text", [t._v(t._s(t.text))])],
					  )
					: n(
							"u-text",
							{
								staticClass: ["uni-link"],
								class: { "uni-link--withline": !0 === t.showUnderLine || "true" === t.showUnderLine },
								style: { color: t.color, fontSize: t.fontSize + "px" },
								appendAsTree: !0,
								attrs: { append: "tree" },
								on: { click: t.openURL },
							},
							[t._v(t._s(t.text))],
					  );
			},
			i = [];
	},
	570: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(215),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	571: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(218),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	672: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(87);
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
			(o.default.mpType = "page"),
			(o.default.route = "pages/extUI/link/link"),
			(o.default.el = "#root"),
			new Vue(o.default);
	},
	673: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(509),
			i = n(213);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		var s = n(0);
		var u = Object(s.a)(i.default, o.b, o.c, !1, null, "58ef86ee", "3d7b86e2", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(570).default, this.options.style) : Object.assign(this.options.style, n(570).default);
		}).call(u),
			(e.default = u.exports);
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(1),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	8: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(4),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	87: function (t, e, n) {
		"use strict";
		var o = n(441),
			i = n(216),
			r = n(0);
		var s = Object(r.a)(i.default, o.b, o.c, !1, null, null, "a6a5ba4c", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(571).default, this.options.style) : Object.assign(this.options.style, n(571).default);
		}).call(s),
			(e.default = s.exports);
	},
});
