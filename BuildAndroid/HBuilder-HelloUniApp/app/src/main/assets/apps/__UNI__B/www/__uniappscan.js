!(function (e) {
	var t = {};
	function n(a) {
		if (t[a]) return t[a].exports;
		var o = (t[a] = { i: a, l: !1, exports: {} });
		return e[a].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, a) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
		}),
		(n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var a = Object.create(null);
			if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
				for (var o in e)
					n.d(
						a,
						o,
						function (t) {
							return e[t];
						}.bind(null, o),
					);
			return a;
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, "a", t), t;
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ""),
		n((n.s = 43));
})([
	function (e, t) {
		e.exports = {};
	},
	function (e, t, n) {
		"use strict";
		function a(e, t, n, a, o, r, i, s, c, u) {
			var l,
				f = "function" == typeof e ? e.options : e;
			if (c) {
				f.components || (f.components = {});
				var d = Object.prototype.hasOwnProperty;
				for (var p in c) d.call(c, p) && !d.call(f.components, p) && (f.components[p] = c[p]);
			}
			if (
				(u &&
					((u.beforeCreate || (u.beforeCreate = [])).unshift(function () {
						this[u.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(u)),
				t && ((f.render = t), (f.staticRenderFns = n), (f._compiled = !0)),
				a && (f.functional = !0),
				r && (f._scopeId = "data-v-" + r),
				i
					? ((l = function (e) {
							(e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(e = __VUE_SSR_CONTEXT__),
								o && o.call(this, e),
								e && e._registeredComponents && e._registeredComponents.add(i);
					  }),
					  (f._ssrRegister = l))
					: o &&
					  (l = s
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var g = f.render;
					f.render = function (e, t) {
						return l.call(t), g(e, t);
					};
				} else {
					var h = f.beforeCreate;
					f.beforeCreate = h ? [].concat(h, l) : [l];
				}
			return { exports: e, options: f };
		}
		n.d(t, "a", function () {
			return a;
		});
	},
	function (e, t, n) {
		"use strict";
		var a;
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.weexPlus = t.default = void 0),
			(a =
				"function" == typeof getUni
					? getUni
					: function () {
							var e = function (e) {
									return "function" == typeof e;
								},
								t = function (e) {
									return e
										.then(function (e) {
											return [null, e];
										})
										.catch(function (e) {
											return [e];
										});
								},
								n = /^\$|^on|^create|Sync$|Manager$|^pause/,
								a = [
									"os",
									"getCurrentSubNVue",
									"getSubNVueById",
									"stopRecord",
									"stopVoice",
									"stopBackgroundAudio",
									"stopPullDownRefresh",
									"hideKeyboard",
									"hideToast",
									"hideLoading",
									"showNavigationBarLoading",
									"hideNavigationBarLoading",
									"canIUse",
									"navigateBack",
									"closeSocket",
									"pageScrollTo",
									"drawCanvas",
								],
								r = function (e) {
									return (!n.test(e) || "createBLEConnection" === e) && !~a.indexOf(e);
								},
								i = function (n) {
									return function () {
										for (var a = arguments.length, o = Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) o[r - 1] = arguments[r];
										var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
										return e(i.success) || e(i.fail) || e(i.complete)
											? n.apply(void 0, [i].concat(o))
											: t(
													new Promise(function (e, t) {
														n.apply(void 0, [Object.assign({}, i, { success: e, fail: t })].concat(o)),
															(Promise.prototype.finally = function (e) {
																var t = this.constructor;
																return this.then(
																	function (n) {
																		return t.resolve(e()).then(function () {
																			return n;
																		});
																	},
																	function (n) {
																		return t.resolve(e()).then(function () {
																			throw n;
																		});
																	},
																);
															});
													}),
											  );
									};
								},
								s = [],
								c = void 0;
							function u(e) {
								s.forEach(function (t) {
									return t({ origin: c, data: e });
								});
							}
							var l = o.webview.currentWebview().id,
								f = new BroadcastChannel("UNI-APP-SUBNVUE");
							function d(e) {
								var t = o.webview.getWebviewById(e);
								return (
									t &&
										!t.$processed &&
										(function (e) {
											e.$processed = !0;
											var t = o.webview.currentWebview().id === e.id,
												n = "uniNView" === e.__uniapp_origin_type && e.__uniapp_origin_id,
												a = e.id;
											if (
												((e.postMessage = function (e) {
													n ? f.postMessage({ data: e, to: t ? n : a }) : _({ type: "UniAppSubNVue", data: e });
												}),
												(e.onMessage = function (e) {
													s.push(e);
												}),
												e.__uniapp_mask_id)
											) {
												c = e.__uniapp_host;
												var r = e.__uniapp_mask,
													i = o.webview.getWebviewById(e.__uniapp_mask_id);
												i = i.parent() || i;
												var u = e.show,
													l = e.hide,
													d = e.close,
													p = function () {
														i.setStyle({ mask: r });
													},
													g = function () {
														i.setStyle({ mask: "none" });
													};
												(e.show = function () {
													p();
													for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
													return u.apply(e, n);
												}),
													(e.hide = function () {
														g();
														for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
														return l.apply(e, n);
													}),
													(e.close = function () {
														g();
														for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
														return d.apply(e, n);
													});
											}
										})(t),
									t
								);
							}
							f.onmessage = function (e) {
								e.data.to === l && u(e.data.data);
							};
							var p = weex.requireModule("plus"),
								g = weex.requireModule("globalEvent"),
								h = 0,
								v = {};
							g.addEventListener("plusMessage", function (e) {
								"UniAppJsApi" === e.data.type
									? y(e.data.id, e.data.data)
									: "UniAppSubNVue" === e.data.type
									? u(e.data.data, e.data.options)
									: "onNavigationBarButtonTap" === e.data.type
									? "function" == typeof b && b(e.data.data)
									: "onNavigationBarSearchInputChanged" === e.data.type
									? "function" == typeof S && S(e.data.data)
									: "onNavigationBarSearchInputConfirmed" === e.data.type
									? "function" == typeof C && C(e.data.data)
									: "onNavigationBarSearchInputClicked" === e.data.type && "function" == typeof w && w(e.data.data);
							});
							var y = function (e, t) {
									var n = v[e];
									n ? (n(t), n.keepAlive || delete v[e]) : console.error("callback[" + e + "] is undefined");
								},
								m = function (t) {
									var n,
										a,
										o = t.id,
										r = t.type,
										i = t.params;
									(v[o] =
										((a = function (t) {
											e(n)
												? n(t)
												: n &&
												  (~t.errMsg.indexOf(":ok") ? e(n.success) && n.success(t) : ~t.errMsg.indexOf(":fail") && e(n.fail) && n.fail(t),
												  e(n.complete) && n.complete(t));
										}),
										(e((n = i)) || (n && e(n.callback))) && (a.keepAlive = !0),
										a)),
										p.postMessage({ id: o, type: r, params: i }, "__uniapp__service");
								};
							function _(e) {
								p.postMessage(e, "__uniapp__service");
							}
							var A = function (e) {
									return function (t) {
										m({ id: h++, type: e, params: t });
									};
								},
								b = void 0,
								S = void 0,
								C = void 0,
								w = void 0;
							function E(e) {
								b = e;
							}
							function M(e) {
								S = e;
							}
							function k(e) {
								C = e;
							}
							function O(e) {
								w = e;
							}
							function B(e) {
								return weex.requireModule(e);
							}
							var I = weex.requireModule("dom"),
								P = weex.requireModule("globalEvent"),
								T = [];
							function D(e) {
								"function" == typeof e && (this.isUniAppReady ? e() : T.push(e));
							}
							P.addEventListener("plusMessage", function (e) {
								"UniAppReady" === e.data.type &&
									((D.isUniAppReady = !0),
									T.length &&
										(T.forEach(function (e) {
											return e();
										}),
										(T = [])));
							});
							var N =
									"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
										? function (e) {
												return typeof e;
										  }
										: function (e) {
												return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
										  },
								x = weex.requireModule("stream"),
								U = function (e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
										n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/x-www-form-urlencoded";
									return "object" === (void 0 === e ? "undefined" : N(e))
										? "POST" === t.toUpperCase() && "application/json" === n.toLowerCase()
											? JSON.stringify(e)
											: Object.keys(e)
													.map(function (t) {
														return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
													})
													.join("&")
										: e;
								},
								R = weex.requireModule("plusstorage"),
								V = weex.requireModule("clipboard"),
								F = (function () {
									if ("function" == typeof getUniEmitter) return getUniEmitter;
									var e = {
										$on: function () {
											console.warn("uni.$on failed");
										},
										$off: function () {
											console.warn("uni.$off failed");
										},
										$once: function () {
											console.warn("uni.$once failed");
										},
										$emit: function () {
											console.warn("uni.$emit failed");
										},
									};
									return function () {
										return e;
									};
								})();
							function L(e, t, n) {
								return e[t].apply(e, n);
							}
							var j = Object.freeze({
									loadFontFace: function (t) {
										var n = t.family,
											a = t.source,
											o = (t.desc, t.success),
											r = (t.fail, t.complete);
										I.addRule("fontFace", { fontFamily: n, src: a.replace(/"/g, "'") });
										var i = { errMsg: "loadFontFace:ok", status: "loaded" };
										e(o) && o(i), e(r) && r(i);
									},
									ready: D,
									request: function (t) {
										var n = t.url,
											a = t.data,
											o = t.header,
											r = t.method,
											i = void 0 === r ? "GET" : r,
											s = t.dataType,
											c = void 0 === s ? "json" : s,
											u = (t.responseType, t.success),
											l = t.fail,
											f = t.complete,
											d = !1,
											p = !1,
											g = {};
										if (o) for (var h in o) p || "content-type" !== h.toLowerCase() ? (g[h] = o[h]) : ((p = !0), (g["Content-Type"] = o[h]));
										return (
											"GET" === i && a && (n = n + (~n.indexOf("?") ? ("&" === n.substr(-1) || "?" === n.substr(-1) ? "" : "&") : "?") + U(a)),
											x.fetch(
												{ url: n, method: i, headers: g, type: "json" === c ? "json" : "text", body: "GET" !== i ? U(a, i, g["Content-Type"]) : "" },
												function (t) {
													var n = t.status,
														a = (t.ok, t.statusText, t.data),
														o = t.headers,
														r = {};
													!n || -1 === n || d ? ((r.errMsg = "request:fail"), e(l) && l(r)) : ((r.data = a), (r.statusCode = n), (r.header = o), e(u) && u(r)),
														e(f) && f(r);
												},
											),
											{
												abort: function () {
													d = !0;
												},
											}
										);
									},
									getStorage: function (t) {
										var n = t.key,
											a = (t.data, t.success),
											o = t.fail,
											r = t.complete;
										R.getItem(n + "__TYPE", function (t) {
											if ("success" === t.result) {
												var i = t.data;
												R.getItem(n, function (t) {
													if ("success" === t.result) {
														var n = t.data;
														i && n
															? ("String" !== i && (n = JSON.parse(n)), e(a) && a({ errMsg: "getStorage:ok", data: n }))
															: ((t.errMsg = "setStorage:fail"), e(o) && o(t));
													} else (t.errMsg = "setStorage:fail"), e(o) && o(t);
													e(r) && r(t);
												});
											} else (t.errMsg = "setStorage:fail"), e(o) && o(t), e(r) && r(t);
										});
									},
									setStorage: function (t) {
										var n = t.key,
											a = t.data,
											o = t.success,
											r = t.fail,
											i = t.complete,
											s = "String";
										"object" === (void 0 === a ? "undefined" : N(a)) && ((s = "Object"), (a = JSON.stringify(a))),
											R.setItem(n, a, function (t) {
												"success" === t.result
													? R.setItem(n + "__TYPE", s, function (t) {
															"success" === t.result ? e(o) && o({ errMsg: "setStorage:ok" }) : ((t.errMsg = "setStorage:fail"), e(r) && r(t));
													  })
													: ((t.errMsg = "setStorage:fail"), e(r) && r(t)),
													e(i) && i(t);
											});
									},
									removeStorage: function (t) {
										var n = t.key,
											a = (t.data, t.success),
											o = t.fail,
											r = t.complete;
										R.removeItem(n, function (t) {
											"success" === t.result ? e(a) && a({ errMsg: "removeStorage:ok" }) : ((t.errMsg = "removeStorage:fail"), e(o) && o(t)), e(r) && r(t);
										}),
											R.removeItem(n + "__TYPE");
									},
									clearStorage: function (e) {
										e.key, e.data, e.success, e.fail, e.complete;
									},
									getClipboardData: function (t) {
										var n = t.success,
											a = (t.fail, t.complete);
										V.getString(function (t) {
											var o = { errMsg: "getClipboardData:ok", data: t.data };
											e(n) && n(o), e(a) && a(o);
										});
									},
									setClipboardData: function (t) {
										var n = t.data,
											a = t.success,
											o = (t.fail, t.complete),
											r = { errMsg: "setClipboardData:ok" };
										V.setString(n), e(a) && a(r), e(o) && o(r);
									},
									onSubNVueMessage: u,
									getSubNVueById: d,
									getCurrentSubNVue: function () {
										return d(o.webview.currentWebview().id);
									},
									$on: function () {
										return L(F(), "$on", [].concat(Array.prototype.slice.call(arguments)));
									},
									$off: function () {
										return L(F(), "$off", [].concat(Array.prototype.slice.call(arguments)));
									},
									$once: function () {
										return L(F(), "$once", [].concat(Array.prototype.slice.call(arguments)));
									},
									$emit: function () {
										return L(F(), "$emit", [].concat(Array.prototype.slice.call(arguments)));
									},
								}),
								$ = { os: { nvue: !0 } },
								J = {};
							return (
								"undefined" != typeof Proxy
									? (J = new Proxy(
											{},
											{
												get: function (e, t) {
													if ("os" === t) return { nvue: !0 };
													if ("postMessage" === t) return _;
													if ("requireNativePlugin" === t) return B;
													if ("onNavigationBarButtonTap" === t) return E;
													if ("onNavigationBarSearchInputChanged" === t) return M;
													if ("onNavigationBarSearchInputConfirmed" === t) return k;
													if ("onNavigationBarSearchInputClicked" === t) return O;
													var n = j[t];
													return n || (n = A(t)), r(t) ? i(n) : n;
												},
											},
									  ))
									: (Object.keys($).forEach(function (e) {
											J[e] = $[e];
									  }),
									  (J.postMessage = _),
									  (J.requireNativePlugin = B),
									  (J.onNavigationBarButtonTap = E),
									  (J.onNavigationBarSearchInputChanged = M),
									  (J.onNavigationBarSearchInputConfirmed = k),
									  (J.onNavigationBarSearchInputClicked = O),
									  Object.keys({
											uploadFile: !0,
											downloadFile: !0,
											chooseImage: !0,
											previewImage: !0,
											getImageInfo: !0,
											saveImageToPhotosAlbum: !0,
											chooseVideo: !0,
											saveVideoToPhotosAlbum: !0,
											saveFile: !0,
											getSavedFileList: !0,
											getSavedFileInfo: !0,
											removeSavedFile: !0,
											openDocument: !0,
											setStorage: !0,
											getStorage: !0,
											getStorageInfo: !0,
											removeStorage: !0,
											clearStorage: !0,
											getLocation: !0,
											chooseLocation: !0,
											openLocation: !0,
											getSystemInfo: !0,
											getNetworkType: !0,
											makePhoneCall: !0,
											scanCode: !0,
											setScreenBrightness: !0,
											getScreenBrightness: !0,
											setKeepScreenOn: !0,
											vibrateLong: !0,
											vibrateShort: !0,
											addPhoneContact: !0,
											showToast: !0,
											showLoading: !0,
											hideToast: !0,
											hideLoading: !0,
											showModal: !0,
											showActionSheet: !0,
											setNavigationBarTitle: !0,
											setNavigationBarColor: !0,
											navigateTo: !0,
											redirectTo: !0,
											reLaunch: !0,
											switchTab: !0,
											navigateBack: !0,
											getProvider: !0,
											login: !0,
											getUserInfo: !0,
											share: !0,
											requestPayment: !0,
											subscribePush: !0,
											unsubscribePush: !0,
											onPush: !0,
											offPush: !0,
									  }).forEach(function (e) {
											var t = j[e];
											t || (t = A(e)), r(e) ? (J[e] = i(t)) : (J[e] = t);
									  })),
								J
							);
					  });
		var o = new WeexPlus(weex);
		t.weexPlus = o;
		var r = a(weex, o, BroadcastChannel);
		t.default = r;
	},
	function (e, t, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(4).default, Vue.prototype.__$appStyle__);
	},
	function (e, t, n) {
		"use strict";
		n.r(t);
		var a = n(0),
			o = n.n(a);
		for (var r in a)
			"default" !== r &&
				(function (e) {
					n.d(t, e, function () {
						return a[e];
					});
				})(r);
		t.default = o.a;
	},
	function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
			var n = {
				onLoad: function () {
					this.initMessage();
				},
				methods: {
					initMessage: function () {
						var t = this,
							n = e.webview.currentWebview().extras || {},
							a = n.from,
							o = (n.callback, n.runtime),
							r = n.data,
							i = void 0 === r ? {} : r,
							s = n.useGlobalEvent;
						(this.__from = a),
							(this.__runtime = o),
							(this.__page = e.webview.currentWebview().id),
							(this.__useGlobalEvent = s),
							(this.data = JSON.parse(JSON.stringify(i))),
							e.key.addEventListener("backbutton", function () {
								"function" == typeof t.onClose ? t.onClose() : e.webview.currentWebview().close("auto");
							});
						var c = this,
							u = function (e) {
								var t = e.data && e.data.__message;
								t && c.__onMessageCallback && c.__onMessageCallback(t.data);
							};
						this.__useGlobalEvent ? weex.requireModule("globalEvent").addEventListener("plusMessage", u) : (new BroadcastChannel(this.__page).onmessage = u);
					},
					postMessage: function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							a = JSON.parse(JSON.stringify({ __message: { __page: this.__page, data: t, keep: n } })),
							o = this.__from;
						if ("v8" === this.__runtime)
							if (this.__useGlobalEvent) e.webview.postMessageToUniNView(a, o);
							else {
								var r = new BroadcastChannel(o);
								r.postMessage(a);
							}
						else {
							var i = e.webview.getWebviewById(o);
							i && i.evalJS("__plusMessage&&__plusMessage(".concat(JSON.stringify({ data: a }), ")"));
						}
					},
					onMessage: function (e) {
						this.__onMessageCallback = e;
					},
				},
			};
			t.default = n;
		}).call(this, n(2).weexPlus);
	},
	function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
			var n = {
				data: function () {
					return {
						locale: "en",
						fallbackLocale: "en",
						localization: { en: { done: "OK", cancel: "Cancel" }, zh: { done: "完成", cancel: "取消" }, "zh-hans": {}, "zh-hant": {}, messages: {} },
					};
				},
				onLoad: function () {
					this.initLocale();
				},
				created: function () {
					this.initLocale();
				},
				methods: {
					initLocale: function () {
						if (!this.__initLocale) {
							this.__initLocale = !0;
							var t = (e.webview.currentWebview().extras || {}).data || {};
							if ((t.messages && (this.localization.messages = t.messages), t.locale)) this.locale = t.locale.toLowerCase();
							else {
								var n = e.os.language.toLowerCase().split("/")[0].replace("_", "-").split("-"),
									a = n[1];
								a && (n[1] = { chs: "hans", cn: "hans", sg: "hans", cht: "hant", tw: "hant", hk: "hant", mo: "hant" }[a] || a),
									(n.length = n.length > 2 ? 2 : n.length),
									(this.locale = n.join("-"));
							}
						}
					},
					localize: function (e) {
						var t = this.locale,
							n = t.split("-")[0],
							a = this.fallbackLocale,
							o = this.localization;
						function r(e) {
							return o[e] || {};
						}
						return r("messages")[e] || r(t)[e] || r(n)[e] || r(a)[e] || e;
					},
				},
			};
			t.default = n;
		}).call(this, n(2).weexPlus);
	},
	,
	,
	function (e, t, n) {
		"use strict";
		var a = n(33),
			o = n(18),
			r = n(1);
		var i = Object(r.a)(o.default, a.b, a.c, !1, null, null, "6af04a36", !1, a.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(38).default, this.options.style) : Object.assign(this.options.style, n(38).default);
		}).call(i),
			(t.default = i.exports);
	},
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		var a = n(19),
			o = n.n(a);
		t.default = o.a;
	},
	function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
			var a,
				o = i(n(5)),
				r = i(n(6));
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			function s(e, t, n) {
				return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			var c = e.barcode,
				u = {
					qrCode: [c.QR, c.AZTEC, c.MAXICODE],
					barCode: [c.EAN13, c.EAN8, c.UPCA, c.UPCE, c.CODABAR, c.CODE128, c.CODE39, c.CODE93, c.ITF, c.RSS14, c.RSSEXPANDED],
					datamatrix: [c.DATAMATRIX],
					pdf417: [c.PDF417],
				},
				l =
					(s((a = {}), c.QR, "QR_CODE"),
					s(a, c.EAN13, "EAN_13"),
					s(a, c.EAN8, "EAN_8"),
					s(a, c.DATAMATRIX, "DATA_MATRIX"),
					s(a, c.UPCA, "UPC_A"),
					s(a, c.UPCE, "UPC_E"),
					s(a, c.CODABAR, "CODABAR"),
					s(a, c.CODE39, "CODE_39"),
					s(a, c.CODE93, "CODE_93"),
					s(a, c.CODE128, "CODE_128"),
					s(a, c.ITF, "CODE_25"),
					s(a, c.PDF417, "PDF_417"),
					s(a, c.AZTEC, "AZTEC"),
					s(a, c.RSS14, "RSS_14"),
					s(a, c.RSSEXPANDED, "RSSEXPANDED"),
					a),
				f = {
					mixins: [o.default, r.default],
					data: {
						filters: [0, 2, 1],
						backgroud: "#000000",
						frameColor: "#118ce9",
						scanbarColor: "#118ce9",
						enabledFlash: !1,
						flashImage0:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABjklEQVRoQ+1ZbVHEQAx9TwE4ABTcOQAknANQAKcAUAAOAAXgAHAACsDCKQiTmbYDzJZtNt2bFrJ/m6+Xl2yyU2LmhzOPH/8PgIjcADirxNyapNoffMwMiMgzgMPBHmyCLySPLCoBwJKtAbJbYaBmD1yRvBwAtBMxl5DF+DZkiwCIyBLAzsgBbki+Wm2WAlCaL6zOMvKnJO+sNksB7ALQbO1ZHfbIv5FUVs2nCIB6EZETALdmj2mFY5I6X8ynGEADQllYmL1+VzBfnV/VvQB0aj45ARyQ/Ci14QLQsOBZLe5JaikWnzEA7AN4L4hgA2Dpyb76dANwsOCq/TZhASAYKGie0a7R1lDPI0ebtF0NUi+4yfdAtxr3PEMnD6BbD0QkNfACQO05EAwMuaBqDrIVycdmTpwDuP4R0OR7QFftVRP0g+49cwOQq4DJMxAAchmofY3m/EcJBQOZbTRKKJeBKKEoIePvpFRJ1VzmciUccyCa+C81cerBkuuB7sGTE/zt+yhN7AnAqxsAvBn06n8CkyPwMZKwm+UAAAAASUVORK5CYII=",
						flashImage1:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAA3kvI3lfY2k/VAl+43k/U3k/Q4k/M3kvI3k/M4k/Q4lPU2lPU2k/Vdq843k/WWSpNKAAAAD3RSTlMAwD+QINCAcPBgUDDgoBAE044kAAAAdklEQVQ4y2OgOrD/DwffUSTkERIfyZXAtOMbca7iVoKDDSgSbAijJqBI8J2HiX9FM2s+TOITmgQrTEIATYIJJuEA5mJ68S+Gg/0hEi0YEoxQK2gs0WyPQyKBGYeEAhPtJRaw45AIccXpwVEJekuwQyQWMFAfAACeDBJY9aXa3QAAAABJRU5ErkJggg==",
						autoDecodeCharSet: !1,
						localization: {
							en: { fail: "Recognition failure", "flash.on": "Tap to turn light on", "flash.off": "Tap to turn light off" },
							zh: { fail: "识别失败", "flash.on": "轻触照亮", "flash.off": "轻触关闭" },
						},
					},
					onLoad: function () {
						var e = this,
							t = this.data,
							n = t.scanType;
						this.autoDecodeCharSet = t.autoDecodeCharSet;
						var a = [];
						Array.isArray(n) &&
							n.length &&
							n.forEach(function (e) {
								var t = u[e];
								t && (a = a.concat(t));
							}),
							a.length || (a = a.concat(u.qrCode).concat(u.barCode).concat(u.datamatrix).concat(u.pdf417)),
							(this.filters = a),
							this.onMessage(function (t) {
								e.gallery();
							});
					},
					onUnload: function () {
						this.cancel();
					},
					methods: {
						start: function () {
							this.$refs.barcode.start({ conserve: !0, filename: "_doc/barcode/" });
						},
						scan: function (t) {
							var n = this;
							c.scan(
								t,
								function (e, t, a, o) {
									n.scanSuccess(e, t, a, o);
								},
								function () {
									e.nativeUI.toast(n.localize("fail"));
								},
								this.filters,
								this.autoDecodeCharSet,
							);
						},
						cancel: function () {
							this.$refs.barcode.cancel();
						},
						gallery: function () {
							var t = this;
							e.gallery.pick(
								function (e) {
									t.scan(e);
								},
								function (n) {
									n.code !== ("android" === weex.config.env.platform.toLowerCase() ? 12 : -2) && e.nativeUI.toast(t.localize("fail"));
								},
								{ multiple: !1, system: !1, filename: "_doc/uniapp_temp/gallery/", permissionAlert: !0 },
							);
						},
						onmarked: function (e) {
							var t = e.detail;
							this.scanSuccess(t.code, t.message, t.file, t.charSet);
						},
						scanSuccess: function (e, t, n, a) {
							this.postMessage({ event: "marked", detail: { scanType: l[e], result: t, charSet: a || "utf8", path: n || "" } });
						},
						onerror: function (e) {
							this.postMessage({ event: "fail", message: JSON.stringify(e) });
						},
						setFlash: function () {
							(this.enabledFlash = !this.enabledFlash), this.$refs.barcode.setFlash(this.enabledFlash);
						},
					},
				};
			t.default = f;
		}).call(this, n(2).weexPlus);
	},
	function (e, t) {
		e.exports = {
			content: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#000000" },
			barcode: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 1 },
			"set-flash": { alignItems: "center", justifyContent: "center", transform: "translateY(80px)", zIndex: 2 },
			"image-flash": { width: "26", height: "26", marginBottom: "2" },
			"image-flash-text": { fontSize: "10", color: "#FFFFFF" },
		};
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		var a = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						{ staticClass: ["content"] },
						[
							n("barcode", {
								ref: "barcode",
								staticClass: ["barcode"],
								attrs: {
									autostart: "true",
									backgroud: e.backgroud,
									frameColor: e.frameColor,
									scanbarColor: e.scanbarColor,
									filters: e.filters,
									autoDecodeCharset: e.autoDecodeCharSet,
								},
								on: { marked: e.onmarked, error: e.onerror },
							}),
							n(
								"view",
								{ staticClass: ["set-flash"], on: { click: e.setFlash } },
								[
									n("u-image", { staticClass: ["image-flash"], attrs: { src: e.enabledFlash ? e.flashImage1 : e.flashImage0, resize: "stretch" } }),
									n("u-text", { staticClass: ["image-flash-text"] }, [e._v(e._s(e.enabledFlash ? e.localize("flash.off") : e.localize("flash.on")))]),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			o = [];
		n.d(t, "b", function () {
			return a;
		}),
			n.d(t, "c", function () {
				return o;
			}),
			n.d(t, "a", function () {});
	},
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		n.r(t);
		var a = n(20),
			o = n.n(a);
		for (var r in a)
			"default" !== r &&
				(function (e) {
					n.d(t, e, function () {
						return a[e];
					});
				})(r);
		t.default = o.a;
	},
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		n.r(t);
		n(3);
		var a = n(9);
		(a.default.mpType = "page"), (a.default.route = "template/__uniappscan"), (a.default.el = "#root"), new Vue(a.default);
	},
]);
