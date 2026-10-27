/* ============================================================
   SITE SETTINGS — the only file you need to edit for these.
   Save, upload to GitHub, and the site updates in a minute or two.
   ============================================================ */
window.SITE_CONFIG = {

  /* MailerLite signup forms.
     In MailerLite: Forms → Embedded forms → open a form → "Embed form" → "Javascript snippet".
     The account number is in   ml('account', '123456')
     The form ID is in          <div class="ml-embedded" data-form="AbCdEf"></div>
     Leave a value as "" until it exists; the site shows a friendly fallback instead. */
  mailerlite: {
    account: "",
    forms: {
      newsletter: "",   // homepage "Join the Mailing List"
      library: "",      // Free Resources "Send Me the Resources" (set its success redirect to /resource-library/)
      prayer: ""        // Prayer page "Stand With Us in Prayer"
    }
  },

  /* YouTube video for "A Word From Richard" on the homepage.
     Paste the video ID: for https://www.youtube.com/watch?v=AbC123xyz it is "AbC123xyz".
     While this is "", the video section stays hidden. */
  youtubeVideoId: "",

  /* Amazon product pages. Leave "" to keep the current fallback. */
  amazon: {
    myLetterToYou: "",          // e.g. "https://www.amazon.com/dp/XXXXXXXXXX"
    whyTheRaptureTarries: ""    // fill in at launch
  }
};
