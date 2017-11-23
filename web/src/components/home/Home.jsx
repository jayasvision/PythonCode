import * as React from "react";
import { connect } from "react-redux";
import { getUserData } from "./HomeActions";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <div>
          <h1>welcome Admin</h1>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => ({});
export default connect(mapStateToProps)(Home);
