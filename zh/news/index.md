---
title: 新闻
lang: zh
lang_ref: news
permalink: /zh/news/
nav:
  order: 1
  tooltip: Updates, announcements, and highlights
---

{% assign t = site.data.i18n[page.lang] %}
{% capture summary %}
{{ t.pages.news.summary }}
{% endcapture %}

{% include page-intro.html eyebrow=t.pages.news.eyebrow title=t.pages.news.title summary=summary %}

{% include section.html %}

<div class="page-toolbar">
  <h2>{{ t.pages.news.browse_title }}</h2>
  <p class="page-note">{{ t.pages.news.browse_note }}</p>
  {% include search-box.html %}
  {% include tags.html tags=site.tags link="/zh/news/" %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="posts" component="post-excerpt" %}
