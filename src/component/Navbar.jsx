import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { logo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Beranda");
  const navigate = useNavigate();
  const location = useLocation();

  // aktif
  useEffect(() => {
    const savedActiveItem = sessionStorage.getItem("activeNavItem");
    if (savedActiveItem) {
      setActiveItem(savedActiveItem);
    }
  }, []);
  useEffect(() => {
    const path = location.pathname;
    const currentPath =
      path === "/"
        ? "Beranda"
        : path === "/servis"
        ? "Servis"
        : path === "/proyek"
        ? "Proyek"
        : path === "/kontak"
        ? "Kontak"
        : path === "/karir"
        ? "Karir"
        : "Beranda";

    setActiveItem(currentPath);
    sessionStorage.setItem("activeNavItem", currentPath);
  }, [location]);

  //scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    sessionStorage.setItem("activeNavItem", itemName);
    closeMenu();
  };
  const navItems = [
    { name: "Beranda", to: "/" },
    { name: "Servis", to: "/servis" },
    { name: "Proyek", to: "/proyek" },
    { name: "Kontak", to: "/kontak" },
    { name: "Karir", to: "/karir" },
  ];
  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white py-2 shadow-md" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            className={cn(
              "sm:h-8 sm:w-8 w-5 h-5",
              isScrolled ? "text-primary" : "text-white"
            )}
            src={logo}
          />
          <span
            className={cn(
              "sm:text-xl text-sm font-bold",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            Citra Persada Infrastruktur
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className={cn(
                    "relative text-base font-medium transition-colors hover:text-rose-600 ",
                    isScrolled ? "text-gray-800" : "text-white",
                    activeItem === item.name && "text-primary",
                    // Add active indicator with red bottom border
                    activeItem === item.name &&
                      "after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:w-full after:bg-red-700 "
                  )}
                  onClick={() => handleItemClick(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block ">
          <button
            className={cn(
              "transition-colors cursor-pointer",
              isScrolled
                ? "bg-primary text-white   px-5 py-1 rounded"
                : "bg-white text-sky-700  px-5 py-1 rounded "
            )}
            onClick={() => navigate("/kontak")}
          >
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <X
              className={
                isScrolled ? "h-6 w-6 text-gray-800" : "h-6 w-6 text-white"
              }
            />
          ) : (
            <Menu
              className={
                isScrolled
                  ? "h-6 w-6 text-gray-800"
                  : "h-6 w-6 text-slate-400 bg-transparent"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 top-0 z-40 bg-white transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <img
                className={cn(
                  "sm:h-8 sm:w-8 w-5 h-5",
                  isScrolled ? "text-primary" : "text-white"
                )}
                src={logo}
              />
              <span className="sm:text-xl text-sm font-bold text-primary">
                Citra Persada Infrastruktur
              </span>
            </Link>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <nav>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className={cn(
                      "flex items-center justify-between text-lg font-medium transition-colors hover:text-primary",
                      activeItem === item.name
                        ? "text-primary"
                        : "text-gray-800",
                      // Add active indicator with red left border for mobile
                      activeItem === item.name &&
                        "border-l-4 border-red-600 pl-2"
                    )}
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.name}
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
