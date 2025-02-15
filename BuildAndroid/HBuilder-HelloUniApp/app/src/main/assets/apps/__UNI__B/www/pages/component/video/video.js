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
		n((n.s = 641));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, i, r, u, a, s, c) {
			var l,
				f = "function" == typeof t ? t.options : t;
			if (s) {
				f.components || (f.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var d in s) p.call(s, d) && !p.call(f.components, d) && (f.components[d] = s[d]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(c)),
				e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
				o && (f.functional = !0),
				r && (f._scopeId = "data-v-" + r),
				u
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								i && i.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(u);
					  }),
					  (f._ssrRegister = l))
					: i &&
					  (l = a
							? function () {
									i.call(this, this.$root.$options.shadowRoot);
							  }
							: i),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var v = f.render;
					f.render = function (t, e) {
						return l.call(e), v(t, e);
					};
				} else {
					var _ = f.beforeCreate;
					f.beforeCreate = _ ? [].concat(_, l) : [l];
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
	125: function (t, e, n) {
		"use strict";
		var o = n(126),
			i = n.n(o);
		e.default = i.a;
	},
	126: function (t, e, n) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var n = {
				data: {
					src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",
					fil: !0,
					list: [{ text: "\u8981\u663e\u793a\u7684\u6587\u672c", color: "#FF0000", time: 9 }],
				},
				onReady: function () {
					this.context = uni.createVideoContext("video1", this);
				},
				methods: {
					onstart: function (e) {
						t("log", "onstart:" + JSON.stringify(e), " at pages/component/video/video.nvue:34");
					},
					onpause: function (e) {
						t("log", "onpause:" + JSON.stringify(e), " at pages/component/video/video.nvue:37");
					},
					onfinish: function (e) {
						t("log", "onfinish:" + JSON.stringify(e), " at pages/component/video/video.nvue:40");
					},
					onfail: function (e) {
						t("log", "onfail:" + JSON.stringify(e), " at pages/component/video/video.nvue:43");
					},
					fullscreenchange: function (e) {
						t("log", "fullscreenchange:" + JSON.stringify(e), " at pages/component/video/video.nvue:46");
					},
					waiting: function (e) {
						t("log", "waiting:" + JSON.stringify(e), " at pages/component/video/video.nvue:49");
					},
					timeupdate: function (e) {
						t("log", "timeupdate:" + JSON.stringify(e), " at pages/component/video/video.nvue:52");
					},
					play: function () {
						this.context.play();
					},
					pause: function () {
						this.context.pause();
					},
					seek: function () {
						this.context.seek(20);
					},
					stop: function () {
						this.context.stop();
					},
					fullScreen: function () {
						this.context.requestFullScreen({ direction: 90 });
					},
					exitFullScreen: function () {
						this.context.exitFullScreen();
					},
					sendDanmu: function () {
						this.context.sendDanmu({ text: "\u8981\u663e\u793a\u7684\u5f39\u5e55\u6587\u672c", color: "#FF0000" });
					},
					playbackRate: function () {
						this.context.playbackRate(2);
					},
				},
			};
			e.default = n;
		}).call(this, n(14).default);
	},
	127: function (t, e) {
		t.exports = {
			".video": { "": { width: ["750rpx", 0, 0, 0], height: ["400rpx", 0, 0, 0], backgroundColor: ["#808080", 0, 0, 0] } },
			".btn": { "": { marginTop: ["5", 0, 0, 1], marginBottom: ["5", 0, 0, 1] } },
			"@VERSION": 2,
		};
	},
	14: function (t, e, n) {
		"use strict";
		function o(t) {
			var e = Object.prototype.toString.call(t);
			return e.substring(8, e.length - 1);
		}
		function i() {
			return "string" == typeof __channelId__ && __channelId__;
		}
		function r(t, e) {
			switch (o(e)) {
				case "Function":
					return "function() { [native code] }";
				default:
					return e;
			}
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.log = function (t) {
				for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
				console[t].apply(console, n);
			}),
			(e.default = function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var u = e.shift();
				if (i()) return e.push(e.pop().replace("at ", "uni-app:///")), console[u].apply(console, e);
				var a = e.map(function (t) {
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
							var n = o(t).toUpperCase();
							t = "NUMBER" === n || "BOOLEAN" === n ? "---BEGIN:" + n + "---" + t + "---END:" + n + "---" : String(t);
						}
						return t;
					}),
					s = "";
				if (a.length > 1) {
					var c = a.pop();
					(s = a.join("---COMMA---")), 0 === c.indexOf(" at ") ? (s += c) : (s += "---COMMA---" + c);
				} else s = a[0];
				console[u](s);
			});
	},
	478: function (t, e, n) {
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
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"div",
						[
							n("u-video", {
								staticClass: ["video"],
								attrs: {
									id: "video1",
									src: t.src,
									autoplay: "false",
									duration: "",
									controls: "true",
									danmuList: t.list,
									danmuBtn: "true",
									enableDanmu: "true",
									loop: !0,
									muted: "true",
									initialTime: "",
									direction: "-90",
									showMuteBtn: "true",
								},
								on: {
									play: t.onstart,
									pause: t.onpause,
									ended: t.onfinish,
									error: t.onfail,
									waiting: t.waiting,
									timeupdate: t.timeupdate,
									fullscreenchange: t.fullscreenchange,
								},
							}),
							n("button", { staticClass: ["btn"], on: { click: t.play } }, [t._v("\u64ad\u653e")]),
							n("button", { staticClass: ["btn"], on: { click: t.pause } }, [t._v("\u6682\u505c")]),
							n("button", { staticClass: ["btn"], on: { click: t.seek } }, [t._v("\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e")]),
							n("button", { staticClass: ["btn"], on: { click: t.stop } }, [t._v("\u505c\u6b62")]),
							n("button", { staticClass: ["btn"], on: { click: t.fullScreen } }, [t._v("\u5168\u5c4f")]),
							n("button", { staticClass: ["btn"], on: { click: t.exitFullScreen } }, [t._v("\u9000\u51fa\u5168\u5c4f")]),
							n("button", { staticClass: ["btn"], on: { click: t.playbackRate } }, [t._v("\u8bbe\u7f6e\u500d\u901f")]),
							n("button", { staticClass: ["btn"], on: { click: t.sendDanmu } }, [t._v("\u53d1\u9001\u5f39\u5e55")]),
						],
						1,
					),
				]);
			},
			i = [];
	},
	541: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(127),
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
	641: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(66);
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
			(o.default.route = "pages/component/video/video"),
			(o.default.el = "#root"),
			new Vue(o.default);
	},
	66: function (t, e, n) {
		"use strict";
		var o = n(478),
			i = n(125),
			r = n(0);
		var u = Object(r.a)(i.default, o.b, o.c, !1, null, null, "38fb8f54", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(541).default, this.options.style) : Object.assign(this.options.style, n(541).default);
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
});
