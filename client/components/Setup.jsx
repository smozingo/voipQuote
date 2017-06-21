import React from 'react';

const Setup = (props) => (
  <div id="setupTab" className="tab-pane fade">
    <div id="setup" className="stepBox">
      <div id="setupBox" className="stepBox">
        <h2>Setup</h2>
        <table id="setupTable" className="table">
          <thead>
          <div className="row">
            <th className="col-md-3">Service</th>
            <th className="col-md-3">Description</th>
            <th className="col-md-3"></th>
            <th className="col-md-3">Total</th>
          </div>
          </thead>
          <tbody>
          <tr>
            <td className="rowHeader">Setup</td>
            <td>We will create your own dedicated 3CX server hosted in our state of the art data center.</td>
            <td className="totalRowSpan" rowSpan="4">{props.totalExtensions}
            {props.totalExtensions == 1 ? ' Extension' : ' Extensions'}</td>
            <td className="totalRowSpan" rowSpan="4">${props.monetize(props.subtotalSetup)}</td>
          </tr>
          <tr>
            <td className="rowHeader">Configuration</td>
            <td>We will empower your business with state of the art PBX and UC features, customized to your needs.</td>
          </tr>
          <tr>
            <td className="rowHeader">Provisioning</td>
            <td>Every telephone will be configured and managed from within the cloud.</td>
          </tr>
          <tr>
            <td className="rowHeader">Training</td>
            <td>Our expert staff will be your telephony gurus.</td>
          </tr>
          <tr>
            <td className="rowHeader">Porting</td>
            <td>You can maintain your current telephone numbers.  Porting over to our service is simple and affordable.</td>
            <td className="totalPorting">
              <input onChange={props.getPortNumbers}
                     type="number" name="portNumbers"
                     id="portNumbers" min="0"
                     max="5000" step="1"
              />
              {props.numbersToPort == 1 ? ' Phone Number' : ' Phone Numbers'}
            </td>
            <td className="totalRowSpan">${props.monetize(props.subtotalPorting)}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className="totalRowSpan">Total</td>
            <td className="totalRowSpan">${props.monetize(props.totalSetup)}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Setup;
