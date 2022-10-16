(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9730], {
        99162: function(e, t, n) {
            "use strict";
            var i = n(52322),
                r = n(9008),
                a = n.n(r),
                o = n(86741);

            function l(e) {
                var t = e.code,
                    n = e.head;
                return t ? n ? (0, i.jsx)(a(), {
                    children: (0, o.ZP)(t)
                }) : (0, i.jsx)(i.Fragment, {
                    children: (0, o.ZP)(t)
                }) : null
            }
            l.defaultProps = {
                head: !1
            }, t.Z = l
        },
        6055: function(e, t, n) {
            "use strict";
            var i = n(52322),
                r = n(41664),
                a = n.n(r),
                o = n(11163),
                l = n(2784),
                s = n(1438);

            function d(e) {
                var t = e.href,
                    n = e.style,
                    r = e.target,
                    d = e.className,
                    c = e.onClick,
                    u = e.children,
                    m = (0, o.useRouter)(),
                    v = (0, l.useMemo)((function() {
                        return m.pathname.startsWith("/domain/[custom_domain]") ? "/domain/[custom_domain]/[[...path]]" : m.pathname.startsWith("/[slug]") ? "/[slug]/[[...path]]" : t
                    }), [m.pathname, t]),
                    h = function() {
                        var e = m.query.custom_domain;
                        return m.pathname.startsWith("/domain/[custom_domain]") && !window.location.host.startsWith(e) ? "/domain/".concat(e).concat(t) : m.pathname.startsWith("/[slug]") && window.location.host !== s.A2 && window.location.host.endsWith(s.A2 || "") ? t : m.pathname.startsWith("/[slug]") ? "/".concat(m.query.slug).concat(t) : t
                    }();
                return (0, i.jsx)(a(), {
                    href: v,
                    as: h,
                    children: (0, i.jsx)("a", {
                        target: r,
                        className: d,
                        style: n,
                        role: "none",
                        onClick: c,
                        children: u
                    })
                })
            }
            d.defaultProps = {
                target: void 0,
                style: void 0,
                className: void 0,
                onClick: void 0
            }, t.Z = d
        },
        13769: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return O
                }
            });
            var i = n(70865),
                r = n(96670),
                a = n(50930),
                o = n(52322),
                l = n(72779),
                s = n.n(l),
                d = n(2784),
                c = n(10869),
                u = n(50834),
                m = n(58673),
                v = n(52899),
                h = n(81112),
                p = n(61317),
                f = n(5152),
                g = n.n(f),
                _ = n(25675),
                x = n.n(_),
                b = n(11163),
                y = n(84296),
                w = null === y.images || void 0 === y.images ? void 0 : y.images.domains,
                k = !!(null === y.images || void 0 === y.images ? void 0 : y.images.dangerouslyAllowSVG),
                j = null === y.images || void 0 === y.images ? void 0 : y.images.deviceSizes,
                N = null === y.images || void 0 === y.images ? void 0 : y.images.imageSizes,
                C = (0, a.Z)(j || []).concat((0, a.Z)(N || []));
            C.sort((function(e, t) {
                return e - t
            }));
            var E = (null === y.images || void 0 === y.images ? void 0 : y.images.path) || "/_next/image",
                I = function(e) {
                    var t = e.src,
                        n = e.width,
                        i = e.quality;
                    if (t) {
                        if (t.startsWith("//") || t.endsWith(".svg") && !k) return t;
                        if (!t.startsWith("/") && w) try {
                            var r = new URL(t);
                            if (!(null === w || void 0 === w ? void 0 : w.includes(r.hostname)) || r.pathname.endsWith(".svg") && !k) return t
                        } catch (o) {
                            return t
                        }
                        var a = n && C.find((function(e) {
                            return e >= n
                        })) || C[C.length - 1];
                        return "".concat(E, "?url=").concat(encodeURIComponent(t), "&w=").concat(a, "&q=").concat(i || 75)
                    }
                },
                R = n(26331),
                T = n(6055),
                S = g()((function() {
                    return Promise.all([n.e(47), n.e(2965), n.e(7311), n.e(1072), n.e(6261)]).then(n.bind(n, 14020))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [14020]
                        }
                    }
                }),
                F = (0, d.createContext)({
                    isBurgerOpen: !1,
                    setIsBurgerOpen: function() {
                        throw Error("Please wrap component around NavbarContext.Provider")
                    }
                });

            function D(e) {
                var t = (0, d.useContext)(F).setIsBurgerOpen,
                    n = e.color,
                    i = e.url,
                    r = e.internalLink,
                    a = e.openInNewTab,
                    l = e.className,
                    u = e.children,
                    m = s()(l, {
                        "td-navbar-item-color-gradient": !!n && (0, c.W3)(n)
                    });
                if (i) {
                    var v = a ? "_blank" : "_self";
                    return r ? (0, o.jsx)(T.Z, {
                        href: i,
                        target: v,
                        className: m,
                        onClick: function() {
                            return t(!1)
                        },
                        children: u
                    }) : (0, o.jsx)("a", {
                        href: i,
                        target: v,
                        className: m,
                        onClick: function() {
                            return t(!1)
                        },
                        rel: "noreferrer",
                        children: u
                    })
                }
                return (0, o.jsx)("div", {
                    className: m,
                    children: u
                })
            }

            function A(e) {
                var t = e.title,
                    n = e.fontFamily,
                    i = e.type,
                    r = e.color,
                    a = e.url,
                    l = e.internalLink,
                    s = e.openInNewTab,
                    d = e.children,
                    m = "button" === i ? e.background : void 0,
                    v = r && (0, c.W3)(r),
                    h = (0, o.jsx)("div", {
                        className: "button" === i ? "td-navbar-item-button" : "td-navbar-item-link",
                        role: "none",
                        style: {
                            color: (0, c.Tj)(r, u.lq),
                            background: "button" === i ? (0, c.Tj)(m, u.z7) : void 0,
                            fontFamily: n,
                            boxShadow: "button" === i ? "0 10px 20px -10px ".concat((0, c.Tj)(m, u.My)) : void 0
                        },
                        children: (0, o.jsx)("span", {
                            style: {
                                backgroundImage: r && v ? (0, c.Tj)(r, u.eR) : void 0
                            },
                            children: t
                        })
                    });
                return (0, o.jsxs)(D, {
                    url: a,
                    internalLink: l,
                    openInNewTab: s,
                    color: r,
                    className: "td-navbar-item",
                    children: [d, h]
                })
            }

            function B(e) {
                var t = e.title,
                    n = e.fontFamily,
                    i = e.color,
                    r = e.menu,
                    a = e.url,
                    l = e.internalLink,
                    s = e.openInNewTab,
                    m = (0, d.useRef)(null),
                    p = (0, d.useState)(!1),
                    f = p[0],
                    g = p[1];
                return (0, o.jsxs)("div", {
                    ref: m,
                    role: "none",
                    className: "td-navbar-item",
                    onClick: function() {
                        return g((function(e) {
                            return !e
                        }))
                    },
                    "data-state": f ? "open" : void 0,
                    children: [(0, o.jsx)(D, {
                        url: a,
                        internalLink: l,
                        openInNewTab: s,
                        color: i,
                        className: "td-navbar-item-dropdown",
                        children: (0, o.jsx)("div", {
                            style: {
                                color: (0, c.Tj)(i, u.lq),
                                fontFamily: n
                            },
                            children: (0, o.jsx)("span", {
                                style: {
                                    backgroundImage: i && (0, c.W3)(i) ? (0, c.Tj)(i, u.eR) : void 0
                                },
                                children: t
                            })
                        })
                    }), (0, o.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        height: "15",
                        width: "15",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        className: "icon-chevron-down",
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        })
                    }), (0, o.jsx)(v.N.Provider, {
                        value: (0, d.useMemo)((function() {
                            return {
                                navbarItemRef: m
                            }
                        }), []),
                        children: (0, o.jsx)(h.e, {
                            node: r,
                            internalLinkComponent: T.Z,
                            optimizedImageComponent: x(),
                            isImageOptimizable: R.q,
                            rootClassName: "td-navbar-item-dropdown-menu",
                            rootStyle: {
                                width: "card" === (null === r || void 0 === r ? void 0 : r.style) ? void 0 : "100%"
                            }
                        })
                    })]
                })
            }
            D.defaultProps = {
                className: void 0
            };

            function L(e) {
                var t, n = e.title,
                    i = e.fontFamily,
                    r = e.type,
                    a = e.color,
                    l = e.url,
                    s = e.internalLink,
                    d = e.openInNewTab,
                    c = e.children;
                return "web3_button" === r ? (0, o.jsx)(D, {
                    color: a,
                    className: "td-navbar-item",
                    children: (0, o.jsx)(S, {
                        title: n,
                        fontFamily: i,
                        color: a,
                        background: e.background,
                        children: c
                    })
                }) : "dropdown" !== r || (0 === (t = e.menu).children.length || 1 === t.children.length && 0 === t.children[0].children.length || "navbar_dropdown_menu_column" === t.children[0].type && 1 === t.children[0].children.length && "text" in t.children[0].children[0] && "" === t.children[0].children[0].text) ? (0, o.jsx)(A, {
                    type: "button" === r ? "button" : "link",
                    title: n,
                    fontFamily: i,
                    color: a,
                    background: "button" === r ? e.background : void 0,
                    url: l,
                    internalLink: s,
                    openInNewTab: d,
                    children: c
                }) : (0, o.jsx)(B, {
                    title: n,
                    fontFamily: i,
                    color: a,
                    url: l,
                    internalLink: s,
                    openInNewTab: d,
                    menu: e.menu
                })
            }
            var W = {
                regular: "bx",
                solid: "bxs",
                logo: "bxl"
            };

            function Z(e) {
                var t = (0, d.useState)(!1),
                    n = t[0],
                    i = t[1];
                switch (e.logoType) {
                    case "image":
                        var r = e.logoImage,
                            a = e.logoScale,
                            l = n ? r : I({
                                src: r,
                                width: 384
                            });
                        return (0, o.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            children: (0, o.jsx)("img", {
                                src: l,
                                style: {
                                    height: 28 * (a || 1),
                                    maxHeight: "3rem"
                                },
                                alt: "website logo",
                                onError: function() {
                                    return i(!0)
                                }
                            })
                        });
                    case "emoji":
                        var s = e.logoImage,
                            c = e.logoScale;
                        return (0, o.jsx)("div", {
                            className: "td-navbar-brand-logo td-navbar-brand-emoji",
                            style: {
                                fontSize: "".concat(30 * (c || 1), "px")
                            },
                            children: s
                        });
                    case "icon":
                        var m = e.logoImage,
                            v = e.logoScale,
                            h = m,
                            f = W[h.type],
                            g = h.name;
                        return (0, o.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            style: {
                                color: u.eR[h.color],
                                fontSize: "".concat(30 * (v || 1), "px")
                            },
                            children: (0, o.jsx)(p.J, {
                                type: f,
                                name: g
                            })
                        });
                    default:
                        return (0, o.jsx)("div", {})
                }
            }

            function O(e) {
                var t = e.logoType,
                    n = e.logoColor,
                    l = e.logoFontFamily,
                    c = e.logoURL,
                    u = e.position,
                    v = e.style,
                    h = e.logoTitle,
                    p = e.logoOpenInNewTab,
                    f = e.logoURLInternalLink,
                    g = e.alignment,
                    _ = e.menu,
                    x = e.endMenu,
                    y = e.isBlur,
                    w = "" !== t ? e.logoImage : void 0,
                    k = (0, b.useRouter)(),
                    j = (0, d.useState)(!1),
                    N = j[0],
                    C = j[1];
                (0, d.useEffect)((function() {
                    var e = function() {
                        return C(!1)
                    };
                    return k.events.on("routeChangeComplete", e),
                        function() {
                            k.events.off("routeChangeComplete", e)
                        }
                }), [k]);
                var E = (_ || []).map((function(e) {
                        return (0, o.jsx)(L, (0, r.Z)((0, i.Z)({}, e), {
                            fontFamily: m.R[e.fontFamily]
                        }), "".concat(e.title, "-").concat(e.type))
                    })),
                    I = (x || []).map((function(e) {
                        return (0, o.jsx)(L, (0, r.Z)((0, i.Z)({}, e), {
                            fontFamily: m.R[e.fontFamily]
                        }), "".concat(e.title, "-").concat(e.type))
                    })),
                    R = I.length > 0 || E.length > 0;
                return (0, o.jsxs)(F.Provider, {
                    value: (0, d.useMemo)((function() {
                        return {
                            isBurgerOpen: N,
                            setIsBurgerOpen: C
                        }
                    }), [N, C]),
                    children: [(0, o.jsxs)("nav", {
                        id: "td-navbar",
                        className: s()("td-navbar", {
                            "td-navbar-container-shadow": "shadow" === v,
                            "td-navbar-container-border": "border" === v,
                            "td-navbar-container-blur": y && !N,
                            "align-start": "start" === g,
                            "align-center": "center" === g,
                            "align-end": "end" === g
                        }),
                        role: "navigation",
                        "aria-label": "main navigation",
                        style: {
                            position: u,
                            height: 60,
                            maxWidth: "100vw",
                            width: "100%"
                        },
                        children: [(0, o.jsxs)("div", {
                            className: "td-navbar-brand",
                            children: [(h || w) && (0, o.jsx)(L, {
                                title: h || "",
                                color: n || "",
                                fontFamily: m.R[l],
                                type: "link",
                                url: c,
                                internalLink: f,
                                openInNewTab: p,
                                children: (0, o.jsx)(Z, (0, i.Z)({}, e))
                            }, "".concat(h, "-").concat(t)), R && (0, o.jsxs)("a", {
                                role: "button",
                                className: s()("td-navbar-burger", {
                                    "is-active": N
                                }),
                                onKeyDown: function() {},
                                tabIndex: 0,
                                onClick: function() {
                                    return C((function(e) {
                                        return !e
                                    }))
                                },
                                "aria-label": "menu",
                                "aria-expanded": N,
                                children: [(0, o.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, o.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, o.jsx)("span", {
                                    "aria-hidden": "true"
                                })]
                            })]
                        }), N && (0, o.jsx)("div", {
                            className: "td-navbar-mobile",
                            style: {
                                top: 60,
                                maxHeight: "fixed" === u ? "calc(100vh - ".concat(60, "px)") : void 0
                            },
                            children: (0, a.Z)(E).concat((0, a.Z)(I))
                        }), (0, o.jsx)("div", {
                            className: "td-navbar-middle",
                            children: E.length > 0 && E
                        }), (0, o.jsx)("div", {
                            className: "td-navbar-end",
                            children: I.length > 0 && I
                        })]
                    }), "fixed" === u && (0, o.jsx)("div", {
                        style: {
                            height: 60
                        }
                    })]
                })
            }
        },
        21955: function(e, t, n) {
            "use strict";
            var i = n(52322),
                r = n(9008),
                a = n.n(r),
                o = n(1438);
            t.Z = function(e) {
                var t, n, r, l, s, d, c, u, m, v, h, p, f, g, _, x, b, y, w, k, j, N, C, E, I, R, T, S, F, D, A, B, L, W, Z, O, M, z, q, P, $, U, V, H, Q, G, J, Y, K, X, ee, te, ne, ie, re, ae, oe, le, se, de, ce, ue, me, ve, he, pe, fe, ge, _e = e.space,
                    xe = e.page,
                    be = e.url,
                    ye = null === xe || void 0 === xe || null === (t = xe.customization) || void 0 === t ? void 0 : t.item_page_data,
                    we = null === ye || void 0 === ye ? void 0 : ye.pageSchema,
                    ke = (null === we || void 0 === we ? void 0 : we.metadata) && (null === ye || void 0 === ye || null === (n = ye.data) || void 0 === n ? void 0 : n[we.metadata]),
                    je = (null === we || void 0 === we ? void 0 : we.name) && (null === ye || void 0 === ye || null === (r = ye.data) || void 0 === r ? void 0 : r[we.name]),
                    Ne = (null === _e || void 0 === _e || null === (l = _e.metadata) || void 0 === l || null === (s = l.metatags) || void 0 === s ? void 0 : s.title) || (null === _e || void 0 === _e ? void 0 : _e.name) || o.i5,
                    Ce = (null === _e || void 0 === _e || null === (d = _e.metadata) || void 0 === d || null === (c = d.metatags) || void 0 === c ? void 0 : c.description) || o.Yu,
                    Ee = (null === _e || void 0 === _e ? void 0 : _e.icon) || o.Tl,
                    Ie = (null === _e || void 0 === _e ? void 0 : _e.icon) || o.oQ,
                    Re = (null === xe || void 0 === xe || null === (u = xe.metadata) || void 0 === u || null === (m = u.metatags) || void 0 === m ? void 0 : m.title) || (null === xe || void 0 === xe ? void 0 : xe.name),
                    Te = null === xe || void 0 === xe || null === (v = xe.metadata) || void 0 === v || null === (h = v.metatags) || void 0 === h ? void 0 : h.description,
                    Se = (null === ke || void 0 === ke || null === (p = ke.metatags) || void 0 === p ? void 0 : p.title) || je,
                    Fe = null === ke || void 0 === ke || null === (f = ke.metatags) || void 0 === f ? void 0 : f.description,
                    De = (null === _e || void 0 === _e || null === (g = _e.metadata) || void 0 === g || null === (_ = g.facebook) || void 0 === _ ? void 0 : _.title) || (null === _e || void 0 === _e || null === (x = _e.metadata) || void 0 === x || null === (b = x.metatags) || void 0 === b ? void 0 : b.title) || (null === _e || void 0 === _e ? void 0 : _e.name) || o.i5,
                    Ae = (null === _e || void 0 === _e || null === (y = _e.metadata) || void 0 === y || null === (w = y.facebook) || void 0 === w ? void 0 : w.description) || (null === _e || void 0 === _e || null === (k = _e.metadata) || void 0 === k || null === (j = k.metatags) || void 0 === j ? void 0 : j.description) || o.Yu,
                    Be = null === _e || void 0 === _e || null === (N = _e.metadata) || void 0 === N || null === (C = N.facebook) || void 0 === C ? void 0 : C.image,
                    Le = (null === _e || void 0 === _e ? void 0 : _e.name) || o.i5,
                    We = (null === xe || void 0 === xe || null === (E = xe.metadata) || void 0 === E || null === (I = E.facebook) || void 0 === I ? void 0 : I.title) || (null === xe || void 0 === xe || null === (R = xe.metadata) || void 0 === R || null === (T = R.metatags) || void 0 === T ? void 0 : T.title) || (null === xe || void 0 === xe ? void 0 : xe.name),
                    Ze = (null === xe || void 0 === xe || null === (S = xe.metadata) || void 0 === S || null === (F = S.facebook) || void 0 === F ? void 0 : F.description) || (null === xe || void 0 === xe || null === (D = xe.metadata) || void 0 === D || null === (A = D.metatags) || void 0 === A ? void 0 : A.description),
                    Oe = null === xe || void 0 === xe || null === (B = xe.metadata) || void 0 === B || null === (L = B.facebook) || void 0 === L ? void 0 : L.image,
                    Me = (null === ke || void 0 === ke || null === (W = ke.facebook) || void 0 === W ? void 0 : W.title) || (null === ke || void 0 === ke || null === (Z = ke.metatags) || void 0 === Z ? void 0 : Z.title) || je,
                    ze = (null === ke || void 0 === ke || null === (O = ke.facebook) || void 0 === O ? void 0 : O.description) || (null === ke || void 0 === ke || null === (M = ke.metatags) || void 0 === M ? void 0 : M.description),
                    qe = null === ke || void 0 === ke || null === (z = ke.facebook) || void 0 === z ? void 0 : z.image,
                    Pe = (null === _e || void 0 === _e || null === (q = _e.metadata) || void 0 === q || null === (P = q.twitter) || void 0 === P ? void 0 : P.title) || (null === _e || void 0 === _e || null === ($ = _e.metadata) || void 0 === $ || null === (U = $.metatags) || void 0 === U ? void 0 : U.title) || (null === _e || void 0 === _e ? void 0 : _e.name) || o.i5,
                    $e = (null === _e || void 0 === _e || null === (V = _e.metadata) || void 0 === V || null === (H = V.twitter) || void 0 === H ? void 0 : H.description) || (null === _e || void 0 === _e || null === (Q = _e.metadata) || void 0 === Q || null === (G = Q.metatags) || void 0 === G ? void 0 : G.description) || o.Yu,
                    Ue = (null === _e || void 0 === _e || null === (J = _e.metadata) || void 0 === J || null === (Y = J.twitter) || void 0 === Y ? void 0 : Y.username) || o.gE,
                    Ve = null === _e || void 0 === _e || null === (K = _e.metadata) || void 0 === K || null === (X = K.twitter) || void 0 === X ? void 0 : X.image,
                    He = (null === xe || void 0 === xe || null === (ee = xe.metadata) || void 0 === ee || null === (te = ee.twitter) || void 0 === te ? void 0 : te.title) || (null === xe || void 0 === xe || null === (ne = xe.metadata) || void 0 === ne || null === (ie = ne.metatags) || void 0 === ie ? void 0 : ie.title) || (null === xe || void 0 === xe ? void 0 : xe.name),
                    Qe = (null === xe || void 0 === xe || null === (re = xe.metadata) || void 0 === re || null === (ae = re.twitter) || void 0 === ae ? void 0 : ae.description) || (null === xe || void 0 === xe || null === (oe = xe.metadata) || void 0 === oe || null === (le = oe.metatags) || void 0 === le ? void 0 : le.description),
                    Ge = null === xe || void 0 === xe || null === (se = xe.metadata) || void 0 === se || null === (de = se.twitter) || void 0 === de ? void 0 : de.username,
                    Je = null === xe || void 0 === xe || null === (ce = xe.metadata) || void 0 === ce || null === (ue = ce.twitter) || void 0 === ue ? void 0 : ue.image,
                    Ye = (null === ke || void 0 === ke || null === (me = ke.twitter) || void 0 === me ? void 0 : me.title) || (null === ke || void 0 === ke || null === (ve = ke.metatags) || void 0 === ve ? void 0 : ve.title) || je,
                    Ke = (null === ke || void 0 === ke || null === (he = ke.twitter) || void 0 === he ? void 0 : he.description) || (null === ke || void 0 === ke || null === (pe = ke.metatags) || void 0 === pe ? void 0 : pe.description),
                    Xe = null === ke || void 0 === ke || null === (fe = ke.twitter) || void 0 === fe ? void 0 : fe.username,
                    et = null === ke || void 0 === ke || null === (ge = ke.twitter) || void 0 === ge ? void 0 : ge.image;
                return (0, i.jsxs)(a(), {
                    children: [(0, i.jsx)("title", {
                        children: Se || Re || Ne
                    }), (0, i.jsx)("meta", {
                        name: "description",
                        content: Fe || Te || Ce
                    }), (0, i.jsx)("link", {
                        rel: "icon",
                        type: "image/x-icon",
                        href: Ee
                    }), (0, i.jsx)("link", {
                        rel: "apple-touch-icon",
                        href: Ie
                    }), (0, i.jsx)("meta", {
                        property: "og:url",
                        content: be
                    }), (0, i.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, i.jsx)("meta", {
                        property: "og:title",
                        content: Me || We || De
                    }), (0, i.jsx)("meta", {
                        property: "og:description",
                        content: ze || Ze || Ae
                    }), (0, i.jsx)("meta", {
                        property: "og:site_name",
                        content: Le
                    }), (qe || Oe || Be) && (0, i.jsx)("meta", {
                        property: "og:image",
                        content: qe || Oe || Be
                    }), (0, i.jsx)("meta", {
                        name: "twitter:card",
                        content: et || Je || Ve ? "summary_large_image" : "summary"
                    }), (0, i.jsx)("meta", {
                        name: "twitter:site",
                        content: Xe || Ge || Ue
                    }), (0, i.jsx)("meta", {
                        name: "twitter:title",
                        content: Ye || He || Pe
                    }), (0, i.jsx)("meta", {
                        name: "twitter:description",
                        content: Ke || Qe || $e
                    }), (et || Je || Ve) && (0, i.jsx)("meta", {
                        name: "twitter:image",
                        content: et || Je || Ve
                    })]
                })
            }
        },
        73063: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return ye
                }
            });
            var i, r, a, o, l, s, d, c, u, m, v, h, p, f, g, _, x, b, y, w = n(52322),
                k = n(25675),
                j = n.n(k),
                N = n(2784),
                C = n(81112),
                E = n(69602),
                I = n(98788),
                R = n(70865),
                T = n(96670),
                S = n(66383),
                F = n(34051),
                D = n.n(F),
                A = n(6804);
            (r = i || (i = {})).FREE = "free", r.LAUNCH = "launch", r.PRO = "pro", (o = a || (a = {})).ACTIVE = "active", o.INACTIVE = "inactive", (s = l || (l = {})).InviteMember = "InviteMember", s.RemoveMember = "RemoveMember", s.ViewMembers = "ViewMembers", s.TransferOwnership = "TransferOwnership", s.UpdatePermissions = "UpdatePermissions", s.UpdateSettings = "UpdateSettings", s.UpdateCustomDomain = "UpdateCustomDomain", s.UpdateSubdomain = "UpdateSubdomain", s.ReadSettings = "ReadSettings", s.ReadBilling = "ReadBilling", s.UpdateBilling = "UpdateBilling", s.DeleteSpace = "DeleteSpace", s.CreatePage = "CreatePage", s.EditContent = "EditContent", s.ReadDraft = "ReadDraft", s.ReadPublishedContent = "ReadPublishedContent", s.ReadPageInfo = "ReadPageInfo", s.CreateLock = "CreateLock", s.PromoteToOwner = "PromoteToOwner", s.UpdateMetadata = "UpdateMetadata", s.UpdateCustomization = "UpdateCustomization", s.UpdateAffiliate = "UpdateAffiliate", s.ReadBasicAnalytics = "ReadBasicAnalytics", s.ReadAdvancedAnalytics = "ReadAdvancedAnalytics", s.Collection = "Collection", (c = d || (d = {})).OWNER = "owner", c.ADMIN = "admin", c.WRITER = "writer", c.READER = "reader", (m = u || (u = {})).PAGE = "page", m.SECTION = "section", m.MOBILE_SECTION = "mobile_section", (h = v || (v = {})).AIRTABLE = "airtable", h.NOTION = "notion", (f = p || (p = {})).MAX_ITEMS = "max_items", f.FILTER_COLUMN = "filter_column", f.FILTER_COLUMN_TYPE = "filter_column_type", f.FILTER_CONDITION = "filter_condition", f.FILTER_VALUE = "filter_value", f.SORT_COLUMN = "sort_column", f.SORT_DIRECTION = "sort_direction", f.SEARCH_COLUMNS = "search_columns", f.SHOW_SEARCH_BAR = "show_search_bar", f.VISITOR_FILTER_COLUMN = "visitor_filter_column", f.VISITOR_FILTER_STYLE = "visitor_filter_style", f.VISITOR_FILTER_COLOR = "visitor_filter_color", f.VISITOR_FILTER_COLUMN_TYPE = "visitor_filter_column_type", (g || (g = {})).FILES = "files", (x = _ || (_ = {})).HERO = "hero", x.CLIENTS = "clients", x.EVENTS = "events", x.FEATURES = "features", x.PRICING = "pricing", x.CALL_TO_ACTION = "call_to_action", x.FOOTER = "footer", x.SHOP = "shop", x.COLLECTION = "collection", (y = b || (b = {})).HERO = "hero", y.HIGHLIGHTS = "highlights", y.LINKS = "links";
            l.InviteMember, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.RemoveMember, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.ViewMembers, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.TransferOwnership, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.UpdatePermissions, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.UpdateSettings, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.UpdateCustomDomain, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.UpdateSubdomain, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.ReadSettings, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.ReadBilling, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.UpdateBilling, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.DeleteSpace, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.CreatePage, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.EditContent, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.ReadDraft, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.ReadPublishedContent, d.OWNER, d.ADMIN, d.WRITER, d.READER, l.ReadPageInfo, d.OWNER, d.ADMIN, d.WRITER, d.READER;
            const B = "_CURRENT_ITEM_";
            var L = n(50930);
            var W = (0, n(77068).Z)((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = {};
                return (null === e || void 0 === e ? void 0 : e.page_id) ? (n[e.page_id] = t, (null === e || void 0 === e ? void 0 : e.children_template_page_id) && (n[e.children_template_page_id] = t), e.children ? (Object.keys(e.children).forEach((function(i) {
                    Object.assign(n, W(e.children[i], (0, L.Z)(t).concat([i])))
                })), n) : n) : n
            }));
            var Z = n(47842),
                O = n(72380),
                M = n(9669),
                z = n.n(M),
                q = n(31691),
                P = n(1438);

            function $(e) {
                return e.split(" ").map((function(e) {
                    return e[0].toUpperCase() + e.substring(1)
                })).join(" ")
            }
            var U, V = n(90581),
                H = function() {
                    function e() {
                        (0, V.Z)(this, e), this.api = P.bG, this.config = {}
                    }
                    var t = e.prototype;
                    return t.mergeHeaders = function(e, t) {
                        return (0, T.Z)((0, R.Z)({}, e, t), {
                            headers: (0, R.Z)({}, null === e || void 0 === e ? void 0 : e.headers, (null === t || void 0 === t ? void 0 : t.headers) || {})
                        })
                    }, t.get = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                headers: {}
                            },
                            n = this;
                        return (0, I.Z)(D().mark((function i() {
                            var r;
                            return D().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return r = {
                                            headers: {}
                                        }, i.abrupt("return", z().get("".concat(n.api).concat(e), n.mergeHeaders(r, t)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.post = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            i = this;
                        return (0, I.Z)(D().mark((function r() {
                            var a;
                            return D().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return a = {
                                            headers: {}
                                        }, r.abrupt("return", z().post("".concat(i.api).concat(e), t, i.mergeHeaders(a, n)));
                                    case 2:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, t.put = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            i = this;
                        return (0, I.Z)(D().mark((function r() {
                            var a;
                            return D().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return a = {
                                            headers: {}
                                        }, r.abrupt("return", z().put("".concat(i.api).concat(e), t, i.mergeHeaders(a, n)));
                                    case 2:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, t.patch = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            i = this;
                        return (0, I.Z)(D().mark((function r() {
                            var a;
                            return D().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return a = {
                                            headers: {}
                                        }, r.abrupt("return", z().patch("".concat(i.api).concat(e), t, i.mergeHeaders(a, n)));
                                    case 2:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, t.delete = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                headers: {}
                            },
                            n = this;
                        return (0, I.Z)(D().mark((function i() {
                            var r;
                            return D().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return r = {
                                            headers: {}
                                        }, i.abrupt("return", z().delete("".concat(n.api).concat(e), n.mergeHeaders(r, t)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, e
                }(),
                Q = H,
                G = function() {
                    function e() {
                        (0, V.Z)(this, e)
                    }
                    return e.getDataQuery = function(e, t, n, i, r, a) {
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
                                    sorts: i,
                                    start_cursor: r,
                                    page_size: a || void 0
                                }
                            },
                            app: "notion"
                        }
                    }, e.callQuery = function(e, t) {
                        return (0, I.Z)(D().mark((function n() {
                            var i, r;
                            return D().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = new Q, n.next = 3, i.post(e, t);
                                    case 3:
                                        return r = n.sent, n.abrupt("return", r);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e.getTable = function(e, t) {
                        return (0, I.Z)(D().mark((function n() {
                            var i, r, a, o;
                            return D().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = {
                                            url: "https://api.notion.com/v1/databases/".concat(t),
                                            method: "GET",
                                            header: {
                                                "Content-Type": "application/json",
                                                "Notion-Version": "2021-08-16"
                                            }
                                        }, r = "/app/proxy_public/".concat(e, "/notion"), a = new Q, n.next = 5, a.post(r, i);
                                    case 5:
                                        return o = n.sent, n.abrupt("return", o);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                J = G;
            ! function(e) {
                e.TABLE_ID = "tableID"
            }(U || (U = {}));
            var Y = {
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
                K = {
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
                X = function(e) {
                    try {
                        var t = new Date(Date.parse(e)).toISOString().split("Z")[0],
                            n = (0, S.Z)(t.split("T"), 2),
                            i = n[0],
                            r = n[1].split(":").slice(0, 2).join(":");
                        return "".concat(i).concat("00:00" !== r ? " ".concat(r) : "")
                    } catch (a) {
                        return e
                    }
                },
                ee = function(e) {
                    var t = e.type,
                        n = null,
                        i = null;
                    switch (t) {
                        case "title":
                        case "rich_text":
                            var r, a;
                            i = null === (a = null === e || void 0 === e || null === (r = e[t]) || void 0 === r ? void 0 : r.map((function(e) {
                                return e.plain_text
                            }))) || void 0 === a ? void 0 : a.join("");
                            break;
                        case "string":
                        case "checkbox":
                        case "url":
                        case "email":
                        case "phone_number":
                        case "number":
                            i = null === e || void 0 === e ? void 0 : e[t];
                            break;
                        case "multi_select":
                            var o;
                            i = null === e || void 0 === e || null === (o = e[t]) || void 0 === o ? void 0 : o.map((function(e) {
                                return e.name
                            })).join(", ");
                            break;
                        case "date":
                            var l, s, d;
                            if (i = X(null === e || void 0 === e || null === (l = e[t]) || void 0 === l ? void 0 : l.start), null === e || void 0 === e || null === (s = e[t]) || void 0 === s ? void 0 : s.end) i = "".concat(i, " - ").concat(X(null === e || void 0 === e || null === (d = e[t]) || void 0 === d ? void 0 : d.end));
                            break;
                        case "people":
                            var c;
                            i = null === e || void 0 === e || null === (c = e[t]) || void 0 === c ? void 0 : c.map((function(e) {
                                return e.name
                            })).join(", ");
                            break;
                        case "files":
                            var u, m, v, h, p, f, g, _, x, b, y;
                            if ("file" === (null === e || void 0 === e || null === (u = e[t]) || void 0 === u || null === (m = u[0]) || void 0 === m ? void 0 : m.type)) i = null === e || void 0 === e || null === (v = e[t]) || void 0 === v || null === (h = v[0]) || void 0 === h || null === (p = h.file) || void 0 === p ? void 0 : p.url, n = null === e || void 0 === e || null === (f = e[t]) || void 0 === f || null === (g = f[0]) || void 0 === g || null === (_ = g.file) || void 0 === _ ? void 0 : _.expiry_time;
                            else i = null === e || void 0 === e || null === (x = e[t]) || void 0 === x || null === (b = x[0]) || void 0 === b || null === (y = b.external) || void 0 === y ? void 0 : y.url;
                            break;
                        case "formula":
                            return ee(null === e || void 0 === e ? void 0 : e[t]);
                        case "created_time":
                        case "last_edited_time":
                            i = X(null === e || void 0 === e ? void 0 : e[t]);
                            break;
                        case "select":
                        case "created_by":
                        case "last_edited_by":
                            var w;
                            i = null === e || void 0 === e || null === (w = e[t]) || void 0 === w ? void 0 : w.name;
                            break;
                        case "rollup":
                            if ("show_original" === (null === e || void 0 === e ? void 0 : e[t].function) || "show_unique" === (null === e || void 0 === e ? void 0 : e[t].function)) {
                                var k = null === e || void 0 === e ? void 0 : e[t].type;
                                i = null === e || void 0 === e ? void 0 : e[t][k].map((function(e) {
                                    return e[e.type].map((function(e) {
                                        return e.plain_text
                                    })).join(" ")
                                })).join(", ");
                                break
                            }
                            i = ee(null === e || void 0 === e ? void 0 : e[t]), (null === e || void 0 === e ? void 0 : e[t].function.includes("percent")) && (i = "".concat(Math.round(1e3 * Number(i.propValue)) / 10, "%"));
                            break;
                        default:
                            i = ""
                    }
                    return {
                        propValue: i,
                        expiresAt: n
                    }
                };

            function te(e, t) {
                if ("undefined" === typeof t) return t;
                switch (e) {
                    case "string":
                        return "".concat(t);
                    case "number":
                        if (!t || Number.isNaN(t) || Number.isNaN(parseFloat(String(t))) || Number.isNaN(Number(t))) return;
                        return parseFloat(String(t));
                    case "date":
                        if (!(0, q.Z)(t)) return;
                        return function(e) {
                            var t = new Date(Date.parse("".concat(e, " GMT+0000"))).toISOString().split("Z")[0],
                                n = (0, S.Z)(t.split("T"), 2),
                                i = n[0],
                                r = n[1].split(":").slice(0, 2).join(":");
                            return "".concat(i).concat("00:00" !== r ? " ".concat(r) : "")
                        }(String(t));
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
            var ne = {
                    getColumnNames: function() {
                        var e = (0, I.Z)(D().mark((function e(t, n) {
                            var i, r, a, o, l;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = null === n || void 0 === n ? void 0 : n[U.TABLE_ID], e.next = 4, J.getTable(t, r);
                                    case 4:
                                        if (a = e.sent, o = null === a || void 0 === a || null === (i = a.data) || void 0 === i ? void 0 : i.properties) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", {});
                                    case 8:
                                        return l = {}, Object.keys(o).forEach((function(e) {
                                            l[e] = {
                                                id: o[e].id,
                                                type: o[e].type,
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
                    getColumnSelectOptions: function() {
                        var e = (0, I.Z)(D().mark((function e(t, n, i) {
                            var r, a, o, l, s;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = null === i || void 0 === i ? void 0 : i[U.TABLE_ID], e.next = 4, J.getTable(t, o);
                                    case 4:
                                        if (l = e.sent, s = null === l || void 0 === l || null === (r = l.data) || void 0 === r || null === (a = r.properties) || void 0 === a ? void 0 : a[n]) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", []);
                                    case 8:
                                        return e.abrupt("return", s[s.type].options.map((function(e) {
                                            return e.name
                                        })));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataQuery: function(e, t, n, i) {
                        var r, a, o = null === t || void 0 === t ? void 0 : t[U.TABLE_ID],
                            l = null === t || void 0 === t ? void 0 : t.metadata,
                            s = (null === l || void 0 === l ? void 0 : l.filter_column) ? (0, Z.Z)({
                                property: l.filter_column
                            }, l.filter_column_type, (0, Z.Z)({}, l.filter_condition, te(null === (r = K[l.filter_column_type]) || void 0 === r ? void 0 : r[l.filter_condition], l.filter_value))) : void 0,
                            d = (null === l || void 0 === l ? void 0 : l.visitor_filter_column) && i && i !== O.k ? (0, Z.Z)({
                                property: l.visitor_filter_column
                            }, l.visitor_filter_column_type, (0, Z.Z)({}, "select" === l.visitor_filter_column_type ? "equals" : "contains", te(null === (a = K[l.visitor_filter_column_type]) || void 0 === a ? void 0 : a["select" === l.visitor_filter_column_type ? "equals" : "contains"], i))) : void 0,
                            c = s && d ? {
                                and: [s, d]
                            } : s || d,
                            u = (null === l || void 0 === l ? void 0 : l.sort_column) ? [{
                                property: l.sort_column,
                                direction: l.sort_direction
                            }] : void 0;
                        return J.getDataQuery(e, o, c, u, n, null === l || void 0 === l ? void 0 : l.max_items)
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
                            i = [];
                        return t.forEach((function(e) {
                            if (null === e || void 0 === e ? void 0 : e.properties) {
                                var t = {},
                                    r = null === e || void 0 === e ? void 0 : e.properties;
                                Object.entries(r).forEach((function(e) {
                                    var i, r, a = (0, S.Z)(e, 2),
                                        o = a[0],
                                        l = a[1],
                                        s = ee(l),
                                        d = s.propValue,
                                        c = s.expiresAt;
                                    c && (n = n && (null === (i = new Date(n)) || void 0 === i ? void 0 : i.getTime()) < (null === (r = new Date(c)) || void 0 === r ? void 0 : r.getTime()) ? n : c);
                                    d && (t[o] = d)
                                })), t[P.it] = null === e || void 0 === e ? void 0 : e.id, i.push(t)
                            }
                        })), {
                            data: i,
                            has_more: null === e || void 0 === e ? void 0 : e.has_more,
                            next_cursor: null === e || void 0 === e ? void 0 : e.next_cursor,
                            expires_at: n
                        }
                    },
                    getData: function() {
                        var e = (0, I.Z)(D().mark((function e(t, n, i, r) {
                            var a, o;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = ne.getDataQuery(t, n, i, r), e.next = 3, J.callQuery(a.path, a.data);
                                    case 3:
                                        return o = e.sent, e.abrupt("return", ne.constructGetDataResult(null === o || void 0 === o ? void 0 : o.data));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataBySlug: function() {
                        var e = (0, I.Z)(D().mark((function e(t, n, i) {
                            var r, a, o, l, s, d, c, u, m, v, h, p;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = null === n || void 0 === n ? void 0 : n[U.TABLE_ID], d = (0, Z.Z)({
                                            property: P.OH.SLUG.fieldName
                                        }, P.OH.SLUG.type, {
                                            equals: i
                                        }), c = J.getDataQuery(t, s, d, void 0, void 0, 1), e.next = 6, J.callQuery(c.path, c.data);
                                    case 6:
                                        if (u = e.sent, !((null === (m = ne.constructGetDataResult(null === u || void 0 === u ? void 0 : u.data)) || void 0 === m || null === (r = m.data) || void 0 === r ? void 0 : r.length) <= 0)) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error("item page not found");
                                    case 10:
                                        return v = null === m || void 0 === m || null === (a = m.data) || void 0 === a ? void 0 : a[0], e.next = 13, ne.JSONFileToContent(v, n);
                                    case 13:
                                        return h = e.sent, p = null === (o = n) || void 0 === o || null === (l = o.pageSchema) || void 0 === l ? void 0 : l.metadata, h[p] = h[p] ? JSON.parse(h[p]) : h[p], m.data[0] = h, e.abrupt("return", m);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataWithSearchQueryAndFilter: function() {
                        var e = (0, I.Z)(D().mark((function e(t, n, i, r, a, o) {
                            var l, s, d, c, u, m, v, h, p, f, g, _, x;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d = null === n || void 0 === n ? void 0 : n[U.TABLE_ID], c = null === n || void 0 === n ? void 0 : n.metadata, u = (null === c || void 0 === c ? void 0 : c.filter_column) ? (0, Z.Z)({
                                            property: c.filter_column
                                        }, c.filter_column_type, (0, Z.Z)({}, c.filter_condition, te(null === (l = K[c.filter_column_type]) || void 0 === l ? void 0 : l[c.filter_condition], c.filter_value))) : void 0, m = (null === c || void 0 === c ? void 0 : c.visitor_filter_column) && o && o !== O.k ? (0, Z.Z)({
                                            property: c.visitor_filter_column
                                        }, c.visitor_filter_column_type, (0, Z.Z)({}, "select" === c.visitor_filter_column_type ? "equals" : "contains", te(null === (s = K[c.visitor_filter_column_type]) || void 0 === s ? void 0 : s["select" === c.visitor_filter_column_type ? "equals" : "contains"], o))) : void 0, v = u && m ? {
                                            and: [u, m]
                                        } : u || m, h = null === c || void 0 === c ? void 0 : c.search_columns, h = Array.isArray(h) && (null === h || void 0 === h ? void 0 : h.length) > 0 ? h : Object.keys(r), p = [], i && h.forEach((function(e) {
                                            var t, n = r[e];
                                            if (Y[n.type]) {
                                                var a = Y[n.type],
                                                    o = a.key,
                                                    l = a.type,
                                                    s = te(l, i);
                                                if (null !== s && void 0 !== s && "" !== s) {
                                                    if ("string" === l) return void(p = p.concat([(0, Z.Z)({
                                                        property: n.name
                                                    }, n.type, (0, Z.Z)({}, o, s)), (0, Z.Z)({
                                                        property: n.name
                                                    }, n.type, (0, Z.Z)({}, o, s.toLowerCase())), (0, Z.Z)({
                                                        property: n.name
                                                    }, n.type, (0, Z.Z)({}, o, s.toUpperCase())), (0, Z.Z)({
                                                        property: n.name
                                                    }, n.type, (0, Z.Z)({}, o, (t = s, t.charAt(0).toUpperCase() + t.slice(1)))), (0, Z.Z)({
                                                        property: n.name
                                                    }, n.type, (0, Z.Z)({}, o, $(s)))]));
                                                    p.push((0, Z.Z)({
                                                        property: n.name
                                                    }, n.type, (0, Z.Z)({}, o, s)))
                                                }
                                            }
                                        })), f = v, (null === p || void 0 === p ? void 0 : p.length) > 0 && v && (f = {
                                            and: [v, {
                                                or: p
                                            }]
                                        }), (null === p || void 0 === p ? void 0 : p.length) > 0 && !v && (f = {
                                            or: p
                                        }), g = (null === c || void 0 === c ? void 0 : c.sort_column) ? [{
                                            property: null === c || void 0 === c ? void 0 : c.sort_column,
                                            direction: null === c || void 0 === c ? void 0 : c.sort_direction
                                        }] : void 0, _ = J.getDataQuery(t, d, f, g, a, null === c || void 0 === c ? void 0 : c.max_items), e.next = 17, J.callQuery(_.path, _.data);
                                    case 17:
                                        return x = e.sent, e.abrupt("return", ne.constructGetDataResult(null === x || void 0 === x ? void 0 : x.data));
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i, r, a, o) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getItemPageDataID: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.integration,
                            n = null === e || void 0 === e ? void 0 : e[U.TABLE_ID];
                        return "".concat(t, "_").concat(n)
                    },
                    tableConnected: function(e) {
                        return e && (null === e || void 0 === e ? void 0 : e[U.TABLE_ID])
                    },
                    JSONFileToContent: function() {
                        var e = (0, I.Z)(D().mark((function e(t, n) {
                            var i, r, a, o, l, s;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t, a = null === n || void 0 === n || null === (i = n.pageSchema) || void 0 === i ? void 0 : i.content, !t || !t[a]) {
                                            e.next = 10;
                                            break
                                        }
                                        return o = t[a], e.next = 7, z().get(o, {
                                            headers: {
                                                "Cache-Control": "no-cache",
                                                Pragma: "no-cache",
                                                Expires: "0"
                                            }
                                        });
                                    case 7:
                                        l = e.sent, s = (null === l || void 0 === l ? void 0 : l.data) ? JSON.parse(null === l || void 0 === l ? void 0 : l.data) : null, r[a] = s;
                                    case 10:
                                        return e.abrupt("return", r);
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
                ie = ne,
                re = function(e) {
                    if ("notion" === e) return ie;
                    throw new Error("Unknown integration ".concat(e))
                },
                ae = n(203),
                oe = function(e, t, n, i, r) {
                    var a = r.collection_connect_data,
                        o = r.collection_connect_data_keys,
                        l = (0, R.Z)({}, r);
                    return a && o.forEach((function(r) {
                        var a = r.schemaKey,
                            o = r.blockElementKey,
                            s = t[a],
                            d = e[s];
                        if (d) l[o] = String(d);
                        else if (s !== P.Si || !ae.W_.isElement(l) || "a" !== l.type && "button" !== l.type && "container" !== l.type && "img" !== l.type) l[o] = "";
                        else {
                            l.page_id = n, l.internal_link = !0;
                            var c = "".concat("/".concat(i.join("/")), "/").concat(e[P.OH.SLUG.fieldName]);
                            "img" === l.type ? l.href = c : l.url = c
                        }
                    })), ae.W_.isElement(l) && (l.children = l.children.map((function(r) {
                        return oe(e, t, n, i, r)
                    }))), l
                },
                le = oe,
                se = function(e, t, n, i, r, a) {
                    var o = (0, T.Z)((0, R.Z)({}, r), {
                        id: r.id || i()
                    });
                    if (ae.W_.isElement(o) && "collection" === o.type && (!a || o.collection_data_id === a)) {
                        var l = o.collection_data_id,
                            s = l && e[l];
                        if (s) {
                            var d, c, u = re(s.integration).getItemPageDataID(s),
                                m = t[u],
                                v = null === s || void 0 === s ? void 0 : s.data,
                                h = null === (d = o.collection_template) || void 0 === d ? void 0 : d.template,
                                p = null === (c = o.collection_template) || void 0 === c ? void 0 : c.schema;
                            v && (o.children = (null === v || void 0 === v ? void 0 : v.length) > 0 ? v.map((function(e) {
                                return {
                                    id: i(),
                                    type: "collection_item",
                                    children: [le(e, p, null === m || void 0 === m ? void 0 : m.childrenTemplatePageID, n[null === m || void 0 === m ? void 0 : m.childrenTemplatePageID], h)]
                                }
                            })) : [{
                                id: i(),
                                text: ""
                            }])
                        }
                    }
                    return (0, R.Z)({}, o, ae.W_.isElement(o) ? {
                        children: o.children.map((function(r) {
                            return ae.W_.isElement(r) ? se(e, t, n, i, r, a) : r
                        }))
                    } : {})
                },
                de = se,
                ce = (function() {
                    var e = (0, I.Z)(D().mark((function e(t) {
                        var n, i, r, a, o, l, s, d, c;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.content, i = t.spaceID, r = t.spaceRoutes, a = t.collectionData, o = t.collectionItemData, l = t.itemPageData, s = W(r), d = (0, R.Z)({}, a), e.next = 5, Promise.all(Object.entries(a).map(function() {
                                        var e = (0, I.Z)(D().mark((function e(t) {
                                            var n, r, a, o, s, c, u, m, v;
                                            return D().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (n = (0, S.Z)(t, 2), r = n[0], !(null === (a = n[1]) || void 0 === a ? void 0 : a.queryResp)) {
                                                            e.next = 20;
                                                            break
                                                        }
                                                        if (e.prev = 2, s = JSON.parse(a.queryResp), c = re(a.integration).constructGetDataResult(s), d[r] = (0, T.Z)((0, R.Z)({}, d[r]), {
                                                                data: c.data,
                                                                hasMore: c.has_more,
                                                                nextCursor: c.next_cursor,
                                                                expiresAt: c.expires_at
                                                            }), u = null === (o = a.metadata) || void 0 === o ? void 0 : o.filter_value, !(l && u && "string" === typeof u && u.includes(B))) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        return u = null === l || void 0 === l || null === (v = l.data) || void 0 === v ? void 0 : v[u.replace(B, "")], e.next = 14, re(a.integration).getData(i, (0, T.Z)((0, R.Z)({}, d[r]), {
                                                            metadata: (0, T.Z)((0, R.Z)({}, d[r].metadata), {
                                                                filter_value: u
                                                            })
                                                        }));
                                                    case 14:
                                                        m = e.sent, d[r] = (0, T.Z)((0, R.Z)({}, d[r]), {
                                                            data: null === m || void 0 === m ? void 0 : m.data,
                                                            hasMore: null === m || void 0 === m ? void 0 : m.has_more,
                                                            nextCursor: null === m || void 0 === m ? void 0 : m.next_cursor,
                                                            expiresAt: null === m || void 0 === m ? void 0 : m.expires_at,
                                                            metadata: (0, T.Z)((0, R.Z)({}, d[r].metadata), {
                                                                filter_value: u
                                                            })
                                                        });
                                                    case 16:
                                                        e.next = 20;
                                                        break;
                                                    case 18:
                                                        e.prev = 18, e.t0 = e.catch(2);
                                                    case 20:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [2, 18]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 5:
                                    return c = de(d, o, s, A.Z, n), e.abrupt("return", [c, d]);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e, t, n) {
                    var i = (0, R.Z)({}, n);
                    if (ae.W_.isElement(i))
                        if ("rich_text_content" === i.type) {
                            var r = t.content,
                                a = e[r];
                            try {
                                var o, l = null === a || void 0 === a || null === (o = a[0]) || void 0 === o ? void 0 : o.children;
                                l && (i.children = l)
                            } catch (s) {}
                        } else i.children = i.children.map((function(n) {
                            return ce(e, t, n)
                        }));
                    return i
                }),
                ue = function(e, t, n, i, r, a) {
                    var o = (0, T.Z)((0, R.Z)({}, a), {
                        id: a.id || r()
                    });
                    return e && t.contentSchema && (o = le(e, t.contentSchema, n, i, a), o = ce(e, t.pageSchema, o)), o
                },
                me = (function() {
                    var e = (0, I.Z)(D().mark((function e(t) {
                        var n, i, r, a, o, l, s, d, c, u, m, v;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.content, i = t.spaceID, r = t.pageID, a = t.spaceRoutes, o = t.itemPageData, l = t.childTemplateSlug, u = W(a), e.next = 5, null === (s = re(o.integration)) || void 0 === s ? void 0 : s.getDataBySlug(i, o, l);
                                case 5:
                                    return m = e.sent, v = ue(null === m || void 0 === m || null === (d = m.data) || void 0 === d ? void 0 : d[0], o, r, u[r], A.Z, n), e.abrupt("return", [v, (0, T.Z)((0, R.Z)({}, o), {
                                        data: null === m || void 0 === m || null === (c = m.data) || void 0 === c ? void 0 : c[0],
                                        expiresAt: m.expires_at
                                    })]);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), n(49597)),
                ve = n(40093),
                he = n(32957),
                pe = n(64368);

            function fe(e) {
                var t, n, i, r, a, o, l, s, d = e.collectionID,
                    c = e.children,
                    u = (0, N.useContext)(E.z),
                    m = (0, N.useContext)(pe.u),
                    v = null === u || void 0 === u || null === (t = u.customization) || void 0 === t || null === (n = t.collection_data) || void 0 === n ? void 0 : n[d],
                    h = null === v || void 0 === v || null === (i = v.metadata) || void 0 === i ? void 0 : i.visitor_filter_column,
                    p = (0, N.useState)([]),
                    f = p[0],
                    g = p[1],
                    _ = (0, N.useState)(""),
                    x = _[0],
                    b = _[1],
                    y = (0, N.useState)(O.k),
                    k = y[0],
                    j = y[1],
                    C = (0, N.useState)({
                        hasMore: null === v || void 0 === v ? void 0 : v.hasMore,
                        nextCursor: null === v || void 0 === v ? void 0 : v.nextCursor,
                        fetchedCursor: null === v || void 0 === v ? void 0 : v.fetchedCursor,
                        data: null === v || void 0 === v ? void 0 : v.data,
                        searchQuery: "",
                        selectedVisitorFilter: O.k,
                        initiated: !1
                    }),
                    S = C[0],
                    F = C[1],
                    B = (0, N.useState)(!1),
                    M = B[0],
                    z = B[1],
                    q = (0, N.useCallback)((function(e) {
                        var t, n, i;
                        F(e);
                        var r = null === (t = m.customization) || void 0 === t ? void 0 : t.collection_item_data,
                            a = (0, T.Z)((0, R.Z)({}, null === (n = u.customization) || void 0 === n ? void 0 : n.collection_data), (0, Z.Z)({}, d, (0, R.Z)({}, v, e)));
                        if (a && r && (null === (i = u.published_content[0]) || void 0 === i ? void 0 : i.children)) {
                            var o = W(m.routes),
                                l = de(a, r, o, A.Z, u.published_content[0], d);
                            u.setPublishedContent([l])
                        }
                    }), [v, d, u, null === (r = m.customization) || void 0 === r ? void 0 : r.collection_item_data, m.routes]),
                    P = (0, N.useCallback)(function() {
                        var e = (0, I.Z)(D().mark((function e(t) {
                            var n, i;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = re(v.integration), e.next = 3, n.getColumnSelectOptions(m.id, t, v);
                                    case 3:
                                        i = e.sent, g(i);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [v, m.id]),
                    $ = (0, N.useCallback)(function() {
                        var e = (0, I.Z)(D().mark((function e(t) {
                            var n, i, r, a, o, l, s;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (v) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (n = re(v.integration), i = t ? void 0 : S.nextCursor, r = t ? [] : S.data || [], !n.tableConnected(v)) {
                                            e.next = 17;
                                            break
                                        }
                                        return z(!0), e.next = 9, n.getColumnNames(m.id, v);
                                    case 9:
                                        return a = e.sent, o = JSON.parse(JSON.stringify(v)), e.next = 13, n.getDataWithSearchQueryAndFilter(m.id, x && "" !== x ? (0, me.Z)(o, "metadata.max_items") : o, x, a, i || void 0, h && k !== O.k ? k : void 0);
                                    case 13:
                                        l = e.sent, s = {
                                            hasMore: null === l || void 0 === l ? void 0 : l.has_more,
                                            nextCursor: null === l || void 0 === l ? void 0 : l.next_cursor,
                                            fetchedCursor: i,
                                            data: (0, L.Z)(r).concat((0, L.Z)((null === l || void 0 === l ? void 0 : l.data) || [])),
                                            searchQuery: x,
                                            selectedVisitorFilter: k,
                                            initiated: !0
                                        }, q(s), z(!1);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [S, v, m.id, q, k, h, x]);
                S.initiated && (0, he.Z)(v, null === u || void 0 === u || null === (a = u.customization) || void 0 === a || null === (o = a.collection_data) || void 0 === o ? void 0 : o[d]) || ((null === v || void 0 === v || null === (l = v.metadata) || void 0 === l ? void 0 : l.visitor_filter_column) && P(v.metadata.visitor_filter_column), (null === v || void 0 === v ? void 0 : v.expiresAt) && (new Date).getTime() > ((null === (s = new Date(null === v || void 0 === v ? void 0 : v.expiresAt)) || void 0 === s ? void 0 : s.getTime()) || 0) - 1e4 ? F({
                    hasMore: void 0,
                    nextCursor: void 0,
                    fetchedCursor: "-1",
                    data: null === v || void 0 === v ? void 0 : v.data,
                    searchQuery: "",
                    selectedVisitorFilter: O.k,
                    initiated: !0
                }) : F({
                    hasMore: null === v || void 0 === v ? void 0 : v.hasMore,
                    nextCursor: null === v || void 0 === v ? void 0 : v.nextCursor,
                    fetchedCursor: null === v || void 0 === v ? void 0 : v.fetchedCursor,
                    data: null === v || void 0 === v ? void 0 : v.data,
                    searchQuery: "",
                    selectedVisitorFilter: O.k,
                    initiated: !0
                }));
                (0, N.useEffect)((function() {
                    "-1" === (null === S || void 0 === S ? void 0 : S.fetchedCursor) && $(!0)
                }), [null === S || void 0 === S ? void 0 : S.fetchedCursor, $]), (0, N.useEffect)((function() {
                    "-1" === (null === S || void 0 === S ? void 0 : S.fetchedCursor) || S.searchQuery === x && S.selectedVisitorFilter === k || $(!0)
                }), [S, $, k, x]);
                var U = (0, N.useMemo)((function() {
                    return {
                        collectionData: (0, R.Z)({
                            integration: null === v || void 0 === v ? void 0 : v.integration,
                            metadata: null === v || void 0 === v ? void 0 : v.metadata
                        }, S),
                        fetchMore: $,
                        loading: M,
                        visitorFilterList: f,
                        selectedVisitorFilter: k,
                        setSelectedVisitorFilter: j,
                        searchQuery: x,
                        setSearchQuery: b
                    }
                }), [null === v || void 0 === v ? void 0 : v.integration, null === v || void 0 === v ? void 0 : v.metadata, S, $, M, f, k, j, x, b]);
                return (0, w.jsx)(ve.W.Provider, {
                    value: U,
                    children: c
                })
            }
            var ge = n(26331),
                _e = n(6055),
                xe = function() {
                    function e() {
                        (0, V.Z)(this, e)
                    }
                    return e.submit = function(e, t) {
                        return (0, I.Z)(D().mark((function n() {
                            var i, r, a;
                            return D().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = "/form/submission/".concat(e), r = new Q, n.next = 4, r.post(i, t);
                                    case 4:
                                        return a = n.sent, n.abrupt("return", a);
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                be = xe;

            function ye(e) {
                var t = e.isChildTemplate,
                    n = e.childTemplateSlug,
                    i = (0, N.useContext)(E.z);
                return function(e) {
                    var t, n = e.isChildTemplate,
                        i = e.childTemplateSlug,
                        r = (0, N.useContext)(pe.u),
                        a = (0, N.useContext)(E.z),
                        o = null === a || void 0 === a || null === (t = a.customization) || void 0 === t ? void 0 : t.item_page_data,
                        l = (0, N.useCallback)((0, I.Z)(D().mark((function e() {
                            var t, n, l, s, d;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(o && a && (null === r || void 0 === r ? void 0 : r.routes) && i)) {
                                            e.next = 8;
                                            break
                                        }
                                        return l = W(r.routes), e.next = 5, null === (t = re(null === o || void 0 === o ? void 0 : o.integration)) || void 0 === t ? void 0 : t.getDataBySlug(null === r || void 0 === r ? void 0 : r.id, o, i);
                                    case 5:
                                        s = e.sent, d = ue(null === s || void 0 === s || null === (n = s.data) || void 0 === n ? void 0 : n[0], o, a.id, l[a.id], A.Z, a.published_content[0]), a.setPublishedContent([d]);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [o, a, null === r || void 0 === r ? void 0 : r.routes, null === r || void 0 === r ? void 0 : r.id, i]);
                    (0, N.useEffect)((function() {
                        var e;
                        n && i && (null === o || void 0 === o ? void 0 : o.expiresAt) && (new Date).getTime() > (null === (e = new Date(null === o || void 0 === o ? void 0 : o.expiresAt)) || void 0 === e ? void 0 : e.getTime()) - 1e4 && l()
                    }), [null === o || void 0 === o ? void 0 : o.expiresAt, i, n])
                }({
                    isChildTemplate: t,
                    childTemplateSlug: n
                }), (0, w.jsx)(C.e, {
                    node: i.published_content[0],
                    internalLinkComponent: _e.Z,
                    optimizedImageComponent: j(),
                    collectionProviderComponent: fe,
                    isImageOptimizable: ge.q,
                    handleFormSubmission: be.submit
                })
            }
            ye.defaultProps = {
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
            var i, r, a = n(52322),
                o = n(41664),
                l = n.n(o),
                s = n(1438);
            ! function(e) {
                e.OWNER = "owner", e.ADMIN = "admin", e.WRITER = "writer", e.READER = "reader"
            }(i || (i = {})),
            function(e) {
                e.ACTIVE = "active", e.INACTIVE = "inactive"
            }(r || (r = {}));
            var d = n(42656),
                c = n.n(d);
            var u = function(e) {
                var t, n = e.subscription,
                    i = e.spaceID;
                return (null === n || void 0 === n ? void 0 : n.product_id) === s.Uw || (null === n || void 0 === n ? void 0 : n.status) !== r.ACTIVE || (null === n || void 0 === n || null === (t = n.metadata) || void 0 === t ? void 0 : t.affiliate) ? (0, a.jsx)(l(), {
                    href: "".concat(s.og, "?utm_source=watermark:").concat(i),
                    children: (0, a.jsxs)("a", {
                        target: "_new",
                        className: c().watermark,
                        children: ["Made in", " ", s.i5]
                    })
                }) : null
            }
        },
        1438: function(e, t, n) {
            "use strict";
            n.d(t, {
                A2: function() {
                    return r
                },
                Dn: function() {
                    return o
                },
                Fh: function() {
                    return g
                },
                OH: function() {
                    return f
                },
                PJ: function() {
                    return a
                },
                Si: function() {
                    return p
                },
                Tl: function() {
                    return u
                },
                Uw: function() {
                    return v
                },
                Yu: function() {
                    return m
                },
                bG: function() {
                    return i
                },
                gE: function() {
                    return s
                },
                i5: function() {
                    return l
                },
                it: function() {
                    return h
                },
                oQ: function() {
                    return d
                },
                og: function() {
                    return c
                }
            });
            var i = "https://api.typedream.com/v0",
                r = "typedream.app",
                a = "https://analytics.typedream.com",
                o = "build.typedream.com",
                l = "Typedream",
                s = "@typedreamHQ",
                d = "/images/logo@100.png",
                c = "https://typedream.com",
                u = "/favicon.ico",
                m = "A website made with Typedream.",
                v = "FREE",
                h = "id",
                p = "ITEM_PAGE_URL",
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
                    return s
                },
                z: function() {
                    return l
                }
            });
            var i = n(70865),
                r = n(96670),
                a = n(52322),
                o = n(2784),
                l = (0, o.createContext)(null);

            function s(e) {
                var t = e.page,
                    n = e.children,
                    s = (0, o.useState)(t),
                    d = s[0],
                    c = s[1];
                (0, o.useEffect)((function() {
                    c(t)
                }), [t]);
                var u = (0, o.useMemo)((function() {
                    return (0, r.Z)((0, i.Z)({}, d), {
                        setPublishedContent: function(e) {
                            c((0, r.Z)((0, i.Z)({}, d), {
                                published_content: e
                            }))
                        }
                    })
                }), [d]);
                return (0, a.jsx)(l.Provider, {
                    value: u,
                    children: n
                })
            }
        },
        64368: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return a
                },
                u: function() {
                    return r
                }
            });
            var i = n(52322),
                r = (0, n(2784).createContext)(null);

            function a(e) {
                var t = e.space,
                    n = e.children;
                return (0, i.jsx)(r.Provider, {
                    value: t,
                    children: n
                })
            }
        },
        41715: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return c
                }
            });
            var i = n(98788),
                r = n(34051),
                a = n.n(r),
                o = function() {
                    var e = (0, i.Z)(a().mark((function e() {
                        return a().wrap((function(e) {
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
                s = n(2784),
                d = n(1438),
                c = function(e) {
                    (0, s.useEffect)((function() {
                        var t = [window.location.hostname, "localhost", d.Dn, /.*typedream.*\.vercel\.app$/, /.*\.typedream\.com$/];
                        !e || window.self !== window.top && t.some((function(e) {
                            var t = new URL(document.referrer).hostname;
                            return (0, l.Z)(e, RegExp) ? e.test(t) : "string" === typeof e && e === t
                        })) || o()
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
            var i = n(52322),
                r = n(2784),
                a = n(1438),
                o = function() {
                    var e = document.querySelector("html"),
                        t = "light" === ((null === e || void 0 === e ? void 0 : e.getAttribute("data-theme")) || "light") ? "dark" : "light";
                    null === e || void 0 === e || e.setAttribute("data-theme", t), localStorage.setItem(a.Fh, t)
                },
                l = function() {
                    var e = document.querySelector("html"),
                        t = localStorage.getItem(a.Fh) || "light";
                    null === e || void 0 === e || e.setAttribute("data-theme", t)
                },
                s = n(11617),
                d = n.n(s);

            function c() {
                return (0, i.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: d().moon,
                    children: (0, i.jsx)("path", {
                        d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"
                    })
                })
            }

            function u() {
                return (0, i.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: d().sun,
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
                        clipRule: "evenodd"
                    })
                })
            }
            var m = function() {
                return (0, r.useEffect)(l, []), (0, i.jsxs)("button", {
                    type: "button",
                    className: d().switch,
                    onClick: o,
                    tabIndex: -1,
                    children: [(0, i.jsx)(u, {}), (0, i.jsx)(c, {})]
                })
            }
        },
        84296: function(e, t, n) {
            "use strict";
            var i = n(34406),
                r = n(18282).Z,
                a = (0, n(23903).Z)(n(34051));
            e.exports = {
                experimental: {
                    esmExternals: "loose"
                },
                env: {
                    pkgVersion: i.env.npm_package_version
                },
                reactStrictMode: !0,
                images: {
                    path: "https://renderer-v2.vercel.app/_next/image",
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    domains: ["staging-api.typedream.com", "api.typedream.com", "typedream.sfo3.digitaloceanspaces.com", "typedream-assets.sfo3.digitaloceanspaces.com"],
                    formats: ["image/avif", "image/webp"],
                    minimumCacheTTL: 31536e3
                },
                headers: function() {
                    return r(a.default.mark((function e() {
                        return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", [{
                                        source: "/(.*)?",
                                        headers: [{
                                            key: "Access-Control-Allow-Origin",
                                            value: "*"
                                        }, {
                                            key: "Access-Control-Allow-Methods",
                                            value: "GET,HEAD,PUT,PATCH,POST,DELETE"
                                        }]
                                    }]);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            }
        },
        26331: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return r
                }
            });
            var i = n(84296),
                r = function(e) {
                    if (!e) return !1;
                    var t = !1;
                    try {
                        var n;
                        t = !!(null === i.images || void 0 === i.images || null === (n = i.images.domains) || void 0 === n ? void 0 : n.some((function(t) {
                            return t === new URL(e).hostname
                        })))
                    } catch (r) {}
                    return t
                }
        },
        42656: function(e) {
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
        },
        40093: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return r
                }
            });
            const i = () => {
                    throw new Error("You forgot to wrap your component in <CollectionContext.Provider>.")
                },
                r = (0, n(2784).createContext)({
                    collectionData: void 0,
                    fetchMore: i,
                    loading: !1,
                    visitorFilterList: [],
                    selectedVisitorFilter: void 0,
                    setSelectedVisitorFilter: i,
                    searchQuery: "",
                    setSearchQuery: i
                })
        },
        98635: function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, {
                P: function() {
                    return i
                }
            }), (r = i || (i = {})).PILL = "pill", r.PILL_BG = "pillWithBackground", r.TAB = "tab", r.SQUARE_BG = "squareWithBackground", r.LEFT_COLUMN = "leftColumn"
        },
        72380: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return h
                },
                k: function() {
                    return v
                }
            });
            var i = n(52322),
                r = n(10869),
                a = n(50834),
                o = n(72779),
                l = n.n(o),
                s = n(93765),
                d = n(24228),
                c = n(2784);
            var u = {
                    filterWrapper_pill: "_MsLoLywr",
                    filterWrapper_pillWithBackground: "_OVr8OLdq",
                    filterWrapper_squareWithBackground: "_KCJtR992",
                    filterWrapper_tab: "_Mkx-xKyK",
                    filterWrapper_leftColumn: "_AKJvJzDA",
                    filterContainer_pill: "_9FWYHBff",
                    filterContainer_pillWithBackground: "_eINpAg6e",
                    filterContainer_squareWithBackground: "_Bb9mYtfr",
                    filterContainer_tab: "_XfVO2qg4",
                    filterContainer_leftColumn: "_IJrmvk2S",
                    filterItemWrapper_pill: "_-GWbLAEf",
                    filterItemWrapper_pillWithBackground: "_RdLLGGLh",
                    filterItemWrapper_squareWithBackground: "_n3zQRBkN",
                    filterItemWrapper_tab: "_1-8RP4En",
                    filterItemWrapper_leftColumn: "_5cv15TiS",
                    filterItem_pill: "_ITHQUMBn",
                    filterItem_pillWithBackground: "_MkXb2GGA",
                    filterItem_squareWithBackground: "_msIZmUc1",
                    filterItem_tab: "_Lr6w9CaZ",
                    filterItem_leftColumn: "_Cqjvvmvy",
                    filterItemActive_pill: "_772wGp5Y",
                    filterItemActive_pillWithBackground: "_4LzgT-xQ",
                    filterItemActive_squareWithBackground: "_eH-XBuac",
                    filterItemActive_leftColumn: "_8ej7VZ6w",
                    filterItemActive_tab: "_ZlP1bs7p",
                    filterNavPrev: "_clJXG6tK",
                    filterNavNext: "_sJT8qN1J"
                },
                m = n(98635);
            const v = "All";

            function h(e) {
                const {
                    filters: t,
                    filterStyle: n,
                    filterColor: o,
                    selectedFilter: h,
                    setSelectedFilter: p
                } = e, f = (0, c.useRef)(null), [g, _] = (0, c.useState)(0), [x, b] = (0, c.useState)(!1), y = f.current && n !== m.P.LEFT_COLUMN && f.current.scrollWidth > f.current.offsetWidth, w = e => e ? n === m.P.TAB ? "white" === o || "gray" === o ? "var(--text)" : "var(--accent)" : "gray" === o ? "var(--text)" : "white" === o ? "var(--text-light-theme)" : "var(--text-on-accent)" : "var(--text-lighter)", k = e => e && n === m.P.TAB ? "white" === o || "gray" === o ? "var(--text-light)" : "var(--accent)" : "transparent";
                (0, c.useEffect)((() => {
                    f.current && y && (g >= f.current.scrollWidth - f.current.offsetWidth - 1 ? b(!0) : b(!1))
                }), [g, y]);
                const j = e => {
                    f.current && (f.current.scrollLeft += e, _(g + e))
                };
                return (0, i.jsxs)("div", {
                    className: l()(u[`filterWrapper_${n}`]),
                    style: {
                        "--accent": (0, r.Tj)(o, a.z7)
                    },
                    children: [(0, i.jsx)("div", {
                        className: u[`filterContainer_${n}`],
                        children: (0, i.jsxs)("div", {
                            className: u[`filterItemWrapper_${n}`],
                            ref: f,
                            onScroll: y ? () => {
                                f.current && _(f.current.scrollLeft)
                            } : () => {},
                            children: [(0, i.jsx)("button", {
                                type: "button",
                                onClick: () => p(v),
                                className: l()(u[`filterItem_${n}`], {
                                    [u[`filterItemActive_${n}`]]: h === v
                                }),
                                style: {
                                    color: w(h === v),
                                    borderColor: k(h === v),
                                    boxShadow: h === v && n !== m.P.TAB ? `0 10px 20px -10px ${(0,r.Tj)(o,a.My)}` : "none"
                                },
                                children: v
                            }), t.map((e => (0, i.jsx)("button", {
                                type: "button",
                                onClick: () => p(e),
                                className: l()(u[`filterItem_${n}`], {
                                    [u[`filterItemActive_${n}`]]: h === e
                                }),
                                style: {
                                    color: w(h === e),
                                    borderColor: k(h === e),
                                    boxShadow: h === e && n !== m.P.TAB ? `0 10px 20px -10px ${(0,r.Tj)(o,a.My)}` : "none"
                                },
                                children: e
                            }, e)))]
                        })
                    }), y && 0 !== g && (0, i.jsx)("div", {
                        className: u.filterNavPrev,
                        children: (0, i.jsx)("button", {
                            type: "button",
                            onClick: () => j(-300),
                            children: (0, i.jsx)(d.s, {
                                size: 28
                            })
                        })
                    }), y && !x && (0, i.jsx)("div", {
                        className: u.filterNavNext,
                        children: (0, i.jsx)("button", {
                            type: "button",
                            onClick: () => j(300),
                            children: (0, i.jsx)(s._, {
                                size: 28
                            })
                        })
                    })]
                })
            }
            h.defaultProps = {
                selectedFilter: v,
                filterStyle: m.P.PILL,
                filterColor: "accent"
            }
        },
        46007: function(e, t, n) {
            "use strict";
            n.d(t, {
                R6: function() {
                    return o
                },
                d: function() {
                    return i
                },
                jq: function() {
                    return r
                },
                nx: function() {
                    return a
                },
                w: function() {
                    return l
                }
            });
            const i = 700,
                r = 70,
                a = 17,
                o = .6,
                l = .8
        },
        61317: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return l
                }
            });
            var i = n(52322),
                r = n(2784),
                a = n(72779),
                o = n.n(a);

            function l({
                type: e,
                name: t,
                className: n
            }) {
                return (0, r.useEffect)((() => {
                    (e => {
                        if (document.head.querySelector(`link[href="${e}"][rel="stylesheet"]`)) return;
                        const t = document.createElement("link");
                        t.rel = "stylesheet", t.href = e;
                        const n = document.head.querySelector(`link[href="${e}"][rel="preload"]`);
                        n ? n.insertAdjacentElement("afterend", t) : document.head.appendChild(t)
                    })("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css")
                }), []), (0, i.jsx)("i", {
                    className: o()(`bx ${e}-${t}`, n),
                    contentEditable: !1
                })
            }
        },
        52899: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                }
            });
            const i = (0, n(2784).createContext)({
                navbarItemRef: {
                    current: null
                }
            })
        },
        81112: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return it
                }
            });
            var i = n(52322),
                r = n(203),
                a = n(72779),
                o = n.n(a),
                l = n(2784),
                s = n(50834),
                d = n(10869);
            const c = e => e ? {
                    background: (0, d.Tj)(e, s.z7)
                } : {},
                u = (e, t) => e ? {
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    ...t ? {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backgroundBlendMode: "darken"
                    } : {}
                } : {},
                m = (0, l.forwardRef)((({
                    align: e,
                    vertical_align: t,
                    background: n,
                    backgroundImage: r,
                    backgroundDarken: a,
                    backgroundVideo: s,
                    className: d,
                    style: m,
                    children: v,
                    ...h
                }, p) => {
                    const f = (0, l.useRef)(null);
                    return (0, l.useEffect)((() => {
                        var e;
                        null == (e = f.current) || e.load()
                    }), [s]), (0, i.jsxs)("div", {
                        ref: p,
                        className: o()("typedream content", {
                            "align-left": "align_left" === e,
                            "align-center": "align_center" === e,
                            "align-right": "align_right" === e,
                            "align-top": "align_start" === t,
                            "align-middle": "align_center" === t,
                            "align-bottom": "align_end" === t
                        }, d),
                        ...h,
                        style: { ...c(n),
                            ..."string" === typeof r && u(r, a),
                            ..."string" === typeof r && {
                                backgroundImage: `url("${r}")`
                            },
                            minHeight: t ? "100vh" : void 0,
                            ...m
                        },
                        "data-bg": "string" === typeof r ? r : void 0,
                        children: [(0, l.isValidElement)(r) && (0, i.jsx)("div", {
                            className: "slate-root-background",
                            children: r
                        }), s && (0, i.jsx)("div", {
                            className: "slate-root-background",
                            children: (0, i.jsx)("video", {
                                ref: f,
                                className: o()("slate-root-background-video", {
                                    darken: a
                                }),
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                children: (0, i.jsx)("source", {
                                    src: s
                                })
                            })
                        }), v]
                    })
                }));
            m.displayName = "RootElement";
            var v = n(5152),
                h = n.n(v);

            function p({
                src: e,
                darken: t,
                optimizable: n,
                optimizedImageComponent: r
            }) {
                const [a, s] = (0, l.useState)(!1);
                return e && r ? (0, i.jsx)(r, {
                    src: e,
                    alt: "background",
                    layout: "fill",
                    objectFit: "cover",
                    objectPosition: "center",
                    className: o()({
                        darken: t
                    }),
                    onError: () => s(!0),
                    unoptimized: !(n && !a) || void 0,
                    quality: 100
                }) : null
            }
            var f = n(81024);
            const g = e => {
                if (!e) return {};
                return {
                    textAlign: {
                        align_left: "left",
                        align_center: "center",
                        align_right: "right",
                        column_dynamic: void 0
                    }[e]
                }
            };

            function _(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    align: s,
                    mobile_hide: d,
                    desktop_hide: c
                } = t;
                return (0, i.jsx)("div", {
                    className: o()("slate-blockquote-container", {
                        "mobile:hidden": d,
                        "desktop:hidden": c
                    }),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth
                    },
                    children: (0, i.jsx)("blockquote", {
                        className: "slate-blockquote",
                        style: { ...g(s)
                        },
                        ...r,
                        children: n
                    })
                })
            }
            const x = (0, l.forwardRef)((({
                    children: e,
                    ...t
                }, n) => (0, i.jsx)("a", {
                    ref: n,
                    ...t,
                    children: e
                }))),
                b = (0, l.forwardRef)(((e, t) => {
                    const {
                        href: n,
                        internal_link: r,
                        open_in_new_tab: a,
                        internalLinkComponent: o = x,
                        children: l,
                        style: s,
                        className: d
                    } = e, c = {
                        ref: t,
                        href: n,
                        target: a ? "_blank" : void 0,
                        style: s,
                        className: d
                    };
                    return r ? (0, i.jsx)(o, { ...c,
                        children: l
                    }) : (0, i.jsx)("a", { ...c,
                        rel: "noreferrer",
                        children: l
                    })
                })),
                y = e => {
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
                };
            var w = n(61317),
                k = n(57190);

            function j(e) {
                const [t, n] = (0, k.useIntersection)({});
                if (!e) return [t, ""];
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
                }(e);
                return [t, o()(i, {
                    "animated-block-initial": !n,
                    "animated-block-visible": n
                })]
            }
            const N = {
                regular: "bx",
                solid: "bxs",
                logo: "bxl"
            };

            function C({
                icon: e,
                className: t
            }) {
                if (!e) return (0, i.jsx)("div", {});
                switch (e.type) {
                    case "icon":
                        return (0, i.jsx)("div", {
                            className: t,
                            style: {
                                color: (0, d.Tj)(e.content.color, s.eR)
                            },
                            children: (0, i.jsx)(w.J, {
                                type: N[e.content.type],
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

            function E(e) {
                const {
                    element: t,
                    children: n
                } = e, {
                    mobile_hide: r,
                    desktop_hide: a,
                    width: l,
                    width_max: s,
                    align: d,
                    animation: c
                } = t, [u, m] = j(c);
                return (0, i.jsx)("div", {
                    ref: u,
                    className: o()("slate-button-container", {
                        "mobile:hidden": r,
                        "desktop:hidden": a
                    }, m),
                    style: {
                        "--width": (0, f.oB)(l, s).width,
                        "--max-width": (0, f.oB)(l, s).maxWidth,
                        "--horizontal-alignment": d && y(d)
                    },
                    children: n
                })
            }

            function I(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    buttonType: a,
                    background: l,
                    color: c,
                    icon: u
                } = t, m = (0, d.Tj)(l, s.My);
                return (0, i.jsxs)("button", {
                    className: o()("slate-button"),
                    style: {
                        background: (0, d.Tj)(l, s.z7),
                        color: (0, d.Tj)(c, s.lq),
                        boxShadow: !!m && `0 10px 20px -10px ${m}`
                    },
                    type: a || "button",
                    ...r,
                    children: [(0, i.jsx)(C, {
                        icon: u,
                        className: "slate-button-icon"
                    }), n]
                })
            }

            function R(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    internalLinkComponent: a
                } = e, {
                    url: o,
                    open_in_new_tab: l,
                    internal_link: s
                } = t;
                return o ? (0, i.jsx)(E, {
                    element: t,
                    children: (0, i.jsx)(b, {
                        href: o,
                        internal_link: s,
                        open_in_new_tab: l,
                        internalLinkComponent: a,
                        children: (0, i.jsx)(I, {
                            element: t,
                            children: n
                        })
                    })
                }) : (0, i.jsx)(E, {
                    element: t,
                    children: (0, i.jsx)(I, {
                        element: t,
                        attributes: r,
                        children: n
                    })
                })
            }

            function T(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    mobile_hide: s,
                    desktop_hide: d
                } = t;
                return (0, i.jsx)("div", {
                    className: o()("slate-code_block-container", {
                        "mobile:hidden": s,
                        "desktop:hidden": d
                    }),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth
                    },
                    children: (0, i.jsx)("pre", {
                        className: "slate-code_block",
                        ...r,
                        children: (0, i.jsx)("code", {
                            children: n
                        })
                    })
                })
            }

            function S({
                children: e
            }) {
                return (0, i.jsx)("span", {
                    className: "slate-code_line",
                    children: e
                })
            }
            E.defaultProps = {
                width_max: void 0,
                align: void 0,
                animation: void 0
            }, I.defaultProps = {
                background: void 0,
                color: void 0,
                shadowColor: void 0
            }, C.defaultProps = {
                className: void 0
            };
            var F = n(40093),
                D = n(98635),
                A = n(76635);

            function B({
                search: e,
                searchQuery: t,
                setSearchQuery: n
            }) {
                const [r, a] = (0, l.useState)(""), o = (0, l.useRef)(null), s = (0, l.useCallback)((0, A.debounce)((e => {
                    n(e)
                }), 500), []);
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
                        ref: o,
                        type: "text",
                        value: r,
                        placeholder: "Search...",
                        onChange: e => {
                            a(e.target.value), s(e.target.value)
                        },
                        onKeyDown: t => {
                            "Enter" === t.key && e(!0)
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
                            a(""), n(""), o.current && o.current.focus()
                        },
                        children: (0, i.jsx)("path", {
                            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                        })
                    })]
                })
            }
            var L = n(72380);

            function W(e) {
                var t, n, r, a, s, d;
                const {
                    element: c,
                    children: u,
                    attributes: m
                } = e, {
                    width: v,
                    width_max: h,
                    collection_template: p,
                    mobile_hide: g,
                    desktop_hide: _
                } = c, {
                    collectionData: x,
                    fetchMore: b,
                    loading: y,
                    visitorFilterList: w,
                    setSelectedVisitorFilter: k,
                    selectedVisitorFilter: j,
                    searchQuery: N,
                    setSearchQuery: C
                } = (0, l.useContext)(F.W), E = null == (t = null == p ? void 0 : p.settings) ? void 0 : t.numCol, I = null == (n = null == x ? void 0 : x.metadata) ? void 0 : n.show_search_bar, R = null == (r = null == x ? void 0 : x.metadata) ? void 0 : r.visitor_filter_column, T = R ? null == (a = null == x ? void 0 : x.metadata) ? void 0 : a.visitor_filter_style : void 0, S = R ? null == (s = null == x ? void 0 : x.metadata) ? void 0 : s.visitor_filter_color : void 0;
                return (0, i.jsxs)("div", {
                    className: o()("slate-collection", {
                        "mobile:hidden": g,
                        "desktop:hidden": _,
                        "slate-collection-column": T === D.P.LEFT_COLUMN
                    }),
                    style: (0, f.oB)(v, h),
                    ...m,
                    children: [R && w.length > 0 && (0, i.jsx)("div", {
                        style: {
                            width: "100%",
                            marginBottom: 16
                        },
                        children: (0, i.jsx)(L.L, {
                            filters: w,
                            filterColor: S,
                            filterStyle: T,
                            selectedFilter: j,
                            setSelectedFilter: k
                        })
                    }), (0, i.jsxs)("div", {
                        children: [I && (0, i.jsx)(B, {
                            search: b,
                            searchQuery: N,
                            setSearchQuery: C
                        }), 0 === (null == (d = null == x ? void 0 : x.data) ? void 0 : d.length) && (0, i.jsxs)("div", {
                            className: "slate-collection-no-result",
                            children: ["No results found", I && ", try adjusting your search keyword", "."]
                        }), (0, i.jsx)("div", {
                            className: "slate-collection-grid",
                            style: {
                                "--grid-repeat": E || "auto-fit"
                            },
                            children: u
                        }), y && (0, i.jsx)("div", {
                            className: "is-flex is-justify-content-center",
                            children: (0, i.jsx)("span", {
                                className: "loader is-loading"
                            })
                        }), (null == x ? void 0 : x.hasMore) && (0, i.jsxs)("div", {
                            className: "slate-collection-show-more",
                            role: "none",
                            onClick: () => b(),
                            children: ["Show more", (0, i.jsx)("svg", {
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
                    })]
                })
            }

            function Z(e) {
                const {
                    children: t,
                    attributes: n
                } = e;
                return (0, i.jsx)("div", {
                    className: "slate-collection-item",
                    ...n,
                    children: t
                })
            }
            var O = n(29766),
                M = n.n(O);
            const z = "undefined" !== typeof window ? new(M()) : null;

            function q(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    backgroundImageElement: a
                } = e, {
                    width: s,
                    width_max: d,
                    height: m,
                    align: v,
                    vertical_align: h,
                    mobile_direction: p,
                    mobile_reverse_columns: g,
                    mobile_horizontal_overflow: _,
                    background: x,
                    backgroundDarken: b,
                    mobile_hide: y,
                    desktop_hide: w
                } = t, k = a || t.backgroundImage, j = (0, l.useRef)(null);
                (0, l.useEffect)((() => "string" === typeof k ? (z.update(), () => {
                    j.current && M().resetStatus(j.current)
                }) : () => {}), [k]);
                const N = "direction_horizontal" === p,
                    C = !!g;
                return (0, i.jsxs)("div", {
                    ref: j,
                    className: "slate-column-container lazy",
                    style: { ...(0, f.oB)(s, d),
                        ...c(x),
                        ..."string" === typeof k && u(k, b)
                    },
                    "data-bg": "string" === typeof k ? k : void 0,
                    ...r,
                    children: [(0, l.isValidElement)(k) && (0, i.jsx)("div", {
                        contentEditable: !1,
                        className: "slate-column-background",
                        children: k
                    }), (0, i.jsx)("div", {
                        className: "slate-column-wrapper",
                        "data-mobile-stack": N ? "horizontal" : "vertical",
                        children: (0, i.jsx)("div", {
                            className: o()("slate-column", N ? "stack-horizontal" : "stack-vertical", {
                                "mobile:hidden": y,
                                "desktop:hidden": w,
                                "stack-reverse": C,
                                "align-left": "align_left" === v,
                                "align-center": "align_center" === v,
                                "align-right": "align_right" === v,
                                "align-top": "align_start" === h,
                                "align-middle": "align_center" === h,
                                "align-bottom": "align_end" === h,
                                "mobile-horizontal-squeeze": "squeeze" === _,
                                "mobile-horizontal-scroll": "scroll" === _
                            }),
                            style: {
                                "--min-height": (0, f.nu)(m).height,
                                "--width": (0, f.oB)(s, d).width,
                                "--column-width": (0, f.oB)(s, d).width
                            },
                            children: n
                        })
                    })]
                })
            }

            function P(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a
                } = t;
                return (0, i.jsx)("div", {
                    className: "slate-column_item",
                    style: {
                        "--width": 100 * a + "%",
                        "--width-float": a
                    },
                    ...r,
                    children: n
                })
            }
            var $ = n(28519);

            function U(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    backgroundImageElement: a,
                    internalLinkComponent: s
                } = e, {
                    width: d,
                    width_max: m,
                    height: v,
                    keep_aspect_ratio: h,
                    align: p,
                    vertical_align: g,
                    background: _,
                    backgroundDarken: x,
                    backgroundVideo: y,
                    mobile_hide: w,
                    desktop_hide: k,
                    style: N,
                    url: C,
                    open_in_new_tab: E,
                    internal_link: I,
                    animation: R
                } = t, T = a || t.backgroundImage, S = (0, l.useRef)(null), [F, D] = j(R), A = (0, $.Z)(S, F);
                (0, l.useEffect)((() => "string" === typeof T ? (z.update(), () => {
                    S.current && M().resetStatus(S.current)
                }) : () => {}), [T]);
                const B = (0, i.jsxs)("div", {
                    ref: A,
                    role: "none",
                    className: o()("slate-container lazy", {
                        "mobile:hidden": w,
                        "desktop:hidden": k,
                        "align-left": "align_left" === p,
                        "align-center": "align_center" === p,
                        "align-right": "align_right" === p,
                        "align-top": "align_start" === g,
                        "align-middle": "align_center" === g,
                        "align-bottom": "align_end" === g,
                        card: "card" === N
                    }, D),
                    style: {
                        "--min-height": (0, f.nu)(v).height,
                        "--width": (0, f.oB)(d, m).width,
                        "--max-width": (0, f.oB)(d, m).maxWidth,
                        ...c(_),
                        ..."string" === typeof T && u(T, x),
                        ...h && d && v && {
                            "--aspect-ratio": `${d} / ${v}`
                        }
                    },
                    "data-bg": "string" === typeof T ? T : void 0,
                    ...r,
                    children: [(0, l.isValidElement)(T) && (0, i.jsx)("div", {
                        contentEditable: !1,
                        className: "slate-container-background",
                        children: T
                    }), y && (0, i.jsx)("video", {
                        contentEditable: !1,
                        className: o()("slate-container-background-video", {
                            card: "card" === N,
                            darken: x
                        }),
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        children: (0, i.jsx)("source", {
                            src: y
                        })
                    }), n]
                });
                return C ? (0, i.jsx)("div", {
                    className: "slate-container-link-wrapper",
                    style: {
                        "--width": (0, f.oB)(d, m).width,
                        "--max-width": (0, f.oB)(d, m).maxWidth
                    },
                    children: (0, i.jsx)(b, {
                        href: C,
                        internal_link: I,
                        open_in_new_tab: E,
                        internalLinkComponent: s,
                        className: "slate-container-link",
                        children: B
                    })
                }) : B
            }
            var V = n(46007);

            function H(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    mobile_hide: l,
                    desktop_hide: s
                } = t;
                return (0, i.jsxs)("div", {
                    className: o()("slate-divider-container", {
                        "mobile:hidden": l,
                        "desktop:hidden": s
                    }),
                    style: {
                        maxWidth: "100%",
                        width: `${a||V.d}px`
                    },
                    children: [(0, i.jsx)("hr", {
                        className: "slate-divider",
                        ...r
                    }), n && (0, i.jsx)("div", {
                        style: {
                            display: "none"
                        },
                        children: n
                    })]
                })
            }

            function Q(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    align: s,
                    mobile_hide: d,
                    desktop_hide: c,
                    animation: u
                } = t, [m, v] = j(u);
                return (0, i.jsx)("h1", {
                    ref: m,
                    className: o()("slate-h1", {
                        "mobile:hidden": d,
                        "desktop:hidden": c
                    }, v),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth,
                        ...g(s)
                    },
                    ...r,
                    children: n
                })
            }

            function G(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    align: s,
                    mobile_hide: d,
                    desktop_hide: c,
                    animation: u
                } = t, [m, v] = j(u);
                return (0, i.jsx)("h2", {
                    ref: m,
                    className: o()("slate-h2", {
                        "mobile:hidden": d,
                        "desktop:hidden": c
                    }, v),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth,
                        ...g(s)
                    },
                    ...r,
                    children: n
                })
            }

            function J(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    align: s,
                    mobile_hide: d,
                    desktop_hide: c,
                    animation: u
                } = t, [m, v] = j(u);
                return (0, i.jsx)("h3", {
                    ref: m,
                    className: o()("slate-h3", {
                        "mobile:hidden": d,
                        "desktop:hidden": c
                    }, v),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth,
                        ...g(s)
                    },
                    ...r,
                    children: n
                })
            }

            function Y(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    optimizable: a,
                    optimizedImageComponent: s,
                    internalLinkComponent: d
                } = e, {
                    url: c,
                    alt_text: u = "",
                    width: m,
                    height: v,
                    aspect_ratio: h,
                    align: p,
                    href: g,
                    internal_link: _,
                    open_in_new_tab: x,
                    mobile_hide: w,
                    desktop_hide: k,
                    animation: N,
                    border_radius: C,
                    crop: E
                } = t, [I, R] = (0, l.useState)(!1), [T, S] = j(N), F = E ? E.originalDimensions.height * (E.scale || 1) : v, D = E ? E.originalDimensions.width * (E.scale || 1) : m, A = E ? {
                    width: "100%",
                    maxWidth: "unset",
                    height: "100%"
                } : {};
                let B = s && c && D && F ? (0, i.jsx)(s, {
                        className: "slate-img",
                        src: c,
                        alt: u,
                        height: Math.round(F),
                        width: Math.round(D),
                        unoptimized: !(a && !I) || void 0,
                        onError: () => R(!0),
                        quality: 100
                    }) : (0, i.jsx)("img", {
                        className: "slate-img",
                        src: c || "/image-placeholder.svg",
                        alt: u,
                        style: { ...(0, f.oB)(m),
                            ...A,
                            ...(0, f.UO)(m, v, h),
                            ...c ? {} : {
                                objectFit: "cover",
                                objectPosition: "center"
                            }
                        }
                    }),
                    L = {};
                if (E) {
                    L = {
                        width: `${E.originalDimensions.width*(E.scale||1)/(m||1)*100}%`,
                        height: `${E.originalDimensions.height*(E.scale||1)/(v||1)*100}%`,
                        transform: `translate(${-E.cropParameters.x}%, ${-E.cropParameters.y}%)`
                    }
                }
                return B = (0, i.jsxs)("div", {
                    className: "slate-img-cover-container",
                    style: {
                        "--width": `${m}px`,
                        "--height": `${v}px`,
                        "--aspect-ratio": `${m} / ${v}`,
                        overflow: "hidden",
                        borderRadius: C,
                        position: "relative"
                    },
                    ...r,
                    children: [(0, i.jsx)("div", {
                        contentEditable: !1,
                        className: "slate-img-inner-container",
                        style: L,
                        children: B
                    }), n]
                }), (0, i.jsx)("div", {
                    ref: T,
                    className: o()("slate-img-container", {
                        "mobile:hidden": w,
                        "desktop:hidden": k
                    }, S),
                    style: {
                        justifyContent: y(p) || "center",
                        "--max-width": (0, f.oB)(m).maxWidth
                    },
                    children: g ? (0, i.jsx)(b, {
                        href: g,
                        internal_link: _,
                        open_in_new_tab: x,
                        internalLinkComponent: d,
                        className: "slate-img-link",
                        children: B
                    }) : B
                })
            }

            function K(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    internalLinkComponent: a
                } = e, {
                    url: o,
                    internal_link: l,
                    open_in_new_tab: s
                } = t;
                return (0, i.jsx)(b, {
                    href: o,
                    internal_link: l,
                    open_in_new_tab: s,
                    internalLinkComponent: a,
                    className: "slate-a",
                    ...r,
                    children: n
                })
            }

            function X(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    mobile_hide: s,
                    desktop_hide: d
                } = t;
                return (0, i.jsx)("ul", {
                    className: o()("slate-ul", {
                        "mobile:hidden": s,
                        "desktop:hidden": d
                    }),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth
                    },
                    ...r,
                    children: n
                })
            }

            function ee(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    mobile_hide: s,
                    desktop_hide: d
                } = t;
                return (0, i.jsx)("ol", {
                    className: o()("slate-ol", {
                        "mobile:hidden": s,
                        "desktop:hidden": d
                    }),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth
                    },
                    ...r,
                    children: n
                })
            }

            function te(e) {
                const {
                    element: t,
                    children: n,
                    attributes: a
                } = e, {
                    mobile_hide: c,
                    desktop_hide: u
                } = t, m = (0, l.useMemo)((() => {
                    var e, n;
                    return null == (n = null == (e = r.NB.texts(t).next().value) ? void 0 : e[0]) ? void 0 : n.color
                }), [t]);
                return (0, i.jsx)("li", {
                    className: o()("slate-li", {
                        "mobile:hidden": c,
                        "desktop:hidden": u
                    }),
                    style: {
                        "--marker-color": m ? (0, d.Tj)(m, s.lq) : void 0
                    },
                    ...a,
                    children: n
                })
            }
            const ne = e => {
                const t = () => ne(e.slice(1));
                if (e.length > 0) {
                    const n = e[0],
                        i = document.createElement("script");
                    if (!n.src || n.async || n.defer || (i.onload = t), n.hasAttributes()) {
                        const e = n.attributes;
                        for (let t = e.length - 1; t >= 0; t -= 1) i.setAttribute(e[t].name, e[t].value)
                    }
                    n.innerHTML && (i.innerHTML = n.innerHTML), n.parentNode.replaceChild(i, n), i.onload || t()
                }
            };

            function ie({
                html: e,
                ...t
            }) {
                const n = (0, l.useRef)(null);
                return ("undefined" === typeof window ? l.useEffect : l.useLayoutEffect)((() => {
                    if (e && !n.current.innerHTML) {
                        n.current.innerHTML = e;
                        const t = n.current.querySelectorAll("script");
                        ne(Array.from(t))
                    }
                }), [e]), (0, l.createElement)("div", { ...t,
                    key: e,
                    ref: n,
                    dangerouslySetInnerHTML: {
                        __html: "undefined" === typeof window ? e : ""
                    },
                    suppressHydrationWarning: !0
                })
            }

            function re({
                src: e,
                title: t
            }) {
                const n = (0, l.useRef)(null);
                return (0, l.useEffect)((() => (z.update(), () => {
                    n.current && M().resetStatus(n.current)
                })), [e]), (0, i.jsx)("iframe", {
                    ref: n,
                    title: t,
                    className: "lazy",
                    "data-src": e
                })
            }

            function ae(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    containerClassName: a
                } = e, {
                    url: l,
                    html: s,
                    width: d,
                    height: c,
                    keep_aspect_ratio: u,
                    width_max: m,
                    mobile_hide: v,
                    desktop_hide: h
                } = t;
                return (0, i.jsxs)("div", {
                    contentEditable: !1,
                    className: o()("slate-media_embed", a, {
                        "mobile:hidden": v,
                        "desktop:hidden": h
                    }),
                    style: { ...(0, f.oB)(d, m),
                        ...u && d && c ? {
                            aspectRatio: `${d} / ${c}`
                        } : {
                            minHeight: (0, f.nu)(c).height
                        }
                    },
                    ...r,
                    children: [l ? (0, i.jsx)(re, {
                        title: "embed",
                        src: l
                    }) : s ? (0, i.jsx)(ie, {
                        contentEditable: !1,
                        html: s
                    }) : null, n && (0, i.jsx)("div", {
                        style: {
                            display: "none"
                        },
                        children: n
                    })]
                })
            }

            function oe(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    align: s,
                    mobile_hide: d,
                    desktop_hide: c,
                    animation: u
                } = t, [m, v] = j(u);
                return (0, i.jsx)("p", {
                    ref: m,
                    className: o()("slate-p", {
                        "mobile:hidden": d,
                        "desktop:hidden": c
                    }, v),
                    style: {
                        "--width": (0, f.oB)(a, l).width,
                        "--max-width": (0, f.oB)(a, l).maxWidth,
                        ...g(s)
                    },
                    ...r,
                    children: n
                })
            }

            function le(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    width: a,
                    width_max: l,
                    mobile_hide: s,
                    desktop_hide: d
                } = t;
                return (0, i.jsx)("div", {
                    className: o()("slate-rich-text-content", {
                        "mobile:hidden": s,
                        "desktop:hidden": d
                    }),
                    style: (0, f.oB)(a, l),
                    ...r,
                    children: n
                })
            }

            function se(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    height: a,
                    width: l,
                    mobile_hide: s,
                    desktop_hide: d
                } = t;
                return (0, i.jsx)("div", {
                    className: o()("slate-spacer", {
                        "mobile:hidden": s,
                        "desktop:hidden": d
                    }),
                    style: {
                        height: `${a}px`,
                        ...(0, f.oB)(l)
                    },
                    ...r,
                    children: n && (0, i.jsx)("div", {
                        style: {
                            display: "none"
                        },
                        children: n
                    })
                })
            }
            re.defaultProps = {
                title: void 0
            };
            var de = n(58673);

            function ce({
                words: e,
                currIdx: t,
                style: n
            }) {
                const r = (null == e ? void 0 : e.length) || 1,
                    a = (t - 1) % r,
                    s = a >= 0 ? a : r + a,
                    d = (0, l.useRef)(null),
                    [c, u] = (0, l.useState)(),
                    [m, v] = (0, l.useState)(),
                    [h, p] = (0, l.useState)(!1);
                return (0, l.useEffect)((() => {
                    const e = new ResizeObserver((e => {
                        var t, n;
                        let i = 0;
                        for (const r of e)(null == (t = r.contentRect) ? void 0 : t.width) > i && (i = null == (n = r.contentRect) ? void 0 : n.width);
                        v(i)
                    }));
                    return Array.from(d.current.children).forEach((t => {
                        e.observe(t)
                    })), u(1.1 * parseFloat(getComputedStyle(d.current).lineHeight)), () => e.disconnect()
                }), []), (0, l.useEffect)((() => {
                    const t = d.current.closest('[class^="slate-"]');
                    t && t.textContent === e.join("") && p(!0)
                }), []), (0, i.jsx)("span", {
                    ref: d,
                    className: "scroll-wrapper",
                    style: {
                        minHeight: c,
                        minWidth: m
                    },
                    children: e.map(((e, r) => (0, i.jsx)("span", {
                        className: o()({
                            "animate-show": t === r,
                            "animate-up": s === r
                        }),
                        style: { ...n,
                            minWidth: h ? "100%" : void 0
                        },
                        children: e
                    }, `text-animated-${e}`)))
                })
            }

            function ue({
                animation: e,
                style: t
            }) {
                if (!e) return null;
                const {
                    type: n,
                    words: r
                } = e, [a, o] = (0, l.useState)(0);
                return function(e, t) {
                    const n = (0, l.useRef)();
                    (0, l.useEffect)((() => {
                        n.current = e
                    }), [e]), (0, l.useEffect)((() => {
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
                    o((a + 1) % ((null == r ? void 0 : r.length) || 0))
                }), 2500), 0 === (null == r ? void 0 : r.length) ? null : "scroll_words" === n && r.length > 1 ? (0, i.jsx)(ce, {
                    words: r,
                    currIdx: a,
                    style: t
                }) : (0, i.jsx)(i.Fragment, {
                    children: null == r ? void 0 : r[0]
                })
            }
            const me = {
                underline: function(e) {
                    const {
                        leaf: t,
                        attributes: n,
                        children: r
                    } = e, a = (0, d.Tj)(t.color, s.lq);
                    return (0, i.jsx)("u", {
                        style: {
                            textDecoration: "underline",
                            textDecorationColor: a
                        },
                        ...n,
                        children: r
                    })
                },
                strikethrough: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, i.jsx)("s", { ...t,
                        children: n
                    })
                },
                italic: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, i.jsx)("em", { ...t,
                        children: n
                    })
                },
                code: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, i.jsx)("code", { ...t,
                        children: n
                    })
                },
                bold: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, i.jsx)("strong", { ...t,
                        children: n
                    })
                },
                styled: function(e) {
                    const {
                        leaf: t,
                        attributes: n,
                        children: r
                    } = e, a = t.lineHeight || void 0;
                    let o = {};
                    const l = t.fontSize || void 0;
                    let u = l,
                        m = a;
                    u && (u = u > V.jq ? V.R6 * u : u, u = u > V.nx ? V.w * u : u, m = t.fontSize > V.jq ? `${u+10}px` : m, m = t.fontSize > V.nx ? `${u+5}px` : m), o = { ...c(t.background),
                        color: (0, d.Tj)(null == t ? void 0 : t.color, s.lq),
                        fontFamily: t.fontFamily ? de.R[t.fontFamily] : void 0,
                        fontWeight: t.fontWeight || void 0,
                        letterSpacing: t.letterSpacing || void 0,
                        "--font-size": l ? `${l}px` : void 0,
                        "--mobile-font-size": u ? `${u}px` : void 0,
                        "--line-height": a,
                        "--mobile-line-height": m
                    };
                    const v = t.gradient && t.color ? {
                        backgroundImage: (0, d.Tj)(null == t ? void 0 : t.color, s.eR),
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitBoxDecorationBreak: "clone",
                        backgroundRepeat: "no-repeat"
                    } : void 0;
                    return (0, i.jsx)("span", {
                        style: o,
                        ...n,
                        children: t.gradient && t.color ? (0, i.jsx)("span", {
                            style: v,
                            children: r
                        }) : r
                    })
                }
            };

            function ve(e) {
                const {
                    leaf: t,
                    attributes: n
                } = e, r = t.animation ? (0, i.jsx)(ue, {
                    animation: t.animation ? { ...t.animation,
                        words: [t.text, ...t.animation.words]
                    } : void 0,
                    style: t.gradient && t.color ? {
                        backgroundImage: s.eR[t.color],
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitBoxDecorationBreak: "clone",
                        backgroundRepeat: "no-repeat"
                    } : void 0
                }) : t.text, a = e => {
                    if (0 === e.length) return (0, i.jsx)(i.Fragment, {
                        children: r
                    });
                    const n = me[e[0]];
                    return (0, i.jsx)(n, {
                        leaf: t,
                        children: a(e.slice(1))
                    })
                }, o = Object.keys(me).filter((e => !0 === t[e]));
                return 0 === o.length ? (0, i.jsx)("span", { ...n,
                    children: r
                }) : a(o)
            }

            function he(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r
                } = e, {
                    checked: a,
                    width: s,
                    width_max: d,
                    mobile_hide: c,
                    desktop_hide: u
                } = t, [m, v] = (0, l.useState)(a);
                return (0, i.jsxs)("div", {
                    className: o()("slate-action_item", {
                        "mobile:hidden": c,
                        "desktop:hidden": u
                    }),
                    style: {
                        "--width": (0, f.oB)(s, d).width,
                        "--max-width": (0, f.oB)(s, d).maxWidth
                    },
                    ...r,
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: m,
                            onChange: e => v(e.target.checked)
                        })
                    }), (0, i.jsx)("span", {
                        style: m ? {
                            textDecoration: "line-through",
                            opacity: .666
                        } : void 0,
                        children: n
                    })]
                })
            }
            var pe = n(33103);
            var fe = "_sDrYqssc";

            function ge({
                element: e,
                className: t,
                attributes: n,
                expandAll: r,
                children: a
            }) {
                const {
                    width: l,
                    width_max: s
                } = e, d = (0, f.oB)(l, s);
                return (0, i.jsx)(pe.fC, {
                    type: "multiple",
                    value: r ? e.children.map((e => e.id)) : void 0,
                    onChange: r ? () => {} : void 0,
                    style: {
                        "--width": d.width,
                        "--max-width": d.maxWidth
                    },
                    className: o()(t, fe),
                    "data-accordion-style": e.style || "plain",
                    ...n,
                    children: a
                })
            }
            var _e = "_4wYeQ-1q",
                xe = "_JG-vOfX3";

            function be(e) {
                const {
                    element: t,
                    className: n,
                    children: r,
                    attributes: a,
                    backgroundImageElement: s
                } = e, {
                    background: d
                } = t;
                return (0, i.jsxs)(pe.ck, {
                    value: t.id,
                    className: o()(n, _e),
                    style: { ...c(d)
                    },
                    ...a,
                    children: [(0, l.isValidElement)(s) && (0, i.jsx)("span", {
                        contentEditable: !1,
                        className: xe,
                        children: s
                    }), r]
                })
            }
            var ye = "_QLaxHIn8",
                we = "_0JCpRLSe",
                ke = "_4vVfnls-",
                je = "_zt6jI-tY",
                Ne = "_Z-asoBsm",
                Ce = "_Ew0dl18G";

            function Ee({
                className: e,
                attributes: t,
                children: n
            }) {
                return (0, i.jsx)(pe.h4, {
                    asChild: !0,
                    children: (0, i.jsx)("div", {
                        className: o()(e, ye),
                        ...t,
                        children: (0, i.jsxs)(pe.xz, {
                            className: we,
                            children: [n, (0, i.jsx)(w.J, {
                                type: "bx",
                                name: "plus",
                                className: o()(ke, je)
                            }), (0, i.jsx)(w.J, {
                                type: "bx",
                                name: "minus",
                                className: o()(ke, Ne)
                            }), (0, i.jsx)(w.J, {
                                type: "bxs",
                                name: "chevron-down",
                                className: o()(ke, Ce)
                            })]
                        })
                    })
                })
            }
            var Ie = "_OK279DnV",
                Re = "_Le5fqj0i";

            function Te({
                className: e,
                attributes: t,
                children: n
            }) {
                return (0, i.jsx)(pe.VY, {
                    className: o()(e, Ie),
                    ...t,
                    children: (0, i.jsx)("div", {
                        className: Re,
                        children: n
                    })
                })
            }
            var Se = n(66379),
                Fe = n(20189),
                De = n(40771);
            const Ae = e => 0 === e.children.length || 1 === e.children.length && "text" in e.children[0] && "" === e.children[0].text;
            var Be = n(52899);
            const Le = e => e.children.filter((e => "navbar_dropdown_menu_column" === e.type)).length || 1,
                We = e => {
                    for (const t of e.children)
                        if (!Ae(t))
                            for (const e of t.children)
                                if ("type" in e && "navbar_dropdown_menu_item" === e.type && e.itemType && "featured" !== e.itemType) return e.itemType;
                    return "short"
                };

            function Ze({
                children: e,
                element: t,
                attributes: n,
                forwardedRef: r
            }) {
                var a, o;
                const {
                    navbarItemRef: s
                } = (0, l.useContext)(Be.N), d = (0, l.useRef)(null), c = (0, l.useMemo)((() => Le(t)), [t]), {
                    x: u,
                    refs: m,
                    reference: v,
                    floating: h,
                    update: p,
                    middlewareData: f,
                    strategy: g
                } = (0, Se.YF)({
                    placement: "bottom",
                    middleware: [(0, Fe.uY)({
                        padding: 16,
                        boundary: "undefined" !== typeof window && document.querySelector(".editor") || void 0
                    }), (0, Se.x7)({
                        element: d
                    })]
                }), _ = (0, $.Z)(r, h);
                return (0, l.useEffect)((() => {
                    v(s.current)
                }), [s.current]), (0, l.useEffect)((() => {
                    if (m.reference.current && m.floating.current) return (0, De.Me)(m.reference.current, m.floating.current, p)
                }), [m.reference, m.floating, p]), (0, i.jsxs)("div", {
                    ref: _,
                    className: "slate-navbar_dropdown_menu-container card",
                    style: u ? {
                        "--position": g,
                        "--left": `${u}px`
                    } : void 0,
                    ...n,
                    children: [(0, i.jsx)("div", {
                        ref: d,
                        className: "arrow",
                        style: (null == (a = f.arrow) ? void 0 : a.x) ? {
                            left: null == (o = f.arrow) ? void 0 : o.x
                        } : {
                            left: "50%",
                            transform: "translateX(-50%)"
                        }
                    }), (0, i.jsx)("div", {
                        className: "slate-navbar_dropdown_menu",
                        style: {
                            "--columns": c
                        },
                        "data-navbar-dropdown-item-type": We(t),
                        children: e
                    })]
                })
            }

            function Oe({
                children: e,
                element: t,
                forwardedRef: n,
                attributes: r
            }) {
                const a = (0, l.useMemo)((() => Le(t)), [t]);
                return (0, i.jsx)("div", {
                    ref: n,
                    className: "slate-navbar_dropdown_menu-container big-box",
                    style: {
                        "--left": "0px"
                    },
                    ...r,
                    children: (0, i.jsx)("div", {
                        className: "slate-navbar_dropdown_menu",
                        style: {
                            "--columns": a
                        },
                        "data-navbar-dropdown-item-type": We(t),
                        children: e
                    })
                })
            }
            const Me = (0, l.forwardRef)(((e, t) => "card" === e.element.style ? (0, i.jsx)(Ze, {
                forwardedRef: t,
                ...e
            }) : (0, i.jsx)(Oe, {
                forwardedRef: t,
                ...e
            })));
            Me.displayName = "NavbarDropdownMenuElement";
            const ze = (0, l.forwardRef)((({
                element: e,
                children: t,
                attributes: n
            }, r) => Ae(e) ? null : (0, i.jsx)("div", {
                ref: r,
                className: "slate-navbar_dropdown_menu_column",
                ...n,
                children: t
            })));
            ze.displayName = "NavbarDropdownMenuColumnElement";
            const qe = (0, l.forwardRef)((({
                element: e,
                children: t,
                attributes: n,
                internalLinkComponent: r
            }, a) => {
                const {
                    itemType: l = "short",
                    icon: c,
                    title: u,
                    description: m,
                    fontFamily: v,
                    titleColor: h,
                    titleGradient: p,
                    descriptionColor: f,
                    descriptionGradient: g,
                    url: _,
                    internalLink: x,
                    pageId: y,
                    openInNewTab: w
                } = e, k = c ? void 0 : "#616161", j = (0, i.jsxs)("div", {
                    ref: a,
                    className: o()("slate-navbar_dropdown_menu_item", {
                        "is-featured": "featured" === l
                    }),
                    contentEditable: !1,
                    ...n,
                    children: ["title_only" === l && (0, i.jsx)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            height: 27
                        },
                        children: (0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-title",
                            style: {
                                width: 182,
                                color: h ? (0, d.Tj)(h, s.lq) : void 0
                            },
                            children: (0, i.jsx)(ve, {
                                leaf: {
                                    text: u,
                                    styled: !0,
                                    fontSize: 15,
                                    fontFamily: v,
                                    fontWeight: 400,
                                    color: h,
                                    gradient: !!p
                                }
                            })
                        })
                    }), "title_desc" === l && (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: 64
                        },
                        children: [(0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-title",
                            style: {
                                width: 166,
                                color: h ? (0, d.Tj)(h, s.lq) : void 0
                            },
                            children: (0, i.jsx)(ve, {
                                leaf: {
                                    text: u,
                                    styled: !0,
                                    fontSize: 15,
                                    fontFamily: v,
                                    fontWeight: 600,
                                    color: h,
                                    gradient: !!p
                                }
                            })
                        }), (0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-description",
                            style: {
                                color: f ? (0, d.Tj)(f, s.lq) : "#B0B5C6"
                            },
                            children: (0, i.jsx)(ve, {
                                leaf: {
                                    text: m || "",
                                    styled: !0,
                                    fontSize: 13,
                                    fontFamily: v,
                                    fontWeight: 500,
                                    color: f || "#B0B5C6",
                                    gradient: !!g
                                }
                            })
                        })]
                    }), "simple" === l && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-icon",
                            style: {
                                width: 27,
                                height: 27,
                                backgroundColor: k
                            },
                            children: c && (0, i.jsx)("img", {
                                src: c,
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
                                    color: h ? (0, d.Tj)(h, s.lq) : void 0
                                },
                                children: (0, i.jsx)(ve, {
                                    leaf: {
                                        text: u,
                                        styled: !0,
                                        fontSize: 15,
                                        fontFamily: v,
                                        fontWeight: 600,
                                        color: h,
                                        gradient: !!p
                                    }
                                })
                            })
                        })]
                    }), "short" === l && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-icon",
                            style: {
                                width: 64,
                                height: 64,
                                backgroundColor: k
                            },
                            children: c && (0, i.jsx)("img", {
                                src: c,
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
                                    color: h ? (0, d.Tj)(h, s.lq) : void 0
                                },
                                children: (0, i.jsx)(ve, {
                                    leaf: {
                                        text: u,
                                        styled: !0,
                                        fontSize: 15,
                                        fontFamily: v,
                                        fontWeight: 600,
                                        color: h,
                                        gradient: !!p
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-description",
                                style: {
                                    color: f ? (0, d.Tj)(f, s.lq) : "#B0B5C6"
                                },
                                children: (0, i.jsx)(ve, {
                                    leaf: {
                                        text: m || "",
                                        styled: !0,
                                        fontSize: 13,
                                        fontFamily: v,
                                        fontWeight: 500,
                                        color: f || "#B0B5C6",
                                        gradient: !!g
                                    }
                                })
                            })]
                        })]
                    }), "long" === l && (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: "0.5rem"
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
                                    backgroundColor: k
                                },
                                children: c && (0, i.jsx)("img", {
                                    src: c,
                                    alt: "Menu icon"
                                })
                            }), (0, i.jsx)("div", {
                                className: "slate-navbar_dropdown_menu_item-title",
                                style: {
                                    width: 182,
                                    color: h ? (0, d.Tj)(h, s.lq) : void 0
                                },
                                children: (0, i.jsx)(ve, {
                                    leaf: {
                                        text: u,
                                        styled: !0,
                                        fontSize: 15,
                                        fontFamily: v,
                                        fontWeight: 600,
                                        color: h,
                                        gradient: !!p
                                    }
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-description",
                            style: {
                                color: f ? (0, d.Tj)(f, s.lq) : "#B0B5C6"
                            },
                            children: (0, i.jsx)(ve, {
                                leaf: {
                                    text: m || "",
                                    styled: !0,
                                    fontSize: 13,
                                    fontFamily: v,
                                    fontWeight: 500,
                                    color: f || "#B0B5C6",
                                    gradient: !!g
                                }
                            })
                        })]
                    }), "featured" === l && (0, i.jsxs)("div", {
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
                                backgroundColor: k,
                                marginBottom: "16px"
                            },
                            children: c && (0, i.jsx)("img", {
                                src: c,
                                alt: "Menu icon"
                            })
                        }), (0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-title",
                            style: {
                                width: 254,
                                marginBottom: "6px",
                                color: h ? (0, d.Tj)(h, s.lq) : "#FFFFFF"
                            },
                            children: (0, i.jsx)(ve, {
                                leaf: {
                                    text: u,
                                    styled: !0,
                                    fontSize: 15,
                                    fontFamily: v,
                                    fontWeight: 600,
                                    color: h || "#FFFFFF",
                                    gradient: !!p
                                }
                            })
                        }), (0, i.jsx)("div", {
                            className: "slate-navbar_dropdown_menu_item-description",
                            style: {
                                color: f ? (0, d.Tj)(f, s.lq) : "#BFBFBF"
                            },
                            children: (0, i.jsx)(ve, {
                                leaf: {
                                    text: m || "",
                                    styled: !0,
                                    fontSize: 12,
                                    fontFamily: v,
                                    fontWeight: 500,
                                    color: f || "#BFBFBF",
                                    gradient: !!g
                                }
                            })
                        })]
                    }), t]
                });
                return _ ? (0, i.jsx)(b, {
                    href: _,
                    internal_link: x,
                    open_in_new_tab: w,
                    internalLinkComponent: r,
                    className: "slate-navbar_dropdown_menu_item-link",
                    children: j
                }) : j
            }));
            qe.displayName = "NavbarDropdownMenuItemElement";
            var Pe = n(7114);
            var $e = "_feGQ3EYO",
                Ue = "_2x69puFW",
                Ve = "_MPjGnsIj";
            var He = "_QvFax9t8";

            function Qe({
                element: e,
                children: t,
                attributes: n
            }) {
                const r = `input-${e.id}`;
                return (0, i.jsxs)("div", {
                    className: Ue,
                    ...n,
                    children: [(0, i.jsx)("label", {
                        htmlFor: r,
                        className: Ve,
                        children: e.label
                    }), e.options.map((t => (0, i.jsx)("div", {
                        className: He,
                        children: (0, i.jsxs)("label", {
                            htmlFor: `${r}-${t.value}`,
                            children: [(0, i.jsx)(Pe.gN, {
                                id: `${r}-${t.value}`,
                                type: "checkbox",
                                value: t.value,
                                name: e.label
                            }), t.label]
                        })
                    }))), t]
                })
            }
            var Ge = n(86120);
            var Je = {
                trigger: "_YlIZ4bBK",
                content: "_TtLDi5yn",
                item: "_T681-t6-",
                itemIndicator: "_l5quh5yV"
            };

            function Ye({
                element: e,
                children: t,
                attributes: n
            }) {
                const r = `input-${e.id}`,
                    [a, o] = l.useState(void 0);
                l.useEffect((() => {
                    a || "undefined" === typeof document || o(document.getElementsByClassName("typedream content")[0])
                }), []);
                const {
                    setFieldValue: s
                } = (0, Pe.u6)();
                return (0, i.jsxs)("div", {
                    className: Ue,
                    children: [(0, i.jsx)("label", {
                        htmlFor: r,
                        className: Ve,
                        children: e.label
                    }), (0, i.jsxs)(Ge.fC, {
                        onValueChange: t => s(e.label, t),
                        ...n,
                        children: [(0, i.jsxs)(Ge.xz, {
                            className: Je.trigger,
                            children: [(0, i.jsx)(Ge.B4, {
                                placeholder: e.placeholder
                            }), (0, i.jsx)(Ge.JO, {
                                children: (0, i.jsx)(w.J, {
                                    type: "bx",
                                    name: "chevron-down"
                                })
                            })]
                        }), (0, i.jsx)(Ge.h_, {
                            container: a,
                            children: (0, i.jsxs)(Ge.VY, {
                                className: Je.content,
                                children: [(0, i.jsx)(Ge.u_, {}), (0, i.jsx)(Ge.l_, {
                                    className: Je.viewport,
                                    children: e.options.map((e => (0, i.jsxs)(Ge.ck, {
                                        value: e.value,
                                        className: Je.item,
                                        children: [(0, i.jsx)(Ge.eT, {
                                            children: e.label
                                        }), (0, i.jsx)(Ge.wU, {
                                            className: Je.itemIndicator,
                                            children: (0, i.jsx)(w.J, {
                                                type: "bx",
                                                name: "check"
                                            })
                                        })]
                                    }, e.value)))
                                }), (0, i.jsx)(Ge.$G, {})]
                            })
                        })]
                    }), t]
                })
            }

            function Ke({
                element: e,
                attributes: t,
                children: n
            }) {
                const r = `input-${e.id}`;
                switch (e.inputType) {
                    case "Text":
                        return (0, i.jsxs)("div", {
                            className: Ue,
                            children: [(0, i.jsx)("label", {
                                htmlFor: r,
                                className: Ve,
                                children: e.label
                            }), (0, i.jsx)(Pe.gN, {
                                type: "text",
                                placeholder: e.placeholder,
                                name: e.label,
                                className: $e,
                                required: e.required
                            }), n]
                        });
                    case "Number":
                        return (0, i.jsxs)("div", {
                            className: Ue,
                            children: [(0, i.jsx)("label", {
                                htmlFor: r,
                                className: Ve,
                                children: e.label
                            }), (0, i.jsx)(Pe.gN, {
                                type: "number",
                                placeholder: e.placeholder,
                                className: $e,
                                name: e.label,
                                required: e.required
                            }), n]
                        });
                    case "MultiSelection":
                        return (0, i.jsx)(Qe, {
                            element: e,
                            attributes: t,
                            children: n
                        });
                    case "Selection":
                        return (0, i.jsx)(Ye, {
                            element: e,
                            attributes: t,
                            children: n
                        });
                    default:
                        return (0, i.jsx)("div", {})
                }
            }
            var Xe = "_k51rmA6D";

            function et({
                element: e,
                className: t,
                attributes: n,
                backgroundImage: r,
                handleFormSubmission: a,
                children: s
            }) {
                const {
                    form_id: d,
                    width: m,
                    height: v,
                    width_max: h,
                    background: p,
                    backgroundDarken: g,
                    mobile_hide: _,
                    desktop_hide: x
                } = e, [b, y] = l.useState("");
                return (0, i.jsx)(Pe.J9, {
                    initialValues: {},
                    onSubmit: async e => {
                        try {
                            await a(d, e)
                        } catch (t) {
                            y((e => {
                                var t, n, i, r, a, o, l, s;
                                return "string" === typeof(null == (n = null == (t = null == e ? void 0 : e.response) ? void 0 : t.data) ? void 0 : n.msg) ? null == (r = null == (i = null == e ? void 0 : e.response) ? void 0 : i.data) ? void 0 : r.msg : "string" === typeof(null == (a = null == e ? void 0 : e.error) ? void 0 : a.message) ? null == (o = null == e ? void 0 : e.error) ? void 0 : o.message : "string" === typeof(null == e ? void 0 : e.message) ? null == e ? void 0 : e.message : JSON.stringify(null == (s = null == (l = null == e ? void 0 : e.response) ? void 0 : l.data) ? void 0 : s.msg) || (null == e ? void 0 : e.toString()) || JSON.stringify(e) || e || "Something went wrong"
                            })(t))
                        }
                    },
                    children: (0, i.jsxs)(Pe.l0, {
                        id: e.id,
                        className: o()(t, Xe, {
                            "mobile:hidden": _,
                            "desktop:hidden": x
                        }),
                        style: {
                            "--min-height": (0, f.nu)(v).height,
                            "--width": (0, f.oB)(m, h).width,
                            "--max-width": (0, f.oB)(m, h).maxWidth,
                            ...c(p),
                            ..."string" === typeof r && u(r, g)
                        },
                        ...n,
                        children: [s, b]
                    })
                })
            }
            const tt = h()((async () => (await Promise.all([n.e(9905), n.e(7302)]).then(n.bind(n, 67302))).MediaEmbedFileElement));
            const nt = ({
                node: e,
                internalLinkComponent: t,
                optimizedImageComponent: n,
                collectionProviderComponent: a,
                isImageOptimizable: o,
                handleFormSubmission: s,
                createKey: d = (e => e[1].join(",")),
                rootClassName: c,
                rootStyle: u
            }, v = [0]) => {
                const h = d([e, v]);
                if (r.xv.isText(e)) return (0, i.jsx)(ve, {
                    leaf: e
                }, h);
                const f = e.children.map(((e, i) => nt({
                    node: e,
                    internalLinkComponent: t,
                    optimizedImageComponent: n,
                    collectionProviderComponent: a,
                    createKey: d,
                    isImageOptimizable: o,
                    handleFormSubmission: s
                }, [...v, i])));
                return function({
                    node: e,
                    internalLinkComponent: t,
                    optimizedImageComponent: n,
                    collectionProviderComponent: a,
                    isImageOptimizable: o,
                    handleFormSubmission: s,
                    children: d,
                    key: c,
                    rootClassName: u,
                    rootStyle: v
                }) {
                    if (r.xv.isText(e)) return (0, i.jsx)(ve, {
                        leaf: e
                    }, c);
                    switch (e.type) {
                        case "p":
                            return (0, i.jsx)(oe, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "h1":
                            return (0, i.jsx)(Q, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "h2":
                            return (0, i.jsx)(G, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "h3":
                            return (0, i.jsx)(J, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "column":
                            {
                                const t = !!(null == o ? void 0 : o(e.backgroundImage)),
                                    r = e.backgroundImage && t && n ? (0, i.jsx)(p, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : void 0;
                                return (0, i.jsx)(q, {
                                    element: e,
                                    className: `slate-${e.type}`,
                                    backgroundImageElement: r,
                                    children: d
                                }, c)
                            }
                        case "column_item":
                            return (0, i.jsx)(P, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "spacer":
                            return (0, i.jsx)(se, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "divider":
                            return (0, i.jsx)(H, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "container":
                            {
                                const r = !!(null == o ? void 0 : o(e.backgroundImage)),
                                    a = e.backgroundImage && r && n ? (0, i.jsx)(p, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : void 0;
                                return (0, i.jsx)(U, {
                                    element: e,
                                    className: `slate-${e.type}`,
                                    internalLinkComponent: t,
                                    backgroundImageElement: a,
                                    children: d
                                }, c)
                            }
                        case "a":
                            return (0, i.jsx)(K, {
                                element: e,
                                className: `slate-${e.type}`,
                                internalLinkComponent: t,
                                children: d
                            }, c);
                        case "button":
                            return (0, i.jsx)(R, {
                                element: e,
                                className: `slate-${e.type}`,
                                internalLinkComponent: t,
                                children: d
                            }, c);
                        case "media_embed":
                            return e.url || e.html ? (0, i.jsx)(ae, {
                                element: e,
                                className: `slate-${e.type}`,
                                containerClassName: e.containerClassName,
                                children: d
                            }, c) : (0, i.jsx)(tt, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "img":
                            {
                                const r = !!(null == o ? void 0 : o(e.url));
                                return (0, i.jsx)(Y, {
                                    element: e,
                                    className: `slate-${e.type}`,
                                    optimizable: r,
                                    optimizedImageComponent: n,
                                    internalLinkComponent: t,
                                    children: d
                                }, c)
                            }
                        case "ul":
                            return (0, i.jsx)(X, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "ol":
                            return (0, i.jsx)(ee, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "li":
                            return (0, i.jsx)(te, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "action_item":
                            return (0, i.jsx)(he, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "code_block":
                            return (0, i.jsx)(T, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "code_line":
                            return (0, i.jsx)(S, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "blockquote":
                            return (0, i.jsx)(_, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "collection":
                            {
                                const t = a || (e => e.children);
                                return (0, i.jsx)(t, {
                                    collectionID: e.collection_data_id,
                                    children: (0, i.jsx)(W, {
                                        element: e,
                                        className: `slate-${e.type}`,
                                        children: d
                                    })
                                }, c)
                            }
                        case "collection_item":
                            return (0, i.jsx)(Z, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "rich_text_content":
                            return (0, i.jsx)(le, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "navbar_dropdown_menu":
                            return (0, i.jsx)(Me, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "navbar_dropdown_menu_column":
                            return (0, i.jsx)(ze, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "navbar_dropdown_menu_item":
                            return (0, i.jsx)(qe, {
                                element: e,
                                className: `slate-${e.type}`,
                                internalLinkComponent: t,
                                children: d
                            }, c);
                        case "accordion":
                            return (0, i.jsx)(ge, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "accordion_item":
                            {
                                const t = e.backgroundImage ? (0, i.jsx)(p, {
                                    src: e.backgroundImage,
                                    darken: e.backgroundDarken,
                                    optimizable: !!(null == o ? void 0 : o(e.backgroundImage)),
                                    optimizedImageComponent: n
                                }) : void 0;
                                return (0, i.jsx)(be, {
                                    element: e,
                                    className: `slate-${e.type}`,
                                    backgroundImageElement: t,
                                    children: d
                                }, c)
                            }
                        case "accordion_item_header":
                            return (0, i.jsx)(Ee, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "accordion_item_content":
                            return (0, i.jsx)(Te, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "form":
                            {
                                const t = !!(null == o ? void 0 : o(e.backgroundImage)),
                                    r = e.backgroundImage && t && n ? (0, i.jsx)(p, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : e.backgroundImage,
                                    a = () => new Promise((e => {
                                        e(void 0)
                                    }));
                                return (0, i.jsx)(et, {
                                    element: e,
                                    backgroundImage: r,
                                    handleFormSubmission: s || a,
                                    className: `slate-${e.type}`,
                                    children: d
                                }, c)
                            }
                        case "form_input":
                            return (0, i.jsx)(Ke, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: d
                            }, c);
                        case "root":
                            {
                                const t = !!(null == o ? void 0 : o(e.backgroundImage)),
                                    r = e.backgroundImage && t && n ? (0, i.jsx)(p, {
                                        src: e.backgroundImage,
                                        darken: e.backgroundDarken,
                                        optimizedImageComponent: n
                                    }) : e.backgroundImage;
                                return (0, i.jsx)(m, {
                                    className: u,
                                    style: v,
                                    align: e.align,
                                    vertical_align: e.vertical_align,
                                    background: e.background,
                                    backgroundImage: r,
                                    backgroundDarken: e.backgroundDarken,
                                    backgroundVideo: e.backgroundVideo,
                                    children: d
                                })
                            }
                        default:
                            return (0, i.jsx)(l.Fragment, {
                                children: d
                            }, c)
                    }
                }({
                    node: e,
                    internalLinkComponent: t,
                    optimizedImageComponent: n,
                    collectionProviderComponent: a,
                    isImageOptimizable: o,
                    handleFormSubmission: s,
                    key: h,
                    rootClassName: c,
                    rootStyle: u,
                    children: f
                })
            };

            function it({
                rootClassName: e,
                rootStyle: t,
                node: n,
                ...a
            }) {
                return r.xv.isText(n) || "root" !== n.type ? (0, i.jsx)(m, {
                    className: e,
                    style: t,
                    children: nt({
                        node: n,
                        ...a
                    })
                }) : (0, i.jsx)(i.Fragment, {
                    children: nt({
                        node: n,
                        ...a
                    })
                })
            }
        },
        81024: function(e, t, n) {
            "use strict";
            n.d(t, {
                UO: function() {
                    return o
                },
                nu: function() {
                    return a
                },
                oB: function() {
                    return r
                }
            });
            var i = n(46007);
            const r = (e, t) => ({
                    width: "100%" === t ? t : `${e||i.d}px`,
                    maxWidth: "100%" === t ? t : `min(100%, ${Math.max(i.d,e||0)}px)`
                }),
                a = e => ({
                    height: e ? `${e}px` : "auto"
                }),
                o = (e, t, n) => {
                    let i;
                    return e && t ? i = `${e} / ${t}` : n && (i = `${n} / 1`), {
                        aspectRatio: i
                    }
                }
        },
        50834: function(e, t, n) {
            "use strict";
            n.d(t, {
                My: function() {
                    return o
                },
                XI: function() {
                    return r
                },
                eR: function() {
                    return s
                },
                lq: function() {
                    return d
                },
                z7: function() {
                    return a
                }
            });
            const i = {
                    accent: "#5E5DF0",
                    text_on_accent: "#ffffff"
                },
                r = {
                    unicorn: "linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)",
                    nebula: "linear-gradient(135deg, #6699FF 0%, #FF3366 100%)",
                    water: "linear-gradient(135deg, #2F80ED 0%, #B2FFDA 100%)",
                    candy: "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
                    melon: "linear-gradient(135deg, #D6FF7F 0%, #00B3CC 100%)"
                },
                a = { ...i,
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
                    white: "#ffffff",
                    ...r
                },
                o = {
                    accent: "var(--shadow-color-accent)",
                    text_on_accent: "#ffffff",
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
                    white: "var(--shadow-color-white)",
                    unicorn: "var(--shadow-color-unicorn)",
                    nebula: "var(--shadow-color-nebula)",
                    water: "var(--shadow-color-water)",
                    candy: "var(--shadow-color-candy)",
                    melon: "var(--shadow-color-melon)"
                },
                l = {
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
                s = { ...i,
                    ...l,
                    ...r
                },
                d = { ...i,
                    ...l,
                    unicorn: "#F18099",
                    nebula: "#B664B0",
                    water: "#67B7E5",
                    candy: "#9D8EEE",
                    melon: "#5CD4AC"
                }
        },
        58673: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            const i = {
                default: "Inter",
                inter: "Inter",
                libre_caslon_text: "Libre Caslon Text",
                space_mono: "Space Mono",
                quicksand: "Quicksand"
            }
        },
        10869: function(e, t, n) {
            "use strict";
            n.d(t, {
                Tj: function() {
                    return r
                },
                W3: function() {
                    return a
                }
            });
            var i = n(50834);
            const r = (e, t, n) => e ? (null == t ? void 0 : t[e]) || ((e => {
                    if (/^#(?:[0-9a-fA-F]{3,})$/g.test(e) || (e => /rgba?\(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01\.]\.?\d?)?\s*\)/.test(e))(e) || (null == e ? void 0 : e.includes("-gradient"))) return !0;
                    if ("undefined" === typeof window) return !1;
                    const t = (new Option).style;
                    return t.color = e, "" !== t.color
                })(e) ? e : void 0) : n,
                a = e => Object.keys(i.XI).includes(e) || (null == e ? void 0 : e.includes("-gradient"))
        }
    }
]);