---
title: News
lang: en
lang_ref: news
permalink: /en/news/
nav:
  order: 1
  tooltip: Updates, announcements, and highlights
---

{% capture summary %}
News, announcements, recruiting notes, tutorials, and paper highlights from the lab.
{% endcapture %}

{% include page-intro.html eyebrow="News" title=page.title summary=summary %}

{% include section.html %}

<div class="page-toolbar">
  <h2>Browse Posts</h2>
  <p class="page-note">Search the archive or filter by tags. Replace the sample posts in `_posts/` with your own news items when ready.</p>
  {% include search-box.html %}
  {% include tags.html tags=site.tags link="/en/news/" %}
  {% include search-info.html %}
</div>

{% include section.html %}

{% include list.html data="posts" component="post-excerpt" %}
