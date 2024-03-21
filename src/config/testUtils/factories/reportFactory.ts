import Report from "types/entities/Report";

function reportFactory(params: Partial<Report> = {}): Report {
  const defaultValues: Report = {
    id: 1,
    name: "Report 1",
    link: "http://example.com/report1",
    active: true,
    createdAt: "2024-03-19T18:38:04.715-03:00",
    updatedAt: "2024-03-19T18:38:04.715-03:00",
  };
  return Object.assign(defaultValues, params) as Report;
}

export default reportFactory;