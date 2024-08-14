import "./sass/main.scss";
import dataJson from "./data/data.json";
import renderJobs from "./utils/renderJobs";
import renderFilterBar from "./utils/renderFilterBar";
import filtering from "./utils/filtering";
import { Filters, Jobs } from "./types";

(function () {
  const jobsContainer = document.querySelector(".job-list") as HTMLUListElement;
  const filterContainer = document.querySelector(
    ".filter-container__filters",
  ) as HTMLDivElement;
  const btnClear = document.querySelector(".btn-clear") as HTMLButtonElement;

  let currentStates: Filters = [];
  renderJobs(dataJson);

  function showFilterBar() {
    const filterBar = document.querySelector(
      ".filter-container",
    ) as HTMLDivElement;
    filterBar.style.display = "flex";
  }

  function hideFilterBar() {
    const filterBar = document.querySelector(
      ".filter-container",
    ) as HTMLDivElement;
    filterBar.style.display = "none";
  }

  function addFilter(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest(
      ".skill",
    ) as HTMLElement | null;
    if (!btn) return;

    const { field } = btn.dataset;
    if (!field) return;

    const hasField = currentStates.includes(field);
    if (hasField) return;

    currentStates.push(field);

    const jobs: Jobs = filtering(currentStates);
    renderJobs(jobs);

    if (currentStates.length === 1) showFilterBar();
    renderFilterBar(currentStates);
  }

  function removeFilter(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest(
      ".filter",
    ) as HTMLElement | null;
    if (!btn) return;
    const { field } = btn.dataset;
    if (!field) return;

    const index = currentStates.indexOf(field);
    currentStates.splice(index, 1);

    const jobs: Jobs = filtering(currentStates);
    renderJobs(jobs);

    if (currentStates.length === 0) hideFilterBar();
    renderFilterBar(currentStates);
  }

  function removeAllFilters() {
    currentStates = [];
    hideFilterBar();
    renderJobs(dataJson);
  }

  jobsContainer.addEventListener("click", addFilter);
  filterContainer.addEventListener("click", removeFilter);
  btnClear.addEventListener("click", removeAllFilters);
})();
