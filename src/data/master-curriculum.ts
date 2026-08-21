import a1 from './curriculum-master-es/A1.json';
import a2 from './curriculum-master-es/A2.json';
import a3 from './curriculum-master-es/A3.json';
import a4 from './curriculum-master-es/A4.json';
import a5 from './curriculum-master-es/A5.json';
import a6 from './curriculum-master-es/A6.json';
import a7 from './curriculum-master-es/A7.json';
import a8 from './curriculum-master-es/A8.json';
import a9 from './curriculum-master-es/A9.json';
import a10 from './curriculum-master-es/A10.json';
import { LANGUAGES, type LanguageCode } from '@/i18n/languages';

export type MasterLesson = {
  id: string;
  title: string;
  level: number;
  focus: string;
  estimatedMinutes: number;
  objective: string;
  explanation: string;
  steps: string[];
  guidedPractice: string;
  independentPractice: string;
  evidenceOfLearning: string;
  commonErrors: string[];
  accessibility: string;
  safetyNote: string;
  sourceRequirement: string;
  status?: 'machine-generated-pending-human-review' | 'human-reviewed';
};

export type MasterArea = {
  areaId: string;
  language: 'es';
  areaName: string;
  lessons: MasterLesson[];
  status: 'machine-generated-pending-human-review' | 'human-reviewed';
};

const AREAS = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10] as unknown as MasterArea[];

export const MASTER_CURRICULUM: MasterArea[] = AREAS;
export const MASTER_LESSONS: MasterLesson[] = AREAS.flatMap((area) => area.lessons);
export const MASTER_LESSON_COUNT = MASTER_LESSONS.length;
export const MASTER_AREA_COUNT = MASTER_CURRICULUM.length;
export const LOCALIZED_DRAFT_LANGUAGES = ['ar', 'en', 'fr', 'ro', 'zh'] as const;

export const CURRICULUM_LANGUAGE_STATUS: Record<LanguageCode, 'master-available' | 'translation-pending-human-review'> =
  Object.fromEntries(
    LANGUAGES.map(({ code }) => [code, code === 'es' ? 'master-available' : 'translation-pending-human-review']),
  ) as Record<LanguageCode, 'master-available' | 'translation-pending-human-review'>;

export function getMasterLessons(areaId?: string, level?: number): MasterLesson[] {
  return MASTER_LESSONS.filter((lesson) => (!areaId || lesson.id.startsWith(`${areaId}-`)) && (level === undefined || lesson.level === level));
}

export function getMasterCurriculumStats() {
  const byLevel = MASTER_LESSONS.reduce<Record<number, number>>((acc, lesson) => {
    acc[lesson.level] = (acc[lesson.level] ?? 0) + 1;
    return acc;
  }, {});
  return {
    areas: MASTER_AREA_COUNT,
    lessons: MASTER_LESSON_COUNT,
    languages: LANGUAGES.length,
    localizedDraftLanguages: LOCALIZED_DRAFT_LANGUAGES.length,
    humanReviewedCurriculumLanguages: 1,
    byLevel,
    publicationStatus: 'machine-generated-pending-human-review' as const,
  };
}
