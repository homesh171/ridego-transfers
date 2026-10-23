import { useState, useEffect } from "react";
import {
  Plane, Ship, TrainFront, Route, ShieldCheck, Clock, BadgeCheck, MapPin, Users,
  Briefcase, Minus, Plus, Phone, Mail, Star, ChevronDown, MessageCircle, ArrowRight, UserCheck,
} from "lucide-react";

/* ========= EDIT THESE ========= */
const BRAND = "Ride Go";
const WHATSAPP = "447412833092"; // country code + number, no + or spaces
const PHONE = "+44 7412833092";
const EMAIL = "info@ridego.com";
/* ============================== */

function Logo({ light = false }) {
  const id = light ? "lg1" : "lg2";
  return (
    <span className="flex items-center gap-2.5">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill={`url(#${id})`} />
        <path d="M9 22 31 9 25 31 19.5 23.5Z" fill="#fff" />
        <path d="M19.5 23.5 31 9" stroke="#0284c7" strokeWidth="1.6" fill="none" />
        <path d="M7 33c6-4 12 1 26-3" stroke="#fff" strokeWidth="2" strokeDasharray="2 3.5" strokeLinecap="round" fill="none" opacity=".85" />
      </svg>
      <span className={`font-display text-xl font-extrabold leading-none ${light ? "text-white" : "text-ink"}`}>
        {BRAND.split(" ")[0]}
        <span className={light ? "text-sky-300" : "text-sky-500"}>{BRAND.split(" ")[1]}</span>
        <span className={`block pt-1 text-[11px] font-medium tracking-wide ${light ? "text-sky-100" : "text-slate-500"}`}>
          airport transfers
        </span>
      </span>
    </span>
  );
}

function Car({ wide = false, className = "" }) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
      <ellipse cx="100" cy="74" rx="86" ry="5" fill="#0284c7" opacity=".12" />
      <path d={wide ? "M8 58 Q8 40 26 38 L44 22 Q50 18 60 18 H140 Q152 18 158 26 L170 40 Q192 42 192 58 V62 H8Z" : "M10 58Q10 46 28 44L50 28Q56 24 66 24H128Q140 24 148 32L166 44Q190 46 190 58V62H10Z"} fill="#0ea5e9" />
      <path d={wide ? "M16 52H184V58H16Z" : "M14 53H186V58H14Z"} fill="#0284c7" opacity=".5" />
      <path d={wide ? "M52 38 62 26H92V38ZM98 38V26H136Q142 26 146 31L156 38Z" : "M58 42 72 30H96V42ZM102 42V30H126Q132 30 138 36L148 42Z"} fill="#e0f2fe" />
      <circle cx="54" cy="62" r="13" fill="#0b2545" />
      <circle cx="54" cy="62" r="5" fill="#fff" />
      <circle cx="146" cy="62" r="13" fill="#0b2545" />
      <circle cx="146" cy="62" r="5" fill="#fff" />
    </svg>
  );
}

