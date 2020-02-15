import React, { Component } from 'react';
import './App.css';
import data from './tables.json'

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function () {
    return Object.keys(data['rows'][0]);
  }

  getHeader = function () {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>
    })
  }

  getRowsData = function () {
    var items = Object.keys(data['rows'][0]);
    // var keys = this.getKeys();
    var keys = this.getKeys();
    return data.rows.map((row, index) => {
      return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
    })
  }

  render() {
    return (
      <div className="bodyClass">
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>
            {this.getRowsData()}
          </tbody>
        </table>
      </div>

    );
  }
}
const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}><div dangerouslySetInnerHTML={{ __html: props.data[key] }}></div></td>
  })
}

