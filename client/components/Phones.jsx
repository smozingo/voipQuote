import React from 'react';

const Phones = (props) => {
  const hardware = [];
  for(let i = 0; i < props.hardware.length; i++) {
    hardware.push(
      <tr key={i}>
        <td className="ph-031e">{props.hardware[i].item}</td>
        <td className="ph-031e"><img src={props.hardware[i].img}/></td>
        <td className="ph-031e">{props.hardware[i].features[i]}</td>
        <td className="ph-031er">{props.monetize(props.hardware[i].msrp)}</td>
        <td className="ph-031er">{props.monetize(props.hardware[i].purchasePrice)}</td>
        <td className="ph-031er">
          <input
            onChange={props.getHardware}
            type="number" name={"hw" + i}
            id={"hw" + i} min="0"
            max="999" step="1"
          />
        </td>
        <td className="ph-031er">{props.monetize(props.hardware[i].subtotal)}</td>
      </tr>
    );
  }

  return(
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
            {hardware}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Phones;
