"use client";
import { FC, useState } from "react";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import NeonButton from "../../utils/NeonButton";

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

      reset(); // Clear form
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
    <section className="border border-black/10 dark:border-white/10 rounded-4xl shadow-2xl bg-[#F6F6F6] dark:bg-[#151515] text-center text-black dark:text-white my-7 py-4 sm:my-20 px-4" id="contact">
      <Toaster position="top-right" />
      <h2 className="text-2xl sm:text-4xl font-bold pb-6 sm:py-6">
        Contact Me
      </h2>

      <div className="grid sm:grid-cols-2 sm:px-10 sm:py-10 gap-4 relative">
        <div className="to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-100 left-40 transform -translate-x-1/2 -translate-1/2
          bg-[radial-gradient(ellipse_at_center,#581c87,#581c8700)] dark:bg-[radial-gradient(ellipse_at_center,#581c87,#581c8700)]"/>
        {/* Left Section */}
        <div className="z-10 text-left">
          <h5 className="text-base sm:text-xl font-bold text-black dark:text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-sm sm:text-base text-[#3f4346] dark:text-[#ADB7BE] text-justify mb-6 max-w-md">
            I&apos;m always open to exciting collaborations and new opportunities in tech.
            Whether you have a project in mind, a question, or just want to connect — feel free to reach out.
            I&apos;ll do my best to get back to you as soon as possible!
          </p>

          <div className="flex flex-row gap-2">
            <Link href="https://github.com/Chirag1905?tab=repositories" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/chirag-vadhavana-7586ab225" target="_blank">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="z-10 text-left">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">
                Your email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="bg-[#eee8e8] dark:bg-[#18191E] border border-[#cacee6] dark:border-[#33353F] placeholder-[#484b4e] dark:placeholder-[#9CA2A9] text-gray-900 dark:text-white text-sm rounded-xl block w-full p-2.5"
                placeholder="yourname@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm mb-2 font-medium text-black dark:text-white">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="bg-[#eee8e8] dark:bg-[#18191E] border border-[#cacee6] dark:border-[#33353F] text-gray-900 dark:text-white text-sm rounded-xl block w-full p-2.5"
                placeholder="Job Opportunity Inquiry"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm mb-2 font-medium text-black dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="bg-[#eee8e8] dark:bg-[#18191E] border border-[#cacee6] dark:border-[#33353F] text-gray-900 dark:text-white text-sm rounded-xl block w-full p-2.5"
                placeholder="Hello Chirag, we would like to connect regarding a potential role..."
                rows={4}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <NeonButton
              text="Send Message"
              showLoader={loading}
              disabled={loading}
              className="w-full py-2.5 px-5 text-sm rounded-xl mt-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
