"use client"

import { Phone, Sparkles } from "lucide-react"



export function AICallCard({
  contactName = "Sarah",
  time = "9:47 PM",
  timeToCall = "29s",
  callDuration = "2:14",
  qualified = "Yes",
  booked = "Wed 5pm",
  aiSummary = "Serious buyer. 4 to 6 week timeline. Budget of $550,000. Booked viewing with Daniel tomorrow 5pm.",
  outcome = "Viewing booked",
  messages = [
    {
      sender: "ai",
      text: "Hi Sarah, this is Emma from Brookside Realty, calling about the 3-bed you enquired about. Got 30 seconds?",
    },
    { sender: "lead", text: "Uh, yeah, go ahead." },
    {
      sender: "ai",
      text: "Great. What timeline are you looking at, this month or the next few months?",
    },
    { sender: "lead", text: "Next 4 to 6 weeks, ideally." },
    {
      sender: "ai",
      text: "Perfect. I'll book you with Daniel tomorrow at 5pm. Confirmed?",
    },
    { sender: "lead", text: "Yes, confirmed." },
  ],
  isLive = true,
}) {
  return (
    <div id="about" className="how-it-works-container justify-center gap-2 mb-8 mt-20 px-20">
      <div>
      <h1 className="text-4xl font-bold text-white text-left">The Fastest Path<br/> From Inquiry to <span className="bg-gradient-to-r from-blue-500  to-cyan-500 bg-clip-text text-transparent font-semibold">Appointment.</span></h1>
        {/* Under line */}
        <div className="flex items-center">
              <div className="w-24 h-[2px] mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div> 
        <p className="text-left text-md text-gray-200 mt-5">AI-powered calling, qualification, and scheduling <br/>built specifically for high-velocity real estate teams.</p>
        <div className="text-left text-xs font-semibold flex flex-col gap-8 mt-20 text-gray-100 text-gray-300">
        <p><span className="text-cyan-500">✓</span> Captures budget, timeline, and motivation</p>
        <p><span className="text-cyan-500">✓</span> Summarizes every conversation automatically</p>
        <p><span className="text-cyan-500">✓</span> Hands agents qualified opportunities, not raw leads</p>
        <p><span className="text-cyan-500">✓</span> Gives your team context before the first meeting</p>
      </div>
      </div>
      
      
    <div   className=" rounded-2xl bg-slate-900 border border-slate-800 shadow-xl shadow-blue-500/5"
  style={{
    transform:
      "perspective(2000px) rotateY(-15deg) rotateX(8deg) scale(0.95)",
  }}>
      {/* Floating Time to Call Badge */}
      <div className="absolute -left-4 top-8 z-10 flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 shadow-lg shadow-cyan-500/10 border border-slate-700">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
          <Phone className="h-5 w-5 text-cyan-400" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Time to Call
          </p>
          <p className="text-xl font-semibold text-cyan-400">{timeToCall}</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl shadow-blue-500/5 border border-slate-800">
        {/* Gradient Top Border */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

        <div className="flex">
          {/* Left Section - Chat */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between pl-28">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">
                  AI · Outbound
                </h2>
                <p className="text-sm text-slate-400">
                  {contactName} · {time}
                </p>
              </div>
              {isLive && (
                <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 border border-slate-700">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-sm font-medium text-cyan-400">Live</span>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === "lead" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-sm rounded-2xl px-4 py-3 ${
                      message.sender === "lead"
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "bg-slate-800 border border-slate-700"
                    }`}
                  >
                    <span
                      className={`mr-2 text-xs font-semibold uppercase tracking-wide ${
                        message.sender === "lead"
                          ? "text-cyan-200"
                          : "text-slate-500"
                      }`}
                    >
                      {message.sender === "lead" ? "Lead" : "AI"}
                    </span>
                    <span
                      className={
                        message.sender === "lead"
                          ? "text-white"
                          : "text-slate-200"
                      }
                    >
                      {message.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="w-64 border-l border-slate-800 p-6">
            {/* Stats Grid */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 border border-slate-700/50">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Time to Call
                </p>
                <p className="mt-1 text-2xl font-semibold text-cyan-400">
                  {timeToCall}
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 border border-slate-700/50">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Call Duration
                </p>
                <p className="mt-1 text-2xl font-semibold text-blue-400">
                  {callDuration}
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 border border-slate-700/50">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Qualified
                </p>
                <p className="mt-1 text-2xl font-semibold text-cyan-400">
                  {qualified}
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 border border-slate-700/50">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Booked
                </p>
                <p className="mt-1 text-2xl font-semibold text-blue-400">
                  {booked}
                </p>
              </div>
            </div>

            {/* AI Summary */}
            <div className="mb-6 rounded-xl bg-slate-800/50 p-4 border border-slate-700/50">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  AI Summary
                </p>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                {aiSummary}
              </p>
            </div>

            {/* Outcome */}
            <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 border border-slate-700">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                <Sparkles className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Outcome
                </p>
                <p className="font-semibold text-cyan-400">{outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
