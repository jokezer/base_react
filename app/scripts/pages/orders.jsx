import React from 'react';
import OrdersList from '../components/orders/ordersList.jsx';
import ItemStore from '../stores/itemStore';
import OrderActions from '../actions/orderActions';

const Orders = React.createClass({

  // constructor(props){
  //   super(props);
  // }

  getInitialState() {
    return ({
      items: [],
      loading: false
    })
  },

  componentDidMount() {
    //TODO: what is unsubscribe?
    this.unsubscribe = ItemStore.listen(this.onStatusChange);
    //FIXME: fix double loading of orders
    // if(!ItemStore.items.length) {
      OrderActions.loadOrders();
    // }
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <div>
        <h1>Orders</h1>
        <OrdersList { ...this.state } />
      </div>
    );
  }
});

export default Orders;
