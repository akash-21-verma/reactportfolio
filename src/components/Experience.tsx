'use client';

import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    year: '2025 - Present',
    role: 'Software Engineer',
    company: 'Marg ERP Ltd.',
    desc: 'Working on resource management web app. Marg HR',
  },
  {
    year: '2023 - 2025',
    role: 'Full Stack Dev.',
    company: 'Mittal Software Labs',
    desc: 'Built APIs and backend systems for Contract Processing Tool',
  },
];

const skills = [
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Angular', level: 70 },
  { name: 'Node.js', level: 85 },
  { name: '.NET Core', level: 75 },
  { name: 'Spring Boot', level: 70 },
  { name: 'SQL Server', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Supabase', level: 70 },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} id='skills' className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT → Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-10">Experience</h2>

          <div className="relative border-l-2 border-primary/30 pl-6 space-y-10 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute -left-[10px] top-1 w-4 h-4 bg-primary rounded-full transition-transform duration-300 hover:scale-125 shadow-md"></div>

                <p className="text-sm text-gray-500 ml-6">{exp.year}</p>
                <h3 className="font-semibold text-lg text-neutral-dark ml-6">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 ml-6">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1 ml-6">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT → Skills */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-10">Skills</h2>

          <div className="space-y-6 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md">
            {skills.map((skill, i) => {
              const level = inView ? skill.level : 0;

              return (
                <div
                  key={skill.name}
                  className={`transition-all duration-700 group transition-transform duration-300 hover:scale-[1.02] ${
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-dark">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">{level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-primary to-purple-400 hover:brightness-110 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      style={{
                        width: `${level}%`,
                        transitionDelay: `${i * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
