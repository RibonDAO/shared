import { Languages } from "types/enums/Languages";
import { TaxIdPTBR } from "types/enums/TaxIdPTBR";
import { TaxIdUS } from "types/enums/TaxIdUS";

export function maskForTaxId(country: string, currentLang: Languages) {
  const TaxId = currentLang === Languages.PT ? TaxIdPTBR : TaxIdUS;
  const key = country
    .toUpperCase()
    .replace(/\s/g, "")
    .split("(")[0] as keyof typeof TaxId;
  if (key in TaxId) return TaxId[key];

  return "";
}
