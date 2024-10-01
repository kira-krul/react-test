import { useState, useEffect } from "react";
import FilterButton from "./FilterButton";
import LegalNotice from "./LegalNotice";
import ReportDisplay from "./ReportDisplay";
import { FdaResponse } from "./types";

const FILTER_VALUES = {
  ALL: "All",
  ONGOING: "Ongoing",
  TERMINATED: "Terminated",
};

const TopReportsPage = () => {
  const [filter, setFilter] = useState("All");
  const [results, setResults] = useState<FdaResponse['results']>([]);
  const [meta, setMeta] = useState<Partial<FdaResponse['meta']>>({});

  const loadProducts = async () => {
    const json = await fetch(
      "https://api.fda.gov/drug/enforcement.json?limit=30"
    ).then((res) => res.json());

    const { results, meta } = json;
    setResults(results);
    setMeta(meta);
  };

  useEffect(() => loadProducts(), []);

  const filteredProducts =
    filter === "All"
      ? results
      : results.filter((result) => result.status === filter);

  const filters = Object.values(FILTER_VALUES);

  return (
    <div className="TopReportsPage">
      <div className="TopReportsPage-header">
        <div>
          This is the data from the FDA Recall Enterprise System (RES), a database
          that contains information on recall event information submitted to FDA
        </div>
        <div>
          {filters.map((filter) => (
            <FilterButton
              filter={filter}
              allFilters={filters}
              onClick={setFilter}
            >
              {filter.toUpperCase()}
            </FilterButton>
          ))}
        </div>
      </div>
      <div className="TopReportsPage-items">
        {filteredProducts.map((report, i) => (
          <ReportDisplay key={i} {...report} />
        ))}
      </div>
      <LegalNotice {...meta} />
    </div>
  );
};

export default TopReportsPage;
