"use client";
import { FC, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import NeonButton from "../../utils/NeonButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import Reveal from "@/app/utils/Reveal";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const toastId = toast.loading("Sending your message...");
    setLoading(true);

    try {
      const response = await axios.post("/api/contact", data);
      toast.success(response.data.message || "Message sent successfully!", {
        id: toastId,
      });
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        toast.error(error.response.data.error, { id: toastId });
      } else {
        toast.error("Failed to send message", { id: toastId });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="glass sm:my-10 rounded-4xl border border-black/10 dark:border-white/10
      bg-[#F6F6F6] dark:bg-[#151515] shadow-xl px-4 py-6 sm:px-10 sm:py-12"
    >
      <Toaster position="top-right" />

      <Reveal>
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
          Contact Me
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-left">
          <h5 className="text-lg sm:text-xl font-bold mb-4">
            Let&apos;s Connect
          </h5>

          <p className="text-sm sm:text-base text-justify text-[#3f4346] dark:text-[#ADB7BE] mb-4 leading-relaxed">
            I&apos;m always open to exciting collaborations and new opportunities in tech.
            Whether you have a project in mind, a question, or just want to connect —
            feel free to reach out. I&apos;ll do my best to get back to you!
          </p>

          <p className="text-sm sm:text-base text-justify text-[#3f4346] dark:text-[#ADB7BE] mb-4 leading-relaxed">
            I specialize in building modern web applications with cutting-edge technologies.
            From frontend development to full-stack solutions, I&apos;m passionate about
            creating seamless user experiences and solving complex problems.
          </p>

          <p className="text-sm sm:text-base text-justify text-[#3f4346] dark:text-[#ADB7BE] mb-6 leading-relaxed">
            Let&apos;s discuss your next big idea, explore potential collaborations, or
            simply have a conversation about the latest in web development. I&apos;m here
            to help bring your vision to life!
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Chirag1905"
              target="_blank"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaGithub size={36} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/chirag-vadhavana-7586ab225"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin size={36} />
            </Link>

            <Link
              href="https://www.instagram.com/chirag._.vadhavana/"
              target="_blank"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram size={36} />
            </Link>

            <Link
              href="https://www.freelancer.in/u/chiragvadhavana"
              target="_blank"
              aria-label="Freelancer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <SiFreelancer size={36} />
            </Link>
          </div>
        </div>

        {/* PIPELINE DIVIDER */}
        <div className="flex justify-center items-center">
          <div
            className="w-full h-px sm:w-px sm:h-full bg-linear-to-r sm:bg-linear-to-b from-transparent via-black/20 dark:via-white/20 to-transparent"
          />
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-2xl p-3 text-sm
              bg-[#eee8e8] dark:bg-[#18191E]
              border border-[#cacee6] dark:border-[#33353F]"
              placeholder="yourname@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full rounded-2xl p-3 text-sm
              bg-[#eee8e8] dark:bg-[#18191E]
              border border-[#cacee6] dark:border-[#33353F]"
              placeholder="Job Opportunity"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              rows={4}
              {...register("message", { required: "Message is required" })}
              className="w-full rounded-2xl p-3 text-sm resize-none
              bg-[#eee8e8] dark:bg-[#18191E]
              border border-[#cacee6] dark:border-[#33353F]"
              placeholder="Hello Chirag, we would like to connect..."
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <NeonButton
            text="Send Message"
            showLoader={loading}
            disabled={loading}
            className="w-full py-3 rounded-2xl text-sm mt-2"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;