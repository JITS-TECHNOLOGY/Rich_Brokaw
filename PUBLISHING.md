# Publishing on GitHub Pages

## 1. Put the files in the repository
The site must sit at the **top level** of the repository: `index.html`, `assets/`, `books/` and so on directly inside it, not in a subfolder.

1. On https://github.com/jitstechnology/rich_brokaw, remove the old folders from the earlier upload (`demo`, `wordpress`, `build`). Open each folder, click the **…** menu at the top right, choose **Delete directory**, and commit. Keep a copy of the earlier zip if you may still want the WordPress templates.
2. **Add file → Upload files**. Select everything inside the unzipped site folder (not the folder itself) and drag it in. Commit to **main**.
   - The hidden file **`.nojekyll`** should be uploaded too. On a Mac, press **Cmd + Shift + .** in Finder to show hidden files. On Windows, choose **View → Show → Hidden items**. If it gets left out, the site still works; it just builds a little slower.

## 2. Turn on GitHub Pages
1. Repository **Settings → Pages**.
2. **Source:** *Deploy from a branch*. **Branch:** `main`, folder `/ (root)`. **Save**.
3. After a minute or two the site is live at **https://jitstechnology.github.io/rich_brokaw/**.

Free GitHub Pages requires the repository to be **public** (private needs a paid GitHub plan). If the Pages option is missing, the organization owner may need to allow Pages under the organization's settings.

## 3. Connect a domain (optional, e.g. richardbrokaw.com)
**In GitHub:** Settings → Pages → **Custom domain** → enter `www.yourdomain.com` → Save. Once the check passes, tick **Enforce HTTPS**. (GitHub adds a `CNAME` file to the repository for you.)

**At GoDaddy (DNS for the domain):** My Products → the domain → **DNS** → add or edit these records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | jitstechnology.github.io |

Delete any older A record for `@` that points somewhere else (GoDaddy often adds a "Parked" one). Leave the MX and email records alone. DNS changes can take from a few minutes up to a few hours.

All links in the site are relative, so it works the same at the github.io address and on the domain. Nothing in the code needs to change.

## 4. MailerLite
1. Create three embedded forms: **Newsletter** (homepage), **Resource Library** (Free Resources page), and **Prayer** (prayer page). Use a separate group for each if you like.
2. On the Resource Library form, set **Success → Redirect to URL** to your site's `/resource-library/` address, for example `https://www.yourdomain.com/resource-library/`.
3. From each form's **Javascript snippet**, copy the account number and form ID into `assets/config.js`. The site's own forms are then replaced by the MailerLite ones.
4. MailerLite needs to know your website's address. Add the domain under **Account settings → Domains** if MailerLite asks.
