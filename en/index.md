---
title: Home
lang: en
lang_ref: home
permalink: /en/
---

{% include section.html size="wide" %}

{% assign featured_projects = site.data.projects | where: "group", "featured" %}
{% assign recent_publications = site.data.citations | sort: "date" | reverse | slice: 0, 3 %}
{% assign current_members = site.members | where_exp: "member", "member.group != 'alum'" %}
{% assign preview_members = current_members | sort: "slug" | slice: 0, 4 %}
{% assign hero_images = "" | split: "," %}
{% for file in site.static_files %}
  {% if file.path contains '/images/hero/' %}
    {% assign hero_images = hero_images | push: file %}
  {% endif %}
{% endfor %}
{% assign hero_images = hero_images | sort: "name" %}

{% capture lead %}
SJTU MedIA is based in the [AGI Institute](https://www.cs.sjtu.edu.cn/yjjg/813.html) of the School of Computer Science at Shanghai Jiao Tong University, with research spanning biomedical image analysis, multimodal medical foundation models, and intelligent diagnosis.  
{% endcapture %}

{% capture research_intro %}
Research content and featured projects now live under the same top-level section rather than a separate Projects tab.
{% endcapture %}


<div class="landing-hero">
  <div class="landing-hero__copy">
    <h1>{{ site.title }}</h1>
    <div class="landing-lead">
      {{ lead | markdownify }}
    </div>
    <div class="landing-actions">
      {% include button.html link="/en/research/" text="Explore research" icon="fa-solid fa-arrow-right" flip=true %}
      {% include button.html link="/en/publication/" text="View publications" icon="fa-solid fa-book-open" %}
      {% include button.html link="/en/people/" text="Meet the team" icon="fa-solid fa-people-group" style="bare" %}
    </div>
    <div class="landing-stats">
      <div class="landing-stat">
        <span class="landing-stat__value">{{ current_members | size }}</span>
        <span class="landing-stat__label">Current members</span>
      </div>
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.data.citations | size }}</span>
        <span class="landing-stat__label">Publication</span>
      </div>
    </div>
  </div>
  <div
    class="landing-hero__media"
    {% if hero_images.size > 1 %}
      data-hero-gallery
      data-interval="5000"
    {% endif %}
  >
    {% if hero_images.size > 0 %}
      <div class="landing-hero__gallery">
        {% for hero_image in hero_images %}
          <img
            src="{{ hero_image.path | relative_url }}"
            alt="Homepage gallery image {{ forloop.index }}"
            class="landing-hero__slide"
            {% if forloop.first %}
              data-active
            {% endif %}
            loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
          >
        {% endfor %}
      </div>
      {% if hero_images.size > 1 %}
        <div class="landing-hero__controls" aria-label="Homepage image controls">
          <button type="button" class="landing-hero__nav" data-hero-prev aria-label="Previous image">
            <span aria-hidden="true">‹</span>
          </button>
          <div class="landing-hero__dots" role="tablist" aria-label="Homepage image pagination">
            {% for hero_image in hero_images %}
              <button
                type="button"
                class="landing-hero__dot"
                data-hero-dot="{{ forloop.index0 }}"
                aria-label="Go to image {{ forloop.index }}"
                {% if forloop.first %}
                  data-active
                {% endif %}
              ></button>
            {% endfor %}
          </div>
          <button type="button" class="landing-hero__nav" data-hero-next aria-label="Next image">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      {% endif %}
    {% else %}
      <img src="{{ 'images/background.jpg' | relative_url }}" alt="Laboratory visual placeholder" class="landing-hero__fallback">
    {% endif %}
  </div>
</div>


{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">News</p>
  <h2>Lab Updates</h2>
</div>

{% include news-stream.html lang="en" limit=10 %}

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">News</p>
  <h2>Latest Publications</h2>
</div>

<div class="card-grid">
  {% for paper in recent_publications %}
    {% assign author_list = paper.authors | slice: 0, 3 | join: ", " %}
    {% if paper.authors.size > 3 %}
      {% assign author_list = author_list | append: ", et al." %}
    {% endif %}
    <article class="paper-card">
      <p class="news-meta">{{ paper.date | date: "%Y" }} · {{ paper.publisher }}</p>
      <h3>{{ paper.title }}</h3>
      <p class="paper-authors">{{ author_list }}</p>
      <a class="paper-link" href="{{ paper.link | relative_url | uri_escape }}">Browse publications <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>
