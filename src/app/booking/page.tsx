// src/components/FuturisticBooking.tsx

"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as Yup from "yup"
import { useFormik } from "formik"
import {
  Wrench,
  MapPin,
  CalendarCheck,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Loader2,
  Star
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


interface BookingProps {
  serviceName: string
  serviceIcon?: React.ReactNode
  basePrice?: number
}

const DRAFT_KEY = "futuristic:booking:draft:v1"

const validationSchema = Yup.object().shape({
  address: Yup.string().min(6, "Enter a full address").required("Address is required"),
  date: Yup.date().min(new Date(new Date().getTime() - 1000 * 60 * 60 * 24), "Choose a future date").required("Date required"),
  time: Yup.string().required("Time required"),
  name: Yup.string().min(2, "Name too short").required("Your name is required"),
  phone: Yup.string().matches(/^[0-9+\-()\s]{6,}$/, "Enter a valid phone").required("Phone required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  message: Yup.string().max(500, "Max 500 chars")
})

function prettyCurrency(n = 0) {
  return `$${n.toFixed(2)}`
}

function formatDateLabel(date?: string, time?: string) {
  if (!date || !time) return "—"
  try {
    const d = new Date(date + "T" + time)
    return d.toLocaleString(undefined, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "numeric" })
  } catch {
    return `${date} ${time}`
  }
}

export default function BookingPage({ serviceName, serviceIcon, basePrice = 49 }: BookingProps) {
  const [submitted, setSubmitted] = useState(false)
  const [serverErr, setServerErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [bookingId, setBookingId] = useState<string | null>(null)
  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const formik = useFormik({
    initialValues: {
      address: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      message: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      setServerErr(null)
      setLoading(true)
      // optimistic UI pattern: start spinner and pretend creating
      try {
        // simulated network + 10% failure
        await new Promise((r) => setTimeout(r, 900 + Math.random() * 800))
        if (Math.random() < 0.1) throw new Error("Network error, please try again")
        setBookingId("BK-" + Math.random().toString(36).slice(2, 9).toUpperCase())
        setSubmitted(true)
        // final cleanup: remove draft
        try { localStorage.removeItem(DRAFT_KEY) } catch(e){}
      } catch (err: any) {
        setServerErr(err?.message || "Failed to create booking")
      } finally { setLoading(false) }
    }
  })

  // load draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        formik.setValues((v) => ({ ...v, ...parsed }))
      }
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // autosave draft (debounced-ish)
  useEffect(() => {
    const t = setTimeout(() => {
      try { localStorage.setItem(DRAFT_KEY, JSON.stringify(formik.values)) } catch (e) {}
    }, 500)
    return () => clearTimeout(t)
  }, [formik.values])

  const est = useMemo(() => {
    // small live estimator: base price + weekend surcharge + time of day fee
    let total = basePrice
    const date = formik.values.date
    if (date) {
      const d = new Date(date)
      const day = d.getDay()
      if (day === 0 || day === 6) total += 10 // weekend +10
    }
    if (formik.values.time) {
      const hr = Number(formik.values.time.split(":")[0] || 0)
      if (hr >= 18 || hr < 8) total += 8 // evening / early morning fee
    }
    return Math.max(0, total)
  }, [formik.values.date, formik.values.time, basePrice])

  // keyboard: Esc to clear server error or close success
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServerErr(null)
        // allow closing success state with Esc
        if (submitted) {
          setSubmitted(false)
          setBookingId(null)
          formik.resetForm()
        }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [submitted])

  // small confetti-lite using CSS / elements
  const confettiRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!submitted || prefersReduced) return
    const root = confettiRef.current
    if (!root) return
    const pieces = 24
    for (let i = 0; i < pieces; i++) {
      const el = document.createElement("span")
      el.className = "confetti-piece"
      el.style.left = `${20 + Math.random() * 60}%`
      el.style.background = ["#0891b2", "#7c3aed", "#f59e0b", "#ef4444"][Math.floor(Math.random() * 4)]
      root.appendChild(el)
      setTimeout(() => el.remove(), 2800)
    }
  }, [submitted, prefersReduced])

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-200 via-gray-50 to-gray-100 overflow-hidden">
      {/* Glow Elements--------- */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-800/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/50 blur-[120px] rounded-full" />

      <main className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Left: Form area - asymmetric editorial slab */}
          <section aria-labelledby="booking-heading" className="relative z-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl p-3 bg-white/70 shadow-lg ring-1 ring-gray-200/50 backdrop-blur-sm">
                  <div className="text-gray-800">{serviceIcon || <Wrench className="text-[20px]" />}</div>
                </div>
                <div>
                  <h1 id="booking-heading" className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900">{serviceName}</h1>
                  <p className="text-sm text-gray-600 mt-1">Book trusted professionals — fast, secure, and flexible.</p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-gray-700 text-sm shadow-sm">Verified Pros</div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 text-gray-700 text-sm shadow-sm">Free Reschedule</div>
              </div>
            </div>

            <motion.form onSubmit={formik.handleSubmit} className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Floating tiles: grid but modern & accessible */}
              <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <motion.fieldset initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-4 rounded-2xl bg-white/70 border border-gray-200/60 backdrop-blur-md shadow-sm">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><MapPin /> Address</label>
                  <Input aria-label="address" id="address" name="address" placeholder="Apartment, street, city" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-3 bg-white/50 border-gray-300/70" />
                  {formik.touched.address && formik.errors.address ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.address)}</p>) : null}
                  <div className="mt-3 flex gap-2">
                    <button type="button" onClick={() => formik.setFieldValue("address", "221B Baker St, London")} className="text-xs px-2 py-1 rounded-md bg-gray-100/70 text-gray-700 hover:bg-gray-200/50 transition-colors">Sample</button>
                    <button type="button" onClick={() => formik.setFieldValue("address", "")} className="text-xs px-2 py-1 rounded-md bg-gray-100/40 text-gray-700 hover:bg-gray-200/50 transition-colors">Clear</button>
                  </div>
                </motion.fieldset>

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="p-4 rounded-2xl bg-white/60 border border-gray-200/50 backdrop-blur-md shadow-sm">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><CalendarCheck /> Date & Time</label>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Input id="date" name="date" type="date" aria-label="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-white/50 border-gray-300/70" />
                    <Input id="time" name="time" type="time" aria-label="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-white/50 border-gray-300/70" />
                  </div>
                  {formik.touched.date && formik.errors.date ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.date)}</p>) : null}
                  {formik.touched.time && formik.errors.time ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.time)}</p>) : null}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.11 }} className="p-4 rounded-2xl bg-white/70 border border-gray-200/60 backdrop-blur-md shadow-sm">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><User /> Name</label>
                  <Input id="name" name="name" aria-label="name" placeholder="Your full name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-3 bg-white/50 border-gray-300/70" />
                  {formik.touched.name && formik.errors.name ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.name)}</p>) : null}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="p-4 rounded-2xl bg-white/70 border border-gray-200/60 backdrop-blur-md shadow-sm">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><Phone /> Phone</label>
                  <Input id="phone" name="phone" aria-label="phone" placeholder="+1 555 555 5555" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-3 bg-white/50 border-gray-300/70" />
                  {formik.touched.phone && formik.errors.phone ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.phone)}</p>) : null}
                </motion.div>

              </div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="col-span-2 p-4 rounded-3xl bg-gradient-to-r from-white/70 via-white/50 to-white/30 border border-gray-200/60 backdrop-blur-sm shadow-sm">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700"><Mail /> Email</label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-3 bg-white/50 border-gray-300/70" />
                {formik.touched.email && formik.errors.email ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.email)}</p>) : null}

                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mt-4"><MessageSquare /> Notes</label>
                <Textarea id="message" name="message" placeholder="Anything we should know? (parking, pets, stairs)" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} rows={4} className="mt-3 bg-white/50 border-gray-300/70" />
                {formik.touched.message && formik.errors.message ? (<p role="alert" className="mt-2 text-xs text-red-500">{String(formik.errors.message)}</p>) : null}

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Star className="text-amber-500" /> <div>Pro assurance — vetted & insured</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-xs text-gray-600">Est. total</div>
                    <div className="text-lg font-semibold text-gray-900">{prettyCurrency(est)}</div>
                  </div>
                </div>

              </motion.div>

              <div className="col-span-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-600">Agree to terms</label>
                  {/* inline switch could be added; keep simple */}
                </div>

                <div className="flex items-center gap-3">
                  <Button type="button" variant="ghost" onClick={() => { formik.resetForm(); localStorage.removeItem(DRAFT_KEY) }} className="text-gray-700 hover:bg-gray-200/50">Reset</Button>

                  <Button type="submit" disabled={loading} className="bg-gradient-to-r from-[#7c3aed] to-[#0891b2] text-white shadow-lg hover:shadow-xl flex items-center gap-3 transition-all">
                    <AnimatePresence>
                      {loading ? (
                        <motion.span key="loader" initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 1, rotate: 360 }} exit={{ opacity: 0 }} transition={{ repeat: Infinity, duration: 0.8 }}><Loader2 className="w-4 h-4 animate-spin" /></motion.span>
                      ) : null}
                    </AnimatePresence>
                    <span>{loading ? "Booking…" : "Book Service"}</span>
                  </Button>
                </div>
              </div>

              {serverErr ? (<div role="alert" className="col-span-2 text-red-500 text-sm">{serverErr}</div>) : null}

            </motion.form>

          </section>

          {/* Right: Summary / CTA column */}
          <aside aria-label="summary" className="relative z-10">
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} className="sticky top-20 p-6 rounded-3xl bg-white/80 border border-gray-200/60 backdrop-blur-md shadow-lg">
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-2 bg-gray-100/60">
                  {serviceIcon || <Wrench className="text-gray-700" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Service</div>
                  <div className="font-semibold text-lg text-gray-900">{serviceName}</div>
                  <div className="text-xs text-gray-500 mt-1">Live estimate based on date & time</div>
                </div>
              </div>

              <div className="mt-4 border-t border-gray-300/30 pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600"><div>Base price</div><div>{prettyCurrency(basePrice)}</div></div>
                <div className="flex items-center justify-between text-sm text-gray-600"><div>Time surcharge</div><div>{formik.values.time ? (Number(formik.values.time.split(":")[0]) >= 18 ? prettyCurrency(8) : prettyCurrency(0)) : prettyCurrency(0)}</div></div>
                <div className="flex items-center justify-between text-sm text-gray-600"><div>Weekend</div><div>{formik.values.date ? (new Date(formik.values.date).getDay() % 6 === 0 ? prettyCurrency(10) : prettyCurrency(0)) : prettyCurrency(0)}</div></div>

                <div className="pt-3 border-t border-gray-300/30 flex items-center justify-between">
                  <div className="text-sm text-gray-800">Total</div>
                  <div className="text-2xl font-extrabold text-gray-900">{prettyCurrency(est)}</div>
                </div>

                <div className="mt-3 text-xs text-gray-500">Earliest arrival: <span className="font-medium text-gray-700">{formatDateLabel(formik.values.date, formik.values.time)}</span></div>

                <div className="mt-4 flex gap-2">
                  <Button onClick={() => { formik.setFieldValue('address', 'Use Current Location (sim)') }} variant="outline" className="border-gray-300/70 text-gray-700 bg-white/50 hover:bg-gray-100/50">Use location</Button>
                  <Button onClick={() => { localStorage.setItem(DRAFT_KEY, JSON.stringify(formik.values)); alert('Draft saved') }} variant="ghost" className="text-gray-700 hover:bg-gray-200/50">Save Draft</Button>
                </div>
              </div>
            </motion.div>
          </aside>

        </div>

        {/* Success overlay */}
        <AnimatePresence>
          {submitted && bookingId ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-auto">
              <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/95 border border-gray-200/60 backdrop-blur-md shadow-2xl">
                <div ref={confettiRef} aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden"></div>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600"><CheckCircle className="w-7 h-7" /></div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Booking confirmed</div>
                    <div className="text-sm text-gray-600">Reference <span className="font-mono text-gray-800">{bookingId}</span></div>
                  </div>
                </div>

                <div className="mt-4 text-gray-700 text-sm grid grid-cols-1 gap-1">
                  <div><strong>When:</strong> {formatDateLabel(formik.values.date, formik.values.time)}</div>
                  <div><strong>Where:</strong> {formik.values.address}</div>
                  <div><strong>Contact:</strong> {formik.values.name} • {formik.values.phone}</div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <Button onClick={() => { setSubmitted(false); setBookingId(null); formik.resetForm() }} variant="ghost" className="text-gray-700 hover:bg-gray-200/50">Close</Button>
                  <Button onClick={() => { /* maybe navigate to bookings */ }} className="bg-emerald-500 text-white hover:bg-emerald-600">View details</Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

      </main>

      <style jsx>{`
        .confetti-piece{ position: absolute; top: -10px; width: 10px; height: 18px; opacity: 0.95; border-radius: 2px; transform-origin: center; animation: confetti-fall 2.6s linear forwards; }
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1 }
          100% { transform: translateY(700px) rotate(720deg); opacity: 0 }
        }
        /* focus ring improvements */
        input:focus, textarea:focus { outline: none; box-shadow: 0 0 0 4px rgba(124,58,237,0.12); border-radius: 12px }
      `}</style>
    </section>
  )
}