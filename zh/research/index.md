---
title: 研究
lang: zh
lang_ref: research
permalink: /zh/research/
nav:
  order: 2
  tooltip: Research areas and featured directions
---

{% assign t = site.data.i18n[page.lang] %}
{% capture summary %}
{{ t.pages.research.summary }}
{% endcapture %}

{% include page-intro.html eyebrow=t.pages.research.eyebrow title=t.pages.research.title summary=summary %}

{% include section.html %}

<div class="page-split">
  <div class="page-panel">
    <h2>{{ t.pages.research.themes_title }}</h2>
    <p>{{ t.pages.research.themes_body }}</p>
    <div class="page-tag-cloud">
      <span class="tag">Medical image analysis</span>
      <span class="tag">Image registration</span>
      <span class="tag">Segmentation</span>
      <span class="tag">Computational anatomy</span>
      <span class="tag">Microscopy</span>
      <span class="tag">Clinical AI</span>
    </div>
  </div>
  <div class="page-panel">
    <h2>{{ t.pages.research.customize_title }}</h2>
    <p>{{ t.pages.research.customize_body }}</p>
    <p class="page-note">{{ t.pages.research.customize_note }}</p>
  </div>
</div>

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">{{ t.pages.research.featured_eyebrow }}</p>
  <h2>{{ t.pages.research.featured_title }}</h2>
  <p class="page-section-head__summary">{{ t.pages.research.featured_summary }}</p>
</div>

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">{{ t.pages.research.more_eyebrow }}</p>
  <h2>{{ t.pages.research.more_title }}</h2>
  <p class="page-section-head__summary">{{ t.pages.research.more_summary }}</p>
</div>

{% include list.html component="card" data="projects" filter="!group" style="small" %}
