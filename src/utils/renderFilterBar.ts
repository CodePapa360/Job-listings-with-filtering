import { Filters } from "../types";

export default function (filters: Filters): void {
  const filterContainer = document.querySelector(
    ".filter-container__filters",
  ) as HTMLDivElement | null;
  if (!filterContainer) return;

  const markup = filters
    .map(
      (filter: string) => `
    <button type="button" class="filter" data-field="${filter}">
        ${filter}
        <span><img src="./images/icon-remove.svg" alt="Remove icon"/></span>
    </button>
    `,
    )
    .join("");

  filterContainer.innerHTML = markup;
}
