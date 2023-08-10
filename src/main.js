import "./sass/main.scss";
import dataJson from "./data/data.json";
import renderJobs from "./components/utils/renderJobs";
import renderFilterBar from "./components/utils/renderFilterBar";

const jobsContainer = document.querySelector(".job-list");

function filtering(filters) {
  return dataJson.filter((job) =>
    filters.every((filter) => {
      const [property, value] = Object.entries(filter)[0];
      return job[property] && job[property].includes(value);
    }),
  );
}

let currentStates = {
  role: null,
  level: null,
  tools: [],
  languages: [],
};

jobsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".skill");
  if (!btn) return;
  const { catagory } = btn.dataset;
  const { field } = btn.dataset;

  // currentStates.push({ [catagory]: field });
  // console.log(currentStates);
  // const newList = filtering(currentStates);
  // console.log(newList);

  // renderJobs(newList);
  // renderFilterBar(currentStates);
});

renderJobs(dataJson);

// let test = [{ a: 1 }, { b: 2 }, { c: 3 }];

// test.forEach((obj) => {
//   const rem = 2;

//   const target = Object.values(obj)[0] === rem;
//   console.log(target);
// });

// const var1 = ["a", "b", "c"];
// const var2 = ["p", "d"];

// const test = var1.some((varss) => var2.includes(varss));
// console.log(test);
