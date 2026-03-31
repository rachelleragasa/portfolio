import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactFormschema } from "./contactFormSchema";
import EmailIcon from "../../assets/email.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import LinkedinIcon from "../../assets/linkedin.svg?react";

type FormState = "idle" | "sending" | "sent" | "error";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormschema),
  });
  const [status, setStatus] = useState<FormState>("idle");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Let's build
              <br />
              <em>something great</em>
            </h2>
            <p className={styles.sub}>
              I'm open to new roles and the occasional freelance collaboration.
              If you think we'd work well together, I'd love to hear from you.
            </p>

            <div className={styles.links}>
              <a
                href="mailto:hello@rachelleragasa.dev"
                className={styles.contactLink}
              >
                <EmailIcon />
                hello@rachelleragasa.dev
              </a>
              <a
                href="https://github.com/rachelleragasa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <GithubIcon />
                github.com/rachelleragasa
              </a>
              <a
                href="https://linkedin.com/in/rachelleragasa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <LinkedinIcon />
                linkedin.com/in/rachelleragasa
              </a>
            </div>
          </div>

          <div className={styles.formWrap}>
            {status === "sent" ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Message received!</h3>
                <p>
                  Thanks for reaching out. I'll get back to you within 1–2
                  business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
              >
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Name
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={styles.input}
                      placeholder="Your name here"
                      aria-describedby="name-error"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={styles.input}
                      placeholder="Where should I reply?"
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell me what you're building and why you need a great frontend dev on it."
                    aria-describedby="message-error"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className={styles.errorMessage}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span className={styles.spinner} />
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
