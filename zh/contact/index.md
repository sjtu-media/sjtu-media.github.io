---
title: 联系
lang: zh
lang_ref: contact
permalink: /zh/contact/
nav:
  order: 5
  tooltip: Email, address, and collaboration details
---

{% assign t = site.data.i18n[page.lang] %}
{% capture summary %}
{{ t.pages.contact.summary }}
{% endcapture %}

{% include page-intro.html eyebrow=t.pages.contact.eyebrow title=t.pages.contact.title summary=summary %}

{% include section.html %}

<div class="page-grid page-grid--three">
  <div class="page-panel">
    <h2>{{ t.pages.contact.email_title }}</h2>
    <p>{{ t.pages.contact.email_body }}</p>
    <a href="mailto:replace-with-lab-email@example.com">replace-with-lab-email@example.com</a>
  </div>
  <div class="page-panel">
    <h2>{{ t.pages.contact.location_title }}</h2>
    <p>{{ t.pages.contact.location_body }}</p>
    <p class="page-note">{{ t.pages.contact.location_note }}</p>
  </div>
  <div class="page-panel">
    <h2>{{ t.pages.contact.collaboration_title }}</h2>
    <p>{{ t.pages.contact.collaboration_body }}</p>
    <a href="{{ site.links.github | prepend: 'https://github.com/' }}">{{ t.pages.contact.collaboration_link }}</a>
  </div>
</div>

{% include section.html %}

<div class="page-split">
  <div class="page-panel">
    <h2>{{ t.pages.contact.visit_title }}</h2>
    <p>{{ t.pages.contact.visit_body }}</p>
    {% include figure.html image="images/photo.jpg" caption=t.pages.contact.visit_caption %}
  </div>
  <div class="page-panel">
    <h2>{{ t.pages.contact.before_title }}</h2>
    <p>{{ t.pages.contact.before_body }}</p>
    <p class="page-note">{{ t.pages.contact.before_note }}</p>
  </div>
</div>
