import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '高1・高2', href: isHome ? '#roadmap' : '/#roadmap' },
    { label: '学習サイクル', href: '/study-management' },
    { label: '受験コラム', href: '/columns' },
    { label: '料金', href: isHome ? '#pricing' : '/#pricing' },
  ];

  const preparationLinks = [
    { label: '一般選抜', href: '/keio-ippan' },
    { label: 'FIT入試', href: '/keio-fit' },
    { label: 'SFC総合型', href: '/keio-sfc' },
    { label: '指定校推薦', href: '/shiteiko' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white font-black text-xl shadow-md shadow-slate-950/20 group-hover:scale-[1.05] transition-transform duration-300 border border-slate-800">
              <span className="drop-shadow-sm font-serif">慶</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-950 font-display group-hover:text-black transition-colors">
                  慶應ROUTE
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block tracking-wide">
                一般も、推薦も。慶應合格へのルートを、一つに絞らない。
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {/* Dropdown for 慶應受験対策 */}
            <div 
              className="relative group py-1"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#a07c3f] transition-colors relative">
                慶應受験対策
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b38f4f] transition-all duration-200 group-hover:w-full" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 transition-all duration-200 origin-top-left ${
                  dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                {preparationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#a07c3f] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#a07c3f] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b38f4f] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#a07c3f] hover:bg-[#594226] shadow-md shadow-[#a07c3f]/20 transition-all hover:shadow-lg active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>無料相談</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
            aria-label="メニューを開く"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/60 backdrop-blur-sm lg:hidden pt-20">
          <div className="bg-white m-4 rounded-3xl p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-3 pb-6 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">慶應受験対策</span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {preparationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">メニュー</span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#a07c3f] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#a07c3f] hover:bg-[#594226] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#a07c3f]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>無料受験戦略相談を申し込む</span>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#b38f4f]" />
              <span>無理な勧誘や有料契約への自動更新は一切ありません</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