function FleetImage({ src, name, wide }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-full w-full items-center px-5">
        <Car wide={wide} className="w-full" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`${name} vehicle`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

const services = [
  { icon: Plane, title: "Airport transfers", text: "Met at arrivals with flight tracking, so a late landing never means a missed driver." },
  { icon: Ship, title: "Port transfers", text: "Cruise terminal pickups timed around your ship's schedule." },
  { icon: TrainFront, title: "Train stations", text: "A driver waiting at the station, ready to help with your bags." },
  { icon: Route, title: "City to city", text: "Long-distance rides between cities at a price agreed upfront." },
];
const steps = [
  { title: "Tell us your route", text: "Enter pickup, drop-off, date and passengers. It takes under a minute." },
  { title: "Get your fixed price", text: "We reply on WhatsApp with one clear price. No surge, no extras." },
  { title: "Meet your driver", text: "Your driver is at arrivals with your name on a sign." },
];
const fleet = [
  { name: "Economy", img: "/Economy.png", pax: 3, bags: 3, text: "Smart sedan for couples and solo travellers." },
  { name: "Comfort", img: "/Comfort.png", pax: 3, bags: 3, text: "Extra legroom for business trips." },
  { name: "Minivan", img: "/Minivan.png", pax: 6, bags: 5, text: "Space for families and small groups.", wide: true },
  { name: "MPV", img: "/MPV.png", pax: 7, bags: 7, text: "Large group, lots of luggage.", wide: true },
];
const routes = [
  ["Heathrow", "Central London"], ["Gatwick", "Central London"], ["Stansted", "Central London"],
  ["Luton", "Central London"], ["Manchester Airport", "City Centre"], ["Birmingham Airport", "City Centre"],
];
const reviews = [
  { name: "Customer name", from: "Germany", text: "Replace with a real review. Short and specific works best." },
  { name: "Customer name", from: "United Kingdom", text: "Replace with a real review. Mention the route if you can." },
  { name: "Customer name", from: "Netherlands", text: "Replace with a real review. Real names build trust." },
];
const faqs = [
  ["Is the price really fixed?", "Yes. You get one price before you book and it does not change for traffic or waiting."],
  ["What if my flight is delayed?", "We track your flight and adjust the pickup time, so your driver is there when you land."],
  ["Can I cancel?", "You can cancel free of charge up to 24 hours before your pickup."],
  ["Do you offer child seats?", "Yes. Mention it in your request and we will arrange one."],
];

function Counter({ label, icon: Icon, value, setValue, min = 0, max = 20 }) {
  const b = "flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100";
  return (
    <div className="flex items-center justify-between rounded-xl border border-sky-100 bg-white px-3 py-2">
      <span className="flex items-center gap-2 text-sm text-slate-700"><Icon size={16} className="text-sky-500" />{value} {label}</span>
      <div className="flex gap-2">
        <button type="button" aria-label={`Fewer ${label}`} onClick={() => setValue(Math.max(min, value - 1))} className={b}><Minus size={14} /></button>
        <button type="button" aria-label={`More ${label}`} onClick={() => setValue(Math.min(max, value + 1))} className={b}><Plus size={14} /></button>
      </div>
    </div>
  );
}

function AddressInput({ value, onChange, placeholder, label, iconClass = "text-sky-500" }) {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(false);

  useEffect(() => {
    const key = import.meta.env.VITE_LOCATIONIQ_KEY;
    if (!key || picked || value.trim().length < 3) {
      setList([]);
      return;
    }
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const url = `https://api.locationiq.com/v1/autocomplete?key=${key}&q=${encodeURIComponent(value)}&limit=5&countrycodes=gb&dedupe=1`;
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) {
          setList([]);
          return;
        }
        const data = await res.json();
        setList(Array.isArray(data) ? data : []);
      } catch {
        /* request cancelled or failed */
      }
    }, 400);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [value, picked]);

  const choose = (item) => {
    onChange(item.display_name);
    setPicked(true);
    setOpen(false);
    setList([]);
  };

  return (
    <div className="relative">
      <MapPin size={16} className={`absolute left-3 top-3.5 ${iconClass}`} />
      <input
        required
        aria-label={label}
        autoComplete="off"
        className="w-full rounded-xl border border-sky-100 bg-white px-3 py-3 pl-9 text-sm text-ink placeholder:text-slate-400"
        placeholder={placeholder}
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onChange={(e) => {
          setPicked(false);
          setOpen(true);
          onChange(e.target.value);
        }}
      />
      {open && list.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-xl border border-sky-100 bg-white py-1 shadow-soft">
          {list.map((item, i) => (
            <li key={item.place_id || i}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(item)}
                className="flex w-full items-start gap-2 px-3 py-2.5 text-left text-sm hover:bg-sky-50"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-sky-500" />
                <span>
                  <span className="block font-semibold text-ink">{item.display_place || item.display_name.split(",")[0]}</span>
                  <span className="block text-xs text-slate-500">{item.display_address || item.display_name}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function BookingForm({ preset }) {
  const [trip, setTrip] = useState("One way");
  const [pickup, setPickup] = useState(preset?.[0] || "");
  const [dropoff, setDropoff] = useState(preset?.[1] || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState(1);
  const [bags, setBags] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'd like a quote:\nTrip: ${trip}\nPickup: ${pickup}\nDrop-off: ${dropoff}\nDate: ${date}\nTime: ${time}\nPassengers: ${pax}\nBags: ${bags}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const f = "w-full rounded-xl border border-sky-100 bg-white px-3 py-3 text-sm text-ink placeholder:text-slate-400";

  return (
    <form id="booking" onSubmit={submit} className="space-y-3 rounded-3xl bg-white/95 p-5 shadow-soft ring-1 ring-sky-100 sm:p-6">
      <div className="grid grid-cols-2 rounded-xl bg-sky-50 p-1 text-sm font-semibold">
        {["One way", "Return"].map((t) => (
          <button type="button" key={t} onClick={() => setTrip(t)}
            className={`rounded-lg py-2 transition ${trip === t ? "bg-white text-sky-700 shadow" : "text-slate-500"}`}>{t}</button>
        ))}
      </div>
      <AddressInput label="Pickup" placeholder="Pickup, e.g. Heathrow Terminal 5" value={pickup} onChange={setPickup} />
      <AddressInput label="Drop-off" placeholder="Drop-off address" value={dropoff} onChange={setDropoff} iconClass="text-ink" />
      <div className="grid grid-cols-2 gap-3">
        <input required type="date" aria-label="Date" className={f} value={date} onChange={(e) => setDate(e.target.value)} />
        <input required type="time" aria-label="Time" className={f} value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Counter label={pax === 1 ? "passenger" : "passengers"} icon={Users} value={pax} setValue={setPax} min={1} />
        <Counter label={bags === 1 ? "bag" : "bags"} icon={Briefcase} value={bags} setValue={setBags} />
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 py-3.5 font-bold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5">
        <MessageCircle size={18} /> Get my fixed price
      </button>
      <p className="text-center text-xs text-slate-500">We reply on WhatsApp. Free cancellation up to 24 hours before.</p>
    </form>
  );
}

export default function App() {
  const [open, setOpen] = useState(0);
  const [preset, setPreset] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-ink">
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" aria-label={BRAND}><Logo /></a>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            {[["Services", "#services"], ["How it works", "#how"], ["Fleet", "#fleet"], ["Routes", "#routes"], ["FAQ", "#faq"]].map(([t, h]) => (
              <a key={t} href={h} className="hover:text-sky-600">{t}</a>
            ))}
          </nav>
          <a href="#booking" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-500/30 hover:bg-sky-600">Book now</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-white">
        <svg className="plane-fly pointer-events-none absolute left-0 top-10 z-10 text-sky-500" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5Z" transform="rotate(90 12 12)" />
        </svg>
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-24 pt-14 lg:grid-cols-[1.1fr_.9fr] lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Drivers available 24/7
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Land. Meet your driver. <span className="text-sky-500">Ride.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">
              Private airport transfers at a fixed price. Your driver tracks your flight and waits for you at arrivals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              {["Fixed price", "Meet & greet", "Free cancellation"].map((t) => (
                <span key={t} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-sky-100">
                  <BadgeCheck size={16} className="text-sky-500" /> {t}
                </span>
              ))}
            </div>
            <Car className="mt-10 w-full max-w-md drop-shadow-xl" />
          </div>
          <BookingForm key={preset ? preset.join() : "x"} preset={preset} />
        </div>
        <svg viewBox="0 0 1440 80" className="absolute -bottom-px left-0 w-full text-white" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0 40C240 80 480 0 720 30s480 50 720 10V80H0Z" />
        </svg>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Every arrival, covered</h2>
        <p className="mt-3 max-w-xl text-slate-600">Wherever you land, your ride is already on its way.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-3xl border border-sky-100 bg-gradient-to-b from-white to-sky-50 p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white"><Icon size={22} /></span>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how" className="bg-sky-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">From request to pickup in three steps</h2>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-6 hidden border-t-2 border-dashed border-sky-300 md:block" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 font-display text-lg font-bold text-white ring-8 ring-sky-50">{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fleet */}
            {/* Fleet */}
      <section id="fleet" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Pick the right vehicle</h2>
        <p className="mt-3 text-slate-600">Clean, modern and air-conditioned. Same fixed price promise on every one.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((v) => (
            <div key={v.name} className="group overflow-hidden rounded-3xl border border-sky-100 bg-white transition hover:shadow-soft">
              <div className="h-48 w-full overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50">
                <FleetImage src={v.img} name={v.name} wide={v.wide} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{v.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{v.text}</p>
                <div className="mt-4 flex gap-4 text-sm font-semibold text-sky-700">
                  <span className="flex items-center gap-1.5"><Users size={15} /> Up to {v.pax}</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={15} /> {v.bags} bags</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="bg-gradient-to-br from-sky-500 to-sky-700 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Popular routes</h2>
          <p className="mt-3 text-sky-100">Tap a route and it fills in the booking form for you.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([a, b]) => (
              <a key={a} href="#booking" onClick={() => setPreset([a, b])}
                className="group flex items-center justify-between rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-ink">
                <span className="flex items-center gap-3 font-semibold"><Plane size={18} /> {a} <ArrowRight size={16} className="opacity-60" /> {b}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why + reviews */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[[ShieldCheck, "Fixed, honest pricing", "The price you are quoted is the price you pay."], [Clock, "Support at any hour", "Message us on WhatsApp or call, day or night."], [UserCheck, "Professional drivers", "Licensed, local and friendly, with a name sign at arrivals."]].map(([Icon, t, d]) => (
            <div key={t} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600"><Icon size={22} /></span>
              <div><h3 className="font-display font-bold">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></div>
            </div>
          ))}
        </div>
        <h2 className="mt-20 font-display text-3xl font-extrabold sm:text-4xl">What travellers say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-3xl bg-sky-50 p-6">
              <div className="flex gap-0.5">{[...Array(5)].map((_, n) => <Star key={n} size={16} className="fill-sky-400 text-sky-400" />)}</div>
              <blockquote className="mt-4 leading-relaxed text-slate-700">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-bold">{r.name} <span className="font-normal text-slate-500">from {r.from}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 pb-20">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">Questions, answered</h2>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className="rounded-2xl border border-sky-100 bg-white">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between p-5 text-left font-semibold">
                {q}<ChevronDown size={18} className={`shrink-0 text-sky-500 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-sky-500 to-sky-600 p-8 text-white shadow-soft md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Your ride is one message away</h2>
            <p className="mt-2 text-sky-100">Send your route and get a fixed price in minutes.</p>
          </div>
          <a href="#booking" className="rounded-full bg-white px-7 py-3.5 font-bold text-sky-700 hover:bg-sky-50">Get my fixed price</a>
        </div>
      </section>

      <footer id="contact" className="bg-ink text-sky-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div><Logo light /><p className="mt-4 max-w-xs text-sm text-sky-200">Private transfers with fixed prices, friendly drivers and support at any hour.</p></div>
          <div>
            <p className="font-display font-bold text-white">Services</p>
            <ul className="mt-3 space-y-2 text-sm">{services.map((s) => <li key={s.title}><a href="#services" className="hover:text-white">{s.title}</a></li>)}</ul>
          </div>
          <div>
            <p className="font-display font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} /><a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-white">{PHONE}</a></li>
              <li className="flex items-center gap-2"><Mail size={14} /><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-sky-300">© {new Date().getFullYear()} {BRAND} Transfers. All rights reserved.</div>
      </footer>

      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-105">
        <MessageCircle size={26} />
      </a>
    </div>
  );
}