'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { LanguageCode } from '@/i18n/languages';

export type SectionId =
  | 'home'
  | 'learn-ai'
  | 'cv'
  | 'office'
  | 'resources'
  | 'rights'
  | 'contacts'
  | 'tools'
  | 'events'
  | 'courses'
  | 'community';

interface AppState {
  // Language
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;

  // Navigation
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;

  // UI
  languageMenuOpen: boolean;
  setLanguageMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  // Accessibility
  readingMode: 'normal' | 'large' | 'high-contrast' | 'study';
  setReadingMode: (mode: 'normal' | 'large' | 'high-contrast' | 'study') => void;

  // Study mode tools
  pomodoroActive: boolean;
  setPomodoroActive: (active: boolean) => void;
  focusMode: boolean;
  setFocusMode: (active: boolean) => void;
}

// Map a hash fragment to a section id. Returns undefined for unknown/empty hashes.
export function sectionFromHash(hash: string): SectionId | undefined {
  const clean = hash.replace(/^#\/?/, '');
  const valid: SectionId[] = [
    'home', 'learn-ai', 'cv', 'office', 'resources', 'rights',
    'contacts', 'tools', 'events', 'courses', 'community',
  ];
  return (valid as string[]).includes(clean) ? (clean as SectionId) : undefined;
}

// Map a section id to its hash fragment.
export function hashFromSection(section: SectionId): string {
  return `#/${section}`;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'es',
      setLanguage: (lang) => set({ language: lang }),
      activeSection: 'home',
      setActiveSection: (section) => {
        set({ activeSection: section });
        if (typeof window !== 'undefined') {
          // Keep the URL in sync for deep-linking (ignore the home default).
          const target = hashFromSection(section);
          if (window.location.hash !== target) {
            window.history.replaceState(null, '', target);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      },
      languageMenuOpen: false,
      setLanguageMenuOpen: (open) => set({ languageMenuOpen: open }),
      searchQuery: '',
      setSearchQuery: (q) => set({ searchQuery: q }),
      readingMode: 'normal',
      setReadingMode: (mode) => set({ readingMode: mode }),
      pomodoroActive: false,
      setPomodoroActive: (active) => set({ pomodoroActive: active }),
      focusMode: false,
      setFocusMode: (active) => set({ focusMode: active }),
    }),
    {
      name: 'manos-abiertas-store',
      partialize: (state) => ({
        language: state.language,
        activeSection: state.activeSection,
        readingMode: state.readingMode,
      }),
    }
  )
);
