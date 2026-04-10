{
  const initNewsPagination = () => {
    const pagers = document.querySelectorAll("[data-news-pagination]");

    const updateUrl = (page) => {
      const url = new URL(window.location.href);
      if (page <= 1) {
        url.searchParams.delete("page");
      } else {
        url.searchParams.set("page", String(page));
      }
      return `${url.pathname}${url.search}`;
    };

    const getCurrentPage = (totalPages) => {
      const raw = Number(new URLSearchParams(window.location.search).get("page") || "1");
      if (!Number.isFinite(raw) || raw < 1) return 1;
      return Math.min(raw, totalPages);
    };

    for (const container of pagers) {
      if (container.dataset.newsReady === "true") continue;
      container.dataset.newsReady = "true";

      const items = [...container.querySelectorAll("[data-news-item]")];
      const pageSize = Number(container.dataset.pageSize || "10");
      const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
      const currentPage = getCurrentPage(totalPages);
      const pager = container.nextElementSibling?.matches("[data-news-pager]")
        ? container.nextElementSibling
        : null;

      items.forEach((item, index) => {
        const page = Math.floor(index / pageSize) + 1;
        item.style.display = page === currentPage ? "" : "none";
      });

      if (!pager) continue;

      const prev = pager.querySelector("[data-news-prev]");
      const next = pager.querySelector("[data-news-next]");
      const status = pager.querySelector("[data-news-status]");

      if (status) {
        status.textContent = `${currentPage}/${totalPages}`;
      }

      if (prev) {
        if (currentPage <= 1) {
          prev.setAttribute("aria-disabled", "true");
          prev.removeAttribute("href");
        } else {
          prev.href = updateUrl(currentPage - 1);
          prev.removeAttribute("aria-disabled");
        }
      }

      if (next) {
        if (currentPage >= totalPages) {
          next.setAttribute("aria-disabled", "true");
          next.removeAttribute("href");
        } else {
          next.href = updateUrl(currentPage + 1);
          next.removeAttribute("aria-disabled");
        }
      }

      if (totalPages <= 1) {
        pager.style.display = "none";
      }
    }
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initNewsPagination);
  } else {
    initNewsPagination();
  }

  window.addEventListener("load", initNewsPagination);
  window.addEventListener("pageshow", initNewsPagination);
}
