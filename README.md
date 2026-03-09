# sjtu-media.github.io

GitHub Pages-compatible Jekyll site with local preview via Docker Compose.

## Prerequisites

- Docker
- Docker Compose v2

## Local preview

Start the site:

```bash
docker compose up
```

Then open `http://localhost:4000`.

Stop the site:

```bash
docker compose down
```

Notes:

- The first startup may take longer because Docker needs to build the image and pull the required gems.
- The source directory is mounted read-only, so this setup does not depend on matching host UID/GID values.
- File changes are watched from the mounted repository, so page edits should rebuild automatically.
- LiveReload is enabled for local preview.
