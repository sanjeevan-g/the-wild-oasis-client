import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

// page level
export const revalidate = 3600; // once per hour
// page will be revalidated only if a user visit this page after revalidate sec
// then page will be generated and changes are visible after 2nd refresh or to 2nd user

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  // CHANGE
  const data = await searchParams;
  const filter = data?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8 ">
        <Filter />
      </div>
      {/* addingkey to suspense, when key changes the component will remount,
      in nextjs, navigation are build in react transition. use suspense won't hide prev data untill transition is done
      but updating the key will make the suspense to remount
      
      */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
