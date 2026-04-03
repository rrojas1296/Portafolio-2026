"use client";
import { MailIcon, PhoneIcon, RocketIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import { contactControls, contactSchema } from "@/schemas/contactSchema";
import Control from "../Control/Control";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";

const ContactSection = () => {
  const t = useTranslations("Contact");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  console.log({
    form: watch(),
  });

  const onSubmit = handleSubmit(
    (data) => {
      console.log({ data });
    },
    (err) => {
      console.log({ err });
    },
  );
  return (
    <section id="contact" className="w-10/12 max-w-7xl mx-auto mt-35">
      <h1 className="font-bold text-3xl text-text-1">{t("title")}</h1>
      <h2 className="text-text-2 text-sm mt-1">{t("subtitle")}</h2>

      <div className="mt-10 lg:flex lg:justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <MailIcon className="text-text-1" />
            <p className="text-sm text-text-1">{t("info.email")}</p>
          </div>
          <div className="flex gap-3 items-center">
            <PhoneIcon className="text-text-1" />
            <p className="text-sm text-text-1">{t("info.phone")}</p>
          </div>
          <div className="flex gap-3">
            <Link href="" target="_blank">
              <GithubIcon className="h-6 w-6 text-text-1" />
            </Link>
            <Link href="" target="_blank">
              <LinkedinIcon className="h-6 w-6 text-text-1" />
            </Link>
            <Link href="" target="_blank">
              <InstagramIcon className="h-6 w-6 text-text-1" />
            </Link>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 mt-10 lg:mt-0 lg:grid-cols-2 gap-y-3 gap-x-8 lg:w-8/12"
        >
          {contactControls.map(
            ({ name, label, type, placeholder, className }) => {
              const error = errors[name]?.message || "";
              return (
                <Control
                  key={name}
                  label={t(label)}
                  placeholder={t(placeholder)}
                  error={error && t(error)}
                  type={type}
                  className={className}
                  control={control}
                  {...register(name)}
                />
              );
            },
          )}
          <Button className="lg:col-span-2">
            {t("form.submitButton")}
            <RocketIcon className="text-text-3 " />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
