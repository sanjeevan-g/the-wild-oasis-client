"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = new useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="all"
      >
        All Cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="small"
      >
        1&mdash;3 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="medium"
      >
        4&mdash;7 guests
      </Button>

      <Button
        activeFilter={activeFilter}
        filter="large"
        handleFilter={handleFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? " bg-primary-700 text-primary-50 " : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
