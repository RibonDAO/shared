import NonProfit from "types/entities/NonProfit";

const MAX_AMOUNT_PER_DONOR_RECIPIENT = 200;
const MAX_DAYS_PER_DONOR_RECIPIENT = 730; //  2 years

const splitByComma = (phrase: string) => phrase.split(",").map((dr) => dr.trim());

const first = (array: any[]) => array[0];

const last = (array: any[]) => array[array.length - 1];

function splitDaysIntoPeriods(days: number) {
  let remainingDays = days;
  const result = [0, 0, remainingDays];
  result[0] = Math.floor(remainingDays / 365);
  remainingDays %= 365;
  result[1] = Math.floor(remainingDays / 30);
  remainingDays %= 30;
  result[2] = remainingDays;
  return result;
}

function periodInWords(daysCount: number, t: any) {
  const periods = splitDaysIntoPeriods(daysCount);

  const periodNames = ["year", "month", "day"];

  const singularOrPlural = (count: number, period: string) =>
    count === 1 ? t(period) : t(`${period}s`);

  const result = periods
    .map((period, index) => {
      if (period === 0) return null;
      return `${period} ${singularOrPlural(period, periodNames[index])}`;
    })
    .filter((period) => period);

  if (result.length === 0) return "";
  if (result.length === 1) return String(result[0]);

  return `${result.slice(0, -1).join(", ")} ${t("and")} ${result.slice(-1)}`;
}

export function impactNormalizer(
  nonProfit: NonProfit,
  roundedImpact: number,
  t: any,
) {
  const nonProfitImpact = last(nonProfit?.nonProfitImpacts || []);
  const { measurementUnit, donorRecipient, impactDescription } = nonProfitImpact;

  const isBasedOnTime = measurementUnit === "days_months_and_years";

  const recipientsCount = () => {
    if (isBasedOnTime) {
      return Math.ceil(roundedImpact / MAX_DAYS_PER_DONOR_RECIPIENT);
    }

    return Math.ceil(roundedImpact / MAX_AMOUNT_PER_DONOR_RECIPIENT);
  };

  const formattedDonorRecipient = () => {
    const count = recipientsCount();
    const recipients = splitByComma(donorRecipient || "");
    const recipient = count === 1 ? first(recipients) : last(recipients);

    return `${count} ${recipient}`;
  };

  const formattedImpactDescription = () => {
    const descriptions = splitByComma(impactDescription || "");
    const description =
      roundedImpact === 1 ? first(descriptions) : last(descriptions);

    const formattedByUnit = isBasedOnTime
      ? `${t("of")} ${description}`
      : description;

    return `${formattedByUnit} ${t("for")}`;
  };

  const formattedImpactAmount = () => {
    const rawImpactPerRecipient = Math.round(roundedImpact / recipientsCount());

    if (isBasedOnTime) return periodInWords(rawImpactPerRecipient, t);

    return rawImpactPerRecipient || "";
  };

  return [
    formattedImpactAmount(),
    formattedImpactDescription(),
    formattedDonorRecipient(),
  ];
}
