---
title: Contact
lang: zh
lang_ref: contact
permalink: /zh/contact/
nav:
  order: 5
  tooltip: Email, address, and collaboration details
---

{% capture summary %}
Use this page for the lab's official contact information, office location, directions, and collaboration or recruiting details.
{% endcapture %}

{% include page-intro.html eyebrow="Contact" title=page.title summary=summary %}

{% include section.html %}

<div class="page-grid page-grid--three">
  <div class="page-panel">
    <h2>Email</h2>
    <p>Replace this placeholder with the lab's official email or shared administrative contact.</p>
    <a href="mailto:replace-with-lab-email@example.com">replace-with-lab-email@example.com</a>
  </div>
  <div class="page-panel">
    <h2>Location</h2>
    <p>Add the building, campus, city, and postal code here so visitors can find the lab.</p>
    <p class="page-note">Shanghai Jiao Tong University<br>Replace with official address</p>
  </div>
  <div class="page-panel">
    <h2>Collaboration</h2>
    <p>Use this block for collaboration inquiries, internship applications, or recruitment instructions.</p>
    <a href="{{ site.links.github | prepend: 'https://github.com/' }}">GitHub profile</a>
  </div>
</div>

{% include section.html %}

<div class="page-split">
  <div class="page-panel">
    <h2>Visit the Lab</h2>
    <p>Share visitor instructions, campus entry notes, or nearby landmarks here.</p>
    {% include figure.html image="images/photo.jpg" caption="Replace with a campus, lab, or building photo." %}
  </div>
  <div class="page-panel">
    <h2>Before You Reach Out</h2>
    <p>List the materials you want from prospective students or collaborators, such as a CV, research statement, or links to recent work.</p>
    <p class="page-note">This section can also explain how the group handles project inquiries, internships, or media requests.</p>
  </div>
</div>
