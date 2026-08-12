export const REMOTE_AI_CONSENT_KEY = 'manos-abiertas-remote-ai-consent-v1';
export const REMOTE_AI_CONSENT_EVENT = 'manos-abiertas:remote-ai-consent';

type ReadableStorage = Pick<Storage, 'getItem'>;
type WritableStorage = Pick<Storage, 'setItem'>;

export function parseRemoteAIConsent(value: string | null): boolean {
  return value === 'granted';
}

export function readRemoteAIConsent(storage?: ReadableStorage): boolean {
  if (!storage) return false;
  try {
    return parseRemoteAIConsent(storage.getItem(REMOTE_AI_CONSENT_KEY));
  } catch {
    return false;
  }
}

export function writeRemoteAIConsent(storage: WritableStorage, granted: boolean): void {
  storage.setItem(REMOTE_AI_CONSENT_KEY, granted ? 'granted' : 'denied');
}

export function withRemoteAIConsent<T extends Record<string, unknown>>(
  payload: T,
  granted: boolean,
): T & { consentToRemoteAI: boolean } {
  return { ...payload, consentToRemoteAI: granted };
}
