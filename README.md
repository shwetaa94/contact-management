
# Contact Management App with Charts and Maps

## Description
This is a contact management application built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query. The app allows users to add, view, edit, and delete contacts. It also includes a dashboard with a line graph and a map showing COVID-19 data using external APIs.

## Features
- Add new contacts
- View a list of all contacts
- Edit and delete contacts
- View contact details
- Dashboard with a line graph showing COVID-19 cases fluctuations
- Map with markers showing country-specific COVID-19 data

## Technologies Used
- ReactJS
- TypeScript
- TailwindCSS
- React Router v6
- React Query (TanstackQuery)
- Redux for state management
- Recharts for line graphs
- React Leaflet for maps

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-contact-app.git
   cd my-contact-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
```
my-contact-app/
│
├── public/
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx
│   │   ├── ContactList.tsx
│   │   ├── ContactDetails.tsx
│   │   ├── ContactEditForm.tsx
│   │   ├── Dashboard.tsx
│   │   ├── LineChart.tsx
│   │   ├── Map.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Contacts.tsx
│   │   ├── ContactDetailPage.tsx
│   │   ├── DashboardPage.tsx
│   ├── redux/
│   │   ├── store.ts
│   │   ├── contactsSlice.ts
│   ├── services/
│   │   ├── api.ts
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## API Endpoints
The app uses the following APIs to fetch COVID-19 data:

- **Worldwide data of cases:** 
  `https://disease.sh/v3/covid-19/all`
- **Country-specific data of cases:** 
  `https://disease.sh/v3/covid-19/countries`
- **Graph data for cases with date:** 
  `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

## Deployment
The app can be deployed on various platforms like Vercel, GitHub Pages, or Heroku. Below are the deployment instructions for each:


## Author
- Your Name - [Your GitHub Profile](https://github.com/shwetaa94)
```
