---
title: People
lang: en
lang_ref: people
permalink: /en/people/
nav:
  order: 4
  tooltip: Faculty, students, staff, and alumni
---

{% assign t = site.data.i18n[page.lang] %}
{% capture summary %}
{{ t.pages.people.summary }}
{% endcapture %}

{% include page-intro.html eyebrow=t.pages.people.eyebrow title=t.pages.people.title summary=summary %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">{{ t.pages.people.leadership_eyebrow }}</p>
  <h2>{{ t.pages.people.leadership_title }}</h2>
</div>

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">{{ t.pages.people.current_eyebrow }}</p>
  <h2>{{ t.pages.people.current_title }}</h2>
</div>

{% include list.html data="members" component="portrait" filter="role != 'principal-investigator' and group != 'alum'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">{{ t.pages.people.alumni_eyebrow }}</p>
  <h2>{{ t.pages.people.alumni_title }}</h2>
</div>

{% include list.html data="members" component="portrait" filter="group == 'alum'" style="small" %}

{% include section.html %}

<div class="page-panel">
  <h2>{{ t.pages.people.culture_title }}</h2>
  <p>{{ t.pages.people.culture_body }}</p>
</div>
