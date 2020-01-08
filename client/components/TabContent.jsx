import React from 'react';
import Welcome from './Welcome.jsx';
import Extensions from './Extensions.jsx';
import PhoneNumbers from './PhoneNumbers.jsx';
import Phones from './Phones.jsx';
import AdditionalFeatures from './AdditionalFeatures.jsx';
import Setup from './Setup.jsx';
import Quote from './Quote.jsx';

const TabContent = (props) => (
  <div id="tabContent" className="tab-content">
    <Welcome />
    <Extensions
      seatCount={props.seatCount}
    />
    <PhoneNumbers
      getTollFreeDIDs={props.getTollFreeDIDs}
      getLocalDIDs={props.getLocalDIDs}
      totalCallPaths={props.totalCallPaths}
    />
    <Phones
      getHardware={props.getHardware}
      hardware={props.hardware}
      monetize={props.monetize}
    />
    <AdditionalFeatures
      toggleRecordingRetention={props.toggleRecordingRetention}
      getFaxDIDs={props.getFaxDIDs}
      faxingPrice={props.faxingPrice}
      recordingRetentionPrice={props.recordingRetentionPrice}
      monetize={props.monetize}
    />
    <Setup
      totalExtensions={props.totalExtensions}
      subtotalSetup={props.subtotalSetup}
      numbersToPort={props.numbersToPort}
      subtotalPorting={props.subtotalPorting}
      getPortNumbers={props.getPortNumbers}
      totalSetup={props.totalSetup}
      monetize={props.monetize}
    />
    <Quote
      totalCallPaths={props.totalCallPaths}
      standardExtensions={props.standardExtensions}
      callCenterExtensions={props.callCenterExtensions}
      totalExtensions={props.totalExtensions}
      costPerCallCenterExt={props.costPerCallCenterExt}
      costPerStandardExt={props.costPerStandardExt}
      subtotalService={props.subtotalService}
      additionalLocalDIDs={props.additionalLocalDIDs}
      additionalTollFreeDIDs={props.additionalTollFreeDIDs}
      costPer800DID={props.costPer800DID}
      costPerLocalDID={props.costPerLocalDID}
      faxing={props.faxing}
      extendedRecordingRetention={props.extendedRecordingRetention}
      finalDiscount={props.finalDiscount}
      savings={props.savings}
      totalNumbers={props.totalNumbers}
      totalAdditionalFeatures={props.totalAdditionalFeatures}
      oneTimeSubtotal={props.oneTimeSubtotal}
      monthlyTotal={props.monthlyTotal}
      salesTax={props.salesTax}
      oneTimeTotal={props.oneTimeTotal}
      shippingTotal={props.shippingTotal}
      monetize={props.monetize}
      totalSetup={props.totalSetup}
      totalService={props.totalService}
      totalPhones={props.totalPhones}
    />
  </div>
  );

export default TabContent;
