---
title: 团队
lang: zh
lang_ref: people
permalink: /zh/people/
nav:
  order: 4
  tooltip: Faculty, students, staff, and alumni
---

{% include page-intro.html eyebrow="团队" title=page.title summary=summary %}

{% assign principal_investigators = site.members_zh | where: "role", "principal-investigator" %}
{% assign phd_students = site.members_zh | where_exp: "member", "member.role == 'phd' and member.group != 'alum'" %}
{% assign master_students = site.members_zh | where_exp: "member", "member.role == 'master' and member.group != 'alum'" %}
{% assign undergraduate_students = site.members_zh | where_exp: "member", "member.role == 'undergrad' and member.group != 'alum'" %}
{% assign researchers = site.members_zh | where_exp: "member", "member.group != 'alum' and member.role != 'principal-investigator' and member.role != 'phd' and member.role != 'master' and member.role != 'undergrad'" %}
{% assign alumni = site.members_zh | where: "group", "alum" %}

{% if principal_investigators.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">负责人</p>
  <h2>课题组负责人</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="role == 'principal-investigator'" %}
{% endif %}

{% if phd_students.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">成员</p>
  <h2>博士研究生</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="role == 'phd' and group != 'alum'" %}
{% endif %}

{% if master_students.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">成员</p>
  <h2>硕士研究生</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="role == 'master' and group != 'alum'" %}
{% endif %}

{% if undergraduate_students.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">成员</p>
  <h2>本科生</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="role == 'undergrad' and group != 'alum'" %}
{% endif %}

{% if researchers.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">成员</p>
  <h2>博士后、科研助理与其他研究人员</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="group != 'alum' and role != 'principal-investigator' and role != 'phd' and role != 'master' and role != 'undergrad'" %}
{% endif %}

{% if alumni.size > 0 %}
{% include section.html %}

<div class="page-section-head">
  <h2>历史成员</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="group == 'alum'" style="small" %}
{% endif %}
