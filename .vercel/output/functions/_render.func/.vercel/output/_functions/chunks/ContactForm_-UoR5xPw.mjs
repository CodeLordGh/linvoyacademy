import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function ContactForm({ t }) {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  function validate() {
    const e = {};
    if (!fields.name.trim()) e.name = t.form.validation.required;
    if (!fields.email.trim()) {
      e.email = t.form.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = t.form.validation.email;
    }
    if (!fields.message.trim()) e.message = t.form.validation.required;
    return e;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setServerError(data.error || t.form.error);
        setStatus("error");
      }
    } catch {
      setServerError(t.form.error);
      setStatus("error");
    }
  }
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-8 text-center", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-12 h-12 text-green-500 mx-auto mb-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-green-800 font-semibold text-lg", children: t.form.success })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-1", children: [
          t.form.name,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", "aria-hidden": "true", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            type: "text",
            autoComplete: "name",
            value: fields.name,
            onChange: (e) => setFields({ ...fields, name: e.target.value }),
            className: `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50 ${errors.name ? "border-red-400" : "border-gray-300"}`,
            "aria-required": "true"
          }
        ),
        errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-xs mt-1", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "c_email", className: "block text-sm font-medium text-gray-700 mb-1", children: [
          t.form.email,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", "aria-hidden": "true", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "c_email",
            type: "email",
            autoComplete: "email",
            value: fields.email,
            onChange: (e) => setFields({ ...fields, email: e.target.value }),
            className: `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50 ${errors.email ? "border-red-400" : "border-gray-300"}`,
            "aria-required": "true"
          }
        ),
        errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-xs mt-1", children: errors.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700 mb-1", children: t.form.subject }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "subject",
          type: "text",
          value: fields.subject,
          onChange: (e) => setFields({ ...fields, subject: e.target.value }),
          className: "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "c_message", className: "block text-sm font-medium text-gray-700 mb-1", children: [
        t.form.message,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "c_message",
          rows: 5,
          value: fields.message,
          onChange: (e) => setFields({ ...fields, message: e.target.value }),
          className: `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50 resize-y ${errors.message ? "border-red-400" : "border-gray-300"}`,
          "aria-required": "true"
        }
      ),
      errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-xs mt-1", children: errors.message })
    ] }),
    status === "error" && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm", role: "alert", children: serverError }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status === "loading",
        className: "w-full btn-primary py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed",
        children: status === "loading" ? t.form.submitting : t.form.submit
      }
    )
  ] });
}

export { ContactForm as C };
