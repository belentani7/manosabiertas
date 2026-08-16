export const COURSE_PROGRESS_STORAGE_KEY = 'manos-abiertas-course-progress';
export const SIMULATOR_PROGRESS_STORAGE_KEY = 'manos-abiertas-simulator-progress';
export const WORD_DRAFT_STORAGE_KEY = 'manos-abiertas-word-draft';
export const DIDACTIC_LOCAL_STATE_VERSION = 1;

export type CourseProgressValue = 'started' | 'completed';
export type CourseProgressState = Record<string, CourseProgressValue>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function parseJson(value: string | null): unknown {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function parseCourseProgress(
  value: string | null,
  allowedIds: ReadonlySet<string>,
): CourseProgressState {
  const parsed = parseJson(value);
  if (!isRecord(parsed)) return {};
  const candidate = parsed.version === DIDACTIC_LOCAL_STATE_VERSION ? parsed.progress : parsed;
  if (!isRecord(candidate)) return {};
  const progress: CourseProgressState = {};
  for (const [id, status] of Object.entries(candidate)) {
    if (allowedIds.has(id) && (status === 'started' || status === 'completed')) {
      progress[id] = status;
    }
  }
  return progress;
}

export function serializeCourseProgress(progress: CourseProgressState) {
  return JSON.stringify({ version: DIDACTIC_LOCAL_STATE_VERSION, progress });
}

export function parseSimulatorProgress(
  value: string | null,
  allowedIds: ReadonlySet<string>,
) {
  const parsed = parseJson(value);
  const candidate = Array.isArray(parsed)
    ? parsed
    : isRecord(parsed) && parsed.version === DIDACTIC_LOCAL_STATE_VERSION
      ? parsed.completed
      : [];
  if (!Array.isArray(candidate)) return [];
  return [...new Set(candidate.filter((id): id is string => typeof id === 'string' && allowedIds.has(id)))];
}

export function serializeSimulatorProgress(completed: readonly string[]) {
  return JSON.stringify({ version: DIDACTIC_LOCAL_STATE_VERSION, completed });
}

export function parseWordDraft(value: string | null, maxLength = 20_000) {
  if (!value) return '';
  const parsed = parseJson(value);
  if (
    isRecord(parsed)
    && parsed.version === DIDACTIC_LOCAL_STATE_VERSION
    && typeof parsed.text === 'string'
  ) {
    return parsed.text.slice(0, maxLength);
  }
  return value.slice(0, maxLength);
}

export function serializeWordDraft(text: string, maxLength = 20_000) {
  return JSON.stringify({
    version: DIDACTIC_LOCAL_STATE_VERSION,
    text: text.slice(0, maxLength),
  });
}
