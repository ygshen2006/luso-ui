"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [504],
  {
    70504: function (e, t, n) {
      n.r(t);
      var r = n(74165),
        a = n(15861),
        s = n(29439),
        c = n(72791),
        i = n(57689),
        u = n(36234),
        o = n(53585),
        f = n(84372),
        d = n(99552),
        l = n(10183),
        p = n(80184);
      t.default = function () {
        var e = (0, i.UO)().id,
          t = (0, c.useState)({}),
          n = (0, s.Z)(t, 2),
          v = n[0],
          x = n[1],
          h = (0, c.useState)(!0),
          j = (0, s.Z)(h, 2),
          m = j[0],
          Z = j[1];
        return (
          (0, c.useEffect)(function () {
            var t = (function () {
              var t = (0, a.Z)(
                (0, r.Z)().mark(function t() {
                  var n;
                  return (0, r.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            Z(!0),
                            (t.next = 3),
                            (0, u.U)(o.C8.POST_URL, [
                              { key: "useMock", value: "true" },
                              { key: "id", value: e },
                            ])
                          );
                        case 3:
                          (n = t.sent), Z(!1), x(n);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          }, []),
          (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(f.Z, { activeIndex: "post" }),
              m
                ? (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsx)(l.Z, { avatar: !0, paragraph: !0 }),
                      (0, p.jsx)(l.Z, { avatar: !0, paragraph: !0 }),
                      (0, p.jsx)(l.Z, { avatar: !0, paragraph: !0 }),
                    ],
                  })
                : (0, p.jsx)(d.Z, { post: v }),
            ],
          })
        );
      };
    },
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
  },
]);
//# sourceMappingURL=504.cdff8bde.chunk.js.map