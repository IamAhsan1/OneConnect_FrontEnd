import React, { useState } from "react";
import { Outlet, Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const PublicLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLink =
    "relative text-sm font-semibold text-slate-700 transition-all duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-10">
              <Link to="/" onClick={closeMenu}>
                <img
                  src={logoFull}
                  alt="OneConnect"
                  className="h-10 w-auto transition-transform duration-300 hover:scale-105 sm:h-12 lg:h-14"
                />
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className={navLink}>Find Professionals</Link>
                <Link to="/" className={navLink}>How it Works</Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-3">
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
                <Link to="/register/customer">Register</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden overflow-hidden border-t border-slate-200 py-5 animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-5">
                <Link to="/" onClick={closeMenu} className="font-semibold text-slate-700 hover:text-blue-600">Find Professionals</Link>
                <Link to="/" onClick={closeMenu} className="font-semibold text-slate-700 hover:text-blue-600">How it Works</Link>

                <div className="pt-2 flex flex-col gap-3">
                  <Button asChild variant="outline" className="w-full rounded-xl">
                    <Link to="/login" onClick={closeMenu}>Login</Link>
                  </Button>

                  <Button asChild className="w-full rounded-xl shadow-lg">
                    <Link to="/register/customer" onClick={closeMenu}>Register</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-auto border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <img src={logoFull} alt="OneConnect" className="h-10 w-auto opacity-90" />

            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} OneConnect Platform. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm font-medium">
              <Link to="/" className="text-slate-600 hover:text-blue-600">Privacy</Link>
              <Link to="/" className="text-slate-600 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
