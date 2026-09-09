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
} from 'lucide-react'
import config from '@/app.json'

const solutions = [
  {
    title: 'Find trusted care',
    text: 'Discover verified doctors and health services that fit your needs.',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85',
    color: 'bg-red-50',
  },
  {
    title: 'Manage your health',
    text: 'Keep appointments, records, and care plans in one calm place.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
    color: 'bg-red-50',
  },
  {
    title: 'Feel supported',
    text: 'Get simple guidance and a team that is here when you need it.',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85',
    color: 'bg-neutral-50',
  },
]

const buttonBase =
  'inline-flex items-center justify-center gap-2.5 rounded-full border-0 px-[21px] py-3.5 text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_9px_20px_rgba(220,38,38,0.18)]'

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
      className="overflow-hidden bg-white text-neutral-900"
    >
      {/* ─────────────────────────────────────
          Header
      ───────────────────────────────────── */}

      <header className="mx-auto flex h-[82px] max-w-[1240px] items-center justify-between px-8 max-[800px]:h-[70px] max-[800px]:px-5">
        <a
          className="inline-flex items-center gap-[9px] text-[23px] font-extrabold tracking-[-.07em]"
          href="#top"
          aria-label={config.name}
        >
          <span className="grid size-[30px] -rotate-12 place-items-center rounded-[50%_50%_50%_8px] bg-red-600 text-white [&_svg]:rotate-12">
            <Stethoscope size={18} />
          </span>

          <span>{config.name}</span>
        </a>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-[18px] right-[18px] top-[104px] z-10 flex-col items-start gap-5 rounded-2xl border border-neutral-100 bg-white p-[22px] text-[13px] text-neutral-500 shadow-[0_15px_35px_rgba(0,0,0,0.08)] min-[801px]:static min-[801px]:flex min-[801px]:flex-row min-[801px]:items-center min-[801px]:gap-[34px] min-[801px]:rounded-none min-[801px]:border-0 min-[801px]:bg-transparent min-[801px]:p-0 min-[801px]:shadow-none`}
          aria-label="Primary navigation"
        >
          {['About us', 'Solutions', 'Our impact', 'Contact'].map(
            (item) => (
              <a
                key={item}
                className="transition-colors hover:text-red-600"
                href={`#${
                  item === 'About us'
                    ? 'about'
                    : item === 'Our impact'
                      ? 'impact'
                      : item.toLowerCase()
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <a
          className={`${buttonBase} bg-neutral-900 text-white hover:bg-red-600 max-[800px]:hidden`}
          href="#contact"
        >
          Get in touch
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="hidden border-0 bg-transparent text-neutral-900 max-[800px]:block"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* ─────────────────────────────────────
          Hero
      ───────────────────────────────────── */}

      <section
        className="mx-auto grid min-h-[620px] max-w-[1240px] grid-cols-[.9fr_1.1fr] items-center gap-8 px-8 pb-[100px] pt-[74px] max-[800px]:grid-cols-1 max-[800px]:px-5 max-[800px]:pb-[74px] max-[800px]:pt-14"
      >
        {/* Hero Content */}
        <div className="relative z-[2]">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-red-600">
            <span className="size-2 rounded-full bg-red-600" />

            Your health, reimagined
          </div>

          <h1 className="mt-[22px] max-w-[610px] text-[clamp(55px,7vw,94px)] font-extrabold leading-[.9] tracking-[-.085em] text-neutral-950">
            Care that{' '}
            <em className="not-italic text-red-600">
              moves
            </em>{' '}
            with you.
          </h1>

          <p className="mb-8 mt-7 max-w-[415px] text-base leading-[1.65] text-neutral-500">
            A simpler way to connect with the right care, build
            healthier habits, and feel supported at every step of
            your journey.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center gap-[23px]">
            <a
              className={`${buttonBase} bg-red-600 text-white hover:bg-red-700`}
              href="#contact"
            >
              Start your journey
              <ArrowUpRight size={18} />
            </a>

            <a
              className="flex items-center gap-[9px] text-[13px] font-bold text-neutral-900"
              href="#about"
            >
              <span className="grid size-[27px] place-items-center rounded-full border border-neutral-300 text-red-600">
                <Play
                  size={12}
                  fill="currentColor"
                />
              </span>

              See how it works
            </a>
          </div>

          {/* Trust */}
          <div className="mt-[46px] flex items-center gap-[13px] text-[11px] text-neutral-400">
            <div className="flex">
              <span className="mr-[-7px] grid size-[27px] place-items-center rounded-full border-2 border-white bg-red-400 text-[8px] font-bold text-white">
                AK
              </span>

              <span className="mr-[-7px] grid size-[27px] place-items-center rounded-full border-2 border-white bg-red-500 text-[8px] font-bold text-white">
                MR
              </span>

              <span className="mr-[-7px] grid size-[27px] place-items-center rounded-full border-2 border-white bg-red-700 text-[8px] font-bold text-white">
                JL
              </span>
            </div>

            <p>
              <strong className="text-[13px] text-neutral-900">
                12k+
              </strong>{' '}
              people choosing better care
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="relative flex h-[510px] items-center justify-center max-[800px]:mt-2 max-[800px]:h-[400px]"
          aria-label="A doctor and patient talking"
        >
          {/* Decorative Shape */}
          <div className="absolute h-[440px] w-[490px] rotate-[-9deg] rounded-[48%_52%_43%_57%] bg-red-100 max-[800px]:h-[330px] max-[800px]:w-[350px]" />

          <div className="absolute left-[12%] top-[35px] z-[3] rotate-[-12deg] text-base font-extrabold leading-[.85] text-red-600">
            care
            <br />
            for all
          </div>

          {/* Main Image */}
          <div className="relative h-[460px] w-[min(420px,78%)] rotate-[5deg] skew-y-[-3deg] overflow-hidden rounded-[45%_22%_37%_17%] shadow-[18px_25px_0_rgba(220,38,38,0.12)] max-[800px]:h-[355px] max-[800px]:w-[min(315px,80%)]">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1100&q=85"
              alt="Doctor smiling in a bright clinic"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 48vw"
              className="scale-[1.08] object-cover"
            />
          </div>

          {/* Verified Care Card */}
          <div className="absolute right-[1%] top-[74px] z-[4] flex rotate-[4deg] items-center gap-2.5 rounded-[14px] border border-neutral-100 bg-white px-[17px] py-[13px] text-[11px] text-neutral-900 shadow-[0_16px_30px_rgba(0,0,0,0.09)] max-[800px]:right-0 max-[800px]:top-6">
            <ShieldCheck
              size={18}
              className="text-red-600"
            />

            <span className="flex flex-col gap-[3px]">
              <strong>Verified care</strong>

              <small className="text-[9px] text-neutral-400">
                People you can trust
              </small>
            </span>
          </div>

          {/* Always Here Card */}
          <div className="absolute bottom-14 left-0 z-[4] flex rotate-[-5deg] items-center gap-2.5 rounded-[14px] border border-neutral-100 bg-white px-[17px] py-[13px] text-[11px] text-neutral-900 shadow-[0_16px_30px_rgba(0,0,0,0.09)] max-[800px]:bottom-6">
            <span className="size-3 rounded-full bg-red-500 shadow-[0_0_0_5px_rgba(239,68,68,0.15)]" />

            <span className="flex flex-col gap-[3px]">
              <strong>Always here</strong>

              <small className="text-[9px] text-neutral-400">
                24/7 support for you
              </small>
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          Ticker
      ───────────────────────────────────── */}

      <section
        className="flex min-h-12 items-center justify-around gap-5 overflow-hidden whitespace-nowrap bg-neutral-950 text-[10px] uppercase tracking-[.2em] text-white max-[440px]:justify-start max-[440px]:pl-5"
        aria-label="Our focus"
      >
        <span>healthcare for everyone</span>
        <span className="text-red-500">•</span>
        <span>human at heart</span>
        <span className="text-red-500">•</span>
        <span>designed for real life</span>
        <span className="text-red-500">•</span>
        <span>healthcare for everyone</span>
      </section>

      {/* ─────────────────────────────────────
          About
      ───────────────────────────────────── */}

      <section
        className="mx-auto max-w-[1240px] px-8 py-[130px] max-[800px]:px-5 max-[800px]:py-[85px]"
        id="about"
      >
        <div className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">
          01 / Who we are
        </div>

        <div className="mt-12 grid grid-cols-[1.1fr_.9fr] gap-[100px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px]">
          <h2 className="text-[clamp(40px,5vw,66px)] font-bold leading-[.98] tracking-[-.07em] text-neutral-950">
            Healthcare should feel{' '}
            <span className="text-red-600">
              human.
            </span>
          </h2>

          <div>
            <p className="mb-6 max-w-[425px] text-[15px] leading-[1.7] text-neutral-500">
              We believe getting care should be clear, personal,
              and built around your life—not the other way around.
              {config.name} brings the pieces together so you can spend
              less time navigating healthcare and more time feeling
              your best.
            </p>

            <a
              className="inline-flex items-center gap-[9px] text-[13px] font-bold text-red-600 transition hover:text-red-700"
              href="#solutions"
            >
              Meet {config.name}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          Solutions
      ───────────────────────────────────── */}

      <section
        className="mx-auto max-w-[1240px] px-8 pb-[130px] pt-6 max-[800px]:px-5 max-[800px]:pb-[85px]"
        id="solutions"
      >
        <div className="flex items-end justify-between gap-[30px] max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[18px]">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">
              02 / What we do
            </div>

            <h2 className="mt-5 text-[clamp(40px,5vw,66px)] font-bold leading-[.98] tracking-[-.07em] text-neutral-950">
              Everything you need
              <br />
              <span className="text-red-600">
                to feel well.
              </span>
            </h2>
          </div>

          <p className="max-w-[200px] text-[13px] leading-[1.5] text-neutral-500">
            Small, thoughtful tools for the moments that matter
            most.
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-3 gap-[18px] max-[800px]:mt-10 max-[800px]:grid-cols-1">
          {solutions.map((solution, index) => (
            <article
              className={`${solution.color} relative min-h-[400px] overflow-hidden rounded-[25px] border border-red-100 p-[18px] transition-all duration-200 hover:-translate-y-[7px] hover:rotate-[-1deg] hover:shadow-[0_20px_45px_rgba(220,38,38,0.08)]`}
              key={solution.title}
            >
              <div className="relative h-[184px] rotate-[-2deg] overflow-hidden rounded-[18px_45%_18px_32px]">
                <Image
                  src={solution.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 text-[10px] font-bold text-red-400">
                0{index + 1}
              </div>

              <h3 className="mb-2 mt-2 text-[23px] font-bold tracking-[-.06em] text-neutral-950">
                {solution.title}
              </h3>

              <p className="max-w-[220px] text-xs leading-[1.5] text-neutral-500">
                {solution.text}
              </p>

              <a
                className="absolute bottom-[19px] right-[22px] grid size-9 place-items-center rounded-full bg-white text-red-600 shadow-sm transition hover:bg-red-600 hover:text-white"
                href="#contact"
                aria-label={`Learn about ${solution.title}`}
              >
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          Impact
      ───────────────────────────────────── */}

      <section
        className="relative mx-auto mb-[130px] grid min-h-[470px] max-w-[1240px] grid-cols-[1fr_.4fr] gap-20 overflow-hidden rounded-[38px_14px_38px_14px] bg-red-600 px-[75px] py-[70px] text-white max-[800px]:mx-5 max-[800px]:mb-[85px] max-[800px]:grid-cols-1 max-[800px]:gap-[55px] max-[800px]:px-[30px] max-[800px]:py-[50px] max-[440px]:rounded-[25px_10px_25px_10px]"
        id="impact"
      >
        <div className="relative z-[1]">
          <div className="text-[10px] font-bold uppercase tracking-[.14em] text-red-100">
            03 / Our impact
          </div>

          <h2 className="my-[22px] text-[clamp(42px,5vw,67px)] font-bold leading-[.96] tracking-[-.08em]">
            Better care
            <br />
            <span className="text-red-100">
              changes everything.
            </span>
          </h2>

          <p className="mb-7 max-w-[385px] text-sm leading-[1.7] text-red-50">
            When care is easier to access, healthier choices become
            easier to make. We&apos;re building a future where every
            person has the confidence and tools to take care of
            themselves.
          </p>

          <a
            className={`${buttonBase} bg-white text-neutral-900 hover:bg-red-50`}
            href="#contact"
          >
            Join the movement
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="relative z-[1] flex flex-col gap-3.5 self-end pb-[3px]">
          <strong className="text-[78px] leading-[.8] tracking-[-.1em] text-red-100">
            01
          </strong>

          <span className="mb-[17px] text-xl leading-none">
            People first,
            <br />
            always.
          </span>

          {[
            'Personal care',
            'Clear guidance',
            'Lasting support',
          ].map((item) => (
            <div
              className="flex items-center gap-2 text-xs text-red-50"
              key={item}
            >
              <Check
                size={15}
                className="text-white"
              />

              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          Contact
      ───────────────────────────────────── */}

      <section
        className="mx-auto grid max-w-[1240px] grid-cols-[.85fr_1.15fr] gap-[110px] px-8 pb-[130px] pt-2.5 max-[800px]:grid-cols-1 max-[800px]:gap-[35px] max-[800px]:px-5 max-[800px]:pb-[85px]"
        id="contact"
      >
        {/* Contact Intro */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">
            04 / Say hello
          </div>

          <h2 className="my-[22px] text-[clamp(40px,5vw,66px)] font-bold leading-[.98] tracking-[-.07em] text-neutral-950">
            Let&apos;s make
            <br />
            <span className="text-red-600">
              health personal.
            </span>
          </h2>

          <p className="max-w-[300px] text-sm leading-[1.6] text-neutral-500">
            Have a question, an idea, or simply want to know more?
            We&apos;d love to hear from you.
          </p>

          <div className="mt-10 flex flex-col gap-2.5">
            <a
              className="inline-flex items-center gap-[9px] text-[13px] font-bold text-red-600 transition hover:text-red-700"
              href={`mailto:hello@${config.name}.care`}
            >
              hello@{config.name}.care
              <ArrowUpRight size={15} />
            </a>

            <span className="text-[11px] text-neutral-400">
              We usually reply within one business day.
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-5 rounded-[26px_12px_26px_12px] border border-neutral-100 bg-white p-[33px] shadow-[0_18px_50px_rgba(0,0,0,0.07)] max-[800px]:p-[23px]"
          onSubmit={handleSubmit}
        >
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-start justify-center gap-3.5">
              <span className="grid size-11 place-items-center rounded-full bg-red-50 text-red-600">
                <Check size={24} />
              </span>

              <h3 className="text-[30px] font-bold tracking-[-.05em] text-neutral-950">
                Message received.
              </h3>

              <p className="text-sm text-neutral-500">
                Thanks for reaching out. We&apos;ll be in touch
                soon.
              </p>

              <button
                type="button"
                className="inline-flex items-center gap-[9px] border-0 bg-transparent p-0 text-[13px] font-bold text-red-600 transition hover:text-red-700"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">
                <label className="flex flex-col gap-2 text-[11px] font-bold text-neutral-900">
                  Your name

                  <input
                    required
                    name="name"
                    placeholder="Jane Smith"
                    className="rounded-[9px] border border-neutral-200 bg-neutral-50 px-3.5 py-[13px] text-[13px] font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 placeholder:text-neutral-400"
                  />
                </label>

                <label className="flex flex-col gap-2 text-[11px] font-bold text-neutral-900">
                  Email address

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    className="rounded-[9px] border border-neutral-200 bg-neutral-50 px-3.5 py-[13px] text-[13px] font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 placeholder:text-neutral-400"
                  />
                </label>
              </div>

              {/* Topic */}
              <label className="flex flex-col gap-2 text-[11px] font-bold text-neutral-900">
                What can we help with?

                <select
                  name="topic"
                  defaultValue=""
                  className="rounded-[9px] border border-neutral-200 bg-neutral-50 px-3.5 py-[13px] text-[13px] font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                >
                  <option
                    value=""
                    disabled
                  >
                    Select an option
                  </option>

                  <option>General question</option>
                  <option>Partnership</option>
                  <option>Care support</option>
                </select>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-2 text-[11px] font-bold text-neutral-900">
                Your message

                <textarea
                  required
                  name="message"
                  placeholder="Tell us a little more..."
                  rows={4}
                  className="resize-y rounded-[9px] border border-neutral-200 bg-neutral-50 px-3.5 py-[13px] text-[13px] font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 placeholder:text-neutral-400"
                />
              </label>

              {/* Submit */}
              <button
                className={`${buttonBase} self-start bg-red-600 text-white hover:bg-red-700`}
                type="submit"
              >
                Send message
                <ArrowUpRight size={18} />
              </button>
            </>
          )}
        </form>
      </section>

      {/* ─────────────────────────────────────
          Footer
      ───────────────────────────────────── */}

      <footer className="mx-auto grid max-w-[1240px] grid-cols-3 items-center gap-5 border-t border-neutral-200 px-8 pb-[35px] pt-[30px] text-[11px] text-neutral-400 max-[800px]:grid-cols-2 max-[800px]:px-5">
        <div className="inline-flex items-center gap-[9px] text-[19px] font-extrabold tracking-[-.07em] text-neutral-950">
          <span className="grid size-[25px] rotate-[-12deg] place-items-center rounded-[50%_50%_50%_8px] bg-red-600 text-white [&_svg]:rotate-12">
            <Stethoscope size={18} />
          </span>

          {config.name}
        </div>

        <p className="max-[800px]:hidden">
          Care, made human.
        </p>

        <div className="flex justify-center gap-[22px] text-neutral-500 max-[800px]:flex-wrap max-[800px]:justify-end max-[800px]:gap-3">
          <a
            className="transition hover:text-red-600"
            href="#top"
          >
            Back to top ↑
          </a>

          <a
            className="transition hover:text-red-600"
            href="#contact"
          >
            Instagram
          </a>

          <a
            className="transition hover:text-red-600"
            href="#contact"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  )
}