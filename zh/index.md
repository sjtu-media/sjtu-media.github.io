---
title: 首页
lang: zh
lang_ref: home
permalink: /zh/
---

{% include section.html size="wide" %}

{% assign featured_projects = site.data.projects | where: "group", "featured" %}
{% assign recent_posts = site.posts | sort: "date" | reverse %}
{% assign featured_post = recent_posts | first %}
{% assign recent_publications = site.data.citations | sort: "date" | reverse | slice: 0, 3 %}
{% assign preview_members = site.members | sort: "name" | slice: 0, 4 %}

<div class="landing-hero">
  <div class="landing-hero__copy">
    <p class="landing-kicker">上海交通大学</p>
    <h1>{{ site.title }}</h1>
    <p class="landing-lead">
      {{ site.description }}
      首页围绕站点五个核心栏目组织：新闻、研究、论文、团队与联系。
    </p>
    <p class="landing-body">
      用实验室真实的成员、项目和论文数据替换示例内容，即可把当前骨架站点投入正式使用。
    </p>
    <div class="landing-actions">
      {% include button.html link="/zh/research/" text="浏览研究" icon="fa-solid fa-arrow-right" flip=true %}
      {% include button.html link="/zh/publication/" text="查看论文" icon="fa-solid fa-book-open" %}
      {% include button.html link="/zh/people/" text="认识团队" icon="fa-solid fa-people-group" style="bare" %}
    </div>
    <div class="landing-stats">
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.members | size }}</span>
        <span class="landing-stat__label">人员主页</span>
      </div>
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.posts | size }}</span>
        <span class="landing-stat__label">新闻文章</span>
      </div>
      <div class="landing-stat">
        <span class="landing-stat__value">{{ site.data.citations | size }}</span>
        <span class="landing-stat__label">论文记录</span>
      </div>
    </div>
  </div>
  <div class="landing-hero__media">
    <img src="{{ 'images/background.jpg' | relative_url }}" alt="实验室视觉占位图">
    <p class="landing-hero__caption">将这里替换为近期团队合影、显微图像拼图或研究工作的视觉摘要。</p>
  </div>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">栏目概览</p>
  <h2>浏览实验室网站</h2>
  <p>各个一级页面保持统一的视觉语言，访问者可以自然地在动态、研究、论文、团队与联系信息之间切换。</p>
</div>

<div class="section-card-grid">
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-newspaper" %}</div>
    <h3>新闻</h3>
    <p>实验室公告、活动、教程、招聘信息和论文亮点。</p>
    <a class="section-card__link" href="{{ '/zh/news/' | relative_url }}">打开新闻 <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-microscope" %}</div>
    <h3>研究</h3>
    <p>研究主题、进行中的方向、数据集、软件与重点项目。</p>
    <a class="section-card__link" href="{{ '/zh/research/' | relative_url }}">打开研究 <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-book-open" %}</div>
    <h3>论文</h3>
    <p>自动生成的引文记录、重点论文和可搜索的论文列表。</p>
    <a class="section-card__link" href="{{ '/zh/publication/' | relative_url }}">打开论文 <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-solid fa-people-group" %}</div>
    <h3>团队</h3>
    <p>由 members collection 管理的教师、学生、职员与校友信息。</p>
    <a class="section-card__link" href="{{ '/zh/people/' | relative_url }}">打开团队 <span aria-hidden="true">→</span></a>
  </article>
  <article class="section-card">
    <div class="section-card__icon">{% include icon.html icon="fa-regular fa-envelope" %}</div>
    <h3>联系</h3>
    <p>官方联系方式、办公地点以及合作咨询信息。</p>
    <a class="section-card__link" href="{{ '/zh/contact/' | relative_url }}">打开联系 <span aria-hidden="true">→</span></a>
  </article>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">最新动态</p>
  <h2>最新新闻</h2>
  <p>突出展示最近更新，并为后续动态保留足够的浏览空间。</p>
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
  <p class="landing-kicker">研究</p>
  <h2>研究方向</h2>
  <p>研究内容与重点项目现在统一归入顶层 Research 页面，而不再单独拆出 Projects 栏。</p>
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
      <a class="project-link" href="{{ '/zh/research/' | relative_url }}">查看研究 <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">论文</p>
  <h2>最新论文</h2>
  <p>论文页面继续保持数据驱动和可搜索，但现在作为一级导航独立存在。</p>
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
      <a class="paper-link" href="{{ '/zh/publication/' | relative_url }}">浏览论文 <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">团队</p>
  <h2>团队概览</h2>
  <p>首页的成员预览直接从 members collection 读取，因此会与 People 页面保持一致。</p>
</div>

<div class="people-preview">
  {% for member in preview_members %}
    {% include portrait.html lookup=member.slug %}
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-cta">
  <div>
    <p class="landing-kicker">联系</p>
    <h2>让访问者更容易联系实验室</h2>
    <p>Contact 现已成为五个一级栏目之一。请将占位内容替换为正式邮箱、办公地点以及合作或招生信息。</p>
  </div>
  <div class="landing-cta__actions">
    {% include button.html link="/zh/contact/" text="打开联系页面" icon="fa-solid fa-arrow-right" flip=true %}
    {% include button.html link="/zh/people/" text="查看团队" style="bare" %}
  </div>
</div>
