---
title: Research
lang: zh
lang_ref: research
permalink: /zh/research/
nav:
  order: 2
  tooltip: Research areas and featured directions
---

{% capture summary %}
This page is for the lab's main research directions, methods, datasets, software, and long-running scientific themes.
{% endcapture %}

{% include page-intro.html eyebrow="Research" title=page.title summary=summary %}

{% include section.html %}

<div class="page-split">
  <div class="page-panel">
    <h2>Research Themes</h2>
    <p>Use this section for short labels that communicate the lab's identity quickly.</p>
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
    <h2>How to Customize</h2>
    <p>Research cards below are driven by `_data/projects.yaml`. Replace the sample entries with your own themes, software, datasets, and collaborations.</p>
    <p class="page-note">This keeps research directions and supporting resources in one place while publications move to the dedicated Publication page.</p>
  </div>
</div>

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">Featured</p>
  <h2>Featured Research Directions</h2>
  <p class="page-section-head__summary">Lead with the most important themes or flagship efforts of the lab.</p>
</div>

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">More</p>
  <h2>Resources and Ongoing Work</h2>
  <p class="page-section-head__summary">Secondary projects, datasets, tools, and collaborations can live here.</p>
</div>

{% include list.html component="card" data="projects" filter="!group" style="small" %}
