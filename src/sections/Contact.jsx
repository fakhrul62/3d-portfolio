import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });

    //service_mlig73n
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send("service_mlig73n", "template_m9sp0p6", {
        from_name: form.name,
        to_name: "Fakhrul",
        from_email: form.email,
        to_email: "ifakhrul23@gmail.com",
        message: form.message,
      }, 'BS5zHM9ADfCBToa5V')
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <section id="contact" className="sm:px-10 px-5 my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-32">
          <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-lg text-zinc-300">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out via
            email or connect with me on LinkedIn.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg text-slate-400">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-600 text-lg text-gray-200 shadow-zinc-950 shadow-2xl focus:outline-none"
                placeholder="John Cena"
              />
              <span className="text-lg text-slate-400">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-600 text-lg text-gray-200 shadow-zinc-950 shadow-2xl focus:outline-none"
                placeholder="johncena@gmail.com"
              />
              <span className="text-lg text-slate-400">Your message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                rows={5}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 px-5 py-2 min-h-14 rounded-lg placeholder:text-zinc-600 text-lg text-gray-200 shadow-zinc-950 shadow-2xl focus:outline-none"
                placeholder="Hi, I'm interested in ..."
              />
            </label>
            <button
              className="bg-zinc-800 px-5 py-2 min-h-12 rounded-lg shadow-zinc-950 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
              type="submit"
              disabled={loading}
            >
              {loading
                ? // <img src="/assets/arrow-up.png" alt="loading" className="w-6 h-6 animate-spin" />
                  "Sending..."
                : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="loading"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
