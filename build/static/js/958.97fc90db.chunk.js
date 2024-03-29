"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [958, 619],
  {
    18619: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return l;
          },
          useChats: function () {
            return u;
          },
        });
      var t = s(93433),
        a = s(29439),
        r = s(72791),
        i = [
          {
            type: "bot",
            seq: 0,
            message:
              "\u6b22\u8fce\u5149\u4e34\uff0c\u8bf7\u4f7f\u7528\u60a8\u7684Github\u8d26\u53f7\u767b\u5f55.",
          },
        ],
        c = s(80184),
        o = (0, r.createContext)(),
        u = function () {
          return (0, r.useContext)(o);
        },
        l = function (e) {
          var n = e.children,
            s = (0, r.useState)(i),
            u = (0, a.Z)(s, 2),
            l = u[0],
            d = u[1],
            h = (0, r.useState)(""),
            f = (0, a.Z)(h, 2),
            m = f[0],
            g = f[1];
          return (0, c.jsx)(o.Provider, {
            value: {
              data: l,
              onAddNewMessage: function (e) {
                var n = e.message,
                  s = e.chatId,
                  a = e.seq,
                  r = e.type,
                  i = e.esentials,
                  c = e.selected;
                d(
                  [].concat((0, t.Z)(l), [
                    {
                      chatId: s,
                      seq: a,
                      message: n,
                      type: r,
                      esentials: i,
                      selected: c,
                    },
                  ]),
                );
              },
              onAddNewMessages: function (e) {
                d(e);
              },
              clearMessages: function () {
                d([]);
              },
              login: m,
              onLogin: function (e) {
                g(e);
              },
            },
            children: n,
          });
        };
    },
    65958: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return C;
          },
        });
      var t = s(29439),
        a = s(3249),
        r = (s(893), s(72791)),
        i = function (e) {
          var n = (0, r.useState)(),
            s = (0, t.Z)(n, 2),
            a = s[0],
            i = s[1],
            c = (0, r.useState)(),
            o = (0, t.Z)(c, 2),
            u = o[0],
            l = o[1],
            d = (0, r.useState)(!1),
            h = (0, t.Z)(d, 2),
            f = h[0],
            m = h[1];
          return (
            (0, r.useEffect)(
              function () {
                m(!0),
                  fetch(e, { headers: {} })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      i(e);
                    })
                    .then(function () {
                      return m(!1);
                    })
                    .catch(l);
              },
              [e],
            ),
            { data: a, error: u, loading: f }
          );
        },
        c = s(80184),
        o = function (e) {
          var n = e.login;
          if (!n) return null;
          var s = i("https://api.github.com/users/".concat(n)),
            t = s.data,
            a = s.loading,
            r = s.error;
          return a
            ? (0, c.jsx)("h1", { children: "Loading..." })
            : r
              ? (0, c.jsx)("pre", { children: JSON.stringify(r, null, 2) })
              : t
                ? (0, c.jsx)("div", {
                    style: { marginRight: "50px" },
                    children: (0, c.jsx)("p", {
                      style: { float: "right" },
                      children: (0, c.jsx)("img", {
                        style: {
                          width: "30px",
                          lineHeight: "30px",
                          borderRadius: "50%",
                        },
                        alt: t ? t.login : "",
                        src: t ? t.avatar_url : "",
                      }),
                    }),
                  })
                : null;
        },
        u = s(18619),
        l = function () {
          var e = (0, u.useChats)().login;
          return (
            (0, r.useEffect)(
              function () {
                console.log(e);
              },
              [e],
            ),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsxs)("div", {
                  className: "chat-header",
                  children: [
                    (0, c.jsx)("div", { className: "chat-recipient" }),
                    (0, c.jsx)("div", {
                      className: "chat-menu",
                      children: (0, c.jsx)("div", {
                        style: { float: "left" },
                        children: (0, c.jsx)(o, { login: e }),
                      }),
                    }),
                  ],
                }),
                (0, c.jsx)(a.EbaySvg, {}),
              ],
            })
          );
        },
        d = s(1413),
        h = s(93433),
        f = s(74165),
        m = s(15861),
        g = s(92949),
        x = s(89375),
        p = function (e) {
          var n = e.message,
            s = e.addNewMessage,
            a = (0, r.useState)(null),
            i = (0, t.Z)(a, 2),
            o = i[0],
            u = i[1];
          return (0, c.jsxs)("div", {
            children: [
              (0, c.jsx)("p", { children: n }),
              (0, c.jsx)(x.Z, {
                className: "dt-picker",
                onChange: function (e) {
                  u(e), s(e.format("DD-MM-YYYY"));
                },
                value: o,
                format: ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"],
              }),
            ],
          });
        },
        v = function (e) {
          var n = e.message;
          return (0, c.jsx)("p", {
            children: (0, c.jsx)("div", { children: n }),
          });
        },
        y = s(36234),
        j = s(53585),
        b = s(95768),
        N =
          (s(27303),
          function (e) {
            var n = e.message,
              s = e.keyName,
              a = e.esentials,
              i = e.readyFn,
              o = (0, r.useState)(
                a.map(function () {
                  return { priority: "tertiary" };
                }),
              ),
              u = (0, t.Z)(o, 2),
              l = u[0],
              d = u[1];
            return (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)("p", { children: n }),
                (0, c.jsx)("div", {
                  className: "message",
                  children: a.map(function (e, n) {
                    return (0, c.jsx)(
                      b.EbayButton,
                      {
                        onClick: function () {
                          return (function (e) {
                            var n = (0, h.Z)(l);
                            (n[e].priority =
                              "primary" == n[e].priority
                                ? "tertiary"
                                : "primary"),
                              d(n),
                              i(e, s);
                          })(n);
                        },
                        priority: l[n].priority,
                        style: { margin: "3px" },
                        children: e,
                      },
                      n,
                    );
                  }),
                }),
              ],
            });
          }),
        k = function (e) {
          var n = e.message,
            s = e.next;
          return (0, c.jsxs)("p", {
            children: [
              (0, c.jsx)("div", {
                children: (0, c.jsx)("span", {
                  style: { marginRight: "50px" },
                  children: n,
                }),
              }),
              (0, c.jsxs)("div", {
                style: { marginTop: "5px" },
                children: [
                  (0, c.jsxs)("span", {
                    children: [
                      (0, c.jsx)("i", {
                        style: { textDecoration: "underline", color: "" },
                        children: "Yes",
                      }),
                      "\xa0\xa0",
                      (0, c.jsx)(g.EbayIcon, { name: "face-neutral24" }),
                    ],
                  }),
                  (0, c.jsxs)("span", {
                    style: { marginLeft: "40px" },
                    onClick: s,
                    children: [
                      (0, c.jsx)("i", {
                        style: { textDecoration: "underline" },
                        children: "No, that is it for now",
                      }),
                      (0, c.jsx)(g.EbayIcon, { name: "on-the-way24" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        w = function (e) {
          var n = e.message;
          return (0, c.jsx)("div", {
            className: "message",
            dangerouslySetInnerHTML: { __html: n },
          });
        },
        q = s(996),
        E =
          (s(40185),
          function (e) {
            var n = e.afterLogin,
              s = (0, u.useChats)().onLogin,
              i = (0, r.useState)(),
              o = (0, t.Z)(i, 2),
              l = o[0],
              d = o[1];
            return (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsxs)("div", {
                  children: [
                    (0, c.jsx)(q.EbayTextbox, {
                      placeholder: "test",
                      value: l,
                      onChange: function (e) {
                        return d(e.target.value);
                      },
                    }),
                    (0, c.jsx)(b.EbayButton, {
                      onClick: function () {
                        return s(l), void n(l);
                      },
                      children: "\u767b\u5f55",
                    }),
                  ],
                }),
                (0, c.jsx)(a.EbaySvg, {}),
              ],
            });
          }),
        M = function (e) {
          var n = e.text,
            s = e.afterLogin;
          return (0, c.jsx)("div", {
            className: "login-message",
            children: (0, c.jsxs)("div", {
              children: [
                (0, c.jsx)("p", { children: n }),
                (0, c.jsx)("div", {
                  className: "seach-form",
                  children: (0, c.jsx)(E, { afterLogin: s }),
                }),
              ],
            }),
          });
        },
        S = function (e) {
          var n,
            s = e.message,
            i = e.keyName,
            o = e.seq,
            l = e.type,
            d = e.esentials,
            x = (0, u.useChats)(),
            b = x.data,
            q = x.onAddNewMessage,
            E = x.onAddNewMessages;
          (0, r.useEffect)(function () {
            var e = new URLSearchParams(window.location.search);
            n = e.get(j.cj);
          }, []);
          var S = (0, r.useState)({}),
            Z = (0, t.Z)(S, 2),
            Y = Z[0],
            I = Z[1];
          (0, r.useEffect)(
            function () {
              Y && Object.keys(Y).length > 0 && q(Y);
            },
            [Y],
          );
          var C = (function () {
              var e = (0, m.Z)(
                (0, f.Z)().mark(function e(s) {
                  var t;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I({ message: s, seq: 2, type: "user" }),
                            (e.next = 3),
                            (0, y.U)("".concat(j.Uf.BIRTHDAY_URI), [
                              {
                                key: j.Uf.BIRTHDAY_PARAM_KEY,
                                value: s.replace(/-/g, "/"),
                              },
                              { key: j.cj, value: n },
                            ])
                          );
                        case 3:
                          (t = e.sent),
                            I({
                              message: t.message,
                              chatId: t.chatId,
                              seq: 3,
                              type: "bot",
                            }),
                            setTimeout(function () {
                              I({
                                message: t.question,
                                chatId: t.chatId,
                                seq: 4,
                                type: "bot",
                                selected: [],
                                esentials: t.data.answers,
                              });
                            }, 2e3);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = (0, m.Z)(
                (0, f.Z)().mark(function e() {
                  var s, t, a, r, i;
                  return (0, f.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = b.find(function (e) {
                              return 4 === e.seq;
                            })),
                            (t = s.selected),
                            (a = []),
                            s.esentials.forEach(function (e, n) {
                              t.includes(n) && a.push(e);
                            }),
                            (e.next = 6),
                            (0, y.U)("".concat(j.Uf.DRILL_URL), [
                              { key: j.Uf.DRILL_PARAM_KEY, value: a.join(",") },
                              { key: "chatId", value: s.chatId },
                              { key: j.Uf.USE_MOCK, value: n },
                            ])
                          );
                        case 6:
                          (r = e.sent),
                            (i = r.data.map(function (e) {
                              return {
                                message: e.question,
                                seq: 6,
                                keyName: e.key,
                                type: "bot",
                                esentials: e.answers,
                                selected: [],
                              };
                            })),
                            E([].concat((0, h.Z)(b), (0, h.Z)(i)));
                        case 9:
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
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)("div", {
                className: "bot-message",
                children: [
                  (0, c.jsx)("div", {
                    className: "ai-icon",
                    children: (0, c.jsx)(g.EbayIcon, {
                      name: "aiSpectrumFilled24Colored",
                    }),
                  }),
                  0 === o
                    ? (0, c.jsx)(M, {
                        text: s,
                        afterLogin: function (e) {
                          I({
                            message: "Hey ".concat(
                              e,
                              ", Please enter the due/birth date of your little one to receive tailored buying & selling suggestions for pre-loved children's products.",
                            ),
                            seq: 1,
                            type: "bot",
                          });
                        },
                      })
                    : null,
                  1 === o
                    ? (0, c.jsx)(p, {
                        message: s,
                        seq: o,
                        type: l,
                        addNewMessage: C,
                      })
                    : null,
                  3 === o ? (0, c.jsx)(v, { message: s }) : null,
                  4 === o
                    ? (0, c.jsx)(N, {
                        message: s,
                        esentials: d,
                        readyFn: function (e) {
                          b.some(function (e) {
                            return 5 === e.seq;
                          }) ||
                            I({
                              message: "Do you want to add more options?",
                              seq: 5,
                              type: "bot",
                            }),
                            b
                              .find(function (e) {
                                return 4 === e.seq;
                              })
                              .selected.push(e);
                        },
                      })
                    : null,
                  5 === o ? (0, c.jsx)(k, { message: s, next: D }) : null,
                  6 === o
                    ? (0, c.jsx)(N, {
                        message: s,
                        keyName: i,
                        esentials: d,
                        readyFn: function (e, n) {
                          b.some(function (e) {
                            return 7 === e.seq;
                          }) ||
                            I({
                              message:
                                "Are there any other types of products you\u2019re interested in today?",
                              seq: 7,
                              type: "bot",
                            }),
                            b
                              .find(function (e) {
                                return 6 === e.seq && e.keyName === n;
                              })
                              .selected.push(e);
                        },
                      })
                    : null,
                  7 === o
                    ? (0, c.jsx)(k, {
                        message: s,
                        next: function () {
                          var e = [];
                          b
                            .filter(function (e) {
                              return 6 === e.seq && e.keyName;
                            })
                            .map(function (n) {
                              n.selected.map(function (s) {
                                var t = e.find(function (e) {
                                  return e.key === n.keyName;
                                });
                                return (
                                  t
                                    ? t.value.push(n.esentials[s])
                                    : e.push({
                                        key: n.keyName,
                                        value: [n.esentials[s]],
                                      }),
                                  t
                                );
                              });
                            }),
                            I({
                              message:
                                '<div>\n        <div>Based on your preferences we have curated a selection of pre-loved products easily delivered or in your area. </div>\n        <div style="margin: 10px"><a href="http://localhost:8099/build/target.html">Shop now!</a></div>\n        <div>\n        Thanks for thinking pre-loved!\n        </div>\n        </div>',
                              seq: 8,
                              type: "bot",
                            });
                        },
                      })
                    : null,
                  8 === o ? (0, c.jsx)(w, { message: s }) : null,
                ],
              }),
              (0, c.jsx)(a.EbaySvg, {}),
            ],
          });
        },
        Z = function (e) {
          var n = e.message;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("div", {
                className: "user-message",
                children: (0, c.jsx)("div", { children: n }),
              }),
              (0, c.jsx)(a.EbaySvg, {}),
            ],
          });
        },
        Y = function (e) {
          var n = e.messages;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("div", {
                className: "chat-messages",
                children: n.map(function (e) {
                  return "bot" === e.type
                    ? (0, c.jsx)(
                        "div",
                        {
                          className: "chat-message",
                          children: (0, c.jsx)(S, (0, d.Z)({}, e)),
                        },
                        e.seq,
                      )
                    : (0, c.jsx)(
                        "div",
                        {
                          className: "chat-message",
                          children: (0, c.jsx)(Z, (0, d.Z)({}, e)),
                        },
                        e.seq,
                      );
                }),
              }),
              (0, c.jsx)(a.EbaySvg, {}),
            ],
          });
        },
        I = function () {
          var e = (0, u.useChats)(),
            n = e.data,
            s = e.onAddNewMessage,
            t = e.onAddNewMessages;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)("div", {
                className: "chat-form",
                children: [
                  (0, c.jsx)("input", {
                    type: "text",
                    onKeyDown: function (e) {
                      var a;
                      13 === e.keyCode &&
                        ((a = e.target.value),
                        s({ message: a, seq: n.length + 1, type: "user" }),
                        1 == n.length &&
                          setTimeout(function () {
                            t([{ message: "Greetings", seq: 3, type: "bot" }]);
                          }, 1e3),
                        (e.target.value = ""));
                    },
                    className: "chat-input",
                    id: "user-input",
                    placeholder: "Ask me anything...",
                  }),
                  (0, c.jsx)("label", {
                    htmlFor: "voice-input",
                    className: "voice-upload",
                    children: (0, c.jsx)(g.EbayIcon, { name: "microphone16" }),
                  }),
                  (0, c.jsx)("input", {
                    type: "file",
                    accept: "image/*",
                    capture: "camera",
                    id: "photo-input",
                    className: "photo-input",
                  }),
                  (0, c.jsx)("label", {
                    htmlFor: "photo-input",
                    className: "photo-upload",
                    children: (0, c.jsx)(g.EbayIcon, { name: "camera16" }),
                  }),
                ],
              }),
              (0, c.jsx)(a.EbaySvg, {}),
            ],
          });
        },
        C = function () {
          var e = (0, u.useChats)().data,
            n = (0, r.useState)([]),
            s = (0, t.Z)(n, 2),
            i = s[0],
            o = s[1];
          return (
            (0, r.useEffect)(
              function () {
                o(e);
              },
              [e],
            ),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsxs)("div", {
                  className: "chat-window",
                  children: [
                    (0, c.jsx)(l, {}),
                    (0, c.jsx)(Y, { messages: i }),
                    (0, c.jsx)(I, {}),
                  ],
                }),
                (0, c.jsx)(a.EbaySvg, {}),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=958.97fc90db.chunk.js.map
