(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4899], {
        4964: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return L
                }
            });
            var t = r(66383),
                s = r(52322),
                o = r(2784),
                a = r(25675),
                i = r.n(a),
                c = r(72779),
                u = r.n(c),
                d = r(5152),
                l = r.n(d),
                p = r(7097),
                f = r.n(p),
                v = r(98788),
                _ = r(34051),
                w = r.n(_),
                m = r(39161),
                b = r(1438),
                h = "TD_JWT_LOCK_ACCESS_TOKEN",
                x = m.Us(new URL("".concat(b.bG || "https://api.typedream.com/v0", "/token/jwks")));

            function k(e) {
                null === window || void 0 === window || window.localStorage.removeItem("".concat(h, ":").concat(e.id))
            }

            function g(e, n) {
                m.t5(n), null === window || void 0 === window || window.localStorage.setItem("".concat(h, ":").concat(e.id), n)
            }

            function y(e) {
                return (null === window || void 0 === window ? void 0 : window.localStorage.getItem("".concat(h, ":").concat(e.id))) || ""
            }

            function S(e, n) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = (0, v.Z)(w().mark((function e(n, r) {
                    return w().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, m._f(n, x, {
                                    subject: r.id
                                });
                            case 3:
                                e.next = 9;
                                break;
                            case 5:
                                return e.prev = 5, e.t0 = e.catch(0), k(r), e.abrupt("return", !1);
                            case 9:
                                return e.abrupt("return", !!n && "invalid" !== n);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 5]
                    ])
                })))).apply(this, arguments)
            }
            var I = r(17311),
                A = ["event Approval(address indexed _owner, address indexed _spender, uint256 _value)", "event Transfer(address indexed _from, address indexed _to, uint256 _value)", "function allowance(address _owner, address _spender) public view returns (uint256 remaining)", "function approve(address _spender, uint256 _value) public returns (bool success)", "function balanceOf(address _owner) public view returns (uint256 balance)", "function decimals() public view returns (uint8)", "function name() public view returns (string)", "function symbol() public view returns (string)", "function totalSupply() public view returns (uint256)", "function transfer(address _to, uint256 _value) public returns (bool success)", "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)"],
                C = ["event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)", "event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)", "event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId)", "function approve(address _approved, uint256 _tokenId) external payable", "function balanceOf(address _owner) external view returns (uint256)", "function getApproved(uint256 _tokenId) external view returns (address)", "function isApprovedForAll(address _owner, address _operator) external view returns (bool)", "function name() view returns (string memory)", "function ownerOf(uint256 _tokenId) external view returns (address)", "function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable", "function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable", "function setApprovalForAll(address _operator, bool _approved) external", "function symbol() view returns (string memory)", "function tokenByIndex(uint256 _index) view returns (uint256)", "function tokenOfOwnerByIndex(address _owner, uint256 _index) view returns (uint256 tokenId)", "function tokenURI(uint256 _tokenId) view returns (string memory)", "function totalSupply() view returns (uint256)", "function transferFrom(address _from, address _to, uint256 _tokenId) external payable"];

            function F(e, n) {
                switch (e) {
                    case "80001":
                        return "https://mumbai.polygonscan.com/address/".concat(n);
                    case "137":
                        return "https://polygonscan.com/address/".concat(n);
                    case "3":
                        return "https://ropsten.etherscan.io/address".concat(n);
                    default:
                        return "https://etherscan.io/address/".concat(n)
                }
            }
            var T = function(e) {
                    var n = e.lock || {},
                        r = n.type,
                        t = n.metadata,
                        o = function(e) {
                            switch (e) {
                                case "erc721":
                                case "erc1155":
                                    return C;
                                case "erc20":
                                    return A;
                                default:
                                    return null
                            }
                        }(r),
                        a = "erc20" !== r && "erc721" !== r,
                        i = (0, I.do)({
                            addressOrName: null === t || void 0 === t ? void 0 : t.contractAddress,
                            contractInterface: o || []
                        }, a ? "" : "name"),
                        c = i.data,
                        u = i.isError,
                        d = i.isLoading;
                    return !c || d || u ? (0, s.jsx)("div", {
                        className: "mb-4",
                        children: (0, s.jsx)("span", {
                            children: "This page is locked. To unlock this page, please login."
                        })
                    }) : (0, s.jsx)("div", {
                        className: "with-sharp-text-color mb-4",
                        children: (0, s.jsxs)("span", {
                            children: ["Accessing this page requires holding", " ", null === t || void 0 === t ? void 0 : t.minimumAmount, " ", (0, s.jsx)("a", {
                                href: F(t.chainId, t.contractAddress) || "#",
                                target: "_blank",
                                rel: "noreferrer",
                                children: c
                            }), " ", "token", (null === t || void 0 === t ? void 0 : t.minimumAmount) > 1 ? "s" : ""]
                        })
                    })
                },
                G = l()((function() {
                    return Promise.all([r.e(47), r.e(2965), r.e(3504)]).then(r.bind(r, 83504))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [83504]
                        }
                    }
                }),
                N = l()((function() {
                    return Promise.all([r.e(47), r.e(8215)]).then(r.bind(r, 38215))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [38215]
                        }
                    }
                }),
                O = l()((function() {
                    return Promise.all([r.e(47), r.e(2965), r.e(3670)]).then(r.bind(r, 43670)).then((function(e) {
                        return e.PasswordGateDescription
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [43670]
                        }
                    }
                }),
                E = l()((function() {
                    return Promise.all([r.e(47), r.e(2965), r.e(3670)]).then(r.bind(r, 43670)).then((function(e) {
                        return e.PasswordGateInput
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [43670]
                        }
                    }
                });

            function L(e) {
                var n = e.children,
                    r = e.locks,
                    a = e.space,
                    c = (0, t.Z)(function(e) {
                        var n = (0, t.Z)(o.useState(!1), 2),
                            r = n[0],
                            s = n[1],
                            a = o.useCallback((0, v.Z)(w().mark((function n() {
                                return w().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e && 0 !== e.length) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            e.forEach(function() {
                                                var e = (0, v.Z)(w().mark((function e(n) {
                                                    var r, t;
                                                    return w().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return r = y(n), e.next = 3, S(r, n);
                                                            case 3:
                                                                t = e.sent, s(t);
                                                            case 6:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), [e]);
                        return o.useEffect((function() {
                            a()
                        }), [a]), [r, a]
                    }(r), 2),
                    d = c[0],
                    l = c[1];
                return !r || 0 === r.length || d ? (0, s.jsx)(s.Fragment, {
                    children: n
                }) : (0, s.jsxs)("div", {
                    className: f().fullscreen,
                    children: [(0, s.jsxs)("div", {
                        className: u()(f().fullScreenCentered, f().ScreenContent),
                        children: [(0, s.jsx)(i(), {
                            src: (null === a || void 0 === a ? void 0 : a.icon) || "/typedream-logo.svg",
                            width: 130,
                            height: 130,
                            unoptimized: !0
                        }), r.slice(0, 1).map((function(e) {
                            return "password" === e.type ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(O, {}), (0, s.jsx)(E, {
                                    lock: e,
                                    onSuccess: function(n) {
                                        g(e, n), l()
                                    }
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(T, {
                                    lock: e
                                }, e.id), (0, s.jsx)(G, {
                                    lock: e,
                                    onSuccess: function(n) {
                                        g(e, n), l()
                                    },
                                    onFailure: console.error
                                }, e.id)]
                            })
                        }))]
                    }), (0, s.jsx)(N, {})]
                })
            }
        },
        7097: function(e) {
            e.exports = {
                fullscreen: "LockScreen_fullscreen__SvirG",
                fullScreenCentered: "LockScreen_fullScreenCentered__0jhuQ",
                ScreenContent: "LockScreen_ScreenContent__pMeg_"
            }
        },
        33196: function() {}
    }
]);