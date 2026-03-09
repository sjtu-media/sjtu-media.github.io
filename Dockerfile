FROM jekyll/jekyll:pages

RUN git config --system --add safe.directory /srv/jekyll \
    && gem install webrick -v 1.9.2 --no-document
