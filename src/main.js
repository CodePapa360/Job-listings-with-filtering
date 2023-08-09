import "./sass/main.scss";
import dataJson from "./data/data.json";
import renderJobs from "./renderJobs";

const jobsContainer = document.querySelector(".job-list");

function filtering(catagory, field) {
  return dataJson.filter((job) => job[catagory].includes(field));
}

jobsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".skill");
  if (!btn) return;
  const { catagory } = btn.dataset;
  const { field } = btn.dataset;

  const newList = filtering(catagory, field);

  renderJobs(newList);
});

renderJobs(dataJson);
