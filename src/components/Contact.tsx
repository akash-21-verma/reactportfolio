// app/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-primary">Contact</h2>

      <form className="mt-8 flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded-lg"
        />

        <button className="bg-primary text-white py-3 rounded-lg hover:bg-primary-dark">
          Send Message
        </button>
      </form>
    </section>
  );
}