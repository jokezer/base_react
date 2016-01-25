import React from 'react';
import OrderActions from '../../actions/orderActions';

const LoadMoreButton = React.createClass({
  loadMoreOrders: () => {
    OrderActions.loadOrders();
  },

  render() {
    return (
      <a className="btn btn-default" onClick={this.loadMoreOrders} role="button">Load More</a>
    );
  }
});

const OrderItem = React.createClass({
  propTypes: {
    title : React.PropTypes.string
  },

  getDefaultProps: () => {
    return { title: "Order" }
  },

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.content}
        </div>
      </div>
    );
  }
});

const OrdersList = (props) => {
  let items = props.items.map(item => <OrderItem {...item} key={item.id} />),
      loading = props.loading ? <div className="loading-label">Loading...</div> : '';

  return (
    <div>
      <ul>
        {items}
      </ul>
      {loading}
      <LoadMoreButton />
    </div>
  );                               
};

OrdersList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default OrdersList;