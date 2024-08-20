import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, forwardRef, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { mcn } from "../../../lib/utils";
import Button from "../../button/button";
import Card from "../../card/card";
import Heading from "../../heading/heading";
import Typography from "../../typography/typography";
import styles from "./contact-us-section.module.css";

const contactTypes = [
  {
    id: "say-hi",
    label: "Say Hi",
  },
  {
    id: "get-quote",
    label: "Get a Quote",
  },
] as const;

const formSchema = z.object({
  contactType: z.enum([
    contactTypes[0].id,
    ...contactTypes.map((type) => type.id),
  ] as const),
  name: z
    .string()
    .regex(/^[a-zA-Z\s]*$/, "Name must contain only letters")
    .default(""),
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address"
    ),
  message: z.string().min(1, "Message is required"),
});

type ContactUsSectionProps = HTMLAttributes<HTMLDivElement>;

const ContactUsSection = forwardRef<HTMLDivElement, ContactUsSectionProps>(
  ({ ...restProps }, ref) => {
    const [contactTypeStateId, setContactTypeStateId] = useState<
      (typeof contactTypes)[number]["id"]
    >(contactTypes[0].id);

    const form = useForm<z.infer<typeof formSchema>>({
      mode: "all",
      resolver: zodResolver(formSchema),
      defaultValues: {
        contactType: contactTypes[0].id,
        name: "",
        email: "",
        message: "",
      },
    });

    const className = mcn([styles["contact-us-section"], restProps.className]);

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
      if (!form.formState.isValid) return;

      const { contactType: type, name, email, message } = values;
      const apiUri = "https://66c3d83bd057009ee9c1554a.mockapi.io/deri/dzr/api";

      try {
        const response = await fetch(`${apiUri}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            name,
            email,
            message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Thank you for your message");

          const yes = confirm(
            `Demo Mode: Would you like to view the message you just sent? You will be redirected to the mock API messages endpoint:\n${apiUri}/messages/${(data as { id: string }).id}`
          );

          if (yes) {
            window.location.href = `${apiUri}/messages/${(data as { id: string }).id}`;
          }

          return form.reset();
        }

        if (data === "Max number of elements reached for this resource!") {
          alert(
            "Message limit reached! Our database can only hold up to 100 messages :D"
          );
          form.reset();
          return;
        }

        alert("Failed to send message. Please try again.");
      } catch (error) {
        alert("Internal server error. Please try again later.");
        form.reset();
      }
    };

    return (
      <>
        <section {...{ ref, ...restProps, className }}>
          <div className={styles["contact-us-section__header"]}>
            <Heading level={2}>Contact Us</Heading>
            <Typography className={styles["contact-us-section__description"]}>
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </Typography>
          </div>
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              form.handleSubmit(handleSubmit)(e);
            }}
          >
            <Card
              variant="tertiary"
              className={styles["contact-us-section__container"]}
            >
              <div className={styles["contact-us-section__form"]}>
                <div className={styles["contact-us-section__radio-group"]}>
                  {contactTypes.map((type) => (
                    <div
                      key={type.id}
                      className={styles["contact-us-section__radio"]}
                    >
                      <input
                        {...form.register("contactType")}
                        className={styles["contact-us-section__radio-input"]}
                        type="radio"
                        id={type.id}
                        value={type.id}
                        onChange={() => {
                          form.setValue("contactType", type.id);
                          setContactTypeStateId(type.id);
                        }}
                        checked={contactTypeStateId === type.id}
                      />
                      <label
                        htmlFor={type.id}
                        className={styles["contact-us-section__custom-radio"]}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            form.setValue("contactType", type.id);
                            setContactTypeStateId(type.id);
                          }
                        }}
                        onClick={() => {
                          form.setValue("contactType", type.id);
                          setContactTypeStateId(type.id);
                        }}
                      />
                      <Typography
                        asChild
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <label htmlFor={type.id}>{type.label}</label>
                      </Typography>
                    </div>
                  ))}
                  {form.formState.errors.contactType && (
                    <Typography
                      className={styles["contact-us-section__error-message"]}
                    >
                      {form.formState.errors.contactType.message}
                    </Typography>
                  )}
                </div>
                <div className={styles["contact-us-section__input-container"]}>
                  <div className={styles["contact-us-section__input-group"]}>
                    <label
                      htmlFor="name"
                      className={styles["contact-us-section__input-label"]}
                    >
                      Name
                    </label>
                    <input
                      {...form.register("name")}
                      className={styles["contact-us-section__input"]}
                      type="text"
                      id="name"
                      placeholder="Name"
                    />
                    {form.formState.errors.name && (
                      <Typography
                        className={styles["contact-us-section__error-message"]}
                      >
                        {form.formState.errors.name.message}
                      </Typography>
                    )}
                  </div>
                  <div className={styles["contact-us-section__input-group"]}>
                    <label
                      htmlFor="email"
                      className={styles["contact-us-section__input-label"]}
                    >
                      Email*
                    </label>
                    <input
                      {...form.control.register("email")}
                      className={styles["contact-us-section__input"]}
                      type="text"
                      id="email"
                      placeholder="Email"
                      autoComplete="email"
                    />
                    {form.formState.errors.email && (
                      <Typography
                        className={styles["contact-us-section__error-message"]}
                      >
                        {form.formState.errors.email.message}
                      </Typography>
                    )}
                  </div>
                  <div className={styles["contact-us-section__input-group"]}>
                    <label
                      htmlFor="message"
                      className={styles["contact-us-section__input-label"]}
                    >
                      Message*
                    </label>
                    <textarea
                      {...form.register("message")}
                      className={styles["contact-us-section__input"]}
                      id="message"
                      rows={5}
                      placeholder="Message"
                    />
                    {form.formState.errors.message && (
                      <Typography
                        className={styles["contact-us-section__error-message"]}
                      >
                        {form.formState.errors.message.message}
                      </Typography>
                    )}
                  </div>
                </div>
                <Button
                  className={styles["contact-us-section__button-desktop"]}
                  type="submit"
                  variant="secondary"
                  disabled={
                    form.formState.isSubmitting || !form.formState.isValid
                  }
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
              <div className={styles["contact-us-section__illustration"]}>
                <Illustration />
              </div>
            </Card>
            <Button
              className={styles["contact-us-section__button-mobile"]}
              type="submit"
              variant="secondary"
              disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </section>
      </>
    );
  }
);

function Illustration() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="692"
      height="649"
      fill="none"
      viewBox="0 0 692 649"
    >
      <mask
        id="mask0_341_618"
        style={{ maskType: "alpha" }}
        width="651"
        height="649"
        x="41"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <mask
          id="path-1-outside-1_341_618"
          width="651"
          height="650"
          x="40.711"
          y="-0.5"
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M40.711 -0.5H691.711V649.5H40.711z"></path>
          <path d="M366.641 162.061L387.068.5l-.159 162.837L427.445 5.604l-20.428 161.561 60.007-151.514-40.536 157.894 78.519-142.902-60.166 151.514L540.756 50.26l-78.679 142.902L573.632 74.343 477.876 206.08l125.599-103.827-111.714 118.66 137.728-87.24L503.73 237.499l147.623-69.377-137.728 87.24 155.124-50.398-147.623 69.377 160.23-30.622-155.123 50.399 162.784-10.367-160.231 30.462L691.57 324.42l-162.784 10.208 160.231 30.462-162.784-10.207 155.123 50.238-160.23-30.462 147.623 69.377-155.124-50.398 137.728 87.24-147.623-69.377 125.759 103.827-137.728-87.4 111.714 118.819L477.876 442.76l95.756 131.897-111.555-118.819 78.679 142.742-95.915-131.896 60.166 151.513-78.519-142.742 40.536 157.734-60.007-151.513 20.428 161.72-40.536-157.893.159 162.997-20.427-161.721L346.213 648.5V485.503l-40.537 157.893 20.588-161.72-60.007 151.513 40.537-157.734-78.52 142.742 60.166-151.513-95.914 131.896 78.679-142.742L159.49 574.657l95.915-131.897-125.599 103.987L241.52 427.928l-137.728 87.4 125.759-103.827-147.623 69.377 137.728-87.24-155.123 50.398 147.622-69.377-160.23 30.462 155.123-50.238L44.264 365.09l160.231-30.462L41.711 324.42l162.784-10.207-160.23-30.462 162.783 10.367-155.123-50.399 160.23 30.622-147.622-69.377 155.123 50.398-137.728-87.24 147.623 69.377-125.759-103.826 137.728 87.24-111.714-118.66L255.405 206.08 159.49 74.343l111.715 118.819L192.526 50.26l95.914 131.897-60.166-151.514 78.52 142.902-40.537-157.894 60.007 151.514L305.676 5.604l40.537 157.733V.5l20.428 161.561z"></path>
        </mask>
        <path
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M366.641 162.061L387.068.5l-.159 162.837L427.445 5.604l-20.428 161.561 60.007-151.514-40.536 157.894 78.519-142.902-60.166 151.514L540.756 50.26l-78.679 142.902L573.632 74.343 477.876 206.08l125.599-103.827-111.714 118.66 137.728-87.24L503.73 237.499l147.623-69.377-137.728 87.24 155.124-50.398-147.623 69.377 160.23-30.622-155.123 50.399 162.784-10.367-160.231 30.462L691.57 324.42l-162.784 10.208 160.231 30.462-162.784-10.207 155.123 50.238-160.23-30.462 147.623 69.377-155.124-50.398 137.728 87.24-147.623-69.377 125.759 103.827-137.728-87.4 111.714 118.819L477.876 442.76l95.756 131.897-111.555-118.819 78.679 142.742-95.915-131.896 60.166 151.513-78.519-142.742 40.536 157.734-60.007-151.513 20.428 161.72-40.536-157.893.159 162.997-20.427-161.721L346.213 648.5V485.503l-40.537 157.893 20.588-161.72-60.007 151.513 40.537-157.734-78.52 142.742 60.166-151.513-95.914 131.896 78.679-142.742L159.49 574.657l95.915-131.897-125.599 103.987L241.52 427.928l-137.728 87.4 125.759-103.827-147.623 69.377 137.728-87.24-155.123 50.398 147.622-69.377-160.23 30.462 155.123-50.238L44.264 365.09l160.231-30.462L41.711 324.42l162.784-10.207-160.23-30.462 162.783 10.367-155.123-50.399 160.23 30.622-147.622-69.377 155.123 50.398-137.728-87.24 147.623 69.377-125.759-103.826 137.728 87.24-111.714-118.66L255.405 206.08 159.49 74.343l111.715 118.819L192.526 50.26l95.914 131.897-60.166-151.514 78.52 142.902-40.537-157.894 60.007 151.514L305.676 5.604l40.537 157.733V.5l20.428 161.561z"
          mask="url(#path-1-outside-1_341_618)"
        ></path>
      </mask>
      <g mask="url(#mask0_341_618)">
        <rect
          width="1152.83"
          height="702.852"
          x="-785.721"
          y="-37.617"
          fill="#000"
          rx="45"
        ></rect>
      </g>
      <path
        fill="#B9FF66"
        d="M95.715 470.596l45.707 24.904-45.707 25.104L70.71 566.21l-25.004-45.606L0 495.5l45.707-24.904 25.004-45.807 25.004 45.807z"
      ></path>
      <path
        fill="#191A23"
        d="M217.102 244.065l81.675 44.501-81.675 44.859-44.68 81.497-44.68-81.497-81.675-44.859 81.675-44.501 44.68-81.854 44.68 81.854z"
      ></path>
    </svg>
  );
}

export default ContactUsSection;
