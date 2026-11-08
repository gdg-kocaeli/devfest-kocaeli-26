# DevFest Kocaeli 2026

The DevFest Kocaeli 2026 event website, built for the [GDG Kocaeli](https://gdg.community.dev/gdg-kocaeli/) community.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Getting Started

Install the dependencies and start the development server:

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

## Photo Modal

Copy `.env.example` to `.env.local` and set:

```dotenv
PHOTO_BOOTH_AUTO_OPEN=true
```

Set this to `false` (or leave it unset) to hide the photo modal and the “Fotoğrafını paylaş” button entirely. When `true`, the modal opens on page load and the button can reopen it after closing. Restart the development server after changing this setting; production changes require a new build and deployment.

## Available Commands

```sh
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Project Structure

- `app/` — Page composition, global styles, and application metadata.
- `features/devfest/` — Event components, content, types, and styles.
- `public/assets/devfest/` — Event images, sponsor logos, and gallery assets.

## Updating Event Content

Edit `features/devfest/data.ts` to update event details, navigation, speakers, sessions, sponsors, gallery entries, and social links. Asset definitions are maintained in `features/devfest/assets.ts`.

Speaker and program sections appear automatically when their corresponding data is available. Sponsor tiers with no sponsors are hidden.

Set `PROGRAM_AUTO_OPEN=true` in `.env.local` to open the homepage at the program section automatically. Set it to `false` to start at the top. Existing section links are preserved. Restart the development server after changing it; production deployments need a new build.

## Contributors

Special thanks to [@mhakkaynak](https://github.com/mhakkaynak) for contributing to this project.

---

Made with ❤️ by [GDG Kocaeli](https://gdg.community.dev/gdg-kocaeli/)
