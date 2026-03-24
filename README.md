# 🔐 Fast Authenticator (v2.0.0)

A radically simple, single-file Time-Based One-Time Password (TOTP) generator compatible with Google Authenticator. 

Fast Authenticator is designed for speed, low friction, and ultimate portability. Instead of forcing you to unlock your phone, open a dedicated app, and manually type a code, this tool allows you to access your 2FA codes instantly via a single, bookmarkable URL. 

## ✨ Key Features

* **100% Client-Side & Private:** All cryptography is handled locally in your browser using the native Web Crypto API. **Your secret key never leaves your device** and is never sent to a server.
* **Host Anywhere for Free:** Because it requires no server-side processing (like PHP or Node.js), you can host this on free static platforms like GitHub Pages, Netlify, Cloudflare Pages, or even just open it as a local file on your computer.
* **Ultra-Portable (Single File):** The entire application—HTML layout, responsive CSS, and JavaScript engine—is packed into one single `index.html` file.
* **Zero-Login Access:** Access your 2FA code via a single link (e.g., `https://your-site.github.io/?YOUR_SECRET_KEY`). Bookmark it in your browser or password manager for instant, one-click access. 
* **Seamless Sharing:** Want to give a trusted family member or colleague access to a specific 2FA code? Just send them the link. No need to set up accounts or share master passwords. If they have the link, they have the code.
* **Frictionless Click-to-Copy:** Simply click or tap the generated 6-digit PIN to instantly copy it to your clipboard for immediate pasting.

## 🚀 How to Host & Use (GitHub Pages)

1. **Create a Repository:** Go to GitHub, create a new public repository (e.g., `fast-auth`), and upload this `index.html` file to it.
2. **Enable Pages:** Go to your repository's **Settings** > **Pages**, set the source branch to `main`, and click Save.
3. **Get Your Link:** Wait a minute for GitHub to build your site. Your base URL will be `https://[your-username].github.io/[repo-name]/`.
4. **Add Your Key:** Append your Base32 secret key to the end of your new URL preceded by a question mark: `https://[your-username].github.io/fast-auth/?JBSWY3DPEHPK3PXP`
5. **Bookmark It:** Save that exact URL. Whenever you need your code, simply click the link.

*Note: If you navigate to the site without a key, it will present a clean UI where you can paste your secret key to generate your custom URL automatically.*

## ⚠️ Security Considerations (The "Hidden Link" Model)

Fast Authenticator intentionally trades traditional login layers for maximum convenience. By passing the secret key through the URL query string, **the URL itself becomes the key to your 2FA codes.**

* **The Privacy Advantage:** Because v2.0.0 is purely client-side, your secret key is never recorded in any server logs. 
* **Protect Your Link:** Treat your custom URL exactly like a password. Save it in a secure, encrypted password manager or a locked notes app. 
* **Beware of Shared Devices:** Do not leave this link bookmarked in plain sight on a shared or public computer. Anyone who possesses the link possesses the ability to generate your 2FA codes.
* **Browser History:** Standard browsers will save this URL in your local history. Using this inside a secure workspace or Private/Incognito profile is highly recommended for sensitive accounts.

## 📝 License

This project is open-source and available under the **MIT License**. You are free to copy, modify, and distribute it as needed.
