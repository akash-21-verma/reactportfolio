import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-light">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary">
            <Image src={'/Akash-Me.jpg'}alt="Akash-Me"  width={300}
  height={300} />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-bold text-primary">About Me</h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I'm a full-stack developer focused on building scalable and
            efficient web applications. I enjoy turning complex problems into
            clean, intuitive solutions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With experience across frontend and backend technologies, I strive
            to create seamless user experiences backed by solid architecture.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition">
              Full Stack Development
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition">
              Backend Systems
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition">
              Problem Solving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
