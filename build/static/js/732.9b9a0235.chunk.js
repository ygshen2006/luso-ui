"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [732],
  {
    67732: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(1413),
        a = n(74165),
        i = n(15861),
        o = n(29439),
        s = n(94856),
        l = n(39186),
        u = n(16474),
        c = n(4867),
        d = n(72791),
        f = (n(28708), n(49687)),
        p = n(95768),
        h = n(99680),
        v = n(23542),
        m = (n(1461), n(44086)),
        g = n(80184),
        x = function (e) {
          var t = e.id,
            n = e.title,
            r = void 0 === n ? "" : n,
            x = e.content,
            b = void 0 === x ? "" : x,
            j = e.onSavePost,
            Z = e.onUploadImage,
            y = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e() {
                  var n;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (A) {
                            e.next = 3;
                            break;
                          }
                          return G(!0), e.abrupt("return");
                        case 3:
                          return oe(!0), (e.next = 6), j(t, k, "todo", A);
                        case 6:
                          (n = e.sent) && n.id && (Y(!0), ne(n));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            S = (0, d.useState)(r),
            w = (0, o.Z)(S, 2),
            k = w[0],
            T = w[1],
            P = (0, d.useState)(!1),
            C = (0, o.Z)(P, 2),
            E = C[0],
            U = C[1],
            I = (0, d.useState)(""),
            N = (0, o.Z)(I, 2),
            _ = N[0],
            D = N[1],
            H = (0, d.useState)(""),
            O = (0, o.Z)(H, 2)[1],
            F = (0, d.useState)(b),
            R = (0, o.Z)(F, 2),
            A = R[0],
            L = R[1],
            M = (0, d.useState)([]),
            V = (0, o.Z)(M, 2),
            q = V[0],
            z = V[1],
            B = (0, d.useState)(!1),
            J = (0, o.Z)(B, 2),
            X = J[0],
            G = J[1],
            K = (0, d.useState)(!1),
            Q = (0, o.Z)(K, 2),
            W = Q[0],
            Y = Q[1],
            $ = (0, d.useState)({}),
            ee = (0, o.Z)($, 2),
            te = ee[0],
            ne = ee[1];
          var re = (0, d.useState)(!1),
            ae = (0, o.Z)(re, 2),
            ie = ae[0],
            oe = ae[1];
          var se = (0, m.Z)(),
            le = (0, o.Z)(se, 1)[0];
          return (
            (0, d.useEffect)(
              function () {
                t && (T(r), le.setFieldValue("title", r), L(b));
              },
              [t],
            ),
            (0, g.jsxs)("div", {
              className: "container py-5 text-center",
              children: [
                (0, g.jsxs)(h.EbayAlertDialog, {
                  open: X,
                  confirmText: "\u53bb\u8865\u5145",
                  onConfirm: function () {
                    G(!1);
                  },
                  a11yClosetext: "Close",
                  children: [
                    (0, g.jsx)(v.EbayDialogHeader, {
                      children: "\u8bf7\u8f93\u5165\u5b8c\u6574\u5b57\u6bb5",
                    }),
                    (0, g.jsx)("p", {
                      children:
                        "\u6240\u6709\u5b57\u6bb5\u5747\u4e3a\u5fc5\u586b\u9879",
                    }),
                  ],
                }),
                (0, g.jsxs)(h.EbayAlertDialog, {
                  open: W,
                  confirmText: "\u8df3\u8f6c\u5230\u6587\u7ae0\u5217\u8868",
                  onConfirm: function () {
                    window.location.href = "/post/".concat(te.id);
                  },
                  a11yClosetext: "Close",
                  children: [
                    (0, g.jsx)(v.EbayDialogHeader, {
                      children: "\u4fdd\u5b58\u6210\u529f\ud83c\udf89",
                    }),
                    (0, g.jsx)("p", {
                      children:
                        "\u4fdd\u5b58\u6210\u529f\uff0c\u70b9\u51fb\u5230\u6587\u7ae0\u5217\u8868\u67e5\u770b\u6240\u6709\u6587\u7ae0\u3002",
                    }),
                  ],
                }),
                (0, g.jsxs)(s.Z, {
                  className: "post-form",
                  name: "basic",
                  initialValues: { remember: !0 },
                  onFinish: y,
                  onFinishFailed: function () {
                    G(!0);
                  },
                  autoComplete: "off",
                  form: le,
                  children: [
                    (0, g.jsx)("div", {
                      children: (0, g.jsx)(s.Z.Item, {
                        label: "\u6807\u9898",
                        name: "title",
                        rules: [
                          { required: !0, message: "Please input your title!" },
                        ],
                        children: (0, g.jsx)(l.Z, {
                          value: k,
                          onChange: function (e) {
                            T(e.target.value);
                          },
                          placeHolder:
                            "\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898...",
                        }),
                      }),
                    }),
                    (0, g.jsx)("div", {
                      style: { display: "none" },
                      children: (0, g.jsx)(s.Z.Item, {
                        label: "\u5c01\u9762",
                        name: "cover",
                        children: (0, g.jsxs)("div", {
                          className: "cover",
                          children: [
                            (0, g.jsx)(u.Z, {
                              listType: "picture-card",
                              fileList: q,
                              onPreview: function (e) {
                                D(e.thumbUrl), U(!0);
                              },
                              onChange: function (e) {
                                var t,
                                  n = e.fileList;
                                z(n),
                                  n.length > 0 &&
                                    ((t = n[0].originFileObj),
                                    new Promise(function (e, n) {
                                      var r = new FileReader();
                                      r.readAsDataURL(t),
                                        (r.onload = function () {
                                          return e(r.result);
                                        }),
                                        (r.onerror = function (e) {
                                          return n(e);
                                        });
                                    })).then(function (e) {
                                      O(e);
                                    });
                              },
                              children:
                                q.length < 1 && "+ \u4e0a\u4f20\u5c01\u9762",
                            }),
                            (0, g.jsx)(c.Z, {
                              visible: E,
                              title: "Preview",
                              footer: null,
                              onCancel: function () {
                                U(!1);
                              },
                              children: (0, g.jsx)("img", {
                                alt: "Preview",
                                style: { width: "100%" },
                                src: _,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, g.jsx)("div", {
                      children: (0, g.jsx)(f.M, {
                        value: A,
                        apiKey:
                          "2jhvkjrvlnoj8ak334n2tzi6n3ltegj0pl128h3lhd0s4bpo",
                        initialValue:
                          "<p>This is the initial content of the editor</p>",
                        init: {
                          language: "zh-Hans",
                          language_url: "../../../zh-Hans.js",
                          menubar: !0,
                          height: 500,
                          images_upload_handler: Z,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                            "image",
                          ],
                          toolbar:
                            "undo redo | formatselect | bold italic backcolor |             alignleft aligncenter alignright alignjustify |             bullist numlist outdent indent | removeformat | help |             image",
                        },
                        onEditorChange: function (e) {
                          L(e);
                        },
                      }),
                    }),
                    (0, g.jsx)("div", {
                      className: "saveBtn",
                      children: (0, g.jsx)(p.EbayButton, {
                        disabled: ie,
                        htmlType: "submit",
                        priority: "primary",
                        children: "\u4fdd\u5b58",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        b = n(36234),
        j = n(53585),
        Z = n(84372),
        y = n(57689),
        S = function () {
          var e = (0, d.useState)({
              id: "",
              title: "",
              "cover-image": "",
              content: "",
            }),
            t = (0, o.Z)(e, 2),
            n = t[0],
            r = t[1],
            s = (0, y.UO)().id;
          return (
            (0, d.useEffect)(function () {
              var e = (function () {
                var e = (0, i.Z)(
                  (0, a.Z)().mark(function e() {
                    var t;
                    return (0, a.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!s) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3),
                              (0, b.U)(j.SN.POST_URI, [
                                { key: "useMock", value: "true" },
                                { key: "id", value: s },
                              ])
                            );
                          case 3:
                            (t = e.sent), r(t);
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
            { post: n }
          );
        },
        w = function () {
          var e = S().post,
            t = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(t, n, r, i) {
                  var o, s;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = {
                              title: n,
                              "cover-image": "todo",
                              content: i,
                            }),
                            t && (o.id = t),
                            (e.next = 4),
                            (0, b.a)(
                              t ? j.SN.POST_UPDATE_URI : j.SN.POST_SAVE_URI,
                              [{ key: "useMock", value: "true" }],
                              o,
                            )
                          );
                        case 4:
                          return (s = e.sent), e.abrupt("return", s);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t, n, r, a) {
                return e.apply(this, arguments);
              };
            })();
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(Z.Z, { activeIndex: "post" }),
              (0, g.jsx)(
                x,
                (0, r.Z)(
                  (0, r.Z)({}, e),
                  {},
                  {
                    onSavePost: t,
                    onUploadImage: function (e, t) {
                      return new Promise(function (n, r) {
                        var a = new XMLHttpRequest();
                        (a.withCredentials = !1),
                          a.open(
                            "POST",
                            ""
                              .concat(
                                j.ED + j.SN.POST_UPLOAD_IMAGE,
                                "?fileName=",
                              )
                              .concat(new Date().getTime(), ".jpeg"),
                          ),
                          a.setRequestHeader(
                            "luso_token",
                            "c6c54ce4-dc21-4e87-bdab-482dc6f0c96b",
                          ),
                          (a.upload.onprogress = function () {}),
                          (a.onload = function () {
                            if (403 !== a.status)
                              if (a.status < 200 || a.status >= 300)
                                r("HTTP Error: " + a.status);
                              else {
                                var e = JSON.parse(a.responseText);
                                e && "string" == typeof e.thumbUrl
                                  ? (t(e.thumbUrl), n())
                                  : r("Invalid JSON: " + a.responseText);
                              }
                            else
                              r({
                                message: "HTTP Error: " + a.status,
                                remove: !0,
                              });
                          }),
                          (a.onerror = function () {
                            r(
                              "Image upload failed due to a XHR Transport error. Code: " +
                                a.status,
                            );
                          });
                        var i = new FormData();
                        i.append("file", e.blob()), a.send(i);
                      });
                    },
                  },
                ),
              ),
            ],
          });
        };
    },
    28708: function () {},
  },
]);
//# sourceMappingURL=732.9b9a0235.chunk.js.map
