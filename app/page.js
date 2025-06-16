import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>Hello next!</h1>
      <Link href="/cabins">Cabins</Link>
    </div>
  );
}
