(function () {
  "use strict";

  var LANGS = ["fr", "en", "ar"];
  var state = { lang: "fr", filter: "all" };
  var root = document.documentElement;

  /* ---------- helpers ---------- */
  function store(key, value) {
    try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); }
    catch (e) { return null; }
  }
  function t(key) {
    var dict = window.I18N[state.lang] || window.I18N.fr;
    return dict[key] != null ? dict[key] : (window.I18N.fr[key] || key);
  }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function svg(path, cls) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    if (cls) s.setAttribute("class", cls);
    s.innerHTML = path;
    return s;
  }
  var ICONS = {
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    cloud: '<path d="M7 18.5h10a4 4 0 0 0 .6-8 6 6 0 0 0-11.5 1.6A3.3 3.3 0 0 0 7 18.5Z"/>',
    brain: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="m7.5 7.5 3 3M16.5 7.5l-3 3M10.5 13.5l-3 3M13.5 13.5l3 3"/>',
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    chart: '<path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3"/>',
    server: '<rect x="4" y="4" width="16" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.5"/><path d="M8 7.2h.01M8 16.8h.01"/>'
  };

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  function currentTheme() {
    var forced = root.getAttribute("data-theme");
    return forced || (mql.matches ? "dark" : "light");
  }
  function updateThemeLabel() {
    var label = currentTheme() === "dark" ? t("theme.toLight") : t("theme.toDark");
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store("sk-theme", next);
    updateThemeLabel();
  });
  if (mql.addEventListener) mql.addEventListener("change", updateThemeLabel);

  /* ---------- language ---------- */
  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(param) > -1) return param;
    var saved = store("sk-lang");
    if (LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : "fr";
  }

  function translateStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (node) {
      node.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        node.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });
    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));
  }

  function setLang(lang) {
    state.lang = lang;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    store("sk-lang", lang);
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    translateStatic();
    renderProjects();
    renderExpertise();
    renderSkills();
    renderTimeline();
    updateThemeLabel();
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- projects ---------- */
  var list = document.getElementById("project-list");

  function frame(shot, project, index) {
    var isMobile = shot.kind === "mobile";
    var btn = el("button", {
      type: "button",
      class: "shot shot--" + shot.kind,
      "aria-label": t("projects.enlarge") + " : " + shot.alt[state.lang]
    });
    if (!isMobile) {
      btn.appendChild(el("span", { class: "shot-bar", "aria-hidden": "true" }, [
        el("span", { class: "dots" }),
        el("span", { class: "url", text: project.domain || project.name.toLowerCase() })
      ]));
    }
    btn.appendChild(el("img", {
      src: shot.src, alt: shot.alt[state.lang], width: shot.w, height: shot.h,
      loading: "lazy", decoding: "async"
    }));
    btn.appendChild(el("span", { class: "shot-zoom", "aria-hidden": "true" }, [svg(ICONS.expand)]));
    btn.addEventListener("click", function () { openLightbox(project, index); });
    return btn;
  }

  function buildMedia(p) {
    var media = el("div", { class: "project-media" });

    if (p.pipeline) {
      var steps = p.t[state.lang].pipeline;
      var ol = el("ol", { class: "pipeline" });
      steps.forEach(function (s, i) {
        ol.appendChild(el("li", { class: i === steps.length - 1 ? "is-output" : "" }, [
          el("span", { class: "pipeline-step", text: String(i + 1) }),
          el("span", { class: "pipeline-text", text: s })
        ]));
      });
      var score = el("div", { class: "score-card", "aria-hidden": "true" }, [
        el("div", { class: "score-row" }, [
          el("span", { text: "0" }),
          el("span", { class: "score-track" }, [el("span", { class: "score-fill" }), el("span", { class: "score-mark" })]),
          el("span", { text: "100" })
        ])
      ]);
      media.classList.add("project-media--pipeline");
      media.appendChild(ol);
      media.appendChild(score);
      return media;
    }

    var allMobile = p.shots.every(function (s) { return s.kind === "mobile"; });
    if (allMobile) {
      media.classList.add("project-media--phones");
      p.shots.forEach(function (s, i) { media.appendChild(frame(s, p, i)); });
      return media;
    }

    var stage = el("div", { class: "stage" });
    stage.appendChild(frame(p.shots[0], p, 0));
    media.appendChild(stage);

    if (p.shots.length > 1) {
      var thumbs = el("div", { class: "thumbs", role: "group", "aria-label": p.name });
      p.shots.forEach(function (s, i) {
        var tb = el("button", {
          type: "button", class: "thumb thumb--" + s.kind,
          "aria-pressed": String(i === 0),
          "aria-label": t("projects.showShot") + " " + (i + 1) + " : " + s.alt[state.lang]
        }, [el("img", { src: s.src, alt: "", loading: "lazy", width: s.w, height: s.h })]);
        tb.addEventListener("click", function () {
          stage.replaceChildren(frame(s, p, i));
          thumbs.querySelectorAll(".thumb").forEach(function (x, j) { x.setAttribute("aria-pressed", String(j === i)); });
        });
        thumbs.appendChild(tb);
      });
      media.appendChild(thumbs);
    }
    return media;
  }

  function buildProject(p, index) {
    var c = p.t[state.lang];
    var article = el("article", {
      class: "project" + (p.featured ? " project--featured" : "") + (index % 2 ? " project--flip" : ""),
      id: "p-" + p.id,
      "data-cats": p.cats.join(" "),
      style: "--brand:" + p.brand
    });

    var tags = el("ul", { class: "tags" });
    if (p.award) tags.appendChild(el("li", { class: "tag tag--award" }, [svg(ICONS.trophy), el("span", { text: t("award.tag") })]));
    else if (p.featured) tags.appendChild(el("li", { class: "tag tag--featured", text: t("projects.featured") }));
    p.cats.forEach(function (cat) { tags.appendChild(el("li", { class: "tag", text: t("cat." + cat) })); });

    var title = el("h3", { class: "project-title" }, [
      el("span", { class: "project-dot", "aria-hidden": "true" }),
      document.createTextNode(p.name)
    ]);

    var feats = el("ul", { class: "features" });
    c.features.forEach(function (f) {
      feats.appendChild(el("li", {}, [svg(ICONS.check), el("span", { text: f })]));
    });

    var stackItems = (p.stackI18n && p.stackI18n[state.lang]) || p.stack;
    var stack = el("ul", { class: "stack" });
    stackItems.forEach(function (s) { stack.appendChild(el("li", { text: s, dir: "auto" })); });

    var action;
    if (p.url) {
      var label = t("projects.open");
      action = el("a", {
        class: "btn btn-primary", href: p.url, target: "_blank", rel: "noopener",
        "aria-label": label + " : " + p.name
      }, [el("span", { text: label }), svg(ICONS.external, "ext-icon")]);
    } else {
      var note = p.note || { key: "projects.private", href: "#contact", linkKey: "projects.requestDemo" };
      action = el("p", { class: "private-note" }, [
        svg(ICONS.lock),
        el("span", { text: t(note.key) }),
        el("a", { href: note.href, text: t(note.linkKey) })
      ]);
    }

    var body = el("div", { class: "project-body" }, [
      tags,
      title,
      el("p", { class: "project-tagline", text: c.tagline }),
      p.award ? el("p", { class: "award-callout" }, [
        el("span", { class: "award-icon" }, [svg(ICONS.trophy)]),
        el("strong", { text: t("award.project") })
      ]) : null,
      el("p", { class: "project-summary", text: c.summary }),
      el("h4", { class: "mini-title", text: t("projects.features") }),
      feats,
      el("h4", { class: "mini-title", text: t("projects.stack") }),
      stack,
      el("div", { class: "project-actions" }, [action])
    ]);

    article.appendChild(buildMedia(p));
    article.appendChild(body);
    return article;
  }

  function renderProjects() {
    list.replaceChildren();
    window.PROJECTS.forEach(function (p, i) { list.appendChild(buildProject(p, i)); });
    applyFilter();
  }

  /* ---------- filters ---------- */
  var chips = document.querySelectorAll("[data-filter]");
  function applyFilter() {
    var visible = 0;
    list.querySelectorAll(".project").forEach(function (a) {
      var show = state.filter === "all" || a.getAttribute("data-cats").split(" ").indexOf(state.filter) > -1;
      a.hidden = !show;
      if (show) visible++;
    });
    var empty = list.querySelector(".empty");
    if (!visible && !empty) list.appendChild(el("p", { class: "empty", text: t("projects.empty") }));
    if (visible && empty) empty.remove();
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === state.filter)); });
  }
  chips.forEach(function (c) {
    c.addEventListener("click", function () { state.filter = c.getAttribute("data-filter"); applyFilter(); });
  });

  /* ---------- expertise / skills / timeline ---------- */
  function renderExpertise() {
    var grid = document.getElementById("expertise-grid");
    grid.replaceChildren();
    window.EXPERTISE.forEach(function (x) {
      var c = x[state.lang];
      grid.appendChild(el("div", { class: "exp-item" }, [
        el("span", { class: "exp-icon" }, [svg(ICONS[x.icon])]),
        el("h3", { text: c[0] }),
        el("p", { text: c[1] })
      ]));
    });
  }

  function renderSkills() {
    var grid = document.getElementById("skills-grid");
    grid.replaceChildren();
    window.SKILLS.forEach(function (g) {
      var ul = el("ul", { class: "stack" });
      g.items.forEach(function (s) { ul.appendChild(el("li", { text: s, dir: "ltr" })); });
      grid.appendChild(el("div", { class: "skill-group" }, [el("h4", { text: g[state.lang] }), ul]));
    });
  }

  function renderTimeline() {
    function fill(id, items) {
      var ol = document.getElementById(id);
      ol.replaceChildren();
      items.forEach(function (it) {
        var c = it[state.lang];
        ol.appendChild(el("li", {}, [
          el("p", { class: "tl-date", text: it.date[state.lang] }),
          el("h4", { text: c[0] }),
          el("p", { class: "tl-text", text: c[1] })
        ]));
      });
    }
    fill("timeline-work", window.TIMELINE.work);
    fill("timeline-edu", window.TIMELINE.edu);

    var ul = document.getElementById("spoken-langs");
    ul.replaceChildren();
    window.TIMELINE.langs.forEach(function (l) {
      var c = l[state.lang];
      var bars = el("span", { class: "level", "aria-hidden": "true" });
      for (var i = 1; i <= 5; i++) bars.appendChild(el("span", { class: i <= l.level ? "on" : "" }));
      ul.appendChild(el("li", {}, [el("strong", { text: c[0] }), el("span", { class: "lvl-text", text: c[1] }), bars]));
    });
  }

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbCap = document.getElementById("lightbox-caption");
  var lbCount = document.getElementById("lightbox-count");
  var lbState = { project: null, index: 0 };

  function showLightbox() {
    var s = lbState.project.shots[lbState.index];
    lbImg.src = s.src;
    lbImg.alt = s.alt[state.lang];
    lbImg.className = s.kind === "mobile" ? "is-mobile" : "";
    lbCap.textContent = lbState.project.name + " : " + s.alt[state.lang];
    lbCount.textContent = (lbState.index + 1) + " / " + lbState.project.shots.length;
    var many = lbState.project.shots.length > 1;
    document.getElementById("lightbox-prev").hidden = !many;
    document.getElementById("lightbox-next").hidden = !many;
    lbCount.hidden = !many;
  }
  function openLightbox(project, index) {
    lbState.project = project; lbState.index = index;
    showLightbox();
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
    document.body.classList.add("no-scroll");
  }
  function step(d) {
    var n = lbState.project.shots.length;
    lbState.index = (lbState.index + d + n) % n;
    showLightbox();
  }
  document.getElementById("lightbox-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("lightbox-next").addEventListener("click", function () { step(1); });
  document.getElementById("lightbox-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("close", function () { document.body.classList.remove("no-scroll"); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", function (e) {
    var rtl = root.dir === "rtl";
    if (e.key === "ArrowRight") step(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
  });

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("main-nav");
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }
  menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true"); });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- header state + active section ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var links = {};
    nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
          links[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- contact form ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var statusEl = document.getElementById("form-status");
    var submitBtn = form.querySelector(".form-submit");
    var submitLabel = submitBtn.querySelector("span");
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var checks = [
      { id: "f-name", key: "form.err.name", ok: function (v) { return v.length > 0; } },
      { id: "f-email", key: "form.err.email", ok: function (v) { return EMAIL_RE.test(v); } },
      { id: "f-message", key: "form.err.message", ok: function (v) { return v.length >= 10; } }
    ];

    function setFieldError(check, show) {
      var input = document.getElementById(check.id);
      var err = document.getElementById(check.id + "-err");
      input.setAttribute("aria-invalid", String(show));
      err.textContent = show ? t(check.key) : "";
    }
    function validate() {
      var firstBad = null;
      checks.forEach(function (c) {
        var bad = !c.ok(document.getElementById(c.id).value.trim());
        setFieldError(c, bad);
        if (bad && !firstBad) firstBad = document.getElementById(c.id);
      });
      if (firstBad) firstBad.focus();
      return !firstBad;
    }
    // Clear a field's error as soon as it becomes valid
    checks.forEach(function (c) {
      document.getElementById(c.id).addEventListener("input", function (e) {
        if (e.target.getAttribute("aria-invalid") === "true" && c.ok(e.target.value.trim())) setFieldError(c, false);
      });
    });
    // Re-translate visible errors after a language switch (runs after setLang's own listener)
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () {
        checks.forEach(function (c) {
          if (document.getElementById(c.id).getAttribute("aria-invalid") === "true") setFieldError(c, true);
        });
        setStatus("", "");
      });
    });
    function setStatus(kind, text) {
      statusEl.className = "form-status" + (kind ? " is-" + kind : "");
      statusEl.textContent = text;
    }
    function setSending(on) {
      submitBtn.disabled = on;
      submitLabel.textContent = t(on ? "form.sending" : "form.send");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("", "");
      if (!validate()) return;

      // Bots fill the hidden field: pretend success and send nothing
      if (document.getElementById("f-honey").value) {
        form.reset();
        setStatus("success", t("form.success"));
        return;
      }

      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var subjectSel = document.getElementById("f-subject");
      var payload = {
        name: name,
        email: email,
        subject: subjectSel.options[subjectSel.selectedIndex].text,
        message: document.getElementById("f-message").value.trim(),
        language: state.lang.toUpperCase(),
        _subject: t("form.mailSubject") + " (" + name + ")",
        _replyto: email,
        _template: "table",
        _captcha: "false"
      };

      // FormSubmit refuses pages opened as local files (file://): say so instead of failing silently
      if (location.protocol === "file:") {
        setStatus("error", t("form.errorLocal"));
        return;
      }

      setSending(true);
      fetch(form.getAttribute("data-endpoint"), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            if (!res.ok || String(data.success) !== "true") throw new Error(data.message || res.status);
          });
        })
        .then(function () {
          form.reset();
          setStatus("success", t("form.success"));
        })
        .catch(function (err) {
          // Until the owner clicks the activation link FormSubmit e-mails them, it answers "needs Activation"
          var needsActivation = /activ/i.test(String(err && err.message));
          setStatus("error", t(needsActivation ? "form.errorActivation" : "form.error"));
        })
        .then(function () { setSending(false); });
    });
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  setLang(initialLang());
})();
