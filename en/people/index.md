---
title: People
lang: en
lang_ref: people
permalink: /en/people/
nav:
  order: 4
  tooltip: Faculty, students, staff, and alumni
---

{% include page-intro.html eyebrow="People" title=page.title summary=summary %}

{% assign principal_investigators = site.members | where: "role", "principal-investigator" %}
{% assign phd_students = site.members | where_exp: "member", "member.role == 'phd' and member.group != 'alum'" %}
{% assign master_students = site.members | where_exp: "member", "member.role == 'master' and member.group != 'alum'" %}
{% assign undergraduate_students = site.members | where_exp: "member", "member.role == 'undergrad' and member.group != 'alum'" %}
{% assign researchers = site.members | where_exp: "member", "member.group != 'alum' and member.role != 'principal-investigator' and member.role != 'phd' and member.role != 'master' and member.role != 'undergrad'" %}
{% assign alumni = site.members | where: "group", "alum" %}

{% if principal_investigators.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Leadership</p>
  <h2>Principal Investigator</h2>
</div>

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% endif %}

{% if phd_students.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Members</p>
  <h2>Doctoral Students</h2>
</div>

{% include list.html data="members" component="portrait" filter="role == 'phd' and group != 'alum'" %}
{% endif %}

{% if master_students.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Members</p>
  <h2>Master's Students</h2>
</div>

{% include list.html data="members" component="portrait" filter="role == 'master' and group != 'alum'" %}
{% endif %}

{% if undergraduate_students.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Members</p>
  <h2>Undergraduate Students</h2>
</div>

{% include list.html data="members" component="portrait" filter="role == 'undergrad' and group != 'alum'" %}
{% endif %}

{% if researchers.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Members</p>
  <h2>Postdocs, Research Staff, and Visiting Researchers</h2>
</div>

{% include list.html data="members" component="portrait" filter="group != 'alum' and role != 'principal-investigator' and role != 'phd' and role != 'master' and role != 'undergrad'" %}
{% endif %}

{% if alumni.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Former Members</p>
  <h2>Historical Members</h2>
</div>

{% include list.html data="members" component="portrait" filter="group == 'alum'" %}
{% endif %}
