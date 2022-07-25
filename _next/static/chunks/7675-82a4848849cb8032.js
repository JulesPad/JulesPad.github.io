(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7675], {
        95925: function(e, t, n) {
            "use strict";
            n.d(t, {
                R6: function() {
                    return a
                },
                d: function() {
                    return r
                },
                jq: function() {
                    return i
                },
                nx: function() {
                    return o
                },
                w: function() {
                    return l
                }
            });
            const r = 700,
                i = 70,
                o = 17,
                a = .6,
                l = .8
        },
        84652: function(e, t, n) {
            "use strict";
            n.d(t, {
                WH: function() {
                    return Zt
                },
                JO: function() {
                    return d
                },
                N0: function() {
                    return Ut
                },
                ei: function() {
                    return xr
                }
            });
            var r = n(40656),
                i = n(52322),
                o = n(2784),
                a = n(72779),
                l = n.n(a);

            function d({
                type: e,
                name: t,
                className: n
            }) {
                return (0, o.useEffect)((() => {
                    (e => {
                        if (document.head.querySelector(`link[href*="${e}"][rel="stylesheet"]`)) return;
                        const t = document.createElement("link");
                        t.href = e, t.rel = "stylesheet", document.head.appendChild(t)
                    })("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css")
                }), []), (0, i.jsx)("i", {
                    className: l()(`bx ${e}-${t}`, n),
                    contentEditable: !1
                })
            }
            var c = n(29766),
                s = n.n(c);
            const u = "undefined" !== typeof window ? new(s()) : null;
            var m = n(5870),
                h = Object.defineProperty,
                p = Object.getOwnPropertySymbols,
                v = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                g = (e, t, n) => t in e ? h(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                b = (e, t) => {
                    for (var n in t || (t = {})) v.call(t, n) && g(e, n, t[n]);
                    if (p)
                        for (var n of p(t)) f.call(t, n) && g(e, n, t[n]);
                    return e
                };

            function _({
                width: e,
                width_max: t,
                height: n,
                align: a,
                vertical_align: d,
                mobile_direction: c,
                mobile_reverse_columns: h,
                background: p,
                backgroundImage: v,
                backgroundDarken: f,
                mobile_hide: g,
                desktop_hide: _,
                children: y
            }) {
                const w = (0, o.useRef)(null);
                (0, o.useEffect)((() => "string" === typeof v ? (u.update(), () => {
                    w.current && s().resetStatus(w.current)
                }) : () => {}), [v]);
                const x = "direction_horizontal" === c,
                    j = !!h;
                return (0, i.jsxs)("div", {
                    ref: w,
                    className: "slate-column-container lazy",
                    style: b(b(b({}, (0, m.oB)(e, t)), (0, r.OS)(p)), "string" === typeof v && (0, r.fQ)(v, f)),
                    "data-bg": "string" === typeof v ? v : void 0,
                    children: [(0, o.isValidElement)(v) && (0, i.jsx)("div", {
                        className: "slate-column-background",
                        children: v
                    }), (0, i.jsx)("div", {
                        className: "slate-column-wrapper",
                        "data-mobile-stack": x ? "horizontal" : "vertical",
                        children: (0, i.jsx)("div", {
                            className: l()("slate-column", x ? "stack-horizontal" : "stack-vertical", {
                                "mobile:hidden": g,
                                "desktop:hidden": _,
                                "stack-reverse": j,
                                "align-left": "align_left" === a,
                                "align-center": "align_center" === a,
                                "align-right": "align_right" === a,
                                "align-top": "align_start" === d,
                                "align-middle": "align_center" === d,
                                "align-bottom": "align_end" === d
                            }),
                            style: {
                                "--min-height": (0, m.nu)(n).height,
                                "--width": (0, m.oB)(e).width
                            },
                            children: y
                        })
                    })]
                })
            }

            function y({
                width: e,
                children: t
            }) {
                return (0, i.jsx)("div", {
                    className: "slate-column_item",
                    style: {
                        "--width": 100 * e + "%"
                    },
                    children: t
                })
            }
            var w = Object.defineProperty,
                x = Object.defineProperties,
                j = Object.getOwnPropertyDescriptors,
                k = Object.getOwnPropertySymbols,
                O = Object.prototype.hasOwnProperty,
                N = Object.prototype.propertyIsEnumerable,
                C = (e, t, n) => t in e ? w(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                I = (e, t) => {
                    for (var n in t || (t = {})) O.call(t, n) && C(e, n, t[n]);
                    if (k)
                        for (var n of k(t)) N.call(t, n) && C(e, n, t[n]);
                    return e
                },
                P = (e, t) => x(e, j(t));

            function E(e) {
                var t = e,
                    {
                        children: n
                    } = t,
                    r = ((e, t) => {
                        var n = {};
                        for (var r in e) O.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && k)
                            for (var r of k(e)) t.indexOf(r) < 0 && N.call(e, r) && (n[r] = e[r]);
                        return n
                    })(t, ["children"]);
                return (0, i.jsx)("a", P(I({}, r), {
                    children: n
                }))
            }

            function S({
                href: e,
                internal_link: t,
                open_in_new_tab: n,
                internalLinkComponent: r = E,
                children: o,
                style: a,
                className: l
            }) {
                const d = {
                    href: e,
                    target: n ? "_blank" : void 0,
                    style: a,
                    className: l
                };
                return t ? (0, i.jsx)(r, P(I({}, d), {
                    children: o
                })) : (0, i.jsx)("a", P(I({}, d), {
                    rel: "noreferrer",
                    children: o
                }))
            }

            function T(e, t) {
                const [n, r] = (0, o.useState)(!1);
                if ((0, o.useEffect)((() => {
                        if (t) {
                            const t = new IntersectionObserver((e => {
                                e.forEach((e => {
                                    e.isIntersecting && r(e.isIntersecting)
                                }))
                            }));
                            return e.current && t.observe(e.current), () => {
                                e.current && t.unobserve(e.current)
                            }
                        }
                        return () => {}
                    }), []), !t) return "";
                const i = function(e) {
                    switch (e.type) {
                        case "fade_in":
                            return "fade-in";
                        case "slide_in":
                            switch (e.direction) {
                                case "down":
                                    return "slide-in-down";
                                case "up":
                                default:
                                    return "slide-in-up";
                                case "left":
                                    return "slide-in-left";
                                case "right":
                                    return "slide-in-right"
                            }
                        case "scale_in":
                            switch (e.scaleTo) {
                                case "grow":
                                default:
                                    return "scale-in-grow";
                                case "shrink":
                                    return "scale-in-shrink"
                            }
                        default:
                            return
                    }
                }(t);
                return l()(i, {
                    "animated-block-initial": !n,
                    "animated-block-visible": n
                })
            }
            var D = Object.defineProperty,
                F = Object.getOwnPropertySymbols,
                Z = Object.prototype.hasOwnProperty,
                B = Object.prototype.propertyIsEnumerable,
                z = (e, t, n) => t in e ? D(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                L = (e, t) => {
                    for (var n in t || (t = {})) Z.call(t, n) && z(e, n, t[n]);
                    if (F)
                        for (var n of F(t)) B.call(t, n) && z(e, n, t[n]);
                    return e
                };

            function R({
                width: e,
                width_max: t,
                height: n,
                align: a,
                vertical_align: d,
                background: c,
                backgroundImage: h,
                backgroundDarken: p,
                mobile_hide: v,
                desktop_hide: f,
                style: g,
                url: b,
                open_in_new_tab: _,
                internal_link: y,
                internalLinkComponent: w,
                animation: x,
                children: j
            }) {
                const k = (0, o.useRef)(null),
                    O = T(k, x);
                (0, o.useEffect)((() => "string" === typeof h ? (u.update(), () => {
                    k.current && s().resetStatus(k.current)
                }) : () => {}), [h]);
                const N = (0, i.jsxs)("div", {
                    ref: k,
                    role: "none",
                    className: l()("slate-container lazy", {
                        "mobile:hidden": v,
                        "desktop:hidden": f,
                        "align-left": "align_left" === a,
                        "align-center": "align_center" === a,
                        "align-right": "align_right" === a,
                        "align-top": "align_start" === d,
                        "align-middle": "align_center" === d,
                        "align-bottom": "align_end" === d,
                        card: "card" === g
                    }, O),
                    style: L(L({
                        "--min-height": (0, m.nu)(n).height,
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    }, (0, r.OS)(c)), "string" === typeof h && (0, r.fQ)(h, p)),
                    "data-bg": "string" === typeof h ? h : void 0,
                    children: [(0, o.isValidElement)(h) && (0, i.jsx)("div", {
                        className: "slate-container-background",
                        children: h
                    }), j]
                });
                return b ? (0, i.jsx)("div", {
                    className: "slate-container-link-wrapper",
                    style: {
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    },
                    children: (0, i.jsx)(S, {
                        href: b,
                        internal_link: y,
                        open_in_new_tab: _,
                        internalLinkComponent: w,
                        className: "slate-container-link",
                        children: N
                    })
                }) : N
            }
            const q = e => {
                if (!e) return {};
                return {
                    textAlign: {
                        align_left: "left",
                        align_center: "center",
                        align_right: "right"
                    }[e]
                }
            };
            var M = Object.defineProperty,
                W = Object.getOwnPropertySymbols,
                A = Object.prototype.hasOwnProperty,
                H = Object.prototype.propertyIsEnumerable,
                Q = (e, t, n) => t in e ? M(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                $ = (e, t) => {
                    for (var n in t || (t = {})) A.call(t, n) && Q(e, n, t[n]);
                    if (W)
                        for (var n of W(t)) H.call(t, n) && Q(e, n, t[n]);
                    return e
                };

            function U({
                width: e,
                width_max: t,
                align: n,
                mobile_hide: r,
                desktop_hide: a,
                animation: d,
                children: c
            }) {
                const s = (0, o.useRef)(null),
                    u = T(s, d);
                return (0, i.jsx)("h1", {
                    ref: s,
                    className: l()("slate-h1", {
                        "mobile:hidden": r,
                        "desktop:hidden": a
                    }, u),
                    style: $({
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    }, q(n)),
                    children: c
                })
            }

            function V({
                width: e,
                width_max: t,
                align: n,
                mobile_hide: r,
                desktop_hide: a,
                animation: d,
                children: c
            }) {
                const s = (0, o.useRef)(null),
                    u = T(s, d);
                return (0, i.jsx)("h2", {
                    ref: s,
                    className: l()("slate-h2", {
                        "mobile:hidden": r,
                        "desktop:hidden": a
                    }, u),
                    style: $({
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    }, q(n)),
                    children: c
                })
            }

            function G({
                width: e,
                width_max: t,
                align: n,
                mobile_hide: r,
                desktop_hide: a,
                animation: d,
                children: c
            }) {
                const s = (0, o.useRef)(null),
                    u = T(s, d);
                return (0, i.jsx)("h3", {
                    ref: s,
                    className: l()("slate-h3", {
                        "mobile:hidden": r,
                        "desktop:hidden": a
                    }, u),
                    style: $({
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    }, q(n)),
                    children: c
                })
            }

            function J({
                url: e,
                internal_link: t,
                open_in_new_tab: n,
                internalLinkComponent: r,
                children: o
            }) {
                return (0, i.jsx)(S, {
                    href: e,
                    internal_link: t,
                    open_in_new_tab: n,
                    internalLinkComponent: r,
                    className: "slate-a",
                    children: o
                })
            }
            var Y = Object.defineProperty,
                K = Object.getOwnPropertySymbols,
                X = Object.prototype.hasOwnProperty,
                ee = Object.prototype.propertyIsEnumerable,
                te = (e, t, n) => t in e ? Y(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                ne = (e, t) => {
                    for (var n in t || (t = {})) X.call(t, n) && te(e, n, t[n]);
                    if (K)
                        for (var n of K(t)) ee.call(t, n) && te(e, n, t[n]);
                    return e
                };

            function re({
                width: e,
                width_max: t,
                align: n,
                children: r,
                mobile_hide: a,
                desktop_hide: d,
                animation: c
            }) {
                const s = (0, o.useRef)(null),
                    u = T(s, c);
                return (0, i.jsx)("p", {
                    ref: s,
                    className: l()("slate-p", {
                        "mobile:hidden": a,
                        "desktop:hidden": d
                    }, u),
                    style: ne({
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    }, q(n)),
                    children: r
                })
            }
            var ie = Object.defineProperty,
                oe = Object.defineProperties,
                ae = Object.getOwnPropertyDescriptors,
                le = Object.getOwnPropertySymbols,
                de = Object.prototype.hasOwnProperty,
                ce = Object.prototype.propertyIsEnumerable,
                se = (e, t, n) => t in e ? ie(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                ue = (e, t) => {
                    for (var n in t || (t = {})) de.call(t, n) && se(e, n, t[n]);
                    if (le)
                        for (var n of le(t)) ce.call(t, n) && se(e, n, t[n]);
                    return e
                },
                me = (e, t) => oe(e, ae(t));
            const he = (0, o.forwardRef)(((e, t) => {
                var n = e,
                    {
                        align: a,
                        vertical_align: d,
                        background: c,
                        backgroundImage: s,
                        backgroundDarken: u,
                        backgroundVideo: m,
                        className: h,
                        style: p,
                        children: v
                    } = n,
                    f = ((e, t) => {
                        var n = {};
                        for (var r in e) de.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && le)
                            for (var r of le(e)) t.indexOf(r) < 0 && ce.call(e, r) && (n[r] = e[r]);
                        return n
                    })(n, ["align", "vertical_align", "background", "backgroundImage", "backgroundDarken", "backgroundVideo", "className", "style", "children"]);
                return (0, i.jsxs)("div", me(ue({
                    ref: t,
                    className: l()("typedream content", {
                        "align-left": "align_left" === a,
                        "align-center": "align_center" === a,
                        "align-right": "align_right" === a,
                        "align-top": "align_start" === d,
                        "align-middle": "align_center" === d,
                        "align-bottom": "align_end" === d
                    }, h)
                }, f), {
                    style: ue(me(ue(ue(ue(ue({}, (0, r.OS)(c)), "string" === typeof s && (0, r.fQ)(s, u)), "string" === typeof s && {
                        backgroundImage: `url("${s}")`
                    }), "string" === typeof m && (0, r.rO)(m, u)), {
                        minHeight: d ? "100vh" : void 0
                    }), p),
                    "data-bg": "string" === typeof s ? s : void 0,
                    children: [(0, o.isValidElement)(s) && (0, i.jsx)("div", {
                        className: "slate-root-background",
                        children: s
                    }), m && (0, i.jsx)("video", {
                        className: "slate-root-background-video",
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        children: (0, i.jsx)("source", {
                            src: m
                        })
                    }), v]
                }))
            }));
            he.displayName = "RootElement";
            var pe = Object.defineProperty,
                ve = Object.getOwnPropertySymbols,
                fe = Object.prototype.hasOwnProperty,
                ge = Object.prototype.propertyIsEnumerable,
                be = (e, t, n) => t in e ? pe(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                _e = (e, t) => {
                    for (var n in t || (t = {})) fe.call(t, n) && be(e, n, t[n]);
                    if (ve)
                        for (var n of ve(t)) ge.call(t, n) && be(e, n, t[n]);
                    return e
                };

            function ye({
                height: e,
                width: t,
                mobile_hide: n,
                desktop_hide: r
            }) {
                return (0, i.jsx)("div", {
                    className: l()("slate-spacer", {
                        "mobile:hidden": n,
                        "desktop:hidden": r
                    }),
                    style: _e({
                        height: `${e}px`
                    }, (0, m.oB)(t))
                })
            }
            var we = n(95925);
            var xe = Object.defineProperty,
                je = Object.defineProperties,
                ke = Object.getOwnPropertyDescriptors,
                Oe = Object.getOwnPropertySymbols,
                Ne = Object.prototype.hasOwnProperty,
                Ce = Object.prototype.propertyIsEnumerable,
                Ie = (e, t, n) => t in e ? xe(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Pe = (e, t) => {
                    for (var n in t || (t = {})) Ne.call(t, n) && Ie(e, n, t[n]);
                    if (Oe)
                        for (var n of Oe(t)) Ce.call(t, n) && Ie(e, n, t[n]);
                    return e
                };

            function Ee({
                words: e,
                currIdx: t,
                style: n
            }) {
                const r = (null == e ? void 0 : e.length) || 1,
                    a = (t - 1) % r,
                    d = a >= 0 ? a : r + a,
                    c = (0, o.useRef)(null),
                    [s, u] = (0, o.useState)(),
                    [m, h] = (0, o.useState)(),
                    [p, v] = (0, o.useState)(!1);
                return (0, o.useEffect)((() => {
                    const e = new ResizeObserver((e => {
                        var t, n;
                        let r = 0;
                        for (const i of e)(null == (t = i.contentRect) ? void 0 : t.width) > r && (r = null == (n = i.contentRect) ? void 0 : n.width);
                        h(r)
                    }));
                    return Array.from(c.current.children).forEach((t => {
                        e.observe(t)
                    })), u(1.1 * parseFloat(getComputedStyle(c.current).lineHeight)), e.disconnect
                }), []), (0, o.useEffect)((() => {
                    const t = c.current.closest('[class^="slate-"]');
                    t && t.textContent === e.join("") && v(!0)
                }), []), (0, i.jsx)("span", {
                    ref: c,
                    className: "scroll-wrapper",
                    style: {
                        minHeight: s,
                        minWidth: m
                    },
                    children: e.map(((e, r) => {
                        return (0, i.jsx)("span", {
                            className: l()({
                                "animate-show": t === r,
                                "animate-up": d === r
                            }),
                            style: (o = Pe({}, n), a = {
                                minWidth: p ? "100%" : void 0
                            }, je(o, ke(a))),
                            children: e
                        }, `text-animated-${e}`);
                        var o, a
                    }))
                })
            }

            function Se({
                animation: e,
                style: t
            }) {
                if (!e) return null;
                const {
                    type: n,
                    words: r
                } = e, [a, l] = (0, o.useState)(0);
                return function(e, t) {
                    const n = (0, o.useRef)();
                    (0, o.useEffect)((() => {
                        n.current = e
                    }), [e]), (0, o.useEffect)((() => {
                        if (null !== t) {
                            const e = setInterval((function() {
                                let e = n.current;
                                e || (e = () => {}), e()
                            }), t);
                            return () => clearInterval(e)
                        }
                        return () => {}
                    }), [t])
                }((() => {
                    l((a + 1) % ((null == r ? void 0 : r.length) || 0))
                }), 2500), 0 === (null == r ? void 0 : r.length) ? null : "scroll_words" === n && r.length > 1 ? (0, i.jsx)(Ee, {
                    words: r,
                    currIdx: a,
                    style: t
                }) : (0, i.jsx)(i.Fragment, {
                    children: null == r ? void 0 : r[0]
                })
            }
            var Te = Object.defineProperty,
                De = Object.defineProperties,
                Fe = Object.getOwnPropertyDescriptors,
                Ze = Object.getOwnPropertySymbols,
                Be = Object.prototype.hasOwnProperty,
                ze = Object.prototype.propertyIsEnumerable,
                Le = (e, t, n) => t in e ? Te(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Re = (e, t) => {
                    for (var n in t || (t = {})) Be.call(t, n) && Le(e, n, t[n]);
                    if (Ze)
                        for (var n of Ze(t)) ze.call(t, n) && Le(e, n, t[n]);
                    return e
                },
                qe = (e, t) => De(e, Fe(t));
            const Me = ["bold", "code", "italic", "strikethrough", "underline"],
                We = (e, t, n) => {
                    if (0 === e.length) return t;
                    switch (e[0]) {
                        case "bold":
                            return We(e.slice(1), (0, i.jsx)("strong", {
                                children: t
                            }), n);
                        case "code":
                            return We(e.slice(1), (0, i.jsx)("code", {
                                children: t
                            }), n);
                        case "italic":
                            return We(e.slice(1), (0, i.jsx)("em", {
                                children: t
                            }), n);
                        case "strikethrough":
                            return We(e.slice(1), (0, i.jsx)("s", {
                                children: t
                            }), n);
                        case "underline":
                            return We(e.slice(1), (0, i.jsx)("u", {
                                style: {
                                    textDecoration: "underline",
                                    textDecorationColor: n
                                },
                                children: t
                            }), n);
                        default:
                            return t
                    }
                },
                Ae = e => {
                    const {
                        text: t
                    } = e, n = e.lineHeight || void 0;
                    let o = {};
                    if (e.styled) {
                        const t = e.fontSize || void 0;
                        let i = t,
                            a = n;
                        i && (i = i > we.jq ? we.R6 * i : i, i = i > we.nx ? we.w * i : i, a = e.fontSize > we.jq ? `${i+10}px` : a, a = e.fontSize > we.nx ? `${i+5}px` : a), o = qe(Re({}, (0, r.OS)(e.background)), {
                            color: (0, r.Tj)(null == e ? void 0 : e.color, r.lq),
                            fontFamily: e.fontFamily ? r.Rq[e.fontFamily] : void 0,
                            fontWeight: e.fontWeight || void 0,
                            letterSpacing: e.letterSpacing || void 0,
                            "--font-size": t ? `${t}px` : void 0,
                            "--mobile-font-size": i ? `${i}px` : void 0,
                            "--line-height": n,
                            "--mobile-line-height": a
                        })
                    }
                    const a = e.gradient && e.color ? {
                            backgroundImage: r.eR[e.color],
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitBoxDecorationBreak: "clone",
                            backgroundRepeat: "no-repeat"
                        } : void 0,
                        l = e.animation ? qe(Re({}, e.animation), {
                            words: [t, ...e.animation.words]
                        }) : void 0,
                        d = (0, i.jsxs)("span", {
                            style: o,
                            children: [l && (0, i.jsx)(Se, {
                                animation: l,
                                style: a
                            }), !l && e.gradient && e.color && (0, i.jsx)("span", {
                                style: a,
                                children: t
                            }), !l && !(e.gradient && e.color) && t]
                        });
                    return We(Object.keys(e).filter((t => Me.includes(t) && !!e[t])), d, (0, r.Tj)(null == e ? void 0 : e.color, r.lq))
                };

            function He(e) {
                const {
                    width: t,
                    mobile_hide: n,
                    desktop_hide: r
                } = e;
                return (0, i.jsx)("div", {
                    className: l()("slate-divider-container", {
                        "mobile:hidden": n,
                        "desktop:hidden": r
                    }),
                    style: {
                        maxWidth: "100%",
                        width: `${t||we.d}px`
                    },
                    children: (0, i.jsx)("hr", {
                        className: "slate-divider"
                    })
                })
            }
            const Qe = e => {
                    switch (e) {
                        case "align_center":
                            return "center";
                        case "align_left":
                            return "flex-start";
                        case "align_right":
                            return "flex-end";
                        default:
                            return
                    }
                },
                $e = {
                    regular: "bx",
                    solid: "bxs",
                    logo: "bxl"
                };

            function Ue({
                icon: e,
                className: t
            }) {
                if (!e) return (0, i.jsx)("div", {});
                switch (e.type) {
                    case "icon":
                        return (0, i.jsx)("div", {
                            className: t,
                            style: {
                                color: (0, r.Tj)(e.content.color, r.eR)
                            },
                            children: (0, i.jsx)(d, {
                                type: $e[e.content.type],
                                name: e.content.name
                            })
                        });
                    case "emoji":
                        return (0, i.jsx)("div", {
                            className: t,
                            children: e.content
                        });
                    case "image":
                        return (0, i.jsx)("div", {
                            className: t,
                            children: (0, i.jsx)("img", {
                                src: e.content,
                                alt: "button icon"
                            })
                        });
                    default:
                        return (0, i.jsx)("div", {})
                }
            }

            function Ve({
                children: e,
                mobile_hide: t,
                desktop_hide: n,
                width: r,
                width_max: a,
                align: d,
                animation: c
            }) {
                const s = (0, o.useRef)(null),
                    u = T(s, c);
                return (0, i.jsx)("div", {
                    ref: s,
                    className: l()("slate-button-container", {
                        "mobile:hidden": t,
                        "desktop:hidden": n
                    }, u),
                    style: {
                        "--width": (0, m.oB)(r, a).width,
                        "--max-width": (0, m.oB)(r, a).maxWidth,
                        "--horizontal-alignment": d && Qe(d)
                    },
                    children: e
                })
            }

            function Ge({
                background: e,
                color: t,
                shadowColor: n,
                icon: o,
                children: a
            }) {
                return (0, i.jsxs)("button", {
                    className: l()("slate-button"),
                    style: {
                        background: (0, r.Tj)(e, r.z7),
                        color: (0, r.Tj)(t, r.lq),
                        boxShadow: !!n && `0 10px 20px -10px ${n}`
                    },
                    type: "button",
                    children: [(0, i.jsx)(Ue, {
                        icon: o,
                        className: "slate-button-icon"
                    }), a]
                })
            }

            function Je(e) {
                const {
                    mobile_hide: t,
                    desktop_hide: n,
                    width: o,
                    width_max: a,
                    align: l,
                    color: d,
                    icon: c,
                    background: s,
                    url: u,
                    open_in_new_tab: m,
                    internal_link: h,
                    internalLinkComponent: p,
                    children: v,
                    animation: f
                } = e, g = (0, r.Tj)(s, r.My);
                return u ? (0, i.jsx)(Ve, {
                    mobile_hide: Boolean(t),
                    desktop_hide: Boolean(n),
                    width: Number(o),
                    width_max: a,
                    align: l,
                    animation: f,
                    children: (0, i.jsx)(S, {
                        href: u,
                        internal_link: h,
                        open_in_new_tab: m,
                        internalLinkComponent: p,
                        children: (0, i.jsx)(Ge, {
                            background: s,
                            color: d,
                            shadowColor: g,
                            icon: c,
                            children: v
                        })
                    })
                }) : (0, i.jsx)(Ve, {
                    mobile_hide: Boolean(t),
                    desktop_hide: Boolean(n),
                    width: Number(o),
                    align: l,
                    animation: f,
                    children: (0, i.jsx)(Ge, {
                        background: s,
                        color: d,
                        shadowColor: g,
                        icon: c,
                        children: v
                    })
                })
            }
            Ve.defaultProps = {
                width_max: void 0,
                align: void 0,
                animation: void 0
            }, Ue.defaultProps = {
                className: void 0
            };
            var Ye = Object.defineProperty,
                Ke = Object.defineProperties,
                Xe = Object.getOwnPropertyDescriptors,
                et = Object.getOwnPropertySymbols,
                tt = Object.prototype.hasOwnProperty,
                nt = Object.prototype.propertyIsEnumerable,
                rt = (e, t, n) => t in e ? Ye(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;
            const it = e => {
                if (e.length > 0) {
                    const t = e[0],
                        n = document.createElement("script");
                    if (n.onload = () => {
                            it(e.slice(1))
                        }, t.hasAttributes()) {
                        const e = t.attributes;
                        for (let t = e.length - 1; t >= 0; t -= 1) n.setAttribute(e[t].name, e[t].value)
                    }
                    t.innerHTML && (n.innerHTML = t.innerHTML), t.parentNode.replaceChild(n, t)
                }
            };

            function ot(e) {
                var t = e,
                    {
                        html: n
                    } = t,
                    r = ((e, t) => {
                        var n = {};
                        for (var r in e) tt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && et)
                            for (var r of et(e)) t.indexOf(r) < 0 && nt.call(e, r) && (n[r] = e[r]);
                        return n
                    })(t, ["html"]);
                const i = (0, o.useRef)(null);
                return ("undefined" === typeof window ? o.useEffect : o.useLayoutEffect)((() => {
                    if (n && !i.current.innerHTML) {
                        i.current.innerHTML = n;
                        const e = i.current.querySelectorAll("script");
                        it(Array.from(e))
                    }
                }), [n]), (0, o.createElement)("div", (a = ((e, t) => {
                    for (var n in t || (t = {})) tt.call(t, n) && rt(e, n, t[n]);
                    if (et)
                        for (var n of et(t)) nt.call(t, n) && rt(e, n, t[n]);
                    return e
                })({}, r), l = {
                    key: n,
                    ref: i,
                    dangerouslySetInnerHTML: {
                        __html: "undefined" === typeof window ? n : ""
                    },
                    suppressHydrationWarning: !0
                }, Ke(a, Xe(l))));
                var a, l
            }

            function at({
                src: e,
                title: t
            }) {
                const n = (0, o.useRef)(null);
                return (0, o.useEffect)((() => (u.update(), () => {
                    n.current && s().resetStatus(n.current)
                })), [e]), (0, i.jsx)("iframe", {
                    ref: n,
                    title: t,
                    className: "lazy",
                    "data-src": e
                })
            }
            at.defaultProps = {
                title: void 0
            };
            var lt = Object.defineProperty,
                dt = Object.getOwnPropertySymbols,
                ct = Object.prototype.hasOwnProperty,
                st = Object.prototype.propertyIsEnumerable,
                ut = (e, t, n) => t in e ? lt(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                mt = (e, t) => {
                    for (var n in t || (t = {})) ct.call(t, n) && ut(e, n, t[n]);
                    if (dt)
                        for (var n of dt(t)) st.call(t, n) && ut(e, n, t[n]);
                    return e
                };

            function ht({
                url: e,
                html: t,
                width: n,
                height: r,
                keep_aspect_ratio: o,
                width_max: a,
                mobile_hide: d,
                desktop_hide: c,
                containerClassName: s
            }) {
                return (0, i.jsx)("div", {
                    contentEditable: !1,
                    className: l()("slate-media_embed", s, {
                        "mobile:hidden": d,
                        "desktop:hidden": c
                    }),
                    style: mt(mt({}, (0, m.oB)(n, a)), o && n && r ? {
                        aspectRatio: `${n} / ${r}`
                    } : {
                        minHeight: (0, m.nu)(r).height
                    }),
                    children: e ? (0, i.jsx)(at, {
                        title: "embed",
                        src: e
                    }) : t ? (0, i.jsx)(ot, {
                        contentEditable: !1,
                        html: t
                    }) : null
                })
            }
            var pt = Object.defineProperty,
                vt = Object.getOwnPropertySymbols,
                ft = Object.prototype.hasOwnProperty,
                gt = Object.prototype.propertyIsEnumerable,
                bt = (e, t, n) => t in e ? pt(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                _t = (e, t) => {
                    for (var n in t || (t = {})) ft.call(t, n) && bt(e, n, t[n]);
                    if (vt)
                        for (var n of vt(t)) gt.call(t, n) && bt(e, n, t[n]);
                    return e
                };

            function yt({
                optimizable: e,
                optimizedImageComponent: t,
                url: n,
                alt_text: r = "",
                width: a,
                height: d,
                aspect_ratio: c,
                align: s,
                href: u,
                internal_link: h,
                open_in_new_tab: p,
                mobile_hide: v,
                desktop_hide: f,
                internalLinkComponent: g,
                animation: b,
                border_radius: _
            }) {
                const [y, w] = (0, o.useState)(!1), x = (0, o.useRef)(null), j = T(x, b), k = t && n && a && d ? (0, i.jsx)(t, {
                    className: "slate-img",
                    src: n,
                    alt: r,
                    height: Math.round(d),
                    width: Math.round(a),
                    unoptimized: !(e && !y) || void 0,
                    onError: () => w(!0),
                    style: {
                        borderRadius: _
                    }
                }) : (0, i.jsx)("img", {
                    className: "slate-img",
                    src: n || "/image-placeholder.svg",
                    alt: r,
                    style: _t(_t(_t({
                        borderRadius: _
                    }, (0, m.oB)(a)), (0, m.UO)(a, d, c)), n ? {} : {
                        objectFit: "cover",
                        objectPosition: "center"
                    })
                });
                return (0, i.jsx)("div", {
                    ref: x,
                    className: l()("slate-img-container", {
                        "mobile:hidden": v,
                        "desktop:hidden": f
                    }, j),
                    style: {
                        justifyContent: Qe(s) || "center",
                        "--max-width": (0, m.oB)(a).maxWidth
                    },
                    children: u ? (0, i.jsx)(S, {
                        href: u,
                        internal_link: h,
                        open_in_new_tab: p,
                        internalLinkComponent: g,
                        className: "slate-img-link",
                        children: k
                    }) : k
                })
            }

            function wt({
                width: e,
                width_max: t,
                mobile_hide: n,
                desktop_hide: r,
                children: o
            }) {
                return (0, i.jsx)("ul", {
                    className: l()("slate-ul", {
                        "mobile:hidden": n,
                        "desktop:hidden": r
                    }),
                    style: {
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    },
                    children: o
                })
            }

            function xt({
                width: e,
                width_max: t,
                mobile_hide: n,
                desktop_hide: r,
                children: o
            }) {
                return (0, i.jsx)("ol", {
                    className: l()("slate-ol", {
                        "mobile:hidden": n,
                        "desktop:hidden": r
                    }),
                    style: {
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    },
                    children: o
                })
            }

            function jt({
                markerColor: e,
                mobile_hide: t,
                desktop_hide: n,
                children: o
            }) {
                return (0, i.jsx)("li", {
                    className: l()("slate-li", {
                        "mobile:hidden": t,
                        "desktop:hidden": n
                    }),
                    style: {
                        "--marker-color": e ? (0, r.Tj)(e, r.lq) : void 0
                    },
                    children: o
                })
            }

            function kt({
                checked: e,
                width: t,
                width_max: n,
                mobile_hide: r,
                desktop_hide: a,
                children: d
            }) {
                const [c, s] = (0, o.useState)(e);
                return (0, i.jsxs)("div", {
                    className: l()("slate-action_item", {
                        "mobile:hidden": r,
                        "desktop:hidden": a
                    }),
                    style: {
                        "--width": (0, m.oB)(t, n).width,
                        "--max-width": (0, m.oB)(t, n).maxWidth
                    },
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: c,
                            onChange: e => s(e.target.checked)
                        })
                    }), (0, i.jsx)("span", {
                        style: c ? {
                            textDecoration: "line-through",
                            opacity: .666
                        } : void 0,
                        children: d
                    })]
                })
            }

            function Ot({
                width: e,
                width_max: t,
                mobile_hide: n,
                desktop_hide: r,
                children: o
            }) {
                return (0, i.jsx)("div", {
                    className: l()("slate-code_block-container", {
                        "mobile:hidden": n,
                        "desktop:hidden": r
                    }),
                    style: {
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    },
                    children: (0, i.jsx)("pre", {
                        className: "slate-code_block",
                        children: (0, i.jsx)("code", {
                            children: o
                        })
                    })
                })
            }

            function Nt({
                children: e
            }) {
                return (0, i.jsx)("span", {
                    className: "slate-code_line",
                    children: e
                })
            }
            var Ct = Object.defineProperty,
                It = Object.getOwnPropertySymbols,
                Pt = Object.prototype.hasOwnProperty,
                Et = Object.prototype.propertyIsEnumerable,
                St = (e, t, n) => t in e ? Ct(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                Tt = (e, t) => {
                    for (var n in t || (t = {})) Pt.call(t, n) && St(e, n, t[n]);
                    if (It)
                        for (var n of It(t)) Et.call(t, n) && St(e, n, t[n]);
                    return e
                };

            function Dt({
                width: e,
                width_max: t,
                align: n,
                mobile_hide: r,
                desktop_hide: o,
                children: a
            }) {
                return (0, i.jsx)("div", {
                    className: l()("slate-blockquote-container", {
                        "mobile:hidden": r,
                        "desktop:hidden": o
                    }),
                    style: {
                        "--width": (0, m.oB)(e, t).width,
                        "--max-width": (0, m.oB)(e, t).maxWidth
                    },
                    children: (0, i.jsx)("blockquote", {
                        className: "slate-blockquote",
                        style: Tt({}, q(n)),
                        children: a
                    })
                })
            }
            const Ft = () => {
                    throw new Error("You forgot to wrap your component in <CollectionContext.Provider>.")
                },
                Zt = (0, o.createContext)({
                    collectionData: void 0,
                    search: Ft,
                    fetchMore: Ft,
                    loading: !1
                });

            function Bt({
                search: e
            }) {
                const [t, n] = (0, o.useState)(""), r = (0, o.useRef)(null);
                return (0, i.jsxs)("div", {
                    className: "slate-collection-search",
                    children: [(0, i.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        height: "20",
                        width: "20",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "icon-search",
                        children: (0, i.jsx)("path", {
                            d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                        })
                    }), (0, i.jsx)("input", {
                        ref: r,
                        type: "text",
                        value: t,
                        placeholder: "Search...",
                        onChange: e => n(e.target.value),
                        onKeyDown: n => {
                            "Enter" === n.key && e(t, !0)
                        }
                    }), t && (0, i.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        height: "17",
                        width: "17",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "icon-circle-fill",
                        onClick: () => {
                            n(""), r.current && r.current.focus()
                        },
                        children: (0, i.jsx)("path", {
                            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                        })
                    })]
                })
            }

            function zt({
                width: e,
                width_max: t,
                collection_template: n,
                children: r
            }) {
                var a, l, d;
                const {
                    collectionData: c,
                    search: s,
                    fetchMore: u,
                    loading: h
                } = (0, o.useContext)(Zt), p = null == (a = null == n ? void 0 : n.settings) ? void 0 : a.numCol, v = null == (l = null == c ? void 0 : c.metadata) ? void 0 : l.show_search_bar;
                return (0, i.jsxs)("div", {
                    className: "slate-collection",
                    style: (0, m.oB)(e, t),
                    children: [v && (0, i.jsx)(Bt, {
                        search: s
                    }), 0 === (null == (d = null == c ? void 0 : c.data) ? void 0 : d.length) && (0, i.jsxs)("div", {
                        className: "slate-collection-no-result",
                        children: ["No results found", v && ", try adjusting your search keyword", "."]
                    }), (0, i.jsx)("div", {
                        className: "slate-collection-grid",
                        style: {
                            "--grid-repeat": p || "auto-fit"
                        },
                        children: r
                    }), (null == c ? void 0 : c.hasMore) && (0, i.jsxs)("div", {
                        className: "slate-collection-show-more",
                        role: "none",
                        onClick: () => u(),
                        children: [h && (0, i.jsx)("span", {
                            className: "loader is-loading"
                        }), "Show more", (0, i.jsx)("svg", {
                            viewBox: "0 0 16 16",
                            height: "18",
                            width: "18",
                            "aria-hidden": "true",
                            focusable: "false",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "icon-chevron-down",
                            children: (0, i.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            })
                        })]
                    })]
                })
            }

            function Lt({
                children: e
            }) {
                return (0, i.jsx)("div", {
                    className: "slate-collection-item",
                    children: e
                })
            }
            var Rt = Object.getOwnPropertySymbols,
                qt = Object.prototype.hasOwnProperty,
                Mt = Object.prototype.propertyIsEnumerable;

            function Wt(e) {
                var t = e,
                    {
                        width: n,
                        width_max: r,
                        children: o
                    } = t;
                ((e, t) => {
                    var n = {};
                    for (var r in e) qt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && Rt)
                        for (var r of Rt(e)) t.indexOf(r) < 0 && Mt.call(e, r) && (n[r] = e[r])
                })(t, ["width", "width_max", "children"]);
                return (0, i.jsx)("div", {
                    className: "slate-rich-text-content",
                    style: (0, m.oB)(n, r),
                    children: o
                })
            }
            var At = n(66379),
                Ht = n(20189),
                Qt = n(40771),
                $t = n(28519);
            const Ut = (0, o.createContext)({
                navbarItemRef: {
                    current: null
                }
            });
            var Vt = Object.defineProperty,
                Gt = Object.defineProperties,
                Jt = Object.getOwnPropertyDescriptors,
                Yt = Object.getOwnPropertySymbols,
                Kt = Object.prototype.hasOwnProperty,
                Xt = Object.prototype.propertyIsEnumerable,
                en = (e, t, n) => t in e ? Vt(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                tn = (e, t) => {
                    for (var n in t || (t = {})) Kt.call(t, n) && en(e, n, t[n]);
                    if (Yt)
                        for (var n of Yt(t)) Xt.call(t, n) && en(e, n, t[n]);
                    return e
                },
                nn = (e, t) => Gt(e, Jt(t)),
                rn = (e, t) => {
                    var n = {};
                    for (var r in e) Kt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && Yt)
                        for (var r of Yt(e)) t.indexOf(r) < 0 && Xt.call(e, r) && (n[r] = e[r]);
                    return n
                };

            function on(e) {
                var t, n, r = e,
                    {
                        children: a,
                        columns: l,
                        forwardedRef: d
                    } = r,
                    c = rn(r, ["children", "columns", "forwardedRef"]);
                const {
                    navbarItemRef: s
                } = (0, o.useContext)(Ut), u = (0, o.useRef)(null), {
                    x: m,
                    refs: h,
                    reference: p,
                    floating: v,
                    update: f,
                    middlewareData: g,
                    strategy: b
                } = (0, At.YF)({
                    placement: "bottom",
                    middleware: [(0, Ht.uY)({
                        padding: 16,
                        boundary: "undefined" !== typeof window && document.querySelector(".editor") || void 0
                    }), (0, At.x7)({
                        element: u
                    })]
                }), _ = (0, $t.Z)(d, v);
                return (0, o.useEffect)((() => {
                    p(s.current)
                }), [s.current]), (0, o.useEffect)((() => {
                    if (h.reference.current && h.floating.current) return (0, Qt.Me)(h.reference.current, h.floating.current, f)
                }), [h.reference, h.floating, f]), (0, i.jsxs)("div", nn(tn({
                    ref: _,
                    className: "slate-navbar_dropdown_menu-container card",
                    style: m ? {
                        "--position": b,
                        "--left": `${m}px`
                    } : void 0
                }, c), {
                    children: [(0, i.jsx)("div", {
                        ref: u,
                        className: "arrow",
                        style: (null == (t = g.arrow) ? void 0 : t.x) ? {
                            left: null == (n = g.arrow) ? void 0 : n.x
                        } : {
                            left: "50%",
                            transform: "translateX(-50%)"
                        }
                    }), (0, i.jsx)("div", {
                        className: "slate-navbar_dropdown_menu",
                        style: {
                            "--columns": l
                        },
                        children: a
                    })]
                }))
            }

            function an(e) {
                var t = e,
                    {
                        children: n,
                        columns: r,
                        forwardedRef: o
                    } = t,
                    a = rn(t, ["children", "columns", "forwardedRef"]);
                return (0, i.jsx)("div", nn(tn({
                    ref: o,
                    className: "slate-navbar_dropdown_menu-container big-box",
                    style: {
                        "--left": "0px"
                    }
                }, a), {
                    children: (0, i.jsx)("div", {
                        className: "slate-navbar_dropdown_menu",
                        style: {
                            "--columns": r
                        },
                        children: n
                    })
                }))
            }
            const ln = (0, o.forwardRef)(((e, t) => {
                var n = e,
                    {
                        style: r
                    } = n,
                    o = rn(n, ["style"]);
                return "card" === r ? (0, i.jsx)(on, tn({
                    forwardedRef: t
                }, o)) : (0, i.jsx)(an, tn({
                    forwardedRef: t
                }, o))
            }));
            ln.displayName = "NavbarDropdownMenuElement";
            var dn = Object.defineProperty,
                cn = Object.defineProperties,
                sn = Object.getOwnPropertyDescriptors,
                un = Object.getOwnPropertySymbols,
                mn = Object.prototype.hasOwnProperty,
                hn = Object.prototype.propertyIsEnumerable,
                pn = (e, t, n) => t in e ? dn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;
            const vn = (0, o.forwardRef)(((e, t) => {
                var n, r = e,
                    {
                        title: o,
                        children: a
                    } = r,
                    l = ((e, t) => {
                        var n = {};
                        for (var r in e) mn.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && un)
                            for (var r of un(e)) t.indexOf(r) < 0 && hn.call(e, r) && (n[r] = e[r]);
                        return n
                    })(r, ["title", "children"]);
                return (0, i.jsx)("div", (n = ((e, t) => {
                    for (var n in t || (t = {})) mn.call(t, n) && pn(e, n, t[n]);
                    if (un)
                        for (var n of un(t)) hn.call(t, n) && pn(e, n, t[n]);
                    return e
                })({
                    ref: t,
                    className: "slate-navbar_dropdown_menu_column"
                }, l), cn(n, sn({
                    children: a
                }))))
            }));
            vn.displayName = "NavbarDropdownMenuColumnElement";
            var fn = Object.defineProperty,
                gn = Object.defineProperties,
                bn = Object.getOwnPropertyDescriptors,
                _n = Object.getOwnPropertySymbols,
                yn = Object.prototype.hasOwnProperty,
                wn = Object.prototype.propertyIsEnumerable,
                xn = (e, t, n) => t in e ? fn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;
            const jn = (0, o.forwardRef)(((e, t) => {
                const n = e,
                    {
                        itemType: o = "short",
                        icon: a,
                        title: d,
                        description: c,
                        fontFamily: s,
                        titleColor: u,
                        titleGradient: m,
                        descriptionColor: h,
                        descriptionGradient: p,
                        url: v,
                        internalLink: f,
                        pageId: g,
                        openInNewTab: b,
                        internalLinkComponent: _,
                        children: y
                    } = n,
                    w = ((e, t) => {
                        var n = {};
                        for (var r in e) yn.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && _n)
                            for (var r of _n(e)) t.indexOf(r) < 0 && wn.call(e, r) && (n[r] = e[r]);
                        return n
                    })(n, ["itemType", "icon", "title", "description", "fontFamily", "titleColor", "titleGradient", "descriptionColor", "descriptionGradient", "url", "internalLink", "pageId", "openInNewTab", "internalLinkComponent", "children"]),
                    x = a ? void 0 : "#616161",
                    j = (0, i.jsxs)("div", (k = ((e, t) => {
                        for (var n in t || (t = {})) yn.call(t, n) && xn(e, n, t[n]);
                        if (_n)
                            for (var n of _n(t)) wn.call(t, n) && xn(e, n, t[n]);
                        return e
                    })({
                        ref: t,
                        className: l()("slate-navbar_dropdown_menu_item", {
                            "is-featured": "featured" === o
                        }),
                        contentEditable: !1
                    }, w), O = {
                        children: ["simple" === o && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-icon",
                                style: {
                                    width: 48,
                                    height: 48,
                                    backgroundColor: x
                                },
                                children: a && (0, i.jsx)("img", {
                                    src: a,
                                    alt: "Menu icon"
                                })
                            }), (0, i.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: (0, i.jsx)("div", {
                                    className: "slate-navbar_dropdown_menu_item-title",
                                    style: {
                                        width: 182,
                                        color: u ? (0, r.Tj)(u, r.lq) : void 0
                                    },
                                    children: (0, i.jsx)(Ae, {
                                        text: d,
                                        styled: !0,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: u,
                                        gradient: !!m
                                    })
                                })
                            })]
                        }), "short" === o && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-icon",
                                style: {
                                    width: 64,
                                    height: 64,
                                    backgroundColor: x
                                },
                                children: a && (0, i.jsx)("img", {
                                    src: a,
                                    alt: "Menu icon"
                                })
                            }), (0, i.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                },
                                children: [(0, i.jsx)("div", {
                                    className: "slate-navbar_dropdown_menu_item-title",
                                    style: {
                                        width: 166,
                                        color: u ? (0, r.Tj)(u, r.lq) : void 0
                                    },
                                    children: (0, i.jsx)(Ae, {
                                        text: d,
                                        styled: !0,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: u,
                                        gradient: !!m
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "slate-navbar_dropdown_menu_item-description",
                                    style: {
                                        color: h ? (0, r.Tj)(h, r.lq) : "#B0B5C6"
                                    },
                                    children: (0, i.jsx)(Ae, {
                                        text: c || "",
                                        styled: !0,
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: h || "#B0B5C6",
                                        gradient: !!p
                                    })
                                })]
                            })]
                        }), "long" === o && (0, i.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                gap: "1rem"
                            },
                            children: [(0, i.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "center"
                                },
                                children: [(0, i.jsx)("div", {
                                    className: "slate-navbar_dropdown_menu_item-icon",
                                    style: {
                                        width: 48,
                                        height: 48,
                                        backgroundColor: x
                                    },
                                    children: a && (0, i.jsx)("img", {
                                        src: a,
                                        alt: "Menu icon"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "slate-navbar_dropdown_menu_item-title",
                                    style: {
                                        width: 182,
                                        color: u ? (0, r.Tj)(u, r.lq) : void 0
                                    },
                                    children: (0, i.jsx)(Ae, {
                                        text: d,
                                        styled: !0,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: u,
                                        gradient: !!m
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-description",
                                style: {
                                    color: h ? (0, r.Tj)(h, r.lq) : "#B0B5C6"
                                },
                                children: (0, i.jsx)(Ae, {
                                    text: c || "",
                                    styled: !0,
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: h || "#B0B5C6",
                                    gradient: !!p
                                })
                            })]
                        }), "featured" === o && (0, i.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                width: "100%"
                            },
                            children: [(0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-icon",
                                style: {
                                    width: 64,
                                    height: 64,
                                    backgroundColor: x,
                                    marginBottom: "16px"
                                },
                                children: a && (0, i.jsx)("img", {
                                    src: a,
                                    alt: "Menu icon"
                                })
                            }), (0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-title",
                                style: {
                                    width: 254,
                                    marginBottom: "6px",
                                    color: u ? (0, r.Tj)(u, r.lq) : "#FFFFFF"
                                },
                                children: (0, i.jsx)(Ae, {
                                    text: d,
                                    styled: !0,
                                    fontSize: 15,
                                    fontWeight: 600,
                                    color: u || "#FFFFFF",
                                    gradient: !!m
                                })
                            }), (0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-description",
                                style: {
                                    color: h ? (0, r.Tj)(h, r.lq) : "#BFBFBF"
                                },
                                children: (0, i.jsx)(Ae, {
                                    text: c || "",
                                    styled: !0,
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: h || "#BFBFBF",
                                    gradient: !!p
                                })
                            })]
                        }), y]
                    }, gn(k, bn(O))));
                var k, O;
                return v ? (0, i.jsx)(S, {
                    href: v,
                    internal_link: f,
                    open_in_new_tab: b,
                    internalLinkComponent: _,
                    className: "slate-navbar_dropdown_menu_item-link",
                    children: j
                }) : j
            }));
            jn.displayName = "NavbarDropdownMenuItemElement";
            var kn = n(5152),
                On = n.n(kn),
                Nn = n(203);

            function Cn({
                src: e,
                darken: t,
                optimizedImageComponent: n
            }) {
                const [r, a] = (0, o.useState)(!1);
                return (0, i.jsx)(n, {
                    src: e,
                    alt: "background",
                    layout: "fill",
                    objectFit: "cover",
                    objectPosition: "center",
                    className: l()({
                        darken: t
                    }),
                    onError: () => a(!0),
                    unoptimized: !!r || void 0
                })
            }
            var In = n(56134);
            var Pn = "n7BshuZv",
                En = Object.defineProperty,
                Sn = Object.defineProperties,
                Tn = Object.getOwnPropertyDescriptors,
                Dn = Object.getOwnPropertySymbols,
                Fn = Object.prototype.hasOwnProperty,
                Zn = Object.prototype.propertyIsEnumerable,
                Bn = (e, t, n) => t in e ? En(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;

            function zn({
                element: e,
                className: t,
                attributes: n,
                expandAll: r,
                disabled: o,
                children: a
            }) {
                const {
                    width: d,
                    width_max: c
                } = e, s = (0, m.oB)(d, c);
                return (0, i.jsx)(In.fC, (u = ((e, t) => {
                    for (var n in t || (t = {})) Fn.call(t, n) && Bn(e, n, t[n]);
                    if (Dn)
                        for (var n of Dn(t)) Zn.call(t, n) && Bn(e, n, t[n]);
                    return e
                })({
                    type: "multiple",
                    defaultValue: r ? e.children.map((e => e.id)) : void 0,
                    disabled: o,
                    style: {
                        "--width": s.width,
                        "--max-width": s.maxWidth
                    },
                    className: l()(t, Pn)
                }, n), Sn(u, Tn({
                    children: a
                }))));
                var u
            }
            var Ln = "OGnj4b9e",
                Rn = Object.defineProperty,
                qn = Object.defineProperties,
                Mn = Object.getOwnPropertyDescriptors,
                Wn = Object.getOwnPropertySymbols,
                An = Object.prototype.hasOwnProperty,
                Hn = Object.prototype.propertyIsEnumerable,
                Qn = (e, t, n) => t in e ? Rn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;

            function $n({
                element: e,
                className: t,
                attributes: n,
                children: r
            }) {
                return (0, i.jsx)(In.ck, (o = ((e, t) => {
                    for (var n in t || (t = {})) An.call(t, n) && Qn(e, n, t[n]);
                    if (Wn)
                        for (var n of Wn(t)) Hn.call(t, n) && Qn(e, n, t[n]);
                    return e
                })({
                    value: e.id,
                    className: l()(t, Ln)
                }, n), qn(o, Mn({
                    children: r
                }))));
                var o
            }
            var Un = "LIHZz6J4",
                Vn = "_4KO8V00D",
                Gn = "EfiE8arJ",
                Jn = Object.defineProperty,
                Yn = Object.defineProperties,
                Kn = Object.getOwnPropertyDescriptors,
                Xn = Object.getOwnPropertySymbols,
                er = Object.prototype.hasOwnProperty,
                tr = Object.prototype.propertyIsEnumerable,
                nr = (e, t, n) => t in e ? Jn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;

            function rr({
                className: e,
                attributes: t,
                children: n
            }) {
                return (0, i.jsx)(In.h4, (r = ((e, t) => {
                    for (var n in t || (t = {})) er.call(t, n) && nr(e, n, t[n]);
                    if (Xn)
                        for (var n of Xn(t)) tr.call(t, n) && nr(e, n, t[n]);
                    return e
                })({
                    className: l()(e, Un)
                }, t), o = {
                    children: (0, i.jsxs)(In.xz, {
                        className: Vn,
                        children: [n, (0, i.jsx)(d, {
                            type: "bxs",
                            name: "chevron-down",
                            className: Gn
                        })]
                    })
                }, Yn(r, Kn(o))));
                var r, o
            }
            var ir = "jB02t6Q-",
                or = "F4SmYbSX",
                ar = Object.defineProperty,
                lr = Object.defineProperties,
                dr = Object.getOwnPropertyDescriptors,
                cr = Object.getOwnPropertySymbols,
                sr = Object.prototype.hasOwnProperty,
                ur = Object.prototype.propertyIsEnumerable,
                mr = (e, t, n) => t in e ? ar(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n;

            function hr({
                className: e,
                attributes: t,
                children: n
            }) {
                return (0, i.jsx)(In.VY, (r = ((e, t) => {
                    for (var n in t || (t = {})) sr.call(t, n) && mr(e, n, t[n]);
                    if (cr)
                        for (var n of cr(t)) ur.call(t, n) && mr(e, n, t[n]);
                    return e
                })({
                    className: l()(e, ir)
                }, t), o = {
                    children: (0, i.jsx)("div", {
                        className: or,
                        children: n
                    })
                }, lr(r, dr(o))));
                var r, o
            }
            var pr = Object.defineProperty,
                vr = Object.getOwnPropertySymbols,
                fr = Object.prototype.hasOwnProperty,
                gr = Object.prototype.propertyIsEnumerable,
                br = (e, t, n) => t in e ? pr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                _r = (e, t) => {
                    for (var n in t || (t = {})) fr.call(t, n) && br(e, n, t[n]);
                    if (vr)
                        for (var n of vr(t)) gr.call(t, n) && br(e, n, t[n]);
                    return e
                };
            const yr = On()((async () => (await Promise.all([n.e(9905), n.e(968)]).then(n.bind(n, 10968))).MediaEmbedFileElement)),
                wr = ({
                    node: e,
                    internalLinkComponent: t,
                    optimizedImageComponent: n,
                    collectionProviderComponent: r,
                    isImageOptimizable: a,
                    createKey: l = (e => e[1].join(",")),
                    rootClassName: d,
                    rootStyle: c
                }, s = [0]) => {
                    var u;
                    const m = l([e, s]);
                    if (Nn.xv.isText(e)) return (0, i.jsx)(Ae, _r({}, e), m);
                    const h = e.children.map(((e, i) => wr({
                        node: e,
                        internalLinkComponent: t,
                        optimizedImageComponent: n,
                        collectionProviderComponent: r,
                        createKey: l,
                        isImageOptimizable: a
                    }, [...s, i])));
                    switch (e.type) {
                        case "p":
                            return (0, i.jsx)(re, {
                                width: e.width,
                                align: e.align,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                animation: e.animation,
                                children: h
                            }, m);
                        case "h1":
                            return (0, i.jsx)(U, {
                                width: e.width,
                                align: e.align,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                animation: e.animation,
                                children: h
                            }, m);
                        case "h2":
                            return (0, i.jsx)(V, {
                                width: e.width,
                                align: e.align,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                animation: e.animation,
                                children: h
                            }, m);
                        case "h3":
                            return (0, i.jsx)(G, {
                                width: e.width,
                                align: e.align,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                animation: e.animation,
                                children: h
                            }, m);
                        case "column":
                            {
                                const t = !!(null == a ? void 0 : a(e.backgroundImage)),
                                    r = e.backgroundImage && t && n ? (0, i.jsx)(Cn, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : e.backgroundImage;
                                return (0, i.jsx)(_, {
                                    height: e.height,
                                    width: e.width,
                                    width_max: e.width_max,
                                    align: e.align,
                                    vertical_align: e.vertical_align,
                                    mobile_direction: e.mobile_direction,
                                    mobile_reverse_columns: e.mobile_reverse_columns,
                                    background: e.background,
                                    backgroundImage: r,
                                    backgroundDarken: e.backgroundDarken,
                                    mobile_hide: e.mobile_hide,
                                    desktop_hide: e.desktop_hide,
                                    children: h
                                }, m)
                            }
                        case "column_item":
                            return (0, i.jsx)(y, {
                                width: e.width,
                                children: h
                            }, m);
                        case "spacer":
                            return (0, i.jsx)(ye, {
                                height: e.height,
                                width: e.width,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide
                            }, m);
                        case "divider":
                            return (0, i.jsx)(He, {
                                width: e.width,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide
                            }, m);
                        case "container":
                            {
                                const r = !!(null == a ? void 0 : a(e.backgroundImage)),
                                    o = e.backgroundImage && r && n ? (0, i.jsx)(Cn, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : e.backgroundImage;
                                return (0, i.jsx)(R, {
                                    width: e.width,
                                    width_max: e.width_max,
                                    height: e.height,
                                    align: e.align,
                                    vertical_align: e.vertical_align,
                                    background: e.background,
                                    backgroundImage: o,
                                    backgroundDarken: e.backgroundDarken,
                                    mobile_hide: e.mobile_hide,
                                    desktop_hide: e.desktop_hide,
                                    style: e.style,
                                    url: e.url,
                                    open_in_new_tab: e.open_in_new_tab,
                                    internal_link: e.internal_link,
                                    internalLinkComponent: t,
                                    animation: e.animation,
                                    children: h
                                }, m)
                            }
                        case "a":
                            return (0, i.jsx)(J, {
                                url: e.url,
                                open_in_new_tab: e.open_in_new_tab,
                                internal_link: e.internal_link,
                                internalLinkComponent: t,
                                children: h
                            }, m);
                        case "button":
                            return (0, i.jsx)(Je, {
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                color: e.color,
                                align: e.align,
                                width: e.width,
                                width_max: e.width_max,
                                background: e.background,
                                icon: e.icon,
                                url: e.url,
                                open_in_new_tab: e.open_in_new_tab,
                                internal_link: e.internal_link,
                                internalLinkComponent: t,
                                animation: e.animation,
                                children: h
                            }, m);
                        case "media_embed":
                            return e.url || e.html ? (0, i.jsx)(ht, {
                                url: e.url,
                                html: e.html,
                                width: e.width,
                                height: e.height,
                                width_max: e.width_max,
                                keep_aspect_ratio: e.keep_aspect_ratio,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                containerClassName: e.containerClassName
                            }, m) : (0, i.jsx)(yr, {
                                file: e.file,
                                width: e.width,
                                height: e.height,
                                width_max: e.width_max,
                                keep_aspect_ratio: e.keep_aspect_ratio,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide
                            }, m);
                        case "img":
                            {
                                const r = !!(null == a ? void 0 : a(e.url));
                                return (0, i.jsx)(yt, {
                                    url: e.url,
                                    alt_text: e.alt_text,
                                    width: e.width,
                                    height: e.height,
                                    aspect_ratio: e.aspect_ratio,
                                    align: e.align,
                                    optimizable: r,
                                    href: e.href,
                                    internal_link: e.internal_link,
                                    open_in_new_tab: e.open_in_new_tab,
                                    mobile_hide: e.mobile_hide,
                                    desktop_hide: e.desktop_hide,
                                    optimizedImageComponent: n,
                                    internalLinkComponent: t,
                                    animation: e.animation,
                                    border_radius: e.border_radius
                                }, m)
                            }
                        case "ul":
                            return (0, i.jsx)(wt, {
                                width: e.width,
                                width_max: e.width_max,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                children: h
                            }, m);
                        case "ol":
                            return (0, i.jsx)(xt, {
                                width: e.width,
                                width_max: e.width_max,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                children: h
                            }, m);
                        case "li":
                            {
                                const t = null == (u = Nn.NB.texts(e).next().value) ? void 0 : u[0];
                                return (0, i.jsx)(jt, {
                                    markerColor: null == t ? void 0 : t.color,
                                    mobile_hide: e.mobile_hide,
                                    desktop_hide: e.desktop_hide,
                                    children: h
                                }, m)
                            }
                        case "action_item":
                            return (0, i.jsx)(kt, {
                                checked: e.checked,
                                width: e.width,
                                width_max: e.width_max,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                children: h
                            }, m);
                        case "code_block":
                            return (0, i.jsx)(Ot, {
                                width: e.width,
                                width_max: e.width_max,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                children: h
                            }, m);
                        case "code_line":
                            return (0, i.jsx)(Nt, {
                                children: h
                            }, m);
                        case "blockquote":
                            return (0, i.jsx)(Dt, {
                                width: e.width,
                                width_max: e.width_max,
                                align: e.align,
                                mobile_hide: e.mobile_hide,
                                desktop_hide: e.desktop_hide,
                                children: h
                            }, m);
                        case "collection":
                            {
                                const t = r || (e => e.children);
                                return (0, i.jsx)(t, {
                                    collectionID: e.collection_data_id,
                                    children: (0, i.jsx)(zt, {
                                        width: e.width,
                                        width_max: e.width_max,
                                        collection_data_id: e.collection_data_id,
                                        collection_template: e.collection_template,
                                        children: h
                                    })
                                }, m)
                            }
                        case "collection_item":
                            return (0, i.jsx)(Lt, {
                                children: h
                            }, m);
                        case "rich_text_content":
                            return (0, i.jsx)(Wt, {
                                width: e.width,
                                width_max: e.width_max,
                                children: h
                            }, m);
                        case "navbar_dropdown_menu":
                            return (0, i.jsx)(ln, {
                                style: e.style,
                                columns: e.children.filter((e => "navbar_dropdown_menu_column" === e.type)).length || 1,
                                children: h
                            }, m);
                        case "navbar_dropdown_menu_column":
                            return 0 === (p = e).children.length || 1 === p.children.length && "text" in p.children[0] && "" === p.children[0].text ? null : (0, i.jsx)(vn, {
                                title: e.title,
                                children: h
                            }, m);
                        case "navbar_dropdown_menu_item":
                            return (0, i.jsx)(jn, {
                                itemType: e.itemType,
                                title: e.title,
                                description: e.description,
                                fontFamily: e.fontFamily,
                                titleColor: e.titleColor,
                                descriptionColor: e.descriptionColor,
                                icon: e.icon,
                                url: e.url,
                                internalLink: e.internalLink,
                                pageId: e.pageId,
                                openInNewTab: e.openInNewTab,
                                internalLinkComponent: t
                            }, m);
                        case "accordion":
                            return (0, i.jsx)(zn, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: h
                            }, m);
                        case "accordion_item":
                            return (0, i.jsx)($n, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: h
                            }, m);
                        case "accordion_item_header":
                            return (0, i.jsx)(rr, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: h
                            }, m);
                        case "accordion_item_content":
                            return (0, i.jsx)(hr, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: h
                            }, m);
                        case "root":
                            {
                                const t = !!(null == a ? void 0 : a(e.backgroundImage)),
                                    r = e.backgroundImage && t && n ? (0, i.jsx)(Cn, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : e.backgroundImage;
                                return (0, i.jsx)(he, {
                                    className: d,
                                    style: c,
                                    align: e.align,
                                    vertical_align: e.vertical_align,
                                    background: e.background,
                                    backgroundImage: r,
                                    backgroundDarken: e.backgroundDarken,
                                    backgroundVideo: e.backgroundVideo,
                                    children: h
                                })
                            }
                        default:
                            return (0, i.jsx)(o.Fragment, {
                                children: h
                            }, m)
                    }
                    var p
                };

            function xr(e) {
                var t = e,
                    {
                        rootClassName: n,
                        rootStyle: r,
                        node: o
                    } = t,
                    a = ((e, t) => {
                        var n = {};
                        for (var r in e) fr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && vr)
                            for (var r of vr(e)) t.indexOf(r) < 0 && gr.call(e, r) && (n[r] = e[r]);
                        return n
                    })(t, ["rootClassName", "rootStyle", "node"]);
                return Nn.xv.isText(o) || "root" !== o.type ? (0, i.jsx)(he, {
                    className: n,
                    style: r,
                    children: wr(_r({
                        node: o
                    }, a))
                }) : (0, i.jsx)(i.Fragment, {
                    children: wr(_r({
                        node: o
                    }, a))
                })
            }
        },
        5870: function(e, t, n) {
            "use strict";
            n.d(t, {
                UO: function() {
                    return a
                },
                nu: function() {
                    return o
                },
                oB: function() {
                    return i
                }
            });
            var r = n(95925);
            const i = (e, t) => ({
                    width: "100%" === t ? t : `${e||r.d}px`,
                    maxWidth: "100%" === t ? t : `min(100%, ${Math.max(r.d,e||0)}px)`
                }),
                o = e => ({
                    height: e ? `${e}px` : "auto"
                }),
                a = (e, t, n) => {
                    let r;
                    return e && t ? r = `${e} / ${t}` : n && (r = `${n} / 1`), {
                        aspectRatio: r
                    }
                }
        },
        40656: function(e, t, n) {
            "use strict";
            n.d(t, {
                z7: function() {
                    return u
                },
                Tj: function() {
                    return g
                },
                Rq: function() {
                    return f
                },
                OS: function() {
                    return O
                },
                fQ: function() {
                    return N
                },
                rO: function() {
                    return C
                },
                W3: function() {
                    return b
                },
                My: function() {
                    return m
                },
                eR: function() {
                    return p
                },
                lq: function() {
                    return v
                }
            });
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                l = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                d = (e, t) => {
                    for (var n in t || (t = {})) o.call(t, n) && l(e, n, t[n]);
                    if (i)
                        for (var n of i(t)) a.call(t, n) && l(e, n, t[n]);
                    return e
                };
            const c = {
                    accent: "#5E5DF0",
                    text_on_accent: "#ffffff"
                },
                s = {
                    unicorn: "linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)",
                    nebula: "linear-gradient(135deg, #6699FF 0%, #FF3366 100%)",
                    water: "linear-gradient(135deg, #2F80ED 0%, #B2FFDA 100%)",
                    candy: "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
                    melon: "linear-gradient(135deg, #D6FF7F 0%, #00B3CC 100%)"
                },
                u = d(d(d({}, c), {
                    default: "var(--background)",
                    gray: "var(--background-highlight)",
                    orange: "#FA9E34",
                    yellow: "#F7CC5C",
                    green: "#23CFA4",
                    blue: "#06C1FF",
                    indigo: "#6968F7",
                    purple: "#8A24FF",
                    pink: "#F54B94",
                    red: "#F32E60",
                    black: "#000000",
                    white: "#ffffff"
                }), s),
                m = d(d(d({}, {
                    accent: "var(--shadow-color-accent)",
                    text_on_accent: "#ffffff"
                }), {
                    default: "var(--shadow-modal-color)",
                    gray: "var(--background-highlight)",
                    orange: "var(--shadow-color-orange)",
                    yellow: "var(--shadow-color-yellow)",
                    green: "var(--shadow-color-green)",
                    blue: "var(--shadow-color-blue)",
                    indigo: "var(--shadow-color-indigo)",
                    purple: "var(--shadow-color-purple)",
                    pink: "var(--shadow-color-pink)",
                    red: "var(--shadow-color-red)",
                    black: "var(--shadow-color-black)",
                    white: "var(--shadow-color-white)"
                }), {
                    unicorn: "var(--shadow-color-unicorn)",
                    nebula: "var(--shadow-color-nebula)",
                    water: "var(--shadow-color-water)",
                    candy: "var(--shadow-color-candy)",
                    melon: "var(--shadow-color-melon)"
                }),
                h = {
                    default: "var(--text-sharp)",
                    gray: "var(--text-light)",
                    orange: "#FA9E34",
                    yellow: "#F7CC5C",
                    green: "#23CFA4",
                    blue: "#06C1FF",
                    indigo: "#6968F7",
                    purple: "#8A24FF",
                    pink: "#F54B94",
                    red: "#F32E60",
                    black: "#000000",
                    white: "#ffffff"
                },
                p = d(d(d({}, c), h), s),
                v = d(d(d({}, c), h), {
                    unicorn: "#F18099",
                    nebula: "#B664B0",
                    water: "#67B7E5",
                    candy: "#9D8EEE",
                    melon: "#5CD4AC"
                }),
                f = {
                    default: "Inter",
                    inter: "Inter",
                    libre_caslon_text: "Libre Caslon Text",
                    space_mono: "Space Mono",
                    quicksand: "Quicksand"
                },
                g = (e, t, n) => e ? (null == t ? void 0 : t[e]) || ((e => {
                    if (/^#(?:[0-9a-fA-F]{3,})$/g.test(e) || (e => /rgba?\(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01\.]\.?\d?)?\s*\)/.test(e))(e) || e.includes("linear-gradient")) return !0;
                    if ("undefined" === typeof window) return !1;
                    const t = (new Option).style;
                    return t.color = e, "" !== t.color
                })(e) ? e : void 0) : n,
                b = e => Object.keys(s).includes(e) || e.includes("linear-gradient");
            var _ = Object.defineProperty,
                y = Object.getOwnPropertySymbols,
                w = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                j = (e, t, n) => t in e ? _(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                k = (e, t) => {
                    for (var n in t || (t = {})) w.call(t, n) && j(e, n, t[n]);
                    if (y)
                        for (var n of y(t)) x.call(t, n) && j(e, n, t[n]);
                    return e
                };
            const O = e => e ? {
                    background: g(e, u)
                } : {},
                N = (e, t) => e ? k({
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }, t ? {
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backgroundBlendMode: "darken"
                } : {}) : {},
                C = (e, t) => e ? k({}, t ? {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundBlendMode: "darken"
                } : {}) : {}
        },
        99162: function(e, t, n) {
            "use strict";
            var r = n(52322),
                i = n(9008),
                o = n.n(i),
                a = n(86741);

            function l(e) {
                var t = e.code,
                    n = e.head;
                return t ? n ? (0, r.jsx)(o(), {
                    children: (0, a.ZP)(t)
                }) : (0, r.jsx)(r.Fragment, {
                    children: (0, a.ZP)(t)
                }) : null
            }
            l.defaultProps = {
                head: !1
            }, t.Z = l
        },
        6055: function(e, t, n) {
            "use strict";
            var r = n(52322),
                i = n(41664),
                o = n.n(i),
                a = n(11163),
                l = n(2784),
                d = n(1438);

            function c(e) {
                var t = e.href,
                    n = e.style,
                    i = e.target,
                    c = e.className,
                    s = e.onClick,
                    u = e.children,
                    m = (0, a.useRouter)(),
                    h = (0, l.useMemo)((function() {
                        return m.pathname.startsWith("/domain/[custom_domain]") ? "/domain/[custom_domain]/[[...path]]" : m.pathname.startsWith("/[slug]") ? "/[slug]/[[...path]]" : t
                    }), [m.pathname, t]),
                    p = function() {
                        var e = m.query.custom_domain;
                        return m.pathname.startsWith("/domain/[custom_domain]") && !window.location.host.startsWith(e) ? "/domain/".concat(e).concat(t) : m.pathname.startsWith("/[slug]") && window.location.host !== d.A2 && window.location.host.endsWith(d.A2 || "") ? t : m.pathname.startsWith("/[slug]") ? "/".concat(m.query.slug).concat(t) : t
                    }();
                return (0, r.jsx)(o(), {
                    href: h,
                    as: p,
                    children: (0, r.jsx)("a", {
                        target: i,
                        className: c,
                        style: n,
                        role: "none",
                        onClick: s,
                        children: u
                    })
                })
            }
            c.defaultProps = {
                target: void 0,
                style: void 0,
                className: void 0,
                onClick: void 0
            }, t.Z = c
        },
        13769: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Z
                }
            });
            var r = n(70865),
                i = n(96670),
                o = n(50930),
                a = n(52322),
                l = n(72779),
                d = n.n(l),
                c = n(2784),
                s = n(40656),
                u = n(84652),
                m = n(5152),
                h = n.n(m),
                p = n(25675),
                v = n.n(p),
                f = n(11163),
                g = n(15725),
                b = null === g.images || void 0 === g.images ? void 0 : g.images.domains,
                _ = !!(null === g.images || void 0 === g.images ? void 0 : g.images.dangerouslyAllowSVG),
                y = null === g.images || void 0 === g.images ? void 0 : g.images.deviceSizes,
                w = null === g.images || void 0 === g.images ? void 0 : g.images.imageSizes,
                x = (0, o.Z)(y || []).concat((0, o.Z)(w || []));
            x.sort((function(e, t) {
                return e - t
            }));
            var j = (null === g.images || void 0 === g.images ? void 0 : g.images.path) || "/_next/image",
                k = function(e) {
                    var t = e.src,
                        n = e.width,
                        r = e.quality;
                    if (t) {
                        if (t.startsWith("//") || t.endsWith(".svg") && !_) return t;
                        if (!t.startsWith("/") && b) try {
                            var i = new URL(t);
                            if (!(null === b || void 0 === b ? void 0 : b.includes(i.hostname)) || i.pathname.endsWith(".svg") && !_) return t
                        } catch (a) {
                            return t
                        }
                        var o = n && x.find((function(e) {
                            return e >= n
                        })) || x[x.length - 1];
                        return "".concat(j, "?url=").concat(encodeURIComponent(t), "&w=").concat(o, "&q=").concat(r || 75)
                    }
                },
                O = n(26331),
                N = n(6055),
                C = h()((function() {
                    return Promise.all([n.e(47), n.e(6559), n.e(7311), n.e(1072), n.e(6261)]).then(n.bind(n, 14020))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [14020]
                        }
                    }
                }),
                I = (0, c.createContext)({
                    isBurgerOpen: !1,
                    setIsBurgerOpen: function() {
                        throw Error("Please wrap component around NavbarContext.Provider")
                    }
                });

            function P(e) {
                var t = (0, c.useContext)(I).setIsBurgerOpen,
                    n = e.color,
                    r = e.url,
                    i = e.internalLink,
                    o = e.openInNewTab,
                    l = e.className,
                    u = e.children,
                    m = d()(l, {
                        "td-navbar-item-color-gradient": !!n && (0, s.W3)(n)
                    });
                if (r) {
                    var h = o ? "_blank" : "_self";
                    return i ? (0, a.jsx)(N.Z, {
                        href: r,
                        target: h,
                        className: m,
                        onClick: function() {
                            return t(!1)
                        },
                        children: u
                    }) : (0, a.jsx)("a", {
                        href: r,
                        target: h,
                        className: m,
                        onClick: function() {
                            return t(!1)
                        },
                        rel: "noreferrer",
                        children: u
                    })
                }
                return (0, a.jsx)("div", {
                    className: m,
                    children: u
                })
            }

            function E(e) {
                var t = e.title,
                    n = e.fontFamily,
                    r = e.type,
                    i = e.color,
                    o = e.url,
                    l = e.internalLink,
                    d = e.openInNewTab,
                    c = e.children,
                    u = "button" === r ? e.background : void 0,
                    m = i && (0, s.W3)(i),
                    h = (0, a.jsx)("div", {
                        className: "button" === r ? "td-navbar-item-button" : "td-navbar-item-link",
                        role: "none",
                        style: {
                            color: (0, s.Tj)(i, s.lq),
                            background: "button" === r ? (0, s.Tj)(u, s.z7) : void 0,
                            fontFamily: n,
                            boxShadow: "button" === r ? "0 10px 20px -10px ".concat((0, s.Tj)(u, s.My)) : void 0
                        },
                        children: (0, a.jsx)("span", {
                            style: {
                                backgroundImage: i && m ? (0, s.Tj)(i, s.eR) : void 0
                            },
                            children: t
                        })
                    });
                return (0, a.jsxs)(P, {
                    url: o,
                    internalLink: l,
                    openInNewTab: d,
                    color: i,
                    className: "td-navbar-item",
                    children: [c, h]
                })
            }

            function S(e) {
                var t = e.title,
                    n = e.fontFamily,
                    r = e.color,
                    i = e.menu,
                    o = e.url,
                    l = e.internalLink,
                    d = e.openInNewTab,
                    m = (0, c.useRef)(null),
                    h = (0, c.useState)(!1),
                    p = h[0],
                    f = h[1];
                return (0, a.jsxs)("div", {
                    ref: m,
                    role: "none",
                    className: "td-navbar-item",
                    onClick: function() {
                        return f((function(e) {
                            return !e
                        }))
                    },
                    "data-state": p ? "open" : void 0,
                    children: [(0, a.jsx)(P, {
                        url: o,
                        internalLink: l,
                        openInNewTab: d,
                        color: r,
                        className: "td-navbar-item-dropdown",
                        children: (0, a.jsx)("div", {
                            style: {
                                color: (0, s.Tj)(r, s.lq),
                                fontFamily: n
                            },
                            children: (0, a.jsx)("span", {
                                style: {
                                    backgroundImage: r && (0, s.W3)(r) ? (0, s.Tj)(r, s.eR) : void 0
                                },
                                children: t
                            })
                        })
                    }), (0, a.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        height: "15",
                        width: "15",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        className: "icon-chevron-down",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        })
                    }), (0, a.jsx)(u.N0.Provider, {
                        value: (0, c.useMemo)((function() {
                            return {
                                navbarItemRef: m
                            }
                        }), []),
                        children: (0, a.jsx)(u.ei, {
                            node: i,
                            internalLinkComponent: N.Z,
                            optimizedImageComponent: v(),
                            isImageOptimizable: O.q,
                            rootClassName: "td-navbar-item-dropdown-menu",
                            rootStyle: {
                                width: "card" === (null === i || void 0 === i ? void 0 : i.style) ? void 0 : "100%"
                            }
                        })
                    })]
                })
            }
            P.defaultProps = {
                className: void 0
            };

            function T(e) {
                var t, n = e.title,
                    r = e.fontFamily,
                    i = e.type,
                    o = e.color,
                    l = e.url,
                    d = e.internalLink,
                    c = e.openInNewTab,
                    s = e.children;
                return "web3_button" === i ? (0, a.jsx)(P, {
                    color: o,
                    className: "td-navbar-item",
                    children: (0, a.jsx)(C, {
                        title: n,
                        fontFamily: r,
                        color: o,
                        background: e.background,
                        children: s
                    })
                }) : "dropdown" !== i || (0 === (t = e.menu).children.length || 1 === t.children.length && 0 === t.children[0].children.length || "navbar_dropdown_menu_column" === t.children[0].type && 1 === t.children[0].children.length && "text" in t.children[0].children[0] && "" === t.children[0].children[0].text) ? (0, a.jsx)(E, {
                    type: "button" === i ? "button" : "link",
                    title: n,
                    fontFamily: r,
                    color: o,
                    background: "button" === i ? e.background : void 0,
                    url: l,
                    internalLink: d,
                    openInNewTab: c,
                    children: s
                }) : (0, a.jsx)(S, {
                    title: n,
                    fontFamily: r,
                    color: o,
                    url: l,
                    internalLink: d,
                    openInNewTab: c,
                    menu: e.menu
                })
            }
            var D = {
                regular: "bx",
                solid: "bxs",
                logo: "bxl"
            };

            function F(e) {
                var t = (0, c.useState)(!1),
                    n = t[0],
                    r = t[1];
                switch (e.logoType) {
                    case "image":
                        var i = e.logoImage,
                            o = e.logoScale,
                            l = n ? i : k({
                                src: i,
                                width: 384
                            });
                        return (0, a.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            children: (0, a.jsx)("img", {
                                src: l,
                                style: {
                                    height: 28 * (o || 1),
                                    maxHeight: "3rem"
                                },
                                alt: "website logo",
                                onError: function() {
                                    return r(!0)
                                }
                            })
                        });
                    case "emoji":
                        var d = e.logoImage,
                            m = e.logoScale;
                        return (0, a.jsx)("div", {
                            className: "td-navbar-brand-logo td-navbar-brand-emoji",
                            style: {
                                fontSize: "".concat(30 * (m || 1), "px")
                            },
                            children: d
                        });
                    case "icon":
                        var h = e.logoImage,
                            p = e.logoScale,
                            v = h,
                            f = D[v.type],
                            g = v.name;
                        return (0, a.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            style: {
                                color: s.eR[v.color],
                                fontSize: "".concat(30 * (p || 1), "px")
                            },
                            children: (0, a.jsx)(u.JO, {
                                type: f,
                                name: g
                            })
                        });
                    default:
                        return (0, a.jsx)("div", {})
                }
            }

            function Z(e) {
                var t = e.logoType,
                    n = e.logoColor,
                    l = e.logoFontFamily,
                    u = e.logoURL,
                    m = e.position,
                    h = e.style,
                    p = e.logoTitle,
                    v = e.logoOpenInNewTab,
                    g = e.logoURLInternalLink,
                    b = e.alignment,
                    _ = e.menu,
                    y = e.endMenu,
                    w = e.isBlur,
                    x = "" !== t ? e.logoImage : void 0,
                    j = (0, f.useRouter)(),
                    k = (0, c.useState)(!1),
                    O = k[0],
                    N = k[1];
                (0, c.useEffect)((function() {
                    var e = function() {
                        return N(!1)
                    };
                    return j.events.on("routeChangeComplete", e),
                        function() {
                            j.events.off("routeChangeComplete", e)
                        }
                }), [j]);
                var C = (_ || []).map((function(e) {
                        return (0, a.jsx)(T, (0, i.Z)((0, r.Z)({}, e), {
                            fontFamily: s.Rq[e.fontFamily]
                        }), "".concat(e.title, "-").concat(e.type))
                    })),
                    P = (y || []).map((function(e) {
                        return (0, a.jsx)(T, (0, i.Z)((0, r.Z)({}, e), {
                            fontFamily: s.Rq[e.fontFamily]
                        }), "".concat(e.title, "-").concat(e.type))
                    })),
                    E = P.length > 0 || C.length > 0;
                return (0, a.jsxs)(I.Provider, {
                    value: (0, c.useMemo)((function() {
                        return {
                            isBurgerOpen: O,
                            setIsBurgerOpen: N
                        }
                    }), [O, N]),
                    children: [(0, a.jsxs)("nav", {
                        id: "td-navbar",
                        className: d()("td-navbar", {
                            "td-navbar-container-shadow": "shadow" === h,
                            "td-navbar-container-border": "border" === h,
                            "td-navbar-container-blur": w && !O,
                            "align-start": "start" === b,
                            "align-center": "center" === b,
                            "align-end": "end" === b
                        }),
                        role: "navigation",
                        "aria-label": "main navigation",
                        style: {
                            position: m,
                            height: 60,
                            maxWidth: "100vw",
                            width: "100%"
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "td-navbar-brand",
                            children: [(p || x) && (0, a.jsx)(T, {
                                title: p || "",
                                color: n || "",
                                fontFamily: s.Rq[l],
                                type: "link",
                                url: u,
                                internalLink: g,
                                openInNewTab: v,
                                children: (0, a.jsx)(F, (0, r.Z)({}, e))
                            }, "".concat(p, "-").concat(t)), E && (0, a.jsxs)("a", {
                                role: "button",
                                className: d()("td-navbar-burger", {
                                    "is-active": O
                                }),
                                onKeyDown: function() {},
                                tabIndex: 0,
                                onClick: function() {
                                    return N((function(e) {
                                        return !e
                                    }))
                                },
                                "aria-label": "menu",
                                "aria-expanded": O,
                                children: [(0, a.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, a.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, a.jsx)("span", {
                                    "aria-hidden": "true"
                                })]
                            })]
                        }), O && (0, a.jsx)("div", {
                            className: "td-navbar-mobile",
                            style: {
                                top: 60,
                                maxHeight: "fixed" === m ? "calc(100vh - ".concat(60, "px)") : void 0
                            },
                            children: (0, o.Z)(C).concat((0, o.Z)(P))
                        }), (0, a.jsx)("div", {
                            className: "td-navbar-middle",
                            children: C.length > 0 && C
                        }), (0, a.jsx)("div", {
                            className: "td-navbar-end",
                            children: P.length > 0 && P
                        })]
                    }), "fixed" === m && (0, a.jsx)("div", {
                        style: {
                            height: 60
                        }
                    })]
                })
            }
        },
        21955: function(e, t, n) {
            "use strict";
            var r = n(52322),
                i = n(9008),
                o = n.n(i),
                a = n(1438);
            t.Z = function(e) {
                var t, n, i, l, d, c, s, u, m, h, p, v, f, g, b, _, y, w, x, j, k, O, N, C, I, P, E, S, T, D, F, Z, B, z, L, R, q, M, W, A, H, Q, $, U, V, G, J, Y, K, X, ee, te, ne, re, ie, oe, ae, le, de, ce, se, ue, me, he, pe, ve, fe, ge, be = e.space,
                    _e = e.page,
                    ye = e.url,
                    we = null === _e || void 0 === _e || null === (t = _e.customization) || void 0 === t ? void 0 : t.item_page_data,
                    xe = null === we || void 0 === we ? void 0 : we.pageSchema,
                    je = (null === xe || void 0 === xe ? void 0 : xe.metadata) && (null === we || void 0 === we || null === (n = we.data) || void 0 === n ? void 0 : n[xe.metadata]),
                    ke = (null === xe || void 0 === xe ? void 0 : xe.name) && (null === we || void 0 === we || null === (i = we.data) || void 0 === i ? void 0 : i[xe.name]),
                    Oe = (null === be || void 0 === be || null === (l = be.metadata) || void 0 === l || null === (d = l.metatags) || void 0 === d ? void 0 : d.title) || (null === be || void 0 === be ? void 0 : be.name) || a.i5,
                    Ne = (null === be || void 0 === be || null === (c = be.metadata) || void 0 === c || null === (s = c.metatags) || void 0 === s ? void 0 : s.description) || a.Yu,
                    Ce = (null === be || void 0 === be ? void 0 : be.icon) || a.Tl,
                    Ie = (null === be || void 0 === be ? void 0 : be.icon) || a.oQ,
                    Pe = (null === _e || void 0 === _e || null === (u = _e.metadata) || void 0 === u || null === (m = u.metatags) || void 0 === m ? void 0 : m.title) || (null === _e || void 0 === _e ? void 0 : _e.name),
                    Ee = null === _e || void 0 === _e || null === (h = _e.metadata) || void 0 === h || null === (p = h.metatags) || void 0 === p ? void 0 : p.description,
                    Se = (null === je || void 0 === je || null === (v = je.metatags) || void 0 === v ? void 0 : v.title) || ke,
                    Te = null === je || void 0 === je || null === (f = je.metatags) || void 0 === f ? void 0 : f.description,
                    De = (null === be || void 0 === be || null === (g = be.metadata) || void 0 === g || null === (b = g.facebook) || void 0 === b ? void 0 : b.title) || (null === be || void 0 === be || null === (_ = be.metadata) || void 0 === _ || null === (y = _.metatags) || void 0 === y ? void 0 : y.title) || (null === be || void 0 === be ? void 0 : be.name) || a.i5,
                    Fe = (null === be || void 0 === be || null === (w = be.metadata) || void 0 === w || null === (x = w.facebook) || void 0 === x ? void 0 : x.description) || (null === be || void 0 === be || null === (j = be.metadata) || void 0 === j || null === (k = j.metatags) || void 0 === k ? void 0 : k.description) || a.Yu,
                    Ze = null === be || void 0 === be || null === (O = be.metadata) || void 0 === O || null === (N = O.facebook) || void 0 === N ? void 0 : N.image,
                    Be = (null === be || void 0 === be ? void 0 : be.name) || a.i5,
                    ze = (null === _e || void 0 === _e || null === (C = _e.metadata) || void 0 === C || null === (I = C.facebook) || void 0 === I ? void 0 : I.title) || (null === _e || void 0 === _e || null === (P = _e.metadata) || void 0 === P || null === (E = P.metatags) || void 0 === E ? void 0 : E.title) || (null === _e || void 0 === _e ? void 0 : _e.name),
                    Le = (null === _e || void 0 === _e || null === (S = _e.metadata) || void 0 === S || null === (T = S.facebook) || void 0 === T ? void 0 : T.description) || (null === _e || void 0 === _e || null === (D = _e.metadata) || void 0 === D || null === (F = D.metatags) || void 0 === F ? void 0 : F.description),
                    Re = null === _e || void 0 === _e || null === (Z = _e.metadata) || void 0 === Z || null === (B = Z.facebook) || void 0 === B ? void 0 : B.image,
                    qe = (null === je || void 0 === je || null === (z = je.facebook) || void 0 === z ? void 0 : z.title) || (null === je || void 0 === je || null === (L = je.metatags) || void 0 === L ? void 0 : L.title) || ke,
                    Me = (null === je || void 0 === je || null === (R = je.facebook) || void 0 === R ? void 0 : R.description) || (null === je || void 0 === je || null === (q = je.metatags) || void 0 === q ? void 0 : q.description),
                    We = null === je || void 0 === je || null === (M = je.facebook) || void 0 === M ? void 0 : M.image,
                    Ae = (null === be || void 0 === be || null === (W = be.metadata) || void 0 === W || null === (A = W.twitter) || void 0 === A ? void 0 : A.title) || (null === be || void 0 === be || null === (H = be.metadata) || void 0 === H || null === (Q = H.metatags) || void 0 === Q ? void 0 : Q.title) || (null === be || void 0 === be ? void 0 : be.name) || a.i5,
                    He = (null === be || void 0 === be || null === ($ = be.metadata) || void 0 === $ || null === (U = $.twitter) || void 0 === U ? void 0 : U.description) || (null === be || void 0 === be || null === (V = be.metadata) || void 0 === V || null === (G = V.metatags) || void 0 === G ? void 0 : G.description) || a.Yu,
                    Qe = (null === be || void 0 === be || null === (J = be.metadata) || void 0 === J || null === (Y = J.twitter) || void 0 === Y ? void 0 : Y.username) || a.gE,
                    $e = null === be || void 0 === be || null === (K = be.metadata) || void 0 === K || null === (X = K.twitter) || void 0 === X ? void 0 : X.image,
                    Ue = (null === _e || void 0 === _e || null === (ee = _e.metadata) || void 0 === ee || null === (te = ee.twitter) || void 0 === te ? void 0 : te.title) || (null === _e || void 0 === _e || null === (ne = _e.metadata) || void 0 === ne || null === (re = ne.metatags) || void 0 === re ? void 0 : re.title) || (null === _e || void 0 === _e ? void 0 : _e.name),
                    Ve = (null === _e || void 0 === _e || null === (ie = _e.metadata) || void 0 === ie || null === (oe = ie.twitter) || void 0 === oe ? void 0 : oe.description) || (null === _e || void 0 === _e || null === (ae = _e.metadata) || void 0 === ae || null === (le = ae.metatags) || void 0 === le ? void 0 : le.description),
                    Ge = null === _e || void 0 === _e || null === (de = _e.metadata) || void 0 === de || null === (ce = de.twitter) || void 0 === ce ? void 0 : ce.username,
                    Je = null === _e || void 0 === _e || null === (se = _e.metadata) || void 0 === se || null === (ue = se.twitter) || void 0 === ue ? void 0 : ue.image,
                    Ye = (null === je || void 0 === je || null === (me = je.twitter) || void 0 === me ? void 0 : me.title) || (null === je || void 0 === je || null === (he = je.metatags) || void 0 === he ? void 0 : he.title) || ke,
                    Ke = (null === je || void 0 === je || null === (pe = je.twitter) || void 0 === pe ? void 0 : pe.description) || (null === je || void 0 === je || null === (ve = je.metatags) || void 0 === ve ? void 0 : ve.description),
                    Xe = null === je || void 0 === je || null === (fe = je.twitter) || void 0 === fe ? void 0 : fe.username,
                    et = null === je || void 0 === je || null === (ge = je.twitter) || void 0 === ge ? void 0 : ge.image;
                return (0, r.jsxs)(o(), {
                    children: [(0, r.jsx)("title", {
                        children: Se || Pe || Oe
                    }), (0, r.jsx)("meta", {
                        name: "description",
                        content: Te || Ee || Ne
                    }), (0, r.jsx)("link", {
                        rel: "icon",
                        type: "image/x-icon",
                        href: Ce
                    }), (0, r.jsx)("link", {
                        rel: "apple-touch-icon",
                        href: Ie
                    }), (0, r.jsx)("meta", {
                        property: "og:url",
                        content: ye
                    }), (0, r.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, r.jsx)("meta", {
                        property: "og:title",
                        content: qe || ze || De
                    }), (0, r.jsx)("meta", {
                        property: "og:description",
                        content: Me || Le || Fe
                    }), (0, r.jsx)("meta", {
                        property: "og:site_name",
                        content: Be
                    }), (We || Re || Ze) && (0, r.jsx)("meta", {
                        property: "og:image",
                        content: We || Re || Ze
                    }), (0, r.jsx)("meta", {
                        name: "twitter:card",
                        content: et || Je || $e ? "summary_large_image" : "summary"
                    }), (0, r.jsx)("meta", {
                        name: "twitter:site",
                        content: Xe || Ge || Qe
                    }), (0, r.jsx)("meta", {
                        name: "twitter:title",
                        content: Ye || Ue || Ae
                    }), (0, r.jsx)("meta", {
                        name: "twitter:description",
                        content: Ke || Ve || He
                    }), (et || Je || $e) && (0, r.jsx)("meta", {
                        name: "twitter:image",
                        content: et || Je || $e
                    })]
                })
            }
        },
        20694: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return J
                }
            });
            var r = n(52322),
                i = n(25675),
                o = n.n(i),
                a = n(2784),
                l = n(84652),
                d = n(69602),
                c = n(50930);
            var s = (0, n(77068).Z)((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = {};
                return (null === e || void 0 === e ? void 0 : e.page_id) ? (n[e.page_id] = t, (null === e || void 0 === e ? void 0 : e.children_template_page_id) && (n[e.children_template_page_id] = t), e.children ? (Object.keys(e.children).forEach((function(r) {
                    Object.assign(n, s(e.children[r], (0, c.Z)(t).concat([r])))
                })), n) : n) : n
            }));
            var u = n(98788),
                m = n(47842),
                h = n(66383),
                p = n(34051),
                v = n.n(p),
                f = n(9669),
                g = n.n(f),
                b = n(31691),
                _ = n(1438);

            function y(e) {
                return e.split(" ").map((function(e) {
                    return e[0].toUpperCase() + e.substring(1)
                })).join(" ")
            }
            var w, x = n(90581),
                j = n(70865),
                k = n(96670),
                O = function() {
                    function e() {
                        (0, x.Z)(this, e), this.api = _.bG, this.config = {}
                    }
                    var t = e.prototype;
                    return t.mergeHeaders = function(e, t) {
                        return (0, k.Z)((0, j.Z)({}, e, t), {
                            headers: (0, j.Z)({}, null === e || void 0 === e ? void 0 : e.headers, (null === t || void 0 === t ? void 0 : t.headers) || {})
                        })
                    }, t.get = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                headers: {}
                            },
                            n = this;
                        return (0, u.Z)(v().mark((function r() {
                            var i;
                            return v().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i = {
                                            headers: {}
                                        }, r.abrupt("return", g().get("".concat(n.api).concat(e), n.mergeHeaders(i, t)));
                                    case 2:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, t.post = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            r = this;
                        return (0, u.Z)(v().mark((function i() {
                            var o;
                            return v().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return o = {
                                            headers: {}
                                        }, i.abrupt("return", g().post("".concat(r.api).concat(e), t, r.mergeHeaders(o, n)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.put = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            r = this;
                        return (0, u.Z)(v().mark((function i() {
                            var o;
                            return v().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return o = {
                                            headers: {}
                                        }, i.abrupt("return", g().put("".concat(r.api).concat(e), t, r.mergeHeaders(o, n)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.patch = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            r = this;
                        return (0, u.Z)(v().mark((function i() {
                            var o;
                            return v().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return o = {
                                            headers: {}
                                        }, i.abrupt("return", g().patch("".concat(r.api).concat(e), t, r.mergeHeaders(o, n)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.delete = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                headers: {}
                            },
                            n = this;
                        return (0, u.Z)(v().mark((function r() {
                            var i;
                            return v().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i = {
                                            headers: {}
                                        }, r.abrupt("return", g().delete("".concat(n.api).concat(e), n.mergeHeaders(i, t)));
                                    case 2:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, e
                }(),
                N = O,
                C = function() {
                    function e() {
                        (0, x.Z)(this, e)
                    }
                    return e.getDataQuery = function(e, t, n, r, i, o) {
                        return {
                            path: "/app/proxy_public/".concat(e, "/notion"),
                            data: {
                                url: "https://api.notion.com/v1/databases/".concat(t, "/query"),
                                method: "POST",
                                header: {
                                    "Content-Type": "application/json",
                                    "Notion-Version": "2021-08-16"
                                },
                                body: {
                                    filter: n,
                                    sorts: r,
                                    start_cursor: i,
                                    page_size: o || void 0
                                }
                            },
                            app: "notion"
                        }
                    }, e.callQuery = function(e, t) {
                        return (0, u.Z)(v().mark((function n() {
                            var r, i;
                            return v().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = new N, n.next = 3, r.post(e, t);
                                    case 3:
                                        return i = n.sent, n.abrupt("return", i);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e.getTable = function(e, t) {
                        return (0, u.Z)(v().mark((function n() {
                            var r, i, o, a;
                            return v().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = {
                                            url: "https://api.notion.com/v1/databases/".concat(t),
                                            method: "GET",
                                            header: {
                                                "Content-Type": "application/json",
                                                "Notion-Version": "2021-08-16"
                                            }
                                        }, i = "/app/proxy_public/".concat(e, "/notion"), o = new N, n.next = 5, o.post(i, r);
                                    case 5:
                                        return a = n.sent, n.abrupt("return", a);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                I = C;
            ! function(e) {
                e.TABLE_ID = "tableID"
            }(w || (w = {}));
            var P = {
                    title: {
                        key: "contains",
                        type: "string"
                    },
                    text: {
                        key: "contains",
                        type: "string"
                    },
                    rich_text: {
                        key: "contains",
                        type: "string"
                    },
                    number: {
                        key: "equals",
                        type: "number"
                    },
                    checkbox: {
                        key: "equals",
                        type: "boolean"
                    },
                    select: {
                        key: "equals",
                        type: "string"
                    },
                    multi_select: {
                        key: "contains",
                        type: "string"
                    },
                    date: {
                        key: "equals",
                        type: "true"
                    },
                    url: {
                        key: "contains",
                        type: "string"
                    },
                    email: {
                        key: "contains",
                        type: "string"
                    },
                    phone: {
                        key: "contains",
                        type: "string"
                    },
                    phone_number: {
                        key: "contains",
                        type: "string"
                    },
                    created_time: {
                        key: "equals",
                        type: "true"
                    },
                    last_edited_time: {
                        key: "equals",
                        type: "true"
                    }
                },
                E = {
                    title: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    text: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    rich_text: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    number: {
                        equals: "number",
                        does_not_equal: "number",
                        greater_than: "number",
                        less_than: "number",
                        greater_than_or_equal_to: "number",
                        less_than_or_equal_to: "number",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    checkbox: {
                        equals: "boolean",
                        does_not_equal: "boolean"
                    },
                    select: {
                        equals: "string",
                        does_not_equal: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    multi_select: {
                        contains: "string",
                        does_not_contain: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    date: {
                        equals: "string",
                        before: "string",
                        after: "string",
                        on_or_before: "string",
                        on_or_after: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    files: {
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    url: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    email: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    phone: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    phone_number: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    created_time: {
                        equals: "string",
                        before: "string",
                        after: "string",
                        on_or_before: "string",
                        on_or_after: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    last_edited_time: {
                        equals: "string",
                        before: "string",
                        after: "string",
                        on_or_before: "string",
                        on_or_after: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    }
                },
                S = function(e) {
                    try {
                        var t = new Date(Date.parse(e)).toISOString().split("Z")[0],
                            n = (0, h.Z)(t.split("T"), 2),
                            r = n[0],
                            i = n[1].split(":").slice(0, 2).join(":");
                        return "".concat(r).concat("00:00" !== i ? " ".concat(i) : "")
                    } catch (o) {
                        return e
                    }
                },
                T = function(e) {
                    var t = e.type,
                        n = null,
                        r = null;
                    switch (t) {
                        case "title":
                        case "rich_text":
                            var i, o;
                            r = null === (o = null === e || void 0 === e || null === (i = e[t]) || void 0 === i ? void 0 : i.map((function(e) {
                                return e.plain_text
                            }))) || void 0 === o ? void 0 : o.join("");
                            break;
                        case "string":
                        case "checkbox":
                        case "url":
                        case "email":
                        case "phone_number":
                        case "number":
                            r = null === e || void 0 === e ? void 0 : e[t];
                            break;
                        case "multi_select":
                            var a;
                            r = null === e || void 0 === e || null === (a = e[t]) || void 0 === a ? void 0 : a.map((function(e) {
                                return e.name
                            })).join(", ");
                            break;
                        case "date":
                            var l, d, c;
                            if (r = S(null === e || void 0 === e || null === (l = e[t]) || void 0 === l ? void 0 : l.start), null === e || void 0 === e || null === (d = e[t]) || void 0 === d ? void 0 : d.end) r = "".concat(r, " - ").concat(S(null === e || void 0 === e || null === (c = e[t]) || void 0 === c ? void 0 : c.end));
                            break;
                        case "people":
                            var s;
                            r = null === e || void 0 === e || null === (s = e[t]) || void 0 === s ? void 0 : s.map((function(e) {
                                return e.name
                            })).join(", ");
                            break;
                        case "files":
                            var u, m, h, p, v, f, g, b, _, y, w;
                            if ("file" === (null === e || void 0 === e || null === (u = e[t]) || void 0 === u || null === (m = u[0]) || void 0 === m ? void 0 : m.type)) r = null === e || void 0 === e || null === (h = e[t]) || void 0 === h || null === (p = h[0]) || void 0 === p || null === (v = p.file) || void 0 === v ? void 0 : v.url, n = null === e || void 0 === e || null === (f = e[t]) || void 0 === f || null === (g = f[0]) || void 0 === g || null === (b = g.file) || void 0 === b ? void 0 : b.expiry_time;
                            else r = null === e || void 0 === e || null === (_ = e[t]) || void 0 === _ || null === (y = _[0]) || void 0 === y || null === (w = y.external) || void 0 === w ? void 0 : w.url;
                            break;
                        case "formula":
                            return T(null === e || void 0 === e ? void 0 : e[t]);
                        case "created_time":
                        case "last_edited_time":
                            r = S(null === e || void 0 === e ? void 0 : e[t]);
                            break;
                        case "select":
                        case "created_by":
                        case "last_edited_by":
                            var x;
                            r = null === e || void 0 === e || null === (x = e[t]) || void 0 === x ? void 0 : x.name;
                            break;
                        case "rollup":
                            if ("show_original" === (null === e || void 0 === e ? void 0 : e[t].function) || "show_unique" === (null === e || void 0 === e ? void 0 : e[t].function)) {
                                var j = null === e || void 0 === e ? void 0 : e[t].type;
                                r = null === e || void 0 === e ? void 0 : e[t][j].map((function(e) {
                                    return e[e.type].map((function(e) {
                                        return e.plain_text
                                    })).join(" ")
                                })).join(", ");
                                break
                            }
                            r = T(null === e || void 0 === e ? void 0 : e[t]), (null === e || void 0 === e ? void 0 : e[t].function.includes("percent")) && (r = "".concat(Math.round(1e3 * Number(r.propValue)) / 10, "%"));
                            break;
                        default:
                            r = ""
                    }
                    return {
                        propValue: r,
                        expiresAt: n
                    }
                };

            function D(e, t) {
                if (t && t) switch (e) {
                    case "string":
                        return "".concat(t);
                    case "number":
                        if (!t || Number.isNaN(t) || Number.isNaN(parseFloat(t)) || Number.isNaN(Number(t))) return;
                        return parseFloat(t);
                    case "date":
                        if (!(0, b.Z)(t)) return;
                        return function(e) {
                            var t = new Date(Date.parse("".concat(e, " GMT+0000"))).toISOString().split("Z")[0],
                                n = (0, h.Z)(t.split("T"), 2),
                                r = n[0],
                                i = n[1].split(":").slice(0, 2).join(":");
                            return "".concat(r).concat("00:00" !== i ? " ".concat(i) : "")
                        }(t);
                    case "boolean":
                        if ("string" !== typeof t) return t;
                        if ("true" !== (null === t || void 0 === t ? void 0 : t.toLowerCase()) && "false" !== (null === t || void 0 === t ? void 0 : t.toLowerCase())) return;
                        return "true" === (null === t || void 0 === t ? void 0 : t.toLowerCase());
                    case "true":
                        if ("string" !== typeof t) return t;
                        if ("true" !== (null === t || void 0 === t ? void 0 : t.toLowerCase())) return;
                        return "true" === (null === t || void 0 === t ? void 0 : t.toLowerCase());
                    default:
                        return t
                }
            }
            var F = {
                    getColumnNames: function() {
                        var e = (0, u.Z)(v().mark((function e(t, n) {
                            var r, i, o, a, l;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = null === n || void 0 === n ? void 0 : n[w.TABLE_ID], e.next = 4, I.getTable(t, i);
                                    case 4:
                                        if (o = e.sent, a = null === o || void 0 === o || null === (r = o.data) || void 0 === r ? void 0 : r.properties) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", {});
                                    case 8:
                                        return l = {}, Object.keys(a).forEach((function(e) {
                                            l[e] = {
                                                id: a[e].id,
                                                type: a[e].type,
                                                name: e
                                            }
                                        })), e.abrupt("return", l);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataQuery: function(e, t, n) {
                        var r, i = null === t || void 0 === t ? void 0 : t[w.TABLE_ID],
                            o = null === t || void 0 === t ? void 0 : t.metadata,
                            a = (null === o || void 0 === o ? void 0 : o.filter_column) ? (0, m.Z)({
                                property: o.filter_column
                            }, o.filter_column_type, (0, m.Z)({}, o.filter_condition, D(null === (r = E[o.filter_column_type]) || void 0 === r ? void 0 : r[o.filter_condition], o.filter_value))) : void 0,
                            l = (null === o || void 0 === o ? void 0 : o.sort_column) ? [{
                                property: o.sort_column,
                                direction: o.sort_direction
                            }] : void 0;
                        return I.getDataQuery(e, i, a, l, n, null === o || void 0 === o ? void 0 : o.max_items)
                    },
                    constructGetDataResult: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.results;
                        if (!t) return {
                            data: [],
                            has_more: null === e || void 0 === e ? void 0 : e.has_more,
                            next_cursor: null === e || void 0 === e ? void 0 : e.next_cursor,
                            expires_at: null
                        };
                        var n = null,
                            r = [];
                        return t.forEach((function(e) {
                            if (null === e || void 0 === e ? void 0 : e.properties) {
                                var t = {},
                                    i = null === e || void 0 === e ? void 0 : e.properties;
                                Object.entries(i).forEach((function(e) {
                                    var r, i, o = (0, h.Z)(e, 2),
                                        a = o[0],
                                        l = o[1],
                                        d = T(l),
                                        c = d.propValue,
                                        s = d.expiresAt;
                                    s && (n = n && (null === (r = new Date(n)) || void 0 === r ? void 0 : r.getTime()) < (null === (i = new Date(s)) || void 0 === i ? void 0 : i.getTime()) ? n : s);
                                    c && (t[a] = c)
                                })), t[_.it] = null === e || void 0 === e ? void 0 : e.id, r.push(t)
                            }
                        })), {
                            data: r,
                            has_more: null === e || void 0 === e ? void 0 : e.has_more,
                            next_cursor: null === e || void 0 === e ? void 0 : e.next_cursor,
                            expires_at: n
                        }
                    },
                    getData: function() {
                        var e = (0, u.Z)(v().mark((function e(t, n, r) {
                            var i, o;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = F.getDataQuery(t, n, r), e.next = 3, I.callQuery(i.path, i.data);
                                    case 3:
                                        return o = e.sent, e.abrupt("return", F.constructGetDataResult(null === o || void 0 === o ? void 0 : o.data));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataBySlug: function() {
                        var e = (0, u.Z)(v().mark((function e(t, n, r) {
                            var i, o, a, l, d, c, s, u, h, p, f, g;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d = null === n || void 0 === n ? void 0 : n[w.TABLE_ID], c = (0, m.Z)({
                                            property: _.OH.SLUG.fieldName
                                        }, _.OH.SLUG.type, {
                                            equals: r
                                        }), s = I.getDataQuery(t, d, c, void 0, void 0, 1), e.next = 6, I.callQuery(s.path, s.data);
                                    case 6:
                                        if (u = e.sent, !((null === (h = F.constructGetDataResult(null === u || void 0 === u ? void 0 : u.data)) || void 0 === h || null === (i = h.data) || void 0 === i ? void 0 : i.length) <= 0)) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error("item page not found");
                                    case 10:
                                        return p = null === h || void 0 === h || null === (o = h.data) || void 0 === o ? void 0 : o[0], e.next = 13, F.JSONFileToContent(p, n);
                                    case 13:
                                        return f = e.sent, g = null === (a = n) || void 0 === a || null === (l = a.pageSchema) || void 0 === l ? void 0 : l.metadata, f[g] = f[g] ? JSON.parse(f[g]) : f[g], h.data[0] = f, e.abrupt("return", h);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    search: function() {
                        var e = (0, u.Z)(v().mark((function e(t, n, r, i, o) {
                            var a, l, d, c, s, u, h, p, f, g;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return l = null === n || void 0 === n ? void 0 : n[w.TABLE_ID], d = null === n || void 0 === n ? void 0 : n.metadata, c = (null === d || void 0 === d ? void 0 : d.filter_column) ? (0, m.Z)({
                                            property: d.filter_column
                                        }, d.filter_column_type, (0, m.Z)({}, d.filter_condition, D(null === (a = E[d.filter_column_type]) || void 0 === a ? void 0 : a[d.filter_condition], d.filter_value))) : void 0, s = null === d || void 0 === d ? void 0 : d.search_columns, s = Array.isArray(s) && (null === s || void 0 === s ? void 0 : s.length) > 0 ? s : Object.keys(i), u = [], r && s.forEach((function(e) {
                                            var t, n = i[e];
                                            if (P[n.type]) {
                                                var o = P[n.type],
                                                    a = o.key,
                                                    l = o.type,
                                                    d = D(l, r);
                                                if (null !== d && void 0 !== d && "" !== d) {
                                                    if ("string" === l) return void(u = u.concat([(0, m.Z)({
                                                        property: n.name
                                                    }, n.type, (0, m.Z)({}, a, d)), (0, m.Z)({
                                                        property: n.name
                                                    }, n.type, (0, m.Z)({}, a, d.toLowerCase())), (0, m.Z)({
                                                        property: n.name
                                                    }, n.type, (0, m.Z)({}, a, d.toUpperCase())), (0, m.Z)({
                                                        property: n.name
                                                    }, n.type, (0, m.Z)({}, a, (t = d, t.charAt(0).toUpperCase() + t.slice(1)))), (0, m.Z)({
                                                        property: n.name
                                                    }, n.type, (0, m.Z)({}, a, y(d)))]));
                                                    u.push((0, m.Z)({
                                                        property: n.name
                                                    }, n.type, (0, m.Z)({}, a, d)))
                                                }
                                            }
                                        })), h = c, (null === u || void 0 === u ? void 0 : u.length) > 0 && c && (h = {
                                            and: [c, {
                                                or: u
                                            }]
                                        }), (null === u || void 0 === u ? void 0 : u.length) > 0 && !c && (h = {
                                            or: u
                                        }), p = (null === d || void 0 === d ? void 0 : d.sort_column) ? [{
                                            property: null === d || void 0 === d ? void 0 : d.sort_column,
                                            direction: null === d || void 0 === d ? void 0 : d.sort_direction
                                        }] : void 0, f = I.getDataQuery(t, l, h, p, o, null === d || void 0 === d ? void 0 : d.max_items), e.next = 15, I.callQuery(f.path, f.data);
                                    case 15:
                                        return g = e.sent, e.abrupt("return", F.constructGetDataResult(null === g || void 0 === g ? void 0 : g.data));
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r, i, o) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getItemPageDataID: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.integration,
                            n = null === e || void 0 === e ? void 0 : e[w.TABLE_ID];
                        return "".concat(t, "_").concat(n)
                    },
                    tableConnected: function(e) {
                        return e && (null === e || void 0 === e ? void 0 : e[w.TABLE_ID])
                    },
                    JSONFileToContent: function() {
                        var e = (0, u.Z)(v().mark((function e(t, n) {
                            var r, i, o, a, l, d;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = t, o = null === n || void 0 === n || null === (r = n.pageSchema) || void 0 === r ? void 0 : r.content, !t || !t[o]) {
                                            e.next = 10;
                                            break
                                        }
                                        return a = t[o], e.next = 7, g().get(a, {
                                            headers: {
                                                "Cache-Control": "no-cache",
                                                Pragma: "no-cache",
                                                Expires: "0"
                                            }
                                        });
                                    case 7:
                                        l = e.sent, d = (null === l || void 0 === l ? void 0 : l.data) ? JSON.parse(null === l || void 0 === l ? void 0 : l.data) : null, i[o] = d;
                                    case 10:
                                        return e.abrupt("return", i);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                Z = F,
                B = function(e) {
                    if ("notion" === e) return Z;
                    throw new Error("Unknown integration ".concat(e))
                },
                z = n(203),
                L = function(e, t, n, r, i) {
                    var o = i.collection_connect_data,
                        a = i.collection_connect_data_keys,
                        l = (0, j.Z)({}, i);
                    return o && a.forEach((function(i) {
                        var o = i.schemaKey,
                            a = i.blockElementKey,
                            d = t[o],
                            c = e[d];
                        if (c) l[a] = String(c);
                        else if (d !== _.Si || !z.W_.isElement(l) || "a" !== l.type && "button" !== l.type && "container" !== l.type && "img" !== l.type) l[a] = "";
                        else {
                            l.page_id = n, l.internal_link = !0;
                            var s = "".concat("/".concat(r.join("/")), "/").concat(e[_.OH.SLUG.fieldName]);
                            "img" === l.type ? l.href = s : l.url = s
                        }
                    })), z.W_.isElement(l) && (l.children = l.children.map((function(i) {
                        return L(e, t, n, r, i)
                    }))), l
                },
                R = L,
                q = function(e, t, n, r, i) {
                    var o = (0, k.Z)((0, j.Z)({}, i), {
                        id: i.id || r()
                    });
                    if (z.W_.isElement(o) && "collection" === o.type) {
                        var a = o.collection_data_id,
                            l = a && e[a];
                        if (l) {
                            var d, c, s = B(l.integration).getItemPageDataID(l),
                                u = t[s],
                                m = null === l || void 0 === l ? void 0 : l.data,
                                h = null === (d = o.collection_template) || void 0 === d ? void 0 : d.template,
                                p = null === (c = o.collection_template) || void 0 === c ? void 0 : c.schema;
                            m && (o.children = (null === m || void 0 === m ? void 0 : m.length) > 0 ? m.map((function(e) {
                                return {
                                    id: r(),
                                    type: "collection_item",
                                    children: [R(e, p, null === u || void 0 === u ? void 0 : u.childrenTemplatePageID, n[null === u || void 0 === u ? void 0 : u.childrenTemplatePageID], h)]
                                }
                            })) : [{
                                id: r(),
                                text: ""
                            }])
                        }
                    }
                    return (0, j.Z)({}, o, z.W_.isElement(o) ? {
                        children: o.children.map((function(i) {
                            return z.W_.isElement(i) ? q(e, t, n, r, i) : i
                        }))
                    } : {})
                },
                M = q,
                W = n(6804),
                A = function(e, t, n) {
                    var r = (0, j.Z)({}, n);
                    if (z.W_.isElement(r))
                        if ("rich_text_content" === r.type) {
                            var i = t.content,
                                o = e[i];
                            try {
                                var a, l = null === o || void 0 === o || null === (a = o[0]) || void 0 === a ? void 0 : a.children;
                                l && (r.children = l)
                            } catch (d) {}
                        } else r.children = r.children.map((function(n) {
                            return A(e, t, n)
                        }));
                    return r
                },
                H = function(e, t, n, r, i, o) {
                    var a = (0, k.Z)((0, j.Z)({}, o), {
                        id: o.id || i()
                    });
                    return e && t.contentSchema && (a = R(e, t.contentSchema, n, r, o), a = A(e, t.pageSchema, a)), a
                },
                Q = (function() {
                    var e = (0, u.Z)(v().mark((function e(t) {
                        var n, r, i, o, a, l, d, c, u, m, h, p;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.content, r = t.spaceID, i = t.pageID, o = t.spaceRoutes, a = t.itemPageData, l = t.childTemplateSlug, m = s(o), e.next = 5, null === (d = B(a.integration)) || void 0 === d ? void 0 : d.getDataBySlug(r, a, l);
                                case 5:
                                    return h = e.sent, p = H(null === h || void 0 === h || null === (c = h.data) || void 0 === c ? void 0 : c[0], a, i, m[i], W.Z, n), e.abrupt("return", [p, (0, k.Z)((0, j.Z)({}, a), {
                                        data: null === h || void 0 === h || null === (u = h.data) || void 0 === u ? void 0 : u[0],
                                        expiresAt: h.expires_at
                                    })]);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), n(89342)),
                $ = n(64368);

            function U(e) {
                var t, n, i, o = e.collectionID,
                    h = e.children,
                    p = (0, a.useContext)(d.z),
                    f = (0, a.useContext)($.u),
                    g = null === p || void 0 === p || null === (t = p.customization) || void 0 === t || null === (n = t.collection_data) || void 0 === n ? void 0 : n[o],
                    b = (0, a.useState)(!1),
                    _ = b[0],
                    y = b[1],
                    w = (0, a.useState)({
                        hasMore: null === g || void 0 === g ? void 0 : g.hasMore,
                        nextCursor: null === g || void 0 === g ? void 0 : g.nextCursor,
                        fetchedCursor: null === g || void 0 === g ? void 0 : g.fetchedCursor,
                        data: null === g || void 0 === g ? void 0 : g.data,
                        searchQuery: ""
                    }),
                    x = w[0],
                    O = w[1],
                    N = (0, a.useState)(!1),
                    C = N[0],
                    I = N[1],
                    P = (0, a.useCallback)((function(e) {
                        var t, n, r;
                        O(e);
                        var i = null === (t = f.customization) || void 0 === t ? void 0 : t.collection_item_data,
                            a = (0, k.Z)((0, j.Z)({}, null === (n = p.customization) || void 0 === n ? void 0 : n.collection_data), (0, m.Z)({}, o, (0, j.Z)({}, g, e)));
                        if (a && i && (null === (r = p.published_content[0]) || void 0 === r ? void 0 : r.children)) {
                            var l = s(f.routes),
                                d = M(a, i, l, W.Z, p.published_content[0]);
                            p.setPublishedContent([d])
                        }
                    }), [g, o, p, null === (i = f.customization) || void 0 === i ? void 0 : i.collection_item_data, f.routes]),
                    E = (0, a.useCallback)(function() {
                        var e = (0, u.Z)(v().mark((function e(t, n) {
                            var r, i, o, a, l, d, s;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (g) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (r = B(g.integration), i = n ? void 0 : x.nextCursor, o = n ? [] : x.data || [], !r.tableConnected(g)) {
                                            e.next = 17;
                                            break
                                        }
                                        return I(!0), e.next = 9, r.getColumnNames(f.id, g);
                                    case 9:
                                        return a = e.sent, l = JSON.parse(JSON.stringify(g)), e.next = 13, r.search(f.id, (0, Q.Z)(l, "metadata.max_items"), t, a, i || void 0);
                                    case 13:
                                        d = e.sent, s = {
                                            hasMore: null === d || void 0 === d ? void 0 : d.has_more,
                                            nextCursor: null === d || void 0 === d ? void 0 : d.next_cursor,
                                            fetchedCursor: i,
                                            data: (0, c.Z)(o).concat((0, c.Z)((null === d || void 0 === d ? void 0 : d.data) || [])),
                                            searchQuery: t
                                        }, P(s), I(!1);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(), [g, x.nextCursor, x.data, f.id, P]),
                    S = (0, a.useCallback)(function() {
                        var e = (0, u.Z)(v().mark((function e(t) {
                            var n, r, i, o, a;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!x.searchQuery) {
                                            e.next = 3;
                                            break
                                        }
                                        return E(x.searchQuery, !1), e.abrupt("return");
                                    case 3:
                                        if (g) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (n = B(g.integration), r = t ? void 0 : x.nextCursor, i = t ? [] : x.data || [], !n.tableConnected(g) || r === x.fetchedCursor) {
                                            e.next = 16;
                                            break
                                        }
                                        return I(!0), e.next = 12, n.getData(f.id, g, r || void 0);
                                    case 12:
                                        o = e.sent, a = {
                                            hasMore: null === o || void 0 === o ? void 0 : o.has_more,
                                            nextCursor: null === o || void 0 === o ? void 0 : o.next_cursor,
                                            fetchedCursor: r,
                                            data: (0, c.Z)(i).concat((0, c.Z)((null === o || void 0 === o ? void 0 : o.data) || [])),
                                            searchQuery: x.searchQuery
                                        }, P(a), I(!1);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [x.searchQuery, x.nextCursor, x.data, x.fetchedCursor, g, E, f.id, P]);
                (0, a.useEffect)((function() {
                    return y(!0)
                }), []), (0, a.useEffect)((function() {
                    if (_) {
                        var e;
                        if ((null === g || void 0 === g ? void 0 : g.expiresAt) && (new Date).getTime() > (null === (e = new Date(null === g || void 0 === g ? void 0 : g.expiresAt)) || void 0 === e ? void 0 : e.getTime()) - 1e4) return void O({
                            hasMore: void 0,
                            nextCursor: void 0,
                            fetchedCursor: "-1",
                            data: null === g || void 0 === g ? void 0 : g.data,
                            searchQuery: ""
                        });
                        O({
                            hasMore: null === g || void 0 === g ? void 0 : g.hasMore,
                            nextCursor: null === g || void 0 === g ? void 0 : g.nextCursor,
                            fetchedCursor: null === g || void 0 === g ? void 0 : g.fetchedCursor,
                            data: null === g || void 0 === g ? void 0 : g.data,
                            searchQuery: ""
                        })
                    }
                }), [_, g]), (0, a.useEffect)((function() {
                    "-1" === (null === x || void 0 === x ? void 0 : x.fetchedCursor) && S(!0)
                }), [x]);
                var T = (0, a.useMemo)((function() {
                    return {
                        collectionData: (0, j.Z)({
                            integration: null === g || void 0 === g ? void 0 : g.integration,
                            metadata: null === g || void 0 === g ? void 0 : g.metadata
                        }, x),
                        search: E,
                        fetchMore: S,
                        loading: C
                    }
                }), [null === g || void 0 === g ? void 0 : g.integration, null === g || void 0 === g ? void 0 : g.metadata, x, S, C, E]);
                return (0, r.jsx)(l.WH.Provider, {
                    value: T,
                    children: h
                })
            }
            var V = n(26331),
                G = n(6055);

            function J(e) {
                var t = e.isChildTemplate,
                    n = e.childTemplateSlug,
                    i = (0, a.useContext)(d.z);
                return function(e) {
                    var t, n = e.isChildTemplate,
                        r = e.childTemplateSlug,
                        i = (0, a.useContext)($.u),
                        o = (0, a.useContext)(d.z),
                        l = null === o || void 0 === o || null === (t = o.customization) || void 0 === t ? void 0 : t.item_page_data,
                        c = (0, a.useCallback)((0, u.Z)(v().mark((function e() {
                            var t, n, a, d, c;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(l && o && (null === i || void 0 === i ? void 0 : i.routes) && r)) {
                                            e.next = 8;
                                            break
                                        }
                                        return a = s(i.routes), e.next = 5, null === (t = B(null === l || void 0 === l ? void 0 : l.integration)) || void 0 === t ? void 0 : t.getDataBySlug(null === i || void 0 === i ? void 0 : i.id, l, r);
                                    case 5:
                                        d = e.sent, c = H(null === d || void 0 === d || null === (n = d.data) || void 0 === n ? void 0 : n[0], l, o.id, a[o.id], W.Z, o.published_content[0]), o.setPublishedContent([c]);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [l, o, null === i || void 0 === i ? void 0 : i.routes, null === i || void 0 === i ? void 0 : i.id, r]);
                    (0, a.useEffect)((function() {
                        var e;
                        n && r && (null === l || void 0 === l ? void 0 : l.expiresAt) && (new Date).getTime() > (null === (e = new Date(null === l || void 0 === l ? void 0 : l.expiresAt)) || void 0 === e ? void 0 : e.getTime()) - 1e4 && c()
                    }), [null === l || void 0 === l ? void 0 : l.expiresAt, r, n])
                }({
                    isChildTemplate: t,
                    childTemplateSlug: n
                }), (0, r.jsx)(l.ei, {
                    node: i.published_content[0],
                    internalLinkComponent: G.Z,
                    optimizedImageComponent: o(),
                    collectionProviderComponent: U,
                    isImageOptimizable: V.q
                })
            }
            J.defaultProps = {
                childTemplateSlug: void 0
            }
        },
        76016: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r, i, o = n(52322),
                a = n(41664),
                l = n.n(a),
                d = n(1438);
            ! function(e) {
                e.OWNER = "owner", e.ADMIN = "admin", e.WRITER = "writer", e.READER = "reader"
            }(r || (r = {})),
            function(e) {
                e.ACTIVE = "active", e.INACTIVE = "inactive"
            }(i || (i = {}));
            var c = n(73887),
                s = n.n(c);
            var u = function(e) {
                var t, n = e.subscription,
                    r = e.spaceID;
                return (null === n || void 0 === n ? void 0 : n.product_id) === d.Uw || (null === n || void 0 === n ? void 0 : n.status) !== i.ACTIVE || (null === n || void 0 === n || null === (t = n.metadata) || void 0 === t ? void 0 : t.affiliate) ? (0, o.jsx)(l(), {
                    })
                }) : null
            }
        },
        1438: function(e, t, n) {
            "use strict";
            n.d(t, {
                A2: function() {
                    return i
                },
                Dn: function() {
                    return a
                },
                Fh: function() {
                    return g
                },
                OH: function() {
                    return f
                },
                PJ: function() {
                    return o
                },
                Si: function() {
                    return v
                },
                Tl: function() {
                    return u
                },
                Uw: function() {
                    return h
                },
                Yu: function() {
                    return m
                },
                bG: function() {
                    return r
                },
                gE: function() {
                    return d
                },
                i5: function() {
                    return l
                },
                it: function() {
                    return p
                },
                oQ: function() {
                    return c
                },
                og: function() {
                    return s
                }
            });
            var r = "https://api.typedream.com/v0",
                i = "typedream.app",
                o = "https://analytics.typedream.com",
                a = "build.typedream.com",
                l = "Typedream",
                d = "@typedreamHQ",
                c = "/images/logo@100.png",
                s = "https://typedream.com",
                u = "/favicon.ico",
                m = "A website made with Typedream.",
                h = "FREE",
                p = "id",
                v = "ITEM_PAGE_URL",
                f = {
                    METADATA: {
                        fieldName: "".concat("TD", ":metadata"),
                        label: "Metadata",
                        description: "For SEO Settings, Twitter cards, etc.",
                        type: "rich_text"
                    },
                    SLUG: {
                        fieldName: "".concat("TD", ":slug"),
                        label: "Slug",
                        description: "To specify the URL for each item",
                        type: "rich_text"
                    },
                    PUBLISHED_CONTENT: {
                        fieldName: "TD:page_content_published",
                        label: "Page Content",
                        description: "To store your page's published rich text content",
                        type: "rich_text"
                    },
                    CONTENT: {
                        fieldName: "TD:page_content",
                        label: "Page Content Draft",
                        description: "To store your page's draft rich text content",
                        type: "rich_text"
                    }
                },
                g = "typedream_theme"
        },
        69602: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return d
                },
                z: function() {
                    return l
                }
            });
            var r = n(70865),
                i = n(96670),
                o = n(52322),
                a = n(2784),
                l = (0, a.createContext)(null);

            function d(e) {
                var t = e.page,
                    n = e.children,
                    d = (0, a.useState)(t),
                    c = d[0],
                    s = d[1];
                (0, a.useEffect)((function() {
                    s(t)
                }), [t]);
                var u = (0, a.useMemo)((function() {
                    return (0, i.Z)((0, r.Z)({}, c), {
                        setPublishedContent: function(e) {
                            s((0, i.Z)((0, r.Z)({}, c), {
                                published_content: e
                            }))
                        }
                    })
                }), [c]);
                return (0, o.jsx)(l.Provider, {
                    value: u,
                    children: n
                })
            }
        },
        64368: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return o
                },
                u: function() {
                    return i
                }
            });
            var r = n(52322),
                i = (0, n(2784).createContext)(null);

            function o(e) {
                var t = e.space,
                    n = e.children;
                return (0, r.jsx)(i.Provider, {
                    value: t,
                    children: n
                })
            }
        },
        41715: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return s
                }
            });
            var r = n(98788),
                i = n(34051),
                o = n.n(i),
                a = function() {
                    var e = (0, r.Z)(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, fetch("/api/clear-preview-mode-cookies", {
                                        keepalive: !0
                                    });
                                case 4:
                                    e.next = 8;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1);
                                case 8:
                                    return e.prev = 8, window.self !== window.top ? window.parent.location.reload() : window.location.reload(), e.finish(8);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 6, 8, 11]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                l = n(42838),
                d = n(2784),
                c = n(1438),
                s = function(e) {
                    (0, d.useEffect)((function() {
                        var t = [window.location.hostname, "localhost", c.Dn, /.*typedream.*\.vercel\.app$/];
                        !e || window.self !== window.top && t.some((function(e) {
                            var t = new URL(document.referrer).hostname;
                            return (0, l.Z)(e, RegExp) ? e.test(t) : "string" === typeof e && e === t
                        })) || a()
                    }), [e])
                }
        },
        13304: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return m
                }
            });
            var r = n(52322),
                i = n(2784),
                o = n(1438),
                a = function() {
                    var e = document.querySelector("html"),
                        t = "light" === ((null === e || void 0 === e ? void 0 : e.getAttribute("data-theme")) || "light") ? "dark" : "light";
                    null === e || void 0 === e || e.setAttribute("data-theme", t), localStorage.setItem(o.Fh, t)
                },
                l = function() {
                    var e = document.querySelector("html"),
                        t = localStorage.getItem(o.Fh) || "light";
                    null === e || void 0 === e || e.setAttribute("data-theme", t)
                },
                d = n(11617),
                c = n.n(d);

            function s() {
                return (0, r.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: c().moon,
                    children: (0, r.jsx)("path", {
                        d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"
                    })
                })
            }

            function u() {
                return (0, r.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: c().sun,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
                        clipRule: "evenodd"
                    })
                })
            }
            var m = function() {
                return (0, i.useEffect)(l, []), (0, r.jsxs)("button", {
                    type: "button",
                    className: c().switch,
                    onClick: a,
                    tabIndex: -1,
                    children: [(0, r.jsx)(u, {}), (0, r.jsx)(s, {})]
                })
            }
        },
        15725: function(e, t, n) {
            "use strict";
            var r = n(34406);
            e.exports = {
                env: {
                    pkgVersion: r.env.npm_package_version
                },
                reactStrictMode: !0,
                images: {
                    path: "https://renderer-v2.vercel.app/_next/image",
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    domains: ["staging-api.typedream.com", "api.typedream.com", "typedream.sfo3.digitaloceanspaces.com", "typedream-assets.sfo3.digitaloceanspaces.com"],
                    formats: ["image/avif", "image/webp"],
                    minimumCacheTTL: 31536e3
                }
            }
        },
        26331: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(15725),
                i = function(e) {
                    if (!e) return !1;
                    var t = !1;
                    try {
                        var n;
                        t = !!(null === r.images || void 0 === r.images || null === (n = r.images.domains) || void 0 === n ? void 0 : n.some((function(t) {
                            return t === new URL(e).hostname
                        })))
                    } catch (i) {}
                    return t
                }
        },
        73887: function(e) {
            e.exports = {
                watermark: "Watermark_watermark__1QliA"
            }
        },
        11617: function(e) {
            e.exports = {
                switch: "ThemeToggler_switch__UxZcW",
                icon: "ThemeToggler_icon__mrbco",
                sun: "ThemeToggler_sun__m2ZO4 ThemeToggler_icon__mrbco",
                moon: "ThemeToggler_moon__0QYFn ThemeToggler_icon__mrbco"
            }
        }
    }
]);
