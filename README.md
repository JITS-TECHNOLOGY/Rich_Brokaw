# Richard Brokaw – Author & Ministry Website

*Listening to Jesus. Living Faithfully. Waiting for His Return.*

A static website (HTML, CSS, JavaScript) hosted on **GitHub Pages**. There's no server, database or WordPress to maintain.

## Pages

| Page | Address | File |
|---|---|---|
| Home | `/` | `index.html` |
| Books | `/books/` | `books/index.html` |
| About Richard | `/about-richard/` | `about-richard/index.html` |
| Free Resources | `/free_resources/` | `free_resources/index.html` |
| Prayer for the Babies | `/free_resources/prayer_for_the_babies/` | `free_resources/prayer_for_the_babies/index.html` |
| Resource Library (after signup; hidden from Google) | `/resource-library/` | `resource-library/index.html` |

## Folders
- `assets/`: styles, scripts, and **`config.js`**, which holds the site settings (see below)
- `images/`: headshot and book covers
- `pdfs/`, `thumbs/`: free resources and their preview images

## Site settings: `assets/config.js`
Open it on GitHub, click the pencil icon, edit, and **Commit changes**. The live site updates in about a minute.
- **MailerLite:** account number and form IDs. Until they're filled in, the forms still work: the Free Resources form opens the download library, and the others thank the visitor and say the list opens soon.
- **YouTube video ID** for "A Word From Richard." The homepage section stays hidden until this is set.
- **Amazon links** for each book.

## Common edits
- **Text:** open the page's `index.html` on GitHub, use the pencil icon, change the words between the tags, and commit.
- **Book samples:** in `books/index.html`, each book has `<section class="rb-page">` blocks. Replace each `<div class="rb-ph">…</div>` with paragraphs (`<p>…</p>`), about 170 words per page. As soon as a book has no placeholders left, its cover turns into the page-turning reader automatically.
- **New free PDF:** upload it to `pdfs/` and a first-page image to `thumbs/`, then copy an existing card in `free_resources/index.html` and `resource-library/index.html`.

See **PUBLISHING.md** to turn on GitHub Pages and connect a domain.
