---
title: Publication
lang: en
lang_ref: publication
permalink: /en/publication/
nav:
  order: 3
  tooltip: Publications and citation records
---

{% assign publications = site.data.citations | sort: "date" | reverse %}
{% assign featured_candidates = site.data.citations | where: "featured", true %}
{% assign featured_publication = featured_candidates | first | default: publications.first %}

{% include page-intro.html eyebrow="Publication" title=page.title summary=summary %}

{% if featured_publication %}
  {% include section.html %}

  <div class="page-section-head">
    <p class="page-section-head__eyebrow">Highlighted</p>
    <h2>Selected Publication</h2>
  </div>

  {% include citation.html lookup=featured_publication.id style="rich" %}
{% endif %}

{% include section.html %}

<div class="page-toolbar">
  <h2>Search Publications</h2>
  {% include search-box.html %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="citations" component="citation" style="rich" %}
