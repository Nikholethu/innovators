# THE INNOVATORS Website

A complete responsive static website for THE INNOVATORS, built with HTML5, CSS3 and vanilla JavaScript.

## Project structure

- `index.html` - Home page
- `about.html` - Company background, purpose, vision, mission, objective, goal and values
- `services.html` - Overview of all services
- `team.html` - Team overview
- `contact.html` - Contact form and placeholders
- `services/` - Individual service pages
- `team/` - Individual team member pages
- `assets/css/style.css` - Shared site styles
- `assets/js/script.js` - Navigation, year and form validation
- `assets/images/` - Reserved folders for future photographs and graphics

## Running locally

Open `index.html` directly in a browser, or use a local static server:

```powershell
cd "C:\Users\Nikholethu Matsimbe\Desktop\innovators"
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing content

The central stylesheet and JavaScript are shared by every page. Root pages use `assets/...` paths, while files inside `services/` and `team/` use `../assets/...` paths.

Each service and team profile has clearly labelled placeholder sections. Replace placeholder text with approved company and member information. Do not add unverified qualifications, achievements, addresses or testimonials.

The contact form performs frontend validation only. It does not send messages. Connect it to an approved email or backend service before enabling live submissions.
