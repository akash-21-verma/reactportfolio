'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-neutral-900">
            Let’s work together
          </h2>

          <p className="mt-4 text-neutral-600 max-w-md leading-relaxed">
            Got an idea, project, or opportunity? Feel free to reach out.
            I’m always open to building something meaningful.
          </p>

          {/* divider */}
          <div className="mt-6 w-12 h-[2px] bg-primary" />

          <p className="mt-6 text-sm text-neutral-500">
            I usually reply within 24 hours 🚀
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div
            className="
              p-8 rounded-2xl
              bg-white
              border border-neutral-200
              shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            "
          >
            <form className="flex flex-col gap-5">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                className="
                  p-3 rounded-lg
                  bg-white
                  border border-neutral-300
                  focus:outline-none
                  focus:border-primary
                  focus:ring-1 focus:ring-primary/30
                  transition
                "
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                className="
                  p-3 rounded-lg
                  bg-white
                  border border-neutral-300
                  focus:outline-none
                  focus:border-primary
                  focus:ring-1 focus:ring-primary/30
                  transition
                "
              />

              {/* MESSAGE */}
              <textarea
                rows={4}
                placeholder="Your Message"
                className="
                  p-3 rounded-lg
                  bg-white
                  border border-neutral-300
                  focus:outline-none
                  focus:border-primary
                  focus:ring-1 focus:ring-primary/30
                  transition
                  resize-none
                "
              />

              {/* BUTTON */}
              <button
                className="
                  mt-2 py-3 rounded-lg
                  bg-primary text-white font-medium
                  transition-all duration-300
                  hover:bg-primary-dark
                  hover:shadow-md
                  active:scale-[0.98]
                "
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}