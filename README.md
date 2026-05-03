# ClipAI 🎬

Automatically turn long YouTube videos into short viral clips for TikTok, Reels, and YouTube Shorts!

## Features

- 🤖 AI-powered viral moment detection using Groq Llama 3.3 70B
- 🎙️ High-quality audio transcription using Groq Whisper API
- ✂️ Automatic video cutting and 9:16 vertical resizing
- 📝 Burn hook captions as subtitles at the bottom of clips
- ⚡ Fast processing and easy to use

## Tech Stack

- **Next.js 14 (App Router)** - Framework
- **Tailwind CSS** - Styling
- **Groq API** - Audio transcription (Whisper) and viral moment detection (Llama 3.3 70B)
- **yt-dlp-wrap** - YouTube video downloading
- **FFmpeg** - Video cutting and processing

## Getting Started

### Prerequisites

1. **Node.js (v18+ or LTS)** - Download from https://nodejs.org/
2. **yt-dlp** - For downloading YouTube videos
3. **FFmpeg** - For video processing

### Installation

1. **Clone the repository** (or use your local files):
   ```bash
   cd c:\Users\PC\Documents\trae_projects\CLIPAI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.local.example` to `.env.local`
   - Add your API key:
     - `GROQ_API_KEY` - Get from https://console.groq.com/

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to http://localhost:3000

## Deploying to Vercel

1. **Push to GitHub**:
   - First, create a new repo on GitHub at https://github.com/new
   - Then run these commands in your project:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/mustaphaabbass352/CLIP-AI-.git
     git branch -M main
     git push -u origin main
     ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com/new and import your GitHub repo
   - Add your environment variable in Vercel Dashboard → Your Project → Settings → Environment Variables
   - Deploy!

## Environment Variables

Create a `.env.local` file in the root of your project with:

```env
GROQ_API_KEY=your_groq_key_here
```

## How It Works

1. **Download Video**: Downloads the YouTube video using yt-dlp
2. **Transcribe Audio**: Converts audio to text using Groq Whisper API
3. **Find Viral Moments**: Uses Groq Llama 3.3 70B to identify the best 3-5 clips
4. **Process Clips**: Cuts, resizes, and adds subtitles to each clip using FFmpeg
5. **Download**: Get your viral clips ready to share!

## License

MIT
