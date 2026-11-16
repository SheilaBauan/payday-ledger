# Payday Ledger

A personal salary, spending, savings, loan and payslip tracker. It runs in the browser, installs like an app on a phone or computer, and works offline. Your data is saved on your own device and is never sent anywhere.

## Put it online with GitHub Pages (free)

1. Sign in at github.com, then choose **New repository** (the + at the top right).
2. Name it `payday-ledger`. Choose **Public** (GitHub Pages is free for public repositories; this is safe because the files contain no personal data, since your entries stay on your device). Create the repository.
3. On the new repository page, choose **uploading an existing file**. Drag in every file from this folder (`index.html`, `sw.js`, `manifest.webmanifest`, the icon files and this README), not the folder itself. Choose **Commit changes**.
4. Open **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and the folder to **/ (root)**, then **Save**.
5. Wait about a minute and refresh. The page shows your address: `https://YOUR-USERNAME.github.io/payday-ledger/`

## Install it

- **Windows or Mac (Chrome or Edge):** open the address, then click the install icon at the right end of the address bar, or use the Install button under Personalize in the app.
- **iPhone or iPad:** open the address in Safari, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the address, then menu **Install app**.

## Your data

- Entries are stored in the browser on each device. Your phone and computer do not sync.
- Under **Personalize → Your data**, **Back up** saves a file, and **Restore backup** loads it on another device. Back up now and then, because clearing browser data removes your entries.
- A home-screen app on iPhone keeps its data longer than a plain Safari tab.

## Payslips: reading them with Claude, then importing here

The installed app cannot read payslip photos by itself. To get automatic reading:

1. In the Claude version of Payday Ledger, upload the payslip, check it and save it.
2. On the Payslips tab, press **Save as file** (or **Save all as file**). This makes a small `.json` file.
3. Move that file to your phone or computer. In the installed app open **Payslips → Import payslip file** and choose it.

A payslip that is already in the app is skipped, so importing the same file twice is safe.

## Updating later

Upload a changed `index.html` to the repository (open the file on GitHub, then the pencil icon, or upload over it). Open the app twice to pick up the new version. To force every device to refetch, change `payday-ledger-v1` in `sw.js` to `payday-ledger-v2`.

## Opening without GitHub

On a computer you can double-click `index.html`. It works, but it cannot be installed or used offline that way.
