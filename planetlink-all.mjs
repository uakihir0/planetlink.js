import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  listOf1jh22dvmctj1r as listOf,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import { Companion_instance252eh86xe0zzu as Companion_instance } from './planetlink-core.mjs';
import { PlanetLinkEx_instance2gkxhx74skjo as PlanetLinkEx_instance } from './planetlink-bluesky.mjs';
import { PlanetLinkEx_instance6quqsykwvmqh as PlanetLinkEx_instance_0 } from './planetlink-misskey.mjs';
import { PlanetLinkEx_instance3sci7a7wfwn99 as PlanetLinkEx_instance_1 } from './planetlink-mastodon.mjs';
import { PlanetLinkEx_instance3vfxwm4mxwk4e as PlanetLinkEx_instance_2 } from './planetlink-matrix.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ServiceEx {
  nm3(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'twitter' === _this__u8e3s4.type.toLowerCase();
  }
  why(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'slack' === _this__u8e3s4.type.toLowerCase();
  }
  om3(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'facebook' === _this__u8e3s4.type.toLowerCase();
  }
  pm3(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tumblr' === _this__u8e3s4.type.toLowerCase();
  }
  qm3(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nostr' === _this__u8e3s4.type.toLowerCase();
  }
  rm3(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'matrix' === _this__u8e3s4.type.toLowerCase();
  }
}
class Reference {
  constructor() {
    Reference_instance = this;
    this.references = listOf([Companion_instance, PlanetLinkEx_instance, PlanetLinkEx_instance_0, PlanetLinkEx_instance_1, PlanetLinkEx_instance_2]);
  }
  sm3() {
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
var ServiceEx_0 = {getInstance: ServiceEx_getInstance};
var Reference_0 = {getInstance: Reference_getInstance};
export {
  ServiceEx_0 as ServiceEx,
  Reference_0 as Reference,
};
//endregion

//# sourceMappingURL=planetlink-all.mjs.map
