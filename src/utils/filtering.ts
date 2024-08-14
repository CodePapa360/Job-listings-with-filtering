import dataJson from "../data/data.json";
import { Job } from "../types";

export default function (filters: string[]): Job[] {
  return dataJson.filter((job: Job) =>
    filters.every(
      (filter) =>
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter),
    ),
  );
}
