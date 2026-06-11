export default function Footer() {
    return (
      <footer className="relative overflow-hidden border-t border-slate-800 bg-[#060a12]">
  
        {/* Glow */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-[120px]" />
  
        <div className="relative mx-auto max-w-7xl px-6 py-24">
  
          {/* Final CTA */}
          <div className="mx-auto max-w-4xl text-center">
  
            <h2 className="text-5xl font-bold text-white md:text-6xl">
              Stop Losing Leads To
              <span className="text-cyan-400"> Faster Agents.</span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Every lead is called, qualified, and booked in under 30 seconds—
              before your competitors even see the notification.
            </p>
  
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  
              <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition-all hover:bg-cyan-400">
                Book a Demo
              </button>
  
              <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition-all hover:border-cyan-500">
                Listen to a Live Call
              </button>
  
            </div>
          </div>
  
          {/* Divider */}
          <div className="my-16 h-px bg-slate-800" />
  
          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">
  
            <div>
              © 2026 LeadFlow AI. All rights reserved.
            </div>
  
            <div className="flex gap-8">
              <a
                href="/privacy"
                className="transition-colors hover:text-cyan-400"
              >
                Privacy Policy
              </a>
  
              <a
                href="/terms"
                className="transition-colors hover:text-cyan-400"
              >
                Terms of Service
              </a>
  
              <a
                href="mailto:hello@yourdomain.com"
                className="transition-colors hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
  
          </div>
  
        </div>
      </footer>
    );
  }