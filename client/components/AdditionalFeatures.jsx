import React from 'react';

const AdditionalFeatures = (props) => (
  <div id="additionalFeaturesTab" className="tab-pane fade">
    <div id="additionalFeatures" className="stepBox">
      <div className="stepBox">
        <h2>Additional Features</h2>
        <div className="checkbox">
          <h3>Go beyond the included 30 days of online, available recordings.  Keep
            a year's worth of recordings at your fingertips
            for only ${props.monetize(props.recordingRetentionPrice)} per month!</h3>
          <label>
            <input onChange={props.toggleRecordingRetention}
              type="checkbox" value=""/>
            Extended Recording Retention
          </label>
        </div>
        <div className="checkbox">
          <h3>Get inbound and outbound faxing for ${props.monetize(props.faxingPrice)} per month
            with a fax number included at no additional charge.</h3>
          <label htmlFor="faxing">Fax numbers: </label>
          <input
            onChange={props.getFaxDIDs}
            type="number" name="faxing"
            id="faxing" min="0"
            max="50" step="1"
            />
        </div>

      </div>
    </div>
  </div>
);

export default AdditionalFeatures;
