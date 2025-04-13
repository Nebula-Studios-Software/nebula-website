"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button, Checkbox, Form, Input, Link, Textarea } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

import CheckmarkAnimation from "./CheckmarkAnimation";

interface ContactSectionProps {
  dict: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      terms: string;
      privacy: string;
      send: string;
      success: {
        title: string;
        message: string;
      };
    };
    info: {
      email: string;
    };
  };
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [termsChecked, setTermsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsChecked) return;

    // Simuliamo l'invio del form

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.title}
              </h2>
              <p className="text-muted-foreground mb-8">{dict.subtitle}</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground/80">
                      {dict.info.email}
                    </h4>
                    <a
                      className="text-primary-400 hover:underline"
                      href="mailto:hello@nebulastudios.dev"
                    >
                      hello@nebulastudios.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground/80">
                      Phone
                    </h4>
                    <a
                      className="text-primary-400 hover:underline"
                      href="tel:+15551234567"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground/80">
                      Location
                    </h4>
                    <p className="text-foreground">
                      123 Cosmic Way, San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-primary-950/50">
              <AnimatePresence mode="wait">
                {!showSuccess ? (
                  <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
                        <Input
                          isClearable
                          isRequired
                          className="w-full"
                          classNames={{
                            base: "w-full",
                            input: "w-full",
                            inputWrapper:
                              "w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400",
                          }}
                          label={dict.form.name}
                          labelPlacement="outside"
                          name="name"
                          placeholder={dict.form.name}
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <Input
                          isClearable
                          isRequired
                          className="w-full"
                          classNames={{
                            base: "w-full",
                            input: "w-full",
                            inputWrapper:
                              "w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400",
                          }}
                          label="Email"
                          labelPlacement="outside"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <Input
                        fullWidth
                        isClearable
                        isRequired
                        classNames={{
                          inputWrapper:
                            "w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400",
                        }}
                        label="Subject"
                        labelPlacement="outside"
                        name="subject"
                        placeholder="Project Inquiry"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />

                      <Textarea
                        isClearable
                        isRequired
                        classNames={{
                          inputWrapper:
                            "w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400",
                        }}
                        label="Message"
                        labelPlacement="outside"
                        name="message"
                        placeholder="Tell us about your project"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                      />

                      <Checkbox
                        isRequired
                        id="terms"
                        onChange={(e) => {
                          setTermsChecked(e.target.checked);
                        }}
                      >
                        {dict.form.terms}{" "}
                        <Link
                          className="text-primary-400 hover:underline"
                          href="/privacy"
                        >
                          {dict.form.privacy}
                        </Link>
                      </Checkbox>

                      <Button
                        fullWidth
                        color="primary"
                        isDisabled={!termsChecked}
                        startContent={<Mail size={16} />}
                        type="submit"
                        variant="shadow"
                      >
                        {dict.form.send}
                      </Button>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckmarkAnimation
                      message={dict.form.success.message}
                      title={dict.form.success.title}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
