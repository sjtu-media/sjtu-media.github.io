#! /bin/bash

set -euo pipefail

drop_to_repo_owner() {
    if [[ "${LWT_PRIVS_DROPPED:-0}" == "1" ]] || [[ "$(id -u)" != "0" ]]; then
        return
    fi

    local app_uid app_gid
    app_uid="$(stat -c '%u' /usr/src/app)"
    app_gid="$(stat -c '%g' /usr/src/app)"

    if [[ "${app_uid}:${app_gid}" == "0:0" ]]; then
        return
    fi

    for path in /usr/src/app/.jekyll-cache /usr/src/app/.sass-cache /usr/src/app/_site; do
        if [[ -e "${path}" ]]; then
            chown -R "${app_uid}:${app_gid}" "${path}" || true
        fi
    done

    export HOME=/tmp/lwt-home
    mkdir -p "${HOME}"
    chown "${app_uid}:${app_gid}" "${HOME}"
    export LWT_PRIVS_DROPPED=1
    exec gosu "${app_uid}:${app_gid}" /var/entrypoint.sh "$@"
}

run_site() {
    printf "\n\nContents:\n\n"
    ls

    python3 _cite/cite.py

    watchmedo auto-restart \
        --debug-force-polling \
        --patterns="_config.yaml" \
        --signal SIGTERM \
        -- bundle exec jekyll serve --force_polling --livereload --trace --host=0.0.0.0 --destination /tmp/jekyll-site \
        | sed "s/LiveReload address.*//g;s/0.0.0.0/localhost/g" &

    watchmedo shell-command \
        --debug-force-polling \
        --recursive \
        --wait \
        --command="python3 _cite/cite.py" \
        --patterns="_data/sources*;_data/orcid*;_data/pubmed*;_data/google-scholar*" \
        .
}

drop_to_repo_owner "$@"
run_site
