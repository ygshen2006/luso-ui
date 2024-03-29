"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [318],
  {
    32318: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var r = n(74165),
        i = n(15861),
        s = n(36234),
        a = n(53585),
        c = n(1413),
        o = n(29439),
        d = n(46379),
        l = n(22338),
        u = (n(28708), n(1461), n(99680)),
        h = n(23542),
        f = n(72791),
        x = n(92949),
        p = n(3249),
        m = n(95768),
        v = n(80184),
        j = function (e) {
          var t = e.posts,
            n = e.onDeletePost,
            r = (0, f.useState)(!1),
            i = (0, o.Z)(r, 2),
            s = i[0],
            a = i[1],
            j = (0, f.useState)(0),
            w = (0, o.Z)(j, 2),
            g = w[0],
            S = w[1];
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)(u.EbayAlertDialog, {
                open: s,
                confirmText: "\u5220\u9664",
                onConfirm: function () {
                  a(!1), n(g);
                },
                a11yClosetext: "Close",
                children: [
                  (0, v.jsx)(h.EbayDialogHeader, {
                    children:
                      "\u786e\u5b9a\u8981\u5220\u9664\u5f53\u524d\u6587\u7ae0\u5417\uff1f",
                  }),
                  (0, v.jsx)("p", {
                    children:
                      "\u5220\u9664\u540e\u5c06\u4e0d\u53ef\u89c1\u3002",
                  }),
                ],
              }),
              (0, v.jsxs)("div", {
                className: "list",
                children: [
                  (0, v.jsx)("div", {
                    className: "summary",
                    children: (0, v.jsx)(y, {}),
                  }),
                  (0, v.jsx)(l.t7, {
                    height: window.innerHeight,
                    width: window.innerWidth - 100,
                    itemCount: t.length,
                    itemSize: 100,
                    children: function (e) {
                      var n = e.index,
                        r = e.style;
                      return (0, v.jsxs)("div", {
                        children: [
                          (0, v.jsxs)("div", {
                            style: (0, c.Z)((0, c.Z)({}, r), {
                              display: "flex",
                            }),
                            children: [
                              (0, v.jsx)("div", {
                                className: "first-column",
                                children: (0, v.jsx)("a", {
                                  href: "/post/".concat(t[n].id),
                                  children: (0, v.jsx)(d.C, {
                                    size: 40,
                                    src: t[n]["cover-image"],
                                  }),
                                }),
                              }),
                              (0, v.jsxs)("div", {
                                children: [
                                  (0, v.jsx)("div", {
                                    children: (0, v.jsx)("a", {
                                      children: t[n].title,
                                    }),
                                  }),
                                  (0, v.jsx)("div", {
                                    children: (0, v.jsx)("a", {
                                      style: {
                                        fontSize: "12px",
                                        color: "grey",
                                      },
                                      children: t[n]["created-time"],
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                title: "\u5220\u9664",
                                style: { marginLeft: "300px" },
                                children: [
                                  (0, v.jsx)(m.EbayButton, {
                                    size: "small",
                                    onClick: function () {
                                      return (
                                        (e = t[n].id),
                                        void (window.location.href =
                                          "/admin/post/edit/".concat(e))
                                      );
                                      var e;
                                    },
                                    children: (0, v.jsx)(x.EbayIcon, {
                                      name: "ai-spectrum-filled16-colored",
                                      style: { width: "20px", height: "20px" },
                                    }),
                                  }),
                                  (0, v.jsx)(m.EbayButton, {
                                    priority: "primary",
                                    variant: "destructive",
                                    onClick: function () {
                                      return (e = t[n].id), S(e), void a(!0);
                                      var e;
                                    },
                                    children: (0, v.jsx)(x.EbayIcon, {
                                      name: "delete16",
                                      style: {
                                        width: "20px",
                                        height: "20px",
                                        cursor: "pointer",
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsx)(p.EbaySvg, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        },
        y = function (e) {
          var t = e.posts,
            n = void 0 === t ? [] : t,
            r = (0, f.useState)({}),
            i = (0, o.Z)(r, 2),
            s = i[0],
            a = i[1];
          (0, f.useEffect)(function () {
            Array.isArray(n) &&
              (n.sort(function (e, t) {
                return (
                  new Date(t["created-time"]) - new Date(e["created-time"])
                );
              }),
              a(n[0]));
          }, []);
          return (0, v.jsx)("div", {
            className: "header-top bg-light",
            children: (0, v.jsxs)("h6", {
              children: [
                "\u5f53\u524d\u5171\u6709",
                n.length,
                "\u6587\u7ae0, \u6700\u8fd1\u4e00\u7bc7\u6587\u7ae0\u53d1\u8868\u4e8e:",
                s ? s["created-time"] : "",
                (0, v.jsx)(m.EbayButton, {
                  onClick: function () {
                    window.location.href = "/admin/post/edit";
                  },
                  size: "small",
                  priority: "primary",
                  style: { marginLeft: "10px", float: "right" },
                  children: "\u65b0\u589e",
                }),
              ],
            }),
          });
        };
      j.Summary = y;
      var w = n(84372),
        g = function () {
          var e = (0, f.useState)([]),
            t = (0, o.Z)(e, 2),
            n = t[0],
            c = t[1];
          return (
            (0, f.useEffect)(function () {
              var e = (function () {
                var e = (0, i.Z)(
                  (0, r.Z)().mark(function e() {
                    var t;
                    return (0, r.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              (0, s.U)(a.SN.POSTS_URI, [
                                { key: "useMock", value: "true" },
                              ])
                            );
                          case 2:
                            (t = e.sent).sort(function (e, t) {
                              return (
                                new Date(t["created-time"]) -
                                new Date(e["created-time"])
                              );
                            }),
                              c(t);
                          case 5:
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
            }, []),
            { posts: n }
          );
        },
        S = function () {
          var e = g().posts,
            t = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, s.U)(a.SN.POST_DELETE, [
                              { key: "id", value: t },
                            ])
                          );
                        case 2:
                          (n = e.sent) && n.id && location.reload();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(w.Z, { activeIndex: "post" }),
              (0, v.jsx)(j, {
                posts: e,
                onDeletePost: t,
                children: (0, v.jsx)(j.Summary, { posts: e }),
              }),
            ],
          });
        };
    },
    28708: function () {},
  },
]);
//# sourceMappingURL=318.018f15b5.chunk.js.map