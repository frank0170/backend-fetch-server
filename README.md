# ORIGYN dApps Monorepo

This repository is a monorepo the context module. 
### Import

import { contextModule } from 'contextModule';

console.log( contextModule() )


## Example of Result Object

{
  gateway_canister: null or Principal("ngrpb-5qaaa-aaaaj-adz7a-cai");
  token_id: bayc-1, // null or "current token";
  library_id: vault, //null or current libaray;
  app_command: [
    {command: "canister"; alias: "-"; value: "baycdev"};
    {command: "token"; alias: "-"; value: "bayc-1"};
    {command: "library"; alias: "-"; value: "custom_app.html"};
    {command: "vault"; alias: null; value: "make_offer"};
    ... is a dynamic array based off the URL
  ]
  domain: "prptl.io";  // or "canister_id.raw.ic0.app"
  prptl_io_path: "/-/baycdev/-/bayc-1/-/custom_app.html";
  canister_path: "-/bayc-1/-/custom_app.html";"
  is_prptl_io: true; //is the current url at the exos level
  is_canister: false; //is the current url at the canister level or not
  is_storage: false; //is the current canister a NFT or Storage canister
  is_collection: false //shows if the current level si at collection or token level
  raw: "https://prptl.io/-/baycdev/-/bayc-1/-/vault/make_offer"
}


## contextModule object properties

gateway_canister: is the canister id from which the data is loaded

token_id: is the token id of the NFT you've currently selected and received data about

library_id: is the current dapp you're accessed on the perpetualOS

app_command: that's the data that you're dapp is using to navigate through perperual OS

domain: it's the domain address, it can be a common one like "prptl.io" or ICP specific that end with  ".raw.ic0.app"

prptl_io_path: it's the subdomain from 'prptl.io' which the context Module is parsing the data

canister_path: it's the subdomain from a ICP specific link from which the context Module is parsing the data

is_prptl_io: determinates if you're currently in the perpetual OS ecosystem (true/false)

is_canister: determinates if you're currently in the ICP proxy (true/false)

is_storage: determinates if you're currently using a storage canister (true/false)

is_collection: determinates if you're at the collection level (true/false)

raw: it's the raw URL link 

## Methods of contextModule

You're able to change the token or/and the canister context using methods from contextModule.


### * To change the token context (token id):

contextModule.changeToken = 'id_1' -> now the token_id from contextModule will be changed with 'id_1'


### * To change the canister context (canister id):

contextModule.changeCanister = 'aaaaa-bbbb-cccc-dddd' -> now the canister_id from contextModule will be changed with 'aaaaa-bbbb-cccc-dddd'




