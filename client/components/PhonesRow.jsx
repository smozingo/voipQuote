import React from 'react';

const PhonesRow = (props) => (
  <tr>
    <td className="ph-031e">{props.hardware[key].item}</td>
    <td className="ph-031e"><img src={props.hardware[key].img}/></td>
    <td className="ph-031e">{props.hardware[key].features[0]}</td>
    <td className="ph-031e">{props.monetize(props.hardware[key].msrp)}</td>
    <td className="ph-031e">{props.monetize(props.hardware[key].purchasePrice)}</td>
    <td className="ph-031e">{props.getHardware}</td>
    <td className="ph-031e">{props.monetize(props.hardware.subtotal)}</td>
  </tr>
  );

export default PhonesRow;
