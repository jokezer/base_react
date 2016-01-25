import React from 'react';
import OrdersList from '../components/orders/ordersList.jsx';
import ItemStore from '../stores/itemStore';
import OrderActions from '../actions/orderActions';

class Orders extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    OrderActions.loadOrders();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Orders</h1>
        <OrdersList { ...this.state } />
      </div>
    );
  }
}

export default Orders;