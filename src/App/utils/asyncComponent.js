import React, { Component } from "react";
import Loading from "../../App/components/Ui.Loading";

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent()
          .then(Component => {
            AsyncComponent.Component = Component;
            setTimeout(() => {
              this.setState({ Component });
            }, 500);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return <Loading />;
    }
  }
  return AsyncComponent;
}
