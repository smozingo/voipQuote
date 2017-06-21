import React from 'react';

const Phones = (props) => (
  <div id="phonesTab" className="tab-pane fade">
    <div id="phones" className="stepBox">
      <div className="stepBox">
        <h2>Phones and Accessories</h2>
        <table className="ph">
          <tbody>
          <tr>
            <th className="ph-uy9o rounded-top-left">Item</th>
            <th className="ph-031e"></th>
            <th className="ph-uy9o">Features</th>
            <th className="ph-031e">MSRP</th>
            <th className="ph-031e">Your Price</th>
            <th className="ph-031e">Count</th>
            <th className="ph-031e rounded-top-right">Subtotal</th>
          </tr>

          <tr>
            <td className="ph-031e">{props.hardware[0].item}</td>
            <td className="ph-031e"><img src='http://localhost:8080/client/img/T41.jpg'/></td>
            <td className="ph-031e">{props.hardware[0].features[0]}</td>
            <td className="ph-031e">{props.monetize(props.hardware[0].msrp)}</td>
            <td className="ph-031e">{props.monetize(props.hardware[0].purchasePrice)}</td>
            <td className="ph-031e">{props.getHardware}</td>
            <td className="ph-031e">{props.monetize(props.hardware.subtotal)}</td>
          </tr>
          <tr>
            <td className="ph-031e">{props.hardware[1].item}</td>
            <td className="ph-031e"><img src={props.hardware[1].img}/></td>
            <td className="ph-031e">{props.hardware[1].features[0]}</td>
            <td className="ph-031e">{props.monetize(props.hardware[1].msrp)}</td>
            <td className="ph-031e">{props.monetize(props.hardware[1].purchasePrice)}</td>
            <td className="ph-031e">{props.getHardware}</td>
            <td className="ph-031e">{props.monetize(props.hardware.subtotal)}</td>
          </tr>
          <tr>
            <td className="ph-031e">{props.hardware[2].item}</td>
            <td className="ph-031e"><img src={props.hardware[2].img}/></td>
            <td className="ph-031e">{props.hardware[2].features[2]}</td>
            <td className="ph-031e">{props.monetize(props.hardware[2].msrp)}</td>
            <td className="ph-031e">{props.monetize(props.hardware[2].purchasePrice)}</td>
            <td className="ph-031e">{props.getHardware}</td>
            <td className="ph-031e">{props.monetize(props.hardware.subtotal)}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Phones;
