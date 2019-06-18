import React, { Component } from "react";
import { getTable } from "../../services/tablesService";
import FormInput from "../../common/FormInput";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order:{
        table: props.match.params.id,
        name:""
      }
    };
  }

  handleChange = e => {
    const field = e.target.name;
    const { order } = this.state;
    order[field] = e.target.value;
    this.setState({ order });
  };

  render() {
    const {order} = this.state;
    let name="";
    if (order)
      name=order.name;

    return (
      <section
        className="uk-section uk-text-center"
        uk-height-viewport="offset-top: true; expand: true"
      >
        {/* <section className="uk-section uk-section-muted uk-section-xsmall uk-padding-remove-vertical">
          <div className="uk-container uk-container-expand">
            <nav
              className="uk-navbar-container uk-navbar-transparent"
              uk-navbar="true"
            >
              <div className="uk-navbar-center">Steps</div>
            </nav>
          </div>
        </section> */}
        <div className="uk-container uk-container-expand">
          <h1>Bienvenido!!!</h1>
          {/* prettier-ignore */}
            <FormInput handleChange={this.handleChange} type="text" name="name" id="name" placeholder="¿Cuál es tu nombre?" value={name} label="Nombre" classStyle="uk-text-large" required={true}/>
        </div>
      </section>
    );
  }
}

export default OrderContainer;
