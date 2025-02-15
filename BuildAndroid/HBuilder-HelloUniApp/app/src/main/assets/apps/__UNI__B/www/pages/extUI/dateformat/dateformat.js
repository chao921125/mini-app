!(function (t) {
	var e = {};
	function n(r) {
		if (e[r]) return e[r].exports;
		var o = (e[r] = { i: r, l: !1, exports: {} });
		return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var o in t)
					n.d(
						r,
						o,
						function (e) {
							return t[e];
						}.bind(null, o),
					);
			return r;
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
		n((n.s = 666));
})({
	0: function (t, e, n) {
		"use strict";
		function r(t, e, n, r, o, i, a, u, s, c) {
			var l,
				f = "function" == typeof t ? t.options : t;
			if (s) {
				f.components || (f.components = {});
				var d = Object.prototype.hasOwnProperty;
				for (var p in s) d.call(s, p) && !d.call(f.components, p) && (f.components[p] = s[p]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(c)),
				e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
				r && (f.functional = !0),
				i && (f._scopeId = "data-v-" + i),
				a
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								o && o.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (f._ssrRegister = l))
					: o &&
					  (l = u
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var h = f.render;
					f.render = function (t, e) {
						return l.call(e), h(t, e);
					};
				} else {
					var y = f.beforeCreate;
					f.beforeCreate = y ? [].concat(y, l) : [l];
				}
			return { exports: t, options: f };
		}
		n.d(e, "a", function () {
			return r;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	13: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(5),
			o = n(2);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		var a = n(0);
		var u = Object(a.a)(o.default, r.b, r.c, !1, null, "168bca6c", "39eb9647", !1, r.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(8).default, this.options.style) : Object.assign(this.options.style, n(8).default);
		}).call(u),
			(e.default = u.exports);
	},
	199: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(200),
			o = n.n(r);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		e.default = o.a;
	},
	2: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(3),
			o = n.n(r);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		e.default = o.a;
	},
	200: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var r = n(668),
			o = {
				name: "uniDateformat",
				props: {
					date: {
						type: [Object, String, Number],
						default: function () {
							return Date.now();
						},
					},
					locale: { type: String, default: "zh" },
					threshold: {
						type: Array,
						default: function () {
							return [0, 0];
						},
					},
					format: { type: String, default: "yyyy/MM/dd hh:mm:ss" },
					refreshRate: { type: [Number, String], default: 0 },
				},
				data: function () {
					return { refreshMark: 0 };
				},
				computed: {
					dateShow: function () {
						return this.refreshMark, (0, r.friendlyDate)(this.date, { locale: this.locale, threshold: this.threshold, format: this.format });
					},
				},
				watch: {
					refreshRate: {
						handler: function () {
							this.setAutoRefresh();
						},
						immediate: !0,
					},
				},
				methods: {
					refresh: function () {
						this.refreshMark++;
					},
					setAutoRefresh: function () {
						var t = this;
						clearInterval(this.refreshInterval),
							this.refreshRate &&
								(this.refreshInterval = setInterval(function () {
									t.refresh();
								}, parseInt(this.refreshRate)));
					},
				},
			};
		e.default = o;
	},
	201: function (t, e, n) {
		"use strict";
		var r = n(202),
			o = n.n(r);
		e.default = o.a;
	},
	202: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var r = {
			data: function () {
				return { now: Date.now() };
			},
			methods: {},
		};
		e.default = r;
	},
	203: function (t, e) {
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
					lineHeight: [1.5, 0, 0, 9],
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
		var r = {
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
		e.default = r;
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
	433: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {
				return r;
			});
		var r = { uniSection: n(13).default, uniDateformat: n(667).default },
			o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						[
							n("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(
									"\u65e5\u671f\u683c\u5f0f\u5316\u7ec4\u4ef6\uff0c\u901a\u5e38\u7528\u4e8e\u9700\u8981\u5c55\u793a\u53cb\u597d\u7684\u65e5\u671f\u683c\u5f0f\u7684\u573a\u666f",
								),
							]),
							n("uni-section", { attrs: { title: "\u57fa\u7840\u7528\u6cd5", type: "line" } }),
							n(
								"view",
								{ staticClass: ["example-body"] },
								[n("uni-dateformat", { attrs: { date: t.now - 72e5 } }), n("uni-dateformat", { attrs: { date: "2020/12/12" } })],
								1,
							),
							n("uni-section", { attrs: { title: "\u8bbe\u7f6e\u9608\u503c", type: "line" } }),
							n("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(
									"\u9608\u503c\u7528\u4e8e\u63a7\u5236\u4ec0\u4e48\u65f6\u5019\u663e\u793a\u521a\u521a|\u9a6c\u4e0a\uff0c\u4ec0\u4e48\u65f6\u5019\u663e\u793axx\u5206\u949f\u524d|xx\u5206\u949f\u540e",
								),
							]),
							n(
								"view",
								{ staticClass: ["example-body"] },
								[
									n("uni-dateformat", { attrs: { date: t.now - 3e4, threshold: [0, 36e5] } }),
									n("uni-dateformat", { attrs: { date: t.now - 3e4, threshold: [0, 0] } }),
								],
								1,
							),
							n("uni-section", { attrs: { title: "\u4f7f\u7528\u82f1\u6587", type: "line" } }),
							n(
								"view",
								{ staticClass: ["example-body"] },
								[
									n("uni-dateformat", { attrs: { date: t.now - 12e5, threshold: [6e4, 36e5], locale: "en" } }),
									n("uni-dateformat", { attrs: { date: t.now - 3e4, threshold: [6e4, 36e5], locale: "en" } }),
									n("uni-dateformat", { attrs: { date: t.now - 8e4, threshold: [6e4, 36e5], locale: "en" } }),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			i = [];
	},
	5: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return r;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {});
		var r = function () {
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
			o = [];
	},
	515: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return r;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {});
		var r = function () {
				var t = this.$createElement;
				return (this._self._c || t)("u-text", { appendAsTree: !0, attrs: { append: "tree" } }, [this._v(this._s(this.dateShow))]);
			},
			o = [];
	},
	566: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(203),
			o = n.n(r);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		e.default = o.a;
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	666: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var r = n(84);
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
			(r.default.mpType = "page"),
			(r.default.route = "pages/extUI/dateformat/dateformat"),
			(r.default.el = "#root"),
			new Vue(r.default);
	},
	667: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(515),
			o = n(199);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		var a = n(0);
		var u = Object(a.a)(o.default, r.b, r.c, !1, null, "46b7dd15", "c5b21e22", !1, r.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style);
		}).call(u),
			(e.default = u.exports);
	},
	668: function (t, e, n) {
		"use strict";
		function r(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
			for (t += ""; t.length < e; ) t = "0" + t;
			return t.slice(-e);
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.formatDate = a),
			(e.friendlyDate = function (t, e) {
				var n = e.locale,
					r = void 0 === n ? "zh" : n,
					o = e.threshold,
					u = void 0 === o ? [6e4, 36e5] : o,
					s = e.format,
					c = void 0 === s ? "yyyy/MM/dd hh:mm:ss" : s;
				if (!t && 0 !== t) return "";
				var l,
					f,
					d = {
						zh: {
							year: "\u5e74",
							month: "\u6708",
							day: "\u5929",
							hour: "\u5c0f\u65f6",
							minute: "\u5206\u949f",
							second: "\u79d2",
							ago: "\u524d",
							later: "\u540e",
							justNow: "\u521a\u521a",
							soon: "\u9a6c\u4e0a",
							template: "{num}{unit}{suffix}",
						},
						en: {
							year: "year",
							month: "month",
							day: "day",
							hour: "hour",
							minute: "minute",
							second: "second",
							ago: "ago",
							later: "later",
							justNow: "just now",
							soon: "soon",
							template: "{num} {unit} {suffix}",
						},
					},
					p = d[r] || d.zh,
					h = i(t),
					y = h.getTime() - Date.now(),
					_ = Math.abs(y);
				if (_ < u[0]) return y < 0 ? p.justNow : p.soon;
				if (_ >= u[1]) return a(h, c);
				var m = p.later;
				y < 0 && ((m = p.ago), (y = -y));
				var g = Math.floor(y / 1e3),
					v = Math.floor(g / 60),
					b = Math.floor(v / 60),
					S = Math.floor(b / 24),
					w = Math.floor(S / 30),
					x = Math.floor(w / 12);
				switch (!0) {
					case x > 0:
						(l = x), (f = p.year);
						break;
					case w > 0:
						(l = w), (f = p.month);
						break;
					case S > 0:
						(l = S), (f = p.day);
						break;
					case b > 0:
						(l = b), (f = p.hour);
						break;
					case v > 0:
						(l = v), (f = p.minute);
						break;
					default:
						(l = g), (f = p.second);
				}
				"en" === r && (1 === l ? (l = "a") : (f += "s"));
				return p.template
					.replace(/{\s*num\s*}/g, l + "")
					.replace(/{\s*unit\s*}/g, f)
					.replace(/{\s*suffix\s*}/g, m);
			});
		var o = {
			yyyy: function (t) {
				return r(t.year, 4);
			},
			yy: function (t) {
				return r(t.year);
			},
			MM: function (t) {
				return r(t.month);
			},
			M: function (t) {
				return t.month;
			},
			dd: function (t) {
				return r(t.day);
			},
			d: function (t) {
				return t.day;
			},
			hh: function (t) {
				return r(t.hour);
			},
			h: function (t) {
				return t.hour;
			},
			mm: function (t) {
				return r(t.minute);
			},
			m: function (t) {
				return t.minute;
			},
			ss: function (t) {
				return r(t.second);
			},
			s: function (t) {
				return t.second;
			},
			SSS: function (t) {
				return r(t.millisecond, 3);
			},
			S: function (t) {
				return t.millisecond;
			},
		};
		function i(t) {
			if (t instanceof Date) return t;
			switch (typeof t) {
				case "string":
					return t.indexOf("T") > -1 ? new Date(t) : new Date(t.replace(/-/g, "/"));
				default:
					return new Date(t);
			}
		}
		function a(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy/MM/dd hh:mm:ss";
			if (!t && 0 !== t) return "";
			for (
				var n = {
						year: (t = i(t)).getFullYear(),
						month: t.getMonth() + 1,
						day: t.getDate(),
						hour: t.getHours(),
						minute: t.getMinutes(),
						second: t.getSeconds(),
						millisecond: t.getMilliseconds(),
					},
					r = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,
					a = !0,
					u = e;
				a;

			)
				(a = !1),
					(u = u.replace(r, function (t) {
						return (a = !0), o[t](n);
					}));
			return u;
		}
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(1),
			o = n.n(r);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		e.default = o.a;
	},
	8: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(4),
			o = n.n(r);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		e.default = o.a;
	},
	84: function (t, e, n) {
		"use strict";
		var r = n(433),
			o = n(201),
			i = n(0);
		var a = Object(i.a)(o.default, r.b, r.c, !1, null, null, "bd517d8c", !1, r.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(566).default, this.options.style) : Object.assign(this.options.style, n(566).default);
		}).call(a),
			(e.default = a.exports);
	},
});
