---
title: 论文
lang: zh
lang_ref: publication
permalink: /zh/publication/
nav:
  order: 3
  tooltip: Publications and citation records
---

{% assign publications = site.data.citations | sort: "date" | reverse %}
{% assign featured_candidates = site.data.citations | where: "featured", true %}
{% assign featured_publication = featured_candidates | first | default: publications.first %}

{% include page-intro.html eyebrow="论文" title=page.title summary=summary %}

{% if featured_publication %}
  {% include section.html %}

  <div class="page-section-head">
    <h2>代表性论文</h2>
  </div>

  {% include citation.html lookup=featured_publication.id style="rich" %}
{% endif %}

{% include section.html %}

<div class="page-toolbar">
  <h2>检索论文</h2>
  {% include search-box.html %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="citations" component="citation" style="rich" %}
