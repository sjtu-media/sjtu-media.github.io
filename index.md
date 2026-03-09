---
---

{% include section.html size="wide" %}

{% assign featured_projects = site.data.projects | where: "group", "featured" %}
{% assign recent_posts = site.posts | sort: "date" | reverse %}
{% assign featured_post = recent_posts | first %}
{% assign recent_publications = site.data.citations | sort: "date" | reverse | slice: 0, 3 %}
{% assign preview_members = site.members | sort: "name" | slice: 0, 4 %}

<div class="landing-hero">
  <div class="landing-hero__copy">
    <p class="landing-kicker">Shanghai Jiao Tong University</p>
    <h1>{{ site.title }}</h1>
    <p class="landing-lead">
      {{ site.description }}
      The homepage is now organized around the five primary sections of the site: News, Research, Publication, People, and Contact.
    </p>
    <p class="landing-body">
      Replace the current sample members, projects, and citation sources with your lab's real records to turn this scaffold into the production website.
    </p>
    <div class="landing-actions">
      {% include button.html link="research" text="Explore research" icon="fa-solid fa-arrow-right" flip=true %}
      {% include button.html link="publication" text="View publications" icon="fa-solid fa-book-open" %}
      {% include button.html link="people" text="Meet the team" icon="fa-solid fa-people-group" style="bare" %}
    </div>
    <div class="landing-stats">
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.members | size }}</span>
        <span class="landing-stat__label">People profiles</span>
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
  <div class="landing-hero__media">
    <img src="{{ 'images/background.jpg' | relative_url }}" alt="Laboratory visual placeholder">
    <p class="landing-hero__caption">Replace this placeholder with a recent lab photo, microscopy panel, or visual summary of your work.</p>
  </div>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">Site Sections</p>
  <h2>Navigate the Lab Website</h2>
  <p>Each major part of the site follows the same visual language so visitors can move between updates, research, publications, people, and contact information without a style break.</p>
</div>

<div class="section-card-grid">
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-newspaper" %}</div>
    <h3>News</h3>
    <p>Announcements, events, tutorials, recruiting notes, and paper highlights from the group.</p>
    <a class="section-card__link" href="{{ '/news/' | relative_url }}">Open News <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-microscope" %}</div>
    <h3>Research</h3>
    <p>Research themes, ongoing directions, datasets, software, and featured projects.</p>
    <a class="section-card__link" href="{{ '/research/' | relative_url }}">Open Research <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-book-open" %}</div>
    <h3>Publication</h3>
    <p>Auto-generated citation records, highlighted papers, and searchable publication listings.</p>
    <a class="section-card__link" href="{{ '/publication/' | relative_url }}">Open Publication <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-people-group" %}</div>
    <h3>People</h3>
    <p>Faculty, students, staff, and alumni managed from the members collection.</p>
    <a class="section-card__link" href="{{ '/people/' | relative_url }}">Open People <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-envelope" %}</div>
    <h3>Contact</h3>
    <p>Official contact channels, location details, and information for collaborators.</p>
    <a class="section-card__link" href="{{ '/contact/' | relative_url }}">Open Contact <span aria-hidden="true">→</span></a>
  </article>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">Updates</p>
  <h2>Latest News</h2>
  <p>Recent posts are highlighted prominently, with enough space for one featured update and quick follow-on items.</p>
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
  <p>Research content and featured projects now live under the same top-level section rather than a separate Projects tab.</p>
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
      <a class="project-link" href="{{ '/research/' | relative_url }}">See research <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">Publication</p>
  <h2>Latest Publications</h2>
  <p>The publication section remains data-driven and searchable, but now sits as its own first-class page in the navigation.</p>
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
      <a class="paper-link" href="{{ '/publication/' | relative_url }}">Browse publications <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">People</p>
  <h2>People Snapshot</h2>
  <p>Team members are surfaced directly from the members collection so the homepage stays aligned with the People page.</p>
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
    <p>The contact section is now one of the five primary site areas. Replace the placeholder details with your official lab email, office location, and collaboration or recruiting information.</p>
  </div>
  <div class="landing-cta__actions">
    {% include button.html link="contact" text="Open contact page" icon="fa-solid fa-arrow-right" flip=true %}
    {% include button.html link="people" text="View people" style="bare" %}
  </div>
</div>
