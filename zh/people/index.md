---
title: 团队
lang: zh
lang_ref: people
permalink: /zh/people/
nav:
  order: 4
  tooltip: Faculty, students, staff, and alumni
---

{% capture summary %}
People 页面由 `_members_zh` collection 驱动。请用实验室真实的教师、学生、职员、访问学者和校友资料替换示例内容。
{% endcapture %}

{% include page-intro.html eyebrow="团队" title=page.title summary=summary %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">负责人</p>
  <h2>课题组负责人</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="role == 'principal-investigator'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">当前成员</p>
  <h2>学生、职员与研究人员</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="role != 'principal-investigator' and group != 'alum'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">校友</p>
  <h2>历届成员</h2>
</div>

{% include list.html data="members_zh" component="portrait" filter="group == 'alum'" style="small" %}

{% include section.html %}

<div class="page-panel">
  <h2>招生与团队文化</h2>
  <p>这里可以写团队文化、指导方式、开放岗位或合作重点的简短说明。</p>
</div>
