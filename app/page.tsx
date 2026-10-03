'use client'

import { useState } from 'react'
import Image from 'next/image'
import SolutionManualVitalsImage from '../public/manual-vitals.jpg'
import SolutionOnlineDoctorImage from '../public/video-consult5.jpg'
import {
  ArrowUpRight,
  Check,
  Menu,
  Play,
  ShieldCheck,
  Activity,
  X,
  Loader2,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Users,
  Stethoscope
} from 'lucide-react'
import config from '@/app.json'
import logo from '@/public/logo.png'

const solutions = [
  { title: 'Manual Vitals Entry', text: 'A fast, error-free interface for the on-site clinic to log blood pressure, heart rate and temperature for any employee, student or visitor.', image: SolutionManualVitalsImage },
  { title: 'Clinic Queue', text: 'Real-time tracking of who is waiting, their vitals and priority, whether it is a factory floor or a head office.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85' },
  { title: 'Online Doctor', text: 'Connect people to a doctor by video. Vitals and history are already in the chart, so the doctor can prescribe immediately.', image: SolutionOnlineDoctorImage },
]

const audiences = [
  { icon: Building2, title: 'Offices & Corporates', text: 'Staff checkups, sick-room visits and wellness programs in one record.' },
  { icon: Factory, title: 'Factories & Industry', text: 'Fast triage and injury logging for large shifts on site.' },
  { icon: GraduationCap, title: 'Schools & Universities', text: 'Student health room, vitals and parent-ready visit records.' },
  { icon: Hotel, title: 'Hotels & Hospitality', text: 'On-call care for staff and guests, without a clinic on site.' },
  { icon: Users, title: 'NGOs & Camps', text: 'Health screening for large groups, online or on the ground.' },
  { icon: Stethoscope, title: 'Clinics & Hospitals', text: 'Walk-in queues and telehealth in the same system.' },
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
          {['Who It\'s For', 'Workflows', 'Platform', 'Contact'].map((item) => (
            <a
              key={item}
              className="transition-colors hover:text-skeuo-red"
              href={`#${item === 'Who It\'s For'
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
          className="skeuo-btn-light hidden size-10 place-items-center rounded-full border-0 text-skeuo-text max-[800px]:grid"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-310 grid-cols-[1fr_1fr] items-center gap-12 px-8 pb-25 pt-15 max-[800px]:grid-cols-1 max-[800px]:px-5 max-[800px]:pb-18.5 max-[800px]:pt-10">
        <div className="relative z-[2] flex flex-col items-start gap-7">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-skeuo-red">
            <span className="size-2.5 rounded-full bg-skeuo-red shadow-[2px_2px_4px_var(--shadow-brand),inset_1px_1px_1px_rgba(255,255,255,0.5)]" />
            Health Platform for Organizations
          </div>

          <h1 className="max-w-[580px] text-[clamp(44px,5.6vw,78px)] font-extrabold leading-none tracking-[-.06em] text-skeuo-text">
            Better health for{' '}
            <span className="bg-gradient-to-r from-skeuo-red-dark to-skeuo-red bg-clip-text text-transparent leading-5">
              every person you look after.
            </span>
          </h1>

          <p className="max-w-[460px] text-[16px] leading-[1.6] text-skeuo-muted">
            Offices, factories, schools, hotels, clinics. Anywhere people gather, someone needs a checkup. Log vitals, run the clinic queue and connect people to a doctor by video, all from one record.
          </p>

          <div className="flex flex-wrap items-center gap-[23px] pt-3">
            <a className="btn-base skeuo-btn-red" href="#contact">
              Get Early Access
              <ArrowUpRight size={18} />
            </a>

            <a className="btn-base skeuo-btn-light text-skeuo-text" href="#about">
              <span className="grid size-5 place-items-center rounded-full bg-skeuo-surface text-skeuo-red shadow-inner">
                <Play size={10} fill="currentColor" />
              </span>
              Who It's For
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative flex h-auto w-full items-center justify-center max-[800px]:pt-16">
          <div className="pointer-events-none absolute -top-10 -right-10 size-[280px] rounded-full bg-skeuo-red/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 size-[220px] rounded-full bg-skeuo-red/10 blur-[80px]" />

          <div
            className="skeuo-raised relative z-[1] mx-auto aspect-square w-full max-w-[380px] overflow-hidden p-3 transition-transform duration-500 hover:-translate-y-1"
            style={{ borderRadius: '38px 38px 38px 90px' }}
          >
            <div
              className="relative size-full overflow-hidden"
              style={{ borderRadius: '32px 32px 32px 80px' }}
            >
              <Image
                src="/video-consult.jpg"
                alt="Video consultation with doctor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-skeuo-red opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-skeuo-red" />
                </span>
                <span className="text-[10px] font-bold text-skeuo-text">Live Consult</span>
              </div>
            </div>
          </div>

          <div className="skeuo-raised absolute -right-4 top-6 z-[2] flex items-center gap-3 rounded-2xl bg-skeuo-base/95 px-4 py-3 backdrop-blur-md max-[440px]:right-0 max-[440px]:scale-90">
            <div className="skeuo-pressed grid size-9 place-items-center rounded-full text-skeuo-red">
              <Activity size={16} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[14px] font-black leading-none tracking-tight text-skeuo-text">120/80</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-skeuo-muted">Blood Pressure</div>
            </div>
          </div>

          <div className="skeuo-raised absolute -bottom-6 -left-6 z-[2] flex items-center gap-3 rounded-2xl bg-skeuo-base/95 px-4 py-3.5 backdrop-blur-md max-[440px]:left-0 max-[440px]:scale-90">
            <div className="skeuo-pressed grid size-9 place-items-center rounded-full text-skeuo-red">
              <Check size={16} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[14px] font-black leading-none tracking-tight text-skeuo-text">32 Check-ins</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-skeuo-muted">Handled Today</div>
            </div>
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
          {[0, 1].map((n) => (
            <div key={n} className="flex w-max items-center gap-[8vw] pr-[8vw]">
              {['Offices', 'Factories', 'Schools & Universities', 'Hotels', 'NGOs & Camps', 'Clinics'].map((item) => (
                <div key={item} className="flex items-center gap-[8vw]">
                  <span>{item}</span>
                  <span className="text-skeuo-red">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto flex max-w-310 flex-col gap-16 px-8 py-32.5 max-[800px]:px-5 max-[800px]:py-21.25" id="about">
        <div className="flex items-end justify-between gap-8 max-[800px]:flex-col max-[800px]:items-start">
          <div className="flex flex-col items-start gap-6">
            <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
              01 / Who It's For
            </div>
            <h2 className="max-w-[620px] text-[clamp(38px,5vw,60px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
              If you have people,{' '}
              <span className="text-skeuo-red">you need a clinic.</span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[15px] leading-[1.7] text-skeuo-muted">
            {config.name} started in walk-in clinics, but the problem is the same everywhere: someone feels unwell, someone has to check them, and the record gets lost. We fix that for any organization.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {audiences.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="skeuo-raised flex flex-col items-start gap-5 rounded-[28px] p-7 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="skeuo-pressed grid size-12 place-items-center rounded-full text-skeuo-red">
                <Icon size={20} strokeWidth={2.2} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-extrabold tracking-[-.04em] text-skeuo-text">{title}</h3>
                <p className="text-[13px] leading-[1.6] text-skeuo-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto flex max-w-310 flex-col gap-17.5 px-8 pb-32.5 max-[800px]:gap-10 max-[800px]:px-5 max-[800px]:pb-21.25" id="solutions">
        <div className="flex items-end justify-between gap-7.5 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4.5">
          <div className="flex flex-col items-start gap-6">
            <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
              02 / Core Workflows
            </div>
            <h2 className="text-[clamp(38px,5vw,60px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
              One workflow,
              <br />
              <span className="text-skeuo-red">any organization.</span>
            </h2>
          </div>
          <p className="max-w-[260px] text-[14px] leading-[1.5] text-skeuo-muted">
            From the first vitals check to the prescription, your clinic never leaves one chart.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-[800px]:grid-cols-1">
          {solutions.map((solution, index) => (
            <article className="skeuo-raised group relative flex min-h-[420px] flex-col gap-6 rounded-[32px] p-6 transition-all duration-300 hover:-translate-y-2" key={solution.title}>
              <div className="skeuo-pressed relative h-[190px] w-full overflow-hidden rounded-[20px] p-1.5">
                <div className="relative size-full overflow-hidden rounded-[14px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="scale-125 object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                </div>
              </div>

              <div className="skeuo-pressed grid size-8 place-items-center rounded-full text-[10px] font-bold text-skeuo-red">
                0{index + 1}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-extrabold tracking-[-.04em] text-skeuo-text">
                  {solution.title}
                </h3>
                <p className="max-w-[260px] text-[13px] leading-[1.6] text-skeuo-muted">
                  {solution.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Remote Intake */}
      <section className="mx-auto grid max-w-310 grid-cols-[1fr_1fr] items-center gap-16 px-8 pb-28 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-5 max-[800px]:py-16">
        <div className="flex flex-col items-start gap-6">
          <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
            03 / Remote Intake
          </div>
          <h2 className="max-w-[420px] text-[clamp(32px,4.5vw,50px)] font-bold leading-[1.05] tracking-[-.05em] text-skeuo-text">
            Remote teams, <span className="text-skeuo-red">same chart.</span>
          </h2>
          <p className="max-w-[400px] text-[15px] leading-[1.7] text-skeuo-muted">
            Branch offices, remote staff and field workers log vitals straight into the central record. No double entry, no delay between wherever they are and your health team.
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
                  alt="Vitals entry on tablet"
                  fill
                  sizes="(max-width: 800px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="skeuo-raised absolute -bottom-6 -left-4 z-10 flex items-center gap-3 rounded-[20px] px-5 py-3.5 max-[800px]:left-2">
            <div className="skeuo-pressed grid size-9 place-items-center rounded-full text-skeuo-red">
              <Activity size={16} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-[15px] font-black tracking-tight text-skeuo-text">120/80</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-skeuo-muted">Synced live</div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth */}
      <section className="mx-auto grid max-w-310 grid-cols-[1fr_1fr] items-center gap-16 px-8 pb-28 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-5 max-[800px]:pb-16">
        <div className="relative order-2 flex items-center justify-center min-[800px]:order-1">
          <div className="skeuo-raised w-[85%] rotate-[3deg] rounded-[32px] p-4 transition-transform duration-300 hover:rotate-0">
            <div className="skeuo-pressed relative h-[360px] w-full overflow-hidden rounded-[24px] p-1.5">
              <div className="relative size-full overflow-hidden rounded-[18px]">
                <Image
                  src="/video-consult3.jpg"
                  alt="Video consultation with doctor"
                  fill
                  sizes="(max-width: 800px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="skeuo-raised absolute -right-4 -top-6 z-10 flex items-center gap-2 rounded-full px-4 py-2.5 max-[800px]:right-2">
            <span className="size-2 animate-pulse rounded-full bg-skeuo-red shadow-[0_0_8px_var(--shadow-brand)]" />
            <span className="text-[11px] font-bold text-skeuo-red">04:22 Live</span>
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-6 min-[800px]:order-2">
          <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
            04 / Telehealth
          </div>
          <h2 className="max-w-[420px] text-[clamp(32px,4.5vw,50px)] font-bold leading-[1.05] tracking-[-.05em] text-skeuo-text">
            Bring your own doctors, <span className="text-skeuo-red">go online.</span>
          </h2>
          <p className="max-w-[400px] text-[15px] leading-[1.7] text-skeuo-muted">
            Use your own doctors or panel physicians. They join video consults from any device, see the patient's vitals and history mid-call, write notes live and close the visit in the same chart.
          </p>
          <a className="btn-base skeuo-btn-light text-skeuo-red" href="#contact">
            See How It Works
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto mb-[130px] max-w-310 px-8 max-[800px]:mb-[85px] max-[800px]:px-5" id="impact">
        <div className="skeuo-raised relative grid min-h-[470px] grid-cols-[1fr_.5fr] gap-12 overflow-hidden rounded-[40px] p-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px] max-[800px]:rounded-[30px] max-[800px]:p-[40px]">
          <div className="relative z-[1] flex flex-col items-start gap-6">
            <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
              05 / Why {config.name}?
            </div>
            <h2 className="text-[clamp(36px,5vw,58px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
              Healthier people.
              <br />
              <span className="text-skeuo-red">Fewer lost days.</span>
            </h2>
            <p className="max-w-[420px] text-[15px] leading-[1.7] text-skeuo-muted">
              Catch problems early, cut unnecessary hospital trips and keep a clean health record for everyone in your organization. It's cloud-based, so there is nothing to install and no IT team required.
            </p>
            <a className="btn-base skeuo-btn-red" href="#contact">
              Set up for your organization
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="skeuo-pressed relative z-[1] flex flex-col justify-center gap-8 rounded-[24px] p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-skeuo-red" />
              <h3 className="text-xl font-bold text-skeuo-text">HIPAA Ready</h3>
            </div>
            <div className="flex flex-col gap-4">
              {['Instant vital syncing', 'Live queue dashboard', 'Cloud prescription tools', '99.9% SaaS uptime'].map((item) => (
                <div className="flex items-center gap-3 text-[13px] font-medium text-skeuo-muted" key={item}>
                  <div className="skeuo-raised grid size-6 place-items-center rounded-full text-skeuo-red">
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
        <div className="flex flex-col items-start gap-6">
          <div className="skeuo-pill inline-block rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-skeuo-muted">
            06 / Book a Demo
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1] tracking-[-.06em] text-skeuo-text">
            Ready to look after
            <br />
            <span className="text-skeuo-red">your people?</span>
          </h2>
          <p className="max-w-[340px] text-[15px] leading-[1.6] text-skeuo-muted">
            Get early access to {config.name} and see how a clinic can work for your office, school, factory or clinic.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <a className="btn-base skeuo-btn-light w-fit font-bold text-skeuo-text transition hover:text-skeuo-red" href={`mailto:digital.labs85@gmail.com`}>
              digital.labs85@gmail.com
              <ArrowUpRight size={15} />
            </a>
            <span className="pl-2 text-[11px] font-medium text-skeuo-muted">
              We usually reply within 24 hours.
            </span>
          </div>
        </div>

        <form className="skeuo-raised flex flex-col gap-6 rounded-[32px] p-[40px] max-[800px]:p-[25px]" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center gap-4 text-center">
              <div className="skeuo-raised grid size-16 place-items-center rounded-full text-skeuo-red">
                <Check size={30} strokeWidth={3} />
              </div>
              <h3 className="text-[28px] font-extrabold tracking-[-.05em] text-skeuo-text">
                Request Sent.
              </h3>
              <p className="text-sm text-skeuo-muted">
                Our team will configure your demo and reach out shortly.
              </p>
              <button type="button" className="btn-base skeuo-btn-light mt-4 cursor-pointer" onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
                <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                  Organization Name
                  <input required name="clinic" placeholder="Acme Corp / City School" className="skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red" />
                </label>
                <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                  Work Email
                  <input required type="email" name="email" placeholder="you@organization.com" className="skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red" />
                </label>
              </div>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                Number of People
                <select name="volume" defaultValue="" className="skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all focus:ring-2 focus:ring-skeuo-red">
                  <option value="" disabled>Select people in your organization</option>
                  <option>1 - 50 People</option>
                  <option>50 - 250 People</option>
                  <option>250 - 1,000 People</option>
                  <option>1,000+ People</option>
                </select>
              </label>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                <span>Phone Number <span className="font-normal text-skeuo-muted">(optional)</span></span>
                <input type="tel" name="phone" placeholder="+92 300 1234567" className="skeuo-pressed rounded-[14px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red" />
              </label>

              <label className="flex flex-col gap-2.5 text-[12px] font-bold text-skeuo-text">
                Additional Details
                <textarea name="message" placeholder="Tell us about your organization and how you handle health checkups today..." rows={4} className="skeuo-pressed resize-y rounded-[16px] px-4 py-3.5 text-[13px] font-medium text-skeuo-text outline-none transition-all placeholder:text-skeuo-muted focus:ring-2 focus:ring-skeuo-red" />
              </label>

              {error && (
                <p className="text-[12px] font-medium text-skeuo-red">{error}</p>
              )}

              <button
                className="btn-base skeuo-btn-red w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
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
          Health, built into every organization.
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