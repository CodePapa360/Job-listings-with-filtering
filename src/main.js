import "./sass/main.scss";
import dataJson from "./data/data.json";
import renderJobs from "./utils/renderJobs";
import renderFilterBar from "./utils/renderFilterBar";
import filtering from "./utils/filtering";

(function () {
  const jobsContainer = document.querySelector(".job-list");
  const filterContainer = document.querySelector(".filter-container__filters");
  const btnClear = document.querySelector(".btn-clear");

  let currentStates = [];
  renderJobs(dataJson);

  function showFilterBar() {
    const filterBar = document.querySelector(".filter-container");
    filterBar.style.display = "flex";
  }

  function hideFilterBar() {
    const filterBar = document.querySelector(".filter-container");
    filterBar.style.display = "none";
  }

  function addFilter(e) {
    const btn = e.target.closest(".skill");
    if (!btn) return;

    const { field } = btn.dataset;
    const hasField = currentStates.includes(field);
    if (hasField) return;

    currentStates.push(field);

    const newList = filtering(currentStates);
    renderJobs(newList);

    if (currentStates.length === 1) showFilterBar();
    renderFilterBar(currentStates);
  }

  function removeFilter(e) {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    const { field } = btn.dataset;

    const index = currentStates.indexOf(field);
    currentStates.splice(index, 1);

    const newList = filtering(currentStates);
    renderJobs(newList);

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
