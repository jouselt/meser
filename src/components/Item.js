import React from 'react'

const Items = (props) => {
  if (props) {
    let ventas =[];
    for (var key in props.vendedores) {
      let totalVendido= props.vendedores[key].map((item) => {
        return item.total
      })
        .reduce((acc, val) =>
          acc + val, 0
        );
        ventas.push(<li>{key}:  ${totalVendido.toFixed(2)} </li>)
    }
    return (
      <div>
        <ul>
            {ventas}
        </ul>
      </div>
    );
  }
}

export default Items;
