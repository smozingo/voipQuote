import React, { Component } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';

function getInitialState() {
  return {
    additionalFeaturesMonthlyTotal: 0,
    additionalTollFreeDIDs: 0,
    additionalLocalDIDs: 0,
    callCenterExtensions: 0,
    companyName: '',
    extendedRecordingRetention: false,
    faxing: false,
    faxDIDs: 0,
    faxingPrice: 0,
    finalDiscount: 0,
    hardwareGrandTotal: 0,
    name: '',
    numbersToPort: 0,
    oneTimeSubtotal: 0,
    oneTimeTotal: 0,
    monthlyTotal: 0,
    paymentOption: '',
    printArea: '',
    recordingRetentionPrice: 0,
    savings: 0,
    salesTax: 0,
    shippingTotal: 0,
    standardExtensions: 0,
    subtotal: 0,
    subtotalAdditionalFeatures: 0,
    subtotalNumbers: 0,
    subtotalPhones: 0,
    subtotalPorting: 0,
    subtotalService: 0,
    subtotalSetup: 0,
    subtotalShipping: 0,
    totalAccessories: 0,
    totalAdditionalFeatures: 0,
    totalCallPaths: 0,
    totalExtensions: 0,
    totalPhones: 0,
    totalNumbers: 0,
    totalService: 0,
    totalSetup: 0,
    totalTollFreeDIDs: 0,
    costPer800DID: 2.00,
    costPerLocalDID: 1.00,
    costPerCallCenterExt: 24.99,
    costPerFaxLine: 9.99,
    costPerStandardExt: 19.99,
    costExtRecordingPerExt: 1.00,
    pathsPerCCExtension: 0.75,
    pathsPerStandardExtension: 0.2,
    portingPriceDID: 9.00,
    setupPriceExt: 9.99,
    taxRate: 9.0,
    discount: [
      { minSeats: 1,    maxSeats: 25,     discount: 0 },
      { minSeats: 26,   maxSeats: 75,     discount: .05 },
      { minSeats: 76,   maxSeats: 200,    discount: .10 },
      { minSeats: 201,  maxSeats: 1000,   discount: .15 },
      { minSeats: 1001, maxSeats: 999999, discount: .20 },
    ],
    hardware: [
      { item: 'Yealink SIP-T41', type: 'Phone', img: 'client/img/T41.jpg',
        features: [
          'Mid-range Phone',
          'Elegant mid-range Desk Phone with HD voice',
          '2.7" 192x64-pixel graphical LCD with backlight',
          'Up to 6 SIP accounts',
          'Paper label free design',
          'Dual 10/100 mbps Ethernet Ports',
          'PoE (Power Over Ethernet) support',
          'Headset, EHS support',
          'Integrated stand with 2 adjustable angles',
          'Wall mountable (Requires wall-mount bracket)',
        ], msrp: 139.00, purchasePrice: 99.00, rentalPrice: 6.49, count: 0, subtotal: 0,
      },
      { item: 'Yealink SIP-T46' , type: 'Phone', img: 'client/img/T46.jpg',
        features: [
          'Manager Phone / Receptionist Phone',
          'Elegant high-end Desk Phone with HD voice',
          '4.3" 480 x 272-pixel color display with backlight',
          'Built-in a USB port, supports Bluetooth headset (Through USB Dongle)',
          'Up to 16 SIP accounts',
          'Paper label free design',
          'Dual Gigabit Ethernet Ports',
          'PoE (Power Over Ethernet) support',
          'Headset, EHS support',
          'Supports expansion modules (up to 3)',
          'Stand with 2 adjustable angles',
          'Wall mountable (Requires wall-mount bracket)',
        ], msrp: 269.00, purchasePrice: 169.00, rentalPrice: 10.49, count: 0, subtotal: 0,
      },
      { item: 'Yealink SIP-T48' , type: 'Phone', img: 'client/img/T48.jpg',
        features: [
          'Executive Phone',
          'Elegant Executive Desk Phone with Touch-Screen LCD & HD voice',
          '7" 800 x 480-pixel color touch screen with backlight',
          'Built-in a USB port, supports Bluetooth headset (Through USB Dongle)',
          'Up to 16 SIP accounts',
          'Paper label free design',
          'Dual Gigabit Ethernet Ports',
          'PoE (Power Over Ethernet) support',
          'Headset, EHS support',
          'Supports expansion modules (up to 3)',
          'Stand with 2 adjustable angles',
          'Wall mountable (Requires wall-mount bracket)',
        ], msrp: 349.00, purchasePrice: 219.00, rentalPrice: 14.99, count: 0, subtotal: 0,
      },
    ],
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.seatCount = this.seatCount.bind(this);
    this.getLocalDIDs = this.getLocalDIDs.bind(this);
    this.getTollFreeDIDs = this.getTollFreeDIDs.bind(this);
    this.toggleRecordingRetention = this.toggleRecordingRetention.bind(this);
    this.getFaxDIDs = this.getFaxDIDs.bind(this);
    this.getPortNumbers = this.getPortNumbers.bind(this);
    this.monetize = this.monetize.bind(this);
    this.state = getInitialState();
  }

  monetize(amount) {
    amount = Number(amount);
    return amount.toFixed(2).replace(/./g, function(c, i, a) {
      return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });

  }

  getDiscount(seats) {
    for (let i = 0; i < this.state.discount.length; i++) {
      let discount = this.state.discount[i];
      if (discount.minSeats <= seats && discount.maxSeats >= seats)
        return discount.discount;
    }

    return 0;
  }

  getHardware(event) {
    const id = '#' + event.target.id;
    console.log('getHardware', event.target.id, 'value', Number($(id)[0].value));
    let hardware = Number($(id)[0].value);
    console.log("Fuck");
    /*this.setState({ hardware[index].subtotal: hardware });*/
  }

  seatCount(event) {
    const id = '#' + event.target.id;
    console.log('seatCount', event.target.id, 'value', Number($(id)[0].value));
    let state = this.state;
    if (event.target.id === 'BoSeats') {
      let standardExt     = Number($(id)[0].value);
      let totalExtensions = standardExt + state.callCenterExtensions;
      let totalCallPaths  = Math.ceil(standardExt * state.pathsPerStandardExtension +
        state.callCenterExtensions * state.pathsPerCCExtension);
      let extRecRetentionPrice = totalExtensions * state.costExtRecordingPerExt;
      let subtotalSetup   = totalExtensions * state.setupPriceExt;
      let totalSetup      = Number(subtotalSetup) + Number(state.subtotalPorting);
      let subtotalService = (standardExt * state.costPerStandardExt) +
        (state.callCenterExtensions * state.costPerCallCenterExt);
      let discount        = this.getDiscount(totalExtensions);
      let savings         = discount ? Math.floor(subtotalService * discount) : 0;
      let totalService    = subtotalService - savings;

      this.setState({ standardExtensions: standardExt,
                      totalExtensions: totalExtensions,
                      totalCallPaths: totalCallPaths,
                      recordingRetentionPrice: extRecRetentionPrice,
                      subtotalSetup: subtotalSetup,
                      totalSetup: totalSetup,
                      subtotalService: subtotalService,
                      finalDiscount: discount,
                      savings: savings,
                      totalService: totalService,
                    });

    } else if (event.target.id === 'CcSeats') {
      let ccExt           = Number($(id)[0].value);
      let totalExtensions = ccExt + state.standardExtensions;
      let totalCallPaths  = Math.ceil(ccExt * state.pathsPerCCExtension +
        state.standardExtensions * state.pathsPerStandardExtension);
      let extRecRetentionPrice = totalExtensions * state.costExtRecordingPerExt;
      let subtotalSetup   = totalExtensions * state.setupPriceExt;
      let totalSetup      = Number(subtotalSetup) + Number(state.subtotalPorting);
      let subtotalService = (ccExt * state.costPerCallCenterExt) +
        (state.standardExtensions * state.costPerStandardExt);
      let discount        = this.getDiscount(totalExtensions);
      let savings         = discount ? subtotalService - (subtotalService * discount) : 0;
      let totalService    = subtotalService - savings;

      this.setState({ callCenterExtensions: ccExt,
                      totalExtensions: totalExtensions,
                      totalCallPaths: totalCallPaths,
                      recordingRetentionPrice: extRecRetentionPrice,
                      subtotalSetup: subtotalSetup,
                      totalSetup: totalSetup,
                      subtotalService: subtotalService,
                      finalDiscount: discount,
                      savings: savings,
                      totalService: totalService,
                    });
    }
  }

  getLocalDIDs(event) {
    const id = '#' + event.target.id;
    console.log('getLocalDIDs', event.target.id, 'value', $(id)[0].value);
    let localDIDs = $(id)[0].value;
    let totalNumbers = (this.state.additionalTollFreeDIDs * this.state.costPer800DID) +
      (localDIDs * this.state.costPerLocalDID);
    this.setState({ additionalLocalDIDs: localDIDs,
                    totalNumbers: totalNumbers, });
  }

  getTollFreeDIDs(event) {
    const id = '#' + event.target.id;
    console.log('getTollFreeDIDs', event.target.id, 'value', $(id)[0].value);
    let tollFreeDIDs = $(id)[0].value;
    let totalNumbers = (this.state.additionalLocalDIDs * this.state.costPerLocalDID) +
      (tollFreeDIDs * this.state.costPer800DID);
    this.setState({ additionalTollFreeDIDs: tollFreeDIDs,
      totalNumbers: totalNumbers, });
  }

  getFaxDIDs(event) {
    const id = '#' + event.target.id;
    console.log('getFaxDIDs', event.target.id, 'value', $(id)[0].value);
    let faxDIDs = Number($(id)[0].value);
    let faxPrice = faxDIDs * this.state.costPerFaxLine;
    let totalAdditionalFeatures = this.state.recordingRetentionPrice + faxPrice;
    let faxing = faxDIDs ? true : false;

    this.setState({ faxDIDs: faxDIDs,
                    faxingPrice: faxPrice,
                    faxing: faxing,
                    totalAdditionalFeatures: totalAdditionalFeatures,
                  });
  }

  toggleRecordingRetention(event) {
    console.log('toggleRecordingRetention', event.target.id);
    let recordingPrice = this.state.extendedRecordingRetention ? 0 :
      this.state.recordingRetentionPrice * this.state.totalExtensions ;
    let totalAdditionalFeatures = recordingPrice + this.state.faxingPrice;
    this.setState({ extendedRecordingRetention: !this.state.extendedRecordingRetention,
                    recordingRetentionPrice: recordingPrice,
                    totalAdditionalFeatures: totalAdditionalFeatures,
                  });
  }

  getPortNumbers(event) {
    const id = '#' + event.target.id;
    console.log('getPortNumbers', event.target.id, 'value', $(id)[0].value);
    let numbersToPort = Number($(id)[0].value);
    let subtotalPorting = numbersToPort * this.state.portingPriceDID;
    let totalSetup    = Number(this.state.subtotalSetup) + Number(subtotalPorting);

    this.setState({ numbersToPort: numbersToPort,
                    subtotalPorting: subtotalPorting,
                    totalSetup: totalSetup,
                  });
  }

  render() {
    return (
    <div className='App'>
        <Header />
        <Content
          seatCount={this.seatCount}
          getLocalDIDs={this.getLocalDIDs}
          getTollFreeDIDs={this.getTollFreeDIDs}
          toggleRecordingRetention={this.toggleRecordingRetention}
          getFaxDIDs={this.getFaxDIDs}
          totalCallPaths={this.state.totalCallPaths}
          recordingRetentionPrice={this.state.recordingRetentionPrice}
          faxingPrice={this.state.faxingPrice}
          extendedRecordingRetention={this.state.extendedRecordingRetention}
          faxing={this.state.faxing}
          totalExtensions={this.state.totalExtensions}
          subtotalSetup={this.state.subtotalSetup}
          numbersToPort={this.state.numbersToPort}
          subtotalPorting={this.state.subtotalPorting}
          totalSetup={this.state.totalSetup}
          getPortNumbers={this.getPortNumbers}
          monetize={this.monetize}
          subtotalService={this.state.subtotalService}
          totalService={this.state.totalService}
          standardExtensions={this.state.standardExtensions}
          callCenterExtensions={this.state.callCenterExtensions}
          costPerCallCenterExt={this.state.costPerCallCenterExt}
          costPerStandardExt={this.state.costPerStandardExt}
          additionalLocalDIDs={this.state.additionalLocalDIDs}
          additionalTollFreeDIDs={this.state.additionalTollFreeDIDs}
          costPer800DID={this.state.costPer800DID}
          costPerLocalDID={this.state.costPerLocalDID}
          finalDiscount={this.state.finalDiscount}
          savings={this.state.savings}
          totalNumbers={this.state.totalNumbers}
          totalAdditionalFeatures={this.state.totalAdditionalFeatures}
          oneTimeSubtotal={this.state.oneTimeSubtotal}
          monthlyTotal={this.state.monthlyTotal}
          salesTax={this.state.salesTax}
          oneTimeTotal={this.state.oneTimeTotal}
          shippingTotal={this.state.shippingTotal}
          hardware={this.state.hardware}
          getHardware={this.getHardware}
        />
      </div>
    );
  }
}

export default App;

