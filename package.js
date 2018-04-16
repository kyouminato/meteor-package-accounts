Package.describe({
  name: 'feathereum:accounts',
  summary: 'Provides and updates the feathereum accounts in the Accounts collection',
  version: '0.3.12',
  git: 'http://github.com/feathereum/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('feathereum:web3@0.15.1', ['client', 'server']);

  api.export(['EthAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('feathereum:accounts');
//   api.addFiles('accounts-tests.js');
// });

