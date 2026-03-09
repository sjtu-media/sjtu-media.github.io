---
title: People
permalink: /people/
nav:
  order: 4
  tooltip: Faculty, students, staff, and alumni
---

{% capture summary %}
The People page is driven by the `_members` collection. Replace the sample profiles with your lab's faculty, students, staff, visiting scholars, and alumni.
{% endcapture %}

{% include page-intro.html eyebrow="People" title=page.title summary=summary %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Leadership</p>
  <h2>Principal Investigator</h2>
</div>

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Current Members</p>
  <h2>Students, Staff, and Researchers</h2>
</div>

{% include list.html data="members" component="portrait" filter="role != 'principal-investigator' and group != 'alum'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Alumni</p>
  <h2>Past Members</h2>
</div>

{% include list.html data="members" component="portrait" filter="group == 'alum'" style="small" %}

{% include section.html %}

<div class="page-panel">
  <h2>Recruiting and Culture</h2>
  <p>Use this area for a short statement about the group's culture, mentoring style, open positions, or collaboration priorities.</p>
</div>
