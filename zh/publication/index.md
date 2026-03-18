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
{% assign featured_publication = publications | first %}
{% assign t = site.data.i18n[page.lang] %}

{% capture summary %}
{{ t.pages.publication.summary }}
{% endcapture %}

{% include page-intro.html eyebrow=t.pages.publication.eyebrow title=t.pages.publication.title summary=summary %}

{% if featured_publication %}
  {% include section.html %}

  <div class="page-section-head">
    <p class="page-section-head__eyebrow">{{ t.pages.publication.highlighted_eyebrow }}</p>
    <h2>{{ t.pages.publication.highlighted_title }}</h2>
    <p class="page-section-head__summary">{{ t.pages.publication.highlighted_summary }}</p>
  </div>

  {% include citation.html lookup=featured_publication.id style="rich" %}
{% endif %}

{% include section.html %}

<div class="page-toolbar">
  <h2>{{ t.pages.publication.search_title }}</h2>
  <p class="page-note">{{ t.pages.publication.search_note }}</p>
  {% include search-box.html %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="citations" component="citation" style="rich" %}
