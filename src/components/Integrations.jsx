import React from "react";
import google_ads from "../assets/google_ads.svg"
import zillow from "../assets/zillow.png"
import facebook from "../assets/facebook.png"
import fub from "../assets/fub.png"
import hubspot from "../assets/hubspot.png"
import realtor from "../assets/realtor.png"
import salesforce from "../assets/salesforce.png"
import zapier from "../assets/zapier.png"

const topRow = [
"Zillow",
"Realtor.com",
"Facebook Ads",
"Google Ads",
"Follow Up Boss",
"Zapier",
];

// const bottomRow = [
// "Google Calendar",
// "HubSpot",
// "Salesforce",
// "KVCore",
// "BoomTown",
// "Webhooks",
// ];

const bottomRow = [
    {
      name: "Zillow",
      logo: zillow,
    },
    {
      name: "Realtor.com",
      logo: realtor,
    },
    {
      name: "Facebook Ads",
      logo: facebook,
    },
    {
      name: "Google Ads",
      logo: google_ads,
    },
    {
      name: "Zapier",
      logo: zapier,
    },
  ];

const integrations = [
    {
      name: "hubspot",
      logo: hubspot,
    },
    {
      name: "salesforce",
      logo: salesforce,
    },
    {
      name: "fub",
      logo: fub,
    },
    {
      name: "Google Ads",
      logo: google_ads,
    },
    {
      name: "Zillow",
      logo: zillow,
    },
  ];

export default function Integrations() {
return ( <section className="relative overflow-hidden py-24 bg-[#060a12]">

```
  {/* Background Glow */}
  <div id="integrations" className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Badge */}
    <div className="mb-4 flex justify-center">
      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
        INTEGRATIONS
      </span>
    </div>

    {/* Heading */}
    <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold text-white">
      Works With Your Existing Lead Sources
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-slate-400">
      Connect your AI ISA to the tools where your leads already live.
    </p>

    {/* Marquee Container */}
    <div className="mt-20 space-y-8">

      {/* Row 1 */}
      <div className="">
      <div className="marquee flex gap-6">
  {[...integrations, ...integrations].map((item, index) => (
    <IntegrationCard
      key={index}
      name={item.name}
      logo={item.logo}
    />
  ))}
</div>
      </div>

      {/* Row 2 */}
      <div className="">
        <div className="marquee-reverse flex gap-6">
          {[...bottomRow, ...bottomRow].map((item, index) => (
                <IntegrationCard
                key={index}
                name={item.name}
                logo={item.logo}
              />
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


);
}

function IntegrationCard({ name, logo }) {
    return (
      <div className="flex min-w-[120px] items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-8 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
        
        <img
          src={logo}
          alt={name}
          className="h-5 w-auto object-contain opacity-80 brightness-0 invert"
        />
      </div>
    );
  }
