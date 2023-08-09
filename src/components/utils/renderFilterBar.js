export default function (filters) {
  const filterContainer = document.querySelector(".filter-container__filters");

  const markup = filters
    .map((filter) => {
      const [key, value] = Object.entries(filter)[0];

      return `
    <button type="button" class="filter" data-catagory="${key}" data-field="${value}">
        ${value}
        <span><img src="./images/icon-remove.svg" alt="Remove icon"/></span>
    </button>
    `;
    })
    .join("");

  filterContainer.innerHTML = markup;
}
