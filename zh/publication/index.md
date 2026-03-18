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

{% capture summary %}
论文页面由 ORCID、DOI、PubMed 等来源生成的引文数据驱动。
{% endcapture %}

{% include page-intro.html eyebrow="论文" title=page.title summary=summary %}

{% if featured_publication %}
  {% include section.html %}

  <div class="page-section-head">
    <p class="page-section-head__eyebrow">推荐</p>
    <h2>代表性论文</h2>
    <p class="page-section-head__summary">顶部位置适合放最近发表或最具代表性的论文。</p>
  </div>

  {% include citation.html lookup=featured_publication.id style="rich" %}
{% endif %}

{% include section.html %}

<div class="page-toolbar">
  <h2>检索论文</h2>
  <p class="page-note">更新 `_data/sources.yaml`、`_data/orcid.yaml` 等文件后，就可以用实验室真实论文列表替换示例记录。</p>
  {% include search-box.html %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="citations" component="citation" style="rich" %}
