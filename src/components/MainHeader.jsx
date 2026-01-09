import React, { useState } from 'react';
import { Menu, Home, ArrowLeft, Search, LogOut, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { UI_TEXT } from '../data';

export const MainHeader = ({ setMenuOpen, lang, toggleLang, theme = 'green' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  
  // Ensure lang is valid, fallback to 'es'
  const currentLang = (lang === 'es' || lang === 'ro') ? lang : 'es';
  const t = UI_TEXT[currentLang];
  const isEs = currentLang === 'es';

  return (
    <div className={`shadow-md sticky top-0 z-30 w-full font-body transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-800' : 'bg-brand-primary'}`}>
      {/* Top Row: Logo & Lang - BRAND BACKGROUND */}
      <div className={`flex justify-between items-center px-4 py-4 border-b transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-brand-primary border-white/10'}`}>
        {/* New Logo Unified - Balanced Size & Left Aligned */}
        <img 
          src="/iconos/logo_v3.png" 
          alt="Enfermería App" 
          className="h-[77px] object-contain drop-shadow-sm -ml-2" 
        />

        {/* Right Actions: Vertical Stack (Search Top, Lang Bottom) */}
        <div className="flex flex-col items-end justify-center gap-2 h-[77px]">
            {/* Search - Top */}
            <button 
                onClick={() => navigate('/search')}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white shadow-sm active:scale-95 transition-all border border-white/10"
            >
                <Search size={18} strokeWidth={2} />
            </button>

            {/* Language - Bottom */}
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-all uppercase tracking-wide bg-white text-brand-primary hover:bg-slate-100"
            >
              <Globe size={14} />
              {isEs ? "Es" : "Ro"}
            </button>
        </div>
      </div>

      {/* Bottom Row: Navigation & User (Unified BG) */}
      <div className={`flex items-center justify-between px-4 py-3 transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-800' : 'bg-brand-primary'}`}>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMenuOpen(true)}
              className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white backdrop-blur-sm"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => navigate('/')}
              className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white backdrop-blur-sm"
            >
              <Home size={24} strokeWidth={1.5} />
            </button>
            {location.pathname !== '/' && (
              <button 
                onClick={() => navigate(-1)}
                className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white backdrop-blur-sm"
              >
                <ArrowLeft size={24} strokeWidth={1.5} />
              </button>
            )}
          </div>
          
          {/* User Info Display */}
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-normal text-base tracking-wider">
               {user ? (isEs ? "Hola," : "Bună,") : ''}
            </span>
            <span className="text-white font-normal text-lg tracking-wide">
               {user ? (user.isGuest ? t.guest : user.username) : ''}
            </span>
          </div>
        </div>
    </div>
  );
};
