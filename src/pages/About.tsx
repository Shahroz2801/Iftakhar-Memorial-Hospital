import { FadeIn } from '../components/FadeIn'

const values = [
  {
    title: 'Free, always',
    description: 'Every consultation, medicine, and procedure is provided at no cost to the patient.',
  },
  {
    title: 'Dignity first',
    description: 'Every patient is treated with the same respect and attention, regardless of income.',
  },
  {
    title: 'Rooted in Chishtian',
    description: 'We serve the families of Chishtian, Punjab, and the surrounding rural communities.',
  },
]

export function About() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <FadeIn className="text-center">
          <h1 className="text-sm font-medium uppercase tracking-widest text-teal-600">
            Our story
          </h1>
          <p className="mt-3 font-serif text-3xl font-normal tracking-tight text-navy-900 md:text-4xl">
            Founded to serve those who need it most
          </p>
        </FadeIn>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <img
              src="/images/about-lobby.jpg"
              alt="The main lobby of Iftakhar Memorial Hospital"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-sm"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg leading-relaxed text-slate-600">
              Iftakhar Memorial Hospital was established in Chishtian, Punjab, with a
              single purpose: to make sure that a family's income never determines
              whether they receive medical care. Many of the patients we see travel
              from villages across the district, often after being turned away
              elsewhere because they could not pay.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Today, our doctors, nurses, and volunteers provide free emergency care,
              general medicine, maternity services, surgery, and a fully stocked
              pharmacy — all funded by donations and run in memory of the hospital's
              founder.
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-navy-900">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-stone-200 bg-stone-100 p-6">
                  <h3 className="font-medium text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
