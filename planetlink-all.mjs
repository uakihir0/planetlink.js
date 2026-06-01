import {
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  Unit_instancev9v8hjid95df as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  defineProp3ur6h3slcvq4x as defineProp,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  listOf1jh22dvmctj1r as listOf,
} from './kotlin-kotlin-stdlib.mjs';
import { Companion_instance1pxem0dgnfbe2 as Companion_instance } from './planetlink-core.mjs';
import { PlanetLinkEx_instance3gpoi9jmqw2ye as PlanetLinkEx_instance } from './planetlink-bluesky.mjs';
import { PlanetLinkEx_instancelckvvl0vp6un as PlanetLinkEx_instance_0 } from './planetlink-misskey.mjs';
import { PlanetLinkEx_instance3tdphi0mynu2h as PlanetLinkEx_instance_1 } from './planetlink-mastodon.mjs';
import { PlanetLinkEx_instancepaifoimc50dn as PlanetLinkEx_instance_2 } from './planetlink-matrix.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ServiceType extends Enum {
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.q4();
  }
}
class ServiceEx {
  xmq(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'twitter' === _this__u8e3s4.type.toLowerCase();
  }
  tje(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'slack' === _this__u8e3s4.type.toLowerCase();
  }
  ymq(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'facebook' === _this__u8e3s4.type.toLowerCase();
  }
  zmq(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tumblr' === _this__u8e3s4.type.toLowerCase();
  }
  amr(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nostr' === _this__u8e3s4.type.toLowerCase();
  }
  bmr(_this__u8e3s4) {
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
  cmr() {
    return this.references;
  }
}
//endregion
var ServiceType_Twitter_instance;
var ServiceType_Mastodon_instance;
var ServiceType_Facebook_instance;
var ServiceType_Slack_instance;
var ServiceType_Tumblr_instance;
var ServiceType_Misskey_instance;
var ServiceType_Pleroma_instance;
var ServiceType_PixelFed_instance;
var ServiceType_Bluesky_instance;
var ServiceType_Nostr_instance;
var ServiceType_Matrix_instance;
function values() {
  return [ServiceType_Twitter_getInstance(), ServiceType_Mastodon_getInstance(), ServiceType_Facebook_getInstance(), ServiceType_Slack_getInstance(), ServiceType_Tumblr_getInstance(), ServiceType_Misskey_getInstance(), ServiceType_Pleroma_getInstance(), ServiceType_PixelFed_getInstance(), ServiceType_Bluesky_getInstance(), ServiceType_Nostr_getInstance(), ServiceType_Matrix_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'Twitter':
      return ServiceType_Twitter_getInstance();
    case 'Mastodon':
      return ServiceType_Mastodon_getInstance();
    case 'Facebook':
      return ServiceType_Facebook_getInstance();
    case 'Slack':
      return ServiceType_Slack_getInstance();
    case 'Tumblr':
      return ServiceType_Tumblr_getInstance();
    case 'Misskey':
      return ServiceType_Misskey_getInstance();
    case 'Pleroma':
      return ServiceType_Pleroma_getInstance();
    case 'PixelFed':
      return ServiceType_PixelFed_getInstance();
    case 'Bluesky':
      return ServiceType_Bluesky_getInstance();
    case 'Nostr':
      return ServiceType_Nostr_getInstance();
    case 'Matrix':
      return ServiceType_Matrix_getInstance();
    default:
      ServiceType_initEntries();
      THROW_IAE('No enum constant work.socialhub.planetlink.define.ServiceType.' + value);
      break;
  }
}
var ServiceType_entriesInitialized;
function ServiceType_initEntries() {
  if (ServiceType_entriesInitialized)
    return Unit_instance;
  ServiceType_entriesInitialized = true;
  ServiceType_Twitter_instance = new ServiceType('Twitter', 0);
  ServiceType_Mastodon_instance = new ServiceType('Mastodon', 1);
  ServiceType_Facebook_instance = new ServiceType('Facebook', 2);
  ServiceType_Slack_instance = new ServiceType('Slack', 3);
  ServiceType_Tumblr_instance = new ServiceType('Tumblr', 4);
  ServiceType_Misskey_instance = new ServiceType('Misskey', 5);
  ServiceType_Pleroma_instance = new ServiceType('Pleroma', 6);
  ServiceType_PixelFed_instance = new ServiceType('PixelFed', 7);
  ServiceType_Bluesky_instance = new ServiceType('Bluesky', 8);
  ServiceType_Nostr_instance = new ServiceType('Nostr', 9);
  ServiceType_Matrix_instance = new ServiceType('Matrix', 10);
}
function ServiceType_Twitter_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Twitter_instance;
}
function ServiceType_Mastodon_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Mastodon_instance;
}
function ServiceType_Facebook_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Facebook_instance;
}
function ServiceType_Slack_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Slack_instance;
}
function ServiceType_Tumblr_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Tumblr_instance;
}
function ServiceType_Misskey_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Misskey_instance;
}
function ServiceType_Pleroma_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Pleroma_instance;
}
function ServiceType_PixelFed_getInstance() {
  ServiceType_initEntries();
  return ServiceType_PixelFed_instance;
}
function ServiceType_Bluesky_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Bluesky_instance;
}
function ServiceType_Nostr_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Nostr_instance;
}
function ServiceType_Matrix_getInstance() {
  ServiceType_initEntries();
  return ServiceType_Matrix_instance;
}
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
initMetadataForClass(ServiceType, 'ServiceType');
initMetadataForObject(ServiceEx, 'ServiceEx');
initMetadataForObject(Reference, 'Reference');
//endregion
//region block: init
ServiceEx_instance = new ServiceEx();
//endregion
//region block: exports
ServiceType.values = values;
ServiceType.valueOf = valueOf;
defineProp(ServiceType, 'Twitter', ServiceType_Twitter_getInstance, VOID, true);
defineProp(ServiceType, 'Mastodon', ServiceType_Mastodon_getInstance, VOID, true);
defineProp(ServiceType, 'Facebook', ServiceType_Facebook_getInstance, VOID, true);
defineProp(ServiceType, 'Slack', ServiceType_Slack_getInstance, VOID, true);
defineProp(ServiceType, 'Tumblr', ServiceType_Tumblr_getInstance, VOID, true);
defineProp(ServiceType, 'Misskey', ServiceType_Misskey_getInstance, VOID, true);
defineProp(ServiceType, 'Pleroma', ServiceType_Pleroma_getInstance, VOID, true);
defineProp(ServiceType, 'PixelFed', ServiceType_PixelFed_getInstance, VOID, true);
defineProp(ServiceType, 'Bluesky', ServiceType_Bluesky_getInstance, VOID, true);
defineProp(ServiceType, 'Nostr', ServiceType_Nostr_getInstance, VOID, true);
defineProp(ServiceType, 'Matrix', ServiceType_Matrix_getInstance, VOID, true);
var ServiceEx_0 = {getInstance: ServiceEx_getInstance};
var Reference_0 = {getInstance: Reference_getInstance};
export {
  ServiceType as ServiceType,
  ServiceEx_0 as ServiceEx,
  Reference_0 as Reference,
};
//endregion

//# sourceMappingURL=planetlink-all.mjs.map
