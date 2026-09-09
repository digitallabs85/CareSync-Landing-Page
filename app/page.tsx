'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Menu,
  Play,
  ShieldCheck,
  Stethoscope,
  X,
  Activity,
  ClipboardList
} from 'lucide-react'
import config from '@/app.json'
import logo from '@/public/logo.png'

const solutions = [
  {
    title: 'Manual Vitals Entry',
    text: 'A tactile, error-free interface for nurses to quickly log blood pressure, heart rate, and temperatures.',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Walk-in Queues',
    text: 'Real-time patient tracking. Know exactly who is waiting, their vitals, and their priority level.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Doctor Checkups',
    text: 'A complete physical-feeling digital chart. Review vitals instantly and prescribe with a single click.',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85',
  },
]

// Minimalist Skeuomorphic Design Tokens
const skeuoRaised =
  'bg-neutral-100 border border-white/60 shadow-[8px_8px_16px_rgba(0,0,0,0.06),-8px_-8px_16px_rgba(255,255,255,0.9)]'
const skeuoPressed =
  'bg-neutral-100 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] border-transparent'
const skeuoBtnRed =
  'bg-gradient-to-b from-red-500 to-red-600 text-white shadow-[6px_6px_12px_rgba(220,38,38,0.25),-4px_-4px_10px_rgba(255,255,255,0.9),inset_0_2px_1px_rgba(255,255,255,0.3),inset_0_-2px_1px_rgba(0,0,0,0.2)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3)] active:translate-y-0.5'
const skeuoBtnLight =
  'bg-neutral-100 text-neutral-800 shadow-[5px_5px_10px_rgba(0,0,0,0.06),-5px_-5px_10px_rgba(255,255,255,0.9),inset_0_1px_1px_rgba(255,255,255,0.6)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] active:translate-y-0.5'

