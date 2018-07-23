import { observable, action, computed } from "mobx";
import distance from "./helpers/StringDistance";

export class AppStore {
  @observable
  transactions = [
    {
      distance: 0,
      amount: "112.98",
      date: "27-01-2018T12:34",
      card_last_four: "2544"
    },
    {
      distance: 0,
      amount: "0.45",
      date: "01-12-2017T9:36",
      card_last_four: "4434"
    },
    {
      distance: 0,
      amount: "95.99",
      date: "23-11-2017T14:34",
      card_last_four: "3011"
    },
    {
      distance: 0,
      amount: "7774.32",
      date: "17-07-2017T03:34",
      card_last_four: "6051"
    },
    {
      distance: 0,
      amount: "1345.98",
      date: "22-06-2017T10:33",
      card_last_four: "0059"
    },
    {
      distance: 0,
      amount: "2850.7",
      date: "27-01-2018T12:34",
      card_last_four: "4444"
    },
    {
      distance: 0,
      amount: "45.0",
      date: "10-02-2018T02:34",
      card_last_four: "0110"
    },
    {
      distance: 0,
      amount: "1.0",
      date: "17-02-2018T18:34",
      card_last_four: "1669"
    },
    {
      distance: 0,
      amount: "4.69",
      date: "01-02-2018T02:34",
      card_last_four: "8488"
    },
    {
      distance: 0,
      amount: "1111.11",
      date: "15-01-2018T21:34",
      card_last_four: "9912"
    }
  ];

  @observable search = "";

  @computed
  get filteredTransactions() {
    if (!this.search) {
      return this.transactions;
    }

    const minDistance = this.transactions.reduce(
      (min, t) => (t.distance < min ? t.distance : min),
      this.transactions[0].distance
    );
    const filteredTransactions = this.transactions.filter(t => {
      return t.distance === minDistance;
    });

    return filteredTransactions
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .reverse();
  }

  @action
  setSearch = search => {
    this.search = search;

    this.transactions.forEach(t => {
      t.distance = Math.min(
        distance(this.search, t.amount).result,
        distance(this.search, t.date).result,
        distance(this.search, t.card_last_four).result
      );
    });
  };
}
