(function () {
  "use strict";

  function join(parts) {
    return parts.map(function (part) {
      return atob(part);
    }).join("");
  }

  function reveal(selector, href, label) {
    var el = document.querySelector(selector);
    if (!el) return;

    el.setAttribute("href", href);
    var value = el.querySelector(".contact-row__value");
    if (value) value.textContent = label;
  }

  var email = join(["YXJtaW5vbmxpbmU3MQ==", "QA==", "Z21haWwuY29t"]);
  var phoneDisplay = join(["Kzk4IDkzNSA3ODggODM4NA=="]);
  var phoneTel = join(["Kzk4OTM1Nzg4ODM4NA=="]);

  reveal("#contact-email", join(["bWFpbHRvOg=="]) + email, email);
  reveal("#contact-phone", join(["dGVsOg=="]) + phoneTel, phoneDisplay);
})();
