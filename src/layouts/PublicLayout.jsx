import React, { useState } from "react";
import { Outlet, Link } from "react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const PublicLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo + Desktop Navigation */}
            <div className="flex items-center gap-8">
              <Link to="/" onClick={closeMenu} className="flex items-center">
                <img
                  src={logoFull}
                  alt="OneConnect"
                  className="h-10 w-auto object-contain sm:h-12 lg:h-14"
                />
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link
                  to="/"
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600"
                >
                  Find Professionals
                </Link>

                <Link
                  to="/"
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600"
                >
                  How it Works
                </Link>
              </nav>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>

              <Button asChild>
                <Link to="/register/customer">Register</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
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
            <div className="border-t bg-white py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600"
                >
                  Find Professionals
                </Link>

                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600"
                >
                  How it Works
                </Link>

                <div className="mt-2 flex flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link to="/login" onClick={closeMenu}>
                      Login
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="w-full"
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

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} OneConnect Platform. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;