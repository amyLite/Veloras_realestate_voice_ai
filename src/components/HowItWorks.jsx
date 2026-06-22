export default function HowItWorks() {
    return (
      <section id="howitworks" className="py-20 px-6 pt-35">
        <div>
          <h1 className="text-4xl font-bold text-white justify-center"> Four Steps, Thats it.</h1>
                  {/* Under line */}
        <div className="flex items-center justify-center">
              <div className="w-24 h-[2px] mt-6 mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div> 

          {/* Cards */}
          <div className="how-it-works-container justify-center gap-8">
            
            {/* Card 1 */}
            <div className="relative h-[450px] w-full md:w-[350px] rounded-2xl border border-slate-800 bg-[#0b1220] p-6">
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
                  01
                </div>
  
                <div className="text-cyan-400 text-xl">🏠</div>
              </div>
  
              <h3 className="text-white text-2xl font-bold mb-3">
                Lead Arrives
              </h3>
  
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                A buyer or seller inquiry comes in from Zillow, Realtor.com,
                Facebook Ads, Google Ads, or your website.
              </p>
  
              {/* Mock Lead Box */}
              <div className="rounded-xl border border-slate-800 bg-[#111827] p-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Zillow</span>
                    <span className="text-cyan-400 font-medium">14 Leads</span>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Realtor.com</span>
                    <span className="text-cyan-400 font-medium">8 Leads</span>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Website</span>
                    <span className="text-cyan-400 font-medium">23 Leads</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Connector Line (Desktop Only) */}
            {/* <div className="flex items-center">
              <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div> */}
  
            {/* Card 2 */}
            <div className="relativ h-[450px] w-full md:w-[350px] rounded-2xl border border-slate-800 bg-[#0b1220] p-6">
              {/* Step Number */}
              <div className="flex items-center justify-between mb-8">
                <div className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
                  02
                </div>
  
                <div className="text-cyan-400 text-xl">📞</div>
              </div>
  
              <h3 className="text-white text-2xl font-bold mb-3">
                AI Calls Instantly
              </h3>
  
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Your AI ISA calls the lead within seconds while interest is at
                its highest.
              </p>
  
              {/* Mock Call UI */}
              <div className="rounded-xl border border-slate-800 bg-[#111827] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-cyan-400 text-sm">
                    Calling...
                  </span>
                </div>
  
                <div className="space-y-4 text-sm">
                  <div className="rounded-xl bg-slate-800 p-3 text-slate-300 text-left">
                    Hi John, I noticed you were interested in a property on Oak
                    Avenue...
                  </div>
  
                  <div className="rounded-xl bg-slate-700 p-3 text-slate-300 ml-8 text-right">
                    Yes, we're looking for a 3-bedroom home in that area.
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {/* <div className="flex items-center">
              <div className="w-2 h-[10px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div> */}

{/* Card 3 */}
<div className="relative h-[450px] w-full md:w-[350px] rounded-2xl border border-slate-800 bg-[#0b1220] p-6">

  <div className="flex items-center justify-between mb-8">
    <div className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
      03
    </div>

    <div className="text-cyan-400 text-xl">✅</div>
  </div>

  <h3 className="text-white text-2xl font-bold mb-3">
    Lead Qualified
  </h3>

  <p className="text-slate-400 text-sm leading-relaxed mb-5">
    The AI gathers key information about the lead before your team spends time on a call.
  </p>

  <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">
    <div className="space-y-3">

      <div className="flex items-center justify-between">
        <span className="text-slate-400">Buyer Type</span>
        <span className="text-cyan-400 font-medium">Home Buyer</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-slate-400">Budget</span>
        <span className="text-cyan-400 font-medium">$450k - $550k</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-slate-400">Financing</span>
        <span className="text-cyan-400 font-medium">Pre-approved</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-slate-400">Timeline</span>
        <span className="text-cyan-400 font-medium">30 Days</span>
      </div>

    </div>
  </div>
</div>

{/* Connector Line */}
{/* <div className="hidden lg:flex items-center">
  <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
</div> */}

{/* Card 4 */}
<div className="relative h-[450px] w-full md:w-[350px] rounded-2xl border border-slate-800 bg-[#0b1220] p-6">

  <div className="flex items-center justify-between mb-8">
    <div className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
      04
    </div>

    <div className="text-cyan-400 text-xl">📅</div>
  </div>

  <h3 className="text-white text-2xl font-bold mb-3">
    Appointment Booked
  </h3>

  <p className="text-slate-400 text-sm leading-relaxed mb-5">
    Qualified leads are automatically scheduled with your team and delivered with a complete summary.
  </p>

  <div className="rounded-xl border border-slate-800 bg-[#111827] p-4">

    <div className="mb-4">
      <div className="text-cyan-400 text-sm mb-1">
        Showing Confirmed
      </div>

      <div className="text-white text-md font-semibold">
        Thursday, 2:00 PM
      </div>
    </div>

    <div className="space-y-2 border-t border-slate-800 pt-3">

      <div className="flex justify-between">
        <span className="text-slate-400">Lead</span>
        <span className="text-slate-200">John Smith</span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">Status</span>
        <span className="text-green-400">Booked</span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">Response Time</span>
        <span className="text-cyan-400">17 Seconds</span>
      </div>

    </div>

  </div>
</div>
  
          </div>
        </div>
      </section>
    );
  }