import { getCountries } from "@/app/_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const safeCountries = Array.isArray(countries) ? countries : [];

  const selectedCountry = safeCountries.find(
    (country) => country.name === defaultCountry
  );
  const flag = selectedCountry?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {safeCountries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
