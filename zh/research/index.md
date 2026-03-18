---
title: 研究
lang: zh
lang_ref: research
permalink: /zh/research/
nav:
  order: 2
  tooltip: Research areas and featured directions
---

{% capture summary %}
这里用于展示实验室的主要研究方向、方法、数据集、软件以及长期科学主题。
{% endcapture %}

{% include page-intro.html eyebrow="研究" title=page.title summary=summary %}

{% include section.html %}

<div class="page-split">
  <div class="page-panel">
    <h2>研究主题</h2>
    <p>用几个简短标签快速传达实验室的研究身份与方法特征。</p>
    <div class="page-tag-cloud">
      <span class="tag">Medical image analysis</span>
      <span class="tag">Image registration</span>
      <span class="tag">Segmentation</span>
      <span class="tag">Computational anatomy</span>
      <span class="tag">Microscopy</span>
      <span class="tag">Clinical AI</span>
    </div>
  </div>
  <div class="page-panel">
    <h2>如何定制</h2>
    <p>下方研究卡片由 `_data/projects.yaml` 驱动。请将示例条目替换为你们自己的研究主题、软件、数据集和合作项目。</p>
    <p class="page-note">这样可以把研究方向与配套资源集中在同一页，而论文内容则放到独立的 Publication 页面。</p>
  </div>
</div>

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">重点</p>
  <h2>重点研究方向</h2>
  <p class="page-section-head__summary">优先展示实验室最重要的研究主题或代表性工作。</p>
</div>

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

<div class="page-section-head">
  <p class="page-section-head__eyebrow">更多</p>
  <h2>资源与进行中的工作</h2>
  <p class="page-section-head__summary">次级项目、数据集、工具和合作可以放在这里。</p>
</div>

{% include list.html component="card" data="projects" filter="!group" style="small" %}
