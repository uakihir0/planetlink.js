import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  await2s6xyuld384ut as await_0,
  jsIsFunction2h24qpa0gp5p3 as jsIsFunction,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  emptyMapr06gerzljqtm as emptyMap,
  equals2au1ep9vhcato as equals,
  getKClass3t8tygqu4lcxf as getKClass,
  toInt2q8uldh7sc951 as toInt,
  Companion_getInstancec1c8yhxwuclv as Companion_getInstance,
  toLongkk4waq8msp1k as toLong,
  defineProp3ur6h3slcvq4x as defineProp,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  promisify1z0ncraq1ipzh as promisify,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  toString30pk9tzaqopn as toString,
  toString1pkumu07cwy4m as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  StringBuildermazzzhj6kkai as StringBuilder,
  get_ONEazvfdh9ju3d4 as get_ONE,
  add2suhfggl4zvkk as add,
  Default_getInstance2tudkf86ziur0 as Default_getInstance,
  getBigIntHashCode294hi5bdhtj6e as getBigIntHashCode,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  contains3ue2qo8xhmpf1 as contains,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  getNumberHashCode2l4nbdcihl25f as getNumberHashCode,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  LongSerializer_getInstance2fim4572ialei as LongSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  LinkedHashMapSerializermaoj2nyji7op as LinkedHashMapSerializer,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  ContextualSerializer1uidivg94sh5v as ContextualSerializer,
  DoubleSerializer_getInstance1wncowm4p8ecy as DoubleSerializer_getInstance,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  JsonElementSerializer_getInstance78doow9tocv6 as JsonElementSerializer_getInstance,
  JsonElementf07o4p6p57al as JsonElement,
  Jsonsmkyu9xjl7fv as Json,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import { AnySerializer_getInstance32lcggytvsxb8 as AnySerializer_getInstance } from './kmpcommon.mjs';
import { CoroutineScopefcb5f5dwqcas as CoroutineScope } from './kotlinx-coroutines-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import {
  encodeURLPathPart6y0hlser8v0t as encodeURLPathPart,
  encodeURLParameter1u3y18ab0iker as encodeURLParameter,
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
} from './ktor-ktor-http.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Matrix {}
class MatrixException extends Exception {
  static qky(e) {
    var $this = this.ke(e);
    init_work_socialhub_kmatrix_MatrixException($this);
    return $this;
  }
  static rky(status, body) {
    var $this = this.he('status code: ' + status + ', body: ' + body);
    init_work_socialhub_kmatrix_MatrixException($this);
    $this.nky_1 = status;
    $this.oky_1 = body;
    return $this;
  }
}
class MatrixFactory {
  n8l(uri, accessToken) {
    return new MatrixImpl(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.n8l(uri, accessToken) : $super.n8l.call(this, uri, accessToken);
  }
}
class AccountDataResource {}
function *getAccountData$suspendBridge(request, $completion) {
}
function *setAccountData$suspendBridge(request, $completion) {
}
function *getRoomAccountData$suspendBridge(request, $completion) {
}
function *setRoomAccountData$suspendBridge(request, $completion) {
}
class AccountsResource {}
function *whoami$suspendBridge($completion) {
}
function *logout$suspendBridge($completion) {
}
function *logoutAll$suspendBridge($completion) {
}
function *register$suspendBridge(request, $completion) {
}
function *changePassword$suspendBridge(request, $completion) {
}
class CapabilitiesResource {}
function *getCapabilities$suspendBridge($completion) {
}
class DevicesResource {}
function *getDevices$suspendBridge($completion) {
}
function *getDevice$suspendBridge(deviceId, $completion) {
}
function *updateDevice$suspendBridge(request, $completion) {
}
function *deleteDevice$suspendBridge(request, $completion) {
}
class DirectoryResource {}
function *resolveAlias$suspendBridge(roomAlias, $completion) {
}
function *setAlias$suspendBridge(request, $completion) {
}
function *deleteAlias$suspendBridge(roomAlias, $completion) {
}
function *getPublicRooms$suspendBridge(request, $completion) {
}
class EventsResource {}
function *getEvent$suspendBridge(roomId, eventId, $completion) {
}
function *getContext$suspendBridge(request, $completion) {
}
class FilterResource {}
function *createFilter$suspendBridge(request, $completion) {
}
function *getFilter$suspendBridge(request, $completion) {
}
function *deleteFilter$suspendBridge(request, $completion) {
}
class LoginResource {}
function *getLoginFlows$suspendBridge($completion) {
}
function *loginWithPassword$suspendBridge(request, $completion) {
}
class MediaResource {}
function *upload$suspendBridge(request, $completion) {
}
function *download$suspendBridge(request, $completion) {
}
function *thumbnail$suspendBridge(request, $completion) {
}
function *getConfig$suspendBridge($completion) {
}
function *previewUrl$suspendBridge(request, $completion) {
}
class NotificationsResource {}
function *getNotifications$suspendBridge(request, $completion) {
}
class PresenceResource {}
function *getPresence$suspendBridge(userId, $completion) {
}
function *setPresence$suspendBridge(request, $completion) {
}
class ProfileResource {}
function *getProfile$suspendBridge(userId, $completion) {
}
function *getDisplayName$suspendBridge(userId, $completion) {
}
function *setDisplayName$suspendBridge(request, $completion) {
}
function *getAvatarUrl$suspendBridge(userId, $completion) {
}
function *setAvatarUrl$suspendBridge(request, $completion) {
}
class PushRulesResource {}
function *getPushRules$suspendBridge($completion) {
}
function *getEnabled$suspendBridge(scope, kind, ruleId, $completion) {
}
function *setEnabled$suspendBridge(request, $completion) {
}
function *createRule$suspendBridge(request, $completion) {
}
function *deleteRule$suspendBridge(request, $completion) {
}
class PushersResource {}
function *getPushers$suspendBridge($completion) {
}
function *setPusher$suspendBridge(request, $completion) {
}
class RelationsResource {}
function *getRelations$suspendBridge(request, $completion) {
}
function *getThreads$suspendBridge(request, $completion) {
}
class RoomsResource {}
function *createRoom$suspendBridge(request, $completion) {
}
function *joinRoom$suspendBridge(request, $completion) {
}
function *leaveRoom$suspendBridge(request, $completion) {
}
function *invite$suspendBridge(request, $completion) {
}
function *getJoinedRooms$suspendBridge($completion) {
}
function *getRoomName$suspendBridge(roomId, $completion) {
}
function *getMembers$suspendBridge(roomId, $completion) {
}
function *getJoinedMembers$suspendBridge(roomId, $completion) {
}
function *getMessages$suspendBridge(request, $completion) {
}
function *sendMessage$suspendBridge(request, $completion) {
}
function *redactEvent$suspendBridge(request, $completion) {
}
function *setTyping$suspendBridge(request, $completion) {
}
function *sendReceipt$suspendBridge(request, $completion) {
}
function *setReadMarkers$suspendBridge(request, $completion) {
}
function *ban$suspendBridge(request, $completion) {
}
function *unban$suspendBridge(request, $completion) {
}
function *kick$suspendBridge(request, $completion) {
}
function getStateEvent$default(roomId, eventType, stateKey, $completion, $super) {
  stateKey = stateKey === VOID ? '' : stateKey;
  return $super === VOID ? this.bl6(roomId, eventType, stateKey, $completion) : $super.bl6.call(this, roomId, eventType, stateKey, $completion);
}
function *getStateEvent$suspendBridge(roomId, eventType, stateKey, $completion) {
}
function getStateEventBlocking$default(roomId, eventType, stateKey, $super) {
  stateKey = stateKey === VOID ? '' : stateKey;
  return $super === VOID ? this.el6(roomId, eventType, stateKey) : $super.el6.call(this, roomId, eventType, stateKey);
}
function *sendStateEvent$suspendBridge(request, $completion) {
}
function *forgetRoom$suspendBridge(request, $completion) {
}
function *getState$suspendBridge(roomId, $completion) {
}
class SearchResource {}
function *search$suspendBridge(request, $completion) {
}
class SyncResource {}
function *sync$suspendBridge(request, $completion) {
}
class TagsResource {}
function *getTags$suspendBridge(userId, roomId, $completion) {
}
function *setTag$suspendBridge(request, $completion) {
}
function *deleteTag$suspendBridge(request, $completion) {
}
class UserDirectoryResource {}
function *search$suspendBridge_0(request, $completion) {
}
class VersionsResource {}
function *getVersions$suspendBridge($completion) {
}
class VoIPResource {}
function *getTurnServer$suspendBridge($completion) {
}
class ChangePasswordRequest {
  constructor() {
    this.auth = null;
    this.newPassword = null;
    this.session = null;
    this.logoutDevices = null;
    this.logoutDevicesAll = null;
  }
  d9m(_set____db54di) {
    this.auth = _set____db54di;
  }
  p5y() {
    return this.auth;
  }
  nl7(_set____db54di) {
    this.newPassword = _set____db54di;
  }
  ol7() {
    return this.newPassword;
  }
  pl7(_set____db54di) {
    this.session = _set____db54di;
  }
  ql7() {
    return this.session;
  }
  rl7(_set____db54di) {
    this.logoutDevices = _set____db54di;
  }
  sl7() {
    return this.logoutDevices;
  }
  tl7(_set____db54di) {
    this.logoutDevicesAll = _set____db54di;
  }
  ul7() {
    return this.logoutDevicesAll;
  }
}
class RegisterRequest {
  constructor() {
    this.username = null;
    this.password = null;
    this.initialDeviceDisplayName = null;
    this.auth = null;
    this.session = null;
    this.did = null;
    this.bindEmail = null;
  }
  t9n(_set____db54di) {
    this.username = _set____db54di;
  }
  u9n() {
    return this.username;
  }
  x6r(_set____db54di) {
    this.password = _set____db54di;
  }
  j45() {
    return this.password;
  }
  vl7(_set____db54di) {
    this.initialDeviceDisplayName = _set____db54di;
  }
  wl7() {
    return this.initialDeviceDisplayName;
  }
  d9m(_set____db54di) {
    this.auth = _set____db54di;
  }
  p5y() {
    return this.auth;
  }
  pl7(_set____db54di) {
    this.session = _set____db54di;
  }
  ql7() {
    return this.session;
  }
  b7l(_set____db54di) {
    this.did = _set____db54di;
  }
  n5z() {
    return this.did;
  }
  xl7(_set____db54di) {
    this.bindEmail = _set____db54di;
  }
  yl7() {
    return this.bindEmail;
  }
}
class AccountDataGetRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.type = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
}
class AccountDataSetRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.type = null;
    this.data = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  rdl(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
}
class DevicesDeleteRequest {
  constructor() {
    this.deviceId = null;
  }
  bl8(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  cl8() {
    return this.deviceId;
  }
}
class DevicesUpdateRequest {
  constructor() {
    this.deviceId = null;
    this.displayName = null;
  }
  bl8(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  cl8() {
    return this.deviceId;
  }
  p5z(_set____db54di) {
    this.displayName = _set____db54di;
  }
  q5z() {
    return this.displayName;
  }
}
class DirectoryGetPublicRoomsRequest {
  constructor() {
    this.limit = null;
    this.since = null;
    this.server = null;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  dl8(_set____db54di) {
    this.since = _set____db54di;
  }
  qjm() {
    return this.since;
  }
  el8(_set____db54di) {
    this.server = _set____db54di;
  }
  fl8() {
    return this.server;
  }
}
class DirectorySetAliasRequest {
  constructor() {
    this.roomAlias = null;
    this.roomId = null;
  }
  gl8(_set____db54di) {
    this.roomAlias = _set____db54di;
  }
  hl8() {
    return this.roomAlias;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
}
class EventsGetContextRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.limit = null;
    this.filter = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  iky(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
}
class DeleteFilterRequest {
  constructor() {
    this.userId = null;
    this.filterId = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  il8(_set____db54di) {
    this.filterId = _set____db54di;
  }
  jl8() {
    return this.filterId;
  }
}
class FilterCreateRequest {
  constructor() {
    this.userId = null;
    this.eventTypes = null;
    this.notEventTypes = null;
    this.rooms = null;
    this.notRooms = null;
    this.senders = null;
    this.notSenders = null;
    this.limit = null;
    this.includeLeave = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  kl8(_set____db54di) {
    this.eventTypes = _set____db54di;
  }
  ll8() {
    return this.eventTypes;
  }
  ml8(_set____db54di) {
    this.notEventTypes = _set____db54di;
  }
  nl8() {
    return this.notEventTypes;
  }
  ol8(_set____db54di) {
    this.rooms = _set____db54di;
  }
  pl8() {
    return this.rooms;
  }
  ql8(_set____db54di) {
    this.notRooms = _set____db54di;
  }
  rl8() {
    return this.notRooms;
  }
  sl8(_set____db54di) {
    this.senders = _set____db54di;
  }
  tl8() {
    return this.senders;
  }
  ul8(_set____db54di) {
    this.notSenders = _set____db54di;
  }
  vl8() {
    return this.notSenders;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  wl8(_set____db54di) {
    this.includeLeave = _set____db54di;
  }
  xl8() {
    return this.includeLeave;
  }
}
class FilterGetRequest {
  constructor() {
    this.userId = null;
    this.filterId = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  il8(_set____db54di) {
    this.filterId = _set____db54di;
  }
  jl8() {
    return this.filterId;
  }
}
class LoginPasswordRequest {
  constructor() {
    this.user = null;
    this.password = null;
    this.initialDeviceDisplayName = null;
  }
  i45(_set____db54di) {
    this.user = _set____db54di;
  }
  l2z() {
    return this.user;
  }
  x6r(_set____db54di) {
    this.password = _set____db54di;
  }
  j45() {
    return this.password;
  }
  vl7(_set____db54di) {
    this.initialDeviceDisplayName = _set____db54di;
  }
  wl7() {
    return this.initialDeviceDisplayName;
  }
}
class LoginSsoRedirectRequest {
  constructor() {
    this.redirectUrl = null;
  }
  yl8(_set____db54di) {
    this.redirectUrl = _set____db54di;
  }
  zl8() {
    return this.redirectUrl;
  }
}
class MediaDownloadRequest {
  constructor() {
    this.serverName = null;
    this.mediaId = null;
    this.allowRemote = null;
  }
  al9(_set____db54di) {
    this.serverName = _set____db54di;
  }
  bl9() {
    return this.serverName;
  }
  cl9(_set____db54di) {
    this.mediaId = _set____db54di;
  }
  dl9() {
    return this.mediaId;
  }
  el9(_set____db54di) {
    this.allowRemote = _set____db54di;
  }
  fl9() {
    return this.allowRemote;
  }
}
class MediaPreviewUrlRequest {
  constructor() {
    this.url = null;
    this.ts = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  gl9(_set____db54di) {
    this.ts = _set____db54di;
  }
  zfl() {
    return this.ts;
  }
}
class MediaThumbnailRequest {
  constructor() {
    this.serverName = null;
    this.mediaId = null;
    this.width = null;
    this.height = null;
    this.method = null;
  }
  al9(_set____db54di) {
    this.serverName = _set____db54di;
  }
  bl9() {
    return this.serverName;
  }
  cl9(_set____db54di) {
    this.mediaId = _set____db54di;
  }
  dl9() {
    return this.mediaId;
  }
  u9z(_set____db54di) {
    this.width = _set____db54di;
  }
  a7e() {
    return this.width;
  }
  v9z(_set____db54di) {
    this.height = _set____db54di;
  }
  c7e() {
    return this.height;
  }
  hl9(_set____db54di) {
    this.method = _set____db54di;
  }
  e4k() {
    return this.method;
  }
}
class MediaUploadRequest {
  constructor() {
    this.fileName = null;
    this.contentType = null;
    this.bytes = null;
  }
  bkr(_set____db54di) {
    this.fileName = _set____db54di;
  }
  ckr() {
    return this.fileName;
  }
  il9(_set____db54di) {
    this.contentType = _set____db54di;
  }
  h46() {
    return this.contentType;
  }
  s95(_set____db54di) {
    this.bytes = _set____db54di;
  }
  h6l() {
    return this.bytes;
  }
}
class NotificationsGetRequest {
  constructor() {
    this.from = null;
    this.limit = null;
    this.only = null;
  }
  jl9(_set____db54di) {
    this.from = _set____db54di;
  }
  fi7() {
    return this.from;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  kl9(_set____db54di) {
    this.only = _set____db54di;
  }
  ll9() {
    return this.only;
  }
}
class PresenceSetRequest {
  constructor() {
    this.userId = null;
    this.presence = null;
    this.statusMsg = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  xfw(_set____db54di) {
    this.presence = _set____db54di;
  }
  yfw() {
    return this.presence;
  }
  ml9(_set____db54di) {
    this.statusMsg = _set____db54di;
  }
  nl9() {
    return this.statusMsg;
  }
}
class ProfileSetAvatarUrlRequest {
  constructor() {
    this.userId = null;
    this.avatarUrl = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  mak(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  nak() {
    return this.avatarUrl;
  }
}
class ProfileSetDisplayNameRequest {
  constructor() {
    this.userId = null;
    this.displayname = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  ol9(_set____db54di) {
    this.displayname = _set____db54di;
  }
  pl9() {
    return this.displayname;
  }
}
class PushRulesCreateRequest {
  constructor() {
    this.scope = 'global';
    this.kind = null;
    this.ruleId = null;
    this.conditions = null;
    this.enabled = null;
    this.actions = null;
    this.ruleBody = null;
  }
  xbz(_set____db54di) {
    this.scope = _set____db54di;
  }
  ybz() {
    return this.scope;
  }
  ql9(_set____db54di) {
    this.kind = _set____db54di;
  }
  d11() {
    return this.kind;
  }
  rl9(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  sl9() {
    return this.ruleId;
  }
  tl9(_set____db54di) {
    this.conditions = _set____db54di;
  }
  ul9() {
    return this.conditions;
  }
  vl9(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  wl9(_set____db54di) {
    this.actions = _set____db54di;
  }
  wfn() {
    return this.actions;
  }
  xl9(_set____db54di) {
    this.ruleBody = _set____db54di;
  }
  yl9() {
    return this.ruleBody;
  }
}
class PushRulesDeleteRequest {
  constructor() {
    this.scope = 'global';
    this.kind = null;
    this.ruleId = null;
  }
  xbz(_set____db54di) {
    this.scope = _set____db54di;
  }
  ybz() {
    return this.scope;
  }
  ql9(_set____db54di) {
    this.kind = _set____db54di;
  }
  d11() {
    return this.kind;
  }
  rl9(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  sl9() {
    return this.ruleId;
  }
}
class PushRulesSetEnabledRequest {
  constructor() {
    this.scope = 'global';
    this.kind = null;
    this.ruleId = null;
    this.enabled = null;
  }
  xbz(_set____db54di) {
    this.scope = _set____db54di;
  }
  ybz() {
    return this.scope;
  }
  ql9(_set____db54di) {
    this.kind = _set____db54di;
  }
  d11() {
    return this.kind;
  }
  rl9(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  sl9() {
    return this.ruleId;
  }
  vl9(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
}
class PushersSetRequest {
  constructor() {
    this.pushkey = null;
    this.kind = null;
    this.appId = null;
    this.appDisplayName = null;
    this.deviceDisplayName = null;
    this.profileTag = null;
    this.lang = null;
    this.data = null;
    this.append = null;
    this.enabled = null;
  }
  zl9(_set____db54di) {
    this.pushkey = _set____db54di;
  }
  ala() {
    return this.pushkey;
  }
  ql9(_set____db54di) {
    this.kind = _set____db54di;
  }
  d11() {
    return this.kind;
  }
  lfg(_set____db54di) {
    this.appId = _set____db54di;
  }
  mfg() {
    return this.appId;
  }
  bla(_set____db54di) {
    this.appDisplayName = _set____db54di;
  }
  cla() {
    return this.appDisplayName;
  }
  dla(_set____db54di) {
    this.deviceDisplayName = _set____db54di;
  }
  ela() {
    return this.deviceDisplayName;
  }
  fla(_set____db54di) {
    this.profileTag = _set____db54di;
  }
  gla() {
    return this.profileTag;
  }
  d9a(_set____db54di) {
    this.lang = _set____db54di;
  }
  n82() {
    return this.lang;
  }
  hla(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  ila(_set____db54di) {
    this.append = _set____db54di;
  }
  jla() {
    return this.append;
  }
  vl9(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
}
class PusherData {
  constructor() {
    this.url = null;
    this.format = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  ydl(_set____db54di) {
    this.format = _set____db54di;
  }
  zdl() {
    return this.format;
  }
}
class RelationsGetRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.relType = null;
    this.eventType = null;
    this.from = null;
    this.to = null;
    this.limit = null;
    this.dir = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  iky(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  kla(_set____db54di) {
    this.relType = _set____db54di;
  }
  lla() {
    return this.relType;
  }
  mla(_set____db54di) {
    this.eventType = _set____db54di;
  }
  nla() {
    return this.eventType;
  }
  jl9(_set____db54di) {
    this.from = _set____db54di;
  }
  fi7() {
    return this.from;
  }
  ola(_set____db54di) {
    this.to = _set____db54di;
  }
  di7() {
    return this.to;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  pla(_set____db54di) {
    this.dir = _set____db54di;
  }
  qla() {
    return this.dir;
  }
}
class ThreadsGetRequest {
  constructor() {
    this.roomId = null;
    this.include = null;
    this.limit = null;
    this.from = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  rla(_set____db54di) {
    this.include = _set____db54di;
  }
  sla() {
    return this.include;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  jl9(_set____db54di) {
    this.from = _set____db54di;
  }
  fi7() {
    return this.from;
  }
}
class RoomsBanRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class RoomsCreateRoomRequest {
  constructor() {
    this.visibility = null;
    this.roomAliasName = null;
    this.name = null;
    this.topic = null;
    this.invite = null;
    this.preset = null;
    this.isDirect = null;
  }
  a3a(_set____db54di) {
    this.visibility = _set____db54di;
  }
  b3a() {
    return this.visibility;
  }
  tla(_set____db54di) {
    this.roomAliasName = _set____db54di;
  }
  ula() {
    return this.roomAliasName;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  pfq(_set____db54di) {
    this.topic = _set____db54di;
  }
  qfq() {
    return this.topic;
  }
  vla(_set____db54di) {
    this.invite = _set____db54di;
  }
  wla() {
    return this.invite;
  }
  xla(_set____db54di) {
    this.preset = _set____db54di;
  }
  yla() {
    return this.preset;
  }
  zla(_set____db54di) {
    this.isDirect = _set____db54di;
  }
  alb() {
    return this.isDirect;
  }
}
class RoomsForgetRoomRequest {
  constructor() {
    this.roomId = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
}
class RoomsGetJoinedRoomsRequest {}
class RoomsGetMessagesRequest {
  constructor() {
    this.roomId = null;
    this.from = null;
    this.to = null;
    this.dir = 'b';
    this.limit = null;
    this.filter = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  jl9(_set____db54di) {
    this.from = _set____db54di;
  }
  fi7() {
    return this.from;
  }
  ola(_set____db54di) {
    this.to = _set____db54di;
  }
  di7() {
    return this.to;
  }
  pla(_set____db54di) {
    this.dir = _set____db54di;
  }
  qla() {
    return this.dir;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
}
class RoomsInviteRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class RoomsJoinRoomRequest {
  constructor() {
    this.roomIdOrAlias = null;
    this.reason = null;
  }
  blb(_set____db54di) {
    this.roomIdOrAlias = _set____db54di;
  }
  clb() {
    return this.roomIdOrAlias;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class RoomsKickRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class RoomsLeaveRoomRequest {
  constructor() {
    this.roomId = null;
    this.reason = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class RoomsRedactEventRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.reason = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  iky(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class RoomsSendMessageRequest {
  constructor() {
    this.roomId = null;
    this.body = null;
    this.msgtype = 'm.text';
    this.replyTo = null;
    this.url = null;
    this.filename = null;
    this.mimetype = null;
    this.thumbnailUrl = null;
    this.thumbnailMimetype = null;
    this.thumbnailSize = null;
    this.width = null;
    this.height = null;
    this.duration = null;
    this.geoUri = null;
    this.description = null;
    this.relatesToType = null;
    this.relatesToEventId = null;
    this.relatesToKey = null;
    this.relatesToRelType = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  ta8(_set____db54di) {
    this.body = _set____db54di;
  }
  ua8() {
    return this.body;
  }
  dlb(_set____db54di) {
    this.msgtype = _set____db54di;
  }
  elb() {
    return this.msgtype;
  }
  flb(_set____db54di) {
    this.replyTo = _set____db54di;
  }
  f2z() {
    return this.replyTo;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  ofr(_set____db54di) {
    this.filename = _set____db54di;
  }
  pfr() {
    return this.filename;
  }
  igz(_set____db54di) {
    this.mimetype = _set____db54di;
  }
  jgz() {
    return this.mimetype;
  }
  ra0(_set____db54di) {
    this.thumbnailUrl = _set____db54di;
  }
  sa0() {
    return this.thumbnailUrl;
  }
  glb(_set____db54di) {
    this.thumbnailMimetype = _set____db54di;
  }
  hlb() {
    return this.thumbnailMimetype;
  }
  ilb(_set____db54di) {
    this.thumbnailSize = _set____db54di;
  }
  jlb() {
    return this.thumbnailSize;
  }
  klb(_set____db54di) {
    this.width = _set____db54di;
  }
  a7e() {
    return this.width;
  }
  llb(_set____db54di) {
    this.height = _set____db54di;
  }
  c7e() {
    return this.height;
  }
  mlb(_set____db54di) {
    this.duration = _set____db54di;
  }
  ofl() {
    return this.duration;
  }
  nlb(_set____db54di) {
    this.geoUri = _set____db54di;
  }
  olb() {
    return this.geoUri;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
  plb(_set____db54di) {
    this.relatesToType = _set____db54di;
  }
  qlb() {
    return this.relatesToType;
  }
  rlb(_set____db54di) {
    this.relatesToEventId = _set____db54di;
  }
  slb() {
    return this.relatesToEventId;
  }
  tlb(_set____db54di) {
    this.relatesToKey = _set____db54di;
  }
  ulb() {
    return this.relatesToKey;
  }
  vlb(_set____db54di) {
    this.relatesToRelType = _set____db54di;
  }
  wlb() {
    return this.relatesToRelType;
  }
}
class RoomsSendReceiptRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.receiptType = 'm.read';
    this.threadId = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  iky(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  xlb(_set____db54di) {
    this.receiptType = _set____db54di;
  }
  ylb() {
    return this.receiptType;
  }
  zlb(_set____db54di) {
    this.threadId = _set____db54di;
  }
  alc() {
    return this.threadId;
  }
}
class RoomsSendStateEventRequest {
  constructor() {
    this.roomId = null;
    this.eventType = null;
    this.stateKey = null;
    this.body = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  mla(_set____db54di) {
    this.eventType = _set____db54di;
  }
  nla() {
    return this.eventType;
  }
  blc(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  ta8(_set____db54di) {
    this.body = _set____db54di;
  }
  ua8() {
    return this.body;
  }
}
class RoomsSetReadMarkersRequest {
  constructor() {
    this.roomId = null;
    this.fullyRead = null;
    this.read = null;
    this.readPrivate = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  dlc(_set____db54di) {
    this.fullyRead = _set____db54di;
  }
  elc() {
    return this.fullyRead;
  }
  flc(_set____db54di) {
    this.read = _set____db54di;
  }
  ha3() {
    return this.read;
  }
  glc(_set____db54di) {
    this.readPrivate = _set____db54di;
  }
  hlc() {
    return this.readPrivate;
  }
}
class RoomsTypingRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.typing = null;
    this.timeout = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  ilc(_set____db54di) {
    this.typing = _set____db54di;
  }
  jlc() {
    return this.typing;
  }
  klc(_set____db54di) {
    this.timeout = _set____db54di;
  }
  llc() {
    return this.timeout;
  }
}
class RoomsUnbanRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  ch6(_set____db54di) {
    this.reason = _set____db54di;
  }
  e6p() {
    return this.reason;
  }
}
class SearchRequest {
  constructor() {
    this.searchTerm = null;
    this.keys = null;
    this.orderBy = null;
    this.roomIds = null;
    this.nextBatch = null;
  }
  mlc(_set____db54di) {
    this.searchTerm = _set____db54di;
  }
  nlc() {
    return this.searchTerm;
  }
  olc(_set____db54di) {
    this.keys = _set____db54di;
  }
  l4() {
    return this.keys;
  }
  plc(_set____db54di) {
    this.orderBy = _set____db54di;
  }
  qlc() {
    return this.orderBy;
  }
  rlc(_set____db54di) {
    this.roomIds = _set____db54di;
  }
  slc() {
    return this.roomIds;
  }
  tlc(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  ulc() {
    return this.nextBatch;
  }
}
class SyncRequest {
  constructor() {
    this.since = null;
    this.timeout = null;
    this.filter = null;
    this.fullState = null;
    this.setPresence = null;
  }
  dl8(_set____db54di) {
    this.since = _set____db54di;
  }
  qjm() {
    return this.since;
  }
  klc(_set____db54di) {
    this.timeout = _set____db54di;
  }
  llc() {
    return this.timeout;
  }
  tdk(_set____db54di) {
    this.filter = _set____db54di;
  }
  p64() {
    return this.filter;
  }
  vlc(_set____db54di) {
    this.fullState = _set____db54di;
  }
  wlc() {
    return this.fullState;
  }
  xlc(_set____db54di) {
    this.setPresence = _set____db54di;
  }
  ylc() {
    return this.setPresence;
  }
}
class TagsDeleteRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.tag = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  o31(_set____db54di) {
    this.tag = _set____db54di;
  }
  p31() {
    return this.tag;
  }
}
class TagsSetRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.tag = null;
    this.order = null;
  }
  k91(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  o31(_set____db54di) {
    this.tag = _set____db54di;
  }
  p31() {
    return this.tag;
  }
  zlc(_set____db54di) {
    this.order = _set____db54di;
  }
  ald() {
    return this.order;
  }
}
class UserDirectorySearchRequest {
  constructor() {
    this.searchTerm = null;
    this.limit = null;
  }
  mlc(_set____db54di) {
    this.searchTerm = _set____db54di;
  }
  nlc() {
    return this.searchTerm;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
}
class Response {
  constructor(data) {
    this.data = data;
    this.limit = null;
    this.json = null;
  }
  baf(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  bld(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  pbz(_set____db54di) {
    this.json = _set____db54di;
  }
  v1n() {
    return this.json;
  }
}
class ResponseUnit {
  constructor() {
    this.limit = null;
  }
  bld(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.cld_1 = [null, null, null, null, lazy(tmp_0, RegisterResponse$Companion$$childSerializers$_anonymous__fwt0di), null, null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.account.RegisterResponse', this, 8);
    tmp0_serialDesc.m1a('access_token', false);
    tmp0_serialDesc.m1a('home_server', false);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('device_id', true);
    tmp0_serialDesc.m1a('default_rooms', true);
    tmp0_serialDesc.m1a('next_chunk_ms', true);
    tmp0_serialDesc.m1a('device_display_name', true);
    tmp0_serialDesc.m1a('well_known', true);
    this.dld_1 = tmp0_serialDesc;
  }
  eld(encoder, value) {
    var tmp0_desc = this.dld_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().cld_1;
    tmp1_output.j14(tmp0_desc, 0, value.accessToken);
    tmp1_output.j14(tmp0_desc, 1, value.homeServer);
    tmp1_output.j14(tmp0_desc, 2, value.userId);
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.deviceId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.deviceId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.defaultRooms == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.defaultRooms);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.nextChunkMs == null)) {
      tmp1_output.m14(tmp0_desc, 5, LongSerializer_getInstance(), value.nextChunkMs);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.deviceDisplayName == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.deviceDisplayName);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.wellKnown == null)) {
      tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.wellKnown);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.eld(encoder, value instanceof RegisterResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dld_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.u12(tmp0_desc);
    var tmp13_cached = Companion_getInstance_0().cld_1;
    if (tmp12_input.j13()) {
      tmp4_local0 = tmp12_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.i13(tmp0_desc, 4, tmp13_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.i13(tmp0_desc, 5, LongSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.i13(tmp0_desc, 4, tmp13_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.i13(tmp0_desc, 5, LongSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp12_input.v12(tmp0_desc);
    return RegisterResponse.fld(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  cy() {
    return this.dld_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_0().cld_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].y2()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class RegisterResponse {
  constructor(accessToken, homeServer, userId, deviceId, defaultRooms, nextChunkMs, deviceDisplayName, wellKnown) {
    Companion_getInstance_0();
    deviceId = deviceId === VOID ? null : deviceId;
    defaultRooms = defaultRooms === VOID ? null : defaultRooms;
    nextChunkMs = nextChunkMs === VOID ? null : nextChunkMs;
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    wellKnown = wellKnown === VOID ? null : wellKnown;
    this.accessToken = accessToken;
    this.homeServer = homeServer;
    this.userId = userId;
    this.deviceId = deviceId;
    this.defaultRooms = defaultRooms;
    this.nextChunkMs = nextChunkMs;
    this.deviceDisplayName = deviceDisplayName;
    this.wellKnown = wellKnown;
  }
  f9r() {
    return this.accessToken;
  }
  gld() {
    return this.homeServer;
  }
  l91() {
    return this.userId;
  }
  cl8() {
    return this.deviceId;
  }
  hld() {
    return this.defaultRooms;
  }
  ild() {
    return this.nextChunkMs;
  }
  ela() {
    return this.deviceDisplayName;
  }
  jld() {
    return this.wellKnown;
  }
  static fld(seen0, accessToken, homeServer, userId, deviceId, defaultRooms, nextChunkMs, deviceDisplayName, wellKnown, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance().dld_1);
    }
    var $this = createThis(this);
    $this.accessToken = accessToken;
    $this.homeServer = homeServer;
    $this.userId = userId;
    if (0 === (seen0 & 8))
      $this.deviceId = null;
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 16))
      $this.defaultRooms = null;
    else
      $this.defaultRooms = defaultRooms;
    if (0 === (seen0 & 32))
      $this.nextChunkMs = null;
    else
      $this.nextChunkMs = nextChunkMs;
    if (0 === (seen0 & 64))
      $this.deviceDisplayName = null;
    else
      $this.deviceDisplayName = deviceDisplayName;
    if (0 === (seen0 & 128))
      $this.wellKnown = null;
    else
      $this.wellKnown = wellKnown;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.accounts.AccountsWhoamiResponse', this, 3);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('device_id', true);
    tmp0_serialDesc.m1a('is_guest', true);
    this.kld_1 = tmp0_serialDesc;
  }
  lld(encoder, value) {
    var tmp0_desc = this.kld_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.userId);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.deviceId == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.deviceId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.isGuest === false)) {
      tmp1_output.b14(tmp0_desc, 2, value.isGuest);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.lld(encoder, value instanceof AccountsWhoamiResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.kld_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.w12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.w12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return AccountsWhoamiResponse.nld(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.kld_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance()];
  }
}
class AccountsWhoamiResponse {
  constructor() {
    this.deviceId = null;
    this.isGuest = false;
  }
  m9n(_set____db54di) {
    this.mld_1 = _set____db54di;
  }
  l91() {
    var tmp = this.mld_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('userId');
    }
  }
  bl8(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  cl8() {
    return this.deviceId;
  }
  old(_set____db54di) {
    this.isGuest = _set____db54di;
  }
  pld() {
    return this.isGuest;
  }
  static nld(seen0, userId, deviceId, isGuest, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().kld_1);
    }
    var $this = createThis(this);
    $this.mld_1 = userId;
    if (0 === (seen0 & 2))
      $this.deviceId = null;
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 4))
      $this.isGuest = false;
    else
      $this.isGuest = isGuest;
    return $this;
  }
  get userId() {
    return this.l91();
  }
  set userId(value) {
    this.m9n(value);
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.Capabilities', this, 5);
    tmp0_serialDesc.m1a('m.change_password', true);
    tmp0_serialDesc.m1a('m.room_versions', true);
    tmp0_serialDesc.m1a('m.set_displayname', true);
    tmp0_serialDesc.m1a('m.set_avatar_url', true);
    tmp0_serialDesc.m1a('m.3pid_changes', true);
    this.qld_1 = tmp0_serialDesc;
  }
  rld(encoder, value) {
    var tmp0_desc = this.qld_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.changePassword == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_2(), value.changePassword);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.roomVersions == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_4(), value.roomVersions);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.setDisplayname == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_3(), value.setDisplayname);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.setAvatarUrl == null)) {
      tmp1_output.m14(tmp0_desc, 3, $serializer_getInstance_3(), value.setAvatarUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.thirdPartyIdChanges == null)) {
      tmp1_output.m14(tmp0_desc, 4, $serializer_getInstance_3(), value.thirdPartyIdChanges);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.rld(encoder, value instanceof Capabilities ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.qld_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return Capabilities.sld(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.qld_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_3()), get_nullable($serializer_getInstance_3()), get_nullable($serializer_getInstance_3())];
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.ChangePassword', this, 1);
    tmp0_serialDesc.m1a('enabled', true);
    this.tld_1 = tmp0_serialDesc;
  }
  uld(encoder, value) {
    var tmp0_desc = this.tld_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.enabled === true)) {
      tmp1_output.b14(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uld(encoder, value instanceof ChangePassword ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tld_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return ChangePassword.vld(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.tld_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class Companion_3 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.BooleanCapability', this, 1);
    tmp0_serialDesc.m1a('enabled', true);
    this.wld_1 = tmp0_serialDesc;
  }
  xld(encoder, value) {
    var tmp0_desc = this.wld_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.enabled === true)) {
      tmp1_output.b14(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xld(encoder, value instanceof BooleanCapability ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wld_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return BooleanCapability.yld(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.wld_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zld_1 = [null, lazy(tmp_0, CapabilitiesGetResponse$RoomVersions$Companion$$childSerializers$_anonymous__trldqp)];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.RoomVersions', this, 2);
    tmp0_serialDesc.m1a('default', true);
    tmp0_serialDesc.m1a('available', true);
    this.ale_1 = tmp0_serialDesc;
  }
  ble(encoder, value) {
    var tmp0_desc = this.ale_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().zld_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.default === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.default);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.available;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 1, tmp2_cached[1].y2(), value.available);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ble(encoder, value instanceof RoomVersions ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ale_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().zld_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return RoomVersions.cle(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ale_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_5().zld_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].y2()];
  }
}
class Capabilities {
  constructor() {
    this.changePassword = null;
    this.roomVersions = null;
    this.setDisplayname = null;
    this.setAvatarUrl = null;
    this.thirdPartyIdChanges = null;
  }
  dle(_set____db54di) {
    this.changePassword = _set____db54di;
  }
  ele() {
    return this.changePassword;
  }
  fle(_set____db54di) {
    this.roomVersions = _set____db54di;
  }
  gle() {
    return this.roomVersions;
  }
  hle(_set____db54di) {
    this.setDisplayname = _set____db54di;
  }
  ile() {
    return this.setDisplayname;
  }
  jle(_set____db54di) {
    this.setAvatarUrl = _set____db54di;
  }
  kle() {
    return this.setAvatarUrl;
  }
  lle(_set____db54di) {
    this.thirdPartyIdChanges = _set____db54di;
  }
  mle() {
    return this.thirdPartyIdChanges;
  }
  static sld(seen0, changePassword, roomVersions, setDisplayname, setAvatarUrl, thirdPartyIdChanges, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().qld_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.changePassword = null;
    else
      $this.changePassword = changePassword;
    if (0 === (seen0 & 2))
      $this.roomVersions = null;
    else
      $this.roomVersions = roomVersions;
    if (0 === (seen0 & 4))
      $this.setDisplayname = null;
    else
      $this.setDisplayname = setDisplayname;
    if (0 === (seen0 & 8))
      $this.setAvatarUrl = null;
    else
      $this.setAvatarUrl = setAvatarUrl;
    if (0 === (seen0 & 16))
      $this.thirdPartyIdChanges = null;
    else
      $this.thirdPartyIdChanges = thirdPartyIdChanges;
    return $this;
  }
}
class ChangePassword {
  constructor() {
    this.enabled = true;
  }
  b77(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  static vld(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().tld_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = true;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class BooleanCapability {
  constructor() {
    this.enabled = true;
  }
  b77(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  static yld(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().wld_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = true;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class RoomVersions {
  constructor() {
    Companion_getInstance_5();
    this.default = '';
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.available = emptyMap();
  }
  nle(_set____db54di) {
    this.default = _set____db54di;
  }
  ole() {
    return this.default;
  }
  ple(_set____db54di) {
    this.available = _set____db54di;
  }
  qle() {
    return this.available;
  }
  static cle(seen0, default_0, available, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().ale_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.default = '';
    else
      $this.default = default_0;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.available = emptyMap();
    } else
      $this.available = available;
    return $this;
  }
}
class Companion_5 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse', this, 1);
    tmp0_serialDesc.m1a('capabilities', true);
    this.rle_1 = tmp0_serialDesc;
  }
  sle(encoder, value) {
    var tmp0_desc = this.rle_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !equals(value.capabilities, new Capabilities())) {
      tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_1(), value.capabilities);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sle(encoder, value instanceof CapabilitiesGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rle_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return CapabilitiesGetResponse.tle(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.rle_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_1()];
  }
}
class CapabilitiesGetResponse {
  constructor() {
    this.capabilities = new Capabilities();
  }
  ule(_set____db54di) {
    this.capabilities = _set____db54di;
  }
  vle() {
    return this.capabilities;
  }
  static tle(seen0, capabilities, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().rle_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.capabilities = new Capabilities();
    else
      $this.capabilities = capabilities;
    return $this;
  }
}
class Companion_6 {}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.devices.DevicesGetDeviceResponse', this, 4);
    tmp0_serialDesc.m1a('device_id', true);
    tmp0_serialDesc.m1a('display_name', true);
    tmp0_serialDesc.m1a('last_seen_ip', true);
    tmp0_serialDesc.m1a('last_seen_ts', true);
    this.wle_1 = tmp0_serialDesc;
  }
  xle(encoder, value) {
    var tmp0_desc = this.wle_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.deviceId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.deviceId);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.displayName == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.lastSeenIp == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.lastSeenIp);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.lastSeenTs == null)) {
      tmp1_output.m14(tmp0_desc, 3, LongSerializer_getInstance(), value.lastSeenTs);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xle(encoder, value instanceof DevicesGetDeviceResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wle_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return DevicesGetDeviceResponse.yle(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.wle_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
  }
}
class DevicesGetDeviceResponse {
  constructor() {
    this.deviceId = '';
    this.displayName = null;
    this.lastSeenIp = null;
    this.lastSeenTs = null;
  }
  zle(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  cl8() {
    return this.deviceId;
  }
  p5z(_set____db54di) {
    this.displayName = _set____db54di;
  }
  q5z() {
    return this.displayName;
  }
  alf(_set____db54di) {
    this.lastSeenIp = _set____db54di;
  }
  blf() {
    return this.lastSeenIp;
  }
  clf(_set____db54di) {
    this.lastSeenTs = _set____db54di;
  }
  dlf() {
    return this.lastSeenTs;
  }
  static yle(seen0, deviceId, displayName, lastSeenIp, lastSeenTs, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().wle_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.deviceId = '';
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 2))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 4))
      $this.lastSeenIp = null;
    else
      $this.lastSeenIp = lastSeenIp;
    if (0 === (seen0 & 8))
      $this.lastSeenTs = null;
    else
      $this.lastSeenTs = lastSeenTs;
    return $this;
  }
}
class Companion_7 {
  constructor() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.elf_1 = [lazy(tmp_0, DevicesGetResponse$Companion$$childSerializers$_anonymous__plmvsg)];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.devices.DevicesGetResponse', this, 1);
    tmp0_serialDesc.m1a('devices', true);
    this.flf_1 = tmp0_serialDesc;
  }
  glf(encoder, value) {
    var tmp0_desc = this.flf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().elf_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.devices;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.devices);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.glf(encoder, value instanceof DevicesGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.flf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_8().elf_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return DevicesGetResponse.hlf(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.flf_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_8().elf_1[0].y2()];
  }
}
class DevicesGetResponse {
  constructor() {
    Companion_getInstance_8();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.devices = [];
  }
  ilf(_set____db54di) {
    this.devices = _set____db54di;
  }
  jlf() {
    return this.devices;
  }
  static hlf(seen0, devices, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().flf_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.devices = [];
    } else
      $this.devices = devices;
    return $this;
  }
}
class Companion_8 {}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.devices.Device', this, 4);
    tmp0_serialDesc.m1a('device_id', true);
    tmp0_serialDesc.m1a('display_name', true);
    tmp0_serialDesc.m1a('last_seen_ip', true);
    tmp0_serialDesc.m1a('last_seen_ts', true);
    this.klf_1 = tmp0_serialDesc;
  }
  llf(encoder, value) {
    var tmp0_desc = this.klf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.deviceId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.deviceId);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.displayName == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.lastSeenIp == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.lastSeenIp);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.lastSeenTs == null)) {
      tmp1_output.m14(tmp0_desc, 3, LongSerializer_getInstance(), value.lastSeenTs);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.llf(encoder, value instanceof Device ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.klf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return Device.mlf(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.klf_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
  }
}
class Device {
  constructor() {
    this.deviceId = '';
    this.displayName = null;
    this.lastSeenIp = null;
    this.lastSeenTs = null;
  }
  zle(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  cl8() {
    return this.deviceId;
  }
  p5z(_set____db54di) {
    this.displayName = _set____db54di;
  }
  q5z() {
    return this.displayName;
  }
  alf(_set____db54di) {
    this.lastSeenIp = _set____db54di;
  }
  blf() {
    return this.lastSeenIp;
  }
  clf(_set____db54di) {
    this.lastSeenTs = _set____db54di;
  }
  dlf() {
    return this.lastSeenTs;
  }
  static mlf(seen0, deviceId, displayName, lastSeenIp, lastSeenTs, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().klf_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.deviceId = '';
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 2))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 4))
      $this.lastSeenIp = null;
    else
      $this.lastSeenIp = lastSeenIp;
    if (0 === (seen0 & 8))
      $this.lastSeenTs = null;
    else
      $this.lastSeenTs = lastSeenTs;
    return $this;
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nlf_1 = [lazy(tmp_0, DirectoryGetPublicRoomsResponse$Companion$$childSerializers$_anonymous__v8h9y5), null, null, null];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.directory.DirectoryGetPublicRoomsResponse', this, 4);
    tmp0_serialDesc.m1a('chunk', true);
    tmp0_serialDesc.m1a('next_batch', true);
    tmp0_serialDesc.m1a('prev_batch', true);
    tmp0_serialDesc.m1a('total_room_count_estimate', true);
    this.olf_1 = tmp0_serialDesc;
  }
  plf(encoder, value) {
    var tmp0_desc = this.olf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().nlf_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.chunk);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.nextBatch == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.nextBatch);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.prevBatch == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.prevBatch);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.totalRoomCountEstimate == null)) {
      tmp1_output.m14(tmp0_desc, 3, LongSerializer_getInstance(), value.totalRoomCountEstimate);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.plf(encoder, value instanceof DirectoryGetPublicRoomsResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.olf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().nlf_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.g13(tmp0_desc, 0, tmp9_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.g13(tmp0_desc, 0, tmp9_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return DirectoryGetPublicRoomsResponse.qlf(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.olf_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_10().nlf_1[0].y2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
  }
}
class DirectoryGetPublicRoomsResponse {
  constructor() {
    Companion_getInstance_10();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.nextBatch = null;
    this.prevBatch = null;
    this.totalRoomCountEstimate = null;
  }
  rlf(_set____db54di) {
    this.chunk = _set____db54di;
  }
  slf() {
    return this.chunk;
  }
  tlc(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  ulc() {
    return this.nextBatch;
  }
  tlf(_set____db54di) {
    this.prevBatch = _set____db54di;
  }
  ulf() {
    return this.prevBatch;
  }
  vlf(_set____db54di) {
    this.totalRoomCountEstimate = _set____db54di;
  }
  wlf() {
    return this.totalRoomCountEstimate;
  }
  static qlf(seen0, chunk, nextBatch, prevBatch, totalRoomCountEstimate, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().olf_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 2))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    if (0 === (seen0 & 4))
      $this.prevBatch = null;
    else
      $this.prevBatch = prevBatch;
    if (0 === (seen0 & 8))
      $this.totalRoomCountEstimate = null;
    else
      $this.totalRoomCountEstimate = totalRoomCountEstimate;
    return $this;
  }
}
class Companion_10 {
  constructor() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xlf_1 = [null, null, null, null, null, lazy(tmp_0, PublicRoomChunk$Companion$$childSerializers$_anonymous__jkytfj), null, null, null, null];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.directory.PublicRoomChunk', this, 10);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('topic', true);
    tmp0_serialDesc.m1a('num_joined_members', true);
    tmp0_serialDesc.m1a('canonical_alias', true);
    tmp0_serialDesc.m1a('aliases', true);
    tmp0_serialDesc.m1a('world_readable', true);
    tmp0_serialDesc.m1a('guest_can_join', true);
    tmp0_serialDesc.m1a('avatar_url', true);
    tmp0_serialDesc.m1a('join_rule', true);
    this.ylf_1 = tmp0_serialDesc;
  }
  zlf(encoder, value) {
    var tmp0_desc = this.ylf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().xlf_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.topic == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.topic);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.numJoinedMembers === 0n)) {
      tmp1_output.f14(tmp0_desc, 3, value.numJoinedMembers);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.canonicalAlias == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.canonicalAlias);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.aliases == null)) {
      tmp1_output.m14(tmp0_desc, 5, tmp2_cached[5].y2(), value.aliases);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.worldReadable === false)) {
      tmp1_output.b14(tmp0_desc, 6, value.worldReadable);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.guestCanJoin === false)) {
      tmp1_output.b14(tmp0_desc, 7, value.guestCanJoin);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.avatarUrl == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.avatarUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.joinRule == null)) {
      tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.joinRule);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zlf(encoder, value instanceof PublicRoomChunk ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ylf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0n;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = false;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.u12(tmp0_desc);
    var tmp15_cached = Companion_getInstance_11().xlf_1;
    if (tmp14_input.j13()) {
      tmp4_local0 = tmp14_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.a13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, tmp15_cached[5].y2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.w12(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.w12(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.a13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, tmp15_cached[5].y2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.w12(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.w12(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp14_input.v12(tmp0_desc);
    return PublicRoomChunk.alg(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  cy() {
    return this.ylf_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_11().xlf_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].y2()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PublicRoomChunk {
  constructor() {
    Companion_getInstance_11();
    this.roomId = '';
    this.name = null;
    this.topic = null;
    this.numJoinedMembers = 0n;
    this.canonicalAlias = null;
    this.aliases = null;
    this.worldReadable = false;
    this.guestCanJoin = false;
    this.avatarUrl = null;
    this.joinRule = null;
  }
  blg(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  pfq(_set____db54di) {
    this.topic = _set____db54di;
  }
  qfq() {
    return this.topic;
  }
  clg(_set____db54di) {
    this.numJoinedMembers = _set____db54di;
  }
  dlg() {
    return this.numJoinedMembers;
  }
  elg(_set____db54di) {
    this.canonicalAlias = _set____db54di;
  }
  flg() {
    return this.canonicalAlias;
  }
  s9z(_set____db54di) {
    this.aliases = _set____db54di;
  }
  t9z() {
    return this.aliases;
  }
  glg(_set____db54di) {
    this.worldReadable = _set____db54di;
  }
  hlg() {
    return this.worldReadable;
  }
  ilg(_set____db54di) {
    this.guestCanJoin = _set____db54di;
  }
  jlg() {
    return this.guestCanJoin;
  }
  mak(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  nak() {
    return this.avatarUrl;
  }
  klg(_set____db54di) {
    this.joinRule = _set____db54di;
  }
  llg() {
    return this.joinRule;
  }
  static alg(seen0, roomId, name, topic, numJoinedMembers, canonicalAlias, aliases, worldReadable, guestCanJoin, avatarUrl, joinRule, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().ylf_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.topic = null;
    else
      $this.topic = topic;
    if (0 === (seen0 & 8))
      $this.numJoinedMembers = 0n;
    else
      $this.numJoinedMembers = numJoinedMembers;
    if (0 === (seen0 & 16))
      $this.canonicalAlias = null;
    else
      $this.canonicalAlias = canonicalAlias;
    if (0 === (seen0 & 32))
      $this.aliases = null;
    else
      $this.aliases = aliases;
    if (0 === (seen0 & 64))
      $this.worldReadable = false;
    else
      $this.worldReadable = worldReadable;
    if (0 === (seen0 & 128))
      $this.guestCanJoin = false;
    else
      $this.guestCanJoin = guestCanJoin;
    if (0 === (seen0 & 256))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    if (0 === (seen0 & 512))
      $this.joinRule = null;
    else
      $this.joinRule = joinRule;
    return $this;
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mlg_1 = [null, lazy(tmp_0, DirectoryResolveAliasResponse$Companion$$childSerializers$_anonymous__obpzjs)];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.directory.DirectoryResolveAliasResponse', this, 2);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('servers', true);
    this.nlg_1 = tmp0_serialDesc;
  }
  olg(encoder, value) {
    var tmp0_desc = this.nlg_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().mlg_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.roomId);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.servers;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 1, tmp2_cached[1].y2(), value.servers);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.olg(encoder, value instanceof DirectoryResolveAliasResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nlg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().mlg_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return DirectoryResolveAliasResponse.plg(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.nlg_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_12().mlg_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].y2()];
  }
}
class DirectoryResolveAliasResponse {
  constructor() {
    Companion_getInstance_12();
    this.roomId = '';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.servers = [];
  }
  blg(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  qlg(_set____db54di) {
    this.servers = _set____db54di;
  }
  rlg() {
    return this.servers;
  }
  static plg(seen0, roomId, servers, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().nlg_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.servers = [];
    } else
      $this.servers = servers;
    return $this;
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.slg_1 = [lazy(tmp_0, EventsGetContextResponse$ContextEvent$Companion$$childSerializers$_anonymous__rd84k2), null, null, null, null, null, null];
  }
}
class $serializer_12 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.events.EventsGetContextResponse.ContextEvent', this, 7);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('state_key', true);
    this.tlg_1 = tmp0_serialDesc;
  }
  ulg(encoder, value) {
    var tmp0_desc = this.tlg_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().slg_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ulg(encoder, value instanceof ContextEvent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tlg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_13().slg_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return ContextEvent.vlg(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.tlg_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_13().slg_1[0].y2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class ContextEvent {
  constructor() {
    Companion_getInstance_13();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = null;
  }
  wlg(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  blc(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  static vlg(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_13();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().tlg_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_13 {
  constructor() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.blh_1 = [null, null, null, tmp_1, tmp_3, lazy(tmp_4, EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_1)];
  }
}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.events.EventsGetContextResponse', this, 6);
    tmp0_serialDesc.m1a('start', true);
    tmp0_serialDesc.m1a('end', true);
    tmp0_serialDesc.m1a('event', true);
    tmp0_serialDesc.m1a('events_before', true);
    tmp0_serialDesc.m1a('events_after', true);
    tmp0_serialDesc.m1a('state', true);
    this.clh_1 = tmp0_serialDesc;
  }
  dlh(encoder, value) {
    var tmp0_desc = this.clh_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().blh_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.start == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.start);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.end == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.end);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.event == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_12(), value.event);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 3)) {
      tmp = true;
    } else {
      var tmp_0 = value.eventsBefore;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 3, tmp2_cached[3].y2(), value.eventsBefore);
    }
    var tmp_1;
    if (tmp1_output.q14(tmp0_desc, 4)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.eventsAfter;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = [];
      tmp_1 = !equals(tmp_2, tmp$ret$3);
    }
    if (tmp_1) {
      tmp1_output.l14(tmp0_desc, 4, tmp2_cached[4].y2(), value.eventsAfter);
    }
    var tmp_3;
    if (tmp1_output.q14(tmp0_desc, 5)) {
      tmp_3 = true;
    } else {
      var tmp_4 = value.state;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [];
      tmp_3 = !equals(tmp_4, tmp$ret$6);
    }
    if (tmp_3) {
      tmp1_output.l14(tmp0_desc, 5, tmp2_cached[5].y2(), value.state);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dlh(encoder, value instanceof EventsGetContextResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.clh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.u12(tmp0_desc);
    var tmp11_cached = Companion_getInstance_14().blh_1;
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.g13(tmp0_desc, 3, tmp11_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.g13(tmp0_desc, 4, tmp11_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.g13(tmp0_desc, 5, tmp11_cached[5].y2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.g13(tmp0_desc, 3, tmp11_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.g13(tmp0_desc, 4, tmp11_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.g13(tmp0_desc, 5, tmp11_cached[5].y2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return EventsGetContextResponse.elh(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.clh_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_14().blh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_12()), tmp0_cached[3].y2(), tmp0_cached[4].y2(), tmp0_cached[5].y2()];
  }
}
class EventsGetContextResponse {
  constructor() {
    Companion_getInstance_14();
    this.start = null;
    this.end = null;
    this.event = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.eventsBefore = [];
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.eventsAfter = [];
    var tmp_1 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.state = [];
  }
  flh(_set____db54di) {
    this.start = _set____db54di;
  }
  hi() {
    return this.start;
  }
  glh(_set____db54di) {
    this.end = _set____db54di;
  }
  hlh() {
    return this.end;
  }
  ilh(_set____db54di) {
    this.event = _set____db54di;
  }
  ukp() {
    return this.event;
  }
  jlh(_set____db54di) {
    this.eventsBefore = _set____db54di;
  }
  klh() {
    return this.eventsBefore;
  }
  llh(_set____db54di) {
    this.eventsAfter = _set____db54di;
  }
  mlh() {
    return this.eventsAfter;
  }
  nlh(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  static elh(seen0, start, end, event, eventsBefore, eventsAfter, state, serializationConstructorMarker) {
    Companion_getInstance_14();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().clh_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.start = null;
    else
      $this.start = start;
    if (0 === (seen0 & 2))
      $this.end = null;
    else
      $this.end = end;
    if (0 === (seen0 & 4))
      $this.event = null;
    else
      $this.event = event;
    if (0 === (seen0 & 8)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.eventsBefore = [];
    } else
      $this.eventsBefore = eventsBefore;
    if (0 === (seen0 & 16)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0.eventsAfter = [];
    } else
      $this.eventsAfter = eventsAfter;
    if (0 === (seen0 & 32)) {
      var tmp_1 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1.state = [];
    } else
      $this.state = state;
    return $this;
  }
}
class Companion_14 {
  constructor() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.olh_1 = [tmp_1, null, null, null, null, null, null, lazy(tmp_2, EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k_0)];
  }
}
class $serializer_14 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.events.EventsGetEventResponse', this, 8);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('state_key', true);
    tmp0_serialDesc.m1a('unsigned', true);
    this.plh_1 = tmp0_serialDesc;
  }
  qlh(encoder, value) {
    var tmp0_desc = this.plh_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().olh_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId === '')) {
      tmp1_output.j14(tmp0_desc, 3, value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.unsigned == null)) {
      tmp1_output.m14(tmp0_desc, 7, tmp2_cached[7].y2(), value.unsigned);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qlh(encoder, value instanceof EventsGetEventResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.plh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.u12(tmp0_desc);
    var tmp13_cached = Companion_getInstance_15().olh_1;
    if (tmp12_input.j13()) {
      tmp4_local0 = tmp12_input.g13(tmp0_desc, 0, tmp13_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.a13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.e13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.i13(tmp0_desc, 7, tmp13_cached[7].y2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.g13(tmp0_desc, 0, tmp13_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.a13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.e13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.i13(tmp0_desc, 7, tmp13_cached[7].y2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp12_input.v12(tmp0_desc);
    return EventsGetEventResponse.rlh(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  cy() {
    return this.plh_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_15().olh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].y2(), StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[7].y2())];
  }
}
class EventsGetEventResponse {
  constructor() {
    Companion_getInstance_15();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = '';
    this.sender = '';
    this.type = '';
    this.stateKey = null;
    this.unsigned = null;
  }
  wlg(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  blg(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  blc(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  slh(_set____db54di) {
    this.unsigned = _set____db54di;
  }
  tlh() {
    return this.unsigned;
  }
  static rlh(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, unsigned, serializationConstructorMarker) {
    Companion_getInstance_15();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().plh_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    if (0 === (seen0 & 128))
      $this.unsigned = null;
    else
      $this.unsigned = unsigned;
    return $this;
  }
}
class Companion_15 {}
class $serializer_15 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.FilterCreateResponse', this, 1);
    tmp0_serialDesc.m1a('filter_id', true);
    this.ulh_1 = tmp0_serialDesc;
  }
  vlh(encoder, value) {
    var tmp0_desc = this.ulh_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.filterId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.filterId);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vlh(encoder, value instanceof FilterCreateResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ulh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return FilterCreateResponse.wlh(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ulh_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class FilterCreateResponse {
  constructor() {
    this.filterId = '';
  }
  xlh(_set____db54di) {
    this.filterId = _set____db54di;
  }
  jl8() {
    return this.filterId;
  }
  static wlh(seen0, filterId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().ulh_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.filterId = '';
    else
      $this.filterId = filterId;
    return $this;
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ylh_1 = [lazy(tmp_0, FilterGetResponse$Companion$$childSerializers$_anonymous__p4prqt), null, null, null, null];
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.FilterGetResponse', this, 5);
    tmp0_serialDesc.m1a('event_fields', true);
    tmp0_serialDesc.m1a('event_format', true);
    tmp0_serialDesc.m1a('presence', true);
    tmp0_serialDesc.m1a('account_data', true);
    tmp0_serialDesc.m1a('room', true);
    this.zlh_1 = tmp0_serialDesc;
  }
  ali(encoder, value) {
    var tmp0_desc = this.zlh_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().ylh_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.eventFields == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.eventFields);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventFormat == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.eventFormat);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.presence == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_17(), value.presence);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.accountData == null)) {
      tmp1_output.m14(tmp0_desc, 3, $serializer_getInstance_17(), value.accountData);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.room == null)) {
      tmp1_output.m14(tmp0_desc, 4, $serializer_getInstance_18(), value.room);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ali(encoder, value instanceof FilterGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zlh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    var tmp10_cached = Companion_getInstance_17().ylh_1;
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, tmp10_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, $serializer_getInstance_17(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_17(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_18(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, tmp10_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, $serializer_getInstance_17(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_17(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_18(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return FilterGetResponse.bli(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.zlh_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_17().ylh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_17()), get_nullable($serializer_getInstance_17()), get_nullable($serializer_getInstance_18())];
  }
}
class FilterGetResponse {
  constructor() {
    Companion_getInstance_17();
    this.eventFields = null;
    this.eventFormat = null;
    this.presence = null;
    this.accountData = null;
    this.room = null;
  }
  cli(_set____db54di) {
    this.eventFields = _set____db54di;
  }
  dli() {
    return this.eventFields;
  }
  eli(_set____db54di) {
    this.eventFormat = _set____db54di;
  }
  fli() {
    return this.eventFormat;
  }
  gli(_set____db54di) {
    this.presence = _set____db54di;
  }
  yfw() {
    return this.presence;
  }
  hli(_set____db54di) {
    this.accountData = _set____db54di;
  }
  ili() {
    return this.accountData;
  }
  jli(_set____db54di) {
    this.room = _set____db54di;
  }
  kli() {
    return this.room;
  }
  static bli(seen0, eventFields, eventFormat, presence, accountData, room, serializationConstructorMarker) {
    Companion_getInstance_17();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().zlh_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventFields = null;
    else
      $this.eventFields = eventFields;
    if (0 === (seen0 & 2))
      $this.eventFormat = null;
    else
      $this.eventFormat = eventFormat;
    if (0 === (seen0 & 4))
      $this.presence = null;
    else
      $this.presence = presence;
    if (0 === (seen0 & 8))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    if (0 === (seen0 & 16))
      $this.room = null;
    else
      $this.room = room;
    return $this;
  }
}
class Companion_17 {
  constructor() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EventFilter$Companion$$childSerializers$_anonymous__549l14);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, EventFilter$Companion$$childSerializers$_anonymous__549l14_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, EventFilter$Companion$$childSerializers$_anonymous__549l14_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.lli_1 = [null, tmp_1, tmp_3, tmp_5, lazy(tmp_6, EventFilter$Companion$$childSerializers$_anonymous__549l14_2)];
  }
}
class $serializer_17 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.EventFilter', this, 5);
    tmp0_serialDesc.m1a('limit', true);
    tmp0_serialDesc.m1a('not_senders', true);
    tmp0_serialDesc.m1a('not_types', true);
    tmp0_serialDesc.m1a('senders', true);
    tmp0_serialDesc.m1a('types', true);
    this.mli_1 = tmp0_serialDesc;
  }
  nli(encoder, value) {
    var tmp0_desc = this.mli_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().lli_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.limit == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.limit);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.notSenders == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.notSenders);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.notTypes == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.notTypes);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.senders == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.senders);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.types == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.types);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nli(encoder, value instanceof EventFilter ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mli_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    var tmp10_cached = Companion_getInstance_18().lli_1;
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, tmp10_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, tmp10_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, tmp10_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, tmp10_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, tmp10_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, tmp10_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, tmp10_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, tmp10_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return EventFilter.oli(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.mli_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_18().lli_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].y2()), get_nullable(tmp0_cached[2].y2()), get_nullable(tmp0_cached[3].y2()), get_nullable(tmp0_cached[4].y2())];
  }
}
class EventFilter {
  constructor() {
    Companion_getInstance_18();
    this.limit = null;
    this.notSenders = null;
    this.notTypes = null;
    this.senders = null;
    this.types = null;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  ul8(_set____db54di) {
    this.notSenders = _set____db54di;
  }
  vl8() {
    return this.notSenders;
  }
  pli(_set____db54di) {
    this.notTypes = _set____db54di;
  }
  qli() {
    return this.notTypes;
  }
  sl8(_set____db54di) {
    this.senders = _set____db54di;
  }
  tl8() {
    return this.senders;
  }
  zbx(_set____db54di) {
    this.types = _set____db54di;
  }
  aby() {
    return this.types;
  }
  static oli(seen0, limit, notSenders, notTypes, senders, types, serializationConstructorMarker) {
    Companion_getInstance_18();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().mli_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.limit = null;
    else
      $this.limit = limit;
    if (0 === (seen0 & 2))
      $this.notSenders = null;
    else
      $this.notSenders = notSenders;
    if (0 === (seen0 & 4))
      $this.notTypes = null;
    else
      $this.notTypes = notTypes;
    if (0 === (seen0 & 8))
      $this.senders = null;
    else
      $this.senders = senders;
    if (0 === (seen0 & 16))
      $this.types = null;
    else
      $this.types = types;
    return $this;
  }
}
class Companion_18 {
  constructor() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomFilter$Companion$$childSerializers$_anonymous__iuz08n);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rli_1 = [tmp_1, lazy(tmp_2, RoomFilter$Companion$$childSerializers$_anonymous__iuz08n_0), null, null, null, null, null];
  }
}
class $serializer_18 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.RoomFilter', this, 7);
    tmp0_serialDesc.m1a('not_rooms', true);
    tmp0_serialDesc.m1a('rooms', true);
    tmp0_serialDesc.m1a('ephemeral', true);
    tmp0_serialDesc.m1a('include_leave', true);
    tmp0_serialDesc.m1a('state', true);
    tmp0_serialDesc.m1a('timeline', true);
    tmp0_serialDesc.m1a('account_data', true);
    this.sli_1 = tmp0_serialDesc;
  }
  tli(encoder, value) {
    var tmp0_desc = this.sli_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().rli_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.notRooms == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.notRooms);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.rooms == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.rooms);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.ephemeral == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_19(), value.ephemeral);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.includeLeave == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.includeLeave);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.state == null)) {
      tmp1_output.m14(tmp0_desc, 4, $serializer_getInstance_19(), value.state);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.timeline == null)) {
      tmp1_output.m14(tmp0_desc, 5, $serializer_getInstance_19(), value.timeline);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.accountData == null)) {
      tmp1_output.m14(tmp0_desc, 6, $serializer_getInstance_19(), value.accountData);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.tli(encoder, value instanceof RoomFilter ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.sli_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_19().rli_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, tmp12_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, $serializer_getInstance_19(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, $serializer_getInstance_19(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, $serializer_getInstance_19(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, $serializer_getInstance_19(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, tmp12_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, $serializer_getInstance_19(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, $serializer_getInstance_19(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, $serializer_getInstance_19(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, $serializer_getInstance_19(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return RoomFilter.uli(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.sli_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_19().rli_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2()), get_nullable($serializer_getInstance_19()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_19()), get_nullable($serializer_getInstance_19()), get_nullable($serializer_getInstance_19())];
  }
}
class RoomFilter {
  constructor() {
    Companion_getInstance_19();
    this.notRooms = null;
    this.rooms = null;
    this.ephemeral = null;
    this.includeLeave = null;
    this.state = null;
    this.timeline = null;
    this.accountData = null;
  }
  ql8(_set____db54di) {
    this.notRooms = _set____db54di;
  }
  rl8() {
    return this.notRooms;
  }
  ol8(_set____db54di) {
    this.rooms = _set____db54di;
  }
  pl8() {
    return this.rooms;
  }
  vli(_set____db54di) {
    this.ephemeral = _set____db54di;
  }
  wli() {
    return this.ephemeral;
  }
  wl8(_set____db54di) {
    this.includeLeave = _set____db54di;
  }
  xl8() {
    return this.includeLeave;
  }
  xli(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  yli(_set____db54di) {
    this.timeline = _set____db54di;
  }
  zli() {
    return this.timeline;
  }
  alj(_set____db54di) {
    this.accountData = _set____db54di;
  }
  ili() {
    return this.accountData;
  }
  static uli(seen0, notRooms, rooms, ephemeral, includeLeave, state, timeline, accountData, serializationConstructorMarker) {
    Companion_getInstance_19();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().sli_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.notRooms = null;
    else
      $this.notRooms = notRooms;
    if (0 === (seen0 & 2))
      $this.rooms = null;
    else
      $this.rooms = rooms;
    if (0 === (seen0 & 4))
      $this.ephemeral = null;
    else
      $this.ephemeral = ephemeral;
    if (0 === (seen0 & 8))
      $this.includeLeave = null;
    else
      $this.includeLeave = includeLeave;
    if (0 === (seen0 & 16))
      $this.state = null;
    else
      $this.state = state;
    if (0 === (seen0 & 32))
      $this.timeline = null;
    else
      $this.timeline = timeline;
    if (0 === (seen0 & 64))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    return $this;
  }
}
class Companion_19 {
  constructor() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.blj_1 = [null, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, lazy(tmp_10, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_4), null, null, null];
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.RoomEventFilter', this, 10);
    tmp0_serialDesc.m1a('limit', true);
    tmp0_serialDesc.m1a('not_senders', true);
    tmp0_serialDesc.m1a('not_types', true);
    tmp0_serialDesc.m1a('senders', true);
    tmp0_serialDesc.m1a('types', true);
    tmp0_serialDesc.m1a('not_rooms', true);
    tmp0_serialDesc.m1a('rooms', true);
    tmp0_serialDesc.m1a('contains_url', true);
    tmp0_serialDesc.m1a('include_redundant_members', true);
    tmp0_serialDesc.m1a('lazy_load_members', true);
    this.clj_1 = tmp0_serialDesc;
  }
  dlj(encoder, value) {
    var tmp0_desc = this.clj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().blj_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.limit == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.limit);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.notSenders == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.notSenders);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.notTypes == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.notTypes);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.senders == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.senders);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.types == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.types);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.notRooms == null)) {
      tmp1_output.m14(tmp0_desc, 5, tmp2_cached[5].y2(), value.notRooms);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.rooms == null)) {
      tmp1_output.m14(tmp0_desc, 6, tmp2_cached[6].y2(), value.rooms);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.containsUrl == null)) {
      tmp1_output.m14(tmp0_desc, 7, BooleanSerializer_getInstance(), value.containsUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.includeRedundantMembers == null)) {
      tmp1_output.m14(tmp0_desc, 8, BooleanSerializer_getInstance(), value.includeRedundantMembers);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.lazyLoadMembers == null)) {
      tmp1_output.m14(tmp0_desc, 9, BooleanSerializer_getInstance(), value.lazyLoadMembers);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dlj(encoder, value instanceof RoomEventFilter ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.clj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.u12(tmp0_desc);
    var tmp15_cached = Companion_getInstance_20().blj_1;
    if (tmp14_input.j13()) {
      tmp4_local0 = tmp14_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, tmp15_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.i13(tmp0_desc, 2, tmp15_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.i13(tmp0_desc, 3, tmp15_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.i13(tmp0_desc, 4, tmp15_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, tmp15_cached[5].y2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.i13(tmp0_desc, 6, tmp15_cached[6].y2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.i13(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, tmp15_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.i13(tmp0_desc, 2, tmp15_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.i13(tmp0_desc, 3, tmp15_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.i13(tmp0_desc, 4, tmp15_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, tmp15_cached[5].y2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.i13(tmp0_desc, 6, tmp15_cached[6].y2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.i13(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp14_input.v12(tmp0_desc);
    return RoomEventFilter.elj(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  cy() {
    return this.clj_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_20().blj_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].y2()), get_nullable(tmp0_cached[2].y2()), get_nullable(tmp0_cached[3].y2()), get_nullable(tmp0_cached[4].y2()), get_nullable(tmp0_cached[5].y2()), get_nullable(tmp0_cached[6].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class RoomEventFilter {
  constructor() {
    Companion_getInstance_20();
    this.limit = null;
    this.notSenders = null;
    this.notTypes = null;
    this.senders = null;
    this.types = null;
    this.notRooms = null;
    this.rooms = null;
    this.containsUrl = null;
    this.includeRedundantMembers = null;
    this.lazyLoadMembers = null;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  ul8(_set____db54di) {
    this.notSenders = _set____db54di;
  }
  vl8() {
    return this.notSenders;
  }
  pli(_set____db54di) {
    this.notTypes = _set____db54di;
  }
  qli() {
    return this.notTypes;
  }
  sl8(_set____db54di) {
    this.senders = _set____db54di;
  }
  tl8() {
    return this.senders;
  }
  zbx(_set____db54di) {
    this.types = _set____db54di;
  }
  aby() {
    return this.types;
  }
  ql8(_set____db54di) {
    this.notRooms = _set____db54di;
  }
  rl8() {
    return this.notRooms;
  }
  ol8(_set____db54di) {
    this.rooms = _set____db54di;
  }
  pl8() {
    return this.rooms;
  }
  flj(_set____db54di) {
    this.containsUrl = _set____db54di;
  }
  glj() {
    return this.containsUrl;
  }
  hlj(_set____db54di) {
    this.includeRedundantMembers = _set____db54di;
  }
  ilj() {
    return this.includeRedundantMembers;
  }
  jlj(_set____db54di) {
    this.lazyLoadMembers = _set____db54di;
  }
  klj() {
    return this.lazyLoadMembers;
  }
  static elj(seen0, limit, notSenders, notTypes, senders, types, notRooms, rooms, containsUrl, includeRedundantMembers, lazyLoadMembers, serializationConstructorMarker) {
    Companion_getInstance_20();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().clj_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.limit = null;
    else
      $this.limit = limit;
    if (0 === (seen0 & 2))
      $this.notSenders = null;
    else
      $this.notSenders = notSenders;
    if (0 === (seen0 & 4))
      $this.notTypes = null;
    else
      $this.notTypes = notTypes;
    if (0 === (seen0 & 8))
      $this.senders = null;
    else
      $this.senders = senders;
    if (0 === (seen0 & 16))
      $this.types = null;
    else
      $this.types = types;
    if (0 === (seen0 & 32))
      $this.notRooms = null;
    else
      $this.notRooms = notRooms;
    if (0 === (seen0 & 64))
      $this.rooms = null;
    else
      $this.rooms = rooms;
    if (0 === (seen0 & 128))
      $this.containsUrl = null;
    else
      $this.containsUrl = containsUrl;
    if (0 === (seen0 & 256))
      $this.includeRedundantMembers = null;
    else
      $this.includeRedundantMembers = includeRedundantMembers;
    if (0 === (seen0 & 512))
      $this.lazyLoadMembers = null;
    else
      $this.lazyLoadMembers = lazyLoadMembers;
    return $this;
  }
}
class Companion_20 {
  constructor() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.llj_1 = [lazy(tmp_0, LoginGetLoginFlowsResponse$Companion$$childSerializers$_anonymous__dccxb4)];
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.login.LoginGetLoginFlowsResponse', this, 1);
    tmp0_serialDesc.m1a('flows', true);
    this.mlj_1 = tmp0_serialDesc;
  }
  nlj(encoder, value) {
    var tmp0_desc = this.mlj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().llj_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.flows;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.flows);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nlj(encoder, value instanceof LoginGetLoginFlowsResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mlj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_21().llj_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return LoginGetLoginFlowsResponse.olj(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.mlj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_21().llj_1[0].y2()];
  }
}
class LoginGetLoginFlowsResponse {
  constructor() {
    Companion_getInstance_21();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.flows = [];
  }
  plj(_set____db54di) {
    this.flows = _set____db54di;
  }
  qlj() {
    return this.flows;
  }
  static olj(seen0, flows, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().mlj_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.flows = [];
    } else
      $this.flows = flows;
    return $this;
  }
}
class Companion_21 {}
class $serializer_21 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.login.LoginFlow', this, 1);
    tmp0_serialDesc.m1a('type', false);
    this.rlj_1 = tmp0_serialDesc;
  }
  slj(encoder, value) {
    var tmp0_desc = this.rlj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.type);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.slj(encoder, value instanceof LoginFlow ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rlj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return LoginFlow.ulj(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.rlj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class LoginFlow {
  f35(_set____db54di) {
    this.tlj_1 = _set____db54di;
  }
  x32() {
    var tmp = this.tlj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  static ulj(seen0, type, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().rlj_1);
    }
    var $this = createThis(this);
    $this.tlj_1 = type;
    return $this;
  }
  get type() {
    return this.x32();
  }
  set type(value) {
    this.f35(value);
  }
}
class Companion_22 {}
class $serializer_22 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.login.LoginPasswordResponse', this, 4);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('access_token', false);
    tmp0_serialDesc.m1a('device_id', false);
    tmp0_serialDesc.m1a('home_server', true);
    this.vlj_1 = tmp0_serialDesc;
  }
  wlj(encoder, value) {
    var tmp0_desc = this.vlj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.userId);
    tmp1_output.j14(tmp0_desc, 1, value.accessToken);
    tmp1_output.j14(tmp0_desc, 2, value.deviceId);
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.homeServer == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.homeServer);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.wlj(encoder, value instanceof LoginPasswordResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.vlj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return LoginPasswordResponse.alk(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.vlj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class LoginPasswordResponse {
  constructor() {
    this.homeServer = null;
  }
  m9n(_set____db54di) {
    this.xlj_1 = _set____db54di;
  }
  l91() {
    var tmp = this.xlj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('userId');
    }
  }
  blk(_set____db54di) {
    this.ylj_1 = _set____db54di;
  }
  f9r() {
    var tmp = this.ylj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accessToken');
    }
  }
  zle(_set____db54di) {
    this.zlj_1 = _set____db54di;
  }
  cl8() {
    var tmp = this.zlj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('deviceId');
    }
  }
  clk(_set____db54di) {
    this.homeServer = _set____db54di;
  }
  gld() {
    return this.homeServer;
  }
  static alk(seen0, userId, accessToken, deviceId, homeServer, serializationConstructorMarker) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_22().vlj_1);
    }
    var $this = createThis(this);
    $this.xlj_1 = userId;
    $this.ylj_1 = accessToken;
    $this.zlj_1 = deviceId;
    if (0 === (seen0 & 8))
      $this.homeServer = null;
    else
      $this.homeServer = homeServer;
    return $this;
  }
  get userId() {
    return this.l91();
  }
  set userId(value) {
    this.m9n(value);
  }
  get accessToken() {
    return this.f9r();
  }
  set accessToken(value) {
    this.blk(value);
  }
  get deviceId() {
    return this.cl8();
  }
  set deviceId(value) {
    this.zle(value);
  }
}
class Companion_23 {}
class $serializer_23 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.media.MediaGetConfigResponse', this, 1);
    tmp0_serialDesc.m1a('m.upload.size', true);
    this.dlk_1 = tmp0_serialDesc;
  }
  elk(encoder, value) {
    var tmp0_desc = this.dlk_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.uploadSize == null)) {
      tmp1_output.m14(tmp0_desc, 0, LongSerializer_getInstance(), value.uploadSize);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.elk(encoder, value instanceof MediaGetConfigResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dlk_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return MediaGetConfigResponse.flk(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.dlk_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(LongSerializer_getInstance())];
  }
}
class MediaGetConfigResponse {
  constructor() {
    this.uploadSize = null;
  }
  glk(_set____db54di) {
    this.uploadSize = _set____db54di;
  }
  hlk() {
    return this.uploadSize;
  }
  static flk(seen0, uploadSize, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().dlk_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.uploadSize = null;
    else
      $this.uploadSize = uploadSize;
    return $this;
  }
}
class Companion_24 {}
class $serializer_24 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.media.MediaPreviewUrlResponse', this, 10);
    tmp0_serialDesc.m1a('og:title', true);
    tmp0_serialDesc.m1a('og:description', true);
    tmp0_serialDesc.m1a('og:image', true);
    tmp0_serialDesc.m1a('og:image:type', true);
    tmp0_serialDesc.m1a('og:image:width', true);
    tmp0_serialDesc.m1a('og:image:height', true);
    tmp0_serialDesc.m1a('matrix:image:size', true);
    tmp0_serialDesc.m1a('og:type', true);
    tmp0_serialDesc.m1a('og:url', true);
    tmp0_serialDesc.m1a('og:site_name', true);
    this.ilk_1 = tmp0_serialDesc;
  }
  jlk(encoder, value) {
    var tmp0_desc = this.ilk_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.ogTitle == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.ogTitle);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.ogDescription == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.ogDescription);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.ogImage == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.ogImage);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.ogImageType == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.ogImageType);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.ogImageWidth == null)) {
      tmp1_output.m14(tmp0_desc, 4, IntSerializer_getInstance(), value.ogImageWidth);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.ogImageHeight == null)) {
      tmp1_output.m14(tmp0_desc, 5, IntSerializer_getInstance(), value.ogImageHeight);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.matrixImageSize == null)) {
      tmp1_output.m14(tmp0_desc, 6, LongSerializer_getInstance(), value.matrixImageSize);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.ogType == null)) {
      tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.ogType);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.ogUrl == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.ogUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.ogSiteName == null)) {
      tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.ogSiteName);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jlk(encoder, value instanceof MediaPreviewUrlResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ilk_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.u12(tmp0_desc);
    if (tmp14_input.j13()) {
      tmp4_local0 = tmp14_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.i13(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.i13(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.i13(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.i13(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp14_input.v12(tmp0_desc);
    return MediaPreviewUrlResponse.klk(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  cy() {
    return this.ilk_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class MediaPreviewUrlResponse {
  constructor() {
    this.ogTitle = null;
    this.ogDescription = null;
    this.ogImage = null;
    this.ogImageType = null;
    this.ogImageWidth = null;
    this.ogImageHeight = null;
    this.matrixImageSize = null;
    this.ogType = null;
    this.ogUrl = null;
    this.ogSiteName = null;
  }
  llk(_set____db54di) {
    this.ogTitle = _set____db54di;
  }
  mlk() {
    return this.ogTitle;
  }
  nlk(_set____db54di) {
    this.ogDescription = _set____db54di;
  }
  olk() {
    return this.ogDescription;
  }
  plk(_set____db54di) {
    this.ogImage = _set____db54di;
  }
  qlk() {
    return this.ogImage;
  }
  rlk(_set____db54di) {
    this.ogImageType = _set____db54di;
  }
  slk() {
    return this.ogImageType;
  }
  tlk(_set____db54di) {
    this.ogImageWidth = _set____db54di;
  }
  ulk() {
    return this.ogImageWidth;
  }
  vlk(_set____db54di) {
    this.ogImageHeight = _set____db54di;
  }
  wlk() {
    return this.ogImageHeight;
  }
  xlk(_set____db54di) {
    this.matrixImageSize = _set____db54di;
  }
  ylk() {
    return this.matrixImageSize;
  }
  zlk(_set____db54di) {
    this.ogType = _set____db54di;
  }
  bll() {
    return this.ogType;
  }
  cll(_set____db54di) {
    this.ogUrl = _set____db54di;
  }
  dll() {
    return this.ogUrl;
  }
  ell(_set____db54di) {
    this.ogSiteName = _set____db54di;
  }
  fll() {
    return this.ogSiteName;
  }
  static klk(seen0, ogTitle, ogDescription, ogImage, ogImageType, ogImageWidth, ogImageHeight, matrixImageSize, ogType, ogUrl, ogSiteName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().ilk_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.ogTitle = null;
    else
      $this.ogTitle = ogTitle;
    if (0 === (seen0 & 2))
      $this.ogDescription = null;
    else
      $this.ogDescription = ogDescription;
    if (0 === (seen0 & 4))
      $this.ogImage = null;
    else
      $this.ogImage = ogImage;
    if (0 === (seen0 & 8))
      $this.ogImageType = null;
    else
      $this.ogImageType = ogImageType;
    if (0 === (seen0 & 16))
      $this.ogImageWidth = null;
    else
      $this.ogImageWidth = ogImageWidth;
    if (0 === (seen0 & 32))
      $this.ogImageHeight = null;
    else
      $this.ogImageHeight = ogImageHeight;
    if (0 === (seen0 & 64))
      $this.matrixImageSize = null;
    else
      $this.matrixImageSize = matrixImageSize;
    if (0 === (seen0 & 128))
      $this.ogType = null;
    else
      $this.ogType = ogType;
    if (0 === (seen0 & 256))
      $this.ogUrl = null;
    else
      $this.ogUrl = ogUrl;
    if (0 === (seen0 & 512))
      $this.ogSiteName = null;
    else
      $this.ogSiteName = ogSiteName;
    return $this;
  }
}
class Companion_25 {}
class $serializer_25 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.media.MediaUploadResponse', this, 1);
    tmp0_serialDesc.m1a('content_uri', true);
    this.gll_1 = tmp0_serialDesc;
  }
  hll(encoder, value) {
    var tmp0_desc = this.gll_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.contentUri === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.contentUri);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hll(encoder, value instanceof MediaUploadResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.gll_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return MediaUploadResponse.ill(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.gll_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class MediaUploadResponse {
  constructor() {
    this.contentUri = '';
  }
  jll(_set____db54di) {
    this.contentUri = _set____db54di;
  }
  kll() {
    return this.contentUri;
  }
  static ill(seen0, contentUri, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().gll_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.contentUri = '';
    else
      $this.contentUri = contentUri;
    return $this;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.lll_1 = [lazy(tmp_0, NotificationsGetResponse$Notification$Companion$$childSerializers$_anonymous__yeqkcq), null, null, null, null, null];
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.notifications.NotificationsGetResponse.Notification', this, 6);
    tmp0_serialDesc.m1a('actions', true);
    tmp0_serialDesc.m1a('event', true);
    tmp0_serialDesc.m1a('profile_tag', true);
    tmp0_serialDesc.m1a('read', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('ts', true);
    this.mll_1 = tmp0_serialDesc;
  }
  nll(encoder, value) {
    var tmp0_desc = this.mll_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().lll_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.actions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.actions);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !equals(value.event, new Event())) {
      tmp1_output.l14(tmp0_desc, 1, $serializer_getInstance_27(), value.event);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.profileTag == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.profileTag);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.read === false)) {
      tmp1_output.b14(tmp0_desc, 3, value.read);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.roomId === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.ts === 0n)) {
      tmp1_output.f14(tmp0_desc, 5, value.ts);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nll(encoder, value instanceof Notification ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mll_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = null;
    var tmp9_local5 = 0n;
    var tmp10_input = decoder.u12(tmp0_desc);
    var tmp11_cached = Companion_getInstance_27().lll_1;
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.g13(tmp0_desc, 0, tmp11_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.g13(tmp0_desc, 1, $serializer_getInstance_27(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.w12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.a13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.g13(tmp0_desc, 0, tmp11_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.g13(tmp0_desc, 1, $serializer_getInstance_27(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.w12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.a13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return Notification.oll(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.mll_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_27().lll_1[0].y2(), $serializer_getInstance_27(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance()];
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pll_1 = [lazy(tmp_0, NotificationsGetResponse$Event$Companion$$childSerializers$_anonymous__vjt0yj), null, null, null, null, null, null];
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.notifications.NotificationsGetResponse.Event', this, 7);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('state_key', true);
    this.qll_1 = tmp0_serialDesc;
  }
  rll(encoder, value) {
    var tmp0_desc = this.qll_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().pll_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.rll(encoder, value instanceof Event ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.qll_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_28().pll_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return Event.sll(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.qll_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_28().pll_1[0].y2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Notification {
  constructor() {
    Companion_getInstance_27();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.actions = [];
    this.event = new Event();
    this.profileTag = null;
    this.read = false;
    this.roomId = '';
    this.ts = 0n;
  }
  tll(_set____db54di) {
    this.actions = _set____db54di;
  }
  wfn() {
    return this.actions;
  }
  ull(_set____db54di) {
    this.event = _set____db54di;
  }
  ukp() {
    return this.event;
  }
  fla(_set____db54di) {
    this.profileTag = _set____db54di;
  }
  gla() {
    return this.profileTag;
  }
  ga3(_set____db54di) {
    this.read = _set____db54di;
  }
  ha3() {
    return this.read;
  }
  blg(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  vll(_set____db54di) {
    this.ts = _set____db54di;
  }
  zfl() {
    return this.ts;
  }
  static oll(seen0, actions, event, profileTag, read, roomId, ts, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().mll_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.actions = [];
    } else
      $this.actions = actions;
    if (0 === (seen0 & 2))
      $this.event = new Event();
    else
      $this.event = event;
    if (0 === (seen0 & 4))
      $this.profileTag = null;
    else
      $this.profileTag = profileTag;
    if (0 === (seen0 & 8))
      $this.read = false;
    else
      $this.read = read;
    if (0 === (seen0 & 16))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 32))
      $this.ts = 0n;
    else
      $this.ts = ts;
    return $this;
  }
}
class Event {
  constructor() {
    Companion_getInstance_28();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = null;
  }
  wlg(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  blc(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  static sll(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_28();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().qll_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.wll_1 = [null, lazy(tmp_0, NotificationsGetResponse$Companion$$childSerializers$_anonymous__27uumd)];
  }
}
class $serializer_28 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.notifications.NotificationsGetResponse', this, 2);
    tmp0_serialDesc.m1a('next_token', true);
    tmp0_serialDesc.m1a('notifications', true);
    this.xll_1 = tmp0_serialDesc;
  }
  yll(encoder, value) {
    var tmp0_desc = this.xll_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().wll_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.nextToken == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.nextToken);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.notifications;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 1, tmp2_cached[1].y2(), value.notifications);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.yll(encoder, value instanceof NotificationsGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xll_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_29().wll_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.g13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return NotificationsGetResponse.zll(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.xll_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_29().wll_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), tmp0_cached[1].y2()];
  }
}
class NotificationsGetResponse {
  constructor() {
    Companion_getInstance_29();
    this.nextToken = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.notifications = [];
  }
  alm(_set____db54di) {
    this.nextToken = _set____db54di;
  }
  blm() {
    return this.nextToken;
  }
  clm(_set____db54di) {
    this.notifications = _set____db54di;
  }
  d6j() {
    return this.notifications;
  }
  static zll(seen0, nextToken, notifications, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().xll_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.nextToken = null;
    else
      $this.nextToken = nextToken;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.notifications = [];
    } else
      $this.notifications = notifications;
    return $this;
  }
}
class Companion_29 {}
class $serializer_29 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.presence.PresenceGetResponse', this, 4);
    tmp0_serialDesc.m1a('presence', true);
    tmp0_serialDesc.m1a('last_active_ago', true);
    tmp0_serialDesc.m1a('status_msg', true);
    tmp0_serialDesc.m1a('currently_active', true);
    this.dlm_1 = tmp0_serialDesc;
  }
  elm(encoder, value) {
    var tmp0_desc = this.dlm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.presence === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.presence);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.lastActiveAgo == null)) {
      tmp1_output.m14(tmp0_desc, 1, LongSerializer_getInstance(), value.lastActiveAgo);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.statusMsg == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.statusMsg);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.currentlyActive == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.currentlyActive);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.elm(encoder, value instanceof PresenceGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dlm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return PresenceGetResponse.flm(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.dlm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class PresenceGetResponse {
  constructor() {
    this.presence = '';
    this.lastActiveAgo = null;
    this.statusMsg = null;
    this.currentlyActive = null;
  }
  glm(_set____db54di) {
    this.presence = _set____db54di;
  }
  yfw() {
    return this.presence;
  }
  hlm(_set____db54di) {
    this.lastActiveAgo = _set____db54di;
  }
  ilm() {
    return this.lastActiveAgo;
  }
  ml9(_set____db54di) {
    this.statusMsg = _set____db54di;
  }
  nl9() {
    return this.statusMsg;
  }
  jlm(_set____db54di) {
    this.currentlyActive = _set____db54di;
  }
  klm() {
    return this.currentlyActive;
  }
  static flm(seen0, presence, lastActiveAgo, statusMsg, currentlyActive, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().dlm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.presence = '';
    else
      $this.presence = presence;
    if (0 === (seen0 & 2))
      $this.lastActiveAgo = null;
    else
      $this.lastActiveAgo = lastActiveAgo;
    if (0 === (seen0 & 4))
      $this.statusMsg = null;
    else
      $this.statusMsg = statusMsg;
    if (0 === (seen0 & 8))
      $this.currentlyActive = null;
    else
      $this.currentlyActive = currentlyActive;
    return $this;
  }
}
class Companion_30 {}
class $serializer_30 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.profile.ProfileGetAvatarUrlResponse', this, 1);
    tmp0_serialDesc.m1a('avatar_url', true);
    this.llm_1 = tmp0_serialDesc;
  }
  mlm(encoder, value) {
    var tmp0_desc = this.llm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.avatarUrl == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.mlm(encoder, value instanceof ProfileGetAvatarUrlResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.llm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return ProfileGetAvatarUrlResponse.nlm(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.llm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class ProfileGetAvatarUrlResponse {
  constructor() {
    this.avatarUrl = null;
  }
  mak(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  nak() {
    return this.avatarUrl;
  }
  static nlm(seen0, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().llm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_31 {}
class $serializer_31 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.profile.ProfileGetDisplayNameResponse', this, 1);
    tmp0_serialDesc.m1a('displayname', true);
    this.olm_1 = tmp0_serialDesc;
  }
  plm(encoder, value) {
    var tmp0_desc = this.olm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.displayname == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.displayname);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.plm(encoder, value instanceof ProfileGetDisplayNameResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.olm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return ProfileGetDisplayNameResponse.qlm(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.olm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class ProfileGetDisplayNameResponse {
  constructor() {
    this.displayname = null;
  }
  ol9(_set____db54di) {
    this.displayname = _set____db54di;
  }
  pl9() {
    return this.displayname;
  }
  static qlm(seen0, displayname, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().olm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.displayname = null;
    else
      $this.displayname = displayname;
    return $this;
  }
}
class Companion_32 {}
class $serializer_32 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.profile.ProfileGetProfileResponse', this, 2);
    tmp0_serialDesc.m1a('displayname', true);
    tmp0_serialDesc.m1a('avatar_url', true);
    this.rlm_1 = tmp0_serialDesc;
  }
  slm(encoder, value) {
    var tmp0_desc = this.rlm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.displayname == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.displayname);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.avatarUrl == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.slm(encoder, value instanceof ProfileGetProfileResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rlm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return ProfileGetProfileResponse.tlm(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.rlm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class ProfileGetProfileResponse {
  constructor() {
    this.displayname = null;
    this.avatarUrl = null;
  }
  ol9(_set____db54di) {
    this.displayname = _set____db54di;
  }
  pl9() {
    return this.displayname;
  }
  mak(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  nak() {
    return this.avatarUrl;
  }
  static tlm(seen0, displayname, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().rlm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.displayname = null;
    else
      $this.displayname = displayname;
    if (0 === (seen0 & 2))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_33 {}
class $serializer_33 {
  constructor() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRulesGetEnabledResponse', this, 1);
    tmp0_serialDesc.m1a('enabled', true);
    this.ulm_1 = tmp0_serialDesc;
  }
  vlm(encoder, value) {
    var tmp0_desc = this.ulm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.enabled === false)) {
      tmp1_output.b14(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vlm(encoder, value instanceof PushRulesGetEnabledResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ulm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return PushRulesGetEnabledResponse.wlm(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ulm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class PushRulesGetEnabledResponse {
  constructor() {
    this.enabled = false;
  }
  b77(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  static wlm(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().ulm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = false;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class Companion_34 {}
class $serializer_34 {
  constructor() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRulesGetResponse', this, 1);
    tmp0_serialDesc.m1a('global', true);
    this.xlm_1 = tmp0_serialDesc;
  }
  ylm(encoder, value) {
    var tmp0_desc = this.xlm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.global == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_35(), value.global);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ylm(encoder, value instanceof PushRulesGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xlm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return PushRulesGetResponse.zlm(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.xlm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_35())];
  }
}
class PushRulesGetResponse {
  constructor() {
    this.global = null;
  }
  aln(_set____db54di) {
    this.global = _set____db54di;
  }
  bln() {
    return this.global;
  }
  static zlm(seen0, global, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().xlm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.global = null;
    else
      $this.global = global;
    return $this;
  }
}
class Companion_35 {
  constructor() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.cln_1 = [tmp_1, tmp_3, tmp_5, tmp_7, lazy(tmp_8, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_3)];
  }
}
class $serializer_35 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRuleset', this, 5);
    tmp0_serialDesc.m1a('override', true);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('room', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('underride', true);
    this.dln_1 = tmp0_serialDesc;
  }
  eln(encoder, value) {
    var tmp0_desc = this.dln_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_36().cln_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.override == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.override);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.content == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.room == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.room);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.sender == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.underride == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.underride);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.eln(encoder, value instanceof PushRuleset ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dln_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    var tmp10_cached = Companion_getInstance_36().cln_1;
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, tmp10_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, tmp10_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, tmp10_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, tmp10_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, tmp10_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, tmp10_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, tmp10_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, tmp10_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, tmp10_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, tmp10_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return PushRuleset.fln(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.dln_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_36().cln_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2()), get_nullable(tmp0_cached[2].y2()), get_nullable(tmp0_cached[3].y2()), get_nullable(tmp0_cached[4].y2())];
  }
}
class PushRuleset {
  constructor() {
    Companion_getInstance_36();
    this.override = null;
    this.content = null;
    this.room = null;
    this.sender = null;
    this.underride = null;
  }
  gln(_set____db54di) {
    this.override = _set____db54di;
  }
  hln() {
    return this.override;
  }
  iln(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  jln(_set____db54di) {
    this.room = _set____db54di;
  }
  kli() {
    return this.room;
  }
  kln(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  lln(_set____db54di) {
    this.underride = _set____db54di;
  }
  mln() {
    return this.underride;
  }
  static fln(seen0, override, content, room, sender, underride, serializationConstructorMarker) {
    Companion_getInstance_36();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().dln_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.override = null;
    else
      $this.override = override;
    if (0 === (seen0 & 2))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 4))
      $this.room = null;
    else
      $this.room = room;
    if (0 === (seen0 & 8))
      $this.sender = null;
    else
      $this.sender = sender;
    if (0 === (seen0 & 16))
      $this.underride = null;
    else
      $this.underride = underride;
    return $this;
  }
}
class Companion_36 {
  constructor() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PushRule$Companion$$childSerializers$_anonymous__penbik);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nln_1 = [null, null, null, tmp_1, lazy(tmp_2, PushRule$Companion$$childSerializers$_anonymous__penbik_0), null];
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRule', this, 6);
    tmp0_serialDesc.m1a('rule_id', true);
    tmp0_serialDesc.m1a('default', true);
    tmp0_serialDesc.m1a('enabled', true);
    tmp0_serialDesc.m1a('conditions', true);
    tmp0_serialDesc.m1a('actions', true);
    tmp0_serialDesc.m1a('pattern', true);
    this.oln_1 = tmp0_serialDesc;
  }
  pln(encoder, value) {
    var tmp0_desc = this.oln_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_37().nln_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.ruleId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.ruleId);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.default === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.default);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.enabled === true)) {
      tmp1_output.b14(tmp0_desc, 2, value.enabled);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.conditions == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.conditions);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 4)) {
      tmp = true;
    } else {
      var tmp_0 = value.actions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 4, tmp2_cached[4].y2(), value.actions);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.pattern == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.pattern);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.pln(encoder, value instanceof PushRule ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.oln_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.u12(tmp0_desc);
    var tmp11_cached = Companion_getInstance_37().nln_1;
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.w12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.w12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, tmp11_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.g13(tmp0_desc, 4, tmp11_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.w12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.w12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, tmp11_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.g13(tmp0_desc, 4, tmp11_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return PushRule.qln(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.oln_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_37().nln_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(tmp0_cached[3].y2()), tmp0_cached[4].y2(), get_nullable(StringSerializer_getInstance())];
  }
}
class PushRule {
  constructor() {
    Companion_getInstance_37();
    this.ruleId = '';
    this.default = false;
    this.enabled = true;
    this.conditions = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.actions = [];
    this.pattern = null;
  }
  rln(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  sl9() {
    return this.ruleId;
  }
  sln(_set____db54di) {
    this.default = _set____db54di;
  }
  ole() {
    return this.default;
  }
  b77(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  tln(_set____db54di) {
    this.conditions = _set____db54di;
  }
  ul9() {
    return this.conditions;
  }
  uln(_set____db54di) {
    this.actions = _set____db54di;
  }
  wfn() {
    return this.actions;
  }
  vln(_set____db54di) {
    this.pattern = _set____db54di;
  }
  qa6() {
    return this.pattern;
  }
  static qln(seen0, ruleId, default_0, enabled, conditions, actions, pattern, serializationConstructorMarker) {
    Companion_getInstance_37();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().oln_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.ruleId = '';
    else
      $this.ruleId = ruleId;
    if (0 === (seen0 & 2))
      $this.default = false;
    else
      $this.default = default_0;
    if (0 === (seen0 & 4))
      $this.enabled = true;
    else
      $this.enabled = enabled;
    if (0 === (seen0 & 8))
      $this.conditions = null;
    else
      $this.conditions = conditions;
    if (0 === (seen0 & 16)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.actions = [];
    } else
      $this.actions = actions;
    if (0 === (seen0 & 32))
      $this.pattern = null;
    else
      $this.pattern = pattern;
    return $this;
  }
}
class Companion_37 {}
class $serializer_37 {
  constructor() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushCondition', this, 4);
    tmp0_serialDesc.m1a('kind', true);
    tmp0_serialDesc.m1a('key', true);
    tmp0_serialDesc.m1a('pattern', true);
    tmp0_serialDesc.m1a('is', true);
    this.wln_1 = tmp0_serialDesc;
  }
  xln(encoder, value) {
    var tmp0_desc = this.wln_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.kind === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.kind);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.key == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.key);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.pattern == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.pattern);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.is == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.is);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xln(encoder, value instanceof PushCondition ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wln_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return PushCondition.yln(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.wln_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PushCondition {
  constructor() {
    this.kind = '';
    this.key = null;
    this.pattern = null;
    this.is = null;
  }
  zln(_set____db54di) {
    this.kind = _set____db54di;
  }
  d11() {
    return this.kind;
  }
  z9t(_set____db54di) {
    this.key = _set____db54di;
  }
  x2() {
    return this.key;
  }
  vln(_set____db54di) {
    this.pattern = _set____db54di;
  }
  qa6() {
    return this.pattern;
  }
  alo(_set____db54di) {
    this.is = _set____db54di;
  }
  blo() {
    return this.is;
  }
  static yln(seen0, kind, key, pattern, is, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().wln_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.kind = '';
    else
      $this.kind = kind;
    if (0 === (seen0 & 2))
      $this.key = null;
    else
      $this.key = key;
    if (0 === (seen0 & 4))
      $this.pattern = null;
    else
      $this.pattern = pattern;
    if (0 === (seen0 & 8))
      $this.is = null;
    else
      $this.is = is;
    return $this;
  }
}
class Companion_38 {}
class $serializer_38 {
  constructor() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.pushers.PushersGetResponse.Pusher', this, 9);
    tmp0_serialDesc.m1a('pushkey', true);
    tmp0_serialDesc.m1a('kind', true);
    tmp0_serialDesc.m1a('app_id', true);
    tmp0_serialDesc.m1a('app_display_name', true);
    tmp0_serialDesc.m1a('device_display_name', true);
    tmp0_serialDesc.m1a('profile_tag', true);
    tmp0_serialDesc.m1a('lang', true);
    tmp0_serialDesc.m1a('data', true);
    tmp0_serialDesc.m1a('enabled', true);
    this.clo_1 = tmp0_serialDesc;
  }
  dlo(encoder, value) {
    var tmp0_desc = this.clo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.pushkey === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.pushkey);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.kind === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.kind);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.appId === '')) {
      tmp1_output.j14(tmp0_desc, 2, value.appId);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.appDisplayName === '')) {
      tmp1_output.j14(tmp0_desc, 3, value.appDisplayName);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.deviceDisplayName === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.deviceDisplayName);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.profileTag == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.profileTag);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.lang === '')) {
      tmp1_output.j14(tmp0_desc, 6, value.lang);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !equals(value.data, new PusherData_0())) {
      tmp1_output.l14(tmp0_desc, 7, $serializer_getInstance_39(), value.data);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.enabled == null)) {
      tmp1_output.m14(tmp0_desc, 8, BooleanSerializer_getInstance(), value.enabled);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dlo(encoder, value instanceof Pusher ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.clo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.u12(tmp0_desc);
    if (tmp13_input.j13()) {
      tmp4_local0 = tmp13_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.e13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.e13(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.g13(tmp0_desc, 7, $serializer_getInstance_39(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.i13(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.e13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.e13(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.g13(tmp0_desc, 7, $serializer_getInstance_39(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.i13(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp13_input.v12(tmp0_desc);
    return Pusher.elo(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  cy() {
    return this.clo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), $serializer_getInstance_39(), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_39 {}
class $serializer_39 {
  constructor() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.pushers.PushersGetResponse.PusherData', this, 2);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('format', true);
    this.flo_1 = tmp0_serialDesc;
  }
  glo(encoder, value) {
    var tmp0_desc = this.flo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.format == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.format);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.glo(encoder, value instanceof PusherData_0 ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.flo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return PusherData_0.hlo(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.flo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Pusher {
  constructor() {
    this.pushkey = '';
    this.kind = '';
    this.appId = '';
    this.appDisplayName = '';
    this.deviceDisplayName = '';
    this.profileTag = null;
    this.lang = '';
    this.data = new PusherData_0();
    this.enabled = null;
  }
  ilo(_set____db54di) {
    this.pushkey = _set____db54di;
  }
  ala() {
    return this.pushkey;
  }
  zln(_set____db54di) {
    this.kind = _set____db54di;
  }
  d11() {
    return this.kind;
  }
  jlo(_set____db54di) {
    this.appId = _set____db54di;
  }
  mfg() {
    return this.appId;
  }
  klo(_set____db54di) {
    this.appDisplayName = _set____db54di;
  }
  cla() {
    return this.appDisplayName;
  }
  llo(_set____db54di) {
    this.deviceDisplayName = _set____db54di;
  }
  ela() {
    return this.deviceDisplayName;
  }
  fla(_set____db54di) {
    this.profileTag = _set____db54di;
  }
  gla() {
    return this.profileTag;
  }
  m82(_set____db54di) {
    this.lang = _set____db54di;
  }
  n82() {
    return this.lang;
  }
  mlo(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  vl9(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  static elo(seen0, pushkey, kind, appId, appDisplayName, deviceDisplayName, profileTag, lang, data, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_38().clo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.pushkey = '';
    else
      $this.pushkey = pushkey;
    if (0 === (seen0 & 2))
      $this.kind = '';
    else
      $this.kind = kind;
    if (0 === (seen0 & 4))
      $this.appId = '';
    else
      $this.appId = appId;
    if (0 === (seen0 & 8))
      $this.appDisplayName = '';
    else
      $this.appDisplayName = appDisplayName;
    if (0 === (seen0 & 16))
      $this.deviceDisplayName = '';
    else
      $this.deviceDisplayName = deviceDisplayName;
    if (0 === (seen0 & 32))
      $this.profileTag = null;
    else
      $this.profileTag = profileTag;
    if (0 === (seen0 & 64))
      $this.lang = '';
    else
      $this.lang = lang;
    if (0 === (seen0 & 128))
      $this.data = new PusherData_0();
    else
      $this.data = data;
    if (0 === (seen0 & 256))
      $this.enabled = null;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class PusherData_0 {
  constructor() {
    this.url = null;
    this.format = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  ydl(_set____db54di) {
    this.format = _set____db54di;
  }
  zdl() {
    return this.format;
  }
  static hlo(seen0, url, format, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_39().flo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.format = null;
    else
      $this.format = format;
    return $this;
  }
}
class Companion_40 {
  constructor() {
    Companion_instance_40 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nlo_1 = [lazy(tmp_0, PushersGetResponse$Companion$$childSerializers$_anonymous__yfz0gv)];
  }
}
class $serializer_40 {
  constructor() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.pushers.PushersGetResponse', this, 1);
    tmp0_serialDesc.m1a('pushers', true);
    this.olo_1 = tmp0_serialDesc;
  }
  plo(encoder, value) {
    var tmp0_desc = this.olo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_41().nlo_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.pushers;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.pushers);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.plo(encoder, value instanceof PushersGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.olo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_41().nlo_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return PushersGetResponse.qlo(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.olo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_41().nlo_1[0].y2()];
  }
}
class PushersGetResponse {
  constructor() {
    Companion_getInstance_41();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pushers = [];
  }
  rlo(_set____db54di) {
    this.pushers = _set____db54di;
  }
  slo() {
    return this.pushers;
  }
  static qlo(seen0, pushers, serializationConstructorMarker) {
    Companion_getInstance_41();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_40().olo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.pushers = [];
    } else
      $this.pushers = pushers;
    return $this;
  }
}
class Companion_41 {
  constructor() {
    Companion_instance_41 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.tlo_1 = [lazy(tmp_0, RelationsGetResponse$RelationEvent$Companion$$childSerializers$_anonymous__t8e6vk), null, null, null, null, null, null];
  }
}
class $serializer_41 {
  constructor() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.RelationsGetResponse.RelationEvent', this, 7);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('state_key', true);
    this.ulo_1 = tmp0_serialDesc;
  }
  vlo(encoder, value) {
    var tmp0_desc = this.ulo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().tlo_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vlo(encoder, value instanceof RelationEvent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ulo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_42().tlo_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return RelationEvent.wlo(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.ulo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_42().tlo_1[0].y2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class RelationEvent {
  constructor() {
    Companion_getInstance_42();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = null;
  }
  wlg(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  blc(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  static wlo(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_42();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_41().ulo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_42 {
  constructor() {
    Companion_instance_42 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xlo_1 = [lazy(tmp_0, RelationsGetResponse$Companion$$childSerializers$_anonymous__yx9p1y), null, null];
  }
}
class $serializer_42 {
  constructor() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.RelationsGetResponse', this, 3);
    tmp0_serialDesc.m1a('chunk', true);
    tmp0_serialDesc.m1a('next_batch', true);
    tmp0_serialDesc.m1a('prev_batch', true);
    this.ylo_1 = tmp0_serialDesc;
  }
  zlo(encoder, value) {
    var tmp0_desc = this.ylo_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().xlo_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.chunk);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.nextBatch == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.nextBatch);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.prevBatch == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.prevBatch);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zlo(encoder, value instanceof RelationsGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ylo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_43().xlo_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.g13(tmp0_desc, 0, tmp8_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.g13(tmp0_desc, 0, tmp8_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return RelationsGetResponse.alp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.ylo_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_43().xlo_1[0].y2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class RelationsGetResponse {
  constructor() {
    Companion_getInstance_43();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.nextBatch = null;
    this.prevBatch = null;
  }
  blp(_set____db54di) {
    this.chunk = _set____db54di;
  }
  slf() {
    return this.chunk;
  }
  tlc(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  ulc() {
    return this.nextBatch;
  }
  tlf(_set____db54di) {
    this.prevBatch = _set____db54di;
  }
  ulf() {
    return this.prevBatch;
  }
  static alp(seen0, chunk, nextBatch, prevBatch, serializationConstructorMarker) {
    Companion_getInstance_43();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_42().ylo_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 2))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    if (0 === (seen0 & 4))
      $this.prevBatch = null;
    else
      $this.prevBatch = prevBatch;
    return $this;
  }
}
class Companion_43 {
  constructor() {
    Companion_instance_43 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.clp_1 = [tmp_1, null, null, null, null, null, lazy(tmp_2, ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao_0)];
  }
}
class $serializer_43 {
  constructor() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.ThreadsGetResponse.ThreadEvent', this, 7);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('unsigned', true);
    this.dlp_1 = tmp0_serialDesc;
  }
  elp(encoder, value) {
    var tmp0_desc = this.dlp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_44().clp_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.unsigned == null)) {
      tmp1_output.m14(tmp0_desc, 6, tmp2_cached[6].y2(), value.unsigned);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.elp(encoder, value instanceof ThreadEvent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dlp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_44().clp_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, tmp12_cached[6].y2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, tmp12_cached[6].y2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return ThreadEvent.flp(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.dlp_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_44().clp_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].y2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(tmp0_cached[6].y2())];
  }
}
class ThreadEvent {
  constructor() {
    Companion_getInstance_44();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.unsigned = null;
  }
  wlg(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  slh(_set____db54di) {
    this.unsigned = _set____db54di;
  }
  tlh() {
    return this.unsigned;
  }
  static flp(seen0, content, eventId, originServerTs, roomId, sender, type, unsigned, serializationConstructorMarker) {
    Companion_getInstance_44();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_43().dlp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.unsigned = null;
    else
      $this.unsigned = unsigned;
    return $this;
  }
}
class Companion_44 {
  constructor() {
    Companion_instance_44 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.glp_1 = [lazy(tmp_0, ThreadsGetResponse$Companion$$childSerializers$_anonymous__ddk0mc), null];
  }
}
class $serializer_44 {
  constructor() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.ThreadsGetResponse', this, 2);
    tmp0_serialDesc.m1a('chunk', true);
    tmp0_serialDesc.m1a('next_batch', true);
    this.hlp_1 = tmp0_serialDesc;
  }
  ilp(encoder, value) {
    var tmp0_desc = this.hlp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_45().glp_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.chunk);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.nextBatch == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.nextBatch);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ilp(encoder, value instanceof ThreadsGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hlp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_45().glp_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.g13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.g13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return ThreadsGetResponse.jlp(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.hlp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_45().glp_1[0].y2(), get_nullable(StringSerializer_getInstance())];
  }
}
class ThreadsGetResponse {
  constructor() {
    Companion_getInstance_45();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.nextBatch = null;
  }
  klp(_set____db54di) {
    this.chunk = _set____db54di;
  }
  slf() {
    return this.chunk;
  }
  tlc(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  ulc() {
    return this.nextBatch;
  }
  static jlp(seen0, chunk, nextBatch, serializationConstructorMarker) {
    Companion_getInstance_45();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_44().hlp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 2))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    return $this;
  }
}
class Companion_45 {}
class $serializer_45 {
  constructor() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsCreateRoomResponse', this, 1);
    tmp0_serialDesc.m1a('room_id', true);
    this.llp_1 = tmp0_serialDesc;
  }
  mlp(encoder, value) {
    var tmp0_desc = this.llp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.roomId);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.mlp(encoder, value instanceof RoomsCreateRoomResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.llp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsCreateRoomResponse.nlp(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.llp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsCreateRoomResponse {
  constructor() {
    this.roomId = '';
  }
  blg(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  static nlp(seen0, roomId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_45().llp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    return $this;
  }
}
class Companion_46 {
  constructor() {
    Companion_instance_46 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.olp_1 = [lazy(tmp_0, RoomsGetJoinedMembersResponse$Companion$$childSerializers$_anonymous__9y13pz)];
  }
}
class $serializer_46 {
  constructor() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetJoinedMembersResponse', this, 1);
    tmp0_serialDesc.m1a('joined', true);
    this.plp_1 = tmp0_serialDesc;
  }
  qlp(encoder, value) {
    var tmp0_desc = this.plp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_47().olp_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.joined;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.joined);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qlp(encoder, value instanceof RoomsGetJoinedMembersResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.plp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_47().olp_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsGetJoinedMembersResponse.rlp(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.plp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_47().olp_1[0].y2()];
  }
}
class RoomsGetJoinedMembersResponse {
  constructor() {
    Companion_getInstance_47();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.joined = emptyMap();
  }
  slp(_set____db54di) {
    this.joined = _set____db54di;
  }
  tlp() {
    return this.joined;
  }
  static rlp(seen0, joined, serializationConstructorMarker) {
    Companion_getInstance_47();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_46().plp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.joined = emptyMap();
    } else
      $this.joined = joined;
    return $this;
  }
}
class Companion_47 {}
class $serializer_47 {
  constructor() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomMember', this, 2);
    tmp0_serialDesc.m1a('display_name', true);
    tmp0_serialDesc.m1a('avatar_url', true);
    this.ulp_1 = tmp0_serialDesc;
  }
  vlp(encoder, value) {
    var tmp0_desc = this.ulp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.displayName == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.avatarUrl == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vlp(encoder, value instanceof RoomMember ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ulp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return RoomMember.wlp(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ulp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class RoomMember {
  constructor() {
    this.displayName = null;
    this.avatarUrl = null;
  }
  p5z(_set____db54di) {
    this.displayName = _set____db54di;
  }
  q5z() {
    return this.displayName;
  }
  mak(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  nak() {
    return this.avatarUrl;
  }
  static wlp(seen0, displayName, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_47().ulp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 2))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_48 {
  constructor() {
    Companion_instance_48 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xlp_1 = [lazy(tmp_0, RoomsGetJoinedRoomsResponse$Companion$$childSerializers$_anonymous__wacquw)];
  }
}
class $serializer_48 {
  constructor() {
    $serializer_instance_48 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetJoinedRoomsResponse', this, 1);
    tmp0_serialDesc.m1a('joined_rooms', true);
    this.ylp_1 = tmp0_serialDesc;
  }
  zlp(encoder, value) {
    var tmp0_desc = this.ylp_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_49().xlp_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.joinedRooms;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.joinedRooms);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zlp(encoder, value instanceof RoomsGetJoinedRoomsResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ylp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_49().xlp_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsGetJoinedRoomsResponse.alq(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ylp_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_49().xlp_1[0].y2()];
  }
}
class RoomsGetJoinedRoomsResponse {
  constructor() {
    Companion_getInstance_49();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.joinedRooms = [];
  }
  blq(_set____db54di) {
    this.joinedRooms = _set____db54di;
  }
  clq() {
    return this.joinedRooms;
  }
  static alq(seen0, joinedRooms, serializationConstructorMarker) {
    Companion_getInstance_49();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_48().ylp_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.joinedRooms = [];
    } else
      $this.joinedRooms = joinedRooms;
    return $this;
  }
}
class Companion_49 {
  constructor() {
    Companion_instance_49 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.dlq_1 = [lazy(tmp_0, RoomsGetMembersResponse$Companion$$childSerializers$_anonymous__w4ei9e)];
  }
}
class $serializer_49 {
  constructor() {
    $serializer_instance_49 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetMembersResponse', this, 1);
    tmp0_serialDesc.m1a('chunk', true);
    this.elq_1 = tmp0_serialDesc;
  }
  flq(encoder, value) {
    var tmp0_desc = this.elq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_50().dlq_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.chunk);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.flq(encoder, value instanceof RoomsGetMembersResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.elq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_50().dlq_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsGetMembersResponse.glq(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.elq_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_50().dlq_1[0].y2()];
  }
}
class RoomsGetMembersResponse {
  constructor() {
    Companion_getInstance_50();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
  }
  hlq(_set____db54di) {
    this.chunk = _set____db54di;
  }
  slf() {
    return this.chunk;
  }
  static glq(seen0, chunk, serializationConstructorMarker) {
    Companion_getInstance_50();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_49().elq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    return $this;
  }
}
class Companion_50 {
  constructor() {
    Companion_instance_50 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ilq_1 = [null, null, tmp_1, lazy(tmp_2, RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f_0)];
  }
}
class $serializer_50 {
  constructor() {
    $serializer_instance_50 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetMessagesResponse', this, 4);
    tmp0_serialDesc.m1a('start', true);
    tmp0_serialDesc.m1a('end', true);
    tmp0_serialDesc.m1a('chunk', true);
    tmp0_serialDesc.m1a('state', true);
    this.jlq_1 = tmp0_serialDesc;
  }
  klq(encoder, value) {
    var tmp0_desc = this.jlq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_51().ilq_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.start === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.start);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.end == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.end);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 2)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 2, tmp2_cached[2].y2(), value.chunk);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.state == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.state);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.klq(encoder, value instanceof RoomsGetMessagesResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jlq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_51().ilq_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.g13(tmp0_desc, 2, tmp9_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, tmp9_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.g13(tmp0_desc, 2, tmp9_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, tmp9_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return RoomsGetMessagesResponse.llq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.jlq_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_51().ilq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].y2(), get_nullable(tmp0_cached[3].y2())];
  }
}
class RoomsGetMessagesResponse {
  constructor() {
    Companion_getInstance_51();
    this.start = '';
    this.end = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.state = null;
  }
  mlq(_set____db54di) {
    this.start = _set____db54di;
  }
  hi() {
    return this.start;
  }
  glh(_set____db54di) {
    this.end = _set____db54di;
  }
  hlh() {
    return this.end;
  }
  hlq(_set____db54di) {
    this.chunk = _set____db54di;
  }
  slf() {
    return this.chunk;
  }
  nlq(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  static llq(seen0, start, end, chunk, state, serializationConstructorMarker) {
    Companion_getInstance_51();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_50().jlq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.start = '';
    else
      $this.start = start;
    if (0 === (seen0 & 2))
      $this.end = null;
    else
      $this.end = end;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 8))
      $this.state = null;
    else
      $this.state = state;
    return $this;
  }
}
class Companion_51 {
  constructor() {
    Companion_instance_51 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomEvent$Companion$$childSerializers$_anonymous__onomqd);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.olq_1 = [null, null, null, null, tmp_1, null, null, lazy(tmp_2, RoomEvent$Companion$$childSerializers$_anonymous__onomqd_0)];
  }
}
class $serializer_51 {
  constructor() {
    $serializer_instance_51 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomEvent', this, 8);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('state_key', true);
    tmp0_serialDesc.m1a('unsigned', true);
    this.plq_1 = tmp0_serialDesc;
  }
  qlq(encoder, value) {
    var tmp0_desc = this.plq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_52().olq_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 2, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 3, value.originServerTs);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 4)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 4, tmp2_cached[4].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.unsigned == null)) {
      tmp1_output.m14(tmp0_desc, 7, tmp2_cached[7].y2(), value.unsigned);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qlq(encoder, value instanceof RoomEvent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.plq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0n;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.u12(tmp0_desc);
    var tmp13_cached = Companion_getInstance_52().olq_1;
    if (tmp12_input.j13()) {
      tmp4_local0 = tmp12_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.a13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.g13(tmp0_desc, 4, tmp13_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.i13(tmp0_desc, 7, tmp13_cached[7].y2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.a13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.g13(tmp0_desc, 4, tmp13_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.i13(tmp0_desc, 7, tmp13_cached[7].y2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp12_input.v12(tmp0_desc);
    return RoomEvent.rlq(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  cy() {
    return this.plq_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_52().olq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), tmp0_cached[4].y2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[7].y2())];
  }
}
class RoomEvent {
  constructor() {
    Companion_getInstance_52();
    this.type = '';
    this.eventId = '';
    this.sender = '';
    this.originServerTs = 0n;
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.roomId = null;
    this.stateKey = null;
    this.unsigned = null;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  slq(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  blc(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  tlq(_set____db54di) {
    this.unsigned = _set____db54di;
  }
  tlh() {
    return this.unsigned;
  }
  static rlq(seen0, type, eventId, sender, originServerTs, content, roomId, stateKey, unsigned, serializationConstructorMarker) {
    Companion_getInstance_52();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_51().plq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 8))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 16)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 32))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    if (0 === (seen0 & 128))
      $this.unsigned = null;
    else
      $this.unsigned = unsigned;
    return $this;
  }
}
class Companion_52 {}
class $serializer_52 {
  constructor() {
    $serializer_instance_52 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetRoomNameResponse', this, 1);
    tmp0_serialDesc.m1a('name', true);
    this.ulq_1 = tmp0_serialDesc;
  }
  vlq(encoder, value) {
    var tmp0_desc = this.ulq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.name);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vlq(encoder, value instanceof RoomsGetRoomNameResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ulq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsGetRoomNameResponse.wlq(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ulq_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsGetRoomNameResponse {
  constructor() {
    this.name = '';
  }
  c31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  static wlq(seen0, name, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_52().ulq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = '';
    else
      $this.name = name;
    return $this;
  }
}
class Companion_53 {
  constructor() {
    Companion_instance_53 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xlq_1 = [lazy(tmp_0, RoomsGetStateEventResponse$Companion$$childSerializers$_anonymous__xh3qn2)];
  }
}
class $serializer_53 {
  constructor() {
    $serializer_instance_53 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetStateEventResponse', this, 1);
    tmp0_serialDesc.m1a('content', true);
    this.ylq_1 = tmp0_serialDesc;
  }
  zlq(encoder, value) {
    var tmp0_desc = this.ylq_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_54().xlq_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zlq(encoder, value instanceof RoomsGetStateEventResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ylq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_54().xlq_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsGetStateEventResponse.alr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ylq_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_54().xlq_1[0].y2()];
  }
}
class RoomsGetStateEventResponse {
  constructor() {
    Companion_getInstance_54();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
  }
  slq(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  static alr(seen0, content, serializationConstructorMarker) {
    Companion_getInstance_54();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_53().ylq_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    return $this;
  }
}
class Companion_54 {
  constructor() {
    Companion_instance_54 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.blr_1 = [lazy(tmp_0, RoomsStateEvent$Companion$$childSerializers$_anonymous__q4r93d), null, null, null, null, null, null];
  }
}
class $serializer_54 {
  constructor() {
    $serializer_instance_54 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsStateEvent', this, 7);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('state_key', true);
    this.clr_1 = tmp0_serialDesc;
  }
  dlr(encoder, value) {
    var tmp0_desc = this.clr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_55().blr_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.f14(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.j14(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.j14(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.stateKey === '')) {
      tmp1_output.j14(tmp0_desc, 6, value.stateKey);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dlr(encoder, value instanceof RoomsStateEvent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.clr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_55().blr_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.e13(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, tmp12_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.a13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.e13(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return RoomsStateEvent.elr(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.clr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_55().blr_1[0].y2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class RoomsStateEvent {
  constructor() {
    Companion_getInstance_55();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = '';
  }
  wlg(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  ylg(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  alh(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  f35(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  flr(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  clc() {
    return this.stateKey;
  }
  static elr(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_55();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_54().clr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = '';
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_55 {}
class $serializer_55 {
  constructor() {
    $serializer_instance_55 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsJoinRoomResponse', this, 1);
    tmp0_serialDesc.m1a('room_id', true);
    this.glr_1 = tmp0_serialDesc;
  }
  hlr(encoder, value) {
    var tmp0_desc = this.glr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.roomId);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hlr(encoder, value instanceof RoomsJoinRoomResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.glr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsJoinRoomResponse.ilr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.glr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsJoinRoomResponse {
  constructor() {
    this.roomId = '';
  }
  blg(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  static ilr(seen0, roomId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_55().glr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    return $this;
  }
}
class Companion_56 {}
class $serializer_56 {
  constructor() {
    $serializer_instance_56 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsRedactEventResponse', this, 1);
    tmp0_serialDesc.m1a('event_id', true);
    this.jlr_1 = tmp0_serialDesc;
  }
  klr(encoder, value) {
    var tmp0_desc = this.jlr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.eventId);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.klr(encoder, value instanceof RoomsRedactEventResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jlr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsRedactEventResponse.llr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.jlr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsRedactEventResponse {
  constructor() {
    this.eventId = '';
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  static llr(seen0, eventId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_56().jlr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    return $this;
  }
}
class Companion_57 {}
class $serializer_57 {
  constructor() {
    $serializer_instance_57 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsSendMessageResponse', this, 1);
    tmp0_serialDesc.m1a('event_id', true);
    this.mlr_1 = tmp0_serialDesc;
  }
  nlr(encoder, value) {
    var tmp0_desc = this.mlr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.eventId);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nlr(encoder, value instanceof RoomsSendMessageResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mlr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsSendMessageResponse.olr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.mlr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsSendMessageResponse {
  constructor() {
    this.eventId = '';
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  static olr(seen0, eventId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_57().mlr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    return $this;
  }
}
class Companion_58 {}
class $serializer_58 {
  constructor() {
    $serializer_instance_58 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsSendStateEventResponse', this, 1);
    tmp0_serialDesc.m1a('event_id', true);
    this.plr_1 = tmp0_serialDesc;
  }
  qlr(encoder, value) {
    var tmp0_desc = this.plr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.eventId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.eventId);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qlr(encoder, value instanceof RoomsSendStateEventResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.plr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RoomsSendStateEventResponse.rlr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.plr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsSendStateEventResponse {
  constructor() {
    this.eventId = '';
  }
  xlg(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  static rlr(seen0, eventId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_58().plr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    return $this;
  }
}
class Companion_59 {}
class $serializer_59 {
  constructor() {
    $serializer_instance_59 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResponse', this, 1);
    tmp0_serialDesc.m1a('search_categories', true);
    this.slr_1 = tmp0_serialDesc;
  }
  tlr(encoder, value) {
    var tmp0_desc = this.slr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.searchCategories == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_60(), value.searchCategories);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.tlr(encoder, value instanceof SearchResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.slr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_60(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_60(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SearchResponse.ulr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.slr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_60())];
  }
}
class SearchResponse {
  constructor() {
    this.searchCategories = null;
  }
  vlr(_set____db54di) {
    this.searchCategories = _set____db54di;
  }
  wlr() {
    return this.searchCategories;
  }
  static ulr(seen0, searchCategories, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_59().slr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.searchCategories = null;
    else
      $this.searchCategories = searchCategories;
    return $this;
  }
}
class Companion_60 {}
class $serializer_60 {
  constructor() {
    $serializer_instance_60 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchCategories', this, 1);
    tmp0_serialDesc.m1a('room_events', true);
    this.xlr_1 = tmp0_serialDesc;
  }
  ylr(encoder, value) {
    var tmp0_desc = this.xlr_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.roomEvents == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_61(), value.roomEvents);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ylr(encoder, value instanceof SearchCategories ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xlr_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_61(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_61(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SearchCategories.zlr(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.xlr_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_61())];
  }
}
class SearchCategories {
  constructor() {
    this.roomEvents = null;
  }
  als(_set____db54di) {
    this.roomEvents = _set____db54di;
  }
  bls() {
    return this.roomEvents;
  }
  static zlr(seen0, roomEvents, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_60().xlr_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomEvents = null;
    else
      $this.roomEvents = roomEvents;
    return $this;
  }
}
class Companion_61 {
  constructor() {
    Companion_instance_61 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.cls_1 = [null, lazy(tmp_0, SearchRoomEvents$Companion$$childSerializers$_anonymous__epeb9q), null];
  }
}
class $serializer_61 {
  constructor() {
    $serializer_instance_61 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchRoomEvents', this, 3);
    tmp0_serialDesc.m1a('count', true);
    tmp0_serialDesc.m1a('results', true);
    tmp0_serialDesc.m1a('next_batch', true);
    this.dls_1 = tmp0_serialDesc;
  }
  els(encoder, value) {
    var tmp0_desc = this.dls_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_62().cls_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.count == null)) {
      tmp1_output.m14(tmp0_desc, 0, LongSerializer_getInstance(), value.count);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.results;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 1, tmp2_cached[1].y2(), value.results);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.nextBatch == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.nextBatch);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.els(encoder, value instanceof SearchRoomEvents ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_62().cls_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.g13(tmp0_desc, 1, tmp8_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.g13(tmp0_desc, 1, tmp8_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SearchRoomEvents.fls(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.dls_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_62().cls_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(LongSerializer_getInstance()), tmp0_cached[1].y2(), get_nullable(StringSerializer_getInstance())];
  }
}
class SearchRoomEvents {
  constructor() {
    Companion_getInstance_62();
    this.count = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.results = [];
    this.nextBatch = null;
  }
  gls(_set____db54di) {
    this.count = _set____db54di;
  }
  u33() {
    return this.count;
  }
  hls(_set____db54di) {
    this.results = _set____db54di;
  }
  ils() {
    return this.results;
  }
  tlc(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  ulc() {
    return this.nextBatch;
  }
  static fls(seen0, count, results, nextBatch, serializationConstructorMarker) {
    Companion_getInstance_62();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_61().dls_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.count = null;
    else
      $this.count = count;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.results = [];
    } else
      $this.results = results;
    if (0 === (seen0 & 4))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    return $this;
  }
}
class Companion_62 {}
class $serializer_62 {
  constructor() {
    $serializer_instance_62 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResult', this, 2);
    tmp0_serialDesc.m1a('rank', true);
    tmp0_serialDesc.m1a('result', true);
    this.jls_1 = tmp0_serialDesc;
  }
  kls(encoder, value) {
    var tmp0_desc = this.jls_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.rank == null)) {
      tmp1_output.m14(tmp0_desc, 0, DoubleSerializer_getInstance(), value.rank);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.result == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_63(), value.result);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kls(encoder, value instanceof SearchResult ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, $serializer_getInstance_63(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, $serializer_getInstance_63(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return SearchResult.lls(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jls_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance()), get_nullable($serializer_getInstance_63())];
  }
}
class SearchResult {
  constructor() {
    this.rank = null;
    this.result = null;
  }
  mls(_set____db54di) {
    this.rank = _set____db54di;
  }
  uh0() {
    return this.rank;
  }
  nls(_set____db54di) {
    this.result = _set____db54di;
  }
  ols() {
    return this.result;
  }
  static lls(seen0, rank, result, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_62().jls_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.rank = null;
    else
      $this.rank = rank;
    if (0 === (seen0 & 2))
      $this.result = null;
    else
      $this.result = result;
    return $this;
  }
}
class Companion_63 {}
class $serializer_63 {
  constructor() {
    $serializer_instance_63 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResultEvent', this, 6);
    tmp0_serialDesc.m1a('event_id', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('sender', true);
    tmp0_serialDesc.m1a('room_id', true);
    tmp0_serialDesc.m1a('origin_server_ts', true);
    tmp0_serialDesc.m1a('content', true);
    this.pls_1 = tmp0_serialDesc;
  }
  qls(encoder, value) {
    var tmp0_desc = this.pls_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.eventId == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.eventId);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.sender == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.sender);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.originServerTs == null)) {
      tmp1_output.m14(tmp0_desc, 4, LongSerializer_getInstance(), value.originServerTs);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.content == null)) {
      tmp1_output.m14(tmp0_desc, 5, $serializer_getInstance_64(), value.content);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qls(encoder, value instanceof SearchResultEvent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.pls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.u12(tmp0_desc);
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.i13(tmp0_desc, 4, LongSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, $serializer_getInstance_64(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.i13(tmp0_desc, 4, LongSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, $serializer_getInstance_64(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return SearchResultEvent.rls(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.pls_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable($serializer_getInstance_64())];
  }
}
class SearchResultEvent {
  constructor() {
    this.eventId = null;
    this.type = null;
    this.sender = null;
    this.roomId = null;
    this.originServerTs = null;
    this.content = null;
  }
  iky(_set____db54di) {
    this.eventId = _set____db54di;
  }
  ajm() {
    return this.eventId;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  sls(_set____db54di) {
    this.sender = _set____db54di;
  }
  g7y() {
    return this.sender;
  }
  zl7(_set____db54di) {
    this.roomId = _set____db54di;
  }
  al8() {
    return this.roomId;
  }
  tls(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  zlg() {
    return this.originServerTs;
  }
  uls(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  static rls(seen0, eventId, type, sender, roomId, originServerTs, content, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_63().pls_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = null;
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.sender = null;
    else
      $this.sender = sender;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.originServerTs = null;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 32))
      $this.content = null;
    else
      $this.content = content;
    return $this;
  }
}
class Companion_64 {}
class $serializer_64 {
  constructor() {
    $serializer_instance_64 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResultContent', this, 2);
    tmp0_serialDesc.m1a('msgtype', true);
    tmp0_serialDesc.m1a('body', true);
    this.vls_1 = tmp0_serialDesc;
  }
  wls(encoder, value) {
    var tmp0_desc = this.vls_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.msgtype == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.msgtype);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.body == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.body);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.wls(encoder, value instanceof SearchResultContent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.vls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return SearchResultContent.xls(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.vls_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class SearchResultContent {
  constructor() {
    this.msgtype = null;
    this.body = null;
  }
  dlb(_set____db54di) {
    this.msgtype = _set____db54di;
  }
  elb() {
    return this.msgtype;
  }
  ta8(_set____db54di) {
    this.body = _set____db54di;
  }
  ua8() {
    return this.body;
  }
  static xls(seen0, msgtype, body, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_64().vls_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.msgtype = null;
    else
      $this.msgtype = msgtype;
    if (0 === (seen0 & 2))
      $this.body = null;
    else
      $this.body = body;
    return $this;
  }
}
class Companion_65 {}
class $serializer_65 {
  constructor() {
    $serializer_instance_65 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncResponse', this, 3);
    tmp0_serialDesc.m1a('next_batch', true);
    tmp0_serialDesc.m1a('rooms', true);
    tmp0_serialDesc.m1a('account_data', true);
    this.yls_1 = tmp0_serialDesc;
  }
  zls(encoder, value) {
    var tmp0_desc = this.yls_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.nextBatch === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.nextBatch);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.rooms == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_66(), value.rooms);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.accountData == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_72(), value.accountData);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zls(encoder, value instanceof SyncResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.yls_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_66(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_66(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SyncResponse.blt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.yls_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable($serializer_getInstance_66()), get_nullable($serializer_getInstance_72())];
  }
}
class SyncResponse {
  constructor() {
    this.nextBatch = '';
    this.rooms = null;
    this.accountData = null;
  }
  clt(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  ulc() {
    return this.nextBatch;
  }
  dlt(_set____db54di) {
    this.rooms = _set____db54di;
  }
  pl8() {
    return this.rooms;
  }
  elt(_set____db54di) {
    this.accountData = _set____db54di;
  }
  ili() {
    return this.accountData;
  }
  static blt(seen0, nextBatch, rooms, accountData, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_65().yls_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.nextBatch = '';
    else
      $this.nextBatch = nextBatch;
    if (0 === (seen0 & 2))
      $this.rooms = null;
    else
      $this.rooms = rooms;
    if (0 === (seen0 & 4))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    return $this;
  }
}
class Companion_66 {
  constructor() {
    Companion_instance_66 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, SyncRooms$Companion$$childSerializers$_anonymous__ebc099);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, SyncRooms$Companion$$childSerializers$_anonymous__ebc099_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.flt_1 = [tmp_1, tmp_3, lazy(tmp_4, SyncRooms$Companion$$childSerializers$_anonymous__ebc099_1)];
  }
}
class $serializer_66 {
  constructor() {
    $serializer_instance_66 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncRooms', this, 3);
    tmp0_serialDesc.m1a('join', true);
    tmp0_serialDesc.m1a('invite', true);
    tmp0_serialDesc.m1a('leave', true);
    this.glt_1 = tmp0_serialDesc;
  }
  hlt(encoder, value) {
    var tmp0_desc = this.glt_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_67().flt_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.join == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.join);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.invite == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.invite);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.leave == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.leave);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hlt(encoder, value instanceof SyncRooms ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.glt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_67().flt_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, tmp8_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, tmp8_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, tmp8_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, tmp8_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, tmp8_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, tmp8_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SyncRooms.ilt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.glt_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_67().flt_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2()), get_nullable(tmp0_cached[2].y2())];
  }
}
class SyncRooms {
  constructor() {
    Companion_getInstance_67();
    this.join = null;
    this.invite = null;
    this.leave = null;
  }
  jlt(_set____db54di) {
    this.join = _set____db54di;
  }
  klt() {
    return this.join;
  }
  llt(_set____db54di) {
    this.invite = _set____db54di;
  }
  wla() {
    return this.invite;
  }
  mlt(_set____db54di) {
    this.leave = _set____db54di;
  }
  nlt() {
    return this.leave;
  }
  static ilt(seen0, join, invite, leave, serializationConstructorMarker) {
    Companion_getInstance_67();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_66().glt_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.join = null;
    else
      $this.join = join;
    if (0 === (seen0 & 2))
      $this.invite = null;
    else
      $this.invite = invite;
    if (0 === (seen0 & 4))
      $this.leave = null;
    else
      $this.leave = leave;
    return $this;
  }
}
class Companion_67 {}
class $serializer_67 {
  constructor() {
    $serializer_instance_67 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncJoinedRoom', this, 5);
    tmp0_serialDesc.m1a('timeline', true);
    tmp0_serialDesc.m1a('state', true);
    tmp0_serialDesc.m1a('account_data', true);
    tmp0_serialDesc.m1a('ephemeral', true);
    tmp0_serialDesc.m1a('unread_notifications', true);
    this.olt_1 = tmp0_serialDesc;
  }
  plt(encoder, value) {
    var tmp0_desc = this.olt_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.timeline == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_70(), value.timeline);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.state == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_71(), value.state);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.accountData == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_72(), value.accountData);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.ephemeral == null)) {
      tmp1_output.m14(tmp0_desc, 3, $serializer_getInstance_73(), value.ephemeral);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.unreadNotifications == null)) {
      tmp1_output.m14(tmp0_desc, 4, $serializer_getInstance_74(), value.unreadNotifications);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.plt(encoder, value instanceof SyncJoinedRoom ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.olt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_73(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_74(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_73(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_74(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return SyncJoinedRoom.qlt(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.olt_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_70()), get_nullable($serializer_getInstance_71()), get_nullable($serializer_getInstance_72()), get_nullable($serializer_getInstance_73()), get_nullable($serializer_getInstance_74())];
  }
}
class SyncJoinedRoom {
  constructor() {
    this.timeline = null;
    this.state = null;
    this.accountData = null;
    this.ephemeral = null;
    this.unreadNotifications = null;
  }
  rlt(_set____db54di) {
    this.timeline = _set____db54di;
  }
  zli() {
    return this.timeline;
  }
  slt(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  elt(_set____db54di) {
    this.accountData = _set____db54di;
  }
  ili() {
    return this.accountData;
  }
  tlt(_set____db54di) {
    this.ephemeral = _set____db54di;
  }
  wli() {
    return this.ephemeral;
  }
  ult(_set____db54di) {
    this.unreadNotifications = _set____db54di;
  }
  vlt() {
    return this.unreadNotifications;
  }
  static qlt(seen0, timeline, state, accountData, ephemeral, unreadNotifications, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_67().olt_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.timeline = null;
    else
      $this.timeline = timeline;
    if (0 === (seen0 & 2))
      $this.state = null;
    else
      $this.state = state;
    if (0 === (seen0 & 4))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    if (0 === (seen0 & 8))
      $this.ephemeral = null;
    else
      $this.ephemeral = ephemeral;
    if (0 === (seen0 & 16))
      $this.unreadNotifications = null;
    else
      $this.unreadNotifications = unreadNotifications;
    return $this;
  }
}
class Companion_68 {}
class $serializer_68 {
  constructor() {
    $serializer_instance_68 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncInvitedRoom', this, 1);
    tmp0_serialDesc.m1a('invite_state', true);
    this.wlt_1 = tmp0_serialDesc;
  }
  xlt(encoder, value) {
    var tmp0_desc = this.wlt_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.inviteState == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_75(), value.inviteState);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xlt(encoder, value instanceof SyncInvitedRoom ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wlt_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_75(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_75(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SyncInvitedRoom.ylt(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.wlt_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_75())];
  }
}
class SyncInvitedRoom {
  constructor() {
    this.inviteState = null;
  }
  zlt(_set____db54di) {
    this.inviteState = _set____db54di;
  }
  alu() {
    return this.inviteState;
  }
  static ylt(seen0, inviteState, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_68().wlt_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.inviteState = null;
    else
      $this.inviteState = inviteState;
    return $this;
  }
}
class Companion_69 {}
class $serializer_69 {
  constructor() {
    $serializer_instance_69 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncLeftRoom', this, 3);
    tmp0_serialDesc.m1a('timeline', true);
    tmp0_serialDesc.m1a('state', true);
    tmp0_serialDesc.m1a('account_data', true);
    this.blu_1 = tmp0_serialDesc;
  }
  clu(encoder, value) {
    var tmp0_desc = this.blu_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.timeline == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_70(), value.timeline);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.state == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_71(), value.state);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.accountData == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_72(), value.accountData);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.clu(encoder, value instanceof SyncLeftRoom ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.blu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SyncLeftRoom.dlu(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.blu_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_70()), get_nullable($serializer_getInstance_71()), get_nullable($serializer_getInstance_72())];
  }
}
class SyncLeftRoom {
  constructor() {
    this.timeline = null;
    this.state = null;
    this.accountData = null;
  }
  rlt(_set____db54di) {
    this.timeline = _set____db54di;
  }
  zli() {
    return this.timeline;
  }
  slt(_set____db54di) {
    this.state = _set____db54di;
  }
  g7x() {
    return this.state;
  }
  elt(_set____db54di) {
    this.accountData = _set____db54di;
  }
  ili() {
    return this.accountData;
  }
  static dlu(seen0, timeline, state, accountData, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_69().blu_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.timeline = null;
    else
      $this.timeline = timeline;
    if (0 === (seen0 & 2))
      $this.state = null;
    else
      $this.state = state;
    if (0 === (seen0 & 4))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    return $this;
  }
}
class Companion_70 {
  constructor() {
    Companion_instance_70 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.elu_1 = [lazy(tmp_0, SyncTimeline$Companion$$childSerializers$_anonymous__av0vyq), null, null];
  }
}
class $serializer_70 {
  constructor() {
    $serializer_instance_70 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncTimeline', this, 3);
    tmp0_serialDesc.m1a('events', true);
    tmp0_serialDesc.m1a('limited', true);
    tmp0_serialDesc.m1a('prev_batch', true);
    this.flu_1 = tmp0_serialDesc;
  }
  glu(encoder, value) {
    var tmp0_desc = this.flu_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_71().elu_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.events);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.limited == null)) {
      tmp1_output.m14(tmp0_desc, 1, BooleanSerializer_getInstance(), value.limited);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.prevBatch == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.prevBatch);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.glu(encoder, value instanceof SyncTimeline ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.flu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_71().elu_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.g13(tmp0_desc, 0, tmp8_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.g13(tmp0_desc, 0, tmp8_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SyncTimeline.hlu(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.flu_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_71().elu_1[0].y2(), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class SyncTimeline {
  constructor() {
    Companion_getInstance_71();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
    this.limited = null;
    this.prevBatch = null;
  }
  ilu(_set____db54di) {
    this.events = _set____db54di;
  }
  jlu() {
    return this.events;
  }
  klu(_set____db54di) {
    this.limited = _set____db54di;
  }
  llu() {
    return this.limited;
  }
  tlf(_set____db54di) {
    this.prevBatch = _set____db54di;
  }
  ulf() {
    return this.prevBatch;
  }
  static hlu(seen0, events, limited, prevBatch, serializationConstructorMarker) {
    Companion_getInstance_71();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_70().flu_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    if (0 === (seen0 & 2))
      $this.limited = null;
    else
      $this.limited = limited;
    if (0 === (seen0 & 4))
      $this.prevBatch = null;
    else
      $this.prevBatch = prevBatch;
    return $this;
  }
}
class Companion_71 {
  constructor() {
    Companion_instance_71 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mlu_1 = [lazy(tmp_0, SyncState$Companion$$childSerializers$_anonymous__d2b0i4)];
  }
}
class $serializer_71 {
  constructor() {
    $serializer_instance_71 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncState', this, 1);
    tmp0_serialDesc.m1a('events', true);
    this.nlu_1 = tmp0_serialDesc;
  }
  olu(encoder, value) {
    var tmp0_desc = this.nlu_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_72().mlu_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.events);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.olu(encoder, value instanceof SyncState ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nlu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_72().mlu_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SyncState.plu(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.nlu_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_72().mlu_1[0].y2()];
  }
}
class SyncState {
  constructor() {
    Companion_getInstance_72();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  ilu(_set____db54di) {
    this.events = _set____db54di;
  }
  jlu() {
    return this.events;
  }
  static plu(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_72();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_71().nlu_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_72 {
  constructor() {
    Companion_instance_72 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qlu_1 = [lazy(tmp_0, SyncAccountData$Companion$$childSerializers$_anonymous__1rtoxe)];
  }
}
class $serializer_72 {
  constructor() {
    $serializer_instance_72 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncAccountData', this, 1);
    tmp0_serialDesc.m1a('events', true);
    this.rlu_1 = tmp0_serialDesc;
  }
  slu(encoder, value) {
    var tmp0_desc = this.rlu_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_73().qlu_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.events);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.slu(encoder, value instanceof SyncAccountData ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rlu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_73().qlu_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SyncAccountData.tlu(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.rlu_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_73().qlu_1[0].y2()];
  }
}
class SyncAccountData {
  constructor() {
    Companion_getInstance_73();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  ilu(_set____db54di) {
    this.events = _set____db54di;
  }
  jlu() {
    return this.events;
  }
  static tlu(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_73();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_72().rlu_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_73 {
  constructor() {
    Companion_instance_73 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ulu_1 = [lazy(tmp_0, SyncEphemeral$Companion$$childSerializers$_anonymous__rh13c8)];
  }
}
class $serializer_73 {
  constructor() {
    $serializer_instance_73 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncEphemeral', this, 1);
    tmp0_serialDesc.m1a('events', true);
    this.vlu_1 = tmp0_serialDesc;
  }
  wlu(encoder, value) {
    var tmp0_desc = this.vlu_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_74().ulu_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.events);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.wlu(encoder, value instanceof SyncEphemeral ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.vlu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_74().ulu_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SyncEphemeral.xlu(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.vlu_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_74().ulu_1[0].y2()];
  }
}
class SyncEphemeral {
  constructor() {
    Companion_getInstance_74();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  ilu(_set____db54di) {
    this.events = _set____db54di;
  }
  jlu() {
    return this.events;
  }
  static xlu(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_74();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_73().vlu_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_74 {}
class $serializer_74 {
  constructor() {
    $serializer_instance_74 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncUnreadNotifications', this, 2);
    tmp0_serialDesc.m1a('highlight_count', true);
    tmp0_serialDesc.m1a('notification_count', true);
    this.ylu_1 = tmp0_serialDesc;
  }
  zlu(encoder, value) {
    var tmp0_desc = this.ylu_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.highlightCount == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.highlightCount);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.notificationCount == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.notificationCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zlu(encoder, value instanceof SyncUnreadNotifications ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ylu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return SyncUnreadNotifications.alv(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ylu_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class SyncUnreadNotifications {
  constructor() {
    this.highlightCount = null;
    this.notificationCount = null;
  }
  blv(_set____db54di) {
    this.highlightCount = _set____db54di;
  }
  clv() {
    return this.highlightCount;
  }
  dlv(_set____db54di) {
    this.notificationCount = _set____db54di;
  }
  elv() {
    return this.notificationCount;
  }
  static alv(seen0, highlightCount, notificationCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_74().ylu_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.highlightCount = null;
    else
      $this.highlightCount = highlightCount;
    if (0 === (seen0 & 2))
      $this.notificationCount = null;
    else
      $this.notificationCount = notificationCount;
    return $this;
  }
}
class Companion_75 {
  constructor() {
    Companion_instance_75 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.flv_1 = [lazy(tmp_0, SyncInviteState$Companion$$childSerializers$_anonymous__2iq9z1)];
  }
}
class $serializer_75 {
  constructor() {
    $serializer_instance_75 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncInviteState', this, 1);
    tmp0_serialDesc.m1a('events', true);
    this.glv_1 = tmp0_serialDesc;
  }
  hlv(encoder, value) {
    var tmp0_desc = this.glv_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_76().flv_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.events);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hlv(encoder, value instanceof SyncInviteState ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.glv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_76().flv_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SyncInviteState.ilv(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.glv_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_76().flv_1[0].y2()];
  }
}
class SyncInviteState {
  constructor() {
    Companion_getInstance_76();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  ilu(_set____db54di) {
    this.events = _set____db54di;
  }
  jlu() {
    return this.events;
  }
  static ilv(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_76();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_75().glv_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_76 {
  constructor() {
    Companion_instance_76 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.jlv_1 = [lazy(tmp_0, TagsGetResponse$Companion$$childSerializers$_anonymous__3nkk8k)];
  }
}
class $serializer_76 {
  constructor() {
    $serializer_instance_76 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.tags.TagsGetResponse', this, 1);
    tmp0_serialDesc.m1a('tags', true);
    this.klv_1 = tmp0_serialDesc;
  }
  llv(encoder, value) {
    var tmp0_desc = this.klv_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_77().jlv_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.tags;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.tags);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.llv(encoder, value instanceof TagsGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.klv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_77().jlv_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return TagsGetResponse.mlv(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.klv_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_77().jlv_1[0].y2()];
  }
}
class TagsGetResponse {
  constructor() {
    Companion_getInstance_77();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.tags = emptyMap();
  }
  nlv(_set____db54di) {
    this.tags = _set____db54di;
  }
  ga2() {
    return this.tags;
  }
  static mlv(seen0, tags, serializationConstructorMarker) {
    Companion_getInstance_77();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_76().klv_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.tags = emptyMap();
    } else
      $this.tags = tags;
    return $this;
  }
}
class Companion_77 {}
class $serializer_77 {
  constructor() {
    $serializer_instance_77 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.tags.TagContent', this, 1);
    tmp0_serialDesc.m1a('order', true);
    this.olv_1 = tmp0_serialDesc;
  }
  plv(encoder, value) {
    var tmp0_desc = this.olv_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.order == null)) {
      tmp1_output.m14(tmp0_desc, 0, DoubleSerializer_getInstance(), value.order);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.plv(encoder, value instanceof TagContent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.olv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return TagContent.qlv(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.olv_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance())];
  }
}
class TagContent {
  constructor() {
    this.order = null;
  }
  zlc(_set____db54di) {
    this.order = _set____db54di;
  }
  ald() {
    return this.order;
  }
  static qlv(seen0, order, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_77().olv_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.order = null;
    else
      $this.order = order;
    return $this;
  }
}
class Companion_78 {
  constructor() {
    Companion_instance_78 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rlv_1 = [lazy(tmp_0, UserDirectorySearchResponse$Companion$$childSerializers$_anonymous__u6z7kx), null];
  }
}
class $serializer_78 {
  constructor() {
    $serializer_instance_78 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.userdirectory.UserDirectorySearchResponse', this, 2);
    tmp0_serialDesc.m1a('results', true);
    tmp0_serialDesc.m1a('limited', true);
    this.slv_1 = tmp0_serialDesc;
  }
  tlv(encoder, value) {
    var tmp0_desc = this.slv_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_79().rlv_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.results;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.results);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.limited === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.limited);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.tlv(encoder, value instanceof UserDirectorySearchResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.slv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_79().rlv_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.g13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.w12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.g13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.w12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return UserDirectorySearchResponse.ulv(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.slv_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_79().rlv_1[0].y2(), BooleanSerializer_getInstance()];
  }
}
class UserDirectorySearchResponse {
  constructor() {
    Companion_getInstance_79();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.results = [];
    this.limited = false;
  }
  vlv(_set____db54di) {
    this.results = _set____db54di;
  }
  ils() {
    return this.results;
  }
  wlv(_set____db54di) {
    this.limited = _set____db54di;
  }
  llu() {
    return this.limited;
  }
  static ulv(seen0, results, limited, serializationConstructorMarker) {
    Companion_getInstance_79();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_78().slv_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.results = [];
    } else
      $this.results = results;
    if (0 === (seen0 & 2))
      $this.limited = false;
    else
      $this.limited = limited;
    return $this;
  }
}
class Companion_79 {}
class $serializer_79 {
  constructor() {
    $serializer_instance_79 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.userdirectory.UserDirectoryUser', this, 3);
    tmp0_serialDesc.m1a('user_id', true);
    tmp0_serialDesc.m1a('display_name', true);
    tmp0_serialDesc.m1a('avatar_url', true);
    this.xlv_1 = tmp0_serialDesc;
  }
  ylv(encoder, value) {
    var tmp0_desc = this.xlv_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.userId === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.userId);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.displayName == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.avatarUrl == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ylv(encoder, value instanceof UserDirectoryUser ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xlv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return UserDirectoryUser.zlv(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.xlv_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class UserDirectoryUser {
  constructor() {
    this.userId = '';
    this.displayName = null;
    this.avatarUrl = null;
  }
  m9n(_set____db54di) {
    this.userId = _set____db54di;
  }
  l91() {
    return this.userId;
  }
  p5z(_set____db54di) {
    this.displayName = _set____db54di;
  }
  q5z() {
    return this.displayName;
  }
  mak(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  nak() {
    return this.avatarUrl;
  }
  static zlv(seen0, userId, displayName, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_79().xlv_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.userId = '';
    else
      $this.userId = userId;
    if (0 === (seen0 & 2))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 4))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_80 {
  constructor() {
    Companion_instance_80 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.alw_1 = [tmp_1, lazy(tmp_2, VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2_0)];
  }
}
class $serializer_80 {
  constructor() {
    $serializer_instance_80 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.versions.VersionsGetResponse', this, 2);
    tmp0_serialDesc.m1a('versions', true);
    tmp0_serialDesc.m1a('unstable_features', true);
    this.blw_1 = tmp0_serialDesc;
  }
  clw(encoder, value) {
    var tmp0_desc = this.blw_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_81().alw_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.versions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.versions);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.unstableFeatures == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.unstableFeatures);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.clw(encoder, value instanceof VersionsGetResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.blw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_81().alw_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.g13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.g13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, tmp7_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return VersionsGetResponse.dlw(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.blw_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_81().alw_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].y2(), get_nullable(tmp0_cached[1].y2())];
  }
}
class VersionsGetResponse {
  constructor() {
    Companion_getInstance_81();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.versions = [];
    this.unstableFeatures = null;
  }
  elw(_set____db54di) {
    this.versions = _set____db54di;
  }
  sci() {
    return this.versions;
  }
  flw(_set____db54di) {
    this.unstableFeatures = _set____db54di;
  }
  glw() {
    return this.unstableFeatures;
  }
  static dlw(seen0, versions, unstableFeatures, serializationConstructorMarker) {
    Companion_getInstance_81();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_80().blw_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.versions = [];
    } else
      $this.versions = versions;
    if (0 === (seen0 & 2))
      $this.unstableFeatures = null;
    else
      $this.unstableFeatures = unstableFeatures;
    return $this;
  }
}
class Companion_81 {
  constructor() {
    Companion_instance_81 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.hlw_1 = [null, null, lazy(tmp_0, VoIPGetTurnServerResponse$Companion$$childSerializers$_anonymous__huuw5p), null];
  }
}
class $serializer_81 {
  constructor() {
    $serializer_instance_81 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.voip.VoIPGetTurnServerResponse', this, 4);
    tmp0_serialDesc.m1a('username', true);
    tmp0_serialDesc.m1a('password', true);
    tmp0_serialDesc.m1a('uris', true);
    tmp0_serialDesc.m1a('ttl', true);
    this.ilw_1 = tmp0_serialDesc;
  }
  jlw(encoder, value) {
    var tmp0_desc = this.ilw_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_82().hlw_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.username === '')) {
      tmp1_output.j14(tmp0_desc, 0, value.username);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.password === '')) {
      tmp1_output.j14(tmp0_desc, 1, value.password);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 2)) {
      tmp = true;
    } else {
      var tmp_0 = value.uris;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 2, tmp2_cached[2].y2(), value.uris);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.ttl === 0)) {
      tmp1_output.e14(tmp0_desc, 3, value.ttl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jlw(encoder, value instanceof VoIPGetTurnServerResponse ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ilw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_82().hlw_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.g13(tmp0_desc, 2, tmp9_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.z12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.g13(tmp0_desc, 2, tmp9_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.z12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return VoIPGetTurnServerResponse.klw(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.ilw_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_82().hlw_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].y2(), IntSerializer_getInstance()];
  }
}
class VoIPGetTurnServerResponse {
  constructor() {
    Companion_getInstance_82();
    this.username = '';
    this.password = '';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.uris = [];
    this.ttl = 0;
  }
  v9o(_set____db54di) {
    this.username = _set____db54di;
  }
  u9n() {
    return this.username;
  }
  llw(_set____db54di) {
    this.password = _set____db54di;
  }
  j45() {
    return this.password;
  }
  mlw(_set____db54di) {
    this.uris = _set____db54di;
  }
  n67() {
    return this.uris;
  }
  nlw(_set____db54di) {
    this.ttl = _set____db54di;
  }
  olw() {
    return this.ttl;
  }
  static klw(seen0, username, password, uris, ttl, serializationConstructorMarker) {
    Companion_getInstance_82();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_81().ilw_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.username = '';
    else
      $this.username = username;
    if (0 === (seen0 & 2))
      $this.password = '';
    else
      $this.password = password;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.uris = [];
    } else
      $this.uris = uris;
    if (0 === (seen0 & 8))
      $this.ttl = 0;
    else
      $this.ttl = ttl;
    return $this;
  }
}
class Companion_82 {}
class $serializer_82 {
  constructor() {
    $serializer_instance_82 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.entity.Room', this, 3);
    tmp0_serialDesc.m1a('room_id', false);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('topic', true);
    this.plw_1 = tmp0_serialDesc;
  }
  qlw(encoder, value) {
    var tmp0_desc = this.plw_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.roomId);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.topic == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.topic);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qlw(encoder, value instanceof Room ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.plw_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return Room.slw(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.plw_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Room {
  constructor() {
    this.name = null;
    this.topic = null;
  }
  blg(_set____db54di) {
    this.rlw_1 = _set____db54di;
  }
  al8() {
    var tmp = this.rlw_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('roomId');
    }
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  pfq(_set____db54di) {
    this.topic = _set____db54di;
  }
  qfq() {
    return this.topic;
  }
  static slw(seen0, roomId, name, topic, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_82().plw_1);
    }
    var $this = createThis(this);
    $this.rlw_1 = roomId;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.topic = null;
    else
      $this.topic = topic;
    return $this;
  }
  get roomId() {
    return this.al8();
  }
  set roomId(value) {
    this.blg(value);
  }
}
class Companion_83 {
  constructor() {
    this.tlw_1 = 'X-RateLimit-Limit';
    this.ulw_1 = 'X-RateLimit-Remaining';
    this.vlw_1 = 'X-RateLimit-Reset';
  }
  of(response) {
    try {
      var limit = response.e55_1.p4('X-RateLimit-Limit');
      var remaining = response.e55_1.p4('X-RateLimit-Remaining');
      var reset = response.e55_1.p4('X-RateLimit-Reset');
      // Inline function 'kotlin.also' call
      var this_0 = new RateLimit();
      var tmp;
      if (limit == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !limit.j1();
      }
      if (tmp === true) {
        this_0.limit = toInt(limit.m2(0));
      }
      var tmp_0;
      if (remaining == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !remaining.j1();
      }
      if (tmp_0 === true) {
        this_0.remaining = toInt(remaining.m2(0));
      }
      var tmp_1;
      if (reset == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !reset.j1();
      }
      if (tmp_1 === true) {
        this_0.reset = Companion_getInstance().yt(toLong(reset.m2(0)));
      }
      return this_0;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        return null;
      } else {
        throw $p;
      }
    }
  }
}
class RateLimit {
  constructor() {
    this.limit = 0;
    this.remaining = 0;
    this.reset = null;
  }
  yae(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  zae(_set____db54di) {
    this.remaining = _set____db54di;
  }
  p34() {
    return this.remaining;
  }
  jco(_set____db54di) {
    this.reset = _set____db54di;
  }
  q34() {
    return this.reset;
  }
}
class AbstractResourceImpl {
  constructor(uri) {
    this.ylw_1 = uri;
  }
  sco(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.u54(key, value);
    }
    return _this__u8e3s4;
  }
}
class AbstractAuthResourceImpl extends AbstractResourceImpl {
  constructor(uri, accessToken) {
    super(uri);
    this.xlw_1 = accessToken;
  }
  oco() {
    return 'Bearer ' + this.xlw_1;
  }
}
class AccountDataResourceImpl$getAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.zlw_1 = this$0;
    this.alx_1 = $request;
  }
  *blx($this$toBlocking, $completion) {
    return yield* this.zlw_1.tky(this.alx_1, $completion);
  }
  wd(p1, $completion) {
    return this.blx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl$setAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.clx_1 = this$0;
    this.dlx_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.clx_1.wky(this.dlx_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl$getRoomAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.flx_1 = this$0;
    this.glx_1 = $request;
  }
  *blx($this$toBlocking, $completion) {
    return yield* this.flx_1.zky(this.glx_1, $completion);
  }
  wd(p1, $completion) {
    return this.blx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl$setRoomAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.hlx_1 = this$0;
    this.ilx_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.hlx_1.ckz(this.ilx_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl extends AbstractAuthResourceImpl {
  *sky(request, $completion) {
    try {
      var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + request.userId + '/account_data/' + request.type).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
      if (response.d55_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new Response(response.h55());
        this_0.json = response.h55();
        return this_0;
      }
      throw MatrixException.rky(response.d55_1, response.h55());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  getAccountData(request) {
    return promisify(($completion) => this.sky(request, $completion));
  }
  *tky(request, $completion) {
    return this.getAccountData === protoOf(AccountDataResourceImpl).getAccountData ? (yield* this.sky(request, $completion)) : (yield* await_0(this.getAccountData(request), $completion));
  }
  uky(request) {
    return toBlocking(AccountDataResourceImpl$getAccountDataBlocking$slambda_0(this, request));
  }
  *vky(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + request.userId + '/account_data/' + request.type).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1);
        var tmp0_elvis_lhs = request.data;
        var response = yield* tmp.m53(tmp0_elvis_lhs == null ? '{}' : tmp0_elvis_lhs).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setAccountData(request) {
    return promisify(($completion) => this.vky(request, $completion));
  }
  *wky(request, $completion) {
    return this.setAccountData === protoOf(AccountDataResourceImpl).setAccountData ? (yield* this.vky(request, $completion)) : (yield* await_0(this.setAccountData(request), $completion));
  }
  xky(request) {
    return toBlocking(AccountDataResourceImpl$setAccountDataBlocking$slambda_0(this, request));
  }
  *yky(request, $completion) {
    try {
      var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + request.userId + '/rooms/' + request.roomId + '/account_data/' + request.type).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
      if (response.d55_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new Response(response.h55());
        this_0.json = response.h55();
        return this_0;
      }
      throw MatrixException.rky(response.d55_1, response.h55());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  getRoomAccountData(request) {
    return promisify(($completion) => this.yky(request, $completion));
  }
  *zky(request, $completion) {
    return this.getRoomAccountData === protoOf(AccountDataResourceImpl).getRoomAccountData ? (yield* this.yky(request, $completion)) : (yield* await_0(this.getRoomAccountData(request), $completion));
  }
  akz(request) {
    return toBlocking(AccountDataResourceImpl$getRoomAccountDataBlocking$slambda_0(this, request));
  }
  *bkz(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + request.userId + '/rooms/' + request.roomId + '/account_data/' + request.type).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1);
        var tmp0_elvis_lhs = request.data;
        var response = yield* tmp.m53(tmp0_elvis_lhs == null ? '{}' : tmp0_elvis_lhs).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setRoomAccountData(request) {
    return promisify(($completion) => this.bkz(request, $completion));
  }
  *ckz(request, $completion) {
    return this.setRoomAccountData === protoOf(AccountDataResourceImpl).setRoomAccountData ? (yield* this.bkz(request, $completion)) : (yield* await_0(this.setRoomAccountData(request), $completion));
  }
  dkz(request) {
    return toBlocking(AccountDataResourceImpl$setRoomAccountDataBlocking$slambda_0(this, request));
  }
}
class Companion_84 {}
class $serializer_83 {
  constructor() {
    $serializer_instance_83 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.AccountsResourceImpl.RegisterBody', this, 7);
    tmp0_serialDesc.m1a('username', true);
    tmp0_serialDesc.m1a('password', true);
    tmp0_serialDesc.m1a('initial_device_display_name', true);
    tmp0_serialDesc.m1a('auth', true);
    tmp0_serialDesc.m1a('session', true);
    tmp0_serialDesc.m1a('did', true);
    tmp0_serialDesc.m1a('bind_email', true);
    this.mlx_1 = tmp0_serialDesc;
  }
  nlx(encoder, value) {
    var tmp0_desc = this.mlx_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.olx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.olx_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.plx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.plx_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.qlx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.qlx_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.rlx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.rlx_1);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.slx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.slx_1);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.tlx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.tlx_1);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.ulx_1 == null)) {
      tmp1_output.m14(tmp0_desc, 6, BooleanSerializer_getInstance(), value.ulx_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nlx(encoder, value instanceof RegisterBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mlx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return RegisterBody.vlx(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.mlx_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_85 {}
class $serializer_84 {
  constructor() {
    $serializer_instance_84 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.AccountsResourceImpl.ChangePasswordBody', this, 4);
    tmp0_serialDesc.m1a('auth', false);
    tmp0_serialDesc.m1a('new_password', false);
    tmp0_serialDesc.m1a('logout_devices', true);
    tmp0_serialDesc.m1a('logout_devices_all', true);
    this.wlx_1 = tmp0_serialDesc;
  }
  xlx(encoder, value) {
    var tmp0_desc = this.wlx_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_85(), value.ylx_1);
    tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.zlx_1);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.aly_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, BooleanSerializer_getInstance(), value.aly_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.bly_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.bly_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xlx(encoder, value instanceof ChangePasswordBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wlx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.g13(tmp0_desc, 0, $serializer_getInstance_85(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.g13(tmp0_desc, 0, $serializer_getInstance_85(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return ChangePasswordBody.cly(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.wlx_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_85(), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_86 {}
class $serializer_85 {
  constructor() {
    $serializer_instance_85 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.AccountsResourceImpl.ChangePasswordAuth', this, 2);
    tmp0_serialDesc.m1a('type', false);
    tmp0_serialDesc.m1a('password', false);
    this.dly_1 = tmp0_serialDesc;
  }
  ely(encoder, value) {
    var tmp0_desc = this.dly_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.fly_1);
    tmp1_output.j14(tmp0_desc, 1, value.gly_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ely(encoder, value instanceof ChangePasswordAuth ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dly_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return ChangePasswordAuth.hly(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.dly_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class RegisterBody {
  constructor(username, password, initialDeviceDisplayName, auth, session, did, bindEmail) {
    username = username === VOID ? null : username;
    password = password === VOID ? null : password;
    initialDeviceDisplayName = initialDeviceDisplayName === VOID ? null : initialDeviceDisplayName;
    auth = auth === VOID ? null : auth;
    session = session === VOID ? null : session;
    did = did === VOID ? null : did;
    bindEmail = bindEmail === VOID ? null : bindEmail;
    this.olx_1 = username;
    this.plx_1 = password;
    this.qlx_1 = initialDeviceDisplayName;
    this.rlx_1 = auth;
    this.slx_1 = session;
    this.tlx_1 = did;
    this.ulx_1 = bindEmail;
  }
  toString() {
    return 'RegisterBody(username=' + this.olx_1 + ', password=' + this.plx_1 + ', initialDeviceDisplayName=' + this.qlx_1 + ', auth=' + this.rlx_1 + ', session=' + this.slx_1 + ', did=' + this.tlx_1 + ', bindEmail=' + this.ulx_1 + ')';
  }
  hashCode() {
    var result = this.olx_1 == null ? 0 : getStringHashCode(this.olx_1);
    result = imul(result, 31) + (this.plx_1 == null ? 0 : getStringHashCode(this.plx_1)) | 0;
    result = imul(result, 31) + (this.qlx_1 == null ? 0 : getStringHashCode(this.qlx_1)) | 0;
    result = imul(result, 31) + (this.rlx_1 == null ? 0 : getStringHashCode(this.rlx_1)) | 0;
    result = imul(result, 31) + (this.slx_1 == null ? 0 : getStringHashCode(this.slx_1)) | 0;
    result = imul(result, 31) + (this.tlx_1 == null ? 0 : getStringHashCode(this.tlx_1)) | 0;
    result = imul(result, 31) + (this.ulx_1 == null ? 0 : getBooleanHashCode(this.ulx_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RegisterBody))
      return false;
    if (!(this.olx_1 == other.olx_1))
      return false;
    if (!(this.plx_1 == other.plx_1))
      return false;
    if (!(this.qlx_1 == other.qlx_1))
      return false;
    if (!(this.rlx_1 == other.rlx_1))
      return false;
    if (!(this.slx_1 == other.slx_1))
      return false;
    if (!(this.tlx_1 == other.tlx_1))
      return false;
    if (!(this.ulx_1 == other.ulx_1))
      return false;
    return true;
  }
  static vlx(seen0, username, password, initialDeviceDisplayName, auth, session, did, bindEmail, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_83().mlx_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.olx_1 = null;
    else
      $this.olx_1 = username;
    if (0 === (seen0 & 2))
      $this.plx_1 = null;
    else
      $this.plx_1 = password;
    if (0 === (seen0 & 4))
      $this.qlx_1 = null;
    else
      $this.qlx_1 = initialDeviceDisplayName;
    if (0 === (seen0 & 8))
      $this.rlx_1 = null;
    else
      $this.rlx_1 = auth;
    if (0 === (seen0 & 16))
      $this.slx_1 = null;
    else
      $this.slx_1 = session;
    if (0 === (seen0 & 32))
      $this.tlx_1 = null;
    else
      $this.tlx_1 = did;
    if (0 === (seen0 & 64))
      $this.ulx_1 = null;
    else
      $this.ulx_1 = bindEmail;
    return $this;
  }
}
class ChangePasswordBody {
  constructor(auth, newPassword, logoutDevices, logoutDevicesAll) {
    logoutDevices = logoutDevices === VOID ? null : logoutDevices;
    logoutDevicesAll = logoutDevicesAll === VOID ? null : logoutDevicesAll;
    this.ylx_1 = auth;
    this.zlx_1 = newPassword;
    this.aly_1 = logoutDevices;
    this.bly_1 = logoutDevicesAll;
  }
  toString() {
    return 'ChangePasswordBody(auth=' + this.ylx_1.toString() + ', newPassword=' + this.zlx_1 + ', logoutDevices=' + this.aly_1 + ', logoutDevicesAll=' + this.bly_1 + ')';
  }
  hashCode() {
    var result = this.ylx_1.hashCode();
    result = imul(result, 31) + (this.zlx_1 == null ? 0 : getStringHashCode(this.zlx_1)) | 0;
    result = imul(result, 31) + (this.aly_1 == null ? 0 : getBooleanHashCode(this.aly_1)) | 0;
    result = imul(result, 31) + (this.bly_1 == null ? 0 : getBooleanHashCode(this.bly_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangePasswordBody))
      return false;
    if (!this.ylx_1.equals(other.ylx_1))
      return false;
    if (!(this.zlx_1 == other.zlx_1))
      return false;
    if (!(this.aly_1 == other.aly_1))
      return false;
    if (!(this.bly_1 == other.bly_1))
      return false;
    return true;
  }
  static cly(seen0, auth, newPassword, logoutDevices, logoutDevicesAll, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_84().wlx_1);
    }
    var $this = createThis(this);
    $this.ylx_1 = auth;
    $this.zlx_1 = newPassword;
    if (0 === (seen0 & 4))
      $this.aly_1 = null;
    else
      $this.aly_1 = logoutDevices;
    if (0 === (seen0 & 8))
      $this.bly_1 = null;
    else
      $this.bly_1 = logoutDevicesAll;
    return $this;
  }
}
class ChangePasswordAuth {
  constructor(type, password) {
    this.fly_1 = type;
    this.gly_1 = password;
  }
  toString() {
    return 'ChangePasswordAuth(type=' + this.fly_1 + ', password=' + this.gly_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.fly_1);
    result = imul(result, 31) + getStringHashCode(this.gly_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangePasswordAuth))
      return false;
    if (!(this.fly_1 === other.fly_1))
      return false;
    if (!(this.gly_1 === other.gly_1))
      return false;
    return true;
  }
  static hly(seen0, type, password, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_85().dly_1);
    }
    var $this = createThis(this);
    $this.fly_1 = type;
    $this.gly_1 = password;
    return $this;
  }
}
class AccountsResourceImpl$whoamiBlocking$slambda {
  constructor(this$0) {
    this.ily_1 = this$0;
  }
  *jly($this$toBlocking, $completion) {
    return yield* this.ily_1.ekz($completion);
  }
  wd(p1, $completion) {
    return this.jly((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$logoutBlocking$slambda {
  constructor(this$0) {
    this.kly_1 = this$0;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.kly_1.ikz($completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$logoutAllBlocking$slambda {
  constructor(this$0) {
    this.lly_1 = this$0;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.lly_1.lkz($completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$registerBlocking$slambda {
  constructor(this$0, $request) {
    this.mly_1 = this$0;
    this.nly_1 = $request;
  }
  *oly($this$toBlocking, $completion) {
    return yield* this.mly_1.okz(this.nly_1, $completion);
  }
  wd(p1, $completion) {
    return this.oly((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$changePasswordBlocking$slambda {
  constructor(this$0, $request) {
    this.ply_1 = this$0;
    this.qly_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.ply_1.rkz(this.qly_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl extends AbstractAuthResourceImpl {
  *fkz($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/account/whoami').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccountsWhoamiResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  whoami() {
    return promisify(($completion) => this.fkz($completion));
  }
  *ekz($completion) {
    return this.whoami === protoOf(AccountsResourceImpl).whoami ? (yield* this.fkz($completion)) : (yield* await_0(this.whoami(), $completion));
  }
  gkz() {
    return toBlocking(AccountsResourceImpl$whoamiBlocking$slambda_0(this));
  }
  *hkz($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/logout').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53('{}').z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  logout() {
    return promisify(($completion) => this.hkz($completion));
  }
  *ikz($completion) {
    return this.logout === protoOf(AccountsResourceImpl).logout ? (yield* this.hkz($completion)) : (yield* await_0(this.logout(), $completion));
  }
  jkz() {
    return toBlocking(AccountsResourceImpl$logoutBlocking$slambda_0(this));
  }
  *kkz($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/logout/all').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53('{}').z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  logoutAll() {
    return promisify(($completion) => this.kkz($completion));
  }
  *lkz($completion) {
    return this.logoutAll === protoOf(AccountsResourceImpl).logoutAll ? (yield* this.kkz($completion)) : (yield* await_0(this.logoutAll(), $completion));
  }
  mkz() {
    return toBlocking(AccountsResourceImpl$logoutAllBlocking$slambda_0(this));
  }
  *nkz(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new RegisterBody(request.username, request.password, request.initialDeviceDisplayName, request.auth, request.session, request.did, request.bindEmail);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(RegisterBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/register').o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RegisterResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  register(request) {
    return promisify(($completion) => this.nkz(request, $completion));
  }
  *okz(request, $completion) {
    return this.register === protoOf(AccountsResourceImpl).register ? (yield* this.nkz(request, $completion)) : (yield* await_0(this.register(request), $completion));
  }
  pkz(request) {
    return toBlocking(AccountsResourceImpl$registerBlocking$slambda_0(this, request));
  }
  *qkz(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.auth;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new ChangePasswordBody(new ChangePasswordAuth('m.login.password', tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs), request.newPassword, request.logoutDevices, request.logoutDevicesAll);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(ChangePasswordBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/account/password').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  changePassword(request) {
    return promisify(($completion) => this.qkz(request, $completion));
  }
  *rkz(request, $completion) {
    return this.changePassword === protoOf(AccountsResourceImpl).changePassword ? (yield* this.qkz(request, $completion)) : (yield* await_0(this.changePassword(request), $completion));
  }
  skz(request) {
    return toBlocking(AccountsResourceImpl$changePasswordBlocking$slambda_0(this, request));
  }
}
class CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda {
  constructor(this$0) {
    this.uly_1 = this$0;
  }
  *vly($this$toBlocking, $completion) {
    return yield* this.uly_1.ukz($completion);
  }
  wd(p1, $completion) {
    return this.vly((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CapabilitiesResourceImpl extends AbstractAuthResourceImpl {
  *tkz($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/capabilities').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(CapabilitiesGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getCapabilities() {
    return promisify(($completion) => this.tkz($completion));
  }
  *ukz($completion) {
    return this.getCapabilities === protoOf(CapabilitiesResourceImpl).getCapabilities ? (yield* this.tkz($completion)) : (yield* await_0(this.getCapabilities(), $completion));
  }
  vkz() {
    return toBlocking(CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda_0(this));
  }
}
class Companion_87 {}
class $serializer_86 {
  constructor() {
    $serializer_instance_86 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.DevicesResourceImpl.UpdateDeviceBody', this, 1);
    tmp0_serialDesc.m1a('display_name', true);
    this.yly_1 = tmp0_serialDesc;
  }
  zly(encoder, value) {
    var tmp0_desc = this.yly_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.alz_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.alz_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zly(encoder, value instanceof UpdateDeviceBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.yly_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return UpdateDeviceBody.blz(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.yly_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class UpdateDeviceBody {
  constructor(displayName) {
    displayName = displayName === VOID ? null : displayName;
    this.alz_1 = displayName;
  }
  toString() {
    return 'UpdateDeviceBody(displayName=' + this.alz_1 + ')';
  }
  hashCode() {
    return this.alz_1 == null ? 0 : getStringHashCode(this.alz_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof UpdateDeviceBody))
      return false;
    if (!(this.alz_1 == other.alz_1))
      return false;
    return true;
  }
  static blz(seen0, displayName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_86().yly_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.alz_1 = null;
    else
      $this.alz_1 = displayName;
    return $this;
  }
}
class DevicesResourceImpl$getDevicesBlocking$slambda {
  constructor(this$0) {
    this.clz_1 = this$0;
  }
  *dlz($this$toBlocking, $completion) {
    return yield* this.clz_1.xkz($completion);
  }
  wd(p1, $completion) {
    return this.dlz((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl$getDeviceBlocking$slambda {
  constructor(this$0, $deviceId) {
    this.elz_1 = this$0;
    this.flz_1 = $deviceId;
  }
  *glz($this$toBlocking, $completion) {
    return yield* this.elz_1.al0(this.flz_1, $completion);
  }
  wd(p1, $completion) {
    return this.glz((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl$updateDeviceBlocking$slambda {
  constructor(this$0, $request) {
    this.hlz_1 = this$0;
    this.ilz_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.hlz_1.dl0(this.ilz_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl$deleteDeviceBlocking$slambda {
  constructor(this$0, $request) {
    this.jlz_1 = this$0;
    this.klz_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.jlz_1.gl0(this.klz_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl extends AbstractAuthResourceImpl {
  *wkz($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/devices').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DevicesGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getDevices() {
    return promisify(($completion) => this.wkz($completion));
  }
  *xkz($completion) {
    return this.getDevices === protoOf(DevicesResourceImpl).getDevices ? (yield* this.wkz($completion)) : (yield* await_0(this.getDevices(), $completion));
  }
  ykz() {
    return toBlocking(DevicesResourceImpl$getDevicesBlocking$slambda_0(this));
  }
  *zkz(deviceId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/devices/' + deviceId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DevicesGetDeviceResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getDevice(deviceId) {
    return promisify(($completion) => this.zkz(deviceId, $completion));
  }
  *al0(deviceId, $completion) {
    return this.getDevice === protoOf(DevicesResourceImpl).getDevice ? (yield* this.zkz(deviceId, $completion)) : (yield* await_0(this.getDevice(deviceId), $completion));
  }
  bl0(deviceId) {
    return toBlocking(DevicesResourceImpl$getDeviceBlocking$slambda_0(this, deviceId));
  }
  *cl0(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.deviceId;
        var deviceId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new UpdateDeviceBody(request.displayName);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(UpdateDeviceBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/devices/' + deviceId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  updateDevice(request) {
    return promisify(($completion) => this.cl0(request, $completion));
  }
  *dl0(request, $completion) {
    return this.updateDevice === protoOf(DevicesResourceImpl).updateDevice ? (yield* this.cl0(request, $completion)) : (yield* await_0(this.updateDevice(request), $completion));
  }
  el0(request) {
    return toBlocking(DevicesResourceImpl$updateDeviceBlocking$slambda_0(this, request));
  }
  *fl0(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.deviceId;
        var deviceId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/devices/' + deviceId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteDevice(request) {
    return promisify(($completion) => this.fl0(request, $completion));
  }
  *gl0(request, $completion) {
    return this.deleteDevice === protoOf(DevicesResourceImpl).deleteDevice ? (yield* this.fl0(request, $completion)) : (yield* await_0(this.deleteDevice(request), $completion));
  }
  hl0(request) {
    return toBlocking(DevicesResourceImpl$deleteDeviceBlocking$slambda_0(this, request));
  }
}
class Companion_88 {}
class $serializer_87 {
  constructor() {
    $serializer_instance_87 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.DirectoryResourceImpl.SetAliasBody', this, 1);
    tmp0_serialDesc.m1a('room_id', false);
    this.nlz_1 = tmp0_serialDesc;
  }
  olz(encoder, value) {
    var tmp0_desc = this.nlz_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.plz_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.olz(encoder, value instanceof SetAliasBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nlz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SetAliasBody.qlz(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.nlz_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class SetAliasBody {
  constructor(roomId) {
    this.plz_1 = roomId;
  }
  toString() {
    return 'SetAliasBody(roomId=' + this.plz_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.plz_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetAliasBody))
      return false;
    if (!(this.plz_1 === other.plz_1))
      return false;
    return true;
  }
  static qlz(seen0, roomId, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_87().nlz_1);
    }
    var $this = createThis(this);
    $this.plz_1 = roomId;
    return $this;
  }
}
class DirectoryResourceImpl$resolveAliasBlocking$slambda {
  constructor(this$0, $roomAlias) {
    this.rlz_1 = this$0;
    this.slz_1 = $roomAlias;
  }
  *tlz($this$toBlocking, $completion) {
    return yield* this.rlz_1.jl0(this.slz_1, $completion);
  }
  wd(p1, $completion) {
    return this.tlz((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl$setAliasBlocking$slambda {
  constructor(this$0, $request) {
    this.ulz_1 = this$0;
    this.vlz_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.ulz_1.ml0(this.vlz_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl$deleteAliasBlocking$slambda {
  constructor(this$0, $roomAlias) {
    this.wlz_1 = this$0;
    this.xlz_1 = $roomAlias;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.wlz_1.pl0(this.xlz_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl$getPublicRoomsBlocking$slambda {
  constructor(this$0, $request) {
    this.ylz_1 = this$0;
    this.zlz_1 = $request;
  }
  *am0($this$toBlocking, $completion) {
    return yield* this.ylz_1.sl0(this.zlz_1, $completion);
  }
  wd(p1, $completion) {
    return this.am0((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl extends AbstractAuthResourceImpl {
  *il0(roomAlias, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/directory/room/' + encodeURLPathPart(roomAlias)).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DirectoryResolveAliasResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  resolveAlias(roomAlias) {
    return promisify(($completion) => this.il0(roomAlias, $completion));
  }
  *jl0(roomAlias, $completion) {
    return this.resolveAlias === protoOf(DirectoryResourceImpl).resolveAlias ? (yield* this.il0(roomAlias, $completion)) : (yield* await_0(this.resolveAlias(roomAlias), $completion));
  }
  kl0(roomAlias) {
    return toBlocking(DirectoryResourceImpl$resolveAliasBlocking$slambda_0(this, roomAlias));
  }
  *ll0(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomAlias;
        var roomAlias = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.roomId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetAliasBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetAliasBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/directory/room/' + encodeURLPathPart(roomAlias)).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setAlias(request) {
    return promisify(($completion) => this.ll0(request, $completion));
  }
  *ml0(request, $completion) {
    return this.setAlias === protoOf(DirectoryResourceImpl).setAlias ? (yield* this.ll0(request, $completion)) : (yield* await_0(this.setAlias(request), $completion));
  }
  nl0(request) {
    return toBlocking(DirectoryResourceImpl$setAliasBlocking$slambda_0(this, request));
  }
  *ol0(roomAlias, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/directory/room/' + encodeURLPathPart(roomAlias)).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteAlias(roomAlias) {
    return promisify(($completion) => this.ol0(roomAlias, $completion));
  }
  *pl0(roomAlias, $completion) {
    return this.deleteAlias === protoOf(DirectoryResourceImpl).deleteAlias ? (yield* this.ol0(roomAlias, $completion)) : (yield* await_0(this.deleteAlias(roomAlias), $completion));
  }
  ql0(roomAlias) {
    return toBlocking(DirectoryResourceImpl$deleteAliasBlocking$slambda_0(this, roomAlias));
  }
  *rl0(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/publicRooms').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'limit', request.limit), 'since', request.since), 'server', request.server).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DirectoryGetPublicRoomsResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPublicRooms(request) {
    return promisify(($completion) => this.rl0(request, $completion));
  }
  *sl0(request, $completion) {
    return this.getPublicRooms === protoOf(DirectoryResourceImpl).getPublicRooms ? (yield* this.rl0(request, $completion)) : (yield* await_0(this.getPublicRooms(request), $completion));
  }
  tl0(request) {
    return toBlocking(DirectoryResourceImpl$getPublicRoomsBlocking$slambda_0(this, request));
  }
}
class EventsResourceImpl$getEventBlocking$slambda {
  constructor(this$0, $roomId, $eventId) {
    this.dm0_1 = this$0;
    this.em0_1 = $roomId;
    this.fm0_1 = $eventId;
  }
  *gm0($this$toBlocking, $completion) {
    return yield* this.dm0_1.ul0(this.em0_1, this.fm0_1, $completion);
  }
  wd(p1, $completion) {
    return this.gm0((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class EventsResourceImpl$getContextBlocking$slambda {
  constructor(this$0, $request) {
    this.hm0_1 = this$0;
    this.im0_1 = $request;
  }
  *jm0($this$toBlocking, $completion) {
    return yield* this.hm0_1.vl0(this.im0_1, $completion);
  }
  wd(p1, $completion) {
    return this.jm0((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class EventsResourceImpl extends AbstractAuthResourceImpl {
  *wl0(roomId, eventId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/event/' + eventId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(EventsGetEventResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getEvent(roomId, eventId) {
    return promisify(($completion) => this.wl0(roomId, eventId, $completion));
  }
  *ul0(roomId, eventId, $completion) {
    return this.getEvent === protoOf(EventsResourceImpl).getEvent ? (yield* this.wl0(roomId, eventId, $completion)) : (yield* await_0(this.getEvent(roomId, eventId), $completion));
  }
  xl0(roomId, eventId) {
    return toBlocking(EventsResourceImpl$getEventBlocking$slambda_0(this, roomId, eventId));
  }
  *yl0(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + request.roomId + '/context/' + request.eventId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'limit', request.limit), 'filter', request.filter).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(EventsGetContextResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getContext(request) {
    return promisify(($completion) => this.yl0(request, $completion));
  }
  *vl0(request, $completion) {
    return this.getContext === protoOf(EventsResourceImpl).getContext ? (yield* this.yl0(request, $completion)) : (yield* await_0(this.getContext(request), $completion));
  }
  zl0(request) {
    return toBlocking(EventsResourceImpl$getContextBlocking$slambda_0(this, request));
  }
}
class Companion_89 {}
class $serializer_88 {
  constructor() {
    $serializer_instance_88 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.FilterResourceImpl.CreateFilterBody', this, 1);
    tmp0_serialDesc.m1a('room', true);
    this.mm0_1 = tmp0_serialDesc;
  }
  nm0(encoder, value) {
    var tmp0_desc = this.mm0_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.om0_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_89(), value.om0_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nm0(encoder, value instanceof CreateFilterBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mm0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_89(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, $serializer_getInstance_89(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return CreateFilterBody.pm0(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.mm0_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_89())];
  }
}
class Companion_90 {
  constructor() {
    Companion_instance_90 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qm0_1 = [tmp_1, lazy(tmp_2, FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7_0), null, null];
  }
}
class $serializer_89 {
  constructor() {
    $serializer_instance_89 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.FilterResourceImpl.CreateFilterRoomFilter', this, 4);
    tmp0_serialDesc.m1a('rooms', true);
    tmp0_serialDesc.m1a('not_rooms', true);
    tmp0_serialDesc.m1a('include_leave', true);
    tmp0_serialDesc.m1a('timeline', true);
    this.rm0_1 = tmp0_serialDesc;
  }
  sm0(encoder, value) {
    var tmp0_desc = this.rm0_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_91().qm0_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.tm0_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.tm0_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.um0_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.um0_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.vm0_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, BooleanSerializer_getInstance(), value.vm0_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.wm0_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, $serializer_getInstance_90(), value.wm0_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sm0(encoder, value instanceof CreateFilterRoomFilter ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rm0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_91().qm0_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, tmp9_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, tmp9_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, $serializer_getInstance_90(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, tmp9_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, tmp9_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, $serializer_getInstance_90(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return CreateFilterRoomFilter.xm0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.rm0_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_91().qm0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_90())];
  }
}
class Companion_91 {
  constructor() {
    Companion_instance_91 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ym0_1 = [tmp_1, tmp_3, tmp_5, lazy(tmp_6, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_2), null];
  }
}
class $serializer_90 {
  constructor() {
    $serializer_instance_90 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.FilterResourceImpl.CreateFilterRoomEventFilter', this, 5);
    tmp0_serialDesc.m1a('types', true);
    tmp0_serialDesc.m1a('not_types', true);
    tmp0_serialDesc.m1a('senders', true);
    tmp0_serialDesc.m1a('not_senders', true);
    tmp0_serialDesc.m1a('limit', true);
    this.zm0_1 = tmp0_serialDesc;
  }
  am1(encoder, value) {
    var tmp0_desc = this.zm0_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_92().ym0_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.bm1_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.bm1_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.cm1_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.cm1_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.dm1_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.dm1_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.em1_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.em1_1);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.fm1_1 == null)) {
      tmp1_output.m14(tmp0_desc, 4, IntSerializer_getInstance(), value.fm1_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.am1(encoder, value instanceof CreateFilterRoomEventFilter ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zm0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    var tmp10_cached = Companion_getInstance_92().ym0_1;
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, tmp10_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, tmp10_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, tmp10_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, tmp10_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, tmp10_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, tmp10_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, tmp10_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, tmp10_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return CreateFilterRoomEventFilter.gm1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.zm0_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_92().ym0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2()), get_nullable(tmp0_cached[2].y2()), get_nullable(tmp0_cached[3].y2()), get_nullable(IntSerializer_getInstance())];
  }
}
class CreateFilterBody {
  constructor(room) {
    room = room === VOID ? null : room;
    this.om0_1 = room;
  }
  toString() {
    return 'CreateFilterBody(room=' + toString(this.om0_1) + ')';
  }
  hashCode() {
    return this.om0_1 == null ? 0 : this.om0_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateFilterBody))
      return false;
    if (!equals(this.om0_1, other.om0_1))
      return false;
    return true;
  }
  static pm0(seen0, room, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_88().mm0_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.om0_1 = null;
    else
      $this.om0_1 = room;
    return $this;
  }
}
class CreateFilterRoomFilter {
  constructor(rooms, notRooms, includeLeave, timeline) {
    Companion_getInstance_91();
    rooms = rooms === VOID ? null : rooms;
    notRooms = notRooms === VOID ? null : notRooms;
    includeLeave = includeLeave === VOID ? null : includeLeave;
    timeline = timeline === VOID ? null : timeline;
    this.tm0_1 = rooms;
    this.um0_1 = notRooms;
    this.vm0_1 = includeLeave;
    this.wm0_1 = timeline;
  }
  toString() {
    return 'CreateFilterRoomFilter(rooms=' + toString_0(this.tm0_1) + ', notRooms=' + toString_0(this.um0_1) + ', includeLeave=' + this.vm0_1 + ', timeline=' + toString(this.wm0_1) + ')';
  }
  hashCode() {
    var result = this.tm0_1 == null ? 0 : hashCode(this.tm0_1);
    result = imul(result, 31) + (this.um0_1 == null ? 0 : hashCode(this.um0_1)) | 0;
    result = imul(result, 31) + (this.vm0_1 == null ? 0 : getBooleanHashCode(this.vm0_1)) | 0;
    result = imul(result, 31) + (this.wm0_1 == null ? 0 : this.wm0_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateFilterRoomFilter))
      return false;
    if (!equals(this.tm0_1, other.tm0_1))
      return false;
    if (!equals(this.um0_1, other.um0_1))
      return false;
    if (!(this.vm0_1 == other.vm0_1))
      return false;
    if (!equals(this.wm0_1, other.wm0_1))
      return false;
    return true;
  }
  static xm0(seen0, rooms, notRooms, includeLeave, timeline, serializationConstructorMarker) {
    Companion_getInstance_91();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_89().rm0_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.tm0_1 = null;
    else
      $this.tm0_1 = rooms;
    if (0 === (seen0 & 2))
      $this.um0_1 = null;
    else
      $this.um0_1 = notRooms;
    if (0 === (seen0 & 4))
      $this.vm0_1 = null;
    else
      $this.vm0_1 = includeLeave;
    if (0 === (seen0 & 8))
      $this.wm0_1 = null;
    else
      $this.wm0_1 = timeline;
    return $this;
  }
}
class CreateFilterRoomEventFilter {
  constructor(types, notTypes, senders, notSenders, limit) {
    Companion_getInstance_92();
    types = types === VOID ? null : types;
    notTypes = notTypes === VOID ? null : notTypes;
    senders = senders === VOID ? null : senders;
    notSenders = notSenders === VOID ? null : notSenders;
    limit = limit === VOID ? null : limit;
    this.bm1_1 = types;
    this.cm1_1 = notTypes;
    this.dm1_1 = senders;
    this.em1_1 = notSenders;
    this.fm1_1 = limit;
  }
  toString() {
    return 'CreateFilterRoomEventFilter(types=' + toString_0(this.bm1_1) + ', notTypes=' + toString_0(this.cm1_1) + ', senders=' + toString_0(this.dm1_1) + ', notSenders=' + toString_0(this.em1_1) + ', limit=' + this.fm1_1 + ')';
  }
  hashCode() {
    var result = this.bm1_1 == null ? 0 : hashCode(this.bm1_1);
    result = imul(result, 31) + (this.cm1_1 == null ? 0 : hashCode(this.cm1_1)) | 0;
    result = imul(result, 31) + (this.dm1_1 == null ? 0 : hashCode(this.dm1_1)) | 0;
    result = imul(result, 31) + (this.em1_1 == null ? 0 : hashCode(this.em1_1)) | 0;
    result = imul(result, 31) + (this.fm1_1 == null ? 0 : this.fm1_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateFilterRoomEventFilter))
      return false;
    if (!equals(this.bm1_1, other.bm1_1))
      return false;
    if (!equals(this.cm1_1, other.cm1_1))
      return false;
    if (!equals(this.dm1_1, other.dm1_1))
      return false;
    if (!equals(this.em1_1, other.em1_1))
      return false;
    if (!(this.fm1_1 == other.fm1_1))
      return false;
    return true;
  }
  static gm1(seen0, types, notTypes, senders, notSenders, limit, serializationConstructorMarker) {
    Companion_getInstance_92();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_90().zm0_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.bm1_1 = null;
    else
      $this.bm1_1 = types;
    if (0 === (seen0 & 2))
      $this.cm1_1 = null;
    else
      $this.cm1_1 = notTypes;
    if (0 === (seen0 & 4))
      $this.dm1_1 = null;
    else
      $this.dm1_1 = senders;
    if (0 === (seen0 & 8))
      $this.em1_1 = null;
    else
      $this.em1_1 = notSenders;
    if (0 === (seen0 & 16))
      $this.fm1_1 = null;
    else
      $this.fm1_1 = limit;
    return $this;
  }
}
class FilterResourceImpl$createFilterBlocking$slambda {
  constructor(this$0, $request) {
    this.hm1_1 = this$0;
    this.im1_1 = $request;
  }
  *jm1($this$toBlocking, $completion) {
    return yield* this.hm1_1.bl1(this.im1_1, $completion);
  }
  wd(p1, $completion) {
    return this.jm1((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FilterResourceImpl$getFilterBlocking$slambda {
  constructor(this$0, $request) {
    this.km1_1 = this$0;
    this.lm1_1 = $request;
  }
  *mm1($this$toBlocking, $completion) {
    return yield* this.km1_1.el1(this.lm1_1, $completion);
  }
  wd(p1, $completion) {
    return this.mm1((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FilterResourceImpl$deleteFilterBlocking$slambda {
  constructor(this$0, $request) {
    this.nm1_1 = this$0;
    this.om1_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.nm1_1.hl1(this.om1_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FilterResourceImpl extends AbstractAuthResourceImpl {
  *al1(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp;
        if (!(request.rooms == null) || !(request.notRooms == null) || !(request.limit == null) || !(request.eventTypes == null) || !(request.notEventTypes == null) || !(request.includeLeave == null)) {
          var tmp_0 = request.rooms;
          var tmp_1 = request.notRooms;
          var tmp_2 = request.includeLeave;
          var tmp_3;
          if (!(request.eventTypes == null) || !(request.notEventTypes == null) || !(request.senders == null) || !(request.notSenders == null) || !(request.limit == null)) {
            tmp_3 = new CreateFilterRoomEventFilter(request.eventTypes, request.notEventTypes, request.senders, request.notSenders, request.limit);
          } else {
            tmp_3 = null;
          }
          tmp = new CreateFilterRoomFilter(tmp_0, tmp_1, tmp_2, tmp_3);
        } else {
          tmp = null;
        }
        var roomFilter = tmp;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new CreateFilterBody(roomFilter);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(CreateFilterBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + userId + '/filter').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(FilterCreateResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createFilter(request) {
    return promisify(($completion) => this.al1(request, $completion));
  }
  *bl1(request, $completion) {
    return this.createFilter === protoOf(FilterResourceImpl).createFilter ? (yield* this.al1(request, $completion)) : (yield* await_0(this.createFilter(request), $completion));
  }
  cl1(request) {
    return toBlocking(FilterResourceImpl$createFilterBlocking$slambda_0(this, request));
  }
  *dl1(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.filterId;
        var filterId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + userId + '/filter/' + filterId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(FilterGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getFilter(request) {
    return promisify(($completion) => this.dl1(request, $completion));
  }
  *el1(request, $completion) {
    return this.getFilter === protoOf(FilterResourceImpl).getFilter ? (yield* this.dl1(request, $completion)) : (yield* await_0(this.getFilter(request), $completion));
  }
  fl1(request) {
    return toBlocking(FilterResourceImpl$getFilterBlocking$slambda_0(this, request));
  }
  *gl1(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.filterId;
        var filterId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + userId + '/filter/' + filterId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53('{}').b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteFilter(request) {
    return promisify(($completion) => this.gl1(request, $completion));
  }
  *hl1(request, $completion) {
    return this.deleteFilter === protoOf(FilterResourceImpl).deleteFilter ? (yield* this.gl1(request, $completion)) : (yield* await_0(this.deleteFilter(request), $completion));
  }
  il1(request) {
    return toBlocking(FilterResourceImpl$deleteFilterBlocking$slambda_0(this, request));
  }
}
class InternalUtility {
  constructor() {
    InternalUtility_instance = this;
    var tmp = this;
    tmp.tly_1 = Json(VOID, InternalUtility$json$lambda);
  }
}
class Companion_92 {}
class $serializer_91 {
  constructor() {
    $serializer_instance_91 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.LoginResourceImpl.LoginPasswordBody', this, 4);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('identifier', false);
    tmp0_serialDesc.m1a('password', false);
    tmp0_serialDesc.m1a('initial_device_display_name', true);
    this.rm1_1 = tmp0_serialDesc;
  }
  sm1(encoder, value) {
    var tmp0_desc = this.rm1_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.tm1_1 === 'm.login.password')) {
      tmp1_output.j14(tmp0_desc, 0, value.tm1_1);
    }
    tmp1_output.l14(tmp0_desc, 1, $serializer_getInstance_92(), value.um1_1);
    tmp1_output.j14(tmp0_desc, 2, value.vm1_1);
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.wm1_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.wm1_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sm1(encoder, value instanceof LoginPasswordBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rm1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.g13(tmp0_desc, 1, $serializer_getInstance_92(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.g13(tmp0_desc, 1, $serializer_getInstance_92(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return LoginPasswordBody.xm1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.rm1_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_92(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_93 {}
class $serializer_92 {
  constructor() {
    $serializer_instance_92 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.LoginResourceImpl.LoginPasswordIdentifier', this, 2);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('user', false);
    this.ym1_1 = tmp0_serialDesc;
  }
  zm1(encoder, value) {
    var tmp0_desc = this.ym1_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.am2_1 === 'm.id.user')) {
      tmp1_output.j14(tmp0_desc, 0, value.am2_1);
    }
    tmp1_output.j14(tmp0_desc, 1, value.bm2_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zm1(encoder, value instanceof LoginPasswordIdentifier ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ym1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return LoginPasswordIdentifier.cm2(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ym1_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class LoginPasswordBody {
  constructor(type, identifier, password, initialDeviceDisplayName) {
    type = type === VOID ? 'm.login.password' : type;
    initialDeviceDisplayName = initialDeviceDisplayName === VOID ? null : initialDeviceDisplayName;
    this.tm1_1 = type;
    this.um1_1 = identifier;
    this.vm1_1 = password;
    this.wm1_1 = initialDeviceDisplayName;
  }
  toString() {
    return 'LoginPasswordBody(type=' + this.tm1_1 + ', identifier=' + this.um1_1.toString() + ', password=' + this.vm1_1 + ', initialDeviceDisplayName=' + this.wm1_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.tm1_1);
    result = imul(result, 31) + this.um1_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.vm1_1) | 0;
    result = imul(result, 31) + (this.wm1_1 == null ? 0 : getStringHashCode(this.wm1_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginPasswordBody))
      return false;
    if (!(this.tm1_1 === other.tm1_1))
      return false;
    if (!this.um1_1.equals(other.um1_1))
      return false;
    if (!(this.vm1_1 === other.vm1_1))
      return false;
    if (!(this.wm1_1 == other.wm1_1))
      return false;
    return true;
  }
  static xm1(seen0, type, identifier, password, initialDeviceDisplayName, serializationConstructorMarker) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_91().rm1_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.tm1_1 = 'm.login.password';
    else
      $this.tm1_1 = type;
    $this.um1_1 = identifier;
    $this.vm1_1 = password;
    if (0 === (seen0 & 8))
      $this.wm1_1 = null;
    else
      $this.wm1_1 = initialDeviceDisplayName;
    return $this;
  }
}
class LoginPasswordIdentifier {
  constructor(type, user) {
    type = type === VOID ? 'm.id.user' : type;
    this.am2_1 = type;
    this.bm2_1 = user;
  }
  toString() {
    return 'LoginPasswordIdentifier(type=' + this.am2_1 + ', user=' + this.bm2_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.am2_1);
    result = imul(result, 31) + getStringHashCode(this.bm2_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginPasswordIdentifier))
      return false;
    if (!(this.am2_1 === other.am2_1))
      return false;
    if (!(this.bm2_1 === other.bm2_1))
      return false;
    return true;
  }
  static cm2(seen0, type, user, serializationConstructorMarker) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance_92().ym1_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.am2_1 = 'm.id.user';
    else
      $this.am2_1 = type;
    $this.bm2_1 = user;
    return $this;
  }
}
class LoginResourceImpl$getLoginFlowsBlocking$slambda {
  constructor(this$0) {
    this.dm2_1 = this$0;
  }
  *em2($this$toBlocking, $completion) {
    return yield* this.dm2_1.ll1($completion);
  }
  wd(p1, $completion) {
    return this.em2((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class LoginResourceImpl$loginWithPasswordBlocking$slambda {
  constructor(this$0, $request) {
    this.fm2_1 = this$0;
    this.gm2_1 = $request;
  }
  *hm2($this$toBlocking, $completion) {
    return yield* this.fm2_1.jl1(this.gm2_1, $completion);
  }
  wd(p1, $completion) {
    return this.hm2((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class LoginResourceImpl extends AbstractResourceImpl {
  *kl1($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/login').o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(LoginGetLoginFlowsResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getLoginFlows() {
    return promisify(($completion) => this.kl1($completion));
  }
  *ll1($completion) {
    return this.getLoginFlows === protoOf(LoginResourceImpl).getLoginFlows ? (yield* this.kl1($completion)) : (yield* await_0(this.getLoginFlows(), $completion));
  }
  ml1() {
    return toBlocking(LoginResourceImpl$getLoginFlowsBlocking$slambda_0(this));
  }
  *nl1(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.user;
        var tmp = new LoginPasswordIdentifier(VOID, tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp1_elvis_lhs = request.password;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new LoginPasswordBody(VOID, tmp, tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.initialDeviceDisplayName);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(LoginPasswordBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/login').o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(LoginPasswordResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  loginWithPassword(request) {
    return promisify(($completion) => this.nl1(request, $completion));
  }
  *jl1(request, $completion) {
    return this.loginWithPassword === protoOf(LoginResourceImpl).loginWithPassword ? (yield* this.nl1(request, $completion)) : (yield* await_0(this.loginWithPassword(request), $completion));
  }
  ol1(request) {
    return toBlocking(LoginResourceImpl$loginWithPasswordBlocking$slambda_0(this, request));
  }
  ssoRedirectUrl(request) {
    return this.ylw_1 + '/_matrix/client/v3/login/sso/redirect?redirectUrl=' + request.redirectUrl;
  }
}
class MatrixImpl {
  constructor(uri, accessToken) {
    this.jm2_1 = uri;
    this.km2_1 = accessToken;
    this.lm2_1 = new LoginResourceImpl(this.jm2_1);
    this.mm2_1 = new AccountsResourceImpl(this.jm2_1, this.km2_1);
    this.nm2_1 = new ProfileResourceImpl(this.jm2_1, this.km2_1);
    this.om2_1 = new RoomsResourceImpl(this.jm2_1, this.km2_1);
    this.pm2_1 = new SyncResourceImpl(this.jm2_1, this.km2_1);
    this.qm2_1 = new FilterResourceImpl(this.jm2_1, this.km2_1);
    this.rm2_1 = new PresenceResourceImpl(this.jm2_1, this.km2_1);
    this.sm2_1 = new MediaResourceImpl(this.jm2_1, this.km2_1);
    this.tm2_1 = new DevicesResourceImpl(this.jm2_1, this.km2_1);
    this.um2_1 = new DirectoryResourceImpl(this.jm2_1, this.km2_1);
    this.vm2_1 = new TagsResourceImpl(this.jm2_1, this.km2_1);
    this.wm2_1 = new PushRulesResourceImpl(this.jm2_1, this.km2_1);
    this.xm2_1 = new SearchResourceImpl(this.jm2_1, this.km2_1);
    this.ym2_1 = new UserDirectoryResourceImpl(this.jm2_1, this.km2_1);
    this.zm2_1 = new VersionsResourceImpl(this.jm2_1);
    this.am3_1 = new CapabilitiesResourceImpl(this.jm2_1, this.km2_1);
    this.bm3_1 = new AccountDataResourceImpl(this.jm2_1, this.km2_1);
    this.cm3_1 = new NotificationsResourceImpl(this.jm2_1, this.km2_1);
    this.dm3_1 = new EventsResourceImpl(this.jm2_1, this.km2_1);
    this.em3_1 = new RelationsResourceImpl(this.jm2_1, this.km2_1);
    this.fm3_1 = new VoIPResourceImpl(this.jm2_1, this.km2_1);
    this.gm3_1 = new PushersResourceImpl(this.jm2_1, this.km2_1);
  }
  uri() {
    return this.jm2_1;
  }
  accessToken() {
    return this.km2_1;
  }
  login() {
    return this.lm2_1;
  }
  accounts() {
    return this.mm2_1;
  }
  profile() {
    return this.nm2_1;
  }
  rooms() {
    return this.om2_1;
  }
  sync() {
    return this.pm2_1;
  }
  filter() {
    return this.qm2_1;
  }
  presence() {
    return this.rm2_1;
  }
  media() {
    return this.sm2_1;
  }
  devices() {
    return this.tm2_1;
  }
  directory() {
    return this.um2_1;
  }
  tags() {
    return this.vm2_1;
  }
  pushRules() {
    return this.wm2_1;
  }
  search() {
    return this.xm2_1;
  }
  userDirectory() {
    return this.ym2_1;
  }
  versions() {
    return this.zm2_1;
  }
  capabilities() {
    return this.am3_1;
  }
  accountData() {
    return this.bm3_1;
  }
  notifications() {
    return this.cm3_1;
  }
  events() {
    return this.dm3_1;
  }
  relations() {
    return this.em3_1;
  }
  voip() {
    return this.fm3_1;
  }
  pushers() {
    return this.gm3_1;
  }
}
class MediaResourceImpl$uploadBlocking$slambda {
  constructor(this$0, $request) {
    this.hm3_1 = this$0;
    this.im3_1 = $request;
  }
  *jm3($this$toBlocking, $completion) {
    return yield* this.hm3_1.ql1(this.im3_1, $completion);
  }
  wd(p1, $completion) {
    return this.jm3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$downloadBlocking$slambda {
  constructor(this$0, $request) {
    this.km3_1 = this$0;
    this.lm3_1 = $request;
  }
  *mm3($this$toBlocking, $completion) {
    return yield* this.km3_1.tl1(this.lm3_1, $completion);
  }
  wd(p1, $completion) {
    return this.mm3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$thumbnailBlocking$slambda {
  constructor(this$0, $request) {
    this.nm3_1 = this$0;
    this.om3_1 = $request;
  }
  *mm3($this$toBlocking, $completion) {
    return yield* this.nm3_1.wl1(this.om3_1, $completion);
  }
  wd(p1, $completion) {
    return this.mm3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$getConfigBlocking$slambda {
  constructor(this$0) {
    this.pm3_1 = this$0;
  }
  *qm3($this$toBlocking, $completion) {
    return yield* this.pm3_1.zl1($completion);
  }
  wd(p1, $completion) {
    return this.qm3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$previewUrlBlocking$slambda {
  constructor(this$0, $request) {
    this.rm3_1 = this$0;
    this.sm3_1 = $request;
  }
  *tm3($this$toBlocking, $completion) {
    return yield* this.rm3_1.cl2(this.sm3_1, $completion);
  }
  wd(p1, $completion) {
    return this.tm3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl extends AbstractAuthResourceImpl {
  *pl1(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder.h1();
        this_0.i1(this.ylw_1 + '/_matrix/media/v3/upload');
        var tmp0_safe_receiver = request.fileName;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          this_0.i1('?filename=' + encodeURLParameter(tmp0_safe_receiver));
        }
        var url = this_0.toString();
        var tmp = (new HttpRequest()).n54(url).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1);
        var tmp0_elvis_lhs = request.fileName;
        var tmp_0 = tmp0_elvis_lhs == null ? 'upload' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.bytes;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.byteArrayOf' call
          tmp_1 = new Int8Array([]);
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var response = yield* tmp.l53('file', tmp_0, tmp_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_1 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_2 = this_1.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_3 = serializer(this_2, createKType(getKClass(MediaUploadResponse), arrayOf([]), false));
          var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
          var tmp$ret$8 = this_1.oz(tmp$ret$10, obj);
          // Inline function 'kotlin.also' call
          var this_4 = new Response(tmp$ret$8);
          this_4.limit = Companion_instance_83.of(response);
          this_4.json = response.h55();
          tmp$ret$0 = this_4;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  upload(request) {
    return promisify(($completion) => this.pl1(request, $completion));
  }
  *ql1(request, $completion) {
    return this.upload === protoOf(MediaResourceImpl).upload ? (yield* this.pl1(request, $completion)) : (yield* await_0(this.upload(request), $completion));
  }
  rl1(request) {
    return toBlocking(MediaResourceImpl$uploadBlocking$slambda_0(this, request));
  }
  *sl1(request, $completion) {
    try {
      var tmp0_elvis_lhs = request.serverName;
      var serverName = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = request.mediaId;
      var mediaId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var response = yield* this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/media/v3/download/' + serverName + '/' + mediaId).p54('Authorization', this.oco()), 'allow_remote', request.allowRemote).y54($completion);
      if (response.d55_1 === 200) {
        return response.f55_1;
      }
      throw MatrixException.rky(response.d55_1, response.h55());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp2_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp2_elvis_lhs == null ? MatrixException.qky(e) : tmp2_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  download(request) {
    return promisify(($completion) => this.sl1(request, $completion));
  }
  *tl1(request, $completion) {
    return this.download === protoOf(MediaResourceImpl).download ? (yield* this.sl1(request, $completion)) : (yield* await_0(this.download(request), $completion));
  }
  ul1(request) {
    return toBlocking(MediaResourceImpl$downloadBlocking$slambda_0(this, request));
  }
  *vl1(request, $completion) {
    try {
      var tmp0_elvis_lhs = request.serverName;
      var serverName = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = request.mediaId;
      var mediaId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var response = yield* this.sco(this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/media/v3/thumbnail/' + serverName + '/' + mediaId).p54('Authorization', this.oco()), 'width', request.width), 'height', request.height), 'method', request.method).y54($completion);
      if (response.d55_1 === 200) {
        return response.f55_1;
      }
      throw MatrixException.rky(response.d55_1, response.h55());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp2_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp2_elvis_lhs == null ? MatrixException.qky(e) : tmp2_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  thumbnail(request) {
    return promisify(($completion) => this.vl1(request, $completion));
  }
  *wl1(request, $completion) {
    return this.thumbnail === protoOf(MediaResourceImpl).thumbnail ? (yield* this.vl1(request, $completion)) : (yield* await_0(this.thumbnail(request), $completion));
  }
  xl1(request) {
    return toBlocking(MediaResourceImpl$thumbnailBlocking$slambda_0(this, request));
  }
  *yl1($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/media/v3/config').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(MediaGetConfigResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getConfig() {
    return promisify(($completion) => this.yl1($completion));
  }
  *zl1($completion) {
    return this.getConfig === protoOf(MediaResourceImpl).getConfig ? (yield* this.yl1($completion)) : (yield* await_0(this.getConfig(), $completion));
  }
  al2() {
    return toBlocking(MediaResourceImpl$getConfigBlocking$slambda_0(this));
  }
  *bl2(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/media/v3/preview_url').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'url', request.url), 'ts', request.ts).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(MediaPreviewUrlResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  previewUrl(request) {
    return promisify(($completion) => this.bl2(request, $completion));
  }
  *cl2(request, $completion) {
    return this.previewUrl === protoOf(MediaResourceImpl).previewUrl ? (yield* this.bl2(request, $completion)) : (yield* await_0(this.previewUrl(request), $completion));
  }
  dl2(request) {
    return toBlocking(MediaResourceImpl$previewUrlBlocking$slambda_0(this, request));
  }
}
class NotificationsResourceImpl$getNotificationsBlocking$slambda {
  constructor(this$0, $request) {
    this.wm3_1 = this$0;
    this.xm3_1 = $request;
  }
  *ym3($this$toBlocking, $completion) {
    return yield* this.wm3_1.el2(this.xm3_1, $completion);
  }
  wd(p1, $completion) {
    return this.ym3((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl extends AbstractAuthResourceImpl {
  *fl2(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/notifications').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'from', request.from), 'limit', request.limit), 'only', request.only).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(NotificationsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getNotifications(request) {
    return promisify(($completion) => this.fl2(request, $completion));
  }
  *el2(request, $completion) {
    return this.getNotifications === protoOf(NotificationsResourceImpl).getNotifications ? (yield* this.fl2(request, $completion)) : (yield* await_0(this.getNotifications(request), $completion));
  }
  gl2(request) {
    return toBlocking(NotificationsResourceImpl$getNotificationsBlocking$slambda_0(this, request));
  }
}
class Companion_94 {}
class $serializer_93 {
  constructor() {
    $serializer_instance_93 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PresenceResourceImpl.SetPresenceBody', this, 2);
    tmp0_serialDesc.m1a('presence', false);
    tmp0_serialDesc.m1a('status_msg', true);
    this.bm4_1 = tmp0_serialDesc;
  }
  cm4(encoder, value) {
    var tmp0_desc = this.bm4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.dm4_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.em4_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.em4_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.cm4(encoder, value instanceof SetPresenceBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.bm4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return SetPresenceBody.fm4(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.bm4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class SetPresenceBody {
  constructor(presence, statusMsg) {
    statusMsg = statusMsg === VOID ? null : statusMsg;
    this.dm4_1 = presence;
    this.em4_1 = statusMsg;
  }
  toString() {
    return 'SetPresenceBody(presence=' + this.dm4_1 + ', statusMsg=' + this.em4_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.dm4_1);
    result = imul(result, 31) + (this.em4_1 == null ? 0 : getStringHashCode(this.em4_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetPresenceBody))
      return false;
    if (!(this.dm4_1 === other.dm4_1))
      return false;
    if (!(this.em4_1 == other.em4_1))
      return false;
    return true;
  }
  static fm4(seen0, presence, statusMsg, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_93().bm4_1);
    }
    var $this = createThis(this);
    $this.dm4_1 = presence;
    if (0 === (seen0 & 2))
      $this.em4_1 = null;
    else
      $this.em4_1 = statusMsg;
    return $this;
  }
}
class PresenceResourceImpl$getPresenceBlocking$slambda {
  constructor(this$0, $userId) {
    this.gm4_1 = this$0;
    this.hm4_1 = $userId;
  }
  *im4($this$toBlocking, $completion) {
    return yield* this.gm4_1.il2(this.hm4_1, $completion);
  }
  wd(p1, $completion) {
    return this.im4((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PresenceResourceImpl$setPresenceBlocking$slambda {
  constructor(this$0, $request) {
    this.jm4_1 = this$0;
    this.km4_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.jm4_1.ll2(this.km4_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PresenceResourceImpl extends AbstractAuthResourceImpl {
  *hl2(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/presence/' + userId + '/status').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PresenceGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPresence(userId) {
    return promisify(($completion) => this.hl2(userId, $completion));
  }
  *il2(userId, $completion) {
    return this.getPresence === protoOf(PresenceResourceImpl).getPresence ? (yield* this.hl2(userId, $completion)) : (yield* await_0(this.getPresence(userId), $completion));
  }
  jl2(userId) {
    return toBlocking(PresenceResourceImpl$getPresenceBlocking$slambda_0(this, userId));
  }
  *kl2(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.presence;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetPresenceBody(tmp1_elvis_lhs == null ? 'online' : tmp1_elvis_lhs, request.statusMsg);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetPresenceBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/presence/' + userId + '/status').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setPresence(request) {
    return promisify(($completion) => this.kl2(request, $completion));
  }
  *ll2(request, $completion) {
    return this.setPresence === protoOf(PresenceResourceImpl).setPresence ? (yield* this.kl2(request, $completion)) : (yield* await_0(this.setPresence(request), $completion));
  }
  ml2(request) {
    return toBlocking(PresenceResourceImpl$setPresenceBlocking$slambda_0(this, request));
  }
}
class Companion_95 {}
class $serializer_94 {
  constructor() {
    $serializer_instance_94 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.ProfileResourceImpl.SetDisplayNameBody', this, 1);
    tmp0_serialDesc.m1a('displayname', true);
    this.nm4_1 = tmp0_serialDesc;
  }
  om4(encoder, value) {
    var tmp0_desc = this.nm4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.pm4_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.pm4_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.om4(encoder, value instanceof SetDisplayNameBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nm4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SetDisplayNameBody.qm4(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.nm4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_96 {}
class $serializer_95 {
  constructor() {
    $serializer_instance_95 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.ProfileResourceImpl.SetAvatarUrlBody', this, 1);
    tmp0_serialDesc.m1a('avatar_url', true);
    this.rm4_1 = tmp0_serialDesc;
  }
  sm4(encoder, value) {
    var tmp0_desc = this.rm4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.tm4_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.tm4_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sm4(encoder, value instanceof SetAvatarUrlBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rm4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SetAvatarUrlBody.um4(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.rm4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class SetDisplayNameBody {
  constructor(displayname) {
    displayname = displayname === VOID ? null : displayname;
    this.pm4_1 = displayname;
  }
  toString() {
    return 'SetDisplayNameBody(displayname=' + this.pm4_1 + ')';
  }
  hashCode() {
    return this.pm4_1 == null ? 0 : getStringHashCode(this.pm4_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetDisplayNameBody))
      return false;
    if (!(this.pm4_1 == other.pm4_1))
      return false;
    return true;
  }
  static qm4(seen0, displayname, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_94().nm4_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.pm4_1 = null;
    else
      $this.pm4_1 = displayname;
    return $this;
  }
}
class SetAvatarUrlBody {
  constructor(avatarUrl) {
    avatarUrl = avatarUrl === VOID ? null : avatarUrl;
    this.tm4_1 = avatarUrl;
  }
  toString() {
    return 'SetAvatarUrlBody(avatarUrl=' + this.tm4_1 + ')';
  }
  hashCode() {
    return this.tm4_1 == null ? 0 : getStringHashCode(this.tm4_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetAvatarUrlBody))
      return false;
    if (!(this.tm4_1 == other.tm4_1))
      return false;
    return true;
  }
  static um4(seen0, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_95().rm4_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.tm4_1 = null;
    else
      $this.tm4_1 = avatarUrl;
    return $this;
  }
}
class ProfileResourceImpl$getProfileBlocking$slambda {
  constructor(this$0, $userId) {
    this.vm4_1 = this$0;
    this.wm4_1 = $userId;
  }
  *xm4($this$toBlocking, $completion) {
    return yield* this.vm4_1.nl2(this.wm4_1, $completion);
  }
  wd(p1, $completion) {
    return this.xm4((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$getDisplayNameBlocking$slambda {
  constructor(this$0, $userId) {
    this.ym4_1 = this$0;
    this.zm4_1 = $userId;
  }
  *am5($this$toBlocking, $completion) {
    return yield* this.ym4_1.ql2(this.zm4_1, $completion);
  }
  wd(p1, $completion) {
    return this.am5((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$setDisplayNameBlocking$slambda {
  constructor(this$0, $request) {
    this.bm5_1 = this$0;
    this.cm5_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.bm5_1.tl2(this.cm5_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$getAvatarUrlBlocking$slambda {
  constructor(this$0, $userId) {
    this.dm5_1 = this$0;
    this.em5_1 = $userId;
  }
  *fm5($this$toBlocking, $completion) {
    return yield* this.dm5_1.wl2(this.em5_1, $completion);
  }
  wd(p1, $completion) {
    return this.fm5((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$setAvatarUrlBlocking$slambda {
  constructor(this$0, $request) {
    this.gm5_1 = this$0;
    this.hm5_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.gm5_1.zl2(this.hm5_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl extends AbstractAuthResourceImpl {
  *ol2(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/profile/' + userId).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ProfileGetProfileResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getProfile(userId) {
    return promisify(($completion) => this.ol2(userId, $completion));
  }
  *nl2(userId, $completion) {
    return this.getProfile === protoOf(ProfileResourceImpl).getProfile ? (yield* this.ol2(userId, $completion)) : (yield* await_0(this.getProfile(userId), $completion));
  }
  nk5(userId) {
    return toBlocking(ProfileResourceImpl$getProfileBlocking$slambda_0(this, userId));
  }
  *pl2(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/profile/' + userId + '/displayname').o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ProfileGetDisplayNameResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getDisplayName(userId) {
    return promisify(($completion) => this.pl2(userId, $completion));
  }
  *ql2(userId, $completion) {
    return this.getDisplayName === protoOf(ProfileResourceImpl).getDisplayName ? (yield* this.pl2(userId, $completion)) : (yield* await_0(this.getDisplayName(userId), $completion));
  }
  rl2(userId) {
    return toBlocking(ProfileResourceImpl$getDisplayNameBlocking$slambda_0(this, userId));
  }
  *sl2(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetDisplayNameBody(request.displayname);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetDisplayNameBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/profile/' + userId + '/displayname').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setDisplayName(request) {
    return promisify(($completion) => this.sl2(request, $completion));
  }
  *tl2(request, $completion) {
    return this.setDisplayName === protoOf(ProfileResourceImpl).setDisplayName ? (yield* this.sl2(request, $completion)) : (yield* await_0(this.setDisplayName(request), $completion));
  }
  ul2(request) {
    return toBlocking(ProfileResourceImpl$setDisplayNameBlocking$slambda_0(this, request));
  }
  *vl2(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/profile/' + userId + '/avatar_url').o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ProfileGetAvatarUrlResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getAvatarUrl(userId) {
    return promisify(($completion) => this.vl2(userId, $completion));
  }
  *wl2(userId, $completion) {
    return this.getAvatarUrl === protoOf(ProfileResourceImpl).getAvatarUrl ? (yield* this.vl2(userId, $completion)) : (yield* await_0(this.getAvatarUrl(userId), $completion));
  }
  xl2(userId) {
    return toBlocking(ProfileResourceImpl$getAvatarUrlBlocking$slambda_0(this, userId));
  }
  *yl2(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetAvatarUrlBody(request.avatarUrl);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetAvatarUrlBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/profile/' + userId + '/avatar_url').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setAvatarUrl(request) {
    return promisify(($completion) => this.yl2(request, $completion));
  }
  *zl2(request, $completion) {
    return this.setAvatarUrl === protoOf(ProfileResourceImpl).setAvatarUrl ? (yield* this.yl2(request, $completion)) : (yield* await_0(this.setAvatarUrl(request), $completion));
  }
  al3(request) {
    return toBlocking(ProfileResourceImpl$setAvatarUrlBlocking$slambda_0(this, request));
  }
}
class Companion_97 {}
class $serializer_96 {
  constructor() {
    $serializer_instance_96 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PushRulesResourceImpl.SetEnabledBody', this, 1);
    tmp0_serialDesc.m1a('enabled', false);
    this.km5_1 = tmp0_serialDesc;
  }
  lm5(encoder, value) {
    var tmp0_desc = this.km5_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.b14(tmp0_desc, 0, value.mm5_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.lm5(encoder, value instanceof SetEnabledBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.km5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SetEnabledBody.nm5(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.km5_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class SetEnabledBody {
  constructor(enabled) {
    this.mm5_1 = enabled;
  }
  toString() {
    return 'SetEnabledBody(enabled=' + this.mm5_1 + ')';
  }
  hashCode() {
    return getBooleanHashCode(this.mm5_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetEnabledBody))
      return false;
    if (!(this.mm5_1 === other.mm5_1))
      return false;
    return true;
  }
  static nm5(seen0, enabled, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_96().km5_1);
    }
    var $this = createThis(this);
    $this.mm5_1 = enabled;
    return $this;
  }
}
class PushRulesResourceImpl$getPushRulesBlocking$slambda {
  constructor(this$0) {
    this.om5_1 = this$0;
  }
  *pm5($this$toBlocking, $completion) {
    return yield* this.om5_1.cl3($completion);
  }
  wd(p1, $completion) {
    return this.pm5((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$getEnabledBlocking$slambda {
  constructor(this$0, $scope, $kind, $ruleId) {
    this.qm5_1 = this$0;
    this.rm5_1 = $scope;
    this.sm5_1 = $kind;
    this.tm5_1 = $ruleId;
  }
  *um5($this$toBlocking, $completion) {
    return yield* this.qm5_1.fl3(this.rm5_1, this.sm5_1, this.tm5_1, $completion);
  }
  wd(p1, $completion) {
    return this.um5((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$setEnabledBlocking$slambda {
  constructor(this$0, $request) {
    this.vm5_1 = this$0;
    this.wm5_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.vm5_1.il3(this.wm5_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$createRuleBlocking$slambda {
  constructor(this$0, $request) {
    this.xm5_1 = this$0;
    this.ym5_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.xm5_1.ll3(this.ym5_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$deleteRuleBlocking$slambda {
  constructor(this$0, $request) {
    this.zm5_1 = this$0;
    this.am6_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.zm5_1.ol3(this.am6_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl extends AbstractAuthResourceImpl {
  *bl3($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushrules/').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PushRulesGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPushRules() {
    return promisify(($completion) => this.bl3($completion));
  }
  *cl3($completion) {
    return this.getPushRules === protoOf(PushRulesResourceImpl).getPushRules ? (yield* this.bl3($completion)) : (yield* await_0(this.getPushRules(), $completion));
  }
  dl3() {
    return toBlocking(PushRulesResourceImpl$getPushRulesBlocking$slambda_0(this));
  }
  *el3(scope, kind, ruleId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId + '/enabled').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PushRulesGetEnabledResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getEnabled(scope, kind, ruleId) {
    return promisify(($completion) => this.el3(scope, kind, ruleId, $completion));
  }
  *fl3(scope, kind, ruleId, $completion) {
    return this.getEnabled === protoOf(PushRulesResourceImpl).getEnabled ? (yield* this.el3(scope, kind, ruleId, $completion)) : (yield* await_0(this.getEnabled(scope, kind, ruleId), $completion));
  }
  gl3(scope, kind, ruleId) {
    return toBlocking(PushRulesResourceImpl$getEnabledBlocking$slambda_0(this, scope, kind, ruleId));
  }
  *hl3(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.scope;
        var scope = tmp0_elvis_lhs == null ? 'global' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var kind = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.ruleId;
        var ruleId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp3_elvis_lhs = request.enabled;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetEnabledBody(tmp3_elvis_lhs == null ? true : tmp3_elvis_lhs);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetEnabledBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId + '/enabled').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setEnabled(request) {
    return promisify(($completion) => this.hl3(request, $completion));
  }
  *il3(request, $completion) {
    return this.setEnabled === protoOf(PushRulesResourceImpl).setEnabled ? (yield* this.hl3(request, $completion)) : (yield* await_0(this.setEnabled(request), $completion));
  }
  jl3(request) {
    return toBlocking(PushRulesResourceImpl$setEnabledBlocking$slambda_0(this, request));
  }
  *kl3(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.scope;
        var scope = tmp0_elvis_lhs == null ? 'global' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var kind = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.ruleId;
        var ruleId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = request.ruleBody;
        var body = tmp3_elvis_lhs == null ? '{}' : tmp3_elvis_lhs;
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createRule(request) {
    return promisify(($completion) => this.kl3(request, $completion));
  }
  *ll3(request, $completion) {
    return this.createRule === protoOf(PushRulesResourceImpl).createRule ? (yield* this.kl3(request, $completion)) : (yield* await_0(this.createRule(request), $completion));
  }
  ml3(request) {
    return toBlocking(PushRulesResourceImpl$createRuleBlocking$slambda_0(this, request));
  }
  *nl3(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.scope;
        var scope = tmp0_elvis_lhs == null ? 'global' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var kind = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.ruleId;
        var ruleId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53('{}').b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteRule(request) {
    return promisify(($completion) => this.nl3(request, $completion));
  }
  *ol3(request, $completion) {
    return this.deleteRule === protoOf(PushRulesResourceImpl).deleteRule ? (yield* this.nl3(request, $completion)) : (yield* await_0(this.deleteRule(request), $completion));
  }
  pl3(request) {
    return toBlocking(PushRulesResourceImpl$deleteRuleBlocking$slambda_0(this, request));
  }
}
class Companion_98 {}
class $serializer_97 {
  constructor() {
    $serializer_instance_97 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PushersResourceImpl.SetPusherBody.PusherDataBody', this, 2);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('format', true);
    this.dm6_1 = tmp0_serialDesc;
  }
  em6(encoder, value) {
    var tmp0_desc = this.dm6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.fm6_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.fm6_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.gm6_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.gm6_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.em6(encoder, value instanceof PusherDataBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dm6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return PusherDataBody.hm6(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.dm6_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PusherDataBody {
  constructor(url, format) {
    url = url === VOID ? null : url;
    format = format === VOID ? null : format;
    this.fm6_1 = url;
    this.gm6_1 = format;
  }
  toString() {
    return 'PusherDataBody(url=' + this.fm6_1 + ', format=' + this.gm6_1 + ')';
  }
  hashCode() {
    var result = this.fm6_1 == null ? 0 : getStringHashCode(this.fm6_1);
    result = imul(result, 31) + (this.gm6_1 == null ? 0 : getStringHashCode(this.gm6_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PusherDataBody))
      return false;
    if (!(this.fm6_1 == other.fm6_1))
      return false;
    if (!(this.gm6_1 == other.gm6_1))
      return false;
    return true;
  }
  static hm6(seen0, url, format, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_97().dm6_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.fm6_1 = null;
    else
      $this.fm6_1 = url;
    if (0 === (seen0 & 2))
      $this.gm6_1 = null;
    else
      $this.gm6_1 = format;
    return $this;
  }
}
class Companion_99 {}
class $serializer_98 {
  constructor() {
    $serializer_instance_98 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PushersResourceImpl.SetPusherBody', this, 10);
    tmp0_serialDesc.m1a('pushkey', false);
    tmp0_serialDesc.m1a('kind', false);
    tmp0_serialDesc.m1a('app_id', false);
    tmp0_serialDesc.m1a('app_display_name', false);
    tmp0_serialDesc.m1a('device_display_name', false);
    tmp0_serialDesc.m1a('profile_tag', false);
    tmp0_serialDesc.m1a('lang', false);
    tmp0_serialDesc.m1a('data', false);
    tmp0_serialDesc.m1a('append', false);
    tmp0_serialDesc.m1a('enabled', false);
    this.im6_1 = tmp0_serialDesc;
  }
  jm6(encoder, value) {
    var tmp0_desc = this.im6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.km6_1);
    tmp1_output.j14(tmp0_desc, 1, value.lm6_1);
    tmp1_output.j14(tmp0_desc, 2, value.mm6_1);
    tmp1_output.j14(tmp0_desc, 3, value.nm6_1);
    tmp1_output.j14(tmp0_desc, 4, value.om6_1);
    tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.pm6_1);
    tmp1_output.j14(tmp0_desc, 6, value.qm6_1);
    tmp1_output.l14(tmp0_desc, 7, $serializer_getInstance_97(), value.rm6_1);
    tmp1_output.m14(tmp0_desc, 8, BooleanSerializer_getInstance(), value.sm6_1);
    tmp1_output.m14(tmp0_desc, 9, BooleanSerializer_getInstance(), value.tm6_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jm6(encoder, value instanceof SetPusherBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.im6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.u12(tmp0_desc);
    if (tmp14_input.j13()) {
      tmp4_local0 = tmp14_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.e13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.e13(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.g13(tmp0_desc, 7, $serializer_getInstance_97(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.e13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.e13(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.g13(tmp0_desc, 7, $serializer_getInstance_97(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp14_input.v12(tmp0_desc);
    return SetPusherBody.um6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  cy() {
    return this.im6_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), $serializer_getInstance_97(), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class SetPusherBody {
  constructor(pushkey, kind, appId, appDisplayName, deviceDisplayName, profileTag, lang, data, append, enabled) {
    this.km6_1 = pushkey;
    this.lm6_1 = kind;
    this.mm6_1 = appId;
    this.nm6_1 = appDisplayName;
    this.om6_1 = deviceDisplayName;
    this.pm6_1 = profileTag;
    this.qm6_1 = lang;
    this.rm6_1 = data;
    this.sm6_1 = append;
    this.tm6_1 = enabled;
  }
  toString() {
    return 'SetPusherBody(pushkey=' + this.km6_1 + ', kind=' + this.lm6_1 + ', appId=' + this.mm6_1 + ', appDisplayName=' + this.nm6_1 + ', deviceDisplayName=' + this.om6_1 + ', profileTag=' + this.pm6_1 + ', lang=' + this.qm6_1 + ', data=' + this.rm6_1.toString() + ', append=' + this.sm6_1 + ', enabled=' + this.tm6_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.km6_1);
    result = imul(result, 31) + getStringHashCode(this.lm6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mm6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.nm6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.om6_1) | 0;
    result = imul(result, 31) + (this.pm6_1 == null ? 0 : getStringHashCode(this.pm6_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.qm6_1) | 0;
    result = imul(result, 31) + this.rm6_1.hashCode() | 0;
    result = imul(result, 31) + (this.sm6_1 == null ? 0 : getBooleanHashCode(this.sm6_1)) | 0;
    result = imul(result, 31) + (this.tm6_1 == null ? 0 : getBooleanHashCode(this.tm6_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetPusherBody))
      return false;
    if (!(this.km6_1 === other.km6_1))
      return false;
    if (!(this.lm6_1 === other.lm6_1))
      return false;
    if (!(this.mm6_1 === other.mm6_1))
      return false;
    if (!(this.nm6_1 === other.nm6_1))
      return false;
    if (!(this.om6_1 === other.om6_1))
      return false;
    if (!(this.pm6_1 == other.pm6_1))
      return false;
    if (!(this.qm6_1 === other.qm6_1))
      return false;
    if (!this.rm6_1.equals(other.rm6_1))
      return false;
    if (!(this.sm6_1 == other.sm6_1))
      return false;
    if (!(this.tm6_1 == other.tm6_1))
      return false;
    return true;
  }
  static um6(seen0, pushkey, kind, appId, appDisplayName, deviceDisplayName, profileTag, lang, data, append, enabled, serializationConstructorMarker) {
    if (!(1023 === (1023 & seen0))) {
      throwMissingFieldException(seen0, 1023, $serializer_getInstance_98().im6_1);
    }
    var $this = createThis(this);
    $this.km6_1 = pushkey;
    $this.lm6_1 = kind;
    $this.mm6_1 = appId;
    $this.nm6_1 = appDisplayName;
    $this.om6_1 = deviceDisplayName;
    $this.pm6_1 = profileTag;
    $this.qm6_1 = lang;
    $this.rm6_1 = data;
    $this.sm6_1 = append;
    $this.tm6_1 = enabled;
    return $this;
  }
}
class PushersResourceImpl$getPushersBlocking$slambda {
  constructor(this$0) {
    this.vm6_1 = this$0;
  }
  *wm6($this$toBlocking, $completion) {
    return yield* this.vm6_1.rl3($completion);
  }
  wd(p1, $completion) {
    return this.wm6((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushersResourceImpl$setPusherBlocking$slambda {
  constructor(this$0, $request) {
    this.xm6_1 = this$0;
    this.ym6_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.xm6_1.ul3(this.ym6_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushersResourceImpl extends AbstractAuthResourceImpl {
  *ql3($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushers').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PushersGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPushers() {
    return promisify(($completion) => this.ql3($completion));
  }
  *rl3($completion) {
    return this.getPushers === protoOf(PushersResourceImpl).getPushers ? (yield* this.ql3($completion)) : (yield* await_0(this.getPushers(), $completion));
  }
  sl3() {
    return toBlocking(PushersResourceImpl$getPushersBlocking$slambda_0(this));
  }
  *tl3(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.pushkey;
        var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.appId;
        var tmp_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = request.appDisplayName;
        var tmp_2 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = request.deviceDisplayName;
        var tmp_3 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
        var tmp_4 = request.profileTag;
        var tmp5_elvis_lhs = request.lang;
        var tmp_5 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
        var tmp6_safe_receiver = request.data;
        var tmp_6;
        if (tmp6_safe_receiver == null) {
          tmp_6 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_6 = new PusherDataBody(tmp6_safe_receiver.url, tmp6_safe_receiver.format);
        }
        var tmp7_elvis_lhs = tmp_6;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetPusherBody(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp7_elvis_lhs == null ? new PusherDataBody() : tmp7_elvis_lhs, request.append, request.enabled);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetPusherBody), arrayOf([]), false));
        var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$6, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/pushers/set').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setPusher(request) {
    return promisify(($completion) => this.tl3(request, $completion));
  }
  *ul3(request, $completion) {
    return this.setPusher === protoOf(PushersResourceImpl).setPusher ? (yield* this.tl3(request, $completion)) : (yield* await_0(this.setPusher(request), $completion));
  }
  vl3(request) {
    return toBlocking(PushersResourceImpl$setPusherBlocking$slambda_0(this, request));
  }
}
class RelationsResourceImpl$getRelationsBlocking$slambda {
  constructor(this$0, $request) {
    this.bm7_1 = this$0;
    this.cm7_1 = $request;
  }
  *dm7($this$toBlocking, $completion) {
    return yield* this.bm7_1.xl3(this.cm7_1, $completion);
  }
  wd(p1, $completion) {
    return this.dm7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RelationsResourceImpl$getThreadsBlocking$slambda {
  constructor(this$0, $request) {
    this.em7_1 = this$0;
    this.fm7_1 = $request;
  }
  *gm7($this$toBlocking, $completion) {
    return yield* this.em7_1.al4(this.fm7_1, $completion);
  }
  wd(p1, $completion) {
    return this.gm7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RelationsResourceImpl extends AbstractAuthResourceImpl {
  *wl3(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder.h1();
        this_0.i1(this.ylw_1 + '/_matrix/client/v1/rooms/' + request.roomId + '/relations/' + request.eventId);
        if (!(request.relType == null)) {
          this_0.i1('/' + request.relType);
          if (!(request.eventType == null)) {
            this_0.i1('/' + request.eventType);
          }
        }
        var url = this_0.toString();
        var response = yield* this.sco(this.sco(this.sco(this.sco((new HttpRequest()).n54(url).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'from', request.from), 'to', request.to), 'limit', request.limit), 'dir', request.dir).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_1 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_2 = this_1.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_3 = serializer(this_2, createKType(getKClass(RelationsGetResponse), arrayOf([]), false));
          var tmp$ret$7 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
          var tmp$ret$5 = this_1.oz(tmp$ret$7, obj);
          // Inline function 'kotlin.also' call
          var this_4 = new Response(tmp$ret$5);
          this_4.limit = Companion_instance_83.of(response);
          this_4.json = response.h55();
          tmp$ret$0 = this_4;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getRelations(request) {
    return promisify(($completion) => this.wl3(request, $completion));
  }
  *xl3(request, $completion) {
    return this.getRelations === protoOf(RelationsResourceImpl).getRelations ? (yield* this.wl3(request, $completion)) : (yield* await_0(this.getRelations(request), $completion));
  }
  yl3(request) {
    return toBlocking(RelationsResourceImpl$getRelationsBlocking$slambda_0(this, request));
  }
  *zl3(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v1/rooms/' + request.roomId + '/threads').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'include', request.include), 'limit', request.limit), 'from', request.from).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ThreadsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getThreads(request) {
    return promisify(($completion) => this.zl3(request, $completion));
  }
  *al4(request, $completion) {
    return this.getThreads === protoOf(RelationsResourceImpl).getThreads ? (yield* this.zl3(request, $completion)) : (yield* await_0(this.getThreads(request), $completion));
  }
  bl4(request) {
    return toBlocking(RelationsResourceImpl$getThreadsBlocking$slambda_0(this, request));
  }
}
class Companion_100 {
  constructor() {
    Companion_instance_100 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.jm7_1 = [null, null, null, null, lazy(tmp_0, RoomsResourceImpl$CreateRoomBody$Companion$$childSerializers$_anonymous__q3r2ul), null, null];
  }
}
class $serializer_99 {
  constructor() {
    $serializer_instance_99 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.CreateRoomBody', this, 7);
    tmp0_serialDesc.m1a('visibility', true);
    tmp0_serialDesc.m1a('room_alias_name', true);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('topic', true);
    tmp0_serialDesc.m1a('invite', true);
    tmp0_serialDesc.m1a('preset', true);
    tmp0_serialDesc.m1a('is_direct', true);
    this.km7_1 = tmp0_serialDesc;
  }
  lm7(encoder, value) {
    var tmp0_desc = this.km7_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_101().jm7_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.mm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.mm7_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.nm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.nm7_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.om7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.om7_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.pm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.pm7_1);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.qm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.qm7_1);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.rm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.rm7_1);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.sm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 6, BooleanSerializer_getInstance(), value.sm7_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.lm7(encoder, value instanceof CreateRoomBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.km7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.u12(tmp0_desc);
    var tmp12_cached = Companion_getInstance_101().jm7_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, tmp12_cached[4].y2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, tmp12_cached[4].y2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return CreateRoomBody.tm7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.km7_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_101().jm7_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_101 {}
class $serializer_100 {
  constructor() {
    $serializer_instance_100 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.JoinRoomBody', this, 1);
    tmp0_serialDesc.m1a('reason', true);
    this.um7_1 = tmp0_serialDesc;
  }
  vm7(encoder, value) {
    var tmp0_desc = this.um7_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.wm7_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.wm7_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vm7(encoder, value instanceof JoinRoomBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.um7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return JoinRoomBody.xm7(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.um7_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_102 {}
class $serializer_101 {
  constructor() {
    $serializer_instance_101 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.LeaveRoomBody', this, 1);
    tmp0_serialDesc.m1a('reason', true);
    this.ym7_1 = tmp0_serialDesc;
  }
  zm7(encoder, value) {
    var tmp0_desc = this.ym7_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.am8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.am8_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zm7(encoder, value instanceof LeaveRoomBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ym7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return LeaveRoomBody.bm8(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ym7_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_103 {}
class $serializer_102 {
  constructor() {
    $serializer_instance_102 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.InviteBody', this, 2);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('reason', true);
    this.cm8_1 = tmp0_serialDesc;
  }
  dm8(encoder, value) {
    var tmp0_desc = this.cm8_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.em8_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.fm8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.fm8_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dm8(encoder, value instanceof InviteBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.cm8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return InviteBody.gm8(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.cm8_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_104 {}
class $serializer_103 {
  constructor() {
    $serializer_instance_103 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.RedactEventBody', this, 1);
    tmp0_serialDesc.m1a('reason', true);
    this.hm8_1 = tmp0_serialDesc;
  }
  im8(encoder, value) {
    var tmp0_desc = this.hm8_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.jm8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.jm8_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.im8(encoder, value instanceof RedactEventBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hm8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return RedactEventBody.km8(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.hm8_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_105 {}
class $serializer_104 {
  constructor() {
    $serializer_instance_104 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.TypingBody', this, 2);
    tmp0_serialDesc.m1a('typing', false);
    tmp0_serialDesc.m1a('timeout', true);
    this.lm8_1 = tmp0_serialDesc;
  }
  mm8(encoder, value) {
    var tmp0_desc = this.lm8_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.b14(tmp0_desc, 0, value.nm8_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.om8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.om8_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.mm8(encoder, value instanceof TypingBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.lm8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return TypingBody.pm8(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.lm8_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class Companion_106 {}
class $serializer_105 {
  constructor() {
    $serializer_instance_105 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendReceiptBody', this, 1);
    tmp0_serialDesc.m1a('thread_id', true);
    this.qm8_1 = tmp0_serialDesc;
  }
  rm8(encoder, value) {
    var tmp0_desc = this.qm8_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.sm8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.sm8_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.rm8(encoder, value instanceof SendReceiptBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.qm8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SendReceiptBody.tm8(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.qm8_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_107 {}
class $serializer_106 {
  constructor() {
    $serializer_instance_106 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SetReadMarkersBody', this, 3);
    tmp0_serialDesc.m1a('m.fully_read', true);
    tmp0_serialDesc.m1a('m.read', true);
    tmp0_serialDesc.m1a('m.read.private', true);
    this.um8_1 = tmp0_serialDesc;
  }
  vm8(encoder, value) {
    var tmp0_desc = this.um8_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.wm8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.wm8_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.xm8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.xm8_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.ym8_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.ym8_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vm8(encoder, value instanceof SetReadMarkersBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.um8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SetReadMarkersBody.zm8(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.um8_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_108 {}
class $serializer_107 {
  constructor() {
    $serializer_instance_107 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageBody', this, 16);
    tmp0_serialDesc.m1a('msgtype', false);
    tmp0_serialDesc.m1a('body', false);
    tmp0_serialDesc.m1a('format', true);
    tmp0_serialDesc.m1a('formatted_body', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('filename', true);
    tmp0_serialDesc.m1a('mimetype', true);
    tmp0_serialDesc.m1a('thumbnail_url', true);
    tmp0_serialDesc.m1a('thumbnail_mimetype', true);
    tmp0_serialDesc.m1a('thumbnail_size', true);
    tmp0_serialDesc.m1a('width', true);
    tmp0_serialDesc.m1a('height', true);
    tmp0_serialDesc.m1a('duration', true);
    tmp0_serialDesc.m1a('geo_uri', true);
    tmp0_serialDesc.m1a('description', true);
    tmp0_serialDesc.m1a('m.relates_to', true);
    this.am9_1 = tmp0_serialDesc;
  }
  bm9(encoder, value) {
    var tmp0_desc = this.am9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.cm9_1);
    tmp1_output.j14(tmp0_desc, 1, value.dm9_1);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.em9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.em9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.fm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.fm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.gm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.gm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.hm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.hm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.im9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.im9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.jm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.jm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.km9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.km9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.lm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 9, LongSerializer_getInstance(), value.lm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.mm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 10, LongSerializer_getInstance(), value.mm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 11) ? true : !(value.nm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 11, LongSerializer_getInstance(), value.nm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 12) ? true : !(value.om9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 12, LongSerializer_getInstance(), value.om9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.pm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 13, StringSerializer_getInstance(), value.pm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.qm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 14, StringSerializer_getInstance(), value.qm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.rm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 15, $serializer_getInstance_108(), value.rm9_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.bm9(encoder, value instanceof SendMessageBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.am9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.u12(tmp0_desc);
    if (tmp20_input.j13()) {
      tmp4_local0 = tmp20_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.i13(tmp0_desc, 9, LongSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.i13(tmp0_desc, 10, LongSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.i13(tmp0_desc, 11, LongSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.i13(tmp0_desc, 12, LongSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.i13(tmp0_desc, 15, $serializer_getInstance_108(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.i13(tmp0_desc, 9, LongSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.i13(tmp0_desc, 10, LongSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.i13(tmp0_desc, 11, LongSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.i13(tmp0_desc, 12, LongSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.i13(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.i13(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.i13(tmp0_desc, 15, $serializer_getInstance_108(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp20_input.v12(tmp0_desc);
    return SendMessageBody.sm9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  cy() {
    return this.am9_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_108())];
  }
}
class Companion_109 {}
class $serializer_108 {
  constructor() {
    $serializer_instance_108 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageRelatesTo', this, 3);
    tmp0_serialDesc.m1a('m.in_reply_to', true);
    tmp0_serialDesc.m1a('m.annotation', true);
    tmp0_serialDesc.m1a('m.reference', true);
    this.tm9_1 = tmp0_serialDesc;
  }
  um9(encoder, value) {
    var tmp0_desc = this.tm9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.vm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_109(), value.vm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.wm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_110(), value.wm9_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.xm9_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_111(), value.xm9_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.um9(encoder, value instanceof SendMessageRelatesTo ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tm9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, $serializer_getInstance_109(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_110(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_111(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, $serializer_getInstance_109(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, $serializer_getInstance_110(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_111(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SendMessageRelatesTo.ym9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.tm9_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_109()), get_nullable($serializer_getInstance_110()), get_nullable($serializer_getInstance_111())];
  }
}
class Companion_110 {}
class $serializer_109 {
  constructor() {
    $serializer_instance_109 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageInReplyTo', this, 1);
    tmp0_serialDesc.m1a('event_id', false);
    this.zm9_1 = tmp0_serialDesc;
  }
  ama(encoder, value) {
    var tmp0_desc = this.zm9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.bma_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ama(encoder, value instanceof SendMessageInReplyTo ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zm9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SendMessageInReplyTo.cma(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.zm9_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class Companion_111 {}
class $serializer_110 {
  constructor() {
    $serializer_instance_110 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageAnnotation', this, 3);
    tmp0_serialDesc.m1a('event_id', false);
    tmp0_serialDesc.m1a('key', false);
    tmp0_serialDesc.m1a('rel_type', true);
    this.dma_1 = tmp0_serialDesc;
  }
  ema(encoder, value) {
    var tmp0_desc = this.dma_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.fma_1);
    tmp1_output.j14(tmp0_desc, 1, value.gma_1);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.hma_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.hma_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ema(encoder, value instanceof SendMessageAnnotation ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dma_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return SendMessageAnnotation.ima(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.dma_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_112 {}
class $serializer_111 {
  constructor() {
    $serializer_instance_111 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageReference', this, 2);
    tmp0_serialDesc.m1a('event_id', false);
    tmp0_serialDesc.m1a('rel_type', true);
    this.jma_1 = tmp0_serialDesc;
  }
  kma(encoder, value) {
    var tmp0_desc = this.jma_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.lma_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.mma_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.mma_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kma(encoder, value instanceof SendMessageReference ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jma_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return SendMessageReference.nma(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jma_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_113 {}
class $serializer_112 {
  constructor() {
    $serializer_instance_112 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.BanBody', this, 2);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('reason', true);
    this.oma_1 = tmp0_serialDesc;
  }
  pma(encoder, value) {
    var tmp0_desc = this.oma_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.qma_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.rma_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.rma_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.pma(encoder, value instanceof BanBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.oma_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return BanBody.sma(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.oma_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_114 {}
class $serializer_113 {
  constructor() {
    $serializer_instance_113 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.UnbanBody', this, 2);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('reason', true);
    this.tma_1 = tmp0_serialDesc;
  }
  uma(encoder, value) {
    var tmp0_desc = this.tma_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.vma_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.wma_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.wma_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uma(encoder, value instanceof UnbanBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tma_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return UnbanBody.xma(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.tma_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_115 {}
class $serializer_114 {
  constructor() {
    $serializer_instance_114 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.KickBody', this, 2);
    tmp0_serialDesc.m1a('user_id', false);
    tmp0_serialDesc.m1a('reason', true);
    this.yma_1 = tmp0_serialDesc;
  }
  zma(encoder, value) {
    var tmp0_desc = this.yma_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.amb_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.bmb_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.bmb_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zma(encoder, value instanceof KickBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.yma_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return KickBody.cmb(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.yma_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class CreateRoomBody {
  constructor(visibility, roomAliasName, name, topic, invite, preset, isDirect) {
    Companion_getInstance_101();
    visibility = visibility === VOID ? null : visibility;
    roomAliasName = roomAliasName === VOID ? null : roomAliasName;
    name = name === VOID ? null : name;
    topic = topic === VOID ? null : topic;
    invite = invite === VOID ? null : invite;
    preset = preset === VOID ? null : preset;
    isDirect = isDirect === VOID ? null : isDirect;
    this.mm7_1 = visibility;
    this.nm7_1 = roomAliasName;
    this.om7_1 = name;
    this.pm7_1 = topic;
    this.qm7_1 = invite;
    this.rm7_1 = preset;
    this.sm7_1 = isDirect;
  }
  toString() {
    return 'CreateRoomBody(visibility=' + this.mm7_1 + ', roomAliasName=' + this.nm7_1 + ', name=' + this.om7_1 + ', topic=' + this.pm7_1 + ', invite=' + toString_0(this.qm7_1) + ', preset=' + this.rm7_1 + ', isDirect=' + this.sm7_1 + ')';
  }
  hashCode() {
    var result = this.mm7_1 == null ? 0 : getStringHashCode(this.mm7_1);
    result = imul(result, 31) + (this.nm7_1 == null ? 0 : getStringHashCode(this.nm7_1)) | 0;
    result = imul(result, 31) + (this.om7_1 == null ? 0 : getStringHashCode(this.om7_1)) | 0;
    result = imul(result, 31) + (this.pm7_1 == null ? 0 : getStringHashCode(this.pm7_1)) | 0;
    result = imul(result, 31) + (this.qm7_1 == null ? 0 : hashCode(this.qm7_1)) | 0;
    result = imul(result, 31) + (this.rm7_1 == null ? 0 : getStringHashCode(this.rm7_1)) | 0;
    result = imul(result, 31) + (this.sm7_1 == null ? 0 : getBooleanHashCode(this.sm7_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateRoomBody))
      return false;
    if (!(this.mm7_1 == other.mm7_1))
      return false;
    if (!(this.nm7_1 == other.nm7_1))
      return false;
    if (!(this.om7_1 == other.om7_1))
      return false;
    if (!(this.pm7_1 == other.pm7_1))
      return false;
    if (!equals(this.qm7_1, other.qm7_1))
      return false;
    if (!(this.rm7_1 == other.rm7_1))
      return false;
    if (!(this.sm7_1 == other.sm7_1))
      return false;
    return true;
  }
  static tm7(seen0, visibility, roomAliasName, name, topic, invite, preset, isDirect, serializationConstructorMarker) {
    Companion_getInstance_101();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_99().km7_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.mm7_1 = null;
    else
      $this.mm7_1 = visibility;
    if (0 === (seen0 & 2))
      $this.nm7_1 = null;
    else
      $this.nm7_1 = roomAliasName;
    if (0 === (seen0 & 4))
      $this.om7_1 = null;
    else
      $this.om7_1 = name;
    if (0 === (seen0 & 8))
      $this.pm7_1 = null;
    else
      $this.pm7_1 = topic;
    if (0 === (seen0 & 16))
      $this.qm7_1 = null;
    else
      $this.qm7_1 = invite;
    if (0 === (seen0 & 32))
      $this.rm7_1 = null;
    else
      $this.rm7_1 = preset;
    if (0 === (seen0 & 64))
      $this.sm7_1 = null;
    else
      $this.sm7_1 = isDirect;
    return $this;
  }
}
class JoinRoomBody {
  constructor(reason) {
    reason = reason === VOID ? null : reason;
    this.wm7_1 = reason;
  }
  toString() {
    return 'JoinRoomBody(reason=' + this.wm7_1 + ')';
  }
  hashCode() {
    return this.wm7_1 == null ? 0 : getStringHashCode(this.wm7_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinRoomBody))
      return false;
    if (!(this.wm7_1 == other.wm7_1))
      return false;
    return true;
  }
  static xm7(seen0, reason, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_100().um7_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.wm7_1 = null;
    else
      $this.wm7_1 = reason;
    return $this;
  }
}
class LeaveRoomBody {
  constructor(reason) {
    reason = reason === VOID ? null : reason;
    this.am8_1 = reason;
  }
  toString() {
    return 'LeaveRoomBody(reason=' + this.am8_1 + ')';
  }
  hashCode() {
    return this.am8_1 == null ? 0 : getStringHashCode(this.am8_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LeaveRoomBody))
      return false;
    if (!(this.am8_1 == other.am8_1))
      return false;
    return true;
  }
  static bm8(seen0, reason, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_101().ym7_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.am8_1 = null;
    else
      $this.am8_1 = reason;
    return $this;
  }
}
class InviteBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.em8_1 = userId;
    this.fm8_1 = reason;
  }
  toString() {
    return 'InviteBody(userId=' + this.em8_1 + ', reason=' + this.fm8_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.em8_1);
    result = imul(result, 31) + (this.fm8_1 == null ? 0 : getStringHashCode(this.fm8_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof InviteBody))
      return false;
    if (!(this.em8_1 === other.em8_1))
      return false;
    if (!(this.fm8_1 == other.fm8_1))
      return false;
    return true;
  }
  static gm8(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_102().cm8_1);
    }
    var $this = createThis(this);
    $this.em8_1 = userId;
    if (0 === (seen0 & 2))
      $this.fm8_1 = null;
    else
      $this.fm8_1 = reason;
    return $this;
  }
}
class RedactEventBody {
  constructor(reason) {
    reason = reason === VOID ? null : reason;
    this.jm8_1 = reason;
  }
  toString() {
    return 'RedactEventBody(reason=' + this.jm8_1 + ')';
  }
  hashCode() {
    return this.jm8_1 == null ? 0 : getStringHashCode(this.jm8_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RedactEventBody))
      return false;
    if (!(this.jm8_1 == other.jm8_1))
      return false;
    return true;
  }
  static km8(seen0, reason, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_103().hm8_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.jm8_1 = null;
    else
      $this.jm8_1 = reason;
    return $this;
  }
}
class TypingBody {
  constructor(typing, timeout) {
    timeout = timeout === VOID ? null : timeout;
    this.nm8_1 = typing;
    this.om8_1 = timeout;
  }
  toString() {
    return 'TypingBody(typing=' + this.nm8_1 + ', timeout=' + this.om8_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.nm8_1);
    result = imul(result, 31) + (this.om8_1 == null ? 0 : this.om8_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TypingBody))
      return false;
    if (!(this.nm8_1 === other.nm8_1))
      return false;
    if (!(this.om8_1 == other.om8_1))
      return false;
    return true;
  }
  static pm8(seen0, typing, timeout, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_104().lm8_1);
    }
    var $this = createThis(this);
    $this.nm8_1 = typing;
    if (0 === (seen0 & 2))
      $this.om8_1 = null;
    else
      $this.om8_1 = timeout;
    return $this;
  }
}
class SendReceiptBody {
  constructor(threadId) {
    threadId = threadId === VOID ? null : threadId;
    this.sm8_1 = threadId;
  }
  toString() {
    return 'SendReceiptBody(threadId=' + this.sm8_1 + ')';
  }
  hashCode() {
    return this.sm8_1 == null ? 0 : getStringHashCode(this.sm8_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendReceiptBody))
      return false;
    if (!(this.sm8_1 == other.sm8_1))
      return false;
    return true;
  }
  static tm8(seen0, threadId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_105().qm8_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.sm8_1 = null;
    else
      $this.sm8_1 = threadId;
    return $this;
  }
}
class SetReadMarkersBody {
  constructor(fullyRead, read, readPrivate) {
    fullyRead = fullyRead === VOID ? null : fullyRead;
    read = read === VOID ? null : read;
    readPrivate = readPrivate === VOID ? null : readPrivate;
    this.wm8_1 = fullyRead;
    this.xm8_1 = read;
    this.ym8_1 = readPrivate;
  }
  toString() {
    return 'SetReadMarkersBody(fullyRead=' + this.wm8_1 + ', read=' + this.xm8_1 + ', readPrivate=' + this.ym8_1 + ')';
  }
  hashCode() {
    var result = this.wm8_1 == null ? 0 : getStringHashCode(this.wm8_1);
    result = imul(result, 31) + (this.xm8_1 == null ? 0 : getStringHashCode(this.xm8_1)) | 0;
    result = imul(result, 31) + (this.ym8_1 == null ? 0 : getStringHashCode(this.ym8_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetReadMarkersBody))
      return false;
    if (!(this.wm8_1 == other.wm8_1))
      return false;
    if (!(this.xm8_1 == other.xm8_1))
      return false;
    if (!(this.ym8_1 == other.ym8_1))
      return false;
    return true;
  }
  static zm8(seen0, fullyRead, read, readPrivate, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_106().um8_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.wm8_1 = null;
    else
      $this.wm8_1 = fullyRead;
    if (0 === (seen0 & 2))
      $this.xm8_1 = null;
    else
      $this.xm8_1 = read;
    if (0 === (seen0 & 4))
      $this.ym8_1 = null;
    else
      $this.ym8_1 = readPrivate;
    return $this;
  }
}
class SendMessageBody {
  constructor(msgtype, body, format, formattedBody, url, filename, mimetype, thumbnailUrl, thumbnailMimetype, thumbnailSize, width, height, duration, geoUri, description, relatesTo) {
    format = format === VOID ? null : format;
    formattedBody = formattedBody === VOID ? null : formattedBody;
    url = url === VOID ? null : url;
    filename = filename === VOID ? null : filename;
    mimetype = mimetype === VOID ? null : mimetype;
    thumbnailUrl = thumbnailUrl === VOID ? null : thumbnailUrl;
    thumbnailMimetype = thumbnailMimetype === VOID ? null : thumbnailMimetype;
    thumbnailSize = thumbnailSize === VOID ? null : thumbnailSize;
    width = width === VOID ? null : width;
    height = height === VOID ? null : height;
    duration = duration === VOID ? null : duration;
    geoUri = geoUri === VOID ? null : geoUri;
    description = description === VOID ? null : description;
    relatesTo = relatesTo === VOID ? null : relatesTo;
    this.cm9_1 = msgtype;
    this.dm9_1 = body;
    this.em9_1 = format;
    this.fm9_1 = formattedBody;
    this.gm9_1 = url;
    this.hm9_1 = filename;
    this.im9_1 = mimetype;
    this.jm9_1 = thumbnailUrl;
    this.km9_1 = thumbnailMimetype;
    this.lm9_1 = thumbnailSize;
    this.mm9_1 = width;
    this.nm9_1 = height;
    this.om9_1 = duration;
    this.pm9_1 = geoUri;
    this.qm9_1 = description;
    this.rm9_1 = relatesTo;
  }
  toString() {
    return 'SendMessageBody(msgtype=' + this.cm9_1 + ', body=' + this.dm9_1 + ', format=' + this.em9_1 + ', formattedBody=' + this.fm9_1 + ', url=' + this.gm9_1 + ', filename=' + this.hm9_1 + ', mimetype=' + this.im9_1 + ', thumbnailUrl=' + this.jm9_1 + ', thumbnailMimetype=' + this.km9_1 + ', thumbnailSize=' + toString(this.lm9_1) + ', width=' + toString(this.mm9_1) + ', height=' + toString(this.nm9_1) + ', duration=' + toString(this.om9_1) + ', geoUri=' + this.pm9_1 + ', description=' + this.qm9_1 + ', relatesTo=' + toString(this.rm9_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.cm9_1);
    result = imul(result, 31) + getStringHashCode(this.dm9_1) | 0;
    result = imul(result, 31) + (this.em9_1 == null ? 0 : getStringHashCode(this.em9_1)) | 0;
    result = imul(result, 31) + (this.fm9_1 == null ? 0 : getStringHashCode(this.fm9_1)) | 0;
    result = imul(result, 31) + (this.gm9_1 == null ? 0 : getStringHashCode(this.gm9_1)) | 0;
    result = imul(result, 31) + (this.hm9_1 == null ? 0 : getStringHashCode(this.hm9_1)) | 0;
    result = imul(result, 31) + (this.im9_1 == null ? 0 : getStringHashCode(this.im9_1)) | 0;
    result = imul(result, 31) + (this.jm9_1 == null ? 0 : getStringHashCode(this.jm9_1)) | 0;
    result = imul(result, 31) + (this.km9_1 == null ? 0 : getStringHashCode(this.km9_1)) | 0;
    result = imul(result, 31) + (this.lm9_1 == null ? 0 : getBigIntHashCode(this.lm9_1)) | 0;
    result = imul(result, 31) + (this.mm9_1 == null ? 0 : getBigIntHashCode(this.mm9_1)) | 0;
    result = imul(result, 31) + (this.nm9_1 == null ? 0 : getBigIntHashCode(this.nm9_1)) | 0;
    result = imul(result, 31) + (this.om9_1 == null ? 0 : getBigIntHashCode(this.om9_1)) | 0;
    result = imul(result, 31) + (this.pm9_1 == null ? 0 : getStringHashCode(this.pm9_1)) | 0;
    result = imul(result, 31) + (this.qm9_1 == null ? 0 : getStringHashCode(this.qm9_1)) | 0;
    result = imul(result, 31) + (this.rm9_1 == null ? 0 : this.rm9_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageBody))
      return false;
    if (!(this.cm9_1 === other.cm9_1))
      return false;
    if (!(this.dm9_1 === other.dm9_1))
      return false;
    if (!(this.em9_1 == other.em9_1))
      return false;
    if (!(this.fm9_1 == other.fm9_1))
      return false;
    if (!(this.gm9_1 == other.gm9_1))
      return false;
    if (!(this.hm9_1 == other.hm9_1))
      return false;
    if (!(this.im9_1 == other.im9_1))
      return false;
    if (!(this.jm9_1 == other.jm9_1))
      return false;
    if (!(this.km9_1 == other.km9_1))
      return false;
    if (!(this.lm9_1 == other.lm9_1))
      return false;
    if (!(this.mm9_1 == other.mm9_1))
      return false;
    if (!(this.nm9_1 == other.nm9_1))
      return false;
    if (!(this.om9_1 == other.om9_1))
      return false;
    if (!(this.pm9_1 == other.pm9_1))
      return false;
    if (!(this.qm9_1 == other.qm9_1))
      return false;
    if (!equals(this.rm9_1, other.rm9_1))
      return false;
    return true;
  }
  static sm9(seen0, msgtype, body, format, formattedBody, url, filename, mimetype, thumbnailUrl, thumbnailMimetype, thumbnailSize, width, height, duration, geoUri, description, relatesTo, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_107().am9_1);
    }
    var $this = createThis(this);
    $this.cm9_1 = msgtype;
    $this.dm9_1 = body;
    if (0 === (seen0 & 4))
      $this.em9_1 = null;
    else
      $this.em9_1 = format;
    if (0 === (seen0 & 8))
      $this.fm9_1 = null;
    else
      $this.fm9_1 = formattedBody;
    if (0 === (seen0 & 16))
      $this.gm9_1 = null;
    else
      $this.gm9_1 = url;
    if (0 === (seen0 & 32))
      $this.hm9_1 = null;
    else
      $this.hm9_1 = filename;
    if (0 === (seen0 & 64))
      $this.im9_1 = null;
    else
      $this.im9_1 = mimetype;
    if (0 === (seen0 & 128))
      $this.jm9_1 = null;
    else
      $this.jm9_1 = thumbnailUrl;
    if (0 === (seen0 & 256))
      $this.km9_1 = null;
    else
      $this.km9_1 = thumbnailMimetype;
    if (0 === (seen0 & 512))
      $this.lm9_1 = null;
    else
      $this.lm9_1 = thumbnailSize;
    if (0 === (seen0 & 1024))
      $this.mm9_1 = null;
    else
      $this.mm9_1 = width;
    if (0 === (seen0 & 2048))
      $this.nm9_1 = null;
    else
      $this.nm9_1 = height;
    if (0 === (seen0 & 4096))
      $this.om9_1 = null;
    else
      $this.om9_1 = duration;
    if (0 === (seen0 & 8192))
      $this.pm9_1 = null;
    else
      $this.pm9_1 = geoUri;
    if (0 === (seen0 & 16384))
      $this.qm9_1 = null;
    else
      $this.qm9_1 = description;
    if (0 === (seen0 & 32768))
      $this.rm9_1 = null;
    else
      $this.rm9_1 = relatesTo;
    return $this;
  }
}
class SendMessageRelatesTo {
  constructor(inReplyTo, annotation, reference) {
    inReplyTo = inReplyTo === VOID ? null : inReplyTo;
    annotation = annotation === VOID ? null : annotation;
    reference = reference === VOID ? null : reference;
    this.vm9_1 = inReplyTo;
    this.wm9_1 = annotation;
    this.xm9_1 = reference;
  }
  toString() {
    return 'SendMessageRelatesTo(inReplyTo=' + toString(this.vm9_1) + ', annotation=' + toString(this.wm9_1) + ', reference=' + toString(this.xm9_1) + ')';
  }
  hashCode() {
    var result = this.vm9_1 == null ? 0 : this.vm9_1.hashCode();
    result = imul(result, 31) + (this.wm9_1 == null ? 0 : this.wm9_1.hashCode()) | 0;
    result = imul(result, 31) + (this.xm9_1 == null ? 0 : this.xm9_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageRelatesTo))
      return false;
    if (!equals(this.vm9_1, other.vm9_1))
      return false;
    if (!equals(this.wm9_1, other.wm9_1))
      return false;
    if (!equals(this.xm9_1, other.xm9_1))
      return false;
    return true;
  }
  static ym9(seen0, inReplyTo, annotation, reference, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_108().tm9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.vm9_1 = null;
    else
      $this.vm9_1 = inReplyTo;
    if (0 === (seen0 & 2))
      $this.wm9_1 = null;
    else
      $this.wm9_1 = annotation;
    if (0 === (seen0 & 4))
      $this.xm9_1 = null;
    else
      $this.xm9_1 = reference;
    return $this;
  }
}
class SendMessageInReplyTo {
  constructor(eventId) {
    this.bma_1 = eventId;
  }
  toString() {
    return 'SendMessageInReplyTo(eventId=' + this.bma_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.bma_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageInReplyTo))
      return false;
    if (!(this.bma_1 === other.bma_1))
      return false;
    return true;
  }
  static cma(seen0, eventId, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_109().zm9_1);
    }
    var $this = createThis(this);
    $this.bma_1 = eventId;
    return $this;
  }
}
class SendMessageAnnotation {
  constructor(eventId, key, relType) {
    relType = relType === VOID ? null : relType;
    this.fma_1 = eventId;
    this.gma_1 = key;
    this.hma_1 = relType;
  }
  toString() {
    return 'SendMessageAnnotation(eventId=' + this.fma_1 + ', key=' + this.gma_1 + ', relType=' + this.hma_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.fma_1);
    result = imul(result, 31) + getStringHashCode(this.gma_1) | 0;
    result = imul(result, 31) + (this.hma_1 == null ? 0 : getStringHashCode(this.hma_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageAnnotation))
      return false;
    if (!(this.fma_1 === other.fma_1))
      return false;
    if (!(this.gma_1 === other.gma_1))
      return false;
    if (!(this.hma_1 == other.hma_1))
      return false;
    return true;
  }
  static ima(seen0, eventId, key, relType, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_110().dma_1);
    }
    var $this = createThis(this);
    $this.fma_1 = eventId;
    $this.gma_1 = key;
    if (0 === (seen0 & 4))
      $this.hma_1 = null;
    else
      $this.hma_1 = relType;
    return $this;
  }
}
class SendMessageReference {
  constructor(eventId, relType) {
    relType = relType === VOID ? null : relType;
    this.lma_1 = eventId;
    this.mma_1 = relType;
  }
  toString() {
    return 'SendMessageReference(eventId=' + this.lma_1 + ', relType=' + this.mma_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.lma_1);
    result = imul(result, 31) + (this.mma_1 == null ? 0 : getStringHashCode(this.mma_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageReference))
      return false;
    if (!(this.lma_1 === other.lma_1))
      return false;
    if (!(this.mma_1 == other.mma_1))
      return false;
    return true;
  }
  static nma(seen0, eventId, relType, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_111().jma_1);
    }
    var $this = createThis(this);
    $this.lma_1 = eventId;
    if (0 === (seen0 & 2))
      $this.mma_1 = null;
    else
      $this.mma_1 = relType;
    return $this;
  }
}
class BanBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.qma_1 = userId;
    this.rma_1 = reason;
  }
  toString() {
    return 'BanBody(userId=' + this.qma_1 + ', reason=' + this.rma_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.qma_1);
    result = imul(result, 31) + (this.rma_1 == null ? 0 : getStringHashCode(this.rma_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof BanBody))
      return false;
    if (!(this.qma_1 === other.qma_1))
      return false;
    if (!(this.rma_1 == other.rma_1))
      return false;
    return true;
  }
  static sma(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_112().oma_1);
    }
    var $this = createThis(this);
    $this.qma_1 = userId;
    if (0 === (seen0 & 2))
      $this.rma_1 = null;
    else
      $this.rma_1 = reason;
    return $this;
  }
}
class UnbanBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.vma_1 = userId;
    this.wma_1 = reason;
  }
  toString() {
    return 'UnbanBody(userId=' + this.vma_1 + ', reason=' + this.wma_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.vma_1);
    result = imul(result, 31) + (this.wma_1 == null ? 0 : getStringHashCode(this.wma_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof UnbanBody))
      return false;
    if (!(this.vma_1 === other.vma_1))
      return false;
    if (!(this.wma_1 == other.wma_1))
      return false;
    return true;
  }
  static xma(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_113().tma_1);
    }
    var $this = createThis(this);
    $this.vma_1 = userId;
    if (0 === (seen0 & 2))
      $this.wma_1 = null;
    else
      $this.wma_1 = reason;
    return $this;
  }
}
class KickBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.amb_1 = userId;
    this.bmb_1 = reason;
  }
  toString() {
    return 'KickBody(userId=' + this.amb_1 + ', reason=' + this.bmb_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.amb_1);
    result = imul(result, 31) + (this.bmb_1 == null ? 0 : getStringHashCode(this.bmb_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof KickBody))
      return false;
    if (!(this.amb_1 === other.amb_1))
      return false;
    if (!(this.bmb_1 == other.bmb_1))
      return false;
    return true;
  }
  static cmb(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_114().yma_1);
    }
    var $this = createThis(this);
    $this.amb_1 = userId;
    if (0 === (seen0 & 2))
      $this.bmb_1 = null;
    else
      $this.bmb_1 = reason;
    return $this;
  }
}
class RoomsResourceImpl$createRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.gmb_1 = this$0;
    this.hmb_1 = $request;
  }
  *imb($this$toBlocking, $completion) {
    return yield* this.gmb_1.jl4(this.hmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.imb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$joinRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.jmb_1 = this$0;
    this.kmb_1 = $request;
  }
  *lmb($this$toBlocking, $completion) {
    return yield* this.jmb_1.ml4(this.kmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.lmb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$leaveRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.mmb_1 = this$0;
    this.nmb_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.mmb_1.pl4(this.nmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$inviteBlocking$slambda {
  constructor(this$0, $request) {
    this.omb_1 = this$0;
    this.pmb_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.omb_1.sl4(this.pmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getJoinedRoomsBlocking$slambda {
  constructor(this$0) {
    this.qmb_1 = this$0;
  }
  *rmb($this$toBlocking, $completion) {
    return yield* this.qmb_1.cl4($completion);
  }
  wd(p1, $completion) {
    return this.rmb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getRoomNameBlocking$slambda {
  constructor(this$0, $roomId) {
    this.smb_1 = this$0;
    this.tmb_1 = $roomId;
  }
  *umb($this$toBlocking, $completion) {
    return yield* this.smb_1.dl4(this.tmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.umb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getMembersBlocking$slambda {
  constructor(this$0, $roomId) {
    this.vmb_1 = this$0;
    this.wmb_1 = $roomId;
  }
  *xmb($this$toBlocking, $completion) {
    return yield* this.vmb_1.zl4(this.wmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.xmb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getJoinedMembersBlocking$slambda {
  constructor(this$0, $roomId) {
    this.ymb_1 = this$0;
    this.zmb_1 = $roomId;
  }
  *amc($this$toBlocking, $completion) {
    return yield* this.ymb_1.el4(this.zmb_1, $completion);
  }
  wd(p1, $completion) {
    return this.amc((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getMessagesBlocking$slambda {
  constructor(this$0, $request) {
    this.bmc_1 = this$0;
    this.cmc_1 = $request;
  }
  *dmc($this$toBlocking, $completion) {
    return yield* this.bmc_1.fl4(this.cmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.dmc((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$sendMessageBlocking$slambda {
  constructor(this$0, $request) {
    this.emc_1 = this$0;
    this.fmc_1 = $request;
  }
  *gmc($this$toBlocking, $completion) {
    return yield* this.emc_1.gl4(this.fmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.gmc((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$redactEventBlocking$slambda {
  constructor(this$0, $request) {
    this.hmc_1 = this$0;
    this.imc_1 = $request;
  }
  *jmc($this$toBlocking, $completion) {
    return yield* this.hmc_1.hl4(this.imc_1, $completion);
  }
  wd(p1, $completion) {
    return this.jmc((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$setTypingBlocking$slambda {
  constructor(this$0, $request) {
    this.kmc_1 = this$0;
    this.lmc_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.kmc_1.kl5(this.lmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$sendReceiptBlocking$slambda {
  constructor(this$0, $request) {
    this.mmc_1 = this$0;
    this.nmc_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.mmc_1.nl5(this.nmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$setReadMarkersBlocking$slambda {
  constructor(this$0, $request) {
    this.omc_1 = this$0;
    this.pmc_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.omc_1.ql5(this.pmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$banBlocking$slambda {
  constructor(this$0, $request) {
    this.qmc_1 = this$0;
    this.rmc_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.qmc_1.tl5(this.rmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$unbanBlocking$slambda {
  constructor(this$0, $request) {
    this.smc_1 = this$0;
    this.tmc_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.smc_1.wl5(this.tmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$kickBlocking$slambda {
  constructor(this$0, $request) {
    this.umc_1 = this$0;
    this.vmc_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.umc_1.zl5(this.vmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getStateEventBlocking$slambda {
  constructor(this$0, $roomId, $eventType, $stateKey) {
    this.wmc_1 = this$0;
    this.xmc_1 = $roomId;
    this.ymc_1 = $eventType;
    this.zmc_1 = $stateKey;
  }
  *blx($this$toBlocking, $completion) {
    return yield* this.wmc_1.dl6(this.xmc_1, this.ymc_1, this.zmc_1, $completion);
  }
  wd(p1, $completion) {
    return this.blx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$sendStateEventBlocking$slambda {
  constructor(this$0, $request) {
    this.amd_1 = this$0;
    this.bmd_1 = $request;
  }
  *cmd($this$toBlocking, $completion) {
    return yield* this.amd_1.hl6(this.bmd_1, $completion);
  }
  wd(p1, $completion) {
    return this.cmd((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$forgetRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.dmd_1 = this$0;
    this.emd_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.dmd_1.kl6(this.emd_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getStateBlocking$slambda {
  constructor(this$0, $roomId) {
    this.fmd_1 = this$0;
    this.gmd_1 = $roomId;
  }
  *hmd($this$toBlocking, $completion) {
    return yield* this.fmd_1.nl6(this.gmd_1, $completion);
  }
  wd(p1, $completion) {
    return this.hmd((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl extends AbstractAuthResourceImpl {
  constructor(uri, accessToken) {
    super(uri, accessToken);
    this.fmb_1 = 0n;
  }
  *il4(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new CreateRoomBody(request.visibility, request.roomAliasName, request.name, request.topic, request.invite, request.preset, request.isDirect);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(CreateRoomBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/createRoom').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsCreateRoomResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createRoom(request) {
    return promisify(($completion) => this.il4(request, $completion));
  }
  *jl4(request, $completion) {
    return this.createRoom === protoOf(RoomsResourceImpl).createRoom ? (yield* this.il4(request, $completion)) : (yield* await_0(this.createRoom(request), $completion));
  }
  kl4(request) {
    return toBlocking(RoomsResourceImpl$createRoomBlocking$slambda_0(this, request));
  }
  *ll4(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomIdOrAlias;
        var roomIdOrAlias = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new JoinRoomBody(request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(JoinRoomBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/join/' + roomIdOrAlias).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsJoinRoomResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  joinRoom(request) {
    return promisify(($completion) => this.ll4(request, $completion));
  }
  *ml4(request, $completion) {
    return this.joinRoom === protoOf(RoomsResourceImpl).joinRoom ? (yield* this.ll4(request, $completion)) : (yield* await_0(this.joinRoom(request), $completion));
  }
  nl4(request) {
    return toBlocking(RoomsResourceImpl$joinRoomBlocking$slambda_0(this, request));
  }
  *ol4(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new LeaveRoomBody(request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(LeaveRoomBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/leave').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  leaveRoom(request) {
    return promisify(($completion) => this.ol4(request, $completion));
  }
  *pl4(request, $completion) {
    return this.leaveRoom === protoOf(RoomsResourceImpl).leaveRoom ? (yield* this.ol4(request, $completion)) : (yield* await_0(this.leaveRoom(request), $completion));
  }
  ql4(request) {
    return toBlocking(RoomsResourceImpl$leaveRoomBlocking$slambda_0(this, request));
  }
  *rl4(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new InviteBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(InviteBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/invite').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  invite(request) {
    return promisify(($completion) => this.rl4(request, $completion));
  }
  *sl4(request, $completion) {
    return this.invite === protoOf(RoomsResourceImpl).invite ? (yield* this.rl4(request, $completion)) : (yield* await_0(this.invite(request), $completion));
  }
  tl4(request) {
    return toBlocking(RoomsResourceImpl$inviteBlocking$slambda_0(this, request));
  }
  *ul4($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/joined_rooms').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetJoinedRoomsResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getJoinedRooms() {
    return promisify(($completion) => this.ul4($completion));
  }
  *cl4($completion) {
    return this.getJoinedRooms === protoOf(RoomsResourceImpl).getJoinedRooms ? (yield* this.ul4($completion)) : (yield* await_0(this.getJoinedRooms(), $completion));
  }
  vl4() {
    return toBlocking(RoomsResourceImpl$getJoinedRoomsBlocking$slambda_0(this));
  }
  *wl4(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/m.room.name').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetRoomNameResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getRoomName(roomId) {
    return promisify(($completion) => this.wl4(roomId, $completion));
  }
  *dl4(roomId, $completion) {
    return this.getRoomName === protoOf(RoomsResourceImpl).getRoomName ? (yield* this.wl4(roomId, $completion)) : (yield* await_0(this.getRoomName(roomId), $completion));
  }
  xl4(roomId) {
    return toBlocking(RoomsResourceImpl$getRoomNameBlocking$slambda_0(this, roomId));
  }
  *yl4(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/members').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetMembersResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getMembers(roomId) {
    return promisify(($completion) => this.yl4(roomId, $completion));
  }
  *zl4(roomId, $completion) {
    return this.getMembers === protoOf(RoomsResourceImpl).getMembers ? (yield* this.yl4(roomId, $completion)) : (yield* await_0(this.getMembers(roomId), $completion));
  }
  al5(roomId) {
    return toBlocking(RoomsResourceImpl$getMembersBlocking$slambda_0(this, roomId));
  }
  *bl5(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/joined_members').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetJoinedMembersResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getJoinedMembers(roomId) {
    return promisify(($completion) => this.bl5(roomId, $completion));
  }
  *el4(roomId, $completion) {
    return this.getJoinedMembers === protoOf(RoomsResourceImpl).getJoinedMembers ? (yield* this.bl5(roomId, $completion)) : (yield* await_0(this.getJoinedMembers(roomId), $completion));
  }
  cl5(roomId) {
    return toBlocking(RoomsResourceImpl$getJoinedMembersBlocking$slambda_0(this, roomId));
  }
  *dl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var response = yield* this.sco(this.sco(this.sco(this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/messages').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'from', request.from), 'to', request.to), 'dir', request.dir), 'limit', request.limit), 'filter', request.filter).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetMessagesResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getMessages(request) {
    return promisify(($completion) => this.dl5(request, $completion));
  }
  *fl4(request, $completion) {
    return this.getMessages === protoOf(RoomsResourceImpl).getMessages ? (yield* this.dl5(request, $completion)) : (yield* await_0(this.getMessages(request), $completion));
  }
  el5(request) {
    return toBlocking(RoomsResourceImpl$getMessagesBlocking$slambda_0(this, request));
  }
  *fl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var txnId = generateTxnId(this);
        var tmp;
        if (!(request.relatesToType == null) || !(request.relatesToEventId == null) || !(request.relatesToKey == null) || !(request.relatesToRelType == null) || !(request.replyTo == null)) {
          var tmp_0;
          if (!(request.replyTo == null) || request.relatesToType === 'm.in_reply_to') {
            var tmp1_elvis_lhs = request.replyTo;
            var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? request.relatesToEventId : tmp1_elvis_lhs;
            tmp_0 = new SendMessageInReplyTo(tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
          } else {
            tmp_0 = null;
          }
          var tmp_1 = tmp_0;
          var tmp_2;
          if (request.relatesToType === 'm.annotation') {
            var tmp3_elvis_lhs = request.relatesToEventId;
            var tmp_3 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
            var tmp4_elvis_lhs = request.relatesToKey;
            tmp_2 = new SendMessageAnnotation(tmp_3, tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs, request.relatesToRelType);
          } else {
            tmp_2 = null;
          }
          var tmp_4 = tmp_2;
          var tmp_5;
          if (request.relatesToType === 'm.reference') {
            var tmp5_elvis_lhs = request.relatesToEventId;
            tmp_5 = new SendMessageReference(tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs, request.relatesToRelType);
          } else {
            tmp_5 = null;
          }
          tmp = new SendMessageRelatesTo(tmp_1, tmp_4, tmp_5);
        } else {
          tmp = null;
        }
        var relatesTo = tmp;
        var isHtml = request.msgtype === 'm.text' && !(request.body == null) && contains(ensureNotNull(request.body), '<') && contains(ensureNotNull(request.body), '>');
        var tmp0 = InternalUtility_getInstance();
        var tmp6_elvis_lhs = request.msgtype;
        var tmp_6 = tmp6_elvis_lhs == null ? 'm.text' : tmp6_elvis_lhs;
        var tmp7_elvis_lhs = request.body;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SendMessageBody(tmp_6, tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs, isHtml ? 'org.matrix.custom.html' : null, isHtml ? request.body : null, request.url, request.filename, request.mimetype, request.thumbnailUrl, request.thumbnailMimetype, request.thumbnailSize, request.width, request.height, request.duration, request.geoUri, request.description, relatesTo);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SendMessageBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/send/m.room.message/' + txnId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsSendMessageResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sendMessage(request) {
    return promisify(($completion) => this.fl5(request, $completion));
  }
  *gl4(request, $completion) {
    return this.sendMessage === protoOf(RoomsResourceImpl).sendMessage ? (yield* this.fl5(request, $completion)) : (yield* await_0(this.sendMessage(request), $completion));
  }
  gl5(request) {
    return toBlocking(RoomsResourceImpl$sendMessageBlocking$slambda_0(this, request));
  }
  *hl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.eventId;
        var eventId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var txnId = generateTxnId(this);
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new RedactEventBody(request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(RedactEventBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/redact/' + eventId + '/' + txnId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsRedactEventResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  redactEvent(request) {
    return promisify(($completion) => this.hl5(request, $completion));
  }
  *hl4(request, $completion) {
    return this.redactEvent === protoOf(RoomsResourceImpl).redactEvent ? (yield* this.hl5(request, $completion)) : (yield* await_0(this.redactEvent(request), $completion));
  }
  il5(request) {
    return toBlocking(RoomsResourceImpl$redactEventBlocking$slambda_0(this, request));
  }
  *jl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.userId;
        var userId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp2_elvis_lhs = request.typing;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new TypingBody(tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs, request.timeout);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(TypingBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/typing/' + userId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setTyping(request) {
    return promisify(($completion) => this.jl5(request, $completion));
  }
  *kl5(request, $completion) {
    return this.setTyping === protoOf(RoomsResourceImpl).setTyping ? (yield* this.jl5(request, $completion)) : (yield* await_0(this.setTyping(request), $completion));
  }
  ll5(request) {
    return toBlocking(RoomsResourceImpl$setTypingBlocking$slambda_0(this, request));
  }
  *ml5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.receiptType;
        var receiptType = tmp1_elvis_lhs == null ? 'm.read' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.eventId;
        var eventId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SendReceiptBody(request.threadId);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SendReceiptBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/receipt/' + receiptType + '/' + eventId).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sendReceipt(request) {
    return promisify(($completion) => this.ml5(request, $completion));
  }
  *nl5(request, $completion) {
    return this.sendReceipt === protoOf(RoomsResourceImpl).sendReceipt ? (yield* this.ml5(request, $completion)) : (yield* await_0(this.sendReceipt(request), $completion));
  }
  ol5(request) {
    return toBlocking(RoomsResourceImpl$sendReceiptBlocking$slambda_0(this, request));
  }
  *pl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetReadMarkersBody(request.fullyRead, request.read, request.readPrivate);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetReadMarkersBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/read_markers').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setReadMarkers(request) {
    return promisify(($completion) => this.pl5(request, $completion));
  }
  *ql5(request, $completion) {
    return this.setReadMarkers === protoOf(RoomsResourceImpl).setReadMarkers ? (yield* this.pl5(request, $completion)) : (yield* await_0(this.setReadMarkers(request), $completion));
  }
  rl5(request) {
    return toBlocking(RoomsResourceImpl$setReadMarkersBlocking$slambda_0(this, request));
  }
  *sl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new BanBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(BanBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/ban').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  ban(request) {
    return promisify(($completion) => this.sl5(request, $completion));
  }
  *tl5(request, $completion) {
    return this.ban === protoOf(RoomsResourceImpl).ban ? (yield* this.sl5(request, $completion)) : (yield* await_0(this.ban(request), $completion));
  }
  ul5(request) {
    return toBlocking(RoomsResourceImpl$banBlocking$slambda_0(this, request));
  }
  *vl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new UnbanBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(UnbanBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/unban').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unban(request) {
    return promisify(($completion) => this.vl5(request, $completion));
  }
  *wl5(request, $completion) {
    return this.unban === protoOf(RoomsResourceImpl).unban ? (yield* this.vl5(request, $completion)) : (yield* await_0(this.unban(request), $completion));
  }
  xl5(request) {
    return toBlocking(RoomsResourceImpl$unbanBlocking$slambda_0(this, request));
  }
  *yl5(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new KickBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(KickBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/kick').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  kick(request) {
    return promisify(($completion) => this.yl5(request, $completion));
  }
  *zl5(request, $completion) {
    return this.kick === protoOf(RoomsResourceImpl).kick ? (yield* this.yl5(request, $completion)) : (yield* await_0(this.kick(request), $completion));
  }
  al6(request) {
    return toBlocking(RoomsResourceImpl$kickBlocking$slambda_0(this, request));
  }
  *bl6(roomId, eventType, stateKey, $completion) {
    try {
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(stateKey) === 0) {
        tmp = this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType;
      } else {
        tmp = this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType + '/' + stateKey;
      }
      var url = tmp;
      var response = yield* (new HttpRequest()).n54(url).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
      if (response.d55_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new Response(response.h55());
        this_0.json = response.h55();
        return this_0;
      }
      throw MatrixException.rky(response.d55_1, response.h55());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  getStateEvent(roomId, eventType, stateKey) {
    return promisify(($completion) => this.cl6(roomId, eventType, stateKey, $completion));
  }
  *dl6(roomId, eventType, stateKey, $completion) {
    return this.getStateEvent === protoOf(RoomsResourceImpl).getStateEvent ? (yield* this.cl6(roomId, eventType, stateKey, $completion)) : (yield* await_0(this.getStateEvent(roomId, eventType, stateKey), $completion));
  }
  el6(roomId, eventType, stateKey) {
    return toBlocking(RoomsResourceImpl$getStateEventBlocking$slambda_0(this, roomId, eventType, stateKey));
  }
  *gl6(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.eventType;
        var eventType = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.stateKey;
        var stateKey = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp;
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(stateKey) === 0) {
          tmp = this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType;
        } else {
          tmp = this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType + '/' + stateKey;
        }
        var url = tmp;
        var tmp_0 = (new HttpRequest()).n54(url).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1);
        var tmp3_elvis_lhs = request.body;
        var response = yield* tmp_0.m53(tmp3_elvis_lhs == null ? '{}' : tmp3_elvis_lhs).a55($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsSendStateEventResponse), arrayOf([]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.oz(tmp$ret$5, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$3);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sendStateEvent(request) {
    return promisify(($completion) => this.gl6(request, $completion));
  }
  *hl6(request, $completion) {
    return this.sendStateEvent === protoOf(RoomsResourceImpl).sendStateEvent ? (yield* this.gl6(request, $completion)) : (yield* await_0(this.sendStateEvent(request), $completion));
  }
  il6(request) {
    return toBlocking(RoomsResourceImpl$sendStateEventBlocking$slambda_0(this, request));
  }
  *jl6(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + request.roomId + '/forget').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53('{}').z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  forgetRoom(request) {
    return promisify(($completion) => this.jl6(request, $completion));
  }
  *kl6(request, $completion) {
    return this.forgetRoom === protoOf(RoomsResourceImpl).forgetRoom ? (yield* this.jl6(request, $completion)) : (yield* await_0(this.forgetRoom(request), $completion));
  }
  ll6(request) {
    return toBlocking(RoomsResourceImpl$forgetRoomBlocking$slambda_0(this, request));
  }
  *ml6(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/rooms/' + roomId + '/state').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(RoomsStateEvent), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getState(roomId) {
    return promisify(($completion) => this.ml6(roomId, $completion));
  }
  *nl6(roomId, $completion) {
    return this.getState === protoOf(RoomsResourceImpl).getState ? (yield* this.ml6(roomId, $completion)) : (yield* await_0(this.getState(roomId), $completion));
  }
  ol6(roomId) {
    return toBlocking(RoomsResourceImpl$getStateBlocking$slambda_0(this, roomId));
  }
}
class Companion_116 {}
class $serializer_115 {
  constructor() {
    $serializer_instance_115 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchBody', this, 1);
    tmp0_serialDesc.m1a('search_categories', false);
    this.imd_1 = tmp0_serialDesc;
  }
  jmd(encoder, value) {
    var tmp0_desc = this.imd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_116(), value.kmd_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jmd(encoder, value instanceof SearchBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.imd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_116(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_116(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SearchBody.lmd(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.imd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_116()];
  }
}
class Companion_117 {}
class $serializer_116 {
  constructor() {
    $serializer_instance_116 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchCategoriesBody', this, 1);
    tmp0_serialDesc.m1a('room_events', false);
    this.mmd_1 = tmp0_serialDesc;
  }
  nmd(encoder, value) {
    var tmp0_desc = this.mmd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_117(), value.omd_1);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nmd(encoder, value instanceof SearchCategoriesBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mmd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_117(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_117(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SearchCategoriesBody.pmd(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.mmd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_117()];
  }
}
class Companion_118 {
  constructor() {
    Companion_instance_118 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qmd_1 = [null, lazy(tmp_0, SearchResourceImpl$SearchRoomEventsBody$Companion$$childSerializers$_anonymous__dvhhb6), null, null];
  }
}
class $serializer_117 {
  constructor() {
    $serializer_instance_117 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchRoomEventsBody', this, 4);
    tmp0_serialDesc.m1a('search_term', false);
    tmp0_serialDesc.m1a('keys', true);
    tmp0_serialDesc.m1a('order_by', true);
    tmp0_serialDesc.m1a('filter', true);
    this.rmd_1 = tmp0_serialDesc;
  }
  smd(encoder, value) {
    var tmp0_desc = this.rmd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_119().qmd_1;
    tmp1_output.j14(tmp0_desc, 0, value.tmd_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.umd_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.umd_1);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.vmd_1 == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.vmd_1);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.wmd_1 == null)) {
      tmp1_output.m14(tmp0_desc, 3, $serializer_getInstance_118(), value.wmd_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.smd(encoder, value instanceof SearchRoomEventsBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rmd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_119().qmd_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, tmp9_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, $serializer_getInstance_118(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, tmp9_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, $serializer_getInstance_118(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return SearchRoomEventsBody.xmd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.rmd_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_119().qmd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1].y2()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_118())];
  }
}
class Companion_119 {
  constructor() {
    Companion_instance_119 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ymd_1 = [lazy(tmp_0, SearchResourceImpl$SearchFilterBody$Companion$$childSerializers$_anonymous__ydckg6)];
  }
}
class $serializer_118 {
  constructor() {
    $serializer_instance_118 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchFilterBody', this, 1);
    tmp0_serialDesc.m1a('rooms', true);
    this.zmd_1 = tmp0_serialDesc;
  }
  ame(encoder, value) {
    var tmp0_desc = this.zmd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_120().ymd_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.bme_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.bme_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ame(encoder, value instanceof SearchFilterBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zmd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_120().ymd_1;
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, tmp6_cached[0].y2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SearchFilterBody.cme(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.zmd_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_120().ymd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2())];
  }
}
class SearchBody {
  constructor(searchCategories) {
    this.kmd_1 = searchCategories;
  }
  toString() {
    return 'SearchBody(searchCategories=' + this.kmd_1.toString() + ')';
  }
  hashCode() {
    return this.kmd_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchBody))
      return false;
    if (!this.kmd_1.equals(other.kmd_1))
      return false;
    return true;
  }
  static lmd(seen0, searchCategories, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_115().imd_1);
    }
    var $this = createThis(this);
    $this.kmd_1 = searchCategories;
    return $this;
  }
}
class SearchCategoriesBody {
  constructor(roomEvents) {
    this.omd_1 = roomEvents;
  }
  toString() {
    return 'SearchCategoriesBody(roomEvents=' + this.omd_1.toString() + ')';
  }
  hashCode() {
    return this.omd_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchCategoriesBody))
      return false;
    if (!this.omd_1.equals(other.omd_1))
      return false;
    return true;
  }
  static pmd(seen0, roomEvents, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_116().mmd_1);
    }
    var $this = createThis(this);
    $this.omd_1 = roomEvents;
    return $this;
  }
}
class SearchRoomEventsBody {
  constructor(searchTerm, keys, orderBy, filter) {
    Companion_getInstance_119();
    keys = keys === VOID ? null : keys;
    orderBy = orderBy === VOID ? null : orderBy;
    filter = filter === VOID ? null : filter;
    this.tmd_1 = searchTerm;
    this.umd_1 = keys;
    this.vmd_1 = orderBy;
    this.wmd_1 = filter;
  }
  toString() {
    return 'SearchRoomEventsBody(searchTerm=' + this.tmd_1 + ', keys=' + toString_0(this.umd_1) + ', orderBy=' + this.vmd_1 + ', filter=' + toString(this.wmd_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.tmd_1);
    result = imul(result, 31) + (this.umd_1 == null ? 0 : hashCode(this.umd_1)) | 0;
    result = imul(result, 31) + (this.vmd_1 == null ? 0 : getStringHashCode(this.vmd_1)) | 0;
    result = imul(result, 31) + (this.wmd_1 == null ? 0 : this.wmd_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchRoomEventsBody))
      return false;
    if (!(this.tmd_1 === other.tmd_1))
      return false;
    if (!equals(this.umd_1, other.umd_1))
      return false;
    if (!(this.vmd_1 == other.vmd_1))
      return false;
    if (!equals(this.wmd_1, other.wmd_1))
      return false;
    return true;
  }
  static xmd(seen0, searchTerm, keys, orderBy, filter, serializationConstructorMarker) {
    Companion_getInstance_119();
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_117().rmd_1);
    }
    var $this = createThis(this);
    $this.tmd_1 = searchTerm;
    if (0 === (seen0 & 2))
      $this.umd_1 = null;
    else
      $this.umd_1 = keys;
    if (0 === (seen0 & 4))
      $this.vmd_1 = null;
    else
      $this.vmd_1 = orderBy;
    if (0 === (seen0 & 8))
      $this.wmd_1 = null;
    else
      $this.wmd_1 = filter;
    return $this;
  }
}
class SearchFilterBody {
  constructor(rooms) {
    Companion_getInstance_120();
    rooms = rooms === VOID ? null : rooms;
    this.bme_1 = rooms;
  }
  toString() {
    return 'SearchFilterBody(rooms=' + toString_0(this.bme_1) + ')';
  }
  hashCode() {
    return this.bme_1 == null ? 0 : hashCode(this.bme_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchFilterBody))
      return false;
    if (!equals(this.bme_1, other.bme_1))
      return false;
    return true;
  }
  static cme(seen0, rooms, serializationConstructorMarker) {
    Companion_getInstance_120();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_118().zmd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.bme_1 = null;
    else
      $this.bme_1 = rooms;
    return $this;
  }
}
class SearchResourceImpl$searchBlocking$slambda {
  constructor(this$0, $request) {
    this.dme_1 = this$0;
    this.eme_1 = $request;
  }
  *fme($this$toBlocking, $completion) {
    return yield* this.dme_1.ql6(this.eme_1, $completion);
  }
  wd(p1, $completion) {
    return this.fme((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class SearchResourceImpl extends AbstractAuthResourceImpl {
  *pl6(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.searchTerm;
        var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp_0 = request.keys;
        var tmp_1 = request.orderBy;
        var tmp_2;
        if (!(request.roomIds == null)) {
          tmp_2 = new SearchFilterBody(request.roomIds);
        } else {
          tmp_2 = null;
        }
        var roomEvents = new SearchRoomEventsBody(tmp, tmp_0, tmp_1, tmp_2);
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SearchBody(new SearchCategoriesBody(roomEvents));
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SearchBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/search').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'next_batch', request.nextBatch).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(SearchResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  search(request) {
    return promisify(($completion) => this.pl6(request, $completion));
  }
  *ql6(request, $completion) {
    return this.search === protoOf(SearchResourceImpl).search ? (yield* this.pl6(request, $completion)) : (yield* await_0(this.search(request), $completion));
  }
  rl6(request) {
    return toBlocking(SearchResourceImpl$searchBlocking$slambda_0(this, request));
  }
}
class SyncResourceImpl$syncBlocking$slambda {
  constructor(this$0, $request) {
    this.ime_1 = this$0;
    this.jme_1 = $request;
  }
  *kme($this$toBlocking, $completion) {
    return yield* this.ime_1.tl6(this.jme_1, $completion);
  }
  wd(p1, $completion) {
    return this.kme((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class SyncResourceImpl extends AbstractAuthResourceImpl {
  *sl6(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco(this.sco(this.sco(this.sco((new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/sync').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1), 'since', request.since), 'timeout', request.timeout), 'filter', request.filter), 'full_state', request.fullState), 'set_presence', request.setPresence).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(SyncResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sync(request) {
    return promisify(($completion) => this.sl6(request, $completion));
  }
  *tl6(request, $completion) {
    return this.sync === protoOf(SyncResourceImpl).sync ? (yield* this.sl6(request, $completion)) : (yield* await_0(this.sync(request), $completion));
  }
  ul6(request) {
    return toBlocking(SyncResourceImpl$syncBlocking$slambda_0(this, request));
  }
}
class Companion_120 {}
class $serializer_119 {
  constructor() {
    $serializer_instance_119 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.TagsResourceImpl.SetTagBody', this, 1);
    tmp0_serialDesc.m1a('order', true);
    this.nme_1 = tmp0_serialDesc;
  }
  ome(encoder, value) {
    var tmp0_desc = this.nme_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.pme_1 == null)) {
      tmp1_output.m14(tmp0_desc, 0, DoubleSerializer_getInstance(), value.pme_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ome(encoder, value instanceof SetTagBody ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nme_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.i13(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return SetTagBody.qme(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.nme_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance())];
  }
}
class SetTagBody {
  constructor(order) {
    order = order === VOID ? null : order;
    this.pme_1 = order;
  }
  toString() {
    return 'SetTagBody(order=' + this.pme_1 + ')';
  }
  hashCode() {
    return this.pme_1 == null ? 0 : getNumberHashCode(this.pme_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetTagBody))
      return false;
    if (!equals(this.pme_1, other.pme_1))
      return false;
    return true;
  }
  static qme(seen0, order, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_119().nme_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.pme_1 = null;
    else
      $this.pme_1 = order;
    return $this;
  }
}
class TagsResourceImpl$getTagsBlocking$slambda {
  constructor(this$0, $userId, $roomId) {
    this.rme_1 = this$0;
    this.sme_1 = $userId;
    this.tme_1 = $roomId;
  }
  *ume($this$toBlocking, $completion) {
    return yield* this.rme_1.wl6(this.sme_1, this.tme_1, $completion);
  }
  wd(p1, $completion) {
    return this.ume((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TagsResourceImpl$setTagBlocking$slambda {
  constructor(this$0, $request) {
    this.vme_1 = this$0;
    this.wme_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.vme_1.zl6(this.wme_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TagsResourceImpl$deleteTagBlocking$slambda {
  constructor(this$0, $request) {
    this.xme_1 = this$0;
    this.yme_1 = $request;
  }
  *elx($this$toBlocking, $completion) {
    return yield* this.xme_1.cl7(this.yme_1, $completion);
  }
  wd(p1, $completion) {
    return this.elx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TagsResourceImpl extends AbstractAuthResourceImpl {
  *vl6(userId, roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + userId + '/rooms/' + roomId + '/tags').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(TagsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getTags(userId, roomId) {
    return promisify(($completion) => this.vl6(userId, roomId, $completion));
  }
  *wl6(userId, roomId, $completion) {
    return this.getTags === protoOf(TagsResourceImpl).getTags ? (yield* this.vl6(userId, roomId, $completion)) : (yield* await_0(this.getTags(userId, roomId), $completion));
  }
  xl6(userId, roomId) {
    return toBlocking(TagsResourceImpl$getTagsBlocking$slambda_0(this, userId, roomId));
  }
  *yl6(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.roomId;
        var roomId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.tag;
        var tag = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetTagBody(request.order);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetTagBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + userId + '/rooms/' + roomId + '/tags/' + tag).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).a55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setTag(request) {
    return promisify(($completion) => this.yl6(request, $completion));
  }
  *zl6(request, $completion) {
    return this.setTag === protoOf(TagsResourceImpl).setTag ? (yield* this.yl6(request, $completion)) : (yield* await_0(this.setTag(request), $completion));
  }
  al7(request) {
    return toBlocking(TagsResourceImpl$setTagBlocking$slambda_0(this, request));
  }
  *bl7(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.roomId;
        var roomId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.tag;
        var tag = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user/' + userId + '/rooms/' + roomId + '/tags/' + tag).p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteTag(request) {
    return promisify(($completion) => this.bl7(request, $completion));
  }
  *cl7(request, $completion) {
    return this.deleteTag === protoOf(TagsResourceImpl).deleteTag ? (yield* this.bl7(request, $completion)) : (yield* await_0(this.deleteTag(request), $completion));
  }
  dl7(request) {
    return toBlocking(TagsResourceImpl$deleteTagBlocking$slambda_0(this, request));
  }
}
class Companion_121 {}
class $serializer_120 {
  constructor() {
    $serializer_instance_120 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.UserDirectoryResourceImpl.SearchBody', this, 2);
    tmp0_serialDesc.m1a('search_term', false);
    tmp0_serialDesc.m1a('limit', true);
    this.bmf_1 = tmp0_serialDesc;
  }
  cmf(encoder, value) {
    var tmp0_desc = this.bmf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.dmf_1);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.emf_1 == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.emf_1);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.cmf(encoder, value instanceof SearchBody_0 ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.bmf_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return SearchBody_0.fmf(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.bmf_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class SearchBody_0 {
  constructor(searchTerm, limit) {
    limit = limit === VOID ? null : limit;
    this.dmf_1 = searchTerm;
    this.emf_1 = limit;
  }
  toString() {
    return 'SearchBody(searchTerm=' + this.dmf_1 + ', limit=' + this.emf_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.dmf_1);
    result = imul(result, 31) + (this.emf_1 == null ? 0 : this.emf_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchBody_0))
      return false;
    if (!(this.dmf_1 === other.dmf_1))
      return false;
    if (!(this.emf_1 == other.emf_1))
      return false;
    return true;
  }
  static fmf(seen0, searchTerm, limit, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_120().bmf_1);
    }
    var $this = createThis(this);
    $this.dmf_1 = searchTerm;
    if (0 === (seen0 & 2))
      $this.emf_1 = null;
    else
      $this.emf_1 = limit;
    return $this;
  }
}
class UserDirectoryResourceImpl$searchBlocking$slambda {
  constructor(this$0, $request) {
    this.gmf_1 = this$0;
    this.hmf_1 = $request;
  }
  *imf($this$toBlocking, $completion) {
    return yield* this.gmf_1.el7(this.hmf_1, $completion);
  }
  wd(p1, $completion) {
    return this.imf((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserDirectoryResourceImpl extends AbstractAuthResourceImpl {
  *fl7(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.searchTerm;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SearchBody_0(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, request.limit);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.tly_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ny();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SearchBody_0), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.nz(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/user_directory/search').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).m53(body).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(UserDirectorySearchResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.oz(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.h55();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.qky(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  search(request) {
    return promisify(($completion) => this.fl7(request, $completion));
  }
  *el7(request, $completion) {
    return this.search === protoOf(UserDirectoryResourceImpl).search ? (yield* this.fl7(request, $completion)) : (yield* await_0(this.search(request), $completion));
  }
  gl7(request) {
    return toBlocking(UserDirectoryResourceImpl$searchBlocking$slambda_0(this, request));
  }
}
class VersionsResourceImpl$getVersionsBlocking$slambda {
  constructor(this$0) {
    this.lmf_1 = this$0;
  }
  *mmf($this$toBlocking, $completion) {
    return yield* this.lmf_1.il7($completion);
  }
  wd(p1, $completion) {
    return this.mmf((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class VersionsResourceImpl extends AbstractResourceImpl {
  *hl7($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/versions').o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(VersionsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getVersions() {
    return promisify(($completion) => this.hl7($completion));
  }
  *il7($completion) {
    return this.getVersions === protoOf(VersionsResourceImpl).getVersions ? (yield* this.hl7($completion)) : (yield* await_0(this.getVersions(), $completion));
  }
  jl7() {
    return toBlocking(VersionsResourceImpl$getVersionsBlocking$slambda_0(this));
  }
}
class VoIPResourceImpl$getTurnServerBlocking$slambda {
  constructor(this$0) {
    this.omf_1 = this$0;
  }
  *pmf($this$toBlocking, $completion) {
    return yield* this.omf_1.ll7($completion);
  }
  wd(p1, $completion) {
    return this.pmf((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class VoIPResourceImpl extends AbstractAuthResourceImpl {
  *kl7($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.ylw_1 + '/_matrix/client/v3/voip/turnServer').p54('Authorization', this.oco()).o54(MediaType_getInstance().llx_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.tly_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(VoIPGetTurnServerResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.rky(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.qky(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getTurnServer() {
    return promisify(($completion) => this.kl7($completion));
  }
  *ll7($completion) {
    return this.getTurnServer === protoOf(VoIPResourceImpl).getTurnServer ? (yield* this.kl7($completion)) : (yield* await_0(this.getTurnServer(), $completion));
  }
  ml7() {
    return toBlocking(VoIPResourceImpl$getTurnServerBlocking$slambda_0(this));
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.llx_1 = Application_getInstance().a3t_1.toString();
  }
}
//endregion
function init_work_socialhub_kmatrix_MatrixException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.pky_1);
  _this__u8e3s4.nky_1 = null;
  _this__u8e3s4.oky_1 = null;
}
var MatrixFactory_instance;
function MatrixFactory_getInstance() {
  return MatrixFactory_instance;
}
function *whoami$virtualSuspendBridge(_this__u8e3s4, $completion) {
  return jsIsFunction(_this__u8e3s4.ekz) ? (yield* _this__u8e3s4.ekz($completion)) : (yield* await_0(_this__u8e3s4.whoami(), $completion));
}
function *getEvent$virtualSuspendBridge(_this__u8e3s4, roomId, eventId, $completion) {
  return jsIsFunction(_this__u8e3s4.ul0) ? (yield* _this__u8e3s4.ul0(roomId, eventId, $completion)) : (yield* await_0(_this__u8e3s4.getEvent(roomId, eventId), $completion));
}
function *getContext$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.vl0) ? (yield* _this__u8e3s4.vl0(request, $completion)) : (yield* await_0(_this__u8e3s4.getContext(request), $completion));
}
function *loginWithPassword$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.jl1) ? (yield* _this__u8e3s4.jl1(request, $completion)) : (yield* await_0(_this__u8e3s4.loginWithPassword(request), $completion));
}
function *getNotifications$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.el2) ? (yield* _this__u8e3s4.el2(request, $completion)) : (yield* await_0(_this__u8e3s4.getNotifications(request), $completion));
}
function *getProfile$virtualSuspendBridge(_this__u8e3s4, userId, $completion) {
  return jsIsFunction(_this__u8e3s4.nl2) ? (yield* _this__u8e3s4.nl2(userId, $completion)) : (yield* await_0(_this__u8e3s4.getProfile(userId), $completion));
}
function *getJoinedRooms$virtualSuspendBridge(_this__u8e3s4, $completion) {
  return jsIsFunction(_this__u8e3s4.cl4) ? (yield* _this__u8e3s4.cl4($completion)) : (yield* await_0(_this__u8e3s4.getJoinedRooms(), $completion));
}
function *getRoomName$virtualSuspendBridge(_this__u8e3s4, roomId, $completion) {
  return jsIsFunction(_this__u8e3s4.dl4) ? (yield* _this__u8e3s4.dl4(roomId, $completion)) : (yield* await_0(_this__u8e3s4.getRoomName(roomId), $completion));
}
function *getJoinedMembers$virtualSuspendBridge(_this__u8e3s4, roomId, $completion) {
  return jsIsFunction(_this__u8e3s4.el4) ? (yield* _this__u8e3s4.el4(roomId, $completion)) : (yield* await_0(_this__u8e3s4.getJoinedMembers(roomId), $completion));
}
function *getMessages$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.fl4) ? (yield* _this__u8e3s4.fl4(request, $completion)) : (yield* await_0(_this__u8e3s4.getMessages(request), $completion));
}
function *sendMessage$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.gl4) ? (yield* _this__u8e3s4.gl4(request, $completion)) : (yield* await_0(_this__u8e3s4.sendMessage(request), $completion));
}
function *redactEvent$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.hl4) ? (yield* _this__u8e3s4.hl4(request, $completion)) : (yield* await_0(_this__u8e3s4.redactEvent(request), $completion));
}
function *search$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.el7) ? (yield* _this__u8e3s4.el7(request, $completion)) : (yield* await_0(_this__u8e3s4.search(request), $completion));
}
function RegisterResponse$Companion$$childSerializers$_anonymous__fwt0di() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  return Companion_instance_1;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_3() {
  return Companion_instance_2;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_4() {
  return Companion_instance_3;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
function CapabilitiesGetResponse$RoomVersions$Companion$$childSerializers$_anonymous__trldqp() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance());
}
var Companion_instance_4;
function Companion_getInstance_5() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_5;
function Companion_getInstance_6() {
  return Companion_instance_5;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
var Companion_instance_6;
function Companion_getInstance_7() {
  return Companion_instance_6;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
function DevicesGetResponse$Companion$$childSerializers$_anonymous__plmvsg() {
  return new ReferenceArraySerializer(getKClass(Device), $serializer_getInstance_8());
}
var Companion_instance_7;
function Companion_getInstance_8() {
  if (Companion_instance_7 === VOID)
    new Companion_7();
  return Companion_instance_7;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
var Companion_instance_8;
function Companion_getInstance_9() {
  return Companion_instance_8;
}
var $serializer_instance_8;
function $serializer_getInstance_8() {
  if ($serializer_instance_8 === VOID)
    new $serializer_8();
  return $serializer_instance_8;
}
function DirectoryGetPublicRoomsResponse$Companion$$childSerializers$_anonymous__v8h9y5() {
  return new ReferenceArraySerializer(getKClass(PublicRoomChunk), $serializer_getInstance_10());
}
var Companion_instance_9;
function Companion_getInstance_10() {
  if (Companion_instance_9 === VOID)
    new Companion_9();
  return Companion_instance_9;
}
var $serializer_instance_9;
function $serializer_getInstance_9() {
  if ($serializer_instance_9 === VOID)
    new $serializer_9();
  return $serializer_instance_9;
}
function PublicRoomChunk$Companion$$childSerializers$_anonymous__jkytfj() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_10;
function Companion_getInstance_11() {
  if (Companion_instance_10 === VOID)
    new Companion_10();
  return Companion_instance_10;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_10();
  return $serializer_instance_10;
}
function DirectoryResolveAliasResponse$Companion$$childSerializers$_anonymous__obpzjs() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_11;
function Companion_getInstance_12() {
  if (Companion_instance_11 === VOID)
    new Companion_11();
  return Companion_instance_11;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_11();
  return $serializer_instance_11;
}
function EventsGetContextResponse$ContextEvent$Companion$$childSerializers$_anonymous__rd84k2() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_12;
function Companion_getInstance_13() {
  if (Companion_instance_12 === VOID)
    new Companion_12();
  return Companion_instance_12;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_12();
  return $serializer_instance_12;
}
function EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1() {
  return new ReferenceArraySerializer(getKClass(ContextEvent), $serializer_getInstance_12());
}
function EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_0() {
  return new ReferenceArraySerializer(getKClass(ContextEvent), $serializer_getInstance_12());
}
function EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_1() {
  return new ReferenceArraySerializer(getKClass(ContextEvent), $serializer_getInstance_12());
}
var Companion_instance_13;
function Companion_getInstance_14() {
  if (Companion_instance_13 === VOID)
    new Companion_13();
  return Companion_instance_13;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_13();
  return $serializer_instance_13;
}
function EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
function EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_14;
function Companion_getInstance_15() {
  if (Companion_instance_14 === VOID)
    new Companion_14();
  return Companion_instance_14;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_14();
  return $serializer_instance_14;
}
var Companion_instance_15;
function Companion_getInstance_16() {
  return Companion_instance_15;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_15();
  return $serializer_instance_15;
}
function FilterGetResponse$Companion$$childSerializers$_anonymous__p4prqt() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_16;
function Companion_getInstance_17() {
  if (Companion_instance_16 === VOID)
    new Companion_16();
  return Companion_instance_16;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_16();
  return $serializer_instance_16;
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_17;
function Companion_getInstance_18() {
  if (Companion_instance_17 === VOID)
    new Companion_17();
  return Companion_instance_17;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_17();
  return $serializer_instance_17;
}
function RoomFilter$Companion$$childSerializers$_anonymous__iuz08n() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function RoomFilter$Companion$$childSerializers$_anonymous__iuz08n_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_18;
function Companion_getInstance_19() {
  if (Companion_instance_18 === VOID)
    new Companion_18();
  return Companion_instance_18;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_18();
  return $serializer_instance_18;
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_3() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_4() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_19;
function Companion_getInstance_20() {
  if (Companion_instance_19 === VOID)
    new Companion_19();
  return Companion_instance_19;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_19();
  return $serializer_instance_19;
}
function LoginGetLoginFlowsResponse$Companion$$childSerializers$_anonymous__dccxb4() {
  return new ReferenceArraySerializer(getKClass(LoginFlow), $serializer_getInstance_21());
}
var Companion_instance_20;
function Companion_getInstance_21() {
  if (Companion_instance_20 === VOID)
    new Companion_20();
  return Companion_instance_20;
}
var $serializer_instance_20;
function $serializer_getInstance_20() {
  if ($serializer_instance_20 === VOID)
    new $serializer_20();
  return $serializer_instance_20;
}
var Companion_instance_21;
function Companion_getInstance_22() {
  return Companion_instance_21;
}
var $serializer_instance_21;
function $serializer_getInstance_21() {
  if ($serializer_instance_21 === VOID)
    new $serializer_21();
  return $serializer_instance_21;
}
var Companion_instance_22;
function Companion_getInstance_23() {
  return Companion_instance_22;
}
var $serializer_instance_22;
function $serializer_getInstance_22() {
  if ($serializer_instance_22 === VOID)
    new $serializer_22();
  return $serializer_instance_22;
}
var Companion_instance_23;
function Companion_getInstance_24() {
  return Companion_instance_23;
}
var $serializer_instance_23;
function $serializer_getInstance_23() {
  if ($serializer_instance_23 === VOID)
    new $serializer_23();
  return $serializer_instance_23;
}
var Companion_instance_24;
function Companion_getInstance_25() {
  return Companion_instance_24;
}
var $serializer_instance_24;
function $serializer_getInstance_24() {
  if ($serializer_instance_24 === VOID)
    new $serializer_24();
  return $serializer_instance_24;
}
var Companion_instance_25;
function Companion_getInstance_26() {
  return Companion_instance_25;
}
var $serializer_instance_25;
function $serializer_getInstance_25() {
  if ($serializer_instance_25 === VOID)
    new $serializer_25();
  return $serializer_instance_25;
}
function NotificationsGetResponse$Notification$Companion$$childSerializers$_anonymous__yeqkcq() {
  return new ReferenceArraySerializer(getKClass(JsonElement), JsonElementSerializer_getInstance());
}
var Companion_instance_26;
function Companion_getInstance_27() {
  if (Companion_instance_26 === VOID)
    new Companion_26();
  return Companion_instance_26;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_26();
  return $serializer_instance_26;
}
function NotificationsGetResponse$Event$Companion$$childSerializers$_anonymous__vjt0yj() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_27;
function Companion_getInstance_28() {
  if (Companion_instance_27 === VOID)
    new Companion_27();
  return Companion_instance_27;
}
var $serializer_instance_27;
function $serializer_getInstance_27() {
  if ($serializer_instance_27 === VOID)
    new $serializer_27();
  return $serializer_instance_27;
}
function NotificationsGetResponse$Companion$$childSerializers$_anonymous__27uumd() {
  return new ReferenceArraySerializer(getKClass(Notification), $serializer_getInstance_26());
}
var Companion_instance_28;
function Companion_getInstance_29() {
  if (Companion_instance_28 === VOID)
    new Companion_28();
  return Companion_instance_28;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_28();
  return $serializer_instance_28;
}
var Companion_instance_29;
function Companion_getInstance_30() {
  return Companion_instance_29;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_29();
  return $serializer_instance_29;
}
var Companion_instance_30;
function Companion_getInstance_31() {
  return Companion_instance_30;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_30();
  return $serializer_instance_30;
}
var Companion_instance_31;
function Companion_getInstance_32() {
  return Companion_instance_31;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_31();
  return $serializer_instance_31;
}
var Companion_instance_32;
function Companion_getInstance_33() {
  return Companion_instance_32;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_32();
  return $serializer_instance_32;
}
var Companion_instance_33;
function Companion_getInstance_34() {
  return Companion_instance_33;
}
var $serializer_instance_33;
function $serializer_getInstance_33() {
  if ($serializer_instance_33 === VOID)
    new $serializer_33();
  return $serializer_instance_33;
}
var Companion_instance_34;
function Companion_getInstance_35() {
  return Companion_instance_34;
}
var $serializer_instance_34;
function $serializer_getInstance_34() {
  if ($serializer_instance_34 === VOID)
    new $serializer_34();
  return $serializer_instance_34;
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_0() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_1() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_2() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_3() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
var Companion_instance_35;
function Companion_getInstance_36() {
  if (Companion_instance_35 === VOID)
    new Companion_35();
  return Companion_instance_35;
}
var $serializer_instance_35;
function $serializer_getInstance_35() {
  if ($serializer_instance_35 === VOID)
    new $serializer_35();
  return $serializer_instance_35;
}
function PushRule$Companion$$childSerializers$_anonymous__penbik() {
  return new ReferenceArraySerializer(getKClass(PushCondition), $serializer_getInstance_37());
}
function PushRule$Companion$$childSerializers$_anonymous__penbik_0() {
  var tmp = PrimitiveClasses_getInstance().ag();
  var tmp_0 = PrimitiveClasses_getInstance().ag();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [];
  return new ReferenceArraySerializer(tmp, get_nullable(new ContextualSerializer(tmp_0, null, tmp$ret$0)));
}
var Companion_instance_36;
function Companion_getInstance_37() {
  if (Companion_instance_36 === VOID)
    new Companion_36();
  return Companion_instance_36;
}
var $serializer_instance_36;
function $serializer_getInstance_36() {
  if ($serializer_instance_36 === VOID)
    new $serializer_36();
  return $serializer_instance_36;
}
var Companion_instance_37;
function Companion_getInstance_38() {
  return Companion_instance_37;
}
var $serializer_instance_37;
function $serializer_getInstance_37() {
  if ($serializer_instance_37 === VOID)
    new $serializer_37();
  return $serializer_instance_37;
}
var Companion_instance_38;
function Companion_getInstance_39() {
  return Companion_instance_38;
}
var $serializer_instance_38;
function $serializer_getInstance_38() {
  if ($serializer_instance_38 === VOID)
    new $serializer_38();
  return $serializer_instance_38;
}
var Companion_instance_39;
function Companion_getInstance_40() {
  return Companion_instance_39;
}
var $serializer_instance_39;
function $serializer_getInstance_39() {
  if ($serializer_instance_39 === VOID)
    new $serializer_39();
  return $serializer_instance_39;
}
function PushersGetResponse$Companion$$childSerializers$_anonymous__yfz0gv() {
  return new ReferenceArraySerializer(getKClass(Pusher), $serializer_getInstance_38());
}
var Companion_instance_40;
function Companion_getInstance_41() {
  if (Companion_instance_40 === VOID)
    new Companion_40();
  return Companion_instance_40;
}
var $serializer_instance_40;
function $serializer_getInstance_40() {
  if ($serializer_instance_40 === VOID)
    new $serializer_40();
  return $serializer_instance_40;
}
function RelationsGetResponse$RelationEvent$Companion$$childSerializers$_anonymous__t8e6vk() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_41;
function Companion_getInstance_42() {
  if (Companion_instance_41 === VOID)
    new Companion_41();
  return Companion_instance_41;
}
var $serializer_instance_41;
function $serializer_getInstance_41() {
  if ($serializer_instance_41 === VOID)
    new $serializer_41();
  return $serializer_instance_41;
}
function RelationsGetResponse$Companion$$childSerializers$_anonymous__yx9p1y() {
  return new ReferenceArraySerializer(getKClass(RelationEvent), $serializer_getInstance_41());
}
var Companion_instance_42;
function Companion_getInstance_43() {
  if (Companion_instance_42 === VOID)
    new Companion_42();
  return Companion_instance_42;
}
var $serializer_instance_42;
function $serializer_getInstance_42() {
  if ($serializer_instance_42 === VOID)
    new $serializer_42();
  return $serializer_instance_42;
}
function ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
function ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_43;
function Companion_getInstance_44() {
  if (Companion_instance_43 === VOID)
    new Companion_43();
  return Companion_instance_43;
}
var $serializer_instance_43;
function $serializer_getInstance_43() {
  if ($serializer_instance_43 === VOID)
    new $serializer_43();
  return $serializer_instance_43;
}
function ThreadsGetResponse$Companion$$childSerializers$_anonymous__ddk0mc() {
  return new ReferenceArraySerializer(getKClass(ThreadEvent), $serializer_getInstance_43());
}
var Companion_instance_44;
function Companion_getInstance_45() {
  if (Companion_instance_44 === VOID)
    new Companion_44();
  return Companion_instance_44;
}
var $serializer_instance_44;
function $serializer_getInstance_44() {
  if ($serializer_instance_44 === VOID)
    new $serializer_44();
  return $serializer_instance_44;
}
var Companion_instance_45;
function Companion_getInstance_46() {
  return Companion_instance_45;
}
var $serializer_instance_45;
function $serializer_getInstance_45() {
  if ($serializer_instance_45 === VOID)
    new $serializer_45();
  return $serializer_instance_45;
}
function RoomsGetJoinedMembersResponse$Companion$$childSerializers$_anonymous__9y13pz() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_47());
}
var Companion_instance_46;
function Companion_getInstance_47() {
  if (Companion_instance_46 === VOID)
    new Companion_46();
  return Companion_instance_46;
}
var $serializer_instance_46;
function $serializer_getInstance_46() {
  if ($serializer_instance_46 === VOID)
    new $serializer_46();
  return $serializer_instance_46;
}
var Companion_instance_47;
function Companion_getInstance_48() {
  return Companion_instance_47;
}
var $serializer_instance_47;
function $serializer_getInstance_47() {
  if ($serializer_instance_47 === VOID)
    new $serializer_47();
  return $serializer_instance_47;
}
function RoomsGetJoinedRoomsResponse$Companion$$childSerializers$_anonymous__wacquw() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_48;
function Companion_getInstance_49() {
  if (Companion_instance_48 === VOID)
    new Companion_48();
  return Companion_instance_48;
}
var $serializer_instance_48;
function $serializer_getInstance_48() {
  if ($serializer_instance_48 === VOID)
    new $serializer_48();
  return $serializer_instance_48;
}
function RoomsGetMembersResponse$Companion$$childSerializers$_anonymous__w4ei9e() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_49;
function Companion_getInstance_50() {
  if (Companion_instance_49 === VOID)
    new Companion_49();
  return Companion_instance_49;
}
var $serializer_instance_49;
function $serializer_getInstance_49() {
  if ($serializer_instance_49 === VOID)
    new $serializer_49();
  return $serializer_instance_49;
}
function RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
function RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f_0() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_50;
function Companion_getInstance_51() {
  if (Companion_instance_50 === VOID)
    new Companion_50();
  return Companion_instance_50;
}
var $serializer_instance_50;
function $serializer_getInstance_50() {
  if ($serializer_instance_50 === VOID)
    new $serializer_50();
  return $serializer_instance_50;
}
function RoomEvent$Companion$$childSerializers$_anonymous__onomqd() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), get_nullable(AnySerializer_getInstance()));
}
function RoomEvent$Companion$$childSerializers$_anonymous__onomqd_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), get_nullable(AnySerializer_getInstance()));
}
var Companion_instance_51;
function Companion_getInstance_52() {
  if (Companion_instance_51 === VOID)
    new Companion_51();
  return Companion_instance_51;
}
var $serializer_instance_51;
function $serializer_getInstance_51() {
  if ($serializer_instance_51 === VOID)
    new $serializer_51();
  return $serializer_instance_51;
}
var Companion_instance_52;
function Companion_getInstance_53() {
  return Companion_instance_52;
}
var $serializer_instance_52;
function $serializer_getInstance_52() {
  if ($serializer_instance_52 === VOID)
    new $serializer_52();
  return $serializer_instance_52;
}
function RoomsGetStateEventResponse$Companion$$childSerializers$_anonymous__xh3qn2() {
  var tmp = StringSerializer_getInstance();
  var tmp_0 = PrimitiveClasses_getInstance().ag();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [];
  return new LinkedHashMapSerializer(tmp, get_nullable(new ContextualSerializer(tmp_0, null, tmp$ret$0)));
}
var Companion_instance_53;
function Companion_getInstance_54() {
  if (Companion_instance_53 === VOID)
    new Companion_53();
  return Companion_instance_53;
}
var $serializer_instance_53;
function $serializer_getInstance_53() {
  if ($serializer_instance_53 === VOID)
    new $serializer_53();
  return $serializer_instance_53;
}
function RoomsStateEvent$Companion$$childSerializers$_anonymous__q4r93d() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_54;
function Companion_getInstance_55() {
  if (Companion_instance_54 === VOID)
    new Companion_54();
  return Companion_instance_54;
}
var $serializer_instance_54;
function $serializer_getInstance_54() {
  if ($serializer_instance_54 === VOID)
    new $serializer_54();
  return $serializer_instance_54;
}
var Companion_instance_55;
function Companion_getInstance_56() {
  return Companion_instance_55;
}
var $serializer_instance_55;
function $serializer_getInstance_55() {
  if ($serializer_instance_55 === VOID)
    new $serializer_55();
  return $serializer_instance_55;
}
var Companion_instance_56;
function Companion_getInstance_57() {
  return Companion_instance_56;
}
var $serializer_instance_56;
function $serializer_getInstance_56() {
  if ($serializer_instance_56 === VOID)
    new $serializer_56();
  return $serializer_instance_56;
}
var Companion_instance_57;
function Companion_getInstance_58() {
  return Companion_instance_57;
}
var $serializer_instance_57;
function $serializer_getInstance_57() {
  if ($serializer_instance_57 === VOID)
    new $serializer_57();
  return $serializer_instance_57;
}
var Companion_instance_58;
function Companion_getInstance_59() {
  return Companion_instance_58;
}
var $serializer_instance_58;
function $serializer_getInstance_58() {
  if ($serializer_instance_58 === VOID)
    new $serializer_58();
  return $serializer_instance_58;
}
var Companion_instance_59;
function Companion_getInstance_60() {
  return Companion_instance_59;
}
var $serializer_instance_59;
function $serializer_getInstance_59() {
  if ($serializer_instance_59 === VOID)
    new $serializer_59();
  return $serializer_instance_59;
}
var Companion_instance_60;
function Companion_getInstance_61() {
  return Companion_instance_60;
}
var $serializer_instance_60;
function $serializer_getInstance_60() {
  if ($serializer_instance_60 === VOID)
    new $serializer_60();
  return $serializer_instance_60;
}
function SearchRoomEvents$Companion$$childSerializers$_anonymous__epeb9q() {
  return new ReferenceArraySerializer(getKClass(SearchResult), $serializer_getInstance_62());
}
var Companion_instance_61;
function Companion_getInstance_62() {
  if (Companion_instance_61 === VOID)
    new Companion_61();
  return Companion_instance_61;
}
var $serializer_instance_61;
function $serializer_getInstance_61() {
  if ($serializer_instance_61 === VOID)
    new $serializer_61();
  return $serializer_instance_61;
}
var Companion_instance_62;
function Companion_getInstance_63() {
  return Companion_instance_62;
}
var $serializer_instance_62;
function $serializer_getInstance_62() {
  if ($serializer_instance_62 === VOID)
    new $serializer_62();
  return $serializer_instance_62;
}
var Companion_instance_63;
function Companion_getInstance_64() {
  return Companion_instance_63;
}
var $serializer_instance_63;
function $serializer_getInstance_63() {
  if ($serializer_instance_63 === VOID)
    new $serializer_63();
  return $serializer_instance_63;
}
var Companion_instance_64;
function Companion_getInstance_65() {
  return Companion_instance_64;
}
var $serializer_instance_64;
function $serializer_getInstance_64() {
  if ($serializer_instance_64 === VOID)
    new $serializer_64();
  return $serializer_instance_64;
}
var Companion_instance_65;
function Companion_getInstance_66() {
  return Companion_instance_65;
}
var $serializer_instance_65;
function $serializer_getInstance_65() {
  if ($serializer_instance_65 === VOID)
    new $serializer_65();
  return $serializer_instance_65;
}
function SyncRooms$Companion$$childSerializers$_anonymous__ebc099() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_67());
}
function SyncRooms$Companion$$childSerializers$_anonymous__ebc099_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_68());
}
function SyncRooms$Companion$$childSerializers$_anonymous__ebc099_1() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_69());
}
var Companion_instance_66;
function Companion_getInstance_67() {
  if (Companion_instance_66 === VOID)
    new Companion_66();
  return Companion_instance_66;
}
var $serializer_instance_66;
function $serializer_getInstance_66() {
  if ($serializer_instance_66 === VOID)
    new $serializer_66();
  return $serializer_instance_66;
}
var Companion_instance_67;
function Companion_getInstance_68() {
  return Companion_instance_67;
}
var $serializer_instance_67;
function $serializer_getInstance_67() {
  if ($serializer_instance_67 === VOID)
    new $serializer_67();
  return $serializer_instance_67;
}
var Companion_instance_68;
function Companion_getInstance_69() {
  return Companion_instance_68;
}
var $serializer_instance_68;
function $serializer_getInstance_68() {
  if ($serializer_instance_68 === VOID)
    new $serializer_68();
  return $serializer_instance_68;
}
var Companion_instance_69;
function Companion_getInstance_70() {
  return Companion_instance_69;
}
var $serializer_instance_69;
function $serializer_getInstance_69() {
  if ($serializer_instance_69 === VOID)
    new $serializer_69();
  return $serializer_instance_69;
}
function SyncTimeline$Companion$$childSerializers$_anonymous__av0vyq() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_70;
function Companion_getInstance_71() {
  if (Companion_instance_70 === VOID)
    new Companion_70();
  return Companion_instance_70;
}
var $serializer_instance_70;
function $serializer_getInstance_70() {
  if ($serializer_instance_70 === VOID)
    new $serializer_70();
  return $serializer_instance_70;
}
function SyncState$Companion$$childSerializers$_anonymous__d2b0i4() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_71;
function Companion_getInstance_72() {
  if (Companion_instance_71 === VOID)
    new Companion_71();
  return Companion_instance_71;
}
var $serializer_instance_71;
function $serializer_getInstance_71() {
  if ($serializer_instance_71 === VOID)
    new $serializer_71();
  return $serializer_instance_71;
}
function SyncAccountData$Companion$$childSerializers$_anonymous__1rtoxe() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_72;
function Companion_getInstance_73() {
  if (Companion_instance_72 === VOID)
    new Companion_72();
  return Companion_instance_72;
}
var $serializer_instance_72;
function $serializer_getInstance_72() {
  if ($serializer_instance_72 === VOID)
    new $serializer_72();
  return $serializer_instance_72;
}
function SyncEphemeral$Companion$$childSerializers$_anonymous__rh13c8() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_73;
function Companion_getInstance_74() {
  if (Companion_instance_73 === VOID)
    new Companion_73();
  return Companion_instance_73;
}
var $serializer_instance_73;
function $serializer_getInstance_73() {
  if ($serializer_instance_73 === VOID)
    new $serializer_73();
  return $serializer_instance_73;
}
var Companion_instance_74;
function Companion_getInstance_75() {
  return Companion_instance_74;
}
var $serializer_instance_74;
function $serializer_getInstance_74() {
  if ($serializer_instance_74 === VOID)
    new $serializer_74();
  return $serializer_instance_74;
}
function SyncInviteState$Companion$$childSerializers$_anonymous__2iq9z1() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_75;
function Companion_getInstance_76() {
  if (Companion_instance_75 === VOID)
    new Companion_75();
  return Companion_instance_75;
}
var $serializer_instance_75;
function $serializer_getInstance_75() {
  if ($serializer_instance_75 === VOID)
    new $serializer_75();
  return $serializer_instance_75;
}
function TagsGetResponse$Companion$$childSerializers$_anonymous__3nkk8k() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_77());
}
var Companion_instance_76;
function Companion_getInstance_77() {
  if (Companion_instance_76 === VOID)
    new Companion_76();
  return Companion_instance_76;
}
var $serializer_instance_76;
function $serializer_getInstance_76() {
  if ($serializer_instance_76 === VOID)
    new $serializer_76();
  return $serializer_instance_76;
}
var Companion_instance_77;
function Companion_getInstance_78() {
  return Companion_instance_77;
}
var $serializer_instance_77;
function $serializer_getInstance_77() {
  if ($serializer_instance_77 === VOID)
    new $serializer_77();
  return $serializer_instance_77;
}
function UserDirectorySearchResponse$Companion$$childSerializers$_anonymous__u6z7kx() {
  return new ReferenceArraySerializer(getKClass(UserDirectoryUser), $serializer_getInstance_79());
}
var Companion_instance_78;
function Companion_getInstance_79() {
  if (Companion_instance_78 === VOID)
    new Companion_78();
  return Companion_instance_78;
}
var $serializer_instance_78;
function $serializer_getInstance_78() {
  if ($serializer_instance_78 === VOID)
    new $serializer_78();
  return $serializer_instance_78;
}
var Companion_instance_79;
function Companion_getInstance_80() {
  return Companion_instance_79;
}
var $serializer_instance_79;
function $serializer_getInstance_79() {
  if ($serializer_instance_79 === VOID)
    new $serializer_79();
  return $serializer_instance_79;
}
function VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), BooleanSerializer_getInstance());
}
var Companion_instance_80;
function Companion_getInstance_81() {
  if (Companion_instance_80 === VOID)
    new Companion_80();
  return Companion_instance_80;
}
var $serializer_instance_80;
function $serializer_getInstance_80() {
  if ($serializer_instance_80 === VOID)
    new $serializer_80();
  return $serializer_instance_80;
}
function VoIPGetTurnServerResponse$Companion$$childSerializers$_anonymous__huuw5p() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_81;
function Companion_getInstance_82() {
  if (Companion_instance_81 === VOID)
    new Companion_81();
  return Companion_instance_81;
}
var $serializer_instance_81;
function $serializer_getInstance_81() {
  if ($serializer_instance_81 === VOID)
    new $serializer_81();
  return $serializer_instance_81;
}
var Companion_instance_82;
function Companion_getInstance_83() {
  return Companion_instance_82;
}
var $serializer_instance_82;
function $serializer_getInstance_82() {
  if ($serializer_instance_82 === VOID)
    new $serializer_82();
  return $serializer_instance_82;
}
var Companion_instance_83;
function Companion_getInstance_84() {
  return Companion_instance_83;
}
function AccountDataResourceImpl$getAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$getAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.blx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountDataResourceImpl$setAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$setAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountDataResourceImpl$getRoomAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$getRoomAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.blx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountDataResourceImpl$setRoomAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$setRoomAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_84;
function Companion_getInstance_85() {
  return Companion_instance_84;
}
var $serializer_instance_83;
function $serializer_getInstance_83() {
  if ($serializer_instance_83 === VOID)
    new $serializer_83();
  return $serializer_instance_83;
}
var Companion_instance_85;
function Companion_getInstance_86() {
  return Companion_instance_85;
}
var $serializer_instance_84;
function $serializer_getInstance_84() {
  if ($serializer_instance_84 === VOID)
    new $serializer_84();
  return $serializer_instance_84;
}
var Companion_instance_86;
function Companion_getInstance_87() {
  return Companion_instance_86;
}
var $serializer_instance_85;
function $serializer_getInstance_85() {
  if ($serializer_instance_85 === VOID)
    new $serializer_85();
  return $serializer_instance_85;
}
function AccountsResourceImpl$whoamiBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$whoamiBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.jly($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$logoutBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$logoutBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$logoutAllBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$logoutAllBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$registerBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$registerBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.oly($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$changePasswordBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$changePasswordBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda_0(this$0) {
  var i = new CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.vly($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_87;
function Companion_getInstance_88() {
  return Companion_instance_87;
}
var $serializer_instance_86;
function $serializer_getInstance_86() {
  if ($serializer_instance_86 === VOID)
    new $serializer_86();
  return $serializer_instance_86;
}
function DevicesResourceImpl$getDevicesBlocking$slambda_0(this$0) {
  var i = new DevicesResourceImpl$getDevicesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.dlz($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DevicesResourceImpl$getDeviceBlocking$slambda_0(this$0, $deviceId) {
  var i = new DevicesResourceImpl$getDeviceBlocking$slambda(this$0, $deviceId);
  var l = ($this$toBlocking, $completion) => i.glz($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DevicesResourceImpl$updateDeviceBlocking$slambda_0(this$0, $request) {
  var i = new DevicesResourceImpl$updateDeviceBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DevicesResourceImpl$deleteDeviceBlocking$slambda_0(this$0, $request) {
  var i = new DevicesResourceImpl$deleteDeviceBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_88;
function Companion_getInstance_89() {
  return Companion_instance_88;
}
var $serializer_instance_87;
function $serializer_getInstance_87() {
  if ($serializer_instance_87 === VOID)
    new $serializer_87();
  return $serializer_instance_87;
}
function DirectoryResourceImpl$resolveAliasBlocking$slambda_0(this$0, $roomAlias) {
  var i = new DirectoryResourceImpl$resolveAliasBlocking$slambda(this$0, $roomAlias);
  var l = ($this$toBlocking, $completion) => i.tlz($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DirectoryResourceImpl$setAliasBlocking$slambda_0(this$0, $request) {
  var i = new DirectoryResourceImpl$setAliasBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DirectoryResourceImpl$deleteAliasBlocking$slambda_0(this$0, $roomAlias) {
  var i = new DirectoryResourceImpl$deleteAliasBlocking$slambda(this$0, $roomAlias);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DirectoryResourceImpl$getPublicRoomsBlocking$slambda_0(this$0, $request) {
  var i = new DirectoryResourceImpl$getPublicRoomsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.am0($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function EventsResourceImpl$getEventBlocking$slambda_0(this$0, $roomId, $eventId) {
  var i = new EventsResourceImpl$getEventBlocking$slambda(this$0, $roomId, $eventId);
  var l = ($this$toBlocking, $completion) => i.gm0($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function EventsResourceImpl$getContextBlocking$slambda_0(this$0, $request) {
  var i = new EventsResourceImpl$getContextBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jm0($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_89;
function Companion_getInstance_90() {
  return Companion_instance_89;
}
var $serializer_instance_88;
function $serializer_getInstance_88() {
  if ($serializer_instance_88 === VOID)
    new $serializer_88();
  return $serializer_instance_88;
}
function FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_90;
function Companion_getInstance_91() {
  if (Companion_instance_90 === VOID)
    new Companion_90();
  return Companion_instance_90;
}
var $serializer_instance_89;
function $serializer_getInstance_89() {
  if ($serializer_instance_89 === VOID)
    new $serializer_89();
  return $serializer_instance_89;
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_91;
function Companion_getInstance_92() {
  if (Companion_instance_91 === VOID)
    new Companion_91();
  return Companion_instance_91;
}
var $serializer_instance_90;
function $serializer_getInstance_90() {
  if ($serializer_instance_90 === VOID)
    new $serializer_90();
  return $serializer_instance_90;
}
function FilterResourceImpl$createFilterBlocking$slambda_0(this$0, $request) {
  var i = new FilterResourceImpl$createFilterBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jm1($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FilterResourceImpl$getFilterBlocking$slambda_0(this$0, $request) {
  var i = new FilterResourceImpl$getFilterBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.mm1($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FilterResourceImpl$deleteFilterBlocking$slambda_0(this$0, $request) {
  var i = new FilterResourceImpl$deleteFilterBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function InternalUtility$json$lambda($this$Json) {
  $this$Json.g1m_1 = false;
  $this$Json.f1m_1 = true;
  $this$Json.h1m_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.k1k(PrimitiveClasses_getInstance().ag(), AnySerializer_getInstance());
  tmp.w1m_1 = builder.m18();
  return Unit_instance;
}
var InternalUtility_instance;
function InternalUtility_getInstance() {
  if (InternalUtility_instance === VOID)
    new InternalUtility();
  return InternalUtility_instance;
}
var Companion_instance_92;
function Companion_getInstance_93() {
  return Companion_instance_92;
}
var $serializer_instance_91;
function $serializer_getInstance_91() {
  if ($serializer_instance_91 === VOID)
    new $serializer_91();
  return $serializer_instance_91;
}
var Companion_instance_93;
function Companion_getInstance_94() {
  return Companion_instance_93;
}
var $serializer_instance_92;
function $serializer_getInstance_92() {
  if ($serializer_instance_92 === VOID)
    new $serializer_92();
  return $serializer_instance_92;
}
function LoginResourceImpl$getLoginFlowsBlocking$slambda_0(this$0) {
  var i = new LoginResourceImpl$getLoginFlowsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.em2($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function LoginResourceImpl$loginWithPasswordBlocking$slambda_0(this$0, $request) {
  var i = new LoginResourceImpl$loginWithPasswordBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.hm2($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$uploadBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$uploadBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jm3($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$downloadBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$downloadBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.mm3($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$thumbnailBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$thumbnailBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.mm3($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$getConfigBlocking$slambda_0(this$0) {
  var i = new MediaResourceImpl$getConfigBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.qm3($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$previewUrlBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$previewUrlBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tm3($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$getNotificationsBlocking$slambda_0(this$0, $request) {
  var i = new NotificationsResourceImpl$getNotificationsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ym3($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_94;
function Companion_getInstance_95() {
  return Companion_instance_94;
}
var $serializer_instance_93;
function $serializer_getInstance_93() {
  if ($serializer_instance_93 === VOID)
    new $serializer_93();
  return $serializer_instance_93;
}
function PresenceResourceImpl$getPresenceBlocking$slambda_0(this$0, $userId) {
  var i = new PresenceResourceImpl$getPresenceBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.im4($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PresenceResourceImpl$setPresenceBlocking$slambda_0(this$0, $request) {
  var i = new PresenceResourceImpl$setPresenceBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_95;
function Companion_getInstance_96() {
  return Companion_instance_95;
}
var $serializer_instance_94;
function $serializer_getInstance_94() {
  if ($serializer_instance_94 === VOID)
    new $serializer_94();
  return $serializer_instance_94;
}
var Companion_instance_96;
function Companion_getInstance_97() {
  return Companion_instance_96;
}
var $serializer_instance_95;
function $serializer_getInstance_95() {
  if ($serializer_instance_95 === VOID)
    new $serializer_95();
  return $serializer_instance_95;
}
function ProfileResourceImpl$getProfileBlocking$slambda_0(this$0, $userId) {
  var i = new ProfileResourceImpl$getProfileBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.xm4($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$getDisplayNameBlocking$slambda_0(this$0, $userId) {
  var i = new ProfileResourceImpl$getDisplayNameBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.am5($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$setDisplayNameBlocking$slambda_0(this$0, $request) {
  var i = new ProfileResourceImpl$setDisplayNameBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$getAvatarUrlBlocking$slambda_0(this$0, $userId) {
  var i = new ProfileResourceImpl$getAvatarUrlBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.fm5($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$setAvatarUrlBlocking$slambda_0(this$0, $request) {
  var i = new ProfileResourceImpl$setAvatarUrlBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_97;
function Companion_getInstance_98() {
  return Companion_instance_97;
}
var $serializer_instance_96;
function $serializer_getInstance_96() {
  if ($serializer_instance_96 === VOID)
    new $serializer_96();
  return $serializer_instance_96;
}
function PushRulesResourceImpl$getPushRulesBlocking$slambda_0(this$0) {
  var i = new PushRulesResourceImpl$getPushRulesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.pm5($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$getEnabledBlocking$slambda_0(this$0, $scope, $kind, $ruleId) {
  var i = new PushRulesResourceImpl$getEnabledBlocking$slambda(this$0, $scope, $kind, $ruleId);
  var l = ($this$toBlocking, $completion) => i.um5($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$setEnabledBlocking$slambda_0(this$0, $request) {
  var i = new PushRulesResourceImpl$setEnabledBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$createRuleBlocking$slambda_0(this$0, $request) {
  var i = new PushRulesResourceImpl$createRuleBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$deleteRuleBlocking$slambda_0(this$0, $request) {
  var i = new PushRulesResourceImpl$deleteRuleBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_98;
function Companion_getInstance_99() {
  return Companion_instance_98;
}
var $serializer_instance_97;
function $serializer_getInstance_97() {
  if ($serializer_instance_97 === VOID)
    new $serializer_97();
  return $serializer_instance_97;
}
var Companion_instance_99;
function Companion_getInstance_100() {
  return Companion_instance_99;
}
var $serializer_instance_98;
function $serializer_getInstance_98() {
  if ($serializer_instance_98 === VOID)
    new $serializer_98();
  return $serializer_instance_98;
}
function PushersResourceImpl$getPushersBlocking$slambda_0(this$0) {
  var i = new PushersResourceImpl$getPushersBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.wm6($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushersResourceImpl$setPusherBlocking$slambda_0(this$0, $request) {
  var i = new PushersResourceImpl$setPusherBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RelationsResourceImpl$getRelationsBlocking$slambda_0(this$0, $request) {
  var i = new RelationsResourceImpl$getRelationsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dm7($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RelationsResourceImpl$getThreadsBlocking$slambda_0(this$0, $request) {
  var i = new RelationsResourceImpl$getThreadsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.gm7($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$CreateRoomBody$Companion$$childSerializers$_anonymous__q3r2ul() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_100;
function Companion_getInstance_101() {
  if (Companion_instance_100 === VOID)
    new Companion_100();
  return Companion_instance_100;
}
var $serializer_instance_99;
function $serializer_getInstance_99() {
  if ($serializer_instance_99 === VOID)
    new $serializer_99();
  return $serializer_instance_99;
}
var Companion_instance_101;
function Companion_getInstance_102() {
  return Companion_instance_101;
}
var $serializer_instance_100;
function $serializer_getInstance_100() {
  if ($serializer_instance_100 === VOID)
    new $serializer_100();
  return $serializer_instance_100;
}
var Companion_instance_102;
function Companion_getInstance_103() {
  return Companion_instance_102;
}
var $serializer_instance_101;
function $serializer_getInstance_101() {
  if ($serializer_instance_101 === VOID)
    new $serializer_101();
  return $serializer_instance_101;
}
var Companion_instance_103;
function Companion_getInstance_104() {
  return Companion_instance_103;
}
var $serializer_instance_102;
function $serializer_getInstance_102() {
  if ($serializer_instance_102 === VOID)
    new $serializer_102();
  return $serializer_instance_102;
}
var Companion_instance_104;
function Companion_getInstance_105() {
  return Companion_instance_104;
}
var $serializer_instance_103;
function $serializer_getInstance_103() {
  if ($serializer_instance_103 === VOID)
    new $serializer_103();
  return $serializer_instance_103;
}
var Companion_instance_105;
function Companion_getInstance_106() {
  return Companion_instance_105;
}
var $serializer_instance_104;
function $serializer_getInstance_104() {
  if ($serializer_instance_104 === VOID)
    new $serializer_104();
  return $serializer_instance_104;
}
var Companion_instance_106;
function Companion_getInstance_107() {
  return Companion_instance_106;
}
var $serializer_instance_105;
function $serializer_getInstance_105() {
  if ($serializer_instance_105 === VOID)
    new $serializer_105();
  return $serializer_instance_105;
}
var Companion_instance_107;
function Companion_getInstance_108() {
  return Companion_instance_107;
}
var $serializer_instance_106;
function $serializer_getInstance_106() {
  if ($serializer_instance_106 === VOID)
    new $serializer_106();
  return $serializer_instance_106;
}
var Companion_instance_108;
function Companion_getInstance_109() {
  return Companion_instance_108;
}
var $serializer_instance_107;
function $serializer_getInstance_107() {
  if ($serializer_instance_107 === VOID)
    new $serializer_107();
  return $serializer_instance_107;
}
var Companion_instance_109;
function Companion_getInstance_110() {
  return Companion_instance_109;
}
var $serializer_instance_108;
function $serializer_getInstance_108() {
  if ($serializer_instance_108 === VOID)
    new $serializer_108();
  return $serializer_instance_108;
}
var Companion_instance_110;
function Companion_getInstance_111() {
  return Companion_instance_110;
}
var $serializer_instance_109;
function $serializer_getInstance_109() {
  if ($serializer_instance_109 === VOID)
    new $serializer_109();
  return $serializer_instance_109;
}
var Companion_instance_111;
function Companion_getInstance_112() {
  return Companion_instance_111;
}
var $serializer_instance_110;
function $serializer_getInstance_110() {
  if ($serializer_instance_110 === VOID)
    new $serializer_110();
  return $serializer_instance_110;
}
var Companion_instance_112;
function Companion_getInstance_113() {
  return Companion_instance_112;
}
var $serializer_instance_111;
function $serializer_getInstance_111() {
  if ($serializer_instance_111 === VOID)
    new $serializer_111();
  return $serializer_instance_111;
}
var Companion_instance_113;
function Companion_getInstance_114() {
  return Companion_instance_113;
}
var $serializer_instance_112;
function $serializer_getInstance_112() {
  if ($serializer_instance_112 === VOID)
    new $serializer_112();
  return $serializer_instance_112;
}
var Companion_instance_114;
function Companion_getInstance_115() {
  return Companion_instance_114;
}
var $serializer_instance_113;
function $serializer_getInstance_113() {
  if ($serializer_instance_113 === VOID)
    new $serializer_113();
  return $serializer_instance_113;
}
var Companion_instance_115;
function Companion_getInstance_116() {
  return Companion_instance_115;
}
var $serializer_instance_114;
function $serializer_getInstance_114() {
  if ($serializer_instance_114 === VOID)
    new $serializer_114();
  return $serializer_instance_114;
}
function generateTxnId($this) {
  var _unary__edvuaz = $this.fmb_1;
  $this.fmb_1 = add(_unary__edvuaz, get_ONE());
  return 'kmatrix_' + $this.fmb_1.toString() + '_' + Default_getInstance().iq(0n, 100000n).toString();
}
function RoomsResourceImpl$createRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$createRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.imb($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$joinRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$joinRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lmb($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$leaveRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$leaveRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$inviteBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$inviteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getJoinedRoomsBlocking$slambda_0(this$0) {
  var i = new RoomsResourceImpl$getJoinedRoomsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.rmb($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getRoomNameBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getRoomNameBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.umb($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getMembersBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getMembersBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.xmb($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getJoinedMembersBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getJoinedMembersBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.amc($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getMessagesBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$getMessagesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dmc($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$sendMessageBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$sendMessageBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.gmc($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$redactEventBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$redactEventBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jmc($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$setTypingBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$setTypingBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$sendReceiptBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$sendReceiptBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$setReadMarkersBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$setReadMarkersBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$banBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$banBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$unbanBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$unbanBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$kickBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$kickBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getStateEventBlocking$slambda_0(this$0, $roomId, $eventType, $stateKey) {
  var i = new RoomsResourceImpl$getStateEventBlocking$slambda(this$0, $roomId, $eventType, $stateKey);
  var l = ($this$toBlocking, $completion) => i.blx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$sendStateEventBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$sendStateEventBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.cmd($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$forgetRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$forgetRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getStateBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getStateBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.hmd($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_116;
function Companion_getInstance_117() {
  return Companion_instance_116;
}
var $serializer_instance_115;
function $serializer_getInstance_115() {
  if ($serializer_instance_115 === VOID)
    new $serializer_115();
  return $serializer_instance_115;
}
var Companion_instance_117;
function Companion_getInstance_118() {
  return Companion_instance_117;
}
var $serializer_instance_116;
function $serializer_getInstance_116() {
  if ($serializer_instance_116 === VOID)
    new $serializer_116();
  return $serializer_instance_116;
}
function SearchResourceImpl$SearchRoomEventsBody$Companion$$childSerializers$_anonymous__dvhhb6() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_118;
function Companion_getInstance_119() {
  if (Companion_instance_118 === VOID)
    new Companion_118();
  return Companion_instance_118;
}
var $serializer_instance_117;
function $serializer_getInstance_117() {
  if ($serializer_instance_117 === VOID)
    new $serializer_117();
  return $serializer_instance_117;
}
function SearchResourceImpl$SearchFilterBody$Companion$$childSerializers$_anonymous__ydckg6() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_119;
function Companion_getInstance_120() {
  if (Companion_instance_119 === VOID)
    new Companion_119();
  return Companion_instance_119;
}
var $serializer_instance_118;
function $serializer_getInstance_118() {
  if ($serializer_instance_118 === VOID)
    new $serializer_118();
  return $serializer_instance_118;
}
function SearchResourceImpl$searchBlocking$slambda_0(this$0, $request) {
  var i = new SearchResourceImpl$searchBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.fme($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function SyncResourceImpl$syncBlocking$slambda_0(this$0, $request) {
  var i = new SyncResourceImpl$syncBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.kme($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_120;
function Companion_getInstance_121() {
  return Companion_instance_120;
}
var $serializer_instance_119;
function $serializer_getInstance_119() {
  if ($serializer_instance_119 === VOID)
    new $serializer_119();
  return $serializer_instance_119;
}
function TagsResourceImpl$getTagsBlocking$slambda_0(this$0, $userId, $roomId) {
  var i = new TagsResourceImpl$getTagsBlocking$slambda(this$0, $userId, $roomId);
  var l = ($this$toBlocking, $completion) => i.ume($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TagsResourceImpl$setTagBlocking$slambda_0(this$0, $request) {
  var i = new TagsResourceImpl$setTagBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TagsResourceImpl$deleteTagBlocking$slambda_0(this$0, $request) {
  var i = new TagsResourceImpl$deleteTagBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.elx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_121;
function Companion_getInstance_122() {
  return Companion_instance_121;
}
var $serializer_instance_120;
function $serializer_getInstance_120() {
  if ($serializer_instance_120 === VOID)
    new $serializer_120();
  return $serializer_instance_120;
}
function UserDirectoryResourceImpl$searchBlocking$slambda_0(this$0, $request) {
  var i = new UserDirectoryResourceImpl$searchBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.imf($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function VersionsResourceImpl$getVersionsBlocking$slambda_0(this$0) {
  var i = new VersionsResourceImpl$getVersionsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.mmf($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function VoIPResourceImpl$getTurnServerBlocking$slambda_0(this$0) {
  var i = new VoIPResourceImpl$getTurnServerBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.pmf($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var MediaType_instance;
function MediaType_getInstance() {
  if (MediaType_instance === VOID)
    new MediaType();
  return MediaType_instance;
}
function toBlocking(block) {
  throw UnsupportedOperationException.la('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
}
//region block: post-declaration
initMetadataForInterface(Matrix, 'Matrix');
initMetadataForClass(MatrixException, 'MatrixException');
initMetadataForObject(MatrixFactory, 'MatrixFactory');
initMetadataForInterface(AccountDataResource, 'AccountDataResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(AccountsResource, 'AccountsResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(CapabilitiesResource, 'CapabilitiesResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(DevicesResource, 'DevicesResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(DirectoryResource, 'DirectoryResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(EventsResource, 'EventsResource', VOID, VOID, VOID, [2, 3, 1]);
initMetadataForInterface(FilterResource, 'FilterResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(LoginResource, 'LoginResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(MediaResource, 'MediaResource', VOID, VOID, VOID, [1, 2, 0]);
initMetadataForInterface(NotificationsResource, 'NotificationsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(PresenceResource, 'PresenceResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(ProfileResource, 'ProfileResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(PushRulesResource, 'PushRulesResource', VOID, VOID, VOID, [0, 1, 3, 4, 2]);
initMetadataForInterface(PushersResource, 'PushersResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(RelationsResource, 'RelationsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(RoomsResource, 'RoomsResource', VOID, VOID, VOID, [1, 2, 0, 3, 4]);
initMetadataForInterface(SearchResource, 'SearchResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(SyncResource, 'SyncResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(TagsResource, 'TagsResource', VOID, VOID, VOID, [2, 3, 1]);
initMetadataForInterface(UserDirectoryResource, 'UserDirectoryResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(VersionsResource, 'VersionsResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(VoIPResource, 'VoIPResource', VOID, VOID, VOID, [0, 1]);
initMetadataForClass(ChangePasswordRequest, 'ChangePasswordRequest', ChangePasswordRequest);
initMetadataForClass(RegisterRequest, 'RegisterRequest', RegisterRequest);
initMetadataForClass(AccountDataGetRequest, 'AccountDataGetRequest', AccountDataGetRequest);
initMetadataForClass(AccountDataSetRequest, 'AccountDataSetRequest', AccountDataSetRequest);
initMetadataForClass(DevicesDeleteRequest, 'DevicesDeleteRequest', DevicesDeleteRequest);
initMetadataForClass(DevicesUpdateRequest, 'DevicesUpdateRequest', DevicesUpdateRequest);
initMetadataForClass(DirectoryGetPublicRoomsRequest, 'DirectoryGetPublicRoomsRequest', DirectoryGetPublicRoomsRequest);
initMetadataForClass(DirectorySetAliasRequest, 'DirectorySetAliasRequest', DirectorySetAliasRequest);
initMetadataForClass(EventsGetContextRequest, 'EventsGetContextRequest', EventsGetContextRequest);
initMetadataForClass(DeleteFilterRequest, 'DeleteFilterRequest', DeleteFilterRequest);
initMetadataForClass(FilterCreateRequest, 'FilterCreateRequest', FilterCreateRequest);
initMetadataForClass(FilterGetRequest, 'FilterGetRequest', FilterGetRequest);
initMetadataForClass(LoginPasswordRequest, 'LoginPasswordRequest', LoginPasswordRequest);
initMetadataForClass(LoginSsoRedirectRequest, 'LoginSsoRedirectRequest', LoginSsoRedirectRequest);
initMetadataForClass(MediaDownloadRequest, 'MediaDownloadRequest', MediaDownloadRequest);
initMetadataForClass(MediaPreviewUrlRequest, 'MediaPreviewUrlRequest', MediaPreviewUrlRequest);
initMetadataForClass(MediaThumbnailRequest, 'MediaThumbnailRequest', MediaThumbnailRequest);
initMetadataForClass(MediaUploadRequest, 'MediaUploadRequest', MediaUploadRequest);
initMetadataForClass(NotificationsGetRequest, 'NotificationsGetRequest', NotificationsGetRequest);
initMetadataForClass(PresenceSetRequest, 'PresenceSetRequest', PresenceSetRequest);
initMetadataForClass(ProfileSetAvatarUrlRequest, 'ProfileSetAvatarUrlRequest', ProfileSetAvatarUrlRequest);
initMetadataForClass(ProfileSetDisplayNameRequest, 'ProfileSetDisplayNameRequest', ProfileSetDisplayNameRequest);
initMetadataForClass(PushRulesCreateRequest, 'PushRulesCreateRequest', PushRulesCreateRequest);
initMetadataForClass(PushRulesDeleteRequest, 'PushRulesDeleteRequest', PushRulesDeleteRequest);
initMetadataForClass(PushRulesSetEnabledRequest, 'PushRulesSetEnabledRequest', PushRulesSetEnabledRequest);
initMetadataForClass(PushersSetRequest, 'PushersSetRequest', PushersSetRequest);
initMetadataForClass(PusherData, 'PusherData', PusherData);
initMetadataForClass(RelationsGetRequest, 'RelationsGetRequest', RelationsGetRequest);
initMetadataForClass(ThreadsGetRequest, 'ThreadsGetRequest', ThreadsGetRequest);
initMetadataForClass(RoomsBanRequest, 'RoomsBanRequest', RoomsBanRequest);
initMetadataForClass(RoomsCreateRoomRequest, 'RoomsCreateRoomRequest', RoomsCreateRoomRequest);
initMetadataForClass(RoomsForgetRoomRequest, 'RoomsForgetRoomRequest', RoomsForgetRoomRequest);
initMetadataForClass(RoomsGetJoinedRoomsRequest, 'RoomsGetJoinedRoomsRequest', RoomsGetJoinedRoomsRequest);
initMetadataForClass(RoomsGetMessagesRequest, 'RoomsGetMessagesRequest', RoomsGetMessagesRequest);
initMetadataForClass(RoomsInviteRequest, 'RoomsInviteRequest', RoomsInviteRequest);
initMetadataForClass(RoomsJoinRoomRequest, 'RoomsJoinRoomRequest', RoomsJoinRoomRequest);
initMetadataForClass(RoomsKickRequest, 'RoomsKickRequest', RoomsKickRequest);
initMetadataForClass(RoomsLeaveRoomRequest, 'RoomsLeaveRoomRequest', RoomsLeaveRoomRequest);
initMetadataForClass(RoomsRedactEventRequest, 'RoomsRedactEventRequest', RoomsRedactEventRequest);
initMetadataForClass(RoomsSendMessageRequest, 'RoomsSendMessageRequest', RoomsSendMessageRequest);
initMetadataForClass(RoomsSendReceiptRequest, 'RoomsSendReceiptRequest', RoomsSendReceiptRequest);
initMetadataForClass(RoomsSendStateEventRequest, 'RoomsSendStateEventRequest', RoomsSendStateEventRequest);
initMetadataForClass(RoomsSetReadMarkersRequest, 'RoomsSetReadMarkersRequest', RoomsSetReadMarkersRequest);
initMetadataForClass(RoomsTypingRequest, 'RoomsTypingRequest', RoomsTypingRequest);
initMetadataForClass(RoomsUnbanRequest, 'RoomsUnbanRequest', RoomsUnbanRequest);
initMetadataForClass(SearchRequest, 'SearchRequest', SearchRequest);
initMetadataForClass(SyncRequest, 'SyncRequest', SyncRequest);
initMetadataForClass(TagsDeleteRequest, 'TagsDeleteRequest', TagsDeleteRequest);
initMetadataForClass(TagsSetRequest, 'TagsSetRequest', TagsSetRequest);
initMetadataForClass(UserDirectorySearchRequest, 'UserDirectorySearchRequest', UserDirectorySearchRequest);
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit', ResponseUnit);
initMetadataForCompanion(Companion);
protoOf($serializer).d1b = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RegisterResponse, 'RegisterResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).d1b = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccountsWhoamiResponse, 'AccountsWhoamiResponse', AccountsWhoamiResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).d1b = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).d1b = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).d1b = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).d1b = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Capabilities, 'Capabilities', Capabilities, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForClass(ChangePassword, 'ChangePassword', ChangePassword, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForClass(BooleanCapability, 'BooleanCapability', BooleanCapability, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForClass(RoomVersions, 'RoomVersions', RoomVersions, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).d1b = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CapabilitiesGetResponse, 'CapabilitiesGetResponse', CapabilitiesGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).d1b = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DevicesGetDeviceResponse, 'DevicesGetDeviceResponse', DevicesGetDeviceResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).d1b = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DevicesGetResponse, 'DevicesGetResponse', DevicesGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).d1b = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Device, 'Device', Device, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).d1b = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DirectoryGetPublicRoomsResponse, 'DirectoryGetPublicRoomsResponse', DirectoryGetPublicRoomsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).d1b = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PublicRoomChunk, 'PublicRoomChunk', PublicRoomChunk, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).d1b = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DirectoryResolveAliasResponse, 'DirectoryResolveAliasResponse', DirectoryResolveAliasResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).d1b = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ContextEvent, 'ContextEvent', ContextEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).d1b = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EventsGetContextResponse, 'EventsGetContextResponse', EventsGetContextResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).d1b = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EventsGetEventResponse, 'EventsGetEventResponse', EventsGetEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).d1b = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterCreateResponse, 'FilterCreateResponse', FilterCreateResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).d1b = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterGetResponse, 'FilterGetResponse', FilterGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).d1b = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EventFilter, 'EventFilter', EventFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).d1b = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomFilter, 'RoomFilter', RoomFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_19);
protoOf($serializer_19).d1b = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomEventFilter, 'RoomEventFilter', RoomEventFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_20);
protoOf($serializer_20).d1b = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginGetLoginFlowsResponse, 'LoginGetLoginFlowsResponse', LoginGetLoginFlowsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_21);
protoOf($serializer_21).d1b = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginFlow, 'LoginFlow', LoginFlow, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_22);
protoOf($serializer_22).d1b = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginPasswordResponse, 'LoginPasswordResponse', LoginPasswordResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_23);
protoOf($serializer_23).d1b = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MediaGetConfigResponse, 'MediaGetConfigResponse', MediaGetConfigResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_24);
protoOf($serializer_24).d1b = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MediaPreviewUrlResponse, 'MediaPreviewUrlResponse', MediaPreviewUrlResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_25);
protoOf($serializer_25).d1b = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MediaUploadResponse, 'MediaUploadResponse', MediaUploadResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_26);
protoOf($serializer_26).d1b = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_27);
protoOf($serializer_27).d1b = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Notification, 'Notification', Notification, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForClass(Event, 'Event', Event, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_28);
protoOf($serializer_28).d1b = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NotificationsGetResponse, 'NotificationsGetResponse', NotificationsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_29);
protoOf($serializer_29).d1b = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PresenceGetResponse, 'PresenceGetResponse', PresenceGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_30);
protoOf($serializer_30).d1b = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProfileGetAvatarUrlResponse, 'ProfileGetAvatarUrlResponse', ProfileGetAvatarUrlResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_31);
protoOf($serializer_31).d1b = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProfileGetDisplayNameResponse, 'ProfileGetDisplayNameResponse', ProfileGetDisplayNameResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_32);
protoOf($serializer_32).d1b = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProfileGetProfileResponse, 'ProfileGetProfileResponse', ProfileGetProfileResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_33);
protoOf($serializer_33).d1b = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRulesGetEnabledResponse, 'PushRulesGetEnabledResponse', PushRulesGetEnabledResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_34);
protoOf($serializer_34).d1b = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRulesGetResponse, 'PushRulesGetResponse', PushRulesGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_35);
protoOf($serializer_35).d1b = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRuleset, 'PushRuleset', PushRuleset, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForCompanion(Companion_36);
protoOf($serializer_36).d1b = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRule, 'PushRule', PushRule, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_36});
initMetadataForCompanion(Companion_37);
protoOf($serializer_37).d1b = typeParametersSerializers;
initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushCondition, 'PushCondition', PushCondition, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
initMetadataForCompanion(Companion_38);
protoOf($serializer_38).d1b = typeParametersSerializers;
initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_39);
protoOf($serializer_39).d1b = typeParametersSerializers;
initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Pusher, 'Pusher', Pusher, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_38});
initMetadataForClass(PusherData_0, 'PusherData', PusherData_0, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_39});
initMetadataForCompanion(Companion_40);
protoOf($serializer_40).d1b = typeParametersSerializers;
initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushersGetResponse, 'PushersGetResponse', PushersGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_40});
initMetadataForCompanion(Companion_41);
protoOf($serializer_41).d1b = typeParametersSerializers;
initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RelationEvent, 'RelationEvent', RelationEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
initMetadataForCompanion(Companion_42);
protoOf($serializer_42).d1b = typeParametersSerializers;
initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RelationsGetResponse, 'RelationsGetResponse', RelationsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
initMetadataForCompanion(Companion_43);
protoOf($serializer_43).d1b = typeParametersSerializers;
initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ThreadEvent, 'ThreadEvent', ThreadEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
initMetadataForCompanion(Companion_44);
protoOf($serializer_44).d1b = typeParametersSerializers;
initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ThreadsGetResponse, 'ThreadsGetResponse', ThreadsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
initMetadataForCompanion(Companion_45);
protoOf($serializer_45).d1b = typeParametersSerializers;
initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsCreateRoomResponse, 'RoomsCreateRoomResponse', RoomsCreateRoomResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
initMetadataForCompanion(Companion_46);
protoOf($serializer_46).d1b = typeParametersSerializers;
initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetJoinedMembersResponse, 'RoomsGetJoinedMembersResponse', RoomsGetJoinedMembersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_46});
initMetadataForCompanion(Companion_47);
protoOf($serializer_47).d1b = typeParametersSerializers;
initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomMember, 'RoomMember', RoomMember, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_47});
initMetadataForCompanion(Companion_48);
protoOf($serializer_48).d1b = typeParametersSerializers;
initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetJoinedRoomsResponse, 'RoomsGetJoinedRoomsResponse', RoomsGetJoinedRoomsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_48});
initMetadataForCompanion(Companion_49);
protoOf($serializer_49).d1b = typeParametersSerializers;
initMetadataForObject($serializer_49, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetMembersResponse, 'RoomsGetMembersResponse', RoomsGetMembersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_49});
initMetadataForCompanion(Companion_50);
protoOf($serializer_50).d1b = typeParametersSerializers;
initMetadataForObject($serializer_50, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetMessagesResponse, 'RoomsGetMessagesResponse', RoomsGetMessagesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_50});
initMetadataForCompanion(Companion_51);
protoOf($serializer_51).d1b = typeParametersSerializers;
initMetadataForObject($serializer_51, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomEvent, 'RoomEvent', RoomEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_51});
initMetadataForCompanion(Companion_52);
protoOf($serializer_52).d1b = typeParametersSerializers;
initMetadataForObject($serializer_52, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetRoomNameResponse, 'RoomsGetRoomNameResponse', RoomsGetRoomNameResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_52});
initMetadataForCompanion(Companion_53);
protoOf($serializer_53).d1b = typeParametersSerializers;
initMetadataForObject($serializer_53, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetStateEventResponse, 'RoomsGetStateEventResponse', RoomsGetStateEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_53});
initMetadataForCompanion(Companion_54);
protoOf($serializer_54).d1b = typeParametersSerializers;
initMetadataForObject($serializer_54, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsStateEvent, 'RoomsStateEvent', RoomsStateEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_54});
initMetadataForCompanion(Companion_55);
protoOf($serializer_55).d1b = typeParametersSerializers;
initMetadataForObject($serializer_55, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsJoinRoomResponse, 'RoomsJoinRoomResponse', RoomsJoinRoomResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_55});
initMetadataForCompanion(Companion_56);
protoOf($serializer_56).d1b = typeParametersSerializers;
initMetadataForObject($serializer_56, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsRedactEventResponse, 'RoomsRedactEventResponse', RoomsRedactEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_56});
initMetadataForCompanion(Companion_57);
protoOf($serializer_57).d1b = typeParametersSerializers;
initMetadataForObject($serializer_57, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsSendMessageResponse, 'RoomsSendMessageResponse', RoomsSendMessageResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_57});
initMetadataForCompanion(Companion_58);
protoOf($serializer_58).d1b = typeParametersSerializers;
initMetadataForObject($serializer_58, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsSendStateEventResponse, 'RoomsSendStateEventResponse', RoomsSendStateEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_58});
initMetadataForCompanion(Companion_59);
protoOf($serializer_59).d1b = typeParametersSerializers;
initMetadataForObject($serializer_59, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResponse, 'SearchResponse', SearchResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_59});
initMetadataForCompanion(Companion_60);
protoOf($serializer_60).d1b = typeParametersSerializers;
initMetadataForObject($serializer_60, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchCategories, 'SearchCategories', SearchCategories, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_60});
initMetadataForCompanion(Companion_61);
protoOf($serializer_61).d1b = typeParametersSerializers;
initMetadataForObject($serializer_61, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchRoomEvents, 'SearchRoomEvents', SearchRoomEvents, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_61});
initMetadataForCompanion(Companion_62);
protoOf($serializer_62).d1b = typeParametersSerializers;
initMetadataForObject($serializer_62, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResult, 'SearchResult', SearchResult, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_62});
initMetadataForCompanion(Companion_63);
protoOf($serializer_63).d1b = typeParametersSerializers;
initMetadataForObject($serializer_63, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResultEvent, 'SearchResultEvent', SearchResultEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_63});
initMetadataForCompanion(Companion_64);
protoOf($serializer_64).d1b = typeParametersSerializers;
initMetadataForObject($serializer_64, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResultContent, 'SearchResultContent', SearchResultContent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_64});
initMetadataForCompanion(Companion_65);
protoOf($serializer_65).d1b = typeParametersSerializers;
initMetadataForObject($serializer_65, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncResponse, 'SyncResponse', SyncResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_65});
initMetadataForCompanion(Companion_66);
protoOf($serializer_66).d1b = typeParametersSerializers;
initMetadataForObject($serializer_66, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncRooms, 'SyncRooms', SyncRooms, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_66});
initMetadataForCompanion(Companion_67);
protoOf($serializer_67).d1b = typeParametersSerializers;
initMetadataForObject($serializer_67, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncJoinedRoom, 'SyncJoinedRoom', SyncJoinedRoom, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_67});
initMetadataForCompanion(Companion_68);
protoOf($serializer_68).d1b = typeParametersSerializers;
initMetadataForObject($serializer_68, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncInvitedRoom, 'SyncInvitedRoom', SyncInvitedRoom, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_68});
initMetadataForCompanion(Companion_69);
protoOf($serializer_69).d1b = typeParametersSerializers;
initMetadataForObject($serializer_69, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncLeftRoom, 'SyncLeftRoom', SyncLeftRoom, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_69});
initMetadataForCompanion(Companion_70);
protoOf($serializer_70).d1b = typeParametersSerializers;
initMetadataForObject($serializer_70, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncTimeline, 'SyncTimeline', SyncTimeline, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_70});
initMetadataForCompanion(Companion_71);
protoOf($serializer_71).d1b = typeParametersSerializers;
initMetadataForObject($serializer_71, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncState, 'SyncState', SyncState, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_71});
initMetadataForCompanion(Companion_72);
protoOf($serializer_72).d1b = typeParametersSerializers;
initMetadataForObject($serializer_72, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncAccountData, 'SyncAccountData', SyncAccountData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_72});
initMetadataForCompanion(Companion_73);
protoOf($serializer_73).d1b = typeParametersSerializers;
initMetadataForObject($serializer_73, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncEphemeral, 'SyncEphemeral', SyncEphemeral, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_73});
initMetadataForCompanion(Companion_74);
protoOf($serializer_74).d1b = typeParametersSerializers;
initMetadataForObject($serializer_74, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncUnreadNotifications, 'SyncUnreadNotifications', SyncUnreadNotifications, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_74});
initMetadataForCompanion(Companion_75);
protoOf($serializer_75).d1b = typeParametersSerializers;
initMetadataForObject($serializer_75, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncInviteState, 'SyncInviteState', SyncInviteState, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_75});
initMetadataForCompanion(Companion_76);
protoOf($serializer_76).d1b = typeParametersSerializers;
initMetadataForObject($serializer_76, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TagsGetResponse, 'TagsGetResponse', TagsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_76});
initMetadataForCompanion(Companion_77);
protoOf($serializer_77).d1b = typeParametersSerializers;
initMetadataForObject($serializer_77, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TagContent, 'TagContent', TagContent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_77});
initMetadataForCompanion(Companion_78);
protoOf($serializer_78).d1b = typeParametersSerializers;
initMetadataForObject($serializer_78, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDirectorySearchResponse, 'UserDirectorySearchResponse', UserDirectorySearchResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_78});
initMetadataForCompanion(Companion_79);
protoOf($serializer_79).d1b = typeParametersSerializers;
initMetadataForObject($serializer_79, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDirectoryUser, 'UserDirectoryUser', UserDirectoryUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_79});
initMetadataForCompanion(Companion_80);
protoOf($serializer_80).d1b = typeParametersSerializers;
initMetadataForObject($serializer_80, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(VersionsGetResponse, 'VersionsGetResponse', VersionsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_80});
initMetadataForCompanion(Companion_81);
protoOf($serializer_81).d1b = typeParametersSerializers;
initMetadataForObject($serializer_81, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(VoIPGetTurnServerResponse, 'VoIPGetTurnServerResponse', VoIPGetTurnServerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_81});
initMetadataForCompanion(Companion_82);
protoOf($serializer_82).d1b = typeParametersSerializers;
initMetadataForObject($serializer_82, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Room, 'Room', Room, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_82});
initMetadataForCompanion(Companion_83);
initMetadataForClass(RateLimit, 'RateLimit', RateLimit);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForClass(AbstractAuthResourceImpl, 'AbstractAuthResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$getAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$setAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$getRoomAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$setRoomAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AccountDataResourceImpl, 'AccountDataResourceImpl', VOID, VOID, [AccountDataResource], [1]);
initMetadataForCompanion(Companion_84);
protoOf($serializer_83).d1b = typeParametersSerializers;
initMetadataForObject($serializer_83, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_85);
protoOf($serializer_84).d1b = typeParametersSerializers;
initMetadataForObject($serializer_84, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_86);
protoOf($serializer_85).d1b = typeParametersSerializers;
initMetadataForObject($serializer_85, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RegisterBody, 'RegisterBody', RegisterBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_83});
initMetadataForClass(ChangePasswordBody, 'ChangePasswordBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_84});
initMetadataForClass(ChangePasswordAuth, 'ChangePasswordAuth', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_85});
initMetadataForLambda(AccountsResourceImpl$whoamiBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$logoutBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$logoutAllBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$registerBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$changePasswordBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AccountsResourceImpl, 'AccountsResourceImpl', VOID, VOID, [AccountsResource], [0, 1]);
initMetadataForLambda(CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(CapabilitiesResourceImpl, 'CapabilitiesResourceImpl', VOID, VOID, [CapabilitiesResource], [0, 1]);
initMetadataForCompanion(Companion_87);
protoOf($serializer_86).d1b = typeParametersSerializers;
initMetadataForObject($serializer_86, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UpdateDeviceBody, 'UpdateDeviceBody', UpdateDeviceBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_86});
initMetadataForLambda(DevicesResourceImpl$getDevicesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DevicesResourceImpl$getDeviceBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DevicesResourceImpl$updateDeviceBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DevicesResourceImpl$deleteDeviceBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(DevicesResourceImpl, 'DevicesResourceImpl', VOID, VOID, [DevicesResource], [0, 1]);
initMetadataForCompanion(Companion_88);
protoOf($serializer_87).d1b = typeParametersSerializers;
initMetadataForObject($serializer_87, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetAliasBody, 'SetAliasBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_87});
initMetadataForLambda(DirectoryResourceImpl$resolveAliasBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DirectoryResourceImpl$setAliasBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DirectoryResourceImpl$deleteAliasBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DirectoryResourceImpl$getPublicRoomsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(DirectoryResourceImpl, 'DirectoryResourceImpl', VOID, VOID, [DirectoryResource], [1]);
initMetadataForLambda(EventsResourceImpl$getEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(EventsResourceImpl$getContextBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(EventsResourceImpl, 'EventsResourceImpl', VOID, VOID, [EventsResource], [2, 1]);
initMetadataForCompanion(Companion_89);
protoOf($serializer_88).d1b = typeParametersSerializers;
initMetadataForObject($serializer_88, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_90);
protoOf($serializer_89).d1b = typeParametersSerializers;
initMetadataForObject($serializer_89, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_91);
protoOf($serializer_90).d1b = typeParametersSerializers;
initMetadataForObject($serializer_90, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CreateFilterBody, 'CreateFilterBody', CreateFilterBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_88});
initMetadataForClass(CreateFilterRoomFilter, 'CreateFilterRoomFilter', CreateFilterRoomFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_89});
initMetadataForClass(CreateFilterRoomEventFilter, 'CreateFilterRoomEventFilter', CreateFilterRoomEventFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_90});
initMetadataForLambda(FilterResourceImpl$createFilterBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(FilterResourceImpl$getFilterBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(FilterResourceImpl$deleteFilterBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(FilterResourceImpl, 'FilterResourceImpl', VOID, VOID, [FilterResource], [1]);
initMetadataForObject(InternalUtility, 'InternalUtility');
initMetadataForCompanion(Companion_92);
protoOf($serializer_91).d1b = typeParametersSerializers;
initMetadataForObject($serializer_91, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_93);
protoOf($serializer_92).d1b = typeParametersSerializers;
initMetadataForObject($serializer_92, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginPasswordBody, 'LoginPasswordBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_91});
initMetadataForClass(LoginPasswordIdentifier, 'LoginPasswordIdentifier', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_92});
initMetadataForLambda(LoginResourceImpl$getLoginFlowsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(LoginResourceImpl$loginWithPasswordBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(LoginResourceImpl, 'LoginResourceImpl', VOID, VOID, [LoginResource], [0, 1]);
initMetadataForClass(MatrixImpl, 'MatrixImpl', VOID, VOID, [Matrix]);
initMetadataForLambda(MediaResourceImpl$uploadBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$downloadBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$thumbnailBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$getConfigBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$previewUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(MediaResourceImpl, 'MediaResourceImpl', VOID, VOID, [MediaResource], [1, 0]);
initMetadataForLambda(NotificationsResourceImpl$getNotificationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(NotificationsResourceImpl, 'NotificationsResourceImpl', VOID, VOID, [NotificationsResource], [1]);
initMetadataForCompanion(Companion_94);
protoOf($serializer_93).d1b = typeParametersSerializers;
initMetadataForObject($serializer_93, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetPresenceBody, 'SetPresenceBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_93});
initMetadataForLambda(PresenceResourceImpl$getPresenceBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PresenceResourceImpl$setPresenceBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PresenceResourceImpl, 'PresenceResourceImpl', VOID, VOID, [PresenceResource], [1]);
initMetadataForCompanion(Companion_95);
protoOf($serializer_94).d1b = typeParametersSerializers;
initMetadataForObject($serializer_94, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_96);
protoOf($serializer_95).d1b = typeParametersSerializers;
initMetadataForObject($serializer_95, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetDisplayNameBody, 'SetDisplayNameBody', SetDisplayNameBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_94});
initMetadataForClass(SetAvatarUrlBody, 'SetAvatarUrlBody', SetAvatarUrlBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_95});
initMetadataForLambda(ProfileResourceImpl$getProfileBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$getDisplayNameBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$setDisplayNameBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$getAvatarUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$setAvatarUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(ProfileResourceImpl, 'ProfileResourceImpl', VOID, VOID, [ProfileResource], [1]);
initMetadataForCompanion(Companion_97);
protoOf($serializer_96).d1b = typeParametersSerializers;
initMetadataForObject($serializer_96, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetEnabledBody, 'SetEnabledBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_96});
initMetadataForLambda(PushRulesResourceImpl$getPushRulesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$getEnabledBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$setEnabledBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$createRuleBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$deleteRuleBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PushRulesResourceImpl, 'PushRulesResourceImpl', VOID, VOID, [PushRulesResource], [0, 3, 1]);
initMetadataForCompanion(Companion_98);
protoOf($serializer_97).d1b = typeParametersSerializers;
initMetadataForObject($serializer_97, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PusherDataBody, 'PusherDataBody', PusherDataBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_97});
initMetadataForCompanion(Companion_99);
protoOf($serializer_98).d1b = typeParametersSerializers;
initMetadataForObject($serializer_98, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetPusherBody, 'SetPusherBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_98});
initMetadataForLambda(PushersResourceImpl$getPushersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushersResourceImpl$setPusherBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PushersResourceImpl, 'PushersResourceImpl', VOID, VOID, [PushersResource], [0, 1]);
initMetadataForLambda(RelationsResourceImpl$getRelationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RelationsResourceImpl$getThreadsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(RelationsResourceImpl, 'RelationsResourceImpl', VOID, VOID, [RelationsResource], [1]);
initMetadataForCompanion(Companion_100);
protoOf($serializer_99).d1b = typeParametersSerializers;
initMetadataForObject($serializer_99, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_101);
protoOf($serializer_100).d1b = typeParametersSerializers;
initMetadataForObject($serializer_100, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_102);
protoOf($serializer_101).d1b = typeParametersSerializers;
initMetadataForObject($serializer_101, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_103);
protoOf($serializer_102).d1b = typeParametersSerializers;
initMetadataForObject($serializer_102, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_104);
protoOf($serializer_103).d1b = typeParametersSerializers;
initMetadataForObject($serializer_103, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_105);
protoOf($serializer_104).d1b = typeParametersSerializers;
initMetadataForObject($serializer_104, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_106);
protoOf($serializer_105).d1b = typeParametersSerializers;
initMetadataForObject($serializer_105, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_107);
protoOf($serializer_106).d1b = typeParametersSerializers;
initMetadataForObject($serializer_106, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_108);
protoOf($serializer_107).d1b = typeParametersSerializers;
initMetadataForObject($serializer_107, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_109);
protoOf($serializer_108).d1b = typeParametersSerializers;
initMetadataForObject($serializer_108, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_110);
protoOf($serializer_109).d1b = typeParametersSerializers;
initMetadataForObject($serializer_109, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_111);
protoOf($serializer_110).d1b = typeParametersSerializers;
initMetadataForObject($serializer_110, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_112);
protoOf($serializer_111).d1b = typeParametersSerializers;
initMetadataForObject($serializer_111, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_113);
protoOf($serializer_112).d1b = typeParametersSerializers;
initMetadataForObject($serializer_112, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_114);
protoOf($serializer_113).d1b = typeParametersSerializers;
initMetadataForObject($serializer_113, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_115);
protoOf($serializer_114).d1b = typeParametersSerializers;
initMetadataForObject($serializer_114, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CreateRoomBody, 'CreateRoomBody', CreateRoomBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_99});
initMetadataForClass(JoinRoomBody, 'JoinRoomBody', JoinRoomBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_100});
initMetadataForClass(LeaveRoomBody, 'LeaveRoomBody', LeaveRoomBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_101});
initMetadataForClass(InviteBody, 'InviteBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_102});
initMetadataForClass(RedactEventBody, 'RedactEventBody', RedactEventBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_103});
initMetadataForClass(TypingBody, 'TypingBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_104});
initMetadataForClass(SendReceiptBody, 'SendReceiptBody', SendReceiptBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_105});
initMetadataForClass(SetReadMarkersBody, 'SetReadMarkersBody', SetReadMarkersBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_106});
initMetadataForClass(SendMessageBody, 'SendMessageBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_107});
initMetadataForClass(SendMessageRelatesTo, 'SendMessageRelatesTo', SendMessageRelatesTo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_108});
initMetadataForClass(SendMessageInReplyTo, 'SendMessageInReplyTo', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_109});
initMetadataForClass(SendMessageAnnotation, 'SendMessageAnnotation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_110});
initMetadataForClass(SendMessageReference, 'SendMessageReference', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_111});
initMetadataForClass(BanBody, 'BanBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_112});
initMetadataForClass(UnbanBody, 'UnbanBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_113});
initMetadataForClass(KickBody, 'KickBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_114});
initMetadataForLambda(RoomsResourceImpl$createRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$joinRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$leaveRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$inviteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getJoinedRoomsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getRoomNameBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getMembersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getJoinedMembersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getMessagesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$sendMessageBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$redactEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$setTypingBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$sendReceiptBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$setReadMarkersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$banBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$unbanBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$kickBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getStateEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$sendStateEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$forgetRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getStateBlocking$slambda, VOID, VOID, [1]);
protoOf(RoomsResourceImpl).cl6 = getStateEvent$default;
protoOf(RoomsResourceImpl).fl6 = getStateEventBlocking$default;
initMetadataForClass(RoomsResourceImpl, 'RoomsResourceImpl', VOID, VOID, [RoomsResource], [1, 0, 3]);
initMetadataForCompanion(Companion_116);
protoOf($serializer_115).d1b = typeParametersSerializers;
initMetadataForObject($serializer_115, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_117);
protoOf($serializer_116).d1b = typeParametersSerializers;
initMetadataForObject($serializer_116, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_118);
protoOf($serializer_117).d1b = typeParametersSerializers;
initMetadataForObject($serializer_117, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_119);
protoOf($serializer_118).d1b = typeParametersSerializers;
initMetadataForObject($serializer_118, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchBody, 'SearchBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_115});
initMetadataForClass(SearchCategoriesBody, 'SearchCategoriesBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_116});
initMetadataForClass(SearchRoomEventsBody, 'SearchRoomEventsBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_117});
initMetadataForClass(SearchFilterBody, 'SearchFilterBody', SearchFilterBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_118});
initMetadataForLambda(SearchResourceImpl$searchBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(SearchResourceImpl, 'SearchResourceImpl', VOID, VOID, [SearchResource], [1]);
initMetadataForLambda(SyncResourceImpl$syncBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(SyncResourceImpl, 'SyncResourceImpl', VOID, VOID, [SyncResource], [1]);
initMetadataForCompanion(Companion_120);
protoOf($serializer_119).d1b = typeParametersSerializers;
initMetadataForObject($serializer_119, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetTagBody, 'SetTagBody', SetTagBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_119});
initMetadataForLambda(TagsResourceImpl$getTagsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TagsResourceImpl$setTagBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TagsResourceImpl$deleteTagBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(TagsResourceImpl, 'TagsResourceImpl', VOID, VOID, [TagsResource], [2, 1]);
initMetadataForCompanion(Companion_121);
protoOf($serializer_120).d1b = typeParametersSerializers;
initMetadataForObject($serializer_120, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchBody_0, 'SearchBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_120});
initMetadataForLambda(UserDirectoryResourceImpl$searchBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(UserDirectoryResourceImpl, 'UserDirectoryResourceImpl', VOID, VOID, [UserDirectoryResource], [1]);
initMetadataForLambda(VersionsResourceImpl$getVersionsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(VersionsResourceImpl, 'VersionsResourceImpl', VOID, VOID, [VersionsResource], [0, 1]);
initMetadataForLambda(VoIPResourceImpl$getTurnServerBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(VoIPResourceImpl, 'VoIPResourceImpl', VOID, VOID, [VoIPResource], [0, 1]);
initMetadataForObject(MediaType, 'MediaType');
//endregion
//region block: init
MatrixFactory_instance = new MatrixFactory();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Companion_instance_3 = new Companion_3();
Companion_instance_5 = new Companion_5();
Companion_instance_6 = new Companion_6();
Companion_instance_8 = new Companion_8();
Companion_instance_15 = new Companion_15();
Companion_instance_21 = new Companion_21();
Companion_instance_22 = new Companion_22();
Companion_instance_23 = new Companion_23();
Companion_instance_24 = new Companion_24();
Companion_instance_25 = new Companion_25();
Companion_instance_29 = new Companion_29();
Companion_instance_30 = new Companion_30();
Companion_instance_31 = new Companion_31();
Companion_instance_32 = new Companion_32();
Companion_instance_33 = new Companion_33();
Companion_instance_34 = new Companion_34();
Companion_instance_37 = new Companion_37();
Companion_instance_38 = new Companion_38();
Companion_instance_39 = new Companion_39();
Companion_instance_45 = new Companion_45();
Companion_instance_47 = new Companion_47();
Companion_instance_52 = new Companion_52();
Companion_instance_55 = new Companion_55();
Companion_instance_56 = new Companion_56();
Companion_instance_57 = new Companion_57();
Companion_instance_58 = new Companion_58();
Companion_instance_59 = new Companion_59();
Companion_instance_60 = new Companion_60();
Companion_instance_62 = new Companion_62();
Companion_instance_63 = new Companion_63();
Companion_instance_64 = new Companion_64();
Companion_instance_65 = new Companion_65();
Companion_instance_67 = new Companion_67();
Companion_instance_68 = new Companion_68();
Companion_instance_69 = new Companion_69();
Companion_instance_74 = new Companion_74();
Companion_instance_77 = new Companion_77();
Companion_instance_79 = new Companion_79();
Companion_instance_82 = new Companion_82();
Companion_instance_83 = new Companion_83();
Companion_instance_84 = new Companion_84();
Companion_instance_85 = new Companion_85();
Companion_instance_86 = new Companion_86();
Companion_instance_87 = new Companion_87();
Companion_instance_88 = new Companion_88();
Companion_instance_89 = new Companion_89();
Companion_instance_92 = new Companion_92();
Companion_instance_93 = new Companion_93();
Companion_instance_94 = new Companion_94();
Companion_instance_95 = new Companion_95();
Companion_instance_96 = new Companion_96();
Companion_instance_97 = new Companion_97();
Companion_instance_98 = new Companion_98();
Companion_instance_99 = new Companion_99();
Companion_instance_101 = new Companion_101();
Companion_instance_102 = new Companion_102();
Companion_instance_103 = new Companion_103();
Companion_instance_104 = new Companion_104();
Companion_instance_105 = new Companion_105();
Companion_instance_106 = new Companion_106();
Companion_instance_107 = new Companion_107();
Companion_instance_108 = new Companion_108();
Companion_instance_109 = new Companion_109();
Companion_instance_110 = new Companion_110();
Companion_instance_111 = new Companion_111();
Companion_instance_112 = new Companion_112();
Companion_instance_113 = new Companion_113();
Companion_instance_114 = new Companion_114();
Companion_instance_115 = new Companion_115();
Companion_instance_116 = new Companion_116();
Companion_instance_117 = new Companion_117();
Companion_instance_120 = new Companion_120();
Companion_instance_121 = new Companion_121();
//endregion
//region block: exports
var MatrixFactory_0 = {getInstance: MatrixFactory_getInstance};
CapabilitiesGetResponse.Capabilities = Capabilities;
CapabilitiesGetResponse.ChangePassword = ChangePassword;
CapabilitiesGetResponse.BooleanCapability = BooleanCapability;
CapabilitiesGetResponse.RoomVersions = RoomVersions;
EventsGetContextResponse.ContextEvent = ContextEvent;
NotificationsGetResponse.Notification = Notification;
NotificationsGetResponse.Event = Event;
PushersGetResponse.Pusher = Pusher;
PushersGetResponse.PusherData = PusherData_0;
RelationsGetResponse.RelationEvent = RelationEvent;
ThreadsGetResponse.ThreadEvent = ThreadEvent;
defineProp(RateLimit, 'Companion', Companion_getInstance_84, VOID, true);
export {
  MatrixFactory_0 as MatrixFactory,
  ChangePasswordRequest as ChangePasswordRequest,
  RegisterRequest as RegisterRequest,
  AccountDataGetRequest as AccountDataGetRequest,
  AccountDataSetRequest as AccountDataSetRequest,
  DevicesDeleteRequest as DevicesDeleteRequest,
  DevicesUpdateRequest as DevicesUpdateRequest,
  DirectoryGetPublicRoomsRequest as DirectoryGetPublicRoomsRequest,
  DirectorySetAliasRequest as DirectorySetAliasRequest,
  EventsGetContextRequest as EventsGetContextRequest,
  DeleteFilterRequest as DeleteFilterRequest,
  FilterCreateRequest as FilterCreateRequest,
  FilterGetRequest as FilterGetRequest,
  LoginPasswordRequest as LoginPasswordRequest,
  LoginSsoRedirectRequest as LoginSsoRedirectRequest,
  MediaDownloadRequest as MediaDownloadRequest,
  MediaPreviewUrlRequest as MediaPreviewUrlRequest,
  MediaThumbnailRequest as MediaThumbnailRequest,
  MediaUploadRequest as MediaUploadRequest,
  NotificationsGetRequest as NotificationsGetRequest,
  PresenceSetRequest as PresenceSetRequest,
  ProfileSetAvatarUrlRequest as ProfileSetAvatarUrlRequest,
  ProfileSetDisplayNameRequest as ProfileSetDisplayNameRequest,
  PushRulesCreateRequest as PushRulesCreateRequest,
  PushRulesDeleteRequest as PushRulesDeleteRequest,
  PushRulesSetEnabledRequest as PushRulesSetEnabledRequest,
  PushersSetRequest as PushersSetRequest,
  PusherData as PusherData,
  RelationsGetRequest as RelationsGetRequest,
  ThreadsGetRequest as ThreadsGetRequest,
  RoomsBanRequest as RoomsBanRequest,
  RoomsCreateRoomRequest as RoomsCreateRoomRequest,
  RoomsForgetRoomRequest as RoomsForgetRoomRequest,
  RoomsGetJoinedRoomsRequest as RoomsGetJoinedRoomsRequest,
  RoomsGetMessagesRequest as RoomsGetMessagesRequest,
  RoomsInviteRequest as RoomsInviteRequest,
  RoomsJoinRoomRequest as RoomsJoinRoomRequest,
  RoomsKickRequest as RoomsKickRequest,
  RoomsLeaveRoomRequest as RoomsLeaveRoomRequest,
  RoomsRedactEventRequest as RoomsRedactEventRequest,
  RoomsSendMessageRequest as RoomsSendMessageRequest,
  RoomsSendReceiptRequest as RoomsSendReceiptRequest,
  RoomsSendStateEventRequest as RoomsSendStateEventRequest,
  RoomsSetReadMarkersRequest as RoomsSetReadMarkersRequest,
  RoomsTypingRequest as RoomsTypingRequest,
  RoomsUnbanRequest as RoomsUnbanRequest,
  SearchRequest as SearchRequest,
  SyncRequest as SyncRequest,
  TagsDeleteRequest as TagsDeleteRequest,
  TagsSetRequest as TagsSetRequest,
  UserDirectorySearchRequest as UserDirectorySearchRequest,
  Response as Response,
  ResponseUnit as ResponseUnit,
  RegisterResponse as RegisterResponse,
  AccountsWhoamiResponse as AccountsWhoamiResponse,
  CapabilitiesGetResponse as CapabilitiesGetResponse,
  DevicesGetDeviceResponse as DevicesGetDeviceResponse,
  DevicesGetResponse as DevicesGetResponse,
  Device as Device,
  DirectoryGetPublicRoomsResponse as DirectoryGetPublicRoomsResponse,
  PublicRoomChunk as PublicRoomChunk,
  DirectoryResolveAliasResponse as DirectoryResolveAliasResponse,
  EventsGetContextResponse as EventsGetContextResponse,
  EventsGetEventResponse as EventsGetEventResponse,
  FilterCreateResponse as FilterCreateResponse,
  FilterGetResponse as FilterGetResponse,
  EventFilter as EventFilter,
  RoomFilter as RoomFilter,
  RoomEventFilter as RoomEventFilter,
  LoginGetLoginFlowsResponse as LoginGetLoginFlowsResponse,
  LoginFlow as LoginFlow,
  LoginPasswordResponse as LoginPasswordResponse,
  MediaGetConfigResponse as MediaGetConfigResponse,
  MediaPreviewUrlResponse as MediaPreviewUrlResponse,
  MediaUploadResponse as MediaUploadResponse,
  NotificationsGetResponse as NotificationsGetResponse,
  PresenceGetResponse as PresenceGetResponse,
  ProfileGetAvatarUrlResponse as ProfileGetAvatarUrlResponse,
  ProfileGetDisplayNameResponse as ProfileGetDisplayNameResponse,
  ProfileGetProfileResponse as ProfileGetProfileResponse,
  PushRulesGetEnabledResponse as PushRulesGetEnabledResponse,
  PushRulesGetResponse as PushRulesGetResponse,
  PushRuleset as PushRuleset,
  PushRule as PushRule,
  PushCondition as PushCondition,
  PushersGetResponse as PushersGetResponse,
  RelationsGetResponse as RelationsGetResponse,
  ThreadsGetResponse as ThreadsGetResponse,
  RoomsCreateRoomResponse as RoomsCreateRoomResponse,
  RoomsGetJoinedMembersResponse as RoomsGetJoinedMembersResponse,
  RoomMember as RoomMember,
  RoomsGetJoinedRoomsResponse as RoomsGetJoinedRoomsResponse,
  RoomsGetMembersResponse as RoomsGetMembersResponse,
  RoomsGetMessagesResponse as RoomsGetMessagesResponse,
  RoomEvent as RoomEvent,
  RoomsGetRoomNameResponse as RoomsGetRoomNameResponse,
  RoomsGetStateEventResponse as RoomsGetStateEventResponse,
  RoomsStateEvent as RoomsStateEvent,
  RoomsJoinRoomResponse as RoomsJoinRoomResponse,
  RoomsRedactEventResponse as RoomsRedactEventResponse,
  RoomsSendMessageResponse as RoomsSendMessageResponse,
  RoomsSendStateEventResponse as RoomsSendStateEventResponse,
  SearchResponse as SearchResponse,
  SearchCategories as SearchCategories,
  SearchRoomEvents as SearchRoomEvents,
  SearchResult as SearchResult,
  SearchResultEvent as SearchResultEvent,
  SearchResultContent as SearchResultContent,
  SyncResponse as SyncResponse,
  SyncRooms as SyncRooms,
  SyncJoinedRoom as SyncJoinedRoom,
  SyncInvitedRoom as SyncInvitedRoom,
  SyncLeftRoom as SyncLeftRoom,
  SyncTimeline as SyncTimeline,
  SyncState as SyncState,
  SyncAccountData as SyncAccountData,
  SyncEphemeral as SyncEphemeral,
  SyncUnreadNotifications as SyncUnreadNotifications,
  SyncInviteState as SyncInviteState,
  TagsGetResponse as TagsGetResponse,
  TagContent as TagContent,
  UserDirectorySearchResponse as UserDirectorySearchResponse,
  UserDirectoryUser as UserDirectoryUser,
  VersionsGetResponse as VersionsGetResponse,
  VoIPGetTurnServerResponse as VoIPGetTurnServerResponse,
  Room as Room,
  RateLimit as RateLimit,
};
export {
  MatrixFactory_instance as MatrixFactory_instance1i47jjnqbr685,
  whoami$virtualSuspendBridge as whoami$virtualSuspendBridge32d1gse6vczlc,
  getContext$virtualSuspendBridge as getContext$virtualSuspendBridge33d129hkb3jna,
  getEvent$virtualSuspendBridge as getEvent$virtualSuspendBridge8962d5spn09d,
  loginWithPassword$virtualSuspendBridge as loginWithPassword$virtualSuspendBridge11crn7gqs38kn,
  getNotifications$virtualSuspendBridge as getNotifications$virtualSuspendBridge1xyjunzv7s4k3,
  getProfile$virtualSuspendBridge as getProfile$virtualSuspendBridge1wlqov2gvqxup,
  getJoinedMembers$virtualSuspendBridge as getJoinedMembers$virtualSuspendBridge34f00d829tqio,
  getJoinedRooms$virtualSuspendBridge as getJoinedRooms$virtualSuspendBridge2acdjxirqhjcl,
  getMessages$virtualSuspendBridge as getMessages$virtualSuspendBridge1f6092sx19jj5,
  getRoomName$virtualSuspendBridge as getRoomName$virtualSuspendBridgeko95asl62eax,
  redactEvent$virtualSuspendBridge as redactEvent$virtualSuspendBridgeyjc58nyc3ipu,
  sendMessage$virtualSuspendBridge as sendMessage$virtualSuspendBridgelpepamst0no1,
  search$virtualSuspendBridge as search$virtualSuspendBridge2ike8w4q7grn0,
  EventsGetContextRequest as EventsGetContextRequest1sdk6swdpy0a2,
  LoginPasswordRequest as LoginPasswordRequest2vvrjo9s462fd,
  NotificationsGetRequest as NotificationsGetRequest3dmo0y8ph5mzz,
  RoomsGetMessagesRequest as RoomsGetMessagesRequestzp3qbhf3d6z8,
  RoomsRedactEventRequest as RoomsRedactEventRequest1d38b95u4mdr6,
  RoomsSendMessageRequest as RoomsSendMessageRequest3bwkuy9eruigu,
  UserDirectorySearchRequest as UserDirectorySearchRequest40nn9s7u6kpp,
  RoomEvent as RoomEvent1rr7tz2c7w2x3,
  SyncResponse as SyncResponse9w6o34sib0b5,
};
//endregion

//# sourceMappingURL=kmatrix-core.mjs.map
