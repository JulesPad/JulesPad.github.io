(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        6840: function(t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return e(35656)
            }])
        },
        35656: function(t, n, e) {
            "use strict";
            e.r(n);
            var u = e(70865),
                r = e(52322),
                o = (e(58418), e(67284), e(46004), e(63838), e(2784));
            n.default = function(t) {
                var n = t.Component,
                    e = t.pageProps;
                return (0, o.useEffect)((function() {
                    var t, n;
                    !document.documentElement.getAttribute("data-theme") && (null === (t = e.space) || void 0 === t || null === (n = t.customization) || void 0 === n ? void 0 : n.theme) && document.documentElement.setAttribute("data-theme", e.space.customization.theme)
                })), (0, r.jsx)(n, (0, u.Z)({}, e))
            }
        },
        63838: function() {},
        67284: function() {},
        46004: function() {},
        58418: function() {},
        47842: function(t, n, e) {
            "use strict";

            function u(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t
            }
            e.d(n, {
                Z: function() {
                    return u
                }
            })
        },
        70865: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return r
                }
            });
            var u = e(47842);

            function r(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })))), r.forEach((function(n) {
                        (0, u.Z)(t, n, e[n])
                    }))
                }
                return t
            }
        }
    },
    function(t) {
        var n = function(n) {
            return t(t.s = n)
        };
        t.O(0, [9774, 179], (function() {
            return n(6840), n(90387)
        }));
        var e = t.O();
        _N_E = e
    }
]);