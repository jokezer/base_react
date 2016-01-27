import React from 'react';
import OrderStore from '../stores/orderStore';
import OrderActions from '../actions/orderActions';

// class OrderPage extends React.Component {
  const OrderPage = React.createClass({
  // constructor(props){
  //   super(props);
  // }

  getInitialState() {
    return ({
      order: {id: this.props.params.orderId},
      loading: false
    })
  },

  componentDidMount() {
    this.unsubscribe = OrderStore.listen(this.onStatusChange);
    // console.log(this.props.routeParams.orderId);
    OrderActions.loadOrder(this.props.routeParams.orderId);
    // OrderActions.clearOrders();
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    //FIXME move it to component
    return (
      <div>
        <h1>Order {this.state.order.id}</h1>
        <p>{this.state.order.content}</p>
      </div>
    );
  }
});

export default OrderPage;
