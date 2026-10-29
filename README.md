# Beenish : Single-Page CV Website (No Scrolling)

Lab Task 2: present my CV as a single-page website where scrolling is not allowed.

## How it works

The page is exactly one screen tall. Instead of scrolling, the visitor switches between seven panels
(Home, About, Skills, Projects, Demo, Certificates, Contact) using the tabs at the top.
Only one panel is visible at a time, and each panel is designed to fit the screen without a scrollbar.

## Technologies

- HTML5 (semantic sections, ARIA tab roles)
- CSS3 (Grid, Flexbox, CSS variables, `100dvh`, media queries)
- Vanilla JavaScript (tab switching and the Web Crypto API demo)
- Google Fonts: Bricolage Grotesque and Figtree
- No frameworks and no libraries

## AI tool used

Claude (Anthropic) was used to generate the first version of the code. I reviewed it, checked the content, and tested it myself.

## Prompt used

> Act as an expert website developer. Using my CV, create a single-page website where scrolling is not allowed.
> The whole site must fit on one screen on laptops, tablets, and phones, with navigation tabs that switch between sections.
> Use the same colour palette and design as my scrolling CV website (deep teal and amber), keep the text readable,
> and include my photo, my Google certificate with its verification link, and my GitHub and LinkedIn links.
> Make it eye-catching and creative, and suitable for an experienced teacher to evaluate.

## How scrolling is prevented

- `html` and `body` use `height: 100dvh` and `overflow: hidden`.
- The layout is a two-row grid: a top bar and a stage that fills the rest of the screen.
- The root font size follows the screen size (`clamp()`), so all text and spacing shrink on small screens.
- Optional text is hidden on very small phones so the main content always fits.
- I tested every panel at 15 screen sizes, from 320×568 phones to 2560×1440 monitors, and none showed a scrollbar.

## Features

- Tab navigation with keyboard support (arrow keys, Home, End)
- Direct links to a panel, for example `index.html#projects`
- Hero with photo, floating skill tags, and quick facts
- Interactive demo: encrypt, decrypt, and tamper with a message using AES-256-GCM and SHA-256
- Google certificate with a verification link
- Responsive layout for desktop, tablet, and mobile

## Folder structure

```
cv-no-scroll/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── photo.jpg
    └── certificate.png
```

## How to run

1. Download or clone the folder.
2. Add your photo as `images/photo.jpg`.
3. Open `index.html` in any web browser.

## Author

Beenish , BSCS, Qarshi University, Lahore
