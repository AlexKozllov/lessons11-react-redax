import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/todoActions";

const Filter = ({ setFilter, filter }) => {
  const onHandleChange = (e) => {
    setFilter(e.target.value);
  };

  return <input type="text" onChange={onHandleChange} value={filter}></input>;
};

const mstp = (state) => {
  return { filter: state.filter };
};

export default connect(mstp, { setFilter })(Filter);
