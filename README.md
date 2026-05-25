# ⚡ Fast Authenticator

A radically simple, premium, and 100% client-side Time-Based One-Time Password (TOTP) generator. Designed with state-of-the-art glassmorphism aesthetics, Fast Authenticator keeps your two-factor authentication keys completely secure by calculating them directly within your browser. **No servers, no tracking, zero databases, and fully functional offline.**

---

## ✨ Key Features

- 🛡️ **100% Client-Side Web Crypto**: Cryptographic signatures are calculated locally using the browser's native Web Crypto API (`window.crypto.subtle`) for sandboxed, secure execution.
- 📱 **Adaptive Overlay System**: Sleek floating cards on desktop viewports and smooth sliding bottom-drawer sheets on mobile screens running at a locked, GPU-accelerated 60 FPS.
- 📂 **Flexible Entry Formats**:
  - **Camera QR Scanner**: Scan visual codes via integrated camera access.
  - **Upload QR Image**: Drag and drop or browse standard images (PNG, JPG) containing codes.
  - **Manual Entry**: Save accounts with customized issuers, labels, and advanced settings.
  - **List Import (Bulk)**: Paste raw Base32 secret keys line-by-line to add multiple keys instantly.
- ⏳ **Upcoming Code Preview**: Displays the upcoming code directly underneath the active one, allowing you to copy not only the current OTP but the next token with a single click.
- 💾 **Local Data Portability**: Save accounts directly in your browser's local storage. Easily export and import your saved accounts as standard JSON backup files, or wipe all device data securely with double-confirmation dialogs.
- 📲 **Installable PWA & Offline Support**: Fully compliant Web App Manifest and Service Worker implementation, allowing you to install the application natively on iOS/Android and run it entirely offline.
- 🌐 **Insecure Context Fallback**: Automatic, silent fallback to a custom, pure JavaScript cryptographic engine (SHA-1, SHA-256, SHA-512) and fallback clipboard operations if hosted in HTTP or local development server environments.

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript, CSS custom variables
- **Cryptography**: Web Crypto API (`window.crypto.subtle`)
- **Webcam Scanning**: `html5-qrcode` (lazy-loaded dynamically only when camera or upload features are triggered)
- **Caching**: PWA Service Worker caching static assets and Google Fonts
- **Aesthetics**: Glassmorphic backdrops, harmonious HSL dark/light modes, micro-animations, and Outfit/Plus Jakarta Sans typography.

---

## 🔒 Security & Privacy Guarantees

> [!IMPORTANT]
> Your keys never leave your browser context. Since Fast Authenticator is static and serverless, there are no endpoints, cookies, logins, or tracking pixels to compromise your data.

- **HMAC calculation** is completely sandboxed.
- **Service Worker** operates as a local proxy, guaranteeing offline functionality.
- **Important Storage Warning**: Browser `localStorage` stores secrets unencrypted. Make sure your device profile or operating system is password protected, and avoid using the app on shared public profiles.

---

## 🚀 How to Use

### 1. Directly in your browser
Simply visit [2fa.fast](https://2fa.fast) (fully secure HTTPS context) to start generating codes instantly.

### 2. Self-Host Offline (Direct File Execution)
Fast Authenticator is built as a single, self-contained HTML document. You can run the app offline on your computer without running a web server:
1. Clone this repository or download the ZIP:
   ```bash
   git clone https://github.com/yuriionline/2fafast.git
   ```
2. Open `index.html` directly in any web browser.
3. Add your keys to begin generating codes locally.

### 3. URL Parameter Pre-loading (GET)
To quickly pre-load a temporary account, copy a code, or save a token, append the raw Base32 secret key directly to the URL:
```
https://2fa.fast/?YOUR_SECRET_KEY
```
This loads a temporary preview card on the main page, automatically copies the generated code, and provides a one-click button to save it persistently on your device.

---

## ⚙️ Advanced Configuration Support

Fast Authenticator supports the full range of standard Authenticator algorithms and parameters:

| Parameter | Supported Options | Default |
| :--- | :--- | :--- |
| **Algorithm** | SHA-1, SHA-256, SHA-512 | SHA-1 |
| **Digits** | 6 digits, 8 digits | 6 |
| **Period** | 10 seconds to 300 seconds | 30 |

---

## 📄 License

This project is licensed under the **MIT License**.
