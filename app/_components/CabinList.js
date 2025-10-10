import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import { connection } from "next/server";

// component level use noStore, revalidate work only in page level

async function CabinList({ filter }) {
  // noStore(); // depricated in next js 15
  // connection(); // use connection instead on noStore

  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;

  switch (filter) {
    case "all":
      displayedCabins = cabins;
      break;
    case "small":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case "medium":
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
      );
      break;
    case "large":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;

    default:
      break;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
