import { ScrollStory } from '../components/ScrollStory'
import { FadeIn } from '../components/FadeIn'

const donateCaptions = [
  {
    range: [0, 0.5] as [number, number],
    side: 'left' as const,
    text: "Every donation becomes medicine, equipment, and care for someone who has nowhere else to turn. A single contribution might cover a course of antibiotics, a diagnostic test, or a few hours of electricity to keep the ICU monitors running through the night. There is no minimum that's too small — every rupee is spent directly on patient care, never on overhead.",
  },
  {
    range: [0.5, 1] as [number, number],
    side: 'right' as const,
    text: "Your support is what keeps these doors open, free, for the next patient who walks through them — the mother in labor, the child with a fever that won't break, the laborer injured on a job site with no insurance. Iftakhar Memorial Hospital runs entirely on donations from people like you, and every gift, however modest, becomes someone else's chance at care.",
  },
]

const ways = [
  {
    title: 'One-time donation',
    description: 'Any amount helps cover medicine, tests, and treatment for a patient in need.',
  },
  {
    title: 'Monthly sponsorship',
    description: 'Become a recurring supporter and help us plan long-term care for the community.',
  },
  {
    title: 'Medical supplies',
    description: 'Donate medicines, equipment, or supplies directly — contact us to coordinate.',
  },
]

export function Donate() {
  return (
    <div className="pb-24">
      <ScrollStory
        videoSrc="/media/donate-journey.mp4"
        heightVh={200}
        eyebrow="Donate"
        title="Help us treat one more patient, free of charge"
        subtitle="Iftakhar Memorial Hospital runs entirely on donations. Every rupee goes directly toward free treatment for patients in Chishtian who have nowhere else to turn."
        captions={donateCaptions}
      />

      <div className="mx-auto max-w-4xl px-6 pt-20 text-center">
        <FadeIn>
          <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
            {ways.map((way, i) => (
              <FadeIn key={way.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-stone-200 bg-stone-100 p-6">
                  <h3 className="font-medium text-navy-900">{way.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{way.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 text-left">
          <h3 className="text-sm font-medium uppercase tracking-widest text-teal-700">
            Bank details
          </h3>
          <dl className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <dt className="text-slate-400">Account title</dt>
              <dd>Iftakhar Memorial Hospital Trust</dd>
            </div>
            <div>
              <dt className="text-slate-400">Bank</dt>
              <dd>To be confirmed</dd>
            </div>
            <div>
              <dt className="text-slate-400">Account number</dt>
              <dd>To be confirmed</dd>
            </div>
            <div>
              <dt className="text-slate-400">Branch</dt>
              <dd>Chishtian, Punjab</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-slate-400">
            Placeholder details — replace with the hospital's real account information
            before publishing.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
