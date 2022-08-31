!(function e(t, n, o) {
  function i(a, d) {
    if (!n[a]) {
      if (!t[a]) {
        var c = "function" == typeof require && require;
        if (!d && c) return c(a, !0);
        if (r) return r(a, !0);
        var s = new Error("Cannot find module '" + a + "'");
        throw ((s.code = "MODULE_NOT_FOUND"), s);
      }
      var l = (n[a] = { exports: {} });
      t[a][0].call(
        l.exports,
        function (e) {
          return i(t[a][1][e] || e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        o
      );
    }
    return n[a].exports;
  }
  for (
    var r = "function" == typeof require && require, a = 0;
    a < o.length;
    a++
  )
    i(o[a]);
  return i;
})(
  {
    1: [
      function (e, t, n) {
        var o = e("dragula");
        !(function () {
          this.jKanban = function () {
            var e = this,
              t = { enabled: !1 },
              n = { enabled: !1 };
            (this._disallowedItemProperties = [
              "id",
              "title",
              "click",
              "drag",
              "dragend",
              "drop",
              "order",
            ]),
              (this.element = ""),
              (this.container = ""),
              (this.boardContainer = []),
              (this.handlers = []),
              (this.dragula = o),
              (this.drake = ""),
              (this.drakeBoard = ""),
              (this.itemAddOptions = n),
              (this.itemHandleOptions = t);
            var i = {
              element: "",
              gutter: "15px",
              widthBoard: "250px",
              responsive: "700",
              responsivePercentage: !1,
              boards: [],
              dragBoards: !0,
              dragItems: !0,
              itemAddOptions: n,
              itemHandleOptions: t,
              dragEl: function (e, t) {},
              dragendEl: function (e) {},
              dropEl: function (e, t, n, o) {},
              dragBoard: function (e, t) {},
              dragendBoard: function (e) {},
              dropBoard: function (e, t, n, o) {},
              click: function (e) {},
              buttonClick: function (e, t) {},
            };
            function r(t, n) {
              t.addEventListener("click", function (t) {
                t.preventDefault(),
                  e.options.click(this),
                  "function" == typeof this.clickfn && this.clickfn(this);
              });
            }
            function a(t, n) {
              t.addEventListener("click", function (t) {
                t.preventDefault(), e.options.buttonClick(this, n);
              });
            }
            function d(t) {
              var n = [];
              return (
                e.options.boards.map(function (e) {
                  if (e.id === t) return n.push(e);
                }),
                n[0]
              );
            }
            function c(t, n) {
              for (var o in n)
                e._disallowedItemProperties.indexOf(o) > -1 ||
                  t.setAttribute("data-" + o, n[o]);
            }
            function s(t) {
              var n = t;
              if (e.options.itemHandleOptions.enabled)
                if (
                  void 0 ===
                  (e.options.itemHandleOptions.customHandler || void 0)
                ) {
                  var o = e.options.itemHandleOptions.customCssHandler,
                    i = e.options.itemHandleOptions.customCssIconHandler;
                  void 0 === (o || void 0) && (o = "drag_handler"),
                    void 0 === (i || void 0) && (i = o + "_icon"),
                    (n =
                      "<div class='item_handle " +
                      o +
                      "'><i class='item_handle " +
                      i +
                      "'></i></div><div>" +
                      n +
                      "</div>");
                } else
                  n = e.options.itemHandleOptions.customHandler.replace(
                    "%s",
                    n
                  );
              return n;
            }
            arguments[0] &&
              "object" == typeof arguments[0] &&
              (this.options = (function (e, t) {
                var n;
                for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e;
              })(i, arguments[0])),
              (this.__getCanMove = function (t) {
                return e.options.itemHandleOptions.enabled
                  ? e.options.itemHandleOptions.handleClass
                    ? t.classList.contains(
                        e.options.itemHandleOptions.handleClass
                      )
                    : t.classList.contains("item_handle")
                  : !!e.options.dragItems;
              }),
              (this.init = function () {
                !(function () {
                  e.element = document.querySelector(e.options.element);
                  var t = document.createElement("div");
                  t.classList.add("kanban-container"),
                    (e.container = t),
                    document
                      .querySelector(e.options.element)
                      .dataset.hasOwnProperty("board")
                      ? ((url = document.querySelector(e.options.element)
                          .dataset.board),
                        window
                          .fetch(url, {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                          })
                          .then((t) => {
                            t.json().then(function (t) {
                              (e.options.boards = t),
                                e.addBoards(e.options.boards, !0);
                            });
                          })
                          .catch((e) => {
                            console.log("Errors: ", e);
                          }))
                      : e.addBoards(e.options.boards, !0),
                    e.element.appendChild(e.container);
                })(),
                  window.innerWidth > e.options.responsive &&
                    ((e.drakeBoard = e
                      .dragula([e.container], {
                        moves: function (t, n, o, i) {
                          return (
                            !!e.options.dragBoards &&
                            (o.classList.contains("kanban-board-header") ||
                              o.classList.contains("kanban-title-board"))
                          );
                        },
                        accepts: function (e, t, n, o) {
                          return t.classList.contains("kanban-container");
                        },
                        revertOnSpill: !0,
                        direction: "horizontal",
                      })
                      .on("drag", function (t, n) {
                        t.classList.add("is-moving"),
                          e.options.dragBoard(t, n),
                          "function" == typeof t.dragfn && t.dragfn(t, n);
                      })
                      .on("dragend", function (t) {
                        !(function () {
                          for (
                            var t = 1, n = 0;
                            n < e.container.childNodes.length;
                            n++
                          )
                            e.container.childNodes[n].dataset.order = t++;
                        })(),
                          t.classList.remove("is-moving"),
                          e.options.dragendBoard(t),
                          "function" == typeof t.dragendfn && t.dragendfn(t);
                      })
                      .on("drop", function (t, n, o, i) {
                        t.classList.remove("is-moving"),
                          e.options.dropBoard(t, n, o, i),
                          "function" == typeof t.dropfn && t.dropfn(t, n, o, i);
                      })),
                    (e.drake = e
                      .dragula(e.boardContainer, {
                        moves: function (t, n, o, i) {
                          return e.__getCanMove(o);
                        },
                        revertOnSpill: !0,
                      })
                      .on("cancel", function (t, n, o) {
                        e.enableAllBoards();
                      })
                      .on("drag", function (t, n) {
                        var o = t.getAttribute("class");
                        if ("" !== o && o.indexOf("not-draggable") > -1)
                          e.drake.cancel(!0);
                        else {
                          t.classList.add("is-moving"), e.options.dragEl(t, n);
                          var i = d(n.parentNode.dataset.id);
                          void 0 !== i.dragTo &&
                            e.options.boards.map(function (t) {
                              -1 === i.dragTo.indexOf(t.id) &&
                                t.id !== n.parentNode.dataset.id &&
                                e
                                  .findBoard(t.id)
                                  .classList.add("disabled-board");
                            }),
                            null !== t &&
                              "function" == typeof t.dragfn &&
                              t.dragfn(t, n);
                        }
                      })
                      .on("dragend", function (t) {
                        e.options.dragendEl(t),
                          null !== t &&
                            "function" == typeof t.dragendfn &&
                            t.dragendfn(t);
                      })
                      .on("drop", function (t, n, o, i) {
                        e.enableAllBoards();
                        var r = d(o.parentNode.dataset.id);
                        void 0 !== r.dragTo &&
                          -1 === r.dragTo.indexOf(n.parentNode.dataset.id) &&
                          n.parentNode.dataset.id !== o.parentNode.dataset.id &&
                          e.drake.cancel(!0),
                          null !== t &&
                            (!1 === e.options.dropEl(t, n, o, i) &&
                              e.drake.cancel(!0),
                            t.classList.remove("is-moving"),
                            "function" == typeof t.dropfn &&
                              t.dropfn(t, n, o, i));
                      })));
              }),
              (this.enableAllBoards = function () {
                var e = document.querySelectorAll(".kanban-board");
                if (e.length > 0 && void 0 !== e)
                  for (var t = 0; t < e.length; t++)
                    e[t].classList.remove("disabled-board");
              }),
              (this.addElement = function (t, n) {
                var o = e.element.querySelector(
                    '[data-id="' + t + '"] .kanban-drag'
                  ),
                  i = document.createElement("div");
                return (
                  i.classList.add("kanban-item"),
                  void 0 !== n.id &&
                    "" !== n.id &&
                    i.setAttribute("data-eid", n.id),
                  n.class &&
                    Array.isArray(n.class) &&
                    n.class.forEach(function (e) {
                      i.classList.add(e);
                    }),
                  (i.innerHTML = s(n.title)),
                  (i.clickfn = n.click),
                  (i.dragfn = n.drag),
                  (i.dragendfn = n.dragend),
                  (i.dropfn = n.drop),
                  c(i, n),
                  r(i),
                  e.options.itemHandleOptions.enabled &&
                    (i.style.cursor = "default"),
                  o.appendChild(i),
                  e
                );
              }),
              (this.addForm = function (t, n) {
                var o = e.element.querySelector(
                    '[data-id="' + t + '"] .kanban-drag'
                  ),
                  i = n.getAttribute("class");
                return (
                  n.setAttribute("class", i + " not-draggable"),
                  o.appendChild(n),
                  e
                );
              }),
              (this.addBoards = function (t, n) {
                if (e.options.responsivePercentage)
                  if (
                    ((e.container.style.width = "100%"),
                    (e.options.gutter = "1%"),
                    window.innerWidth > e.options.responsive)
                  )
                    var o = (100 - 2 * t.length) / t.length;
                  else o = 100 - 2 * t.length;
                else o = e.options.widthBoard;
                var i = e.options.itemAddOptions.enabled,
                  d = e.options.itemAddOptions.content,
                  l = e.options.itemAddOptions.class,
                  u = e.options.itemAddOptions.footer;
                for (var f in t) {
                  var p = t[f];
                  n || e.options.boards.push(p),
                    e.options.responsivePercentage ||
                      ("" === e.container.style.width
                        ? (e.container.style.width =
                            parseInt(o) + 2 * parseInt(e.options.gutter) + "px")
                        : (e.container.style.width =
                            parseInt(e.container.style.width) +
                            parseInt(o) +
                            2 * parseInt(e.options.gutter) +
                            "px"));
                  var m = document.createElement("div");
                  (m.dataset.id = p.id),
                    (m.dataset.order = e.container.childNodes.length + 1),
                    m.classList.add("kanban-board"),
                    e.options.responsivePercentage
                      ? (m.style.width = o + "%")
                      : (m.style.width = o),
                    (m.style.marginLeft = e.options.gutter),
                    (m.style.marginRight = e.options.gutter);
                  var v = document.createElement("header");
                  if ("" !== p.class && void 0 !== p.class)
                    var h = p.class.split(",");
                  else h = [];
                  v.classList.add("kanban-board-header"),
                    h.map(function (e) {
                      (e = e.replace(/^[ ]+/g, "")), v.classList.add(e);
                    }),
                    (v.innerHTML =
                      '<div class="kanban-title-board">' + p.title + "</div>");
                  var g = document.createElement("main");
                  if (
                    (g.classList.add("kanban-drag"),
                    "" !== p.bodyClass && void 0 !== p.bodyClass)
                  )
                    var b = p.bodyClass.split(",");
                  else b = [];
                  for (var y in (b.map(function (e) {
                    g.classList.add(e);
                  }),
                  e.boardContainer.push(g),
                  p.item)) {
                    var w = p.item[y],
                      E = document.createElement("div");
                    E.classList.add("kanban-item"),
                      w.id && (E.dataset.eid = w.id),
                      w.class &&
                        Array.isArray(w.class) &&
                        w.class.forEach(function (e) {
                          E.classList.add(e);
                        }),
                      (E.innerHTML = s(w.title)),
                      (E.clickfn = w.click),
                      (E.dragfn = w.drag),
                      (E.dragendfn = w.dragend),
                      (E.dropfn = w.drop),
                      c(E, w),
                      r(E),
                      e.options.itemHandleOptions.enabled &&
                        (E.style.cursor = "default"),
                      g.appendChild(E);
                  }
                  var T = document.createElement("footer");
                  if (i) {
                    var C = document.createElement("BUTTON"),
                      O = document.createTextNode(d || "+");
                    C.setAttribute(
                      "class",
                      l || "kanban-title-button btn btn-default btn-xs"
                    ),
                      C.appendChild(O),
                      u ? T.appendChild(C) : v.appendChild(C),
                      a(C, p.id);
                  }
                  m.appendChild(v),
                    m.appendChild(g),
                    m.appendChild(T),
                    e.container.appendChild(m);
                }
                return e;
              }),
              (this.findBoard = function (t) {
                return e.element.querySelector('[data-id="' + t + '"]');
              }),
              (this.getParentBoardID = function (t) {
                return (
                  "string" == typeof t &&
                    (t = e.element.querySelector('[data-eid="' + t + '"]')),
                  null === t ? null : t.parentNode.parentNode.dataset.id
                );
              }),
              (this.moveElement = function (e, t, n) {
                if (e !== this.getParentBoardID(t))
                  return this.removeElement(t), this.addElement(e, n);
              }),
              (this.replaceElement = function (t, n) {
                var o = t;
                return (
                  "string" == typeof o &&
                    (o = e.element.querySelector('[data-eid="' + t + '"]')),
                  (o.innerHTML = n.title),
                  (o.clickfn = n.click),
                  (o.dragfn = n.drag),
                  (o.dragendfn = n.dragend),
                  (o.dropfn = n.drop),
                  c(o, n),
                  e
                );
              }),
              (this.findElement = function (t) {
                return e.element.querySelector('[data-eid="' + t + '"]');
              }),
              (this.getBoardElements = function (t) {
                return e.element.querySelector(
                  '[data-id="' + t + '"] .kanban-drag'
                ).childNodes;
              }),
              (this.removeElement = function (t) {
                return (
                  "string" == typeof t &&
                    (t = e.element.querySelector('[data-eid="' + t + '"]')),
                  null !== t &&
                    ("function" == typeof t.remove
                      ? t.remove()
                      : t.parentNode.removeChild(t)),
                  e
                );
              }),
              (this.removeBoard = function (t) {
                var n = null;
                "string" == typeof t &&
                  (n = e.element.querySelector('[data-id="' + t + '"]')),
                  null !== n &&
                    ("function" == typeof n.remove
                      ? n.remove()
                      : n.parentNode.removeChild(n));
                for (var o = 0; o < e.options.boards.length; o++)
                  if (e.options.boards[o].id === t) {
                    e.options.boards.splice(o, 1);
                    break;
                  }
                return e;
              }),
              (this.onButtonClick = function (e) {}),
              this.init();
          };
        })();
      },
      { dragula: 9 },
    ],
    2: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return Array.prototype.slice.call(e, t);
        };
      },
      {},
    ],
    3: [
      function (e, t, n) {
        "use strict";
        var o = e("ticky");
        t.exports = function (e, t, n) {
          e &&
            o(function () {
              e.apply(n || null, t || []);
            });
        };
      },
      { ticky: 11 },
    ],
    4: [
      function (e, t, n) {
        "use strict";
        var o = e("atoa"),
          i = e("./debounce");
        t.exports = function (e, t) {
          var n = t || {},
            r = {};
          return (
            void 0 === e && (e = {}),
            (e.on = function (t, n) {
              return r[t] ? r[t].push(n) : (r[t] = [n]), e;
            }),
            (e.once = function (t, n) {
              return (n._once = !0), e.on(t, n), e;
            }),
            (e.off = function (t, n) {
              var o = arguments.length;
              if (1 === o) delete r[t];
              else if (0 === o) r = {};
              else {
                var i = r[t];
                if (!i) return e;
                i.splice(i.indexOf(n), 1);
              }
              return e;
            }),
            (e.emit = function () {
              var t = o(arguments);
              return e.emitterSnapshot(t.shift()).apply(this, t);
            }),
            (e.emitterSnapshot = function (t) {
              var a = (r[t] || []).slice(0);
              return function () {
                var r = o(arguments),
                  d = this || e;
                if ("error" === t && !1 !== n.throws && !a.length)
                  throw 1 === r.length ? r[0] : r;
                return (
                  a.forEach(function (o) {
                    n.async ? i(o, r, d) : o.apply(d, r),
                      o._once && e.off(t, o);
                  }),
                  e
                );
              };
            }),
            e
          );
        };
      },
      { "./debounce": 3, atoa: 2 },
    ],
    5: [
      function (e, t, n) {
        (function (n) {
          (function () {
            "use strict";
            var o = e("custom-event"),
              i = e("./eventmap"),
              r = n.document,
              a = function (e, t, n, o) {
                return e.addEventListener(t, n, o);
              },
              d = function (e, t, n, o) {
                return e.removeEventListener(t, n, o);
              },
              c = [];
            function s(e, t, n) {
              var o = (function (e, t, n) {
                var o, i;
                for (o = 0; o < c.length; o++)
                  if ((i = c[o]).element === e && i.type === t && i.fn === n)
                    return o;
              })(e, t, n);
              if (o) {
                var i = c[o].wrapper;
                return c.splice(o, 1), i;
              }
            }
            n.addEventListener ||
              ((a = function (e, t, o) {
                return e.attachEvent(
                  "on" + t,
                  (function (e, t, o) {
                    var i =
                      s(e, t, o) ||
                      (function (e, t, o) {
                        return function (t) {
                          var i = t || n.event;
                          (i.target = i.target || i.srcElement),
                            (i.preventDefault =
                              i.preventDefault ||
                              function () {
                                i.returnValue = !1;
                              }),
                            (i.stopPropagation =
                              i.stopPropagation ||
                              function () {
                                i.cancelBubble = !0;
                              }),
                            (i.which = i.which || i.keyCode),
                            o.call(e, i);
                        };
                      })(e, 0, o);
                    return (
                      c.push({ wrapper: i, element: e, type: t, fn: o }), i
                    );
                  })(e, t, o)
                );
              }),
              (d = function (e, t, n) {
                var o = s(e, t, n);
                if (o) return e.detachEvent("on" + t, o);
              })),
              (t.exports = {
                add: a,
                remove: d,
                fabricate: function (e, t, n) {
                  var a =
                    -1 === i.indexOf(t)
                      ? new o(t, { detail: n })
                      : (function () {
                          var e;
                          return (
                            r.createEvent
                              ? (e = r.createEvent("Event")).initEvent(
                                  t,
                                  !0,
                                  !0
                                )
                              : r.createEventObject &&
                                (e = r.createEventObject()),
                            e
                          );
                        })();
                  e.dispatchEvent
                    ? e.dispatchEvent(a)
                    : e.fireEvent("on" + t, a);
                },
              });
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { "./eventmap": 6, "custom-event": 7 },
    ],
    6: [
      function (e, t, n) {
        (function (e) {
          (function () {
            "use strict";
            var n = [],
              o = "",
              i = /^on/;
            for (o in e) i.test(o) && n.push(o.slice(2));
            t.exports = n;
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    7: [
      function (e, t, n) {
        (function (e) {
          (function () {
            var n = e.CustomEvent;
            t.exports = (function () {
              try {
                var e = new n("cat", { detail: { foo: "bar" } });
                return "cat" === e.type && "bar" === e.detail.foo;
              } catch (e) {}
              return !1;
            })()
              ? n
              : "undefined" != typeof document &&
                "function" == typeof document.createEvent
              ? function (e, t) {
                  var n = document.createEvent("CustomEvent");
                  return (
                    t
                      ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
                      : n.initCustomEvent(e, !1, !1, void 0),
                    n
                  );
                }
              : function (e, t) {
                  var n = document.createEventObject();
                  return (
                    (n.type = e),
                    t
                      ? ((n.bubbles = Boolean(t.bubbles)),
                        (n.cancelable = Boolean(t.cancelable)),
                        (n.detail = t.detail))
                      : ((n.bubbles = !1),
                        (n.cancelable = !1),
                        (n.detail = void 0)),
                    n
                  );
                };
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    8: [
      function (e, t, n) {
        "use strict";
        var o = {};
        function i(e) {
          var t = o[e];
          return (
            t
              ? (t.lastIndex = 0)
              : (o[e] = t = new RegExp("(?:^|\\s)" + e + "(?:\\s|$)", "g")),
            t
          );
        }
        t.exports = {
          add: function (e, t) {
            var n = e.className;
            n.length
              ? i(t).test(n) || (e.className += " " + t)
              : (e.className = t);
          },
          rm: function (e, t) {
            e.className = e.className.replace(i(t), " ").trim();
          },
        };
      },
      {},
    ],
    9: [
      function (e, t, n) {
        (function (n) {
          (function () {
            "use strict";
            var o = e("contra/emitter"),
              i = e("crossvent"),
              r = e("./classes"),
              a = document,
              d = a.documentElement;
            function c(e, t, o, r) {
              n.navigator.pointerEnabled
                ? i[t](
                    e,
                    {
                      mouseup: "pointerup",
                      mousedown: "pointerdown",
                      mousemove: "pointermove",
                    }[o],
                    r
                  )
                : n.navigator.msPointerEnabled
                ? i[t](
                    e,
                    {
                      mouseup: "MSPointerUp",
                      mousedown: "MSPointerDown",
                      mousemove: "MSPointerMove",
                    }[o],
                    r
                  )
                : (i[t](
                    e,
                    {
                      mouseup: "touchend",
                      mousedown: "touchstart",
                      mousemove: "touchmove",
                    }[o],
                    r
                  ),
                  i[t](e, o, r));
            }
            function s(e) {
              if (void 0 !== e.touches) return e.touches.length;
              if (void 0 !== e.which && 0 !== e.which) return e.which;
              if (void 0 !== e.buttons) return e.buttons;
              var t = e.button;
              return void 0 !== t
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : void 0;
            }
            function l(e, t) {
              return void 0 !== n[t] ? n[t] : d.clientHeight ? d[e] : a.body[e];
            }
            function u(e, t, n) {
              var o,
                i = (e = e || {}).className || "";
              return (
                (e.className += " gu-hide"),
                (o = a.elementFromPoint(t, n)),
                (e.className = i),
                o
              );
            }
            function f() {
              return !1;
            }
            function p() {
              return !0;
            }
            function m(e) {
              return e.width || e.right - e.left;
            }
            function v(e) {
              return e.height || e.bottom - e.top;
            }
            function h(e) {
              return e.parentNode === a ? null : e.parentNode;
            }
            function g(e) {
              return (
                "INPUT" === e.tagName ||
                "TEXTAREA" === e.tagName ||
                "SELECT" === e.tagName ||
                (function e(t) {
                  return (
                    !!t &&
                    "false" !== t.contentEditable &&
                    ("true" === t.contentEditable || e(h(t)))
                  );
                })(e)
              );
            }
            function b(e) {
              return (
                e.nextElementSibling ||
                (function () {
                  var t = e;
                  do {
                    t = t.nextSibling;
                  } while (t && 1 !== t.nodeType);
                  return t;
                })()
              );
            }
            function y(e, t) {
              var n = (function (e) {
                  return e.targetTouches && e.targetTouches.length
                    ? e.targetTouches[0]
                    : e.changedTouches && e.changedTouches.length
                    ? e.changedTouches[0]
                    : e;
                })(t),
                o = { pageX: "clientX", pageY: "clientY" };
              return e in o && !(e in n) && o[e] in n && (e = o[e]), n[e];
            }
            t.exports = function (e, t) {
              var n, w, E, T, C, O, k, S, x, L, B;
              1 === arguments.length &&
                !1 === Array.isArray(e) &&
                ((t = e), (e = []));
              var N,
                I = null,
                A = t || {};
              void 0 === A.moves && (A.moves = p),
                void 0 === A.accepts && (A.accepts = p),
                void 0 === A.invalid &&
                  (A.invalid = function () {
                    return !1;
                  }),
                void 0 === A.containers && (A.containers = e || []),
                void 0 === A.isContainer && (A.isContainer = f),
                void 0 === A.copy && (A.copy = !1),
                void 0 === A.copySortSource && (A.copySortSource = !1),
                void 0 === A.revertOnSpill && (A.revertOnSpill = !1),
                void 0 === A.removeOnSpill && (A.removeOnSpill = !1),
                void 0 === A.direction && (A.direction = "vertical"),
                void 0 === A.ignoreInputTextSelection &&
                  (A.ignoreInputTextSelection = !0),
                void 0 === A.mirrorContainer && (A.mirrorContainer = a.body);
              var _ = o({
                containers: A.containers,
                start: function (e) {
                  var t = j(e);
                  t && F(t);
                },
                end: R,
                cancel: G,
                remove: W,
                destroy: function () {
                  P(!0), K({});
                },
                canMove: function (e) {
                  return !!j(e);
                },
                dragging: !1,
              });
              return (
                !0 === A.removeOnSpill &&
                  _.on("over", function (e) {
                    r.rm(e, "gu-hide");
                  }).on("out", function (e) {
                    _.dragging && r.add(e, "gu-hide");
                  }),
                P(),
                _
              );
              function H(e) {
                return -1 !== _.containers.indexOf(e) || A.isContainer(e);
              }
              function P(e) {
                var t = e ? "remove" : "add";
                c(d, t, "mousedown", X), c(d, t, "mouseup", K);
              }
              function q(e) {
                c(d, e ? "remove" : "add", "mousemove", Y);
              }
              function M(e) {
                var t = e ? "remove" : "add";
                i[t](d, "selectstart", D), i[t](d, "click", D);
              }
              function D(e) {
                N && e.preventDefault();
              }
              function X(e) {
                if (
                  ((O = e.clientX),
                  (k = e.clientY),
                  1 === s(e) && !e.metaKey && !e.ctrlKey)
                ) {
                  var t = e.target,
                    n = j(t);
                  n &&
                    ((N = n),
                    q(),
                    "mousedown" === e.type &&
                      (g(t) ? t.focus() : e.preventDefault()));
                }
              }
              function Y(e) {
                if (N)
                  if (0 !== s(e)) {
                    if (
                      !(
                        void 0 !== e.clientX &&
                        Math.abs(e.clientX - O) <= (A.slideFactorX || 0) &&
                        void 0 !== e.clientY &&
                        Math.abs(e.clientY - k) <= (A.slideFactorY || 0)
                      )
                    ) {
                      if (A.ignoreInputTextSelection) {
                        var t = y("clientX", e) || 0,
                          o = y("clientY", e) || 0;
                        if (g(a.elementFromPoint(t, o))) return;
                      }
                      var i = N;
                      q(!0), M(), R(), F(i);
                      var u,
                        f = {
                          left:
                            (u = E.getBoundingClientRect()).left +
                            l("scrollLeft", "pageXOffset"),
                          top: u.top + l("scrollTop", "pageYOffset"),
                        };
                      (T = y("pageX", e) - f.left),
                        (C = y("pageY", e) - f.top),
                        r.add(L || E, "gu-transit"),
                        (function () {
                          if (!n) {
                            var e = E.getBoundingClientRect();
                            ((n = E.cloneNode(!0)).style.width = m(e) + "px"),
                              (n.style.height = v(e) + "px"),
                              r.rm(n, "gu-transit"),
                              r.add(n, "gu-mirror"),
                              A.mirrorContainer.appendChild(n),
                              c(d, "add", "mousemove", Q),
                              r.add(A.mirrorContainer, "gu-unselectable"),
                              _.emit("cloned", n, E, "mirror");
                          }
                        })(),
                        Q(e);
                    }
                  } else K({});
              }
              function j(e) {
                if (!((_.dragging && n) || H(e))) {
                  for (var t = e; h(e) && !1 === H(h(e)); ) {
                    if (A.invalid(e, t)) return;
                    if (!(e = h(e))) return;
                  }
                  var o = h(e);
                  if (o && !A.invalid(e, t) && A.moves(e, o, t, b(e)))
                    return { item: e, source: o };
                }
              }
              function F(e) {
                var t, n;
                (t = e.item),
                  (n = e.source),
                  ("boolean" == typeof A.copy ? A.copy : A.copy(t, n)) &&
                    ((L = e.item.cloneNode(!0)),
                    _.emit("cloned", L, e.item, "copy")),
                  (w = e.source),
                  (E = e.item),
                  (S = x = b(e.item)),
                  (_.dragging = !0),
                  _.emit("drag", E, w);
              }
              function R() {
                if (_.dragging) {
                  var e = L || E;
                  z(e, h(e));
                }
              }
              function U() {
                (N = !1), q(!0), M(!0);
              }
              function K(e) {
                if ((U(), _.dragging)) {
                  var t = L || E,
                    o = y("clientX", e) || 0,
                    i = y("clientY", e) || 0,
                    r = J(u(n, o, i), o, i);
                  r && ((L && A.copySortSource) || !L || r !== w)
                    ? z(t, r)
                    : A.removeOnSpill
                    ? W()
                    : G();
                }
              }
              function z(e, t) {
                var n = h(e);
                L && A.copySortSource && t === w && n.removeChild(E),
                  $(t) ? _.emit("cancel", e, w, w) : _.emit("drop", e, t, w, x),
                  V();
              }
              function W() {
                if (_.dragging) {
                  var e = L || E,
                    t = h(e);
                  t && t.removeChild(e),
                    _.emit(L ? "cancel" : "remove", e, t, w),
                    V();
                }
              }
              function G(e) {
                if (_.dragging) {
                  var t = arguments.length > 0 ? e : A.revertOnSpill,
                    n = L || E,
                    o = h(n),
                    i = $(o);
                  !1 === i &&
                    t &&
                    (L ? o && o.removeChild(L) : w.insertBefore(n, S)),
                    i || t
                      ? _.emit("cancel", n, w, w)
                      : _.emit("drop", n, o, w, x),
                    V();
                }
              }
              function V() {
                var e = L || E;
                U(),
                  n &&
                    (r.rm(A.mirrorContainer, "gu-unselectable"),
                    c(d, "remove", "mousemove", Q),
                    h(n).removeChild(n),
                    (n = null)),
                  e && r.rm(e, "gu-transit"),
                  B && clearTimeout(B),
                  (_.dragging = !1),
                  I && _.emit("out", e, I, w),
                  _.emit("dragend", e),
                  (w = E = L = S = x = B = I = null);
              }
              function $(e, t) {
                var o;
                return (
                  (o = void 0 !== t ? t : n ? x : b(L || E)), e === w && o === S
                );
              }
              function J(e, t, n) {
                for (var o = e; o && !i(); ) o = h(o);
                return o;
                function i() {
                  if (!1 === H(o)) return !1;
                  var i = Z(o, e),
                    r = ee(o, i, t, n);
                  return !!$(o, r) || A.accepts(E, o, w, r);
                }
              }
              function Q(e) {
                if (n) {
                  e.preventDefault();
                  var t = y("clientX", e) || 0,
                    o = y("clientY", e) || 0,
                    i = t - T,
                    r = o - C;
                  (n.style.left = i + "px"), (n.style.top = r + "px");
                  var a = L || E,
                    d = u(n, t, o),
                    c = J(d, t, o),
                    s = null !== c && c !== I;
                  (s || null === c) && (I && m("out"), (I = c), s && m("over"));
                  var l = h(a);
                  if (c !== w || !L || A.copySortSource) {
                    var f,
                      p = Z(c, d);
                    if (null !== p) f = ee(c, p, t, o);
                    else {
                      if (!0 !== A.revertOnSpill || L)
                        return void (L && l && l.removeChild(a));
                      (f = S), (c = w);
                    }
                    ((null === f && s) || (f !== a && f !== b(a))) &&
                      ((x = f),
                      c.insertBefore(a, f),
                      _.emit("shadow", a, c, w));
                  } else l && l.removeChild(a);
                }
                function m(e) {
                  _.emit(e, a, I, w);
                }
              }
              function Z(e, t) {
                for (var n = t; n !== e && h(n) !== e; ) n = h(n);
                return n === d ? null : n;
              }
              function ee(e, t, n, o) {
                var i,
                  r = "horizontal" === A.direction;
                return t !== e
                  ? ((i = t.getBoundingClientRect()),
                    (function (e) {
                      return e ? b(t) : t;
                    })(r ? n > i.left + m(i) / 2 : o > i.top + v(i) / 2))
                  : (function () {
                      var t,
                        i,
                        a,
                        d = e.children.length;
                      for (t = 0; t < d; t++) {
                        if (
                          ((a = (i = e.children[t]).getBoundingClientRect()),
                          r && a.left + a.width / 2 > n)
                        )
                          return i;
                        if (!r && a.top + a.height / 2 > o) return i;
                      }
                      return null;
                    })();
              }
            };
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { "./classes": 8, "contra/emitter": 4, crossvent: 5 },
    ],
    10: [
      function (e, t, n) {
        var o,
          i,
          r = (t.exports = {});
        function a() {
          throw new Error("setTimeout has not been defined");
        }
        function d() {
          throw new Error("clearTimeout has not been defined");
        }
        function c(e) {
          if (o === setTimeout) return setTimeout(e, 0);
          if ((o === a || !o) && setTimeout)
            return (o = setTimeout), setTimeout(e, 0);
          try {
            return o(e, 0);
          } catch (t) {
            try {
              return o.call(null, e, 0);
            } catch (t) {
              return o.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            o = "function" == typeof setTimeout ? setTimeout : a;
          } catch (e) {
            o = a;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : d;
          } catch (e) {
            i = d;
          }
        })();
        var s,
          l = [],
          u = !1,
          f = -1;
        function p() {
          u &&
            s &&
            ((u = !1),
            s.length ? (l = s.concat(l)) : (f = -1),
            l.length && m());
        }
        function m() {
          if (!u) {
            var e = c(p);
            u = !0;
            for (var t = l.length; t; ) {
              for (s = l, l = []; ++f < t; ) s && s[f].run();
              (f = -1), (t = l.length);
            }
            (s = null),
              (u = !1),
              (function (e) {
                if (i === clearTimeout) return clearTimeout(e);
                if ((i === d || !i) && clearTimeout)
                  return (i = clearTimeout), clearTimeout(e);
                try {
                  i(e);
                } catch (t) {
                  try {
                    return i.call(null, e);
                  } catch (t) {
                    return i.call(this, e);
                  }
                }
              })(e);
          }
        }
        function v(e, t) {
          (this.fun = e), (this.array = t);
        }
        function h() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new v(e, t)), 1 !== l.length || u || c(m);
        }),
          (v.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = h),
          (r.addListener = h),
          (r.once = h),
          (r.off = h),
          (r.removeListener = h),
          (r.removeAllListeners = h),
          (r.emit = h),
          (r.prependListener = h),
          (r.prependOnceListener = h),
          (r.listeners = function (e) {
            return [];
          }),
          (r.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      {},
    ],
    11: [
      function (e, t, n) {
        (function (e) {
          (function () {
            var n;
            (n =
              "function" == typeof e
                ? function (t) {
                    e(t);
                  }
                : function (e) {
                    setTimeout(e, 0);
                  }),
              (t.exports = n);
          }.call(this));
        }.call(this, e("timers").setImmediate));
      },
      { timers: 12 },
    ],
    12: [
      function (e, t, n) {
        (function (t, o) {
          (function () {
            var i = e("process/browser.js").nextTick,
              r = Function.prototype.apply,
              a = Array.prototype.slice,
              d = {},
              c = 0;
            function s(e, t) {
              (this._id = e), (this._clearFn = t);
            }
            (n.setTimeout = function () {
              return new s(r.call(setTimeout, window, arguments), clearTimeout);
            }),
              (n.setInterval = function () {
                return new s(
                  r.call(setInterval, window, arguments),
                  clearInterval
                );
              }),
              (n.clearTimeout = n.clearInterval =
                function (e) {
                  e.close();
                }),
              (s.prototype.unref = s.prototype.ref = function () {}),
              (s.prototype.close = function () {
                this._clearFn.call(window, this._id);
              }),
              (n.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
              }),
              (n.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
              }),
              (n._unrefActive = n.active =
                function (e) {
                  clearTimeout(e._idleTimeoutId);
                  var t = e._idleTimeout;
                  t >= 0 &&
                    (e._idleTimeoutId = setTimeout(function () {
                      e._onTimeout && e._onTimeout();
                    }, t));
                }),
              (n.setImmediate =
                "function" == typeof t
                  ? t
                  : function (e) {
                      var t = c++,
                        o = !(arguments.length < 2) && a.call(arguments, 1);
                      return (
                        (d[t] = !0),
                        i(function () {
                          d[t] &&
                            (o ? e.apply(null, o) : e.call(null),
                            n.clearImmediate(t));
                        }),
                        t
                      );
                    }),
              (n.clearImmediate =
                "function" == typeof o
                  ? o
                  : function (e) {
                      delete d[e];
                    });
          }.call(this));
        }.call(this, e("timers").setImmediate, e("timers").clearImmediate));
      },
      { "process/browser.js": 10, timers: 12 },
    ],
  },
  {},
  [1]
);
