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
		n((n.s = 645));
})({
	0: function (t, e, n) {
		"use strict";
		function i(t, e, n, i, r, o, a, s, u, c) {
			var l,
				f = "function" == typeof t ? t.options : t;
			if (u) {
				f.components || (f.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var d in u) p.call(u, d) && !p.call(f.components, d) && (f.components[d] = u[d]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(c)),
				e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
				i && (f.functional = !0),
				o && (f._scopeId = "data-v-" + o),
				a
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (f._ssrRegister = l))
					: r &&
					  (l = s
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var h = f.render;
					f.render = function (t, e) {
						return l.call(e), h(t, e);
					};
				} else {
					var m = f.beforeCreate;
					f.beforeCreate = m ? [].concat(m, l) : [l];
				}
			return { exports: t, options: f };
		}
		n.d(e, "a", function () {
			return i;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	137: function (t, e, n) {
		"use strict";
		var i = n(138),
			r = n.n(i);
		e.default = r.a;
	},
	138: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var i = n(45);
		function r(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				e &&
					(i = i.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable;
					})),
					n.push.apply(n, i);
			}
			return n;
		}
		function o(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2
					? r(Object(n), !0).forEach(function (e) {
							a(t, e, n[e]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
					: r(Object(n)).forEach(function (e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
					  });
			}
			return t;
		}
		function a(t, e, n) {
			return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
		}
		var s = {
			data: function () {
				return {
					hideList: ["ucharts", "nav-city-dropdown"],
					list: [
						{
							id: "navbar",
							name: "\u9876\u90e8\u539f\u751f\u5bfc\u822a\u6807\u9898\u680f",
							open: !1,
							pages: [
								{ name: "\u5bfc\u822a\u680f\u5e26\u81ea\u5b9a\u4e49\u6309\u94ae", url: "nav-button" },
								{ name: "\u5bfc\u822a\u680f\u5e26\u7ea2\u70b9\u548c\u89d2\u6807", url: "nav-dot" },
								{ name: "\u5bfc\u822a\u680f\u5e26\u57ce\u5e02\u9009\u62e9", url: "nav-city-dropdown" },
								{ name: "\u5bfc\u822a\u680f\u5e26\u641c\u7d22\u6846", url: "nav-search-input" },
								{ name: "\u900f\u660e\u6e10\u53d8\u6837\u5f0f", url: "nav-transparent" },
								{ name: "\u5bfc\u822a\u680f\u5e26\u56fe\u7247", url: "nav-image" },
							],
						},
						{ name: "\u9876\u90e8\u9009\u9879\u5361", url: "tabbar" },
						{ name: "\u7ec4\u4ef6\u901a\u8baf", url: "component-communication" },
						{ name: "uCharts \u56fe\u8868", url: "ucharts" },
						{ name: "\u5217\u8868\u5230\u8be6\u60c5\u793a\u4f8b", url: "list2detail-list" },
						{ name: "\u4e0a\u4e0b\u6ed1\u52a8\u5207\u6362\u89c6\u9891", url: "swiper-vertical" },
						{ name: "swiper-list", url: "swiper-list-nvue" },
						{ name: "GlobalData\u548cvuex", url: "global" },
						{ name: "\u95ee\u9898\u53cd\u9988", url: "/platforms/app-plus/feedback/feedback" },
						{ name: "\u6253\u5f00\u5916\u90e8\u5e94\u7528", url: "scheme" },
						{ name: "\u5fae\u4fe1\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u793a\u4f8b\uff08vant ui\uff09", url: "vant-button" },
					],
				};
			},
			onShareAppMessage: function () {
				return { title: "\u6b22\u8fce\u4f53\u9a8cuni-app", path: "/pages/tabBar/template/template" };
			},
			onNavigationBarButtonTap: function (t) {
				uni.navigateTo({ url: "/pages/about/about" });
			},
			computed: o(
				{},
				(0, i.mapState)({
					hasLeftWin: function (t) {
						return !t.noMatchLeftWindow;
					},
					leftWinActive: function (t) {
						return t.leftWinActive.split("/")[3];
					},
					activeOpen: function (t) {
						return t.activeOpen;
					},
				}),
			),
			methods: o(
				o({}, (0, i.mapMutations)(["setMenu", "setMatchLeftWindow", "setLeftWinActive", "setActiveOpen"])),
				{},
				{
					triggerCollapse: function (t, e) {
						this.list[t].pages ? (e === this.activeOpen && (e = ""), this.setActiveOpen(e)) : this.goDetailPage(this.list[t].url);
					},
					goDetailPage: function (t) {
						var e = t.url ? t.url : t,
							n = ~e.indexOf("platform") ? e : "/pages/template/" + e + "/" + e;
						return this.hasLeftWin ? uni.reLaunch({ url: n }) : uni.navigateTo({ url: n }), !1;
					},
				},
			),
		};
		e.default = s;
	},
	139: function (t, e) {
		t.exports = {
			".uni-icon": { "": { fontFamily: ["uniicons", 0, 0, 1], fontWeight: ["normal", 0, 0, 1] } },
			".uni-container": {
				"": {
					paddingTop: ["15", 0, 0, 2],
					paddingRight: ["15", 0, 0, 2],
					paddingBottom: ["15", 0, 0, 2],
					paddingLeft: ["15", 0, 0, 2],
					backgroundColor: ["#f8f8f8", 0, 0, 2],
				},
			},
			".uni-header-logo": {
				"": {
					paddingTop: ["15", 0, 0, 3],
					paddingRight: ["15", 0, 0, 3],
					paddingBottom: ["15", 0, 0, 3],
					paddingLeft: ["15", 0, 0, 3],
					flexDirection: ["column", 0, 0, 3],
					justifyContent: ["center", 0, 0, 3],
					alignItems: ["center", 0, 0, 3],
					marginTop: ["10rpx", 0, 0, 3],
				},
			},
			".uni-header-image": { "": { width: ["80", 0, 0, 4], height: ["80", 0, 0, 4] } },
			".uni-hello-text": { "": { marginBottom: ["20", 0, 0, 5] } },
			".hello-text": { "": { color: ["#7A7E83", 0, 0, 6], fontSize: ["14", 0, 0, 6], lineHeight: ["20", 0, 0, 6] } },
			".hello-link": { "": { color: ["#7A7E83", 0, 0, 7], fontSize: ["14", 0, 0, 7], lineHeight: ["20", 0, 0, 7] } },
			".uni-panel": { "": { marginBottom: ["12", 0, 0, 8] } },
			".uni-panel-h": {
				"": {
					backgroundColor: ["#ffffff", 0, 0, 9],
					flexDirection: ["row", 1, 0, 9],
					alignItems: ["center", 1, 0, 9],
					paddingTop: ["12", 0, 0, 9],
					paddingRight: ["12", 0, 0, 9],
					paddingBottom: ["12", 0, 0, 9],
					paddingLeft: ["12", 0, 0, 9],
				},
			},
			".uni-panel-h-on": { "": { backgroundColor: ["#f0f0f0", 0, 0, 11] } },
			".uni-panel-text": { "": { flex: [1, 0, 0, 12], color: ["#000000", 0, 0, 12], fontSize: ["14", 0, 0, 12], fontWeight: ["normal", 0, 0, 12] } },
			".uni-panel-icon": {
				"": {
					marginLeft: ["15", 0, 0, 13],
					color: ["#999999", 0, 0, 13],
					fontSize: ["14", 0, 0, 13],
					fontWeight: ["normal", 0, 0, 13],
					transform: ["rotate(0deg)", 0, 0, 13],
					transitionDuration: [0, 0, 0, 13],
					transitionProperty: ["transform", 0, 0, 13],
				},
			},
			".uni-panel-icon-on": { "": { transform: ["rotate(180deg)", 0, 0, 14] } },
			".uni-navigate-item": {
				"": {
					flexDirection: ["row", 0, 0, 15],
					alignItems: ["center", 0, 0, 15],
					backgroundColor: ["#FFFFFF", 0, 0, 15],
					borderTopStyle: ["solid", 0, 0, 15],
					borderTopColor: ["#f0f0f0", 0, 0, 15],
					borderTopWidth: ["1", 0, 0, 15],
					paddingTop: ["12", 0, 0, 15],
					paddingRight: ["12", 0, 0, 15],
					paddingBottom: ["12", 0, 0, 15],
					paddingLeft: ["12", 0, 0, 15],
					"backgroundColor:active": ["#f8f8f8", 0, 0, 16],
				},
			},
			".uni-navigate-text": { "": { flex: [1, 0, 0, 17], color: ["#000000", 0, 0, 17], fontSize: ["14", 0, 0, 17], fontWeight: ["normal", 0, 0, 17] } },
			".uni-navigate-icon": {
				"": { marginLeft: ["15", 0, 0, 18], color: ["#999999", 0, 0, 18], fontSize: ["14", 0, 0, 18], fontWeight: ["normal", 0, 0, 18] },
			},
			"@VERSION": 2,
		};
	},
	29: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(30),
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
	30: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var i = {
			name: "u-link",
			props: { href: { type: String, default: "" }, text: { type: String, default: "" }, inWhiteList: { type: Boolean, default: !1 } },
			methods: {
				openURL: function () {
					plus.runtime.openURL(this.href);
				},
			},
		};
		e.default = i;
	},
	32: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {});
		var i = function () {
				var t = this.$createElement;
				return (this._self._c || t)(
					"u-text",
					{
						staticStyle: { textDecoration: "underline" },
						appendAsTree: !0,
						attrs: { href: this.href, inWhiteList: this.inWhiteList, append: "tree" },
						on: { click: this.openURL },
					},
					[this._v(this._s(this.text))],
				);
			},
			r = [];
	},
	45: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.install = g),
			(e.mapState = e.mapMutations = e.mapGetters = e.mapActions = e.createNamespacedHelpers = e.Store = e.default = void 0);
		var i = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
		function r(t, e) {
			Object.keys(t).forEach(function (n) {
				return e(t[n], n);
			});
		}
		function o(t) {
			return null !== t && "object" == typeof t;
		}
		var a = function (t, e) {
				(this.runtime = e), (this._children = Object.create(null)), (this._rawModule = t);
				var n = t.state;
				this.state = ("function" == typeof n ? n() : n) || {};
			},
			s = { namespaced: { configurable: !0 } };
		(s.namespaced.get = function () {
			return !!this._rawModule.namespaced;
		}),
			(a.prototype.addChild = function (t, e) {
				this._children[t] = e;
			}),
			(a.prototype.removeChild = function (t) {
				delete this._children[t];
			}),
			(a.prototype.getChild = function (t) {
				return this._children[t];
			}),
			(a.prototype.hasChild = function (t) {
				return t in this._children;
			}),
			(a.prototype.update = function (t) {
				(this._rawModule.namespaced = t.namespaced),
					t.actions && (this._rawModule.actions = t.actions),
					t.mutations && (this._rawModule.mutations = t.mutations),
					t.getters && (this._rawModule.getters = t.getters);
			}),
			(a.prototype.forEachChild = function (t) {
				r(this._children, t);
			}),
			(a.prototype.forEachGetter = function (t) {
				this._rawModule.getters && r(this._rawModule.getters, t);
			}),
			(a.prototype.forEachAction = function (t) {
				this._rawModule.actions && r(this._rawModule.actions, t);
			}),
			(a.prototype.forEachMutation = function (t) {
				this._rawModule.mutations && r(this._rawModule.mutations, t);
			}),
			Object.defineProperties(a.prototype, s);
		var u = function (t) {
			this.register([], t, !1);
		};
		(u.prototype.get = function (t) {
			return t.reduce(function (t, e) {
				return t.getChild(e);
			}, this.root);
		}),
			(u.prototype.getNamespace = function (t) {
				var e = this.root;
				return t.reduce(function (t, n) {
					return t + ((e = e.getChild(n)).namespaced ? n + "/" : "");
				}, "");
			}),
			(u.prototype.update = function (t) {
				!(function t(e, n, i) {
					0;
					if ((n.update(i), i.modules))
						for (var r in i.modules) {
							if (!n.getChild(r)) return void 0;
							t(e.concat(r), n.getChild(r), i.modules[r]);
						}
				})([], this.root, t);
			}),
			(u.prototype.register = function (t, e, n) {
				var i = this;
				void 0 === n && (n = !0);
				var o = new a(e, n);
				0 === t.length ? (this.root = o) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], o);
				e.modules &&
					r(e.modules, function (e, r) {
						i.register(t.concat(r), e, n);
					});
			}),
			(u.prototype.unregister = function (t) {
				var e = this.get(t.slice(0, -1)),
					n = t[t.length - 1];
				e.getChild(n).runtime && e.removeChild(n);
			}),
			(u.prototype.isRegistered = function (t) {
				var e = this.get(t.slice(0, -1)),
					n = t[t.length - 1];
				return e.hasChild(n);
			});
		var c;
		var l = function (t) {
			var e = this;
			void 0 === t && (t = {}), !c && "undefined" != typeof window && window.Vue && g(window.Vue);
			var n = t.plugins;
			void 0 === n && (n = []);
			var r = t.strict;
			void 0 === r && (r = !1),
				(this._committing = !1),
				(this._actions = Object.create(null)),
				(this._actionSubscribers = []),
				(this._mutations = Object.create(null)),
				(this._wrappedGetters = Object.create(null)),
				(this._modules = new u(t)),
				(this._modulesNamespaceMap = Object.create(null)),
				(this._subscribers = []),
				(this._watcherVM = new c()),
				(this._makeLocalGettersCache = Object.create(null));
			var o = this,
				a = this.dispatch,
				s = this.commit;
			(this.dispatch = function (t, e) {
				return a.call(o, t, e);
			}),
				(this.commit = function (t, e, n) {
					return s.call(o, t, e, n);
				}),
				(this.strict = r);
			var l = this._modules.root.state;
			m(this, l, [], this._modules.root),
				h(this, l),
				n.forEach(function (t) {
					return t(e);
				}),
				(void 0 !== t.devtools ? t.devtools : c.config.devtools) &&
					(function (t) {
						i &&
							((t._devtoolHook = i),
							i.emit("vuex:init", t),
							i.on("vuex:travel-to-state", function (e) {
								t.replaceState(e);
							}),
							t.subscribe(
								function (t, e) {
									i.emit("vuex:mutation", t, e);
								},
								{ prepend: !0 },
							),
							t.subscribeAction(
								function (t, e) {
									i.emit("vuex:action", t, e);
								},
								{ prepend: !0 },
							));
					})(this);
		};
		e.Store = l;
		var f = { state: { configurable: !0 } };
		function p(t, e, n) {
			return (
				e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
				function () {
					var n = e.indexOf(t);
					n > -1 && e.splice(n, 1);
				}
			);
		}
		function d(t, e) {
			(t._actions = Object.create(null)),
				(t._mutations = Object.create(null)),
				(t._wrappedGetters = Object.create(null)),
				(t._modulesNamespaceMap = Object.create(null));
			var n = t.state;
			m(t, n, [], t._modules.root, !0), h(t, n, e);
		}
		function h(t, e, n) {
			var i = t._vm;
			(t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
			var o = t._wrappedGetters,
				a = {};
			r(o, function (e, n) {
				(a[n] = (function (t, e) {
					return function () {
						return t(e);
					};
				})(e, t)),
					Object.defineProperty(t.getters, n, {
						get: function () {
							return t._vm[n];
						},
						enumerable: !0,
					});
			});
			var s = c.config.silent;
			(c.config.silent = !0),
				(t._vm = new c({ data: { $$state: e }, computed: a })),
				(c.config.silent = s),
				t.strict &&
					(function (t) {
						t._vm.$watch(
							function () {
								return this._data.$$state;
							},
							function () {
								0;
							},
							{ deep: !0, sync: !0 },
						);
					})(t),
				i &&
					(n &&
						t._withCommit(function () {
							i._data.$$state = null;
						}),
					c.nextTick(function () {
						return i.$destroy();
					}));
		}
		function m(t, e, n, i, r) {
			var o = !n.length,
				a = t._modules.getNamespace(n);
			if ((i.namespaced && (t._modulesNamespaceMap[a], (t._modulesNamespaceMap[a] = i)), !o && !r)) {
				var s = v(e, n.slice(0, -1)),
					u = n[n.length - 1];
				t._withCommit(function () {
					c.set(s, u, i.state);
				});
			}
			var l = (i.context = (function (t, e, n) {
				var i = "" === e,
					r = {
						dispatch: i
							? t.dispatch
							: function (n, i, r) {
									var o = _(n, i, r),
										a = o.payload,
										s = o.options,
										u = o.type;
									return (s && s.root) || (u = e + u), t.dispatch(u, a);
							  },
						commit: i
							? t.commit
							: function (n, i, r) {
									var o = _(n, i, r),
										a = o.payload,
										s = o.options,
										u = o.type;
									(s && s.root) || (u = e + u), t.commit(u, a, s);
							  },
					};
				return (
					Object.defineProperties(r, {
						getters: {
							get: i
								? function () {
										return t.getters;
								  }
								: function () {
										return (function (t, e) {
											if (!t._makeLocalGettersCache[e]) {
												var n = {},
													i = e.length;
												Object.keys(t.getters).forEach(function (r) {
													if (r.slice(0, i) === e) {
														var o = r.slice(i);
														Object.defineProperty(n, o, {
															get: function () {
																return t.getters[r];
															},
															enumerable: !0,
														});
													}
												}),
													(t._makeLocalGettersCache[e] = n);
											}
											return t._makeLocalGettersCache[e];
										})(t, e);
								  },
						},
						state: {
							get: function () {
								return v(t.state, n);
							},
						},
					}),
					r
				);
			})(t, a, n));
			i.forEachMutation(function (e, n) {
				!(function (t, e, n, i) {
					(t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
						n.call(t, i.state, e);
					});
				})(t, a + n, e, l);
			}),
				i.forEachAction(function (e, n) {
					var i = e.root ? n : a + n,
						r = e.handler || e;
					!(function (t, e, n, i) {
						(t._actions[e] || (t._actions[e] = [])).push(function (e) {
							var r,
								o = n.call(t, { dispatch: i.dispatch, commit: i.commit, getters: i.getters, state: i.state, rootGetters: t.getters, rootState: t.state }, e);
							return (
								((r = o) && "function" == typeof r.then) || (o = Promise.resolve(o)),
								t._devtoolHook
									? o.catch(function (e) {
											throw (t._devtoolHook.emit("vuex:error", e), e);
									  })
									: o
							);
						});
					})(t, i, r, l);
				}),
				i.forEachGetter(function (e, n) {
					!(function (t, e, n, i) {
						if (t._wrappedGetters[e]) return void 0;
						t._wrappedGetters[e] = function (t) {
							return n(i.state, i.getters, t.state, t.getters);
						};
					})(t, a + n, e, l);
				}),
				i.forEachChild(function (i, o) {
					m(t, e, n.concat(o), i, r);
				});
		}
		function v(t, e) {
			return e.reduce(function (t, e) {
				return t[e];
			}, t);
		}
		function _(t, e, n) {
			return o(t) && t.type && ((n = e), (e = t), (t = t.type)), { type: t, payload: e, options: n };
		}
		function g(t) {
			(c && t === c) ||
				(function (t) {
					if (Number(t.version.split(".")[0]) >= 2) t.mixin({ beforeCreate: n });
					else {
						var e = t.prototype._init;
						t.prototype._init = function (t) {
							void 0 === t && (t = {}), (t.init = t.init ? [n].concat(t.init) : n), e.call(this, t);
						};
					}
					function n() {
						var t = this.$options;
						t.store ? (this.$store = "function" == typeof t.store ? t.store() : t.store) : t.parent && t.parent.$store && (this.$store = t.parent.$store);
					}
				})((c = t));
		}
		(f.state.get = function () {
			return this._vm._data.$$state;
		}),
			(f.state.set = function (t) {
				0;
			}),
			(l.prototype.commit = function (t, e, n) {
				var i = this,
					r = _(t, e, n),
					o = r.type,
					a = r.payload,
					s = (r.options, { type: o, payload: a }),
					u = this._mutations[o];
				u &&
					(this._withCommit(function () {
						u.forEach(function (t) {
							t(a);
						});
					}),
					this._subscribers.slice().forEach(function (t) {
						return t(s, i.state);
					}));
			}),
			(l.prototype.dispatch = function (t, e) {
				var n = this,
					i = _(t, e),
					r = i.type,
					o = i.payload,
					a = { type: r, payload: o },
					s = this._actions[r];
				if (s) {
					try {
						this._actionSubscribers
							.slice()
							.filter(function (t) {
								return t.before;
							})
							.forEach(function (t) {
								return t.before(a, n.state);
							});
					} catch (t) {
						0;
					}
					var u =
						s.length > 1
							? Promise.all(
									s.map(function (t) {
										return t(o);
									}),
							  )
							: s[0](o);
					return new Promise(function (t, e) {
						u.then(
							function (e) {
								try {
									n._actionSubscribers
										.filter(function (t) {
											return t.after;
										})
										.forEach(function (t) {
											return t.after(a, n.state);
										});
								} catch (t) {
									0;
								}
								t(e);
							},
							function (t) {
								try {
									n._actionSubscribers
										.filter(function (t) {
											return t.error;
										})
										.forEach(function (e) {
											return e.error(a, n.state, t);
										});
								} catch (t) {
									0;
								}
								e(t);
							},
						);
					});
				}
			}),
			(l.prototype.subscribe = function (t, e) {
				return p(t, this._subscribers, e);
			}),
			(l.prototype.subscribeAction = function (t, e) {
				return p("function" == typeof t ? { before: t } : t, this._actionSubscribers, e);
			}),
			(l.prototype.watch = function (t, e, n) {
				var i = this;
				return this._watcherVM.$watch(
					function () {
						return t(i.state, i.getters);
					},
					e,
					n,
				);
			}),
			(l.prototype.replaceState = function (t) {
				var e = this;
				this._withCommit(function () {
					e._vm._data.$$state = t;
				});
			}),
			(l.prototype.registerModule = function (t, e, n) {
				void 0 === n && (n = {}),
					"string" == typeof t && (t = [t]),
					this._modules.register(t, e),
					m(this, this.state, t, this._modules.get(t), n.preserveState),
					h(this, this.state);
			}),
			(l.prototype.unregisterModule = function (t) {
				var e = this;
				"string" == typeof t && (t = [t]),
					this._modules.unregister(t),
					this._withCommit(function () {
						var n = v(e.state, t.slice(0, -1));
						c.delete(n, t[t.length - 1]);
					}),
					d(this);
			}),
			(l.prototype.hasModule = function (t) {
				return "string" == typeof t && (t = [t]), this._modules.isRegistered(t);
			}),
			(l.prototype.hotUpdate = function (t) {
				this._modules.update(t), d(this, !0);
			}),
			(l.prototype._withCommit = function (t) {
				var e = this._committing;
				(this._committing = !0), t(), (this._committing = e);
			}),
			Object.defineProperties(l.prototype, f);
		var y = S(function (t, e) {
			var n = {};
			return (
				C(e).forEach(function (e) {
					var i = e.key,
						r = e.val;
					(n[i] = function () {
						var e = this.$store.state,
							n = this.$store.getters;
						if (t) {
							var i = j(this.$store, "mapState", t);
							if (!i) return;
							(e = i.context.state), (n = i.context.getters);
						}
						return "function" == typeof r ? r.call(this, e, n) : e[r];
					}),
						(n[i].vuex = !0);
				}),
				n
			);
		});
		e.mapState = y;
		var b = S(function (t, e) {
			var n = {};
			return (
				C(e).forEach(function (e) {
					var i = e.key,
						r = e.val;
					n[i] = function () {
						for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
						var i = this.$store.commit;
						if (t) {
							var o = j(this.$store, "mapMutations", t);
							if (!o) return;
							i = o.context.commit;
						}
						return "function" == typeof r ? r.apply(this, [i].concat(e)) : i.apply(this.$store, [r].concat(e));
					};
				}),
				n
			);
		});
		e.mapMutations = b;
		var w = S(function (t, e) {
			var n = {};
			return (
				C(e).forEach(function (e) {
					var i = e.key,
						r = e.val;
					(r = t + r),
						(n[i] = function () {
							if (!t || j(this.$store, "mapGetters", t)) return this.$store.getters[r];
						}),
						(n[i].vuex = !0);
				}),
				n
			);
		});
		e.mapGetters = w;
		var O = S(function (t, e) {
			var n = {};
			return (
				C(e).forEach(function (e) {
					var i = e.key,
						r = e.val;
					n[i] = function () {
						for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
						var i = this.$store.dispatch;
						if (t) {
							var o = j(this.$store, "mapActions", t);
							if (!o) return;
							i = o.context.dispatch;
						}
						return "function" == typeof r ? r.apply(this, [i].concat(e)) : i.apply(this.$store, [r].concat(e));
					};
				}),
				n
			);
		});
		e.mapActions = O;
		var x = function (t) {
			return { mapState: y.bind(null, t), mapGetters: w.bind(null, t), mapMutations: b.bind(null, t), mapActions: O.bind(null, t) };
		};
		function C(t) {
			return (function (t) {
				return Array.isArray(t) || o(t);
			})(t)
				? Array.isArray(t)
					? t.map(function (t) {
							return { key: t, val: t };
					  })
					: Object.keys(t).map(function (e) {
							return { key: e, val: t[e] };
					  })
				: [];
		}
		function S(t) {
			return function (e, n) {
				return "string" != typeof e ? ((n = e), (e = "")) : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n);
			};
		}
		function j(t, e, n) {
			return t._modulesNamespaceMap[n];
		}
		e.createNamespacedHelpers = x;
		var $ = { Store: l, install: g, version: "3.4.0", mapState: y, mapMutations: b, mapGetters: w, mapActions: O, createNamespacedHelpers: x };
		e.default = $;
	},
	470: function (t, e, n) {
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
		var i = { uLink: n(58).default },
			r = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						{ staticClass: ["uni-container"] },
						[
							t.hasLeftWin
								? t._e()
								: n(
										"view",
										{ staticClass: ["uni-header-logo"] },
										[n("u-image", { staticClass: ["uni-header-image"], attrs: { src: "/static/templateIndex.png" } })],
										1,
								  ),
							t.hasLeftWin
								? t._e()
								: n(
										"view",
										{ staticClass: ["uni-hello-text"] },
										[
											n("u-text", { staticClass: ["hello-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
												t._v("\u4ee5\u4e0b\u662f\u90e8\u5206\u6a21\u677f\u793a\u4f8b\uff0c\u66f4\u591a\u6a21\u677f\u89c1\u63d2\u4ef6\u5e02\u573a\uff1a"),
											]),
											n("u-link", {
												staticClass: ["hello-link"],
												attrs: { href: "https://ext.dcloud.net.cn", text: "https://ext.dcloud.net.cn", inWhiteList: !0 },
											}),
										],
										1,
								  ),
							t._l(t.list, function (e, i) {
								return n("view", { key: e.id, staticClass: ["uni-panel"], class: { "pc-hide": -1 !== t.hideList.indexOf(e.url) && t.hasLeftWin } }, [
									n(
										"view",
										{
											staticClass: ["uni-panel-h"],
											class: { "left-win-active": t.leftWinActive === e.url && t.hasLeftWin, "uni-panel-h-on": t.activeOpen === e.id },
											on: {
												click: function (n) {
													t.triggerCollapse(i, e.id);
												},
											},
										},
										[
											n("u-text", { staticClass: ["uni-panel-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.name))]),
											n(
												"u-text",
												{
													staticClass: ["uni-panel-icon", "uni-icon"],
													class: t.activeOpen === e.id ? "uni-panel-icon-on" : "",
													appendAsTree: !0,
													attrs: { append: "tree" },
												},
												[t._v(t._s(e.pages ? "\ue581" : "\ue470"))],
											),
										],
									),
									t.activeOpen === e.id
										? n(
												"view",
												{ staticClass: ["uni-panel-c"] },
												t._l(e.pages, function (e, i) {
													return n(
														"view",
														{
															key: i,
															staticClass: ["uni-navigate-item"],
															class: {
																"left-win-active": t.leftWinActive === e.url && t.hasLeftWin,
																"pc-hide": -1 !== t.hideList.indexOf(e.url) && t.hasLeftWin,
															},
															on: {
																click: function (n) {
																	t.goDetailPage(e);
																},
															},
														},
														[
															n("u-text", { staticClass: ["uni-navigate-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
																t._v(t._s(e.name ? e.name : e)),
															]),
															n("u-text", { staticClass: ["uni-navigate-icon", "uni-icon"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\ue470")]),
														],
													);
												}),
												0,
										  )
										: t._e(),
								]);
							}),
						],
						2,
					),
				]);
			},
			o = [];
	},
	545: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(139),
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
	58: function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(32),
			r = n(29);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(r.default, i.b, i.c, !1, null, null, "5f084aef", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style);
		}).call(s),
			(e.default = s.exports);
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	645: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var i = n(70);
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
			(i.default.route = "pages/tabBar/template/template"),
			(i.default.el = "#root"),
			new Vue(i.default);
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
	70: function (t, e, n) {
		"use strict";
		var i = n(470),
			r = n(137),
			o = n(0);
		var a = Object(o.a)(r.default, i.b, i.c, !1, null, null, "7b65efdf", !1, i.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(545).default, this.options.style) : Object.assign(this.options.style, n(545).default);
		}).call(a),
			(e.default = a.exports);
	},
});
