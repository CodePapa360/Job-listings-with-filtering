import dataJson from "../data/data.json";

export function filtering(filters) {
  return dataJson.filter((job) => {
    return filters.every((filter) => {
      return (
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter)
      );
    });
  });
}
