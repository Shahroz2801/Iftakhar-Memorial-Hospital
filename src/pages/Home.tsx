import { Link } from 'react-router-dom'
import { ScrollStory } from '../components/ScrollStory'
import { FadeIn } from '../components/FadeIn'

const homeCaptions = [
  {
    range: [0, 0.22] as [number, number],
    side: 'left' as const,
    text: "Iftakhar Memorial Hospital was built for the families of Chishtian and the villages around it — the ones who are too often turned away elsewhere because they cannot pay. It stands as a promise that quality medical care is a right, not a privilege reserved for those who can afford it. Every wall, every bed, every piece of equipment here exists for one reason: to serve the people who need it most.",
  },
  {
    range: [0.22, 0.5] as [number, number],
    side: 'right' as const,
    text: "From the moment a patient steps through our gate, they are treated with the same warmth and urgency as anyone else — no forms about income, no hesitation at the front desk. Families arrive after long journeys from surrounding districts, often having been turned away elsewhere, and are welcomed here without question. Our staff are trained to see the person before the paperwork.",
  },
  {
    range: [0.5, 0.78] as [number, number],
    side: 'left' as const,
    text: "Our doctors, nurses, and support staff are here around the clock, every day of the year, for every emergency, every birth, every quiet recovery in between. Many have worked here for years, choosing to stay despite offers elsewhere, because they believe in what this hospital represents. Their dedication is the real infrastructure behind every treatment we provide, free of charge.",
  },
  {
    range: [0.78, 1] as [number, number],
    side: 'right' as const,
    text: "We believe saving a life should never depend on a family's ability to pay. That belief shapes every decision we make, from the medicines we stock to the staff we hire to the way we welcome every single patient. It is the reason this hospital exists, and the reason it will keep serving Chishtian for generations to come.",
  },
]

const stats = [
  { value: '100%', label: 'Free treatment' },
  { value: '30,000+', label: 'Patients treated' },
  { value: '15', label: 'Years serving Chishtian' },
  { value: '24/7', label: 'Emergency & ICU care' },
]

const departments = [
  { name: 'Emergency & ICU', image: '/images/departments/emergency-icu.jpg' },
  { name: 'Maternity & Child Care', image: '/images/departments/maternity.jpg' },
  { name: 'Surgery', image: '/images/departments/surgery.jpg' },
  { name: 'General Medicine', image: '/images/departments/general-medicine.jpg' },
]

export function Home() {
  return (
    <div>
      <ScrollStory
        videoSrc="/media/hospital-journey.mp4"
        heightVh={300}
        eyebrow="Chishtian, Punjab, Pakistan"
        title="Iftakhar Memorial Hospital"
        subtitle="Free, dignified treatment for those who can't afford care — every patient, every time, no cost."
        captions={homeCaptions}
        cue="Scroll to walk through our doors"
      />

      <section className="border-y border-stone-200 bg-stone-100 px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
              <div className="font-serif text-3xl text-teal-700 md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-xl text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-teal-600">
              Our care
            </h2>
            <p className="mt-3 font-serif text-3xl font-normal tracking-tight text-navy-900 md:text-4xl">
              A team dedicated to every patient, regardless of ability to pay.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => (
              <FadeIn key={dept.name} delay={i * 0.1}>
                <div className="group h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="px-4 py-4 text-center text-sm font-medium text-navy-900">
                    {dept.name}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center">
            <Link
              to="/departments"
              className="inline-block rounded-full border border-teal-200 px-6 py-2.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-50"
            >
              View all departments
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy-900 to-teal-800 px-6 py-20 text-center" data-nav-theme="dark">
        <FadeIn>
          <p className="font-serif text-2xl font-normal text-white md:text-3xl">
            No one should be turned away because they cannot pay.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-teal-50/80">
            Your donation keeps our doors open, free of charge, for the people of
            Chishtian and beyond.
          </p>
          <Link
            to="/donate"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-teal-50"
          >
            Support the hospital
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
