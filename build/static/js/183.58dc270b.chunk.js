"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [183],
  {
    10183: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return I;
        },
      });
      var n = a(4942),
        c = a(29439),
        o = a(81694),
        i = a.n(o),
        r = a(72791),
        l = a(71929),
        s = a(41818),
        d = function (t) {
          var e,
            a,
            c = t.prefixCls,
            o = t.className,
            l = t.style,
            s = t.size,
            d = t.shape,
            g = i()(
              ((e = {}),
              (0, n.Z)(e, "".concat(c, "-lg"), "large" === s),
              (0, n.Z)(e, "".concat(c, "-sm"), "small" === s),
              e),
            ),
            u = i()(
              ((a = {}),
              (0, n.Z)(a, "".concat(c, "-circle"), "circle" === d),
              (0, n.Z)(a, "".concat(c, "-square"), "square" === d),
              (0, n.Z)(a, "".concat(c, "-round"), "round" === d),
              a),
            ),
            m = r.useMemo(
              function () {
                return "number" === typeof s
                  ? { width: s, height: s, lineHeight: "".concat(s, "px") }
                  : {};
              },
              [s],
            );
          return r.createElement("span", {
            className: i()(c, g, u, o),
            style: Object.assign(Object.assign({}, m), l),
          });
        },
        g = a(55586),
        u = a(96562),
        m = a(89922),
        b = new g.E4("ant-skeleton-loading", {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        }),
        h = function (t) {
          return { height: t, lineHeight: (0, g.bf)(t) };
        },
        v = function (t) {
          return Object.assign({ width: t }, h(t));
        },
        f = function (t, e) {
          return Object.assign(
            { width: e(t).mul(5).equal(), minWidth: e(t).mul(5).equal() },
            h(t),
          );
        },
        p = function (t) {
          return Object.assign({ width: t }, h(t));
        },
        C = function (t, e, a) {
          var c,
            o = t.skeletonButtonCls;
          return (
            (c = {}),
            (0, n.Z)(c, "".concat(a).concat(o, "-circle"), {
              width: e,
              minWidth: e,
              borderRadius: "50%",
            }),
            (0, n.Z)(c, "".concat(a).concat(o, "-round"), { borderRadius: e }),
            c
          );
        },
        Z = function (t, e) {
          return Object.assign(
            { width: e(t).mul(2).equal(), minWidth: e(t).mul(2).equal() },
            h(t),
          );
        },
        k = function (t) {
          var e,
            a,
            c,
            o,
            i,
            r = t.componentCls,
            l = t.skeletonAvatarCls,
            s = t.skeletonTitleCls,
            d = t.skeletonParagraphCls,
            g = t.skeletonButtonCls,
            u = t.skeletonInputCls,
            m = t.skeletonImageCls,
            h = t.controlHeight,
            k = t.controlHeightLG,
            j = t.controlHeightSM,
            O = t.gradientFromColor,
            w = t.padding,
            x = t.marginSM,
            E = t.borderRadius,
            N = t.titleHeight,
            y = t.blockRadius,
            H = t.paragraphLiHeight,
            q = t.controlHeightXS,
            z = t.paragraphMarginTop;
          return (
            (i = {}),
            (0, n.Z)(
              i,
              "".concat(r),
              ((c = { display: "table", width: "100%" }),
              (0, n.Z)(
                c,
                "".concat(r, "-header"),
                ((e = {
                  display: "table-cell",
                  paddingInlineEnd: w,
                  verticalAlign: "top",
                }),
                (0, n.Z)(
                  e,
                  "".concat(l),
                  Object.assign(
                    {
                      display: "inline-block",
                      verticalAlign: "top",
                      background: O,
                    },
                    v(h),
                  ),
                ),
                (0, n.Z)(e, "".concat(l, "-circle"), { borderRadius: "50%" }),
                (0, n.Z)(e, "".concat(l, "-lg"), Object.assign({}, v(k))),
                (0, n.Z)(e, "".concat(l, "-sm"), Object.assign({}, v(j))),
                e),
              ),
              (0, n.Z)(
                c,
                "".concat(r, "-content"),
                ((a = {
                  display: "table-cell",
                  width: "100%",
                  verticalAlign: "top",
                }),
                (0, n.Z)(
                  a,
                  "".concat(s),
                  (0, n.Z)(
                    {
                      width: "100%",
                      height: N,
                      background: O,
                      borderRadius: y,
                    },
                    "+ ".concat(d),
                    { marginBlockStart: j },
                  ),
                ),
                (0, n.Z)(a, "".concat(d), {
                  padding: 0,
                  "> li": {
                    width: "100%",
                    height: H,
                    listStyle: "none",
                    background: O,
                    borderRadius: y,
                    "+ li": { marginBlockStart: q },
                  },
                }),
                (0, n.Z)(
                  a,
                  "".concat(
                    d,
                    "> li:last-child:not(:first-child):not(:nth-child(2))",
                  ),
                  { width: "61%" },
                ),
                a),
              ),
              (0, n.Z)(
                c,
                "&-round ".concat(r, "-content"),
                (0, n.Z)({}, "".concat(s, ", ").concat(d, " > li"), {
                  borderRadius: E,
                }),
              ),
              c),
            ),
            (0, n.Z)(
              i,
              "".concat(r, "-with-avatar ").concat(r, "-content"),
              (0, n.Z)(
                {},
                "".concat(s),
                (0, n.Z)({ marginBlockStart: x }, "+ ".concat(d), {
                  marginBlockStart: z,
                }),
              ),
            ),
            (0, n.Z)(
              i,
              "".concat(r).concat(r, "-element"),
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { display: "inline-block", width: "auto" },
                      (function (t) {
                        var e = t.borderRadiusSM,
                          a = t.skeletonButtonCls,
                          c = t.controlHeight,
                          o = t.controlHeightLG,
                          i = t.controlHeightSM,
                          r = t.gradientFromColor,
                          l = t.calc;
                        return Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  (0, n.Z)(
                                    {},
                                    "".concat(a),
                                    Object.assign(
                                      {
                                        display: "inline-block",
                                        verticalAlign: "top",
                                        background: r,
                                        borderRadius: e,
                                        width: l(c).mul(2).equal(),
                                        minWidth: l(c).mul(2).equal(),
                                      },
                                      Z(c, l),
                                    ),
                                  ),
                                  C(t, c, a),
                                ),
                                (0, n.Z)(
                                  {},
                                  "".concat(a, "-lg"),
                                  Object.assign({}, Z(o, l)),
                                ),
                              ),
                              C(t, o, "".concat(a, "-lg")),
                            ),
                            (0, n.Z)(
                              {},
                              "".concat(a, "-sm"),
                              Object.assign({}, Z(i, l)),
                            ),
                          ),
                          C(t, i, "".concat(a, "-sm")),
                        );
                      })(t),
                    ),
                    (function (t) {
                      var e,
                        a = t.skeletonAvatarCls,
                        c = t.gradientFromColor,
                        o = t.controlHeight,
                        i = t.controlHeightLG,
                        r = t.controlHeightSM;
                      return (
                        (e = {}),
                        (0, n.Z)(
                          e,
                          "".concat(a),
                          Object.assign(
                            {
                              display: "inline-block",
                              verticalAlign: "top",
                              background: c,
                            },
                            v(o),
                          ),
                        ),
                        (0, n.Z)(e, "".concat(a).concat(a, "-circle"), {
                          borderRadius: "50%",
                        }),
                        (0, n.Z)(
                          e,
                          "".concat(a).concat(a, "-lg"),
                          Object.assign({}, v(i)),
                        ),
                        (0, n.Z)(
                          e,
                          "".concat(a).concat(a, "-sm"),
                          Object.assign({}, v(r)),
                        ),
                        e
                      );
                    })(t),
                  ),
                  (function (t) {
                    var e,
                      a = t.controlHeight,
                      c = t.borderRadiusSM,
                      o = t.skeletonInputCls,
                      i = t.controlHeightLG,
                      r = t.controlHeightSM,
                      l = t.gradientFromColor,
                      s = t.calc;
                    return (
                      (e = {}),
                      (0, n.Z)(
                        e,
                        "".concat(o),
                        Object.assign(
                          {
                            display: "inline-block",
                            verticalAlign: "top",
                            background: l,
                            borderRadius: c,
                          },
                          f(a, s),
                        ),
                      ),
                      (0, n.Z)(
                        e,
                        "".concat(o, "-lg"),
                        Object.assign({}, f(i, s)),
                      ),
                      (0, n.Z)(
                        e,
                        "".concat(o, "-sm"),
                        Object.assign({}, f(r, s)),
                      ),
                      e
                    );
                  })(t),
                ),
                (function (t) {
                  var e,
                    a,
                    c = t.skeletonImageCls,
                    o = t.imageSizeBase,
                    i = t.gradientFromColor,
                    r = t.borderRadiusSM,
                    l = t.calc;
                  return (
                    (a = {}),
                    (0, n.Z)(
                      a,
                      "".concat(c),
                      Object.assign(
                        Object.assign(
                          {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            verticalAlign: "top",
                            background: i,
                            borderRadius: r,
                          },
                          p(l(o).mul(2).equal()),
                        ),
                        ((e = {}),
                        (0, n.Z)(e, "".concat(c, "-path"), { fill: "#bfbfbf" }),
                        (0, n.Z)(
                          e,
                          "".concat(c, "-svg"),
                          Object.assign(Object.assign({}, p(o)), {
                            maxWidth: l(o).mul(4).equal(),
                            maxHeight: l(o).mul(4).equal(),
                          }),
                        ),
                        (0, n.Z)(
                          e,
                          "".concat(c, "-svg").concat(c, "-svg-circle"),
                          { borderRadius: "50%" },
                        ),
                        e),
                      ),
                    ),
                    (0, n.Z)(a, "".concat(c).concat(c, "-circle"), {
                      borderRadius: "50%",
                    }),
                    a
                  );
                })(t),
              ),
            ),
            (0, n.Z)(
              i,
              "".concat(r).concat(r, "-block"),
              ((o = { width: "100%" }),
              (0, n.Z)(o, "".concat(g), { width: "100%" }),
              (0, n.Z)(o, "".concat(u), { width: "100%" }),
              o),
            ),
            (0, n.Z)(
              i,
              "".concat(r).concat(r, "-active"),
              (0, n.Z)(
                {},
                "\n        "
                  .concat(s, ",\n        ")
                  .concat(d, " > li,\n        ")
                  .concat(l, ",\n        ")
                  .concat(g, ",\n        ")
                  .concat(u, ",\n        ")
                  .concat(m, "\n      "),
                Object.assign(
                  {},
                  (function (t) {
                    return {
                      background: t.skeletonLoadingBackground,
                      backgroundSize: "400% 100%",
                      animationName: b,
                      animationDuration: t.skeletonLoadingMotionDuration,
                      animationTimingFunction: "ease",
                      animationIterationCount: "infinite",
                    };
                  })(t),
                ),
              ),
            ),
            i
          );
        },
        j = (0, u.I$)(
          "Skeleton",
          function (t) {
            var e = t.componentCls,
              a = t.calc,
              n = (0, m.TS)(t, {
                skeletonAvatarCls: "".concat(e, "-avatar"),
                skeletonTitleCls: "".concat(e, "-title"),
                skeletonParagraphCls: "".concat(e, "-paragraph"),
                skeletonButtonCls: "".concat(e, "-button"),
                skeletonInputCls: "".concat(e, "-input"),
                skeletonImageCls: "".concat(e, "-image"),
                imageSizeBase: a(t.controlHeight).mul(1.5).equal(),
                borderRadius: 100,
                skeletonLoadingBackground: "linear-gradient(90deg, "
                  .concat(t.gradientFromColor, " 25%, ")
                  .concat(t.gradientToColor, " 37%, ")
                  .concat(t.gradientFromColor, " 63%)"),
                skeletonLoadingMotionDuration: "1.4s",
              });
            return [k(n)];
          },
          function (t) {
            var e = t.colorFillContent,
              a = t.colorFill;
            return {
              color: e,
              colorGradientEnd: a,
              gradientFromColor: e,
              gradientToColor: a,
              titleHeight: t.controlHeight / 2,
              blockRadius: t.borderRadiusSM,
              paragraphMarginTop: t.marginLG + t.marginXXS,
              paragraphLiHeight: t.controlHeight / 2,
            };
          },
          {
            deprecatedTokens: [
              ["color", "gradientFromColor"],
              ["colorGradientEnd", "gradientToColor"],
            ],
          },
        ),
        O = function (t) {
          var e = t.prefixCls,
            a = t.className,
            o = t.rootClassName,
            g = t.active,
            u = t.shape,
            m = void 0 === u ? "circle" : u,
            b = t.size,
            h = void 0 === b ? "default" : b,
            v = (0, r.useContext(l.E_).getPrefixCls)("skeleton", e),
            f = j(v),
            p = (0, c.Z)(f, 3),
            C = p[0],
            Z = p[1],
            k = p[2],
            O = (0, s.Z)(t, ["prefixCls", "className"]),
            w = i()(
              v,
              "".concat(v, "-element"),
              (0, n.Z)({}, "".concat(v, "-active"), g),
              a,
              o,
              Z,
              k,
            );
          return C(
            r.createElement(
              "div",
              { className: w },
              r.createElement(
                d,
                Object.assign(
                  { prefixCls: "".concat(v, "-avatar"), shape: m, size: h },
                  O,
                ),
              ),
            ),
          );
        },
        w = function (t) {
          var e,
            a = t.prefixCls,
            o = t.className,
            g = t.rootClassName,
            u = t.active,
            m = t.block,
            b = void 0 !== m && m,
            h = t.size,
            v = void 0 === h ? "default" : h,
            f = (0, r.useContext(l.E_).getPrefixCls)("skeleton", a),
            p = j(f),
            C = (0, c.Z)(p, 3),
            Z = C[0],
            k = C[1],
            O = C[2],
            w = (0, s.Z)(t, ["prefixCls"]),
            x = i()(
              f,
              "".concat(f, "-element"),
              ((e = {}),
              (0, n.Z)(e, "".concat(f, "-active"), u),
              (0, n.Z)(e, "".concat(f, "-block"), b),
              e),
              o,
              g,
              k,
              O,
            );
          return Z(
            r.createElement(
              "div",
              { className: x },
              r.createElement(
                d,
                Object.assign(
                  { prefixCls: "".concat(f, "-button"), size: v },
                  w,
                ),
              ),
            ),
          );
        },
        x = function (t) {
          var e = t.prefixCls,
            a = t.className,
            o = t.rootClassName,
            s = t.style,
            d = t.active,
            g = (0, r.useContext(l.E_).getPrefixCls)("skeleton", e),
            u = j(g),
            m = (0, c.Z)(u, 3),
            b = m[0],
            h = m[1],
            v = m[2],
            f = i()(
              g,
              "".concat(g, "-element"),
              (0, n.Z)({}, "".concat(g, "-active"), d),
              a,
              o,
              h,
              v,
            );
          return b(
            r.createElement(
              "div",
              { className: f },
              r.createElement(
                "div",
                { className: i()("".concat(g, "-image"), a), style: s },
                r.createElement(
                  "svg",
                  {
                    viewBox: "0 0 1098 1024",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "".concat(g, "-image-svg"),
                  },
                  r.createElement("path", {
                    d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
                    className: "".concat(g, "-image-path"),
                  }),
                ),
              ),
            ),
          );
        },
        E = function (t) {
          var e,
            a = t.prefixCls,
            o = t.className,
            g = t.rootClassName,
            u = t.active,
            m = t.block,
            b = t.size,
            h = void 0 === b ? "default" : b,
            v = (0, r.useContext(l.E_).getPrefixCls)("skeleton", a),
            f = j(v),
            p = (0, c.Z)(f, 3),
            C = p[0],
            Z = p[1],
            k = p[2],
            O = (0, s.Z)(t, ["prefixCls"]),
            w = i()(
              v,
              "".concat(v, "-element"),
              ((e = {}),
              (0, n.Z)(e, "".concat(v, "-active"), u),
              (0, n.Z)(e, "".concat(v, "-block"), m),
              e),
              o,
              g,
              Z,
              k,
            );
          return C(
            r.createElement(
              "div",
              { className: w },
              r.createElement(
                d,
                Object.assign(
                  { prefixCls: "".concat(v, "-input"), size: h },
                  O,
                ),
              ),
            ),
          );
        },
        N = a(87462),
        y = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z",
                },
              },
            ],
          },
          name: "dot-chart",
          theme: "outlined",
        },
        H = a(54291),
        q = function (t, e) {
          return r.createElement(H.Z, (0, N.Z)({}, t, { ref: e, icon: y }));
        };
      var z = r.forwardRef(q),
        R = function (t) {
          var e = t.prefixCls,
            a = t.className,
            o = t.rootClassName,
            s = t.style,
            d = t.active,
            g = t.children,
            u = (0, r.useContext(l.E_).getPrefixCls)("skeleton", e),
            m = j(u),
            b = (0, c.Z)(m, 3),
            h = b[0],
            v = b[1],
            f = b[2],
            p = i()(
              u,
              "".concat(u, "-element"),
              (0, n.Z)({}, "".concat(u, "-active"), d),
              v,
              a,
              o,
              f,
            ),
            C = null !== g && void 0 !== g ? g : r.createElement(z, null);
          return h(
            r.createElement(
              "div",
              { className: p },
              r.createElement(
                "div",
                { className: i()("".concat(u, "-image"), a), style: s },
                C,
              ),
            ),
          );
        },
        S = a(93433),
        M = function (t) {
          var e = function (e) {
              var a = t.width,
                n = t.rows,
                c = void 0 === n ? 2 : n;
              return Array.isArray(a) ? a[e] : c - 1 === e ? a : void 0;
            },
            a = t.prefixCls,
            n = t.className,
            c = t.style,
            o = t.rows,
            l = (0, S.Z)(Array(o)).map(function (t, a) {
              return r.createElement("li", { key: a, style: { width: e(a) } });
            });
          return r.createElement("ul", { className: i()(a, n), style: c }, l);
        },
        B = function (t) {
          var e = t.prefixCls,
            a = t.className,
            n = t.width,
            c = t.style;
          return r.createElement("h3", {
            className: i()(e, a),
            style: Object.assign({ width: n }, c),
          });
        };
      function A(t) {
        return t && "object" === typeof t ? t : {};
      }
      var F = function (t) {
        var e = t.prefixCls,
          a = t.loading,
          o = t.className,
          s = t.rootClassName,
          g = t.style,
          u = t.children,
          m = t.avatar,
          b = void 0 !== m && m,
          h = t.title,
          v = void 0 === h || h,
          f = t.paragraph,
          p = void 0 === f || f,
          C = t.active,
          Z = t.round,
          k = r.useContext(l.E_),
          O = k.getPrefixCls,
          w = k.direction,
          x = k.skeleton,
          E = O("skeleton", e),
          N = j(E),
          y = (0, c.Z)(N, 3),
          H = y[0],
          q = y[1],
          z = y[2];
        if (a || !("loading" in t)) {
          var R,
            S,
            F,
            I = !!b,
            L = !!v,
            P = !!p;
          if (I) {
            var T = Object.assign(
              Object.assign(
                { prefixCls: "".concat(E, "-avatar") },
                (function (t, e) {
                  return t && !e
                    ? { size: "large", shape: "square" }
                    : { size: "large", shape: "circle" };
                })(L, P),
              ),
              A(b),
            );
            S = r.createElement(
              "div",
              { className: "".concat(E, "-header") },
              r.createElement(d, Object.assign({}, T)),
            );
          }
          if (L || P) {
            var G, _;
            if (L) {
              var W = Object.assign(
                Object.assign(
                  { prefixCls: "".concat(E, "-title") },
                  (function (t, e) {
                    return !t && e
                      ? { width: "38%" }
                      : t && e
                        ? { width: "50%" }
                        : {};
                  })(I, P),
                ),
                A(v),
              );
              G = r.createElement(B, Object.assign({}, W));
            }
            if (P) {
              var D = Object.assign(
                Object.assign(
                  { prefixCls: "".concat(E, "-paragraph") },
                  (function (t, e) {
                    var a = {};
                    return (
                      (t && e) || (a.width = "61%"),
                      (a.rows = !t && e ? 3 : 2),
                      a
                    );
                  })(I, L),
                ),
                A(p),
              );
              _ = r.createElement(M, Object.assign({}, D));
            }
            F = r.createElement(
              "div",
              { className: "".concat(E, "-content") },
              G,
              _,
            );
          }
          var X = i()(
            E,
            ((R = {}),
            (0, n.Z)(R, "".concat(E, "-with-avatar"), I),
            (0, n.Z)(R, "".concat(E, "-active"), C),
            (0, n.Z)(R, "".concat(E, "-rtl"), "rtl" === w),
            (0, n.Z)(R, "".concat(E, "-round"), Z),
            R),
            null === x || void 0 === x ? void 0 : x.className,
            o,
            s,
            q,
            z,
          );
          return H(
            r.createElement(
              "div",
              {
                className: X,
                style: Object.assign(
                  Object.assign(
                    {},
                    null === x || void 0 === x ? void 0 : x.style,
                  ),
                  g,
                ),
              },
              S,
              F,
            ),
          );
        }
        return "undefined" !== typeof u ? u : null;
      };
      (F.Button = w),
        (F.Avatar = O),
        (F.Input = E),
        (F.Image = x),
        (F.Node = R);
      var I = F;
    },
  },
]);
//# sourceMappingURL=183.58dc270b.chunk.js.map
