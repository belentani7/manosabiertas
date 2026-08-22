'use client';

import { useSyncExternalStore } from 'react';
import {
  REMOTE_AI_CONSENT_EVENT,
  REMOTE_AI_CONSENT_KEY,
  readRemoteAIConsent,
  writeRemoteAIConsent,
} from '@/lib/remote-ai-consent';

function getSnapshot(): boolean {
  return typeof window !== 'undefined' && readRemoteAIConsent(window.localStorage);
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribe(listener: () => void): () => void {
  if (typeof window === 'undefined') return () => undefined;

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === REMOTE_AI_CONSENT_KEY) listener();
  };
  window.addEventListener('storage', handleStorage);
  window.addEventListener(REMOTE_AI_CONSENT_EVENT, listener);
  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(REMOTE_AI_CONSENT_EVENT, listener);
  };
}

function setRemoteAIConsent(granted: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    writeRemoteAIConsent(window.localStorage, granted);
    window.dispatchEvent(new Event(REMOTE_AI_CONSENT_EVENT));
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

export function useRemoteAIConsent() {
  const remoteAIConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { remoteAIConsent, setRemoteAIConsent };
}
