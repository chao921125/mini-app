!(function (t) {
	var e = {};
	function i(n) {
		if (e[n]) return e[n].exports;
		var r = (e[n] = { i: n, l: !1, exports: {} });
		return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
	}
	(i.m = t),
		(i.c = e),
		(i.d = function (t, e, n) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
		}),
		(i.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(i.t = function (t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var r in t)
					i.d(
						n,
						r,
						function (e) {
							return t[e];
						}.bind(null, r),
					);
			return n;
		}),
		(i.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return i.d(e, "a", e), e;
		}),
		(i.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(i.p = ""),
		i((i.s = 707));
})({
	0: function (t, e, i) {
		"use strict";
		function n(t, e, i, n, r, o, a, s, u, c) {
			var l,
				d = "function" == typeof t ? t.options : t;
			if (u) {
				d.components || (d.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var p in u) f.call(u, p) && !f.call(d.components, p) && (d.components[p] = u[p]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(d.mixins || (d.mixins = [])).push(c)),
				e && ((d.render = e), (d.staticRenderFns = i), (d._compiled = !0)),
				n && (d.functional = !0),
				o && (d._scopeId = "data-v-" + o),
				a
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (d._ssrRegister = l))
					: r &&
					  (l = s
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				l)
			)
				if (d.functional) {
					d._injectStyles = l;
					var g = d.render;
					d.render = function (t, e) {
						return l.call(e), g(t, e);
					};
				} else {
					var h = d.beforeCreate;
					d.beforeCreate = h ? [].concat(h, l) : [l];
				}
			return { exports: t, options: d };
		}
		i.d(e, "a", function () {
			return n;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	101: function (t, e, i) {
		"use strict";
		var n = i(477),
			r = i(310),
			o = i(0);
		var a = Object(o.a)(r.default, n.b, n.c, !1, null, null, "51be394c", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(601).default, this.options.style) : Object.assign(this.options.style, i(601).default);
		}).call(a),
			(e.default = a.exports);
	},
	13: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(5),
			r = i(2);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = i(0);
		var s = Object(a.a)(r.default, n.b, n.c, !1, null, "168bca6c", "39eb9647", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(8).default, this.options.style) : Object.assign(this.options.style, i(8).default);
		}).call(s),
			(e.default = s.exports);
	},
	18: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(19),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	19: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
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
		e.default = n;
	},
	2: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(3),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
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
	21: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return r;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return t.text
					? i(
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
	3: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
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
		e.default = n;
	},
	304: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(305),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	305: function (t, e, i) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var i = t("dom"),
				n = {
					name: "UniGrid",
					props: {
						column: { type: Number, default: 3 },
						showBorder: { type: Boolean, default: !0 },
						borderColor: { type: String, default: "#e5e5e5" },
						square: { type: Boolean, default: !0 },
						highlight: { type: Boolean, default: !0 },
					},
					provide: function () {
						return { grid: this };
					},
					data: function () {
						return { elId: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)), width: 0 };
					},
					created: function () {
						this.children = [];
					},
					mounted: function () {
						var t = this;
						this.$nextTick(function () {
							t.init();
						});
					},
					methods: {
						init: function () {
							var t = this;
							setTimeout(function () {
								t._getSize(function (e) {
									t.children.forEach(function (t, i) {
										t.width = e;
									});
								});
							}, 50);
						},
						change: function (t) {
							this.$emit("change", t);
						},
						_getSize: function (t) {
							var e = this;
							i.getComponentRect(this.$refs["uni-grid"], function (i) {
								(e.width = parseInt((i.size.width - 1) / e.column) + "px"), t(e.width);
							});
						},
					},
				};
			e.default = n;
		}).call(this, i(47).default);
	},
	306: function (t, e) {
		t.exports = {
			".uni-grid-wrap": { "": { flex: [1, 0, 0, 0], flexDirection: ["column", 0, 0, 0] } },
			".uni-grid": { "": { flexDirection: ["row", 0, 0, 1], flexWrap: ["wrap", 0, 0, 1] } },
			".uni-grid--border": {
				"": { position: ["relative", 0, 0, 2], borderLeftColor: ["#e5e5e5", 0, 0, 2], borderLeftStyle: ["solid", 0, 0, 2], borderLeftWidth: ["0.5", 0, 0, 2] },
			},
			"@VERSION": 2,
		};
	},
	307: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(308),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	308: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			name: "UniGridItem",
			inject: ["grid"],
			props: { index: { type: Number, default: 0 } },
			data: function () {
				return { column: 0, showBorder: !0, square: !0, highlight: !0, left: 0, top: 0, openNum: 2, width: 0, borderColor: "#e5e5e5" };
			},
			created: function () {
				(this.column = this.grid.column),
					(this.showBorder = this.grid.showBorder),
					(this.square = this.grid.square),
					(this.highlight = this.grid.highlight),
					(this.top = 0 === this.hor ? this.grid.hor : this.hor),
					(this.left = 0 === this.ver ? this.grid.ver : this.ver),
					(this.borderColor = this.grid.borderColor),
					this.grid.children.push(this),
					(this.width = this.grid.width);
			},
			beforeDestroy: function () {
				var t = this;
				this.grid.children.forEach(function (e, i) {
					e === t && t.grid.children.splice(i, 1);
				});
			},
			methods: {
				_onClick: function () {
					this.grid.change({ detail: { index: this.index } });
				},
			},
		};
		e.default = n;
	},
	309: function (t, e) {
		t.exports = {
			".uni-grid-item__box": { "": { position: ["relative", 0, 0, 16], flex: [1, 0, 0, 16], flexDirection: ["column", 0, 0, 16] } },
			".uni-grid-item--border": {
				"": {
					position: ["relative", 0, 0, 17],
					borderBottomColor: ["#e5e5e5", 0, 0, 17],
					borderBottomStyle: ["solid", 0, 0, 17],
					borderBottomWidth: ["0.5", 0, 0, 17],
					borderRightColor: ["#e5e5e5", 0, 0, 17],
					borderRightStyle: ["solid", 0, 0, 17],
					borderRightWidth: ["0.5", 0, 0, 17],
				},
			},
			".uni-grid-item--border-top": {
				"": { position: ["relative", 0, 0, 18], borderTopColor: ["#e5e5e5", 0, 0, 18], borderTopStyle: ["solid", 0, 0, 18], borderTopWidth: ["0.5", 0, 0, 18] },
			},
			".uni-highlight": { "": { "backgroundColor:active": ["#f1f1f1", 0, 0, 19] } },
			"@VERSION": 2,
		};
	},
	310: function (t, e, i) {
		"use strict";
		var n = i(311),
			r = i.n(n);
		e.default = r.a;
	},
	311: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			components: {},
			data: function () {
				return {
					dynamicList: [],
					list: [
						{ url: "/static/c1.png", text: "Grid 1", badge: "0", type: "primary" },
						{ url: "/static/c2.png", text: "Grid 2", badge: "1", type: "success" },
						{ url: "/static/c3.png", text: "Grid 3", badge: "99", type: "warning" },
						{ url: "/static/c4.png", text: "Grid 4", badge: "2", type: "error" },
						{ url: "/static/c5.png", text: "Grid 5" },
						{ url: "/static/c6.png", text: "Grid 6" },
						{ url: "/static/c7.png", text: "Grid 7" },
						{ url: "/static/c8.png", text: "Grid 8" },
						{ url: "/static/c9.png", text: "Grid 9" },
					],
				};
			},
			methods: {
				change: function (t) {
					var e = t.detail.index;
					this.list[e].badge && this.list[e].badge++, uni.showToast({ title: "\u70b9\u51fb\u7b2c".concat(e + 1, "\u4e2a\u5bab\u683c"), icon: "none" });
				},
				add: function () {
					this.dynamicList.length < 9
						? this.dynamicList.push({
								url: "/static/c".concat(this.dynamicList.length + 1, ".png"),
								text: "Grid ".concat(this.dynamicList.length + 1),
								color: this.dynamicList.length % 2 == 0 ? "#f5f5f5" : "#fff",
						  })
						: uni.showToast({ title: "\u6700\u591a\u6dfb\u52a09\u4e2a", icon: "none" });
				},
				del: function () {
					this.dynamicList.splice(this.dynamicList.length - 1, 1);
				},
			},
		};
		e.default = n;
	},
	312: function (t, e) {
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
				},
			},
			".word-btn--hover": { "": { backgroundColor: ["#4ca2ff", 0, 0, 8] } },
			".image": { "": { width: ["50rpx", 0, 0, 9], height: ["50rpx", 0, 0, 9] } },
			".text": { "": { fontSize: ["26rpx", 0, 0, 10], marginTop: ["10rpx", 0, 0, 10] } },
			".grid-dynamic-box": { "": { marginBottom: ["15", 0, 0, 12] } },
			".grid-item-box": {
				"": {
					flex: [1, 0, 0, 13],
					flexDirection: ["column", 0, 0, 13],
					alignItems: ["center", 0, 0, 13],
					justifyContent: ["center", 0, 0, 13],
					paddingTop: ["15", 0, 0, 13],
					paddingRight: [0, 0, 0, 13],
					paddingBottom: ["15", 0, 0, 13],
					paddingLeft: [0, 0, 0, 13],
				},
			},
			".grid-dot": { "": { position: ["absolute", 0, 0, 14], top: ["5", 0, 0, 14], right: ["15", 0, 0, 14] } },
			".swiper": { "": { height: ["420", 0, 0, 15] } },
			"@VERSION": 2,
		};
	},
	33: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(20),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
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
	43: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(21),
			r = i(18);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = i(0);
		var s = Object(a.a)(r.default, n.b, n.c, !1, null, "6ee486c2", "327cd37a", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(33).default, this.options.style) : Object.assign(this.options.style, i(33).default);
		}).call(s),
			(e.default = s.exports);
	},
	47: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = function (t) {
				return weex.requireModule(t);
			});
	},
	477: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return r;
		}),
			i.d(e, "c", function () {
				return o;
			}),
			i.d(e, "a", function () {
				return n;
			});
		var n = { uniSection: i(13).default, uniGrid: i(708).default, uniGridItem: i(709).default, uniBadge: i(43).default },
			r = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					i(
						"view",
						{ staticClass: ["warp"] },
						[
							i("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(
									"\u5bab\u683c\u7ec4\u4ef6\u4e3b\u8981\u4f7f\u7528\u573a\u666f\u5982\uff1a\u5546\u54c1\u63a8\u8350\u5217\u8868\u3001\u70ed\u95e8\u5185\u5bb9\u7b49",
								),
							]),
							i("uni-section", { attrs: { title: "\u9ed8\u8ba4\u6837\u5f0f\uff083\u5217\uff09", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"uni-grid",
										{ attrs: { column: 3, highlight: !0 }, on: { change: t.change } },
										t._l(t.list, function (e, n) {
											return i("uni-grid-item", { key: n, attrs: { index: n } }, [
												i(
													"view",
													{ staticClass: ["grid-item-box"], staticStyle: { backgroundColor: "#fff" } },
													[
														i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
														i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
													],
													1,
												),
											]);
										}),
										1,
									),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u6ed1\u52a8\u89c6\u56fe", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"swiper",
										{ staticClass: ["swiper"], attrs: { indicatorDots: !0 } },
										[
											i(
												"swiper-item",
												[
													i(
														"uni-grid",
														{ attrs: { column: 3, highlight: !0 }, on: { change: t.change } },
														t._l(t.list, function (e, n) {
															return i("uni-grid-item", { key: n, attrs: { index: n } }, [
																i(
																	"view",
																	{ staticClass: ["grid-item-box"] },
																	[
																		i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
																		i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
																	],
																	1,
																),
															]);
														}),
														1,
													),
												],
												1,
											),
											i(
												"swiper-item",
												[
													i(
														"uni-grid",
														{ attrs: { column: 3, highlight: !0 }, on: { change: t.change } },
														t._l(t.list, function (e, n) {
															return i("uni-grid-item", { key: n, attrs: { index: n } }, [
																i(
																	"view",
																	{ staticClass: ["grid-item-box"] },
																	[
																		i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
																		i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
																	],
																	1,
																),
															]);
														}),
														1,
													),
												],
												1,
											),
											i(
												"swiper-item",
												[
													i(
														"uni-grid",
														{ attrs: { column: 3, highlight: !0 }, on: { change: t.change } },
														t._l(t.list, function (e, n) {
															return i("uni-grid-item", { key: n, attrs: { index: n } }, [
																i(
																	"view",
																	{ staticClass: ["grid-item-box"] },
																	[
																		i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
																		i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
																	],
																	1,
																),
															]);
														}),
														1,
													),
												],
												1,
											),
										],
										1,
									),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u52a8\u6001\u52a0\u8f7d", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"view",
										{ staticClass: ["grid-dynamic-box"] },
										[
											i(
												"uni-grid",
												{ attrs: { column: 3, highlight: !0 }, on: { change: t.change } },
												t._l(t.dynamicList, function (e, n) {
													return i("uni-grid-item", { key: n, attrs: { index: n } }, [
														i(
															"view",
															{ staticClass: ["grid-item-box"], style: { backgroundColor: e.color } },
															[
																i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
																i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
															],
															1,
														),
													]);
												}),
												1,
											),
										],
										1,
									),
									i("button", { attrs: { type: "primary" }, on: { click: t.add } }, [t._v("\u70b9\u51fb\u6dfb\u52a0\u4e00\u4e2a\u5bab\u683c")]),
									0 !== t.dynamicList.length
										? i("button", { staticStyle: { marginTop: "15px" }, attrs: { type: "primary" }, on: { click: t.del } }, [
												t._v("\u70b9\u51fb\u5220\u9664\u4e00\u4e2a\u5bab\u683c"),
										  ])
										: t._e(),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u65e0\u8fb9\u6846\u5e26\u89d2\u6807\uff083\u5217\uff09", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"uni-grid",
										{ attrs: { column: 3, showBorder: !1, square: !1 }, on: { change: t.change } },
										t._l(t.list, function (e, n) {
											return n < 6
												? i("uni-grid-item", { key: n, attrs: { index: n } }, [
														i(
															"view",
															{ staticClass: ["grid-item-box"] },
															[
																i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
																i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
																e.badge ? i("view", { staticClass: ["grid-dot"] }, [i("uni-badge", { attrs: { text: e.badge, type: e.type } })], 1) : t._e(),
															],
															1,
														),
												  ])
												: t._e();
										}),
										1,
									),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u77e9\u5f62\u5bab\u683c\uff083\u5217\uff09", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"uni-grid",
										{ attrs: { column: 3, square: !1, highlight: !1 }, on: { change: t.change } },
										t._l(t.list, function (e, n) {
											return i("uni-grid-item", { key: n, attrs: { index: n } }, [
												i(
													"view",
													{ staticClass: ["grid-item-box"] },
													[
														i("u-image", { staticClass: ["image"], attrs: { src: e.url, mode: "aspectFill" } }),
														i("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.text))]),
													],
													1,
												),
											]);
										}),
										1,
									),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u8fb9\u6846\u989c\u8272\uff084\u5217 \u65e0\u6587\u5b57\uff09", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"uni-grid",
										{ attrs: { column: 4, borderColor: "#03a9f4" }, on: { change: t.change } },
										[
											i("uni-grid-item", { attrs: { index: 0 } }, [
												i(
													"view",
													{ staticClass: ["grid-item-box"] },
													[i("u-image", { staticClass: ["image"], attrs: { src: "/static/c1.png", mode: "aspectFill" } })],
													1,
												),
											]),
											i("uni-grid-item", { attrs: { index: 1 } }, [
												i(
													"view",
													{ staticClass: ["grid-item-box"] },
													[i("u-image", { staticClass: ["image"], attrs: { src: "/static/c2.png", mode: "aspectFill" } })],
													1,
												),
											]),
											i("uni-grid-item", { attrs: { index: 2 } }, [
												i(
													"view",
													{ staticClass: ["grid-item-box"] },
													[i("u-image", { staticClass: ["image"], attrs: { src: "/static/c3.png", mode: "aspectFill" } })],
													1,
												),
											]),
											i("uni-grid-item", { attrs: { index: 3 } }, [
												i(
													"view",
													{ staticClass: ["grid-item-box"] },
													[i("u-image", { staticClass: ["image"], attrs: { src: "/static/c4.png", mode: "aspectFill" } })],
													1,
												),
											]),
										],
										1,
									),
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
	493: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return r;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("view", { staticClass: ["uni-grid-wrap"] }, [
					e(
						"view",
						{
							ref: "uni-grid",
							staticClass: ["uni-grid"],
							class: { "uni-grid--border": this.showBorder },
							style: { "border-left-color": this.borderColor },
							attrs: { id: this.elId },
						},
						[this._t("default")],
						2,
					),
				]);
			},
			r = [];
	},
	494: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return r;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return t.width
					? i("view", { staticClass: ["uni-grid-item"], style: "width:" + t.width + ";" + (t.square ? "height:" + t.width : "") }, [
							i(
								"view",
								{
									staticClass: ["uni-grid-item__box"],
									class: {
										"uni-grid-item--border": t.showBorder,
										"uni-grid-item--border-top": t.showBorder && t.index < t.column,
										"uni-highlight": t.highlight,
									},
									style: { "border-right-color": t.borderColor, "border-bottom-color": t.borderColor, "border-top-color": t.borderColor },
									on: { click: t._onClick },
								},
								[t._t("default")],
								2,
							),
					  ])
					: t._e();
			},
			r = [];
	},
	5: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return r;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						t.type ? i("view", { staticClass: ["uni-section__head"] }, [i("view", { staticClass: ["uni-section__head-tag"], class: t.type })]) : t._e(),
						i("view", { staticClass: ["uni-section__content"] }, [
							i("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !t.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(t._s(t.title)),
							]),
							t.subTitle
								? i("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.subTitle))])
								: t._e(),
						]),
						t._t("default"),
					],
					2,
				);
			},
			r = [];
	},
	599: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(306),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	600: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(309),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	601: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(312),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	7: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(1),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
	707: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var n = i(101);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (t) {
				var e = this.constructor;
				return this.then(
					function (i) {
						return e.resolve(t()).then(function () {
							return i;
						});
					},
					function (i) {
						return e.resolve(t()).then(function () {
							throw i;
						});
					},
				);
			}),
			(n.default.mpType = "page"),
			(n.default.route = "pages/extUI/grid/grid"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
	708: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(493),
			r = i(304);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = i(0);
		var s = Object(a.a)(r.default, n.b, n.c, !1, null, "6dca6903", "197f720f", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(599).default, this.options.style) : Object.assign(this.options.style, i(599).default);
		}).call(s),
			(e.default = s.exports);
	},
	709: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(494),
			r = i(307);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = i(0);
		var s = Object(a.a)(r.default, n.b, n.c, !1, null, "1ffc3b0a", "0eaa7b31", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(600).default, this.options.style) : Object.assign(this.options.style, i(600).default);
		}).call(s),
			(e.default = s.exports);
	},
	8: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(4),
			r = i.n(n);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		e.default = r.a;
	},
});
