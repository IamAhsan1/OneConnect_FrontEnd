import { useEffect, useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      requestAnimationFrame(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Future API Integration
    // await api.post("/contact", formData);
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className="bg-slate-50 py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          {/* Heading */}

          <div className="mb-10 text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Contact Form
            </span>

            <h2
              id="contact-form-title"
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Send Us a Message
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="fullName">Full Name</Label>

                <Input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>

                <Input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone Number</Label>

                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="company">
                  Company <span className="text-slate-400">(Optional)</span>
                </Label>

                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>

              <Input
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>

              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] md:w-auto"
            >
              <Send
                aria-hidden="true"
                className="mr-2 h-5 w-5"
              />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;