// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare,Phone } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4me9sjy",
        "template_0idndhc", // replace with your template ID
        form.current,
        "vUZzQH9JB2SN53kC4" // replace with your public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/images/contact-me.svg')`, // your background
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-6 tracking-wide"
        >
          <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 text-center mb-12"
        >
          Have a project or question? Fill out the form below and I’ll get back
          to you shortly.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 p-8 space-y-6 text-gray-900"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute top-3 left-3 text-rose-500 w-5 h-5" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-rose-500 transition"
            />
          </div>

          <div className="relative">
            <Phone className="absolute top-3 left-3 text-rose-500 w-5 h-5" />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-rose-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-rose-500 w-5 h-5" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-rose-500 transition"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute top-3 left-3 text-rose-500 w-5 h-5" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-rose-500 focus:ring-rose-500 transition"
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-rose-500/40 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success Message */}
          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-medium text-center mt-3"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
