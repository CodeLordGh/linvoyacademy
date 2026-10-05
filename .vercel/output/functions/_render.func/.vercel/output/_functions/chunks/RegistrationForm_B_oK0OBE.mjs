import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function Field({
  label,
  id,
  required,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "block text-sm font-medium text-gray-700 mb-1", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-0.5", "aria-hidden": "true", children: "*" })
    ] }),
    children,
    error && /* @__PURE__ */ jsx("p", { id: `${id}_err`, className: "text-red-600 text-xs mt-1", children: error })
  ] });
}
const inputClass = (hasError) => `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e6e]/40 transition-colors ${hasError ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-gray-400"}`;
function RegistrationForm({ lang, courses, t }) {
  const [fields, setFields] = useState({
    student_name: "",
    date_of_birth: "",
    grade_applying: "",
    parent_name: "",
    email: "",
    phone: "",
    nationality: "",
    boarding_needed: "no",
    program_interest: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));
  function validate() {
    const e = {};
    if (!fields.student_name.trim()) e.student_name = t.form.validation.required;
    if (!fields.date_of_birth.trim()) e.date_of_birth = t.form.validation.required;
    if (!fields.grade_applying.trim()) e.grade_applying = t.form.validation.required;
    if (!fields.parent_name.trim()) e.parent_name = t.form.validation.required;
    if (!fields.phone.trim()) e.phone = t.form.validation.required;
    if (!fields.email.trim()) {
      e.email = t.form.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = t.form.validation.email;
    }
    return e;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = document.getElementById(Object.keys(errs)[0]);
      firstErr?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
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
    return /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-green-800 font-heading font-bold text-xl mb-2", children: "Application Received!" }),
      /* @__PURE__ */ jsx("p", { className: "text-green-700", children: t.form.success })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("fieldset", { className: "border border-gray-200 rounded-xl p-5", children: [
      /* @__PURE__ */ jsx("legend", { className: "text-sm font-semibold text-navy px-2 uppercase tracking-wider", children: lang === "fr" ? "Informations de l'élève" : "Student Details" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-3", children: [
        /* @__PURE__ */ jsx(Field, { label: t.form.student_name, id: "student_name", required: true, error: errors.student_name, children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "student_name",
            type: "text",
            autoComplete: "name",
            value: fields.student_name,
            onChange: set("student_name"),
            className: inputClass(!!errors.student_name),
            "aria-required": "true",
            "aria-describedby": errors.student_name ? "student_name_err" : void 0
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: t.form.date_of_birth, id: "date_of_birth", required: true, error: errors.date_of_birth, children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "date_of_birth",
            type: "date",
            value: fields.date_of_birth,
            onChange: set("date_of_birth"),
            className: inputClass(!!errors.date_of_birth),
            "aria-required": "true"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: t.form.grade_applying, id: "grade_applying", required: true, error: errors.grade_applying, children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "grade_applying",
            type: "text",
            placeholder: t.form.grade_placeholder,
            value: fields.grade_applying,
            onChange: set("grade_applying"),
            className: inputClass(!!errors.grade_applying),
            "aria-required": "true"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: t.form.nationality, id: "nationality", children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "nationality",
            type: "text",
            autoComplete: "country-name",
            value: fields.nationality,
            onChange: set("nationality"),
            className: inputClass(false)
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("fieldset", { className: "border border-gray-200 rounded-xl p-5", children: [
      /* @__PURE__ */ jsx("legend", { className: "text-sm font-semibold text-navy px-2 uppercase tracking-wider", children: lang === "fr" ? "Parent / Tuteur" : "Parent / Guardian" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-3", children: [
        /* @__PURE__ */ jsx(Field, { label: t.form.parent_name, id: "parent_name", required: true, error: errors.parent_name, children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "parent_name",
            type: "text",
            autoComplete: "name",
            value: fields.parent_name,
            onChange: set("parent_name"),
            className: inputClass(!!errors.parent_name),
            "aria-required": "true"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: t.form.email, id: "email", required: true, error: errors.email, children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            autoComplete: "email",
            value: fields.email,
            onChange: set("email"),
            className: inputClass(!!errors.email),
            "aria-required": "true"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: t.form.phone, id: "phone", required: true, error: errors.phone, children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "phone",
            type: "tel",
            autoComplete: "tel",
            value: fields.phone,
            onChange: set("phone"),
            className: inputClass(!!errors.phone),
            "aria-required": "true"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("fieldset", { className: "border border-gray-200 rounded-xl p-5", children: [
      /* @__PURE__ */ jsx("legend", { className: "text-sm font-semibold text-navy px-2 uppercase tracking-wider", children: lang === "fr" ? "Préférences" : "Preferences" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-700 mb-2", children: t.form.boarding }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: ["yes", "no"].map((val) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "boarding_needed",
                value: val,
                checked: fields.boarding_needed === val,
                onChange: set("boarding_needed"),
                className: "accent-[#1a2e6e]"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: val === "yes" ? t.form.boarding_yes : t.form.boarding_no })
          ] }, val)) })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: t.form.program, id: "program_interest", children: /* @__PURE__ */ jsxs(
          "select",
          {
            id: "program_interest",
            value: fields.program_interest,
            onChange: set("program_interest"),
            className: "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e6e]/40 bg-white hover:border-gray-400 transition-colors",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: t.form.program_placeholder }),
              courses.map((c) => /* @__PURE__ */ jsx("option", { value: lang === "fr" ? c.titleFr || c.titleEn : c.titleEn, children: lang === "fr" ? c.titleFr || c.titleEn : c.titleEn }, c._id))
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: t.form.message, id: "message", children: /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            rows: 4,
            value: fields.message,
            onChange: set("message"),
            className: "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e6e]/40 resize-y hover:border-gray-400 transition-colors"
          }
        ) })
      ] })
    ] }),
    status === "error" && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-700 text-sm", role: "alert", children: serverError }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status === "loading",
        className: "w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed",
        children: status === "loading" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8H4z" })
          ] }),
          t.form.submitting
        ] }) : t.form.submit
      }
    )
  ] });
}

export { RegistrationForm as R };
