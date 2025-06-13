import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, UserPlus, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Something went wrong. Try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gray-900 text-white flex justify-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-gray-800 border border-blue-500 rounded-2xl shadow-2xl max-w-4xl w-full p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(59,130,246,0.4)",
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <Mail className="w-8 h-8 text-blue-400 animate-pulse" />
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Let’s Connect Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-400">
              <UserPlus className="w-6 h-6" />
              <h3 className="text-2xl font-semibold text-white">Let’s Connect</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed italic">
              I'm always open to{" "}
              <span className="text-blue-400 font-medium">new opportunities</span>,{" "}
              <span className="text-blue-400 font-medium">innovative projects</span>, and{" "}
              <span className="text-blue-400 font-medium">collaborative ventures</span>.{" "}
              Feel free to reach out — I’d be delighted to connect and explore how we can work together.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <span className="text-lg">rayyanibnrahman903@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <span className="text-lg">+91-9567649364</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span className="text-lg">Palakkad, Kerala</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            {sent && (
              <p className="text-green-400 font-semibold mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
