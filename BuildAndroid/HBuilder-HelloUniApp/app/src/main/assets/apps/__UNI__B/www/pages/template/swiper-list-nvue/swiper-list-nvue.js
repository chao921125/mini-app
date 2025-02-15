!(function (t) {
	var e = {};
	function i(n) {
		if (e[n]) return e[n].exports;
		var a = (e[n] = { i: n, l: !1, exports: {} });
		return t[n].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
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
				for (var a in t)
					i.d(
						n,
						a,
						function (e) {
							return t[e];
						}.bind(null, a),
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
		i((i.s = 746));
})({
	0: function (t, e, i) {
		"use strict";
		function n(t, e, i, n, a, r, s, o, l, c) {
			var u,
				d = "function" == typeof t ? t.options : t;
			if (l) {
				d.components || (d.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var p in l) f.call(l, p) && !f.call(d.components, p) && (d.components[p] = l[p]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(d.mixins || (d.mixins = [])).push(c)),
				e && ((d.render = e), (d.staticRenderFns = i), (d._compiled = !0)),
				n && (d.functional = !0),
				r && (d._scopeId = "data-v-" + r),
				s
					? ((u = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								a && a.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(s);
					  }),
					  (d._ssrRegister = u))
					: a &&
					  (u = o
							? function () {
									a.call(this, this.$root.$options.shadowRoot);
							  }
							: a),
				u)
			)
				if (d.functional) {
					d._injectStyles = u;
					var h = d.render;
					d.render = function (t, e) {
						return u.call(e), h(t, e);
					};
				} else {
					var b = d.beforeCreate;
					d.beforeCreate = b ? [].concat(b, u) : [u];
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
	118: function (t, e, i) {
		"use strict";
		var n = i(465),
			a = i(408),
			r = i(0);
		var s = Object(r.a)(a.default, n.b, n.c, !1, null, null, "5f431163", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(634).default, this.options.style) : Object.assign(this.options.style, i(634).default);
		}).call(s),
			(e.default = s.exports);
	},
	408: function (t, e, i) {
		"use strict";
		var n = i(409),
			a = i.n(n);
		e.default = a.a;
	},
	409: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n,
			a = (n = i(747)) && n.__esModule ? n : { default: n };
		var r = weex.requireModule("dom"),
			s = {
				components: { swiperPage: a.default },
				data: function () {
					return {
						tabList: [],
						tabIndex: 0,
						cacheTab: [],
						scrollInto: "",
						indicatorLineLeft: 0,
						indicatorLineWidth: 0,
						isTap: !1,
						showTitleView: !0,
						pageHeight: 300,
						pageId: "page",
					};
				},
				onLoad: function () {
					for (var t = 0; t < 6; t++) this.tabList.push({ id: "tab" + t, name: "Tab " + (t + 1), pageid: t + 1 });
				},
				onReady: function () {
					(this.pageHeight = uni.getSystemInfoSync().windowHeight),
						(this._lastTabIndex = 0),
						(this.swiperWidth = 0),
						(this.tabbarWidth = 0),
						(this.tabListSize = {}),
						(this._touchTabIndex = 0),
						(this._headHeight = 100),
						(this.pageList = this.$refs.page),
						this.selectorQuery();
				},
				methods: {
					ontabtap: function (t) {
						var e = t.target.dataset.current || t.currentTarget.dataset.current;
						this.isTap = !0;
						var i = this.tabListSize[e];
						this.updateIndicator(i.left, i.width), (this._touchTabIndex = e), this.switchTab(e);
					},
					onswiperchange: function (t) {},
					onswiperscroll: function (t) {
						if (!this.isTap) {
							var e = t.detail.dx,
								i = this._lastTabIndex;
							if ((e > 1 ? i++ : e < -1 && i--, !(i === this._lastTabIndex || i < 0 || i > this.pageList.length - 1))) {
								0 === this.pageList[i].dataList.length && this.loadTabData(i);
								var n = Math.abs(this.swiperWidth / e),
									a = this.tabListSize[this._lastTabIndex],
									r = this.tabListSize[i],
									s = a.left + (r.left - a.left) / n,
									o = a.width + (r.width - a.width) / n;
								this.updateIndicator(s, o);
							}
						}
					},
					animationfinish: function (t) {
						var e = t.detail.current;
						this._touchTabIndex === e && (this.isTap = !1),
							(this._lastTabIndex = e),
							this.switchTab(e),
							this.updateIndicator(this.tabListSize[e].left, this.tabListSize[e].width);
					},
					selectorQuery: function () {
						var t = this;
						uni
							.createSelectorQuery()
							.in(this)
							.select("#head")
							.boundingClientRect()
							.exec(function (e) {
								t._headHeight = e[0].height;
							}),
							uni
								.createSelectorQuery()
								.in(this)
								.select("#tab-bar")
								.boundingClientRect()
								.exec(function (e) {
									t.tabbarWidth = e[0].width;
								}),
							uni
								.createSelectorQuery()
								.in(this)
								.select("#tab-bar-view")
								.boundingClientRect()
								.exec(function (e) {
									t.swiperWidth = e[0].width;
								});
						for (var e = uni.createSelectorQuery().in(this), i = 0; i < this.tabList.length; i++) e.select("#" + this.tabList[i].id).boundingClientRect();
						e.exec(function (e) {
							e.forEach(function (e) {
								t.tabListSize[e.dataset.id] = e;
							}),
								t.updateIndicator(t.tabListSize[t.tabIndex].left, t.tabListSize[t.tabIndex].width),
								t.switchTab(t.tabIndex);
						});
					},
					updateIndicator: function (t, e) {
						(this.indicatorLineLeft = t), (this.indicatorLineWidth = e);
					},
					switchTab: function (t) {
						if ((0 === this.pageList[t].dataList.length && this.loadTabData(t), this.pageList[t].setScrollRef(this._headHeight), this.tabIndex !== t)) {
							if (this.pageList[this.tabIndex].dataList.length > 100) this.cacheTab.indexOf(this.tabIndex) < 0 && this.cacheTab.push(this.tabIndex);
							if (((this.tabIndex = t), this.scrollTabTo(t), this.cacheTab.length > 3)) {
								var e = this.cacheTab[0];
								this.clearTabData(e), this.cacheTab.splice(0, 1);
							}
						}
					},
					scrollTabTo: function (t) {
						var e = this.$refs["tabitem" + t][0],
							i = 0;
						t > 0 &&
							((i = this.tabbarWidth / 2 - this.tabListSize[t].width / 2), this.tabListSize[t].right < this.tabbarWidth / 2 && (i = this.tabListSize[0].width)),
							r.scrollToElement(e, { offset: -i });
					},
					loadTabData: function (t) {
						this.pageList[t].loadData();
					},
					clearTabData: function (t) {
						this.pageList[t].clear();
					},
				},
			};
		e.default = s;
	},
	410: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(411),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	411: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			props: { pid: { type: [Number, String], default: "" }, parentId: { type: String, default: "" } },
			data: function () {
				return { scrollable: !0, dataList: [] };
			},
			created: function () {
				for (var t = 0; t < 30; t++) this.dataList.push({ id: t, name: t });
			},
			methods: {
				setScrollRef: function (t) {
					this.$refs.list.setSpecialEffects && this.$refs.list.setSpecialEffects({ id: this.parentId, headerHeight: t });
				},
				loadData: function () {},
				clear: function () {
					this.dataList.length = 0;
				},
			},
		};
		e.default = n;
	},
	412: function (t, e) {
		t.exports = {
			".uni-swiper-page": {
				"": { flex: [1, 0, 0, 0], position: ["absolute", 0, 0, 0], left: [0, 0, 0, 0], top: [0, 0, 0, 0], right: [0, 0, 0, 0], bottom: [0, 0, 0, 0] },
			},
			".list": { "": { flex: [1, 0, 0, 1], backgroundColor: ["#ebebeb", 0, 0, 1] } },
			".list-item": {
				"": {
					marginLeft: ["12", 0, 0, 2],
					marginRight: ["12", 0, 0, 2],
					marginTop: ["12", 0, 0, 2],
					paddingTop: ["20", 0, 0, 2],
					paddingRight: ["20", 0, 0, 2],
					paddingBottom: ["20", 0, 0, 2],
					paddingLeft: ["20", 0, 0, 2],
					backgroundColor: ["#ffffff", 0, 0, 2],
					borderRadius: ["5", 0, 0, 2],
				},
			},
			".loading": { "": { height: ["20", 0, 0, 3] } },
			"@VERSION": 2,
		};
	},
	413: function (t, e) {
		t.exports = {
			".page": { "": { flex: [1, 0, 0, 0] } },
			".header": {
				"": {
					height: ["160", 0, 0, 1],
					flexDirection: ["row", 0, 0, 1],
					alignItems: ["center", 0, 0, 1],
					justifyContent: ["center", 0, 0, 1],
					backgroundColor: ["#f4f4f4", 0, 0, 1],
				},
			},
			".header-title": { "": { fontSize: ["30", 0, 0, 2], fontWeight: ["bold", 0, 0, 2], color: ["#444444", 0, 0, 2] } },
			".flexible-view": { "": { backgroundColor: ["#f823ff", 0, 0, 3] } },
			".page-head": {
				"": {
					height: ["200", 0, 0, 4],
					flexDirection: ["column", 0, 0, 4],
					alignItems: ["center", 0, 0, 4],
					justifyContent: ["center", 0, 0, 4],
					backgroundColor: ["#FF0000", 0, 0, 4],
				},
			},
			".tabs": { "": { flexDirection: ["column", 0, 0, 5], overflow: ["hidden", 0, 0, 5], backgroundColor: ["#ffffff", 0, 0, 5] } },
			".tab-bar": { "": { width: ["750rpx", 0, 0, 6], height: ["84rpx", 0, 0, 6], flexDirection: ["row", 0, 0, 6] } },
			".scroll-view-indicator": { "": { position: ["relative", 0, 0, 7], height: ["2", 0, 0, 7], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 7] } },
			".scroll-view-underline": {
				"": { position: ["absolute", 0, 0, 8], top: [0, 0, 0, 8], bottom: [0, 0, 0, 8], width: [0, 0, 0, 8], backgroundColor: ["#007AFF", 0, 0, 8] },
			},
			".scroll-view-animation": { "": { transitionDuration: [200, 0, 0, 9], transitionProperty: ["left", 0, 0, 9] } },
			".tab-bar-line": { "": { height: ["1rpx", 0, 0, 10], backgroundColor: ["#cccccc", 0, 0, 10] } },
			".tab-view": { "": { flex: [1, 0, 0, 11] } },
			".uni-tab-item": { "": { flexWrap: ["nowrap", 0, 0, 12], paddingLeft: ["25", 0, 0, 12], paddingRight: ["25", 0, 0, 12] } },
			".uni-tab-item-title": {
				"": {
					color: ["#555555", 0, 0, 13],
					fontSize: ["30rpx", 0, 0, 13],
					height: ["80rpx", 0, 0, 13],
					lineHeight: ["80rpx", 0, 0, 13],
					flexWrap: ["nowrap", 0, 0, 13],
				},
			},
			".uni-tab-item-title-active": { "": { color: ["#007AFF", 0, 0, 14] } },
			".swiper-item": { "": { flex: [1, 0, 0, 15], flexDirection: ["column", 0, 0, 15] } },
			".swiper-page": {
				"": {
					flex: [1, 0, 0, 16],
					flexDirection: ["row", 0, 0, 16],
					position: ["absolute", 0, 0, 16],
					left: [0, 0, 0, 16],
					top: [0, 0, 0, 16],
					right: [0, 0, 0, 16],
					bottom: [0, 0, 0, 16],
				},
			},
			"@VERSION": 2,
		};
	},
	465: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return a;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("list", { staticClass: ["page"], attrs: { id: t.pageId, bounce: !1, fixFreezing: "true" } }, [
					t._m(0),
					i("cell", { appendAsTree: !0, attrs: { append: "tree" } }, [
						i(
							"view",
							{ staticClass: ["tabs"], style: "height:" + t.pageHeight + "px" },
							[
								i(
									"scroll-view",
									{
										ref: "tabbar1",
										staticClass: ["tab-bar"],
										attrs: { id: "tab-bar", scroll: !1, scrollX: !0, showScrollbar: !1, scrollIntoView: t.scrollInto },
									},
									[
										i("view", { staticStyle: { flexDirection: "column" } }, [
											i(
												"view",
												{ staticStyle: { flexDirection: "row" } },
												t._l(t.tabList, function (e, n) {
													return i(
														"view",
														{
															key: e.id,
															ref: "tabitem" + n,
															refInFor: !0,
															staticClass: ["uni-tab-item"],
															attrs: { id: e.id, dataId: n, dataCurrent: n },
															on: { click: t.ontabtap },
														},
														[
															i(
																"u-text",
																{
																	staticClass: ["uni-tab-item-title"],
																	class: t.tabIndex == n ? "uni-tab-item-title-active" : "",
																	appendAsTree: !0,
																	attrs: { append: "tree" },
																},
																[t._v(t._s(e.name))],
															),
														],
													);
												}),
												0,
											),
											i("view", { staticClass: ["scroll-view-indicator"] }, [
												i("view", {
													ref: "underline",
													staticClass: ["scroll-view-underline"],
													class: t.isTap ? "scroll-view-animation" : "",
													style: { left: t.indicatorLineLeft + "px", width: t.indicatorLineWidth + "px" },
												}),
											]),
										]),
									],
								),
								i("view", { staticClass: ["tab-bar-line"] }),
								i(
									"swiper",
									{
										ref: "swiper1",
										staticClass: ["tab-view"],
										attrs: { id: "tab-bar-view", current: t.tabIndex, duration: 300 },
										on: { change: t.onswiperchange, transition: t.onswiperscroll, animationfinish: t.animationfinish, onAnimationEnd: t.animationfinish },
									},
									t._l(t.tabList, function (e, n) {
										return i(
											"swiper-item",
											{ key: n, staticClass: ["swiper-item"] },
											[i("swiper-page", { ref: "page", refInFor: !0, staticClass: ["swiper-page"], attrs: { pid: e.pageid, parentId: t.pageId } })],
											1,
										);
									}),
									1,
								),
							],
							1,
						),
					]),
				]);
			},
			a = [
				function () {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("cell", { appendAsTree: !0, attrs: { append: "tree" } }, [
						e("view", { staticClass: ["header"], attrs: { id: "head" } }, [
							e("u-text", { staticClass: ["header-title"], appendAsTree: !0, attrs: { append: "tree" } }, [this._v("header")]),
						]),
					]);
				},
			];
	},
	527: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return a;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("view", { staticClass: ["uni-swiper-page"] }, [
					i(
						"list",
						{ ref: "list", staticClass: ["list"], attrs: { offsetAccuracy: 5, bounce: !1, fixFreezing: "true" } },
						[
							t._l(t.dataList, function (e, n) {
								return i("cell", { key: e.id, ref: "item" + n, refInFor: !0, appendAsTree: !0, attrs: { append: "tree" } }, [
									i("view", { staticClass: ["list-item"] }, [i("u-text", { appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.name))])]),
								]);
							}),
							i("cell", { staticClass: ["loading"], appendAsTree: !0, attrs: { append: "tree" } }),
						],
						2,
					),
				]);
			},
			a = [];
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	633: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(412),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	634: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(413),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	7: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(1),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	746: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var n = i(118);
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
			(n.default.route = "pages/template/swiper-list-nvue/swiper-list-nvue"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
	747: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(527),
			a = i(410);
		for (var r in a)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return a[t];
					});
				})(r);
		var s = i(0);
		var o = Object(s.a)(a.default, n.b, n.c, !1, null, "74b4efcb", "fff389fa", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(633).default, this.options.style) : Object.assign(this.options.style, i(633).default);
		}).call(o),
			(e.default = o.exports);
	},
});
