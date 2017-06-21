import React from 'react';

const Quote = (props) => (
  <div id="quoteTab" className="tab-pane fade">
    <div id="quote" className="stepBox">
      <div id="quoteBox" className="stepBox">
        <h2>Quote</h2>

        <table className="tg quoteTable">
          <colgroup>
            <col className="cg1"/>
            <col className="cg2"/>
            <col className="cg3"/>
            <col className="cg4"/>
            <col className="cg5"/>
            <col className="cg6"/>
            <col className="cg7"/>
            <col className="cg8"/>
            <col className="cg9"/>
            <col className="cg10"/>
            <col className="cg11"/>
          </colgroup>
          <tr>
            <th className="tg-0nfl"></th>
            <th className="tg-ww66">Standard <br/>Extensions</th>
            <th className="tg-ww66">Cost Per Seat</th>
            <th className="tg-ww66">Call Center<br/>Extensions</th>
            <th className="tg-ww66">Cost Per Seat</th>
            <th className="tg-ww66">Total Extensions</th>
            <th className="tg-ww66">Total Call Paths</th>
            <th className="tg-ww66">Subtotal</th>
            <th className="tg-ww66">Discount</th>
            <th className="tg-ww66">Savings</th>
            <th className="tg-ww67">Total</th>
          </tr>
          <tr>
            <td className="tg-3gdc">Service</td>
            <td className="tg-y4mn">{props.standardExtensions}</td>
            <td className="tg-y4mn">{props.monetize(props.costPerStandardExt)}</td>
            <td className="tg-y4mn">{props.callCenterExtensions}</td>
            <td className="tg-y4mn">{props.monetize(props.costPerCallCenterExt)}</td>
            <td className="tg-y4mn">{props.totalExtensions}</td>
            <td className="tg-y4mn">{props.totalCallPaths}</td>
            <td className="tg-y4mn">{props.monetize(props.subtotalService)}</td>
            <td className="tg-y4mn">{props.finalDiscount}</td>
            <td className="tg-nqwm">{props.monetize(props.savings)}</td>
            <td className="tg-gk5o">{props.monetize(props.totalService)}</td>
          </tr>
          <tr>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-pd7p"></td>
            <td className="tg-3xcw"></td>
            <td className="tg-pd7p"></td>
          </tr>
          <tr>
            <td className="tg-znr0">Phones and Extensions</td>
            <td className="tg-hw1d"></td>
            <td className="tg-hw1d"></td>
            <td className="tg-hw1d"></td>
            <td className="tg-hw1d"></td>
            <td className="tg-hw1d"></td>
            <td className="tg-hw1d"></td>
            <td className="tg-hw1d"></td>
            <td className="tg-6rl8"></td>
            <td className="tg-6rl8">Monthly</td>
            <td className="tg-00vd">{props.monetize(props.totalPhones)}</td>
          </tr>
          <tr>
            <td className="tg-u4nh"></td>
            <td className="tg-yi9w">Included Local DIDs</td>
            <td className="tg-yi9w">Additional Local DIDs</td>
            <td className="tg-yi9w">Cost Per DID</td>
            <td className="tg-yi9w">Toll Free DIDs</td>
            <td className="tg-yi9w">Cost Per DID</td>
            <td className="tg-u4nh"></td>
            <td className="tg-u4nh"></td>
            <td className="tg-yi9w">Total Local DIDs</td>
            <td className="tg-yi9w">Total Toll Free DIDs</td>
            <td className="tg-u4nh"></td>
          </tr>
          <tr>
            <td className="tg-yr5q">Numbers</td>
            <td className="tg-6b5v">{props.totalCallPaths}</td>
            <td className="tg-6b5v">{props.additionalLocalDIDs}</td>
            <td className="tg-6b5v">{props.monetize(props.costPerLocalDID)}</td>
            <td className="tg-6b5v">{props.additionalTollFreeDIDs}</td>
            <td className="tg-6b5v">{props.monetize(props.costPer800DID)}</td>
            <td className="tg-6b5v"></td>
            <td className="tg-6b5v"></td>
            <td className="tg-6b5v">{+props.totalCallPaths + +props.additionalLocalDIDs}</td>
            <td className="tg-6b5v">{props.additionalTollFreeDIDs}</td>
            <td className="tg-mq97">{props.monetize(props.totalNumbers)}</td>
          </tr>
          <tr>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-ivrp"></td>
            <td className="tg-7cfi"></td>
            <td className="tg-ivrp"></td>
          </tr>
          <tr>
            <td className="tg-xl8y">Additional Features</td>
            <td className="tg-lb7c">{props.faxing ? 'Faxing' : ''}</td>
            <td className="tg-lb7c">{props.extendedRecordingRetention ? 'Extended Recording' : ''}</td>
            <td className="tg-yxsg"></td>
            <td className="tg-yxsg"></td>
            <td className="tg-yxsg"></td>
            <td className="tg-yxsg"></td>
            <td className="tg-yxsg"></td>
            <td className="tg-yxsg"></td>
            <td className="tg-488h"></td>
            <td className="tg-dy1y">{props.monetize(props.totalAdditionalFeatures)}</td>
          </tr>
          <tr>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-cv6f"></td>
            <td className="tg-2s1i"></td>
            <td className="tg-cv6f"></td>
          </tr>
          <tr>
            <td className="tg-h69r">Setup</td>
            <td className="tg-qcoe">Setup</td>
            <td className="tg-qcoe">Configuration</td>
            <td className="tg-qcoe">Provisioning</td>
            <td className="tg-qcoe">Training</td>
            <td className="tg-qcoe">Porting</td>
            <td className="tg-qcoe"></td>
            <td className="tg-qcoe"></td>
            <td className="tg-4yv6"></td>
            <td className="tg-oq8k"></td>
            <td className="tg-ib9w">{props.monetize(props.totalSetup)}</td>
          </tr>
          <tr>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-riad">One Time Subtotal</td>
            <td className="tg-1szg">{props.monetize(props.oneTimeSubtotal)}</td>
            <td className="tg-77vb"></td>
            <td className="tg-6w06">Monthly Total</td>
            <td className="tg-pcbx">{props.monetize(props.monthlyTotal)}</td>
          </tr>
          <tr>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-reyo">Sales Tax</td>
            <td className="tg-reyo">{props.monetize(props.salesTax)}</td>
            <td className="tg-ceei"></td>
            <td className="tg-qi9z">+ taxes and fees</td>
            <td className="tg-hykm"></td>
          </tr>
          <tr>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-reyo">Shipping</td>
            <td className="tg-reyo">{props.monetize(props.shippingTotal)}</td>
            <td className="tg-ceei"></td>
            <td className="tg-8fi1"></td>
            <td className="tg-hykm"></td>
          </tr>
          <tr>
            <td className="tg-l778"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-l779"></td>
            <td className="tg-riad">One Time Total</td>
            <td className="tg-riad">{props.monetize(props.oneTimeTotal)}</td>
            <td className="tg-ceei"></td>
            <td className="tg-8fi1"></td>
            <td className="tg-hykm1"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default Quote;
