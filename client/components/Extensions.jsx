import React from 'react';

const Extensions = (props) => (
  <div id="extensionsTab" className="tab-pane fade">
    <div id="seatSettings" className="stepBox">
      <div className="stepBox">
        <h2>Extensions</h2>
        <h3>To begin, let's determine how many extensions
          you'll need for your business to run efficiently.</h3>
        <h3>Standard extensions are intended for typical day
          to day office use, while Call Center extensions will
          expect heavy usage, generally four or more hours per day.</h3>
      <p>
        <label htmlFor="BoSeats">Standard Office Extensions:</label>
        <input
          onChange={props.seatCount}
          type="number" name="BoSeats"
          id="BoSeats" min="0"
          max="5000" step="1"
        />
      </p>
      <p>
        <label htmlFor="CcSeats">Call Center Extensions:</label>
        <input
          onChange={props.seatCount}
          type="number" name="CcSeats"
          id="CcSeats" min="0"
          max="5000" step="1"
        />
      </p>
    </div>
  </div>
</div>
);

export default Extensions;
