import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useRef, useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactInfo = ({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center p-4 space-x-4 rounded-lg bg-[#1C1C1C] border border-zinc-800 hover:border-[#FFD700]/30"
  >
    <div className="p-3 rounded-full bg-[#FFD700]/10">
      <Icon className="w-6 h-6 text-[#FFD700]" />
    </div>
    <div>
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-zinc-400">{content}</p>
    </div>
  </motion.div>
);

function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev: FormState) => ({ ...prev, [id]: value }));
    if (errors[id as keyof Errors]) {
      setErrors((prev: Errors) => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://formspree.io/f/mrbpwjve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        setFormState({ name: "", email: "", message: "" });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="px-4 py-16 mx-auto text-white max-w-7xl sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-xl text-zinc-400">
          Have questions? We're here to help. Reach out to us through any of the
          following channels.
        </p>
      </motion.div>

      <section aria-labelledby="contact-info" className="mb-12">
        <h2 id="contact-info" className="sr-only">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInfo
            icon={MapPin}
            title="Location"
            content="Platinum club, Katameya Residence Compound, Naguib Mahfouz Axis, between gate 5 and 6 of AlNakheel Resort."
          />
          <ContactInfo icon={Phone} title="Phone" content="+20 1095492279" />
          <ContactInfo
            icon={Mail}
            title="Email"
            content="Hsrhunting@gmail.com"
          />
          <ContactInfo
            icon={Clock}
            title="Hours"
            content="Saturday - Thursday: 4PM - 12AM"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
          <form
            ref={formRef}
            className="space-y-6"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-[#1C1C1C] border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                  errors.name ? "border-[#B22222]" : ""
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-[#B22222]">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-zinc-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-[#1C1C1C] border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                  errors.email ? "border-[#B22222]" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-[#B22222]">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-[#1C1C1C] border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                  errors.message ? "border-[#B22222]" : ""
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-[#B22222]">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 font-semibold text-white bg-[#B22222] rounded-md hover:bg-[#FFD700] hover:text-black transition duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <motion.div
                  role="status"
                  aria-label="Sending message"
                  aria-live="polite"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </>
              )}
            </button>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 mt-4 text-center text-black bg-[#FFD700]/90 rounded-md"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 mt-4 text-center text-white bg-[#B22222] rounded-md"
              >
                {submitError}
              </motion.div>
            )}
          </form>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Find Us</h2>
          <div className="h-full min-h-[400px] bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-zinc-800">
            {!showMap ? (
              <button
                onClick={() => setShowMap(true)}
                className="w-full h-full flex items-center justify-center text-[#FFD700] text-lg font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                aria-label="Load map"
              >
                Click to load interactive map
              </button>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d32850.29057234311!2d31.40069798273585!3d30.06663953544565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14583d5e6a8e70b5%3A0x4c09ccb32df51591!2sKatameya%20Residence%2C%20Naguib%20Mahfouz%20Axis%2C%20Second%20New%20Cairo%2C%20Cairo%20Governorate%204732210!3m2!1d30.0646748!2d31.4291615!5e0!3m2!1sen!2seg!4v1744804459555!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
                className="w-full h-full"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
