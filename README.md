# Coolie Website

Premium responsive single-page website and public legal pages built with React JSX, Vite, Tailwind CSS v4 and React Router.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Homepage components

Each homepage section is maintained separately in `src/components/home/`:

- `Hero.jsx`
- `About.jsx`
- `Services.jsx`
- `WhyChooseUs.jsx`
- `ForEveryone.jsx`
- `HowItWorks.jsx`
- `DownloadCTA.jsx`
- `LegalLinks.jsx`

Shared components are in `src/components/`, including the navbar, footer, legal layout, download button and section heading.

## Public routes

- `/` — Home
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms & Conditions
- `/account-deletion` — Account Deletion

## Configuration before publishing

Set `VITE_PLAY_STORE_URL` in `.env` to the exact published Google Play listing URL. The default is a placeholder. Update support contact details, company details and legal text to match the real app and its actual data practices. Connect the account deletion request form to a secure backend endpoint before launch; a frontend form alone does not delete accounts.

The homepage service categories and claims are editable placeholders. Keep only categories and features that are actually supported by the Coolie app.


## Coolie service marketplace
The homepage presents Coolie as a multi-service platform, not only a railway porter app. Example categories include railway porter assistance, construction workers, beauticians, electricians, plumbing, cleaning, painting, packers and movers, household assistance, salon/grooming, delivery/errands and general helpers. Confirm that each category is available in your actual app before publishing.
