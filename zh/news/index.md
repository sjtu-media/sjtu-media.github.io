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
实验室的新闻、公告、招聘说明、教程以及论文亮点。
{% endcapture %}

{% include page-intro.html eyebrow="新闻" title=page.title summary=summary %}

{% include section.html %}

<div class="page-toolbar">
  <h2>浏览文章</h2>
  <p class="page-note">你可以搜索归档或按标签筛选。准备好之后，将 `_posts/` 中的示例文章替换为实验室自己的新闻内容。</p>
  {% include search-box.html %}
  {% include tags.html tags=site.tags link="/zh/news/" %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="posts" component="post-excerpt" %}
