(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7311], {
        18103: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            const n = "abi/5.6.0"
        },
        64973: function(e, t, r) {
            "use strict";
            r.d(t, {
                R: function() {
                    return C
                },
                $: function() {
                    return N
                }
            });
            var n = r(75398),
                i = r(84427),
                o = r(57036),
                s = r(18103),
                a = r(61852),
                u = r(58194);
            class c extends a.XI {
                constructor(e) {
                    super("address", "address", e, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(e, t) {
                    try {
                        t = (0, u.getAddress)(t)
                    } catch (r) {
                        this._throwError(r.message, t)
                    }
                    return e.writeValue(t)
                }
                decode(e) {
                    return (0, u.getAddress)((0, n.hexZeroPad)(e.readValue().toHexString(), 20))
                }
            }
            class l extends a.XI {
                constructor(e) {
                    super(e.name, e.type, void 0, e.dynamic), this.coder = e
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(e, t) {
                    return this.coder.encode(e, t)
                }
                decode(e) {
                    return this.coder.decode(e)
                }
            }
            const h = new o.Logger(s.i);

            function f(e, t, r) {
                let n = null;
                if (Array.isArray(r)) n = r;
                else if (r && "object" === typeof r) {
                    let e = {};
                    n = t.map((t => {
                        const n = t.localName;
                        return n || h.throwError("cannot encode object for signature with missing names", o.Logger.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: t,
                            value: r
                        }), e[n] && h.throwError("cannot encode object for signature with duplicate names", o.Logger.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: t,
                            value: r
                        }), e[n] = !0, r[n]
                    }))
                } else h.throwArgumentError("invalid tuple value", "tuple", r);
                t.length !== n.length && h.throwArgumentError("types/value length mismatch", "tuple", r);
                let i = new a.QV(e.wordSize),
                    s = new a.QV(e.wordSize),
                    u = [];
                t.forEach(((e, t) => {
                    let r = n[t];
                    if (e.dynamic) {
                        let t = s.length;
                        e.encode(s, r);
                        let n = i.writeUpdatableValue();
                        u.push((e => {
                            n(e + t)
                        }))
                    } else e.encode(i, r)
                })), u.forEach((e => {
                    e(i.length)
                }));
                let c = e.appendWriter(i);
                return c += e.appendWriter(s), c
            }

            function d(e, t) {
                let r = [],
                    n = e.subReader(0);
                t.forEach((t => {
                    let i = null;
                    if (t.dynamic) {
                        let r = e.readValue(),
                            a = n.subReader(r.toNumber());
                        try {
                            i = t.decode(a)
                        } catch (s) {
                            if (s.code === o.Logger.errors.BUFFER_OVERRUN) throw s;
                            i = s, i.baseType = t.name, i.name = t.localName, i.type = t.type
                        }
                    } else try {
                        i = t.decode(e)
                    } catch (s) {
                        if (s.code === o.Logger.errors.BUFFER_OVERRUN) throw s;
                        i = s, i.baseType = t.name, i.name = t.localName, i.type = t.type
                    }
                    void 0 != i && r.push(i)
                }));
                const i = t.reduce(((e, t) => {
                    const r = t.localName;
                    return r && (e[r] || (e[r] = 0), e[r]++), e
                }), {});
                t.forEach(((e, t) => {
                    let n = e.localName;
                    if (!n || 1 !== i[n]) return;
                    if ("length" === n && (n = "_length"), null != r[n]) return;
                    const o = r[t];
                    o instanceof Error ? Object.defineProperty(r, n, {
                        enumerable: !0,
                        get: () => {
                            throw o
                        }
                    }) : r[n] = o
                }));
                for (let o = 0; o < r.length; o++) {
                    const e = r[o];
                    e instanceof Error && Object.defineProperty(r, o, {
                        enumerable: !0,
                        get: () => {
                            throw e
                        }
                    })
                }
                return Object.freeze(r)
            }
            class p extends a.XI {
                constructor(e, t, r) {
                    super("array", e.type + "[" + (t >= 0 ? t : "") + "]", r, -1 === t || e.dynamic), this.coder = e, this.length = t
                }
                defaultValue() {
                    const e = this.coder.defaultValue(),
                        t = [];
                    for (let r = 0; r < this.length; r++) t.push(e);
                    return t
                }
                encode(e, t) {
                    Array.isArray(t) || this._throwError("expected array value", t);
                    let r = this.length; - 1 === r && (r = t.length, e.writeValue(t.length)), h.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
                    let n = [];
                    for (let i = 0; i < t.length; i++) n.push(this.coder);
                    return f(e, n, t)
                }
                decode(e) {
                    let t = this.length; - 1 === t && (t = e.readValue().toNumber(), 32 * t > e._data.length && h.throwError("insufficient data length", o.Logger.errors.BUFFER_OVERRUN, {
                        length: e._data.length,
                        count: t
                    }));
                    let r = [];
                    for (let n = 0; n < t; n++) r.push(new l(this.coder));
                    return e.coerce(this.name, d(e, r))
                }
            }
            class m extends a.XI {
                constructor(e) {
                    super("bool", "bool", e, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(e, t) {
                    return e.writeValue(t ? 1 : 0)
                }
                decode(e) {
                    return e.coerce(this.type, !e.readValue().isZero())
                }
            }
            class g extends a.XI {
                constructor(e, t) {
                    super(e, e, t, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(e, t) {
                    t = (0, n.arrayify)(t);
                    let r = e.writeValue(t.length);
                    return r += e.writeBytes(t), r
                }
                decode(e) {
                    return e.readBytes(e.readValue().toNumber(), !0)
                }
            }
            class y extends g {
                constructor(e) {
                    super("bytes", e)
                }
                decode(e) {
                    return e.coerce(this.name, (0, n.hexlify)(super.decode(e)))
                }
            }
            class v extends a.XI {
                constructor(e, t) {
                    let r = "bytes" + String(e);
                    super(r, r, t, !1), this.size = e
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(e, t) {
                    let r = (0, n.arrayify)(t);
                    return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r)
                }
                decode(e) {
                    return e.coerce(this.name, (0, n.hexlify)(e.readBytes(this.size)))
                }
            }
            class b extends a.XI {
                constructor(e) {
                    super("null", "", e, !1)
                }
                defaultValue() {
                    return null
                }
                encode(e, t) {
                    return null != t && this._throwError("not null", t), e.writeBytes([])
                }
                decode(e) {
                    return e.readBytes(0), e.coerce(this.name, null)
                }
            }
            var w = r(10528),
                E = r(90711);
            class S extends a.XI {
                constructor(e, t, r) {
                    const n = (t ? "int" : "uint") + 8 * e;
                    super(n, n, r, !1), this.size = e, this.signed = t
                }
                defaultValue() {
                    return 0
                }
                encode(e, t) {
                    let r = w.O$.from(t),
                        n = E.Bz.mask(8 * e.wordSize);
                    if (this.signed) {
                        let e = n.mask(8 * this.size - 1);
                        (r.gt(e) || r.lt(e.add(E.fh).mul(E.tL))) && this._throwError("value out-of-bounds", t)
                    } else(r.lt(E._Y) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", t);
                    return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(r)
                }
                decode(e) {
                    let t = e.readValue().mask(8 * this.size);
                    return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t)
                }
            }
            var k = r(71320);
            class _ extends g {
                constructor(e) {
                    super("string", e)
                }
                defaultValue() {
                    return ""
                }
                encode(e, t) {
                    return super.encode(e, (0, k.Y0)(t))
                }
                decode(e) {
                    return (0, k.ZN)(super.decode(e))
                }
            }
            class P extends a.XI {
                constructor(e, t) {
                    let r = !1;
                    const n = [];
                    e.forEach((e => {
                        e.dynamic && (r = !0), n.push(e.type)
                    }));
                    super("tuple", "tuple(" + n.join(",") + ")", t, r), this.coders = e
                }
                defaultValue() {
                    const e = [];
                    this.coders.forEach((t => {
                        e.push(t.defaultValue())
                    }));
                    const t = this.coders.reduce(((e, t) => {
                        const r = t.localName;
                        return r && (e[r] || (e[r] = 0), e[r]++), e
                    }), {});
                    return this.coders.forEach(((r, n) => {
                        let i = r.localName;
                        i && 1 === t[i] && ("length" === i && (i = "_length"), null == e[i] && (e[i] = e[n]))
                    })), Object.freeze(e)
                }
                encode(e, t) {
                    return f(e, this.coders, t)
                }
                decode(e) {
                    return e.coerce(this.name, d(e, this.coders))
                }
            }
            var A = r(79155);
            const x = new o.Logger(s.i),
                O = new RegExp(/^bytes([0-9]*)$/),
                R = new RegExp(/^(u?int)([0-9]*)$/);
            class C {
                constructor(e) {
                    x.checkNew(new.target, C), (0, i.defineReadOnly)(this, "coerceFunc", e || null)
                }
                _getCoder(e) {
                    switch (e.baseType) {
                        case "address":
                            return new c(e.name);
                        case "bool":
                            return new m(e.name);
                        case "string":
                            return new _(e.name);
                        case "bytes":
                            return new y(e.name);
                        case "array":
                            return new p(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
                        case "tuple":
                            return new P((e.components || []).map((e => this._getCoder(e))), e.name);
                        case "":
                            return new b(e.name)
                    }
                    let t = e.type.match(R);
                    if (t) {
                        let r = parseInt(t[2] || "256");
                        return (0 === r || r > 256 || r % 8 !== 0) && x.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new S(r / 8, "int" === t[1], e.name)
                    }
                    if (t = e.type.match(O), t) {
                        let r = parseInt(t[1]);
                        return (0 === r || r > 32) && x.throwArgumentError("invalid bytes length", "param", e), new v(r, e.name)
                    }
                    return x.throwArgumentError("invalid type", "type", e.type)
                }
                _getWordSize() {
                    return 32
                }
                _getReader(e, t) {
                    return new a.Ej(e, this._getWordSize(), this.coerceFunc, t)
                }
                _getWriter() {
                    return new a.QV(this._getWordSize())
                }
                getDefaultValue(e) {
                    const t = e.map((e => this._getCoder(A._R.from(e))));
                    return new P(t, "_").defaultValue()
                }
                encode(e, t) {
                    e.length !== t.length && x.throwError("types/values length mismatch", o.Logger.errors.INVALID_ARGUMENT, {
                        count: {
                            types: e.length,
                            values: t.length
                        },
                        value: {
                            types: e,
                            values: t
                        }
                    });
                    const r = e.map((e => this._getCoder(A._R.from(e)))),
                        n = new P(r, "_"),
                        i = this._getWriter();
                    return n.encode(i, t), i.data
                }
                decode(e, t, r) {
                    const i = e.map((e => this._getCoder(A._R.from(e))));
                    return new P(i, "_").decode(this._getReader((0, n.arrayify)(t), r))
                }
            }
            const N = new C
        },
        61852: function(e, t, r) {
            "use strict";
            r.d(t, {
                BR: function() {
                    return c
                },
                Ej: function() {
                    return f
                },
                QV: function() {
                    return h
                },
                XI: function() {
                    return l
                }
            });
            var n = r(75398),
                i = r(10528),
                o = r(84427),
                s = r(57036),
                a = r(18103);
            const u = new s.Logger(a.i);

            function c(e) {
                const t = [],
                    r = function(e, n) {
                        if (Array.isArray(n))
                            for (let o in n) {
                                const s = e.slice();
                                s.push(o);
                                try {
                                    r(s, n[o])
                                } catch (i) {
                                    t.push({
                                        path: s,
                                        error: i
                                    })
                                }
                            }
                    };
                return r([], e), t
            }
            class l {
                constructor(e, t, r, n) {
                    this.name = e, this.type = t, this.localName = r, this.dynamic = n
                }
                _throwError(e, t) {
                    u.throwArgumentError(e, this.localName, t)
                }
            }
            class h {
                constructor(e) {
                    (0, o.defineReadOnly)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
                }
                get data() {
                    return (0, n.hexConcat)(this._data)
                }
                get length() {
                    return this._dataLength
                }
                _writeData(e) {
                    return this._data.push(e), this._dataLength += e.length, e.length
                }
                appendWriter(e) {
                    return this._writeData((0, n.concat)(e._data))
                }
                writeBytes(e) {
                    let t = (0, n.arrayify)(e);
                    const r = t.length % this.wordSize;
                    return r && (t = (0, n.concat)([t, this._padding.slice(r)])), this._writeData(t)
                }
                _getValue(e) {
                    let t = (0, n.arrayify)(i.O$.from(e));
                    return t.length > this.wordSize && u.throwError("value out-of-bounds", s.Logger.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: t.length
                    }), t.length % this.wordSize && (t = (0, n.concat)([this._padding.slice(t.length % this.wordSize), t])), t
                }
                writeValue(e) {
                    return this._writeData(this._getValue(e))
                }
                writeUpdatableValue() {
                    const e = this._data.length;
                    return this._data.push(this._padding), this._dataLength += this.wordSize, t => {
                        this._data[e] = this._getValue(t)
                    }
                }
            }
            class f {
                constructor(e, t, r, i) {
                    (0, o.defineReadOnly)(this, "_data", (0, n.arrayify)(e)), (0, o.defineReadOnly)(this, "wordSize", t || 32), (0, o.defineReadOnly)(this, "_coerceFunc", r), (0, o.defineReadOnly)(this, "allowLoose", i), this._offset = 0
                }
                get data() {
                    return (0, n.hexlify)(this._data)
                }
                get consumed() {
                    return this._offset
                }
                static coerce(e, t) {
                    let r = e.match("^u?int([0-9]+)$");
                    return r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t
                }
                coerce(e, t) {
                    return this._coerceFunc ? this._coerceFunc(e, t) : f.coerce(e, t)
                }
                _peekBytes(e, t, r) {
                    let n = Math.ceil(t / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? n = t : u.throwError("data out-of-bounds", s.Logger.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })), this._data.slice(this._offset, this._offset + n)
                }
                subReader(e) {
                    return new f(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
                }
                readBytes(e, t) {
                    let r = this._peekBytes(0, e, !!t);
                    return this._offset += r.length, r.slice(0, e)
                }
                readValue() {
                    return i.O$.from(this.readBytes(this.wordSize))
                }
            }
        },
        79155: function(e, t, r) {
            "use strict";
            r.d(t, {
                HY: function() {
                    return y
                },
                IC: function() {
                    return P
                },
                QV: function() {
                    return v
                },
                Xg: function() {
                    return S
                },
                YW: function() {
                    return k
                },
                _R: function() {
                    return m
                },
                pc: function() {
                    return d
                }
            });
            var n = r(10528),
                i = r(84427),
                o = r(57036),
                s = r(18103);
            const a = new o.Logger(s.i),
                u = {};
            let c = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                l = {
                    calldata: !0,
                    memory: !0
                };

            function h(e, t) {
                if ("bytes" === e || "string" === e) {
                    if (c[t]) return !0
                } else if ("address" === e) {
                    if ("payable" === t) return !0
                } else if ((e.indexOf("[") >= 0 || "tuple" === e) && l[t]) return !0;
                return (c[t] || "payable" === t) && a.throwArgumentError("invalid modifier", "name", t), !1
            }

            function f(e, t) {
                for (let r in t)(0, i.defineReadOnly)(e, r, t[r])
            }
            const d = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                p = new RegExp(/^(.*)\[([0-9]*)\]$/);
            class m {
                constructor(e, t) {
                    e !== u && a.throwError("use fromString", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new ParamType()"
                    }), f(this, t);
                    let r = this.type.match(p);
                    f(this, r ? {
                        arrayLength: parseInt(r[2] || "-1"),
                        arrayChildren: m.fromObject({
                            type: r[1],
                            components: this.components
                        }),
                        baseType: "array"
                    } : {
                        arrayLength: null,
                        arrayChildren: null,
                        baseType: null != this.components ? "tuple" : this.type
                    }), this._isParamType = !0, Object.freeze(this)
                }
                format(e) {
                    if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) {
                        let t = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" === typeof this.indexed && (t.indexed = this.indexed), this.components && (t.components = this.components.map((t => JSON.parse(t.format(e))))), JSON.stringify(t)
                    }
                    let t = "";
                    return "array" === this.baseType ? (t += this.arrayChildren.format(e), t += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== d.sighash && (t += this.type), t += "(" + this.components.map((t => t.format(e))).join(e === d.full ? ", " : ",") + ")") : t += this.type, e !== d.sighash && (!0 === this.indexed && (t += " indexed"), e === d.full && this.name && (t += " " + this.name)), t
                }
                static from(e, t) {
                    return "string" === typeof e ? m.fromString(e, t) : m.fromObject(e)
                }
                static fromObject(e) {
                    return m.isParamType(e) ? e : new m(u, {
                        name: e.name || null,
                        type: A(e.type),
                        indexed: null == e.indexed ? null : !!e.indexed,
                        components: e.components ? e.components.map(m.fromObject) : null
                    })
                }
                static fromString(e, t) {
                    return r = function(e, t) {
                        let r = e;

                        function n(t) {
                            a.throwArgumentError(`unexpected character at position ${t}`, "param", e)
                        }

                        function i(e) {
                            let r = {
                                type: "",
                                name: "",
                                parent: e,
                                state: {
                                    allowType: !0
                                }
                            };
                            return t && (r.indexed = !1), r
                        }
                        e = e.replace(/\s/g, " ");
                        let o = {
                                type: "",
                                name: "",
                                state: {
                                    allowType: !0
                                }
                            },
                            s = o;
                        for (let a = 0; a < e.length; a++) {
                            let r = e[a];
                            switch (r) {
                                case "(":
                                    s.state.allowType && "" === s.type ? s.type = "tuple" : s.state.allowParams || n(a), s.state.allowType = !1, s.type = A(s.type), s.components = [i(s)], s = s.components[0];
                                    break;
                                case ")":
                                    delete s.state, "indexed" === s.name && (t || n(a), s.indexed = !0, s.name = ""), h(s.type, s.name) && (s.name = ""), s.type = A(s.type);
                                    let e = s;
                                    s = s.parent, s || n(a), delete e.parent, s.state.allowParams = !1, s.state.allowName = !0, s.state.allowArray = !0;
                                    break;
                                case ",":
                                    delete s.state, "indexed" === s.name && (t || n(a), s.indexed = !0, s.name = ""), h(s.type, s.name) && (s.name = ""), s.type = A(s.type);
                                    let o = i(s.parent);
                                    s.parent.components.push(o), delete s.parent, s = o;
                                    break;
                                case " ":
                                    s.state.allowType && "" !== s.type && (s.type = A(s.type), delete s.state.allowType, s.state.allowName = !0, s.state.allowParams = !0), s.state.allowName && "" !== s.name && ("indexed" === s.name ? (t || n(a), s.indexed && n(a), s.indexed = !0, s.name = "") : h(s.type, s.name) ? s.name = "" : s.state.allowName = !1);
                                    break;
                                case "[":
                                    s.state.allowArray || n(a), s.type += r, s.state.allowArray = !1, s.state.allowName = !1, s.state.readArray = !0;
                                    break;
                                case "]":
                                    s.state.readArray || n(a), s.type += r, s.state.readArray = !1, s.state.allowArray = !0, s.state.allowName = !0;
                                    break;
                                default:
                                    s.state.allowType ? (s.type += r, s.state.allowParams = !0, s.state.allowArray = !0) : s.state.allowName ? (s.name += r, delete s.state.allowArray) : s.state.readArray ? s.type += r : n(a)
                            }
                        }
                        return s.parent && a.throwArgumentError("unexpected eof", "param", e), delete o.state, "indexed" === s.name ? (t || n(r.length - 7), s.indexed && n(r.length - 7), s.indexed = !0, s.name = "") : h(s.type, s.name) && (s.name = ""), o.type = A(o.type), o
                    }(e, !!t), m.fromObject({
                        name: r.name,
                        type: r.type,
                        indexed: r.indexed,
                        components: r.components
                    });
                    var r
                }
                static isParamType(e) {
                    return !(null == e || !e._isParamType)
                }
            }

            function g(e, t) {
                return function(e) {
                    e = e.trim();
                    let t = [],
                        r = "",
                        n = 0;
                    for (let i = 0; i < e.length; i++) {
                        let o = e[i];
                        "," === o && 0 === n ? (t.push(r), r = "") : (r += o, "(" === o ? n++ : ")" === o && (n--, -1 === n && a.throwArgumentError("unbalanced parenthesis", "value", e)))
                    }
                    r && t.push(r);
                    return t
                }(e).map((e => m.fromString(e, t)))
            }
            class y {
                constructor(e, t) {
                    e !== u && a.throwError("use a static from method", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new Fragment()"
                    }), f(this, t), this._isFragment = !0, Object.freeze(this)
                }
                static from(e) {
                    return y.isFragment(e) ? e : "string" === typeof e ? y.fromString(e) : y.fromObject(e)
                }
                static fromObject(e) {
                    if (y.isFragment(e)) return e;
                    switch (e.type) {
                        case "function":
                            return k.fromObject(e);
                        case "event":
                            return v.fromObject(e);
                        case "constructor":
                            return S.fromObject(e);
                        case "error":
                            return P.fromObject(e);
                        case "fallback":
                        case "receive":
                            return null
                    }
                    return a.throwArgumentError("invalid fragment object", "value", e)
                }
                static fromString(e) {
                    return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? v.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? k.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? S.fromString(e.trim()) : "error" === e.split(" ")[0] ? P.fromString(e.substring(5).trim()) : a.throwArgumentError("unsupported fragment", "value", e)
                }
                static isFragment(e) {
                    return !(!e || !e._isFragment)
                }
            }
            class v extends y {
                format(e) {
                    if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map((t => JSON.parse(t.format(e))))
                    });
                    let t = "";
                    return e !== d.sighash && (t += "event "), t += this.name + "(" + this.inputs.map((t => t.format(e))).join(e === d.full ? ", " : ",") + ") ", e !== d.sighash && this.anonymous && (t += "anonymous "), t.trim()
                }
                static from(e) {
                    return "string" === typeof e ? v.fromString(e) : v.fromObject(e)
                }
                static fromObject(e) {
                    if (v.isEventFragment(e)) return e;
                    "event" !== e.type && a.throwArgumentError("invalid event object", "value", e);
                    const t = {
                        name: O(e.name),
                        anonymous: e.anonymous,
                        inputs: e.inputs ? e.inputs.map(m.fromObject) : [],
                        type: "event"
                    };
                    return new v(u, t)
                }
                static fromString(e) {
                    let t = e.match(R);
                    t || a.throwArgumentError("invalid event string", "value", e);
                    let r = !1;
                    return t[3].split(" ").forEach((e => {
                        switch (e.trim()) {
                            case "anonymous":
                                r = !0;
                                break;
                            case "":
                                break;
                            default:
                                a.warn("unknown modifier: " + e)
                        }
                    })), v.fromObject({
                        name: t[1].trim(),
                        anonymous: r,
                        inputs: g(t[2], !0),
                        type: "event"
                    })
                }
                static isEventFragment(e) {
                    return e && e._isFragment && "event" === e.type
                }
            }

            function b(e, t) {
                t.gas = null;
                let r = e.split("@");
                return 1 !== r.length ? (r.length > 2 && a.throwArgumentError("invalid human-readable ABI signature", "value", e), r[1].match(/^[0-9]+$/) || a.throwArgumentError("invalid human-readable ABI signature gas", "value", e), t.gas = n.O$.from(r[1]), r[0]) : e
            }

            function w(e, t) {
                t.constant = !1, t.payable = !1, t.stateMutability = "nonpayable", e.split(" ").forEach((e => {
                    switch (e.trim()) {
                        case "constant":
                            t.constant = !0;
                            break;
                        case "payable":
                            t.payable = !0, t.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            t.payable = !1, t.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            t.constant = !0, t.stateMutability = "pure";
                            break;
                        case "view":
                            t.constant = !0, t.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + e)
                    }
                }))
            }

            function E(e) {
                let t = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != e.stateMutability ? (t.stateMutability = e.stateMutability, t.constant = "view" === t.stateMutability || "pure" === t.stateMutability, null != e.constant && !!e.constant !== t.constant && a.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e), t.payable = "payable" === t.stateMutability, null != e.payable && !!e.payable !== t.payable && a.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e)) : null != e.payable ? (t.payable = !!e.payable, null != e.constant || t.payable || "constructor" === e.type || a.throwArgumentError("unable to determine stateMutability", "value", e), t.constant = !!e.constant, t.constant ? t.stateMutability = "view" : t.stateMutability = t.payable ? "payable" : "nonpayable", t.payable && t.constant && a.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (t.constant = !!e.constant, t.payable = !t.constant, t.stateMutability = t.constant ? "view" : "payable") : "constructor" !== e.type && a.throwArgumentError("unable to determine stateMutability", "value", e), t
            }
            class S extends y {
                format(e) {
                    if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
                        type: "constructor",
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map((t => JSON.parse(t.format(e))))
                    });
                    e === d.sighash && a.throwError("cannot format a constructor for sighash", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    let t = "constructor(" + this.inputs.map((t => t.format(e))).join(e === d.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (t += this.stateMutability + " "), t.trim()
                }
                static from(e) {
                    return "string" === typeof e ? S.fromString(e) : S.fromObject(e)
                }
                static fromObject(e) {
                    if (S.isConstructorFragment(e)) return e;
                    "constructor" !== e.type && a.throwArgumentError("invalid constructor object", "value", e);
                    let t = E(e);
                    t.constant && a.throwArgumentError("constructor cannot be constant", "value", e);
                    const r = {
                        name: null,
                        type: e.type,
                        inputs: e.inputs ? e.inputs.map(m.fromObject) : [],
                        payable: t.payable,
                        stateMutability: t.stateMutability,
                        gas: e.gas ? n.O$.from(e.gas) : null
                    };
                    return new S(u, r)
                }
                static fromString(e) {
                    let t = {
                            type: "constructor"
                        },
                        r = (e = b(e, t)).match(R);
                    return r && "constructor" === r[1].trim() || a.throwArgumentError("invalid constructor string", "value", e), t.inputs = g(r[2].trim(), !1), w(r[3].trim(), t), S.fromObject(t)
                }
                static isConstructorFragment(e) {
                    return e && e._isFragment && "constructor" === e.type
                }
            }
            class k extends S {
                format(e) {
                    if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map((t => JSON.parse(t.format(e)))),
                        outputs: this.outputs.map((t => JSON.parse(t.format(e))))
                    });
                    let t = "";
                    return e !== d.sighash && (t += "function "), t += this.name + "(" + this.inputs.map((t => t.format(e))).join(e === d.full ? ", " : ",") + ") ", e !== d.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map((t => t.format(e))).join(", ") + ") "), null != this.gas && (t += "@" + this.gas.toString() + " ")), t.trim()
                }
                static from(e) {
                    return "string" === typeof e ? k.fromString(e) : k.fromObject(e)
                }
                static fromObject(e) {
                    if (k.isFunctionFragment(e)) return e;
                    "function" !== e.type && a.throwArgumentError("invalid function object", "value", e);
                    let t = E(e);
                    const r = {
                        type: e.type,
                        name: O(e.name),
                        constant: t.constant,
                        inputs: e.inputs ? e.inputs.map(m.fromObject) : [],
                        outputs: e.outputs ? e.outputs.map(m.fromObject) : [],
                        payable: t.payable,
                        stateMutability: t.stateMutability,
                        gas: e.gas ? n.O$.from(e.gas) : null
                    };
                    return new k(u, r)
                }
                static fromString(e) {
                    let t = {
                            type: "function"
                        },
                        r = (e = b(e, t)).split(" returns ");
                    r.length > 2 && a.throwArgumentError("invalid function string", "value", e);
                    let n = r[0].match(R);
                    if (n || a.throwArgumentError("invalid function signature", "value", e), t.name = n[1].trim(), t.name && O(t.name), t.inputs = g(n[2], !1), w(n[3].trim(), t), r.length > 1) {
                        let n = r[1].match(R);
                        "" == n[1].trim() && "" == n[3].trim() || a.throwArgumentError("unexpected tokens", "value", e), t.outputs = g(n[2], !1)
                    } else t.outputs = [];
                    return k.fromObject(t)
                }
                static isFunctionFragment(e) {
                    return e && e._isFragment && "function" === e.type
                }
            }

            function _(e) {
                const t = e.format();
                return "Error(string)" !== t && "Panic(uint256)" !== t || a.throwArgumentError(`cannot specify user defined ${t} error`, "fragment", e), e
            }
            class P extends y {
                format(e) {
                    if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map((t => JSON.parse(t.format(e))))
                    });
                    let t = "";
                    return e !== d.sighash && (t += "error "), t += this.name + "(" + this.inputs.map((t => t.format(e))).join(e === d.full ? ", " : ",") + ") ", t.trim()
                }
                static from(e) {
                    return "string" === typeof e ? P.fromString(e) : P.fromObject(e)
                }
                static fromObject(e) {
                    if (P.isErrorFragment(e)) return e;
                    "error" !== e.type && a.throwArgumentError("invalid error object", "value", e);
                    const t = {
                        type: e.type,
                        name: O(e.name),
                        inputs: e.inputs ? e.inputs.map(m.fromObject) : []
                    };
                    return _(new P(u, t))
                }
                static fromString(e) {
                    let t = {
                            type: "error"
                        },
                        r = e.match(R);
                    return r || a.throwArgumentError("invalid error signature", "value", e), t.name = r[1].trim(), t.name && O(t.name), t.inputs = g(r[2], !1), _(P.fromObject(t))
                }
                static isErrorFragment(e) {
                    return e && e._isFragment && "error" === e.type
                }
            }

            function A(e) {
                return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
            }
            const x = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

            function O(e) {
                return e && e.match(x) || a.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
            }
            const R = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")
        },
        65575: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                AbiCoder: function() {
                    return i.R
                },
                ConstructorFragment: function() {
                    return n.Xg
                },
                ErrorFragment: function() {
                    return n.IC
                },
                EventFragment: function() {
                    return n.QV
                },
                FormatTypes: function() {
                    return n.pc
                },
                Fragment: function() {
                    return n.HY
                },
                FunctionFragment: function() {
                    return n.YW
                },
                Indexed: function() {
                    return o.Hk
                },
                Interface: function() {
                    return o.vU
                },
                LogDescription: function() {
                    return o.CC
                },
                ParamType: function() {
                    return n._R
                },
                TransactionDescription: function() {
                    return o.vk
                },
                checkResultErrors: function() {
                    return s.BR
                },
                defaultAbiCoder: function() {
                    return i.$
                }
            });
            var n = r(79155),
                i = r(64973),
                o = r(99268),
                s = r(61852)
        },
        99268: function(e, t, r) {
            "use strict";
            r.d(t, {
                CC: function() {
                    return p
                },
                Hk: function() {
                    return y
                },
                vU: function() {
                    return w
                },
                vk: function() {
                    return m
                }
            });
            var n = r(58194),
                i = r(10528),
                o = r(75398),
                s = r(32235),
                a = r(59256),
                u = r(84427),
                c = r(64973),
                l = r(79155),
                h = r(57036),
                f = r(18103);
            const d = new h.Logger(f.i);
            class p extends u.Description {}
            class m extends u.Description {}
            class g extends u.Description {}
            class y extends u.Description {
                static isIndexed(e) {
                    return !(!e || !e._isIndexed)
                }
            }
            const v = {
                "0x08c379a0": {
                    signature: "Error(string)",
                    name: "Error",
                    inputs: ["string"],
                    reason: !0
                },
                "0x4e487b71": {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    inputs: ["uint256"]
                }
            };

            function b(e, t) {
                const r = new Error(`deferred error during ABI decoding triggered accessing ${e}`);
                return r.error = t, r
            }
            class w {
                constructor(e) {
                    d.checkNew(new.target, w);
                    let t = [];
                    t = "string" === typeof e ? JSON.parse(e) : e, (0, u.defineReadOnly)(this, "fragments", t.map((e => l.HY.from(e))).filter((e => null != e))), (0, u.defineReadOnly)(this, "_abiCoder", (0, u.getStatic)(new.target, "getAbiCoder")()), (0, u.defineReadOnly)(this, "functions", {}), (0, u.defineReadOnly)(this, "errors", {}), (0, u.defineReadOnly)(this, "events", {}), (0, u.defineReadOnly)(this, "structs", {}), this.fragments.forEach((e => {
                        let t = null;
                        switch (e.type) {
                            case "constructor":
                                return this.deploy ? void d.warn("duplicate definition - constructor") : void(0, u.defineReadOnly)(this, "deploy", e);
                            case "function":
                                t = this.functions;
                                break;
                            case "event":
                                t = this.events;
                                break;
                            case "error":
                                t = this.errors;
                                break;
                            default:
                                return
                        }
                        let r = e.format();
                        t[r] ? d.warn("duplicate definition - " + r) : t[r] = e
                    })), this.deploy || (0, u.defineReadOnly)(this, "deploy", l.Xg.from({
                        payable: !1,
                        type: "constructor"
                    })), (0, u.defineReadOnly)(this, "_isInterface", !0)
                }
                format(e) {
                    e || (e = l.pc.full), e === l.pc.sighash && d.throwArgumentError("interface does not support formatting sighash", "format", e);
                    const t = this.fragments.map((t => t.format(e)));
                    return e === l.pc.json ? JSON.stringify(t.map((e => JSON.parse(e)))) : t
                }
                static getAbiCoder() {
                    return c.$
                }
                static getAddress(e) {
                    return (0, n.getAddress)(e)
                }
                static getSighash(e) {
                    return (0, o.hexDataSlice)((0, s.id)(e.format()), 0, 4)
                }
                static getEventTopic(e) {
                    return (0, s.id)(e.format())
                }
                getFunction(e) {
                    if ((0, o.isHexString)(e)) {
                        for (const t in this.functions)
                            if (e === this.getSighash(t)) return this.functions[t];
                        d.throwArgumentError("no matching function", "sighash", e)
                    }
                    if (-1 === e.indexOf("(")) {
                        const t = e.trim(),
                            r = Object.keys(this.functions).filter((e => e.split("(")[0] === t));
                        return 0 === r.length ? d.throwArgumentError("no matching function", "name", t) : r.length > 1 && d.throwArgumentError("multiple matching functions", "name", t), this.functions[r[0]]
                    }
                    const t = this.functions[l.YW.fromString(e).format()];
                    return t || d.throwArgumentError("no matching function", "signature", e), t
                }
                getEvent(e) {
                    if ((0, o.isHexString)(e)) {
                        const t = e.toLowerCase();
                        for (const e in this.events)
                            if (t === this.getEventTopic(e)) return this.events[e];
                        d.throwArgumentError("no matching event", "topichash", t)
                    }
                    if (-1 === e.indexOf("(")) {
                        const t = e.trim(),
                            r = Object.keys(this.events).filter((e => e.split("(")[0] === t));
                        return 0 === r.length ? d.throwArgumentError("no matching event", "name", t) : r.length > 1 && d.throwArgumentError("multiple matching events", "name", t), this.events[r[0]]
                    }
                    const t = this.events[l.QV.fromString(e).format()];
                    return t || d.throwArgumentError("no matching event", "signature", e), t
                }
                getError(e) {
                    if ((0, o.isHexString)(e)) {
                        const t = (0, u.getStatic)(this.constructor, "getSighash");
                        for (const r in this.errors) {
                            if (e === t(this.errors[r])) return this.errors[r]
                        }
                        d.throwArgumentError("no matching error", "sighash", e)
                    }
                    if (-1 === e.indexOf("(")) {
                        const t = e.trim(),
                            r = Object.keys(this.errors).filter((e => e.split("(")[0] === t));
                        return 0 === r.length ? d.throwArgumentError("no matching error", "name", t) : r.length > 1 && d.throwArgumentError("multiple matching errors", "name", t), this.errors[r[0]]
                    }
                    const t = this.errors[l.YW.fromString(e).format()];
                    return t || d.throwArgumentError("no matching error", "signature", e), t
                }
                getSighash(e) {
                    if ("string" === typeof e) try {
                        e = this.getFunction(e)
                    } catch (t) {
                        try {
                            e = this.getError(e)
                        } catch (r) {
                            throw t
                        }
                    }
                    return (0, u.getStatic)(this.constructor, "getSighash")(e)
                }
                getEventTopic(e) {
                    return "string" === typeof e && (e = this.getEvent(e)), (0, u.getStatic)(this.constructor, "getEventTopic")(e)
                }
                _decodeParams(e, t) {
                    return this._abiCoder.decode(e, t)
                }
                _encodeParams(e, t) {
                    return this._abiCoder.encode(e, t)
                }
                encodeDeploy(e) {
                    return this._encodeParams(this.deploy.inputs, e || [])
                }
                decodeErrorResult(e, t) {
                    "string" === typeof e && (e = this.getError(e));
                    const r = (0, o.arrayify)(t);
                    return (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) && d.throwArgumentError(`data signature does not match error ${e.name}.`, "data", (0, o.hexlify)(r)), this._decodeParams(e.inputs, r.slice(4))
                }
                encodeErrorResult(e, t) {
                    return "string" === typeof e && (e = this.getError(e)), (0, o.hexlify)((0, o.concat)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
                }
                decodeFunctionData(e, t) {
                    "string" === typeof e && (e = this.getFunction(e));
                    const r = (0, o.arrayify)(t);
                    return (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) && d.throwArgumentError(`data signature does not match function ${e.name}.`, "data", (0, o.hexlify)(r)), this._decodeParams(e.inputs, r.slice(4))
                }
                encodeFunctionData(e, t) {
                    return "string" === typeof e && (e = this.getFunction(e)), (0, o.hexlify)((0, o.concat)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
                }
                decodeFunctionResult(e, t) {
                    "string" === typeof e && (e = this.getFunction(e));
                    let r = (0, o.arrayify)(t),
                        n = null,
                        i = null,
                        s = null,
                        a = null;
                    switch (r.length % this._abiCoder._getWordSize()) {
                        case 0:
                            try {
                                return this._abiCoder.decode(e.outputs, r)
                            } catch (u) {}
                            break;
                        case 4:
                            {
                                const e = (0, o.hexlify)(r.slice(0, 4)),
                                    t = v[e];
                                if (t) i = this._abiCoder.decode(t.inputs, r.slice(4)),
                                s = t.name,
                                a = t.signature,
                                t.reason && (n = i[0]);
                                else try {
                                    const t = this.getError(e);
                                    i = this._abiCoder.decode(t.inputs, r.slice(4)), s = t.name, a = t.format()
                                } catch (u) {}
                                break
                            }
                    }
                    return d.throwError("call revert exception", h.Logger.errors.CALL_EXCEPTION, {
                        method: e.format(),
                        errorArgs: i,
                        errorName: s,
                        errorSignature: a,
                        reason: n
                    })
                }
                encodeFunctionResult(e, t) {
                    return "string" === typeof e && (e = this.getFunction(e)), (0, o.hexlify)(this._abiCoder.encode(e.outputs, t || []))
                }
                encodeFilterTopics(e, t) {
                    "string" === typeof e && (e = this.getEvent(e)), t.length > e.inputs.length && d.throwError("too many arguments for " + e.format(), h.Logger.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: t
                    });
                    let r = [];
                    e.anonymous || r.push(this.getEventTopic(e));
                    const n = (e, t) => "string" === e.type ? (0, s.id)(t) : "bytes" === e.type ? (0, a.keccak256)((0, o.hexlify)(t)) : ("address" === e.type && this._abiCoder.encode(["address"], [t]), (0, o.hexZeroPad)((0, o.hexlify)(t), 32));
                    for (t.forEach(((t, i) => {
                            let o = e.inputs[i];
                            o.indexed ? null == t ? r.push(null) : "array" === o.baseType || "tuple" === o.baseType ? d.throwArgumentError("filtering with tuples or arrays not supported", "contract." + o.name, t) : Array.isArray(t) ? r.push(t.map((e => n(o, e)))) : r.push(n(o, t)) : null != t && d.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + o.name, t)
                        })); r.length && null === r[r.length - 1];) r.pop();
                    return r
                }
                encodeEventLog(e, t) {
                    "string" === typeof e && (e = this.getEvent(e));
                    const r = [],
                        n = [],
                        i = [];
                    return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && d.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach(((e, o) => {
                        const u = t[o];
                        if (e.indexed)
                            if ("string" === e.type) r.push((0, s.id)(u));
                            else if ("bytes" === e.type) r.push((0, a.keccak256)(u));
                        else {
                            if ("tuple" === e.baseType || "array" === e.baseType) throw new Error("not implemented");
                            r.push(this._abiCoder.encode([e.type], [u]))
                        } else n.push(e), i.push(u)
                    })), {
                        data: this._abiCoder.encode(n, i),
                        topics: r
                    }
                }
                decodeEventLog(e, t, r) {
                    if ("string" === typeof e && (e = this.getEvent(e)), null != r && !e.anonymous) {
                        let t = this.getEventTopic(e);
                        (0, o.isHexString)(r[0], 32) && r[0].toLowerCase() === t || d.throwError("fragment/topic mismatch", h.Logger.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: t,
                            value: r[0]
                        }), r = r.slice(1)
                    }
                    let n = [],
                        i = [],
                        s = [];
                    e.inputs.forEach(((e, t) => {
                        e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (n.push(l._R.fromObject({
                            type: "bytes32",
                            name: e.name
                        })), s.push(!0)) : (n.push(e), s.push(!1)) : (i.push(e), s.push(!1))
                    }));
                    let a = null != r ? this._abiCoder.decode(n, (0, o.concat)(r)) : null,
                        u = this._abiCoder.decode(i, t, !0),
                        c = [],
                        f = 0,
                        p = 0;
                    e.inputs.forEach(((e, t) => {
                        if (e.indexed)
                            if (null == a) c[t] = new y({
                                _isIndexed: !0,
                                hash: null
                            });
                            else if (s[t]) c[t] = new y({
                            _isIndexed: !0,
                            hash: a[p++]
                        });
                        else try {
                            c[t] = a[p++]
                        } catch (r) {
                            c[t] = r
                        } else try {
                            c[t] = u[f++]
                        } catch (r) {
                            c[t] = r
                        }
                        if (e.name && null == c[e.name]) {
                            const r = c[t];
                            r instanceof Error ? Object.defineProperty(c, e.name, {
                                enumerable: !0,
                                get: () => {
                                    throw b(`property ${JSON.stringify(e.name)}`, r)
                                }
                            }) : c[e.name] = r
                        }
                    }));
                    for (let o = 0; o < c.length; o++) {
                        const e = c[o];
                        e instanceof Error && Object.defineProperty(c, o, {
                            enumerable: !0,
                            get: () => {
                                throw b(`index ${o}`, e)
                            }
                        })
                    }
                    return Object.freeze(c)
                }
                parseTransaction(e) {
                    let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
                    return t ? new m({
                        args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)),
                        functionFragment: t,
                        name: t.name,
                        signature: t.format(),
                        sighash: this.getSighash(t),
                        value: i.O$.from(e.value || "0")
                    }) : null
                }
                parseLog(e) {
                    let t = this.getEvent(e.topics[0]);
                    return !t || t.anonymous ? null : new p({
                        eventFragment: t,
                        name: t.name,
                        signature: t.format(),
                        topic: this.getEventTopic(t),
                        args: this.decodeEventLog(t, e.data, e.topics)
                    })
                }
                parseError(e) {
                    const t = (0, o.hexlify)(e);
                    let r = this.getError(t.substring(0, 10).toLowerCase());
                    return r ? new g({
                        args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
                        errorFragment: r,
                        name: r.name,
                        signature: r.format(),
                        sighash: this.getSighash(r)
                    }) : null
                }
                static isInterface(e) {
                    return !(!e || !e._isInterface)
                }
            }
        },
        35239: function(e, t, r) {
            "use strict";
            r.d(t, {
                Sg: function() {
                    return u
                },
                zt: function() {
                    return c
                }
            });
            var n = r(10528),
                i = r(84427),
                o = r(57036);
            var s = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const a = new o.Logger("abstract-provider/5.6.0");
            class u extends i.Description {
                static isForkEvent(e) {
                    return !(!e || !e._isForkEvent)
                }
            }
            class c {
                constructor() {
                    a.checkAbstract(new.target, c), (0, i.defineReadOnly)(this, "_isProvider", !0)
                }
                getFeeData() {
                    return s(this, void 0, void 0, (function*() {
                        const {
                            block: e,
                            gasPrice: t
                        } = yield(0, i.resolveProperties)({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch((e => null))
                        });
                        let r = null,
                            o = null;
                        return e && e.baseFeePerGas && (o = n.O$.from("1500000000"), r = e.baseFeePerGas.mul(2).add(o)), {
                            maxFeePerGas: r,
                            maxPriorityFeePerGas: o,
                            gasPrice: t
                        }
                    }))
                }
                addListener(e, t) {
                    return this.on(e, t)
                }
                removeListener(e, t) {
                    return this.off(e, t)
                }
                static isProvider(e) {
                    return !(!e || !e._isProvider)
                }
            }
        },
        28612: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Signer: function() {
                    return c
                },
                VoidSigner: function() {
                    return l
                }
            });
            var n = r(84427),
                i = r(57036);
            var o = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const s = new i.Logger("abstract-signer/5.6.0"),
                a = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                u = [i.Logger.errors.INSUFFICIENT_FUNDS, i.Logger.errors.NONCE_EXPIRED, i.Logger.errors.REPLACEMENT_UNDERPRICED];
            class c {
                constructor() {
                    s.checkAbstract(new.target, c), (0, n.defineReadOnly)(this, "_isSigner", !0)
                }
                getBalance(e) {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
                    }))
                }
                getTransactionCount(e) {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
                    }))
                }
                estimateGas(e) {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("estimateGas");
                        const t = yield(0, n.resolveProperties)(this.checkTransaction(e));
                        return yield this.provider.estimateGas(t)
                    }))
                }
                call(e, t) {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("call");
                        const r = yield(0, n.resolveProperties)(this.checkTransaction(e));
                        return yield this.provider.call(r, t)
                    }))
                }
                sendTransaction(e) {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("sendTransaction");
                        const t = yield this.populateTransaction(e), r = yield this.signTransaction(t);
                        return yield this.provider.sendTransaction(r)
                    }))
                }
                getChainId() {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("getChainId");
                        return (yield this.provider.getNetwork()).chainId
                    }))
                }
                getGasPrice() {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    }))
                }
                getFeeData() {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    }))
                }
                resolveName(e) {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
                    }))
                }
                checkTransaction(e) {
                    for (const r in e) - 1 === a.indexOf(r) && s.throwArgumentError("invalid transaction key: " + r, "transaction", e);
                    const t = (0, n.shallowCopy)(e);
                    return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then((t => (t[0].toLowerCase() !== t[1].toLowerCase() && s.throwArgumentError("from address mismatch", "transaction", e), t[0]))), t
                }
                populateTransaction(e) {
                    return o(this, void 0, void 0, (function*() {
                        const t = yield(0, n.resolveProperties)(this.checkTransaction(e));
                        null != t.to && (t.to = Promise.resolve(t.to).then((e => o(this, void 0, void 0, (function*() {
                            if (null == e) return null;
                            const t = yield this.resolveName(e);
                            return null == t && s.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
                        })))), t.to.catch((e => {})));
                        const r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
                        if (null == t.gasPrice || 2 !== t.type && !r ? 0 !== t.type && 1 !== t.type || !r || s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : s.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e), 2 !== t.type && null != t.type || null == t.maxFeePerGas || null == t.maxPriorityFeePerGas)
                            if (0 === t.type || 1 === t.type) null == t.gasPrice && (t.gasPrice = this.getGasPrice());
                            else {
                                const e = yield this.getFeeData();
                                if (null == t.type)
                                    if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                                        if (t.type = 2, null != t.gasPrice) {
                                            const e = t.gasPrice;
                                            delete t.gasPrice, t.maxFeePerGas = e, t.maxPriorityFeePerGas = e
                                        } else null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                                else null != e.gasPrice ? (r && s.throwError("network does not support EIP-1559", i.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == t.gasPrice && (t.gasPrice = e.gasPrice), t.type = 0) : s.throwError("failed to get consistent fee data", i.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                });
                                else 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
                            }
                        else t.type = 2;
                        return null == t.nonce && (t.nonce = this.getTransactionCount("pending")), null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch((e => {
                            if (u.indexOf(e.code) >= 0) throw e;
                            return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: e,
                                tx: t
                            })
                        }))), null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then((t => (0 !== t[1] && t[0] !== t[1] && s.throwArgumentError("chainId address mismatch", "transaction", e), t[0]))), yield(0, n.resolveProperties)(t)
                    }))
                }
                _checkProvider(e) {
                    this.provider || s.throwError("missing provider", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: e || "_checkProvider"
                    })
                }
                static isSigner(e) {
                    return !(!e || !e._isSigner)
                }
            }
            class l extends c {
                constructor(e, t) {
                    s.checkNew(new.target, l), super(), (0, n.defineReadOnly)(this, "address", e), (0, n.defineReadOnly)(this, "provider", t || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(e, t) {
                    return Promise.resolve().then((() => {
                        s.throwError(e, i.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: t
                        })
                    }))
                }
                signMessage(e) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(e) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(e, t, r) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(e) {
                    return new l(this.address, e)
                }
            }
        },
        58194: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getAddress: function() {
                    return d
                },
                getContractAddress: function() {
                    return g
                },
                getCreate2Address: function() {
                    return y
                },
                getIcapAddress: function() {
                    return m
                },
                isAddress: function() {
                    return p
                }
            });
            var n = r(75398),
                i = r(10528),
                o = r(59256),
                s = r(74866);
            const a = new(r(57036).Logger)("address/5.6.0");

            function u(e) {
                (0, n.isHexString)(e, 20) || a.throwArgumentError("invalid address", "address", e);
                const t = (e = e.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
                const i = (0, n.arrayify)((0, o.keccak256)(r));
                for (let n = 0; n < 40; n += 2) i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (15 & i[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
                return "0x" + t.join("")
            }
            const c = {};
            for (let v = 0; v < 10; v++) c[String(v)] = String(v);
            for (let v = 0; v < 26; v++) c[String.fromCharCode(65 + v)] = String(10 + v);
            const l = Math.floor((h = 9007199254740991, Math.log10 ? Math.log10(h) : Math.log(h) / Math.LN10));
            var h;

            function f(e) {
                let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map((e => c[e])).join("");
                for (; t.length >= l;) {
                    let e = t.substring(0, l);
                    t = parseInt(e, 10) % 97 + t.substring(e.length)
                }
                let r = String(98 - parseInt(t, 10) % 97);
                for (; r.length < 2;) r = "0" + r;
                return r
            }

            function d(e) {
                let t = null;
                if ("string" !== typeof e && a.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = u(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && a.throwArgumentError("bad address checksum", "address", e);
                else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (e.substring(2, 4) !== f(e) && a.throwArgumentError("bad icap checksum", "address", e), t = (0, i.g$)(e.substring(4)); t.length < 40;) t = "0" + t;
                    t = u("0x" + t)
                } else a.throwArgumentError("invalid address", "address", e);
                return t
            }

            function p(e) {
                try {
                    return d(e), !0
                } catch (t) {}
                return !1
            }

            function m(e) {
                let t = (0, i.t2)(d(e).substring(2)).toUpperCase();
                for (; t.length < 30;) t = "0" + t;
                return "XE" + f("XE00" + t) + t
            }

            function g(e) {
                let t = null;
                try {
                    t = d(e.from)
                } catch (u) {
                    a.throwArgumentError("missing from address", "transaction", e)
                }
                const r = (0, n.stripZeros)((0, n.arrayify)(i.O$.from(e.nonce).toHexString()));
                return d((0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([t, r])), 12))
            }

            function y(e, t, r) {
                return 32 !== (0, n.hexDataLength)(t) && a.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== (0, n.hexDataLength)(r) && a.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), d((0, n.hexDataSlice)((0, o.keccak256)((0, n.concat)(["0xff", d(e), t, r])), 12))
            }
        },
        44002: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return i
                },
                c: function() {
                    return o
                }
            });
            var n = r(75398);

            function i(e) {
                e = atob(e);
                const t = [];
                for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
                return (0, n.arrayify)(t)
            }

            function o(e) {
                e = (0, n.arrayify)(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                return btoa(t)
            }
        },
        70462: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                decode: function() {
                    return n.J
                },
                encode: function() {
                    return n.c
                }
            });
            var n = r(44002)
        },
        50511: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Base32: function() {
                    return s
                },
                Base58: function() {
                    return a
                },
                BaseX: function() {
                    return o
                }
            });
            var n = r(75398),
                i = r(84427);
            class o {
                constructor(e) {
                    (0, i.defineReadOnly)(this, "alphabet", e), (0, i.defineReadOnly)(this, "base", e.length), (0, i.defineReadOnly)(this, "_alphabetMap", {}), (0, i.defineReadOnly)(this, "_leader", e.charAt(0));
                    for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t
                }
                encode(e) {
                    let t = (0, n.arrayify)(e);
                    if (0 === t.length) return "";
                    let r = [0];
                    for (let n = 0; n < t.length; ++n) {
                        let e = t[n];
                        for (let t = 0; t < r.length; ++t) e += r[t] << 8, r[t] = e % this.base, e = e / this.base | 0;
                        for (; e > 0;) r.push(e % this.base), e = e / this.base | 0
                    }
                    let i = "";
                    for (let n = 0; 0 === t[n] && n < t.length - 1; ++n) i += this._leader;
                    for (let n = r.length - 1; n >= 0; --n) i += this.alphabet[r[n]];
                    return i
                }
                decode(e) {
                    if ("string" !== typeof e) throw new TypeError("Expected String");
                    let t = [];
                    if (0 === e.length) return new Uint8Array(t);
                    t.push(0);
                    for (let r = 0; r < e.length; r++) {
                        let n = this._alphabetMap[e[r]];
                        if (void 0 === n) throw new Error("Non-base" + this.base + " character");
                        let i = n;
                        for (let e = 0; e < t.length; ++e) i += t[e] * this.base, t[e] = 255 & i, i >>= 8;
                        for (; i > 0;) t.push(255 & i), i >>= 8
                    }
                    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r) t.push(0);
                    return (0, n.arrayify)(new Uint8Array(t.reverse()))
                }
            }
            const s = new o("abcdefghijklmnopqrstuvwxyz234567"),
                a = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        43495: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            const n = "bignumber/5.6.0"
        },
        10528: function(e, t, r) {
            "use strict";
            r.d(t, {
                O$: function() {
                    return p
                },
                Zm: function() {
                    return f
                },
                g$: function() {
                    return b
                },
                t2: function() {
                    return w
                }
            });
            var n = r(62197),
                i = r.n(n),
                o = r(75398),
                s = r(57036),
                a = r(43495),
                u = i().BN;
            const c = new s.Logger(a.i),
                l = {},
                h = 9007199254740991;

            function f(e) {
                return null != e && (p.isBigNumber(e) || "number" === typeof e && e % 1 === 0 || "string" === typeof e && !!e.match(/^-?[0-9]+$/) || (0, o.isHexString)(e) || "bigint" === typeof e || (0, o.isBytes)(e))
            }
            let d = !1;
            class p {
                constructor(e, t) {
                    c.checkNew(new.target, p), e !== l && c.throwError("cannot call constructor directly; use BigNumber.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(e) {
                    return g(y(this).fromTwos(e))
                }
                toTwos(e) {
                    return g(y(this).toTwos(e))
                }
                abs() {
                    return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this
                }
                add(e) {
                    return g(y(this).add(y(e)))
                }
                sub(e) {
                    return g(y(this).sub(y(e)))
                }
                div(e) {
                    return p.from(e).isZero() && v("division-by-zero", "div"), g(y(this).div(y(e)))
                }
                mul(e) {
                    return g(y(this).mul(y(e)))
                }
                mod(e) {
                    const t = y(e);
                    return t.isNeg() && v("division-by-zero", "mod"), g(y(this).umod(t))
                }
                pow(e) {
                    const t = y(e);
                    return t.isNeg() && v("negative-power", "pow"), g(y(this).pow(t))
                }
                and(e) {
                    const t = y(e);
                    return (this.isNegative() || t.isNeg()) && v("unbound-bitwise-result", "and"), g(y(this).and(t))
                }
                or(e) {
                    const t = y(e);
                    return (this.isNegative() || t.isNeg()) && v("unbound-bitwise-result", "or"), g(y(this).or(t))
                }
                xor(e) {
                    const t = y(e);
                    return (this.isNegative() || t.isNeg()) && v("unbound-bitwise-result", "xor"), g(y(this).xor(t))
                }
                mask(e) {
                    return (this.isNegative() || e < 0) && v("negative-width", "mask"), g(y(this).maskn(e))
                }
                shl(e) {
                    return (this.isNegative() || e < 0) && v("negative-width", "shl"), g(y(this).shln(e))
                }
                shr(e) {
                    return (this.isNegative() || e < 0) && v("negative-width", "shr"), g(y(this).shrn(e))
                }
                eq(e) {
                    return y(this).eq(y(e))
                }
                lt(e) {
                    return y(this).lt(y(e))
                }
                lte(e) {
                    return y(this).lte(y(e))
                }
                gt(e) {
                    return y(this).gt(y(e))
                }
                gte(e) {
                    return y(this).gte(y(e))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return y(this).isZero()
                }
                toNumber() {
                    try {
                        return y(this).toNumber()
                    } catch (e) {
                        v("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (e) {}
                    return c.throwError("this platform does not support BigInt", s.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? d || (d = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Logger.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", s.Logger.errors.UNEXPECTED_ARGUMENT, {})), y(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(e) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(e) {
                    if (e instanceof p) return e;
                    if ("string" === typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new p(l, m(e)) : e.match(/^-?[0-9]+$/) ? new p(l, m(new u(e))) : c.throwArgumentError("invalid BigNumber string", "value", e);
                    if ("number" === typeof e) return e % 1 && v("underflow", "BigNumber.from", e), (e >= h || e <= -h) && v("overflow", "BigNumber.from", e), p.from(String(e));
                    const t = e;
                    if ("bigint" === typeof t) return p.from(t.toString());
                    if ((0, o.isBytes)(t)) return p.from((0, o.hexlify)(t));
                    if (t)
                        if (t.toHexString) {
                            const e = t.toHexString();
                            if ("string" === typeof e) return p.from(e)
                        } else {
                            let e = t._hex;
                            if (null == e && "BigNumber" === t.type && (e = t.hex), "string" === typeof e && ((0, o.isHexString)(e) || "-" === e[0] && (0, o.isHexString)(e.substring(1)))) return p.from(e)
                        }
                    return c.throwArgumentError("invalid BigNumber value", "value", e)
                }
                static isBigNumber(e) {
                    return !(!e || !e._isBigNumber)
                }
            }

            function m(e) {
                if ("string" !== typeof e) return m(e.toString(16));
                if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && c.throwArgumentError("invalid hex", "value", e), "0x00" === (e = m(e)) ? e : "-" + e;
                if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
                for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
                return e
            }

            function g(e) {
                return p.from(m(e))
            }

            function y(e) {
                const t = p.from(e).toHexString();
                return "-" === t[0] ? new u("-" + t.substring(3), 16) : new u(t.substring(2), 16)
            }

            function v(e, t, r) {
                const n = {
                    fault: e,
                    operation: t
                };
                return null != r && (n.value = r), c.throwError(e, s.Logger.errors.NUMERIC_FAULT, n)
            }

            function b(e) {
                return new u(e, 36).toString(16)
            }

            function w(e) {
                return new u(e, 16).toString(36)
            }
        },
        49222: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ox: function() {
                    return m
                },
                S5: function() {
                    return p
                },
                xO: function() {
                    return g
                },
                xs: function() {
                    return y
                }
            });
            var n = r(75398),
                i = r(57036),
                o = r(43495),
                s = r(10528);
            const a = new i.Logger(o.i),
                u = {},
                c = s.O$.from(0),
                l = s.O$.from(-1);

            function h(e, t, r, n) {
                const o = {
                    fault: t,
                    operation: r
                };
                return void 0 !== n && (o.value = n), a.throwError(e, i.Logger.errors.NUMERIC_FAULT, o)
            }
            let f = "0";
            for (; f.length < 256;) f += f;

            function d(e) {
                if ("number" !== typeof e) try {
                    e = s.O$.from(e).toNumber()
                } catch (t) {}
                return "number" === typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + f.substring(0, e) : a.throwArgumentError("invalid decimal size", "decimals", e)
            }

            function p(e, t) {
                null == t && (t = 0);
                const r = d(t),
                    n = (e = s.O$.from(e)).lt(c);
                n && (e = e.mul(l));
                let i = e.mod(r).toString();
                for (; i.length < r.length - 1;) i = "0" + i;
                i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                const o = e.div(r).toString();
                return e = 1 === r.length ? o : o + "." + i, n && (e = "-" + e), e
            }

            function m(e, t) {
                null == t && (t = 0);
                const r = d(t);
                "string" === typeof e && e.match(/^-?[0-9.]+$/) || a.throwArgumentError("invalid decimal value", "value", e);
                const n = "-" === e.substring(0, 1);
                n && (e = e.substring(1)), "." === e && a.throwArgumentError("missing value", "value", e);
                const i = e.split(".");
                i.length > 2 && a.throwArgumentError("too many decimal points", "value", e);
                let o = i[0],
                    u = i[1];
                for (o || (o = "0"), u || (u = "0");
                    "0" === u[u.length - 1];) u = u.substring(0, u.length - 1);
                for (u.length > r.length - 1 && h("fractional component exceeds decimals", "underflow", "parseFixed"), "" === u && (u = "0"); u.length < r.length - 1;) u += "0";
                const c = s.O$.from(o),
                    f = s.O$.from(u);
                let p = c.mul(r).add(f);
                return n && (p = p.mul(l)), p
            }
            class g {
                constructor(e, t, r, n) {
                    e !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = t, this.width = r, this.decimals = n, this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = d(n), Object.freeze(this)
                }
                static from(e) {
                    if (e instanceof g) return e;
                    "number" === typeof e && (e = `fixed128x${e}`);
                    let t = !0,
                        r = 128,
                        n = 18;
                    if ("string" === typeof e)
                        if ("fixed" === e);
                        else if ("ufixed" === e) t = !1;
                    else {
                        const i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        i || a.throwArgumentError("invalid fixed format", "format", e), t = "u" !== i[1], r = parseInt(i[2]), n = parseInt(i[3])
                    } else if (e) {
                        const i = (t, r, n) => null == e[t] ? n : (typeof e[t] !== r && a.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]);
                        t = i("signed", "boolean", t), r = i("width", "number", r), n = i("decimals", "number", n)
                    }
                    return r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new g(u, t, r, n)
                }
            }
            class y {
                constructor(e, t, r, n) {
                    a.checkNew(new.target, y), e !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = n, this._hex = t, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(e) {
                    this.format.name !== e.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
                }
                addUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.add(r), this.format.decimals, this.format)
                }
                subUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.sub(r), this.format.decimals, this.format)
                }
                mulUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
                }
                floor() {
                    const e = this.toString().split(".");
                    1 === e.length && e.push("0");
                    let t = y.from(e[0], this.format);
                    const r = !e[1].match(/^(0*)$/);
                    return this.isNegative() && r && (t = t.subUnsafe(v.toFormat(t.format))), t
                }
                ceiling() {
                    const e = this.toString().split(".");
                    1 === e.length && e.push("0");
                    let t = y.from(e[0], this.format);
                    const r = !e[1].match(/^(0*)$/);
                    return !this.isNegative() && r && (t = t.addUnsafe(v.toFormat(t.format))), t
                }
                round(e) {
                    null == e && (e = 0);
                    const t = this.toString().split(".");
                    if (1 === t.length && t.push("0"), (e < 0 || e > 80 || e % 1) && a.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e) return this;
                    const r = y.from("1" + f.substring(0, e), this.format),
                        n = b.toFormat(this.format);
                    return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value
                }
                isNegative() {
                    return "-" === this._value[0]
                }
                toString() {
                    return this._value
                }
                toHexString(e) {
                    if (null == e) return this._hex;
                    e % 8 && a.throwArgumentError("invalid byte width", "width", e);
                    const t = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
                    return (0, n.hexZeroPad)(t, e / 8)
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(e) {
                    return y.fromString(this._value, e)
                }
                static fromValue(e, t, r) {
                    return null != r || null == t || (0, s.Zm)(t) || (r = t, t = null), null == t && (t = 0), null == r && (r = "fixed"), y.fromString(p(e, t), g.from(r))
                }
                static fromString(e, t) {
                    null == t && (t = "fixed");
                    const r = g.from(t),
                        i = m(e, r.decimals);
                    !r.signed && i.lt(c) && h("unsigned value cannot be negative", "overflow", "value", e);
                    let o = null;
                    r.signed ? o = i.toTwos(r.width).toHexString() : (o = i.toHexString(), o = (0, n.hexZeroPad)(o, r.width / 8));
                    const s = p(i, r.decimals);
                    return new y(u, o, s, r)
                }
                static fromBytes(e, t) {
                    null == t && (t = "fixed");
                    const r = g.from(t);
                    if ((0, n.arrayify)(e).length > r.width / 8) throw new Error("overflow");
                    let i = s.O$.from(e);
                    r.signed && (i = i.fromTwos(r.width));
                    const o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
                        a = p(i, r.decimals);
                    return new y(u, o, a, r)
                }
                static from(e, t) {
                    if ("string" === typeof e) return y.fromString(e, t);
                    if ((0, n.isBytes)(e)) return y.fromBytes(e, t);
                    try {
                        return y.fromValue(e, 0, t)
                    } catch (r) {
                        if (r.code !== i.Logger.errors.INVALID_ARGUMENT) throw r
                    }
                    return a.throwArgumentError("invalid FixedNumber value", "value", e)
                }
                static isFixedNumber(e) {
                    return !(!e || !e._isFixedNumber)
                }
            }
            const v = y.from(1),
                b = y.from("0.5")
        },
        82530: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BigNumber: function() {
                    return n.O$
                },
                FixedFormat: function() {
                    return i.xO
                },
                FixedNumber: function() {
                    return i.xs
                },
                _base16To36: function() {
                    return n.t2
                },
                _base36To16: function() {
                    return n.g$
                },
                formatFixed: function() {
                    return i.S5
                },
                parseFixed: function() {
                    return i.Ox
                }
            });
            var n = r(10528),
                i = r(49222)
        },
        75398: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                arrayify: function() {
                    return c
                },
                concat: function() {
                    return l
                },
                hexConcat: function() {
                    return v
                },
                hexDataLength: function() {
                    return g
                },
                hexDataSlice: function() {
                    return y
                },
                hexStripZeros: function() {
                    return w
                },
                hexValue: function() {
                    return b
                },
                hexZeroPad: function() {
                    return E
                },
                hexlify: function() {
                    return m
                },
                isBytes: function() {
                    return u
                },
                isBytesLike: function() {
                    return s
                },
                isHexString: function() {
                    return d
                },
                joinSignature: function() {
                    return k
                },
                splitSignature: function() {
                    return S
                },
                stripZeros: function() {
                    return h
                },
                zeroPad: function() {
                    return f
                }
            });
            const n = new(r(57036).Logger)("bytes/5.6.1");

            function i(e) {
                return !!e.toHexString
            }

            function o(e) {
                return e.slice || (e.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return o(new Uint8Array(Array.prototype.slice.apply(e, t)))
                }), e
            }

            function s(e) {
                return d(e) && !(e.length % 2) || u(e)
            }

            function a(e) {
                return "number" === typeof e && e == e && e % 1 === 0
            }

            function u(e) {
                if (null == e) return !1;
                if (e.constructor === Uint8Array) return !0;
                if ("string" === typeof e) return !1;
                if (!a(e.length) || e.length < 0) return !1;
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (!a(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function c(e, t) {
                if (t || (t = {}), "number" === typeof e) {
                    n.checkSafeUint53(e, "invalid arrayify value");
                    const t = [];
                    for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
                    return 0 === t.length && t.push(0), o(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), i(e) && (e = e.toHexString()), d(e)) {
                    let r = e.substring(2);
                    r.length % 2 && ("left" === t.hexPad ? r = "0" + r : "right" === t.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
                    const i = [];
                    for (let e = 0; e < r.length; e += 2) i.push(parseInt(r.substring(e, e + 2), 16));
                    return o(new Uint8Array(i))
                }
                return u(e) ? o(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e)
            }

            function l(e) {
                const t = e.map((e => c(e))),
                    r = t.reduce(((e, t) => e + t.length), 0),
                    n = new Uint8Array(r);
                return t.reduce(((e, t) => (n.set(t, e), e + t.length)), 0), o(n)
            }

            function h(e) {
                let t = c(e);
                if (0 === t.length) return t;
                let r = 0;
                for (; r < t.length && 0 === t[r];) r++;
                return r && (t = t.slice(r)), t
            }

            function f(e, t) {
                (e = c(e)).length > t && n.throwArgumentError("value out of range", "value", arguments[0]);
                const r = new Uint8Array(t);
                return r.set(e, t - e.length), o(r)
            }

            function d(e, t) {
                return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
            }
            const p = "0123456789abcdef";

            function m(e, t) {
                if (t || (t = {}), "number" === typeof e) {
                    n.checkSafeUint53(e, "invalid hexlify value");
                    let t = "";
                    for (; e;) t = p[15 & e] + t, e = Math.floor(e / 16);
                    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                }
                if ("bigint" === typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
                if (t.allowMissingPrefix && "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), i(e)) return e.toHexString();
                if (d(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
                if (u(e)) {
                    let t = "0x";
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t += p[(240 & n) >> 4] + p[15 & n]
                    }
                    return t
                }
                return n.throwArgumentError("invalid hexlify value", "value", e)
            }

            function g(e) {
                if ("string" !== typeof e) e = m(e);
                else if (!d(e) || e.length % 2) return null;
                return (e.length - 2) / 2
            }

            function y(e, t, r) {
                return "string" !== typeof e ? e = m(e) : (!d(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
            }

            function v(e) {
                let t = "0x";
                return e.forEach((e => {
                    t += m(e).substring(2)
                })), t
            }

            function b(e) {
                const t = w(m(e, {
                    hexPad: "left"
                }));
                return "0x" === t ? "0x0" : t
            }

            function w(e) {
                "string" !== typeof e && (e = m(e)), d(e) || n.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
                let t = 0;
                for (; t < e.length && "0" === e[t];) t++;
                return "0x" + e.substring(t)
            }

            function E(e, t) {
                for ("string" !== typeof e ? e = m(e) : d(e) || n.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
                return e
            }

            function S(e) {
                const t = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (s(e)) {
                    let r = c(e);
                    64 === r.length ? (t.v = 27 + (r[32] >> 7), r[32] &= 127, t.r = m(r.slice(0, 32)), t.s = m(r.slice(32, 64))) : 65 === r.length ? (t.r = m(r.slice(0, 32)), t.s = m(r.slice(32, 64)), t.v = r[64]) : n.throwArgumentError("invalid signature string", "signature", e), t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = m(r.slice(32, 64))
                } else {
                    if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
                        const r = f(c(t._vs), 32);
                        t._vs = m(r);
                        const i = r[0] >= 128 ? 1 : 0;
                        null == t.recoveryParam ? t.recoveryParam = i : t.recoveryParam !== i && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r[0] &= 127;
                        const o = m(r);
                        null == t.s ? t.s = o : t.s !== o && n.throwArgumentError("signature v mismatch _vs", "signature", e)
                    }
                    if (null == t.recoveryParam) null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
                    else if (null == t.v) t.v = 27 + t.recoveryParam;
                    else {
                        const r = 0 === t.v || 1 === t.v ? t.v : 1 - t.v % 2;
                        t.recoveryParam !== r && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e)
                    }
                    null != t.r && d(t.r) ? t.r = E(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && d(t.s) ? t.s = E(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
                    const r = c(t.s);
                    r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
                    const i = m(r);
                    t._vs && (d(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), t._vs = E(t._vs, 32)), null == t._vs ? t._vs = i : t._vs !== i && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
                }
                return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t
            }

            function k(e) {
                return m(l([(e = S(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
            }
        },
        51906: function(e, t, r) {
            "use strict";
            r.d(t, {
                d: function() {
                    return n
                }
            });
            const n = "0x0000000000000000000000000000000000000000"
        },
        90711: function(e, t, r) {
            "use strict";
            r.d(t, {
                $B: function() {
                    return l
                },
                Bz: function() {
                    return c
                },
                Ce: function() {
                    return u
                },
                PS: function() {
                    return h
                },
                Py: function() {
                    return a
                },
                _Y: function() {
                    return o
                },
                fh: function() {
                    return s
                },
                tL: function() {
                    return i
                }
            });
            var n = r(10528);
            const i = n.O$.from(-1),
                o = n.O$.from(0),
                s = n.O$.from(1),
                a = n.O$.from(2),
                u = n.O$.from("1000000000000000000"),
                c = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                l = n.O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),
                h = n.O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        },
        88210: function(e, t, r) {
            "use strict";
            r.d(t, {
                R: function() {
                    return n
                }
            });
            const n = "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        41175: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                AddressZero: function() {
                    return n.d
                },
                EtherSymbol: function() {
                    return s
                },
                HashZero: function() {
                    return o.R
                },
                MaxInt256: function() {
                    return i.PS
                },
                MaxUint256: function() {
                    return i.Bz
                },
                MinInt256: function() {
                    return i.$B
                },
                NegativeOne: function() {
                    return i.tL
                },
                One: function() {
                    return i.fh
                },
                Two: function() {
                    return i.Py
                },
                WeiPerEther: function() {
                    return i.Ce
                },
                Zero: function() {
                    return i._Y
                }
            });
            var n = r(51906),
                i = r(90711),
                o = r(88210);
            const s = "\u039e"
        },
        30171: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BaseContract: function() {
                    return x
                },
                Contract: function() {
                    return O
                },
                ContractFactory: function() {
                    return R
                }
            });
            var n = r(61852),
                i = r(99268),
                o = r(35239),
                s = r(28612),
                a = r(58194),
                u = r(10528),
                c = r(75398),
                l = r(84427),
                h = r(13353),
                f = r(57036);
            var d = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const p = new f.Logger("contracts/5.6.0"),
                m = {
                    chainId: !0,
                    data: !0,
                    from: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    value: !0,
                    type: !0,
                    accessList: !0,
                    maxFeePerGas: !0,
                    maxPriorityFeePerGas: !0,
                    customData: !0,
                    ccipReadEnabled: !0
                };

            function g(e, t) {
                return d(this, void 0, void 0, (function*() {
                    const r = yield t;
                    "string" !== typeof r && p.throwArgumentError("invalid address or ENS name", "name", r);
                    try {
                        return (0, a.getAddress)(r)
                    } catch (i) {}
                    e || p.throwError("a provider or signer is needed to resolve ENS names", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resolveName"
                    });
                    const n = yield e.resolveName(r);
                    return null == n && p.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n
                }))
            }

            function y(e, t, r) {
                return d(this, void 0, void 0, (function*() {
                    return Array.isArray(r) ? yield Promise.all(r.map(((r, n) => y(e, Array.isArray(t) ? t[n] : t[r.name], r)))): "address" === r.type ? yield g(e, t): "tuple" === r.type ? yield y(e, t, r.components): "array" === r.baseType ? Array.isArray(t) ? yield Promise.all(t.map((t => y(e, t, r.arrayChildren)))): Promise.reject(p.makeError("invalid value for array", f.Logger.errors.INVALID_ARGUMENT, {
                        argument: "value",
                        value: t
                    })): t
                }))
            }

            function v(e, t, r) {
                return d(this, void 0, void 0, (function*() {
                    let n = {};
                    r.length === t.inputs.length + 1 && "object" === typeof r[r.length - 1] && (n = (0, l.shallowCopy)(r.pop())), p.checkArgumentCount(r.length, t.inputs.length, "passed to contract"), e.signer ? n.from ? n.from = (0, l.resolveProperties)({
                        override: g(e.signer, n.from),
                        signer: e.signer.getAddress()
                    }).then((e => d(this, void 0, void 0, (function*() {
                        return (0, a.getAddress)(e.signer) !== e.override && p.throwError("Contract with a Signer cannot override from", f.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        }), e.override
                    })))) : n.from = e.signer.getAddress() : n.from && (n.from = g(e.provider, n.from));
                    const i = yield(0, l.resolveProperties)({
                        args: y(e.signer || e.provider, r, t.inputs),
                        address: e.resolvedAddress,
                        overrides: (0, l.resolveProperties)(n) || {}
                    }), o = e.interface.encodeFunctionData(t, i.args), s = {
                        data: o,
                        to: i.address
                    }, m = i.overrides;
                    if (null != m.nonce && (s.nonce = u.O$.from(m.nonce).toNumber()), null != m.gasLimit && (s.gasLimit = u.O$.from(m.gasLimit)), null != m.gasPrice && (s.gasPrice = u.O$.from(m.gasPrice)), null != m.maxFeePerGas && (s.maxFeePerGas = u.O$.from(m.maxFeePerGas)), null != m.maxPriorityFeePerGas && (s.maxPriorityFeePerGas = u.O$.from(m.maxPriorityFeePerGas)), null != m.from && (s.from = m.from), null != m.type && (s.type = m.type), null != m.accessList && (s.accessList = (0, h.accessListify)(m.accessList)), null == s.gasLimit && null != t.gas) {
                        let e = 21e3;
                        const r = (0, c.arrayify)(o);
                        for (let t = 0; t < r.length; t++) e += 4, r[t] && (e += 64);
                        s.gasLimit = u.O$.from(t.gas).add(e)
                    }
                    if (m.value) {
                        const e = u.O$.from(m.value);
                        e.isZero() || t.payable || p.throwError("non-payable method cannot override value", f.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: n.value
                        }), s.value = e
                    }
                    m.customData && (s.customData = (0, l.shallowCopy)(m.customData)), m.ccipReadEnabled && (s.ccipReadEnabled = !!m.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
                    const v = Object.keys(n).filter((e => null != n[e]));
                    return v.length && p.throwError(`cannot override ${v.map((e=>JSON.stringify(e))).join(",")}`, f.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "overrides",
                        overrides: v
                    }), s
                }))
            }

            function b(e, t) {
                const r = t.wait.bind(t);
                t.wait = t => r(t).then((t => (t.events = t.logs.map((r => {
                    let n = (0, l.deepCopy)(r),
                        i = null;
                    try {
                        i = e.interface.parseLog(r)
                    } catch (o) {}
                    return i && (n.args = i.args, n.decode = (t, r) => e.interface.decodeEventLog(i.eventFragment, t, r), n.event = i.name, n.eventSignature = i.signature), n.removeListener = () => e.provider, n.getBlock = () => e.provider.getBlock(t.blockHash), n.getTransaction = () => e.provider.getTransaction(t.transactionHash), n.getTransactionReceipt = () => Promise.resolve(t), n
                })), t)))
            }

            function w(e, t, r) {
                const n = e.signer || e.provider;
                return function(...i) {
                    return d(this, void 0, void 0, (function*() {
                        let o;
                        if (i.length === t.inputs.length + 1 && "object" === typeof i[i.length - 1]) {
                            const e = (0, l.shallowCopy)(i.pop());
                            null != e.blockTag && (o = yield e.blockTag), delete e.blockTag, i.push(e)
                        }
                        null != e.deployTransaction && (yield e._deployed(o));
                        const s = yield v(e, t, i), a = yield n.call(s, o);
                        try {
                            let n = e.interface.decodeFunctionResult(t, a);
                            return r && 1 === t.outputs.length && (n = n[0]), n
                        } catch (u) {
                            throw u.code === f.Logger.errors.CALL_EXCEPTION && (u.address = e.address, u.args = i, u.transaction = s), u
                        }
                    }))
                }
            }

            function E(e, t, r) {
                return t.constant ? w(e, t, r) : function(e, t) {
                    return function(...r) {
                        return d(this, void 0, void 0, (function*() {
                            e.signer || p.throwError("sending a transaction requires a signer", f.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: "sendTransaction"
                            }), null != e.deployTransaction && (yield e._deployed());
                            const n = yield v(e, t, r), i = yield e.signer.sendTransaction(n);
                            return b(e, i), i
                        }))
                    }
                }(e, t)
            }

            function S(e) {
                return !e.address || null != e.topics && 0 !== e.topics.length ? (e.address || "*") + "@" + (e.topics ? e.topics.map((e => Array.isArray(e) ? e.join("|") : e)).join(":") : "") : "*"
            }
            class k {
                constructor(e, t) {
                    (0, l.defineReadOnly)(this, "tag", e), (0, l.defineReadOnly)(this, "filter", t), this._listeners = []
                }
                addListener(e, t) {
                    this._listeners.push({
                        listener: e,
                        once: t
                    })
                }
                removeListener(e) {
                    let t = !1;
                    this._listeners = this._listeners.filter((r => !(!t && r.listener === e) || (t = !0, !1)))
                }
                removeAllListeners() {
                    this._listeners = []
                }
                listeners() {
                    return this._listeners.map((e => e.listener))
                }
                listenerCount() {
                    return this._listeners.length
                }
                run(e) {
                    const t = this.listenerCount();
                    return this._listeners = this._listeners.filter((t => {
                        const r = e.slice();
                        return setTimeout((() => {
                            t.listener.apply(this, r)
                        }), 0), !t.once
                    })), t
                }
                prepareEvent(e) {}
                getEmit(e) {
                    return [e]
                }
            }
            class _ extends k {
                constructor() {
                    super("error", null)
                }
            }
            class P extends k {
                constructor(e, t, r, n) {
                    const i = {
                        address: e
                    };
                    let o = t.getEventTopic(r);
                    n ? (o !== n[0] && p.throwArgumentError("topic mismatch", "topics", n), i.topics = n.slice()) : i.topics = [o], super(S(i), i), (0, l.defineReadOnly)(this, "address", e), (0, l.defineReadOnly)(this, "interface", t), (0, l.defineReadOnly)(this, "fragment", r)
                }
                prepareEvent(e) {
                    super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (e, t) => this.interface.decodeEventLog(this.fragment, e, t);
                    try {
                        e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics)
                    } catch (t) {
                        e.args = null, e.decodeError = t
                    }
                }
                getEmit(e) {
                    const t = (0, n.BR)(e.args);
                    if (t.length) throw t[0].error;
                    const r = (e.args || []).slice();
                    return r.push(e), r
                }
            }
            class A extends k {
                constructor(e, t) {
                    super("*", {
                        address: e
                    }), (0, l.defineReadOnly)(this, "address", e), (0, l.defineReadOnly)(this, "interface", t)
                }
                prepareEvent(e) {
                    super.prepareEvent(e);
                    try {
                        const t = this.interface.parseLog(e);
                        e.event = t.name, e.eventSignature = t.signature, e.decode = (e, r) => this.interface.decodeEventLog(t.eventFragment, e, r), e.args = t.args
                    } catch (t) {}
                }
            }
            class x {
                constructor(e, t, r) {
                    p.checkNew(new.target, O), (0, l.defineReadOnly)(this, "interface", (0, l.getStatic)(new.target, "getInterface")(t)), null == r ? ((0, l.defineReadOnly)(this, "provider", null), (0, l.defineReadOnly)(this, "signer", null)) : s.Signer.isSigner(r) ? ((0, l.defineReadOnly)(this, "provider", r.provider || null), (0, l.defineReadOnly)(this, "signer", r)) : o.zt.isProvider(r) ? ((0, l.defineReadOnly)(this, "provider", r), (0, l.defineReadOnly)(this, "signer", null)) : p.throwArgumentError("invalid signer or provider", "signerOrProvider", r), (0, l.defineReadOnly)(this, "callStatic", {}), (0, l.defineReadOnly)(this, "estimateGas", {}), (0, l.defineReadOnly)(this, "functions", {}), (0, l.defineReadOnly)(this, "populateTransaction", {}), (0, l.defineReadOnly)(this, "filters", {}); {
                        const e = {};
                        Object.keys(this.interface.events).forEach((t => {
                            const r = this.interface.events[t];
                            (0, l.defineReadOnly)(this.filters, t, ((...e) => ({
                                address: this.address,
                                topics: this.interface.encodeFilterTopics(r, e)
                            }))), e[r.name] || (e[r.name] = []), e[r.name].push(t)
                        })), Object.keys(e).forEach((t => {
                            const r = e[t];
                            1 === r.length ? (0, l.defineReadOnly)(this.filters, t, this.filters[r[0]]) : p.warn(`Duplicate definition of ${t} (${r.join(", ")})`)
                        }))
                    }
                    if ((0, l.defineReadOnly)(this, "_runningEvents", {}), (0, l.defineReadOnly)(this, "_wrappedEmits", {}), null == e && p.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), (0, l.defineReadOnly)(this, "address", e), this.provider)(0, l.defineReadOnly)(this, "resolvedAddress", g(this.provider, e));
                    else try {
                        (0, l.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0, a.getAddress)(e)))
                    } catch (u) {
                        p.throwError("provider is required to use ENS name as contract address", f.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Contract"
                        })
                    }
                    this.resolvedAddress.catch((e => {}));
                    const n = {},
                        i = {};
                    Object.keys(this.interface.functions).forEach((e => {
                        const t = this.interface.functions[e];
                        if (i[e]) p.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
                        else {
                            i[e] = !0; {
                                const r = t.name;
                                n[`%${r}`] || (n[`%${r}`] = []), n[`%${r}`].push(e)
                            }
                            null == this[e] && (0, l.defineReadOnly)(this, e, E(this, t, !0)), null == this.functions[e] && (0, l.defineReadOnly)(this.functions, e, E(this, t, !1)), null == this.callStatic[e] && (0, l.defineReadOnly)(this.callStatic, e, w(this, t, !0)), null == this.populateTransaction[e] && (0, l.defineReadOnly)(this.populateTransaction, e, function(e, t) {
                                return function(...r) {
                                    return v(e, t, r)
                                }
                            }(this, t)), null == this.estimateGas[e] && (0, l.defineReadOnly)(this.estimateGas, e, function(e, t) {
                                const r = e.signer || e.provider;
                                return function(...n) {
                                    return d(this, void 0, void 0, (function*() {
                                        r || p.throwError("estimate require a provider or signer", f.Logger.errors.UNSUPPORTED_OPERATION, {
                                            operation: "estimateGas"
                                        });
                                        const i = yield v(e, t, n);
                                        return yield r.estimateGas(i)
                                    }))
                                }
                            }(this, t))
                        }
                    })), Object.keys(n).forEach((e => {
                        const t = n[e];
                        if (t.length > 1) return;
                        e = e.substring(1);
                        const r = t[0];
                        try {
                            null == this[e] && (0, l.defineReadOnly)(this, e, this[r])
                        } catch (i) {}
                        null == this.functions[e] && (0, l.defineReadOnly)(this.functions, e, this.functions[r]), null == this.callStatic[e] && (0, l.defineReadOnly)(this.callStatic, e, this.callStatic[r]), null == this.populateTransaction[e] && (0, l.defineReadOnly)(this.populateTransaction, e, this.populateTransaction[r]), null == this.estimateGas[e] && (0, l.defineReadOnly)(this.estimateGas, e, this.estimateGas[r])
                    }))
                }
                static getContractAddress(e) {
                    return (0, a.getContractAddress)(e)
                }
                static getInterface(e) {
                    return i.vU.isInterface(e) ? e : new i.vU(e)
                }
                deployed() {
                    return this._deployed()
                }
                _deployed(e) {
                    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then((() => this)) : this._deployedPromise = this.provider.getCode(this.address, e).then((e => ("0x" === e && p.throwError("contract not deployed", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        contractAddress: this.address,
                        operation: "getDeployed"
                    }), this)))), this._deployedPromise
                }
                fallback(e) {
                    this.signer || p.throwError("sending a transactions require a signer", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "sendTransaction(fallback)"
                    });
                    const t = (0, l.shallowCopy)(e || {});
                    return ["from", "to"].forEach((function(e) {
                        null != t[e] && p.throwError("cannot override " + e, f.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e
                        })
                    })), t.to = this.resolvedAddress, this.deployed().then((() => this.signer.sendTransaction(t)))
                }
                connect(e) {
                    "string" === typeof e && (e = new s.VoidSigner(e, this.provider));
                    const t = new this.constructor(this.address, this.interface, e);
                    return this.deployTransaction && (0, l.defineReadOnly)(t, "deployTransaction", this.deployTransaction), t
                }
                attach(e) {
                    return new this.constructor(e, this.interface, this.signer || this.provider)
                }
                static isIndexed(e) {
                    return i.Hk.isIndexed(e)
                }
                _normalizeRunningEvent(e) {
                    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e
                }
                _getRunningEvent(e) {
                    if ("string" === typeof e) {
                        if ("error" === e) return this._normalizeRunningEvent(new _);
                        if ("event" === e) return this._normalizeRunningEvent(new k("event", null));
                        if ("*" === e) return this._normalizeRunningEvent(new A(this.address, this.interface));
                        const t = this.interface.getEvent(e);
                        return this._normalizeRunningEvent(new P(this.address, this.interface, t))
                    }
                    if (e.topics && e.topics.length > 0) {
                        try {
                            const t = e.topics[0];
                            if ("string" !== typeof t) throw new Error("invalid topic");
                            const r = this.interface.getEvent(t);
                            return this._normalizeRunningEvent(new P(this.address, this.interface, r, e.topics))
                        } catch (t) {}
                        const r = {
                            address: this.address,
                            topics: e.topics
                        };
                        return this._normalizeRunningEvent(new k(S(r), r))
                    }
                    return this._normalizeRunningEvent(new A(this.address, this.interface))
                }
                _checkRunningEvents(e) {
                    if (0 === e.listenerCount()) {
                        delete this._runningEvents[e.tag];
                        const t = this._wrappedEmits[e.tag];
                        t && e.filter && (this.provider.off(e.filter, t), delete this._wrappedEmits[e.tag])
                    }
                }
                _wrapEvent(e, t, r) {
                    const n = (0, l.deepCopy)(t);
                    return n.removeListener = () => {
                        r && (e.removeListener(r), this._checkRunningEvents(e))
                    }, n.getBlock = () => this.provider.getBlock(t.blockHash), n.getTransaction = () => this.provider.getTransaction(t.transactionHash), n.getTransactionReceipt = () => this.provider.getTransactionReceipt(t.transactionHash), e.prepareEvent(n), n
                }
                _addEventListener(e, t, r) {
                    if (this.provider || p.throwError("events require a provider or a signer with a provider", f.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "once"
                        }), e.addListener(t, r), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
                        const r = r => {
                            let n = this._wrapEvent(e, r, t);
                            if (null == n.decodeError) try {
                                const t = e.getEmit(n);
                                this.emit(e.filter, ...t)
                            } catch (i) {
                                n.decodeError = i.error
                            }
                            null != e.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n)
                        };
                        this._wrappedEmits[e.tag] = r, null != e.filter && this.provider.on(e.filter, r)
                    }
                }
                queryFilter(e, t, r) {
                    const n = this._getRunningEvent(e),
                        i = (0, l.shallowCopy)(n.filter);
                    return "string" === typeof t && (0, c.isHexString)(t, 32) ? (null != r && p.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), i.blockHash = t) : (i.fromBlock = null != t ? t : 0, i.toBlock = null != r ? r : "latest"), this.provider.getLogs(i).then((e => e.map((e => this._wrapEvent(n, e, null)))))
                }
                on(e, t) {
                    return this._addEventListener(this._getRunningEvent(e), t, !1), this
                }
                once(e, t) {
                    return this._addEventListener(this._getRunningEvent(e), t, !0), this
                }
                emit(e, ...t) {
                    if (!this.provider) return !1;
                    const r = this._getRunningEvent(e),
                        n = r.run(t) > 0;
                    return this._checkRunningEvents(r), n
                }
                listenerCount(e) {
                    return this.provider ? null == e ? Object.keys(this._runningEvents).reduce(((e, t) => e + this._runningEvents[t].listenerCount()), 0) : this._getRunningEvent(e).listenerCount() : 0
                }
                listeners(e) {
                    if (!this.provider) return [];
                    if (null == e) {
                        const e = [];
                        for (let t in this._runningEvents) this._runningEvents[t].listeners().forEach((t => {
                            e.push(t)
                        }));
                        return e
                    }
                    return this._getRunningEvent(e).listeners()
                }
                removeAllListeners(e) {
                    if (!this.provider) return this;
                    if (null == e) {
                        for (const e in this._runningEvents) {
                            const t = this._runningEvents[e];
                            t.removeAllListeners(), this._checkRunningEvents(t)
                        }
                        return this
                    }
                    const t = this._getRunningEvent(e);
                    return t.removeAllListeners(), this._checkRunningEvents(t), this
                }
                off(e, t) {
                    if (!this.provider) return this;
                    const r = this._getRunningEvent(e);
                    return r.removeListener(t), this._checkRunningEvents(r), this
                }
                removeListener(e, t) {
                    return this.off(e, t)
                }
            }
            class O extends x {}
            class R {
                constructor(e, t, r) {
                    let n = null;
                    n = "string" === typeof t ? t : (0, c.isBytes)(t) ? (0, c.hexlify)(t) : t && "string" === typeof t.object ? t.object : "!", "0x" !== n.substring(0, 2) && (n = "0x" + n), (!(0, c.isHexString)(n) || n.length % 2) && p.throwArgumentError("invalid bytecode", "bytecode", t), r && !s.Signer.isSigner(r) && p.throwArgumentError("invalid signer", "signer", r), (0, l.defineReadOnly)(this, "bytecode", n), (0, l.defineReadOnly)(this, "interface", (0, l.getStatic)(new.target, "getInterface")(e)), (0, l.defineReadOnly)(this, "signer", r || null)
                }
                getDeployTransaction(...e) {
                    let t = {};
                    if (e.length === this.interface.deploy.inputs.length + 1 && "object" === typeof e[e.length - 1]) {
                        t = (0, l.shallowCopy)(e.pop());
                        for (const e in t)
                            if (!m[e]) throw new Error("unknown transaction override " + e)
                    }
                    if (["data", "from", "to"].forEach((e => {
                            null != t[e] && p.throwError("cannot override " + e, f.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: e
                            })
                        })), t.value) {
                        u.O$.from(t.value).isZero() || this.interface.deploy.payable || p.throwError("non-payable constructor cannot override value", f.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: t.value
                        })
                    }
                    return p.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor"), t.data = (0, c.hexlify)((0, c.concat)([this.bytecode, this.interface.encodeDeploy(e)])), t
                }
                deploy(...e) {
                    return d(this, void 0, void 0, (function*() {
                        let t = {};
                        e.length === this.interface.deploy.inputs.length + 1 && (t = e.pop()), p.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor");
                        const r = yield y(this.signer, e, this.interface.deploy.inputs);
                        r.push(t);
                        const n = this.getDeployTransaction(...r),
                            i = yield this.signer.sendTransaction(n), o = (0, l.getStatic)(this.constructor, "getContractAddress")(i), s = (0, l.getStatic)(this.constructor, "getContract")(o, this.interface, this.signer);
                        return b(s, i), (0, l.defineReadOnly)(s, "deployTransaction", i), s
                    }))
                }
                attach(e) {
                    return this.constructor.getContract(e, this.interface, this.signer)
                }
                connect(e) {
                    return new this.constructor(this.interface, this.bytecode, e)
                }
                static fromSolidity(e, t) {
                    null == e && p.throwError("missing compiler output", f.Logger.errors.MISSING_ARGUMENT, {
                        argument: "compilerOutput"
                    }), "string" === typeof e && (e = JSON.parse(e));
                    const r = e.abi;
                    let n = null;
                    return e.bytecode ? n = e.bytecode : e.evm && e.evm.bytecode && (n = e.evm.bytecode), new this(r, n, t)
                }
                static getInterface(e) {
                    return O.getInterface(e)
                }
                static getContractAddress(e) {
                    return (0, a.getContractAddress)(e)
                }
                static getContract(e, t, r) {
                    return new O(e, t, r)
                }
            }
        },
        49181: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            const n = "hash/5.6.0"
        },
        32235: function(e, t, r) {
            "use strict";
            r.d(t, {
                id: function() {
                    return o
                }
            });
            var n = r(59256),
                i = r(71320);

            function o(e) {
                return (0, n.keccak256)((0, i.Y0)(e))
            }
        },
        71414: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                _TypedDataEncoder: function() {
                    return s.E
                },
                dnsEncode: function() {
                    return i.Kn
                },
                hashMessage: function() {
                    return o.r
                },
                id: function() {
                    return n.id
                },
                isValidName: function() {
                    return i.r1
                },
                messagePrefix: function() {
                    return o.B
                },
                namehash: function() {
                    return i.VM
                }
            });
            var n = r(32235),
                i = r(66154),
                o = r(3686),
                s = r(79378)
        },
        3686: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return s
                },
                r: function() {
                    return a
                }
            });
            var n = r(75398),
                i = r(59256),
                o = r(71320);
            const s = "\x19Ethereum Signed Message:\n";

            function a(e) {
                return "string" === typeof e && (e = (0, o.Y0)(e)), (0, i.keccak256)((0, n.concat)([(0, o.Y0)(s), (0, o.Y0)(String(e.length)), e]))
            }
        },
        66154: function(e, t, r) {
            "use strict";
            r.d(t, {
                Kn: function() {
                    return p
                },
                VM: function() {
                    return d
                },
                r1: function() {
                    return f
                }
            });
            var n = r(75398),
                i = r(68953),
                o = r(71320),
                s = r(59256),
                a = r(57036),
                u = r(49181);
            const c = new a.Logger(u.i),
                l = new Uint8Array(32);
            l.fill(0);
            const h = new RegExp("^((.*)\\.)?([^.]+)$");

            function f(e) {
                try {
                    const t = e.split(".");
                    for (let e = 0; e < t.length; e++)
                        if (0 === (0, i.Ll)(t[e]).length) throw new Error("empty");
                    return !0
                } catch (t) {}
                return !1
            }

            function d(e) {
                "string" !== typeof e && c.throwArgumentError("invalid ENS name; not a string", "name", e);
                let t = e,
                    r = l;
                for (; t.length;) {
                    const a = t.match(h);
                    null != a && "" !== a[2] || c.throwArgumentError("invalid ENS address; missing component", "name", e);
                    const u = (0, o.Y0)((0, i.Ll)(a[3]));
                    r = (0, s.keccak256)((0, n.concat)([r, (0, s.keccak256)(u)])), t = a[2] || ""
                }
                return (0, n.hexlify)(r)
            }

            function p(e) {
                return (0, n.hexlify)((0, n.concat)(e.split(".").map((e => {
                    const t = (0, o.Y0)("_" + (0, i.Ll)(e));
                    return t[0] = t.length - 1, t
                })))) + "00"
            }
        },
        79378: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return A
                }
            });
            var n = r(58194),
                i = r(10528),
                o = r(75398),
                s = r(59256),
                a = r(84427),
                u = r(57036),
                c = r(49181),
                l = r(32235),
                h = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                u(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(e) {
                            try {
                                u(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((n = n.apply(e, t || [])).next())
                    }))
                };
            const f = new u.Logger(c.i),
                d = new Uint8Array(32);
            d.fill(0);
            const p = i.O$.from(-1),
                m = i.O$.from(0),
                g = i.O$.from(1),
                y = i.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            const v = (0, o.hexZeroPad)(g.toHexString(), 32),
                b = (0, o.hexZeroPad)(m.toHexString(), 32),
                w = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                E = ["name", "version", "chainId", "verifyingContract", "salt"];

            function S(e) {
                return function(t) {
                    return "string" !== typeof t && f.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t
                }
            }
            const k = {
                name: S("name"),
                version: S("version"),
                chainId: function(e) {
                    try {
                        return i.O$.from(e).toString()
                    } catch (t) {}
                    return f.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
                },
                verifyingContract: function(e) {
                    try {
                        return (0, n.getAddress)(e).toLowerCase()
                    } catch (t) {}
                    return f.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
                },
                salt: function(e) {
                    try {
                        const t = (0, o.arrayify)(e);
                        if (32 !== t.length) throw new Error("bad length");
                        return (0, o.hexlify)(t)
                    } catch (t) {}
                    return f.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
                }
            };

            function _(e) {
                {
                    const t = e.match(/^(u?)int(\d*)$/);
                    if (t) {
                        const r = "" === t[1],
                            n = parseInt(t[2] || "256");
                        (n % 8 !== 0 || n > 256 || t[2] && t[2] !== String(n)) && f.throwArgumentError("invalid numeric width", "type", e);
                        const s = y.mask(r ? n - 1 : n),
                            a = r ? s.add(g).mul(p) : m;
                        return function(t) {
                            const r = i.O$.from(t);
                            return (r.lt(a) || r.gt(s)) && f.throwArgumentError(`value out-of-bounds for ${e}`, "value", t), (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    const t = e.match(/^bytes(\d+)$/);
                    if (t) {
                        const r = parseInt(t[1]);
                        return (0 === r || r > 32 || t[1] !== String(r)) && f.throwArgumentError("invalid bytes width", "type", e),
                            function(t) {
                                return (0, o.arrayify)(t).length !== r && f.throwArgumentError(`invalid length for ${e}`, "value", t),
                                    function(e) {
                                        const t = (0, o.arrayify)(e),
                                            r = t.length % 32;
                                        return r ? (0, o.hexConcat)([t, d.slice(r)]) : (0, o.hexlify)(t)
                                    }(t)
                            }
                    }
                }
                switch (e) {
                    case "address":
                        return function(e) {
                            return (0, o.hexZeroPad)((0, n.getAddress)(e), 32)
                        };
                    case "bool":
                        return function(e) {
                            return e ? v : b
                        };
                    case "bytes":
                        return function(e) {
                            return (0, s.keccak256)(e)
                        };
                    case "string":
                        return function(e) {
                            return (0, l.id)(e)
                        }
                }
                return null
            }

            function P(e, t) {
                return `${e}(${t.map((({name:e,type:t})=>t+" "+e)).join(",")})`
            }
            class A {
                constructor(e) {
                    (0, a.defineReadOnly)(this, "types", Object.freeze((0, a.deepCopy)(e))), (0, a.defineReadOnly)(this, "_encoderCache", {}), (0, a.defineReadOnly)(this, "_types", {});
                    const t = {},
                        r = {},
                        n = {};
                    Object.keys(e).forEach((e => {
                        t[e] = {}, r[e] = [], n[e] = {}
                    }));
                    for (const o in e) {
                        const n = {};
                        e[o].forEach((i => {
                            n[i.name] && f.throwArgumentError(`duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(o)}`, "types", e), n[i.name] = !0;
                            const s = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            s === o && f.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", e);
                            _(s) || (r[s] || f.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", e), r[s].push(o), t[o][s] = !0)
                        }))
                    }
                    const i = Object.keys(r).filter((e => 0 === r[e].length));
                    0 === i.length ? f.throwArgumentError("missing primary type", "types", e) : i.length > 1 && f.throwArgumentError(`ambiguous primary types or unused types: ${i.map((e=>JSON.stringify(e))).join(", ")}`, "types", e), (0, a.defineReadOnly)(this, "primaryType", i[0]),
                        function i(o, s) {
                            s[o] && f.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", e), s[o] = !0, Object.keys(t[o]).forEach((e => {
                                r[e] && (i(e, s), Object.keys(s).forEach((t => {
                                    n[t][e] = !0
                                })))
                            })), delete s[o]
                        }(this.primaryType, {});
                    for (const o in n) {
                        const t = Object.keys(n[o]);
                        t.sort(), this._types[o] = P(o, e[o]) + t.map((t => P(t, e[t]))).join("")
                    }
                }
                getEncoder(e) {
                    let t = this._encoderCache[e];
                    return t || (t = this._encoderCache[e] = this._getEncoder(e)), t
                }
                _getEncoder(e) {
                    {
                        const t = _(e);
                        if (t) return t
                    }
                    const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (t) {
                        const e = t[1],
                            r = this.getEncoder(e),
                            n = parseInt(t[3]);
                        return t => {
                            n >= 0 && t.length !== n && f.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t);
                            let i = t.map(r);
                            return this._types[e] && (i = i.map(s.keccak256)), (0, s.keccak256)((0, o.hexConcat)(i))
                        }
                    }
                    const r = this.types[e];
                    if (r) {
                        const t = (0, l.id)(this._types[e]);
                        return e => {
                            const n = r.map((({
                                name: t,
                                type: r
                            }) => {
                                const n = this.getEncoder(r)(e[t]);
                                return this._types[r] ? (0, s.keccak256)(n) : n
                            }));
                            return n.unshift(t), (0, o.hexConcat)(n)
                        }
                    }
                    return f.throwArgumentError(`unknown type: ${e}`, "type", e)
                }
                encodeType(e) {
                    const t = this._types[e];
                    return t || f.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t
                }
                encodeData(e, t) {
                    return this.getEncoder(e)(t)
                }
                hashStruct(e, t) {
                    return (0, s.keccak256)(this.encodeData(e, t))
                }
                encode(e) {
                    return this.encodeData(this.primaryType, e)
                }
                hash(e) {
                    return this.hashStruct(this.primaryType, e)
                }
                _visit(e, t, r) {
                    if (_(e)) return r(e, t);
                    const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        const e = n[1],
                            i = parseInt(n[3]);
                        return i >= 0 && t.length !== i && f.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map((t => this._visit(e, t, r)))
                    }
                    const i = this.types[e];
                    return i ? i.reduce(((e, {
                        name: n,
                        type: i
                    }) => (e[n] = this._visit(i, t[n], r), e)), {}) : f.throwArgumentError(`unknown type: ${e}`, "type", e)
                }
                visit(e, t) {
                    return this._visit(this.primaryType, e, t)
                }
                static from(e) {
                    return new A(e)
                }
                static getPrimaryType(e) {
                    return A.from(e).primaryType
                }
                static hashStruct(e, t, r) {
                    return A.from(t).hashStruct(e, r)
                }
                static hashDomain(e) {
                    const t = [];
                    for (const r in e) {
                        const n = w[r];
                        n || f.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({
                            name: r,
                            type: n
                        })
                    }
                    return t.sort(((e, t) => E.indexOf(e.name) - E.indexOf(t.name))), A.hashStruct("EIP712Domain", {
                        EIP712Domain: t
                    }, e)
                }
                static encode(e, t, r) {
                    return (0, o.hexConcat)(["0x1901", A.hashDomain(e), A.from(t).hash(r)])
                }
                static hash(e, t, r) {
                    return (0, s.keccak256)(A.encode(e, t, r))
                }
                static resolveNames(e, t, r, n) {
                    return h(this, void 0, void 0, (function*() {
                        e = (0, a.shallowCopy)(e);
                        const i = {};
                        e.verifyingContract && !(0, o.isHexString)(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
                        const s = A.from(t);
                        s.visit(r, ((e, t) => ("address" !== e || (0, o.isHexString)(t, 20) || (i[t] = "0x"), t)));
                        for (const e in i) i[e] = yield n(e);
                        return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), r = s.visit(r, ((e, t) => "address" === e && i[t] ? i[t] : t)), {
                            domain: e,
                            value: r
                        }
                    }))
                }
                static getPayload(e, t, r) {
                    A.hashDomain(e);
                    const n = {},
                        s = [];
                    E.forEach((t => {
                        const r = e[t];
                        null != r && (n[t] = k[t](r), s.push({
                            name: t,
                            type: w[t]
                        }))
                    }));
                    const u = A.from(t),
                        c = (0, a.shallowCopy)(t);
                    return c.EIP712Domain ? f.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : c.EIP712Domain = s, u.encode(r), {
                        types: c,
                        domain: n,
                        primaryType: u.primaryType,
                        message: u.visit(r, ((e, t) => {
                            if (e.match(/^bytes(\d*)/)) return (0, o.hexlify)((0, o.arrayify)(t));
                            if (e.match(/^u?int/)) return i.O$.from(t).toString();
                            switch (e) {
                                case "address":
                                    return t.toLowerCase();
                                case "bool":
                                    return !!t;
                                case "string":
                                    return "string" !== typeof t && f.throwArgumentError("invalid string", "value", t), t
                            }
                            return f.throwArgumentError("unsupported type", "type", e)
                        }))
                    }
                }
            }
        },
        56364: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                HDNode: function() {
                    return _
                },
                defaultPath: function() {
                    return k
                },
                entropyToMnemonic: function() {
                    return x
                },
                getAccountPath: function() {
                    return R
                },
                isValidMnemonic: function() {
                    return O
                },
                mnemonicToEntropy: function() {
                    return A
                },
                mnemonicToSeed: function() {
                    return P
                }
            });
            var n = r(50511),
                i = r(75398),
                o = r(10528),
                s = r(71320),
                a = r(55183),
                u = r(84427),
                c = r(3378),
                l = r(58254),
                h = r(21723),
                f = r(13353),
                d = r(56279);
            const p = new(r(57036).Logger)("hdnode/5.6.0"),
                m = o.O$.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                g = (0, s.Y0)("Bitcoin seed"),
                y = 2147483648;

            function v(e) {
                return (1 << e) - 1 << 8 - e
            }

            function b(e) {
                return (0, i.hexZeroPad)((0, i.hexlify)(e), 32)
            }

            function w(e) {
                return n.Base58.encode((0, i.concat)([e, (0, i.hexDataSlice)((0, l.JQ)((0, l.JQ)(e)), 0, 4)]))
            }

            function E(e) {
                if (null == e) return d.E.en;
                if ("string" === typeof e) {
                    const t = d.E[e];
                    return null == t && p.throwArgumentError("unknown locale", "wordlist", e), t
                }
                return e
            }
            const S = {},
                k = "m/44'/60'/0'/0/0";
            class _ {
                constructor(e, t, r, n, o, s, a, h) {
                    if (p.checkNew(new.target, _), e !== S) throw new Error("HDNode constructor cannot be called directly");
                    if (t) {
                        const e = new c.SigningKey(t);
                        (0, u.defineReadOnly)(this, "privateKey", e.privateKey), (0, u.defineReadOnly)(this, "publicKey", e.compressedPublicKey)
                    } else(0, u.defineReadOnly)(this, "privateKey", null), (0, u.defineReadOnly)(this, "publicKey", (0, i.hexlify)(r));
                    (0, u.defineReadOnly)(this, "parentFingerprint", n), (0, u.defineReadOnly)(this, "fingerprint", (0, i.hexDataSlice)((0, l.bP)((0, l.JQ)(this.publicKey)), 0, 4)), (0, u.defineReadOnly)(this, "address", (0, f.computeAddress)(this.publicKey)), (0, u.defineReadOnly)(this, "chainCode", o), (0, u.defineReadOnly)(this, "index", s), (0, u.defineReadOnly)(this, "depth", a), null == h ? ((0, u.defineReadOnly)(this, "mnemonic", null), (0, u.defineReadOnly)(this, "path", null)) : "string" === typeof h ? ((0, u.defineReadOnly)(this, "mnemonic", null), (0, u.defineReadOnly)(this, "path", h)) : ((0, u.defineReadOnly)(this, "mnemonic", h), (0, u.defineReadOnly)(this, "path", h.path))
                }
                get extendedKey() {
                    if (this.depth >= 256) throw new Error("Depth too large!");
                    return w((0, i.concat)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", (0, i.hexlify)(this.depth), this.parentFingerprint, (0, i.hexZeroPad)((0, i.hexlify)(this.index), 4), this.chainCode, null != this.privateKey ? (0, i.concat)(["0x00", this.privateKey]) : this.publicKey]))
                }
                neuter() {
                    return new _(S, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path)
                }
                _derive(e) {
                    if (e > 4294967295) throw new Error("invalid index - " + String(e));
                    let t = this.path;
                    t && (t += "/" + (2147483647 & e));
                    const r = new Uint8Array(37);
                    if (e & y) {
                        if (!this.privateKey) throw new Error("cannot derive child of neutered node");
                        r.set((0, i.arrayify)(this.privateKey), 1), t && (t += "'")
                    } else r.set((0, i.arrayify)(this.publicKey));
                    for (let i = 24; i >= 0; i -= 8) r[33 + (i >> 3)] = e >> 24 - i & 255;
                    const n = (0, i.arrayify)((0, l.Gy)(h.p.sha512, this.chainCode, r)),
                        s = n.slice(0, 32),
                        a = n.slice(32);
                    let u = null,
                        f = null;
                    if (this.privateKey) u = b(o.O$.from(s).add(this.privateKey).mod(m));
                    else {
                        f = new c.SigningKey((0, i.hexlify)(s))._addPoint(this.publicKey)
                    }
                    let d = t;
                    const p = this.mnemonic;
                    return p && (d = Object.freeze({
                        phrase: p.phrase,
                        path: t,
                        locale: p.locale || "en"
                    })), new _(S, u, f, this.fingerprint, b(a), e, this.depth + 1, d)
                }
                derivePath(e) {
                    const t = e.split("/");
                    if (0 === t.length || "m" === t[0] && 0 !== this.depth) throw new Error("invalid path - " + e);
                    "m" === t[0] && t.shift();
                    let r = this;
                    for (let n = 0; n < t.length; n++) {
                        const e = t[n];
                        if (e.match(/^[0-9]+'$/)) {
                            const t = parseInt(e.substring(0, e.length - 1));
                            if (t >= y) throw new Error("invalid path index - " + e);
                            r = r._derive(y + t)
                        } else {
                            if (!e.match(/^[0-9]+$/)) throw new Error("invalid path component - " + e); {
                                const t = parseInt(e);
                                if (t >= y) throw new Error("invalid path index - " + e);
                                r = r._derive(t)
                            }
                        }
                    }
                    return r
                }
                static _fromSeed(e, t) {
                    const r = (0, i.arrayify)(e);
                    if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
                    const n = (0, i.arrayify)((0, l.Gy)(h.p.sha512, g, r));
                    return new _(S, b(n.slice(0, 32)), null, "0x00000000", b(n.slice(32)), 0, 0, t)
                }
                static fromMnemonic(e, t, r) {
                    return e = x(A(e, r = E(r)), r), _._fromSeed(P(e, t), {
                        phrase: e,
                        path: "m",
                        locale: r.locale
                    })
                }
                static fromSeed(e) {
                    return _._fromSeed(e, null)
                }
                static fromExtendedKey(e) {
                    const t = n.Base58.decode(e);
                    82 === t.length && w(t.slice(0, 78)) === e || p.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
                    const r = t[4],
                        o = (0, i.hexlify)(t.slice(5, 9)),
                        s = parseInt((0, i.hexlify)(t.slice(9, 13)).substring(2), 16),
                        a = (0, i.hexlify)(t.slice(13, 45)),
                        u = t.slice(45, 78);
                    switch ((0, i.hexlify)(t.slice(0, 4))) {
                        case "0x0488b21e":
                        case "0x043587cf":
                            return new _(S, null, (0, i.hexlify)(u), o, a, s, r, null);
                        case "0x0488ade4":
                        case "0x04358394 ":
                            if (0 !== u[0]) break;
                            return new _(S, (0, i.hexlify)(u.slice(1)), null, o, a, s, r, null)
                    }
                    return p.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
                }
            }

            function P(e, t) {
                t || (t = "");
                const r = (0, s.Y0)("mnemonic" + t, s.Uj.NFKD);
                return (0, a.n)((0, s.Y0)(e, s.Uj.NFKD), r, 2048, 64, "sha512")
            }

            function A(e, t) {
                t = E(t), p.checkNormalize();
                const r = t.split(e);
                if (r.length % 3 !== 0) throw new Error("invalid mnemonic");
                const n = (0, i.arrayify)(new Uint8Array(Math.ceil(11 * r.length / 8)));
                let o = 0;
                for (let i = 0; i < r.length; i++) {
                    let e = t.getWordIndex(r[i].normalize("NFKD"));
                    if (-1 === e) throw new Error("invalid mnemonic");
                    for (let t = 0; t < 11; t++) e & 1 << 10 - t && (n[o >> 3] |= 1 << 7 - o % 8), o++
                }
                const s = 32 * r.length / 3,
                    a = v(r.length / 3);
                if (((0, i.arrayify)((0, l.JQ)(n.slice(0, s / 8)))[0] & a) !== (n[n.length - 1] & a)) throw new Error("invalid checksum");
                return (0, i.hexlify)(n.slice(0, s / 8))
            }

            function x(e, t) {
                if (t = E(t), (e = (0, i.arrayify)(e)).length % 4 !== 0 || e.length < 16 || e.length > 32) throw new Error("invalid entropy");
                const r = [0];
                let n = 11;
                for (let i = 0; i < e.length; i++) n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= e[i], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= e[i] >> 8 - n, r.push(e[i] & (1 << 8 - n) - 1), n += 3);
                const o = e.length / 4,
                    s = (0, i.arrayify)((0, l.JQ)(e))[0] & v(o);
                return r[r.length - 1] <<= o, r[r.length - 1] |= s >> 8 - o, t.join(r.map((e => t.getWord(e))))
            }

            function O(e, t) {
                try {
                    return A(e, t), !0
                } catch (r) {}
                return !1
            }

            function R(e) {
                return ("number" !== typeof e || e < 0 || e >= y || e % 1) && p.throwArgumentError("invalid account index", "index", e), `m/44'/60'/${e}'/0/0`
            }
        },
        9050: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            const n = "json-wallets/5.6.0"
        },
        37261: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                decryptCrowdsale: function() {
                    return g
                },
                decryptJsonWallet: function() {
                    return E
                },
                decryptJsonWalletSync: function() {
                    return S
                },
                decryptKeystore: function() {
                    return w.pe
                },
                decryptKeystoreSync: function() {
                    return w.hb
                },
                encryptKeystore: function() {
                    return w.HI
                },
                getJsonWalletAddress: function() {
                    return b
                },
                isCrowdsaleWallet: function() {
                    return y
                },
                isKeystoreWallet: function() {
                    return v
                }
            });
            var n = r(8202),
                i = r.n(n),
                o = r(58194),
                s = r(75398),
                a = r(59256),
                u = r(55183),
                c = r(71320),
                l = r(84427),
                h = r(57036),
                f = r(9050),
                d = r(46143);
            const p = new h.Logger(f.i);
            class m extends l.Description {
                isCrowdsaleAccount(e) {
                    return !(!e || !e._isCrowdsaleAccount)
                }
            }

            function g(e, t) {
                const r = JSON.parse(e);
                t = (0, d.Ij)(t);
                const n = (0, o.getAddress)((0, d.gx)(r, "ethaddr")),
                    l = (0, d.p3)((0, d.gx)(r, "encseed"));
                l && l.length % 16 === 0 || p.throwArgumentError("invalid encseed", "json", e);
                const h = (0, s.arrayify)((0, u.n)(t, t, 2e3, 32, "sha256")).slice(0, 16),
                    f = l.slice(0, 16),
                    g = l.slice(16),
                    y = new(i().ModeOfOperation.cbc)(h, f),
                    v = i().padding.pkcs7.strip((0, s.arrayify)(y.decrypt(g)));
                let b = "";
                for (let i = 0; i < v.length; i++) b += String.fromCharCode(v[i]);
                const w = (0, c.Y0)(b),
                    E = (0, a.keccak256)(w);
                return new m({
                    _isCrowdsaleAccount: !0,
                    address: n,
                    privateKey: E
                })
            }

            function y(e) {
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (r) {
                    return !1
                }
                return t.encseed && t.ethaddr
            }

            function v(e) {
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (r) {
                    return !1
                }
                return !(!t.version || parseInt(t.version) !== t.version || 3 !== parseInt(t.version))
            }

            function b(e) {
                if (y(e)) try {
                    return (0, o.getAddress)(JSON.parse(e).ethaddr)
                } catch (t) {
                    return null
                }
                if (v(e)) try {
                    return (0, o.getAddress)(JSON.parse(e).address)
                } catch (t) {
                    return null
                }
                return null
            }
            var w = r(92338);

            function E(e, t, r) {
                if (y(e)) {
                    r && r(0);
                    const n = g(e, t);
                    return r && r(1), Promise.resolve(n)
                }
                return v(e) ? (0, w.pe)(e, t, r) : Promise.reject(new Error("invalid JSON wallet"))
            }

            function S(e, t) {
                if (y(e)) return g(e, t);
                if (v(e)) return (0, w.hb)(e, t);
                throw new Error("invalid JSON wallet")
            }
        },
        92338: function(e, t, r) {
            "use strict";
            r.d(t, {
                HI: function() {
                    return O
                },
                hb: function() {
                    return A
                },
                pe: function() {
                    return x
                }
            });
            var n = r(8202),
                i = r.n(n),
                o = r(14689),
                s = r.n(o),
                a = r(58194),
                u = r(75398),
                c = r(56364),
                l = r(59256),
                h = r(55183),
                f = r(62191),
                d = r(84427),
                p = r(13353),
                m = r(46143),
                g = r(57036),
                y = r(9050),
                v = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                u(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(e) {
                            try {
                                u(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((n = n.apply(e, t || [])).next())
                    }))
                };
            const b = new g.Logger(y.i);

            function w(e) {
                return null != e && e.mnemonic && e.mnemonic.phrase
            }
            class E extends d.Description {
                isKeystoreAccount(e) {
                    return !(!e || !e._isKeystoreAccount)
                }
            }

            function S(e, t) {
                const r = (0, m.p3)((0, m.gx)(e, "crypto/ciphertext"));
                if ((0, u.hexlify)((0, l.keccak256)((0, u.concat)([t.slice(16, 32), r]))).substring(2) !== (0, m.gx)(e, "crypto/mac").toLowerCase()) throw new Error("invalid password");
                const n = function(e, t, r) {
                    if ("aes-128-ctr" === (0, m.gx)(e, "crypto/cipher")) {
                        const n = (0, m.p3)((0, m.gx)(e, "crypto/cipherparams/iv")),
                            o = new(i().Counter)(n),
                            s = new(i().ModeOfOperation.ctr)(t, o);
                        return (0, u.arrayify)(s.decrypt(r))
                    }
                    return null
                }(e, t.slice(0, 16), r);
                n || b.throwError("unsupported cipher", g.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "decrypt"
                });
                const o = t.slice(32, 64),
                    s = (0, p.computeAddress)(n);
                if (e.address) {
                    let t = e.address.toLowerCase();
                    if ("0x" !== t.substring(0, 2) && (t = "0x" + t), (0, a.getAddress)(t) !== s) throw new Error("address mismatch")
                }
                const h = {
                    _isKeystoreAccount: !0,
                    address: s,
                    privateKey: (0, u.hexlify)(n)
                };
                if ("0.1" === (0, m.gx)(e, "x-ethers/version")) {
                    const t = (0, m.p3)((0, m.gx)(e, "x-ethers/mnemonicCiphertext")),
                        r = (0, m.p3)((0, m.gx)(e, "x-ethers/mnemonicCounter")),
                        n = new(i().Counter)(r),
                        s = new(i().ModeOfOperation.ctr)(o, n),
                        a = (0, m.gx)(e, "x-ethers/path") || c.defaultPath,
                        l = (0, m.gx)(e, "x-ethers/locale") || "en",
                        d = (0, u.arrayify)(s.decrypt(t));
                    try {
                        const e = (0, c.entropyToMnemonic)(d, l),
                            t = c.HDNode.fromMnemonic(e, null, l).derivePath(a);
                        if (t.privateKey != h.privateKey) throw new Error("mnemonic mismatch");
                        h.mnemonic = t.mnemonic
                    } catch (f) {
                        if (f.code !== g.Logger.errors.INVALID_ARGUMENT || "wordlist" !== f.argument) throw f
                    }
                }
                return new E(h)
            }

            function k(e, t, r, n, i) {
                return (0, u.arrayify)((0, h.n)(e, t, r, n, i))
            }

            function _(e, t, r, n, i) {
                return Promise.resolve(k(e, t, r, n, i))
            }

            function P(e, t, r, n, i) {
                const o = (0, m.Ij)(t),
                    s = (0, m.gx)(e, "crypto/kdf");
                if (s && "string" === typeof s) {
                    const t = function(e, t) {
                        return b.throwArgumentError("invalid key-derivation function parameters", e, t)
                    };
                    if ("scrypt" === s.toLowerCase()) {
                        const r = (0, m.p3)((0, m.gx)(e, "crypto/kdfparams/salt")),
                            a = parseInt((0, m.gx)(e, "crypto/kdfparams/n")),
                            u = parseInt((0, m.gx)(e, "crypto/kdfparams/r")),
                            c = parseInt((0, m.gx)(e, "crypto/kdfparams/p"));
                        a && u && c || t("kdf", s), 0 !== (a & a - 1) && t("N", a);
                        const l = parseInt((0, m.gx)(e, "crypto/kdfparams/dklen"));
                        return 32 !== l && t("dklen", l), n(o, r, a, u, c, 64, i)
                    }
                    if ("pbkdf2" === s.toLowerCase()) {
                        const n = (0, m.p3)((0, m.gx)(e, "crypto/kdfparams/salt"));
                        let i = null;
                        const s = (0, m.gx)(e, "crypto/kdfparams/prf");
                        "hmac-sha256" === s ? i = "sha256" : "hmac-sha512" === s ? i = "sha512" : t("prf", s);
                        const a = parseInt((0, m.gx)(e, "crypto/kdfparams/c")),
                            u = parseInt((0, m.gx)(e, "crypto/kdfparams/dklen"));
                        return 32 !== u && t("dklen", u), r(o, n, a, u, i)
                    }
                }
                return b.throwArgumentError("unsupported key-derivation function", "kdf", s)
            }

            function A(e, t) {
                const r = JSON.parse(e);
                return S(r, P(r, t, k, s().syncScrypt))
            }

            function x(e, t, r) {
                return v(this, void 0, void 0, (function*() {
                    const n = JSON.parse(e);
                    return S(n, yield P(n, t, _, s().scrypt, r))
                }))
            }

            function O(e, t, r, n) {
                try {
                    if ((0, a.getAddress)(e.address) !== (0, p.computeAddress)(e.privateKey)) throw new Error("address/privateKey mismatch");
                    if (w(e)) {
                        const t = e.mnemonic;
                        if (c.HDNode.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path || c.defaultPath).privateKey != e.privateKey) throw new Error("mnemonic mismatch")
                    }
                } catch (A) {
                    return Promise.reject(A)
                }
                "function" !== typeof r || n || (n = r, r = {}), r || (r = {});
                const o = (0, u.arrayify)(e.privateKey),
                    h = (0, m.Ij)(t);
                let d = null,
                    g = null,
                    y = null;
                if (w(e)) {
                    const t = e.mnemonic;
                    d = (0, u.arrayify)((0, c.mnemonicToEntropy)(t.phrase, t.locale || "en")), g = t.path || c.defaultPath, y = t.locale || "en"
                }
                let v = r.client;
                v || (v = "ethers.js");
                let b = null;
                b = r.salt ? (0, u.arrayify)(r.salt) : (0, f.O)(32);
                let E = null;
                if (r.iv) {
                    if (E = (0, u.arrayify)(r.iv), 16 !== E.length) throw new Error("invalid iv")
                } else E = (0, f.O)(16);
                let S = null;
                if (r.uuid) {
                    if (S = (0, u.arrayify)(r.uuid), 16 !== S.length) throw new Error("invalid uuid")
                } else S = (0, f.O)(16);
                let k = 1 << 17,
                    _ = 8,
                    P = 1;
                return r.scrypt && (r.scrypt.N && (k = r.scrypt.N), r.scrypt.r && (_ = r.scrypt.r), r.scrypt.p && (P = r.scrypt.p)), s().scrypt(h, b, k, _, P, 64, n).then((t => {
                    const r = (t = (0, u.arrayify)(t)).slice(0, 16),
                        n = t.slice(16, 32),
                        s = t.slice(32, 64),
                        a = new(i().Counter)(E),
                        c = new(i().ModeOfOperation.ctr)(r, a),
                        h = (0, u.arrayify)(c.encrypt(o)),
                        p = (0, l.keccak256)((0, u.concat)([n, h])),
                        w = {
                            address: e.address.substring(2).toLowerCase(),
                            id: (0, m.EH)(S),
                            version: 3,
                            Crypto: {
                                cipher: "aes-128-ctr",
                                cipherparams: {
                                    iv: (0, u.hexlify)(E).substring(2)
                                },
                                ciphertext: (0, u.hexlify)(h).substring(2),
                                kdf: "scrypt",
                                kdfparams: {
                                    salt: (0, u.hexlify)(b).substring(2),
                                    n: k,
                                    dklen: 32,
                                    p: P,
                                    r: _
                                },
                                mac: p.substring(2)
                            }
                        };
                    if (d) {
                        const e = (0, f.O)(16),
                            t = new(i().Counter)(e),
                            r = new(i().ModeOfOperation.ctr)(s, t),
                            n = (0, u.arrayify)(r.encrypt(d)),
                            o = new Date,
                            a = o.getUTCFullYear() + "-" + (0, m.VP)(o.getUTCMonth() + 1, 2) + "-" + (0, m.VP)(o.getUTCDate(), 2) + "T" + (0, m.VP)(o.getUTCHours(), 2) + "-" + (0, m.VP)(o.getUTCMinutes(), 2) + "-" + (0, m.VP)(o.getUTCSeconds(), 2) + ".0Z";
                        w["x-ethers"] = {
                            client: v,
                            gethFilename: "UTC--" + a + "--" + w.address,
                            mnemonicCounter: (0, u.hexlify)(e).substring(2),
                            mnemonicCiphertext: (0, u.hexlify)(n).substring(2),
                            path: g,
                            locale: y,
                            version: "0.1"
                        }
                    }
                    return JSON.stringify(w)
                }))
            }
        },
        46143: function(e, t, r) {
            "use strict";
            r.d(t, {
                EH: function() {
                    return c
                },
                Ij: function() {
                    return a
                },
                VP: function() {
                    return s
                },
                gx: function() {
                    return u
                },
                p3: function() {
                    return o
                }
            });
            var n = r(75398),
                i = r(71320);

            function o(e) {
                return "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), (0, n.arrayify)(e)
            }

            function s(e, t) {
                for (e = String(e); e.length < t;) e = "0" + e;
                return e
            }

            function a(e) {
                return "string" === typeof e ? (0, i.Y0)(e, i.Uj.NFKC) : (0, n.arrayify)(e)
            }

            function u(e, t) {
                let r = e;
                const n = t.toLowerCase().split("/");
                for (let i = 0; i < n.length; i++) {
                    let e = null;
                    for (const t in r)
                        if (t.toLowerCase() === n[i]) {
                            e = r[t];
                            break
                        }
                    if (null === e) return null;
                    r = e
                }
                return r
            }

            function c(e) {
                const t = (0, n.arrayify)(e);
                t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128;
                const r = (0, n.hexlify)(t);
                return [r.substring(2, 10), r.substring(10, 14), r.substring(14, 18), r.substring(18, 22), r.substring(22, 34)].join("-")
            }
        },
        59256: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                keccak256: function() {
                    return s
                }
            });
            var n = r(83669),
                i = r.n(n),
                o = r(75398);

            function s(e) {
                return "0x" + i().keccak_256((0, o.arrayify)(e))
            }
        },
        57036: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ErrorCode: function() {
                    return l
                },
                LogLevel: function() {
                    return c
                },
                Logger: function() {
                    return f
                }
            });
            let n = !1,
                i = !1;
            const o = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let s = o.default,
                a = null;
            const u = function() {
                try {
                    const e = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t => {
                            try {
                                if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
                            } catch (r) {
                                e.push(t)
                            }
                        })), e.length) throw new Error("missing " + e.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (e) {
                    return e.message
                }
                return null
            }();
            var c, l;
            ! function(e) {
                e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
            }(c || (c = {})),
            function(e) {
                e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(l || (l = {}));
            const h = "0123456789abcdef";
            class f {
                constructor(e) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: e,
                        writable: !1
                    })
                }
                _log(e, t) {
                    const r = e.toLowerCase();
                    null == o[r] && this.throwArgumentError("invalid log level name", "logLevel", e), s > o[r] || console.log.apply(console, t)
                }
                debug(...e) {
                    this._log(f.levels.DEBUG, e)
                }
                info(...e) {
                    this._log(f.levels.INFO, e)
                }
                warn(...e) {
                    this._log(f.levels.WARNING, e)
                }
                makeError(e, t, r) {
                    if (i) return this.makeError("censored error", t, {});
                    t || (t = f.errors.UNKNOWN_ERROR), r || (r = {});
                    const n = [];
                    Object.keys(r).forEach((e => {
                        const t = r[e];
                        try {
                            if (t instanceof Uint8Array) {
                                let r = "";
                                for (let e = 0; e < t.length; e++) r += h[t[e] >> 4], r += h[15 & t[e]];
                                n.push(e + "=Uint8Array(0x" + r + ")")
                            } else n.push(e + "=" + JSON.stringify(t))
                        } catch (a) {
                            n.push(e + "=" + JSON.stringify(r[e].toString()))
                        }
                    })), n.push(`code=${t}`), n.push(`version=${this.version}`);
                    const o = e;
                    let s = "";
                    switch (t) {
                        case l.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                const t = e;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result"
                                }
                                break
                            }
                        case l.CALL_EXCEPTION:
                        case l.INSUFFICIENT_FUNDS:
                        case l.MISSING_NEW:
                        case l.NONCE_EXPIRED:
                        case l.REPLACEMENT_UNDERPRICED:
                        case l.TRANSACTION_REPLACED:
                        case l.UNPREDICTABLE_GAS_LIMIT:
                            s = t
                    }
                    s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (e += " (" + n.join(", ") + ")");
                    const a = new Error(e);
                    return a.reason = o, a.code = t, Object.keys(r).forEach((function(e) {
                        a[e] = r[e]
                    })), a
                }
                throwError(e, t, r) {
                    throw this.makeError(e, t, r)
                }
                throwArgumentError(e, t, r) {
                    return this.throwError(e, f.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: r
                    })
                }
                assert(e, t, r, n) {
                    e || this.throwError(t, r, n)
                }
                assertArgument(e, t, r, n) {
                    e || this.throwArgumentError(t, r, n)
                }
                checkNormalize(e) {
                    null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: u
                    })
                }
                checkSafeUint53(e, t) {
                    "number" === typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, f.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: e
                    }), e % 1 && this.throwError(t, f.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: e
                    }))
                }
                checkArgumentCount(e, t, r) {
                    r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, f.errors.MISSING_ARGUMENT, {
                        count: e,
                        expectedCount: t
                    }), e > t && this.throwError("too many arguments" + r, f.errors.UNEXPECTED_ARGUMENT, {
                        count: e,
                        expectedCount: t
                    })
                }
                checkNew(e, t) {
                    e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(e, t) {
                    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
                        name: e.name,
                        operation: "new"
                    }) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return a || (a = new f("logger/5.6.0")), a
                }
                static setCensorship(e, t) {
                    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!e) return;
                        this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    i = !!e, n = !!t
                }
                static setLogLevel(e) {
                    const t = o[e.toLowerCase()];
                    null != t ? s = t : f.globalLogger().warn("invalid log level - " + e)
                }
                static from(e) {
                    return new f(e)
                }
            }
            f.errors = l, f.levels = c
        },
        62678: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return l
                }
            });
            const n = new(r(57036).Logger)("networks/5.6.1");

            function i(e) {
                const t = function(t, r) {
                    null == r && (r = {});
                    const n = [];
                    if (t.InfuraProvider && "-" !== r.infura) try {
                        n.push(new t.InfuraProvider(e, r.infura))
                    } catch (i) {}
                    if (t.EtherscanProvider && "-" !== r.etherscan) try {
                        n.push(new t.EtherscanProvider(e, r.etherscan))
                    } catch (i) {}
                    if (t.AlchemyProvider && "-" !== r.alchemy) try {
                        n.push(new t.AlchemyProvider(e, r.alchemy))
                    } catch (i) {}
                    if (t.PocketProvider && "-" !== r.pocket) {
                        const r = ["goerli", "ropsten", "rinkeby"];
                        try {
                            const i = new t.PocketProvider(e);
                            i.network && -1 === r.indexOf(i.network.name) && n.push(i)
                        } catch (i) {}
                    }
                    if (t.CloudflareProvider && "-" !== r.cloudflare) try {
                        n.push(new t.CloudflareProvider(e))
                    } catch (i) {}
                    if (t.AnkrProvider && "-" !== r.ankr) try {
                        n.push(new t.AnkrProvider(e, r.ankr))
                    } catch (i) {}
                    if (0 === n.length) return null;
                    if (t.FallbackProvider) {
                        let i = 1;
                        return null != r.quorum ? i = r.quorum : "homestead" === e && (i = 2), new t.FallbackProvider(n, i)
                    }
                    return n[0]
                };
                return t.renetwork = function(e) {
                    return i(e)
                }, t
            }

            function o(e, t) {
                const r = function(r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null
                };
                return r.renetwork = function(t) {
                    return o(e, t)
                }, r
            }
            const s = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: i("homestead")
                },
                a = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: i("ropsten")
                },
                u = {
                    chainId: 63,
                    name: "classicMordor",
                    _defaultProvider: o("https://www.ethercluster.com/mordor", "classicMordor")
                },
                c = {
                    unspecified: {
                        chainId: 0,
                        name: "unspecified"
                    },
                    homestead: s,
                    mainnet: s,
                    morden: {
                        chainId: 2,
                        name: "morden"
                    },
                    ropsten: a,
                    testnet: a,
                    rinkeby: {
                        chainId: 4,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "rinkeby",
                        _defaultProvider: i("rinkeby")
                    },
                    kovan: {
                        chainId: 42,
                        name: "kovan",
                        _defaultProvider: i("kovan")
                    },
                    goerli: {
                        chainId: 5,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "goerli",
                        _defaultProvider: i("goerli")
                    },
                    kintsugi: {
                        chainId: 1337702,
                        name: "kintsugi"
                    },
                    classic: {
                        chainId: 61,
                        name: "classic",
                        _defaultProvider: o("https://www.ethercluster.com/etc", "classic")
                    },
                    classicMorden: {
                        chainId: 62,
                        name: "classicMorden"
                    },
                    classicMordor: u,
                    classicTestnet: u,
                    classicKotti: {
                        chainId: 6,
                        name: "classicKotti",
                        _defaultProvider: o("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: {
                        chainId: 100,
                        name: "xdai"
                    },
                    matic: {
                        chainId: 137,
                        name: "matic"
                    },
                    maticmum: {
                        chainId: 80001,
                        name: "maticmum"
                    },
                    optimism: {
                        chainId: 10,
                        name: "optimism"
                    },
                    "optimism-kovan": {
                        chainId: 69,
                        name: "optimism-kovan"
                    },
                    "optimism-goerli": {
                        chainId: 420,
                        name: "optimism-goerli"
                    },
                    arbitrum: {
                        chainId: 42161,
                        name: "arbitrum"
                    },
                    "arbitrum-rinkeby": {
                        chainId: 421611,
                        name: "arbitrum-rinkeby"
                    },
                    bnb: {
                        chainId: 56,
                        name: "bnb"
                    },
                    bnbt: {
                        chainId: 97,
                        name: "bnbt"
                    }
                };

            function l(e) {
                if (null == e) return null;
                if ("number" === typeof e) {
                    for (const t in c) {
                        const r = c[t];
                        if (r.chainId === e) return {
                            name: r.name,
                            chainId: r.chainId,
                            ensAddress: r.ensAddress || null,
                            _defaultProvider: r._defaultProvider || null
                        }
                    }
                    return {
                        chainId: e,
                        name: "unknown"
                    }
                }
                if ("string" === typeof e) {
                    const t = c[e];
                    return null == t ? null : {
                        name: t.name,
                        chainId: t.chainId,
                        ensAddress: t.ensAddress,
                        _defaultProvider: t._defaultProvider || null
                    }
                }
                const t = c[e.name];
                if (!t) return "number" !== typeof e.chainId && n.throwArgumentError("invalid network chainId", "network", e), e;
                0 !== e.chainId && e.chainId !== t.chainId && n.throwArgumentError("network chainId mismatch", "network", e);
                let r = e._defaultProvider || null;
                var i;
                return null == r && t._defaultProvider && (r = (i = t._defaultProvider) && "function" === typeof i.renetwork ? t._defaultProvider.renetwork(e) : t._defaultProvider), {
                    name: e.name,
                    chainId: t.chainId,
                    ensAddress: e.ensAddress || t.ensAddress || null,
                    _defaultProvider: r
                }
            }
        },
        55183: function(e, t, r) {
            "use strict";
            r.d(t, {
                n: function() {
                    return o
                }
            });
            var n = r(75398),
                i = r(58254);

            function o(e, t, r, o, s) {
                let a;
                e = (0, n.arrayify)(e), t = (0, n.arrayify)(t);
                let u = 1;
                const c = new Uint8Array(o),
                    l = new Uint8Array(t.length + 4);
                let h, f;
                l.set(t);
                for (let d = 1; d <= u; d++) {
                    l[t.length] = d >> 24 & 255, l[t.length + 1] = d >> 16 & 255, l[t.length + 2] = d >> 8 & 255, l[t.length + 3] = 255 & d;
                    let p = (0, n.arrayify)((0, i.Gy)(s, e, l));
                    a || (a = p.length, f = new Uint8Array(a), u = Math.ceil(o / a), h = o - (u - 1) * a), f.set(p);
                    for (let t = 1; t < r; t++) {
                        p = (0, n.arrayify)((0, i.Gy)(s, e, p));
                        for (let e = 0; e < a; e++) f[e] ^= p[e]
                    }
                    const m = (d - 1) * a,
                        g = d === u ? h : a;
                    c.set((0, n.arrayify)(f).slice(0, g), m)
                }
                return (0, n.hexlify)(c)
            }
        },
        84427: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Description: function() {
                    return m
                },
                checkProperties: function() {
                    return c
                },
                deepCopy: function() {
                    return p
                },
                defineReadOnly: function() {
                    return s
                },
                getStatic: function() {
                    return a
                },
                resolveProperties: function() {
                    return u
                },
                shallowCopy: function() {
                    return l
                }
            });
            var n = r(57036);
            var i = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const o = new n.Logger("properties/5.6.0");

            function s(e, t, r) {
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }

            function a(e, t) {
                for (let r = 0; r < 32; r++) {
                    if (e[t]) return e[t];
                    if (!e.prototype || "object" !== typeof e.prototype) break;
                    e = Object.getPrototypeOf(e.prototype).constructor
                }
                return null
            }

            function u(e) {
                return i(this, void 0, void 0, (function*() {
                    const t = Object.keys(e).map((t => {
                        const r = e[t];
                        return Promise.resolve(r).then((e => ({
                            key: t,
                            value: e
                        })))
                    }));
                    return (yield Promise.all(t)).reduce(((e, t) => (e[t.key] = t.value, e)), {})
                }))
            }

            function c(e, t) {
                e && "object" === typeof e || o.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach((r => {
                    t[r] || o.throwArgumentError("invalid object key - " + r, "transaction:" + r, e)
                }))
            }

            function l(e) {
                const t = {};
                for (const r in e) t[r] = e[r];
                return t
            }
            const h = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function f(e) {
                if (void 0 === e || null === e || h[typeof e]) return !0;
                if (Array.isArray(e) || "object" === typeof e) {
                    if (!Object.isFrozen(e)) return !1;
                    const r = Object.keys(e);
                    for (let n = 0; n < r.length; n++) {
                        let i = null;
                        try {
                            i = e[r[n]]
                        } catch (t) {
                            continue
                        }
                        if (!f(i)) return !1
                    }
                    return !0
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof e, "object", e)
            }

            function d(e) {
                if (f(e)) return e;
                if (Array.isArray(e)) return Object.freeze(e.map((e => p(e))));
                if ("object" === typeof e) {
                    const t = {};
                    for (const r in e) {
                        const n = e[r];
                        void 0 !== n && s(t, r, p(n))
                    }
                    return t
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof e, "object", e)
            }

            function p(e) {
                return d(e)
            }
            class m {
                constructor(e) {
                    for (const t in e) this[t] = p(e[t])
                }
            }
        },
        40919: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                AlchemyProvider: function() {
                    return _e
                },
                AlchemyWebSocketProvider: function() {
                    return ke
                },
                AnkrProvider: function() {
                    return Oe
                },
                BaseProvider: function() {
                    return Q
                },
                CloudflareProvider: function() {
                    return Ne
                },
                EtherscanProvider: function() {
                    return je
                },
                FallbackProvider: function() {
                    return rt
                },
                Formatter: function() {
                    return S
                },
                InfuraProvider: function() {
                    return at
                },
                InfuraWebSocketProvider: function() {
                    return st
                },
                IpcProvider: function() {
                    return nt
                },
                JsonRpcBatchProvider: function() {
                    return ut
                },
                JsonRpcProvider: function() {
                    return he
                },
                JsonRpcSigner: function() {
                    return ue
                },
                NodesmithProvider: function() {
                    return lt
                },
                PocketProvider: function() {
                    return dt
                },
                Provider: function() {
                    return n.zt
                },
                Resolver: function() {
                    return $
                },
                StaticJsonRpcProvider: function() {
                    return be
                },
                UrlJsonRpcProvider: function() {
                    return we
                },
                Web3Provider: function() {
                    return yt
                },
                WebSocketProvider: function() {
                    return ge
                },
                getDefaultProvider: function() {
                    return bt
                },
                getNetwork: function() {
                    return i.H
                },
                isCommunityResourcable: function() {
                    return k
                },
                isCommunityResource: function() {
                    return _
                },
                showThrottleMessage: function() {
                    return A
                }
            });
            var n = r(35239),
                i = r(62678),
                o = r(50511),
                s = r(10528),
                a = r(75398),
                u = r(88210),
                c = r(66154),
                l = r(84427),
                h = r(58254),
                f = r(71320),
                d = r(38637),
                p = r(21273),
                m = r.n(p),
                g = r(57036);
            const y = "providers/5.6.2";
            var v = r(58194),
                b = r(51906),
                w = r(13353);
            const E = new g.Logger(y);
            class S {
                constructor() {
                    E.checkNew(new.target, S), this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    const e = {},
                        t = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        n = this.blockTag.bind(this),
                        i = this.data.bind(this),
                        o = this.hash.bind(this),
                        s = this.hex.bind(this),
                        a = this.number.bind(this),
                        u = this.type.bind(this);
                    return e.transaction = {
                        hash: o,
                        type: u,
                        accessList: S.allowNull(this.accessList.bind(this), null),
                        blockHash: S.allowNull(o, null),
                        blockNumber: S.allowNull(a, null),
                        transactionIndex: S.allowNull(a, null),
                        confirmations: S.allowNull(a, null),
                        from: t,
                        gasPrice: S.allowNull(r),
                        maxPriorityFeePerGas: S.allowNull(r),
                        maxFeePerGas: S.allowNull(r),
                        gasLimit: r,
                        to: S.allowNull(t, null),
                        value: r,
                        nonce: a,
                        data: i,
                        r: S.allowNull(this.uint256),
                        s: S.allowNull(this.uint256),
                        v: S.allowNull(a),
                        creates: S.allowNull(t, null),
                        raw: S.allowNull(i)
                    }, e.transactionRequest = {
                        from: S.allowNull(t),
                        nonce: S.allowNull(a),
                        gasLimit: S.allowNull(r),
                        gasPrice: S.allowNull(r),
                        maxPriorityFeePerGas: S.allowNull(r),
                        maxFeePerGas: S.allowNull(r),
                        to: S.allowNull(t),
                        value: S.allowNull(r),
                        data: S.allowNull((e => this.data(e, !0))),
                        type: S.allowNull(a),
                        accessList: S.allowNull(this.accessList.bind(this), null)
                    }, e.receiptLog = {
                        transactionIndex: a,
                        blockNumber: a,
                        transactionHash: o,
                        address: t,
                        topics: S.arrayOf(o),
                        data: i,
                        logIndex: a,
                        blockHash: o
                    }, e.receipt = {
                        to: S.allowNull(this.address, null),
                        from: S.allowNull(this.address, null),
                        contractAddress: S.allowNull(t, null),
                        transactionIndex: a,
                        root: S.allowNull(s),
                        gasUsed: r,
                        logsBloom: S.allowNull(i),
                        blockHash: o,
                        transactionHash: o,
                        logs: S.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: a,
                        confirmations: S.allowNull(a, null),
                        cumulativeGasUsed: r,
                        effectiveGasPrice: S.allowNull(r),
                        status: S.allowNull(a),
                        type: u
                    }, e.block = {
                        hash: S.allowNull(o),
                        parentHash: o,
                        number: a,
                        timestamp: a,
                        nonce: S.allowNull(s),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: r,
                        gasUsed: r,
                        miner: S.allowNull(t),
                        extraData: i,
                        transactions: S.allowNull(S.arrayOf(o)),
                        baseFeePerGas: S.allowNull(r)
                    }, e.blockWithTransactions = (0, l.shallowCopy)(e.block), e.blockWithTransactions.transactions = S.allowNull(S.arrayOf(this.transactionResponse.bind(this))), e.filter = {
                        fromBlock: S.allowNull(n, void 0),
                        toBlock: S.allowNull(n, void 0),
                        blockHash: S.allowNull(o, void 0),
                        address: S.allowNull(t, void 0),
                        topics: S.allowNull(this.topics.bind(this), void 0)
                    }, e.filterLog = {
                        blockNumber: S.allowNull(a),
                        blockHash: S.allowNull(o),
                        transactionIndex: a,
                        removed: S.allowNull(this.boolean.bind(this)),
                        address: t,
                        data: S.allowFalsish(i, "0x"),
                        topics: S.arrayOf(o),
                        transactionHash: o,
                        logIndex: a
                    }, e
                }
                accessList(e) {
                    return (0, w.accessListify)(e || [])
                }
                number(e) {
                    return "0x" === e ? 0 : s.O$.from(e).toNumber()
                }
                type(e) {
                    return "0x" === e || null == e ? 0 : s.O$.from(e).toNumber()
                }
                bigNumber(e) {
                    return s.O$.from(e)
                }
                boolean(e) {
                    if ("boolean" === typeof e) return e;
                    if ("string" === typeof e) {
                        if ("true" === (e = e.toLowerCase())) return !0;
                        if ("false" === e) return !1
                    }
                    throw new Error("invalid boolean - " + e)
                }
                hex(e, t) {
                    return "string" === typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, a.isHexString)(e)) ? e.toLowerCase() : E.throwArgumentError("invalid hash", "value", e)
                }
                data(e, t) {
                    const r = this.hex(e, t);
                    if (r.length % 2 !== 0) throw new Error("invalid data; odd-length - " + e);
                    return r
                }
                address(e) {
                    return (0, v.getAddress)(e)
                }
                callAddress(e) {
                    if (!(0, a.isHexString)(e, 32)) return null;
                    const t = (0, v.getAddress)((0, a.hexDataSlice)(e, 12));
                    return t === b.d ? null : t
                }
                contractAddress(e) {
                    return (0, v.getContractAddress)(e)
                }
                blockTag(e) {
                    if (null == e) return "latest";
                    if ("earliest" === e) return "0x0";
                    if ("latest" === e || "pending" === e) return e;
                    if ("number" === typeof e || (0, a.isHexString)(e)) return (0, a.hexValue)(e);
                    throw new Error("invalid blockTag")
                }
                hash(e, t) {
                    const r = this.hex(e, t);
                    return 32 !== (0, a.hexDataLength)(r) ? E.throwArgumentError("invalid hash", "value", e) : r
                }
                difficulty(e) {
                    if (null == e) return null;
                    const t = s.O$.from(e);
                    try {
                        return t.toNumber()
                    } catch (r) {}
                    return null
                }
                uint256(e) {
                    if (!(0, a.isHexString)(e)) throw new Error("invalid uint256");
                    return (0, a.hexZeroPad)(e, 32)
                }
                _block(e, t) {
                    null != e.author && null == e.miner && (e.miner = e.author);
                    const r = null != e._difficulty ? e._difficulty : e.difficulty,
                        n = S.check(t, e);
                    return n._difficulty = null == r ? null : s.O$.from(r), n
                }
                block(e) {
                    return this._block(e, this.formats.block)
                }
                blockWithTransactions(e) {
                    return this._block(e, this.formats.blockWithTransactions)
                }
                transactionRequest(e) {
                    return S.check(this.formats.transactionRequest, e)
                }
                transactionResponse(e) {
                    null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && s.O$.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = this.contractAddress(e)), 1 !== e.type && 2 !== e.type || null != e.accessList || (e.accessList = []);
                    const t = S.check(this.formats.transaction, e);
                    if (null != e.chainId) {
                        let r = e.chainId;
                        (0, a.isHexString)(r) && (r = s.O$.from(r).toNumber()), t.chainId = r
                    } else {
                        let r = e.networkId;
                        null == r && null == t.v && (r = e.chainId), (0, a.isHexString)(r) && (r = s.O$.from(r).toNumber()), "number" !== typeof r && null != t.v && (r = (t.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), "number" !== typeof r && (r = 0), t.chainId = r
                    }
                    return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null), t
                }
                transaction(e) {
                    return (0, w.parse)(e)
                }
                receiptLog(e) {
                    return S.check(this.formats.receiptLog, e)
                }
                receipt(e) {
                    const t = S.check(this.formats.receipt, e);
                    if (null != t.root)
                        if (t.root.length <= 4) {
                            const e = s.O$.from(t.root).toNumber();
                            0 === e || 1 === e ? (null != t.status && t.status !== e && E.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: t.root,
                                status: t.status
                            }), t.status = e, delete t.root) : E.throwArgumentError("invalid alt-root-status", "value.root", t.root)
                        } else 66 !== t.root.length && E.throwArgumentError("invalid root hash", "value.root", t.root);
                    return null != t.status && (t.byzantium = !0), t
                }
                topics(e) {
                    return Array.isArray(e) ? e.map((e => this.topics(e))) : null != e ? this.hash(e, !0) : null
                }
                filter(e) {
                    return S.check(this.formats.filter, e)
                }
                filterLog(e) {
                    return S.check(this.formats.filterLog, e)
                }
                static check(e, t) {
                    const r = {};
                    for (const i in e) try {
                        const n = e[i](t[i]);
                        void 0 !== n && (r[i] = n)
                    } catch (n) {
                        throw n.checkKey = i, n.checkValue = t[i], n
                    }
                    return r
                }
                static allowNull(e, t) {
                    return function(r) {
                        return null == r ? t : e(r)
                    }
                }
                static allowFalsish(e, t) {
                    return function(r) {
                        return r ? e(r) : t
                    }
                }
                static arrayOf(e) {
                    return function(t) {
                        if (!Array.isArray(t)) throw new Error("not an array");
                        const r = [];
                        return t.forEach((function(t) {
                            r.push(e(t))
                        })), r
                    }
                }
            }

            function k(e) {
                return e && "function" === typeof e.isCommunityResource
            }

            function _(e) {
                return k(e) && e.isCommunityResource()
            }
            let P = !1;

            function A() {
                P || (P = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
            var x = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const O = new g.Logger(y);

            function R(e) {
                return null == e ? "null" : (32 !== (0, a.hexDataLength)(e) && O.throwArgumentError("invalid topic", "topic", e), e.toLowerCase())
            }

            function C(e) {
                for (e = e.slice(); e.length > 0 && null == e[e.length - 1];) e.pop();
                return e.map((e => {
                    if (Array.isArray(e)) {
                        const t = {};
                        e.forEach((e => {
                            t[R(e)] = !0
                        }));
                        const r = Object.keys(t);
                        return r.sort(), r.join("|")
                    }
                    return R(e)
                })).join("&")
            }

            function N(e) {
                if ("string" === typeof e) {
                    if (e = e.toLowerCase(), 32 === (0, a.hexDataLength)(e)) return "tx:" + e;
                    if (-1 === e.indexOf(":")) return e
                } else {
                    if (Array.isArray(e)) return "filter:*:" + C(e);
                    if (n.Sg.isForkEvent(e)) throw O.warn("not implemented"), new Error("not implemented");
                    if (e && "object" === typeof e) return "filter:" + (e.address || "*") + ":" + C(e.topics || [])
                }
                throw new Error("invalid event - " + e)
            }

            function I() {
                return (new Date).getTime()
            }

            function M(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }
            const T = ["block", "network", "pending", "poll"];
            class L {
                constructor(e, t, r) {
                    (0, l.defineReadOnly)(this, "tag", e), (0, l.defineReadOnly)(this, "listener", t), (0, l.defineReadOnly)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    const e = this.tag.split(":");
                    return "tx" !== e[0] ? null : e[1]
                }
                get filter() {
                    const e = this.tag.split(":");
                    if ("filter" !== e[0]) return null;
                    const t = e[1],
                        r = "" === (n = e[2]) ? [] : n.split(/&/g).map((e => {
                            if ("" === e) return [];
                            const t = e.split("|").map((e => "null" === e ? null : e));
                            return 1 === t.length ? t[0] : t
                        }));
                    var n;
                    const i = {};
                    return r.length > 0 && (i.topics = r), t && "*" !== t && (i.address = t), i
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || T.indexOf(this.tag) >= 0
                }
            }
            const B = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function F(e) {
                return (0, a.hexZeroPad)(s.O$.from(e).toHexString(), 32)
            }

            function U(e) {
                return o.Base58.encode((0, a.concat)([e, (0, a.hexDataSlice)((0, h.JQ)((0, h.JQ)(e)), 0, 4)]))
            }
            const D = new RegExp("^(ipfs)://(.*)$", "i"),
                j = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), D, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function q(e, t) {
                try {
                    return (0, f.ZN)(K(e, t))
                } catch (r) {}
                return null
            }

            function K(e, t) {
                if ("0x" === e) return null;
                const r = s.O$.from((0, a.hexDataSlice)(e, t, t + 32)).toNumber(),
                    n = s.O$.from((0, a.hexDataSlice)(e, r, r + 32)).toNumber();
                return (0, a.hexDataSlice)(e, r + 32, r + 32 + n)
            }

            function z(e) {
                return e.match(/^ipfs:\/\/ipfs\//i) ? e = e.substring(12) : e.match(/^ipfs:\/\//i) ? e = e.substring(7) : O.throwArgumentError("unsupported IPFS format", "link", e), `https://gateway.ipfs.io/ipfs/${e}`
            }

            function G(e) {
                const t = (0, a.arrayify)(e);
                if (t.length > 32) throw new Error("internal; should not happen");
                const r = new Uint8Array(32);
                return r.set(t, 32 - t.length), r
            }

            function H(e) {
                if (e.length % 32 === 0) return e;
                const t = new Uint8Array(32 * Math.ceil(e.length / 32));
                return t.set(e), t
            }

            function V(e) {
                const t = [];
                let r = 0;
                for (let n = 0; n < e.length; n++) t.push(null), r += 32;
                for (let n = 0; n < e.length; n++) {
                    const i = (0, a.arrayify)(e[n]);
                    t[n] = G(r), t.push(G(i.length)), t.push(H(i)), r += 32 + 32 * Math.ceil(i.length / 32)
                }
                return (0, a.hexConcat)(t)
            }
            class $ {
                constructor(e, t, r, n) {
                    (0, l.defineReadOnly)(this, "provider", e), (0, l.defineReadOnly)(this, "name", r), (0, l.defineReadOnly)(this, "address", e.formatter.address(t)), (0, l.defineReadOnly)(this, "_resolvedAddress", n)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then((e => s.O$.from(e).eq(1))).catch((e => {
                        if (e.code === g.Logger.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, e
                    }))), this._supportsEip2544
                }
                _fetch(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        const r = {
                            to: this.address,
                            ccipReadEnabled: !0,
                            data: (0, a.hexConcat)([e, (0, c.VM)(this.name), t || "0x"])
                        };
                        let n = !1;
                        (yield this.supportsWildcard()) && (n = !0, r.data = (0, a.hexConcat)(["0x9061b923", V([(0, c.Kn)(this.name), r.data])]));
                        try {
                            let e = yield this.provider.call(r);
                            return (0, a.arrayify)(e).length % 32 === 4 && O.throwError("resolver threw error", g.Logger.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: e
                            }), n && (e = K(e, 0)), e
                        } catch (i) {
                            if (i.code === g.Logger.errors.CALL_EXCEPTION) return null;
                            throw i
                        }
                    }))
                }
                _fetchBytes(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        const r = yield this._fetch(e, t);
                        return null != r ? K(r, 0) : null
                    }))
                }
                _getAddress(e, t) {
                    const r = B[String(e)];
                    if (null == r && O.throwError(`unsupported coin type: ${e}`, g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${e})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(t);
                    const n = (0, a.arrayify)(t);
                    if (null != r.p2pkh) {
                        const e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (e) {
                            const t = parseInt(e[1], 16);
                            if (e[2].length === 2 * t && t >= 1 && t <= 75) return U((0, a.concat)([
                                [r.p2pkh], "0x" + e[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        const e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (e) {
                            const t = parseInt(e[1], 16);
                            if (e[2].length === 2 * t && t >= 1 && t <= 75) return U((0, a.concat)([
                                [r.p2sh], "0x" + e[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        const e = n[1];
                        let t = n[0];
                        if (0 === t ? 20 !== e && 32 !== e && (t = -1) : t = -1, t >= 0 && n.length === 2 + e && e >= 1 && e <= 75) {
                            const e = m().toWords(n.slice(2));
                            return e.unshift(t), m().encode(r.prefix, e)
                        }
                    }
                    return null
                }
                getAddress(e) {
                    return x(this, void 0, void 0, (function*() {
                        if (null == e && (e = 60), 60 === e) try {
                            const e = yield this._fetch("0x3b3b57de");
                            return "0x" === e || e === u.R ? null : this.provider.formatter.callAddress(e)
                        } catch (n) {
                            if (n.code === g.Logger.errors.CALL_EXCEPTION) return null;
                            throw n
                        }
                        const t = yield this._fetchBytes("0xf1cb7e06", F(e));
                        if (null == t || "0x" === t) return null;
                        const r = this._getAddress(e, t);
                        return null == r && O.throwError("invalid or unsupported coin data", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${e})`,
                            coinType: e,
                            data: t
                        }), r
                    }))
                }
                getAvatar() {
                    return x(this, void 0, void 0, (function*() {
                        const e = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            const t = yield this.getText("avatar");
                            if (null == t) return null;
                            for (let r = 0; r < j.length; r++) {
                                const n = t.match(j[r]);
                                if (null == n) continue;
                                const i = n[1].toLowerCase();
                                switch (i) {
                                    case "https":
                                        return e.push({
                                            type: "url",
                                            content: t
                                        }), {
                                            linkage: e,
                                            url: t
                                        };
                                    case "data":
                                        return e.push({
                                            type: "data",
                                            content: t
                                        }), {
                                            linkage: e,
                                            url: t
                                        };
                                    case "ipfs":
                                        return e.push({
                                            type: "ipfs",
                                            content: t
                                        }), {
                                            linkage: e,
                                            url: z(t)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            const r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";e.push({
                                                type: i,
                                                content: t
                                            });
                                            const o = this._resolvedAddress || (yield this.getAddress()),
                                                u = (n[2] || "").split("/");
                                            if (2 !== u.length) return null;
                                            const c = yield this.provider.formatter.address(u[0]), l = (0, a.hexZeroPad)(s.O$.from(u[1]).toHexString(), 32);
                                            if ("erc721" === i) {
                                                const t = this.provider.formatter.callAddress(yield this.provider.call({
                                                    to: c,
                                                    data: (0, a.hexConcat)(["0x6352211e", l])
                                                }));
                                                if (o !== t) return null;
                                                e.push({
                                                    type: "owner",
                                                    content: t
                                                })
                                            } else if ("erc1155" === i) {
                                                const t = s.O$.from(yield this.provider.call({
                                                    to: c,
                                                    data: (0, a.hexConcat)(["0x00fdd58e", (0, a.hexZeroPad)(o, 32), l])
                                                }));
                                                if (t.isZero()) return null;
                                                e.push({
                                                    type: "balance",
                                                    content: t.toString()
                                                })
                                            }
                                            const h = {
                                                to: this.provider.formatter.address(u[0]),
                                                data: (0, a.hexConcat)([r, l])
                                            };
                                            let f = q(yield this.provider.call(h), 0);
                                            if (null == f) return null;e.push({
                                                type: "metadata-url-base",
                                                content: f
                                            }),
                                            "erc1155" === i && (f = f.replace("{id}", l.substring(2)), e.push({
                                                type: "metadata-url-expanded",
                                                content: f
                                            })),
                                            f.match(/^ipfs:/i) && (f = z(f)),
                                            e.push({
                                                type: "metadata-url",
                                                content: f
                                            });
                                            const p = yield(0, d.fetchJson)(f);
                                            if (!p) return null;e.push({
                                                type: "metadata",
                                                content: JSON.stringify(p)
                                            });
                                            let m = p.image;
                                            if ("string" !== typeof m) return null;
                                            if (m.match(/^(https:\/\/|data:)/i));
                                            else {
                                                if (null == m.match(D)) return null;
                                                e.push({
                                                    type: "url-ipfs",
                                                    content: m
                                                }), m = z(m)
                                            }
                                            return e.push({
                                                type: "url",
                                                content: m
                                            }),
                                            {
                                                linkage: e,
                                                url: m
                                            }
                                        }
                                }
                            }
                        } catch (t) {}
                        return null
                    }))
                }
                getContentHash() {
                    return x(this, void 0, void 0, (function*() {
                        const e = yield this._fetchBytes("0xbc1c58d1");
                        if (null == e || "0x" === e) return null;
                        const t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (t) {
                            const e = parseInt(t[3], 16);
                            if (t[4].length === 2 * e) return "ipfs://" + o.Base58.encode("0x" + t[1])
                        }
                        const r = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            const e = parseInt(r[3], 16);
                            if (r[4].length === 2 * e) return "ipns://" + o.Base58.encode("0x" + r[1])
                        }
                        const n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        return n && 64 === n[1].length ? "bzz://" + n[1] : O.throwError("invalid or unsupported content hash data", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: e
                        })
                    }))
                }
                getText(e) {
                    return x(this, void 0, void 0, (function*() {
                        let t = (0, f.Y0)(e);
                        t = (0, a.concat)([F(64), F(t.length), t]), t.length % 32 !== 0 && (t = (0, a.concat)([t, (0, a.hexZeroPad)("0x", 32 - e.length % 32)]));
                        const r = yield this._fetchBytes("0x59d1d43c", (0, a.hexlify)(t));
                        return null == r || "0x" === r ? null : (0, f.ZN)(r)
                    }))
                }
            }
            let W = null,
                J = 1;
            class Q extends n.zt {
                constructor(e) {
                    if (O.checkNew(new.target, n.zt), super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), (0, l.defineReadOnly)(this, "anyNetwork", "any" === e), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise) this._networkPromise = e, e.catch((e => {})), this._ready().catch((e => {}));
                    else {
                        const t = (0, l.getStatic)(new.target, "getNetwork")(e);
                        t ? ((0, l.defineReadOnly)(this, "_network", t), this.emit("network", t, null)) : O.throwArgumentError("invalid network", "network", e)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return x(this, void 0, void 0, (function*() {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise) try {
                                t = yield this._networkPromise
                            } catch (e) {}
                            null == t && (t = yield this.detectNetwork()), t || O.throwError("no network detected", g.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : (0, l.defineReadOnly)(this, "_network", t), this.emit("network", t, null))
                        }
                        return this._network
                    }))
                }
                get ready() {
                    return (0, d.poll)((() => this._ready().then((e => e), (e => {
                        if (e.code !== g.Logger.errors.NETWORK_ERROR || "noNetwork" !== e.event) throw e
                    }))))
                }
                static getFormatter() {
                    return null == W && (W = new S), W
                }
                static getNetwork(e) {
                    return (0, i.H)(null == e ? "homestead" : e)
                }
                ccipReadFetch(e, t, r) {
                    return x(this, void 0, void 0, (function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        const n = e.to.toLowerCase(),
                            i = t.toLowerCase(),
                            o = [];
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e],
                                s = t.replace("{sender}", n).replace("{data}", i),
                                a = t.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: i,
                                    sender: n
                                }),
                                u = yield(0, d.fetchJson)({
                                    url: s,
                                    errorPassThrough: !0
                                }, a, ((e, t) => (e.status = t.statusCode, e)));
                            if (u.data) return u.data;
                            const c = u.message || "unknown error";
                            if (u.status >= 400 && u.status < 500) return O.throwError(`response not found during CCIP fetch: ${c}`, g.Logger.errors.SERVER_ERROR, {
                                url: t,
                                errorMessage: c
                            });
                            o.push(c)
                        }
                        return O.throwError(`error encountered during CCIP fetch: ${o.map((e=>JSON.stringify(e))).join(", ")}`, g.Logger.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: o
                        })
                    }))
                }
                _getInternalBlockNumber(e) {
                    return x(this, void 0, void 0, (function*() {
                        if (yield this._ready(), e > 0)
                            for (; this._internalBlockNumber;) {
                                const t = this._internalBlockNumber;
                                try {
                                    const r = yield t;
                                    if (I() - r.respTime <= e) return r.blockNumber;
                                    break
                                } catch (n) {
                                    if (this._internalBlockNumber === t) break
                                }
                            }
                        const t = I(),
                            r = (0, l.resolveProperties)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then((e => null), (e => e))
                            }).then((({
                                blockNumber: e,
                                networkError: n
                            }) => {
                                if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                                const i = I();
                                return (e = s.O$.from(e).toNumber()) < this._maxInternalBlockNumber && (e = this._maxInternalBlockNumber), this._maxInternalBlockNumber = e, this._setFastBlockNumber(e), {
                                    blockNumber: e,
                                    reqTime: t,
                                    respTime: i
                                }
                            }));
                        return this._internalBlockNumber = r, r.catch((e => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        })), (yield r).blockNumber
                    }))
                }
                poll() {
                    return x(this, void 0, void 0, (function*() {
                        const e = J++,
                            t = [];
                        let r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (n) {
                            return void this.emit("error", n)
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", e, r), r !== this._lastBlockNumber) {
                            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) O.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", O.makeError("network block skew detected", g.Logger.errors.NETWORK_ERROR, {
                                blockNumber: r,
                                event: "blockSkew",
                                previousBlockNumber: this._emitted.block
                            })), this.emit("block", r);
                            else
                                for (let e = this._emitted.block + 1; e <= r; e++) this.emit("block", e);
                            this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((e => {
                                if ("block" === e) return;
                                const t = this._emitted[e];
                                "pending" !== t && r - t > 12 && delete this._emitted[e]
                            }))), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach((e => {
                                switch (e.type) {
                                    case "tx":
                                        {
                                            const r = e.hash;
                                            let n = this.getTransactionReceipt(r).then((e => e && null != e.blockNumber ? (this._emitted["t:" + r] = e.blockNumber, this.emit(r, e), null) : null)).catch((e => {
                                                this.emit("error", e)
                                            }));t.push(n);
                                            break
                                        }
                                    case "filter":
                                        if (!e._inflight) {
                                            e._inflight = !0;
                                            const n = e.filter;
                                            n.fromBlock = e._lastBlockNumber + 1, n.toBlock = r, n.toBlock - this._maxFilterBlockRange > n.fromBlock && (n.fromBlock = n.toBlock - this._maxFilterBlockRange);
                                            const i = this.getLogs(n).then((t => {
                                                e._inflight = !1, 0 !== t.length && t.forEach((t => {
                                                    t.blockNumber > e._lastBlockNumber && (e._lastBlockNumber = t.blockNumber), this._emitted["b:" + t.blockHash] = t.blockNumber, this._emitted["t:" + t.transactionHash] = t.blockNumber, this.emit(n, t)
                                                }))
                                            })).catch((t => {
                                                this.emit("error", t), e._inflight = !1
                                            }));
                                            t.push(i)
                                        }
                                }
                            })), this._lastBlockNumber = r, Promise.all(t).then((() => {
                                this.emit("didPoll", e)
                            })).catch((e => {
                                this.emit("error", e)
                            }))
                        } else this.emit("didPoll", e)
                    }))
                }
                resetEventsBlock(e) {
                    this._lastBlockNumber = e - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return x(this, void 0, void 0, (function*() {
                        return O.throwError("provider does not support network detection", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    }))
                }
                getNetwork() {
                    return x(this, void 0, void 0, (function*() {
                        const e = yield this._ready(), t = yield this.detectNetwork();
                        if (e.chainId !== t.chainId) {
                            if (this.anyNetwork) return this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e), yield M(0), this._network;
                            const r = O.makeError("underlying network changed", g.Logger.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: e,
                                detectedNetwork: t
                            });
                            throw this.emit("error", r), r
                        }
                        return e
                    }))
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((e => {
                        this._setFastBlockNumber(e)
                    }), (e => {})), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(e) {
                    e && !this._poller ? (this._poller = setInterval((() => {
                        this.poll()
                    }), this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout((() => {
                        this.poll(), this._bootstrapPoll = setTimeout((() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }), this.pollingInterval)
                    }), 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(e) {
                    if ("number" !== typeof e || e <= 0 || parseInt(String(e)) != e) throw new Error("invalid polling interval");
                    this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval((() => {
                        this.poll()
                    }), this._pollingInterval))
                }
                _getFastBlockNumber() {
                    const e = I();
                    return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then((e => ((null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e), this._fastBlockNumber)))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(e) {
                    null != this._fastBlockNumber && e < this._fastBlockNumber || (this._fastQueryDate = I(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)))
                }
                waitForTransaction(e, t, r) {
                    return x(this, void 0, void 0, (function*() {
                        return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null)
                    }))
                }
                _waitForTransaction(e, t, r, n) {
                    return x(this, void 0, void 0, (function*() {
                        const i = yield this.getTransactionReceipt(e);
                        return (i ? i.confirmations : 0) >= t ? i : new Promise(((i, o) => {
                            const s = [];
                            let a = !1;
                            const u = function() {
                                    return !!a || (a = !0, s.forEach((e => {
                                        e()
                                    })), !1)
                                },
                                c = e => {
                                    e.confirmations < t || u() || i(e)
                                };
                            if (this.on(e, c), s.push((() => {
                                    this.removeListener(e, c)
                                })), n) {
                                let r = n.startBlock,
                                    i = null;
                                const c = s => x(this, void 0, void 0, (function*() {
                                    a || (yield M(1e3), this.getTransactionCount(n.from).then((l => x(this, void 0, void 0, (function*() {
                                        if (!a) {
                                            if (l <= n.nonce) r = s;
                                            else {
                                                {
                                                    const t = yield this.getTransaction(e);
                                                    if (t && null != t.blockNumber) return
                                                }
                                                for (null == i && (i = r - 3, i < n.startBlock && (i = n.startBlock)); i <= s;) {
                                                    if (a) return;
                                                    const r = yield this.getBlockWithTransactions(i);
                                                    for (let i = 0; i < r.transactions.length; i++) {
                                                        const s = r.transactions[i];
                                                        if (s.hash === e) return;
                                                        if (s.from === n.from && s.nonce === n.nonce) {
                                                            if (a) return;
                                                            const r = yield this.waitForTransaction(s.hash, t);
                                                            if (u()) return;
                                                            let i = "replaced";
                                                            return s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"), void o(O.makeError("transaction was replaced", g.Logger.errors.TRANSACTION_REPLACED, {
                                                                cancelled: "replaced" === i || "cancelled" === i,
                                                                reason: i,
                                                                replacement: this._wrapTransaction(s),
                                                                hash: e,
                                                                receipt: r
                                                            }))
                                                        }
                                                    }
                                                    i++
                                                }
                                            }
                                            a || this.once("block", c)
                                        }
                                    }))), (e => {
                                        a || this.once("block", c)
                                    })))
                                }));
                                if (a) return;
                                this.once("block", c), s.push((() => {
                                    this.removeListener("block", c)
                                }))
                            }
                            if ("number" === typeof r && r > 0) {
                                const e = setTimeout((() => {
                                    u() || o(O.makeError("timeout exceeded", g.Logger.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }), r);
                                e.unref && e.unref(), s.push((() => {
                                    clearTimeout(e)
                                }))
                            }
                        }))
                    }))
                }
                getBlockNumber() {
                    return x(this, void 0, void 0, (function*() {
                        return this._getInternalBlockNumber(0)
                    }))
                }
                getGasPrice() {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield this.perform("getGasPrice", {});
                        try {
                            return s.O$.from(e)
                        } catch (t) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: e,
                                error: t
                            })
                        }
                    }))
                }
                getBalance(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, l.resolveProperties)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(t)
                        }), n = yield this.perform("getBalance", r);
                        try {
                            return s.O$.from(n)
                        } catch (i) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: n,
                                error: i
                            })
                        }
                    }))
                }
                getTransactionCount(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, l.resolveProperties)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(t)
                        }), n = yield this.perform("getTransactionCount", r);
                        try {
                            return s.O$.from(n).toNumber()
                        } catch (i) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: n,
                                error: i
                            })
                        }
                    }))
                }
                getCode(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, l.resolveProperties)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(t)
                        }), n = yield this.perform("getCode", r);
                        try {
                            return (0, a.hexlify)(n)
                        } catch (i) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: n,
                                error: i
                            })
                        }
                    }))
                }
                getStorageAt(e, t, r) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const n = yield(0, l.resolveProperties)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(t).then((e => (0, a.hexValue)(e)))
                        }), i = yield this.perform("getStorageAt", n);
                        try {
                            return (0, a.hexlify)(i)
                        } catch (o) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: n,
                                result: i,
                                error: o
                            })
                        }
                    }))
                }
                _wrapTransaction(e, t, r) {
                    if (null != t && 32 !== (0, a.hexDataLength)(t)) throw new Error("invalid response - sendTransaction");
                    const n = e;
                    return null != t && e.hash !== t && O.throwError("Transaction hash mismatch from Provider.sendTransaction.", g.Logger.errors.UNKNOWN_ERROR, {
                        expectedHash: e.hash,
                        returnedHash: t
                    }), n.wait = (t, n) => x(this, void 0, void 0, (function*() {
                        let i;
                        null == t && (t = 1), null == n && (n = 0), 0 !== t && null != r && (i = {
                            data: e.data,
                            from: e.from,
                            nonce: e.nonce,
                            to: e.to,
                            value: e.value,
                            startBlock: r
                        });
                        const o = yield this._waitForTransaction(e.hash, t, n, i);
                        return null == o && 0 === t ? null : (this._emitted["t:" + e.hash] = o.blockNumber, 0 === o.status && O.throwError("transaction failed", g.Logger.errors.CALL_EXCEPTION, {
                            transactionHash: e.hash,
                            transaction: e,
                            receipt: o
                        }), o)
                    })), n
                }
                sendTransaction(e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield Promise.resolve(e).then((e => (0, a.hexlify)(e))), r = this.formatter.transaction(e);
                        null == r.confirmations && (r.confirmations = 0);
                        const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            const e = yield this.perform("sendTransaction", {
                                signedTransaction: t
                            });
                            return this._wrapTransaction(r, e, n)
                        } catch (i) {
                            throw i.transaction = r, i.transactionHash = r.hash, i
                        }
                    }))
                }
                _getTransactionRequest(e) {
                    return x(this, void 0, void 0, (function*() {
                        const t = yield e, r = {};
                        return ["from", "to"].forEach((e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then((e => e ? this._getAddress(e) : null)))
                        })), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then((e => e ? s.O$.from(e) : null)))
                        })), ["type"].forEach((e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then((e => null != e ? e : null)))
                        })), t.accessList && (r.accessList = this.formatter.accessList(t.accessList)), ["data"].forEach((e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then((e => e ? (0, a.hexlify)(e) : null)))
                        })), this.formatter.transactionRequest(yield(0, l.resolveProperties)(r))
                    }))
                }
                _getFilter(e) {
                    return x(this, void 0, void 0, (function*() {
                        e = yield e;
                        const t = {};
                        return null != e.address && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach((r => {
                            null != e[r] && (t[r] = e[r])
                        })), ["fromBlock", "toBlock"].forEach((r => {
                            null != e[r] && (t[r] = this._getBlockTag(e[r]))
                        })), this.formatter.filter(yield(0, l.resolveProperties)(t))
                    }))
                }
                _call(e, t, r) {
                    return x(this, void 0, void 0, (function*() {
                        r >= 10 && O.throwError("CCIP read exceeded maximum redirections", g.Logger.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: e
                        });
                        const n = e.to,
                            i = yield this.perform("call", {
                                transaction: e,
                                blockTag: t
                            });
                        if (r >= 0 && "latest" === t && null != n && "0x556f1830" === i.substring(0, 10) && (0, a.hexDataLength)(i) % 32 === 4) try {
                            const o = (0, a.hexDataSlice)(i, 4),
                                u = (0, a.hexDataSlice)(o, 0, 32);
                            s.O$.from(u).eq(n) || O.throwError("CCIP Read sender did not match", g.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: e,
                                data: i
                            });
                            const c = [],
                                l = s.O$.from((0, a.hexDataSlice)(o, 32, 64)).toNumber(),
                                h = s.O$.from((0, a.hexDataSlice)(o, l, l + 32)).toNumber(),
                                f = (0, a.hexDataSlice)(o, l + 32);
                            for (let t = 0; t < h; t++) {
                                const r = q(f, 32 * t);
                                null == r && O.throwError("CCIP Read contained corrupt URL string", g.Logger.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: e,
                                    data: i
                                }), c.push(r)
                            }
                            const d = K(o, 64);
                            s.O$.from((0, a.hexDataSlice)(o, 100, 128)).isZero() || O.throwError("CCIP Read callback selector included junk", g.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: e,
                                data: i
                            });
                            const p = (0, a.hexDataSlice)(o, 96, 100),
                                m = K(o, 128),
                                y = yield this.ccipReadFetch(e, d, c);
                            null == y && O.throwError("CCIP Read disabled or provided no URLs", g.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: e,
                                data: i
                            });
                            const v = {
                                to: n,
                                data: (0, a.hexConcat)([p, V([y, m])])
                            };
                            return this._call(v, t, r + 1)
                        } catch (o) {
                            if (o.code === g.Logger.errors.SERVER_ERROR) throw o
                        }
                        try {
                            return (0, a.hexlify)(i)
                        } catch (o) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: e,
                                    blockTag: t
                                },
                                result: i,
                                error: o
                            })
                        }
                    }))
                }
                call(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, l.resolveProperties)({
                            transaction: this._getTransactionRequest(e),
                            blockTag: this._getBlockTag(t),
                            ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    }))
                }
                estimateGas(e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield(0, l.resolveProperties)({
                            transaction: this._getTransactionRequest(e)
                        }), r = yield this.perform("estimateGas", t);
                        try {
                            return s.O$.from(r)
                        } catch (n) {
                            return O.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: t,
                                result: r,
                                error: n
                            })
                        }
                    }))
                }
                _getAddress(e) {
                    return x(this, void 0, void 0, (function*() {
                        "string" !== typeof(e = yield e) && O.throwArgumentError("invalid address or ENS name", "name", e);
                        const t = yield this.resolveName(e);
                        return null == t && O.throwError("ENS name not configured", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(e)})`
                        }), t
                    }))
                }
                _getBlock(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), e = yield e;
                        let r = -128;
                        const n = {
                            includeTransactions: !!t
                        };
                        if ((0, a.isHexString)(e, 32)) n.blockHash = e;
                        else try {
                            n.blockTag = yield this._getBlockTag(e), (0, a.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                        } catch (i) {
                            O.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e)
                        }
                        return (0, d.poll)((() => x(this, void 0, void 0, (function*() {
                            const e = yield this.perform("getBlock", n);
                            if (null == e) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                            if (t) {
                                let t = null;
                                for (let n = 0; n < e.transactions.length; n++) {
                                    const r = e.transactions[n];
                                    if (null == r.blockNumber) r.confirmations = 0;
                                    else if (null == r.confirmations) {
                                        null == t && (t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let e = t - r.blockNumber + 1;
                                        e <= 0 && (e = 1), r.confirmations = e
                                    }
                                }
                                const r = this.formatter.blockWithTransactions(e);
                                return r.transactions = r.transactions.map((e => this._wrapTransaction(e))), r
                            }
                            return this.formatter.block(e)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getBlock(e) {
                    return this._getBlock(e, !1)
                }
                getBlockWithTransactions(e) {
                    return this._getBlock(e, !0)
                }
                getTransaction(e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), e = yield e;
                        const t = {
                            transactionHash: this.formatter.hash(e, !0)
                        };
                        return (0, d.poll)((() => x(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransaction", t);
                            if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
                            const n = this.formatter.transactionResponse(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                e <= 0 && (e = 1), n.confirmations = e
                            }
                            return this._wrapTransaction(n)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getTransactionReceipt(e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), e = yield e;
                        const t = {
                            transactionHash: this.formatter.hash(e, !0)
                        };
                        return (0, d.poll)((() => x(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransactionReceipt", t);
                            if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
                            if (null == r.blockHash) return;
                            const n = this.formatter.receipt(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                e <= 0 && (e = 1), n.confirmations = e
                            }
                            return n
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getLogs(e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield(0, l.resolveProperties)({
                            filter: this._getFilter(e)
                        }), r = yield this.perform("getLogs", t);
                        return r.forEach((e => {
                            null == e.removed && (e.removed = !1)
                        })), S.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                    }))
                }
                getEtherPrice() {
                    return x(this, void 0, void 0, (function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    }))
                }
                _getBlockTag(e) {
                    return x(this, void 0, void 0, (function*() {
                        if ("number" === typeof(e = yield e) && e < 0) {
                            e % 1 && O.throwArgumentError("invalid BlockTag", "blockTag", e);
                            let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return t += e, t < 0 && (t = 0), this.formatter.blockTag(t)
                        }
                        return this.formatter.blockTag(e)
                    }))
                }
                getResolver(e) {
                    return x(this, void 0, void 0, (function*() {
                        let t = e;
                        for (;;) {
                            if ("" === t || "." === t) return null;
                            if ("eth" !== e && "eth" === t) return null;
                            const r = yield this._getResolver(t, "getResolver");
                            if (null != r) {
                                const n = new $(this, r, e);
                                return t === e || (yield n.supportsWildcard()) ? n : null
                            }
                            t = t.split(".").slice(1).join(".")
                        }
                    }))
                }
                _getResolver(e, t) {
                    return x(this, void 0, void 0, (function*() {
                        null == t && (t = "ENS");
                        const r = yield this.getNetwork();
                        r.ensAddress || O.throwError("network does not support ENS", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: t,
                            network: r.name
                        });
                        try {
                            const t = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + (0, c.VM)(e).substring(2)
                            });
                            return this.formatter.callAddress(t)
                        } catch (n) {}
                        return null
                    }))
                }
                resolveName(e) {
                    return x(this, void 0, void 0, (function*() {
                        e = yield e;
                        try {
                            return Promise.resolve(this.formatter.address(e))
                        } catch (r) {
                            if ((0, a.isHexString)(e)) throw r
                        }
                        "string" !== typeof e && O.throwArgumentError("invalid ENS name", "name", e);
                        const t = yield this.getResolver(e);
                        return t ? yield t.getAddress(): null
                    }))
                }
                lookupAddress(e) {
                    return x(this, void 0, void 0, (function*() {
                        e = yield e;
                        const t = (e = this.formatter.address(e)).substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(t, "lookupAddress");
                        if (null == r) return null;
                        const n = q(yield this.call({
                            to: r,
                            data: "0x691f3431" + (0, c.VM)(t).substring(2)
                        }), 0);
                        return (yield this.resolveName(n)) != e ? null : n
                    }))
                }
                getAvatar(e) {
                    return x(this, void 0, void 0, (function*() {
                        let t = null;
                        if ((0, a.isHexString)(e)) {
                            const r = this.formatter.address(e).substring(2).toLowerCase() + ".addr.reverse",
                                i = yield this._getResolver(r, "getAvatar");
                            if (!i) return null;
                            t = new $(this, i, r);
                            try {
                                const e = yield t.getAvatar();
                                if (e) return e.url
                            } catch (n) {
                                if (n.code !== g.Logger.errors.CALL_EXCEPTION) throw n
                            }
                            try {
                                const e = q(yield this.call({
                                    to: i,
                                    data: "0x691f3431" + (0, c.VM)(r).substring(2)
                                }), 0);
                                t = yield this.getResolver(e)
                            } catch (n) {
                                if (n.code !== g.Logger.errors.CALL_EXCEPTION) throw n;
                                return null
                            }
                        } else if (t = yield this.getResolver(e), !t) return null;
                        const r = yield t.getAvatar();
                        return null == r ? null : r.url
                    }))
                }
                perform(e, t) {
                    return O.throwError(e + " not implemented", g.Logger.errors.NOT_IMPLEMENTED, {
                        operation: e
                    })
                }
                _startEvent(e) {
                    this.polling = this._events.filter((e => e.pollable())).length > 0
                }
                _stopEvent(e) {
                    this.polling = this._events.filter((e => e.pollable())).length > 0
                }
                _addEventListener(e, t, r) {
                    const n = new L(N(e), t, r);
                    return this._events.push(n), this._startEvent(n), this
                }
                on(e, t) {
                    return this._addEventListener(e, t, !1)
                }
                once(e, t) {
                    return this._addEventListener(e, t, !0)
                }
                emit(e, ...t) {
                    let r = !1,
                        n = [],
                        i = N(e);
                    return this._events = this._events.filter((e => e.tag !== i || (setTimeout((() => {
                        e.listener.apply(this, t)
                    }), 0), r = !0, !e.once || (n.push(e), !1)))), n.forEach((e => {
                        this._stopEvent(e)
                    })), r
                }
                listenerCount(e) {
                    if (!e) return this._events.length;
                    let t = N(e);
                    return this._events.filter((e => e.tag === t)).length
                }
                listeners(e) {
                    if (null == e) return this._events.map((e => e.listener));
                    let t = N(e);
                    return this._events.filter((e => e.tag === t)).map((e => e.listener))
                }
                off(e, t) {
                    if (null == t) return this.removeAllListeners(e);
                    const r = [];
                    let n = !1,
                        i = N(e);
                    return this._events = this._events.filter((e => e.tag !== i || e.listener != t || (!!n || (n = !0, r.push(e), !1)))), r.forEach((e => {
                        this._stopEvent(e)
                    })), this
                }
                removeAllListeners(e) {
                    let t = [];
                    if (null == e) t = this._events, this._events = [];
                    else {
                        const r = N(e);
                        this._events = this._events.filter((e => e.tag !== r || (t.push(e), !1)))
                    }
                    return t.forEach((e => {
                        this._stopEvent(e)
                    })), this
                }
            }
            var Z = r(28612),
                X = r(79378),
                Y = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                u(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(e) {
                            try {
                                u(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((n = n.apply(e, t || [])).next())
                    }))
                };
            const ee = new g.Logger(y),
                te = ["call", "estimateGas"];

            function re(e) {
                if (null == e) return null;
                if ("string" === typeof e.message && e.message.match("reverted") && (0, a.isHexString)(e.data)) return {
                    message: e.message,
                    data: e.data
                };
                if ("object" === typeof e) {
                    for (const t in e) {
                        const r = re(e[t]);
                        if (r) return r
                    }
                    return null
                }
                if ("string" === typeof e) try {
                    return re(JSON.parse(e))
                } catch (t) {}
                return null
            }

            function ne(e, t, r) {
                if ("call" === e) {
                    const e = re(t);
                    if (e) return e.data;
                    ee.throwError("missing revert data in call exception", g.Logger.errors.CALL_EXCEPTION, {
                        error: t,
                        data: "0x"
                    })
                }
                let n = t.message;
                t.code === g.Logger.errors.SERVER_ERROR && t.error && "string" === typeof t.error.message ? n = t.error.message : "string" === typeof t.body ? n = t.body : "string" === typeof t.responseText && (n = t.responseText), n = (n || "").toLowerCase();
                const i = r.transaction || r.signedTransaction;
                throw n.match(/insufficient funds|base fee exceeds gas limit/) && ee.throwError("insufficient funds for intrinsic transaction cost", g.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: i
                }), n.match(/nonce too low/) && ee.throwError("nonce has already been used", g.Logger.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: i
                }), n.match(/replacement transaction underpriced/) && ee.throwError("replacement fee too low", g.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: i
                }), n.match(/only replay-protected/) && ee.throwError("legacy pre-eip-155 transactions not supported", g.Logger.errors.UNSUPPORTED_OPERATION, {
                    error: t,
                    method: e,
                    transaction: i
                }), te.indexOf(e) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && ee.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", g.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: i
                }), t
            }

            function ie(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }

            function oe(e) {
                if (e.error) {
                    const t = new Error(e.error.message);
                    throw t.code = e.error.code, t.data = e.error.data, t
                }
                return e.result
            }

            function se(e) {
                return e ? e.toLowerCase() : e
            }
            const ae = {};
            class ue extends Z.Signer {
                constructor(e, t, r) {
                    if (ee.checkNew(new.target, ue), super(), e !== ae) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    (0, l.defineReadOnly)(this, "provider", t), null == r && (r = 0), "string" === typeof r ? ((0, l.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), (0, l.defineReadOnly)(this, "_index", null)) : "number" === typeof r ? ((0, l.defineReadOnly)(this, "_index", r), (0, l.defineReadOnly)(this, "_address", null)) : ee.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(e) {
                    return ee.throwError("cannot alter JSON-RPC Signer connection", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new ce(ae, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((e => (e.length <= this._index && ee.throwError("unknown account #" + this._index, g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(e[this._index]))))
                }
                sendUncheckedTransaction(e) {
                    e = (0, l.shallowCopy)(e);
                    const t = this.getAddress().then((e => (e && (e = e.toLowerCase()), e)));
                    if (null == e.gasLimit) {
                        const r = (0, l.shallowCopy)(e);
                        r.from = t, e.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != e.to && (e.to = Promise.resolve(e.to).then((e => Y(this, void 0, void 0, (function*() {
                        if (null == e) return null;
                        const t = yield this.provider.resolveName(e);
                        return null == t && ee.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
                    }))))), (0, l.resolveProperties)({
                        tx: (0, l.resolveProperties)(e),
                        sender: t
                    }).then((({
                        tx: t,
                        sender: r
                    }) => {
                        null != t.from ? t.from.toLowerCase() !== r && ee.throwArgumentError("from address mismatch", "transaction", e) : t.from = r;
                        const n = this.provider.constructor.hexlifyTransaction(t, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [n]).then((e => e), (e => ne("sendTransaction", e, n)))
                    }))
                }
                signTransaction(e) {
                    return ee.throwError("signing transactions is unsupported", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(e) {
                    return Y(this, void 0, void 0, (function*() {
                        const t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
                        try {
                            return yield(0, d.poll)((() => Y(this, void 0, void 0, (function*() {
                                const e = yield this.provider.getTransaction(r);
                                if (null !== e) return this.provider._wrapTransaction(e, r, t)
                            }))), {
                                oncePoll: this.provider
                            })
                        } catch (n) {
                            throw n.transactionHash = r, n
                        }
                    }))
                }
                signMessage(e) {
                    return Y(this, void 0, void 0, (function*() {
                        const t = "string" === typeof e ? (0, f.Y0)(e) : e,
                            r = yield this.getAddress();
                        return yield this.provider.send("personal_sign", [(0, a.hexlify)(t), r.toLowerCase()])
                    }))
                }
                _legacySignMessage(e) {
                    return Y(this, void 0, void 0, (function*() {
                        const t = "string" === typeof e ? (0, f.Y0)(e) : e,
                            r = yield this.getAddress();
                        return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, a.hexlify)(t)])
                    }))
                }
                _signTypedData(e, t, r) {
                    return Y(this, void 0, void 0, (function*() {
                        const n = yield X.E.resolveNames(e, t, r, (e => this.provider.resolveName(e))), i = yield this.getAddress();
                        return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(X.E.getPayload(n.domain, t, n.value))])
                    }))
                }
                unlock(e) {
                    return Y(this, void 0, void 0, (function*() {
                        const t = this.provider,
                            r = yield this.getAddress();
                        return t.send("personal_unlockAccount", [r.toLowerCase(), e, null])
                    }))
                }
            }
            class ce extends ue {
                sendTransaction(e) {
                    return this.sendUncheckedTransaction(e).then((e => ({
                        hash: e,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: t => this.provider.waitForTransaction(e, t)
                    })))
                }
            }
            const le = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            class he extends Q {
                constructor(e, t) {
                    ee.checkNew(new.target, he);
                    let r = t;
                    null == r && (r = new Promise(((e, t) => {
                        setTimeout((() => {
                            this.detectNetwork().then((t => {
                                e(t)
                            }), (e => {
                                t(e)
                            }))
                        }), 0)
                    }))), super(r), e || (e = (0, l.getStatic)(this.constructor, "defaultUrl")()), "string" === typeof e ? (0, l.defineReadOnly)(this, "connection", Object.freeze({
                        url: e
                    })) : (0, l.defineReadOnly)(this, "connection", Object.freeze((0, l.shallowCopy)(e))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout((() => {
                        this._cache.detectNetwork = null
                    }), 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return Y(this, void 0, void 0, (function*() {
                        yield ie(0);
                        let e = null;
                        try {
                            e = yield this.send("eth_chainId", [])
                        } catch (t) {
                            try {
                                e = yield this.send("net_version", [])
                            } catch (t) {}
                        }
                        if (null != e) {
                            const r = (0, l.getStatic)(this.constructor, "getNetwork");
                            try {
                                return r(s.O$.from(e).toNumber())
                            } catch (t) {
                                return ee.throwError("could not detect network", g.Logger.errors.NETWORK_ERROR, {
                                    chainId: e,
                                    event: "invalidNetwork",
                                    serverError: t
                                })
                            }
                        }
                        return ee.throwError("could not detect network", g.Logger.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    }))
                }
                getSigner(e) {
                    return new ue(ae, this, e)
                }
                getUncheckedSigner(e) {
                    return this.getSigner(e).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then((e => e.map((e => this.formatter.address(e)))))
                }
                send(e, t) {
                    const r = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: (0, l.deepCopy)(r),
                        provider: this
                    });
                    const n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                    if (n && this._cache[e]) return this._cache[e];
                    const i = (0, d.fetchJson)(this.connection, JSON.stringify(r), oe).then((e => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: e,
                        provider: this
                    }), e)), (e => {
                        throw this.emit("debug", {
                            action: "response",
                            error: e,
                            request: r,
                            provider: this
                        }), e
                    }));
                    return n && (this._cache[e] = i, setTimeout((() => {
                        this._cache[e] = null
                    }), 0)), i
                }
                prepareRequest(e, t) {
                    switch (e) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [se(t.address), t.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [se(t.address), t.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [se(t.address), t.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [se(t.address), t.position, t.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [t.signedTransaction]];
                        case "getBlock":
                            return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [t.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [t.transactionHash]];
                        case "call":
                            return ["eth_call", [(0, l.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, {
                                from: !0
                            }), t.blockTag]];
                        case "estimateGas":
                            return ["eth_estimateGas", [(0, l.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, {
                                from: !0
                            })]];
                        case "getLogs":
                            return t.filter && null != t.filter.address && (t.filter.address = se(t.filter.address)), ["eth_getLogs", [t.filter]]
                    }
                    return null
                }
                perform(e, t) {
                    return Y(this, void 0, void 0, (function*() {
                        if ("call" === e || "estimateGas" === e) {
                            const e = t.transaction;
                            if (e && null != e.type && s.O$.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                                const r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((t = (0, l.shallowCopy)(t)).transaction = (0, l.shallowCopy)(e), delete t.transaction.type)
                            }
                        }
                        const r = this.prepareRequest(e, t);
                        null == r && ee.throwError(e + " not implemented", g.Logger.errors.NOT_IMPLEMENTED, {
                            operation: e
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (n) {
                            return ne(e, n, t)
                        }
                    }))
                }
                _startEvent(e) {
                    "pending" === e.tag && this._startPending(), super._startEvent(e)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    const e = this,
                        t = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = t, t.then((function(r) {
                        return function n() {
                            e.send("eth_getFilterChanges", [r]).then((function(r) {
                                if (e._pendingFilter != t) return null;
                                let n = Promise.resolve();
                                return r.forEach((function(t) {
                                    e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then((function() {
                                        return e.getTransaction(t).then((function(t) {
                                            return e.emit("pending", t), null
                                        }))
                                    }))
                                })), n.then((function() {
                                    return ie(1e3)
                                }))
                            })).then((function() {
                                if (e._pendingFilter == t) return setTimeout((function() {
                                    n()
                                }), 0), null;
                                e.send("eth_uninstallFilter", [r])
                            })).catch((e => {}))
                        }(), r
                    })).catch((e => {}))
                }
                _stopEvent(e) {
                    "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e)
                }
                static hexlifyTransaction(e, t) {
                    const r = (0, l.shallowCopy)(le);
                    if (t)
                        for (const i in t) t[i] && (r[i] = !0);
                    (0, l.checkProperties)(e, r);
                    const n = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(t) {
                        if (null == e[t]) return;
                        const r = (0, a.hexValue)(e[t]);
                        "gasLimit" === t && (t = "gas"), n[t] = r
                    })), ["from", "to", "data"].forEach((function(t) {
                        null != e[t] && (n[t] = (0, a.hexlify)(e[t]))
                    })), e.accessList && (n.accessList = (0, w.accessListify)(e.accessList)), n
                }
            }
            let fe = null;
            try {
                if (fe = WebSocket, null == fe) throw new Error("inject please")
            } catch (wt) {
                const e = new g.Logger(y);
                fe = function() {
                    e.throwError("WebSockets not supported in this environment", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new WebSocket()"
                    })
                }
            }
            var de = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const pe = new g.Logger(y);
            let me = 1;
            class ge extends he {
                constructor(e, t) {
                    "any" === t && pe.throwError("WebSocketProvider does not support 'any' network yet", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "network:any"
                    }), super("string" === typeof e ? e : "_websocket", t), this._pollingInterval = -1, this._wsReady = !1, "string" === typeof e ? (0, l.defineReadOnly)(this, "_websocket", new fe(this.connection.url)) : (0, l.defineReadOnly)(this, "_websocket", e), (0, l.defineReadOnly)(this, "_requests", {}), (0, l.defineReadOnly)(this, "_subs", {}), (0, l.defineReadOnly)(this, "_subIds", {}), (0, l.defineReadOnly)(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                        this._wsReady = !0, Object.keys(this._requests).forEach((e => {
                            this.websocket.send(this._requests[e].payload)
                        }))
                    }, this.websocket.onmessage = e => {
                        const t = e.data,
                            r = JSON.parse(t);
                        if (null != r.id) {
                            const e = String(r.id),
                                n = this._requests[e];
                            if (delete this._requests[e], void 0 !== r.result) n.callback(null, r.result), this.emit("debug", {
                                action: "response",
                                request: JSON.parse(n.payload),
                                response: r.result,
                                provider: this
                            });
                            else {
                                let e = null;
                                r.error ? (e = new Error(r.error.message || "unknown error"), (0, l.defineReadOnly)(e, "code", r.error.code || null), (0, l.defineReadOnly)(e, "response", t)) : e = new Error("unknown error"), n.callback(e, void 0), this.emit("debug", {
                                    action: "response",
                                    error: e,
                                    request: JSON.parse(n.payload),
                                    provider: this
                                })
                            }
                        } else if ("eth_subscription" === r.method) {
                            const e = this._subs[r.params.subscription];
                            e && e.processFunc(r.params.result)
                        } else console.warn("this should not happen")
                    };
                    const r = setInterval((() => {
                        this.emit("poll")
                    }), 1e3);
                    r.unref && r.unref()
                }
                get websocket() {
                    return this._websocket
                }
                detectNetwork() {
                    return this._detectNetwork
                }
                get pollingInterval() {
                    return 0
                }
                resetEventsBlock(e) {
                    pe.throwError("cannot reset events block on WebSocketProvider", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
                set pollingInterval(e) {
                    pe.throwError("cannot set polling interval on WebSocketProvider", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
                poll() {
                    return de(this, void 0, void 0, (function*() {
                        return null
                    }))
                }
                set polling(e) {
                    e && pe.throwError("cannot set polling on WebSocketProvider", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
                send(e, t) {
                    const r = me++;
                    return new Promise(((n, i) => {
                        const o = JSON.stringify({
                            method: e,
                            params: t,
                            id: r,
                            jsonrpc: "2.0"
                        });
                        this.emit("debug", {
                            action: "request",
                            request: JSON.parse(o),
                            provider: this
                        }), this._requests[String(r)] = {
                            callback: function(e, t) {
                                return e ? i(e) : n(t)
                            },
                            payload: o
                        }, this._wsReady && this.websocket.send(o)
                    }))
                }
                static defaultUrl() {
                    return "ws://localhost:8546"
                }
                _subscribe(e, t, r) {
                    return de(this, void 0, void 0, (function*() {
                        let n = this._subIds[e];
                        null == n && (n = Promise.all(t).then((e => this.send("eth_subscribe", e))), this._subIds[e] = n);
                        const i = yield n;
                        this._subs[i] = {
                            tag: e,
                            processFunc: r
                        }
                    }))
                }
                _startEvent(e) {
                    switch (e.type) {
                        case "block":
                            this._subscribe("block", ["newHeads"], (e => {
                                const t = s.O$.from(e.number).toNumber();
                                this._emitted.block = t, this.emit("block", t)
                            }));
                            break;
                        case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], (e => {
                                this.emit("pending", e)
                            }));
                            break;
                        case "filter":
                            this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], (t => {
                                null == t.removed && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t))
                            }));
                            break;
                        case "tx":
                            {
                                const t = e => {
                                    const t = e.hash;
                                    this.getTransactionReceipt(t).then((e => {
                                        e && this.emit(t, e)
                                    }))
                                };t(e),
                                this._subscribe("tx", ["newHeads"], (e => {
                                    this._events.filter((e => "tx" === e.type)).forEach(t)
                                }));
                                break
                            }
                        case "debug":
                        case "poll":
                        case "willPoll":
                        case "didPoll":
                        case "error":
                            break;
                        default:
                            console.log("unhandled:", e)
                    }
                }
                _stopEvent(e) {
                    let t = e.tag;
                    if ("tx" === e.type) {
                        if (this._events.filter((e => "tx" === e.type)).length) return;
                        t = "tx"
                    } else if (this.listenerCount(e.event)) return;
                    const r = this._subIds[t];
                    r && (delete this._subIds[t], r.then((e => {
                        this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
                    })))
                }
                destroy() {
                    return de(this, void 0, void 0, (function*() {
                        this.websocket.readyState === fe.CONNECTING && (yield new Promise((e => {
                            this.websocket.onopen = function() {
                                e(!0)
                            }, this.websocket.onerror = function() {
                                e(!1)
                            }
                        }))), this.websocket.close(1e3)
                    }))
                }
            }
            var ye = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const ve = new g.Logger(y);
            class be extends he {
                detectNetwork() {
                    const e = Object.create(null, {
                        detectNetwork: {
                            get: () => super.detectNetwork
                        }
                    });
                    return ye(this, void 0, void 0, (function*() {
                        let t = this.network;
                        return null == t && (t = yield e.detectNetwork.call(this), t || ve.throwError("no network detected", g.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && ((0, l.defineReadOnly)(this, "_network", t), this.emit("network", t, null))), t
                    }))
                }
            }
            class we extends be {
                constructor(e, t) {
                    ve.checkAbstract(new.target, we), e = (0, l.getStatic)(new.target, "getNetwork")(e), t = (0, l.getStatic)(new.target, "getApiKey")(t);
                    super((0, l.getStatic)(new.target, "getUrl")(e, t), e), "string" === typeof t ? (0, l.defineReadOnly)(this, "apiKey", t) : null != t && Object.keys(t).forEach((e => {
                        (0, l.defineReadOnly)(this, e, t[e])
                    }))
                }
                _startPending() {
                    ve.warn("WARNING: API provider does not support pending filters")
                }
                isCommunityResource() {
                    return !1
                }
                getSigner(e) {
                    return ve.throwError("API provider does not support signing", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                    })
                }
                listAccounts() {
                    return Promise.resolve([])
                }
                static getApiKey(e) {
                    return e
                }
                static getUrl(e, t) {
                    return ve.throwError("not implemented; sub-classes must override getUrl", g.Logger.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                    })
                }
            }
            const Ee = new g.Logger(y),
                Se = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            class ke extends ge {
                constructor(e, t) {
                    const r = new _e(e, t);
                    super(r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), r.network), (0, l.defineReadOnly)(this, "apiKey", r.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === Se
                }
            }
            class _e extends we {
                static getWebSocketProvider(e, t) {
                    return new ke(e, t)
                }
                static getApiKey(e) {
                    return null == e ? Se : (e && "string" !== typeof e && Ee.throwArgumentError("invalid apiKey", "apiKey", e), e)
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "eth-mainnet.alchemyapi.io/v2/";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.alchemyapi.io/v2/";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.alchemyapi.io/v2/";
                            break;
                        case "goerli":
                            r = "eth-goerli.alchemyapi.io/v2/";
                            break;
                        case "kovan":
                            r = "eth-kovan.alchemyapi.io/v2/";
                            break;
                        case "matic":
                            r = "polygon-mainnet.g.alchemy.com/v2/";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.g.alchemy.com/v2/";
                            break;
                        case "arbitrum":
                            r = "arb-mainnet.g.alchemy.com/v2/";
                            break;
                        case "arbitrum-rinkeby":
                            r = "arb-rinkeby.g.alchemy.com/v2/";
                            break;
                        case "optimism":
                            r = "opt-mainnet.g.alchemy.com/v2/";
                            break;
                        case "optimism-kovan":
                            r = "opt-kovan.g.alchemy.com/v2/";
                            break;
                        default:
                            Ee.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + r + t,
                        throttleCallback: (e, r) => (t === Se && A(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === Se
                }
            }
            const Pe = new g.Logger(y),
                Ae = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";

            function xe(e) {
                switch (e) {
                    case "homestead":
                        return "rpc.ankr.com/eth/";
                    case "matic":
                        return "rpc.ankr.com/polygon/";
                    case "arbitrum":
                        return "rpc.ankr.com/arbitrum/"
                }
                return Pe.throwArgumentError("unsupported network", "name", e)
            }
            class Oe extends we {
                isCommunityResource() {
                    return this.apiKey === Ae
                }
                static getApiKey(e) {
                    return null == e ? Ae : e
                }
                static getUrl(e, t) {
                    null == t && (t = Ae);
                    const r = {
                        allowGzip: !0,
                        url: "https://" + xe(e.name) + t,
                        throttleCallback: (e, r) => (t.apiKey === Ae && A(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (r.user = "", r.password = t.projectSecret), r
                }
            }
            var Re = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const Ce = new g.Logger(y);
            class Ne extends we {
                static getApiKey(e) {
                    return null != e && Ce.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null
                }
                static getUrl(e, t) {
                    let r = null;
                    if ("homestead" === e.name) r = "https://cloudflare-eth.com/";
                    else Ce.throwArgumentError("unsupported network", "network", arguments[0]);
                    return r
                }
                perform(e, t) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return Re(this, void 0, void 0, (function*() {
                        if ("getBlockNumber" === e) {
                            return (yield r.perform.call(this, "getBlock", {
                                blockTag: "latest"
                            })).number
                        }
                        return r.perform.call(this, e, t)
                    }))
                }
            }
            var Ie = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const Me = new g.Logger(y);

            function Te(e) {
                const t = {};
                for (let r in e) {
                    if (null == e[r]) continue;
                    let n = e[r];
                    "type" === r && 0 === n || (n = {
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    }[r] ? (0, a.hexValue)((0, a.hexlify)(n)) : "accessList" === r ? "[" + (0, w.accessListify)(n).map((e => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`)).join(",") + "]" : (0, a.hexlify)(n), t[r] = n)
                }
                return t
            }

            function Le(e) {
                if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
                if (1 != e.status || "OK" != e.message) {
                    const t = new Error("invalid response");
                    throw t.result = JSON.stringify(e), (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0), t
                }
                return e.result
            }

            function Be(e) {
                if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                    const t = new Error("throttled response");
                    throw t.result = JSON.stringify(e), t.throttleRetry = !0, t
                }
                if ("2.0" != e.jsonrpc) {
                    const t = new Error("invalid response");
                    throw t.result = JSON.stringify(e), t
                }
                if (e.error) {
                    const t = new Error(e.error.message || "unknown error");
                    throw e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t
                }
                return e.result
            }

            function Fe(e) {
                if ("pending" === e) throw new Error("pending not supported");
                return "latest" === e ? e : parseInt(e.substring(2), 16)
            }
            const Ue = "9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";

            function De(e, t, r) {
                if ("call" === e && t.code === g.Logger.errors.SERVER_ERROR) {
                    const e = t.error;
                    if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
                        let r = e.data;
                        if (r && (r = "0x" + r.replace(/^.*0x/i, "")), (0, a.isHexString)(r)) return r;
                        Me.throwError("missing revert data in call exception", g.Logger.errors.CALL_EXCEPTION, {
                            error: t,
                            data: "0x"
                        })
                    }
                }
                let n = t.message;
                throw t.code === g.Logger.errors.SERVER_ERROR && (t.error && "string" === typeof t.error.message ? n = t.error.message : "string" === typeof t.body ? n = t.body : "string" === typeof t.responseText && (n = t.responseText)), n = (n || "").toLowerCase(), n.match(/insufficient funds/) && Me.throwError("insufficient funds for intrinsic transaction cost", g.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: r
                }), n.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && Me.throwError("nonce has already been used", g.Logger.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: r
                }), n.match(/another transaction with same nonce/) && Me.throwError("replacement fee too low", g.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: r
                }), n.match(/execution failed due to an exception|execution reverted/) && Me.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", g.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: r
                }), t
            }
            class je extends Q {
                constructor(e, t) {
                    Me.checkNew(new.target, je), super(e), (0, l.defineReadOnly)(this, "baseUrl", this.getBaseUrl()), (0, l.defineReadOnly)(this, "apiKey", t || Ue)
                }
                getBaseUrl() {
                    switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                            return "https://api.etherscan.io";
                        case "ropsten":
                            return "https://api-ropsten.etherscan.io";
                        case "rinkeby":
                            return "https://api-rinkeby.etherscan.io";
                        case "kovan":
                            return "https://api-kovan.etherscan.io";
                        case "goerli":
                            return "https://api-goerli.etherscan.io"
                    }
                    return Me.throwArgumentError("unsupported network", "network", name)
                }
                getUrl(e, t) {
                    const r = Object.keys(t).reduce(((e, r) => {
                            const n = t[r];
                            return null != n && (e += `&${r}=${n}`), e
                        }), ""),
                        n = this.apiKey ? `&apikey=${this.apiKey}` : "";
                    return `${this.baseUrl}/api?module=${e}${r}${n}`
                }
                getPostUrl() {
                    return `${this.baseUrl}/api`
                }
                getPostData(e, t) {
                    return t.module = e, t.apikey = this.apiKey, t
                }
                fetch(e, t, r) {
                    return Ie(this, void 0, void 0, (function*() {
                        const n = r ? this.getPostUrl() : this.getUrl(e, t),
                            i = r ? this.getPostData(e, t) : null,
                            o = "proxy" === e ? Be : Le;
                        this.emit("debug", {
                            action: "request",
                            request: n,
                            provider: this
                        });
                        const s = {
                            url: n,
                            throttleSlotInterval: 1e3,
                            throttleCallback: (e, t) => (this.isCommunityResource() && A(), Promise.resolve(!0))
                        };
                        let a = null;
                        i && (s.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, a = Object.keys(i).map((e => `${e}=${i[e]}`)).join("&"));
                        const u = yield(0, d.fetchJson)(s, a, o || Be);
                        return this.emit("debug", {
                            action: "response",
                            request: n,
                            response: (0, l.deepCopy)(u),
                            provider: this
                        }), u
                    }))
                }
                detectNetwork() {
                    return Ie(this, void 0, void 0, (function*() {
                        return this.network
                    }))
                }
                perform(e, t) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return Ie(this, void 0, void 0, (function*() {
                        switch (e) {
                            case "getBlockNumber":
                                return this.fetch("proxy", {
                                    action: "eth_blockNumber"
                                });
                            case "getGasPrice":
                                return this.fetch("proxy", {
                                    action: "eth_gasPrice"
                                });
                            case "getBalance":
                                return this.fetch("account", {
                                    action: "balance",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getTransactionCount":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionCount",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getCode":
                                return this.fetch("proxy", {
                                    action: "eth_getCode",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getStorageAt":
                                return this.fetch("proxy", {
                                    action: "eth_getStorageAt",
                                    address: t.address,
                                    position: t.position,
                                    tag: t.blockTag
                                });
                            case "sendTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_sendRawTransaction",
                                    hex: t.signedTransaction
                                }, !0).catch((e => De("sendTransaction", e, t.signedTransaction)));
                            case "getBlock":
                                if (t.blockTag) return this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: t.blockTag,
                                    boolean: t.includeTransactions ? "true" : "false"
                                });
                                throw new Error("getBlock by blockHash not implemented");
                            case "getTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionByHash",
                                    txhash: t.transactionHash
                                });
                            case "getTransactionReceipt":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionReceipt",
                                    txhash: t.transactionHash
                                });
                            case "call":
                                {
                                    if ("latest" !== t.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
                                    const e = Te(t.transaction);e.module = "proxy",
                                    e.action = "eth_call";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (wt) {
                                        return De("call", wt, t.transaction)
                                    }
                                }
                            case "estimateGas":
                                {
                                    const e = Te(t.transaction);e.module = "proxy",
                                    e.action = "eth_estimateGas";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (wt) {
                                        return De("estimateGas", wt, t.transaction)
                                    }
                                }
                            case "getLogs":
                                {
                                    const e = {
                                        action: "getLogs"
                                    };
                                    if (t.filter.fromBlock && (e.fromBlock = Fe(t.filter.fromBlock)), t.filter.toBlock && (e.toBlock = Fe(t.filter.toBlock)), t.filter.address && (e.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && Me.throwError("unsupported topic count", g.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topics: t.filter.topics
                                        }), 1 === t.filter.topics.length)) {
                                        const r = t.filter.topics[0];
                                        "string" === typeof r && 66 === r.length || Me.throwError("unsupported topic format", g.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topic0: r
                                        }), e.topic0 = r
                                    }
                                    const r = yield this.fetch("logs", e);
                                    let n = {};
                                    for (let t = 0; t < r.length; t++) {
                                        const e = r[t];
                                        if (null == e.blockHash) {
                                            if (null == n[e.blockNumber]) {
                                                const t = yield this.getBlock(e.blockNumber);
                                                t && (n[e.blockNumber] = t.hash)
                                            }
                                            e.blockHash = n[e.blockNumber]
                                        }
                                    }
                                    return r
                                }
                            case "getEtherPrice":
                                return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
                                    action: "ethprice"
                                })).ethusd)
                        }
                        return r.perform.call(this, e, t)
                    }))
                }
                getHistory(e, t, r) {
                    return Ie(this, void 0, void 0, (function*() {
                        const n = {
                            action: "txlist",
                            address: yield this.resolveName(e), startblock: null == t ? 0 : t, endblock: null == r ? 99999999 : r, sort: "asc"
                        };
                        return (yield this.fetch("account", n)).map((e => {
                            ["contractAddress", "to"].forEach((function(t) {
                                "" == e[t] && delete e[t]
                            })), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                            const t = this.formatter.transactionResponse(e);
                            return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t
                        }))
                    }))
                }
                isCommunityResource() {
                    return this.apiKey === Ue
                }
            }
            var qe = r(56938),
                Ke = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                u(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(e) {
                            try {
                                u(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((n = n.apply(e, t || [])).next())
                    }))
                };
            const ze = new g.Logger(y);

            function Ge() {
                return (new Date).getTime()
            }

            function He(e) {
                let t = null;
                for (let r = 0; r < e.length; r++) {
                    const n = e[r];
                    if (null == n) return null;
                    t ? t.name === n.name && t.chainId === n.chainId && (t.ensAddress === n.ensAddress || null == t.ensAddress && null == n.ensAddress) || ze.throwArgumentError("provider mismatch", "networks", e) : t = n
                }
                return t
            }

            function Ve(e, t) {
                e = e.slice().sort();
                const r = Math.floor(e.length / 2);
                if (e.length % 2) return e[r];
                const n = e[r - 1],
                    i = e[r];
                return null != t && Math.abs(n - i) > t ? null : (n + i) / 2
            }

            function $e(e) {
                if (null === e) return "null";
                if ("number" === typeof e || "boolean" === typeof e) return JSON.stringify(e);
                if ("string" === typeof e) return e;
                if (s.O$.isBigNumber(e)) return e.toString();
                if (Array.isArray(e)) return JSON.stringify(e.map((e => $e(e))));
                if ("object" === typeof e) {
                    const t = Object.keys(e);
                    return t.sort(), "{" + t.map((t => {
                        let r = e[t];
                        return r = "function" === typeof r ? "[function]" : $e(r), JSON.stringify(t) + ":" + r
                    })).join(",") + "}"
                }
                throw new Error("unknown value type: " + typeof e)
            }
            let We = 1;

            function Je(e) {
                let t = null,
                    r = null,
                    n = new Promise((n => {
                        t = function() {
                            r && (clearTimeout(r), r = null), n()
                        }, r = setTimeout(t, e)
                    }));
                return {
                    cancel: t,
                    getPromise: function() {
                        return n
                    },
                    wait: e => (n = n.then(e), n)
                }
            }
            const Qe = [g.Logger.errors.CALL_EXCEPTION, g.Logger.errors.INSUFFICIENT_FUNDS, g.Logger.errors.NONCE_EXPIRED, g.Logger.errors.REPLACEMENT_UNDERPRICED, g.Logger.errors.UNPREDICTABLE_GAS_LIMIT],
                Ze = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

            function Xe(e, t) {
                const r = {
                    weight: e.weight
                };
                return Object.defineProperty(r, "provider", {
                    get: () => e.provider
                }), e.start && (r.start = e.start), t && (r.duration = t - e.start), e.done && (e.error ? r.error = e.error : r.result = e.result || null), r
            }

            function Ye(e, t, r) {
                let n = $e;
                switch (t) {
                    case "getBlockNumber":
                        return function(t) {
                            const r = t.map((e => e.result));
                            let n = Ve(t.map((e => e.result)), 2);
                            if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= e._highestBlockNumber && (e._highestBlockNumber = n), e._highestBlockNumber
                        };
                    case "getGasPrice":
                        return function(e) {
                            const t = e.map((e => e.result));
                            return t.sort(), t[Math.floor(t.length / 2)]
                        };
                    case "getEtherPrice":
                        return function(e) {
                            return Ve(e.map((e => e.result)))
                        };
                    case "getBalance":
                    case "getTransactionCount":
                    case "getCode":
                    case "getStorageAt":
                    case "call":
                    case "estimateGas":
                    case "getLogs":
                        break;
                    case "getTransaction":
                    case "getTransactionReceipt":
                        n = function(e) {
                            return null == e ? null : ((e = (0, l.shallowCopy)(e)).confirmations = -1, $e(e))
                        };
                        break;
                    case "getBlock":
                        n = r.includeTransactions ? function(e) {
                            return null == e ? null : ((e = (0, l.shallowCopy)(e)).transactions = e.transactions.map((e => ((e = (0, l.shallowCopy)(e)).confirmations = -1, e))), $e(e))
                        } : function(e) {
                            return null == e ? null : $e(e)
                        };
                        break;
                    default:
                        throw new Error("unknown method: " + t)
                }
                return function(e, t) {
                    return function(r) {
                        const n = {};
                        r.forEach((t => {
                            const r = e(t.result);
                            n[r] || (n[r] = {
                                count: 0,
                                result: t.result
                            }), n[r].count++
                        }));
                        const i = Object.keys(n);
                        for (let e = 0; e < i.length; e++) {
                            const r = n[i[e]];
                            if (r.count >= t) return r.result
                        }
                    }
                }(n, e.quorum)
            }

            function et(e, t) {
                return Ke(this, void 0, void 0, (function*() {
                    const r = e.provider;
                    return null != r.blockNumber && r.blockNumber >= t || -1 === t ? r : (0, d.poll)((() => new Promise(((n, i) => {
                        setTimeout((function() {
                            return r.blockNumber >= t ? n(r) : e.cancelled ? n(null) : n(void 0)
                        }), 0)
                    }))), {
                        oncePoll: r
                    })
                }))
            }

            function tt(e, t, r, n) {
                return Ke(this, void 0, void 0, (function*() {
                    let i = e.provider;
                    switch (r) {
                        case "getBlockNumber":
                        case "getGasPrice":
                            return i[r]();
                        case "getEtherPrice":
                            if (i.getEtherPrice) return i.getEtherPrice();
                            break;
                        case "getBalance":
                        case "getTransactionCount":
                        case "getCode":
                            return n.blockTag && (0, a.isHexString)(n.blockTag) && (i = yield et(e, t)), i[r](n.address, n.blockTag || "latest");
                        case "getStorageAt":
                            return n.blockTag && (0, a.isHexString)(n.blockTag) && (i = yield et(e, t)), i.getStorageAt(n.address, n.position, n.blockTag || "latest");
                        case "getBlock":
                            return n.blockTag && (0, a.isHexString)(n.blockTag) && (i = yield et(e, t)), i[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
                        case "call":
                        case "estimateGas":
                            return n.blockTag && (0, a.isHexString)(n.blockTag) && (i = yield et(e, t)), i[r](n.transaction);
                        case "getTransaction":
                        case "getTransactionReceipt":
                            return i[r](n.transactionHash);
                        case "getLogs":
                            {
                                let r = n.filter;
                                return (r.fromBlock && (0, a.isHexString)(r.fromBlock) || r.toBlock && (0, a.isHexString)(r.toBlock)) && (i = yield et(e, t)),
                                i.getLogs(r)
                            }
                    }
                    return ze.throwError("unknown method error", g.Logger.errors.UNKNOWN_ERROR, {
                        method: r,
                        params: n
                    })
                }))
            }
            class rt extends Q {
                constructor(e, t) {
                    ze.checkNew(new.target, rt), 0 === e.length && ze.throwArgumentError("missing providers", "providers", e);
                    const r = e.map(((e, t) => {
                            if (n.zt.isProvider(e)) {
                                const t = _(e) ? 2e3 : 750,
                                    r = 1;
                                return Object.freeze({
                                    provider: e,
                                    weight: 1,
                                    stallTimeout: t,
                                    priority: r
                                })
                            }
                            const r = (0, l.shallowCopy)(e);
                            null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = _(e) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                            const i = r.weight;
                            return (i % 1 || i > 512 || i < 1) && ze.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${t}].weight`, i), Object.freeze(r)
                        })),
                        i = r.reduce(((e, t) => e + t.weight), 0);
                    null == t ? t = i / 2 : t > i && ze.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
                    let o = He(r.map((e => e.provider.network)));
                    null == o && (o = new Promise(((e, t) => {
                        setTimeout((() => {
                            this.detectNetwork().then(e, t)
                        }), 0)
                    }))), super(o), (0, l.defineReadOnly)(this, "providerConfigs", Object.freeze(r)), (0, l.defineReadOnly)(this, "quorum", t), this._highestBlockNumber = -1
                }
                detectNetwork() {
                    return Ke(this, void 0, void 0, (function*() {
                        return He(yield Promise.all(this.providerConfigs.map((e => e.provider.getNetwork()))))
                    }))
                }
                perform(e, t) {
                    return Ke(this, void 0, void 0, (function*() {
                        if ("sendTransaction" === e) {
                            const e = yield Promise.all(this.providerConfigs.map((e => e.provider.sendTransaction(t.signedTransaction).then((e => e.hash), (e => e)))));
                            for (let t = 0; t < e.length; t++) {
                                const r = e[t];
                                if ("string" === typeof r) return r
                            }
                            throw e[0]
                        } - 1 === this._highestBlockNumber && "getBlockNumber" !== e && (yield this.getBlockNumber());
                        const r = Ye(this, e, t),
                            n = (0, qe.y)(this.providerConfigs.map(l.shallowCopy));
                        n.sort(((e, t) => e.priority - t.priority));
                        const i = this._highestBlockNumber;
                        let o = 0,
                            s = !0;
                        for (;;) {
                            const a = Ge();
                            let u = n.filter((e => e.runner && a - e.start < e.stallTimeout)).reduce(((e, t) => e + t.weight), 0);
                            for (; u < this.quorum && o < n.length;) {
                                const r = n[o++],
                                    s = We++;
                                r.start = Ge(), r.staller = Je(r.stallTimeout), r.staller.wait((() => {
                                    r.staller = null
                                })), r.runner = tt(r, i, e, t).then((n => {
                                    r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: s,
                                        backend: Xe(r, Ge()),
                                        request: {
                                            method: e,
                                            params: (0, l.deepCopy)(t)
                                        },
                                        provider: this
                                    })
                                }), (n => {
                                    r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: s,
                                        backend: Xe(r, Ge()),
                                        request: {
                                            method: e,
                                            params: (0, l.deepCopy)(t)
                                        },
                                        provider: this
                                    })
                                })), this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: s,
                                    backend: Xe(r, null),
                                    request: {
                                        method: e,
                                        params: (0, l.deepCopy)(t)
                                    },
                                    provider: this
                                }), u += r.weight
                            }
                            const c = [];
                            n.forEach((e => {
                                !e.done && e.runner && (c.push(e.runner), e.staller && c.push(e.staller.getPromise()))
                            })), c.length && (yield Promise.race(c));
                            const h = n.filter((e => e.done && null == e.error));
                            if (h.length >= this.quorum) {
                                const e = r(h);
                                if (void 0 !== e) return n.forEach((e => {
                                    e.staller && e.staller.cancel(), e.cancelled = !0
                                })), e;
                                s || (yield Je(100).getPromise()), s = !1
                            }
                            const f = n.reduce(((e, t) => {
                                if (!t.done || null == t.error) return e;
                                const r = t.error.code;
                                return Qe.indexOf(r) >= 0 && (e[r] || (e[r] = {
                                    error: t.error,
                                    weight: 0
                                }), e[r].weight += t.weight), e
                            }), {});
                            if (Object.keys(f).forEach((e => {
                                    const t = f[e];
                                    if (t.weight < this.quorum) return;
                                    n.forEach((e => {
                                        e.staller && e.staller.cancel(), e.cancelled = !0
                                    }));
                                    const r = t.error,
                                        i = {};
                                    Ze.forEach((e => {
                                        null != r[e] && (i[e] = r[e])
                                    })), ze.throwError(r.reason || r.message, e, i)
                                })), 0 === n.filter((e => !e.done)).length) break
                        }
                        return n.forEach((e => {
                            e.staller && e.staller.cancel(), e.cancelled = !0
                        })), ze.throwError("failed to meet quorum", g.Logger.errors.SERVER_ERROR, {
                            method: e,
                            params: t,
                            results: n.map((e => Xe(e))),
                            provider: this
                        })
                    }))
                }
            }
            const nt = null,
                it = new g.Logger(y),
                ot = "84842078b09946638c03157f83405213";
            class st extends ge {
                constructor(e, t) {
                    const r = new at(e, t),
                        n = r.connection;
                    n.password && it.throwError("INFURA WebSocket project secrets unsupported", g.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "InfuraProvider.getWebSocketProvider()"
                    });
                    super(n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e), (0, l.defineReadOnly)(this, "apiKey", r.projectId), (0, l.defineReadOnly)(this, "projectId", r.projectId), (0, l.defineReadOnly)(this, "projectSecret", r.projectSecret)
                }
                isCommunityResource() {
                    return this.projectId === ot
                }
            }
            class at extends we {
                static getWebSocketProvider(e, t) {
                    return new st(e, t)
                }
                static getApiKey(e) {
                    const t = {
                        apiKey: ot,
                        projectId: ot,
                        projectSecret: null
                    };
                    return null == e || ("string" === typeof e ? t.projectId = e : null != e.projectSecret ? (it.assertArgument("string" === typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), it.assertArgument("string" === typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            r = "mainnet.infura.io";
                            break;
                        case "ropsten":
                            r = "ropsten.infura.io";
                            break;
                        case "rinkeby":
                            r = "rinkeby.infura.io";
                            break;
                        case "kovan":
                            r = "kovan.infura.io";
                            break;
                        case "goerli":
                            r = "goerli.infura.io";
                            break;
                        case "matic":
                            r = "polygon-mainnet.infura.io";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.infura.io";
                            break;
                        case "optimism":
                            r = "optimism-mainnet.infura.io";
                            break;
                        case "optimism-kovan":
                            r = "optimism-kovan.infura.io";
                            break;
                        case "arbitrum":
                            r = "arbitrum-mainnet.infura.io";
                            break;
                        case "arbitrum-rinkeby":
                            r = "arbitrum-rinkeby.infura.io";
                            break;
                        default:
                            it.throwError("unsupported network", g.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    const n = {
                        allowGzip: !0,
                        url: "https://" + r + "/v3/" + t.projectId,
                        throttleCallback: (e, r) => (t.projectId === ot && A(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (n.user = "", n.password = t.projectSecret), n
                }
                isCommunityResource() {
                    return this.projectId === ot
                }
            }
            class ut extends he {
                send(e, t) {
                    const r = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    const n = {
                            request: r,
                            resolve: null,
                            reject: null
                        },
                        i = new Promise(((e, t) => {
                            n.resolve = e, n.reject = t
                        }));
                    return this._pendingBatch.push(n), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout((() => {
                        const e = this._pendingBatch;
                        this._pendingBatch = null, this._pendingBatchAggregator = null;
                        const t = e.map((e => e.request));
                        return this.emit("debug", {
                            action: "requestBatch",
                            request: (0, l.deepCopy)(t),
                            provider: this
                        }), (0, d.fetchJson)(this.connection, JSON.stringify(t)).then((r => {
                            this.emit("debug", {
                                action: "response",
                                request: t,
                                response: r,
                                provider: this
                            }), e.forEach(((e, t) => {
                                const n = r[t];
                                if (n.error) {
                                    const t = new Error(n.error.message);
                                    t.code = n.error.code, t.data = n.error.data, e.reject(t)
                                } else e.resolve(n.result)
                            }))
                        }), (r => {
                            this.emit("debug", {
                                action: "response",
                                error: r,
                                request: t,
                                provider: this
                            }), e.forEach((e => {
                                e.reject(r)
                            }))
                        }))
                    }), 10)), i
                }
            }
            const ct = new g.Logger(y);
            class lt extends we {
                static getApiKey(e) {
                    return e && "string" !== typeof e && ct.throwArgumentError("invalid apiKey", "apiKey", e), e || "ETHERS_JS_SHARED"
                }
                static getUrl(e, t) {
                    ct.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                        case "ropsten":
                            r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                        case "rinkeby":
                            r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                        case "goerli":
                            r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                        case "kovan":
                            r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                        default:
                            ct.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return r + "?apiKey=" + t
                }
            }
            const ht = new g.Logger(y),
                ft = {
                    homestead: "6004bcd10040261633ade990",
                    ropsten: "6004bd4d0040261633ade991",
                    rinkeby: "6004bda20040261633ade994",
                    goerli: "6004bd860040261633ade992"
                };
            class dt extends we {
                constructor(e, t) {
                    if (null == t) {
                        const r = (0, l.getStatic)(new.target, "getNetwork")(e);
                        if (r) {
                            const e = ft[r.name];
                            e && (t = {
                                applicationId: e,
                                loadBalancer: !0
                            })
                        }
                        null == t && ht.throwError("unsupported network", g.Logger.errors.INVALID_ARGUMENT, {
                            argument: "network",
                            value: e
                        })
                    }
                    super(e, t)
                }
                static getApiKey(e) {
                    null == e && ht.throwArgumentError("PocketProvider.getApiKey does not support null apiKey", "apiKey", e);
                    const t = {
                        applicationId: null,
                        loadBalancer: !1,
                        applicationSecretKey: null
                    };
                    return "string" === typeof e ? t.applicationId = e : null != e.applicationSecretKey ? (ht.assertArgument("string" === typeof e.applicationId, "applicationSecretKey requires an applicationId", "applicationId", e.applicationId), ht.assertArgument("string" === typeof e.applicationSecretKey, "invalid applicationSecretKey", "applicationSecretKey", "[REDACTED]"), t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey, t.loadBalancer = !!e.loadBalancer) : e.applicationId ? (ht.assertArgument("string" === typeof e.applicationId, "apiKey.applicationId must be a string", "apiKey.applicationId", e.applicationId), t.applicationId = e.applicationId, t.loadBalancer = !!e.loadBalancer) : ht.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            r = "eth-mainnet.gateway.pokt.network";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.gateway.pokt.network";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.gateway.pokt.network";
                            break;
                        case "goerli":
                            r = "eth-goerli.gateway.pokt.network";
                            break;
                        default:
                            ht.throwError("unsupported network", g.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    let n = null;
                    n = t.loadBalancer ? `https://${r}/v1/lb/${t.applicationId}` : `https://${r}/v1/${t.applicationId}`;
                    const i = {
                        url: n,
                        headers: {}
                    };
                    return null != t.applicationSecretKey && (i.user = "", i.password = t.applicationSecretKey), i
                }
                isCommunityResource() {
                    return this.applicationId === ft[this.network.name]
                }
            }
            const pt = new g.Logger(y);
            let mt = 1;

            function gt(e, t) {
                const r = "Web3LegacyFetcher";
                return function(e, n) {
                    const i = {
                        method: e,
                        params: n,
                        id: mt++,
                        jsonrpc: "2.0"
                    };
                    return new Promise(((e, n) => {
                        this.emit("debug", {
                            action: "request",
                            fetcher: r,
                            request: (0, l.deepCopy)(i),
                            provider: this
                        }), t(i, ((t, o) => {
                            if (t) return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: t,
                                request: i,
                                provider: this
                            }), n(t);
                            if (this.emit("debug", {
                                    action: "response",
                                    fetcher: r,
                                    request: i,
                                    response: o,
                                    provider: this
                                }), o.error) {
                                const e = new Error(o.error.message);
                                return e.code = o.error.code, e.data = o.error.data, n(e)
                            }
                            e(o.result)
                        }))
                    }))
                }
            }
            class yt extends he {
                constructor(e, t) {
                    pt.checkNew(new.target, yt), null == e && pt.throwArgumentError("missing provider", "provider", e);
                    let r = null,
                        n = null,
                        i = null;
                    "function" === typeof e ? (r = "unknown:", n = e) : (r = e.host || e.path || "", !r && e.isMetaMask && (r = "metamask"), i = e, e.request ? ("" === r && (r = "eip-1193:"), n = function(e) {
                        return function(t, r) {
                            null == r && (r = []);
                            const n = {
                                method: t,
                                params: r
                            };
                            return this.emit("debug", {
                                action: "request",
                                fetcher: "Eip1193Fetcher",
                                request: (0, l.deepCopy)(n),
                                provider: this
                            }), e.request(n).then((e => (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                response: e,
                                provider: this
                            }), e)), (e => {
                                throw this.emit("debug", {
                                    action: "response",
                                    fetcher: "Eip1193Fetcher",
                                    request: n,
                                    error: e,
                                    provider: this
                                }), e
                            }))
                        }
                    }(e)) : e.sendAsync ? n = gt(0, e.sendAsync.bind(e)) : e.send ? n = gt(0, e.send.bind(e)) : pt.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), super(r, t), (0, l.defineReadOnly)(this, "jsonRpcFetchFunc", n), (0, l.defineReadOnly)(this, "provider", i)
                }
                send(e, t) {
                    return this.jsonRpcFetchFunc(e, t)
                }
            }
            const vt = new g.Logger(y);

            function bt(e, t) {
                if (null == e && (e = "homestead"), "string" === typeof e) {
                    const t = e.match(/^(ws|http)s?:/i);
                    if (t) switch (t[1]) {
                        case "http":
                            return new he(e);
                        case "ws":
                            return new ge(e);
                        default:
                            vt.throwArgumentError("unsupported URL scheme", "network", e)
                    }
                }
                const r = (0, i.H)(e);
                return r && r._defaultProvider || vt.throwError("unsupported getDefaultProvider network", g.Logger.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: e
                }), r._defaultProvider({
                    FallbackProvider: rt,
                    AlchemyProvider: _e,
                    AnkrProvider: Oe,
                    CloudflareProvider: Ne,
                    EtherscanProvider: je,
                    InfuraProvider: at,
                    JsonRpcProvider: he,
                    NodesmithProvider: lt,
                    PocketProvider: dt,
                    Web3Provider: yt,
                    IpcProvider: nt
                }, t)
            }
        },
        91178: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                randomBytes: function() {
                    return n.O
                },
                shuffled: function() {
                    return i.y
                }
            });
            var n = r(62191),
                i = r(56938)
        },
        62191: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return u
                }
            });
            var n = r(75398),
                i = r(57036);
            const o = new i.Logger("random/5.6.0");
            const s = function() {
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof r.g) return r.g;
                throw new Error("unable to locate global object")
            }();
            let a = s.crypto || s.msCrypto;

            function u(e) {
                (e <= 0 || e > 1024 || e % 1 || e != e) && o.throwArgumentError("invalid length", "length", e);
                const t = new Uint8Array(e);
                return a.getRandomValues(t), (0, n.arrayify)(t)
            }
            a && a.getRandomValues || (o.warn("WARNING: Missing strong random number source"), a = {
                getRandomValues: function(e) {
                    return o.throwError("no secure random source avaialble", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "crypto.getRandomValues"
                    })
                }
            })
        },
        56938: function(e, t, r) {
            "use strict";

            function n(e) {
                for (let t = (e = e.slice()).length - 1; t > 0; t--) {
                    const r = Math.floor(Math.random() * (t + 1)),
                        n = e[t];
                    e[t] = e[r], e[r] = n
                }
                return e
            }
            r.d(t, {
                y: function() {
                    return n
                }
            })
        },
        74866: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                decode: function() {
                    return f
                },
                encode: function() {
                    return c
                }
            });
            var n = r(75398),
                i = r(57036);
            const o = new i.Logger("rlp/5.6.0");

            function s(e) {
                const t = [];
                for (; e;) t.unshift(255 & e), e >>= 8;
                return t
            }

            function a(e, t, r) {
                let n = 0;
                for (let i = 0; i < r; i++) n = 256 * n + e[t + i];
                return n
            }

            function u(e) {
                if (Array.isArray(e)) {
                    let t = [];
                    if (e.forEach((function(e) {
                            t = t.concat(u(e))
                        })), t.length <= 55) return t.unshift(192 + t.length), t;
                    const r = s(t.length);
                    return r.unshift(247 + r.length), r.concat(t)
                }(0, n.isBytesLike)(e) || o.throwArgumentError("RLP object must be BytesLike", "object", e);
                const t = Array.prototype.slice.call((0, n.arrayify)(e));
                if (1 === t.length && t[0] <= 127) return t;
                if (t.length <= 55) return t.unshift(128 + t.length), t;
                const r = s(t.length);
                return r.unshift(183 + r.length), r.concat(t)
            }

            function c(e) {
                return (0, n.hexlify)(u(e))
            }

            function l(e, t, r, n) {
                const s = [];
                for (; r < t + 1 + n;) {
                    const a = h(e, r);
                    s.push(a.result), (r += a.consumed) > t + 1 + n && o.throwError("child data too short", i.Logger.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + n,
                    result: s
                }
            }

            function h(e, t) {
                if (0 === e.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
                    const r = e[t] - 247;
                    t + 1 + r > e.length && o.throwError("data short segment too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    const n = a(e, t + 1, r);
                    return t + 1 + r + n > e.length && o.throwError("data long segment too short", i.Logger.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1 + r, r + n)
                }
                if (e[t] >= 192) {
                    const r = e[t] - 192;
                    return t + 1 + r > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1, r)
                }
                if (e[t] >= 184) {
                    const r = e[t] - 183;
                    t + 1 + r > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    const s = a(e, t + 1, r);
                    t + 1 + r + s > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + r + s,
                        result: (0, n.hexlify)(e.slice(t + 1 + r, t + 1 + r + s))
                    }
                }
                if (e[t] >= 128) {
                    const r = e[t] - 128;
                    t + 1 + r > e.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + r,
                        result: (0, n.hexlify)(e.slice(t + 1, t + 1 + r))
                    }
                }
                return {
                    consumed: 1,
                    result: (0, n.hexlify)(e[t])
                }
            }

            function f(e) {
                const t = (0, n.arrayify)(e),
                    r = h(t, 0);
                return r.consumed !== t.length && o.throwArgumentError("invalid rlp data", "data", e), r.result
            }
        },
        48343: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SupportedAlgorithm: function() {
                    return i.p
                },
                computeHmac: function() {
                    return n.Gy
                },
                ripemd160: function() {
                    return n.bP
                },
                sha256: function() {
                    return n.JQ
                },
                sha512: function() {
                    return n.o
                }
            });
            var n = r(58254),
                i = r(21723)
        },
        58254: function(e, t, r) {
            "use strict";
            r.d(t, {
                Gy: function() {
                    return f
                },
                bP: function() {
                    return c
                },
                JQ: function() {
                    return l
                },
                o: function() {
                    return h
                }
            });
            var n = r(34485),
                i = r.n(n),
                o = r(75398),
                s = r(21723),
                a = r(57036);
            const u = new a.Logger("sha2/5.6.0");

            function c(e) {
                return "0x" + i().ripemd160().update((0, o.arrayify)(e)).digest("hex")
            }

            function l(e) {
                return "0x" + i().sha256().update((0, o.arrayify)(e)).digest("hex")
            }

            function h(e) {
                return "0x" + i().sha512().update((0, o.arrayify)(e)).digest("hex")
            }

            function f(e, t, r) {
                return s.p[e] || u.throwError("unsupported algorithm " + e, a.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "hmac",
                    algorithm: e
                }), "0x" + i().hmac(i()[e], (0, o.arrayify)(t)).update((0, o.arrayify)(r)).digest("hex")
            }
        },
        21723: function(e, t, r) {
            "use strict";
            var n;
            r.d(t, {
                    p: function() {
                        return n
                    }
                }),
                function(e) {
                    e.sha256 = "sha256", e.sha512 = "sha512"
                }(n || (n = {}))
        },
        3378: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SigningKey: function() {
                    return W
                },
                computePublicKey: function() {
                    return Q
                },
                recoverPublicKey: function() {
                    return J
                }
            });
            var n = r(62197),
                i = r.n(n),
                o = r(34485),
                s = r.n(o);
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self && self;

            function a(e, t, r) {
                return r = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }((void 0 === t || null === t) && r.path)
                    }
                }, e(r, r.exports), r.exports
            }
            var u = c;

            function c(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }
            c.equal = function(e, t, r) {
                if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
            };
            var l = a((function(e, t) {
                    var r = t;

                    function n(e) {
                        return 1 === e.length ? "0" + e : e
                    }

                    function i(e) {
                        for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));
                        return t
                    }
                    r.toArray = function(e, t) {
                        if (Array.isArray(e)) return e.slice();
                        if (!e) return [];
                        var r = [];
                        if ("string" !== typeof e) {
                            for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                            return r
                        }
                        if ("hex" === t) {
                            (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (e = "0" + e);
                            for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                        } else
                            for (n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n),
                                    o = i >> 8,
                                    s = 255 & i;
                                o ? r.push(o, s) : r.push(s)
                            }
                        return r
                    }, r.zero2 = n, r.toHex = i, r.encode = function(e, t) {
                        return "hex" === t ? i(e) : e
                    }
                })),
                h = a((function(e, t) {
                    var r = t;
                    r.assert = u, r.toArray = l.toArray, r.zero2 = l.zero2, r.toHex = l.toHex, r.encode = l.encode, r.getNAF = function(e, t, r) {
                        var n = new Array(Math.max(e.bitLength(), r) + 1);
                        n.fill(0);
                        for (var i = 1 << t + 1, o = e.clone(), s = 0; s < n.length; s++) {
                            var a, u = o.andln(i - 1);
                            o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                        }
                        return n
                    }, r.getJSF = function(e, t) {
                        var r = [
                            [],
                            []
                        ];
                        e = e.clone(), t = t.clone();
                        for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0;) {
                            var s, a, u = e.andln(3) + i & 3,
                                c = t.andln(3) + o & 3;
                            3 === u && (u = -1), 3 === c && (c = -1), s = 0 === (1 & u) ? 0 : 3 !== (n = e.andln(7) + i & 7) && 5 !== n || 2 !== c ? u : -u, r[0].push(s), a = 0 === (1 & c) ? 0 : 3 !== (n = t.andln(7) + o & 7) && 5 !== n || 2 !== u ? c : -c, r[1].push(a), 2 * i === s + 1 && (i = 1 - i), 2 * o === a + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1)
                        }
                        return r
                    }, r.cachedProperty = function(e, t, r) {
                        var n = "_" + t;
                        e.prototype[t] = function() {
                            return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                        }
                    }, r.parseBytes = function(e) {
                        return "string" === typeof e ? r.toArray(e, "hex") : e
                    }, r.intFromLE = function(e) {
                        return new(i())(e, "hex", "le")
                    }
                })),
                f = h.getNAF,
                d = h.getJSF,
                p = h.assert;

            function m(e, t) {
                this.type = e, this.p = new(i())(t.p, 16), this.red = t.prime ? i().red(t.prime) : i().mont(this.p), this.zero = new(i())(0).toRed(this.red), this.one = new(i())(1).toRed(this.red), this.two = new(i())(2).toRed(this.red), this.n = t.n && new(i())(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }
            var g = m;

            function y(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }
            m.prototype.point = function() {
                throw new Error("Not implemented")
            }, m.prototype.validate = function() {
                throw new Error("Not implemented")
            }, m.prototype._fixedNafMul = function(e, t) {
                p(e.precomputed);
                var r = e._getDoubles(),
                    n = f(t, 1, this._bitLength),
                    i = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
                i /= 3;
                var o, s, a = [];
                for (o = 0; o < n.length; o += r.step) {
                    s = 0;
                    for (var u = o + r.step - 1; u >= o; u--) s = (s << 1) + n[u];
                    a.push(s)
                }
                for (var c = this.jpoint(null, null, null), l = this.jpoint(null, null, null), h = i; h > 0; h--) {
                    for (o = 0; o < a.length; o++)(s = a[o]) === h ? l = l.mixedAdd(r.points[o]) : s === -h && (l = l.mixedAdd(r.points[o].neg()));
                    c = c.add(l)
                }
                return c.toP()
            }, m.prototype._wnafMul = function(e, t) {
                var r = 4,
                    n = e._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, o = f(t, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                    for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
                    if (a >= 0 && u++, s = s.dblp(u), a < 0) break;
                    var c = o[a];
                    p(0 !== c), s = "affine" === e.type ? c > 0 ? s.mixedAdd(i[c - 1 >> 1]) : s.mixedAdd(i[-c - 1 >> 1].neg()) : c > 0 ? s.add(i[c - 1 >> 1]) : s.add(i[-c - 1 >> 1].neg())
                }
                return "affine" === e.type ? s.toP() : s
            }, m.prototype._wnafMulAdd = function(e, t, r, n, i) {
                var o, s, a, u = this._wnafT1,
                    c = this._wnafT2,
                    l = this._wnafT3,
                    h = 0;
                for (o = 0; o < n; o++) {
                    var p = (a = t[o])._getNAFPoints(e);
                    u[o] = p.wnd, c[o] = p.points
                }
                for (o = n - 1; o >= 1; o -= 2) {
                    var m = o - 1,
                        g = o;
                    if (1 === u[m] && 1 === u[g]) {
                        var y = [t[m], null, null, t[g]];
                        0 === t[m].y.cmp(t[g].y) ? (y[1] = t[m].add(t[g]), y[2] = t[m].toJ().mixedAdd(t[g].neg())) : 0 === t[m].y.cmp(t[g].y.redNeg()) ? (y[1] = t[m].toJ().mixedAdd(t[g]), y[2] = t[m].add(t[g].neg())) : (y[1] = t[m].toJ().mixedAdd(t[g]), y[2] = t[m].toJ().mixedAdd(t[g].neg()));
                        var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            b = d(r[m], r[g]);
                        for (h = Math.max(b[0].length, h), l[m] = new Array(h), l[g] = new Array(h), s = 0; s < h; s++) {
                            var w = 0 | b[0][s],
                                E = 0 | b[1][s];
                            l[m][s] = v[3 * (w + 1) + (E + 1)], l[g][s] = 0, c[m] = y
                        }
                    } else l[m] = f(r[m], u[m], this._bitLength), l[g] = f(r[g], u[g], this._bitLength), h = Math.max(l[m].length, h), h = Math.max(l[g].length, h)
                }
                var S = this.jpoint(null, null, null),
                    k = this._wnafT4;
                for (o = h; o >= 0; o--) {
                    for (var _ = 0; o >= 0;) {
                        var P = !0;
                        for (s = 0; s < n; s++) k[s] = 0 | l[s][o], 0 !== k[s] && (P = !1);
                        if (!P) break;
                        _++, o--
                    }
                    if (o >= 0 && _++, S = S.dblp(_), o < 0) break;
                    for (s = 0; s < n; s++) {
                        var A = k[s];
                        0 !== A && (A > 0 ? a = c[s][A - 1 >> 1] : A < 0 && (a = c[s][-A - 1 >> 1].neg()), S = "affine" === a.type ? S.mixedAdd(a) : S.add(a))
                    }
                }
                for (o = 0; o < n; o++) c[o] = null;
                return i ? S : S.toP()
            }, m.BasePoint = y, y.prototype.eq = function() {
                throw new Error("Not implemented")
            }, y.prototype.validate = function() {
                return this.curve.validate(this)
            }, m.prototype.decodePoint = function(e, t) {
                e = h.toArray(e, t);
                var r = this.p.byteLength();
                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * r) return 6 === e[0] ? p(e[e.length - 1] % 2 === 0) : 7 === e[0] && p(e[e.length - 1] % 2 === 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                throw new Error("Unknown point format")
            }, y.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0)
            }, y.prototype._encode = function(e) {
                var t = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", t);
                return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
            }, y.prototype.encode = function(e, t) {
                return h.encode(this._encode(t), e)
            }, y.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, y.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var t = this.precomputed.doubles;
                return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
            }, y.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < t; i += e) {
                    for (var o = 0; o < e; o++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: e,
                    points: r
                }
            }, y.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
                return {
                    wnd: e,
                    points: t
                }
            }, y.prototype._getBeta = function() {
                return null
            }, y.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t
            };
            var v = a((function(e) {
                    "function" === typeof Object.create ? e.exports = function(e, t) {
                        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : e.exports = function(e, t) {
                        if (t) {
                            e.super_ = t;
                            var r = function() {};
                            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                        }
                    }
                })),
                b = h.assert;

            function w(e) {
                g.call(this, "short", e), this.a = new(i())(e.a, 16).toRed(this.red), this.b = new(i())(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }
            v(w, g);
            var E = w;

            function S(e, t, r, n) {
                g.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new(i())(t, 16), this.y = new(i())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function k(e, t, r, n) {
                g.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new(i())(0)) : (this.x = new(i())(t, 16), this.y = new(i())(r, 16), this.z = new(i())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            w.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var t, r;
                    if (e.beta) t = new(i())(e.beta, 16).toRed(this.red);
                    else {
                        var n = this._getEndoRoots(this.p);
                        t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                    }
                    if (e.lambda) r = new(i())(e.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], b(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                    }
                    return {
                        beta: t,
                        lambda: r,
                        basis: e.basis ? e.basis.map((function(e) {
                            return {
                                a: new(i())(e.a, 16),
                                b: new(i())(e.b, 16)
                            }
                        })) : this._getEndoBasis(r)
                    }
                }
            }, w.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : i().mont(e),
                    r = new(i())(2).toRed(t).redInvm(),
                    n = r.redNeg(),
                    o = new(i())(3).toRed(t).redNeg().redSqrt().redMul(r);
                return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
            }, w.prototype._getEndoBasis = function(e) {
                for (var t, r, n, o, s, a, u, c, l, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, d = this.n.clone(), p = new(i())(1), m = new(i())(0), g = new(i())(0), y = new(i())(1), v = 0; 0 !== f.cmpn(0);) {
                    var b = d.div(f);
                    c = d.sub(b.mul(f)), l = g.sub(b.mul(p));
                    var w = y.sub(b.mul(m));
                    if (!n && c.cmp(h) < 0) t = u.neg(), r = p, n = c.neg(), o = l;
                    else if (n && 2 === ++v) break;
                    u = c, d = f, f = c, g = p, p = l, y = m, m = w
                }
                s = c.neg(), a = l;
                var E = n.sqr().add(o.sqr());
                return s.sqr().add(a.sqr()).cmp(E) >= 0 && (s = t, a = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                    a: n,
                    b: o
                }, {
                    a: s,
                    b: a
                }]
            }, w.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    r = t[0],
                    n = t[1],
                    i = n.b.mul(e).divRound(this.n),
                    o = r.b.neg().mul(e).divRound(this.n),
                    s = i.mul(r.a),
                    a = o.mul(n.a),
                    u = i.mul(r.b),
                    c = o.mul(n.b);
                return {
                    k1: e.sub(s).sub(a),
                    k2: u.add(c).neg()
                }
            }, w.prototype.pointFromX = function(e, t) {
                (e = new(i())(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                    n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                var o = n.fromRed().isOdd();
                return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
            }, w.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    r = e.y,
                    n = this.a.redMul(t),
                    i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, w.prototype._endoWnafMulAdd = function(e, t, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
                    var s = this._endoSplit(t[o]),
                        a = e[o],
                        u = a._getBeta();
                    s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                }
                for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), l = 0; l < 2 * o; l++) n[l] = null, i[l] = null;
                return c
            }, v(S, g.BasePoint), w.prototype.point = function(e, t, r) {
                return new S(this, e, t, r)
            }, w.prototype.pointFromJSON = function(e, t) {
                return S.fromJSON(this, e, t)
            }, S.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var r = this.curve,
                            n = function(e) {
                                return r.point(e.x.redMul(r.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(n)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(n)
                            }
                        }
                    }
                    return t
                }
            }, S.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, S.fromJSON = function(e, t, r) {
                "string" === typeof t && (t = JSON.parse(t));
                var n = e.point(t[0], t[1], r);
                if (!t[2]) return n;

                function i(t) {
                    return e.point(t[0], t[1], r)
                }
                var o = t[2];
                return n.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [n].concat(o.doubles.points.map(i))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [n].concat(o.naf.points.map(i))
                    }
                }, n
            }, S.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, S.prototype.isInfinity = function() {
                return this.inf
            }, S.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e)) return this.curve.point(null, null);
                if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t.redSqr().redISub(this.x).redISub(e.x),
                    n = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, S.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    r = this.x.redSqr(),
                    n = e.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                    o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    s = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, S.prototype.getX = function() {
                return this.x.fromRed()
            }, S.prototype.getY = function() {
                return this.y.fromRed()
            }, S.prototype.mul = function(e) {
                return e = new(i())(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, S.prototype.mulAdd = function(e, t, r) {
                var n = [this, t],
                    i = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, S.prototype.jmulAdd = function(e, t, r) {
                var n = [this, t],
                    i = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, S.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, S.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed,
                        n = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(n)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(n)
                        }
                    }
                }
                return t
            }, S.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, v(k, g.BasePoint), w.prototype.jpoint = function(e, t, r) {
                return new k(this, e, t, r)
            }, k.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    r = this.x.redMul(t),
                    n = this.y.redMul(t).redMul(e);
                return this.curve.point(r, n)
            }, k.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, k.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(t),
                    i = e.x.redMul(r),
                    o = this.y.redMul(t.redMul(e.z)),
                    s = e.y.redMul(r.redMul(this.z)),
                    a = n.redSub(i),
                    u = o.redSub(s);
                if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var c = a.redSqr(),
                    l = c.redMul(a),
                    h = n.redMul(c),
                    f = u.redSqr().redIAdd(l).redISub(h).redISub(h),
                    d = u.redMul(h.redISub(f)).redISub(o.redMul(l)),
                    p = this.z.redMul(e.z).redMul(a);
                return this.curve.jpoint(f, d, p)
            }, k.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    r = this.x,
                    n = e.x.redMul(t),
                    i = this.y,
                    o = e.y.redMul(t).redMul(this.z),
                    s = r.redSub(n),
                    a = i.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = s.redSqr(),
                    c = u.redMul(s),
                    l = r.redMul(u),
                    h = a.redSqr().redIAdd(c).redISub(l).redISub(l),
                    f = a.redMul(l.redISub(h)).redISub(i.redMul(c)),
                    d = this.z.redMul(s);
                return this.curve.jpoint(h, f, d)
            }, k.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                var t;
                if (this.curve.zeroA || this.curve.threeA) {
                    var r = this;
                    for (t = 0; t < e; t++) r = r.dbl();
                    return r
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    a = this.z,
                    u = a.redSqr().redSqr(),
                    c = s.redAdd(s);
                for (t = 0; t < e; t++) {
                    var l = o.redSqr(),
                        h = c.redSqr(),
                        f = h.redSqr(),
                        d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(u)),
                        p = o.redMul(h),
                        m = d.redSqr().redISub(p.redAdd(p)),
                        g = p.redISub(m),
                        y = d.redMul(g);
                    y = y.redIAdd(y).redISub(f);
                    var v = c.redMul(a);
                    t + 1 < e && (u = u.redMul(f)), o = m, a = v, c = y
                }
                return this.curve.jpoint(o, c.redMul(i), a)
            }, k.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, k.prototype._zeroDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n),
                        u = a.redSqr().redISub(s).redISub(s),
                        c = o.redIAdd(o);
                    c = (c = c.redIAdd(c)).redIAdd(c), e = u, t = a.redMul(s.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
                } else {
                    var l = this.x.redSqr(),
                        h = this.y.redSqr(),
                        f = h.redSqr(),
                        d = this.x.redAdd(h).redSqr().redISub(l).redISub(f);
                    d = d.redIAdd(d);
                    var p = l.redAdd(l).redIAdd(l),
                        m = p.redSqr(),
                        g = f.redIAdd(f);
                    g = (g = g.redIAdd(g)).redIAdd(g), e = m.redISub(d).redISub(d), t = p.redMul(d.redISub(e)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(e, t, r)
            }, k.prototype._threeDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        u = a.redSqr().redISub(s).redISub(s);
                    e = u;
                    var c = o.redIAdd(o);
                    c = (c = c.redIAdd(c)).redIAdd(c), t = a.redMul(s.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
                } else {
                    var l = this.z.redSqr(),
                        h = this.y.redSqr(),
                        f = this.x.redMul(h),
                        d = this.x.redSub(l).redMul(this.x.redAdd(l));
                    d = d.redAdd(d).redIAdd(d);
                    var p = f.redIAdd(f),
                        m = (p = p.redIAdd(p)).redAdd(p);
                    e = d.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(l);
                    var g = h.redSqr();
                    g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = d.redMul(p.redISub(e)).redISub(g)
                }
                return this.curve.jpoint(e, t, r)
            }, k.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    o = t.redSqr(),
                    s = r.redSqr(),
                    a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
                    u = t.redAdd(t),
                    c = (u = u.redIAdd(u)).redMul(s),
                    l = a.redSqr().redISub(c.redAdd(c)),
                    h = c.redISub(l),
                    f = s.redSqr();
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var d = a.redMul(h).redISub(f),
                    p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(l, d, p)
            }, k.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = t.redSqr(),
                    i = e.redAdd(e).redIAdd(e),
                    o = i.redSqr(),
                    s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                    a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    u = n.redIAdd(n);
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var c = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
                    l = t.redMul(c);
                l = (l = l.redIAdd(l)).redIAdd(l);
                var h = this.x.redMul(a).redISub(l);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var f = this.y.redMul(c.redMul(u.redISub(c)).redISub(s.redMul(a)));
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                return this.curve.jpoint(h, f, d)
            }, k.prototype.mul = function(e, t) {
                return e = new(i())(e, t), this.curve._wnafMul(this, e)
            }, k.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    r = e.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                var n = t.redMul(this.z),
                    i = r.redMul(e.z);
                return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
            }, k.prototype.eqXToP = function(e) {
                var t = this.z.redSqr(),
                    r = e.toRed(this.curve.red).redMul(t);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, k.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, k.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var _ = a((function(e, t) {
                    var r = t;
                    r.base = g, r.short = E, r.mont = null, r.edwards = null
                })),
                P = a((function(e, t) {
                    var r, n = t,
                        i = h.assert;

                    function o(e) {
                        "short" === e.type ? this.curve = new _.short(e) : "edwards" === e.type ? this.curve = new _.edwards(e) : this.curve = new _.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function a(e, t) {
                        Object.defineProperty(n, e, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var r = new o(t);
                                return Object.defineProperty(n, e, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r
                                }), r
                            }
                        })
                    }
                    n.PresetCurve = o, a("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), a("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), a("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), a("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: s().sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), a("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: s().sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), a("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["9"]
                    }), a("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch (u) {
                        r = void 0
                    }
                    a("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: s().sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                }));

            function A(e) {
                if (!(this instanceof A)) return new A(e);
                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var t = l.toArray(e.entropy, e.entropyEnc || "hex"),
                    r = l.toArray(e.nonce, e.nonceEnc || "hex"),
                    n = l.toArray(e.pers, e.persEnc || "hex");
                u(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
            }
            var x = A;
            A.prototype._init = function(e, t, r) {
                var n = e.concat(t).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, A.prototype._hmac = function() {
                return new(s().hmac)(this.hash, this.K)
            }, A.prototype._update = function(e) {
                var t = this._hmac().update(this.V).update([0]);
                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
            }, A.prototype.reseed = function(e, t, r, n) {
                "string" !== typeof t && (n = r, r = t, t = null), e = l.toArray(e, t), r = l.toArray(r, n), u(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
            }, A.prototype.generate = function(e, t, r, n) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" !== typeof t && (n = r, r = t, t = null), r && (r = l.toArray(r, n || "hex"), this._update(r));
                for (var i = []; i.length < e;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                var o = i.slice(0, e);
                return this._update(r), this._reseed++, l.encode(o, t)
            };
            var O = h.assert;

            function R(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }
            var C = R;
            R.fromPublic = function(e, t, r) {
                return t instanceof R ? t : new R(e, {
                    pub: t,
                    pubEnc: r
                })
            }, R.fromPrivate = function(e, t, r) {
                return t instanceof R ? t : new R(e, {
                    priv: t,
                    privEnc: r
                })
            }, R.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, R.prototype.getPublic = function(e, t) {
                return "string" === typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
            }, R.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, R.prototype._importPrivate = function(e, t) {
                this.priv = new(i())(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, R.prototype._importPublic = function(e, t) {
                if (e.x || e.y) return "mont" === this.ec.curve.type ? O(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || O(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
                this.pub = this.ec.curve.decodePoint(e, t)
            }, R.prototype.derive = function(e) {
                return e.validate() || O(e.validate(), "public point not validated"), e.mul(this.priv).getX()
            }, R.prototype.sign = function(e, t, r) {
                return this.ec.sign(e, this, t, r)
            }, R.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, R.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var N = h.assert;

            function I(e, t) {
                if (e instanceof I) return e;
                this._importDER(e, t) || (N(e.r && e.s, "Signature without r or s"), this.r = new(i())(e.r, 16), this.s = new(i())(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
            }
            var M = I;

            function T() {
                this.place = 0
            }

            function L(e, t) {
                var r = e[t.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, s = t.place; o < n; o++, s++) i <<= 8, i |= e[s], i >>>= 0;
                return !(i <= 127) && (t.place = s, i)
            }

            function B(e) {
                for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
                return 0 === t ? e : e.slice(t)
            }

            function F(e, t) {
                if (t < 128) e.push(t);
                else {
                    var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                    for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                    e.push(t)
                }
            }
            I.prototype._importDER = function(e, t) {
                e = h.toArray(e, t);
                var r = new T;
                if (48 !== e[r.place++]) return !1;
                var n = L(e, r);
                if (!1 === n) return !1;
                if (n + r.place !== e.length) return !1;
                if (2 !== e[r.place++]) return !1;
                var o = L(e, r);
                if (!1 === o) return !1;
                var s = e.slice(r.place, o + r.place);
                if (r.place += o, 2 !== e[r.place++]) return !1;
                var a = L(e, r);
                if (!1 === a) return !1;
                if (e.length !== a + r.place) return !1;
                var u = e.slice(r.place, a + r.place);
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                if (0 === u[0]) {
                    if (!(128 & u[1])) return !1;
                    u = u.slice(1)
                }
                return this.r = new(i())(s), this.s = new(i())(u), this.recoveryParam = null, !0
            }, I.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = B(t), r = B(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var n = [2];
                F(n, t.length), (n = n.concat(t)).push(2), F(n, r.length);
                var i = n.concat(r),
                    o = [48];
                return F(o, i.length), o = o.concat(i), h.encode(o, e)
            };
            var U = function() {
                    throw new Error("unsupported")
                },
                D = h.assert;

            function j(e) {
                if (!(this instanceof j)) return new j(e);
                "string" === typeof e && (D(Object.prototype.hasOwnProperty.call(P, e), "Unknown curve " + e), e = P[e]), e instanceof P.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            var q = j;
            j.prototype.keyPair = function(e) {
                return new C(this, e)
            }, j.prototype.keyFromPrivate = function(e, t) {
                return C.fromPrivate(this, e, t)
            }, j.prototype.keyFromPublic = function(e, t) {
                return C.fromPublic(this, e, t)
            }, j.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new x({
                        hash: this.hash,
                        pers: e.pers,
                        persEnc: e.persEnc || "utf8",
                        entropy: e.entropy || U(this.hash.hmacStrength),
                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), n = this.n.sub(new(i())(2));;) {
                    var o = new(i())(t.generate(r));
                    if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                }
            }, j.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            }, j.prototype.sign = function(e, t, r, n) {
                "object" === typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new(i())(e, 16));
                for (var o = this.n.byteLength(), s = t.getPrivate().toArray("be", o), a = e.toArray("be", o), u = new x({
                        hash: this.hash,
                        entropy: s,
                        nonce: a,
                        pers: n.pers,
                        persEnc: n.persEnc || "utf8"
                    }), c = this.n.sub(new(i())(1)), l = 0;; l++) {
                    var h = n.k ? n.k(l) : new(i())(u.generate(this.n.byteLength()));
                    if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(c) >= 0)) {
                        var f = this.g.mul(h);
                        if (!f.isInfinity()) {
                            var d = f.getX(),
                                p = d.umod(this.n);
                            if (0 !== p.cmpn(0)) {
                                var m = h.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));
                                if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                    var g = (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                    return n.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new M({
                                        r: p,
                                        s: m,
                                        recoveryParam: g
                                    })
                                }
                            }
                        }
                    }
                }
            }, j.prototype.verify = function(e, t, r, n) {
                e = this._truncateToN(new(i())(e, 16)), r = this.keyFromPublic(r, n);
                var o = (t = new M(t, "hex")).r,
                    s = t.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                var a, u = s.invm(this.n),
                    c = u.mul(e).umod(this.n),
                    l = u.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(c, r.getPublic(), l)).isInfinity() && a.eqXToP(o) : !(a = this.g.mulAdd(c, r.getPublic(), l)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o)
            }, j.prototype.recoverPubKey = function(e, t, r, n) {
                D((3 & r) === r, "The recovery param is more than two bits"), t = new M(t, n);
                var o = this.n,
                    s = new(i())(e),
                    a = t.r,
                    u = t.s,
                    c = 1 & r,
                    l = r >> 1;
                if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
                a = l ? this.curve.pointFromX(a.add(this.curve.n), c) : this.curve.pointFromX(a, c);
                var h = t.r.invm(o),
                    f = o.sub(s).mul(h).umod(o),
                    d = u.mul(h).umod(o);
                return this.g.mulAdd(f, a, d)
            }, j.prototype.getKeyRecoveryParam = function(e, t, r, n) {
                if (null !== (t = new M(t, n)).recoveryParam) return t.recoveryParam;
                for (var i = 0; i < 4; i++) {
                    var o;
                    try {
                        o = this.recoverPubKey(e, t, i)
                    } catch (e) {
                        continue
                    }
                    if (o.eq(r)) return i
                }
                throw new Error("Unable to find valid recovery factor")
            };
            var K = a((function(e, t) {
                    var r = t;
                    r.version = "6.5.4", r.utils = h, r.rand = function() {
                        throw new Error("unsupported")
                    }, r.curve = _, r.curves = P, r.ec = q, r.eddsa = null
                })).ec,
                z = r(75398),
                G = r(84427);
            const H = new(r(57036).Logger)("signing-key/5.6.0");
            let V = null;

            function $() {
                return V || (V = new K("secp256k1")), V
            }
            class W {
                constructor(e) {
                    (0, G.defineReadOnly)(this, "curve", "secp256k1"), (0, G.defineReadOnly)(this, "privateKey", (0, z.hexlify)(e));
                    const t = $().keyFromPrivate((0, z.arrayify)(this.privateKey));
                    (0, G.defineReadOnly)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), (0, G.defineReadOnly)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), (0, G.defineReadOnly)(this, "_isSigningKey", !0)
                }
                _addPoint(e) {
                    const t = $().keyFromPublic((0, z.arrayify)(this.publicKey)),
                        r = $().keyFromPublic((0, z.arrayify)(e));
                    return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(e) {
                    const t = $().keyFromPrivate((0, z.arrayify)(this.privateKey)),
                        r = (0, z.arrayify)(e);
                    32 !== r.length && H.throwArgumentError("bad digest length", "digest", e);
                    const n = t.sign(r, {
                        canonical: !0
                    });
                    return (0, z.splitSignature)({
                        recoveryParam: n.recoveryParam,
                        r: (0, z.hexZeroPad)("0x" + n.r.toString(16), 32),
                        s: (0, z.hexZeroPad)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(e) {
                    const t = $().keyFromPrivate((0, z.arrayify)(this.privateKey)),
                        r = $().keyFromPublic((0, z.arrayify)(Q(e)));
                    return (0, z.hexZeroPad)("0x" + t.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(e) {
                    return !(!e || !e._isSigningKey)
                }
            }

            function J(e, t) {
                const r = (0, z.splitSignature)(t),
                    n = {
                        r: (0, z.arrayify)(r.r),
                        s: (0, z.arrayify)(r.s)
                    };
                return "0x" + $().recoverPubKey((0, z.arrayify)(e), n, r.recoveryParam).encode("hex", !1)
            }

            function Q(e, t) {
                const r = (0, z.arrayify)(e);
                if (32 === r.length) {
                    const e = new W(r);
                    return t ? "0x" + $().keyFromPrivate(r).getPublic(!0, "hex") : e.publicKey
                }
                return 33 === r.length ? t ? (0, z.hexlify)(r) : "0x" + $().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + $().keyFromPublic(r).getPublic(!0, "hex") : (0, z.hexlify)(r) : H.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        },
        45894: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                keccak256: function() {
                    return m
                },
                pack: function() {
                    return p
                },
                sha256: function() {
                    return g
                }
            });
            var n = r(10528),
                i = r(75398),
                o = r(59256),
                s = r(58254),
                a = r(71320),
                u = r(57036);
            const c = new RegExp("^bytes([0-9]+)$"),
                l = new RegExp("^(u?int)([0-9]*)$"),
                h = new RegExp("^(.*)\\[([0-9]*)\\]$"),
                f = new u.Logger("solidity/5.6.0");

            function d(e, t, r) {
                switch (e) {
                    case "address":
                        return r ? (0, i.zeroPad)(t, 32) : (0, i.arrayify)(t);
                    case "string":
                        return (0, a.Y0)(t);
                    case "bytes":
                        return (0, i.arrayify)(t);
                    case "bool":
                        return t = t ? "0x01" : "0x00", r ? (0, i.zeroPad)(t, 32) : (0, i.arrayify)(t)
                }
                let o = e.match(l);
                if (o) {
                    let s = parseInt(o[2] || "256");
                    return (o[2] && String(s) !== o[2] || s % 8 !== 0 || 0 === s || s > 256) && f.throwArgumentError("invalid number type", "type", e), r && (s = 256), t = n.O$.from(t).toTwos(s), (0, i.zeroPad)(t, s / 8)
                }
                if (o = e.match(c), o) {
                    const n = parseInt(o[1]);
                    return (String(n) !== o[1] || 0 === n || n > 32) && f.throwArgumentError("invalid bytes type", "type", e), (0, i.arrayify)(t).byteLength !== n && f.throwArgumentError(`invalid value for ${e}`, "value", t), r ? (0, i.arrayify)((t + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : t
                }
                if (o = e.match(h), o && Array.isArray(t)) {
                    const r = o[1];
                    parseInt(o[2] || String(t.length)) != t.length && f.throwArgumentError(`invalid array length for ${e}`, "value", t);
                    const n = [];
                    return t.forEach((function(e) {
                        n.push(d(r, e, !0))
                    })), (0, i.concat)(n)
                }
                return f.throwArgumentError("invalid type", "type", e)
            }

            function p(e, t) {
                e.length != t.length && f.throwArgumentError("wrong number of values; expected ${ types.length }", "values", t);
                const r = [];
                return e.forEach((function(e, n) {
                    r.push(d(e, t[n]))
                })), (0, i.hexlify)((0, i.concat)(r))
            }

            function m(e, t) {
                return (0, o.keccak256)(p(e, t))
            }

            function g(e, t) {
                return (0, s.JQ)(p(e, t))
            }
        },
        68953: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ll: function() {
                    return p
                }
            });
            var n = r(71320);

            function i(e, t) {
                t || (t = function(e) {
                    return [parseInt(e, 16)]
                });
                let r = 0,
                    n = {};
                return e.split(",").forEach((e => {
                    let i = e.split(":");
                    r += parseInt(i[0], 16), n[r] = t(i[1])
                })), n
            }

            function o(e) {
                let t = 0;
                return e.split(",").map((e => {
                    let r = e.split("-");
                    1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1");
                    let n = t + parseInt(r[0], 16);
                    return t = parseInt(r[1], 16), {
                        l: n,
                        h: t
                    }
                }))
            }

            function s(e, t) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    if (r += i.l, e >= r && e <= r + i.h && (e - r) % (i.d || 1) === 0) {
                        if (i.e && -1 !== i.e.indexOf(e - r)) continue;
                        return i
                    }
                }
                return null
            }
            const a = o("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),
                u = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e => parseInt(e, 16))),
                c = [{
                    h: 25,
                    s: 32,
                    l: 65
                }, {
                    h: 30,
                    s: 32,
                    e: [23],
                    l: 127
                }, {
                    h: 54,
                    s: 1,
                    e: [48],
                    l: 64,
                    d: 2
                }, {
                    h: 14,
                    s: 1,
                    l: 57,
                    d: 2
                }, {
                    h: 44,
                    s: 1,
                    l: 17,
                    d: 2
                }, {
                    h: 10,
                    s: 1,
                    e: [2, 6, 8],
                    l: 61,
                    d: 2
                }, {
                    h: 16,
                    s: 1,
                    l: 68,
                    d: 2
                }, {
                    h: 84,
                    s: 1,
                    e: [18, 24, 66],
                    l: 19,
                    d: 2
                }, {
                    h: 26,
                    s: 32,
                    e: [17],
                    l: 435
                }, {
                    h: 22,
                    s: 1,
                    l: 71,
                    d: 2
                }, {
                    h: 15,
                    s: 80,
                    l: 40
                }, {
                    h: 31,
                    s: 32,
                    l: 16
                }, {
                    h: 32,
                    s: 1,
                    l: 80,
                    d: 2
                }, {
                    h: 52,
                    s: 1,
                    l: 42,
                    d: 2
                }, {
                    h: 12,
                    s: 1,
                    l: 55,
                    d: 2
                }, {
                    h: 40,
                    s: 1,
                    e: [38],
                    l: 15,
                    d: 2
                }, {
                    h: 14,
                    s: 1,
                    l: 48,
                    d: 2
                }, {
                    h: 37,
                    s: 48,
                    l: 49
                }, {
                    h: 148,
                    s: 1,
                    l: 6351,
                    d: 2
                }, {
                    h: 88,
                    s: 1,
                    l: 160,
                    d: 2
                }, {
                    h: 15,
                    s: 16,
                    l: 704
                }, {
                    h: 25,
                    s: 26,
                    l: 854
                }, {
                    h: 25,
                    s: 32,
                    l: 55915
                }, {
                    h: 37,
                    s: 40,
                    l: 1247
                }, {
                    h: 25,
                    s: -119711,
                    l: 53248
                }, {
                    h: 25,
                    s: -119763,
                    l: 52
                }, {
                    h: 25,
                    s: -119815,
                    l: 52
                }, {
                    h: 25,
                    s: -119867,
                    e: [1, 4, 5, 7, 8, 11, 12, 17],
                    l: 52
                }, {
                    h: 25,
                    s: -119919,
                    l: 52
                }, {
                    h: 24,
                    s: -119971,
                    e: [2, 7, 8, 17],
                    l: 52
                }, {
                    h: 24,
                    s: -120023,
                    e: [2, 7, 13, 15, 16, 17],
                    l: 52
                }, {
                    h: 25,
                    s: -120075,
                    l: 52
                }, {
                    h: 25,
                    s: -120127,
                    l: 52
                }, {
                    h: 25,
                    s: -120179,
                    l: 52
                }, {
                    h: 25,
                    s: -120231,
                    l: 52
                }, {
                    h: 25,
                    s: -120283,
                    l: 52
                }, {
                    h: 25,
                    s: -120335,
                    l: 52
                }, {
                    h: 24,
                    s: -119543,
                    e: [17],
                    l: 56
                }, {
                    h: 24,
                    s: -119601,
                    e: [17],
                    l: 58
                }, {
                    h: 24,
                    s: -119659,
                    e: [17],
                    l: 58
                }, {
                    h: 24,
                    s: -119717,
                    e: [17],
                    l: 58
                }, {
                    h: 24,
                    s: -119775,
                    e: [17],
                    l: 58
                }],
                l = i("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),
                h = i("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),
                f = i("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(e) {
                    if (e.length % 4 !== 0) throw new Error("bad data");
                    let t = [];
                    for (let r = 0; r < e.length; r += 4) t.push(parseInt(e.substring(r, r + 4), 16));
                    return t
                })),
                d = o("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

            function p(e) {
                if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
                let t = (0, n.XL)(e);
                var r;
                r = t.map((e => {
                    if (u.indexOf(e) >= 0) return [];
                    if (e >= 65024 && e <= 65039) return [];
                    let t = function(e) {
                        let t = s(e, c);
                        if (t) return [e + t.s];
                        let r = l[e];
                        if (r) return r;
                        let n = h[e];
                        return n ? [e + n[0]] : f[e] || null
                    }(e);
                    return t || [e]
                })), t = r.reduce(((e, t) => (t.forEach((t => {
                    e.push(t)
                })), e)), []), t = (0, n.XL)((0, n.uu)(t), n.Uj.NFKC), t.forEach((e => {
                    if (s(e, d)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
                })), t.forEach((e => {
                    if (s(e, a)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
                }));
                let i = (0, n.uu)(t);
                if ("-" === i.substring(0, 1) || "--" === i.substring(2, 4) || "-" === i.substring(i.length - 1)) throw new Error("invalid hyphen");
                if (i.length > 63) throw new Error("too long");
                return i
            }
        },
        84518: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UnicodeNormalizationForm: function() {
                    return o.Uj
                },
                Utf8ErrorFuncs: function() {
                    return o.te
                },
                Utf8ErrorReason: function() {
                    return o.Uw
                },
                _toEscapedUtf8String: function() {
                    return o.U$
                },
                formatBytes32String: function() {
                    return s
                },
                nameprep: function() {
                    return u.Ll
                },
                parseBytes32String: function() {
                    return a
                },
                toUtf8Bytes: function() {
                    return o.Y0
                },
                toUtf8CodePoints: function() {
                    return o.XL
                },
                toUtf8String: function() {
                    return o.ZN
                }
            });
            var n = r(88210),
                i = r(75398),
                o = r(71320);

            function s(e) {
                const t = (0, o.Y0)(e);
                if (t.length > 31) throw new Error("bytes32 string must be less than 32 bytes");
                return (0, i.hexlify)((0, i.concat)([t, n.R]).slice(0, 32))
            }

            function a(e) {
                const t = (0, i.arrayify)(e);
                if (32 !== t.length) throw new Error("invalid bytes32 - not 32 bytes long");
                if (0 !== t[31]) throw new Error("invalid bytes32 string - no null terminator");
                let r = 31;
                for (; 0 === t[r - 1];) r--;
                return (0, o.ZN)(t.slice(0, r))
            }
            var u = r(68953)
        },
        71320: function(e, t, r) {
            "use strict";
            r.d(t, {
                Uj: function() {
                    return o
                },
                te: function() {
                    return u
                },
                Uw: function() {
                    return s
                },
                U$: function() {
                    return f
                },
                uu: function() {
                    return d
                },
                Y0: function() {
                    return l
                },
                XL: function() {
                    return m
                },
                ZN: function() {
                    return p
                }
            });
            var n = r(75398);
            const i = new(r(57036).Logger)("strings/5.6.0");
            var o, s;

            function a(e, t, r, n, i) {
                if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
                    let e = 0;
                    for (let n = t + 1; n < r.length && r[n] >> 6 === 2; n++) e++;
                    return e
                }
                return e === s.OVERRUN ? r.length - t - 1 : 0
            }! function(e) {
                e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD"
            }(o || (o = {})),
            function(e) {
                e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation"
            }(s || (s = {}));
            const u = Object.freeze({
                error: function(e, t, r, n, o) {
                    return i.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r)
                },
                ignore: a,
                replace: function(e, t, r, n, i) {
                    return e === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), a(e, t, r))
                }
            });

            function c(e, t) {
                null == t && (t = u.error), e = (0, n.arrayify)(e);
                const r = [];
                let i = 0;
                for (; i < e.length;) {
                    const n = e[i++];
                    if (n >> 7 === 0) {
                        r.push(n);
                        continue
                    }
                    let o = null,
                        a = null;
                    if (192 === (224 & n)) o = 1, a = 127;
                    else if (224 === (240 & n)) o = 2, a = 2047;
                    else {
                        if (240 !== (248 & n)) {
                            i += t(128 === (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX, i - 1, e, r);
                            continue
                        }
                        o = 3, a = 65535
                    }
                    if (i - 1 + o >= e.length) {
                        i += t(s.OVERRUN, i - 1, e, r);
                        continue
                    }
                    let u = n & (1 << 8 - o - 1) - 1;
                    for (let c = 0; c < o; c++) {
                        let n = e[i];
                        if (128 != (192 & n)) {
                            i += t(s.MISSING_CONTINUE, i, e, r), u = null;
                            break
                        }
                        u = u << 6 | 63 & n, i++
                    }
                    null !== u && (u > 1114111 ? i += t(s.OUT_OF_RANGE, i - 1 - o, e, r, u) : u >= 55296 && u <= 57343 ? i += t(s.UTF16_SURROGATE, i - 1 - o, e, r, u) : u <= a ? i += t(s.OVERLONG, i - 1 - o, e, r, u) : r.push(u))
                }
                return r
            }

            function l(e, t = o.current) {
                t != o.current && (i.checkNormalize(), e = e.normalize(t));
                let r = [];
                for (let n = 0; n < e.length; n++) {
                    const t = e.charCodeAt(n);
                    if (t < 128) r.push(t);
                    else if (t < 2048) r.push(t >> 6 | 192), r.push(63 & t | 128);
                    else if (55296 == (64512 & t)) {
                        n++;
                        const i = e.charCodeAt(n);
                        if (n >= e.length || 56320 !== (64512 & i)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & t) << 10) + (1023 & i);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(t >> 12 | 224), r.push(t >> 6 & 63 | 128), r.push(63 & t | 128)
                }
                return (0, n.arrayify)(r)
            }

            function h(e) {
                const t = "0000" + e.toString(16);
                return "\\u" + t.substring(t.length - 4)
            }

            function f(e, t) {
                return '"' + c(e, t).map((e => {
                    if (e < 256) {
                        switch (e) {
                            case 8:
                                return "\\b";
                            case 9:
                                return "\\t";
                            case 10:
                                return "\\n";
                            case 13:
                                return "\\r";
                            case 34:
                                return '\\"';
                            case 92:
                                return "\\\\"
                        }
                        if (e >= 32 && e < 127) return String.fromCharCode(e)
                    }
                    return e <= 65535 ? h(e) : h(55296 + ((e -= 65536) >> 10 & 1023)) + h(56320 + (1023 & e))
                })).join("") + '"'
            }

            function d(e) {
                return e.map((e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10 & 1023), 56320 + (1023 & e))))).join("")
            }

            function p(e, t) {
                return d(c(e, t))
            }

            function m(e, t = o.current) {
                return c(l(e, t))
            }
        },
        13353: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                TransactionTypes: function() {
                    return d
                },
                accessListify: function() {
                    return S
                },
                computeAddress: function() {
                    return v
                },
                parse: function() {
                    return O
                },
                recoverAddress: function() {
                    return b
                },
                serialize: function() {
                    return A
                }
            });
            var n = r(58194),
                i = r(10528),
                o = r(75398),
                s = r(90711),
                a = r(59256),
                u = r(84427),
                c = r(74866),
                l = r(3378),
                h = r(57036);
            const f = new h.Logger("transactions/5.6.0");
            var d;

            function p(e) {
                return "0x" === e ? null : (0, n.getAddress)(e)
            }

            function m(e) {
                return "0x" === e ? s._Y : i.O$.from(e)
            }! function(e) {
                e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559"
            }(d || (d = {}));
            const g = [{
                    name: "nonce",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasPrice",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasLimit",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "to",
                    length: 20
                }, {
                    name: "value",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "data"
                }],
                y = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    type: !0,
                    value: !0
                };

            function v(e) {
                const t = (0, l.computePublicKey)(e);
                return (0, n.getAddress)((0, o.hexDataSlice)((0, a.keccak256)((0, o.hexDataSlice)(t, 1)), 12))
            }

            function b(e, t) {
                return v((0, l.recoverPublicKey)((0, o.arrayify)(e), t))
            }

            function w(e, t) {
                const r = (0, o.stripZeros)(i.O$.from(e).toHexString());
                return r.length > 32 && f.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r
            }

            function E(e, t) {
                return {
                    address: (0, n.getAddress)(e),
                    storageKeys: (t || []).map(((t, r) => (32 !== (0, o.hexDataLength)(t) && f.throwArgumentError("invalid access list storageKey", `accessList[${e}:${r}]`, t), t.toLowerCase())))
                }
            }

            function S(e) {
                if (Array.isArray(e)) return e.map(((e, t) => Array.isArray(e) ? (e.length > 2 && f.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e), E(e[0], e[1])) : E(e.address, e.storageKeys)));
                const t = Object.keys(e).map((t => {
                    const r = e[t].reduce(((e, t) => (e[t] = !0, e)), {});
                    return E(t, Object.keys(r).sort())
                }));
                return t.sort(((e, t) => e.address.localeCompare(t.address))), t
            }

            function k(e) {
                return S(e).map((e => [e.address, e.storageKeys]))
            }

            function _(e, t) {
                if (null != e.gasPrice) {
                    const t = i.O$.from(e.gasPrice),
                        r = i.O$.from(e.maxFeePerGas || 0);
                    t.eq(r) || f.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: t,
                        maxFeePerGas: r
                    })
                }
                const r = [w(e.chainId || 0, "chainId"), w(e.nonce || 0, "nonce"), w(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), w(e.maxFeePerGas || 0, "maxFeePerGas"), w(e.gasLimit || 0, "gasLimit"), null != e.to ? (0, n.getAddress)(e.to) : "0x", w(e.value || 0, "value"), e.data || "0x", k(e.accessList || [])];
                if (t) {
                    const e = (0, o.splitSignature)(t);
                    r.push(w(e.recoveryParam, "recoveryParam")), r.push((0, o.stripZeros)(e.r)), r.push((0, o.stripZeros)(e.s))
                }
                return (0, o.hexConcat)(["0x02", c.encode(r)])
            }

            function P(e, t) {
                const r = [w(e.chainId || 0, "chainId"), w(e.nonce || 0, "nonce"), w(e.gasPrice || 0, "gasPrice"), w(e.gasLimit || 0, "gasLimit"), null != e.to ? (0, n.getAddress)(e.to) : "0x", w(e.value || 0, "value"), e.data || "0x", k(e.accessList || [])];
                if (t) {
                    const e = (0, o.splitSignature)(t);
                    r.push(w(e.recoveryParam, "recoveryParam")), r.push((0, o.stripZeros)(e.r)), r.push((0, o.stripZeros)(e.s))
                }
                return (0, o.hexConcat)(["0x01", c.encode(r)])
            }

            function A(e, t) {
                if (null == e.type || 0 === e.type) return null != e.accessList && f.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
                    function(e, t) {
                        (0, u.checkProperties)(e, y);
                        const r = [];
                        g.forEach((function(t) {
                            let n = e[t.name] || [];
                            const i = {};
                            t.numeric && (i.hexPad = "left"), n = (0, o.arrayify)((0, o.hexlify)(n, i)), t.length && n.length !== t.length && n.length > 0 && f.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), t.maxLength && (n = (0, o.stripZeros)(n), n.length > t.maxLength && f.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n)), r.push((0, o.hexlify)(n))
                        }));
                        let n = 0;
                        if (null != e.chainId ? (n = e.chainId, "number" !== typeof n && f.throwArgumentError("invalid transaction.chainId", "transaction", e)) : t && !(0, o.isBytesLike)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)), 0 !== n && (r.push((0, o.hexlify)(n)), r.push("0x"), r.push("0x")), !t) return c.encode(r);
                        const i = (0, o.splitSignature)(t);
                        let s = 27 + i.recoveryParam;
                        return 0 !== n ? (r.pop(), r.pop(), r.pop(), s += 2 * n + 8, i.v > 28 && i.v !== s && f.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : i.v !== s && f.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t), r.push((0, o.hexlify)(s)), r.push((0, o.stripZeros)((0, o.arrayify)(i.r))), r.push((0, o.stripZeros)((0, o.arrayify)(i.s))), c.encode(r)
                    }(e, t);
                switch (e.type) {
                    case 1:
                        return P(e, t);
                    case 2:
                        return _(e, t)
                }
                return f.throwError(`unsupported transaction type: ${e.type}`, h.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "serializeTransaction",
                    transactionType: e.type
                })
            }

            function x(e, t, r) {
                try {
                    const r = m(t[0]).toNumber();
                    if (0 !== r && 1 !== r) throw new Error("bad recid");
                    e.v = r
                } catch (n) {
                    f.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
                }
                e.r = (0, o.hexZeroPad)(t[1], 32), e.s = (0, o.hexZeroPad)(t[2], 32);
                try {
                    const t = (0, a.keccak256)(r(e));
                    e.from = b(t, {
                        r: e.r,
                        s: e.s,
                        recoveryParam: e.v
                    })
                } catch (n) {
                    console.log(n)
                }
            }

            function O(e) {
                const t = (0, o.arrayify)(e);
                if (t[0] > 127) return function(e) {
                    const t = c.decode(e);
                    9 !== t.length && 6 !== t.length && f.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                    const r = {
                        nonce: m(t[0]).toNumber(),
                        gasPrice: m(t[1]),
                        gasLimit: m(t[2]),
                        to: p(t[3]),
                        value: m(t[4]),
                        data: t[5],
                        chainId: 0
                    };
                    if (6 === t.length) return r;
                    try {
                        r.v = i.O$.from(t[6]).toNumber()
                    } catch (n) {
                        return console.log(n), r
                    }
                    if (r.r = (0, o.hexZeroPad)(t[7], 32), r.s = (0, o.hexZeroPad)(t[8], 32), i.O$.from(r.r).isZero() && i.O$.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                        let i = r.v - 27;
                        const s = t.slice(0, 6);
                        0 !== r.chainId && (s.push((0, o.hexlify)(r.chainId)), s.push("0x"), s.push("0x"), i -= 2 * r.chainId + 8);
                        const u = (0, a.keccak256)(c.encode(s));
                        try {
                            r.from = b(u, {
                                r: (0, o.hexlify)(r.r),
                                s: (0, o.hexlify)(r.s),
                                recoveryParam: i
                            })
                        } catch (n) {
                            console.log(n)
                        }
                        r.hash = (0, a.keccak256)(e)
                    }
                    return r.type = null, r
                }(t);
                switch (t[0]) {
                    case 1:
                        return function(e) {
                            const t = c.decode(e.slice(1));
                            8 !== t.length && 11 !== t.length && f.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, o.hexlify)(e));
                            const r = {
                                type: 1,
                                chainId: m(t[0]).toNumber(),
                                nonce: m(t[1]).toNumber(),
                                gasPrice: m(t[2]),
                                gasLimit: m(t[3]),
                                to: p(t[4]),
                                value: m(t[5]),
                                data: t[6],
                                accessList: S(t[7])
                            };
                            return 8 === t.length || (r.hash = (0, a.keccak256)(e), x(r, t.slice(8), P)), r
                        }(t);
                    case 2:
                        return function(e) {
                            const t = c.decode(e.slice(1));
                            9 !== t.length && 12 !== t.length && f.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, o.hexlify)(e));
                            const r = m(t[2]),
                                n = m(t[3]),
                                i = {
                                    type: 2,
                                    chainId: m(t[0]).toNumber(),
                                    nonce: m(t[1]).toNumber(),
                                    maxPriorityFeePerGas: r,
                                    maxFeePerGas: n,
                                    gasPrice: null,
                                    gasLimit: m(t[4]),
                                    to: p(t[5]),
                                    value: m(t[6]),
                                    data: t[7],
                                    accessList: S(t[8])
                                };
                            return 9 === t.length || (i.hash = (0, a.keccak256)(e), x(i, t.slice(9), _)), i
                        }(t)
                }
                return f.throwError(`unsupported transaction type: ${t[0]}`, h.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: t[0]
                })
            }
        },
        59656: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                commify: function() {
                    return s
                },
                formatEther: function() {
                    return c
                },
                formatUnits: function() {
                    return a
                },
                parseEther: function() {
                    return l
                },
                parseUnits: function() {
                    return u
                }
            });
            var n = r(49222);
            const i = new(r(57036).Logger)("units/5.6.0"),
                o = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

            function s(e) {
                const t = String(e).split(".");
                (t.length > 2 || !t[0].match(/^-?[0-9]*$/) || t[1] && !t[1].match(/^[0-9]*$/) || "." === e || "-." === e) && i.throwArgumentError("invalid value", "value", e);
                let r = t[0],
                    n = "";
                for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1));
                    "0" === r.substring(0, 1);) r = r.substring(1);
                "" === r && (r = "0");
                let o = "";
                for (2 === t.length && (o = "." + (t[1] || "0")); o.length > 2 && "0" === o[o.length - 1];) o = o.substring(0, o.length - 1);
                const s = [];
                for (; r.length;) {
                    if (r.length <= 3) {
                        s.unshift(r);
                        break
                    } {
                        const e = r.length - 3;
                        s.unshift(r.substring(e)), r = r.substring(0, e)
                    }
                }
                return n + s.join(",") + o
            }

            function a(e, t) {
                if ("string" === typeof t) {
                    const e = o.indexOf(t); - 1 !== e && (t = 3 * e)
                }
                return (0, n.S5)(e, null != t ? t : 18)
            }

            function u(e, t) {
                if ("string" !== typeof e && i.throwArgumentError("value must be a string", "value", e), "string" === typeof t) {
                    const e = o.indexOf(t); - 1 !== e && (t = 3 * e)
                }
                return (0, n.Ox)(e, null != t ? t : 18)
            }

            function c(e) {
                return a(e, 18)
            }

            function l(e) {
                return u(e, 18)
            }
        },
        61: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Wallet: function() {
                    return w
                },
                verifyMessage: function() {
                    return E
                },
                verifyTypedData: function() {
                    return S
                }
            });
            var n = r(58194),
                i = r(35239),
                o = r(28612),
                s = r(75398),
                a = r(3686),
                u = r(79378),
                c = r(56364),
                l = r(59256),
                h = r(84427),
                f = r(62191),
                d = r(3378),
                p = r(37261),
                m = r(92338),
                g = r(13353),
                y = r(57036);
            var v = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const b = new y.Logger("wallet/5.6.0");
            class w extends o.Signer {
                constructor(e, t) {
                    if (b.checkNew(new.target, w), super(), null != (r = e) && (0, s.isHexString)(r.privateKey, 32) && null != r.address) {
                        const t = new d.SigningKey(e.privateKey);
                        if ((0, h.defineReadOnly)(this, "_signingKey", (() => t)), (0, h.defineReadOnly)(this, "address", (0, g.computeAddress)(this.publicKey)), this.address !== (0, n.getAddress)(e.address) && b.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), function(e) {
                                const t = e.mnemonic;
                                return t && t.phrase
                            }(e)) {
                            const t = e.mnemonic;
                            (0, h.defineReadOnly)(this, "_mnemonic", (() => ({
                                phrase: t.phrase,
                                path: t.path || c.defaultPath,
                                locale: t.locale || "en"
                            })));
                            const r = this.mnemonic,
                                n = c.HDNode.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path);
                            (0, g.computeAddress)(n.privateKey) !== this.address && b.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]")
                        } else(0, h.defineReadOnly)(this, "_mnemonic", (() => null))
                    } else {
                        if (d.SigningKey.isSigningKey(e)) "secp256k1" !== e.curve && b.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), (0, h.defineReadOnly)(this, "_signingKey", (() => e));
                        else {
                            "string" === typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e);
                            const t = new d.SigningKey(e);
                            (0, h.defineReadOnly)(this, "_signingKey", (() => t))
                        }(0, h.defineReadOnly)(this, "_mnemonic", (() => null)), (0, h.defineReadOnly)(this, "address", (0, g.computeAddress)(this.publicKey))
                    }
                    var r;
                    t && !i.zt.isProvider(t) && b.throwArgumentError("invalid provider", "provider", t), (0, h.defineReadOnly)(this, "provider", t || null)
                }
                get mnemonic() {
                    return this._mnemonic()
                }
                get privateKey() {
                    return this._signingKey().privateKey
                }
                get publicKey() {
                    return this._signingKey().publicKey
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                connect(e) {
                    return new w(this, e)
                }
                signTransaction(e) {
                    return (0, h.resolveProperties)(e).then((t => {
                        null != t.from && ((0, n.getAddress)(t.from) !== this.address && b.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete t.from);
                        const r = this._signingKey().signDigest((0, l.keccak256)((0, g.serialize)(t)));
                        return (0, g.serialize)(t, r)
                    }))
                }
                signMessage(e) {
                    return v(this, void 0, void 0, (function*() {
                        return (0, s.joinSignature)(this._signingKey().signDigest((0, a.r)(e)))
                    }))
                }
                _signTypedData(e, t, r) {
                    return v(this, void 0, void 0, (function*() {
                        const n = yield u.E.resolveNames(e, t, r, (e => (null == this.provider && b.throwError("cannot resolve ENS names without a provider", y.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "resolveName",
                            value: e
                        }), this.provider.resolveName(e))));
                        return (0, s.joinSignature)(this._signingKey().signDigest(u.E.hash(n.domain, t, n.value)))
                    }))
                }
                encrypt(e, t, r) {
                    if ("function" !== typeof t || r || (r = t, t = {}), r && "function" !== typeof r) throw new Error("invalid callback");
                    return t || (t = {}), (0, m.HI)(this, e, t, r)
                }
                static createRandom(e) {
                    let t = (0, f.O)(16);
                    e || (e = {}), e.extraEntropy && (t = (0, s.arrayify)((0, s.hexDataSlice)((0, l.keccak256)((0, s.concat)([t, e.extraEntropy])), 0, 16)));
                    const r = (0, c.entropyToMnemonic)(t, e.locale);
                    return w.fromMnemonic(r, e.path, e.locale)
                }
                static fromEncryptedJson(e, t, r) {
                    return (0, p.decryptJsonWallet)(e, t, r).then((e => new w(e)))
                }
                static fromEncryptedJsonSync(e, t) {
                    return new w((0, p.decryptJsonWalletSync)(e, t))
                }
                static fromMnemonic(e, t, r) {
                    return t || (t = c.defaultPath), new w(c.HDNode.fromMnemonic(e, null, r).derivePath(t))
                }
            }

            function E(e, t) {
                return (0, g.recoverAddress)((0, a.r)(e), t)
            }

            function S(e, t, r, n) {
                return (0, g.recoverAddress)(u.E.hash(e, t, r), n)
            }
        },
        38637: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                _fetchData: function() {
                    return p
                },
                fetchJson: function() {
                    return m
                },
                poll: function() {
                    return g
                }
            });
            var n = r(44002),
                i = r(75398),
                o = r(84427),
                s = r(71320),
                a = r(57036);
            var u = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };

            function c(e, t) {
                return u(this, void 0, void 0, (function*() {
                    null == t && (t = {});
                    const r = {
                        method: t.method || "GET",
                        headers: t.headers || {},
                        body: t.body || void 0
                    };
                    !0 !== t.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client");
                    const n = yield fetch(e, r), o = yield n.arrayBuffer(), s = {};
                    return n.headers.forEach ? n.headers.forEach(((e, t) => {
                        s[t.toLowerCase()] = e
                    })) : n.headers.keys().forEach((e => {
                        s[e.toLowerCase()] = n.headers.get(e)
                    })), {
                        headers: s,
                        statusCode: n.status,
                        statusMessage: n.statusText,
                        body: (0, i.arrayify)(new Uint8Array(o))
                    }
                }))
            }
            var l = function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
            const h = new a.Logger("web/5.6.0");

            function f(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }

            function d(e, t) {
                if (null == e) return null;
                if ("string" === typeof e) return e;
                if ((0, i.isBytesLike)(e)) {
                    if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim())) try {
                        return (0, s.ZN)(e)
                    } catch (r) {}
                    return (0, i.hexlify)(e)
                }
                return e
            }

            function p(e, t, r) {
                const i = "object" === typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
                h.assertArgument(i > 0 && i % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", i);
                const o = "object" === typeof e ? e.throttleCallback : null,
                    u = "object" === typeof e && "number" === typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
                h.assertArgument(u > 0 && u % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", u);
                const p = "object" === typeof e && !!e.errorPassThrough,
                    m = {};
                let g = null;
                const y = {
                    method: "GET"
                };
                let v = !1,
                    b = 12e4;
                if ("string" === typeof e) g = e;
                else if ("object" === typeof e) {
                    if (null != e && null != e.url || h.throwArgumentError("missing URL", "connection.url", e), g = e.url, "number" === typeof e.timeout && e.timeout > 0 && (b = e.timeout), e.headers)
                        for (const t in e.headers) m[t.toLowerCase()] = {
                            key: t,
                            value: String(e.headers[t])
                        }, ["if-none-match", "if-modified-since"].indexOf(t.toLowerCase()) >= 0 && (v = !0);
                    if (y.allowGzip = !!e.allowGzip, null != e.user && null != e.password) {
                        "https:" !== g.substring(0, 6) && !0 !== e.allowInsecureAuthentication && h.throwError("basic authentication requires a secure https url", a.Logger.errors.INVALID_ARGUMENT, {
                            argument: "url",
                            url: g,
                            user: e.user,
                            password: "[REDACTED]"
                        });
                        const t = e.user + ":" + e.password;
                        m.authorization = {
                            key: "Authorization",
                            value: "Basic " + (0, n.c)((0, s.Y0)(t))
                        }
                    }
                    null != e.skipFetchSetup && (y.skipFetchSetup = !!e.skipFetchSetup)
                }
                const w = new RegExp("^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$", "i"),
                    E = g ? g.match(w) : null;
                if (E) try {
                    const e = {
                        statusCode: 200,
                        statusMessage: "OK",
                        headers: {
                            "content-type": E[1]
                        },
                        body: (0, n.J)(E[2])
                    };
                    let t = e.body;
                    return r && (t = r(e.body, e)), Promise.resolve(t)
                } catch (P) {
                    h.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                        body: d(E[1], E[2]),
                        error: P,
                        requestBody: null,
                        requestMethod: "GET",
                        url: g
                    })
                }
                t && (y.method = "POST", y.body = t, null == m["content-type"] && (m["content-type"] = {
                    key: "Content-Type",
                    value: "application/octet-stream"
                }), null == m["content-length"] && (m["content-length"] = {
                    key: "Content-Length",
                    value: String(t.length)
                }));
                const S = {};
                Object.keys(m).forEach((e => {
                    const t = m[e];
                    S[t.key] = t.value
                })), y.headers = S;
                const k = function() {
                        let e = null;
                        return {
                            promise: new Promise((function(t, r) {
                                b && (e = setTimeout((() => {
                                    null != e && (e = null, r(h.makeError("timeout", a.Logger.errors.TIMEOUT, {
                                        requestBody: d(y.body, S["content-type"]),
                                        requestMethod: y.method,
                                        timeout: b,
                                        url: g
                                    })))
                                }), b))
                            })),
                            cancel: function() {
                                null != e && (clearTimeout(e), e = null)
                            }
                        }
                    }(),
                    _ = function() {
                        return l(this, void 0, void 0, (function*() {
                            for (let e = 0; e < i; e++) {
                                let t = null;
                                try {
                                    if (t = yield c(g, y), e < i)
                                        if (301 === t.statusCode || 302 === t.statusCode) {
                                            const e = t.headers.location || "";
                                            if ("GET" === y.method && e.match(/^https:/)) {
                                                g = t.headers.location;
                                                continue
                                            }
                                        } else if (429 === t.statusCode) {
                                        let r = !0;
                                        if (o && (r = yield o(e, g)), r) {
                                            let r = 0;
                                            const n = t.headers["retry-after"];
                                            r = "string" === typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : u * parseInt(String(Math.random() * Math.pow(2, e))), yield f(r);
                                            continue
                                        }
                                    }
                                } catch (P) {
                                    t = P.response, null == t && (k.cancel(), h.throwError("missing response", a.Logger.errors.SERVER_ERROR, {
                                        requestBody: d(y.body, S["content-type"]),
                                        requestMethod: y.method,
                                        serverError: P,
                                        url: g
                                    }))
                                }
                                let n = t.body;
                                if (v && 304 === t.statusCode ? n = null : !p && (t.statusCode < 200 || t.statusCode >= 300) && (k.cancel(), h.throwError("bad response", a.Logger.errors.SERVER_ERROR, {
                                        status: t.statusCode,
                                        headers: t.headers,
                                        body: d(n, t.headers ? t.headers["content-type"] : null),
                                        requestBody: d(y.body, S["content-type"]),
                                        requestMethod: y.method,
                                        url: g
                                    })), r) try {
                                    const e = yield r(n, t);
                                    return k.cancel(), e
                                } catch (P) {
                                    if (P.throttleRetry && e < i) {
                                        let t = !0;
                                        if (o && (t = yield o(e, g)), t) {
                                            const t = u * parseInt(String(Math.random() * Math.pow(2, e)));
                                            yield f(t);
                                            continue
                                        }
                                    }
                                    k.cancel(), h.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                                        body: d(n, t.headers ? t.headers["content-type"] : null),
                                        error: P,
                                        requestBody: d(y.body, S["content-type"]),
                                        requestMethod: y.method,
                                        url: g
                                    })
                                }
                                return k.cancel(), n
                            }
                            return h.throwError("failed response", a.Logger.errors.SERVER_ERROR, {
                                requestBody: d(y.body, S["content-type"]),
                                requestMethod: y.method,
                                url: g
                            })
                        }))
                    }();
                return Promise.race([k.promise, _])
            }

            function m(e, t, r) {
                let n = null;
                if (null != t) {
                    n = (0, s.Y0)(t);
                    const r = "string" === typeof e ? {
                        url: e
                    } : (0, o.shallowCopy)(e);
                    if (r.headers) {
                        0 !== Object.keys(r.headers).filter((e => "content-type" === e.toLowerCase())).length || (r.headers = (0, o.shallowCopy)(r.headers), r.headers["content-type"] = "application/json")
                    } else r.headers = {
                        "content-type": "application/json"
                    };
                    e = r
                }
                return p(e, n, ((e, t) => {
                    let n = null;
                    if (null != e) try {
                        n = JSON.parse((0, s.ZN)(e))
                    } catch (i) {
                        h.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
                            body: e,
                            error: i
                        })
                    }
                    return r && (n = r(n, t)), n
                }))
            }

            function g(e, t) {
                return t || (t = {}), null == (t = (0, o.shallowCopy)(t)).floor && (t.floor = 0), null == t.ceiling && (t.ceiling = 1e4), null == t.interval && (t.interval = 250), new Promise((function(r, n) {
                    let i = null,
                        o = !1;
                    const s = () => !o && (o = !0, i && clearTimeout(i), !0);
                    t.timeout && (i = setTimeout((() => {
                        s() && n(new Error("timeout"))
                    }), t.timeout));
                    const a = t.retryLimit;
                    let u = 0;
                    ! function i() {
                        return e().then((function(e) {
                            if (void 0 !== e) s() && r(e);
                            else if (t.oncePoll) t.oncePoll.once("poll", i);
                            else if (t.onceBlock) t.onceBlock.once("block", i);
                            else if (!o) {
                                if (u++, u > a) return void(s() && n(new Error("retry limit reached")));
                                let e = t.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                                e < t.floor && (e = t.floor), e > t.ceiling && (e = t.ceiling), setTimeout(i, e)
                            }
                            return null
                        }), (function(e) {
                            s() && n(e)
                        }))
                    }()
                }))
            }
        },
        18449: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Wordlist: function() {
                    return n.D
                },
                logger: function() {
                    return n.k
                },
                wordlists: function() {
                    return i.E
                }
            });
            var n = r(17503),
                i = r(56279)
        },
        17503: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return a
                },
                k: function() {
                    return s
                }
            });
            var n = r(32235),
                i = r(84427),
                o = r(57036);
            const s = new o.Logger("wordlists/5.6.0");
            class a {
                constructor(e) {
                    s.checkAbstract(new.target, a), (0, i.defineReadOnly)(this, "locale", e)
                }
                split(e) {
                    return e.toLowerCase().split(/ +/g)
                }
                join(e) {
                    return e.join(" ")
                }
                static check(e) {
                    const t = [];
                    for (let r = 0; r < 2048; r++) {
                        const n = e.getWord(r);
                        if (r !== e.getWordIndex(n)) return "0x";
                        t.push(n)
                    }
                    return (0, n.id)(t.join("\n") + "\n")
                }
                static register(e, t) {
                    t || (t = e.locale)
                }
            }
        },
        56279: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return u
                }
            });
            var n = r(17503);
            let i = null;

            function o(e) {
                if (null == i && (i = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== n.D.check(e))) throw i = null, new Error("BIP39 Wordlist for en (English) FAILED")
            }
            class s extends n.D {
                constructor() {
                    super("en")
                }
                getWord(e) {
                    return o(this), i[e]
                }
                getWordIndex(e) {
                    return o(this), i.indexOf(e)
                }
            }
            const a = new s;
            n.D.register(a);
            const u = {
                en: a
            }
        },
        12551: function(e, t, r) {
            "use strict";
            r.d(t, {
                A: function() {
                    return Q
                },
                C: function() {
                    return X
                },
                S: function() {
                    return te
                },
                U: function() {
                    return re
                },
                _: function() {
                    return a
                },
                a: function() {
                    return $
                },
                b: function() {
                    return Y
                },
                c: function() {
                    return ne
                },
                e: function() {
                    return V
                },
                k: function() {
                    return Z
                },
                l: function() {
                    return ee
                },
                m: function() {
                    return s
                },
                n: function() {
                    return J
                },
                o: function() {
                    return l
                },
                p: function() {
                    return c
                },
                q: function() {
                    return o
                }
            });
            var n = r(10161),
                i = r.n(n);

            function o(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function s(e, t, r) {
                o(e, t), t.set(e, r)
            }

            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function u(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }

            function c(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, u(e, t, "get"))
            }

            function l(e, t, r) {
                return function(e, t, r) {
                    if (t.set) t.set.call(e, r);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, u(e, t, "set"), r), r
            }
            const h = {
                    mainnet: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    },
                    ropsten: {
                        name: "Etherscan",
                        url: "https://ropsten.etherscan.io"
                    },
                    rinkeby: {
                        name: "Etherscan",
                        url: "https://rinkeby.etherscan.io"
                    },
                    goerli: {
                        name: "Etherscan",
                        url: "https://goerli.etherscan.io"
                    },
                    kovan: {
                        name: "Etherscan",
                        url: "https://kovan.etherscan.io"
                    },
                    optimism: {
                        name: "Etherscan",
                        url: "https://optimistic.etherscan.io"
                    },
                    optimismKovan: {
                        name: "Etherscan",
                        url: "https://kovan-optimistic.etherscan.io"
                    },
                    polygon: {
                        name: "PolygonScan",
                        url: "https://polygonscan.com"
                    },
                    polygonMumbai: {
                        name: "PolygonScan",
                        url: "https://mumbai.polygonscan.com"
                    },
                    arbitrum: {
                        name: "Arbiscan",
                        url: "https://arbiscan.io"
                    },
                    arbitrumRinkeby: {
                        name: "Arbiscan",
                        url: "https://testnet.arbiscan.io"
                    }
                },
                f = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                d = "https://eth-mainnet.alchemyapi.io/v2",
                p = "https://eth-ropsten.alchemyapi.io/v2",
                m = "https://eth-rinkeby.alchemyapi.io/v2",
                g = "https://eth-goerli.alchemyapi.io/v2",
                y = "https://eth-kovan.alchemyapi.io/v2",
                v = "https://opt-mainnet.g.alchemy.com/v2",
                b = "https://opt-kovan.g.alchemy.com/v2",
                w = "https://polygon-mainnet.g.alchemy.com/v2",
                E = "https://polygon-mumbai.g.alchemy.com/v2",
                S = "https://arb-mainnet.g.alchemy.com/v2",
                k = "https://arb-rinkeby.g.alchemy.com/v2",
                _ = "https://ropsten.infura.io/v3",
                P = "https://rinkeby.infura.io/v3",
                A = "https://goerli.infura.io/v3",
                x = "https://kovan.infura.io/v3",
                O = "https://optimism-mainnet.infura.io/v3",
                R = "https://optimism-kovan.infura.io/v3",
                C = "https://polygon-mainnet.infura.io/v3",
                N = "https://polygon-mumbai.infura.io/v3",
                I = "https://arbitrum-mainnet.infura.io/v3",
                M = "https://arbitrum-rinkeby.infura.io/v3",
                T = 3,
                L = 4,
                B = 5,
                F = 42,
                U = 10,
                D = 69,
                j = 137,
                q = 80001,
                K = 42161,
                z = 421611,
                G = 1337,
                H = 31337,
                V = {
                    mainnet: {
                        id: 1,
                        name: "Ethereum",
                        nativeCurrency: {
                            name: "Ether",
                            symbol: "ETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: d,
                            infura: "https://mainnet.infura.io/v3",
                            default: "".concat(d, "/").concat(f)
                        },
                        blockExplorers: {
                            etherscan: h.mainnet,
                            default: h.mainnet
                        }
                    },
                    ropsten: {
                        id: T,
                        name: "Ropsten",
                        nativeCurrency: {
                            name: "Ropsten Ether",
                            symbol: "ropETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: p,
                            infura: _,
                            default: "".concat(p, "/").concat(f)
                        },
                        blockExplorers: {
                            etherscan: h.ropsten,
                            default: h.ropsten
                        },
                        testnet: !0
                    },
                    rinkeby: {
                        id: L,
                        name: "Rinkeby",
                        nativeCurrency: {
                            name: "Rinkeby Ether",
                            symbol: "rETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: m,
                            infura: P,
                            default: "".concat(m, "/").concat(f)
                        },
                        blockExplorers: {
                            etherscan: h.rinkeby,
                            default: h.rinkeby
                        },
                        testnet: !0
                    },
                    goerli: {
                        id: B,
                        name: "Goerli",
                        nativeCurrency: {
                            name: "Goerli Ether",
                            symbol: "gETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: g,
                            infura: A,
                            default: "".concat(g, "/").concat(f)
                        },
                        blockExplorers: {
                            etherscan: h.goerli,
                            default: h.goerli
                        },
                        testnet: !0
                    },
                    kovan: {
                        id: F,
                        name: "Kovan",
                        nativeCurrency: {
                            name: "Kovan Ether",
                            symbol: "kETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: y,
                            infura: x,
                            default: "".concat(y, "/").concat(f)
                        },
                        blockExplorers: {
                            etherscan: h.kovan,
                            default: h.kovan
                        },
                        testnet: !0
                    },
                    optimism: {
                        id: U,
                        name: "Optimism",
                        nativeCurrency: {
                            name: "Ether",
                            symbol: "ETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: v,
                            infura: O,
                            default: "https://mainnet.optimism.io"
                        },
                        blockExplorers: {
                            etherscan: h.optimism,
                            default: h.optimism
                        }
                    },
                    optimismKovan: {
                        id: D,
                        name: "Optimism Kovan",
                        nativeCurrency: {
                            name: "Kovan Ether",
                            symbol: "KOR",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: b,
                            infura: R,
                            default: "https://kovan.optimism.io"
                        },
                        blockExplorers: {
                            etherscan: h.optimismKovan,
                            default: h.optimismKovan
                        },
                        testnet: !0
                    },
                    polygon: {
                        id: j,
                        name: "Polygon",
                        nativeCurrency: {
                            name: "MATIC",
                            symbol: "MATIC",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: w,
                            infura: C,
                            default: "https://polygon-rpc.com"
                        },
                        blockExplorers: {
                            etherscan: h.polygon,
                            default: h.polygon
                        }
                    },
                    polygonMumbai: {
                        id: q,
                        name: "Polygon Mumbai",
                        nativeCurrency: {
                            name: "MATIC",
                            symbol: "MATIC",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: E,
                            infura: N,
                            default: "https://matic-mumbai.chainstacklabs.com"
                        },
                        blockExplorers: {
                            etherscan: h.polygonMumbai,
                            default: h.polygonMumbai
                        },
                        testnet: !0
                    },
                    arbitrum: {
                        id: K,
                        name: "Arbitrum",
                        nativeCurrency: {
                            name: "Ether",
                            symbol: "AETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: S,
                            infura: I,
                            default: "https://arb1.arbitrum.io/rpc"
                        },
                        blockExplorers: {
                            arbitrum: {
                                name: "Arbitrum Explorer",
                                url: "https://explorer.arbitrum.io"
                            },
                            etherscan: h.arbitrum,
                            default: h.arbitrum
                        }
                    },
                    arbitrumRinkeby: {
                        id: z,
                        name: "Arbitrum Rinkeby",
                        nativeCurrency: {
                            name: "Arbitrum Rinkeby Ether",
                            symbol: "ARETH",
                            decimals: 18
                        },
                        rpcUrls: {
                            alchemy: k,
                            infura: M,
                            default: "https://rinkeby.arbitrum.io/rpc"
                        },
                        blockExplorers: {
                            arbitrum: {
                                name: "Arbitrum Explorer",
                                url: "https://rinkeby-explorer.arbitrum.io"
                            },
                            etherscan: h.arbitrumRinkeby,
                            default: h.arbitrumRinkeby
                        },
                        testnet: !0
                    },
                    localhost: {
                        id: G,
                        name: "Localhost",
                        rpcUrls: {
                            default: "http://127.0.0.1:8545"
                        }
                    },
                    hardhat: {
                        id: H,
                        name: "Hardhat",
                        rpcUrls: {
                            default: "http://127.0.0.1:8545"
                        }
                    }
                },
                $ = Object.values(V),
                W = [V.mainnet, V.ropsten, V.rinkeby, V.goerli, V.kovan];
            V.arbitrum, V.arbitrumRinkeby, V.optimism, V.optimismKovan;

            function J(e) {
                return "string" === typeof e ? Number.parseInt(e, "0x" === e.trim().substring(0, 2) ? 16 : 10) : e
            }
            class Q extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "AddChainError"), a(this, "message", "Error adding chain")
                }
            }
            class Z extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "ChainNotConfigured"), a(this, "message", "Chain not configured")
                }
            }
            class X extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "ConnectorAlreadyConnectedError"), a(this, "message", "Connector already connected")
                }
            }
            class Y extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "ConnectorNotFoundError"), a(this, "message", "Connector not found")
                }
            }
            class ee extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "SwitchChainError"), a(this, "message", "Error switching chain")
                }
            }
            class te extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "SwitchChainNotSupportedError"), a(this, "message", "Switch chain not supported by connector")
                }
            }
            class re extends Error {
                constructor() {
                    super(...arguments), a(this, "name", "UserRejectedRequestError"), a(this, "message", "User rejected request")
                }
            }
            class ne extends(i()) {
                constructor(e) {
                    let {
                        chains: t = W,
                        options: r
                    } = e;
                    super(), a(this, "id", void 0), a(this, "name", void 0), a(this, "chains", void 0), a(this, "options", void 0), a(this, "ready", void 0), this.chains = t, this.options = r
                }
                getBlockExplorerUrls(e) {
                    var t;
                    const r = null === (t = e.blockExplorers) || void 0 === t ? void 0 : t.default;
                    return Array.isArray(r) ? r.map((e => e.url)) : null !== r && void 0 !== r && r.url ? [r.url] : []
                }
                isChainUnsupported(e) {
                    return !this.chains.some((t => t.id === e))
                }
            }
        },
        90430: function(e, t, r) {
            "use strict";
            r.d(t, {
                _: function() {
                    return i
                },
                a: function() {
                    return o
                }
            });
            var n = r(12551);

            function i(e, t) {
                (0, n.q)(e, t), t.add(e)
            }

            function o(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
        },
        59456: function(e, t, r) {
            "use strict";
            r.d(t, {
                I: function() {
                    return w
                },
                a: function() {
                    return O
                },
                c: function() {
                    return x
                },
                g: function() {
                    return R
                }
            });
            var n = r(90430),
                i = r(12551),
                o = r(40919);
            const s = e => {
                let t;
                const r = new Set,
                    n = (e, n) => {
                        const i = "function" === typeof e ? e(t) : e;
                        if (i !== t) {
                            const e = t;
                            t = n ? i : Object.assign({}, t, i), r.forEach((r => r(t, e)))
                        }
                    },
                    i = () => t,
                    o = {
                        setState: n,
                        getState: i,
                        subscribe: e => (r.add(e), () => r.delete(e)),
                        destroy: () => r.clear()
                    };
                return t = e(n, i, o), o
            };
            Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            const a = e => (t, r, n) => {
                const i = n.subscribe;
                n.subscribe = (e, t, r) => {
                    let o = e;
                    if (t) {
                        const i = (null == r ? void 0 : r.equalityFn) || Object.is;
                        let s = e(n.getState());
                        o = r => {
                            const n = e(r);
                            if (!i(s, n)) {
                                const e = s;
                                t(s = n, e)
                            }
                        }, (null == r ? void 0 : r.fireImmediately) && t(s, s)
                    }
                    return i(o)
                };
                return e(t, r, n)
            };
            var u = Object.defineProperty,
                c = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                h = Object.prototype.propertyIsEnumerable,
                f = (e, t, r) => t in e ? u(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                d = (e, t) => {
                    for (var r in t || (t = {})) l.call(t, r) && f(e, r, t[r]);
                    if (c)
                        for (var r of c(t)) h.call(t, r) && f(e, r, t[r]);
                    return e
                };
            const p = e => t => {
                    try {
                        const r = e(t);
                        return r instanceof Promise ? r : {
                            then: e => p(e)(r),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (r) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: e => p(e)(r)
                        }
                    }
                },
                m = (e, t) => (r, n, i) => {
                    let o = d({
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => d(d({}, t), e)
                        }, t),
                        s = !1;
                    const a = new Set,
                        u = new Set;
                    let c;
                    try {
                        c = o.getStorage()
                    } catch (v) {}
                    if (!c) return e(((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), r(...e)
                    }), n, i);
                    const l = p(o.serialize),
                        h = () => {
                            const e = o.partialize(d({}, n()));
                            let t;
                            const r = l({
                                state: e,
                                version: o.version
                            }).then((e => c.setItem(o.name, e))).catch((e => {
                                t = e
                            }));
                            if (t) throw t;
                            return r
                        },
                        f = i.setState;
                    i.setState = (e, t) => {
                        f(e, t), h()
                    };
                    const m = e(((...e) => {
                        r(...e), h()
                    }), n, i);
                    let g;
                    const y = () => {
                        var e;
                        if (!c) return;
                        s = !1, a.forEach((e => e(n())));
                        const t = (null == (e = o.onRehydrateStorage) ? void 0 : e.call(o, n())) || void 0;
                        return p(c.getItem.bind(c))(o.name).then((e => {
                            if (e) return o.deserialize(e)
                        })).then((e => {
                            if (e) {
                                if ("number" !== typeof e.version || e.version === o.version) return e.state;
                                if (o.migrate) return o.migrate(e.state, e.version);
                                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                            }
                        })).then((e => {
                            var t;
                            return g = o.merge(e, null != (t = n()) ? t : m), r(g, !0), h()
                        })).then((() => {
                            null == t || t(g, void 0), s = !0, u.forEach((e => e(g)))
                        })).catch((e => {
                            null == t || t(void 0, e)
                        }))
                    };
                    return i.persist = {
                        setOptions: e => {
                            o = d(d({}, o), e), e.getStorage && (c = e.getStorage())
                        },
                        clearStorage: () => {
                            null == c || c.removeItem(o.name)
                        },
                        rehydrate: () => y(),
                        hasHydrated: () => s,
                        onHydrate: e => (a.add(e), () => {
                            a.delete(e)
                        }),
                        onFinishHydration: e => (u.add(e), () => {
                            u.delete(e)
                        })
                    }, y(), g || m
                };
            var g = r(58105);
            const y = new Set;
            const v = "injected.shimDisconnect";
            var b = new WeakMap;
            class w extends i.c {
                constructor(e) {
                    super({ ...e,
                        options: {
                            shimDisconnect: !0,
                            ...null === e || void 0 === e ? void 0 : e.options
                        }
                    }), (0, i._)(this, "id", void 0), (0, i._)(this, "name", void 0), (0, i._)(this, "ready", "undefined" != typeof window && !!window.ethereum), (0, i.m)(this, b, {
                        writable: !0,
                        value: void 0
                    }), (0, i._)(this, "onAccountsChanged", (e => {
                        0 === e.length ? this.emit("disconnect") : this.emit("change", {
                            account: (0, g.getAddress)(e[0])
                        })
                    })), (0, i._)(this, "onChainChanged", (e => {
                        const t = (0, i.n)(e),
                            r = this.isChainUnsupported(t);
                        this.emit("change", {
                            chain: {
                                id: t,
                                unsupported: r
                            }
                        })
                    })), (0, i._)(this, "onDisconnect", (() => {
                        var e, t;
                        this.emit("disconnect"), null !== (e = this.options) && void 0 !== e && e.shimDisconnect && (null === (t = R().storage) || void 0 === t || t.removeItem(v))
                    }));
                    let t = "Injected";
                    if ("undefined" !== typeof window) {
                        var r;
                        const n = null === e || void 0 === e || null === (r = e.options) || void 0 === r ? void 0 : r.name,
                            i = function(e) {
                                var t, r;
                                if (!e) return "Injected";
                                const n = e => e.isBraveWallet ? "Brave Wallet" : e.isCoinbaseWallet ? "Coinbase Wallet" : e.isFrame ? "Frame" : e.isOpera ? "Opera" : e.isTally ? "Tally" : e.isTokenary ? "Tokenary" : e.isTrust ? "Trust Wallet" : e.isMetaMask ? "MetaMask" : void 0;
                                if (null !== (t = e.providers) && void 0 !== t && t.length) {
                                    const t = new Set;
                                    let r = 1;
                                    for (const o of e.providers) {
                                        let e = n(o);
                                        e || (e = "Unknown Wallet #".concat(r), r += 1), t.add(e)
                                    }
                                    const i = [...t];
                                    return i.length ? i : i[0]
                                }
                                return null !== (r = n(e)) && void 0 !== r ? r : "Injected"
                            }(window.ethereum);
                        t = n ? "function" === typeof n ? n(i) : n : "string" === typeof i ? i : i[0]
                    }
                    this.id = "injected", this.name = t
                }
                async connect() {
                    try {
                        var e, t;
                        const r = await this.getProvider();
                        if (!r) throw new i.b;
                        r.on && (r.on("accountsChanged", this.onAccountsChanged), r.on("chainChanged", this.onChainChanged), r.on("disconnect", this.onDisconnect)), this.emit("message", {
                            type: "connecting"
                        });
                        const n = await this.getAccount(),
                            o = await this.getChainId(),
                            s = this.isChainUnsupported(o);
                        return null !== (e = this.options) && void 0 !== e && e.shimDisconnect && (null === (t = R().storage) || void 0 === t || t.setItem(v, !0)), {
                            account: n,
                            chain: {
                                id: o,
                                unsupported: s
                            },
                            provider: r
                        }
                    } catch (r) {
                        if (4001 === r.code) throw new i.U;
                        throw r
                    }
                }
                async disconnect() {
                    var e, t;
                    const r = await this.getProvider();
                    null !== r && void 0 !== r && r.removeListener && (r.removeListener("accountsChanged", this.onAccountsChanged), r.removeListener("chainChanged", this.onChainChanged), r.removeListener("disconnect", this.onDisconnect), null !== (e = this.options) && void 0 !== e && e.shimDisconnect && (null === (t = R().storage) || void 0 === t || t.removeItem(v)))
                }
                async getAccount() {
                    const e = await this.getProvider();
                    if (!e) throw new i.b;
                    const t = await e.request({
                        method: "eth_requestAccounts"
                    });
                    return (0, g.getAddress)(t[0])
                }
                async getChainId() {
                    const e = await this.getProvider();
                    if (!e) throw new i.b;
                    return await e.request({
                        method: "eth_chainId"
                    }).then(i.n)
                }
                async getProvider() {
                    return "undefined" !== typeof window && window.ethereum && (0, i.o)(this, b, window.ethereum), (0, i.p)(this, b)
                }
                async getSigner() {
                    const [e, t] = await Promise.all([this.getProvider(), this.getAccount()]);
                    return new o.Web3Provider(e).getSigner(t)
                }
                async isAuthorized() {
                    try {
                        var e, t;
                        if (null !== (e = this.options) && void 0 !== e && e.shimDisconnect && (null === (t = R().storage) || void 0 === t || !t.getItem(v))) return !1;
                        const r = await this.getProvider();
                        if (!r) throw new i.b;
                        const n = await r.request({
                            method: "eth_accounts"
                        });
                        return !!n[0]
                    } catch {
                        return !1
                    }
                }
                async switchChain(e) {
                    const t = await this.getProvider();
                    if (!t) throw new i.b;
                    const r = (0, g.hexValue)(e);
                    try {
                        var n;
                        await t.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: r
                            }]
                        });
                        return null !== (n = [...this.chains, ...i.a].find((t => t.id === e))) && void 0 !== n ? n : {
                            id: e,
                            name: "Chain ".concat(r),
                            rpcUrls: {
                                default: ""
                            }
                        }
                    } catch (o) {
                        if (4902 !== o.code) throw 4001 === o.code ? new i.U : new i.l;
                        try {
                            const n = this.chains.find((t => t.id === e));
                            if (!n) throw new i.k;
                            return await t.request({
                                method: "wallet_addEthereumChain",
                                params: [{
                                    chainId: r,
                                    chainName: n.name,
                                    nativeCurrency: n.nativeCurrency,
                                    rpcUrls: [n.rpcUrls.default],
                                    blockExplorerUrls: this.getBlockExplorerUrls(n)
                                }]
                            }), n
                        } catch (s) {
                            throw new i.A
                        }
                    }
                }
                async watchAsset(e) {
                    let {
                        address: t,
                        decimals: r = 18,
                        image: n,
                        symbol: o
                    } = e;
                    const s = await this.getProvider();
                    if (!s) throw new i.b;
                    return await s.request({
                        method: "wallet_watchAsset",
                        params: {
                            type: "ERC20",
                            options: {
                                address: t,
                                decimals: r,
                                image: n,
                                symbol: o
                            }
                        }
                    })
                }
            }
            const E = {
                getItem: e => "",
                setItem: (e, t) => null,
                removeItem: e => null
            };
            const S = "store";
            var k = new WeakMap,
                _ = new WeakSet;
            class P {
                constructor() {
                    var e, t, r, u;
                    let c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, n._)(this, _), (0, i._)(this, "config", void 0), (0, i._)(this, "storage", void 0), (0, i._)(this, "store", void 0), (0, i.m)(this, k, {
                        writable: !0,
                        value: void 0
                    });
                    const l = null !== (e = c.autoConnect) && void 0 !== e && e,
                        h = null !== (t = c.connectors) && void 0 !== t ? t : [new w],
                        f = null !== (r = c.provider) && void 0 !== r ? r : e => {
                            try {
                                return (0, o.getDefaultProvider)(e.chainId)
                            } catch {
                                return (0, o.getDefaultProvider)()
                            }
                        },
                        d = null !== (u = c.storage) && void 0 !== u ? u : function(e) {
                            let {
                                storage: t,
                                key: r = "wagmi"
                            } = e;
                            return { ...t,
                                getItem: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    const i = t.getItem("".concat(r, ".").concat(e));
                                    try {
                                        return i ? JSON.parse(i) : n
                                    } catch (o) {
                                        return console.warn(o), n
                                    }
                                },
                                setItem: (e, n) => {
                                    if (null === n) t.removeItem("".concat(r, ".").concat(e));
                                    else try {
                                        t.setItem("".concat(r, ".").concat(e), JSON.stringify(n))
                                    } catch (i) {
                                        console.error(i)
                                    }
                                },
                                removeItem: e => t.removeItem("".concat(r, ".").concat(e))
                            }
                        }({
                            storage: "undefined" !== typeof window ? window.localStorage : E
                        }),
                        p = c.webSocketProvider;
                    let g, y = "disconnected";
                    if (l) try {
                        var v, b, P;
                        const e = d.getItem(S, ""),
                            t = null === (v = JSON.parse(e || "{}")) || void 0 === v || null === (b = v.state) || void 0 === b ? void 0 : b.data;
                        y = null !== t && void 0 !== t && t.account ? "reconnecting" : "connecting", g = null === t || void 0 === t || null === (P = t.chain) || void 0 === P ? void 0 : P.id
                    } catch (N) {}
                    const x = "function" === typeof h ? h({
                            chainId: g
                        }) : h,
                        O = "function" === typeof f ? f({
                            chainId: g
                        }) : f,
                        R = "function" === typeof p ? p({
                            chainId: g
                        }) : p;
                    var C;
                    this.store = (C = a(m((() => ({
                        connectors: x,
                        provider: O,
                        status: y,
                        webSocketProvider: R
                    })), {
                        name: S,
                        getStorage: () => d,
                        partialize: e => {
                            var t, r;
                            return { ...l && {
                                    data: {
                                        account: null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.account,
                                        chain: null === e || void 0 === e || null === (r = e.data) || void 0 === r ? void 0 : r.chain
                                    }
                                },
                                chains: null === e || void 0 === e ? void 0 : e.chains
                            }
                        },
                        version: 1
                    }))) ? s(C) : s, this.config = {
                        autoConnect: l,
                        connectors: h,
                        provider: f,
                        storage: d,
                        webSocketProvider: p
                    }, this.storage = d, (0, i.o)(this, k, null === d || void 0 === d ? void 0 : d.getItem("wallet")), (0, n.a)(this, _, A).call(this)
                }
                get chains() {
                    return this.store.getState().chains
                }
                get connectors() {
                    return this.store.getState().connectors
                }
                get connector() {
                    return this.store.getState().connector
                }
                get data() {
                    return this.store.getState().data
                }
                get error() {
                    return this.store.getState().error
                }
                get provider() {
                    return this.store.getState().provider
                }
                get status() {
                    return this.store.getState().status
                }
                get subscribe() {
                    return this.store.subscribe
                }
                get webSocketProvider() {
                    return this.store.getState().webSocketProvider
                }
                setState(e) {
                    const t = "function" === typeof e ? e(this.store.getState()) : e;
                    this.store.setState(t, !0)
                }
                clearState() {
                    this.setState((e => ({ ...e,
                        connector: void 0,
                        data: void 0,
                        error: void 0,
                        status: "disconnected"
                    })))
                }
                async destroy() {
                    var e, t;
                    this.connector && await (null === (e = (t = this.connector).disconnect) || void 0 === e ? void 0 : e.call(t)), this.clearState(), this.store.destroy()
                }
                async autoConnect() {
                    if (!this.connectors.length) return;
                    const e = (0, i.p)(this, k) ? [...this.connectors].sort((e => e.id === (0, i.p)(this, k) ? -1 : 1)) : this.connectors;
                    let t = !1;
                    for (const r of e) {
                        if (!r.ready || !r.isAuthorized) continue;
                        if (!(await r.isAuthorized())) continue;
                        const e = await r.connect();
                        this.setState((t => ({ ...t,
                            connector: r,
                            chains: null === r || void 0 === r ? void 0 : r.chains,
                            data: e,
                            status: "connected"
                        }))), t = !0;
                        break
                    }
                    return t || this.setState((e => ({ ...e,
                        status: "disconnected"
                    }))), this.data
                }
                setLastUsedConnector() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    null === (e = this.storage) || void 0 === e || e.setItem("wallet", t)
                }
            }

            function A() {
                const e = e => {
                        this.setState((t => ({ ...t,
                            data: { ...t.data,
                                ...e
                            }
                        })))
                    },
                    t = () => {
                        this.clearState()
                    },
                    r = e => {
                        this.setState((t => ({ ...t,
                            error: e
                        })))
                    };
                this.store.subscribe((e => {
                    let {
                        connector: t
                    } = e;
                    return t
                }), ((n, i) => {
                    var o, s, a, u, c, l;
                    null === i || void 0 === i || null === (o = i.off) || void 0 === o || o.call(i, "change", e), null === i || void 0 === i || null === (s = i.off) || void 0 === s || s.call(i, "disconnect", t), null === i || void 0 === i || null === (a = i.off) || void 0 === a || a.call(i, "error", r), n && (null === (u = n.on) || void 0 === u || u.call(n, "change", e), null === (c = n.on) || void 0 === c || c.call(n, "disconnect", t), null === (l = n.on) || void 0 === l || l.call(n, "error", r))
                }));
                const {
                    connectors: n,
                    provider: i,
                    webSocketProvider: o
                } = this.config, s = "function" === typeof n, a = "function" === typeof i, u = "function" === typeof o;
                (s || a || u) && this.store.subscribe((e => {
                    var t;
                    let {
                        data: r
                    } = e;
                    return null === r || void 0 === r || null === (t = r.chain) || void 0 === t ? void 0 : t.id
                }), (e => {
                    this.setState((t => ({ ...t,
                        connectors: s ? n({
                            chainId: e
                        }) : t.connectors,
                        provider: a ? i({
                            chainId: e
                        }) : t.provider,
                        webSocketProvider: u ? o({
                            chainId: e
                        }) : t.webSocketProvider
                    })))
                }))
            }
            let x;

            function O(e) {
                const t = new P(e);
                return x = t, t
            }

            function R() {
                return x || (e = "No client defined. Falling back to default client.", y.has(null !== t && void 0 !== t ? t : e) || (console.warn(e), y.add(e)), new P);
                var e, t
            }
        },
        8202: function(e) {
            "use strict";
            ! function(t) {
                function r(e) {
                    return parseInt(e) === e
                }

                function n(e) {
                    if (!r(e.length)) return !1;
                    for (var t = 0; t < e.length; t++)
                        if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
                    return !0
                }

                function i(e, t) {
                    if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
                    if (Array.isArray(e)) {
                        if (!n(e)) throw new Error("Array contains invalid value: " + e);
                        return new Uint8Array(e)
                    }
                    if (r(e.length) && n(e)) return new Uint8Array(e);
                    throw new Error("unsupported array-like object")
                }

                function o(e) {
                    return new Uint8Array(e)
                }

                function s(e, t, r, n, i) {
                    null == n && null == i || (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)), t.set(e, r)
                }
                var a = {
                        toBytes: function(e) {
                            var t = [],
                                r = 0;
                            for (e = encodeURI(e); r < e.length;) {
                                var n = e.charCodeAt(r++);
                                37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n)
                            }
                            return i(t)
                        },
                        fromBytes: function(e) {
                            for (var t = [], r = 0; r < e.length;) {
                                var n = e[r];
                                n < 128 ? (t.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
                            }
                            return t.join("")
                        }
                    },
                    u = function() {
                        var e = "0123456789abcdef";
                        return {
                            toBytes: function(e) {
                                for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                                return t
                            },
                            fromBytes: function(t) {
                                for (var r = [], n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    r.push(e[(240 & i) >> 4] + e[15 & i])
                                }
                                return r.join("")
                            }
                        }
                    }(),
                    c = {
                        16: 10,
                        24: 12,
                        32: 14
                    },
                    l = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
                    h = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                    f = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
                    d = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
                    p = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
                    m = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
                    g = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
                    y = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
                    v = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
                    b = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
                    w = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
                    E = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
                    S = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
                    k = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
                    _ = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

                function P(e) {
                    for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
                    return t
                }
                var A = function(e) {
                    if (!(this instanceof A)) throw Error("AES must be instanitated with `new`");
                    Object.defineProperty(this, "key", {
                        value: i(e, !0)
                    }), this._prepare()
                };
                A.prototype._prepare = function() {
                    var e = c[this.key.length];
                    if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
                    this._Ke = [], this._Kd = [];
                    for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
                    var r, n = 4 * (e + 1),
                        i = this.key.length / 4,
                        o = P(this.key);
                    for (t = 0; t < i; t++) r = t >> 2, this._Ke[r][t % 4] = o[t], this._Kd[e - r][t % 4] = o[t];
                    for (var s, a = 0, u = i; u < n;) {
                        if (s = o[i - 1], o[0] ^= h[s >> 16 & 255] << 24 ^ h[s >> 8 & 255] << 16 ^ h[255 & s] << 8 ^ h[s >> 24 & 255] ^ l[a] << 24, a += 1, 8 != i)
                            for (t = 1; t < i; t++) o[t] ^= o[t - 1];
                        else {
                            for (t = 1; t < i / 2; t++) o[t] ^= o[t - 1];
                            s = o[i / 2 - 1], o[i / 2] ^= h[255 & s] ^ h[s >> 8 & 255] << 8 ^ h[s >> 16 & 255] << 16 ^ h[s >> 24 & 255] << 24;
                            for (t = i / 2 + 1; t < i; t++) o[t] ^= o[t - 1]
                        }
                        for (t = 0; t < i && u < n;) f = u >> 2, d = u % 4, this._Ke[f][d] = o[t], this._Kd[e - f][d] = o[t++], u++
                    }
                    for (var f = 1; f < e; f++)
                        for (var d = 0; d < 4; d++) s = this._Kd[f][d], this._Kd[f][d] = E[s >> 24 & 255] ^ S[s >> 16 & 255] ^ k[s >> 8 & 255] ^ _[255 & s]
                }, A.prototype.encrypt = function(e) {
                    if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
                    for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = P(e), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];
                    for (var s = 1; s < t; s++) {
                        for (i = 0; i < 4; i++) r[i] = d[n[i] >> 24 & 255] ^ p[n[(i + 1) % 4] >> 16 & 255] ^ m[n[(i + 2) % 4] >> 8 & 255] ^ g[255 & n[(i + 3) % 4]] ^ this._Ke[s][i];
                        n = r.slice()
                    }
                    var a, u = o(16);
                    for (i = 0; i < 4; i++) a = this._Ke[t][i], u[4 * i] = 255 & (h[n[i] >> 24 & 255] ^ a >> 24), u[4 * i + 1] = 255 & (h[n[(i + 1) % 4] >> 16 & 255] ^ a >> 16), u[4 * i + 2] = 255 & (h[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), u[4 * i + 3] = 255 & (h[255 & n[(i + 3) % 4]] ^ a);
                    return u
                }, A.prototype.decrypt = function(e) {
                    if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
                    for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = P(e), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];
                    for (var s = 1; s < t; s++) {
                        for (i = 0; i < 4; i++) r[i] = y[n[i] >> 24 & 255] ^ v[n[(i + 3) % 4] >> 16 & 255] ^ b[n[(i + 2) % 4] >> 8 & 255] ^ w[255 & n[(i + 1) % 4]] ^ this._Kd[s][i];
                        n = r.slice()
                    }
                    var a, u = o(16);
                    for (i = 0; i < 4; i++) a = this._Kd[t][i], u[4 * i] = 255 & (f[n[i] >> 24 & 255] ^ a >> 24), u[4 * i + 1] = 255 & (f[n[(i + 3) % 4] >> 16 & 255] ^ a >> 16), u[4 * i + 2] = 255 & (f[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), u[4 * i + 3] = 255 & (f[255 & n[(i + 1) % 4]] ^ a);
                    return u
                };
                var x = function(e) {
                    if (!(this instanceof x)) throw Error("AES must be instanitated with `new`");
                    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new A(e)
                };
                x.prototype.encrypt = function(e) {
                    if ((e = i(e)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                    for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) s(e, r, 0, n, n + 16), s(r = this._aes.encrypt(r), t, n);
                    return t
                }, x.prototype.decrypt = function(e) {
                    if ((e = i(e)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                    for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) s(e, r, 0, n, n + 16), s(r = this._aes.decrypt(r), t, n);
                    return t
                };
                var O = function(e, t) {
                    if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");
                    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
                        if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                    } else t = o(16);
                    this._lastCipherblock = i(t, !0), this._aes = new A(e)
                };
                O.prototype.encrypt = function(e) {
                    if ((e = i(e)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                    for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
                        s(e, r, 0, n, n + 16);
                        for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a];
                        this._lastCipherblock = this._aes.encrypt(r), s(this._lastCipherblock, t, n)
                    }
                    return t
                }, O.prototype.decrypt = function(e) {
                    if ((e = i(e)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                    for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
                        s(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
                        for (var a = 0; a < 16; a++) t[n + a] = r[a] ^ this._lastCipherblock[a];
                        s(e, this._lastCipherblock, 0, n, n + 16)
                    }
                    return t
                };
                var R = function(e, t, r) {
                    if (!(this instanceof R)) throw Error("AES must be instanitated with `new`");
                    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
                        if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)")
                    } else t = o(16);
                    r || (r = 1), this.segmentSize = r, this._shiftRegister = i(t, !0), this._aes = new A(e)
                };
                R.prototype.encrypt = function(e) {
                    if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
                    for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                        t = this._aes.encrypt(this._shiftRegister);
                        for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
                        s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                    }
                    return r
                }, R.prototype.decrypt = function(e) {
                    if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
                    for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                        t = this._aes.encrypt(this._shiftRegister);
                        for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
                        s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                    }
                    return r
                };
                var C = function(e, t) {
                    if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
                    if (this.description = "Output Feedback", this.name = "ofb", t) {
                        if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                    } else t = o(16);
                    this._lastPrecipher = i(t, !0), this._lastPrecipherIndex = 16, this._aes = new A(e)
                };
                C.prototype.encrypt = function(e) {
                    for (var t = i(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
                    return t
                }, C.prototype.decrypt = C.prototype.encrypt;
                var N = function(e) {
                    if (!(this instanceof N)) throw Error("Counter must be instanitated with `new`");
                    0 === e || e || (e = 1), "number" === typeof e ? (this._counter = o(16), this.setValue(e)) : this.setBytes(e)
                };
                N.prototype.setValue = function(e) {
                    if ("number" !== typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
                    for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e >>= 8
                }, N.prototype.setBytes = function(e) {
                    if (16 != (e = i(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
                    this._counter = e
                }, N.prototype.increment = function() {
                    for (var e = 15; e >= 0; e--) {
                        if (255 !== this._counter[e]) {
                            this._counter[e]++;
                            break
                        }
                        this._counter[e] = 0
                    }
                };
                var I = function(e, t) {
                    if (!(this instanceof I)) throw Error("AES must be instanitated with `new`");
                    this.description = "Counter", this.name = "ctr", t instanceof N || (t = new N(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new A(e)
                };
                I.prototype.encrypt = function(e) {
                    for (var t = i(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
                    return t
                }, I.prototype.decrypt = I.prototype.encrypt;
                var M = {
                    AES: A,
                    Counter: N,
                    ModeOfOperation: {
                        ecb: x,
                        cbc: O,
                        cfb: R,
                        ofb: C,
                        ctr: I
                    },
                    utils: {
                        hex: u,
                        utf8: a
                    },
                    padding: {
                        pkcs7: {
                            pad: function(e) {
                                var t = 16 - (e = i(e, !0)).length % 16,
                                    r = o(e.length + t);
                                s(e, r);
                                for (var n = e.length; n < r.length; n++) r[n] = t;
                                return r
                            },
                            strip: function(e) {
                                if ((e = i(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                                var t = e[e.length - 1];
                                if (t > 16) throw new Error("PKCS#7 padding byte out of range");
                                for (var r = e.length - t, n = 0; n < t; n++)
                                    if (e[r + n] !== t) throw new Error("PKCS#7 invalid padding byte");
                                var a = o(r);
                                return s(e, a, 0, 0, r), a
                            }
                        }
                    },
                    _arrayTest: {
                        coerceArray: i,
                        createArray: o,
                        copyArray: s
                    }
                };
                e.exports = M
            }()
        },
        21273: function(e) {
            "use strict";
            for (var t = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < t.length; n++) {
                var i = t.charAt(n);
                if (void 0 !== r[i]) throw new TypeError(i + " is ambiguous");
                r[i] = n
            }

            function o(e) {
                var t = e >> 25;
                return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
            }

            function s(e) {
                for (var t = 1, r = 0; r < e.length; ++r) {
                    var n = e.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
                    t = o(t) ^ n >> 5
                }
                for (t = o(t), r = 0; r < e.length; ++r) {
                    var i = e.charCodeAt(r);
                    t = o(t) ^ 31 & i
                }
                return t
            }

            function a(e, t) {
                if (t = t || 90, e.length < 8) return e + " too short";
                if (e.length > t) return "Exceeds length limit";
                var n = e.toLowerCase(),
                    i = e.toUpperCase();
                if (e !== n && e !== i) return "Mixed-case string " + e;
                var a = (e = n).lastIndexOf("1");
                if (-1 === a) return "No separator character for " + e;
                if (0 === a) return "Missing prefix for " + e;
                var u = e.slice(0, a),
                    c = e.slice(a + 1);
                if (c.length < 6) return "Data too short";
                var l = s(u);
                if ("string" === typeof l) return l;
                for (var h = [], f = 0; f < c.length; ++f) {
                    var d = c.charAt(f),
                        p = r[d];
                    if (void 0 === p) return "Unknown character " + d;
                    l = o(l) ^ p, f + 6 >= c.length || h.push(p)
                }
                return 1 !== l ? "Invalid checksum for " + e : {
                    prefix: u,
                    words: h
                }
            }

            function u(e, t, r, n) {
                for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < e.length; ++u)
                    for (i = i << t | e[u], o += t; o >= r;) o -= r, a.push(i >> o & s);
                if (n) o > 0 && a.push(i << r - o & s);
                else {
                    if (o >= t) return "Excess padding";
                    if (i << r - o & s) return "Non-zero padding"
                }
                return a
            }
            e.exports = {
                decodeUnsafe: function() {
                    var e = a.apply(null, arguments);
                    if ("object" === typeof e) return e
                },
                decode: function(e) {
                    var t = a.apply(null, arguments);
                    if ("object" === typeof t) return t;
                    throw new Error(t)
                },
                encode: function(e, r, n) {
                    if (n = n || 90, e.length + 7 + r.length > n) throw new TypeError("Exceeds length limit");
                    var i = s(e = e.toLowerCase());
                    if ("string" === typeof i) throw new Error(i);
                    for (var a = e + "1", u = 0; u < r.length; ++u) {
                        var c = r[u];
                        if (c >> 5 !== 0) throw new Error("Non 5-bit word");
                        i = o(i) ^ c, a += t.charAt(c)
                    }
                    for (u = 0; u < 6; ++u) i = o(i);
                    for (i ^= 1, u = 0; u < 6; ++u) {
                        a += t.charAt(i >> 5 * (5 - u) & 31)
                    }
                    return a
                },
                toWordsUnsafe: function(e) {
                    var t = u(e, 8, 5, !0);
                    if (Array.isArray(t)) return t
                },
                toWords: function(e) {
                    var t = u(e, 8, 5, !0);
                    if (Array.isArray(t)) return t;
                    throw new Error(t)
                },
                fromWordsUnsafe: function(e) {
                    var t = u(e, 5, 8, !1);
                    if (Array.isArray(t)) return t
                },
                fromWords: function(e) {
                    var t = u(e, 5, 8, !1);
                    if (Array.isArray(t)) return t;
                    throw new Error(t)
                }
            }
        },
        62197: function(e, t, r) {
            ! function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!e) throw new Error(t || "Assertion failed")
                }

                function i(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function o(e, t, r) {
                    if (o.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                var s;
                "object" === typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(33196).Buffer
                } catch (P) {}

                function a(e, t) {
                    var r = e.charCodeAt(t);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function u(e, t, r) {
                    var n = a(e, r);
                    return r - 1 >= t && (n |= a(e, r - 1) << 4), n
                }

                function c(e, t, r, n) {
                    for (var i = 0, o = Math.min(e.length, r), s = t; s < o; s++) {
                        var a = e.charCodeAt(s) - 48;
                        i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                    }
                    return i
                }
                o.isBN = function(e) {
                    return e instanceof o || null !== e && "object" === typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                }, o.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, o.min = function(e, t) {
                    return e.cmp(t) < 0 ? e : t
                }, o.prototype._init = function(e, t, r) {
                    if ("number" === typeof e) return this._initNumber(e, t, r);
                    if ("object" === typeof e) return this._initArray(e, t, r);
                    "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)))
                }, o.prototype._initNumber = function(e, t, r) {
                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                }, o.prototype._initArray = function(e, t, r) {
                    if (n("number" === typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, s, a = 0;
                    if ("be" === r)
                        for (i = e.length - 1, o = 0; i >= 0; i -= 3) s = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < e.length; i += 3) s = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(e, t, r) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0,
                        s = 0;
                    if ("be" === r)
                        for (n = e.length - 1; n >= t; n -= 2) i = u(e, t, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                    else
                        for (n = (e.length - t) % 2 === 0 ? t + 1 : t; n < e.length; n += 2) i = u(e, t, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function(e, t, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                    n--, i = i / t | 0;
                    for (var o = e.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, l = r; l < a; l += n) u = c(e, l, l + n, t), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                    if (0 !== s) {
                        var h = 1;
                        for (u = c(e, l, e.length, t), l = 0; l < s; l++) h *= t;
                        this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                    }
                    this.strip()
                }, o.prototype.copy = function(e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, o.prototype.clone = function() {
                    var e = new o(null);
                    return this.copy(e), e
                }, o.prototype._expand = function(e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function d(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | e.words[0],
                        o = 0 | t.words[0],
                        s = i * o,
                        a = 67108863 & s,
                        u = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var c = 1; c < n; c++) {
                        for (var l = u >>> 26, h = 67108863 & u, f = Math.min(c, t.length - 1), d = Math.max(0, c - e.length + 1); d <= f; d++) {
                            var p = c - d | 0;
                            l += (s = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + h) / 67108864 | 0, h = 67108863 & s
                        }
                        r.words[c] = 0 | h, u = 0 | l
                    }
                    return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip()
                }
                o.prototype.toString = function(e, t) {
                    var r;
                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                        r = "";
                        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s],
                                u = (16777215 & (a << i | o)).toString(16);
                            r = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? l[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, s--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % t !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var c = h[e],
                            d = f[e];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modn(d).toString(e);
                            r = (p = p.idivn(d)).isZero() ? m + r : l[c - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % t !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(e, t) {
                    return n("undefined" !== typeof s), this.toArrayLike(s, e, t)
                }, o.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }, o.prototype.toArrayLike = function(e, t, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var s, a, u = "le" === t,
                        c = new e(o),
                        l = this.clone();
                    if (u) {
                        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), c[a] = s;
                        for (; a < o; a++) c[a] = 0
                    } else {
                        for (a = 0; a < o - i; a++) c[a] = 0;
                        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), c[o - a - 1] = s
                    }
                    return c
                }, Math.clz32 ? o.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                } : o.prototype._countBits = function(e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, o.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return 0 === (8191 & t) && (r += 13, t >>>= 13), 0 === (127 & t) && (r += 7, t >>>= 7), 0 === (15 & t) && (r += 4, t >>>= 4), 0 === (3 & t) && (r += 2, t >>>= 2), 0 === (1 & t) && r++, r
                }, o.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return 26 * (this.length - 1) + t
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }, o.prototype.ior = function(e) {
                    return n(0 === (this.negative | e.negative)), this.iuor(e)
                }, o.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, o.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, o.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this.strip()
                }, o.prototype.iand = function(e) {
                    return n(0 === (this.negative | e.negative)), this.iuand(e)
                }, o.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, o.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, o.prototype.iuxor = function(e) {
                    var t, r;
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n];
                    return this.length = t.length, this.strip()
                }, o.prototype.ixor = function(e) {
                    return n(0 === (this.negative | e.negative)), this.iuxor(e)
                }, o.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, o.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, o.prototype.inotn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }, o.prototype.setn = function(e, t) {
                    n("number" === typeof e && e >= 0);
                    var r = e / 26 | 0,
                        i = e % 26;
                    return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(e) {
                    var t, r, n;
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, o.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        return e.negative = 1, t._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(e);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = e) : (r = e, n = this);
                    for (var o = 0, s = 0; s < n.length; s++) o = (t = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
                    for (; 0 !== o && s < r.length; s++) o = (t = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
                    if (0 === o && s < r.length && r !== this)
                        for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(e) {
                    return this.clone().isub(e)
                };
                var p = function(e, t, r) {
                    var n, i, o, s = e.words,
                        a = t.words,
                        u = r.words,
                        c = 0,
                        l = 0 | s[0],
                        h = 8191 & l,
                        f = l >>> 13,
                        d = 0 | s[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        g = 0 | s[2],
                        y = 8191 & g,
                        v = g >>> 13,
                        b = 0 | s[3],
                        w = 8191 & b,
                        E = b >>> 13,
                        S = 0 | s[4],
                        k = 8191 & S,
                        _ = S >>> 13,
                        P = 0 | s[5],
                        A = 8191 & P,
                        x = P >>> 13,
                        O = 0 | s[6],
                        R = 8191 & O,
                        C = O >>> 13,
                        N = 0 | s[7],
                        I = 8191 & N,
                        M = N >>> 13,
                        T = 0 | s[8],
                        L = 8191 & T,
                        B = T >>> 13,
                        F = 0 | s[9],
                        U = 8191 & F,
                        D = F >>> 13,
                        j = 0 | a[0],
                        q = 8191 & j,
                        K = j >>> 13,
                        z = 0 | a[1],
                        G = 8191 & z,
                        H = z >>> 13,
                        V = 0 | a[2],
                        $ = 8191 & V,
                        W = V >>> 13,
                        J = 0 | a[3],
                        Q = 8191 & J,
                        Z = J >>> 13,
                        X = 0 | a[4],
                        Y = 8191 & X,
                        ee = X >>> 13,
                        te = 0 | a[5],
                        re = 8191 & te,
                        ne = te >>> 13,
                        ie = 0 | a[6],
                        oe = 8191 & ie,
                        se = ie >>> 13,
                        ae = 0 | a[7],
                        ue = 8191 & ae,
                        ce = ae >>> 13,
                        le = 0 | a[8],
                        he = 8191 & le,
                        fe = le >>> 13,
                        de = 0 | a[9],
                        pe = 8191 & de,
                        me = de >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19;
                    var ge = (c + (n = Math.imul(h, q)) | 0) + ((8191 & (i = (i = Math.imul(h, K)) + Math.imul(f, q) | 0)) << 13) | 0;
                    c = ((o = Math.imul(f, K)) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(p, q), i = (i = Math.imul(p, K)) + Math.imul(m, q) | 0, o = Math.imul(m, K);
                    var ye = (c + (n = n + Math.imul(h, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, H) | 0) + Math.imul(f, G) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, H) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(y, q), i = (i = Math.imul(y, K)) + Math.imul(v, q) | 0, o = Math.imul(v, K), n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, H) | 0;
                    var ve = (c + (n = n + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, W) | 0) + Math.imul(f, $) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, W) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(w, q), i = (i = Math.imul(w, K)) + Math.imul(E, q) | 0, o = Math.imul(E, K), n = n + Math.imul(y, G) | 0, i = (i = i + Math.imul(y, H) | 0) + Math.imul(v, G) | 0, o = o + Math.imul(v, H) | 0, n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, W) | 0;
                    var be = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Z) | 0) + Math.imul(f, Q) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, Z) | 0) + (i >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(k, q), i = (i = Math.imul(k, K)) + Math.imul(_, q) | 0, o = Math.imul(_, K), n = n + Math.imul(w, G) | 0, i = (i = i + Math.imul(w, H) | 0) + Math.imul(E, G) | 0, o = o + Math.imul(E, H) | 0, n = n + Math.imul(y, $) | 0, i = (i = i + Math.imul(y, W) | 0) + Math.imul(v, $) | 0, o = o + Math.imul(v, W) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, Z) | 0;
                    var we = (c + (n = n + Math.imul(h, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(A, q), i = (i = Math.imul(A, K)) + Math.imul(x, q) | 0, o = Math.imul(x, K), n = n + Math.imul(k, G) | 0, i = (i = i + Math.imul(k, H) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, H) | 0, n = n + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, W) | 0) + Math.imul(E, $) | 0, o = o + Math.imul(E, W) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, Z) | 0) + Math.imul(v, Q) | 0, o = o + Math.imul(v, Z) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, ee) | 0;
                    var Ee = (c + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(f, re) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, ne) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(R, q), i = (i = Math.imul(R, K)) + Math.imul(C, q) | 0, o = Math.imul(C, K), n = n + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, H) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, H) | 0, n = n + Math.imul(k, $) | 0, i = (i = i + Math.imul(k, W) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, W) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, Z) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, Z) | 0, n = n + Math.imul(y, Y) | 0, i = (i = i + Math.imul(y, ee) | 0) + Math.imul(v, Y) | 0, o = o + Math.imul(v, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(m, re) | 0, o = o + Math.imul(m, ne) | 0;
                    var Se = (c + (n = n + Math.imul(h, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, se) | 0) + Math.imul(f, oe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, se) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(I, q), i = (i = Math.imul(I, K)) + Math.imul(M, q) | 0, o = Math.imul(M, K), n = n + Math.imul(R, G) | 0, i = (i = i + Math.imul(R, H) | 0) + Math.imul(C, G) | 0, o = o + Math.imul(C, H) | 0, n = n + Math.imul(A, $) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(x, $) | 0, o = o + Math.imul(x, W) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, Z) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, Z) | 0, n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, ee) | 0, n = n + Math.imul(y, re) | 0, i = (i = i + Math.imul(y, ne) | 0) + Math.imul(v, re) | 0, o = o + Math.imul(v, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, se) | 0) + Math.imul(m, oe) | 0, o = o + Math.imul(m, se) | 0;
                    var ke = (c + (n = n + Math.imul(h, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ce) | 0) + Math.imul(f, ue) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, ce) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(L, q), i = (i = Math.imul(L, K)) + Math.imul(B, q) | 0, o = Math.imul(B, K), n = n + Math.imul(I, G) | 0, i = (i = i + Math.imul(I, H) | 0) + Math.imul(M, G) | 0, o = o + Math.imul(M, H) | 0, n = n + Math.imul(R, $) | 0, i = (i = i + Math.imul(R, W) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, W) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, Z) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, Z) | 0, n = n + Math.imul(k, Y) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(E, re) | 0, o = o + Math.imul(E, ne) | 0, n = n + Math.imul(y, oe) | 0, i = (i = i + Math.imul(y, se) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, se) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(m, ue) | 0, o = o + Math.imul(m, ce) | 0;
                    var _e = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, fe) | 0) + Math.imul(f, he) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, fe) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(U, q), i = (i = Math.imul(U, K)) + Math.imul(D, q) | 0, o = Math.imul(D, K), n = n + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, H) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, H) | 0, n = n + Math.imul(I, $) | 0, i = (i = i + Math.imul(I, W) | 0) + Math.imul(M, $) | 0, o = o + Math.imul(M, W) | 0, n = n + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, Z) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, Z) | 0, n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(_, re) | 0, o = o + Math.imul(_, ne) | 0, n = n + Math.imul(w, oe) | 0, i = (i = i + Math.imul(w, se) | 0) + Math.imul(E, oe) | 0, o = o + Math.imul(E, se) | 0, n = n + Math.imul(y, ue) | 0, i = (i = i + Math.imul(y, ce) | 0) + Math.imul(v, ue) | 0, o = o + Math.imul(v, ce) | 0, n = n + Math.imul(p, he) | 0, i = (i = i + Math.imul(p, fe) | 0) + Math.imul(m, he) | 0, o = o + Math.imul(m, fe) | 0;
                    var Pe = (c + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, me) | 0) + Math.imul(f, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, me) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(U, G), i = (i = Math.imul(U, H)) + Math.imul(D, G) | 0, o = Math.imul(D, H), n = n + Math.imul(L, $) | 0, i = (i = i + Math.imul(L, W) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, W) | 0, n = n + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, Z) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, Z) | 0, n = n + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(A, re) | 0, i = (i = i + Math.imul(A, ne) | 0) + Math.imul(x, re) | 0, o = o + Math.imul(x, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, se) | 0) + Math.imul(_, oe) | 0, o = o + Math.imul(_, se) | 0, n = n + Math.imul(w, ue) | 0, i = (i = i + Math.imul(w, ce) | 0) + Math.imul(E, ue) | 0, o = o + Math.imul(E, ce) | 0, n = n + Math.imul(y, he) | 0, i = (i = i + Math.imul(y, fe) | 0) + Math.imul(v, he) | 0, o = o + Math.imul(v, fe) | 0;
                    var Ae = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, me) | 0) + Math.imul(m, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(m, me) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(U, $), i = (i = Math.imul(U, W)) + Math.imul(D, $) | 0, o = Math.imul(D, W), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, Z) | 0) + Math.imul(B, Q) | 0, o = o + Math.imul(B, Z) | 0, n = n + Math.imul(I, Y) | 0, i = (i = i + Math.imul(I, ee) | 0) + Math.imul(M, Y) | 0, o = o + Math.imul(M, ee) | 0, n = n + Math.imul(R, re) | 0, i = (i = i + Math.imul(R, ne) | 0) + Math.imul(C, re) | 0, o = o + Math.imul(C, ne) | 0, n = n + Math.imul(A, oe) | 0, i = (i = i + Math.imul(A, se) | 0) + Math.imul(x, oe) | 0, o = o + Math.imul(x, se) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(_, ue) | 0, o = o + Math.imul(_, ce) | 0, n = n + Math.imul(w, he) | 0, i = (i = i + Math.imul(w, fe) | 0) + Math.imul(E, he) | 0, o = o + Math.imul(E, fe) | 0;
                    var xe = (c + (n = n + Math.imul(y, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, me) | 0) + Math.imul(v, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(v, me) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(U, Q), i = (i = Math.imul(U, Z)) + Math.imul(D, Q) | 0, o = Math.imul(D, Z), n = n + Math.imul(L, Y) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, ee) | 0, n = n + Math.imul(I, re) | 0, i = (i = i + Math.imul(I, ne) | 0) + Math.imul(M, re) | 0, o = o + Math.imul(M, ne) | 0, n = n + Math.imul(R, oe) | 0, i = (i = i + Math.imul(R, se) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, se) | 0, n = n + Math.imul(A, ue) | 0, i = (i = i + Math.imul(A, ce) | 0) + Math.imul(x, ue) | 0, o = o + Math.imul(x, ce) | 0, n = n + Math.imul(k, he) | 0, i = (i = i + Math.imul(k, fe) | 0) + Math.imul(_, he) | 0, o = o + Math.imul(_, fe) | 0;
                    var Oe = (c + (n = n + Math.imul(w, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, me) | 0) + Math.imul(E, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(E, me) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(U, Y), i = (i = Math.imul(U, ee)) + Math.imul(D, Y) | 0, o = Math.imul(D, ee), n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(B, re) | 0, o = o + Math.imul(B, ne) | 0, n = n + Math.imul(I, oe) | 0, i = (i = i + Math.imul(I, se) | 0) + Math.imul(M, oe) | 0, o = o + Math.imul(M, se) | 0, n = n + Math.imul(R, ue) | 0, i = (i = i + Math.imul(R, ce) | 0) + Math.imul(C, ue) | 0, o = o + Math.imul(C, ce) | 0, n = n + Math.imul(A, he) | 0, i = (i = i + Math.imul(A, fe) | 0) + Math.imul(x, he) | 0, o = o + Math.imul(x, fe) | 0;
                    var Re = (c + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, me) | 0) + Math.imul(_, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(_, me) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(U, re), i = (i = Math.imul(U, ne)) + Math.imul(D, re) | 0, o = Math.imul(D, ne), n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, se) | 0) + Math.imul(B, oe) | 0, o = o + Math.imul(B, se) | 0, n = n + Math.imul(I, ue) | 0, i = (i = i + Math.imul(I, ce) | 0) + Math.imul(M, ue) | 0, o = o + Math.imul(M, ce) | 0, n = n + Math.imul(R, he) | 0, i = (i = i + Math.imul(R, fe) | 0) + Math.imul(C, he) | 0, o = o + Math.imul(C, fe) | 0;
                    var Ce = (c + (n = n + Math.imul(A, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, me) | 0) + Math.imul(x, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(x, me) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(U, oe), i = (i = Math.imul(U, se)) + Math.imul(D, oe) | 0, o = Math.imul(D, se), n = n + Math.imul(L, ue) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(B, ue) | 0, o = o + Math.imul(B, ce) | 0, n = n + Math.imul(I, he) | 0, i = (i = i + Math.imul(I, fe) | 0) + Math.imul(M, he) | 0, o = o + Math.imul(M, fe) | 0;
                    var Ne = (c + (n = n + Math.imul(R, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, me) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(C, me) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(U, ue), i = (i = Math.imul(U, ce)) + Math.imul(D, ue) | 0, o = Math.imul(D, ce), n = n + Math.imul(L, he) | 0, i = (i = i + Math.imul(L, fe) | 0) + Math.imul(B, he) | 0, o = o + Math.imul(B, fe) | 0;
                    var Ie = (c + (n = n + Math.imul(I, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, me) | 0) + Math.imul(M, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(M, me) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(U, he), i = (i = Math.imul(U, fe)) + Math.imul(D, he) | 0, o = Math.imul(D, fe);
                    var Me = (c + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, me) | 0) + Math.imul(B, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(B, me) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863;
                    var Te = (c + (n = Math.imul(U, pe)) | 0) + ((8191 & (i = (i = Math.imul(U, me)) + Math.imul(D, pe) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(D, me)) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, u[0] = ge, u[1] = ye, u[2] = ve, u[3] = be, u[4] = we, u[5] = Ee, u[6] = Se, u[7] = ke, u[8] = _e, u[9] = Pe, u[10] = Ae, u[11] = xe, u[12] = Oe, u[13] = Re, u[14] = Ce, u[15] = Ne, u[16] = Ie, u[17] = Me, u[18] = Te, 0 !== c && (u[19] = c, r.length++), r
                };

                function m(e, t, r) {
                    return (new g).mulp(e, t, r)
                }

                function g(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (p = d), o.prototype.mulTo = function(e, t) {
                    var r, n = this.length + e.length;
                    return r = 10 === this.length && 10 === e.length ? p(this, e, t) : n < 63 ? d(this, e, t) : n < 1024 ? function(e, t, r) {
                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, u = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= u; c++) {
                                var l = o - c,
                                    h = (0 | e.words[l]) * (0 | t.words[c]),
                                    f = 67108863 & h;
                                a = 67108863 & (f = f + a | 0), i += (s = (s = s + (h / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            r.words[o] = a, n = s, s = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, e, t) : m(this, e, t), r
                }, g.prototype.makeRBT = function(e) {
                    for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                    return t
                }, g.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                    return n
                }, g.prototype.permute = function(e, t, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = t[e[s]], i[s] = r[e[s]]
                }, g.prototype.transform = function(e, t, r, n, i, o) {
                    this.permute(o, e, t, r, n, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var a = s << 1, u = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a)
                            for (var h = u, f = c, d = 0; d < s; d++) {
                                var p = r[l + d],
                                    m = n[l + d],
                                    g = r[l + d + s],
                                    y = n[l + d + s],
                                    v = h * g - f * y;
                                y = h * y + f * g, g = v, r[l + d] = p + g, n[l + d] = m + y, r[l + d + s] = p - g, n[l + d + s] = m - y, d !== a && (v = u * h - c * f, f = u * f + c * h, h = v)
                            }
                }, g.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, g.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                        }
                }, g.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }, g.prototype.convert13b = function(e, t, r, i) {
                    for (var o = 0, s = 0; s < t; s++) o += 0 | e[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * t; s < i; ++s) r[s] = 0;
                    n(0 === o), n(0 === (-8192 & o))
                }, g.prototype.stub = function(e) {
                    for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, g.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        s = new Array(n),
                        a = new Array(n),
                        u = new Array(n),
                        c = new Array(n),
                        l = new Array(n),
                        h = new Array(n),
                        f = r.words;
                    f.length = n, this.convert13b(e.words, e.length, s, n), this.convert13b(t.words, t.length, c, n), this.transform(s, o, a, u, n, i), this.transform(c, o, l, h, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = a[d] * l[d] - u[d] * h[d];
                        u[d] = a[d] * h[d] + u[d] * l[d], a[d] = p
                    }
                    return this.conjugate(a, u, n), this.transform(a, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                }, o.prototype.mul = function(e) {
                    var t = new o(null);
                    return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                }, o.prototype.mulf = function(e) {
                    var t = new o(null);
                    return t.words = new Array(this.length + e.length), m(this, e, t)
                }, o.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }, o.prototype.imuln = function(e) {
                    n("number" === typeof e), n(e < 67108864);
                    for (var t = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * e,
                            o = (67108863 & i) + (67108863 & t);
                        t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== t && (this.words[r] = t, this.length++), this
                }, o.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(e) {
                    var t = function(e) {
                        for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new o(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t, r = e % 26,
                        i = (e - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (t = 0; t < this.length; t++) {
                            var a = this.words[t] & o,
                                u = (0 | this.words[t]) - a << r;
                            this.words[t] = u | s, s = a >>> 26 - r
                        }
                        s && (this.words[t] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(e) {
                    return n(0 === this.negative), this.iushln(e)
                }, o.prototype.iushrn = function(e, t, r) {
                    var i;
                    n("number" === typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                    var o = e % 26,
                        s = Math.min((e - o) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> o << o,
                        u = r;
                    if (i -= s, i = Math.max(0, i), u) {
                        for (var c = 0; c < s; c++) u.words[c] = this.words[c];
                        u.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s];
                    else this.words[0] = 0, this.length = 1;
                    var l = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = l << 26 - o | h >>> o, l = h & a
                    }
                    return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(e, t, r) {
                    return n(0 === this.negative), this.iushrn(e, t, r)
                }, o.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }, o.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }, o.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }, o.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }, o.prototype.testn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }, o.prototype.iaddn = function(e) {
                    return n("number" === typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                }, o.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, o.prototype.isubn = function(e) {
                    if (n("number" === typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }, o.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(e, t, r) {
                    var i, o, s = e.length + r;
                    this._expand(s);
                    var a = 0;
                    for (i = 0; i < e.length; i++) {
                        o = (0 | this.words[i + r]) + a;
                        var u = (0 | e.words[i]) * t;
                        a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === a) return this.strip();
                    for (n(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(e, t) {
                    var r = (this.length, e.length),
                        n = this.clone(),
                        i = e,
                        s = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                    var a, u = n.length - i.length;
                    if ("mod" !== t) {
                        (a = new o(null)).length = u + 1, a.words = new Array(a.length);
                        for (var c = 0; c < a.length; c++) a.words[c] = 0
                    }
                    var l = n.clone()._ishlnsubmul(i, 1, u);
                    0 === l.negative && (n = l, a && (a.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var f = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                        for (f = Math.min(f / s | 0, 67108863), n._ishlnsubmul(i, f, h); 0 !== n.negative;) f--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                        a && (a.words[h] = f)
                    }
                    return a && a.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
                        div: a || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(e, t, r) {
                    return n(!e.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === e.negative ? (a = this.neg().divmod(e, t), "mod" !== t && (i = a.div.neg()), "div" !== t && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(e)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== e.negative ? (a = this.divmod(e.neg(), t), "mod" !== t && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : 0 !== (this.negative & e.negative) ? (a = this.neg().divmod(e.neg(), t), "div" !== t && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(e)), {
                        div: a.div,
                        mod: s
                    }) : e.length > this.length || this.cmp(e) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new o(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modn(e.words[0]))
                    } : this._wordDiv(e, t);
                    var i, s, a
                }, o.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }, o.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }, o.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }, o.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, o.prototype.modn = function(e) {
                    n(e <= 67108863);
                    for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
                    return r
                }, o.prototype.idivn = function(e) {
                    n(e <= 67108863);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * t;
                        this.words[r] = i / e | 0, t = i % e
                    }
                    return this.strip()
                }, o.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }, o.prototype.egcd = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
                    for (var l = r.clone(), h = t.clone(); !t.isZero();) {
                        for (var f = 0, d = 1; 0 === (t.words[0] & d) && f < 26; ++f, d <<= 1);
                        if (f > 0)
                            for (t.iushrn(f); f-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)), a.iushrn(1), u.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(a), s.isub(u)) : (r.isub(t), a.isub(i), u.isub(s))
                    }
                    return {
                        a: a,
                        b: u,
                        gcd: r.iushln(c)
                    }
                }, o.prototype._invmp = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i, s = new o(1), a = new o(0), u = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var c = 0, l = 1; 0 === (t.words[0] & l) && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (t.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        for (var h = 0, f = 1; 0 === (r.words[0] & f) && h < 26; ++h, f <<= 1);
                        if (h > 0)
                            for (r.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), s.isub(a)) : (r.isub(t), a.isub(s))
                    }
                    return (i = 0 === t.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(e), i
                }, o.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var o = t;
                            t = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(e) {
                    return this.words[0] & e
                }, o.prototype.bincn = function(e) {
                    n("number" === typeof e);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) t = 1;
                    else {
                        r && (e = -e), n(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }, o.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }, o.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }, o.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }, o.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }, o.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }, o.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }, o.prototype.lten = function(e) {
                    return this.cmpn(e) <= 0
                }, o.prototype.lte = function(e) {
                    return this.cmp(e) <= 0
                }, o.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }, o.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }, o.red = function(e) {
                    return new k(e)
                }, o.prototype.toRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(e) {
                    return this.red = e, this
                }, o.prototype.forceRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, o.prototype.redAdd = function(e) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, o.prototype.redIAdd = function(e) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, o.prototype.redSub = function(e) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, o.prototype.redISub = function(e) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, o.prototype.redShl = function(e) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, o.prototype.redMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, o.prototype.redIMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(e) {
                    return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var y = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function v(e, t) {
                    this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function b() {
                    v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function E() {
                    v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function S() {
                    v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function k(e) {
                    if ("string" === typeof e) {
                        var t = o._prime(e);
                        this.m = t.p, this.prime = t
                    } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function _(e) {
                    k.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                v.prototype._tmp = function() {
                    var e = new o(null);
                    return e.words = new Array(Math.ceil(this.n / 13)), e
                }, v.prototype.ireduce = function(e) {
                    var t, r = e;
                    do {
                        this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, v.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }, v.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }, i(b, v), b.prototype.split = function(e, t) {
                    for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++) t.words[i] = e.words[i];
                    if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                    var o = e.words[9];
                    for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
                        var s = 0 | e.words[i];
                        e.words[i - 10] = (s & r) << 4 | o >>> 22, o = s
                    }
                    o >>>= 22, e.words[i - 10] = o, 0 === o && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, b.prototype.imulK = function(e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, i(w, v), i(E, v), i(S, v), S.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 19 * (0 | e.words[r]) + t,
                            i = 67108863 & n;
                        n >>>= 26, e.words[r] = i, t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, o._prime = function(e) {
                    if (y[e]) return y[e];
                    var t;
                    if ("k256" === e) t = new b;
                    else if ("p224" === e) t = new w;
                    else if ("p192" === e) t = new E;
                    else {
                        if ("p25519" !== e) throw new Error("Unknown prime " + e);
                        t = new S
                    }
                    return y[e] = t, t
                }, k.prototype._verify1 = function(e) {
                    n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                }, k.prototype._verify2 = function(e, t) {
                    n(0 === (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                }, k.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }, k.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, k.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, k.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, k.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, k.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, k.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, k.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, k.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, k.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }, k.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }, k.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 === 1), 3 === t) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    n(!i.isZero());
                    var a = new o(1).toRed(this),
                        u = a.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        l = this.m.bitLength();
                    for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(u);) l.redIAdd(u);
                    for (var h = this.pow(l, i), f = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = s; 0 !== d.cmp(a);) {
                        for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                        n(g < p);
                        var y = this.pow(h, new o(1).iushln(p - g - 1));
                        f = f.redMul(y), h = y.redSqr(), d = d.redMul(h), p = g
                    }
                    return f
                }, k.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, k.prototype.pow = function(e, t) {
                    if (t.isZero()) return new o(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = e;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                    var i = r[0],
                        s = 0,
                        a = 0,
                        u = t.bitLength() % 26;
                    for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
                        for (var c = t.words[n], l = u - 1; l >= 0; l--) {
                            var h = c >> l & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? (s <<= 1, s |= h, (4 === ++a || 0 === n && 0 === l) && (i = this.mul(i, r[s]), a = 0, s = 0)) : a = 0
                        }
                        u = 26
                    }
                    return i
                }, k.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, k.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null, t
                }, o.mont = function(e) {
                    return new _(e)
                }, i(_, k), _.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }, _.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, _.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, _.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                    var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                }, _.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e = r.nmd(e), this)
        },
        85742: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.version = void 0, t.version = "ethers/5.6.2"
        },
        83055: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Wordlist = t.version = t.wordlists = t.utils = t.logger = t.errors = t.constants = t.FixedNumber = t.BigNumber = t.ContractFactory = t.Contract = t.BaseContract = t.providers = t.getDefaultProvider = t.VoidSigner = t.Wallet = t.Signer = void 0;
            var s = r(30171);
            Object.defineProperty(t, "BaseContract", {
                enumerable: !0,
                get: function() {
                    return s.BaseContract
                }
            }), Object.defineProperty(t, "Contract", {
                enumerable: !0,
                get: function() {
                    return s.Contract
                }
            }), Object.defineProperty(t, "ContractFactory", {
                enumerable: !0,
                get: function() {
                    return s.ContractFactory
                }
            });
            var a = r(82530);
            Object.defineProperty(t, "BigNumber", {
                enumerable: !0,
                get: function() {
                    return a.BigNumber
                }
            }), Object.defineProperty(t, "FixedNumber", {
                enumerable: !0,
                get: function() {
                    return a.FixedNumber
                }
            });
            var u = r(28612);
            Object.defineProperty(t, "Signer", {
                enumerable: !0,
                get: function() {
                    return u.Signer
                }
            }), Object.defineProperty(t, "VoidSigner", {
                enumerable: !0,
                get: function() {
                    return u.VoidSigner
                }
            });
            var c = r(61);
            Object.defineProperty(t, "Wallet", {
                enumerable: !0,
                get: function() {
                    return c.Wallet
                }
            });
            var l = o(r(41175));
            t.constants = l;
            var h = o(r(40919));
            t.providers = h;
            var f = r(40919);
            Object.defineProperty(t, "getDefaultProvider", {
                enumerable: !0,
                get: function() {
                    return f.getDefaultProvider
                }
            });
            var d = r(18449);
            Object.defineProperty(t, "Wordlist", {
                enumerable: !0,
                get: function() {
                    return d.Wordlist
                }
            }), Object.defineProperty(t, "wordlists", {
                enumerable: !0,
                get: function() {
                    return d.wordlists
                }
            });
            var p = o(r(58105));
            t.utils = p;
            var m = r(57036);
            Object.defineProperty(t, "errors", {
                enumerable: !0,
                get: function() {
                    return m.ErrorCode
                }
            });
            var g = r(85742);
            Object.defineProperty(t, "version", {
                enumerable: !0,
                get: function() {
                    return g.version
                }
            });
            var y = new m.Logger(g.version);
            t.logger = y
        },
        58105: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatBytes32String = t.Utf8ErrorFuncs = t.toUtf8String = t.toUtf8CodePoints = t.toUtf8Bytes = t._toEscapedUtf8String = t.nameprep = t.hexDataSlice = t.hexDataLength = t.hexZeroPad = t.hexValue = t.hexStripZeros = t.hexConcat = t.isHexString = t.hexlify = t.base64 = t.base58 = t.TransactionDescription = t.LogDescription = t.Interface = t.SigningKey = t.HDNode = t.defaultPath = t.isBytesLike = t.isBytes = t.zeroPad = t.stripZeros = t.concat = t.arrayify = t.shallowCopy = t.resolveProperties = t.getStatic = t.defineReadOnly = t.deepCopy = t.checkProperties = t.poll = t.fetchJson = t._fetchData = t.RLP = t.Logger = t.checkResultErrors = t.FormatTypes = t.ParamType = t.FunctionFragment = t.EventFragment = t.ErrorFragment = t.ConstructorFragment = t.Fragment = t.defaultAbiCoder = t.AbiCoder = void 0, t.Indexed = t.Utf8ErrorReason = t.UnicodeNormalizationForm = t.SupportedAlgorithm = t.mnemonicToSeed = t.isValidMnemonic = t.entropyToMnemonic = t.mnemonicToEntropy = t.getAccountPath = t.verifyTypedData = t.verifyMessage = t.recoverPublicKey = t.computePublicKey = t.recoverAddress = t.computeAddress = t.getJsonWalletAddress = t.TransactionTypes = t.serializeTransaction = t.parseTransaction = t.accessListify = t.joinSignature = t.splitSignature = t.soliditySha256 = t.solidityKeccak256 = t.solidityPack = t.shuffled = t.randomBytes = t.sha512 = t.sha256 = t.ripemd160 = t.keccak256 = t.computeHmac = t.commify = t.parseUnits = t.formatUnits = t.parseEther = t.formatEther = t.isAddress = t.getCreate2Address = t.getContractAddress = t.getIcapAddress = t.getAddress = t._TypedDataEncoder = t.id = t.isValidName = t.namehash = t.hashMessage = t.dnsEncode = t.parseBytes32String = void 0;
            var s = r(65575);
            Object.defineProperty(t, "AbiCoder", {
                enumerable: !0,
                get: function() {
                    return s.AbiCoder
                }
            }), Object.defineProperty(t, "checkResultErrors", {
                enumerable: !0,
                get: function() {
                    return s.checkResultErrors
                }
            }), Object.defineProperty(t, "ConstructorFragment", {
                enumerable: !0,
                get: function() {
                    return s.ConstructorFragment
                }
            }), Object.defineProperty(t, "defaultAbiCoder", {
                enumerable: !0,
                get: function() {
                    return s.defaultAbiCoder
                }
            }), Object.defineProperty(t, "ErrorFragment", {
                enumerable: !0,
                get: function() {
                    return s.ErrorFragment
                }
            }), Object.defineProperty(t, "EventFragment", {
                enumerable: !0,
                get: function() {
                    return s.EventFragment
                }
            }), Object.defineProperty(t, "FormatTypes", {
                enumerable: !0,
                get: function() {
                    return s.FormatTypes
                }
            }), Object.defineProperty(t, "Fragment", {
                enumerable: !0,
                get: function() {
                    return s.Fragment
                }
            }), Object.defineProperty(t, "FunctionFragment", {
                enumerable: !0,
                get: function() {
                    return s.FunctionFragment
                }
            }), Object.defineProperty(t, "Indexed", {
                enumerable: !0,
                get: function() {
                    return s.Indexed
                }
            }), Object.defineProperty(t, "Interface", {
                enumerable: !0,
                get: function() {
                    return s.Interface
                }
            }), Object.defineProperty(t, "LogDescription", {
                enumerable: !0,
                get: function() {
                    return s.LogDescription
                }
            }), Object.defineProperty(t, "ParamType", {
                enumerable: !0,
                get: function() {
                    return s.ParamType
                }
            }), Object.defineProperty(t, "TransactionDescription", {
                enumerable: !0,
                get: function() {
                    return s.TransactionDescription
                }
            });
            var a = r(58194);
            Object.defineProperty(t, "getAddress", {
                enumerable: !0,
                get: function() {
                    return a.getAddress
                }
            }), Object.defineProperty(t, "getCreate2Address", {
                enumerable: !0,
                get: function() {
                    return a.getCreate2Address
                }
            }), Object.defineProperty(t, "getContractAddress", {
                enumerable: !0,
                get: function() {
                    return a.getContractAddress
                }
            }), Object.defineProperty(t, "getIcapAddress", {
                enumerable: !0,
                get: function() {
                    return a.getIcapAddress
                }
            }), Object.defineProperty(t, "isAddress", {
                enumerable: !0,
                get: function() {
                    return a.isAddress
                }
            });
            var u = o(r(70462));
            t.base64 = u;
            var c = r(50511);
            Object.defineProperty(t, "base58", {
                enumerable: !0,
                get: function() {
                    return c.Base58
                }
            });
            var l = r(75398);
            Object.defineProperty(t, "arrayify", {
                enumerable: !0,
                get: function() {
                    return l.arrayify
                }
            }), Object.defineProperty(t, "concat", {
                enumerable: !0,
                get: function() {
                    return l.concat
                }
            }), Object.defineProperty(t, "hexConcat", {
                enumerable: !0,
                get: function() {
                    return l.hexConcat
                }
            }), Object.defineProperty(t, "hexDataSlice", {
                enumerable: !0,
                get: function() {
                    return l.hexDataSlice
                }
            }), Object.defineProperty(t, "hexDataLength", {
                enumerable: !0,
                get: function() {
                    return l.hexDataLength
                }
            }), Object.defineProperty(t, "hexlify", {
                enumerable: !0,
                get: function() {
                    return l.hexlify
                }
            }), Object.defineProperty(t, "hexStripZeros", {
                enumerable: !0,
                get: function() {
                    return l.hexStripZeros
                }
            }), Object.defineProperty(t, "hexValue", {
                enumerable: !0,
                get: function() {
                    return l.hexValue
                }
            }), Object.defineProperty(t, "hexZeroPad", {
                enumerable: !0,
                get: function() {
                    return l.hexZeroPad
                }
            }), Object.defineProperty(t, "isBytes", {
                enumerable: !0,
                get: function() {
                    return l.isBytes
                }
            }), Object.defineProperty(t, "isBytesLike", {
                enumerable: !0,
                get: function() {
                    return l.isBytesLike
                }
            }), Object.defineProperty(t, "isHexString", {
                enumerable: !0,
                get: function() {
                    return l.isHexString
                }
            }), Object.defineProperty(t, "joinSignature", {
                enumerable: !0,
                get: function() {
                    return l.joinSignature
                }
            }), Object.defineProperty(t, "zeroPad", {
                enumerable: !0,
                get: function() {
                    return l.zeroPad
                }
            }), Object.defineProperty(t, "splitSignature", {
                enumerable: !0,
                get: function() {
                    return l.splitSignature
                }
            }), Object.defineProperty(t, "stripZeros", {
                enumerable: !0,
                get: function() {
                    return l.stripZeros
                }
            });
            var h = r(71414);
            Object.defineProperty(t, "_TypedDataEncoder", {
                enumerable: !0,
                get: function() {
                    return h._TypedDataEncoder
                }
            }), Object.defineProperty(t, "dnsEncode", {
                enumerable: !0,
                get: function() {
                    return h.dnsEncode
                }
            }), Object.defineProperty(t, "hashMessage", {
                enumerable: !0,
                get: function() {
                    return h.hashMessage
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return h.id
                }
            }), Object.defineProperty(t, "isValidName", {
                enumerable: !0,
                get: function() {
                    return h.isValidName
                }
            }), Object.defineProperty(t, "namehash", {
                enumerable: !0,
                get: function() {
                    return h.namehash
                }
            });
            var f = r(56364);
            Object.defineProperty(t, "defaultPath", {
                enumerable: !0,
                get: function() {
                    return f.defaultPath
                }
            }), Object.defineProperty(t, "entropyToMnemonic", {
                enumerable: !0,
                get: function() {
                    return f.entropyToMnemonic
                }
            }), Object.defineProperty(t, "getAccountPath", {
                enumerable: !0,
                get: function() {
                    return f.getAccountPath
                }
            }), Object.defineProperty(t, "HDNode", {
                enumerable: !0,
                get: function() {
                    return f.HDNode
                }
            }), Object.defineProperty(t, "isValidMnemonic", {
                enumerable: !0,
                get: function() {
                    return f.isValidMnemonic
                }
            }), Object.defineProperty(t, "mnemonicToEntropy", {
                enumerable: !0,
                get: function() {
                    return f.mnemonicToEntropy
                }
            }), Object.defineProperty(t, "mnemonicToSeed", {
                enumerable: !0,
                get: function() {
                    return f.mnemonicToSeed
                }
            });
            var d = r(37261);
            Object.defineProperty(t, "getJsonWalletAddress", {
                enumerable: !0,
                get: function() {
                    return d.getJsonWalletAddress
                }
            });
            var p = r(59256);
            Object.defineProperty(t, "keccak256", {
                enumerable: !0,
                get: function() {
                    return p.keccak256
                }
            });
            var m = r(57036);
            Object.defineProperty(t, "Logger", {
                enumerable: !0,
                get: function() {
                    return m.Logger
                }
            });
            var g = r(48343);
            Object.defineProperty(t, "computeHmac", {
                enumerable: !0,
                get: function() {
                    return g.computeHmac
                }
            }), Object.defineProperty(t, "ripemd160", {
                enumerable: !0,
                get: function() {
                    return g.ripemd160
                }
            }), Object.defineProperty(t, "sha256", {
                enumerable: !0,
                get: function() {
                    return g.sha256
                }
            }), Object.defineProperty(t, "sha512", {
                enumerable: !0,
                get: function() {
                    return g.sha512
                }
            });
            var y = r(45894);
            Object.defineProperty(t, "solidityKeccak256", {
                enumerable: !0,
                get: function() {
                    return y.keccak256
                }
            }), Object.defineProperty(t, "solidityPack", {
                enumerable: !0,
                get: function() {
                    return y.pack
                }
            }), Object.defineProperty(t, "soliditySha256", {
                enumerable: !0,
                get: function() {
                    return y.sha256
                }
            });
            var v = r(91178);
            Object.defineProperty(t, "randomBytes", {
                enumerable: !0,
                get: function() {
                    return v.randomBytes
                }
            }), Object.defineProperty(t, "shuffled", {
                enumerable: !0,
                get: function() {
                    return v.shuffled
                }
            });
            var b = r(84427);
            Object.defineProperty(t, "checkProperties", {
                enumerable: !0,
                get: function() {
                    return b.checkProperties
                }
            }), Object.defineProperty(t, "deepCopy", {
                enumerable: !0,
                get: function() {
                    return b.deepCopy
                }
            }), Object.defineProperty(t, "defineReadOnly", {
                enumerable: !0,
                get: function() {
                    return b.defineReadOnly
                }
            }), Object.defineProperty(t, "getStatic", {
                enumerable: !0,
                get: function() {
                    return b.getStatic
                }
            }), Object.defineProperty(t, "resolveProperties", {
                enumerable: !0,
                get: function() {
                    return b.resolveProperties
                }
            }), Object.defineProperty(t, "shallowCopy", {
                enumerable: !0,
                get: function() {
                    return b.shallowCopy
                }
            });
            var w = o(r(74866));
            t.RLP = w;
            var E = r(3378);
            Object.defineProperty(t, "computePublicKey", {
                enumerable: !0,
                get: function() {
                    return E.computePublicKey
                }
            }), Object.defineProperty(t, "recoverPublicKey", {
                enumerable: !0,
                get: function() {
                    return E.recoverPublicKey
                }
            }), Object.defineProperty(t, "SigningKey", {
                enumerable: !0,
                get: function() {
                    return E.SigningKey
                }
            });
            var S = r(84518);
            Object.defineProperty(t, "formatBytes32String", {
                enumerable: !0,
                get: function() {
                    return S.formatBytes32String
                }
            }), Object.defineProperty(t, "nameprep", {
                enumerable: !0,
                get: function() {
                    return S.nameprep
                }
            }), Object.defineProperty(t, "parseBytes32String", {
                enumerable: !0,
                get: function() {
                    return S.parseBytes32String
                }
            }), Object.defineProperty(t, "_toEscapedUtf8String", {
                enumerable: !0,
                get: function() {
                    return S._toEscapedUtf8String
                }
            }), Object.defineProperty(t, "toUtf8Bytes", {
                enumerable: !0,
                get: function() {
                    return S.toUtf8Bytes
                }
            }), Object.defineProperty(t, "toUtf8CodePoints", {
                enumerable: !0,
                get: function() {
                    return S.toUtf8CodePoints
                }
            }), Object.defineProperty(t, "toUtf8String", {
                enumerable: !0,
                get: function() {
                    return S.toUtf8String
                }
            }), Object.defineProperty(t, "Utf8ErrorFuncs", {
                enumerable: !0,
                get: function() {
                    return S.Utf8ErrorFuncs
                }
            });
            var k = r(13353);
            Object.defineProperty(t, "accessListify", {
                enumerable: !0,
                get: function() {
                    return k.accessListify
                }
            }), Object.defineProperty(t, "computeAddress", {
                enumerable: !0,
                get: function() {
                    return k.computeAddress
                }
            }), Object.defineProperty(t, "parseTransaction", {
                enumerable: !0,
                get: function() {
                    return k.parse
                }
            }), Object.defineProperty(t, "recoverAddress", {
                enumerable: !0,
                get: function() {
                    return k.recoverAddress
                }
            }), Object.defineProperty(t, "serializeTransaction", {
                enumerable: !0,
                get: function() {
                    return k.serialize
                }
            }), Object.defineProperty(t, "TransactionTypes", {
                enumerable: !0,
                get: function() {
                    return k.TransactionTypes
                }
            });
            var _ = r(59656);
            Object.defineProperty(t, "commify", {
                enumerable: !0,
                get: function() {
                    return _.commify
                }
            }), Object.defineProperty(t, "formatEther", {
                enumerable: !0,
                get: function() {
                    return _.formatEther
                }
            }), Object.defineProperty(t, "parseEther", {
                enumerable: !0,
                get: function() {
                    return _.parseEther
                }
            }), Object.defineProperty(t, "formatUnits", {
                enumerable: !0,
                get: function() {
                    return _.formatUnits
                }
            }), Object.defineProperty(t, "parseUnits", {
                enumerable: !0,
                get: function() {
                    return _.parseUnits
                }
            });
            var P = r(61);
            Object.defineProperty(t, "verifyMessage", {
                enumerable: !0,
                get: function() {
                    return P.verifyMessage
                }
            }), Object.defineProperty(t, "verifyTypedData", {
                enumerable: !0,
                get: function() {
                    return P.verifyTypedData
                }
            });
            var A = r(38637);
            Object.defineProperty(t, "_fetchData", {
                enumerable: !0,
                get: function() {
                    return A._fetchData
                }
            }), Object.defineProperty(t, "fetchJson", {
                enumerable: !0,
                get: function() {
                    return A.fetchJson
                }
            }), Object.defineProperty(t, "poll", {
                enumerable: !0,
                get: function() {
                    return A.poll
                }
            });
            var x = r(48343);
            Object.defineProperty(t, "SupportedAlgorithm", {
                enumerable: !0,
                get: function() {
                    return x.SupportedAlgorithm
                }
            });
            var O = r(84518);
            Object.defineProperty(t, "UnicodeNormalizationForm", {
                enumerable: !0,
                get: function() {
                    return O.UnicodeNormalizationForm
                }
            }), Object.defineProperty(t, "Utf8ErrorReason", {
                enumerable: !0,
                get: function() {
                    return O.Utf8ErrorReason
                }
            })
        },
        10161: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                r = "~";

            function n() {}

            function i(e, t, r) {
                this.fn = e, this.context = t, this.once = r || !1
            }

            function o(e, t, n, o, s) {
                if ("function" !== typeof n) throw new TypeError("The listener must be a function");
                var a = new i(n, o || e, s),
                    u = r ? r + t : t;
                return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e
            }

            function s(e, t) {
                0 === --e._eventsCount ? e._events = new n : delete e._events[t]
            }

            function a() {
                this._events = new n, this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), a.prototype.eventNames = function() {
                var e, n, i = [];
                if (0 === this._eventsCount) return i;
                for (n in e = this._events) t.call(e, n) && i.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }, a.prototype.listeners = function(e) {
                var t = r ? r + e : e,
                    n = this._events[t];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
                return s
            }, a.prototype.listenerCount = function(e) {
                var t = r ? r + e : e,
                    n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }, a.prototype.emit = function(e, t, n, i, o, s) {
                var a = r ? r + e : e;
                if (!this._events[a]) return !1;
                var u, c, l = this._events[a],
                    h = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), h) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, n), !0;
                        case 4:
                            return l.fn.call(l.context, t, n, i), !0;
                        case 5:
                            return l.fn.call(l.context, t, n, i, o), !0;
                        case 6:
                            return l.fn.call(l.context, t, n, i, o, s), !0
                    }
                    for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u)
                } else {
                    var f, d = l.length;
                    for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), h) {
                        case 1:
                            l[c].fn.call(l[c].context);
                            break;
                        case 2:
                            l[c].fn.call(l[c].context, t);
                            break;
                        case 3:
                            l[c].fn.call(l[c].context, t, n);
                            break;
                        case 4:
                            l[c].fn.call(l[c].context, t, n, i);
                            break;
                        default:
                            if (!u)
                                for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
                            l[c].fn.apply(l[c].context, u)
                    }
                }
                return !0
            }, a.prototype.on = function(e, t, r) {
                return o(this, e, t, r, !1)
            }, a.prototype.once = function(e, t, r) {
                return o(this, e, t, r, !0)
            }, a.prototype.removeListener = function(e, t, n, i) {
                var o = r ? r + e : e;
                if (!this._events[o]) return this;
                if (!t) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== t || i && !a.once || n && a.context !== n || s(this, o);
                else {
                    for (var u = 0, c = [], l = a.length; u < l; u++)(a[u].fn !== t || i && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
                    c.length ? this._events[o] = 1 === c.length ? c[0] : c : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new n, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, e.exports = a
        },
        34485: function(e, t, r) {
            var n = t;
            n.utils = r(50212), n.common = r(74495), n.sha = r(45530), n.ripemd = r(91396), n.hmac = r(15047), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
        },
        74495: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(79561);

            function o() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            t.BlockHash = o, o.prototype.update = function(e, t) {
                if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                    var r = (e = this.pending).length % this._delta8;
                    this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
                    for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
                }
                return this
            }, o.prototype.digest = function(e) {
                return this.update(this._pad()), i(null === this.pending), this._digest(e)
            }, o.prototype._pad = function() {
                var e = this.pendingTotal,
                    t = this._delta8,
                    r = t - (e + this.padLength) % t,
                    n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (e <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
                } else
                    for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
                return n
            }
        },
        15047: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(79561);

            function o(e, t, r) {
                if (!(this instanceof o)) return new o(e, t, r);
                this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
            }
            e.exports = o, o.prototype._init = function(e) {
                e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize);
                for (var t = e.length; t < this.blockSize; t++) e.push(0);
                for (t = 0; t < e.length; t++) e[t] ^= 54;
                for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
                this.outer = (new this.Hash).update(e)
            }, o.prototype.update = function(e, t) {
                return this.inner.update(e, t), this
            }, o.prototype.digest = function(e) {
                return this.outer.update(this.inner.digest()), this.outer.digest(e)
            }
        },
        91396: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(74495),
                o = n.rotl32,
                s = n.sum32,
                a = n.sum32_3,
                u = n.sum32_4,
                c = i.BlockHash;

            function l() {
                if (!(this instanceof l)) return new l;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function h(e, t, r, n) {
                return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
            }

            function f(e) {
                return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
            }

            function d(e) {
                return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
            }
            n.inherits(l, c), t.ripemd160 = l, l.blockSize = 512, l.outSize = 160, l.hmacStrength = 192, l.padLength = 64, l.prototype._update = function(e, t) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], c = this.h[3], l = this.h[4], v = r, b = n, w = i, E = c, S = l, k = 0; k < 80; k++) {
                    var _ = s(o(u(r, h(k, n, i, c), e[p[k] + t], f(k)), g[k]), l);
                    r = l, l = c, c = o(i, 10), i = n, n = _, _ = s(o(u(v, h(79 - k, b, w, E), e[m[k] + t], d(k)), y[k]), S), v = S, S = E, E = o(w, 10), w = b, b = _
                }
                _ = a(this.h[1], i, E), this.h[1] = a(this.h[2], c, S), this.h[2] = a(this.h[3], l, v), this.h[3] = a(this.h[4], r, b), this.h[4] = a(this.h[0], n, w), this.h[0] = _
            }, l.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                m = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        45530: function(e, t, r) {
            "use strict";
            t.sha1 = r(35079), t.sha224 = r(63823), t.sha256 = r(68032), t.sha384 = r(25328), t.sha512 = r(20168)
        },
        35079: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(74495),
                o = r(40713),
                s = n.rotl32,
                a = n.sum32,
                u = n.sum32_5,
                c = o.ft_1,
                l = i.BlockHash,
                h = [1518500249, 1859775393, 2400959708, 3395469782];

            function f() {
                if (!(this instanceof f)) return new f;
                l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
            }
            n.inherits(f, l), e.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                    o = this.h[1],
                    l = this.h[2],
                    f = this.h[3],
                    d = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var p = ~~(n / 20),
                        m = u(s(i, 5), c(p, o, l, f), d, r[n], h[p]);
                    d = f, f = l, l = s(o, 30), o = i, i = m
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], l), this.h[3] = a(this.h[3], f), this.h[4] = a(this.h[4], d)
            }, f.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        63823: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(68032);

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        },
        68032: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(74495),
                o = r(40713),
                s = r(79561),
                a = n.sum32,
                u = n.sum32_4,
                c = n.sum32_5,
                l = o.ch32,
                h = o.maj32,
                f = o.s0_256,
                d = o.s1_256,
                p = o.g0_256,
                m = o.g1_256,
                g = i.BlockHash,
                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function v() {
                if (!(this instanceof v)) return new v;
                g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = new Array(64)
            }
            n.inherits(v, g), e.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++) r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                    o = this.h[1],
                    g = this.h[2],
                    y = this.h[3],
                    v = this.h[4],
                    b = this.h[5],
                    w = this.h[6],
                    E = this.h[7];
                for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var S = c(E, d(v), l(v, b, w), this.k[n], r[n]),
                        k = a(f(i), h(i, o, g));
                    E = w, w = b, b = v, v = a(y, S), y = g, g = o, o = i, i = a(S, k)
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], g), this.h[3] = a(this.h[3], y), this.h[4] = a(this.h[4], v), this.h[5] = a(this.h[5], b), this.h[6] = a(this.h[6], w), this.h[7] = a(this.h[7], E)
            }, v.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        25328: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(20168);

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        },
        20168: function(e, t, r) {
            "use strict";
            var n = r(50212),
                i = r(74495),
                o = r(79561),
                s = n.rotr64_hi,
                a = n.rotr64_lo,
                u = n.shr64_hi,
                c = n.shr64_lo,
                l = n.sum64,
                h = n.sum64_hi,
                f = n.sum64_lo,
                d = n.sum64_4_hi,
                p = n.sum64_4_lo,
                m = n.sum64_5_hi,
                g = n.sum64_5_lo,
                y = i.BlockHash,
                v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function b() {
                if (!(this instanceof b)) return new b;
                y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = v, this.W = new Array(160)
            }

            function w(e, t, r, n, i) {
                var o = e & r ^ ~e & i;
                return o < 0 && (o += 4294967296), o
            }

            function E(e, t, r, n, i, o) {
                var s = t & n ^ ~t & o;
                return s < 0 && (s += 4294967296), s
            }

            function S(e, t, r, n, i) {
                var o = e & r ^ e & i ^ r & i;
                return o < 0 && (o += 4294967296), o
            }

            function k(e, t, r, n, i, o) {
                var s = t & n ^ t & o ^ n & o;
                return s < 0 && (s += 4294967296), s
            }

            function _(e, t) {
                var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function P(e, t) {
                var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function A(e, t) {
                var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                return r < 0 && (r += 4294967296), r
            }

            function x(e, t) {
                var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                return r < 0 && (r += 4294967296), r
            }

            function O(e, t) {
                var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function R(e, t) {
                var r = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function C(e, t) {
                var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
                return r < 0 && (r += 4294967296), r
            }

            function N(e, t) {
                var r = a(e, t, 19) ^ a(t, e, 29) ^ c(e, t, 6);
                return r < 0 && (r += 4294967296), r
            }
            n.inherits(b, y), e.exports = b, b.blockSize = 1024, b.outSize = 512, b.hmacStrength = 192, b.padLength = 128, b.prototype._prepareBlock = function(e, t) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
                for (; n < r.length; n += 2) {
                    var i = C(r[n - 4], r[n - 3]),
                        o = N(r[n - 4], r[n - 3]),
                        s = r[n - 14],
                        a = r[n - 13],
                        u = O(r[n - 30], r[n - 29]),
                        c = R(r[n - 30], r[n - 29]),
                        l = r[n - 32],
                        h = r[n - 31];
                    r[n] = d(i, o, s, a, u, c, l, h), r[n + 1] = p(i, o, s, a, u, c, l, h)
                }
            }, b.prototype._update = function(e, t) {
                this._prepareBlock(e, t);
                var r = this.W,
                    n = this.h[0],
                    i = this.h[1],
                    s = this.h[2],
                    a = this.h[3],
                    u = this.h[4],
                    c = this.h[5],
                    d = this.h[6],
                    p = this.h[7],
                    y = this.h[8],
                    v = this.h[9],
                    b = this.h[10],
                    O = this.h[11],
                    R = this.h[12],
                    C = this.h[13],
                    N = this.h[14],
                    I = this.h[15];
                o(this.k.length === r.length);
                for (var M = 0; M < r.length; M += 2) {
                    var T = N,
                        L = I,
                        B = A(y, v),
                        F = x(y, v),
                        U = w(y, v, b, O, R),
                        D = E(y, v, b, O, R, C),
                        j = this.k[M],
                        q = this.k[M + 1],
                        K = r[M],
                        z = r[M + 1],
                        G = m(T, L, B, F, U, D, j, q, K, z),
                        H = g(T, L, B, F, U, D, j, q, K, z);
                    T = _(n, i), L = P(n, i), B = S(n, i, s, a, u), F = k(n, i, s, a, u, c);
                    var V = h(T, L, B, F),
                        $ = f(T, L, B, F);
                    N = R, I = C, R = b, C = O, b = y, O = v, y = h(d, p, G, H), v = f(p, p, G, H), d = u, p = c, u = s, c = a, s = n, a = i, n = h(G, H, V, $), i = f(G, H, V, $)
                }
                l(this.h, 0, n, i), l(this.h, 2, s, a), l(this.h, 4, u, c), l(this.h, 6, d, p), l(this.h, 8, y, v), l(this.h, 10, b, O), l(this.h, 12, R, C), l(this.h, 14, N, I)
            }, b.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        40713: function(e, t, r) {
            "use strict";
            var n = r(50212).rotr32;

            function i(e, t, r) {
                return e & t ^ ~e & r
            }

            function o(e, t, r) {
                return e & t ^ e & r ^ t & r
            }

            function s(e, t, r) {
                return e ^ t ^ r
            }
            t.ft_1 = function(e, t, r, n) {
                return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? s(t, r, n) : 2 === e ? o(t, r, n) : void 0
            }, t.ch32 = i, t.maj32 = o, t.p32 = s, t.s0_256 = function(e) {
                return n(e, 2) ^ n(e, 13) ^ n(e, 22)
            }, t.s1_256 = function(e) {
                return n(e, 6) ^ n(e, 11) ^ n(e, 25)
            }, t.g0_256 = function(e) {
                return n(e, 7) ^ n(e, 18) ^ e >>> 3
            }, t.g1_256 = function(e) {
                return n(e, 17) ^ n(e, 19) ^ e >>> 10
            }
        },
        50212: function(e, t, r) {
            "use strict";
            var n = r(79561),
                i = r(91285);

            function o(e, t) {
                return 55296 === (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 === (64512 & e.charCodeAt(t + 1)))
            }

            function s(e) {
                return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
            }

            function a(e) {
                return 1 === e.length ? "0" + e : e
            }

            function u(e) {
                return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
            }
            t.inherits = i, t.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" === typeof e)
                    if (t) {
                        if ("hex" === t)
                            for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                    } else
                        for (var n = 0, i = 0; i < e.length; i++) {
                            var s = e.charCodeAt(i);
                            s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192, r[n++] = 63 & s | 128) : o(e, i) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128) : (r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128)
                        } else
                            for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
                return r
            }, t.toHex = function(e) {
                for (var t = "", r = 0; r < e.length; r++) t += a(e[r].toString(16));
                return t
            }, t.htonl = s, t.toHex32 = function(e, t) {
                for (var r = "", n = 0; n < e.length; n++) {
                    var i = e[n];
                    "little" === t && (i = s(i)), r += u(i.toString(16))
                }
                return r
            }, t.zero2 = a, t.zero8 = u, t.join32 = function(e, t, r, i) {
                var o = r - t;
                n(o % 4 === 0);
                for (var s = new Array(o / 4), a = 0, u = t; a < s.length; a++, u += 4) {
                    var c;
                    c = "big" === i ? e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3] : e[u + 3] << 24 | e[u + 2] << 16 | e[u + 1] << 8 | e[u], s[a] = c >>> 0
                }
                return s
            }, t.split32 = function(e, t) {
                for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                    var o = e[n];
                    "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                }
                return r
            }, t.rotr32 = function(e, t) {
                return e >>> t | e << 32 - t
            }, t.rotl32 = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.sum32 = function(e, t) {
                return e + t >>> 0
            }, t.sum32_3 = function(e, t, r) {
                return e + t + r >>> 0
            }, t.sum32_4 = function(e, t, r, n) {
                return e + t + r + n >>> 0
            }, t.sum32_5 = function(e, t, r, n, i) {
                return e + t + r + n + i >>> 0
            }, t.sum64 = function(e, t, r, n) {
                var i = e[t],
                    o = n + e[t + 1] >>> 0,
                    s = (o < n ? 1 : 0) + r + i;
                e[t] = s >>> 0, e[t + 1] = o
            }, t.sum64_hi = function(e, t, r, n) {
                return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
            }, t.sum64_lo = function(e, t, r, n) {
                return t + n >>> 0
            }, t.sum64_4_hi = function(e, t, r, n, i, o, s, a) {
                var u = 0,
                    c = t;
                return u += (c = c + n >>> 0) < t ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, e + r + i + s + (u += (c = c + a >>> 0) < a ? 1 : 0) >>> 0
            }, t.sum64_4_lo = function(e, t, r, n, i, o, s, a) {
                return t + n + o + a >>> 0
            }, t.sum64_5_hi = function(e, t, r, n, i, o, s, a, u, c) {
                var l = 0,
                    h = t;
                return l += (h = h + n >>> 0) < t ? 1 : 0, l += (h = h + o >>> 0) < o ? 1 : 0, l += (h = h + a >>> 0) < a ? 1 : 0, e + r + i + s + u + (l += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
            }, t.sum64_5_lo = function(e, t, r, n, i, o, s, a, u, c) {
                return t + n + o + a + c >>> 0
            }, t.rotr64_hi = function(e, t, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, t.rotr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, t.shr64_hi = function(e, t, r) {
                return e >>> r
            }, t.shr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }
        },
        91285: function(e) {
            "function" === typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        83669: function(e, t, r) {
            var n, i = r(34406);
            ! function() {
                "use strict";
                var o = "input is invalid type",
                    s = "object" === typeof window,
                    a = s ? window : {};
                a.JS_SHA3_NO_WINDOW && (s = !1);
                var u = !s && "object" === typeof self;
                !a.JS_SHA3_NO_NODE_JS && "object" === typeof i && i.versions && i.versions.node ? a = r.g : u && (a = self);
                var c = !a.JS_SHA3_NO_COMMON_JS && e.exports,
                    l = r.amdO,
                    h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                    f = "0123456789abcdef".split(""),
                    d = [4, 1024, 262144, 67108864],
                    p = [0, 8, 16, 24],
                    m = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    g = [224, 256, 384, 512],
                    y = [128, 256],
                    v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    b = {
                        128: 168,
                        256: 136
                    };
                !a.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }), !h || !a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                });
                for (var w = function(e, t, r) {
                        return function(n) {
                            return new L(e, t, e).update(n)[r]()
                        }
                    }, E = function(e, t, r) {
                        return function(n, i) {
                            return new L(e, t, i).update(n)[r]()
                        }
                    }, S = function(e, t, r) {
                        return function(t, n, i, o) {
                            return x["cshake" + e].update(t, n, i, o)[r]()
                        }
                    }, k = function(e, t, r) {
                        return function(t, n, i, o) {
                            return x["kmac" + e].update(t, n, i, o)[r]()
                        }
                    }, _ = function(e, t, r, n) {
                        for (var i = 0; i < v.length; ++i) {
                            var o = v[i];
                            e[o] = t(r, n, o)
                        }
                        return e
                    }, P = function(e, t) {
                        var r = w(e, t, "hex");
                        return r.create = function() {
                            return new L(e, t, e)
                        }, r.update = function(e) {
                            return r.create().update(e)
                        }, _(r, w, e, t)
                    }, A = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: g,
                        createMethod: P
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: g,
                        createMethod: P
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: y,
                        createMethod: function(e, t) {
                            var r = E(e, t, "hex");
                            return r.create = function(r) {
                                return new L(e, t, r)
                            }, r.update = function(e, t) {
                                return r.create(t).update(e)
                            }, _(r, E, e, t)
                        }
                    }, {
                        name: "cshake",
                        padding: d,
                        bits: y,
                        createMethod: function(e, t) {
                            var r = b[e],
                                n = S(e, 0, "hex");
                            return n.create = function(n, i, o) {
                                return i || o ? new L(e, t, n).bytepad([i, o], r) : x["shake" + e].create(n)
                            }, n.update = function(e, t, r, i) {
                                return n.create(t, r, i).update(e)
                            }, _(n, S, e, t)
                        }
                    }, {
                        name: "kmac",
                        padding: d,
                        bits: y,
                        createMethod: function(e, t) {
                            var r = b[e],
                                n = k(e, 0, "hex");
                            return n.create = function(n, i, o) {
                                return new B(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r)
                            }, n.update = function(e, t, r, i) {
                                return n.create(e, r, i).update(t)
                            }, _(n, k, e, t)
                        }
                    }], x = {}, O = [], R = 0; R < A.length; ++R)
                    for (var C = A[R], N = C.bits, I = 0; I < N.length; ++I) {
                        var M = C.name + "_" + N[I];
                        if (O.push(M), x[M] = C.createMethod(N[I], C.padding), "sha3" !== C.name) {
                            var T = C.name + N[I];
                            O.push(T), x[T] = x[M]
                        }
                    }

                function L(e, t, r) {
                    this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function B(e, t, r) {
                    L.call(this, e, t, r)
                }
                L.prototype.update = function(e) {
                    if (this.finalized) throw new Error("finalize already called");
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(o);
                        if (null === e) throw new Error(o);
                        if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw new Error(o);
                        t = !0
                    }
                    for (var n, i, s = this.blocks, a = this.byteCount, u = e.length, c = this.blockCount, l = 0, f = this.s; l < u;) {
                        if (this.reset)
                            for (this.reset = !1, s[0] = this.block, n = 1; n < c + 1; ++n) s[n] = 0;
                        if (t)
                            for (n = this.start; l < u && n < a; ++l) s[n >> 2] |= e[l] << p[3 & n++];
                        else
                            for (n = this.start; l < u && n < a; ++l)(i = e.charCodeAt(l)) < 128 ? s[n >> 2] |= i << p[3 & n++] : i < 2048 ? (s[n >> 2] |= (192 | i >> 6) << p[3 & n++], s[n >> 2] |= (128 | 63 & i) << p[3 & n++]) : i < 55296 || i >= 57344 ? (s[n >> 2] |= (224 | i >> 12) << p[3 & n++], s[n >> 2] |= (128 | i >> 6 & 63) << p[3 & n++], s[n >> 2] |= (128 | 63 & i) << p[3 & n++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++l)), s[n >> 2] |= (240 | i >> 18) << p[3 & n++], s[n >> 2] |= (128 | i >> 12 & 63) << p[3 & n++], s[n >> 2] |= (128 | i >> 6 & 63) << p[3 & n++], s[n >> 2] |= (128 | 63 & i) << p[3 & n++]);
                        if (this.lastByteIndex = n, n >= a) {
                            for (this.start = n - a, this.block = s[c], n = 0; n < c; ++n) f[n] ^= s[n];
                            F(f), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, L.prototype.encode = function(e, t) {
                    var r = 255 & e,
                        n = 1,
                        i = [r];
                    for (r = 255 & (e >>= 8); r > 0;) i.unshift(r), r = 255 & (e >>= 8), ++n;
                    return t ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, L.prototype.encodeString = function(e) {
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(o);
                        if (null === e) throw new Error(o);
                        if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw new Error(o);
                        t = !0
                    }
                    var n = 0,
                        i = e.length;
                    if (t) n = i;
                    else
                        for (var s = 0; s < e.length; ++s) {
                            var a = e.charCodeAt(s);
                            a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++s)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(e), n
                }, L.prototype.bytepad = function(e, t) {
                    for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
                    var i = t - r % t,
                        o = [];
                    return o.length = i, this.update(o), this
                }, L.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks,
                            t = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                            for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                        for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                        F(n)
                    }
                }, L.prototype.toString = L.prototype.hex = function() {
                    this.finalize();
                    for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n;) {
                        for (o = 0; o < t && s < n; ++o, ++s) e = r[o], a += f[e >> 4 & 15] + f[15 & e] + f[e >> 12 & 15] + f[e >> 8 & 15] + f[e >> 20 & 15] + f[e >> 16 & 15] + f[e >> 28 & 15] + f[e >> 24 & 15];
                        s % t === 0 && (F(r), o = 0)
                    }
                    return i && (e = r[o], a += f[e >> 4 & 15] + f[15 & e], i > 1 && (a += f[e >> 12 & 15] + f[e >> 8 & 15]), i > 2 && (a += f[e >> 20 & 15] + f[e >> 16 & 15])), a
                }, L.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e, t = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        s = 0,
                        a = this.outputBits >> 3;
                    e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
                    for (var u = new Uint32Array(e); s < n;) {
                        for (o = 0; o < t && s < n; ++o, ++s) u[s] = r[o];
                        s % t === 0 && F(r)
                    }
                    return i && (u[o] = r[o], e = e.slice(0, a)), e
                }, L.prototype.buffer = L.prototype.arrayBuffer, L.prototype.digest = L.prototype.array = function() {
                    this.finalize();
                    for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i;) {
                        for (s = 0; s < r && a < i; ++s, ++a) e = a << 2, t = n[s], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
                        a % r === 0 && F(n)
                    }
                    return o && (e = a << 2, t = n[s], u[e] = 255 & t, o > 1 && (u[e + 1] = t >> 8 & 255), o > 2 && (u[e + 2] = t >> 16 & 255)), u
                }, B.prototype = new L, B.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), L.prototype.finalize.call(this)
                };
                var F = function(e) {
                    var t, r, n, i, o, s, a, u, c, l, h, f, d, p, g, y, v, b, w, E, S, k, _, P, A, x, O, R, C, N, I, M, T, L, B, F, U, D, j, q, K, z, G, H, V, $, W, J, Q, Z, X, Y, ee, te, re, ne, ie, oe, se, ae, ue, ce, le;
                    for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | a >>> 31), r = (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (a << 1 | s >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (u << 1 | c >>> 31), r = o ^ (c << 1 | u >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = s ^ (l << 1 | h >>> 31), r = a ^ (h << 1 | l >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = u ^ (f << 1 | d >>> 31), r = c ^ (d << 1 | f >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = l ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], g = e[1], $ = e[11] << 4 | e[10] >>> 28, W = e[10] << 4 | e[11] >>> 28, R = e[20] << 3 | e[21] >>> 29, C = e[21] << 3 | e[20] >>> 29, ae = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, z = e[40] << 18 | e[41] >>> 14, G = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, B = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, J = e[22] << 10 | e[23] >>> 22, Q = e[23] << 10 | e[22] >>> 22, N = e[33] << 13 | e[32] >>> 19, I = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, F = e[14] << 6 | e[15] >>> 26, U = e[15] << 6 | e[14] >>> 26, b = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, X = e[35] << 15 | e[34] >>> 17, M = e[45] << 29 | e[44] >>> 3, T = e[44] << 29 | e[45] >>> 3, P = e[6] << 28 | e[7] >>> 4, A = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, D = e[26] << 25 | e[27] >>> 7, j = e[27] << 25 | e[26] >>> 7, E = e[36] << 21 | e[37] >>> 11, S = e[37] << 21 | e[36] >>> 11, Y = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, H = e[8] << 27 | e[9] >>> 5, V = e[9] << 27 | e[8] >>> 5, x = e[18] << 20 | e[19] >>> 12, O = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, q = e[38] << 8 | e[39] >>> 24, K = e[39] << 8 | e[38] >>> 24, k = e[48] << 14 | e[49] >>> 18, _ = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~y & b, e[1] = g ^ ~v & w, e[10] = P ^ ~x & R, e[11] = A ^ ~O & C, e[20] = L ^ ~F & D, e[21] = B ^ ~U & j, e[30] = H ^ ~$ & J, e[31] = V ^ ~W & Q, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & se, e[2] = y ^ ~b & E, e[3] = v ^ ~w & S, e[12] = x ^ ~R & N, e[13] = O ^ ~C & I, e[22] = F ^ ~D & q, e[23] = U ^ ~j & K, e[32] = $ ^ ~J & Z, e[33] = W ^ ~Q & X, e[42] = ne ^ ~oe & ae, e[43] = ie ^ ~se & ue, e[4] = b ^ ~E & k, e[5] = w ^ ~S & _, e[14] = R ^ ~N & M, e[15] = C ^ ~I & T, e[24] = D ^ ~q & z, e[25] = j ^ ~K & G, e[34] = J ^ ~Z & Y, e[35] = Q ^ ~X & ee, e[44] = oe ^ ~ae & ce, e[45] = se ^ ~ue & le, e[6] = E ^ ~k & p, e[7] = S ^ ~_ & g, e[16] = N ^ ~M & P, e[17] = I ^ ~T & A, e[26] = q ^ ~z & L, e[27] = K ^ ~G & B, e[36] = Z ^ ~Y & H, e[37] = X ^ ~ee & V, e[46] = ae ^ ~ce & te, e[47] = ue ^ ~le & re, e[8] = k ^ ~p & y, e[9] = _ ^ ~g & v, e[18] = M ^ ~P & x, e[19] = T ^ ~A & O, e[28] = z ^ ~L & F, e[29] = G ^ ~B & U, e[38] = Y ^ ~H & $, e[39] = ee ^ ~V & W, e[48] = ce ^ ~te & ne, e[49] = le ^ ~re & ie, e[0] ^= m[n], e[1] ^= m[n + 1]
                };
                if (c) e.exports = x;
                else {
                    for (R = 0; R < O.length; ++R) a[O[R]] = x[O[R]];
                    l && (void 0 === (n = function() {
                        return x
                    }.call(t, r, t, e)) || (e.exports = n))
                }
            }()
        },
        79561: function(e) {
            function t(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }
            e.exports = t, t.equal = function(e, t, r) {
                if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
            }
        },
        14689: function(e) {
            "use strict";
            ! function(t) {
                const r = 2147483647;

                function n(e) {
                    const t = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
                    let r = 1779033703,
                        n = 3144134277,
                        i = 1013904242,
                        o = 2773480762,
                        s = 1359893119,
                        a = 2600822924,
                        u = 528734635,
                        c = 1541459225;
                    const l = new Uint32Array(64);

                    function h(e) {
                        let h = 0,
                            f = e.length;
                        for (; f >= 64;) {
                            let d, p, m, g, y, v = r,
                                b = n,
                                w = i,
                                E = o,
                                S = s,
                                k = a,
                                _ = u,
                                P = c;
                            for (p = 0; p < 16; p++) m = h + 4 * p, l[p] = (255 & e[m]) << 24 | (255 & e[m + 1]) << 16 | (255 & e[m + 2]) << 8 | 255 & e[m + 3];
                            for (p = 16; p < 64; p++) d = l[p - 2], g = (d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10, d = l[p - 15], y = (d >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3, l[p] = (g + l[p - 7] | 0) + (y + l[p - 16] | 0) | 0;
                            for (p = 0; p < 64; p++) g = (((S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7)) + (S & k ^ ~S & _) | 0) + (P + (t[p] + l[p] | 0) | 0) | 0, y = ((v >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10)) + (v & b ^ v & w ^ b & w) | 0, P = _, _ = k, k = S, S = E + g | 0, E = w, w = b, b = v, v = g + y | 0;
                            r = r + v | 0, n = n + b | 0, i = i + w | 0, o = o + E | 0, s = s + S | 0, a = a + k | 0, u = u + _ | 0, c = c + P | 0, h += 64, f -= 64
                        }
                    }
                    h(e);
                    let f, d = e.length % 64,
                        p = e.length / 536870912 | 0,
                        m = e.length << 3,
                        g = d < 56 ? 56 : 120,
                        y = e.slice(e.length - d, e.length);
                    for (y.push(128), f = d + 1; f < g; f++) y.push(0);
                    return y.push(p >>> 24 & 255), y.push(p >>> 16 & 255), y.push(p >>> 8 & 255), y.push(p >>> 0 & 255), y.push(m >>> 24 & 255), y.push(m >>> 16 & 255), y.push(m >>> 8 & 255), y.push(m >>> 0 & 255), h(y), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u >>> 0 & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c >>> 0 & 255]
                }

                function i(e, t, r) {
                    e = e.length <= 64 ? e : n(e);
                    const i = 64 + t.length + 4,
                        o = new Array(i),
                        s = new Array(64);
                    let a, u = [];
                    for (a = 0; a < 64; a++) o[a] = 54;
                    for (a = 0; a < e.length; a++) o[a] ^= e[a];
                    for (a = 0; a < t.length; a++) o[64 + a] = t[a];
                    for (a = i - 4; a < i; a++) o[a] = 0;
                    for (a = 0; a < 64; a++) s[a] = 92;
                    for (a = 0; a < e.length; a++) s[a] ^= e[a];

                    function c() {
                        for (let e = i - 1; e >= i - 4; e--) {
                            if (o[e]++, o[e] <= 255) return;
                            o[e] = 0
                        }
                    }
                    for (; r >= 32;) c(), u = u.concat(n(s.concat(n(o)))), r -= 32;
                    return r > 0 && (c(), u = u.concat(n(s.concat(n(o))).slice(0, r))), u
                }

                function o(e, t, r, n, i) {
                    let o;
                    for (c(e, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++) u(e, 16 * o, i, 16), a(i, n), c(i, 0, e, t + 16 * o, 16);
                    for (o = 0; o < r; o++) c(e, t + 2 * o * 16, e, 16 * o, 16);
                    for (o = 0; o < r; o++) c(e, t + 16 * (2 * o + 1), e, 16 * (o + r), 16)
                }

                function s(e, t) {
                    return e << t | e >>> 32 - t
                }

                function a(e, t) {
                    c(e, 0, t, 0, 16);
                    for (let r = 8; r > 0; r -= 2) t[4] ^= s(t[0] + t[12], 7), t[8] ^= s(t[4] + t[0], 9), t[12] ^= s(t[8] + t[4], 13), t[0] ^= s(t[12] + t[8], 18), t[9] ^= s(t[5] + t[1], 7), t[13] ^= s(t[9] + t[5], 9), t[1] ^= s(t[13] + t[9], 13), t[5] ^= s(t[1] + t[13], 18), t[14] ^= s(t[10] + t[6], 7), t[2] ^= s(t[14] + t[10], 9), t[6] ^= s(t[2] + t[14], 13), t[10] ^= s(t[6] + t[2], 18), t[3] ^= s(t[15] + t[11], 7), t[7] ^= s(t[3] + t[15], 9), t[11] ^= s(t[7] + t[3], 13), t[15] ^= s(t[11] + t[7], 18), t[1] ^= s(t[0] + t[3], 7), t[2] ^= s(t[1] + t[0], 9), t[3] ^= s(t[2] + t[1], 13), t[0] ^= s(t[3] + t[2], 18), t[6] ^= s(t[5] + t[4], 7), t[7] ^= s(t[6] + t[5], 9), t[4] ^= s(t[7] + t[6], 13), t[5] ^= s(t[4] + t[7], 18), t[11] ^= s(t[10] + t[9], 7), t[8] ^= s(t[11] + t[10], 9), t[9] ^= s(t[8] + t[11], 13), t[10] ^= s(t[9] + t[8], 18), t[12] ^= s(t[15] + t[14], 7), t[13] ^= s(t[12] + t[15], 9), t[14] ^= s(t[13] + t[12], 13), t[15] ^= s(t[14] + t[13], 18);
                    for (let r = 0; r < 16; ++r) e[r] += t[r]
                }

                function u(e, t, r, n) {
                    for (let i = 0; i < n; i++) r[i] ^= e[t + i]
                }

                function c(e, t, r, n, i) {
                    for (; i--;) r[n++] = e[t++]
                }

                function l(e) {
                    if (!e || "number" !== typeof e.length) return !1;
                    for (let t = 0; t < e.length; t++) {
                        const r = e[t];
                        if ("number" !== typeof r || r % 1 || r < 0 || r >= 256) return !1
                    }
                    return !0
                }

                function h(e, t) {
                    if ("number" !== typeof e || e % 1) throw new Error("invalid " + t);
                    return e
                }

                function f(e, t, n, s, a, f, d) {
                    if (n = h(n, "N"), s = h(s, "r"), a = h(a, "p"), f = h(f, "dkLen"), 0 === n || 0 !== (n & n - 1)) throw new Error("N must be power of 2");
                    if (n > r / 128 / s) throw new Error("N too large");
                    if (s > r / 128 / a) throw new Error("r too large");
                    if (!l(e)) throw new Error("password must be an array or buffer");
                    if (e = Array.prototype.slice.call(e), !l(t)) throw new Error("salt must be an array or buffer");
                    t = Array.prototype.slice.call(t);
                    let p = i(e, t, 128 * a * s);
                    const m = new Uint32Array(32 * a * s);
                    for (let r = 0; r < m.length; r++) {
                        const e = 4 * r;
                        m[r] = (255 & p[e + 3]) << 24 | (255 & p[e + 2]) << 16 | (255 & p[e + 1]) << 8 | (255 & p[e + 0]) << 0
                    }
                    const g = new Uint32Array(64 * s),
                        y = new Uint32Array(32 * s * n),
                        v = 32 * s,
                        b = new Uint32Array(16),
                        w = new Uint32Array(16),
                        E = a * n * 2;
                    let S, k, _ = 0,
                        P = null,
                        A = !1,
                        x = 0,
                        O = 0;
                    const R = d ? parseInt(1e3 / s) : 4294967295,
                        C = "undefined" !== typeof setImmediate ? setImmediate : setTimeout,
                        N = function() {
                            if (A) return d(new Error("cancelled"), _ / E);
                            let t;
                            switch (x) {
                                case 0:
                                    k = 32 * O * s, c(m, k, g, 0, v), x = 1, S = 0;
                                case 1:
                                    t = n - S, t > R && (t = R);
                                    for (let e = 0; e < t; e++) c(g, 0, y, (S + e) * v, v), o(g, v, s, b, w);
                                    if (S += t, _ += t, d) {
                                        const e = parseInt(1e3 * _ / E);
                                        if (e !== P) {
                                            if (A = d(null, _ / E), A) break;
                                            P = e
                                        }
                                    }
                                    if (S < n) break;
                                    S = 0, x = 2;
                                case 2:
                                    t = n - S, t > R && (t = R);
                                    for (let e = 0; e < t; e++) {
                                        const e = g[16 * (2 * s - 1)] & n - 1;
                                        u(y, e * v, g, v), o(g, v, s, b, w)
                                    }
                                    if (S += t, _ += t, d) {
                                        const e = parseInt(1e3 * _ / E);
                                        if (e !== P) {
                                            if (A = d(null, _ / E), A) break;
                                            P = e
                                        }
                                    }
                                    if (S < n) break;
                                    if (c(g, 0, m, k, v), O++, O < a) {
                                        x = 0;
                                        break
                                    }
                                    p = [];
                                    for (let e = 0; e < m.length; e++) p.push(m[e] >> 0 & 255), p.push(m[e] >> 8 & 255), p.push(m[e] >> 16 & 255), p.push(m[e] >> 24 & 255);
                                    const r = i(e, p, f);
                                    return d && d(null, 1, r), r
                            }
                            d && C(N)
                        };
                    if (!d)
                        for (;;) {
                            const e = N();
                            if (void 0 != e) return e
                        }
                    N()
                }
                const d = {
                    scrypt: function(e, t, r, n, i, o, s) {
                        return new Promise((function(a, u) {
                            let c = 0;
                            s && s(0), f(e, t, r, n, i, o, (function(e, t, r) {
                                if (e) u(e);
                                else if (r) s && 1 !== c && s(1), a(new Uint8Array(r));
                                else if (s && t !== c) return c = t, s(t)
                            }))
                        }))
                    },
                    syncScrypt: function(e, t, r, n, i, o) {
                        return new Uint8Array(f(e, t, r, n, i, o))
                    }
                };
                e.exports = d
            }()
        },
        17311: function(e, t, r) {
            "use strict";
            r.d(t, {
                FL: function() {
                    return De
                },
                eI: function() {
                    return Ue
                },
                mA: function() {
                    return $e
                },
                KQ: function() {
                    return Ye
                },
                $4: function() {
                    return rt
                },
                do: function() {
                    return pt
                },
                qL: function() {
                    return ot
                },
                c9: function() {
                    return yt
                },
                F6: function() {
                    return wt
                },
                LN: function() {
                    return ut
                },
                yL: function() {
                    return qe
                },
                QW: function() {
                    return ht
                }
            });
            var n = r(2784),
                i = r(59456),
                o = r(12551),
                s = r(83055),
                a = r(58105),
                u = r(30171);
            r(10161);
            const c = ["event Approval(address indexed _owner, address indexed _spender, uint256 _value)", "event Transfer(address indexed _from, address indexed _to, uint256 _value)", "function allowance(address _owner, address _spender) public view returns (uint256 remaining)", "function approve(address _spender, uint256 _value) public returns (bool success)", "function balanceOf(address _owner) public view returns (uint256 balance)", "function decimals() public view returns (uint8)", "function name() public view returns (string)", "function symbol() public view returns (string)", "function totalSupply() public view returns (uint256)", "function transfer(address _to, uint256 _value) public returns (bool success)", "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)"];

            function l() {
                let {
                    chainId: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = (0, i.g)();
                return e && "function" === typeof t.config.provider ? t.config.provider({
                    chainId: e
                }) : t.provider
            }

            function h() {
                let {
                    chainId: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = (0, i.g)();
                return e && "function" === typeof t.config.webSocketProvider ? t.config.webSocketProvider({
                    chainId: e
                }) : t.webSocketProvider
            }

            function f(e, t) {
                return (0, i.g)().subscribe((e => {
                    let {
                        provider: t
                    } = e;
                    return t
                }), (async () => t(l(e))))
            }

            function d(e, t) {
                return (0, i.g)().subscribe((e => {
                    let {
                        webSocketProvider: t
                    } = e;
                    return t
                }), (async () => t(h(e))))
            }
            async function p() {
                var e, t;
                const r = (0, i.g)();
                return await (null === (e = r.connector) || void 0 === e || null === (t = e.getSigner) || void 0 === t ? void 0 : t.call(e)) || null
            }

            function m() {
                const {
                    data: e,
                    connector: t
                } = (0, i.g)();
                return {
                    address: null === e || void 0 === e ? void 0 : e.account,
                    connector: t
                }
            }

            function g() {
                var e, t, r, n, s;
                const a = (0, i.g)(),
                    u = null === (e = a.data) || void 0 === e || null === (t = e.chain) || void 0 === t ? void 0 : t.id,
                    c = null !== (r = a.chains) && void 0 !== r ? r : [],
                    l = null !== (n = [...c, ...o.a].find((e => e.id === u))) && void 0 !== n ? n : {
                        id: u,
                        name: "Chain ".concat(u),
                        rpcUrls: {
                            default: ""
                        }
                    };
                return {
                    chain: u ? { ...l,
                        ...null === (s = a.data) || void 0 === s ? void 0 : s.chain,
                        id: u
                    } : void 0,
                    chains: c
                }
            }

            function y(e) {
                return (0, i.g)().subscribe((e => {
                    let {
                        data: t,
                        connector: r
                    } = e;
                    return {
                        account: null === t || void 0 === t ? void 0 : t.account,
                        connector: r
                    }
                }), (() => e(m())), {
                    equalityFn: (e, t) => e.account === t.account && e.connector === t.connector
                })
            }

            function v(e) {
                return (0, i.g)().subscribe((e => {
                    var t;
                    let {
                        data: r,
                        chains: n
                    } = e;
                    return {
                        chainId: null === r || void 0 === r || null === (t = r.chain) || void 0 === t ? void 0 : t.id,
                        chains: n
                    }
                }), (() => e(g())), {
                    equalityFn: (e, t) => e.chainId === t.chainId && e.chains === t.chains
                })
            }

            function b(e) {
                let {
                    addressOrName: t,
                    contractInterface: r,
                    signerOrProvider: n
                } = e;
                return new u.Contract(t, r, n)
            }
            async function w(e, t) {
                let {
                    args: r,
                    chainId: n,
                    overrides: i
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const o = l({
                        chainId: n
                    }),
                    s = b({
                        signerOrProvider: o,
                        ...e
                    }),
                    a = [...Array.isArray(r) ? r : r ? [r] : [], ...i ? [i] : []],
                    u = s[t];
                u || console.warn('"'.concat(t, '" does not in interface for contract "').concat(e.addressOrName, '"'));
                const c = await (null === u || void 0 === u ? void 0 : u(...a));
                return c
            }
            async function E() {
                let {
                    chainId: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = l({
                        chainId: e
                    }),
                    r = await t.getBlockNumber();
                return r
            }

            function S(e, t) {
                var r;
                let n;
                const o = e => {
                        var r;
                        n && (null === (r = n) || void 0 === r || r.off("block", t));
                        e.on("block", t), n = e
                    },
                    s = (0, i.g)(),
                    a = null !== (r = s.webSocketProvider) && void 0 !== r ? r : s.provider;
                e.listen && o(a);
                const u = s.subscribe((e => {
                    let {
                        provider: t,
                        webSocketProvider: r
                    } = e;
                    return {
                        provider: t,
                        webSocketProvider: r
                    }
                }), (async r => {
                    let {
                        provider: n,
                        webSocketProvider: i
                    } = r;
                    const s = null !== i && void 0 !== i ? i : n;
                    e.listen && s && o(s), t(await E())
                }), {
                    equalityFn: (e, t) => e.provider === t.provider && e.webSocketProvider === t.webSocketProvider
                });
                return () => {
                    u(), null === a || void 0 === a || a.off("block", t)
                }
            }

            function k(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 ? arguments[3] : void 0;
                const o = (0, i.g)(),
                    s = async () => n(await w(e, t, r)),
                    a = r.listenToBlock ? S({
                        listen: !0
                    }, s) : void 0,
                    u = o.subscribe((e => {
                        let {
                            provider: t
                        } = e;
                        return t
                    }), s);
                return () => {
                    u(), null === a || void 0 === a || a()
                }
            }
            const _ = "undefined" === typeof window;

            function P() {}

            function A(e) {
                return "number" === typeof e && e >= 0 && e !== 1 / 0
            }

            function x(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function O(e, t, r) {
                return D(e) ? "function" === typeof t ? { ...r,
                    queryKey: e,
                    queryFn: t
                } : { ...t,
                    queryKey: e
                } : e
            }

            function R(e, t, r) {
                return D(e) ? [{ ...t,
                    queryKey: e
                }, r] : [e || {}, t]
            }

            function C(e, t) {
                const {
                    type: r = "all",
                    exact: n,
                    fetchStatus: i,
                    predicate: o,
                    queryKey: s,
                    stale: a
                } = e;
                if (D(s))
                    if (n) {
                        if (t.queryHash !== I(s, t.options)) return !1
                    } else if (!T(t.queryKey, s)) return !1;
                if ("all" !== r) {
                    const e = t.isActive();
                    if ("active" === r && !e) return !1;
                    if ("inactive" === r && e) return !1
                }
                return ("boolean" !== typeof a || t.isStale() === a) && (("undefined" === typeof i || i === t.state.fetchStatus) && !(o && !o(t)))
            }

            function N(e, t) {
                const {
                    exact: r,
                    fetching: n,
                    predicate: i,
                    mutationKey: o
                } = e;
                if (D(o)) {
                    if (!t.options.mutationKey) return !1;
                    if (r) {
                        if (M(t.options.mutationKey) !== M(o)) return !1
                    } else if (!T(t.options.mutationKey, o)) return !1
                }
                return ("boolean" !== typeof n || "loading" === t.state.status === n) && !(i && !i(t))
            }

            function I(e, t) {
                return ((null == t ? void 0 : t.queryKeyHashFn) || M)(e)
            }

            function M(e) {
                return JSON.stringify(e, ((e, t) => F(t) ? Object.keys(t).sort().reduce(((e, r) => (e[r] = t[r], e)), {}) : t))
            }

            function T(e, t) {
                return L(e, t)
            }

            function L(e, t) {
                return e === t || typeof e === typeof t && (!(!e || !t || "object" !== typeof e || "object" !== typeof t) && !Object.keys(t).some((r => !L(e[r], t[r]))))
            }

            function B(e, t) {
                if (e === t) return e;
                const r = Array.isArray(e) && Array.isArray(t);
                if (r || F(e) && F(t)) {
                    const n = r ? e.length : Object.keys(e).length,
                        i = r ? t : Object.keys(t),
                        o = i.length,
                        s = r ? [] : {};
                    let a = 0;
                    for (let u = 0; u < o; u++) {
                        const n = r ? u : i[u];
                        s[n] = B(e[n], t[n]), s[n] === e[n] && a++
                    }
                    return n === o && a === n ? e : s
                }
                return t
            }

            function F(e) {
                if (!U(e)) return !1;
                const t = e.constructor;
                if ("undefined" === typeof t) return !0;
                const r = t.prototype;
                return !!U(r) && !!r.hasOwnProperty("isPrototypeOf")
            }

            function U(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function D(e) {
                return Array.isArray(e)
            }

            function j(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }

            function q(e) {
                j(0).then(e)
            }

            function K() {
                if ("function" === typeof AbortController) return new AbortController
            }
            const z = console;
            const G = function() {
                let e = [],
                    t = 0,
                    r = e => {
                        e()
                    },
                    n = e => {
                        e()
                    };
                const i = n => {
                        t ? e.push(n) : q((() => {
                            r(n)
                        }))
                    },
                    o = () => {
                        const t = e;
                        e = [], t.length && q((() => {
                            n((() => {
                                t.forEach((e => {
                                    r(e)
                                }))
                            }))
                        }))
                    };
                return {
                    batch: e => {
                        let r;
                        t++;
                        try {
                            r = e()
                        } finally {
                            t--, t || o()
                        }
                        return r
                    },
                    batchCalls: e => (...t) => {
                        i((() => {
                            e(...t)
                        }))
                    },
                    schedule: i,
                    setNotifyFunction: e => {
                        r = e
                    },
                    setBatchNotifyFunction: e => {
                        n = e
                    }
                }
            }();
            class H {
                constructor() {
                    this.listeners = [], this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    return this.listeners.push(e), this.onSubscribe(), () => {
                        this.listeners = this.listeners.filter((t => t !== e)), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.length > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
            const V = new class extends H {
                constructor() {
                    super(), this.setup = e => {
                        if (!_ && window.addEventListener) {
                            const t = () => e();
                            return window.addEventListener("visibilitychange", t, !1), window.addEventListener("focus", t, !1), () => {
                                window.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    var e;
                    this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((e => {
                        "boolean" === typeof e ? this.setFocused(e) : this.onFocus()
                    }))
                }
                setFocused(e) {
                    this.focused = e, e && this.onFocus()
                }
                onFocus() {
                    this.listeners.forEach((e => {
                        e()
                    }))
                }
                isFocused() {
                    return "boolean" === typeof this.focused ? this.focused : "undefined" === typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            };
            const $ = new class extends H {
                constructor() {
                    super(), this.setup = e => {
                        if (!_ && window.addEventListener) {
                            const t = () => e();
                            return window.addEventListener("online", t, !1), window.addEventListener("offline", t, !1), () => {
                                window.removeEventListener("online", t), window.removeEventListener("offline", t)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    var e;
                    this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((e => {
                        "boolean" === typeof e ? this.setOnline(e) : this.onOnline()
                    }))
                }
                setOnline(e) {
                    this.online = e, e && this.onOnline()
                }
                onOnline() {
                    this.listeners.forEach((e => {
                        e()
                    }))
                }
                isOnline() {
                    return "boolean" === typeof this.online ? this.online : "undefined" === typeof navigator || "undefined" === typeof navigator.onLine || navigator.onLine
                }
            };

            function W(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function J(e) {
                return "online" !== (null != e ? e : "online") || $.isOnline()
            }
            class Q {
                constructor(e) {
                    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
                }
            }

            function Z(e) {
                return e instanceof Q
            }

            function X(e) {
                let t, r, n, i = !1,
                    o = 0,
                    s = !1;
                const a = new Promise(((e, t) => {
                        r = e, n = t
                    })),
                    u = () => !V.isFocused() || "always" !== e.networkMode && !$.isOnline(),
                    c = n => {
                        s || (s = !0, null == e.onSuccess || e.onSuccess(n), null == t || t(), r(n))
                    },
                    l = r => {
                        s || (s = !0, null == e.onError || e.onError(r), null == t || t(), n(r))
                    },
                    h = () => new Promise((r => {
                        t = e => {
                            if (s || !u()) return r(e)
                        }, null == e.onPause || e.onPause()
                    })).then((() => {
                        t = void 0, s || null == e.onContinue || e.onContinue()
                    })),
                    f = () => {
                        if (s) return;
                        let t;
                        try {
                            t = e.fn()
                        } catch (r) {
                            t = Promise.reject(r)
                        }
                        Promise.resolve(t).then(c).catch((t => {
                            var r, n;
                            if (s) return;
                            const a = null != (r = e.retry) ? r : 3,
                                c = null != (n = e.retryDelay) ? n : W,
                                d = "function" === typeof c ? c(o, t) : c,
                                p = !0 === a || "number" === typeof a && o < a || "function" === typeof a && a(o, t);
                            !i && p ? (o++, null == e.onFail || e.onFail(o, t), j(d).then((() => {
                                if (u()) return h()
                            })).then((() => {
                                i ? l(t) : f()
                            }))) : l(t)
                        }))
                    };
                return J(e.networkMode) ? f() : h().then(f), {
                    promise: a,
                    cancel: t => {
                        s || (l(new Q(t)), null == e.abort || e.abort())
                    },
                    continue: () => {
                        null == t || t()
                    },
                    cancelRetry: () => {
                        i = !0
                    },
                    continueRetry: () => {
                        i = !1
                    }
                }
            }
            class Y {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), A(this.cacheTime) && (this.gcTimeout = setTimeout((() => {
                        this.optionalRemove()
                    }), this.cacheTime))
                }
                updateCacheTime(e) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : _ ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    clearTimeout(this.gcTimeout), this.gcTimeout = void 0
                }
            }
            class ee extends Y {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || z, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        const t = "function" === typeof e.initialData ? e.initialData() : e.initialData,
                            r = "undefined" !== typeof e.initialData ? "function" === typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0,
                            n = "undefined" !== typeof t;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: n ? null != r ? r : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: n ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.meta = e.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.meta = null == e ? void 0 : e.meta, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    var r, n;
                    const i = this.state.data;
                    return null != (r = (n = this.options).isDataEqual) && r.call(n, i, e) ? e = i : !1 !== this.options.structuralSharing && (e = B(i, e)), this.dispatch({
                        data: e,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        notifySuccess: null == t ? void 0 : t.notifySuccess
                    }), e
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    const r = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), r ? r.then(P).catch(P) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some((e => !1 !== e.options.enabled))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e => e.getCurrentResult().isStale))
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !x(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnWindowFocus()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnReconnect()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    -1 === this.observers.indexOf(e) && (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    -1 !== this.observers.indexOf(e) && (this.observers = this.observers.filter((t => t !== e)), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var r, n;
                    if ("idle" !== this.state.fetchStatus)
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) {
                        var i;
                        return null == (i = this.retryer) || i.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        const e = this.observers.find((e => e.options.queryFn));
                        e && this.setOptions(e.options)
                    }
                    Array.isArray(this.options.queryKey);
                    const o = K(),
                        s = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        a = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (o) return this.abortSignalConsumed = !0, o.signal
                                }
                            })
                        };
                    a(s);
                    const u = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(s)) : Promise.reject("Missing queryFn"),
                        meta: this.meta
                    };
                    var c;
                    (a(u), null == (r = this.options.behavior) || r.onFetch(u), this.revertState = this.state, "idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (n = u.fetchOptions) ? void 0 : n.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (c = u.fetchOptions) ? void 0 : c.meta
                    });
                    const l = e => {
                        var t, r;
                        (Z(e) && e.silent || this.dispatch({
                            type: "error",
                            error: e
                        }), Z(e)) || (null == (t = (r = this.cache.config).onError) || t.call(r, e, this));
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = X({
                        fn: u.fetchFn,
                        abort: null == o ? void 0 : o.abort.bind(o),
                        onSuccess: e => {
                            var t, r;
                            "undefined" !== typeof e ? (this.setData(e), null == (t = (r = this.cache.config).onSuccess) || t.call(r, e, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : l(new Error("Query data cannot be undefined"))
                        },
                        onError: l,
                        onFail: () => {
                            this.dispatch({
                                type: "failed"
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: u.options.retry,
                        retryDelay: u.options.retryDelay,
                        networkMode: u.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var r, n;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: t.fetchFailureCount + 1
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchMeta: null != (r = e.meta) ? r : null,
                                    fetchStatus: J(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    fetchFailureCount: 0,
                                    isInvalidated: !1,
                                    fetchStatus: "idle",
                                    status: "success"
                                };
                            case "error":
                                const i = e.error;
                                return Z(i) && i.revert && this.revertState ? { ...this.revertState
                                } : { ...t,
                                    error: i,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), G.batch((() => {
                        this.observers.forEach((t => {
                            t.onQueryUpdate(e)
                        })), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    }))
                }
            }
            class te extends H {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, r) {
                    var n;
                    const i = t.queryKey,
                        o = null != (n = t.queryHash) ? n : I(i, t);
                    let s = this.get(o);
                    return s || (s = new ee({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: i,
                        queryHash: o,
                        options: e.defaultQueryOptions(t),
                        state: r,
                        defaultOptions: e.getQueryDefaults(i),
                        meta: t.meta
                    }), this.add(s)), s
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    const t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter((t => t !== e)), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    G.batch((() => {
                        this.queries.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    const [r] = R(e, t);
                    return "undefined" === typeof r.exact && (r.exact = !0), this.queries.find((e => C(r, e)))
                }
                findAll(e, t) {
                    const [r] = R(e, t);
                    return Object.keys(r).length > 0 ? this.queries.filter((e => C(r, e))) : this.queries
                }
                notify(e) {
                    G.batch((() => {
                        this.listeners.forEach((t => {
                            t(e)
                        }))
                    }))
                }
                onFocus() {
                    G.batch((() => {
                        this.queries.forEach((e => {
                            e.onFocus()
                        }))
                    }))
                }
                onOnline() {
                    G.batch((() => {
                        this.queries.forEach((e => {
                            e.onOnline()
                        }))
                    }))
                }
            }
            class re extends Y {
                constructor(e) {
                    super(), this.options = { ...e.defaultOptions,
                        ...e.options
                    }, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || z, this.observers = [], this.state = e.state || ne(), this.meta = e.meta, this.updateCacheTime(this.options.cacheTime), this.scheduleGc()
                }
                setState(e) {
                    this.dispatch({
                        type: "setState",
                        state: e
                    })
                }
                addObserver(e) {
                    -1 === this.observers.indexOf(e) && (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers = this.observers.filter((t => t !== e)), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: e
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
                }
                async execute() {
                    const e = () => {
                            var e;
                            return this.retryer = X({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: () => {
                                    this.dispatch({
                                        type: "failed"
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (e = this.options.retry) ? e : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        },
                        t = "loading" === this.state.status;
                    try {
                        var r, n, i, o, s, a;
                        if (!t) {
                            var u, c, l, h;
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), null == (u = (c = this.mutationCache.config).onMutate) || u.call(c, this.state.variables, this);
                            const e = await (null == (l = (h = this.options).onMutate) ? void 0 : l.call(h, this.state.variables));
                            e !== this.state.context && this.dispatch({
                                type: "loading",
                                context: e,
                                variables: this.state.variables
                            })
                        }
                        const f = await e();
                        return null == (r = (n = this.mutationCache.config).onSuccess) || r.call(n, f, this.state.variables, this.state.context, this), await (null == (i = (o = this.options).onSuccess) ? void 0 : i.call(o, f, this.state.variables, this.state.context)), await (null == (s = (a = this.options).onSettled) ? void 0 : s.call(a, f, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: f
                        }), f
                    } catch (v) {
                        try {
                            var f, d, p, m, g, y;
                            throw null == (f = (d = this.mutationCache.config).onError) || f.call(d, v, this.state.variables, this.state.context, this), await (null == (p = (m = this.options).onError) ? void 0 : p.call(m, v, this.state.variables, this.state.context)), await (null == (g = (y = this.options).onSettled) ? void 0 : g.call(y, void 0, v, this.state.variables, this.state.context)), v
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: v
                            })
                        }
                    }
                }
                dispatch(e) {
                    this.state = (t => {
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    failureCount: t.failureCount + 1
                                };
                            case "pause":
                                return { ...t,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...t,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...t,
                                    context: e.context,
                                    data: void 0,
                                    error: null,
                                    isPaused: !J(this.options.networkMode),
                                    status: "loading",
                                    variables: e.variables
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...t,
                                    data: void 0,
                                    error: e.error,
                                    failureCount: t.failureCount + 1,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), G.batch((() => {
                        this.observers.forEach((t => {
                            t.onMutationUpdate(e)
                        })), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: e
                        })
                    }))
                }
            }

            function ne() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
            class ie extends H {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, r) {
                    const n = new re({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: r,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0,
                        meta: t.meta
                    });
                    return this.add(n), n
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter((t => t !== e)), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    G.batch((() => {
                        this.mutations.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return "undefined" === typeof e.exact && (e.exact = !0), this.mutations.find((t => N(e, t)))
                }
                findAll(e) {
                    return this.mutations.filter((t => N(e, t)))
                }
                notify(e) {
                    G.batch((() => {
                        this.listeners.forEach((t => {
                            t(e)
                        }))
                    }))
                }
                resumePausedMutations() {
                    const e = this.mutations.filter((e => e.state.isPaused));
                    return G.batch((() => e.reduce(((e, t) => e.then((() => t.continue().catch(P)))), Promise.resolve())))
                }
            }

            function oe(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function se(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }
            class ae {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new te, this.mutationCache = e.mutationCache || new ie, this.logger = e.logger || z, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
                }
                mount() {
                    this.unsubscribeFocus = V.subscribe((() => {
                        V.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    })), this.unsubscribeOnline = $.subscribe((() => {
                        $.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var e, t;
                    null == (e = this.unsubscribeFocus) || e.call(this), null == (t = this.unsubscribeOnline) || t.call(this)
                }
                isFetching(e, t) {
                    const [r] = R(e, t);
                    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state.data
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map((({
                        queryKey: e,
                        state: t
                    }) => [e, t.data]))
                }
                setQueryData(e, t, r) {
                    const n = this.queryCache.find(e),
                        i = function(e, t) {
                            return "function" === typeof e ? e(t) : e
                        }(t, null == n ? void 0 : n.state.data);
                    if ("undefined" === typeof i) return;
                    const o = O(e),
                        s = this.defaultQueryOptions(o);
                    return this.queryCache.build(this, s).setData(i, { ...r,
                        notifySuccess: !1
                    })
                }
                setQueriesData(e, t, r) {
                    return G.batch((() => this.getQueryCache().findAll(e).map((({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, r)]))))
                }
                getQueryState(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state
                }
                removeQueries(e, t) {
                    const [r] = R(e, t), n = this.queryCache;
                    G.batch((() => {
                        n.findAll(r).forEach((e => {
                            n.remove(e)
                        }))
                    }))
                }
                resetQueries(e, t, r) {
                    const [n, i] = R(e, t, r), o = this.queryCache, s = {
                        type: "active",
                        ...n
                    };
                    return G.batch((() => (o.findAll(n).forEach((e => {
                        e.reset()
                    })), this.refetchQueries(s, i))))
                }
                cancelQueries(e, t, r) {
                    const [n, i = {}] = R(e, t, r);
                    "undefined" === typeof i.revert && (i.revert = !0);
                    const o = G.batch((() => this.queryCache.findAll(n).map((e => e.cancel(i)))));
                    return Promise.all(o).then(P).catch(P)
                }
                invalidateQueries(e, t, r) {
                    const [n, i] = R(e, t, r);
                    return G.batch((() => {
                        var e, t;
                        if (this.queryCache.findAll(n).forEach((e => {
                                e.invalidate()
                            })), "none" === n.refetchType) return Promise.resolve();
                        const r = { ...n,
                            type: null != (e = null != (t = n.refetchType) ? t : n.type) ? e : "active"
                        };
                        return this.refetchQueries(r, i)
                    }))
                }
                refetchQueries(e, t, r) {
                    const [n, i] = R(e, t, r), o = G.batch((() => this.queryCache.findAll(n).filter((e => !e.isDisabled())).map((e => {
                        var t;
                        return e.fetch(void 0, { ...i,
                            cancelRefetch: null == (t = null == i ? void 0 : i.cancelRefetch) || t,
                            meta: {
                                refetchPage: n.refetchPage
                            }
                        })
                    }))));
                    let s = Promise.all(o).then(P);
                    return null != i && i.throwOnError || (s = s.catch(P)), s
                }
                fetchQuery(e, t, r) {
                    const n = O(e, t, r),
                        i = this.defaultQueryOptions(n);
                    "undefined" === typeof i.retry && (i.retry = !1);
                    const o = this.queryCache.build(this, i);
                    return o.isStaleByTime(i.staleTime) ? o.fetch(i) : Promise.resolve(o.state.data)
                }
                prefetchQuery(e, t, r) {
                    return this.fetchQuery(e, t, r).then(P).catch(P)
                }
                fetchInfiniteQuery(e, t, r) {
                    const n = O(e, t, r);
                    return n.behavior = {
                        onFetch: e => {
                            e.fetchFn = () => {
                                var t, r, n, i, o, s, a;
                                const u = null == (t = e.fetchOptions) || null == (r = t.meta) ? void 0 : r.refetchPage,
                                    c = null == (n = e.fetchOptions) || null == (i = n.meta) ? void 0 : i.fetchMore,
                                    l = null == c ? void 0 : c.pageParam,
                                    h = "forward" === (null == c ? void 0 : c.direction),
                                    f = "backward" === (null == c ? void 0 : c.direction),
                                    d = (null == (o = e.state.data) ? void 0 : o.pages) || [],
                                    p = (null == (s = e.state.data) ? void 0 : s.pageParams) || [],
                                    m = K(),
                                    g = null == m ? void 0 : m.signal;
                                let y = p,
                                    v = !1;
                                const b = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
                                    w = (e, t, r, n) => (y = n ? [t, ...y] : [...y, t], n ? [r, ...e] : [...e, r]),
                                    E = (t, r, n, i) => {
                                        if (v) return Promise.reject("Cancelled");
                                        if ("undefined" === typeof n && !r && t.length) return Promise.resolve(t);
                                        const o = {
                                                queryKey: e.queryKey,
                                                signal: g,
                                                pageParam: n,
                                                meta: e.meta
                                            },
                                            s = b(o);
                                        return Promise.resolve(s).then((e => w(t, n, e, i)))
                                    };
                                let S;
                                if (d.length)
                                    if (h) {
                                        const t = "undefined" !== typeof l,
                                            r = t ? l : oe(e.options, d);
                                        S = E(d, t, r)
                                    } else if (f) {
                                    const t = "undefined" !== typeof l,
                                        r = t ? l : se(e.options, d);
                                    S = E(d, t, r, !0)
                                } else {
                                    y = [];
                                    const t = "undefined" === typeof e.options.getNextPageParam;
                                    S = u && d[0] && !u(d[0], 0, d) ? Promise.resolve(w([], p[0], d[0])) : E([], t, p[0]);
                                    for (let r = 1; r < d.length; r++) S = S.then((n => {
                                        if (!u || !d[r] || u(d[r], r, d)) {
                                            const i = t ? p[r] : oe(e.options, n);
                                            return E(n, t, i)
                                        }
                                        return Promise.resolve(w(n, p[r], d[r]))
                                    }))
                                } else S = E([]);
                                const k = S.then((e => ({
                                    pages: e,
                                    pageParams: y
                                })));
                                return null == (a = e.signal) || a.addEventListener("abort", (() => {
                                    v = !0, null == m || m.abort()
                                })), k
                            }
                        }
                    }, this.fetchQuery(n)
                }
                prefetchInfiniteQuery(e, t, r) {
                    return this.fetchInfiniteQuery(e, t, r).then(P).catch(P)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    const r = this.queryDefaults.find((t => M(e) === M(t.queryKey)));
                    r ? r.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    const t = this.queryDefaults.find((t => T(e, t.queryKey)));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    const r = this.mutationDefaults.find((t => M(e) === M(t.mutationKey)));
                    r ? r.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    const t = this.mutationDefaults.find((t => T(e, t.mutationKey)));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    const t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = I(t.queryKey, t)), "undefined" === typeof t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), "undefined" === typeof t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
            class ue extends H {
                constructor(e, t) {
                    super(), this.client = e, this.options = t, this.trackedProps = new Set, this.previousSelectError = null, this.bindMethods(), this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.length && (this.currentQuery.addObserver(this), ce(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.listeners.length || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return le(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return le(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    const r = this.options,
                        n = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(e), "undefined" !== typeof this.options.enabled && "boolean" !== typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                    const i = this.hasListeners();
                    i && he(this.currentQuery, n, this.options, r) && this.executeFetch(), this.updateResult(t), !i || this.currentQuery === n && this.options.enabled === r.enabled && this.options.staleTime === r.staleTime || this.updateStaleTimeout();
                    const o = this.computeRefetchInterval();
                    !i || this.currentQuery === n && this.options.enabled === r.enabled && o === this.currentRefetchInterval || this.updateRefetchInterval(o)
                }
                getOptimisticResult(e) {
                    const t = this.client.getQueryCache().build(this.client, e);
                    return this.createResult(t, e)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    const t = {};
                    return Object.keys(e).forEach((r => {
                        Object.defineProperty(t, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(r), e[r])
                        })
                    })), t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    const t = this.client.defaultQueryOptions(e),
                        r = this.client.getQueryCache().build(this.client, t);
                    return r.isFetchingOptimistic = !0, r.fetch().then((() => this.createResult(r, t)))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: null == (t = e.cancelRefetch) || t
                    }).then((() => (this.updateResult(), this.currentResult)))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    return null != e && e.throwOnError || (t = t.catch(P)), t
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), _ || this.currentResult.isStale || !A(this.options.staleTime)) return;
                    const e = x(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                    this.staleTimeoutId = setTimeout((() => {
                        this.currentResult.isStale || this.updateResult()
                    }), e)
                }
                computeRefetchInterval() {
                    var e;
                    return "function" === typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = e, !_ && !1 !== this.options.enabled && A(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((() => {
                        (this.options.refetchIntervalInBackground || V.isFocused()) && this.executeFetch()
                    }), this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0
                }
                clearRefetchInterval() {
                    clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0
                }
                createResult(e, t) {
                    const r = this.currentQuery,
                        n = this.options,
                        i = this.currentResult,
                        o = this.currentResultState,
                        s = this.currentResultOptions,
                        a = e !== r,
                        u = a ? e.state : this.currentQueryInitialState,
                        c = a ? this.currentResult : this.previousQueryResult,
                        {
                            state: l
                        } = e;
                    let h, {
                            dataUpdatedAt: f,
                            error: d,
                            errorUpdatedAt: p,
                            fetchStatus: m,
                            status: g
                        } = l,
                        y = !1,
                        v = !1;
                    if (t._optimisticResults) {
                        const i = this.hasListeners(),
                            o = !i && ce(e, t),
                            s = i && he(e, r, t, n);
                        (o || s) && (m = J(e.options.networkMode) ? "fetching" : "paused", f || (g = "loading")), "isRestoring" === t._optimisticResults && (m = "idle")
                    }
                    if (t.keepPreviousData && !l.dataUpdateCount && null != c && c.isSuccess && "error" !== g) h = c.data, f = c.dataUpdatedAt, g = c.status, y = !0;
                    else if (t.select && "undefined" !== typeof l.data) {
                        var b;
                        if (i && l.data === (null == o ? void 0 : o.data) && t.select === (null == (b = this.previousSelect) ? void 0 : b.fn) && !this.previousSelectError) h = this.previousSelect.result;
                        else try {
                            h = t.select(l.data), !1 !== t.structuralSharing && (h = B(null == i ? void 0 : i.data, h)), this.previousSelect = {
                                fn: t.select,
                                result: h
                            }, this.previousSelectError = null
                        } catch (E) {
                            0,
                            d = E,
                            this.previousSelectError = E,
                            p = Date.now(),
                            g = "error"
                        }
                    } else h = l.data;
                    if ("undefined" !== typeof t.placeholderData && "undefined" === typeof h && "loading" === g) {
                        let e;
                        if (null != i && i.isPlaceholderData && t.placeholderData === (null == s ? void 0 : s.placeholderData)) e = i.data;
                        else if (e = "function" === typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && "undefined" !== typeof e) try {
                            e = t.select(e), !1 !== t.structuralSharing && (e = B(null == i ? void 0 : i.data, e)), this.previousSelectError = null
                        } catch (E) {
                            0,
                            d = E,
                            this.previousSelectError = E,
                            p = Date.now(),
                            g = "error"
                        }
                        "undefined" !== typeof e && (g = "success", h = e, v = !0)
                    }
                    const w = "fetching" === m;
                    return {
                        status: g,
                        fetchStatus: m,
                        isLoading: "loading" === g,
                        isSuccess: "success" === g,
                        isError: "error" === g,
                        data: h,
                        dataUpdatedAt: f,
                        error: d,
                        errorUpdatedAt: p,
                        failureCount: l.fetchFailureCount,
                        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
                        isFetchedAfterMount: l.dataUpdateCount > u.dataUpdateCount || l.errorUpdateCount > u.errorUpdateCount,
                        isFetching: w,
                        isRefetching: w && "loading" !== g,
                        isLoadingError: "error" === g && 0 === l.dataUpdatedAt,
                        isPaused: "paused" === m,
                        isPlaceholderData: v,
                        isPreviousData: y,
                        isRefetchError: "error" === g && 0 !== l.dataUpdatedAt,
                        isStale: fe(e, t),
                        refetch: this.refetch,
                        remove: this.remove
                    }
                }
                updateResult(e) {
                    const t = this.currentResult,
                        r = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, function(e, t) {
                            if (e && !t || t && !e) return !1;
                            for (const r in e)
                                if (e[r] !== t[r]) return !1;
                            return !0
                        }(r, t)) return;
                    this.currentResult = r;
                    const n = {
                        cache: !0
                    };
                    !1 !== (null == e ? void 0 : e.listeners) && (() => {
                        if (!t) return !0;
                        const {
                            notifyOnChangeProps: e
                        } = this.options;
                        if ("all" === e || !e && !this.trackedProps.size) return !0;
                        const r = new Set(null != e ? e : this.trackedProps);
                        return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some((e => {
                            const n = e;
                            return this.currentResult[n] !== t[n] && r.has(n)
                        }))
                    })() && (n.listeners = !0), this.notify({ ...n,
                        ...e
                    })
                }
                updateQuery() {
                    const e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) return;
                    const t = this.currentQuery;
                    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                }
                onQueryUpdate(e) {
                    const t = {};
                    var r;
                    "success" === e.type ? t.onSuccess = null == (r = e.notifySuccess) || r : "error" !== e.type || Z(e.error) || (t.onError = !0);
                    this.updateResult(t), this.hasListeners() && this.updateTimers()
                }
                notify(e) {
                    G.batch((() => {
                        var t, r, n, i;
                        if (e.onSuccess) null == (t = (r = this.options).onSuccess) || t.call(r, this.currentResult.data), null == (n = (i = this.options).onSettled) || n.call(i, this.currentResult.data, null);
                        else if (e.onError) {
                            var o, s, a, u;
                            null == (o = (s = this.options).onError) || o.call(s, this.currentResult.error), null == (a = (u = this.options).onSettled) || a.call(u, void 0, this.currentResult.error)
                        }
                        e.listeners && this.listeners.forEach((e => {
                            e(this.currentResult)
                        })), e.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    }))
                }
            }

            function ce(e, t) {
                return function(e, t) {
                    return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount)
                }(e, t) || e.state.dataUpdatedAt > 0 && le(e, t, t.refetchOnMount)
            }

            function le(e, t, r) {
                if (!1 !== t.enabled) {
                    const n = "function" === typeof r ? r(e) : r;
                    return "always" === n || !1 !== n && fe(e, t)
                }
                return !1
            }

            function he(e, t, r, n) {
                return !1 !== r.enabled && (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && fe(e, r)
            }

            function fe(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
            const de = r(28316).unstable_batchedUpdates;
            G.setBatchNotifyFunction(de);
            const pe = n.createContext(void 0),
                me = n.createContext(!1);

            function ge(e, t) {
                return e || (t && "undefined" !== typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = pe), window.ReactQueryClientContext) : pe)
            }
            const ye = ({
                    context: e
                } = {}) => {
                    const t = n.useContext(ge(e, n.useContext(me)));
                    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                ve = ({
                    client: e,
                    children: t,
                    context: r,
                    contextSharing: i = !1
                }) => {
                    n.useEffect((() => (e.mount(), () => {
                        e.unmount()
                    })), [e]);
                    const o = ge(r, i);
                    return n.createElement(me.Provider, {
                        value: !r && i
                    }, n.createElement(o.Provider, {
                        value: e
                    }, t))
                };

            function be() {
                let e = !1;
                return {
                    clearReset: () => {
                        e = !1
                    },
                    reset: () => {
                        e = !0
                    },
                    isReset: () => e
                }
            }
            const we = n.createContext(be());
            var Ee = r(43100);
            class Se extends H {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    this.options = this.client.defaultMutationOptions(e)
                }
                onUnsubscribe() {
                    var e;
                    this.listeners.length || (null == (e = this.currentMutation) || e.removeObserver(this))
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    const t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: "undefined" !== typeof e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    const e = this.currentMutation ? this.currentMutation.state : {
                            context: void 0,
                            data: void 0,
                            error: null,
                            failureCount: 0,
                            isPaused: !1,
                            status: "idle",
                            variables: void 0
                        },
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    G.batch((() => {
                        var t, r, n, i;
                        if (this.mutateOptions)
                            if (e.onSuccess) null == (t = (r = this.mutateOptions).onSuccess) || t.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (i = this.mutateOptions).onSettled) || n.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
                            else if (e.onError) {
                            var o, s, a, u;
                            null == (o = (s = this.mutateOptions).onError) || o.call(s, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (a = (u = this.mutateOptions).onSettled) || a.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context)
                        }
                        e.listeners && this.listeners.forEach((e => {
                            e(this.currentResult)
                        }))
                    }))
                }
            }

            function ke(e, t, r) {
                const i = function(e, t, r) {
                        return D(e) ? "function" === typeof t ? { ...r,
                            mutationKey: e,
                            mutationFn: t
                        } : { ...t,
                            mutationKey: e
                        } : "function" === typeof e ? { ...t,
                            mutationFn: e
                        } : { ...e
                        }
                    }(e, t, r),
                    o = ye({
                        context: i.context
                    }),
                    [s] = n.useState((() => new Se(o, i)));
                n.useEffect((() => {
                    s.setOptions(i)
                }), [s, i]);
                const a = (0, Ee.useSyncExternalStore)(n.useCallback((e => s.subscribe(G.batchCalls(e))), [s]), (() => s.getCurrentResult()), (() => s.getCurrentResult())),
                    u = n.useCallback(((e, t) => {
                        s.mutate(e, t).catch(P)
                    }), [s]);
                if (a.error && (c = s.options.useErrorBoundary, l = [a.error], "function" === typeof c ? c(...l) : c)) throw a.error;
                var c, l;
                return { ...a,
                    mutate: u,
                    mutateAsync: a.mutate
                }
            }
            const _e = n.createContext(!1);
            _e.Provider;

            function Pe(e) {
                return e.state.isPaused
            }

            function Ae(e) {
                return "success" === e.state.status
            }

            function xe(e, t = {}) {
                const r = [],
                    n = [];
                if (!1 !== t.dehydrateMutations) {
                    const n = t.shouldDehydrateMutation || Pe;
                    e.getMutationCache().getAll().forEach((e => {
                        n(e) && r.push(function(e) {
                            return {
                                mutationKey: e.options.mutationKey,
                                state: e.state
                            }
                        }(e))
                    }))
                }
                if (!1 !== t.dehydrateQueries) {
                    const r = t.shouldDehydrateQuery || Ae;
                    e.getQueryCache().getAll().forEach((e => {
                        r(e) && n.push(function(e) {
                            return {
                                state: e.state,
                                queryKey: e.queryKey,
                                queryHash: e.queryHash
                            }
                        }(e))
                    }))
                }
                return {
                    mutations: r,
                    queries: n
                }
            }
            async function Oe({
                queryClient: e,
                persister: t,
                buster: r = "",
                dehydrateOptions: n
            }) {
                if ("undefined" !== typeof window) {
                    const i = {
                        buster: r,
                        timestamp: Date.now(),
                        clientState: xe(e, n)
                    };
                    await t.persistClient(i)
                }
            }

            function Re(e) {
                let t, r = !1;
                let n = Promise.resolve();
                return "undefined" !== typeof window && (n = async function({
                    queryClient: e,
                    persister: t,
                    maxAge: r = 864e5,
                    buster: n = "",
                    hydrateOptions: i
                }) {
                    if ("undefined" !== typeof window) try {
                        const o = await t.restoreClient();
                        if (o)
                            if (o.timestamp) {
                                const s = Date.now() - o.timestamp > r,
                                    a = o.buster !== n;
                                s || a ? t.removeClient() : function(e, t, r) {
                                    if ("object" !== typeof t || null === t) return;
                                    const n = e.getMutationCache(),
                                        i = e.getQueryCache(),
                                        o = t.mutations || [],
                                        s = t.queries || [];
                                    o.forEach((t => {
                                        var i;
                                        n.build(e, { ...null == r || null == (i = r.defaultOptions) ? void 0 : i.mutations,
                                            mutationKey: t.mutationKey
                                        }, t.state)
                                    })), s.forEach((t => {
                                        var n;
                                        const o = i.get(t.queryHash);
                                        o ? o.state.dataUpdatedAt < t.state.dataUpdatedAt && o.setState(t.state) : i.build(e, { ...null == r || null == (n = r.defaultOptions) ? void 0 : n.queries,
                                            queryKey: t.queryKey,
                                            queryHash: t.queryHash
                                        }, t.state)
                                    }))
                                }(e, o.clientState, i)
                            } else t.removeClient()
                    } catch (o) {
                        t.removeClient()
                    }
                }(e).then((() => {
                    r || (t = function(e) {
                        const t = e.queryClient.getQueryCache().subscribe((() => {
                                Oe(e)
                            })),
                            r = e.queryClient.getMutationCache().subscribe((() => {
                                Oe(e)
                            }));
                        return () => {
                            t(), r()
                        }
                    }(e))
                }))), [() => {
                    r = !0, null == t || t()
                }, n]
            }

            function Ce({
                storage: e,
                key: t = "REACT_QUERY_OFFLINE_CACHE",
                throttleTime: r = 1e3,
                serialize: n = JSON.stringify,
                deserialize: i = JSON.parse
            }) {
                function o(r) {
                    try {
                        e.setItem(t, n(r))
                    } catch {
                        return !1
                    }
                    return !0
                }
                return "undefined" !== typeof e ? {
                    persistClient: Ne((e => {
                        if (!0 !== o(e)) {
                            const t = [...e.clientState.mutations],
                                r = [...e.clientState.queries],
                                n = { ...e,
                                    clientState: {
                                        mutations: t,
                                        queries: r
                                    }
                                },
                                i = [...r].sort(((e, t) => e.state.dataUpdatedAt - t.state.dataUpdatedAt));
                            for (; i.length > 0;) {
                                const e = i.shift();
                                if (n.clientState.queries = r.filter((t => t !== e)), o(n)) return
                            }
                            for (; t.shift();)
                                if (o(n)) return
                        }
                    }), r),
                    restoreClient: () => {
                        const r = e.getItem(t);
                        if (r) return i(r)
                    },
                    removeClient: () => {
                        e.removeItem(t)
                    }
                } : {
                    persistClient: P,
                    restoreClient: P,
                    removeClient: P
                }
            }

            function Ne(e, t = 100) {
                let r, n = null;
                return function(...i) {
                    r = i, null === n && (n = setTimeout((() => {
                        e(...r), n = null
                    }), t))
                }
            }
            const Ie = (e, t) => {
                let {
                    find: r,
                    replace: n
                } = t;
                return e && r(e) ? n(e) : "object" !== typeof e ? e : Array.isArray(e) ? e.map((e => Ie(e, {
                    find: r,
                    replace: n
                }))) : e instanceof Object ? Object.entries(e).reduce(((e, t) => {
                    let [i, o] = t;
                    return { ...e,
                        [i]: Ie(o, {
                            find: r,
                            replace: n
                        })
                    }
                }), {}) : e
            };

            function Me(e) {
                const t = JSON.parse(e);
                return Ie(t, {
                    find: e => "BigNumber" === e.type,
                    replace: e => s.BigNumber.from(e.hex)
                })
            }

            function Te(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function Le(e, t) {
                const {
                    length: r
                } = e;
                for (let n = 0; n < r; ++n)
                    if (e[n] === t) return n + 1;
                return 0
            }

            function Be(e, t, r, n) {
                return JSON.stringify(e, function(e, t) {
                    const r = "function" === typeof e,
                        n = "function" === typeof t,
                        i = [],
                        o = [];
                    return function(s, a) {
                        if ("object" === typeof a)
                            if (i.length) {
                                const e = Le(i, this);
                                0 === e ? i[i.length] = this : (i.splice(e), o.splice(e)), o[o.length] = s;
                                const r = Le(i, a);
                                if (0 !== r) return n ? t.call(this, s, a, Te(o, r)) : "[ref=".concat(Te(o, r), "]")
                            } else i[0] = a, o[0] = s;
                        return r ? e.call(this, s, a) : a
                    }
                }(t, n), null !== r && void 0 !== r ? r : void 0)
            }
            const Fe = n.createContext(void 0);

            function Ue() {
                let {
                    queryClient: e = new ae({
                        defaultOptions: {
                            queries: {
                                cacheTime: 864e5,
                                networkMode: "offlineFirst",
                                refetchOnWindowFocus: !1,
                                retry: 0
                            },
                            mutations: {
                                networkMode: "offlineFirst"
                            }
                        }
                    }),
                    persister: t = ("undefined" !== typeof window ? Ce({
                        key: "wagmi.cache",
                        storage: window.localStorage,
                        serialize: Be,
                        deserialize: Me
                    }) : void 0),
                    ...r
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const n = (0, i.a)(r);
                return t && Re({
                    queryClient: e,
                    persister: t,
                    dehydrateOptions: {
                        shouldDehydrateQuery: e => 0 !== e.cacheTime
                    }
                }), Object.assign(n, {
                    queryClient: e
                })
            }

            function De(e) {
                let {
                    children: t,
                    client: r = Ue()
                } = e;
                return n.useEffect((() => {
                    (async () => {
                        r.config.autoConnect && await r.autoConnect()
                    })()
                }), []), n.createElement(Fe.Provider, {
                    value: r
                }, n.createElement(ve, {
                    client: r.queryClient
                }, t))
            }

            function je() {
                const e = n.useContext(Fe);
                if (!e) throw Error("Must be used within WagmiProvider");
                return e
            }

            function qe() {
                let {
                    chainId: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = Ge(),
                    r = je(),
                    i = n.useRef(l({
                        chainId: e
                    }));
                return n.useEffect((() => f({
                    chainId: e
                }, (e => {
                    i.current = e, t()
                }))), [e, r, t]), i.current
            }

            function Ke() {
                let {
                    chainId: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = Ge(),
                    r = je(),
                    i = n.useRef(h({
                        chainId: e
                    }));
                return n.useEffect((() => d({
                    chainId: e
                }, (e => {
                    i.current = e, t()
                }))), [e, r, t]), i.current
            }

            function ze() {
                let {
                    chainId: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = qe({
                    chainId: e
                });
                return t.network.chainId
            }

            function Ge() {
                const [, e] = n.useReducer((e => e + 1), 0);
                return e
            }

            function He(e, t, r) {
                const i = {
                        queryKey: e,
                        queryFn: t,
                        ...r
                    },
                    o = ye({
                        context: i.context
                    }),
                    s = n.useContext(_e),
                    a = n.useContext(we),
                    u = o.defaultQueryOptions(i);
                u._optimisticResults = s ? "isRestoring" : "optimistic", u.onError && (u.onError = G.batchCalls(u.onError)), u.onSuccess && (u.onSuccess = G.batchCalls(u.onSuccess)), u.onSettled && (u.onSettled = G.batchCalls(u.onSettled)), u.suspense && "number" !== typeof u.staleTime && (u.staleTime = 1e3), (u.suspense || u.useErrorBoundary) && (a.isReset() || (u.retryOnMount = !1));
                const [c] = n.useState((() => new ue(o, u))), {
                    data: l,
                    dataUpdatedAt: h,
                    error: f,
                    errorUpdatedAt: d,
                    failureCount: p,
                    fetchStatus: m,
                    isError: g,
                    isFetched: y,
                    isFetchedAfterMount: v,
                    isFetching: b,
                    isLoading: w,
                    isLoadingError: E,
                    isPaused: S,
                    isPlaceholderData: k,
                    isPreviousData: _,
                    isRefetchError: P,
                    isRefetching: A,
                    isStale: x,
                    isSuccess: O,
                    refetch: R,
                    remove: C,
                    status: N
                } = c.getOptimisticResult(u);
                if ((0, Ee.useSyncExternalStore)(n.useCallback((e => s ? () => {} : c.subscribe(G.batchCalls(e))), [c, s]), (() => c.getCurrentResult()), (() => c.getCurrentResult())), n.useEffect((() => {
                        a.clearReset()
                    }), [a]), n.useEffect((() => {
                        c.setOptions(u, {
                            listeners: !1
                        })
                    }), [u, c]), u.suspense && w && b && !s) throw c.fetchOptimistic(u).then((e => {
                    var t, r;
                    let {
                        data: n
                    } = e;
                    null === (t = u.onSuccess) || void 0 === t || t.call(u, n), null === (r = u.onSettled) || void 0 === r || r.call(u, n, null)
                })).catch((e => {
                    var t, r;
                    a.clearReset(), null === (t = u.onError) || void 0 === t || t.call(u, e), null === (r = u.onSettled) || void 0 === r || r.call(u, void 0, e)
                }));
                if (g && !a.isReset() && !b && function(e, t) {
                        if ("function" === typeof e) return e(...t);
                        return !!e
                    }(u.useErrorBoundary, [f, c.getCurrentQuery()])) throw f;
                const I = "loading" === N && "idle" === m ? "idle" : N,
                    M = {
                        data: l,
                        error: f,
                        fetchStatus: m,
                        isError: g,
                        isFetched: y,
                        isFetching: b,
                        isIdle: "idle" === I,
                        isLoading: "loading" === I && "fetching" === m,
                        isRefetching: A,
                        isSuccess: O,
                        refetch: R,
                        status: I,
                        internal: {
                            dataUpdatedAt: h,
                            errorUpdatedAt: d,
                            failureCount: p,
                            isFetchedAfterMount: v,
                            isLoadingError: E,
                            isPaused: S,
                            isPlaceholderData: k,
                            isPreviousData: _,
                            isRefetchError: P,
                            isStale: x,
                            remove: C
                        }
                    };
                return u.notifyOnChangeProps ? M : function(e, t) {
                    const r = {};
                    return Object.keys(e).forEach((n => {
                        Object.defineProperty(r, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (t.trackedProps.add(n), e[n])
                        })
                    })), r
                }(M, c)
            }
            const Ve = () => {
                const e = m();
                return e.address ? e : null
            };

            function $e() {
                let {
                    suspense: e,
                    onError: t,
                    onSettled: r,
                    onSuccess: i
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const o = ye(),
                    s = He([{
                        entity: "account"
                    }], Ve, {
                        staleTime: 0,
                        suspense: e,
                        onError: t,
                        onSettled: r,
                        onSuccess: i
                    });
                return n.useEffect((() => y((e => {
                    o.setQueryData([{
                        entity: "account"
                    }], null !== e && void 0 !== e && e.address ? e : null)
                }))), [o]), s
            }
            const We = e => {
                    let {
                        chainId: t
                    } = e;
                    return [{
                        entity: "blockNumber",
                        chainId: t
                    }]
                },
                Je = e => {
                    let {
                        queryKey: [{
                            chainId: t
                        }]
                    } = e;
                    return E({
                        chainId: t
                    })
                };

            function Qe() {
                let {
                    cacheTime: e = 0,
                    chainId: t,
                    enabled: r = !0,
                    staleTime: i,
                    suspense: o,
                    watch: s = !1,
                    onError: a,
                    onSettled: u,
                    onSuccess: c
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const l = ze({
                        chainId: t
                    }),
                    h = qe(),
                    f = Ke(),
                    d = ye();
                return n.useEffect((() => {
                    if (!s) return;
                    const e = e => {
                            d.setQueryData(We({
                                chainId: l
                            }), e)
                        },
                        t = null !== f && void 0 !== f ? f : h;
                    return t.on("block", e), () => {
                        t.off("block", e)
                    }
                }), [l, h, d, s, f]), He(We({
                    chainId: l
                }), Je, {
                    cacheTime: e,
                    enabled: r,
                    staleTime: i,
                    suspense: o,
                    onError: a,
                    onSettled: u,
                    onSuccess: c
                })
            }
            const Ze = e => {
                    let {
                        addressOrName: t,
                        chainId: r,
                        formatUnits: n,
                        token: i
                    } = e;
                    return [{
                        entity: "balance",
                        addressOrName: t,
                        chainId: r,
                        formatUnits: n,
                        token: i
                    }]
                },
                Xe = e => {
                    let {
                        queryKey: [{
                            addressOrName: t,
                            chainId: r,
                            formatUnits: n,
                            token: u
                        }]
                    } = e;
                    if (!t) throw new Error("address is required");
                    return async function(e) {
                        var t, r, n, u, h, f;
                        let {
                            addressOrName: d,
                            chainId: p,
                            formatUnits: m = "ether",
                            token: g
                        } = e;
                        const y = (0, i.g)(),
                            v = l({
                                chainId: p
                            });
                        if (g) {
                            const e = new s.Contract(g, c, v),
                                [t, r, n] = await Promise.all([e.balanceOf(d), e.decimals(), e.symbol()]);
                            return {
                                decimals: r,
                                formatted: (0, a.formatUnits)(t, m),
                                symbol: n,
                                unit: m,
                                value: t
                            }
                        }
                        const b = [...null !== (t = null === (r = y.connector) || void 0 === r ? void 0 : r.chains) && void 0 !== t ? t : [], ...o.a],
                            w = await v.getBalance(d),
                            E = b.find((e => e.id === v.network.chainId));
                        return {
                            decimals: null !== (n = null === E || void 0 === E || null === (u = E.nativeCurrency) || void 0 === u ? void 0 : u.decimals) && void 0 !== n ? n : 18,
                            formatted: (0, a.formatUnits)(w, m),
                            symbol: null !== (h = null === E || void 0 === E || null === (f = E.nativeCurrency) || void 0 === f ? void 0 : f.symbol) && void 0 !== h ? h : "ETH",
                            unit: m,
                            value: w
                        }
                    }({
                        addressOrName: t,
                        chainId: r,
                        formatUnits: n,
                        token: u
                    })
                };

            function Ye() {
                let {
                    addressOrName: e,
                    cacheTime: t,
                    chainId: r,
                    enabled: i = !0,
                    formatUnits: o = "ether",
                    staleTime: s,
                    suspense: a,
                    token: u,
                    watch: c,
                    onError: l,
                    onSettled: h,
                    onSuccess: f
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const d = ze({
                        chainId: r
                    }),
                    p = He(Ze({
                        addressOrName: e,
                        chainId: d,
                        formatUnits: o,
                        token: u
                    }), Xe, {
                        cacheTime: t,
                        enabled: Boolean(i && e),
                        staleTime: s,
                        suspense: a,
                        onError: l,
                        onSettled: h,
                        onSuccess: f
                    }),
                    {
                        data: m
                    } = Qe({
                        watch: c
                    });
                return n.useEffect((() => {
                    i && c && m && e && p.refetch()
                }), [m]), p
            }
            const et = e => [{
                    entity: "connect",
                    ...e
                }],
                tt = e => {
                    const {
                        connector: t
                    } = e;
                    if (!t) throw new Error("connector is required");
                    return async function(e) {
                        let {
                            connector: t
                        } = e;
                        const r = i.c.connector;
                        if (t.id === (null === r || void 0 === r ? void 0 : r.id)) throw new o.C;
                        const n = await t.connect();
                        return i.c.setLastUsedConnector(t.id), i.c.setState((e => ({ ...e,
                            connector: t,
                            chains: null === t || void 0 === t ? void 0 : t.chains,
                            data: n
                        }))), i.c.storage.setItem("connected", !0), { ...n,
                            connector: t
                        }
                    }({
                        connector: t
                    })
                };

            function rt() {
                let {
                    connector: e,
                    onBeforeConnect: t,
                    onConnect: r,
                    onError: i,
                    onSettled: o
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const s = Ge(),
                    a = je(),
                    {
                        data: u,
                        error: c,
                        mutate: l,
                        mutateAsync: h,
                        reset: f,
                        status: d,
                        variables: p
                    } = ke(et({
                        connector: e
                    }), tt, {
                        onError: i,
                        onMutate: t,
                        onSettled: o,
                        onSuccess: r
                    });
                n.useEffect((() => a.subscribe((e => ({
                    connector: e.connector,
                    connectors: e.connectors,
                    status: e.status
                })), s, {
                    equalityFn: (e, t) => e.connector === t.connector && e.connectors === t.connectors && e.status === t.status
                })), [a, s]);
                const m = n.useCallback((t => l({
                        connector: null !== t && void 0 !== t ? t : e
                    })), [e, l]),
                    g = n.useCallback((t => h({
                        connector: null !== t && void 0 !== t ? t : e
                    })), [e, h]);
                let y;
                return y = "reconnecting" === a.status ? "reconnecting" : "loading" === d || "connecting" === a.status ? "connecting" : a.connector ? "connected" : a.connector && "success" !== d ? d : "disconnected", {
                    activeConnector: a.connector,
                    connect: m,
                    connectAsync: g,
                    connectors: a.connectors,
                    data: u,
                    error: c,
                    isConnected: "connected" === y,
                    isConnecting: "connecting" === y,
                    isDisconnected: "disconnected" === y,
                    isError: "error" === d,
                    isIdle: "idle" === y,
                    isReconnecting: "reconnecting" === y,
                    pendingConnector: null === p || void 0 === p ? void 0 : p.connector,
                    reset: f,
                    status: y
                }
            }
            const nt = [{
                    entity: "disconnect"
                }],
                it = () => async function() {
                    const e = (0, i.g)();
                    e.connector && await e.connector.disconnect(), e.clearState(), e.storage.removeItem("connected")
                }();

            function ot() {
                let {
                    onError: e,
                    onMutate: t,
                    onSettled: r,
                    onSuccess: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const i = ye(),
                    {
                        error: o,
                        isError: s,
                        isIdle: a,
                        isLoading: u,
                        isSuccess: c,
                        mutate: l,
                        mutateAsync: h,
                        reset: f,
                        status: d
                    } = ke(nt, it, { ...e ? {
                            onError(t, r, n) {
                                e(t, n)
                            }
                        } : {},
                        onMutate: t,
                        ...r ? {
                            onSettled(e, t, n, i) {
                                r(t, i)
                            }
                        } : {},
                        onSuccess(e, t, r) {
                            i.removeQueries([{
                                entity: "account"
                            }]), null === n || void 0 === n || n(r)
                        }
                    });
                return {
                    disconnect: l,
                    disconnectAsync: h,
                    error: o,
                    isError: s,
                    isIdle: a,
                    isLoading: u,
                    isSuccess: c,
                    reset: f,
                    status: d
                }
            }
            const st = e => [{
                    entity: "switchNetwork",
                    ...e
                }],
                at = e => {
                    const {
                        chainId: t
                    } = e;
                    if (!t) throw new Error("chainId is required");
                    return async function(e) {
                        var t;
                        let {
                            chainId: r
                        } = e;
                        const n = (0, i.g)();
                        if (null === (t = n.connector) || void 0 === t || !t.switchChain) throw new o.S;
                        return await n.connector.switchChain(r)
                    }({
                        chainId: t
                    })
                };

            function ut() {
                var e;
                let {
                    chainId: t,
                    onError: r,
                    onMutate: i,
                    onSettled: o,
                    onSuccess: s
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const a = Ge(),
                    u = n.useRef(g()),
                    c = je(),
                    l = ye(),
                    h = c.connector,
                    {
                        data: f,
                        error: d,
                        isError: p,
                        isIdle: m,
                        isLoading: y,
                        isSuccess: b,
                        mutate: w,
                        mutateAsync: E,
                        reset: S,
                        status: k,
                        variables: _
                    } = ke(st({
                        chainId: t
                    }), at, {
                        onError: r,
                        onMutate: i,
                        onSettled: o,
                        onSuccess: s
                    });
                n.useEffect((() => {
                    const e = v((e => {
                        u.current = e, a()
                    }));
                    return e
                }), [a, l]);
                const P = n.useCallback((e => w({
                        chainId: null !== e && void 0 !== e ? e : t
                    })), [t, w]),
                    A = n.useCallback((e => E({
                        chainId: null !== e && void 0 !== e ? e : t
                    })), [t, E]);
                return {
                    activeChain: u.current.chain,
                    chains: null !== (e = u.current.chains) && void 0 !== e ? e : [],
                    data: f,
                    error: d,
                    isError: p,
                    isIdle: m,
                    isLoading: y,
                    isSuccess: b,
                    pendingChainId: null === _ || void 0 === _ ? void 0 : _.chainId,
                    reset: S,
                    status: k,
                    switchNetwork: null !== h && void 0 !== h && h.switchChain ? P : void 0,
                    switchNetworkAsync: null !== h && void 0 !== h && h.switchChain ? A : void 0,
                    variables: _
                }
            }
            const ct = e => [{
                    entity: "signMessage",
                    ...e
                }],
                lt = e => {
                    const {
                        message: t
                    } = e;
                    if (!t) throw new Error("message is required");
                    return async function(e) {
                        try {
                            const t = await p();
                            if (!t) throw new o.b;
                            return await t.signMessage(e.message)
                        } catch (t) {
                            let e = t;
                            throw 4001 === t.code && (e = new o.U), e
                        }
                    }({
                        message: t
                    })
                };

            function ht() {
                let {
                    message: e,
                    onError: t,
                    onMutate: r,
                    onSettled: i,
                    onSuccess: o
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {
                    data: s,
                    error: a,
                    isError: u,
                    isIdle: c,
                    isLoading: l,
                    isSuccess: h,
                    mutate: f,
                    mutateAsync: d,
                    reset: p,
                    status: m,
                    variables: g
                } = ke(ct({
                    message: e
                }), lt, {
                    onError: t,
                    onMutate: r,
                    onSettled: i,
                    onSuccess: o
                }), y = n.useCallback((t => f(t || {
                    message: e
                })), [e, f]), v = n.useCallback((t => d(t || {
                    message: e
                })), [e, d]);
                return {
                    data: s,
                    error: a,
                    isError: u,
                    isIdle: c,
                    isLoading: l,
                    isSuccess: h,
                    reset: p,
                    signMessage: y,
                    signMessageAsync: v,
                    status: m,
                    variables: g
                }
            }
            const ft = e => {
                    let [t, r, {
                        args: n,
                        chainId: i,
                        overrides: o
                    }, {
                        blockNumber: s
                    }] = e;
                    return [{
                        entity: "readContract",
                        args: n,
                        blockNumber: s,
                        chainId: i,
                        contractConfig: t,
                        functionName: r,
                        overrides: o
                    }]
                },
                dt = e => {
                    let {
                        queryKey: [{
                            args: t,
                            chainId: r,
                            contractConfig: n,
                            functionName: i,
                            overrides: o
                        }]
                    } = e;
                    return w(n, i, {
                        args: t,
                        chainId: r,
                        overrides: o
                    })
                };

            function pt(e, t) {
                let {
                    args: r,
                    chainId: i,
                    overrides: o,
                    cacheOnBlock: s = !1,
                    cacheTime: a,
                    enabled: u = !0,
                    staleTime: c,
                    suspense: l,
                    watch: h,
                    onError: f,
                    onSettled: d,
                    onSuccess: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const m = ze({
                        chainId: i
                    }),
                    {
                        data: g
                    } = Qe({
                        enabled: h || s,
                        watch: h
                    }),
                    y = n.useMemo((() => ft([e, t, {
                        args: r,
                        chainId: m,
                        overrides: o
                    }, {
                        blockNumber: s ? g : void 0
                    }])), [r, g, s, m, e, t, o]),
                    v = n.useMemo((() => {
                        let r = Boolean(u && e && t);
                        return s && (r = Boolean(r && g)), r
                    }), [g, s, e, u, t]),
                    b = ye();
                return n.useEffect((() => {
                    if (v) {
                        return k(e, t, {
                            args: r,
                            chainId: m,
                            overrides: o,
                            listenToBlock: h && !s
                        }, (e => b.setQueryData(y, e)))
                    }
                }), [r, s, m, b, e, v, t, o, y, h]), He(y, dt, {
                    cacheTime: a,
                    enabled: v,
                    staleTime: c,
                    suspense: l,
                    onError: f,
                    onSettled: d,
                    onSuccess: p
                })
            }
            const mt = e => {
                    let {
                        addressOrName: t,
                        chainId: r
                    } = e;
                    return [{
                        entity: "ensAvatar",
                        addressOrName: t,
                        chainId: r
                    }]
                },
                gt = e => {
                    let {
                        queryKey: [{
                            addressOrName: t,
                            chainId: r
                        }]
                    } = e;
                    if (!t) throw new Error("addressOrName is required");
                    return async function(e) {
                        let {
                            addressOrName: t,
                            chainId: r
                        } = e;
                        const n = l({
                            chainId: r
                        });
                        return await n.getAvatar(t)
                    }({
                        addressOrName: t,
                        chainId: r
                    })
                };

            function yt() {
                let {
                    addressOrName: e,
                    cacheTime: t,
                    chainId: r,
                    enabled: n = !0,
                    staleTime: i = 864e5,
                    suspense: o,
                    onError: s,
                    onSettled: a,
                    onSuccess: u
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const c = ze({
                    chainId: r
                });
                return He(mt({
                    addressOrName: e,
                    chainId: c
                }), gt, {
                    cacheTime: t,
                    enabled: Boolean(n && e && c),
                    staleTime: i,
                    suspense: o,
                    onError: s,
                    onSettled: a,
                    onSuccess: u
                })
            }
            const vt = e => {
                    let {
                        address: t,
                        chainId: r
                    } = e;
                    return [{
                        entity: "ensName",
                        address: t,
                        chainId: r
                    }]
                },
                bt = e => {
                    let {
                        queryKey: [{
                            address: t
                        }]
                    } = e;
                    if (!t) throw new Error("address is required");
                    return async function(e) {
                        let {
                            address: t,
                            chainId: r
                        } = e;
                        const n = l({
                            chainId: r
                        });
                        return await n.lookupAddress(t)
                    }({
                        address: t
                    })
                };

            function wt() {
                let {
                    address: e,
                    cacheTime: t,
                    chainId: r,
                    enabled: n = !0,
                    staleTime: i = 864e5,
                    suspense: o,
                    onError: s,
                    onSettled: a,
                    onSuccess: u
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const c = ze({
                    chainId: r
                });
                return He(vt({
                    address: e,
                    chainId: c
                }), bt, {
                    cacheTime: t,
                    enabled: Boolean(n && e && c),
                    staleTime: i,
                    suspense: o,
                    onError: s,
                    onSettled: a,
                    onSuccess: u
                })
            }
        }
    }
]);