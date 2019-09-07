import React from 'react'
import Item from './Item'

const Products = (props) => {
  let returnValue = [];

  for (var key in props.producto) {
    if (props.producto[key]) {
      let arr = [];
      props.producto[key].forEach(element => {
        arr[element.tag_name] = (arr[element.tag_name] || []).concat(element)
      });
      let total = props.producto[key]
        .map((item) => {
          return item.total
        })
        .reduce((acc, val) =>
          acc + val, 0
        );
      if (props.producto[key].length > 0) {
        returnValue.push((
          <div className="card col-md-3 col-xs-12 p-2">
            <div className="card-title">
              <h5>{key} ${total.toFixed(2)} </h5>
            </div>
            <div className="card-body">
              <p>Ventas por garzon</p>
              <Item key={key} item={props.producto[key]} vendedores={arr} />
            </div>
          </div>
        ))
      } else {
        returnValue.push((
          <div className="card col-md-3 col-xs-12 p-2">
            <div className="card-title">
              <h5>{key}</h5>
            </div>
            <div className="card-body">
              <p>No hubo Ventas  para el periodo seleccionado</p>
            </div>
          </div>
        ))
      }
    }
  }
  return returnValue;
}


export default Products
