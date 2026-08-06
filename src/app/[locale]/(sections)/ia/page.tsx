import { Metadata } from 'next';
import { LearnAISection } from '@/components/manos-abiertas/learn-ai-section';

export const metadata: Metadata = {
  title: 'Aprende Inteligencia Artificial',
  description: '8 cursos gratuitos de IA: ChatGPT, Gemini, Copilot, Claude, DeepSeek, Qwen, Perplexity, Meta AI. Paso a paso, ejercicios prácticos, progreso guardado. Desde cero.',
  openGraph: {
    title: 'Aprende IA · Manos Abiertas',
    description: '8 cursos gratuitos de inteligencia artificial paso a paso para principiantes',
    type: 'website',
  },
};

export default function IAPage() {
  return <LearnAISection />;
}