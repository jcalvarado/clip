import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("AppStore")
@observer
class Transactions extends Component {
  createTable = () => {
    const table = [];
    console.log(this.props.AppStore);

    this.props.AppStore.filteredTransactions.forEach((t, i) => {
      table.push(
        <tr key={i}>
          <td>{t.distance}</td>
          <td>{t.amount}</td>
          <td>{t.date}</td>
          <td>{t.card_last_four}</td>
        </tr>
      );
    });

    return table;
  };

  render() {
    return (
      <table className={this.props.className}>
        <tbody>
          <tr>
            <th>Distance</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Digits</th>
          </tr>
          {this.createTable()}
        </tbody>
      </table>
    );
  }
}

export default Transactions;
