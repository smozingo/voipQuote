import React from 'react';

const NavTabs = () => (
  <ul id="navTabs" className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#welcomeTab">Welcome</a></li>
    <li><a data-toggle="tab" href="#extensionsTab">Extensions</a></li>
    <li><a data-toggle="tab" href="#phoneNumbersTab">Phone Numbers</a></li>
    <li><a data-toggle="tab" href="#phonesTab">Phones & Accessories</a></li>
    <li><a data-toggle="tab" href="#additionalFeaturesTab">Additional Features</a></li>
    <li><a data-toggle="tab" href="#setupTab">Setup</a></li>
    <li><a data-toggle="tab" href="#quoteTab">Quote</a></li>
  </ul>
  );

export default NavTabs;
