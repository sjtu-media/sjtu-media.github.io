---
---

# SJTU MedIA

This repository now uses the Greene Lab website template as the base structure for a full lab website, including research, projects, team, blog, and contact sections.
Replace the sample content in `_members`, `_data`, `research/`, `projects/`, `blog/`, and `contact/` with your lab's real information.

{%
  include button.html
  type="docs"
  link="https://greene-lab.gitbook.io/lab-website-template-docs"
%}
{%
  include button.html
  type="github"
  text="Repository"
  link="dengyushan/sjtu-media.github.io"
%}

{% include section.html %}

## Highlights

{% capture text %}

Use the research section to curate highlighted papers, auto-generated citations, and searchable publication lists.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Use the projects section for datasets, software, collaborations, and featured initiatives from the group.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Use the team section for faculty, students, staff, alumni, and profile pages generated from the `_members` collection.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}
