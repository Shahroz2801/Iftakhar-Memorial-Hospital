import { FadeIn } from '../components/FadeIn'

const phone = import.meta.env.VITE_HOSPITAL_PHONE
const email = import.meta.env.VITE_HOSPITAL_EMAIL

export function Contact() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="mx-auto max-w-xl text-center">
          <h1 className="text-sm font-medium uppercase tracking-widest text-teal-600">
            Contact
          </h1>
          <p className="mt-3 font-serif text-3xl font-normal tracking-tight text-navy-900 md:text-4xl">
            Visit or reach out to us
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-stone-200 bg-stone-100 p-8">
              <h3 className="font-medium text-navy-900">Address</h3>
              <p className="mt-2 text-sm text-slate-500">
                Iftakhar Memorial Hospital
                <br />
                Chishtian, Bahawalnagar District
                <br />
                Punjab, Pakistan
              </p>

              <h3 className="mt-6 font-medium text-navy-900">Phone</h3>
              <p className="mt-2 text-sm text-slate-500">
                {phone ? (
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-teal-700">
                    {phone}
                  </a>
                ) : (
                  'To be confirmed'
                )}
              </p>

              <h3 className="mt-6 font-medium text-navy-900">Email</h3>
              <p className="mt-2 text-sm text-slate-500">
                {email ? (
                  <a href={`mailto:${email}`} className="hover:text-teal-700">
                    {email}
                  </a>
                ) : (
                  'To be confirmed'
                )}
              </p>

              <h3 className="mt-6 font-medium text-navy-900">Emergency</h3>
              <p className="mt-2 text-sm text-slate-500">Open 24/7 for emergency & ICU cases</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-teal-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-teal-500"
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={4}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500"
              >
                Send message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
