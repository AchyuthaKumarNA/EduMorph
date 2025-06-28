EduMorph — Personalized AI-Powered Learning App

EduMorph is an AI-powered web app that creates personalized learning content based on any topic the user enters. It uses cutting-edge language models like Groq and Gemini to generate beginner-friendly explanations and structured study plans.

Live App: https://edu-morph-eta.vercel.app/

Features

* Generate AI Explanations using Groq LLM
* Create Personalized Study Plans via Gemini 2.0 Flash
* Responsive UI built with Next.js and Tailwind CSS
* Dark theme with high-contrast input styling
* Firebase login-ready (optional future add-on)

Tech Stack

Frontend: Next.js (TypeScript), Tailwind CSS
AI/LLMs: Groq, Gemini (Google AI Studio)
API Layer: Next.js API Routes (Serverless)
Deployment: Vercel + GitHub Integration

How It Works

1. User enters a topic (e.g., "Photosynthesis")
2. Clicks “Get AI Explanation” → Groq responds with a beginner-level description
3. Clicks “Generate Study Plan” → Gemini creates a week-by-week plan to master the topic

Project Structure

/pages
index.tsx         → Redirects to dashboard
dashboard.tsx     → Main user interface
/api
gemini.ts       → Google Gemini integration
groq.ts         → Groq LLM integration

/public
favicon.ico

/styles
globals.css

.env.local (not committed)

Getting Started Locally

1. Clone the repository:

git clone [https://github.com/your-username/edumorph.git](https://github.com/your-username/edumorph.git)
cd edumorph

2. Install dependencies:

npm install

3. Set up environment variables:

Create a `.env.local` file and add:

GEMINI\_API\_KEY=your\_google\_ai\_studio\_key

(Make sure your Gemini key uses gemini-2.0-flash)

4. Start the development server:

npm run dev

Visit: [http://localhost:3000](http://localhost:3000)

Deployment on Vercel

This project is deployed using Vercel.

1. Connect your GitHub repo at [https://vercel.com/import/git](https://vercel.com/import/git)
2. Add environment variable:
   GEMINI\_API\_KEY
3. Click Deploy

Every push to GitHub auto-triggers a redeploy.

Future Roadmap

* Google Sign-in with Firebase
* AI-based quiz generation from study plans
* Editable and savable study journal
* Analytics dashboard for user progress

License

This project is open-source and available under the MIT License.

Acknowledgments

* Groq
* Google Gemini
* Vercel


