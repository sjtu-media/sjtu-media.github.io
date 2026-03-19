---
title: 新闻
lang: zh
lang_ref: news
permalink: /zh/news/
nav:
  order: 1
  tooltip: Updates, announcements, and highlights
---

{% capture summary %}
实验室动态、公告、阶段性进展与通知。
{% endcapture %}

{% include page-intro.html eyebrow="新闻" title=page.title summary=summary %}



{% include section.html %}

{% include news-stream.html lang="zh" paginate=true page_size=10 %}
