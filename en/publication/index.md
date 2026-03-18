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
{% assign featured_publication = publications | first %}

{% capture summary %}
The publication page is driven by citation data generated from your ORCID, DOI, PubMed, and related sources.
{% endcapture %}

{% include page-intro.html eyebrow="Publication" title=page.title summary=summary %}

{% if featured_publication %}
  {% include section.html %}

  <div class="page-section-head">
    <p class="page-section-head__eyebrow">Highlighted</p>
    <h2>Selected Publication</h2>
    <p class="page-section-head__summary">Use the top slot for a recent or representative paper.</p>
  </div>

  {% include citation.html lookup=featured_publication.id style="rich" %}
{% endif %}

{% include section.html %}

<div class="page-toolbar">
  <h2>Search Publications</h2>
  <p class="page-note">Update `_data/sources.yaml`, `_data/orcid.yaml`, and related files to replace the sample records with your lab's real publication list.</p>
  {% include search-box.html %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="citations" component="citation" style="rich" %}
