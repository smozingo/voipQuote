import React from 'react';
import NavTabs from './NavTabs.jsx';
import TabContent from './TabContent.jsx';

const Content = (props) => (
      <div className="container-fluid contentDiv">
        <NavTabs/>
        <TabContent
          seatCount={props.seatCount}
          getFreeDIDs={props.getFreeDIDs}
          getLocalDIDs={props.getLocalDIDs}
          getTollFreeDIDs={props.getTollFreeDIDs}
          toggleRecordingRetention={props.toggleRecordingRetention}
          getFaxDIDs={props.getFaxDIDs}
          totalCallPaths={props.totalCallPaths}
          faxingPrice={props.faxingPrice}
          extendedRecordingRetention={props.extendedRecordingRetention}
          faxing={props.faxing}
          recordingRetentionPrice={props.recordingRetentionPrice}
          totalExtensions={props.totalExtensions}
          subtotalSetup={props.subtotalSetup}
          numbersToPort={props.numbersToPort}
          subtotalPorting={props.subtotalPorting}
          totalSetup={props.totalSetup}
          getPortNumbers={props.getPortNumbers}
          monetize={props.monetize}
          subtotalService={props.subtotalService}
          standardExtensions={props.standardExtensions}
          callCenterExtensions={props.callCenterExtensions}
          costPerCallCenterExt={props.costPerCallCenterExt}
          costPerStandardExt={props.costPerStandardExt}
          additionalLocalDIDs={props.additionalLocalDIDs}
          additionalTollFreeDIDs={props.additionalTollFreeDIDs}
          costPer800DID={props.costPer800DID}
          costPerLocalDID={props.costPerLocalDID}
          finalDiscount={props.finalDiscount}
          savings={props.savings}
          totalNumbers={props.totalNumbers}
          totalAdditionalFeatures={props.totalAdditionalFeatures}
          oneTimeSubtotal={props.oneTimeSubtotal}
          monthlyTotal={props.monthlyTotal}
          salesTax={props.salesTax}
          oneTimeTotal={props.oneTimeTotal}
          shippingTotal={props.shippingTotal}
          totalService={props.totalService}
          hardware={props.hardware}
          getHardware={props.getHardware}
        />
      </div>
    );

export default Content;
