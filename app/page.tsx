import React from "react";
import { motion } from "framer-motion";

import { Bot, Zap, CalendarCheck, Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function AIAutomationWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-2xl bg-blue-500/20 p-2">
              <Bot className="h-6 w-6 text-blue-400" />
            </div>
            <span className="text-xl font-bold tracking-tight">LeadFlow AI</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">How It Works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <a href="#contact">
            <button className="rounded-2xl bg-blue-500 px-5 py-2 font-semibold text-white hover:bg-blue-600">Get Started</button>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              AI automation for small businesses
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Turn more leads into booked clients automatically.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We build simple AI systems that instantly respond to new leads, follow up automatically, and send prospects straight to your booking calendar.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact">
                <button className="flex w-full items-center justify-center rounded-2xl bg-blue-500 px-7 py-4 text-base font-semibold text-white hover:bg-blue-600 sm:w-auto">
                  Book a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </a>
              <a href="#process">
                <button className="w-full rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 sm:w-auto">
                  See How It Works
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="$1">
              <div className="$2">
                <div className="rounded-2xl bg-slate-900 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-semibold text-white">Automation Dashboard</p>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">Live</span>
                  </div>
                  <div className="space-y-4">
                    <AutomationRow icon={<Mail />} title="New lead received" text="Website inquiry from Sarah M." />
                    <AutomationRow icon={<Bot />} title="AI response generated" text="Personalized reply written in 8 seconds" />
                    <AutomationRow icon={<CalendarCheck />} title="Booking link sent" text="Prospect directed to calendar" />
                    <AutomationRow icon={<Zap />} title="Follow up scheduled" text="Automatic reminder in 24 hours" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What we automate</h2>
            <p className="mt-4 text-slate-300">Simple systems that save time, respond faster, and help businesses stop losing leads.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard icon={<Mail />} title="Instant Lead Replies" text="When someone contacts your business, they get a fast, professional response instead of waiting hours." />
            <FeatureCard icon={<CalendarCheck />} title="Appointment Booking" text="We connect leads directly to your calendar so they can book without back and forth messages." />
            <FeatureCard icon={<Zap />} title="Automatic Follow Ups" text="If a prospect does not respond, the system follows up for you so fewer opportunities disappear." />
          </div>
        </div>
      </section>

      <section id="process" className="bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">How it works</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We build a custom automation that fits your current business tools. No complicated software. No huge setup. Just a cleaner way to handle leads.
              </p>
            </div>
            <div className="space-y-4">
              <Step number="1" title="We review your lead process" text="We look at how new customers currently contact you." />
              <Step number="2" title="We build your automation" text="We connect your email, forms, calendar, and AI response system." />
              <Step number="3" title="You start booking faster" text="Your leads get instant replies, follow ups, and booking links automatically." />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Simple pricing</h2>
          <p className="mt-4 text-slate-300">Start small, prove results, then upgrade when you need more automation.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="$1">
              <div className="$2">
                <h3 className="text-2xl font-bold">Starter Setup</h3>
                <p className="mt-3 text-slate-300">For businesses that want a simple lead response system.</p>
                <p className="mt-8 text-5xl font-bold">$299</p>
                <ul className="mt-8 space-y-4 text-slate-200">
                  <ListItem text="AI email response setup" />
                  <ListItem text="Calendar booking connection" />
                  <ListItem text="Basic follow up automation" />
                  <ListItem text="One week support" />
                </ul>
              </div>
            </div>
            <div className="$1">
              <div className="$2">
                <h3 className="text-2xl font-bold">Growth System</h3>
                <p className="mt-3 text-slate-300">For businesses that want automation plus monthly optimization.</p>
                <p className="mt-8 text-5xl font-bold">$499</p>
                <p className="mt-2 text-slate-300">+ $99/month</p>
                <ul className="mt-8 space-y-4 text-slate-200">
                  <ListItem text="Everything in Starter" />
                  <ListItem text="Advanced lead qualification" />
                  <ListItem text="Monthly automation updates" />
                  <ListItem text="Priority support" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl md:p-14">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Ready to stop losing leads?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Book a free demo and we will show you how an AI automation system could work for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:aryamobin37@gmail.com?subject=AI Automation Demo Request">
              <button className="rounded-2xl bg-blue-500 px-8 py-4 text-base font-semibold text-white hover:bg-blue-600">
                Email Us Now
              </button>
            </a>
            <a href="https://calendly.com" target="_blank" rel="noreferrer">
              <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10">
                Book a Demo
              </button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Replace this with your real email and Calendly link before sending it to clients.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 LeadFlow AI. Built to help small businesses respond faster.
      </footer>
    </div>
  );
}

function AutomationRow({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="rounded-xl bg-blue-500/20 p-2 text-blue-300">{React.cloneElement(icon, { className: "h-5 w-5" })}</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-slate-400">{text}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/10 text-white transition hover:bg-white/[0.14]">
      <CardContent className="p-7">
        <div className="mb-5 inline-flex rounded-2xl bg-blue-500/20 p-3 text-blue-300">{React.cloneElement(icon, { className: "h-7 w-7" })}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{text}</p>
      </CardContent>
    </Card>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-5 rounded-3xl border border-white/10 bg-white/10 p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">{number}</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 text-emerald-400" />
      <span>{text}</span>
    </li>
  );
}
