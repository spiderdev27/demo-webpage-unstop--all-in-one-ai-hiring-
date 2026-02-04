"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";

type StatTileProps = {
  value: string;
  label: string;
};

function StatTile({ value, label }: StatTileProps) {
  return (
    <div className="text-center">
      <p className="text-[40px] font-extrabold leading-none text-[#1D4ED8] md:text-[48px]">
        {value}
      </p>
      <p className="mt-3 text-[14px] font-medium leading-snug text-[#5F6368] md:text-[15px]">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  // Simple submit handler so the demo form feels interactive
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Form submitted (demo). Hook this up to your API.");
  }

  const jobLocations = [
    "Jobs in Kolkata",
    "Jobs in Coimbatore",
    "Jobs in Lucknow",
    "Jobs in Indore",
    "Jobs in Ahmedabad",
    "Jobs in Nagpur",
    "Jobs in Chandigarh",
    "Jobs in Jaipur",
    "Jobs in Cochin",
    "Jobs in Surat",
    "Jobs in Bangalore",
    "Jobs in Delhi",
    "Jobs in Hyderabad",
    "Jobs in Mumbai",
    "Jobs in Pune",
    "Jobs in Chennai",
    "Jobs in Noida",
    "Jobs in Gurgaon",
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);
  const visibleJobs = showAllJobs ? jobLocations : jobLocations.slice(0, 9);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="w-full bg-white/95">
        <nav className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-8">
          {/* Logo */}
          <div className="flex items-center">
        <Image
              src="/unstop-logo.svg"
              alt="Unstop"
              width={74}
              height={32}
          priority
        />
          </div>

          {/* Center nav */}
          <div className="hidden flex-1 items-center justify-center gap-12 pl-16 text-[16px] font-medium text-[#383838] md:flex">
            <button className="hover:text-[#1C4980]">Products</button>
            <button className="hover:text-[#1C4980]">Resources</button>
            <button className="hover:text-[#1C4980]">Testimonials</button>
            <button className="hover:text-[#1C4980]">Contact Us</button>
          </div>

          {/* Right actions */}
          <div className="hidden items-center gap-4 md:flex">
            <span className="h-6 w-px bg-slate-200" />
            <button
              aria-label="Notifications"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
            >
              🔔
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B21FF] text-xs font-semibold text-white">
              SA
            </button>
            <button className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
              + Host
            </button>
            <button className="rounded-full bg-[#FFCF53] px-5 py-1.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-[#ffd872]">
              Explore More
            </button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <div className="h-8 w-8 rounded-full bg-slate-100" />
          </div>
        </nav>
      </header>

      <main className="flex flex-col gap-24 pb-10">
        {/* Hero */}
        <section className="relative bg-white bg-[radial-gradient(circle_at_left,#FFF6E0_0,transparent_65%),radial-gradient(circle_at_right,#E3F1FF_0,transparent_65%)]">
          {/* Soft glow ellipses behind form */}
          <div className="pointer-events-none absolute right-[260px] top-1/2 hidden h-[296px] w-[296px] -translate-y-[39px] rounded-full bg-[#FFC700] opacity-40 blur-[120px] md:block" />
          <div className="pointer-events-none absolute right-[150px] top-1/2 hidden h-[296px] w-[296px] -translate-y-[184px] rounded-full bg-[#2688EA] opacity-40 blur-[120px] md:block" />

          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:px-6 md:py-14">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2563EB]">
                #1 Hiring Talent Platform
              </p>
              <h1 className="max-w-xl text-[34px] font-extrabold leading-[42px] tracking-[-0.03em] text-[#202124] md:text-[48px] md:leading-[56px] xl:text-[56px] xl:leading-[64px]">
                The All-in-One AI Hiring &amp; Engagement Platform for HR &amp;
                Recruitment
              </h1>
              <p className="max-w-xl text-[15px] font-medium leading-relaxed text-[#5f6368] md:text-[16px]">
                Interview, assess, engage &amp; hire top talent at scale – powered
                by AI.
              </p>
            </div>

            {/* Hero form card */}
            <div className="relative flex justify-center md:justify-end">
              {/* Blue/yellow accent badge */}
              <div className="pointer-events-none absolute -right-11 top-20 hidden h-24 w-24 md:block">
                <div className="relative h-22 w-22">
                  <Image
                    src="/form-accent.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative w-full max-w-[440px] rounded-2xl border-[4px] border-black/5 bg-white px-6 py-7 shadow-[0_32px_80px_rgba(15,23,42,0.18)] md:px-6 md:py-7">
                <form onSubmit={handleSubmit} className="space-y-4 text-[14px]">
                  <div className="space-y-1.5">
                    <label className="block text-[14px] font-medium leading-[18px] text-[#383838]">
                      Name<span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      className="h-12 w-full rounded-lg border border-[#DADCE0] px-4 text-[14px] font-medium text-[#383838] outline-none placeholder:text-[#AFAFAF] focus:border-[#1C4980] focus:ring-1 focus:ring-[#1C4980]/40"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] font-medium leading-[18px] text-[#383838]">
                      Official Email ID
                    </label>
                    <input
                      type="email"
                      className="h-12 w-full rounded-lg border border-[#DADCE0] px-4 text-[14px] font-medium text-[#383838] outline-none placeholder:text-[#AFAFAF] focus:border-[#1C4980] focus:ring-1 focus:ring-[#1C4980]/40"
                      placeholder="rishabhjain@unstop.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] font-medium leading-[18px] text-[#383838]">
                      Mobile<span className="text-red-500"> *</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="flex h-12 items-center gap-1 rounded-l-lg border border-[#DADCE0] px-3 text-[14px] font-medium text-[#383838]">
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        className="h-12 flex-1 rounded-r-lg border border-[#DADCE0] px-4 text-[14px] font-medium text-[#383838] outline-none placeholder:text-[#AFAFAF] focus:border-[#1C4980] focus:ring-1 focus:ring-[#1C4980]/40"
                        placeholder="Enter Phone No"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] font-medium leading-[18px] text-[#383838]">
                      Select Offering
                    </label>
                    <select className="h-12 w-full rounded-lg border border-[#DADCE0] bg-white px-4 text-[14px] font-medium text-[#383838] outline-none focus:border-[#1C4980] focus:ring-1 focus:ring-[#1C4980]/40">
                      <option>--Select Offering--</option>
                      <option>AI Interview Solution</option>
                      <option>Hackathon Hosting Tool</option>
                      <option>AI Assessment Hub</option>
                      <option>All of the above</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] font-medium leading-[18px] text-[#383838]">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-[#DADCE0] px-4 py-3 text-[14px] font-medium text-[#383838] outline-none placeholder:text-[#AFAFAF] focus:border-[#1C4980] focus:ring-1 focus:ring-[#1C4980]/40"
                      placeholder="Enter your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-[#0073E6] px-6 text-[16px] font-medium text-white hover:bg-[#005fcc]"
                  >
                    Get a Free Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Logos strip from design SVG */}
        <section className="flex justify-center px-4 pt-4">
          <div className="relative w-full max-w-7xl">
            <Image
              src="/trusted-companies.svg"
              alt="Trusted by leading companies"
              width={1600}
              height={260}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Interview Smarter section */}
        <section className="space-y-8 pt-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[28px] font-extrabold leading-[36px] tracking-[-0.03em] text-[#202124] md:text-[36px] md:leading-[44px]">
              Interview Smarter.
              <br className="hidden md:block" />
              Hire Faster.
              <br className="hidden md:block" />
              Scale Without Limits.
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#5f6368] md:text-[16px]">
              Streamline your HR team&apos;s workload and accelerate company hiring with AI-powered
              interviews that assess candidate skills, communication quality, and role alignment –
              delivering faster, bias-free decisions without manual screening.
            </p>
          </div>
        </section>

        {/* Interview Smarter cards (SVG from design) */}
        <section className="flex justify-center px-4 pt-2">
          <div className="relative w-full max-w-6xl">
            <Image
              src="/interview-cards.svg"
              alt="AI Interview, Hackathon Hosting Tool, AI Assessment Hub"
              width={1440}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Built for Modern Hiring Teams */}
        <section className="grid w-full gap-0 py-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* Left text block */}
          <div className="flex h-full items-center py-10 pl-10 md:py-16 md:pl-32">
            <div className="max-w-md space-y-5">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/unstop-logo.svg"
                  alt="Unstop"
                  width={96}
                  height={28}
                />
              </div>
              <h2 className="text-[32px] font-extrabold leading-[40px] tracking-[-0.03em] text-[#202124] md:text-[40px] md:leading-[48px]">
                Built for Modern
                <br />
                Hiring Teams
              </h2>
              <p className="text-[14px] leading-[22px] text-[#5f6368] md:text-[15px]">
                Derived from the belief to <span className="font-semibold">#BeUnstoppable</span>,
                Unstop is a community engagement and hiring platform connecting{" "}
                <span className="font-semibold">28 million+</span> students and freshers with global
                opportunities.
              </p>
              <p className="text-[14px] leading-[22px] text-[#5f6368] md:text-[15px]">
                Founded by <span className="font-semibold">Ankit Aggarwal</span>, Unstop empowers
                talent to learn, upskill, showcase abilities, and get hired by dream employers.
              </p>
              <button className="mt-4 inline-flex items-center rounded-full bg-[#0073E6] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#005fcc]">
                Read more
              </button>
            </div>
          </div>

          {/* Right illustration block */}
          <div className="relative h-[420px] w-full md:h-[480px]">
            <Image
              src="/built-for-modern.png"
              alt="Built for Modern Hiring Teams illustration"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        {/* Shark Tank section */}
        <section className="space-y-6 pt-10">
          <div className="text-center">
            <p className="text-[24px] font-extrabold leading-tight text-[#202124] md:text-[32px]">
              As Seen on{" "}
              <span className="text-[#2563EB]">Shark Tank India</span>
            </p>
          </div>
          <div className="flex justify-center px-4">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-white">
              <Image
                src="/shark-tank.svg"
                alt="Unstop pitch on Shark Tank India"
                width={1200}
                height={540}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="mx-auto grid max-w-5xl grid-cols-4 gap-8 px-4 py-8 text-center">
          <StatTile value="60%" label="Fast Hiring Cycles" />
          <StatTile value="2X" label="Candidate Engagement" />
          <StatTile value="40%" label="Reduction in Hiring Cost" />
          <StatTile value="1M+" label="Evaluated Candidates" />
        </section>

        {/* Testimonials band (SVG from design) */}
        <section className="space-y-4 px-4 pt-10">
          <div className="space-y-1 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              Testimonials
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              What They Are Saying
            </h2>
            <p className="text-sm text-slate-600 md:text-base">
              Discover the stories and experiences of individuals and companies
              who have found success and excellence through unstop.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-6xl">
              <Image
                src="/testimonials.svg"
                alt="Video testimonials from Zain Inhonvi"
                width={1440}
                height={520}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Try Unstop for FREE (SVG from design) */}
        <section className="flex justify-center px-0 py-0">
          <div className="relative w-full max-w-7xl">
            <Image
              src="/try-unstop.svg"
              alt="Try Unstop for FREE"
              width={1700}
              height={550}
              className="h-auto w-full"
            />
            {/* Clickable 14-day free trial button overlay */}
            <button
              className="absolute bottom-[38px] left-1/2 h-[48px] w-[240px] -translate-x-1/2 rounded-full"
              onClick={() => {
                // TODO: replace with real navigation or link
                window.open("#", "_self");
              }}
              aria-label="Start 14-days Free Trial"
            />
          </div>
        </section>
      </main>

      {/* Footer – closer to Unstop design */}
      <footer className="mt-12 border-t border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto max-w-6xl px-6 pt-10 md:px-8">
          {/* Top logo + social */}
          <div className="flex flex-col gap-4 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Image
                src="/unstop-logo.svg"
                alt="Unstop"
                width={120}
                height={32}
              />
              <p className="text-xs text-slate-600">
                Built with <span className="text-red-500">♥</span> in{" "}
                <span className="font-semibold">India</span> for the{" "}
                <span className="font-semibold">world</span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <button className="text-xs font-medium">X</button>
              <button className="text-xs font-medium">Instagram</button>
              <button className="text-xs font-medium">Facebook</button>
              <button className="text-xs font-medium">LinkedIn</button>
              <button className="text-xs font-medium">YouTube</button>
            </div>
          </div>

          <div className="h-px w-full border-t border-dashed border-slate-200" />

          {/* Main links + right sidebar */}
          <div className="mt-6 flex flex-col gap-10 pb-10 md:flex-row md:items-start md:justify-between">
            {/* Link columns */}
            <div className="grid flex-1 gap-x-10 gap-y-8 text-xs text-slate-700 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Products
                </h3>
                <ul className="space-y-1">
                  <li>Brand &amp; Engage</li>
                  <li>Source</li>
                  <li>Screen</li>
                  <li>Assess</li>
                  <li>Hiring Automation</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Mentorship
                </h3>
                <ul className="space-y-1">
                  <li>Be a Mentor</li>
                  <li>Explore Mentor</li>
                  <li>Mentorship FAQs</li>
                  <li>Mentorship Blogs</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Our Properties
                </h3>
                <ul className="space-y-1">
                  <li>Unstop Talent Awards 2025</li>
                  <li>Unstop Talent Meet 2025</li>
                  <li>Unstop Talent Report 2025</li>
                  <li>Education Loan EMI Calculator</li>
                  <li>Unstop Igniters Club</li>
                  <li>Online Quizzing Festival</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Legal
                </h3>
                <ul className="space-y-1">
                  <li>Privacy policy</li>
                  <li>Terms &amp; Conditions</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Participates
                </h3>
                <ul className="space-y-1">
                  <li>Competitions &amp; Challenges</li>
                  <li>Quizzes</li>
                  <li>Hackathons</li>
                  <li>Workshops &amp; Webinars</li>
                  <li>Conferences</li>
                  <li>Cultural Events</li>
                  <li>College Festivals</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Practice
                </h3>
                <ul className="space-y-1">
                  <li>5 Days Interview Prep</li>
                  <li>Code &amp; Ace Hiring Assessments</li>
                  <li>100-Day of Coding Sprint</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  For Business
                </h3>
                <ul className="space-y-1">
                  <li>Host Opportunity/Job</li>
                  <li>Partner With Us</li>
                  <li>Clientele</li>
                  <li>Testimonials</li>
                  <li>Advertise with us</li>
                  <li>Case Studies</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Learn
                </h3>
                <ul className="space-y-1">
                  <li>Courses</li>
                  <li>Articles</li>
                  <li>Blog Series</li>
                  <li>Workshops</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Apply
                </h3>
                <ul className="space-y-1">
                  <li>Jobs</li>
                  <li>Internships</li>
                  <li>Scholarships</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Others
                </h3>
                <ul className="space-y-1">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Life at Unstop</li>
                  <li>FAQs</li>
                  <li>Unstop Rewards Program</li>
                  <li>Unstop on Shark Tank</li>
                  <li>Refer &amp; Earn</li>
                  <li>Unstop Campus Ambassador Program</li>
                  <li>Request a Feature</li>
                </ul>
              </div>
            </div>

            {/* Right sidebar: hiring + app */}
            <div className="w-full max-w-xs space-y-6 text-xs text-slate-700">
              <div className="relative h-10 w-32 overflow-hidden rounded bg-slate-200">
                <Image
                  src="/all-in-one-ai-hiring.png"
                  alt="We are hiring"
                  fill
                  className="object-contain object-[88%_16%]"
                />
              </div>
              <div className="space-y-1">
                <button className="block text-xs font-medium text-slate-800">
                  Contact Us ↗
                </button>
                <button className="block text-xs font-medium text-slate-800">
                  Share Your Story ↗
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-900">
                  Stay Updated
                </p>
                <p className="text-[11px] text-slate-600">
                  Get regular updates on opportunities/jobs to showcase your
                  talent and get hired.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-9 flex-1 rounded-full bg-white px-3 text-[11px] outline-none ring-1 ring-slate-200 focus:ring-[#1C4980]"
                  />
                  <button className="h-9 rounded-full bg-black px-4 text-[11px] font-semibold text-white">
                    Subscribe
                  </button>
                </form>
              </div>
              {/* App card */}
              <div className="space-y-3 rounded-2xl bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Unstop App
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Connecting Unstoppable Talent
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-slate-700">
                    <div className="font-semibold">4.5 ★</div>
                    <div>12L+ ⬇</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-100 text-[10px] text-slate-500">
                    QR
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <button className="flex items-center justify-center rounded-lg bg-black px-3 py-2 text-[10px] font-medium text-white">
                      Get it on Google Play
                    </button>
                    <button className="flex items-center justify-center rounded-lg bg-black px-3 py-2 text-[10px] font-medium text-white">
                      Available on the App Store
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs by Location block (only, like Unstop) */}
          <section className="mt-6 border-t border-slate-200 pt-6 text-[11px] text-slate-600">
            <div className="flex flex-col gap-6">
              {/* Jobs by Location */}
              <div className="min-w-[260px] space-y-3">
                <h2 className="text-xs font-semibold text-slate-900">
                  Jobs by Location
                </h2>
                <div className="grid grid-cols-1 gap-y-1 text-[11px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {visibleJobs.map((label) => (
                    <a key={label} href="#" className="hover:text-[#2563EB]">
                      {label}
                    </a>
                  ))}
                </div>
                <button
                  className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-800"
                  onClick={() => setShowAllJobs((v) => !v)}
                >
                  {showAllJobs ? "View Less" : "View More"}
                  <span className="text-base leading-none">
                    {showAllJobs ? "▴" : "▾"}
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Bottom copyright + payments */}
          <div className="mt-6 border-t border-slate-200 pt-4 text-[11px] text-slate-500">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <p>
                  Copyright © {new Date().getFullYear()}{" "}
                  <a href="/" className="text-[#2563EB] hover:underline">
                    FLIVE Consulting Pvt Ltd
                  </a>{" "}
                  - All rights reserved.
                </p>
                <p>Unstop Version: 2.4.2026.15.17</p>
                <p>Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &amp; Safari.</p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
                <div className="flex items-center">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/692925bc2b20c_unstop_payment_info_footer_imag.png?d=1360x104"
                    alt="100% safe & secure payment"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/gdpr-logo.png?d=300x300"
                    alt="GDPR"
                    className="h-10 w-10 rounded-full bg-white object-contain"
                  />
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
                    alt="ISO 27001"
                    className="h-10 w-10 rounded-full bg-white object-contain"
                  />
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
                    alt="ISO 9001"
                    className="h-10 w-10 rounded-full bg-white object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
