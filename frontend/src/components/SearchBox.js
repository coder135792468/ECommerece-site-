import React, { useState } from "react";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <form
        onSubmit={submitHandler}
        style={{ margin: "15px auto" }}
        class="d-flex"
      >
        <input
          class="form-control me-sm-2"
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search"
        />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
