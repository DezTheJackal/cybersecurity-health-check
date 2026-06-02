# Cybersecurity Health Check — Johan Spies

Static landing page for the Cybersecurity Health Check service.
Built as a dark futuristic single-page site, ready to deploy on GitHub Pages.

## Project Structure

```
cybersecurity-health-check/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Before You Deploy

### 1. Set Up the Contact Form (Formspree)

The form currently posts to a placeholder URL. To make it work:

1. Go to https://formspree.io and create a free account.
2. Create a new form — name it "Health Check Contact".
3. Copy your form ID (looks like `xpwzgkrb`).
4. Open `index.html` and find this line:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

5. Replace `YOUR_FORM_ID` with your actual Formspree ID.

Formspree free tier handles 50 submissions per month — more than enough to start.

## Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to https://github.com and sign in.
2. Click the **+** icon (top right) and select **New repository**.
3. Name it exactly: `cybersecurity-health-check`
   - Or use your GitHub username for a root domain: `yourusername.github.io`
4. Set it to **Public** (required for free GitHub Pages).
5. Leave "Initialize with README" unchecked.
6. Click **Create repository**.

### Step 2 — Push Your Files

Open your terminal in the project folder and run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit — cybersecurity health check site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cybersecurity-health-check.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** (top tab bar).
3. Scroll down to the **Pages** section in the left sidebar.
4. Under **Source**, select **Deploy from a branch**.
5. Set branch to `main` and folder to `/ (root)`.
6. Click **Save**.

GitHub will show a banner saying your site is being published.
Wait about 60 seconds, then visit:

```
https://YOUR_USERNAME.github.io/cybersecurity-health-check/
```

### Step 4 — Custom Domain (Optional)

If you have a domain like `CyberSecHealthCheck.co.za`:

1. In your repository, create a file named `CNAME` (no extension) containing just your domain:
   ```
   CyberSecHealthCheck.co.za
   ```
2. At your domain registrar, add a CNAME DNS record:
   - **Name**: `www`
   - **Value**: `YOUR_USERNAME.github.io`
3. Back in GitHub Pages settings, enter your custom domain and enable **Enforce HTTPS**.

DNS changes can take up to 24 hours to propagate.

## Making Updates

After any change to the site files:

```bash
git add .
git commit -m "describe what you changed"
git push
```

GitHub Pages redeploys automatically within about 30 seconds.
