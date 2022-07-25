import { transactionsAccounts, transactionTypes, incomeCategory, transactionsCategories } from "./transactions";
import moment from "moment";
import getRandomNumber from "../helpers/getRandomNumber";
import { round } from "lodash";

const dataGenerator = () => {
  const date = moment()
    .year(getRandomNumber(2021, 2022))
    .month(getRandomNumber(0, 11))
    .date(getRandomNumber(1, 28))
    .toDate();

  const func = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  };

  const transactionsType = func(Object.values(transactionTypes));

  return {
    account: func(Object.values(transactionsAccounts)),
    type: transactionsType,
    sum: round(Math.random() * 100, 2),
    category: func(
      Object.values(transactionsType === transactionTypes.INCOME ? incomeCategory : transactionsCategories)
    ),
    date,
    comment: "TEST",
  };
};

export default dataGenerator;
