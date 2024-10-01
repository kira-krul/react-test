import { useEffect, useState } from "react";

export default function FilterButton({
  filter,
  allFilters,
  onClick,
  children,
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (allFilters.includes(filter)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <div
      className={"FilterBar-Filter " + (isActive && "FilterBar-Filter-active")}
      onClick={() => onClick(filter)}
    >
      {children}
    </div>
  );
}
