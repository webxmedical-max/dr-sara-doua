/* ============================================================
   footer.js — Shared footer component (injected synchronously)
   Each page sets data-root on <body>
============================================================ */
(function () {
  var root = document.body.dataset.root || '';

  var html = '\
  <footer class="site-footer" role="contentinfo" aria-label="Pied de page">\
    <div class="footer-main">\
      <div class="container">\
        <div class="footer-grid">\
          <div class="footer-brand">\
            <a href="' + root + 'index.html" class="footer-logo-link" aria-label="Home">\
              <span class="footer-logo-text">LOGO</span>\
            </a>\
            <p class="footer-tagline">L\u2019expertise dentaire, pr\u00e8s de chez vous.</p>\
            <p class="footer-desc">Cabinet dentaire \u00e0 Témara, Témara. Implants, facettes, orthodontie, Hollywood Smile et soins complets par Dr Sara Doua, chirurgien-dentiste form\u00e9e \u00e0 la FMDC.</p>\
          </div>\
          <nav class="footer-col" aria-label="Nos soins">\
            <h3 class="footer-col-title">Soins</h3>\
            <ul class="footer-links">\
              <li><a href="' + root + 'implant-dentaire.html">Implants dentaires</a></li>\
              <li><a href="' + root + 'facettes-dentaires.html">Facettes dentaires</a></li>\
              <li><a href="' + root + 'hollywood-smile.html">Hollywood Smile</a></li>\
              <li><a href="' + root + 'gouttiere-dentaire.html">Goutti\u00e8res dentaires</a></li>\
              <li><a href="' + root + 'couronne-dentaire.html">Couronnes dentaires</a></li>\
              <li><a href="' + root + 'orthodontie.html">Orthodontie</a></li>\
              <li><a href="' + root + 'blanchiment-dentaire.html">Blanchiment dentaire</a></li>\
              <li><a href="' + root + 'soins-dentaires.html">Soins dentaires</a></li>\
              <li><a href="' + root + 'urgence-dentaire.html">Urgence dentaire</a></li>\
            </ul>\
          </nav>\
          <nav class="footer-col" aria-label="Le cabinet">\
            <h3 class="footer-col-title">Cabinet</h3>\
            <ul class="footer-links">\
              <li><a href="' + root + 'notre-dentiste.html">Dr Sara Doua</a></li>\
              <li><a href="' + root + 'avant-apres.html">Avant / Apr\u00e8s</a></li>\
              <li><a href="' + root + 'contact.html">Prendre rendez-vous</a></li>\
            </ul>\
          </nav>\
          <div class="footer-col footer-contact">\
            <h3 class="footer-col-title">Contact</h3>\
            <address class="footer-address">\
              <p><span class="footer-contact-label">Adresse</span>Rond point Lekrouch, Imm 2, appt 14, angle Avenue Hassan 1 et Av. Tarik Ibn Ziad<br>Témara, Témara</p>\
              <p><span class="footer-contact-label">T\u00e9l\u00e9phone</span><a href="tel:+212537644049/0637208896">05 37 64 40 49 / 06 37 20 88 96</a></p>\
              <p><span class="footer-contact-label">Email</span><a href="mailto:contact@webxmed.ma">contact@webxmed.ma</a></p>\
              <p><span class="footer-contact-label">Horaires</span>Lun&ndash;Ven : 09h00 &ndash; 18h00<br>Sam : 09h00 &ndash; 14h00</p>\
            </address>\
          </div>\
        </div>\
      </div>\
    </div>\
    <div class="footer-bottom">\
      <div class="container">\
        <div class="footer-bottom-inner">\
          <p class="footer-copy">&copy; 2026 Doua Dental Center. Tous droits r\u00e9serv\u00e9s.</p>\
          <nav class="footer-legal" aria-label="Liens l\u00e9gaux">\
            <a href="' + root + 'mentions-legales.html">Mentions l\u00e9gales</a>\
            <a href="' + root + 'politique-confidentialite.html">Confidentialit\u00e9</a>\
          </nav>\
        </div>\
      </div>\
    </div>\
  </footer>';

  var placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.outerHTML = html;
  }
})();
