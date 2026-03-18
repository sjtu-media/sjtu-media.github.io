---
title: 首页
lang: zh
lang_ref: home
permalink: /zh/
---

{% include section.html size="wide" %}

{% assign t = site.data.i18n[page.lang] %}
{% assign featured_projects = site.data.projects | where: "group", "featured" %}
{% assign recent_posts = site.posts | sort: "date" | reverse %}
{% assign featured_post = recent_posts | first %}
{% assign recent_publications = site.data.citations | sort: "date" | reverse | slice: 0, 3 %}
{% assign preview_members = site.members | sort: "name" | slice: 0, 4 %}

<div class="landing-hero">
  <div class="landing-hero__copy">
    <p class="landing-kicker">{{ t.home.kicker }}</p>
    <h1>{{ site.title }}</h1>
    <p class="landing-lead">
      {{ site.description }}
      {{ t.home.lead_suffix }}
    </p>
    <p class="landing-body">
      {{ t.home.body }}
    </p>
    <div class="landing-actions">
      {% include button.html link="/zh/research/" text=t.home.actions.research icon="fa-solid fa-arrow-right" flip=true %}
      {% include button.html link="/zh/publication/" text=t.home.actions.publication icon="fa-solid fa-book-open" %}
      {% include button.html link="/zh/people/" text=t.home.actions.people icon="fa-solid fa-people-group" style="bare" %}
    </div>
    <div class="landing-stats">
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.members | size }}</span>
        <span class="landing-stat__label">{{ t.home.stats.people }}</span>
      </div>
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.posts | size }}</span>
        <span class="landing-stat__label">{{ t.home.stats.posts }}</span>
      </div>
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.data.citations | size }}</span>
        <span class="landing-stat__label">{{ t.home.stats.publications }}</span>
      </div>
    </div>
  </div>
  <div class="landing-hero__media">
    <img src="{{ 'images/background.jpg' | relative_url }}" alt="{{ t.home.hero_alt }}">
    <p class="landing-hero__caption">{{ t.home.hero_caption }}</p>
  </div>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">{{ t.home.sections.kicker }}</p>
  <h2>{{ t.home.sections.title }}</h2>
  <p>{{ t.home.sections.summary }}</p>
</div>

<div class="section-card-grid">
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-newspaper" %}</div>
    <h3>{{ t.home.sections.cards.news.title }}</h3>
    <p>{{ t.home.sections.cards.news.body }}</p>
    <a class="section-card__link" href="{{ '/zh/news/' | relative_url }}">{{ t.home.sections.cards.news.cta }} <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-microscope" %}</div>
    <h3>{{ t.home.sections.cards.research.title }}</h3>
    <p>{{ t.home.sections.cards.research.body }}</p>
    <a class="section-card__link" href="{{ '/zh/research/' | relative_url }}">{{ t.home.sections.cards.research.cta }} <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-book-open" %}</div>
    <h3>{{ t.home.sections.cards.publication.title }}</h3>
    <p>{{ t.home.sections.cards.publication.body }}</p>
    <a class="section-card__link" href="{{ '/zh/publication/' | relative_url }}">{{ t.home.sections.cards.publication.cta }} <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-people-group" %}</div>
    <h3>{{ t.home.sections.cards.people.title }}</h3>
    <p>{{ t.home.sections.cards.people.body }}</p>
    <a class="section-card__link" href="{{ '/zh/people/' | relative_url }}">{{ t.home.sections.cards.people.cta }} <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-envelope" %}</div>
    <h3>{{ t.home.sections.cards.contact.title }}</h3>
    <p>{{ t.home.sections.cards.contact.body }}</p>
    <a class="section-card__link" href="{{ '/zh/contact/' | relative_url }}">{{ t.home.sections.cards.contact.cta }} <span aria-hidden="true">→</span></a>
  </article>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">{{ t.home.updates.kicker }}</p>
  <h2>{{ t.home.updates.title }}</h2>
  <p>{{ t.home.updates.summary }}</p>
</div>

<div class="news-layout">
  {% if featured_post %}
    <article class="news-feature">
      <a class="news-feature__image" href="{{ featured_post.url | relative_url }}">
        <img src="{{ featured_post.image | default: 'images/photo.jpg' | relative_url }}" alt="{{ featured_post.title | escape }}">
      </a>
      <div class="news-feature__body">
        <p class="news-meta">{{ featured_post.date | date: "%b %-d, %Y" }}</p>
        <h3><a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a></h3>
        <p>{{ featured_post.excerpt | strip_html | strip_newlines | truncate: 260 }}</p>
      </div>
    </article>
  {% endif %}

  <div class="news-list">
    {% for post in recent_posts offset: 1 limit: 2 %}
      <article class="news-compact">
        <p class="news-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 140 }}</p>
      </article>
    {% endfor %}
  </div>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">{{ t.home.research.kicker }}</p>
  <h2>{{ t.home.research.title }}</h2>
  <p>{{ t.home.research.summary }}</p>
</div>

<div class="card-grid">
  {% for project in featured_projects limit: 3 %}
    <article class="project-card">
      <p class="news-meta">{{ project.subtitle }}</p>
      <h3>{{ project.title }}</h3>
      <div class="project-meta">{{ project.description | markdownify }}</div>
      <div class="project-tags">
        {% for tag in project.tags %}
          <span class="project-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      <a class="project-link" href="{{ '/zh/research/' | relative_url }}">{{ t.home.research.cta }} <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">{{ t.home.publication.kicker }}</p>
  <h2>{{ t.home.publication.title }}</h2>
  <p>{{ t.home.publication.summary }}</p>
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
      <a class="paper-link" href="{{ '/zh/publication/' | relative_url }}">{{ t.home.publication.cta }} <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">{{ t.home.people.kicker }}</p>
  <h2>{{ t.home.people.title }}</h2>
  <p>{{ t.home.people.summary }}</p>
</div>

<div class="people-preview">
  {% for member in preview_members %}
    {% include portrait.html lookup=member.slug %}
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-cta">
  <div>
    <p class="landing-kicker">{{ t.home.contact.kicker }}</p>
    <h2>{{ t.home.contact.title }}</h2>
    <p>{{ t.home.contact.summary }}</p>
  </div>
  <div class="landing-cta__actions">
    {% include button.html link="/zh/contact/" text=t.home.contact.actions.contact icon="fa-solid fa-arrow-right" flip=true %}
    {% include button.html link="/zh/people/" text=t.home.contact.actions.people style="bare" %}
  </div>
</div>
