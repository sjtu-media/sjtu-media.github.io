---
title: Home
lang: en
lang_ref: home
permalink: /en/
---

{% include section.html size="wide" %}

{% assign featured_projects = site.data.projects | where: "group", "featured" %}
{% assign recent_posts = site.posts | sort: "date" | reverse %}
{% assign featured_post = recent_posts | first %}
{% assign recent_publications = site.data.citations | sort: "date" | reverse | slice: 0, 3 %}
{% assign current_members = site.members_en | where_exp: "member", "member.group != 'alum'" %}
{% assign preview_members = current_members | sort: "name" | slice: 0, 4 %}
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

{% capture sections_intro %}
Each major part of the site follows the same visual language so visitors can move between updates, research, publications, people, and contact information without a style break.
{% endcapture %}

{% capture updates_intro %}
Recent posts are highlighted prominently, with enough space for one featured update and quick follow-on items.
{% endcapture %}

{% capture research_intro %}
Research content and featured projects now live under the same top-level section rather than a separate Projects tab.
{% endcapture %}

{% capture publication_intro %}
The publication section remains data-driven and searchable, but now sits as its own first-class page in the navigation.
{% endcapture %}

{% capture people_intro %}
The homepage preview and count include current members only, keeping them aligned with the Current Members section on the People page.
{% endcapture %}

{% capture contact_intro %}
The contact section is now one of the five primary site areas. Replace the placeholder details with your official lab email, office location, and collaboration or recruiting information.
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
        <span class="landing-stat__value">{{ site.posts | size }}</span>
        <span class="landing-stat__label">News posts</span>
      </div>
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.data.citations | size }}</span>
        <span class="landing-stat__label">Publication records</span>
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
  <p class="landing-kicker">Site Sections</p>
  <h2>Navigate the Lab Website</h2>
  <div>{{ sections_intro | markdownify }}</div>
</div>

<div class="section-card-grid">
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-newspaper" %}</div>
    <h3>News</h3>
    <p>Announcements, events, tutorials, recruiting notes, and paper highlights from the group.</p>
    <a class="section-card__link" href="{{ '/en/news/' | relative_url }}">Open News <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-microscope" %}</div>
    <h3>Research</h3>
    <p>Research themes, ongoing directions, datasets, software, and featured projects.</p>
    <a class="section-card__link" href="{{ '/en/research/' | relative_url }}">Open Research <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-book-open" %}</div>
    <h3>Publication</h3>
    <p>Auto-generated citation records, highlighted papers, and searchable publication listings.</p>
    <a class="section-card__link" href="{{ '/en/publication/' | relative_url }}">Open Publication <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-people-group" %}</div>
    <h3>People</h3>
    <p>Faculty, students, staff, and alumni managed from the members collection.</p>
    <a class="section-card__link" href="{{ '/en/people/' | relative_url }}">Open People <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-envelope" %}</div>
    <h3>Contact</h3>
    <p>Official contact channels, location details, and information for collaborators.</p>
    <a class="section-card__link" href="{{ '/en/contact/' | relative_url }}">Open Contact <span aria-hidden="true">→</span></a>
  </article>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">Updates</p>
  <h2>Latest News</h2>
  <div>{{ updates_intro | markdownify }}</div>
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
  <p class="landing-kicker">Research</p>
  <h2>Research Directions</h2>
  <div>{{ research_intro | markdownify }}</div>
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
      <a class="project-link" href="{{ '/en/research/' | relative_url }}">See research <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">Publication</p>
  <h2>Latest Publications</h2>
  <div>{{ publication_intro | markdownify }}</div>
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
      <a class="paper-link" href="{{ '/en/publication/' | relative_url }}">Browse publications <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">People</p>
  <h2>People Snapshot</h2>
  <div>{{ people_intro | markdownify }}</div>
</div>

<div class="people-preview">
  {% for member in preview_members %}
    {% include portrait.html lookup=member.slug %}
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-cta">
  <div>
    <p class="landing-kicker">Contact</p>
    <h2>Make it easy to reach the lab</h2>
    <div>{{ contact_intro | markdownify }}</div>
  </div>
  <div class="landing-cta__actions">
    {% include button.html link="/en/contact/" text="Open contact page" icon="fa-solid fa-arrow-right" flip=true %}
    {% include button.html link="/en/people/" text="View people" style="bare" %}
  </div>
</div>
