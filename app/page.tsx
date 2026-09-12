'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Menu,
  Play,
  ShieldCheck,
  Activity,
  X,
  Loader2
} from 'lucide-react'
import config from '@/app.json'
import logo from '@/public/logo.png'

const solutions = [
  {
    title: 'Manual Vitals Entry',
    text: 'A tactile, error-free interface for nurses to quickly log blood pressure, heart rate, and temperatures.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Walk-in Queues',
    text: 'Real-time patient tracking. Know exactly who is waiting, their vitals, and their priority level.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Online Doctor',
    text: 'A complete physical-feeling digital chart. Review vitals instantly and prescribe with a single click.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85',
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const payload = {
      clinic: formData.get('clinic'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      volume: formData.get('volume'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!data.success) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      id="top"
      className="overflow-hidden bg-skeuo-base text-skeuo-text selection:bg-skeuo-red selection:text-white"
    >
      {/* Header */}
      <header className="mx-auto flex h-20 max-w-310 items-center justify-between px-8 max-[800px]:h-20 max-[800px]:px-5">
        <div className="flex items-center justify-center gap-2">
          <Image alt="logo" src={logo} className="w-10" />
          <span className="text-2xl font-extrabold tracking-tighter">{config.name}</span>
        </div>

        <nav
          className={`${menuOpen ? 'flex' : 'hidden'
            } skeuo-raised absolute left-[18px] right-[18px] top-[104px] z-20 flex-col items-start gap-5 rounded-2xl p-[22px] text-[13px] font-medium text-skeuo-muted min-[801px]:static min-[801px]:flex min-[801px]:flex-row min-[801px]:items-center min-[801px]:gap-[34px] min-[801px]:rounded-none min-[801px]:border-0 min-[801px]:bg-transparent min-[801px]:p-0 min-[801px]:shadow-none`}
          aria-label="Primary navigation"
        >
          {['Features', 'Workflows', 'Platform', 'Contact'].map((item) => (
            <a
              key={item}
              className="transition-colors hover:text-skeuo-red"
              href={`#${item === 'Features'
                ? 'about'
                : item === 'Workflows'
                  ? 'solutions'
                  : item === 'Platform'
                    ? 'impact'
                    : 'contact'
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="btn-base skeuo-btn-red max-[800px]:hidden" href="#contact">
          Book Demo
          <ArrowUpRight size={16} />
        </a>

        <button
          className={`skeuo-btn-light hidden size-10 place-items-center rounded-full border-0 text-skeuo-text max-[800px]:grid`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-310 grid-cols-[1fr_1fr] items-center gap-12 px-8 pb-25 pt-15 max-[800px]:grid-cols-1 max-[800px]:px-5 max-[800px]:pb-18.5 max-[800px]:pt-10">
        <div className="relative z-[2]">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-skeuo-red">
            <span className="size-2.5 rounded-full bg-skeuo-red shadow-[2px_2px_4px_var(--shadow-brand),inset_1px_1px_1px_rgba(255,255,255,0.5)]" />
            Clinic EMR SaaS
          </div>

          <h1 className="mt-6 max-w-[580px] text-[clamp(48px,6vw,82px)] font-extrabold leading-[.95] tracking-[-.06em] text-skeuo-text">
            The complete EMR for{' '}
            <span className="bg-gradient-to-r from-skeuo-red-dark to-skeuo-red bg-clip-text text-transparent">
              walk-in and online care.
            </span>
          </h1>

          <p className="mb-10 mt-7 max-w-[440px] text-[16px] leading-[1.6] text-skeuo-muted">
            Log manual vitals, manage high-volume queues, and run video consults, all from one chart. One system for in-clinic and telehealth visits.
          </p>

          <div className="flex flex-wrap items-center gap-[23px]">
            <a className="btn-base skeuo-btn-red" href="#contact">
              Get Early Access
              <ArrowUpRight size={18} />
            </a>

            <a className="btn-base skeuo-btn-light text-skeuo-text" href="#about">
              <span className="grid size-5 place-items-center rounded-full bg-skeuo-surface text-skeuo-red shadow-inner">
                <Play size={10} fill="currentColor" />
              </span>
              See Workflows
            </a>
          </div>
        </div>

        {/* Hero UI Mockup (Redesigned with Overlapping Elements) */}
        <div className="relative flex h-auto w-full items-center justify-center max-[800px]:mt-10">
          <div className="skeuo-raised w-full max-w-[420px] overflow-hidden rounded-[32px] p-3">
            <Image
              src="/video-consult.jpg"
              alt="Video consultation with doctor"
              width={800}
              height={1000}
              className="w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="flex min-h-16 items-center overflow-hidden border-y border-white/50 bg-[#111] text-[11px] font-bold uppercase tracking-[.2em] text-skeuo-muted">
        <style>{`
          @keyframes scroll-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker {
            animation: scroll-ticker 30s linear infinite;
          }
        `}</style>
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          <div className="flex w-max items-center gap-[8vw] pr-[8vw]">
            <span>Manual Vitals Entry</span>
            <span className="shadow-inner text-skeuo-red">•</span>
            <span>Walk-in Workflows</span>
            <span className="shadow-inner text-skeuo-red">•</span>
            <span>Instant Checkups</span>
            <span className="shadow-inner text-skeuo-red">•</span>
            <span>SaaS Cloud EMR</span>
            <span className="shadow-inner text-skeuo-red">•</span>
          </div>
          <div className="flex w-max items-center gap-[8vw] pr-[8vw]">
            <span>Manual Vitals Entry</span>
            <span className="shadow-inner text-skeuo-red">•</span>
            <span>Walk-in Workflows</span>
            <span className="shadow-inner text-skeuo-red">•</span>
            <span>Instant Checkups</span>
            <span className="shadow-inner text-skeuo-red">•</span>
            <span>SaaS Cloud EMR</span>
            <span className="shadow-inner text-skeuo-red">•</span>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-310 px-8 py-32.5 pt-12 max-[800px]:px-5 max-[800px]:pb-21.25" id="solutions">
        <div className="flex items-end justify-between gap-7.5 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4.5">
          <div>
            <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
              02 / Core Workflows
            </div>
            <h2 className="mt-6 text-[clamp(38px,5vw,60px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
              Built for high-volume
              <br />
              <span className="text-skeuo-red">patient care.</span>
            </h2>
          </div>
          <p className="max-w-[240px] text-[14px] leading-[1.5] text-skeuo-muted">
            Everything your staff needs to manage a patient from the waiting room to the pharmacy.
          </p>
        </div>

        <div className="mt-17.5 grid grid-cols-3 gap-8 max-[800px]:mt-10 max-[800px]:grid-cols-1 ">
          {solutions.map((solution, index) => (
            <article className={`skeuo-raised group relative min-h-[420px] rounded-[32px] p-6 transition-all duration-300 hover:-translate-y-2`} key={solution.title}>
              <div className={`skeuo-pressed relative h-[190px] w-full overflow-hidden rounded-[20px] p-1.5`}>
                <div className="relative size-full overflow-hidden rounded-[14px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className={`skeuo-pressed grid size-8 place-items-center rounded-full text-[10px] font-bold text-skeuo-red`}>
                  0{index + 1}
                </div>
              </div>

              <h3 className="mb-3 mt-4 text-[20px] font-extrabold tracking-[-.04em] text-skeuo-text">
                {solution.title}
              </h3>
              <p className="max-w-[240px] text-[13px] leading-[1.6] text-skeuo-muted">
                {solution.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Online Vitals Entry - tilted card w/ floating stat chip */}
      <section className="mx-auto grid max-w-310 grid-cols-[1fr_1fr] items-center gap-16 px-8 pb-28 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-5 max-[800px]:py-16">
        <div>
          <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
            03 / Remote Intake
          </div>
          <h2 className="mt-6 max-w-[420px] text-[clamp(32px,4.5vw,50px)] font-bold leading-[1.05] tracking-[-.05em] text-skeuo-text">
            Vitals entry, <span className="text-skeuo-red">online too.</span>
          </h2>
          <p className="mb-8 mt-6 max-w-[400px] text-[15px] leading-[1.7] text-skeuo-muted">
            Patients or remote staff log vitals straight into the same chart — no double entry, no delay between the home and the clinic.
          </p>
          <a className="btn-base skeuo-btn-light text-skeuo-red" href="#contact">
            See How It Works
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="skeuo-raised w-[85%] rotate-[-3deg] rounded-[32px] p-4 transition-transform duration-300 hover:rotate-0">
            <div className="skeuo-pressed relative h-[360px] w-full overflow-hidden rounded-[24px] p-1.5">
              <div className="relative size-full overflow-hidden rounded-[18px]">
                <Image
                  src="/online-vitals.jpg"
                  alt="Manual vitals entry on tablet"
                  fill
                  sizes="(max-width: 800px) 90vw, 40vw"
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" /> */}
              </div>
            </div>
          </div>

          {/* Floating stat chip */}
          <div className="skeuo-raised absolute -bottom-6 -left-4 z-10 flex items-center gap-3 rounded-[20px] px-5 py-3.5 max-[800px]:left-2">
            <div className="skeuo-pressed grid size-9 place-items-center rounded-full text-skeuo-red">
              <Activity size={16} strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[15px] font-black tracking-tight text-skeuo-text">120/80</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-skeuo-muted">Synced live</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Consult - tilted opposite way, badge top-right */}
      <section className="mx-auto grid max-w-310 grid-cols-[1fr_1fr] items-center gap-16 px-8 pb-28 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-5 max-[800px]:pb-16">
        <div className="relative order-2 flex items-center justify-center min-[800px]:order-1">
          <div className="skeuo-raised  w-[85%] rotate-[3deg] rounded-[32px] p-4 transition-transform duration-300 hover:rotate-0">
            <div className="skeuo-pressed relative h-[360px] w-full overflow-hidden rounded-[24px] p-1.5">
              <div className="relative size-full overflow-hidden rounded-[18px]">
                <Image
                  src="/video-consult3.jpg"
                  alt="Video consultation with doctor"
                  fill
                  sizes="(max-width: 800px) 90vw, 40vw"
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" /> */}
              </div>
            </div>
          </div>

          {/* Floating live badge */}
          <div className="skeuo-raised absolute -right-4 -top-6 z-10 flex items-center gap-2 rounded-full px-4 py-2.5 max-[800px]:right-2">
            <span className="size-2 rounded-full bg-skeuo-red shadow-[0_0_8px_var(--shadow-brand)] animate-pulse" />
            <span className="text-[11px] font-bold text-skeuo-red">04:22 Live</span>
          </div>
        </div>

        <div className="order-1 min-[800px]:order-2">
          <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
            04 / Telehealth
          </div>
          <h2 className="mt-6 max-w-[420px] text-[clamp(32px,4.5vw,50px)] font-bold leading-[1.05] tracking-[-.05em] text-skeuo-text">
            Face-to-face, <span className="text-skeuo-red">from anywhere.</span>
          </h2>
          <p className="mb-8 mt-6 max-w-[400px] text-[15px] leading-[1.7] text-skeuo-muted">
            Run video consults inside the same platform. Doctors pull up history mid-call, write notes live, and close the visit without switching apps.
          </p>
          <a className="btn-base skeuo-btn-light text-skeuo-red" href="#contact">
            See How It Works
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-310 px-8  pb-32.5 max-[800px]:px-5 max-[800px]:py-21.25" id="about">
        <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
          01 / The Clinic Engine
        </div>

        <div className="mt-12 grid grid-cols-[1.1fr_.9fr] gap-[100px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]">
          <h2 className="text-[clamp(38px,5vw,60px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
            Software that feels as reliable as a{' '}
            <span className="text-skeuo-red">clipboard.</span>
          </h2>

          <div>
            <p className="mb-8 max-w-[425px] text-[15px] leading-[1.7] text-skeuo-muted">
              We built {config.name} for the reality of walk-in clinics. Nurses need fast, tactile manual vitals entry. Doctors need instant access to patient histories. By combining physical-feeling UI with powerful SaaS infrastructure, your clinic moves faster with zero friction.
            </p>
            <a className="btn-base skeuo-btn-light text-skeuo-red" href="#solutions">
              Explore the Platform
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>



      {/* Impact */}
      <section className="mx-auto mb-[130px] max-w-310 px-8 max-[800px]:mb-[85px] max-[800px]:px-5" id="impact">
        <div className={`skeuo-raised relative grid min-h-[470px] grid-cols-[1fr_.5fr] gap-12 overflow-hidden rounded-[40px] p-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px] max-[800px]:rounded-[30px] max-[800px]:p-[40px]`}>
          <div className="relative z-[1]">
            <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
              03 / Why SaaS?
            </div>
            <h2 className="my-6 text-[clamp(36px,5vw,58px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
              No servers.
              <br />
              <span className="text-skeuo-red">Just better care.</span>
            </h2>
            <p className="mb-10 max-w-[400px] text-[15px] leading-[1.7] text-skeuo-muted">
              Stop worrying about IT infrastructure. Our complete EMR operates securely in the cloud, allowing your doctors and nurses to focus entirely on patients entering the walk-in clinic.
            </p>
            <a className="btn-base skeuo-btn-red" href="#contact">
              Deploy in your clinic
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className={`skeuo-pressed relative z-[1] flex flex-col justify-center rounded-[24px] p-8`}>
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-skeuo-red" />
              <h3 className="text-xl font-bold text-skeuo-text">HIPAA Ready</h3>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {['Instant vital syncing', 'Live queue dashboard', 'Cloud prescription tools', '99.9% SaaS uptime'].map((item) => (
                <div className="flex items-center gap-3 text-[13px] font-medium text-skeuo-muted" key={item}>
                  <div className={`skeuo-raised grid size-6 place-items-center rounded-full text-skeuo-red`}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto grid max-w-310 grid-cols-[.85fr_1.15fr] gap-[90px] px-8 pb-[130px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px] max-[800px]:px-5 max-[800px]:pb-[85px]" id="contact">
        <div>
          <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
            04 / Book a Demo
          </div>
          <h2 className="my-6 text-[clamp(36px,5vw,56px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
            Ready to upgrade
            <br />
            <span className="text-skeuo-red">your clinic?</span>
          </h2>
          <p className="max-w-[320px] text-[15px] leading-[1.6] text-skeuo-muted">
            Get early access to {config.name}'s EMR SaaS and see how seamless a walk-in workflow can be.
          </p>
          <div className="mt-10 flex flex-col gap-3">
            <a className={`btn-base skeuo-btn-light w-fit font-bold text-skeuo-text transition hover:text-skeuo-red`} href={`mailto:hello@${config.name}.care`}>
              hello@{config.name}.care
              <ArrowUpRight size={15} />
            </a>
            <span className="ml-2 text-[11px] font-medium text-skeuo-muted">
              We usually reply within 24 hours.
            </span>
          </div>
        </div>

        <form className={`skeuo-raised flex flex-col gap-6 rounded-[32px] p-[40px] max-[800px]:p-[25px]`} onSubmit={handleSubmit}>
          {submitted ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <div className={`skeuo-raised mb-6 grid size-16 place-items-center rounded-full text-skeuo-red`}>
                <Check size={30} strokeWidth={3} />
              </div>
              <h3 className="mb-2 text-[28px] font-extrabold tracking-[-.05em] text-skeuo-text">
                Request Sent.
              </h3>
              <p className="mb-8 text-sm text-skeuo-muted">
                Our team will configure your demo and reach out shortly.
              </p>
              <button type="button" className="btn-base cursor-pointer skeuo-btn-light" onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
                <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                  Clinic Name
                  <input required name="clinic" placeholder="City Medical Walk-in" className={`skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red`} />
                </label>
                <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                  Work Email
                  <input required type="email" name="email" placeholder="doctor@clinic.com" className={`skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red`} />
                </label>
              </div>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                Clinic Volume
                <select name="volume" defaultValue="" className={`skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all focus:ring-2 focus:ring-skeuo-red`}>
                  <option value="" disabled>Select patient volume per day</option>
                  <option>1 - 50 Patients</option>
                  <option>50 - 150 Patients</option>
                  <option>150+ Patients</option>
                </select>
              </label>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                Phone Number <span className="font-normal text-skeuo-muted">(optional)</span>
                <input type="tel" name="phone" placeholder="+92 300 1234567" className="skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red" />
              </label>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                Additional Details
                <textarea name="message" placeholder="Tell us about your current vitals and checkup workflow..." rows={4} className={`skeuo-pressed resize-y rounded-[16px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red`} />
              </label>

              {error && (
                <p className="text-[12px] font-medium text-skeuo-red">{error}</p>
              )}

              <button
                className="btn-base cursor-pointer skeuo-btn-red mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request Demo Access
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="mx-auto grid max-w-310 grid-cols-3 items-center gap-5 border-t border-white/60 px-8 pb-[40px] pt-[35px] text-[12px] font-medium text-skeuo-muted shadow-[inset_0_1px_0_rgba(0,0,0,0.03)] max-[800px]:grid-cols-2 max-[800px]:px-5">
        <div className="flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-.05em] text-skeuo-text">
          <span className="grid size-[28px] place-items-center rounded-[8px] bg-skeuo-surface text-skeuo-red shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,1)]">
            <Activity size={16} strokeWidth={3} />
          </span>
          {config.name}
        </div>

        <p className="text-center max-[800px]:hidden">
          The walk-in clinic engine.
        </p>

        <div className="flex justify-end gap-6 text-skeuo-muted max-[800px]:flex-wrap max-[800px]:gap-4">
          <a className="transition hover:text-skeuo-red" href="#top">Top ↑</a>
          <a className="transition hover:text-skeuo-red" href="#contact">Support</a>
          <a className="transition hover:text-skeuo-red" href="#contact">Terms</a>
        </div>
      </footer>
    </main>
  )
}