const buttonBase =
  'inline-flex items-center justify-center gap-2.5 rounded-full border-0 px-[21px] py-3.5 text-[13px] font-bold transition-all duration-200'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main
      id="top"
      className="overflow-hidden bg-neutral-100 text-neutral-900 selection:bg-red-200 selection:text-red-900"
    >
      {/* ─────────────────────────────────────
          Header
      ───────────────────────────────────── */}
      <header className="mx-auto flex h-20 max-w-310 items-center justify-between px-8 max-[800px]:h-20 max-[800px]:px-5">

        <div className='flex gap-2 items-center justify-center'>
          {/* Skeuomorphic Logo Button */}
          <Image alt='logo' src={logo} className='w-10' />
          <span className='font-extrabold tracking-tighter text-2xl'>{config.name}</span>
        </div>

        {/* Navigation */}
        <nav
          className={`${menuOpen ? 'flex' : 'hidden'
            } absolute left-[18px] right-[18px] top-[104px] z-20 flex-col items-start gap-5 rounded-2xl ${skeuoRaised} p-[22px] text-[13px] font-medium text-neutral-500 min-[801px]:static min-[801px]:flex min-[801px]:flex-row min-[801px]:items-center min-[801px]:gap-[34px] min-[801px]:rounded-none min-[801px]:border-0 min-[801px]:bg-transparent min-[801px]:p-0 min-[801px]:shadow-none`}
          aria-label="Primary navigation"
        >
          {['Features', 'Workflows', 'Platform', 'Contact'].map((item) => (
            <a
              key={item}
              className="transition-colors hover:text-red-600"
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

        {/* Desktop CTA */}
        <a
          className={`${buttonBase} ${skeuoBtnRed} max-[800px]:hidden`}
          href="#contact"
        >
          Book Demo
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`hidden size-10 place-items-center rounded-full border-0 text-neutral-700 max-[800px]:grid ${skeuoBtnLight}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* ─────────────────────────────────────
          Hero
      ───────────────────────────────────── */}
      <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-310 grid-cols-[1fr_1fr] items-center gap-12 px-8 pb-25 pt-15 max-[800px]:grid-cols-1 max-[800px]:px-5 max-[800px]:pb-18.5 max-[800px]:pt-10">

        {/* Hero Content */}
        <div className="relative z-[2]">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-red-600">
            <span className="size-2.5 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[2px_2px_4px_rgba(220,38,38,0.3),inset_1px_1px_1px_rgba(255,255,255,0.5)]" />
            Clinic EMR SaaS
          </div>

          <h1 className="mt-6 max-w-[580px] text-[clamp(48px,6vw,82px)] font-extrabold leading-[.95] tracking-[-.06em] text-neutral-800">
            The complete EMR for{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              walk-in care.
            </span>
          </h1>

          <p className="mb-10 mt-7 max-w-[440px] text-[16px] leading-[1.6] text-neutral-500">
            Seamlessly log manual vitals, manage high-volume patient queues, and empower doctors with instant digital charts. Fully hosted, incredibly physical.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center gap-[23px]">
            <a className={`${buttonBase} ${skeuoBtnRed}`} href="#contact">
              Get Early Access
              <ArrowUpRight size={18} />
            </a>

            <a
              className={`flex items-center gap-[9px] rounded-full px-5 py-3 text-[13px] font-bold text-neutral-700 ${skeuoBtnLight}`}
              href="#about"
            >
              <span className="grid size-5 place-items-center rounded-full bg-neutral-200 text-red-600 shadow-inner">
                <Play size={10} fill="currentColor" />
              </span>
              See Workflows
            </a>
          </div>
        </div>

        {/* Hero UI Mockup (No Image Required) */}
        <div
          className="relative flex h-[500px] w-full flex-col justify-center gap-6 max-[800px]:mt-6 max-[800px]:h-auto"
          aria-label="Interactive UI preview"
        >
          {/* Vitals Input Widget */}
          <div className={`z-[2] w-[85%] self-end rounded-[28px] p-6 ${skeuoRaised} max-[800px]:w-full`}>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`grid size-11 place-items-center rounded-full text-red-500 ${skeuoPressed}`}>
                  <Activity size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-[14px] font-extrabold tracking-tight text-neutral-800">Log Vitals</div>
                  <div className="text-[11px] font-medium text-neutral-400">Room 2 • Walk-in</div>
                </div>
              </div>
              <div className={`grid size-8 place-items-center rounded-full text-red-500 ${skeuoRaised}`}>
                <Check size={14} strokeWidth={3} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`flex flex-col items-center justify-center rounded-[18px] py-4 ${skeuoPressed}`}>
                <div className="text-[22px] font-black tracking-tighter text-neutral-800">120/80</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-neutral-400">BP (mmHg)</div>
              </div>
              <div className={`flex flex-col items-center justify-center rounded-[18px] py-4 ${skeuoPressed}`}>
                <div className="text-[22px] font-black tracking-tighter text-neutral-800">98.6</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-neutral-400">Temp (°F)</div>
              </div>
            </div>
          </div>

          {/* Patient Queue Widget */}
          <div className={`z-[1] -mt-12 w-[90%] self-start rounded-[28px] p-6 pt-16 ${skeuoRaised} max-[800px]:w-full`}>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-[11px] font-bold uppercase tracking-[.1em] text-neutral-400">Active Queue</div>
              <div className="text-[11px] font-bold text-red-500">3 Waiting</div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Active Patient */}
              <div className={`flex items-center justify-between rounded-[16px] p-3.5 ${skeuoPressed}`}>
                <div className="flex items-center gap-3">
                  <div className="size-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                  <div className="text-[13px] font-bold text-neutral-800">Muhammad A.</div>
                </div>
                <div className="text-[11px] font-bold text-neutral-400">Ready</div>
              </div>

              {/* Waiting Patient */}
              <div className={`flex items-center justify-between rounded-[16px] p-3.5 ${skeuoRaised}`}>
                <div className="flex items-center gap-3">
                  <div className="size-2.5 rounded-full bg-neutral-300 shadow-inner" />
                  <div className="text-[13px] font-bold text-neutral-600">Sarah M.</div>
                </div>
                <div className="text-[11px] font-bold text-neutral-400">Wait: 12m</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          Ticker (Engraved Style)
      ───────────────────────────────────── */}
      <section
        className="flex min-h-16 items-center overflow-hidden border-y border-white/50 bg-black text-[11px] font-bold uppercase tracking-[.2em] text-neutral-400"
        aria-label="Features"
      >
        <style>{`
          @keyframes scroll-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker {
            /* Increased time to 30s because the container is much wider now */
            animation: scroll-ticker 30s linear infinite;
          }
        `}</style>

        {/* The parent container moving at a constant speed */}
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          
          {/* Group 1: 15vw gap means 15% of the screen width between every word */}
          <div className="flex w-max items-center gap-[8vw] pr-[8vw]">
            <span>Manual Vitals Entry</span>
            <span className="text-red-400 shadow-inner">•</span>
            <span>Walk-in Workflows</span>
            <span className="text-red-400 shadow-inner">•</span>
            <span>Instant Checkups</span>
            <span className="text-red-400 shadow-inner">•</span>
            <span>SaaS Cloud EMR</span>
            <span className="text-red-400 shadow-inner">•</span>
          </div>

          {/* Group 2: An exact mathematical clone of Group 1 to ensure the seam is invisible */}
          <div className="flex w-max items-center gap-[8vw] pr-[8vw]">
            <span>Manual Vitals Entry</span>
            <span className="text-red-400 shadow-inner">•</span>
            <span>Walk-in Workflows</span>
            <span className="text-red-400 shadow-inner">•</span>
            <span>Instant Checkups</span>
            <span className="text-red-400 shadow-inner">•</span>
            <span>SaaS Cloud EMR</span>
            <span className="text-red-400 shadow-inner">•</span>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────
          About
      ───────────────────────────────────── */}
      <section
        className="mx-auto max-w-310 px-8 py-[130px] max-[800px]:px-5 max-[800px]:py-[85px]"
        id="about"
      >
        <div className="inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-500 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)]">
          01 / The Clinic Engine
        </div>

        <div className="mt-12 grid grid-cols-[1.1fr_.9fr] gap-[100px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]">
          <h2 className="text-[clamp(38px,5vw,60px)] font-bold leading-[1] tracking-[-.06em] text-neutral-800">
            Software that feels as reliable as a{' '}
            <span className="text-red-600">
              clipboard.
            </span>
          </h2>

          <div>
            <p className="mb-8 max-w-[425px] text-[15px] leading-[1.7] text-neutral-500">
              We built {config.name} for the reality of walk-in clinics. Nurses need fast, tactile manual vitals entry. Doctors need instant access to patient histories. By combining physical-feeling UI with powerful SaaS infrastructure, your clinic moves faster with zero friction.
            </p>

            <a
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold text-red-600 ${skeuoBtnLight}`}
              href="#solutions"
            >
              Explore the Platform
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          Solutions (Cards)
      ───────────────────────────────────── */}
      <section
        className="mx-auto max-w-310 px-8 pb-[130px] pt-6 max-[800px]:px-5 max-[800px]:pb-[85px]"
        id="solutions"
      >
        <div className="flex items-end justify-between gap-[30px] max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[18px]">
          <div>
            <div className="inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-500 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)]">
              02 / Core Workflows
            </div>
            <h2 className="mt-6 text-[clamp(38px,5vw,60px)] font-bold leading-[1] tracking-[-.06em] text-neutral-800">
              Built for high-volume
              <br />
              <span className="text-red-600">
                patient care.
              </span>
            </h2>
          </div>
          <p className="max-w-[240px] text-[14px] leading-[1.5] text-neutral-500">
            Everything your staff needs to manage a patient from the waiting room to the pharmacy.
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-3 gap-8 max-[800px]:mt-10 max-[800px]:grid-cols-1">
          {solutions.map((solution, index) => (
            <article
              className={`group relative min-h-[420px] rounded-[32px] p-6 transition-all duration-300 hover:-translate-y-2 ${skeuoRaised}`}
              key={solution.title}
            >
              {/* Image Screen Bezel */}
              <div className={`relative h-[190px] w-full overflow-hidden rounded-[20px] p-1.5 ${skeuoPressed}`}>
                <div className="relative size-full overflow-hidden rounded-[14px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Screen Glare Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className={`grid size-8 place-items-center rounded-full text-[10px] font-bold text-red-500 ${skeuoPressed}`}>
                  0{index + 1}
                </div>
              </div>

              <h3 className="mb-3 mt-4 text-[20px] font-extrabold tracking-[-.04em] text-neutral-800">
                {solution.title}
              </h3>

              <p className="max-w-[240px] text-[13px] leading-[1.6] text-neutral-500">
                {solution.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          Impact (Skeuomorphic Plate)
      ───────────────────────────────────── */}
      <section
        className="mx-auto mb-[130px] max-w-310 px-8 max-[800px]:mb-[85px] max-[800px]:px-5"
        id="impact"
      >
        <div className={`relative grid min-h-[470px] grid-cols-[1fr_.5fr] gap-12 overflow-hidden rounded-[40px] p-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px] max-[800px]:rounded-[30px] max-[800px]:p-[40px] ${skeuoRaised}`}>

          <div className="relative z-[1]">
            <div className="inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-500 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)]">
              03 / Why SaaS?
            </div>

            <h2 className="my-6 text-[clamp(36px,5vw,58px)] font-bold leading-[1] tracking-[-.06em] text-neutral-800">
              No servers.
              <br />
              <span className="text-red-600">Just better care.</span>
            </h2>

            <p className="mb-10 max-w-[400px] text-[15px] leading-[1.7] text-neutral-500">
              Stop worrying about IT infrastructure. Our complete EMR operates securely in the cloud, allowing your doctors and nurses to focus entirely on patients entering the walk-in clinic.
            </p>

            <a className={`${buttonBase} ${skeuoBtnRed}`} href="#contact">
              Deploy in your clinic
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Stats Indentation */}
          <div className={`relative z-[1] flex flex-col justify-center rounded-[24px] p-8 ${skeuoPressed}`}>
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-red-500" />
              <h3 className="text-xl font-bold text-neutral-800">HIPAA Ready</h3>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {[
                'Instant vital syncing',
                'Live queue dashboard',
                'Cloud prescription tools',
                '99.9% SaaS uptime'
              ].map((item) => (
                <div className="flex items-center gap-3 text-[13px] font-medium text-neutral-600" key={item}>
                  <div className={`grid size-6 place-items-center rounded-full text-red-500 ${skeuoRaised}`}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          Contact (Skeuomorphic Form)
      ───────────────────────────────────── */}
      <section
        className="mx-auto grid max-w-310 grid-cols-[.85fr_1.15fr] gap-[90px] px-8 pb-[130px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px] max-[800px]:px-5 max-[800px]:pb-[85px]"
        id="contact"
      >
        <div>
          <div className="inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-500 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,1)]">
            04 / Book a Demo
          </div>

          <h2 className="my-6 text-[clamp(36px,5vw,56px)] font-bold leading-[1] tracking-[-.06em] text-neutral-800">
            Ready to upgrade
            <br />
            <span className="text-red-600">your clinic?</span>
          </h2>

          <p className="max-w-[320px] text-[15px] leading-[1.6] text-neutral-500">
            Get early access to {config.name}'s EMR SaaS and see how seamless a walk-in workflow can be.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              className={`inline-flex w-fit items-center gap-3 rounded-full px-6 py-3 text-[13px] font-bold text-neutral-700 transition hover:text-red-600 ${skeuoBtnLight}`}
              href={`mailto:hello@${config.name}.care`}
            >
              hello@{config.name}.care
              <ArrowUpRight size={15} />
            </a>
            <span className="ml-2 text-[11px] font-medium text-neutral-400">
              We usually reply within 24 hours.
            </span>
          </div>
        </div>

        {/* Form Container */}
        <form
          className={`flex flex-col gap-6 rounded-[32px] p-[40px] max-[800px]:p-[25px] ${skeuoRaised}`}
          onSubmit={handleSubmit}
        >
          {submitted ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <div className={`mb-6 grid size-16 place-items-center rounded-full text-red-500 ${skeuoRaised}`}>
                <Check size={30} strokeWidth={3} />
              </div>
              <h3 className="mb-2 text-[28px] font-extrabold tracking-[-.05em] text-neutral-800">
                Request Sent.
              </h3>
              <p className="mb-8 text-sm text-neutral-500">
                Our team will configure your demo and reach out shortly.
              </p>
              <button
                type="button"
                className={`${buttonBase} ${skeuoBtnLight}`}
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
                <label className="flex flex-col gap-2.5 text-[12px] font-bold text-neutral-700">
                  Clinic Name
                  <input
                    required
                    name="clinic"
                    placeholder="City Medical Walk-in"
                    className={`rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-red-400/50 ${skeuoPressed}`}
                  />
                </label>

                <label className="flex flex-col gap-2.5 text-[12px] font-bold text-neutral-700">
                  Work Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="doctor@clinic.com"
                    className={`rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-red-400/50 ${skeuoPressed}`}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-neutral-700">
                Clinic Volume
                <select
                  name="volume"
                  defaultValue=""
                  className={`rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-red-400/50 ${skeuoPressed}`}
                >
                  <option value="" disabled>Select patient volume per day</option>
                  <option>1 - 50 Patients</option>
                  <option>50 - 150 Patients</option>
                  <option>150+ Patients</option>
                </select>
              </label>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-neutral-700">
                Additional Details
                <textarea
                  name="message"
                  placeholder="Tell us about your current vitals and checkup workflow..."
                  rows={4}
                  className={`resize-y rounded-[16px] px-4 py-3.5 text-[13px] font-medium text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-red-400/50 ${skeuoPressed}`}
                />
              </label>

              <button className={`${buttonBase} ${skeuoBtnRed} mt-2 w-full`} type="submit">
                Request Demo Access
                <ArrowUpRight size={18} />
              </button>
            </>
          )}
        </form>
      </section>

      {/* ─────────────────────────────────────
          Footer
      ───────────────────────────────────── */}
      <footer className="mx-auto grid max-w-310 grid-cols-3 items-center gap-5 border-t border-white/60 px-8 pb-[40px] pt-[35px] text-[12px] font-medium text-neutral-400 shadow-[inset_0_1px_0_rgba(0,0,0,0.03)] max-[800px]:grid-cols-2 max-[800px]:px-5">
        <div className="inline-flex items-center gap-[10px] text-[18px] font-extrabold tracking-[-.05em] text-neutral-800">
          <span className="grid size-[28px] place-items-center rounded-[8px] bg-neutral-200 text-red-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,1)]">
            <Activity size={16} strokeWidth={3} />
          </span>
          {config.name}
        </div>

        <p className="text-center max-[800px]:hidden">
          The walk-in clinic engine.
        </p>

        <div className="flex justify-end gap-6 text-neutral-500 max-[800px]:flex-wrap max-[800px]:gap-4">
          <a className="transition hover:text-red-600" href="#top">
            Top ↑
          </a>
          <a className="transition hover:text-red-600" href="#contact">
            Support
          </a>
          <a className="transition hover:text-red-600" href="#contact">
            Terms
          </a>
        </div>
      </footer>
    </main>
  )
}