"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [480], {
        203: function(u, e, t) {
            t.d(e, {
                NB: function() {
                    return X
                },
                W_: function() {
                    return L
                },
                xv: function() {
                    return fu
                }
            });
            var r = t(66439),
                n = t(15729);

            function D(u, e, t) {
                return e in u ? Object.defineProperty(u, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[e] = t, u
            }
            var o = new WeakMap,
                a = new WeakMap,
                i = (new WeakMap, new WeakMap),
                s = new WeakMap,
                C = new WeakMap,
                B = new WeakMap;

            function l(u, e) {
                if (null == u) return {};
                var t, r, n = function(u, e) {
                    if (null == u) return {};
                    var t, r, n = {},
                        D = Object.keys(u);
                    for (r = 0; r < D.length; r++) t = D[r], e.indexOf(t) >= 0 || (n[t] = u[t]);
                    return n
                }(u, e);
                if (Object.getOwnPropertySymbols) {
                    var D = Object.getOwnPropertySymbols(u);
                    for (r = 0; r < D.length; r++) t = D[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(u, t) && (n[t] = u[t])
                }
                return n
            }
            var c, f = function(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = !e,
                        r = e ? v(u) : u,
                        n = c.None,
                        D = c.None,
                        o = 0,
                        a = null;
                    for (var i of r) {
                        var s = i.codePointAt(0);
                        if (!s) break;
                        var C = N(i, s);
                        if ([n, D] = t ? [D, C] : [C, n], _(n, c.ZWJ) && _(D, c.ExtPict) && !q(t ? u.substring(0, o) : u.substring(0, u.length - o))) break;
                        if (_(n, c.RI) && _(D, c.RI) && !(a = null !== a ? !a : !!t || V(u.substring(0, u.length - o)))) break;
                        if (n !== c.None && D !== c.None && T(n, D)) break;
                        o += i.length
                    }
                    return o || 1
                },
                A = /\s/,
                h = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                F = /['\u2018\u2019]/,
                d = (u, e, t) => {
                    if (t) {
                        var r = u.length - e;
                        return [u.slice(r, u.length), u.slice(0, r)]
                    }
                    return [u.slice(0, e), u.slice(e)]
                },
                E = function u(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (A.test(e)) return !1;
                    if (F.test(e)) {
                        var n = f(t, r),
                            [D, o] = d(t, n, r);
                        if (u(D, o, r)) return !0
                    }
                    return !h.test(e)
                },
                v = function*(u) {
                    for (var e = u.length - 1, t = 0; t < u.length; t++) {
                        var r = u.charAt(e - t);
                        if (g(r.charCodeAt(0))) {
                            var n = u.charAt(e - t - 1);
                            if (p(n.charCodeAt(0))) {
                                yield n + r, t++;
                                continue
                            }
                        }
                        yield r
                    }
                },
                p = u => u >= 55296 && u <= 56319,
                g = u => u >= 56320 && u <= 57343;
            ! function(u) {
                u[u.None = 0] = "None", u[u.Extend = 1] = "Extend", u[u.ZWJ = 2] = "ZWJ", u[u.RI = 4] = "RI", u[u.Prepend = 8] = "Prepend", u[u.SpacingMark = 16] = "SpacingMark", u[u.L = 32] = "L", u[u.V = 64] = "V", u[u.T = 128] = "T", u[u.LV = 256] = "LV", u[u.LVT = 512] = "LVT", u[u.ExtPict = 1024] = "ExtPict", u[u.Any = 2048] = "Any"
            }(c || (c = {}));
            var m = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
                y = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
                w = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
                b = /^[\u1100-\u115F\uA960-\uA97C]$/,
                O = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
                x = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
                P = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
                k = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
                j = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
                N = (u, e) => {
                    var t = c.Any;
                    return -1 !== u.search(m) && (t |= c.Extend), 8205 === e && (t |= c.ZWJ), e >= 127462 && e <= 127487 && (t |= c.RI), -1 !== u.search(y) && (t |= c.Prepend), -1 !== u.search(w) && (t |= c.SpacingMark), -1 !== u.search(b) && (t |= c.L), -1 !== u.search(O) && (t |= c.V), -1 !== u.search(x) && (t |= c.T), -1 !== u.search(P) && (t |= c.LV), -1 !== u.search(k) && (t |= c.LVT), -1 !== u.search(j) && (t |= c.ExtPict), t
                };

            function _(u, e) {
                return 0 !== (u & e)
            }
            var R = [
                [c.L, c.L | c.V | c.LV | c.LVT],
                [c.LV | c.V, c.V | c.T],
                [c.LVT | c.T, c.T],
                [c.Any, c.Extend | c.ZWJ],
                [c.Any, c.SpacingMark],
                [c.Prepend, c.Any],
                [c.ZWJ, c.ExtPict],
                [c.RI, c.RI]
            ];

            function T(u, e) {
                return -1 === R.findIndex((t => _(u, t[0]) && _(e, t[1])))
            }
            var S = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
                q = u => -1 !== u.search(S),
                I = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
                V = u => {
                    var e = u.match(I);
                    return null !== e && e[0].length / 2 % 2 === 1
                },
                z = u => (0, r.P)(u) && X.isNodeList(u.children) && !U.isEditor(u),
                L = {
                    isAncestor: u => (0, r.P)(u) && X.isNodeList(u.children),
                    isElement: z,
                    isElementList: u => Array.isArray(u) && u.every((u => L.isElement(u))),
                    isElementProps: u => void 0 !== u.children,
                    isElementType: function(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                        return z(u) && u[t] === e
                    },
                    matches(u, e) {
                        for (var t in e)
                            if ("children" !== t && u[t] !== e[t]) return !1;
                        return !0
                    }
                },
                M = ["text"],
                W = ["text"];

            function J(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function $(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? J(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var Z = new WeakMap,
                U = {
                    above(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                voids: t = !1,
                                mode: r = "lowest",
                                at: n = u.selection,
                                match: D
                            } = e;
                        if (n) {
                            var o = U.path(u, n),
                                a = "lowest" === r;
                            for (var [i, s] of U.levels(u, {
                                    at: o,
                                    voids: t,
                                    match: D,
                                    reverse: a
                                }))
                                if (!fu.isText(i) && !tu.equals(o, s)) return [i, s]
                        }
                    },
                    addMark(u, e, t) {
                        u.addMark(e, t)
                    },
                    after(u, e) {
                        var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = {
                                anchor: U.point(u, e, {
                                    edge: "end"
                                }),
                                focus: U.end(u, [])
                            },
                            {
                                distance: D = 1
                            } = r,
                            o = 0;
                        for (var a of U.positions(u, $($({}, r), {}, {
                                at: n
                            }))) {
                            if (o > D) break;
                            0 !== o && (t = a), o++
                        }
                        return t
                    },
                    before(u, e) {
                        var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = {
                                anchor: U.start(u, []),
                                focus: U.point(u, e, {
                                    edge: "start"
                                })
                            },
                            {
                                distance: D = 1
                            } = r,
                            o = 0;
                        for (var a of U.positions(u, $($({}, r), {}, {
                                at: n,
                                reverse: !0
                            }))) {
                            if (o > D) break;
                            0 !== o && (t = a), o++
                        }
                        return t
                    },
                    deleteBackward(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: t = "character"
                            } = e;
                        u.deleteBackward(t)
                    },
                    deleteForward(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: t = "character"
                            } = e;
                        u.deleteForward(t)
                    },
                    deleteFragment(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                direction: t = "forward"
                            } = e;
                        u.deleteFragment(t)
                    },
                    edges: (u, e) => [U.start(u, e), U.end(u, e)],
                    end: (u, e) => U.point(u, e, {
                        edge: "end"
                    }),
                    first(u, e) {
                        var t = U.path(u, e, {
                            edge: "start"
                        });
                        return U.node(u, t)
                    },
                    fragment(u, e) {
                        var t = U.range(u, e);
                        return X.fragment(u, t)
                    },
                    hasBlocks: (u, e) => e.children.some((e => U.isBlock(u, e))),
                    hasInlines: (u, e) => e.children.some((e => fu.isText(e) || U.isInline(u, e))),
                    hasTexts: (u, e) => e.children.every((u => fu.isText(u))),
                    insertBreak(u) {
                        u.insertBreak()
                    },
                    insertSoftBreak(u) {
                        u.insertSoftBreak()
                    },
                    insertFragment(u, e) {
                        u.insertFragment(e)
                    },
                    insertNode(u, e) {
                        u.insertNode(e)
                    },
                    insertText(u, e) {
                        u.insertText(e)
                    },
                    isBlock: (u, e) => L.isElement(e) && !u.isInline(e),
                    isEditor(u) {
                        if (!(0, r.P)(u)) return !1;
                        var e = Z.get(u);
                        if (void 0 !== e) return e;
                        var t = "function" === typeof u.addMark && "function" === typeof u.apply && "function" === typeof u.deleteBackward && "function" === typeof u.deleteForward && "function" === typeof u.deleteFragment && "function" === typeof u.insertBreak && "function" === typeof u.insertSoftBreak && "function" === typeof u.insertFragment && "function" === typeof u.insertNode && "function" === typeof u.insertText && "function" === typeof u.isInline && "function" === typeof u.isVoid && "function" === typeof u.normalizeNode && "function" === typeof u.onChange && "function" === typeof u.removeMark && (null === u.marks || (0, r.P)(u.marks)) && (null === u.selection || iu.isRange(u.selection)) && X.isNodeList(u.children) && eu.isOperationList(u.operations);
                        return Z.set(u, t), t
                    },
                    isEnd(u, e, t) {
                        var r = U.end(u, t);
                        return Du.equals(e, r)
                    },
                    isEdge: (u, e, t) => U.isStart(u, e, t) || U.isEnd(u, e, t),
                    isEmpty(u, e) {
                        var {
                            children: t
                        } = e, [r] = t;
                        return 0 === t.length || 1 === t.length && fu.isText(r) && "" === r.text && !u.isVoid(e)
                    },
                    isInline: (u, e) => L.isElement(e) && u.isInline(e),
                    isNormalizing(u) {
                        var e = i.get(u);
                        return void 0 === e || e
                    },
                    isStart(u, e, t) {
                        if (0 !== e.offset) return !1;
                        var r = U.start(u, t);
                        return Du.equals(e, r)
                    },
                    isVoid: (u, e) => L.isElement(e) && u.isVoid(e),
                    last(u, e) {
                        var t = U.path(u, e, {
                            edge: "end"
                        });
                        return U.node(u, t)
                    },
                    leaf(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = U.path(u, e, t);
                        return [X.leaf(u, r), r]
                    },
                    * levels(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: t = u.selection,
                                reverse: r = !1,
                                voids: n = !1
                            } = e,
                            {
                                match: D
                            } = e;
                        if (null == D && (D = () => !0), t) {
                            var o = [],
                                a = U.path(u, t);
                            for (var [i, s] of X.levels(u, a))
                                if (D(i, s) && (o.push([i, s]), !n && U.isVoid(u, i))) break;
                            r && o.reverse(), yield* o
                        }
                    },
                    marks(u) {
                        var {
                            marks: e,
                            selection: t
                        } = u;
                        if (!t) return null;
                        if (e) return e;
                        if (iu.isExpanded(t)) {
                            var [r] = U.nodes(u, {
                                match: fu.isText
                            });
                            if (r) {
                                var [n] = r;
                                return l(n, M)
                            }
                            return {}
                        }
                        var {
                            anchor: D
                        } = t, {
                            path: o
                        } = D, [a] = U.leaf(u, o);
                        if (0 === D.offset) {
                            var i = U.previous(u, {
                                    at: o,
                                    match: fu.isText
                                }),
                                s = U.above(u, {
                                    match: e => U.isBlock(u, e)
                                });
                            if (i && s) {
                                var [C, B] = i, [, c] = s;
                                tu.isAncestor(c, B) && (a = C)
                            }
                        }
                        return l(a, W)
                    },
                    next(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: t = "lowest",
                                voids: r = !1
                            } = e,
                            {
                                match: n,
                                at: D = u.selection
                            } = e;
                        if (D) {
                            var o = U.after(u, D, {
                                voids: r
                            });
                            if (o) {
                                var [, a] = U.last(u, []), i = [o.path, a];
                                if (tu.isPath(D) && 0 === D.length) throw new Error("Cannot get the next node from the root node!");
                                if (null == n)
                                    if (tu.isPath(D)) {
                                        var [s] = U.parent(u, D);
                                        n = u => s.children.includes(u)
                                    } else n = () => !0;
                                var [C] = U.nodes(u, {
                                    at: i,
                                    match: n,
                                    mode: t,
                                    voids: r
                                });
                                return C
                            }
                        }
                    },
                    node(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = U.path(u, e, t);
                        return [X.get(u, r), r]
                    },
                    * nodes(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: t = u.selection,
                                mode: r = "all",
                                universal: n = !1,
                                reverse: D = !1,
                                voids: o = !1
                            } = e,
                            {
                                match: a
                            } = e;
                        if (a || (a = () => !0), t) {
                            var i, s;
                            if (G.isSpan(t)) i = t[0], s = t[1];
                            else {
                                var C = U.path(u, t, {
                                        edge: "start"
                                    }),
                                    B = U.path(u, t, {
                                        edge: "end"
                                    });
                                i = D ? B : C, s = D ? C : B
                            }
                            var l, c = X.nodes(u, {
                                    reverse: D,
                                    from: i,
                                    to: s,
                                    pass: e => {
                                        var [t] = e;
                                        return !o && U.isVoid(u, t)
                                    }
                                }),
                                f = [];
                            for (var [A, h] of c) {
                                var F = l && 0 === tu.compare(h, l[1]);
                                if ("highest" !== r || !F)
                                    if (a(A, h))
                                        if ("lowest" === r && F) l = [A, h];
                                        else {
                                            var d = "lowest" === r ? l : [A, h];
                                            d && (n ? f.push(d) : yield d), l = [A, h]
                                        }
                                else if (n && !F && fu.isText(A)) return
                            }
                            "lowest" === r && l && (n ? f.push(l) : yield l), n && (yield* f)
                        }
                    },
                    normalize(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                force: t = !1
                            } = e,
                            r = u => o.get(u) || [],
                            n = u => {
                                var e = r(u).pop(),
                                    t = e.join(",");
                                return (u => a.get(u) || new Set)(u).delete(t), e
                            };
                        if (U.isNormalizing(u)) {
                            if (t) {
                                var D = Array.from(X.nodes(u), (u => {
                                        var [, e] = u;
                                        return e
                                    })),
                                    i = new Set(D.map((u => u.join(","))));
                                o.set(u, D), a.set(u, i)
                            }
                            0 !== r(u).length && U.withoutNormalizing(u, (() => {
                                for (var e of r(u))
                                    if (X.has(u, e)) {
                                        var t = U.node(u, e),
                                            [D, o] = t;
                                        L.isElement(D) && 0 === D.children.length && u.normalizeNode(t)
                                    }
                                for (var a = 42 * r(u).length, i = 0; 0 !== r(u).length;) {
                                    if (i > a) throw new Error("\n            Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
                                    var s = n(u);
                                    if (X.has(u, s)) {
                                        var C = U.node(u, s);
                                        u.normalizeNode(C)
                                    }
                                    i++
                                }
                            }))
                        }
                    },
                    parent(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = U.path(u, e, t),
                            n = tu.parent(r);
                        return U.node(u, n)
                    },
                    path(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                depth: r,
                                edge: n
                            } = t;
                        if (tu.isPath(e))
                            if ("start" === n) {
                                var [, D] = X.first(u, e);
                                e = D
                            } else if ("end" === n) {
                            var [, o] = X.last(u, e);
                            e = o
                        }
                        return iu.isRange(e) && (e = "start" === n ? iu.start(e) : "end" === n ? iu.end(e) : tu.common(e.anchor.path, e.focus.path)), Du.isPoint(e) && (e = e.path), null != r && (e = e.slice(0, r)), e
                    },
                    hasPath: (u, e) => X.has(u, e),
                    pathRef(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = t,
                            n = {
                                current: e,
                                affinity: r,
                                unref() {
                                    var {
                                        current: e
                                    } = n;
                                    return U.pathRefs(u).delete(n), n.current = null, e
                                }
                            };
                        return U.pathRefs(u).add(n), n
                    },
                    pathRefs(u) {
                        var e = s.get(u);
                        return e || (e = new Set, s.set(u, e)), e
                    },
                    point(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                edge: r = "start"
                            } = t;
                        if (tu.isPath(e)) {
                            var n;
                            if ("end" === r) {
                                var [, D] = X.last(u, e);
                                n = D
                            } else {
                                var [, o] = X.first(u, e);
                                n = o
                            }
                            var a = X.get(u, n);
                            if (!fu.isText(a)) throw new Error("Cannot get the ".concat(r, " point in the node at path [").concat(e, "] because it has no ").concat(r, " text node."));
                            return {
                                path: n,
                                offset: "end" === r ? a.text.length : 0
                            }
                        }
                        if (iu.isRange(e)) {
                            var [i, s] = iu.edges(e);
                            return "start" === r ? i : s
                        }
                        return e
                    },
                    pointRef(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = t,
                            n = {
                                current: e,
                                affinity: r,
                                unref() {
                                    var {
                                        current: e
                                    } = n;
                                    return U.pointRefs(u).delete(n), n.current = null, e
                                }
                            };
                        return U.pointRefs(u).add(n), n
                    },
                    pointRefs(u) {
                        var e = C.get(u);
                        return e || (e = new Set, C.set(u, e)), e
                    },
                    * positions(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: t = u.selection,
                                unit: r = "offset",
                                reverse: n = !1,
                                voids: D = !1
                            } = e;
                        if (t) {
                            var o = U.range(u, t),
                                [a, i] = iu.edges(o),
                                s = n ? i : a,
                                C = !1,
                                B = "",
                                l = 0,
                                c = 0,
                                A = 0;
                            for (var [h, F] of U.nodes(u, {
                                    at: t,
                                    reverse: n,
                                    voids: D
                                })) {
                                if (L.isElement(h)) {
                                    if (!D && u.isVoid(h)) {
                                        yield U.start(u, F), C = !1;
                                        continue
                                    }
                                    if (u.isInline(h)) continue;
                                    if (U.hasInlines(u, h)) {
                                        var v = tu.isAncestor(F, i.path) ? i : U.end(u, F),
                                            p = tu.isAncestor(F, a.path) ? a : U.start(u, F);
                                        B = U.string(u, {
                                            anchor: p,
                                            focus: v
                                        }, {
                                            voids: D
                                        }), C = !0
                                    }
                                }
                                if (fu.isText(h)) {
                                    var g = tu.equals(F, s.path);
                                    for (g ? (c = n ? s.offset : h.text.length - s.offset, A = s.offset) : (c = h.text.length, A = n ? c : 0), (g || C || "offset" === r) && (yield {
                                            path: F,
                                            offset: A
                                        }, C = !1);;) {
                                        if (0 === l) {
                                            if ("" === B) break;
                                            l = m(B, r, n), B = d(B, l, n)[1]
                                        }
                                        if (A = n ? A - l : A + l, (c -= l) < 0) {
                                            l = -c;
                                            break
                                        }
                                        l = 0, yield {
                                            path: F,
                                            offset: A
                                        }
                                    }
                                }
                            }
                        }

                        function m(u, e, t) {
                            return "character" === e ? f(u, t) : "word" === e ? function(u) {
                                for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = 0, r = !1; u.length > 0;) {
                                    var n = f(u, e),
                                        [D, o] = d(u, n, e);
                                    if (E(D, o, e)) r = !0, t += n;
                                    else {
                                        if (r) break;
                                        t += n
                                    }
                                    u = o
                                }
                                return t
                            }(u, t) : "line" === e || "block" === e ? u.length : 1
                        }
                    },
                    previous(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: t = "lowest",
                                voids: r = !1
                            } = e,
                            {
                                match: n,
                                at: D = u.selection
                            } = e;
                        if (D) {
                            var o = U.before(u, D, {
                                voids: r
                            });
                            if (o) {
                                var [, a] = U.first(u, []), i = [o.path, a];
                                if (tu.isPath(D) && 0 === D.length) throw new Error("Cannot get the previous node from the root node!");
                                if (null == n)
                                    if (tu.isPath(D)) {
                                        var [s] = U.parent(u, D);
                                        n = u => s.children.includes(u)
                                    } else n = () => !0;
                                var [C] = U.nodes(u, {
                                    reverse: !0,
                                    at: i,
                                    match: n,
                                    mode: t,
                                    voids: r
                                });
                                return C
                            }
                        }
                    },
                    range: (u, e, t) => iu.isRange(e) && !t ? e : {
                        anchor: U.start(u, e),
                        focus: U.end(u, t || e)
                    },
                    rangeRef(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = t,
                            n = {
                                current: e,
                                affinity: r,
                                unref() {
                                    var {
                                        current: e
                                    } = n;
                                    return U.rangeRefs(u).delete(n), n.current = null, e
                                }
                            };
                        return U.rangeRefs(u).add(n), n
                    },
                    rangeRefs(u) {
                        var e = B.get(u);
                        return e || (e = new Set, B.set(u, e)), e
                    },
                    removeMark(u, e) {
                        u.removeMark(e)
                    },
                    setNormalizing(u, e) {
                        i.set(u, e)
                    },
                    start: (u, e) => U.point(u, e, {
                        edge: "start"
                    }),
                    string(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: r = !1
                            } = t,
                            n = U.range(u, e),
                            [D, o] = iu.edges(n),
                            a = "";
                        for (var [i, s] of U.nodes(u, {
                                at: n,
                                match: fu.isText,
                                voids: r
                            })) {
                            var C = i.text;
                            tu.equals(s, o.path) && (C = C.slice(0, o.offset)), tu.equals(s, D.path) && (C = C.slice(D.offset)), a += C
                        }
                        return a
                    },
                    unhangRange(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: r = !1
                            } = t,
                            [n, D] = iu.edges(e);
                        if (0 !== n.offset || 0 !== D.offset || iu.isCollapsed(e)) return e;
                        var o = U.above(u, {
                                at: D,
                                match: e => U.isBlock(u, e)
                            }),
                            a = o ? o[1] : [],
                            i = {
                                anchor: U.start(u, n),
                                focus: D
                            },
                            s = !0;
                        for (var [C, B] of U.nodes(u, {
                                at: i,
                                match: fu.isText,
                                reverse: !0,
                                voids: r
                            }))
                            if (s) s = !1;
                            else if ("" !== C.text || tu.isBefore(B, a)) {
                            D = {
                                path: B,
                                offset: C.text.length
                            };
                            break
                        }
                        return {
                            anchor: n,
                            focus: D
                        }
                    },
                    void(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return U.above(u, $($({}, e), {}, {
                            match: e => U.isVoid(u, e)
                        }))
                    },
                    withoutNormalizing(u, e) {
                        var t = U.isNormalizing(u);
                        U.setNormalizing(u, !1);
                        try {
                            e()
                        } finally {
                            U.setNormalizing(u, t)
                        }
                        U.normalize(u)
                    }
                },
                G = {
                    isSpan: u => Array.isArray(u) && 2 === u.length && u.every(tu.isPath)
                },
                H = ["children"],
                K = ["text"],
                Q = new WeakMap,
                X = {
                    ancestor(u, e) {
                        var t = X.get(u, e);
                        if (fu.isText(t)) throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(t));
                        return t
                    },
                    * ancestors(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var r of tu.ancestors(e, t)) {
                            var n = [X.ancestor(u, r), r];
                            yield n
                        }
                    },
                    child(u, e) {
                        if (fu.isText(u)) throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(u)));
                        var t = u.children[e];
                        if (null == t) throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(JSON.stringify(u)));
                        return t
                    },
                    * children(u, e) {
                        for (var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                                reverse: r = !1
                            } = t, n = X.ancestor(u, e), {
                                children: D
                            } = n, o = r ? D.length - 1 : 0; r ? o >= 0 : o < D.length;) {
                            var a = X.child(n, o),
                                i = e.concat(o);
                            yield [a, i], o = r ? o - 1 : o + 1
                        }
                    },
                    common(u, e, t) {
                        var r = tu.common(e, t);
                        return [X.get(u, r), r]
                    },
                    descendant(u, e) {
                        var t = X.get(u, e);
                        if (U.isEditor(t)) throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(t));
                        return t
                    },
                    * descendants(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [t, r] of X.nodes(u, e)) 0 !== r.length && (yield [t, r])
                    },
                    * elements(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [t, r] of X.nodes(u, e)) L.isElement(t) && (yield [t, r])
                    },
                    extractProps: u => L.isAncestor(u) ? l(u, H) : l(u, K),
                    first(u, e) {
                        for (var t = e.slice(), r = X.get(u, t); r && !fu.isText(r) && 0 !== r.children.length;) r = r.children[0], t.push(0);
                        return [r, t]
                    },
                    fragment(u, e) {
                        if (fu.isText(u)) throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(u)));
                        return (0, n.Uy)({
                            children: u.children
                        }, (u => {
                            var [t, r] = iu.edges(e), n = X.nodes(u, {
                                reverse: !0,
                                pass: u => {
                                    var [, t] = u;
                                    return !iu.includes(e, t)
                                }
                            });
                            for (var [, D] of n) {
                                if (!iu.includes(e, D)) {
                                    var o = X.parent(u, D),
                                        a = D[D.length - 1];
                                    o.children.splice(a, 1)
                                }
                                if (tu.equals(D, r.path)) {
                                    var i = X.leaf(u, D);
                                    i.text = i.text.slice(0, r.offset)
                                }
                                if (tu.equals(D, t.path)) {
                                    var s = X.leaf(u, D);
                                    s.text = s.text.slice(t.offset)
                                }
                            }
                            U.isEditor(u) && (u.selection = null)
                        })).children
                    },
                    get(u, e) {
                        for (var t = u, r = 0; r < e.length; r++) {
                            var n = e[r];
                            if (fu.isText(t) || !t.children[n]) throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(JSON.stringify(u)));
                            t = t.children[n]
                        }
                        return t
                    },
                    has(u, e) {
                        for (var t = u, r = 0; r < e.length; r++) {
                            var n = e[r];
                            if (fu.isText(t) || !t.children[n]) return !1;
                            t = t.children[n]
                        }
                        return !0
                    },
                    isNode: u => fu.isText(u) || L.isElement(u) || U.isEditor(u),
                    isNodeList(u) {
                        if (!Array.isArray(u)) return !1;
                        var e = Q.get(u);
                        if (void 0 !== e) return e;
                        var t = u.every((u => X.isNode(u)));
                        return Q.set(u, t), t
                    },
                    last(u, e) {
                        for (var t = e.slice(), r = X.get(u, t); r && !fu.isText(r) && 0 !== r.children.length;) {
                            var n = r.children.length - 1;
                            r = r.children[n], t.push(n)
                        }
                        return [r, t]
                    },
                    leaf(u, e) {
                        var t = X.get(u, e);
                        if (!fu.isText(t)) throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(t));
                        return t
                    },
                    * levels(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var r of tu.levels(e, t)) {
                            var n = X.get(u, r);
                            yield [n, r]
                        }
                    },
                    matches: (u, e) => L.isElement(u) && L.isElementProps(e) && L.matches(u, e) || fu.isText(u) && fu.isTextProps(e) && fu.matches(u, e),
                    * nodes(u) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                pass: t,
                                reverse: r = !1
                            } = e, {
                                from: n = [],
                                to: D
                            } = e, o = new Set, a = [], i = u; !D || !(r ? tu.isBefore(a, D) : tu.isAfter(a, D));)
                            if (o.has(i) || (yield [i, a]), o.has(i) || fu.isText(i) || 0 === i.children.length || null != t && !1 !== t([i, a])) {
                                if (0 === a.length) break;
                                if (!r) {
                                    var s = tu.next(a);
                                    if (X.has(u, s)) {
                                        a = s, i = X.get(u, a);
                                        continue
                                    }
                                }
                                if (r && 0 !== a[a.length - 1]) a = tu.previous(a), i = X.get(u, a);
                                else a = tu.parent(a), i = X.get(u, a), o.add(i)
                            } else {
                                o.add(i);
                                var C = r ? i.children.length - 1 : 0;
                                tu.isAncestor(a, n) && (C = n[a.length]), a = a.concat(C), i = X.get(u, a)
                            }
                    },
                    parent(u, e) {
                        var t = tu.parent(e),
                            r = X.get(u, t);
                        if (fu.isText(r)) throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
                        return r
                    },
                    string: u => fu.isText(u) ? u.text : u.children.map(X.string).join(""),
                    * texts(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [t, r] of X.nodes(u, e)) fu.isText(t) && (yield [t, r])
                    }
                };

            function Y(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function uu(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Y(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var eu = {
                    isNodeOperation: u => eu.isOperation(u) && u.type.endsWith("_node"),
                    isOperation(u) {
                        if (!(0, r.P)(u)) return !1;
                        switch (u.type) {
                            case "insert_node":
                            case "remove_node":
                                return tu.isPath(u.path) && X.isNode(u.node);
                            case "insert_text":
                            case "remove_text":
                                return "number" === typeof u.offset && "string" === typeof u.text && tu.isPath(u.path);
                            case "merge_node":
                                return "number" === typeof u.position && tu.isPath(u.path) && (0, r.P)(u.properties);
                            case "move_node":
                                return tu.isPath(u.path) && tu.isPath(u.newPath);
                            case "set_node":
                                return tu.isPath(u.path) && (0, r.P)(u.properties) && (0, r.P)(u.newProperties);
                            case "set_selection":
                                return null === u.properties && iu.isRange(u.newProperties) || null === u.newProperties && iu.isRange(u.properties) || (0, r.P)(u.properties) && (0, r.P)(u.newProperties);
                            case "split_node":
                                return tu.isPath(u.path) && "number" === typeof u.position && (0, r.P)(u.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: u => Array.isArray(u) && u.every((u => eu.isOperation(u))),
                    isSelectionOperation: u => eu.isOperation(u) && u.type.endsWith("_selection"),
                    isTextOperation: u => eu.isOperation(u) && u.type.endsWith("_text"),
                    inverse(u) {
                        switch (u.type) {
                            case "insert_node":
                                return uu(uu({}, u), {}, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return uu(uu({}, u), {}, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return uu(uu({}, u), {}, {
                                    type: "split_node",
                                    path: tu.previous(u.path)
                                });
                            case "move_node":
                                var {
                                    newPath: e,
                                    path: t
                                } = u;
                                if (tu.equals(e, t)) return u;
                                if (tu.isSibling(t, e)) return uu(uu({}, u), {}, {
                                    path: e,
                                    newPath: t
                                });
                                var r = tu.transform(t, u),
                                    n = tu.transform(tu.next(t), u);
                                return uu(uu({}, u), {}, {
                                    path: r,
                                    newPath: n
                                });
                            case "remove_node":
                                return uu(uu({}, u), {}, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return uu(uu({}, u), {}, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: D,
                                    newProperties: o
                                } = u;
                                return uu(uu({}, u), {}, {
                                    properties: o,
                                    newProperties: D
                                });
                            case "set_selection":
                                var {
                                    properties: a,
                                    newProperties: i
                                } = u;
                                return uu(uu({}, u), {}, null == a ? {
                                    properties: i,
                                    newProperties: null
                                } : null == i ? {
                                    properties: null,
                                    newProperties: a
                                } : {
                                    properties: i,
                                    newProperties: a
                                });
                            case "split_node":
                                return uu(uu({}, u), {}, {
                                    type: "merge_node",
                                    path: tu.next(u.path)
                                })
                        }
                    }
                },
                tu = {
                    ancestors(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: t = !1
                            } = e,
                            r = tu.levels(u, e);
                        return r = t ? r.slice(1) : r.slice(0, -1)
                    },
                    common(u, e) {
                        for (var t = [], r = 0; r < u.length && r < e.length; r++) {
                            var n = u[r];
                            if (n !== e[r]) break;
                            t.push(n)
                        }
                        return t
                    },
                    compare(u, e) {
                        for (var t = Math.min(u.length, e.length), r = 0; r < t; r++) {
                            if (u[r] < e[r]) return -1;
                            if (u[r] > e[r]) return 1
                        }
                        return 0
                    },
                    endsAfter(u, e) {
                        var t = u.length - 1,
                            r = u.slice(0, t),
                            n = e.slice(0, t),
                            D = u[t],
                            o = e[t];
                        return tu.equals(r, n) && D > o
                    },
                    endsAt(u, e) {
                        var t = u.length,
                            r = u.slice(0, t),
                            n = e.slice(0, t);
                        return tu.equals(r, n)
                    },
                    endsBefore(u, e) {
                        var t = u.length - 1,
                            r = u.slice(0, t),
                            n = e.slice(0, t),
                            D = u[t],
                            o = e[t];
                        return tu.equals(r, n) && D < o
                    },
                    equals: (u, e) => u.length === e.length && u.every(((u, t) => u === e[t])),
                    hasPrevious: u => u[u.length - 1] > 0,
                    isAfter: (u, e) => 1 === tu.compare(u, e),
                    isAncestor: (u, e) => u.length < e.length && 0 === tu.compare(u, e),
                    isBefore: (u, e) => -1 === tu.compare(u, e),
                    isChild: (u, e) => u.length === e.length + 1 && 0 === tu.compare(u, e),
                    isCommon: (u, e) => u.length <= e.length && 0 === tu.compare(u, e),
                    isDescendant: (u, e) => u.length > e.length && 0 === tu.compare(u, e),
                    isParent: (u, e) => u.length + 1 === e.length && 0 === tu.compare(u, e),
                    isPath: u => Array.isArray(u) && (0 === u.length || "number" === typeof u[0]),
                    isSibling(u, e) {
                        if (u.length !== e.length) return !1;
                        var t = u.slice(0, -1),
                            r = e.slice(0, -1);
                        return u[u.length - 1] !== e[e.length - 1] && tu.equals(t, r)
                    },
                    levels(u) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: t = !1
                            } = e, r = [], n = 0; n <= u.length; n++) r.push(u.slice(0, n));
                        return t && r.reverse(), r
                    },
                    next(u) {
                        if (0 === u.length) throw new Error("Cannot get the next path of a root path [".concat(u, "], because it has no next index."));
                        var e = u[u.length - 1];
                        return u.slice(0, -1).concat(e + 1)
                    },
                    operationCanTransformPath(u) {
                        switch (u.type) {
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "split_node":
                            case "move_node":
                                return !0;
                            default:
                                return !1
                        }
                    },
                    parent(u) {
                        if (0 === u.length) throw new Error("Cannot get the parent path of the root path [".concat(u, "]."));
                        return u.slice(0, -1)
                    },
                    previous(u) {
                        if (0 === u.length) throw new Error("Cannot get the previous path of a root path [".concat(u, "], because it has no previous index."));
                        var e = u[u.length - 1];
                        if (e <= 0) throw new Error("Cannot get the previous path of a first child path [".concat(u, "] because it would result in a negative index."));
                        return u.slice(0, -1).concat(e - 1)
                    },
                    relative(u, e) {
                        if (!tu.isAncestor(e, u) && !tu.equals(u, e)) throw new Error("Cannot get the relative path of [".concat(u, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
                        return u.slice(e.length)
                    },
                    transform(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, n.Uy)(u, (r => {
                            var {
                                affinity: n = "forward"
                            } = t;
                            if (u && 0 !== (null === u || void 0 === u ? void 0 : u.length)) {
                                if (null === r) return null;
                                switch (e.type) {
                                    case "insert_node":
                                        var {
                                            path: D
                                        } = e;
                                        (tu.equals(D, r) || tu.endsBefore(D, r) || tu.isAncestor(D, r)) && (r[D.length - 1] += 1);
                                        break;
                                    case "remove_node":
                                        var {
                                            path: o
                                        } = e;
                                        if (tu.equals(o, r) || tu.isAncestor(o, r)) return null;
                                        tu.endsBefore(o, r) && (r[o.length - 1] -= 1);
                                        break;
                                    case "merge_node":
                                        var {
                                            path: a,
                                            position: i
                                        } = e;
                                        tu.equals(a, r) || tu.endsBefore(a, r) ? r[a.length - 1] -= 1 : tu.isAncestor(a, r) && (r[a.length - 1] -= 1, r[a.length] += i);
                                        break;
                                    case "split_node":
                                        var {
                                            path: s,
                                            position: C
                                        } = e;
                                        if (tu.equals(s, r)) {
                                            if ("forward" === n) r[r.length - 1] += 1;
                                            else if ("backward" !== n) return null
                                        } else tu.endsBefore(s, r) ? r[s.length - 1] += 1 : tu.isAncestor(s, r) && u[s.length] >= C && (r[s.length - 1] += 1, r[s.length] -= C);
                                        break;
                                    case "move_node":
                                        var {
                                            path: B,
                                            newPath: l
                                        } = e;
                                        if (tu.equals(B, l)) return;
                                        if (tu.isAncestor(B, r) || tu.equals(B, r)) {
                                            var c = l.slice();
                                            return tu.endsBefore(B, l) && B.length < l.length && (c[B.length - 1] -= 1), c.concat(r.slice(B.length))
                                        }
                                        tu.isSibling(B, l) && (tu.isAncestor(l, r) || tu.equals(l, r)) ? tu.endsBefore(B, r) ? r[B.length - 1] -= 1 : r[B.length - 1] += 1 : tu.endsBefore(l, r) || tu.equals(l, r) || tu.isAncestor(l, r) ? (tu.endsBefore(B, r) && (r[B.length - 1] -= 1), r[l.length - 1] += 1) : tu.endsBefore(B, r) && (tu.equals(l, r) && (r[l.length - 1] += 1), r[B.length - 1] -= 1)
                                }
                            }
                        }))
                    }
                };

            function ru(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function nu(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ru(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : ru(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var Du = {
                    compare(u, e) {
                        var t = tu.compare(u.path, e.path);
                        return 0 === t ? u.offset < e.offset ? -1 : u.offset > e.offset ? 1 : 0 : t
                    },
                    isAfter: (u, e) => 1 === Du.compare(u, e),
                    isBefore: (u, e) => -1 === Du.compare(u, e),
                    equals: (u, e) => u.offset === e.offset && tu.equals(u.path, e.path),
                    isPoint: u => (0, r.P)(u) && "number" === typeof u.offset && tu.isPath(u.path),
                    transform(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, n.Uy)(u, (u => {
                            if (null === u) return null;
                            var {
                                affinity: r = "forward"
                            } = t, {
                                path: n,
                                offset: D
                            } = u;
                            switch (e.type) {
                                case "insert_node":
                                case "move_node":
                                    u.path = tu.transform(n, e, t);
                                    break;
                                case "insert_text":
                                    tu.equals(e.path, n) && (e.offset < D || e.offset === D && "forward" === r) && (u.offset += e.text.length);
                                    break;
                                case "merge_node":
                                    tu.equals(e.path, n) && (u.offset += e.position), u.path = tu.transform(n, e, t);
                                    break;
                                case "remove_text":
                                    tu.equals(e.path, n) && e.offset <= D && (u.offset -= Math.min(D - e.offset, e.text.length));
                                    break;
                                case "remove_node":
                                    if (tu.equals(e.path, n) || tu.isAncestor(e.path, n)) return null;
                                    u.path = tu.transform(n, e, t);
                                    break;
                                case "split_node":
                                    if (tu.equals(e.path, n)) {
                                        if (e.position === D && null == r) return null;
                                        (e.position < D || e.position === D && "forward" === r) && (u.offset -= e.position, u.path = tu.transform(n, e, nu(nu({}, t), {}, {
                                            affinity: "forward"
                                        })))
                                    } else u.path = tu.transform(n, e, t)
                            }
                        }))
                    }
                },
                ou = ["anchor", "focus"];

            function au(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var iu = {
                    edges(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: t = !1
                            } = e,
                            {
                                anchor: r,
                                focus: n
                            } = u;
                        return iu.isBackward(u) === t ? [r, n] : [n, r]
                    },
                    end(u) {
                        var [, e] = iu.edges(u);
                        return e
                    },
                    equals: (u, e) => Du.equals(u.anchor, e.anchor) && Du.equals(u.focus, e.focus),
                    includes(u, e) {
                        if (iu.isRange(e)) {
                            if (iu.includes(u, e.anchor) || iu.includes(u, e.focus)) return !0;
                            var [t, r] = iu.edges(u), [n, D] = iu.edges(e);
                            return Du.isBefore(t, n) && Du.isAfter(r, D)
                        }
                        var [o, a] = iu.edges(u), i = !1, s = !1;
                        return Du.isPoint(e) ? (i = Du.compare(e, o) >= 0, s = Du.compare(e, a) <= 0) : (i = tu.compare(e, o.path) >= 0, s = tu.compare(e, a.path) <= 0), i && s
                    },
                    intersection(u, e) {
                        var t = l(u, ou),
                            [r, n] = iu.edges(u),
                            [o, a] = iu.edges(e),
                            i = Du.isBefore(r, o) ? o : r,
                            s = Du.isBefore(n, a) ? n : a;
                        return Du.isBefore(s, i) ? null : function(u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? au(Object(t), !0).forEach((function(e) {
                                    D(u, e, t[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : au(Object(t)).forEach((function(e) {
                                    Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                                }))
                            }
                            return u
                        }({
                            anchor: i,
                            focus: s
                        }, t)
                    },
                    isBackward(u) {
                        var {
                            anchor: e,
                            focus: t
                        } = u;
                        return Du.isAfter(e, t)
                    },
                    isCollapsed(u) {
                        var {
                            anchor: e,
                            focus: t
                        } = u;
                        return Du.equals(e, t)
                    },
                    isExpanded: u => !iu.isCollapsed(u),
                    isForward: u => !iu.isBackward(u),
                    isRange: u => (0, r.P)(u) && Du.isPoint(u.anchor) && Du.isPoint(u.focus),
                    * points(u) {
                        yield [u.anchor, "anchor"], yield [u.focus, "focus"]
                    },
                    start(u) {
                        var [e] = iu.edges(u);
                        return e
                    },
                    transform(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, n.Uy)(u, (u => {
                            if (null === u) return null;
                            var r, n, {
                                affinity: D = "inward"
                            } = t;
                            if ("inward" === D) {
                                var o = iu.isCollapsed(u);
                                iu.isForward(u) ? (r = "forward", n = o ? r : "backward") : (r = "backward", n = o ? r : "forward")
                            } else "outward" === D ? iu.isForward(u) ? (r = "backward", n = "forward") : (r = "forward", n = "backward") : (r = D, n = D);
                            var a = Du.transform(u.anchor, e, {
                                    affinity: r
                                }),
                                i = Du.transform(u.focus, e, {
                                    affinity: n
                                });
                            if (!a || !i) return null;
                            u.anchor = a, u.focus = i
                        }))
                    }
                },
                su = (u, e) => {
                    for (var t in u) {
                        var n = u[t],
                            D = e[t];
                        if ((0, r.P)(n) && (0, r.P)(D)) {
                            if (!su(n, D)) return !1
                        } else if (Array.isArray(n) && Array.isArray(D)) {
                            if (n.length !== D.length) return !1;
                            for (var o = 0; o < n.length; o++)
                                if (n[o] !== D[o]) return !1
                        } else if (n !== D) return !1
                    }
                    for (var a in e)
                        if (void 0 === u[a] && void 0 !== e[a]) return !1;
                    return !0
                },
                Cu = ["text"],
                Bu = ["anchor", "focus"];

            function lu(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function cu(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lu(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : lu(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var fu = {
                equals(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            loose: r = !1
                        } = t;

                    function n(u) {
                        return l(u, Cu)
                    }
                    return su(r ? n(u) : u, r ? n(e) : e)
                },
                isText: u => (0, r.P)(u) && "string" === typeof u.text,
                isTextList: u => Array.isArray(u) && u.every((u => fu.isText(u))),
                isTextProps: u => void 0 !== u.text,
                matches(u, e) {
                    for (var t in e)
                        if ("text" !== t && (!u.hasOwnProperty(t) || u[t] !== e[t])) return !1;
                    return !0
                },
                decorations(u, e) {
                    var t = [cu({}, u)];
                    for (var r of e) {
                        var n = l(r, Bu),
                            [D, o] = iu.edges(r),
                            a = [],
                            i = 0;
                        for (var s of t) {
                            var {
                                length: C
                            } = s.text, B = i;
                            if (i += C, D.offset <= B && o.offset >= i) Object.assign(s, n), a.push(s);
                            else if (D.offset !== o.offset && (D.offset === i || o.offset === B) || D.offset > i || o.offset < B || o.offset === B && 0 !== B) a.push(s);
                            else {
                                var c = s,
                                    f = void 0,
                                    A = void 0;
                                if (o.offset < i) {
                                    var h = o.offset - B;
                                    A = cu(cu({}, c), {}, {
                                        text: c.text.slice(h)
                                    }), c = cu(cu({}, c), {}, {
                                        text: c.text.slice(0, h)
                                    })
                                }
                                if (D.offset > B) {
                                    var F = D.offset - B;
                                    f = cu(cu({}, c), {}, {
                                        text: c.text.slice(0, F)
                                    }), c = cu(cu({}, c), {}, {
                                        text: c.text.slice(F)
                                    })
                                }
                                Object.assign(c, n), f && a.push(f), a.push(c), A && a.push(A)
                            }
                        }
                        t = a
                    }
                    return t
                }
            };

            function Au(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function hu(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Au(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : Au(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var Fu = ["text"],
                du = ["children"];

            function Eu(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function vu(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Eu(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : Eu(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var pu = {
                    insertNodes(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                hanging: r = !1,
                                voids: n = !1,
                                mode: D = "lowest"
                            } = t, {
                                at: o,
                                match: a,
                                select: i
                            } = t;
                            if (X.isNode(e) && (e = [e]), 0 !== e.length) {
                                var [s] = e;
                                if (o || (o = u.selection ? u.selection : u.children.length > 0 ? U.end(u, []) : [0], i = !0), null == i && (i = !1), iu.isRange(o))
                                    if (r || (o = U.unhangRange(u, o)), iu.isCollapsed(o)) o = o.anchor;
                                    else {
                                        var [, C] = iu.edges(o), B = U.pointRef(u, C);
                                        ju.delete(u, {
                                            at: o
                                        }), o = B.unref()
                                    }
                                if (Du.isPoint(o)) {
                                    null == a && (a = fu.isText(s) ? u => fu.isText(u) : u.isInline(s) ? e => fu.isText(e) || U.isInline(u, e) : e => U.isBlock(u, e));
                                    var [l] = U.nodes(u, {
                                        at: o.path,
                                        match: a,
                                        mode: D,
                                        voids: n
                                    });
                                    if (!l) return;
                                    var [, c] = l, f = U.pathRef(u, c), A = U.isEnd(u, o, c);
                                    ju.splitNodes(u, {
                                        at: o,
                                        match: a,
                                        mode: D,
                                        voids: n
                                    });
                                    var h = f.unref();
                                    o = A ? tu.next(h) : h
                                }
                                var F = tu.parent(o),
                                    d = o[o.length - 1];
                                if (n || !U.void(u, {
                                        at: F
                                    })) {
                                    for (var E of e) {
                                        var v = F.concat(d);
                                        d++, u.apply({
                                            type: "insert_node",
                                            path: v,
                                            node: E
                                        }), o = tu.next(o)
                                    }
                                    if (o = tu.previous(o), i) {
                                        var p = U.end(u, o);
                                        p && ju.select(u, p)
                                    }
                                }
                            }
                        }))
                    },
                    liftNodes(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                at: t = u.selection,
                                mode: r = "lowest",
                                voids: n = !1
                            } = e, {
                                match: D
                            } = e;
                            if (null == D && (D = tu.isPath(t) ? yu(u, t) : e => U.isBlock(u, e)), t) {
                                var o = U.nodes(u, {
                                        at: t,
                                        match: D,
                                        mode: r,
                                        voids: n
                                    }),
                                    a = Array.from(o, (e => {
                                        var [, t] = e;
                                        return U.pathRef(u, t)
                                    }));
                                for (var i of a) {
                                    var s = i.unref();
                                    if (s.length < 2) throw new Error("Cannot lift node at a path [".concat(s, "] because it has a depth of less than `2`."));
                                    var C = U.node(u, tu.parent(s)),
                                        [B, l] = C,
                                        c = s[s.length - 1],
                                        {
                                            length: f
                                        } = B.children;
                                    if (1 === f) {
                                        var A = tu.next(l);
                                        ju.moveNodes(u, {
                                            at: s,
                                            to: A,
                                            voids: n
                                        }), ju.removeNodes(u, {
                                            at: l,
                                            voids: n
                                        })
                                    } else if (0 === c) ju.moveNodes(u, {
                                        at: s,
                                        to: l,
                                        voids: n
                                    });
                                    else if (c === f - 1) {
                                        var h = tu.next(l);
                                        ju.moveNodes(u, {
                                            at: s,
                                            to: h,
                                            voids: n
                                        })
                                    } else {
                                        var F = tu.next(s),
                                            d = tu.next(l);
                                        ju.splitNodes(u, {
                                            at: F,
                                            voids: n
                                        }), ju.moveNodes(u, {
                                            at: s,
                                            to: d,
                                            voids: n
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    mergeNodes(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                match: t,
                                at: r = u.selection
                            } = e, {
                                hanging: n = !1,
                                voids: D = !1,
                                mode: o = "lowest"
                            } = e;
                            if (r) {
                                if (null == t)
                                    if (tu.isPath(r)) {
                                        var [a] = U.parent(u, r);
                                        t = u => a.children.includes(u)
                                    } else t = e => U.isBlock(u, e);
                                if (!n && iu.isRange(r) && (r = U.unhangRange(u, r)), iu.isRange(r))
                                    if (iu.isCollapsed(r)) r = r.anchor;
                                    else {
                                        var [, i] = iu.edges(r), s = U.pointRef(u, i);
                                        ju.delete(u, {
                                            at: r
                                        }), r = s.unref(), null == e.at && ju.select(u, r)
                                    }
                                var [C] = U.nodes(u, {
                                    at: r,
                                    match: t,
                                    voids: D,
                                    mode: o
                                }), B = U.previous(u, {
                                    at: r,
                                    match: t,
                                    voids: D,
                                    mode: o
                                });
                                if (C && B) {
                                    var [c, f] = C, [A, h] = B;
                                    if (0 !== f.length && 0 !== h.length) {
                                        var F, d, E = tu.next(h),
                                            v = tu.common(f, h),
                                            p = tu.isSibling(f, h),
                                            g = Array.from(U.levels(u, {
                                                at: f
                                            }), (u => {
                                                var [e] = u;
                                                return e
                                            })).slice(v.length).slice(0, -1),
                                            m = U.above(u, {
                                                at: f,
                                                mode: "highest",
                                                match: e => g.includes(e) && gu(u, e)
                                            }),
                                            y = m && U.pathRef(u, m[1]);
                                        if (fu.isText(c) && fu.isText(A)) {
                                            var w = l(c, Fu);
                                            d = A.text.length, F = w
                                        } else {
                                            if (!L.isElement(c) || !L.isElement(A)) throw new Error("Cannot merge the node at path [".concat(f, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(c), " ").concat(JSON.stringify(A)));
                                            w = l(c, du);
                                            d = A.children.length, F = w
                                        }
                                        p || ju.moveNodes(u, {
                                            at: f,
                                            to: E,
                                            voids: D
                                        }), y && ju.removeNodes(u, {
                                            at: y.current,
                                            voids: D
                                        }), L.isElement(A) && U.isEmpty(u, A) || fu.isText(A) && "" === A.text && 0 !== h[h.length - 1] ? ju.removeNodes(u, {
                                            at: h,
                                            voids: D
                                        }) : u.apply({
                                            type: "merge_node",
                                            path: E,
                                            position: d,
                                            properties: F
                                        }), y && y.unref()
                                    }
                                }
                            }
                        }))
                    },
                    moveNodes(u, e) {
                        U.withoutNormalizing(u, (() => {
                            var {
                                to: t,
                                at: r = u.selection,
                                mode: n = "lowest",
                                voids: D = !1
                            } = e, {
                                match: o
                            } = e;
                            if (r) {
                                null == o && (o = tu.isPath(r) ? yu(u, r) : e => U.isBlock(u, e));
                                var a = U.pathRef(u, t),
                                    i = U.nodes(u, {
                                        at: r,
                                        match: o,
                                        mode: n,
                                        voids: D
                                    }),
                                    s = Array.from(i, (e => {
                                        var [, t] = e;
                                        return U.pathRef(u, t)
                                    }));
                                for (var C of s) {
                                    var B = C.unref(),
                                        l = a.current;
                                    0 !== B.length && u.apply({
                                        type: "move_node",
                                        path: B,
                                        newPath: l
                                    }), a.current && tu.isSibling(l, B) && tu.isAfter(l, B) && (a.current = tu.next(a.current))
                                }
                                a.unref()
                            }
                        }))
                    },
                    removeNodes(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                hanging: t = !1,
                                voids: r = !1,
                                mode: n = "lowest"
                            } = e, {
                                at: D = u.selection,
                                match: o
                            } = e;
                            if (D) {
                                null == o && (o = tu.isPath(D) ? yu(u, D) : e => U.isBlock(u, e)), !t && iu.isRange(D) && (D = U.unhangRange(u, D));
                                var a = U.nodes(u, {
                                        at: D,
                                        match: o,
                                        mode: n,
                                        voids: r
                                    }),
                                    i = Array.from(a, (e => {
                                        var [, t] = e;
                                        return U.pathRef(u, t)
                                    }));
                                for (var s of i) {
                                    var C = s.unref();
                                    if (C) {
                                        var [B] = U.node(u, C);
                                        u.apply({
                                            type: "remove_node",
                                            path: C,
                                            node: B
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    setNodes(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                match: r,
                                at: n = u.selection,
                                compare: D,
                                merge: o
                            } = t, {
                                hanging: a = !1,
                                mode: i = "lowest",
                                split: s = !1,
                                voids: C = !1
                            } = t;
                            if (n) {
                                if (null == r && (r = tu.isPath(n) ? yu(u, n) : e => U.isBlock(u, e)), !a && iu.isRange(n) && (n = U.unhangRange(u, n)), s && iu.isRange(n)) {
                                    if (iu.isCollapsed(n) && U.leaf(u, n.anchor)[0].text.length > 0) return;
                                    var B = U.rangeRef(u, n, {
                                            affinity: "inward"
                                        }),
                                        [l, c] = iu.edges(n),
                                        f = "lowest" === i ? "lowest" : "highest",
                                        A = U.isEnd(u, c, c.path);
                                    ju.splitNodes(u, {
                                        at: c,
                                        match: r,
                                        mode: f,
                                        voids: C,
                                        always: !A
                                    });
                                    var h = U.isStart(u, l, l.path);
                                    ju.splitNodes(u, {
                                        at: l,
                                        match: r,
                                        mode: f,
                                        voids: C,
                                        always: !h
                                    }), n = B.unref(), null == t.at && ju.select(u, n)
                                }
                                for (var [F, d] of (D || (D = (u, e) => u !== e), U.nodes(u, {
                                        at: n,
                                        match: r,
                                        mode: i,
                                        voids: C
                                    }))) {
                                    var E = {},
                                        v = {};
                                    if (0 !== d.length) {
                                        var p = !1;
                                        for (var g in e) "children" !== g && "text" !== g && D(e[g], F[g]) && (p = !0, F.hasOwnProperty(g) && (E[g] = F[g]), o ? null != e[g] && (v[g] = o(F[g], e[g])) : null != e[g] && (v[g] = e[g]));
                                        p && u.apply({
                                            type: "set_node",
                                            path: d,
                                            properties: E,
                                            newProperties: v
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    splitNodes(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                mode: t = "lowest",
                                voids: r = !1
                            } = e, {
                                match: n,
                                at: D = u.selection,
                                height: o = 0,
                                always: a = !1
                            } = e;
                            if (null == n && (n = e => U.isBlock(u, e)), iu.isRange(D) && (D = mu(u, D)), tu.isPath(D)) {
                                var i = D,
                                    s = U.point(u, i),
                                    [C] = U.parent(u, i);
                                n = u => u === C, o = s.path.length - i.length + 1, D = s, a = !0
                            }
                            if (D) {
                                var B, l = U.pointRef(u, D, {
                                    affinity: "backward"
                                });
                                try {
                                    var [c] = U.nodes(u, {
                                        at: D,
                                        match: n,
                                        mode: t,
                                        voids: r
                                    });
                                    if (!c) return;
                                    var f = U.void(u, {
                                        at: D,
                                        mode: "highest"
                                    });
                                    if (!r && f) {
                                        var [A, h] = f;
                                        if (L.isElement(A) && u.isInline(A)) {
                                            var F = U.after(u, h);
                                            if (!F) {
                                                var d = tu.next(h);
                                                ju.insertNodes(u, {
                                                    text: ""
                                                }, {
                                                    at: d,
                                                    voids: r
                                                }), F = U.point(u, d)
                                            }
                                            D = F, a = !0
                                        }
                                        o = D.path.length - h.length + 1, a = !0
                                    }
                                    B = U.pointRef(u, D);
                                    var E = D.path.length - o,
                                        [, v] = c,
                                        p = D.path.slice(0, E),
                                        g = 0 === o ? D.offset : D.path[E] + 0;
                                    for (var [m, y] of U.levels(u, {
                                            at: p,
                                            reverse: !0,
                                            voids: r
                                        })) {
                                        var w = !1;
                                        if (y.length < v.length || 0 === y.length || !r && U.isVoid(u, m)) break;
                                        var b = l.current,
                                            O = U.isEnd(u, b, y);
                                        if (a || !l || !U.isEdge(u, b, y)) {
                                            w = !0;
                                            var x = X.extractProps(m);
                                            u.apply({
                                                type: "split_node",
                                                path: y,
                                                position: g,
                                                properties: x
                                            })
                                        }
                                        g = y[y.length - 1] + (w || O ? 1 : 0)
                                    }
                                    if (null == e.at) {
                                        var P = B.current || U.end(u, []);
                                        ju.select(u, P)
                                    }
                                } finally {
                                    var k;
                                    l.unref(), null === (k = B) || void 0 === k || k.unref()
                                }
                            }
                        }))
                    },
                    unsetNodes(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Array.isArray(e) || (e = [e]);
                        var r = {};
                        for (var n of e) r[n] = null;
                        ju.setNodes(u, r, t)
                    },
                    unwrapNodes(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                mode: t = "lowest",
                                split: r = !1,
                                voids: n = !1
                            } = e, {
                                at: D = u.selection,
                                match: o
                            } = e;
                            if (D) {
                                null == o && (o = tu.isPath(D) ? yu(u, D) : e => U.isBlock(u, e)), tu.isPath(D) && (D = U.range(u, D));
                                var a = iu.isRange(D) ? U.rangeRef(u, D) : null,
                                    i = U.nodes(u, {
                                        at: D,
                                        match: o,
                                        mode: t,
                                        voids: n
                                    }),
                                    s = Array.from(i, (e => {
                                        var [, t] = e;
                                        return U.pathRef(u, t)
                                    })).reverse(),
                                    C = function(e) {
                                        var t = e.unref(),
                                            [D] = U.node(u, t),
                                            o = U.range(u, t);
                                        r && a && (o = iu.intersection(a.current, o)), ju.liftNodes(u, {
                                            at: o,
                                            match: u => L.isAncestor(D) && D.children.includes(u),
                                            voids: n
                                        })
                                    };
                                for (var B of s) C(B);
                                a && a.unref()
                            }
                        }))
                    },
                    wrapNodes(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                mode: r = "lowest",
                                split: n = !1,
                                voids: D = !1
                            } = t, {
                                match: o,
                                at: a = u.selection
                            } = t;
                            if (a) {
                                if (null == o && (o = tu.isPath(a) ? yu(u, a) : u.isInline(e) ? e => U.isInline(u, e) || fu.isText(e) : e => U.isBlock(u, e)), n && iu.isRange(a)) {
                                    var [i, s] = iu.edges(a), C = U.rangeRef(u, a, {
                                        affinity: "inward"
                                    });
                                    ju.splitNodes(u, {
                                        at: s,
                                        match: o,
                                        voids: D
                                    }), ju.splitNodes(u, {
                                        at: i,
                                        match: o,
                                        voids: D
                                    }), a = C.unref(), null == t.at && ju.select(u, a)
                                }
                                var B = Array.from(U.nodes(u, {
                                    at: a,
                                    match: u.isInline(e) ? e => U.isBlock(u, e) : u => U.isEditor(u),
                                    mode: "lowest",
                                    voids: D
                                }));
                                for (var [, l] of B) {
                                    var c = iu.isRange(a) ? iu.intersection(a, U.range(u, l)) : a;
                                    if (c) {
                                        var f = Array.from(U.nodes(u, {
                                            at: c,
                                            match: o,
                                            mode: r,
                                            voids: D
                                        }));
                                        if (f.length > 0)
                                            if ("continue" === function() {
                                                    var [t] = f, r = f[f.length - 1], [, n] = t, [, o] = r;
                                                    if (0 === n.length && 0 === o.length) return "continue";
                                                    var a = tu.equals(n, o) ? tu.parent(n) : tu.common(n, o),
                                                        i = U.range(u, n, o),
                                                        s = U.node(u, a),
                                                        [C] = s,
                                                        B = a.length + 1,
                                                        l = tu.next(o.slice(0, B)),
                                                        c = vu(vu({}, e), {}, {
                                                            children: []
                                                        });
                                                    ju.insertNodes(u, c, {
                                                        at: l,
                                                        voids: D
                                                    }), ju.moveNodes(u, {
                                                        at: i,
                                                        match: u => L.isAncestor(C) && C.children.includes(u),
                                                        to: l.concat(0),
                                                        voids: D
                                                    })
                                                }()) continue
                                    }
                                }
                            }
                        }))
                    }
                },
                gu = (u, e) => {
                    if (L.isElement(e)) {
                        var t = e;
                        return !!U.isVoid(u, e) || 1 === t.children.length && gu(u, t.children[0])
                    }
                    return !U.isEditor(e)
                },
                mu = (u, e) => {
                    if (iu.isCollapsed(e)) return e.anchor;
                    var [, t] = iu.edges(e), r = U.pointRef(u, t);
                    return ju.delete(u, {
                        at: e
                    }), r.unref()
                },
                yu = (u, e) => {
                    var [t] = U.node(u, e);
                    return u => u === t
                };

            function wu(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function bu(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? wu(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : wu(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var Ou = {
                    collapse(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                edge: t = "anchor"
                            } = e,
                            {
                                selection: r
                            } = u;
                        if (r)
                            if ("anchor" === t) ju.select(u, r.anchor);
                            else if ("focus" === t) ju.select(u, r.focus);
                        else if ("start" === t) {
                            var [n] = iu.edges(r);
                            ju.select(u, n)
                        } else if ("end" === t) {
                            var [, D] = iu.edges(r);
                            ju.select(u, D)
                        }
                    },
                    deselect(u) {
                        var {
                            selection: e
                        } = u;
                        e && u.apply({
                            type: "set_selection",
                            properties: e,
                            newProperties: null
                        })
                    },
                    move(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                selection: t
                            } = u,
                            {
                                distance: r = 1,
                                unit: n = "character",
                                reverse: D = !1
                            } = e,
                            {
                                edge: o = null
                            } = e;
                        if (t) {
                            "start" === o && (o = iu.isBackward(t) ? "focus" : "anchor"), "end" === o && (o = iu.isBackward(t) ? "anchor" : "focus");
                            var {
                                anchor: a,
                                focus: i
                            } = t, s = {
                                distance: r,
                                unit: n
                            }, C = {};
                            if (null == o || "anchor" === o) {
                                var B = D ? U.before(u, a, s) : U.after(u, a, s);
                                B && (C.anchor = B)
                            }
                            if (null == o || "focus" === o) {
                                var l = D ? U.before(u, i, s) : U.after(u, i, s);
                                l && (C.focus = l)
                            }
                            ju.setSelection(u, C)
                        }
                    },
                    select(u, e) {
                        var {
                            selection: t
                        } = u;
                        if (e = U.range(u, e), t) ju.setSelection(u, e);
                        else {
                            if (!iu.isRange(e)) throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(e)));
                            u.apply({
                                type: "set_selection",
                                properties: t,
                                newProperties: e
                            })
                        }
                    },
                    setPoint(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                selection: r
                            } = u,
                            {
                                edge: n = "both"
                            } = t;
                        if (r) {
                            "start" === n && (n = iu.isBackward(r) ? "focus" : "anchor"), "end" === n && (n = iu.isBackward(r) ? "anchor" : "focus");
                            var {
                                anchor: D,
                                focus: o
                            } = r, a = "anchor" === n ? D : o;
                            ju.setSelection(u, {
                                ["anchor" === n ? "anchor" : "focus"]: bu(bu({}, a), e)
                            })
                        }
                    },
                    setSelection(u, e) {
                        var {
                            selection: t
                        } = u, r = {}, n = {};
                        if (t) {
                            for (var D in e)("anchor" === D && null != e.anchor && !Du.equals(e.anchor, t.anchor) || "focus" === D && null != e.focus && !Du.equals(e.focus, t.focus) || "anchor" !== D && "focus" !== D && e[D] !== t[D]) && (r[D] = t[D], n[D] = e[D]);
                            Object.keys(r).length > 0 && u.apply({
                                type: "set_selection",
                                properties: r,
                                newProperties: n
                            })
                        }
                    }
                },
                xu = {
                    delete(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                reverse: t = !1,
                                unit: r = "character",
                                distance: n = 1,
                                voids: D = !1
                            } = e, {
                                at: o = u.selection,
                                hanging: a = !1
                            } = e;
                            if (o) {
                                if (iu.isRange(o) && iu.isCollapsed(o) && (o = o.anchor), Du.isPoint(o)) {
                                    var i = U.void(u, {
                                        at: o,
                                        mode: "highest"
                                    });
                                    if (!D && i) {
                                        var [, s] = i;
                                        o = s
                                    } else {
                                        var C = {
                                            unit: r,
                                            distance: n
                                        };
                                        o = {
                                            anchor: o,
                                            focus: t ? U.before(u, o, C) || U.start(u, []) : U.after(u, o, C) || U.end(u, [])
                                        }, a = !0
                                    }
                                }
                                if (tu.isPath(o)) ju.removeNodes(u, {
                                    at: o,
                                    voids: D
                                });
                                else if (!iu.isCollapsed(o)) {
                                    if (!a) {
                                        var [, B] = iu.edges(o), l = U.end(u, []);
                                        Du.equals(B, l) || (o = U.unhangRange(u, o, {
                                            voids: D
                                        }))
                                    }
                                    var [c, f] = iu.edges(o), A = U.above(u, {
                                        match: e => U.isBlock(u, e),
                                        at: c,
                                        voids: D
                                    }), h = U.above(u, {
                                        match: e => U.isBlock(u, e),
                                        at: f,
                                        voids: D
                                    }), F = A && h && !tu.equals(A[1], h[1]), d = tu.equals(c.path, f.path), E = D ? null : U.void(u, {
                                        at: c,
                                        mode: "highest"
                                    }), v = D ? null : U.void(u, {
                                        at: f,
                                        mode: "highest"
                                    });
                                    if (E) {
                                        var p = U.before(u, c);
                                        p && A && tu.isAncestor(A[1], p.path) && (c = p)
                                    }
                                    if (v) {
                                        var g = U.after(u, f);
                                        g && h && tu.isAncestor(h[1], g.path) && (f = g)
                                    }
                                    var m, y = [];
                                    for (var w of U.nodes(u, {
                                            at: o,
                                            voids: D
                                        })) {
                                        var [b, O] = w;
                                        m && 0 === tu.compare(O, m) || (!D && U.isVoid(u, b) || !tu.isCommon(O, c.path) && !tu.isCommon(O, f.path)) && (y.push(w), m = O)
                                    }
                                    var x = Array.from(y, (e => {
                                            var [, t] = e;
                                            return U.pathRef(u, t)
                                        })),
                                        P = U.pointRef(u, c),
                                        k = U.pointRef(u, f);
                                    if (!d && !E) {
                                        var j = P.current,
                                            [N] = U.leaf(u, j),
                                            {
                                                path: _
                                            } = j,
                                            {
                                                offset: R
                                            } = c,
                                            T = N.text.slice(R);
                                        T.length > 0 && u.apply({
                                            type: "remove_text",
                                            path: _,
                                            offset: R,
                                            text: T
                                        })
                                    }
                                    for (var S of x) {
                                        var q = S.unref();
                                        ju.removeNodes(u, {
                                            at: q,
                                            voids: D
                                        })
                                    }
                                    if (!v) {
                                        var I = k.current,
                                            [V] = U.leaf(u, I),
                                            {
                                                path: z
                                            } = I,
                                            L = d ? c.offset : 0,
                                            M = V.text.slice(L, f.offset);
                                        M.length > 0 && u.apply({
                                            type: "remove_text",
                                            path: z,
                                            offset: L,
                                            text: M
                                        })
                                    }!d && F && k.current && P.current && ju.mergeNodes(u, {
                                        at: k.current,
                                        hanging: !0,
                                        voids: D
                                    });
                                    var W = P.unref(),
                                        J = k.unref(),
                                        $ = t ? W || J : J || W;
                                    null == e.at && $ && ju.select(u, $)
                                }
                            }
                        }))
                    },
                    insertFragment(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                hanging: r = !1,
                                voids: n = !1
                            } = t, {
                                at: D = u.selection
                            } = t;
                            if (e.length && D) {
                                if (iu.isRange(D))
                                    if (r || (D = U.unhangRange(u, D)), iu.isCollapsed(D)) D = D.anchor;
                                    else {
                                        var [, o] = iu.edges(D);
                                        if (!n && U.void(u, {
                                                at: o
                                            })) return;
                                        var a = U.pointRef(u, o);
                                        ju.delete(u, {
                                            at: D
                                        }), D = a.unref()
                                    }
                                else tu.isPath(D) && (D = U.start(u, D));
                                if (n || !U.void(u, {
                                        at: D
                                    })) {
                                    var i = U.above(u, {
                                        at: D,
                                        match: e => U.isInline(u, e),
                                        mode: "highest",
                                        voids: n
                                    });
                                    if (i) {
                                        var [, s] = i;
                                        if (U.isEnd(u, D, s)) D = U.after(u, s);
                                        else if (U.isStart(u, D, s)) {
                                            D = U.before(u, s)
                                        }
                                    }
                                    var C = U.above(u, {
                                            match: e => U.isBlock(u, e),
                                            at: D,
                                            voids: n
                                        }),
                                        [, B] = C,
                                        l = U.isStart(u, D, B),
                                        c = U.isEnd(u, D, B),
                                        f = l && c,
                                        A = !l || l && c,
                                        h = !c,
                                        [, F] = X.first({
                                            children: e
                                        }, []),
                                        [, d] = X.last({
                                            children: e
                                        }, []),
                                        E = [],
                                        v = e => {
                                            var [t, r] = e;
                                            return !(0 === r.length) && (!!f || !(A && tu.isAncestor(r, F) && L.isElement(t) && !u.isVoid(t) && !u.isInline(t)) && !(h && tu.isAncestor(r, d) && L.isElement(t) && !u.isVoid(t) && !u.isInline(t)))
                                        };
                                    for (var p of X.nodes({
                                            children: e
                                        }, {
                                            pass: v
                                        })) v(p) && E.push(p);
                                    var g = [],
                                        m = [],
                                        y = [],
                                        w = !0,
                                        b = !1;
                                    for (var [O] of E) L.isElement(O) && !u.isInline(O) ? (w = !1, b = !0, m.push(O)) : w ? g.push(O) : y.push(O);
                                    var [x] = U.nodes(u, {
                                        at: D,
                                        match: e => fu.isText(e) || U.isInline(u, e),
                                        mode: "highest",
                                        voids: n
                                    }), [, P] = x, k = U.isStart(u, D, P), j = U.isEnd(u, D, P), N = U.pathRef(u, c ? tu.next(B) : B), _ = U.pathRef(u, j ? tu.next(P) : P), R = U.pathRef(u, B);
                                    ju.splitNodes(u, {
                                        at: D,
                                        match: e => b ? U.isBlock(u, e) : fu.isText(e) || U.isInline(u, e),
                                        mode: b ? "lowest" : "highest",
                                        voids: n
                                    });
                                    var T = U.pathRef(u, !k || k && j ? tu.next(P) : P);
                                    if (ju.insertNodes(u, g, {
                                            at: T.current,
                                            match: e => fu.isText(e) || U.isInline(u, e),
                                            mode: "highest",
                                            voids: n
                                        }), f && m.length && ju.delete(u, {
                                            at: R.unref(),
                                            voids: n
                                        }), ju.insertNodes(u, m, {
                                            at: N.current,
                                            match: e => U.isBlock(u, e),
                                            mode: "lowest",
                                            voids: n
                                        }), ju.insertNodes(u, y, {
                                            at: _.current,
                                            match: e => fu.isText(e) || U.isInline(u, e),
                                            mode: "highest",
                                            voids: n
                                        }), !t.at) {
                                        var S;
                                        S = y.length > 0 ? tu.previous(_.current) : m.length > 0 ? tu.previous(N.current) : tu.previous(T.current);
                                        var q = U.end(u, S);
                                        ju.select(u, q)
                                    }
                                    T.unref(), N.unref(), _.unref()
                                }
                            }
                        }))
                    },
                    insertText(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U.withoutNormalizing(u, (() => {
                            var {
                                voids: r = !1
                            } = t, {
                                at: n = u.selection
                            } = t;
                            if (n) {
                                if (tu.isPath(n) && (n = U.range(u, n)), iu.isRange(n))
                                    if (iu.isCollapsed(n)) n = n.anchor;
                                    else {
                                        var D = iu.end(n);
                                        if (!r && U.void(u, {
                                                at: D
                                            })) return;
                                        var o = U.pointRef(u, D);
                                        ju.delete(u, {
                                            at: n,
                                            voids: r
                                        }), n = o.unref(), ju.setSelection(u, {
                                            anchor: n,
                                            focus: n
                                        })
                                    }
                                if (r || !U.void(u, {
                                        at: n
                                    })) {
                                    var {
                                        path: a,
                                        offset: i
                                    } = n;
                                    e.length > 0 && u.apply({
                                        type: "insert_text",
                                        path: a,
                                        offset: i,
                                        text: e
                                    })
                                }
                            }
                        }))
                    }
                };

            function Pu(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function ku(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Pu(Object(t), !0).forEach((function(e) {
                        D(u, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : Pu(Object(t)).forEach((function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return u
            }
            var ju = ku(ku(ku(ku({}, {
                transform(u, e) {
                    u.children = (0, n.P2)(u.children);
                    var t = u.selection && (0, n.P2)(u.selection);
                    try {
                        t = ((u, e, t) => {
                            switch (t.type) {
                                case "insert_node":
                                    var {
                                        path: r,
                                        node: n
                                    } = t, D = X.parent(u, r), o = r[r.length - 1];
                                    if (o > D.children.length) throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
                                    if (D.children.splice(o, 0, n), e)
                                        for (var [a, i] of iu.points(e)) e[i] = Du.transform(a, t);
                                    break;
                                case "insert_text":
                                    var {
                                        path: s,
                                        offset: C,
                                        text: B
                                    } = t;
                                    if (0 === B.length) break;
                                    var l = X.leaf(u, s),
                                        c = l.text.slice(0, C),
                                        f = l.text.slice(C);
                                    if (l.text = c + B + f, e)
                                        for (var [A, h] of iu.points(e)) e[h] = Du.transform(A, t);
                                    break;
                                case "merge_node":
                                    var {
                                        path: F
                                    } = t, d = X.get(u, F), E = tu.previous(F), v = X.get(u, E), p = X.parent(u, F), g = F[F.length - 1];
                                    if (fu.isText(d) && fu.isText(v)) v.text += d.text;
                                    else {
                                        if (fu.isText(d) || fu.isText(v)) throw new Error('Cannot apply a "merge_node" operation at path ['.concat(F, "] to nodes of different interfaces: ").concat(d, " ").concat(v));
                                        v.children.push(...d.children)
                                    }
                                    if (p.children.splice(g, 1), e)
                                        for (var [m, y] of iu.points(e)) e[y] = Du.transform(m, t);
                                    break;
                                case "move_node":
                                    var {
                                        path: w,
                                        newPath: b
                                    } = t;
                                    if (tu.isAncestor(w, b)) throw new Error("Cannot move a path [".concat(w, "] to new path [").concat(b, "] because the destination is inside itself."));
                                    var O = X.get(u, w),
                                        x = X.parent(u, w),
                                        P = w[w.length - 1];
                                    x.children.splice(P, 1);
                                    var k = tu.transform(w, t),
                                        j = X.get(u, tu.parent(k)),
                                        N = k[k.length - 1];
                                    if (j.children.splice(N, 0, O), e)
                                        for (var [_, R] of iu.points(e)) e[R] = Du.transform(_, t);
                                    break;
                                case "remove_node":
                                    var {
                                        path: T
                                    } = t, S = T[T.length - 1];
                                    if (X.parent(u, T).children.splice(S, 1), e)
                                        for (var [q, I] of iu.points(e)) {
                                            var V = Du.transform(q, t);
                                            if (null != e && null != V) e[I] = V;
                                            else {
                                                var z = void 0,
                                                    L = void 0;
                                                for (var [M, W] of X.texts(u)) {
                                                    if (-1 !== tu.compare(W, T)) {
                                                        L = [M, W];
                                                        break
                                                    }
                                                    z = [M, W]
                                                }
                                                var J = !1;
                                                z && L && (J = tu.equals(L[1], T) ? !tu.hasPrevious(L[1]) : tu.common(z[1], T).length < tu.common(L[1], T).length), z && !J ? (q.path = z[1], q.offset = z[0].text.length) : L ? (q.path = L[1], q.offset = 0) : e = null
                                            }
                                        }
                                    break;
                                case "remove_text":
                                    var {
                                        path: $,
                                        offset: Z,
                                        text: U
                                    } = t;
                                    if (0 === U.length) break;
                                    var G = X.leaf(u, $),
                                        H = G.text.slice(0, Z),
                                        K = G.text.slice(Z + U.length);
                                    if (G.text = H + K, e)
                                        for (var [Q, Y] of iu.points(e)) e[Y] = Du.transform(Q, t);
                                    break;
                                case "set_node":
                                    var {
                                        path: uu,
                                        properties: eu,
                                        newProperties: ru
                                    } = t;
                                    if (0 === uu.length) throw new Error("Cannot set properties on the root node!");
                                    var nu = X.get(u, uu);
                                    for (var ou in ru) {
                                        if ("children" === ou || "text" === ou) throw new Error('Cannot set the "'.concat(ou, '" property of nodes!'));
                                        var au = ru[ou];
                                        null == au ? delete nu[ou] : nu[ou] = au
                                    }
                                    for (var su in eu) ru.hasOwnProperty(su) || delete nu[su];
                                    break;
                                case "set_selection":
                                    var {
                                        newProperties: Cu
                                    } = t;
                                    if (null == Cu) e = Cu;
                                    else {
                                        if (null == e) {
                                            if (!iu.isRange(Cu)) throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(JSON.stringify(Cu), " when there is no current selection."));
                                            e = hu({}, Cu)
                                        }
                                        for (var Bu in Cu) {
                                            var lu = Cu[Bu];
                                            if (null == lu) {
                                                if ("anchor" === Bu || "focus" === Bu) throw new Error('Cannot remove the "'.concat(Bu, '" selection property'));
                                                delete e[Bu]
                                            } else e[Bu] = lu
                                        }
                                    }
                                    break;
                                case "split_node":
                                    var {
                                        path: cu,
                                        position: Au,
                                        properties: Fu
                                    } = t;
                                    if (0 === cu.length) throw new Error('Cannot apply a "split_node" operation at path ['.concat(cu, "] because the root node cannot be split."));
                                    var du, Eu = X.get(u, cu),
                                        vu = X.parent(u, cu),
                                        pu = cu[cu.length - 1];
                                    if (fu.isText(Eu)) {
                                        var gu = Eu.text.slice(0, Au),
                                            mu = Eu.text.slice(Au);
                                        Eu.text = gu, du = hu(hu({}, Fu), {}, {
                                            text: mu
                                        })
                                    } else {
                                        var yu = Eu.children.slice(0, Au),
                                            wu = Eu.children.slice(Au);
                                        Eu.children = yu, du = hu(hu({}, Fu), {}, {
                                            children: wu
                                        })
                                    }
                                    if (vu.children.splice(pu + 1, 0, du), e)
                                        for (var [bu, Ou] of iu.points(e)) e[Ou] = Du.transform(bu, t)
                            }
                            return e
                        })(u, t, e)
                    } finally {
                        u.children = (0, n._x)(u.children), u.selection = t ? (0, n.mv)(t) ? (0, n._x)(t) : t : null
                    }
                }
            }), pu), Ou), xu)
        }
    }
]);