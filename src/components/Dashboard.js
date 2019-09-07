import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dashboard } from '../actions/userActions';
import Product from './Products'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      totalUnidadesVendidas: 0,
      grupos: []
    };
  }
  componentDidMount() {
    if (this.props.user.user) {
      this.props.dashboard(this.props.user.user.token).then(
        () => {
          this.obtenerTotalles(this.props.user.totalization.totalization);
        });
    } else {
      this.props.history.push("/");
    }
  }

  obtenerTotalles(totalization) {

    let total = totalization
      .map((item) => {
        return item.total
      })
      .reduce((acc, val) => {
        return acc + val
      });
    this.setState({ total });

    let totalUnidadesVendidas = totalization
      .map((item) => {
        return item.articles
      })
      .reduce((acc, val) => {
        return acc + val
      });
    this.setState({ totalUnidadesVendidas });

    let grupos = {
      'Bebidas': [],
      'Digestivos': [],
      'Entradas': [],
      'Platos para compartir': [],
      'Postres': [],
      'Principales': [],
      'Otros': []
    }
    totalization.forEach(element => {
      if (element.category_branch.length === 0) {
        grupos.Otros.push(element);
      } else {
        grupos[element.category_branch[0]].push(element);
      }
    });
    this.setState({ grupos });
  }

  render() {
    return (
      <div className="container-fluid  m-0 p-0">
        <div className="Dashboard__header">
          <h1 className="text-center">Dashboard</h1>
        </div>
        <div className="App__Dashboard App__Aside ">
          <h3 className="text-white">
            Total de ventas netas: ${this.state.total.toFixed(2)}
          </h3>
          <h3 className="text-white">
            Total de unidades vendidas: {this.state.totalUnidadesVendidas}
          </h3>
          <div className="row container-fluid">
            <Product producto={this.state.grupos} />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user,
  totalization: state.totalization
})
export default withRouter(connect(mapStateToProps, { dashboard })(Dashboard));
