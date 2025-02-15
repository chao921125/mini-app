!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var r = (e[i] = { i: i, l: !1, exports: {} });
		return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
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
				for (var r in t)
					n.d(
						i,
						r,
						function (e) {
							return t[e];
						}.bind(null, r),
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
		n((n.s = 739));
})({
	0: function (t, e, n) {
		"use strict";
		function i(t, e, n, i, r, o, a, s, u, l) {
			var c,
				d = "function" == typeof t ? t.options : t;
			if (u) {
				d.components || (d.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var p in u) f.call(u, p) && !f.call(d.components, p) && (d.components[p] = u[p]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(d.mixins || (d.mixins = [])).push(l)),
				e && ((d.render = e), (d.staticRenderFns = n), (d._compiled = !0)),
				i && (d.functional = !0),
				o && (d._scopeId = "data-v-" + o),
				a
					? ((c = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (d._ssrRegister = c))
					: r &&
					  (c = s
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				c)
			)
				if (d.functional) {
					d._injectStyles = c;
					var g = d.render;
					d.render = function (t, e) {
						return c.call(e), g(t, e);
					};
				} else {
					var b = d.beforeCreate;
					d.beforeCreate = b ? [].concat(b, c) : [c];
				}
			return { exports: t, options: d };
		}
		n.d(e, "a", function () {
			return i;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	115: function (t, e, n) {
		"use strict";
		var i = n(440),
			r = n(394),
			o = n(0);
		var a = Object(o.a)(r.default, i.b, i.c, !1, null, null, "7763bd0c", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(629).default, this.options.style) : Object.assign(this.options.style, n(629).default);
		}).call(a),
			(e.default = a.exports);
	},
	13: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(5),
			r = n(2);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(r.default, i.b, i.c, !1, null, "168bca6c", "39eb9647", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(8).default, this.options.style) : Object.assign(this.options.style, n(8).default);
		}).call(s),
			(e.default = s.exports);
	},
	18: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(19),
			r = n.n(i);
		for (var o in i)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(o);
		e.default = r.a;
	},
	19: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var i = {
			name: "UniBadge",
			props: {
				type: { type: String, default: "default" },
				inverted: { type: Boolean, default: !1 },
				text: { type: [String, Number], default: "" },
				size: { type: String, default: "normal" },
			},
			data: function () {
				return { badgeStyle: "" };
			},
			watch: {
				text: function () {
					this.setStyle();
				},
			},
			mounted: function () {
				this.setStyle();
			},
			methods: {
				setStyle: function () {
					this.badgeStyle = "width: ".concat(8 * String(this.text).length + 12, "px");
				},
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		e.default = i;
	},
	2: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(3),
			r = n.n(i);
		for (var o in i)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(o);
		e.default = r.a;
	},
	20: function (t, e) {
		t.exports = {
			".uni-badge": {
				"": {
					justifyContent: ["center", 0, 0, 0],
					flexDirection: ["row", 0, 0, 0],
					height: ["20", 0, 0, 0],
					lineHeight: ["20", 0, 0, 0],
					color: ["#333333", 0, 0, 0],
					borderRadius: ["100", 0, 0, 0],
					backgroundColor: ["rgba(0,0,0,0)", 0, 0, 0],
					textAlign: ["center", 0, 0, 0],
					fontFamily: ['"Helvetica Neue", Helvetica, sans-serif', 0, 0, 0],
					fontSize: ["12", 0, 0, 0],
					paddingTop: ["0", 0, 0, 0],
					paddingRight: ["6", 0, 0, 0],
					paddingBottom: ["0", 0, 0, 0],
					paddingLeft: ["6", 0, 0, 0],
				},
			},
			".uni-badge--inverted": {
				"": { paddingTop: [0, 0, 0, 1], paddingRight: ["5", 0, 0, 1], paddingBottom: [0, 0, 0, 1], paddingLeft: [0, 0, 0, 1], color: ["#f1f1f1", 0, 0, 1] },
			},
			".uni-badge--default": { "": { color: ["#333333", 0, 0, 2], backgroundColor: ["#f1f1f1", 0, 0, 2] } },
			".uni-badge--default-inverted": { "": { color: ["#999999", 0, 0, 3], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 3] } },
			".uni-badge--primary": { "": { color: ["#ffffff", 0, 0, 4], backgroundColor: ["#007aff", 0, 0, 4] } },
			".uni-badge--primary-inverted": { "": { color: ["#007aff", 0, 0, 5], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 5] } },
			".uni-badge--success": { "": { color: ["#ffffff", 0, 0, 6], backgroundColor: ["#4cd964", 0, 0, 6] } },
			".uni-badge--success-inverted": { "": { color: ["#4cd964", 0, 0, 7], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 7] } },
			".uni-badge--warning": { "": { color: ["#ffffff", 0, 0, 8], backgroundColor: ["#f0ad4e", 0, 0, 8] } },
			".uni-badge--warning-inverted": { "": { color: ["#f0ad4e", 0, 0, 9], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 9] } },
			".uni-badge--error": { "": { color: ["#ffffff", 0, 0, 10], backgroundColor: ["#dd524d", 0, 0, 10] } },
			".uni-badge--error-inverted": { "": { color: ["#dd524d", 0, 0, 11], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 11] } },
			".uni-badge--small": { "": { transform: ["scale(0.8)", 0, 0, 12], transformOrigin: ["center center", 0, 0, 12] } },
			"@VERSION": 2,
		};
	},
	21: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {});
		var i = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return t.text
					? n(
							"u-text",
							{
								staticClass: ["uni-badge"],
								class: t.inverted
									? "uni-badge--" + t.type + " uni-badge--" + t.size + " uni-badge--" + t.type + "-inverted"
									: "uni-badge--" + t.type + " uni-badge--" + t.size,
								style: t.badgeStyle,
								appendAsTree: !0,
								attrs: { append: "tree" },
								on: {
									click: function (e) {
										t.onClick();
									},
								},
							},
							[t._v(t._s(t.text))],
					  )
					: t._e();
			},
			r = [];
	},
	3: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var i = {
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
		e.default = i;
	},
	33: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(20),
			r = n.n(i);
		for (var o in i)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(o);
		e.default = r.a;
	},
	394: function (t, e, n) {
		"use strict";
		var i = n(395),
			r = n.n(i);
		e.default = r.a;
	},
	395: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		e.default = {
			components: {},
			data: function () {
				return {};
			},
		};
	},
	396: function (t, e) {
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
			".uni-badge-left-margin": { "": { marginLeft: ["20rpx", 0, 0, 10] } },
			"@VERSION": 2,
		};
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
	43: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(21),
			r = n(18);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(r.default, i.b, i.c, !1, null, "6ee486c2", "327cd37a", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(33).default, this.options.style) : Object.assign(this.options.style, n(33).default);
		}).call(s),
			(e.default = s.exports);
	},
	440: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return r;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {
				return i;
			});
		var i = { uniSection: n(13).default, uniBadge: n(43).default },
			r = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					e(
						"view",
						{ staticClass: ["page"] },
						[
							e("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								this._v(
									"\u6570\u5b57\u89d2\u6807\u901a\u7528\u6765\u6807\u8bb0\u91cd\u70b9\u4fe1\u606f\u4f7f\u7528\uff0c\u5982\u63a5\u53d7\u5230\u65b0\u6d88\u606f\u3001\u6709\u672a\u8bfb\u6d88\u606f\u7b49",
								),
							]),
							e("uni-section", { attrs: { title: "\u6709\u5e95\u8272", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "1" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "2", type: "primary" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "34", type: "success" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "45", type: "warning" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "123", type: "error" } }),
								],
								1,
							),
							e("uni-section", { attrs: { title: "\u65e0\u5e95\u8272", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { inverted: !0, text: "1" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { inverted: !0, text: "2", type: "primary" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { inverted: !0, text: "34", type: "success" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { inverted: !0, text: "45", type: "warning" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { inverted: !0, text: "123", type: "error" } }),
								],
								1,
							),
							e("uni-section", { attrs: { title: "\u8ff7\u4f60", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "1", size: "small" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "2", type: "primary", size: "small" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "34", type: "success", size: "small" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "45", type: "warning", size: "small" } }),
									e("uni-badge", { staticClass: ["uni-badge-left-margin"], attrs: { text: "123", type: "error", size: "small" } }),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			o = [];
	},
	5: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {});
		var i = function () {
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
			r = [];
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	629: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(396),
			r = n.n(i);
		for (var o in i)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(o);
		e.default = r.a;
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(1),
			r = n.n(i);
		for (var o in i)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(o);
		e.default = r.a;
	},
	739: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var i = n(115);
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
			(i.default.route = "pages/extUI/badge/badge"),
			(i.default.el = "#root"),
			new Vue(i.default);
	},
	8: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(4),
			r = n.n(i);
		for (var o in i)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(o);
		e.default = r.a;
	},
});
