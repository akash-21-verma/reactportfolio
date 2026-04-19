'use client';

import { useInView } from 'react-intersection-observer';
import AnimatedNetwork from './AnimatedNetwork';

const techStack = {
  frontend: [
    {
      name: 'React',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      desc: 'Building dynamic UIs',
    },
    {
      name: 'Next.js',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      desc: 'Full-stack React framework',
    },
    {
      name: 'Angular',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      desc: 'Structured frontend apps',
    },
  ],
  backend: [
    {
      name: '.NET Core',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      desc: 'Robust backend framework',
    },
    {
      name: 'Node.js',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      desc: 'Scalable JS runtime',
    },
    {
      name: 'Spring Boot',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      desc: 'Java-based backend systems',
    },
  ],
  database: [
    {
      name: 'SQL Server',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      desc: 'Enterprise relational DB',
    },
    {
      name: 'Supabase',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      desc: 'Backend-as-a-service',
    },
    {
      name: 'PostgreSQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      desc: 'Advanced open-source DB',
    },
  ],
};

export default function Tech() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="tech" ref={ref} className="py-20 bg-white text-center">
      {/* Title */}
      <h2
        className={`text-3xl font-bold text-primary transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Tech Stack
      </h2>

      <div className="mt-12 space-y-16">
        {Object.entries(techStack).map(([category, items], catIndex) => (
          <div
            key={category}
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${catIndex * 150}ms` }}
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold capitalize text-neutral-dark mb-6">
              {category}
            </h3>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8">
              {items.map((tech, i) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center transition-all duration-700 ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${i * 100 + catIndex * 200}ms` }}
                >
                  {/* CARD */}
                  <div
                    className="
                      relative w-40 h-40 rounded-xl group cursor-pointer
                      bg-white/10 backdrop-blur-md border border-white/20
                      shadow-md hover:shadow-2xl
                      transition-all duration-300
                      hover:-translate-y-2 hover:scale-[1.03]
                      overflow-hidden isolate
                    "
                  >
                    {/* LOGO */}
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain p-6 
                      transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* GLASS OVERLAY */}
                    <div
                      className="absolute inset-0 bg-black/50 backdrop-blur-xl 
                      flex flex-col justify-center items-center text-white 
                      opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      <h3 className="font-semibold">{tech.name}</h3>
                      <p className="text-sm mt-2 px-3 text-center text-white/80">
                        {tech.desc}
                      </p>
                    </div>

                    {/* SHINE EFFECT (FIXED) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none overflow-hidden">
                      <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 blur-sm animate-shine" />
                    </div>
                  </div>

                  {/* LABEL */}
                  <span className="mt-2 text-sm text-neutral-dark/80">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
