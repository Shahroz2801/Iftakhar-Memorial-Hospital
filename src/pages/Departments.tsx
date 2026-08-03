import { ScrollStory } from '../components/ScrollStory'
import { FadeIn } from '../components/FadeIn'

const departmentsCaptions = [
  {
    range: [0, 0.5] as [number, number],
    side: 'left' as const,
    text: "From emergency care to the operating theatre, every department at Iftakhar Memorial is built around the patient rather than around cost. Our emergency and ICU teams operate around the clock, our surgical theatres are staffed by qualified surgeons, and our maternity ward exists so that no mother in Chishtian has to give birth without proper medical support nearby.",
  },
  {
    range: [0.5, 1] as [number, number],
    side: 'right' as const,
    text: "Modern diagnostic equipment, a fully stocked free pharmacy, and a team trained to move fast when it matters most — all of it funded entirely by donations, none of it billed to the patient. Whether someone needs a routine checkup or emergency surgery, the same standard of care applies, because the department they walk into should never depend on what they can afford.",
  },
]

const departments = [
  {
    name: 'Emergency & ICU',
    image: '/images/departments/emergency-icu.jpg',
    description:
      'Round-the-clock emergency response and intensive care for critical patients, free of charge.',
  },
  {
    name: 'Surgery',
    image: '/images/departments/surgery.jpg',
    description:
      'General and minor surgical procedures performed by qualified surgeons in a sterile theatre.',
  },
  {
    name: 'Maternity & Child Care',
    image: '/images/departments/maternity.jpg',
    description:
      'Safe deliveries, prenatal checkups, and pediatric care for mothers and children.',
  },
  {
    name: 'General Medicine',
    image: '/images/departments/general-medicine.jpg',
    description:
      'Diagnosis and treatment for everyday illnesses, chronic conditions, and routine checkups.',
  },
  {
    name: 'Free Pharmacy',
    image: '/images/departments/pharmacy.jpg',
    description:
      'Prescribed medicines dispensed at no cost, so treatment doesn’t stop at the door.',
  },
  {
    name: 'Diagnostic Lab',
    image: '/images/departments/lab.jpg',
    description:
      'Blood tests, imaging, and lab diagnostics to support fast, accurate treatment decisions.',
  },
]

export function Departments() {
  return (
    <div className="pb-24">
      <ScrollStory
        videoSrc="/media/departments-journey.mp4"
        heightVh={200}
        eyebrow="Departments"
        title="Complete care, under one roof"
        captions={departmentsCaptions}
      />

      <div className="mx-auto max-w-6xl px-6 pt-20">
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, i) => (
            <FadeIn key={dept.name} delay={(i % 3) * 0.1}>
              <div className="group h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-navy-900">{dept.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{dept.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
