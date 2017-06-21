import React from 'react';

const PhoneNumbers = (props) => (
  <div id="phoneNumbersTab" className="tab-pane fade">
    <div id="phoneNumbers" className="stepBox">
      <div className="stepBox">
        <h2>Phone Numbers</h2>
        <h3>With our service, you'll get a free phone number (aka local DID)
          with each call path.  You are currently allotted
          <span id="freeDIDs">&nbsp;{props.totalCallPaths}</span> phone numbers free of charge.</h3>
        <h3>If you would like more local or toll free numbers, just let us
          know how many additional numbers you would like.</h3>
        <p>
        <label htmlFor="AdditionalDID">Additional Local Numbers:</label>
        <input onChange={props.getLocalDIDs}
               type="number" name="AdditionalDID" id="AdditionalDID"
               min="0" max="5000" step="1"
        />
      </p>
      <p>
        <label htmlFor="TollFreeDID">Additional Toll Free Numbers:</label>
        <input onChange={props.getTollFreeDIDs}
               type="number" name="TollFreeDID"
               id="TollFreeDID" min="0"
               max="5000" step="1"
        />
      </p>
    </div>
  </div>
</div>
);

export default PhoneNumbers;
