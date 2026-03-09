# SJTU MedIA

This repository now uses the Greene Lab website template as the base for a full lab website, with local preview via Docker Compose.

## Upstream Template

- Template repo: `greenelab/lab-website-template`
- Documentation: <https://greene-lab.gitbook.io/lab-website-template-docs>

## Local Preview

Start the site:

```bash
docker compose up
```

Open <http://localhost:4000>.

Stop the site:

```bash
docker compose down
```

Notes:

- The container builds the template's Ruby + Python environment and runs both Jekyll preview and citation generation.
- Source files are mounted read-write because the citation workflow updates files in `_data/`.
- The entrypoint drops privileges to the owner of the mounted repo on Linux, so different users can start the site without hard-coded UID/GID settings.

## Content Structure

- `_members/` stores member profile pages.
- `_data/` stores projects, citations, and data sources.
- `research/`, `projects/`, `team/`, `blog/`, and `contact/` define the main site sections.
- `_posts/` stores blog posts.

## Next Customization Targets

- Replace example members in `_members/`.
- Replace example projects and citation sources in `_data/`.
- Replace placeholder copy in `index.md`, `research/`, `projects/`, `team/`, `blog/`, and `contact/`.
