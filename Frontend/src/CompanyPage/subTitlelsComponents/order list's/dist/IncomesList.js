'use strict';
exports.__esModule = true;
var react_1 = require('react');
function IncomesList(_a) {
  var client = _a.client;
  var ClientName = client.ClientName,
    Total = client.Total,
    Email = client.Email,
    PhoneNumber = client.PhoneNumber;
  // console.log(client);
  // add styling : diraction--- RTL
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    react_1['default'].createElement('td', { id: 'emphasis' }, ' ', ClientName),
    react_1['default'].createElement('td', null, Email),
    react_1['default'].createElement('td', null, PhoneNumber),
    react_1['default'].createElement(
      'td',
      null,
      '\u20AA',
      Total === null || Total === void 0 ? void 0 : Total.toLocaleString()
    )
  );
}
exports['default'] = IncomesList;
