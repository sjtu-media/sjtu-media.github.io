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
上海交通大学 MedIA 实验室，从属于上海交通大学计算机学院[通用人工智能研究所](https://www.cs.sjtu.edu.cn/yjjg/813.html)（AGI Institute），致力于生物医学图像处理、多模态医学基础模型与智能诊断。  
{% endcapture %}

{% capture sections_intro %}
各个一级页面保持统一的视觉语言，访问者可以自然地在动态、研究、论文、团队与联系信息之间切换。
{% endcapture %}

{% capture updates_intro %}
突出展示最近更新，并为后续动态保留足够的浏览空间。
{% endcapture %}

{% capture research_intro %}
研究内容与重点项目现在统一归入顶层 Research 页面，而不再单独拆出 Projects 栏。
{% endcapture %}

{% capture publication_intro %}
论文页面继续保持数据驱动和可搜索，但现在作为一级导航独立存在。
{% endcapture %}

{% capture people_intro %}
首页的成员预览与人数统计只包含当前成员，因此会与 People 页面中的“当前成员”分组保持一致。
{% endcapture %}

{% capture contact_intro %}
Contact 现已成为五个一级栏目之一。请将占位内容替换为正式邮箱、办公地点以及合作或招生信息。
{% endcapture %}

<div class="landing-hero">
  <div class="landing-hero__copy">
    <h1>{{ site.title }}</h1>
    <div class="landing-lead">
      {{ lead | markdownify }}
    </div>
    <div class="landing-actions">
      {% include button.html link="/zh/research/" text="浏览研究" icon="fa-solid fa-arrow-right" flip=true %}
      {% include button.html link="/zh/publication/" text="查看论文" icon="fa-solid fa-book-open" %}
      {% include button.html link="/zh/people/" text="认识团队" icon="fa-solid fa-people-group" style="bare" %}
    </div>
    <div class="landing-stats">
      <div class="landing-stat">
        <span class="landing-stat__value">{{ current_members | size }}</span>
        <span class="landing-stat__label">当前成员</span>
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
            alt="实验室首页轮播图 {{ forloop.index }}"
            class="landing-hero__slide"
            {% if forloop.first %}
              data-active
            {% endif %}
            loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
          >
        {% endfor %}
      </div>
      {% if hero_images.size > 1 %}
        <div class="landing-hero__controls" aria-label="首页图片切换">
          <button type="button" class="landing-hero__nav" data-hero-prev aria-label="上一张图片">
            <span aria-hidden="true">‹</span>
          </button>
          <div class="landing-hero__dots" role="tablist" aria-label="首页图片分页">
            {% for hero_image in hero_images %}
              <button
                type="button"
                class="landing-hero__dot"
                data-hero-dot="{{ forloop.index0 }}"
                aria-label="切换到第 {{ forloop.index }} 张图片"
                {% if forloop.first %}
                  data-active
                {% endif %}
              ></button>
            {% endfor %}
          </div>
          <button type="button" class="landing-hero__nav" data-hero-next aria-label="下一张图片">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      {% endif %}
    {% else %}
      <img src="{{ 'images/background.jpg' | relative_url }}" alt="实验室视觉占位图" class="landing-hero__fallback">
    {% endif %}
  </div>
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">栏目概览</p>
  <h2>浏览实验室网站</h2>
  <div>{{ sections_intro | markdownify }}</div>
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
  <p class="landing-kicker">研究</p>
  <h2>研究方向</h2>
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
      <a class="project-link" href="{{ '/zh/research/' | relative_url }}">查看研究 <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">论文</p>
  <h2>最新论文</h2>
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
      <a class="paper-link" href="{{ '/zh/publication/' | relative_url }}">浏览论文 <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>

{% include section.html %}

<div class="landing-section-head">
  <p class="landing-kicker">团队</p>
  <h2>团队概览</h2>
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
    <p class="landing-kicker">联系</p>
    <h2>让访问者更容易联系实验室</h2>
    <div>{{ contact_intro | markdownify }}</div>
  </div>
  <div class="landing-cta__actions">
    {% include button.html link="/zh/contact/" text="打开联系页面" icon="fa-solid fa-arrow-right" flip=true %}
    {% include button.html link="/zh/people/" text="查看团队" style="bare" %}
  </div>
</div>
