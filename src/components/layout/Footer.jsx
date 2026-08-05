import { useState } from "react";
import { Link } from "react-router";

import logoFull from "@/assets/logo-full.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  brandData,
  companyLinks,
  resourceLinks,
  contactInfo,
  socialLinks,
} from "@/data/footerData";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    setEmail("");
  };

  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Brand */}

        <div className="mb-14 border-b border-slate-800 pb-10">
          <Link to="/">
            <img
  src={logoFull}
  alt="OneConnect"
  className="h-16 w-auto object-contain"
/>
          </Link>

          <p className="mt-6 max-w-lg leading-8 text-slate-400">
            {brandData.description}
          </p>
        </div>

        {/* Main Footer */}

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Subscribe to receive product updates and announcements.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
              />

              <Button
                type="submit"
                className="w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.value}
                    className="flex items-start gap-3"
                  >
                    <Icon className="mt-1 h-5 w-5 text-blue-500" />

                    <span className="text-slate-400">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} OneConnect. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-900 p-3 text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;