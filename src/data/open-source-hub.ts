// Manos Abiertas - Open Source Learning Hub
// Curated GitHub repositories and free APIs for self-learning
// Extracted from uploaded content and expanded

export interface GitHubRepo {
  id: string;
  name: string;
  owner: string;
  url: string;
  description: string;
  category: RepoCategory;
  language: string;
  stars: string; // approximate
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  hasTutorial: boolean;
}

export type RepoCategory =
  | 'ai-ml' | 'web-dev' | 'python' | 'javascript'
  | 'data-science' | 'devops' | 'mobile' | 'game-dev'
  | 'security' | 'design' | 'education' | 'tools'
  | 'voice-tts' | 'voice-clone' | 'speech-recognition'
  | 'image-gen' | 'image-edit' | 'video-gen' | 'video-edit'
  | 'audio-music' | 'llm-local' | 'oss-software';

export interface FreeAPI {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  auth: 'none' | 'apiKey' | 'oauth';
  free: boolean;
  rateLimit?: string;
}

export const REPO_CATEGORIES: { value: RepoCategory; label: string; emoji: string; color: string }[] = [
  { value: 'ai-ml', label: 'IA y Machine Learning', emoji: '🤖', color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300' },
  { value: 'web-dev', label: 'Desarrollo Web', emoji: '🌐', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' },
  { value: 'python', label: 'Python', emoji: '🐍', color: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300' },
  { value: 'javascript', label: 'JavaScript', emoji: '🟨', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300' },
  { value: 'data-science', label: 'Ciencia de Datos', emoji: '📊', color: 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300' },
  { value: 'devops', label: 'DevOps', emoji: '⚙️', color: 'bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300' },
  { value: 'mobile', label: 'Móvil', emoji: '📱', color: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300' },
  { value: 'game-dev', label: 'Videojuegos', emoji: '🎮', color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' },
  { value: 'security', label: 'Ciberseguridad', emoji: '🛡️', color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' },
  { value: 'design', label: 'Diseño', emoji: '🎨', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  { value: 'education', label: 'Educación', emoji: '🎓', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' },
  { value: 'tools', label: 'Herramientas', emoji: '🔧', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300' },
  { value: 'voice-tts', label: 'Voz: texto a voz', emoji: '🗣️', color: 'bg-lime-100 text-lime-700 dark:bg-lime-950 dark:text-lime-300' },
  { value: 'voice-clone', label: 'Voz: clonación', emoji: '🎙️', color: 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300' },
  { value: 'speech-recognition', label: 'Voz: reconocimiento', emoji: '👂', color: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300' },
  { value: 'image-gen', label: 'Imagen: generación', emoji: '🖼️', color: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300' },
  { value: 'image-edit', label: 'Imagen: edición', emoji: '✂️', color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300' },
  { value: 'video-gen', label: 'Video: generación', emoji: '🎬', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300' },
  { value: 'video-edit', label: 'Video: edición', emoji: '🎞️', color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' },
  { value: 'audio-music', label: 'Audio y música', emoji: '🎵', color: 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300' },
  { value: 'llm-local', label: 'LLM locales', emoji: '🧠', color: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300' },
  { value: 'oss-software', label: 'Software libre esencial', emoji: '💿', color: 'bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300' },
];

export const GITHUB_REPOS: GitHubRepo[] = [
  // AI & ML
  { id: 'gh-1', name: 'freeCodeCamp', owner: 'freeCodeCamp', url: 'https://github.com/freeCodeCamp/freeCodeCamp', description: 'Curso completo gratuito de programación web, JS, Python y más. Con certificación.', category: 'education', language: 'JavaScript', stars: '400k+', difficulty: 'beginner', topics: ['Web Dev', 'JavaScript', 'Python', 'Responsive Design'], hasTutorial: true },
  { id: 'gh-2', name: 'ML-For-Beginners', owner: 'Microsoft', url: 'https://github.com/microsoft/ML-For-Beginners', description: 'Curso de 12 semanas de Machine Learning de Microsoft. 26 lecciones con ejercicios.', category: 'ai-ml', language: 'Python', stars: '65k+', difficulty: 'beginner', topics: ['ML', 'Scikit-learn', 'Classification', 'Clustering'], hasTutorial: true },
  { id: 'gh-3', name: 'AI-For-Beginners', owner: 'Microsoft', url: 'https://github.com/microsoft/AI-For-Beginners', description: 'Curso de IA de 12 semanas. Redes neuronales, visión por computador, NLP.', category: 'ai-ml', language: 'Python', stars: '30k+', difficulty: 'intermediate', topics: ['IA', 'Neural Networks', 'Computer Vision', 'NLP'], hasTutorial: true },
  { id: 'gh-4', name: 'Data-Science-For-Beginners', owner: 'Microsoft', url: 'https://github.com/microsoft/Data-Science-For-Beginners', description: 'Curso de ciencia de datos de 10 semanas. Pandas, visualización, ética.', category: 'data-science', language: 'Python', stars: '25k+', difficulty: 'beginner', topics: ['Data Science', 'Pandas', 'Visualization'], hasTutorial: true },
  { id: 'gh-5', name: 'Web-Dev-For-Beginners', owner: 'Microsoft', url: 'https://github.com/microsoft/Web-Dev-For-Beginners', description: 'Curso de desarrollo web de 12 semanas. HTML, CSS, JavaScript.', category: 'web-dev', language: 'JavaScript', stars: '80k+', difficulty: 'beginner', topics: ['HTML', 'CSS', 'JavaScript', 'Accessibility'], hasTutorial: true },
  { id: 'gh-6', name: 'awesome-chatgpt-prompts', owner: 'f', url: 'https://github.com/f/awesome-chatgpt-prompts', description: 'Colección de prompts para ChatGPT. Más de 100 categorías de prompts.', category: 'ai-ml', language: 'Markdown', stars: '110k+', difficulty: 'beginner', topics: ['ChatGPT', 'Prompts', 'Prompt Engineering'], hasTutorial: false },
  { id: 'gh-7', name: 'awesome-ai-tools', owner: 'mahseema', url: 'https://github.com/mahseema/awesome-ai-tools', description: 'Lista completa de herramientas de IA por categoría. 500+ herramientas.', category: 'ai-ml', language: 'Markdown', stars: '15k+', difficulty: 'beginner', topics: ['AI Tools', 'LLM', 'Image Gen', 'Automation'], hasTutorial: false },
  { id: 'gh-8', name: 'system-design-primer', owner: 'donnemartin', url: 'https://github.com/donnemartin/system-design-primer', description: 'Aprende diseño de sistemas a gran escala. Preparación para entrevistas técnicas.', category: 'education', language: 'Python', stars: '260k+', difficulty: 'advanced', topics: ['System Design', 'Scalability', 'Architecture'], hasTutorial: true },
  { id: 'gh-9', name: 'coding-interview-university', owner: 'jwasham', url: 'https://github.com/jwasham/coding-interview-university', description: 'Plan completo gratuito para prepararte entrevistas técnicas en Google, Amazon, etc.', category: 'education', language: 'Multiple', stars: '300k+', difficulty: 'advanced', topics: ['Algorithms', 'Data Structures', 'Interviews'], hasTutorial: true },
  { id: 'gh-10', name: 'the-art-of-command-line', owner: 'jlevy', url: 'https://github.com/jlevy/the-art-of-command-line', description: 'Domina la línea de comandos en Linux/Mac/Windows.', category: 'tools', language: 'Markdown', stars: '150k+', difficulty: 'intermediate', topics: ['Terminal', 'Bash', 'Command Line'], hasTutorial: true },

  // Python
  { id: 'gh-11', name: 'Python', owner: 'TheAlgorithms', url: 'https://github.com/TheAlgorithms/Python', description: 'Todos los algoritmos implementados en Python. Ejemplos comentados.', category: 'python', language: 'Python', stars: '180k+', difficulty: 'intermediate', topics: ['Algorithms', 'Python', 'Data Structures'], hasTutorial: false },
  { id: 'gh-12', name: 'project-based-learning', owner: 'practical-tutorials', url: 'https://github.com/practical-tutorials/project-based-learning', description: 'Lista de tutoriales basados en proyectos. Aprende construyendo.', category: 'education', language: 'Multiple', stars: '170k+', difficulty: 'intermediate', topics: ['Projects', 'Programming', 'Tutorials'], hasTutorial: true },
  { id: 'gh-13', name: 'build-your-own-x', owner: 'danistefanovic', url: 'https://github.com/danistefanovic/build-your-own-x', description: 'Aprende construyendo: crea tu propio tecnología desde cero.', category: 'education', language: 'Multiple', stars: '280k+', difficulty: 'advanced', topics: ['DIY', 'From Scratch', 'Programming'], hasTutorial: true },
  { id: 'gh-14', name: 'public-apis', owner: 'public-apis', url: 'https://github.com/public-apis/public-apis', description: 'Lista de APIs públicas gratuitas para tus proyectos. 1400+ APIs.', category: 'tools', language: 'Markdown', stars: '300k+', difficulty: 'beginner', topics: ['APIs', 'Free', 'Open Data'], hasTutorial: false },
  { id: 'gh-15', name: 'free-programming-books', owner: 'EbookFoundation', url: 'https://github.com/EbookFoundation/free-programming-books', description: 'Miles de libros de programación gratis en español e inglés.', category: 'education', language: 'Multiple', stars: '330k+', difficulty: 'beginner', topics: ['Books', 'Free', 'Programming'], hasTutorial: false },
  { id: 'gh-16', name: 'free-programming-books-es', owner: 'EbookFoundation', url: 'https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-es.md', description: 'Libros de programación gratis en español específicamente.', category: 'education', language: 'Spanish', stars: '330k+', difficulty: 'beginner', topics: ['Books', 'Spanish', 'Programming'], hasTutorial: false },
  { id: 'gh-17', name: 'ohmyzsh', owner: 'ohmyzsh', url: 'https://github.com/ohmyzsh/ohmyzsh', description: 'Personaliza tu terminal para ser más productivo. 150+ plugins.', category: 'tools', language: 'Shell', stars: '170k+', difficulty: 'intermediate', topics: ['Terminal', 'Productivity', 'Zsh'], hasTutorial: true },
  { id: 'gh-18', name: 'developer-roadmap', owner: 'kamranahmedse', url: 'https://github.com/kamranahmedse/developer-roadmap', description: 'Roadmaps para aprender desarrollo web, backend, devops, etc.', category: 'education', language: 'TypeScript', stars: '280k+', difficulty: 'beginner', topics: ['Roadmaps', 'Career', 'Learning Path'], hasTutorial: true },
  { id: 'gh-19', name: 'javascript-algorithms', owner: 'trekhleb', url: 'https://github.com/trekhleb/javascript-algorithms', description: 'Algoritmos y estructuras de datos en JavaScript.', category: 'javascript', language: 'JavaScript', stars: '185k+', difficulty: 'intermediate', topics: ['Algorithms', 'JavaScript', 'Data Structures'], hasTutorial: true },
  { id: 'gh-20', name: 'You-Dont-Know-JS', owner: 'getify', url: 'https://github.com/getify/You-Dont-Know-JS', description: 'Serie de libros gratis para dominar JavaScript profundamente.', category: 'javascript', language: 'JavaScript', stars: '180k+', difficulty: 'advanced', topics: ['JavaScript', 'Deep Dive', 'ES6'], hasTutorial: true },

  // More AI/ML
  { id: 'gh-21', name: 'tensorflow', owner: 'tensorflow', url: 'https://github.com/tensorflow/tensorflow', description: 'Framework de Google para Machine Learning. Tutoriales oficiales.', category: 'ai-ml', language: 'Python', stars: '185k+', difficulty: 'advanced', topics: ['TensorFlow', 'ML', 'Deep Learning'], hasTutorial: true },
  { id: 'gh-22', name: 'pytorch', owner: 'pytorch', url: 'https://github.com/pytorch/pytorch', description: 'Framework de Meta para Deep Learning. Usado en investigación.', category: 'ai-ml', language: 'Python', stars: '80k+', difficulty: 'advanced', topics: ['PyTorch', 'Deep Learning', 'Neural Networks'], hasTutorial: true },
  { id: 'gh-23', name: 'transformers', owner: 'huggingface', url: 'https://github.com/huggingface/transformers', description: 'Modelos de lenguaje state-of-the-art (BERT, GPT, Llama).', category: 'ai-ml', language: 'Python', stars: '125k+', difficulty: 'advanced', topics: ['NLP', 'Transformers', 'LLM'], hasTutorial: true },
  { id: 'gh-24', name: 'langchain', owner: 'langchain-ai', url: 'https://github.com/langchain-ai/langchain', description: 'Framework para construir aplicaciones con LLMs y RAG.', category: 'ai-ml', language: 'Python', stars: '90k+', difficulty: 'intermediate', topics: ['LLM', 'RAG', 'AI Apps'], hasTutorial: true },
  { id: 'gh-25', name: 'ollama', owner: 'ollama', url: 'https://github.com/ollama/ollama', description: 'Ejecuta LLMs gratis en tu ordenador local. Llama, Mistral, etc.', category: 'ai-ml', language: 'Go', stars: '85k+', difficulty: 'intermediate', topics: ['Local LLM', 'Privacy', 'Offline AI'], hasTutorial: true },
  { id: 'gh-26', name: 'awesome-machine-learning', owner: 'josephmisiti', url: 'https://github.com/josephmisiti/awesome-machine-learning', description: 'Recursos de ML por lenguaje de programación.', category: 'ai-ml', language: 'Markdown', stars: '65k+', difficulty: 'intermediate', topics: ['ML', 'Resources', 'Libraries'], hasTutorial: false },
  { id: 'gh-27', name: 'stable-diffusion', owner: 'Stability-AI', url: 'https://github.com/Stability-AI/stablediffusion', description: 'Generador de imágenes con IA, open-source.', category: 'ai-ml', language: 'Python', stars: '40k+', difficulty: 'advanced', topics: ['Image Generation', 'Stable Diffusion', 'Open Source'], hasTutorial: true },
  { id: 'gh-28', name: 'LocalStack', owner: 'localstack', url: 'https://github.com/localstack/localstack', description: 'Emula AWS en local para aprender y desarrollar gratis.', category: 'devops', language: 'Python', stars: '55k+', difficulty: 'intermediate', topics: ['AWS', 'Local', 'Cloud'], hasTutorial: true },
  { id: 'gh-29', name: 'vscode', owner: 'microsoft', url: 'https://github.com/microsoft/vscode', description: 'Editor de código gratuito, open-source, de Microsoft.', category: 'tools', language: 'TypeScript', stars: '160k+', difficulty: 'beginner', topics: ['Editor', 'IDE', 'Development'], hasTutorial: true },
  { id: 'gh-30', name: 'github-gitignore', owner: 'github', url: 'https://github.com/github/gitignore', description: 'Plantillas de .gitignore para cualquier lenguaje.', category: 'tools', language: 'Markdown', stars: '160k+', difficulty: 'beginner', topics: ['Git', 'Templates', 'Best Practices'], hasTutorial: false },

  // Design & Frontend
  { id: 'gh-31', name: 'tailwindcss', owner: 'tailwindlabs', url: 'https://github.com/tailwindlabs/tailwindcss', description: 'Framework CSS utility-first. Usado en Manos Abiertas.', category: 'design', language: 'JavaScript', stars: '80k+', difficulty: 'intermediate', topics: ['CSS', 'Tailwind', 'Frontend'], hasTutorial: true },
  { id: 'gh-32', name: 'awesome-vue', owner: 'vuejs', url: 'https://github.com/vuejs/awesome-vue', description: 'Lista curada de recursos Vue.js.', category: 'web-dev', language: 'JavaScript', stars: '72k+', difficulty: 'intermediate', topics: ['Vue', 'Frontend', 'JavaScript'], hasTutorial: false },
  { id: 'gh-33', name: 'awesome-react', owner: 'enaqx', url: 'https://github.com/enaqx/awesome-react', description: 'Recursos para aprender React.', category: 'web-dev', language: 'JavaScript', stars: '65k+', difficulty: 'intermediate', topics: ['React', 'Frontend', 'JavaScript'], hasTutorial: false },
  { id: 'gh-34', name: 'design-resources-for-developers', owner: 'bradtraversy', url: 'https://github.com/bradtraversy/design-resources-for-developers', description: 'Recursos de diseño gratuitos para devs.', category: 'design', language: 'Markdown', stars: '55k+', difficulty: 'beginner', topics: ['Design', 'UI/UX', 'Resources'], hasTutorial: false },
  { id: 'gh-35', name: 'freeCodeCamp', owner: 'freeCodeCamp', url: 'https://github.com/freeCodeCamp/freeCodeCamp', description: 'Plataforma de aprendizaje con cursos interactivos y certificación.', category: 'education', language: 'TypeScript', stars: '400k+', difficulty: 'beginner', topics: ['Learn to Code', 'Certification', 'Interactive'], hasTutorial: true },
  { id: 'gh-36', name: 'tech-interview-handbook', owner: 'yangshun', url: 'https://github.com/yangshun/tech-interview-handbook', description: 'Guía completa para entrevistas técnicas.', category: 'education', language: 'JavaScript', stars: '115k+', difficulty: 'intermediate', topics: ['Interviews', 'Algorithms', 'Career'], hasTutorial: true },
  { id: 'gh-37', name: 'Awesome-Hacking-Resources', owner: 'vitalysim', url: 'https://github.com/vitalysim/Awesome-Hacking-Resources', description: 'Recursos para aprender ciberseguridad y ethical hacking.', category: 'security', language: 'Markdown', stars: '12k+', difficulty: 'intermediate', topics: ['Cybersecurity', 'Ethical Hacking', 'Security'], hasTutorial: true },
  { id: 'gh-38', name: 'OWASP-Top-10', owner: 'OWASP', url: 'https://github.com/OWASP/Top10', description: 'Las 10 vulnerabilidades web más comunes, explicadas.', category: 'security', language: 'Markdown', stars: '4k+', difficulty: 'intermediate', topics: ['Web Security', 'OWASP', 'Vulnerabilities'], hasTutorial: true },
  { id: 'gh-39', name: 'TryHackMe', owner: 'tryhackme', url: 'https://github.com/tryhackme', description: 'Plataforma de aprendizaje de ciberseguridad con labs.', category: 'security', language: 'Multiple', stars: '8k+', difficulty: 'beginner', topics: ['Cybersecurity', 'Labs', 'Practice'], hasTutorial: true },
  { id: 'gh-40', name: 'jsonresume', owner: 'jsonresume', url: 'https://github.com/jsonresume/resume-cli', description: 'Estandariza tu CV en JSON y genera plantillas.', category: 'tools', language: 'JavaScript', stars: '4k+', difficulty: 'beginner', topics: ['CV', 'Resume', 'JSON'], hasTutorial: true },

  // More web dev
  { id: 'gh-41', name: 'Awesome-Spanish-Dev', owner: 'andresf01', url: 'https://github.com/andresf01/awesome-spanish-dev', description: 'Recursos para developers hispanohablantes.', category: 'education', language: 'Markdown', stars: '2k+', difficulty: 'beginner', topics: ['Spanish', 'Development', 'Resources'], hasTutorial: false },
  { id: 'gh-42', name: 'computer-science-open-textbooks', owner: 'OPMatters', url: 'https://github.com/OPMatters/computer-science-open-textbooks', description: 'Libros de texto abiertos de informática.', category: 'education', language: 'Markdown', stars: '1k+', difficulty: 'intermediate', topics: ['CS', 'Textbooks', 'Open'], hasTutorial: false },
  { id: 'gh-43', name: 'ossu', owner: 'OSSU', url: 'https://github.com/ossu/computer-science', description: 'Currículum completo de informática gratis con cursos online.', category: 'education', language: 'Markdown', stars: '170k+', difficulty: 'intermediate', topics: ['CS Degree', 'Free', 'Curriculum'], hasTutorial: true },
  { id: 'gh-44', name: 'first-contributions', owner: 'firstcontributions', url: 'https://github.com/firstcontributions/first-contributions', description: 'Guía para hacer tu primera contribución open-source.', category: 'education', language: 'Multiple', stars: '45k+', difficulty: 'beginner', topics: ['Open Source', 'Git', 'GitHub', 'Contributing'], hasTutorial: true },
  { id: 'gh-45', name: 'GitHub Skills', owner: 'skills', url: 'https://github.com/skills', description: 'Cursos oficiales de GitHub para aprender Git.', category: 'tools', language: 'Markdown', stars: '15k+', difficulty: 'beginner', topics: ['Git', 'GitHub', 'Version Control'], hasTutorial: true },
  { id: 'gh-46', name: 'free-certifications', owner: 'cloudcommunity', url: 'https://github.com/cloudcommunity/free-certifications', description: 'Lista de certificaciones tecnológicas gratuitas.', category: 'education', language: 'Markdown', stars: '3k+', difficulty: 'beginner', topics: ['Certifications', 'Free', 'Tech'], hasTutorial: false },
  { id: 'gh-47', name: 'Reactive-Resume', owner: 'AmruthPillai', url: 'https://github.com/AmruthPillai/Reactive-Resume', description: 'Creador de CV open-source y gratuito.', category: 'tools', language: 'TypeScript', stars: '25k+', difficulty: 'beginner', topics: ['CV Builder', 'Open Source', 'Free'], hasTutorial: true },
  { id: 'gh-48', name: 'awesome-list', owner: 'sindresorhus', url: 'https://github.com/sindresorhus/awesome', description: 'Lista de listas awesome sobre cualquier tema de tecnología.', category: 'education', language: 'Markdown', stars: '330k+', difficulty: 'beginner', topics: ['Resources', 'Lists', 'Curated'], hasTutorial: false },
  { id: 'gh-49', name: 'kaggle-learn', owner: 'Kaggle', url: 'https://github.com/Kaggle/kaggle-api', description: 'API de Kaggle para datasets y cursos de ML gratis.', category: 'data-science', language: 'Python', stars: '5k+', difficulty: 'intermediate', topics: ['Data Science', 'ML', 'Datasets'], hasTutorial: true },
  { id: 'gh-50', name: 'self-hosted', owner: 'awesome-selfhosted', url: 'https://github.com/awesome-selfhosted/awesome-selfhosted', description: 'Software gratuito autoalojado para reemplazar servicios de pago.', category: 'tools', language: 'Markdown', stars: '200k+', difficulty: 'intermediate', topics: ['Self-hosted', 'Free Software', 'Privacy'], hasTutorial: false },
];

export const FREE_APIS: FreeAPI[] = [
  { id: 'api-1', name: 'Google Translate API', url: 'https://cloud.google.com/translate', description: 'Traducción de textos en 100+ idiomas (gratis hasta 500k chars/mes).', category: 'Traducción', auth: 'apiKey', free: true, rateLimit: '500k chars/mes' },
  { id: 'api-2', name: 'OpenAI API', url: 'https://platform.openai.com/docs', description: 'GPT-4, DALL-E, Whisper. Gratis con créditos iniciales.', category: 'IA', auth: 'apiKey', free: true, rateLimit: 'Por crédito' },
  { id: 'api-3', name: 'Hugging Face API', url: 'https://huggingface.co/docs/api-inference', description: 'Modelos de IA gratis: NLP, visión, audio.', category: 'IA', auth: 'apiKey', free: true, rateLimit: '1000 req/día' },
  { id: 'api-4', name: 'News API', url: 'https://newsapi.org/', description: 'Noticias de todo el mundo. Gratis para desarrollo.', category: 'Noticias', auth: 'apiKey', free: true, rateLimit: '100 req/día' },
  { id: 'api-5', name: 'OpenWeather API', url: 'https://openweathermap.org/api', description: 'Datos meteorológicos gratuitos.', category: 'Clima', auth: 'apiKey', free: true, rateLimit: '1000 req/día' },
  { id: 'api-6', name: 'REST Countries', url: 'https://restcountries.com/', description: 'Información de todos los países. Sin autenticación.', category: 'Datos', auth: 'none', free: true },
  { id: 'api-7', name: 'Exchange Rate API', url: 'https://www.exchangerate-api.com/', description: 'Tipos de cambio de moneda en tiempo real. Gratis.', category: 'Finanzas', auth: 'apiKey', free: true, rateLimit: '1500 req/mes' },
  { id: 'api-8', name: 'NASA API', url: 'https://api.nasa.gov/', description: 'Imágenes astronómicas, datos de misiones. Gratis.', category: 'Ciencia', auth: 'apiKey', free: true, rateLimit: '1000 req/hora' },
  { id: 'api-9', name: 'Wikipedia API', url: 'https://www.mediawiki.org/wiki/API:Main_page', description: 'Acceso a todo el contenido de Wikipedia. Gratis.', category: 'Conocimiento', auth: 'none', free: true },
  { id: 'api-10', name: 'GitHub API', url: 'https://docs.github.com/en/rest', description: 'Repos, issues, usuarios de GitHub. 5000 req/hora gratis.', category: 'Desarrollo', auth: 'oauth', free: true, rateLimit: '5000 req/hora' },
  { id: 'api-11', name: 'Stack Overflow API', url: 'https://api.stackexchange.com/', description: 'Preguntas y respuestas de Stack Overflow. Gratis.', category: 'Desarrollo', auth: 'none', free: true, rateLimit: '300 req/día' },
  { id: 'api-12', name: 'Spotify API', url: 'https://developer.spotify.com/', description: 'Datos de música, artistas, playlists. Gratis para desarrollo.', category: 'Música', auth: 'oauth', free: true },
  { id: 'api-13', name: 'YouTube Data API', url: 'https://developers.google.com/youtube/v3', description: 'Búsqueda y datos de videos de YouTube. Gratis.', category: 'Video', auth: 'apiKey', free: true, rateLimit: '10000 cuotas/día' },
  { id: 'api-14', name: 'Unsplash API', url: 'https://unsplash.com/developers', description: 'Fotos gratuitas de alta calidad. 50 req/hora gratis.', category: 'Imágenes', auth: 'apiKey', free: true, rateLimit: '50 req/hora' },
  { id: 'api-15', name: 'Mapbox API', url: 'https://www.mapbox.com/', description: 'Mapas interactivos y geolocalización. 50k req/mes gratis.', category: 'Mapas', auth: 'apiKey', free: true, rateLimit: '50k req/mes' },
  { id: 'api-16', name: 'Twilio API', url: 'https://www.twilio.com/', description: 'SMS, WhatsApp, llamadas. Crédito inicial gratis.', category: 'Comunicación', auth: 'apiKey', free: true },
  { id: 'api-17', name: 'Stripe API', url: 'https://stripe.com/docs/api', description: 'Pagos online. Gratis para desarrollo.', category: 'Pagos', auth: 'apiKey', free: true },
  { id: 'api-18', name: 'Firebase', url: 'https://firebase.google.com/docs/reference/rest/database', description: 'Base de datos en tiempo real, auth, hosting. Plan gratuito generoso.', category: 'Backend', auth: 'oauth', free: true },
  { id: 'api-19', name: 'Supabase', url: 'https://supabase.com/docs', description: 'Alternativa open-source a Firebase. Plan gratuito.', category: 'Backend', auth: 'apiKey', free: true },
  { id: 'api-20', name: 'Cohere API', url: 'https://docs.cohere.com/', description: 'Modelos de lenguaje para clasificación, generación. Gratis para dev.', category: 'IA', auth: 'apiKey', free: true, rateLimit: '1000 req/mes' },
  { id: 'api-21', name: 'Replicate API', url: 'https://replicate.com/docs', description: 'Ejecuta modelos open-source en la nube. Crédito inicial.', category: 'IA', auth: 'apiKey', free: true },
  { id: 'api-22', name: 'Together AI', url: 'https://www.together.ai/', description: 'API de modelos open-source (Llama, Mistral).', category: 'IA', auth: 'apiKey', free: true },
  { id: 'api-23', name: 'Groq API', url: 'https://groq.com/', description: 'IA ultrarrápida con Llama. Gratis con límites.', category: 'IA', auth: 'apiKey', free: true, rateLimit: '30 req/min' },
  { id: 'api-24', name: 'Pexels API', url: 'https://www.pexels.com/api/', description: 'Fotos y videos gratuitos. 200 req/hora.', category: 'Imágenes', auth: 'apiKey', free: true, rateLimit: '200 req/hora' },
  { id: 'api-25', name: 'Joke API', url: 'https://v2.jokeapi.dev/', description: 'Chistes gratuitos en inglés. Sin auth.', category: 'Entretenimiento', auth: 'none', free: true },
  { id: 'api-26', name: 'Quote API', url: 'https://zenquotes.io/', description: 'Citas inspiracionales. 5 req/30s gratis.', category: 'Entretenimiento', auth: 'none', free: true, rateLimit: '5 req/30s' },
  { id: 'api-27', name: 'Open Library API', url: 'https://openlibrary.org/developers/api', description: 'Datos de libros, autores. Gratis sin auth.', category: 'Libros', auth: 'none', free: true },
  { id: 'api-28', name: 'Numbers API', url: 'http://numbersapi.com/', description: 'Datos curiosos sobre números. Sin auth.', category: 'Datos', auth: 'none', free: true },
  { id: 'api-29', name: 'Advice API', url: 'https://api.adviceslip.com/', description: 'Consejos aleatorios. Sin auth.', category: 'Entretenimiento', auth: 'none', free: true },
  { id: 'api-30', name: 'Dog API', url: 'https://dog.ceo/dog-api/', description: 'Fotos de perros por raza. Sin auth.', category: 'Imágenes', auth: 'none', free: true },
];

// Repos de voz, imagen, video y software libre (102 repos curados)
// Se fusionan aquí para que aparezcan en el mismo buscador/filtro que el resto.
import { MEDIA_REPOS } from './open-source-media-hub';

export const ALL_REPOS: GitHubRepo[] = [
  ...GITHUB_REPOS,
  ...MEDIA_REPOS.map(({ languages_supported, license, ...rest }) => rest as GitHubRepo),
];

export function getRepoStats() {
  const byCategory: Record<string, number> = {};
  ALL_REPOS.forEach((r) => { byCategory[r.category] = (byCategory[r.category] || 0) + 1; });
  return { total: ALL_REPOS.length, byCategory, apis: FREE_APIS.length };
}
