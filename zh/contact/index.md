---
title: 联系
lang: zh
lang_ref: contact
permalink: /zh/contact/
nav:
  order: 5
  tooltip: Email, address, and collaboration details
---

{% capture summary %}
这里用于展示实验室官方联系信息、办公室位置、来访路线以及合作或招生说明。
{% endcapture %}

{% include page-intro.html eyebrow="联系" title=page.title summary=summary %}

{% include section.html %}

<div class="page-grid page-grid--three">
  <div class="page-panel">
    <h2>邮箱</h2>
    <p>将这里替换为实验室官方邮箱或共享行政联系方式。</p>
    <a href="mailto:replace-with-lab-email@example.com">replace-with-lab-email@example.com</a>
  </div>
  <div class="page-panel">
    <h2>地址</h2>
    <p>在这里补充楼宇、校区、城市和邮编，方便访客找到实验室。</p>
    <p class="page-note">Shanghai Jiao Tong University<br>请替换为正式地址</p>
  </div>
  <div class="page-panel">
    <h2>合作</h2>
    <p>这里用于合作咨询、实习申请或招生说明。</p>
    <a href="{{ site.links.github | prepend: 'https://github.com/' }}">GitHub 主页</a>
  </div>
</div>

{% include section.html %}

<div class="page-split">
  <div class="page-panel">
    <h2>到访实验室</h2>
    <p>在这里补充来访说明、校门出入信息或附近地标。</p>
    {% include figure.html image="images/photo.jpg" caption="请替换为校园、实验室或楼宇照片。" %}
  </div>
  <div class="page-panel">
    <h2>联系前请准备</h2>
    <p>可在这里说明希望潜在学生或合作方提供的材料，例如简历、研究陈述或近期成果链接。</p>
    <p class="page-note">这里也可以解释团队如何处理合作咨询、实习申请或媒体联络。</p>
  </div>
</div>
