import { useState } from "react";
import axios from "axios";
import { User, Phone, Globe, Loader2 } from "lucide-react";

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    website: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Please accept the terms to continue");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      // Dummy API call with axios
      await axios.post("https://api.example.com/v1/contacts", {
        name: formData.name,
        number: formData.number,
        website: formData.website,
      });
      setStatus("success");
    } catch {
      // For demo purposes, we'll show success even on error
      setStatus("success");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="livedemo" className="flex flex-col mt-30">
        <div className="justify-center">
    <h1 className="text-4xl font-bold text-white justify-center">Put Rezora on Test.</h1>
            {/* Under line */}
            <div className="flex justify-center">
              <div className="w-24 h-[2px] justify-center items-center mt-8 mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div> 
        </div>
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div
        className="w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-1"
        style={{
          boxShadow: `
            0 0 0 1px rgba(6, 182, 212, 0.1),
            0 4px 6px -1px rgba(0, 0, 0, 0.5),
            0 10px 15px -3px rgba(0, 0, 0, 0.5),
            0 20px 25px -5px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(6, 182, 212, 0.1),
            0 0 40px -10px rgba(6, 182, 212, 0.3)
          `,
        }}
      >
        <div className="rounded-xl bg-slate-900/80 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
                <Phone className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-left font-medium tracking-widest text-cyan-400/70">
                  LIVE TEST
                </p>
                <p className="text-base font-semibold text-white text-left">
                  Rezora Demo Agent
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-cyan-400">
                READY
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 p-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-medium tracking-widest text-slate-400">
                YOUR NAME
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-4 pl-12 pr-4 text-white placeholder-slate-500 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="text-xs font-medium tracking-widest text-slate-400">
                YOUR MOBILE NUMBER
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                <input
                  type="tel"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  placeholder="(555) 123-4567"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-4 pl-12 pr-4 text-white placeholder-slate-500 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  required
                />
              </div>
            </div>

            {/* Website Field */}
            <div className="space-y-2">
              <label className="text-xs font-medium tracking-widest text-slate-400">
                YOUR WEBSITE{" "}
                <span className="text-slate-500">— optional</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-4 pl-12 pr-4 text-white placeholder-slate-500 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
              <p className="text-xs text-slate-500">
                We use this to personalize your experience
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-700 text-cyan-500 focus:ring-cyan-500/20"
              />
              <label htmlFor="consent" className="text-sm text-slate-400">
                By checking this box, I agree to the{" "}
                <a href="#" className="text-cyan-400 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-cyan-400 hover:underline">
                  Terms of Service
                </a>
                . I consent to receive communications.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-4 font-semibold text-slate-900 transition-all hover:from-cyan-400 hover:to-blue-400 disabled:opacity-70"
              style={{
                boxShadow: `
                  0 4px 14px rgba(6, 182, 212, 0.4),
                  0 0 20px rgba(6, 182, 212, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.1)
                `,
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Calling...
                  </>
                ) : (
                  <>
                    <Phone className="h-5 w-5" />
                    CALL ME NOW
                  </>
                )}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-center text-sm text-cyan-400">
                Form submitted successfully!
              </p>
            )}

            {/* Footer */}
            <p className="text-center text-xs tracking-wider text-slate-500">
              SECURE SUBMISSION · YOUR DATA IS PROTECTED
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
