import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  listOf1jh22dvmctj1r as listOf,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import { Companion_instancevnpycl9grurv as Companion_instance } from './planetlink-core.mjs';
import { PlanetLinkEx_instance31gwom86j03wj as PlanetLinkEx_instance } from './planetlink-bluesky.mjs';
import { PlanetLinkEx_instance3uimy340l5u0s as PlanetLinkEx_instance_0 } from './planetlink-misskey.mjs';
import { PlanetLinkEx_instancepmybb9irh6cm as PlanetLinkEx_instance_1 } from './planetlink-mastodon.mjs';
import { PlanetLinkEx_instance3a6r3elofgfy3 as PlanetLinkEx_instance_2 } from './planetlink-matrix.mjs';
import './ktor-ktor-client-core.mjs';
import './cryptography-kotlin-cryptography-provider-webcrypto.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ServiceEx {
  nps(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'twitter' === _this__u8e3s4.type.toLowerCase();
  }
  aie(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'slack' === _this__u8e3s4.type.toLowerCase();
  }
  ops(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'facebook' === _this__u8e3s4.type.toLowerCase();
  }
  pps(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    if ('tumblr' === _this__u8e3s4.type.toLowerCase()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'tumber' === _this__u8e3s4.type.toLowerCase();
    }
    return tmp;
  }
  qps(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nostr' === _this__u8e3s4.type.toLowerCase();
  }
  rps(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'matrix' === _this__u8e3s4.type.toLowerCase();
  }
  bpp(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'saypip' === _this__u8e3s4.type.toLowerCase();
  }
}
class Reference {
  constructor() {
    Reference_instance = this;
    this.references = listOf([Companion_instance, PlanetLinkEx_instance, PlanetLinkEx_instance_0, PlanetLinkEx_instance_1, PlanetLinkEx_instance_2]);
  }
  sps() {
    return this.references;
  }
}
//endregion
var ServiceEx_instance;
function ServiceEx_getInstance() {
  return ServiceEx_instance;
}
var Reference_instance;
function Reference_getInstance() {
  if (Reference_instance === VOID)
    new Reference();
  return Reference_instance;
}
//region block: post-declaration
initMetadataForObject(ServiceEx, 'ServiceEx');
initMetadataForObject(Reference, 'Reference');
//endregion
//region block: init
ServiceEx_instance = new ServiceEx();
//endregion
//region block: exports
ServiceEx.getInstance = ServiceEx_getInstance;
Reference.getInstance = Reference_getInstance;
export {
  ServiceEx as ServiceEx,
  Reference as Reference,
};
//endregion

//# sourceMappingURL=planetlink-all.mjs.map
