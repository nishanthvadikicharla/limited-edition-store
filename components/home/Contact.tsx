"use client";
import { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  Send, 
  MessageSquare, 
  Mail, 
  Sparkles,
  Loader2,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    company: "",
    message: "",
  });

  const openEmailModal = () => {
    setShowForm(true);
    setSubmitted(false);
    setErrorMsg("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          designation: "",
          company: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Please try sending again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fcfbf9] text-stone-800 font-sans selection:bg-emerald-800 selection:text-white relative overflow-hidden">
      {/* Subtle Warm Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-100/50 via-emerald-50/30 to-transparent blur-3xl pointer-events-none" />

      {/* Main Classical Light Contact Section */}
      <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10 scroll-mt-12">
        <div className="space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-300/80 text-stone-700 text-xs font-mono tracking-[0.25em] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Executive Partnerships
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl font-serif text-stone-900 tracking-tight leading-[1.15]">
            {"Let's build the future "}
            <br />
            <em className="font-serif italic text-emerald-800 font-normal">
              {"of food together."}
            </em>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are an investor, institutional partner, or distributor, 
            connect directly with our leadership team.
          </p>

          {/* Streamlined Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            
            {/* Direct Send Email Action */}
            <button
              className="group relative px-8 py-4 rounded-full bg-stone-900 hover:bg-emerald-900 text-stone-50 font-semibold text-xs uppercase tracking-widest shadow-lg shadow-stone-900/10 transition-all transform active:scale-95 flex items-center gap-3"
              onClick={openEmailModal}
            >
              <Mail className="w-4 h-4 text-stone-50" /> 
              <span>Send Email</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* WhatsApp Link */}
            <button
              className="px-8 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300/90 font-semibold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center gap-3 transform active:scale-95"
              onClick={() => window.open("https://wa.me/918309607310", "_blank")}
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" /> WhatsApp Us
            </button>
          </div>

        </div>
      </section>

      {/* Classical Glassmorphic Modal (Light Theme) */}
      {showForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-md animate-fade-in"
          onClick={() => setShowForm(false)}
        >
          <div 
            className="relative w-full max-w-xl bg-[#fcfbf9] border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Modal Soft Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 text-stone-500 hover:text-stone-900 rounded-full bg-stone-100 border border-stone-200 transition-colors"
              onClick={() => setShowForm(false)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif text-stone-900">Message Delivered</h3>
                <p className="text-stone-600 text-sm max-w-sm mx-auto">
                  Your inquiry has been sent directly to business@refarmsoil.com. Our team will review and respond shortly.
                </p>
                <button
                  onClick={() => setShowForm(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-stone-50 font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-6 relative z-10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">
                    Direct Email Inquiry
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight mt-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Fill out the form below to transmit your details straight to our primary email address.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        placeholder="John Doe"
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        placeholder="john@example.com"
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        placeholder="+91 98765 43210"
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                        Role / Designation *
                      </label>
                      <select
                        name="designation"
                        required
                        value={form.designation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors shadow-sm"
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="Investor">Investor</option>
                        <option value="VC / Angel">VC / Angel</option>
                        <option value="Partner">Partner</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Media">Media / Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      placeholder="Your organization name"
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      placeholder="Share your proposal or inquiry..."
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-stone-900 hover:bg-emerald-900 text-stone-50 font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending Email...
                      </>
                    ) : (
                      <>
                        Send Email <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}