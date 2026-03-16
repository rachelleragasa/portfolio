import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactFormschema } from "./contactFormSchema";

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
      console.log({
        service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
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
            <div className={styles.sectionLabel}>Contact</div>
            <h2 className={styles.title}>
              Let's build
              <br />
              <em>something great</em>
            </h2>
            <p className={styles.sub}>
              I'm open to new roles and interesting freelance projects. If you
              think we'd work well together, I'd love to hear from you.
            </p>

            <div className={styles.links}>
              <a
                href="mailto:hello@rachelleragasa.dev"
                className={styles.contactLink}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="1"
                    y="3"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M1 5.5l7 4.5 7-4.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                </svg>
                hello@rachelleragasa.dev
              </a>
              <a
                href="https://github.com/rachelleragasa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                github.com/rachelleragasa
              </a>
              <a
                href="https://linkedin.com/in/rachelleragasa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                linkedin.com/in/rachelleragasa
              </a>
            </div>
          </div>

          {/* Form */}
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
                      placeholder="Jane Smith"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
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
                      placeholder="jane@company.com"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
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
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && <p>{errors.message.message}</p>}
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
                    "Send message →"
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
