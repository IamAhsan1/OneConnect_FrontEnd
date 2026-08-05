import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";

import logoFull from "@/assets/logo-full.png";

const PublicLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLink = ({ isActive }) =>
    `relative text-sm font-semibold transition-all duration-300
    ${
      isActive
        ? "text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600"
        : "text-slate-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full"
    }`;

  const mobileNavLink = ({ isActive }) =>
    `font-semibold transition-colors duration-300 ${
      isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <div className="flex items-center gap-10">
              <Link to="/" onClick={closeMenu}>
                <img
                  src={logoFull}
                  alt="OneConnect"
                  className="h-10 w-auto transition-transform duration-300 hover:scale-105 sm:h-12 lg:h-14"
                />
              </Link>

              {/* Desktop Navigation */}

              <nav className="hidden items-center gap-8 md:flex">
                <NavLink
                  to="/"
                  end
                  className={navLink}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  className={navLink}
                >
                  Find Professionals
                </NavLink>

                <NavLink
                  to="/about"
                  className={navLink}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  className={navLink}
                >
                  Contact Us
                </NavLink>
              </nav>
            </div>

            {/* Desktop Actions */}

            <div className="hidden items-center gap-3 md:flex">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-blue-200 px-6 transition-all hover:border-blue-500 hover:bg-blue-50"
              >
                <Link to="/login">Login</Link>
              </Button>

              <Button
                asChild
                className="rounded-full px-6 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Link to="/register/customer">
                  Register
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}

          {mobileMenuOpen && (
            <div className="animate-in slide-in-from-top-2 fade-in overflow-hidden border-t border-slate-200 py-5 duration-200 md:hidden">
              <nav className="flex flex-col gap-5">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={mobileNavLink}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  onClick={closeMenu}
                  className={mobileNavLink}
                >
                  Find Professionals
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={mobileNavLink}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={mobileNavLink}
                >
                  Contact Us
                </NavLink>

                <div className="flex flex-col gap-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl"
                  >
                    <Link
                      to="/login"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="w-full rounded-xl shadow-lg"
                  >
                    <Link
                      to="/register/customer"
                      onClick={closeMenu}
                    >
                      Register
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main */}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;