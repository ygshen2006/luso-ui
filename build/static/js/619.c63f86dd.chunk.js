"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [619],
  {
    18619: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
          useChats: function () {
            return i;
          },
        });
      var s = n(93433),
        a = n(29439),
        u = n(72791),
        c = [
          {
            type: "bot",
            seq: 0,
            message:
              "\u6b22\u8fce\u5149\u4e34\uff0c\u8bf7\u4f7f\u7528\u60a8\u7684Github\u8d26\u53f7\u767b\u5f55.",
          },
        ],
        o = n(80184),
        r = (0, u.createContext)(),
        i = function () {
          return (0, u.useContext)(r);
        },
        d = function (e) {
          var t = e.children,
            n = (0, u.useState)(c),
            i = (0, a.Z)(n, 2),
            d = i[0],
            f = i[1],
            l = (0, u.useState)(""),
            h = (0, a.Z)(l, 2),
            g = h[0],
            p = h[1];
          return (0, o.jsx)(r.Provider, {
            value: {
              data: d,
              onAddNewMessage: function (e) {
                var t = e.message,
                  n = e.chatId,
                  a = e.seq,
                  u = e.type,
                  c = e.esentials,
                  o = e.selected;
                f(
                  [].concat((0, s.Z)(d), [
                    {
                      chatId: n,
                      seq: a,
                      message: t,
                      type: u,
                      esentials: c,
                      selected: o,
                    },
                  ]),
                );
              },
              onAddNewMessages: function (e) {
                f(e);
              },
              clearMessages: function () {
                f([]);
              },
              login: g,
              onLogin: function (e) {
                p(e);
              },
            },
            children: t,
          });
        };
    },
  },
]);
//# sourceMappingURL=619.c63f86dd.chunk.js.map