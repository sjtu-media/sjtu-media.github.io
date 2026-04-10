---
title: 首页
lang: zh
lang_ref: home
permalink: /zh/
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
上海交通大学 MedIA 实验室，从属于上海交通大学计算机学院[通用人工智能研究所](https://www.cs.sjtu.edu.cn/yjjg/813.html)（AGI Institute），致力于生物医学图像处理、多模态医学基础模型与智能诊断。  
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
        <span class="landing-stat__value">{{ site.data.citations | size }}</span>
        <span class="landing-stat__label">论文</span>
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
  <!-- <p class="landing-kicker">动态</p> -->
  <h2>最新动态</h2>
</div>

{% include news-stream.html lang="zh" limit=10 %}

{% include section.html %}

<div class="landing-section-head">
  <!-- <p class="landing-kicker">动态</p> -->
  <h2>最新论文</h2>
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
      <a class="paper-link" href="{{ paper.link | relative_url | uri_escape }}">浏览论文 <span aria-hidden="true">→</span></a>
    </article>
  {% endfor %}
</div>
