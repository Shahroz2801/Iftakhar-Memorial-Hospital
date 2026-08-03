import { ScrollStory } from '../components/ScrollStory'
import { FadeIn } from '../components/FadeIn'

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

const doctorsCaptions = [
  {
    range: [0, 0.5] as [number, number],
    side: 'left' as const,
    text: "Behind every recovery at Iftakhar Memorial is a team that shows up, every single day, for every patient who walks through the door. Our physicians trained in emergency medicine, surgery, maternity care, and general medicine chose to build their careers here, in Chishtian, rather than in larger private hospitals elsewhere. That choice says everything about what this place stands for.",
  },
  {
    range: [0.5, 1] as [number, number],
    side: 'right' as const,
    text: "Our doctors, nurses, and support staff treat every patient like family — regardless of what they can pay, where they come from, or how they arrived. Many of our staff grew up in these same villages, which means they understand the community they serve in a way outsiders never could. That familiarity turns clinical care into something closer to compassion.",
  },
]

const doctors = [
  { name: 'Dr. Ahmed Iftakhar', role: 'Chief Medical Officer · Emergency Medicine' },
  { name: 'Dr. Sana Bibi', role: 'Maternity & Child Care' },
  { name: 'Dr. Bilal Chaudhry', role: 'General Surgery' },
  { name: 'Dr. Fatima Noor', role: 'General Medicine' },
  { name: 'Dr. Usman Tariq', role: 'ICU & Critical Care' },
  { name: 'Dr. Ayesha Malik', role: 'Pediatrics' },
]

export function Doctors() {
  return (
    <div className="pb-24">
      <ScrollStory
        videoSrc="/media/doctors-journey.mp4"
        heightVh={200}
        eyebrow="Our team"
        title="The people behind free healthcare"
        captions={doctorsCaptions}
      />

      <div className="mx-auto max-w-6xl px-6 pt-20">
        <FadeIn className="mx-auto max-w-xl text-center">
          <h1 className="text-sm font-medium uppercase tracking-widest text-teal-600">
            Our doctors
          </h1>
          <p className="mt-3 font-serif text-3xl font-normal tracking-tight text-navy-900 md:text-4xl">
            The people behind free healthcare in Chishtian
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, i) => (
            <FadeIn key={doctor.name} delay={(i % 3) * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-stone-200 bg-stone-100 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600/10 font-serif text-2xl text-teal-700">
                  {initials(doctor.name)}
                </div>
                <h3 className="mt-5 font-medium text-navy-900">{doctor.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{doctor.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
