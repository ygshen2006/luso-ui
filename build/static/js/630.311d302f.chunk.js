"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [630],
  {
    99552: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(72791),
        a = n(80184),
        s = function (e) {
          var t = e.post,
            n = (0, r.useRef)();
          return (
            (0, r.useEffect)(
              function () {
                n.current.innerHTML = t.content;
              },
              [t],
            ),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)("div", {
                className: "container py-5 text-center",
                style: { marginTop: "10px" },
                children: (0, a.jsxs)("div", {
                  className: "post-body",
                  children: [
                    (0, a.jsxs)("h2", {
                      className: "title",
                      children: ["\u300a", t.title, "\u300b"],
                    }),
                    (0, a.jsxs)("div", {
                      className: "created-time",
                      children: ["\u53d1\u8868\u4e8e ", t["created-time"]],
                    }),
                    (0, a.jsx)("div", { className: "content", ref: n }),
                  ],
                }),
              }),
            })
          );
        };
    },
    37630: function (e, t, n) {
      n.r(t);
      var r = n(74165),
        a = n(15861),
        s = n(29439),
        i = n(22338),
        c = n(99552),
        u = n(72791),
        d = n(36234),
        o = n(53585),
        f = n(84372),
        h = n(10183),
        l = n(80184);
      t.default = function () {
        var e = (0, u.useState)([]),
          t = (0, s.Z)(e, 2),
          n = t[0],
          p = t[1],
          x = (0, u.useState)(!0),
          v = (0, s.Z)(x, 2),
          j = v[0],
          m = v[1];
        (0, u.useEffect)(function () {
          var e = (function () {
            var e = (0, a.Z)(
              (0, r.Z)().mark(function e() {
                var t;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          m(!0),
                          (e.next = 3),
                          (0, d.U)(o.SN.POSTS_URI, [
                            { key: "useMock", value: "true" },
                          ])
                        );
                      case 3:
                        (t = e.sent).sort(function (e, t) {
                          return (
                            new Date(t["created-time"]) -
                            new Date(e["created-time"])
                          );
                        }),
                          p(t),
                          m(!1);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        }, []);
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)(f.Z, { activeIndex: "post" }),
            j
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(h.Z, { avatar: !0, paragraph: !0 }),
                    (0, l.jsx)(h.Z, { avatar: !0, paragraph: !0 }),
                    (0, l.jsx)(h.Z, { avatar: !0, paragraph: !0 }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    " ",
                    (0, l.jsx)(i.t7, {
                      height: window.innerHeight,
                      width: window.innerWidth,
                      itemCount: n.length,
                      itemSize: 1,
                      children: function (e) {
                        var t = e.index;
                        return (0, l.jsx)(c.Z, { post: n[t] });
                      },
                    }),
                  ],
                }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=630.311d302f.chunk.js.map