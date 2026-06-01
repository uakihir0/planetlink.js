import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  await2s6xyuld384ut as await_0,
  jsIsFunction2h24qpa0gp5p3 as jsIsFunction,
  copyToArray2j022khrow2yi as copyToArray,
  equals2v6cggk171b6e as equals,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Unit_instancev9v8hjid95df as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  defineProp3ur6h3slcvq4x as defineProp,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  equals2au1ep9vhcato as equals_0,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  Regexxgw0gjiagf4z as Regex,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  take3onnpy6q7ctcz as take,
  emptyList1g2z5xcrvp2zy as emptyList,
  split2bvyvnrlcifjv as split,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  firstOrNull1982767dljvdy as firstOrNull,
  contains3ue2qo8xhmpf1 as contains,
  toInt2q8uldh7sc951 as toInt,
  Companion_getInstancec1c8yhxwuclv as Companion_getInstance,
  toLongkk4waq8msp1k as toLong,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  promisify1z0ncraq1ipzh as promisify,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  firstOrNull1gk7vzkf4h3nq as firstOrNull_0,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  throwArrayMissingFieldExceptionbk1mj238w44a as throwArrayMissingFieldException,
  FloatSerializer_getInstance1qugdr7bzigck as FloatSerializer_getInstance,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  delay3147v9lzv1xxn as delay,
} from './kotlinx-coroutines-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import { AnySerializer_getInstance32lcggytvsxb8 as AnySerializer_getInstance } from './kmpcommon.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  URLBuilder2mz8zkz4u9ray as URLBuilder,
  Companion_getInstancek1529r0btmjl as Companion_getInstance_0,
  Urlowwyg1lanrqp as Url,
  set_encodedPath3q0i8nsv3a7qy as set_encodedPath,
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
} from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Mastodon {}
class MastodonException extends Exception {
  static zbn(m) {
    var $this = this.he(m);
    init_work_socialhub_kmastodon_MastodonException($this);
    return $this;
  }
  static abo(e) {
    var $this = this.ke(e);
    init_work_socialhub_kmastodon_MastodonException($this);
    return $this;
  }
  static bbo(status, body) {
    var $this = this.he('status code: ' + status + ', body: ' + body);
    init_work_socialhub_kmastodon_MastodonException($this);
    $this.wbn_1 = status;
    $this.xbn_1 = body;
    return $this;
  }
}
class MastodonFactory {
  cbo(uri, accessToken, service) {
    return new MastodonImpl(uri, accessToken, service);
  }
  instance(uri, accessToken, service, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    service = service === VOID ? Service_MASTODON_getInstance() : service;
    return $super === VOID ? this.cbo(uri, accessToken, service) : $super.cbo.call(this, uri, accessToken, service);
  }
}
class AccountsResource {}
function *verifyCredentials$suspendBridge($completion) {
}
function *updateCredentials$suspendBridge(request, $completion) {
}
function *account$suspendBridge(request, $completion) {
}
function *followers$suspendBridge(request, $completion) {
}
function *following$suspendBridge(request, $completion) {
}
function *statuses$suspendBridge(request, $completion) {
}
function *follow$suspendBridge(request, $completion) {
}
function *unfollow$suspendBridge(request, $completion) {
}
function *block$suspendBridge(request, $completion) {
}
function *unblock$suspendBridge(request, $completion) {
}
function *mute$suspendBridge(request, $completion) {
}
function *unmute$suspendBridge(request, $completion) {
}
function *relationships$suspendBridge(request, $completion) {
}
function *search$suspendBridge(request, $completion) {
}
class AppsResource {}
function *registerApplication$suspendBridge(request, $completion) {
}
class BlocksResource {}
function *blocks$suspendBridge(request, $completion) {
}
class BookmarksResource {}
function *bookmarks$suspendBridge(request, $completion) {
}
function *unbookmark$suspendBridge(request, $completion) {
}
class DomainBlocksResource {}
function *domainBlocks$suspendBridge(request, $completion) {
}
function *blockDomain$suspendBridge(request, $completion) {
}
function *unblockDomain$suspendBridge(request, $completion) {
}
class EmojisResource {}
function *customEmojis$suspendBridge($completion) {
}
class FavouritesResource {}
function *favourites$suspendBridge(request, $completion) {
}
class FollowRequestsResource {}
function *followRequests$suspendBridge($completion) {
}
function *authorizeFollowRequest$suspendBridge(request, $completion) {
}
function *rejectFollowRequest$suspendBridge(request, $completion) {
}
class FollowsResource {}
function *remoteFollow$suspendBridge(request, $completion) {
}
class InstancesResource {}
function *instanceV1$suspendBridge($completion) {
}
function *instanceV2$suspendBridge($completion) {
}
class ListsResource {}
function *lists$suspendBridge(request, $completion) {
}
function *listAccounts$suspendBridge(request, $completion) {
}
function *list$suspendBridge(request, $completion) {
}
function *createList$suspendBridge(request, $completion) {
}
function *updateList$suspendBridge(request, $completion) {
}
function *deleteList$suspendBridge(request, $completion) {
}
function *addAccountsToList$suspendBridge(request, $completion) {
}
function *deleteAccountsToList$suspendBridge(request, $completion) {
}
class MediasResource {}
function *postMedia$suspendBridge(request, $completion) {
}
class MutesResource {}
function *mutes$suspendBridge($completion) {
}
class NodesResource {}
function *nodeInfo$suspendBridge($completion) {
}
class NotificationsResource {}
function *notifications$suspendBridge(request, $completion) {
}
function *notification$suspendBridge(request, $completion) {
}
function *clearNotifications$suspendBridge($completion) {
}
function *subscription$suspendBridge($completion) {
}
function *pushSubscription$suspendBridge(request, $completion) {
}
function *editSubscription$suspendBridge(request, $completion) {
}
class OAuthResource {}
function *issueAccessTokenWithCredentials$suspendBridge(request, $completion) {
}
function *issueAccessTokenWithAuthorizationCode$suspendBridge(request, $completion) {
}
function *refreshAccessToken$suspendBridge(request, $completion) {
}
function *authorizationUrl$suspendBridge(request, $completion) {
}
class PollsResource {}
function *votePoll$suspendBridge(request, $completion) {
}
class ReportsResource {}
function *reports$suspendBridge($completion) {
}
function *postReport$suspendBridge(request, $completion) {
}
class ScheduledStatusesResource {}
function *scheduledStatuses$suspendBridge(request, $completion) {
}
function *scheduledStatus$suspendBridge(request, $completion) {
}
function *patchScheduledStatus$suspendBridge(request, $completion) {
}
function *deleteScheduledStatus$suspendBridge(request, $completion) {
}
class SearchResource {}
function *search$suspendBridge_0(request, $completion) {
}
class StatusesResource {}
function *status$suspendBridge(request, $completion) {
}
function *context$suspendBridge(request, $completion) {
}
function *card$suspendBridge(request, $completion) {
}
function *rebloggedBy$suspendBridge(request, $completion) {
}
function *favouritedBy$suspendBridge(request, $completion) {
}
function *postStatus$suspendBridge(request, $completion) {
}
function *deleteStatus$suspendBridge(request, $completion) {
}
function *reblog$suspendBridge(request, $completion) {
}
function *unreblog$suspendBridge(request, $completion) {
}
function *favourite$suspendBridge(request, $completion) {
}
function *unfavourite$suspendBridge(request, $completion) {
}
function *pin$suspendBridge(request, $completion) {
}
function *unpin$suspendBridge(request, $completion) {
}
class TimelinesResource {}
function *homeTimeline$suspendBridge(request, $completion) {
}
function *publicTimeline$suspendBridge(request, $completion) {
}
function *hashtagTimeline$suspendBridge(request, $completion) {
}
function *listTimeline$suspendBridge(request, $completion) {
}
function *conversations$suspendBridge(request, $completion) {
}
class TrendsResource {}
function *trends$suspendBridge(request, $completion) {
}
class Page {
  constructor() {
    this.offset = null;
    this.limit = null;
  }
  j39(_set____db54di) {
    this.offset = _set____db54di;
  }
  k39() {
    return this.offset;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
}
class Range {
  constructor() {
    this.maxId = null;
    this.minId = null;
    this.sinceId = null;
    this.limit = null;
  }
  abx(_set____db54di) {
    this.maxId = _set____db54di;
  }
  k38() {
    return this.maxId;
  }
  bbx(_set____db54di) {
    this.minId = _set____db54di;
  }
  cbx() {
    return this.minId;
  }
  w8y(_set____db54di) {
    this.sinceId = _set____db54di;
  }
  o38() {
    return this.sinceId;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
}
class AccountsAccountRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsBlockRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsFollowRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsFollowersRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class AccountsFollowingRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class AccountsMuteRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsRelationshipsRequest {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.ids = [];
  }
  ebx(_set____db54di) {
    this.ids = _set____db54di;
  }
  fbx() {
    return this.ids;
  }
  addId(id) {
    var tmp = this;
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.ids;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [id];
    tmp.ids = tmp$ret$1.concat(tmp$ret$2);
  }
}
class AccountsSearchRequest {
  constructor() {
    this.query = null;
    this.limit = null;
  }
  s35(_set____db54di) {
    this.query = _set____db54di;
  }
  t35() {
    return this.query;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
}
class AccountsStatusesRequest {
  constructor() {
    this.id = null;
    this.onlyPinned = null;
    this.onlyMedia = null;
    this.excludeReplies = null;
    this.excludeReblogs = null;
    this.range = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  gbx(_set____db54di) {
    this.onlyPinned = _set____db54di;
  }
  hbx() {
    return this.onlyPinned;
  }
  ibx(_set____db54di) {
    this.onlyMedia = _set____db54di;
  }
  jbx() {
    return this.onlyMedia;
  }
  kbx(_set____db54di) {
    this.excludeReplies = _set____db54di;
  }
  lbx() {
    return this.excludeReplies;
  }
  mbx(_set____db54di) {
    this.excludeReblogs = _set____db54di;
  }
  nbx() {
    return this.excludeReblogs;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class AccountsUnblockRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsUnfollowRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsUnmuteRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class AccountsUpdateCredentialsRequest {
  constructor() {
    this.displayName = null;
    this.note = null;
    this.avatar = null;
    this.header = null;
  }
  p5z(_set____db54di) {
    this.displayName = _set____db54di;
  }
  q5z() {
    return this.displayName;
  }
  obx(_set____db54di) {
    this.note = _set____db54di;
  }
  s9q() {
    return this.note;
  }
  r5z(_set____db54di) {
    this.avatar = _set____db54di;
  }
  s5z() {
    return this.avatar;
  }
  va8(_set____db54di) {
    this.header = _set____db54di;
  }
  wa8() {
    return this.header;
  }
}
class AppsRegisterApplicationRequest {
  constructor() {
    this.name = null;
    this.website = null;
    this.redirectUris = null;
    this.scopes = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  s31(_set____db54di) {
    this.website = _set____db54di;
  }
  t31() {
    return this.website;
  }
  pbx(_set____db54di) {
    this.redirectUris = _set____db54di;
  }
  qbx() {
    return this.redirectUris;
  }
  rbx(_set____db54di) {
    this.scopes = _set____db54di;
  }
  sbx() {
    return this.scopes;
  }
}
class BlocksBlocksRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class BookmarksGetBookmarksRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class BookmarksUnbookmarkRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class DomainBlocksBlockDomainRequest {
  constructor() {
    this.domain = null;
  }
  tbx(_set____db54di) {
    this.domain = _set____db54di;
  }
  ubx() {
    return this.domain;
  }
}
class DomainBlocksGetDomainBlocksRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class DomainBlocksUnblockDomainRequest {
  constructor() {
    this.domain = null;
  }
  tbx(_set____db54di) {
    this.domain = _set____db54di;
  }
  ubx() {
    return this.domain;
  }
}
class FavouritesFavouritesRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class FollowRequestsAuthorizeFollowRequestRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class FollowRequestsRejectFollowRequestRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class FollowsRemoteFollowRequest {
  constructor() {
    this.uri = null;
  }
  d63(_set____db54di) {
    this.uri = _set____db54di;
  }
  q62() {
    return this.uri;
  }
}
class ListsAddAccountsToListRequest {
  constructor() {
    this.id = null;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.accountIds = [];
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  vbx(_set____db54di) {
    this.accountIds = _set____db54di;
  }
  wbx() {
    return this.accountIds;
  }
  addAccountId(accountId) {
    var tmp = this;
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.accountIds;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [accountId];
    tmp.accountIds = tmp$ret$1.concat(tmp$ret$2);
  }
}
class ListsCreateListRequest {
  constructor() {
    this.title = null;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
}
class ListsDeleteAccountsToListRequest {
  constructor() {
    this.id = null;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.accountIds = [];
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  vbx(_set____db54di) {
    this.accountIds = _set____db54di;
  }
  wbx() {
    return this.accountIds;
  }
  addAccountId(accountId) {
    var tmp = this;
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.accountIds;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [accountId];
    tmp.accountIds = tmp$ret$1.concat(tmp$ret$2);
  }
}
class ListsDeleteListRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class ListsListAccountsRequest {
  constructor() {
    this.id = null;
    this.limit = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  f61(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
}
class ListsListRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class ListsListsRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class ListsUpdateListRequest {
  constructor() {
    this.id = null;
    this.title = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
}
class MediasPostMediaRequest {
  constructor() {
    this.bytes = null;
    this.name = null;
    this.description = null;
  }
  s95(_set____db54di) {
    this.bytes = _set____db54di;
  }
  h6l() {
    return this.bytes;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
}
class NotificationsEditSubscriptionRequest {
  constructor() {
    this.alert = null;
  }
  xbx(_set____db54di) {
    this.alert = _set____db54di;
  }
  ybx() {
    return this.alert;
  }
}
class NotificationsNotificationRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class NotificationsNotificationsRequest {
  constructor() {
    this.id = null;
    this.range = null;
    this.types = null;
    this.excludeTypes = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
  zbx(_set____db54di) {
    this.types = _set____db54di;
  }
  aby() {
    return this.types;
  }
  g99(_set____db54di) {
    this.excludeTypes = _set____db54di;
  }
  h99() {
    return this.excludeTypes;
  }
}
class NotificationsPostSubscriptionRequest {
  constructor() {
    this.endpoint = null;
    this.p256dh = null;
    this.auth = null;
    this.alert = null;
  }
  z85(_set____db54di) {
    this.endpoint = _set____db54di;
  }
  a86() {
    return this.endpoint;
  }
  bby(_set____db54di) {
    this.p256dh = _set____db54di;
  }
  cby() {
    return this.p256dh;
  }
  d9m(_set____db54di) {
    this.auth = _set____db54di;
  }
  p5y() {
    return this.auth;
  }
  xbx(_set____db54di) {
    this.alert = _set____db54di;
  }
  ybx() {
    return this.alert;
  }
}
class OAuthAuthorizationUrlRequest {
  constructor() {
    this.clientId = null;
    this.redirectUri = null;
    this.scopes = null;
  }
  jbk(_set____db54di) {
    this.clientId = _set____db54di;
  }
  kbk() {
    return this.clientId;
  }
  dby(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  eby() {
    return this.redirectUri;
  }
  rbx(_set____db54di) {
    this.scopes = _set____db54di;
  }
  sbx() {
    return this.scopes;
  }
}
class OAuthIssueAccessTokenWithAuthorizationCodeRequest {
  constructor() {
    this.clientId = null;
    this.clientSecret = null;
    this.redirectUri = null;
    this.code = null;
  }
  jbk(_set____db54di) {
    this.clientId = _set____db54di;
  }
  kbk() {
    return this.clientId;
  }
  lbk(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  mbk() {
    return this.clientSecret;
  }
  dby(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  eby() {
    return this.redirectUri;
  }
  fby(_set____db54di) {
    this.code = _set____db54di;
  }
  p2x() {
    return this.code;
  }
}
class OAuthIssueAccessTokenWithCredentialsRequest {
  constructor() {
    this.clientId = null;
    this.clientSecret = null;
    this.emailAddress = null;
    this.password = null;
    this.scopes = null;
  }
  jbk(_set____db54di) {
    this.clientId = _set____db54di;
  }
  kbk() {
    return this.clientId;
  }
  lbk(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  mbk() {
    return this.clientSecret;
  }
  gby(_set____db54di) {
    this.emailAddress = _set____db54di;
  }
  hby() {
    return this.emailAddress;
  }
  x6r(_set____db54di) {
    this.password = _set____db54di;
  }
  j45() {
    return this.password;
  }
  rbx(_set____db54di) {
    this.scopes = _set____db54di;
  }
  sbx() {
    return this.scopes;
  }
}
class OAuthRefreshAccessTokenRequest {
  constructor() {
    this.clientId = null;
    this.clientSecret = null;
    this.refreshToken = null;
  }
  jbk(_set____db54di) {
    this.clientId = _set____db54di;
  }
  kbk() {
    return this.clientId;
  }
  lbk(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  mbk() {
    return this.clientSecret;
  }
  iby(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  jby() {
    return this.refreshToken;
  }
}
class PollsVotePollRequest {
  constructor() {
    this.id = null;
    this.choices = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  kby(_set____db54di) {
    this.choices = _set____db54di;
  }
  x8x() {
    return this.choices;
  }
}
class ReportsPostReportRequest {
  constructor() {
    this.accountId = null;
    this.statusIds = null;
    this.comment = null;
  }
  lby(_set____db54di) {
    this.accountId = _set____db54di;
  }
  mby() {
    return this.accountId;
  }
  nby(_set____db54di) {
    this.statusIds = _set____db54di;
  }
  oby() {
    return this.statusIds;
  }
  n95(_set____db54di) {
    this.comment = _set____db54di;
  }
  h37() {
    return this.comment;
  }
}
class ScheduledStatusesGetScheduledStatusesRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class ScheduledStatusesPatchScheduledStatusRequest {
  constructor() {
    this.id = null;
    this.scheduledAt = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  pby(_set____db54di) {
    this.scheduledAt = _set____db54di;
  }
  qby() {
    return this.scheduledAt;
  }
}
class ScheduledStatusesScheduledStatusRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class SearchSearchRequest {
  constructor() {
    this.query = null;
    this.resolve = null;
    this.onlyFollowing = null;
    this.page = null;
  }
  s35(_set____db54di) {
    this.query = _set____db54di;
  }
  t35() {
    return this.query;
  }
  rby(_set____db54di) {
    this.resolve = _set____db54di;
  }
  sby() {
    return this.resolve;
  }
  tby(_set____db54di) {
    this.onlyFollowing = _set____db54di;
  }
  uby() {
    return this.onlyFollowing;
  }
  vby(_set____db54di) {
    this.page = _set____db54di;
  }
  i39() {
    return this.page;
  }
}
class StatusesCardRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesContextRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesDeleteStatusRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesFavouriteRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesFavouritedByRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class StatusesPinRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesPostStatusRequest {
  constructor() {
    this.inReplyToId = null;
    this.sensitive = null;
    this.spoilerText = null;
    this.visibility = null;
    this.status = null;
    this.content = null;
    this.mediaIds = null;
    this.pollOptions = null;
    this.pollExpiresIn = null;
    this.pollMultiple = null;
    this.pollHideTotals = null;
  }
  wby(_set____db54di) {
    this.inReplyToId = _set____db54di;
  }
  xby() {
    return this.inReplyToId;
  }
  o95(_set____db54di) {
    this.sensitive = _set____db54di;
  }
  p95() {
    return this.sensitive;
  }
  yby(_set____db54di) {
    this.spoilerText = _set____db54di;
  }
  cbn() {
    return this.spoilerText;
  }
  a3a(_set____db54di) {
    this.visibility = _set____db54di;
  }
  b3a() {
    return this.visibility;
  }
  zby(_set____db54di) {
    this.status = _set____db54di;
  }
  m4k() {
    return this.status;
  }
  abz(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  bbz(_set____db54di) {
    this.mediaIds = _set____db54di;
  }
  cbz() {
    return this.mediaIds;
  }
  dbz(_set____db54di) {
    this.pollOptions = _set____db54di;
  }
  ebz() {
    return this.pollOptions;
  }
  fbz(_set____db54di) {
    this.pollExpiresIn = _set____db54di;
  }
  gbz() {
    return this.pollExpiresIn;
  }
  hbz(_set____db54di) {
    this.pollMultiple = _set____db54di;
  }
  ibz() {
    return this.pollMultiple;
  }
  jbz(_set____db54di) {
    this.pollHideTotals = _set____db54di;
  }
  kbz() {
    return this.pollHideTotals;
  }
}
class StatusesReblogRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesRebloggedByRequest {
  constructor() {
    this.id = null;
    this.range = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class StatusesStatusRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesUnfavouriteRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesUnpinRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class StatusesUnreblogRequest {
  constructor() {
    this.id = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
}
class TimelinesConversationsRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class TimelinesHashTagTimelineRequest {
  constructor() {
    this.hashtag = null;
    this.local = null;
    this.onlyMedia = null;
    this.range = null;
  }
  lbz(_set____db54di) {
    this.hashtag = _set____db54di;
  }
  mbz() {
    return this.hashtag;
  }
  t9j(_set____db54di) {
    this.local = _set____db54di;
  }
  u9j() {
    return this.local;
  }
  ibx(_set____db54di) {
    this.onlyMedia = _set____db54di;
  }
  jbx() {
    return this.onlyMedia;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class TimelinesHomeTimelineRequest {
  constructor() {
    this.range = null;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class TimelinesListTimelineRequest {
  constructor() {
    this.listId = null;
    this.range = null;
  }
  q9c(_set____db54di) {
    this.listId = _set____db54di;
  }
  h9c() {
    return this.listId;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class TimelinesPublicTimelineRequest {
  constructor() {
    this.local = null;
    this.onlyMedia = null;
    this.range = null;
  }
  t9j(_set____db54di) {
    this.local = _set____db54di;
  }
  u9j() {
    return this.local;
  }
  ibx(_set____db54di) {
    this.onlyMedia = _set____db54di;
  }
  jbx() {
    return this.onlyMedia;
  }
  dbx(_set____db54di) {
    this.range = _set____db54di;
  }
  di() {
    return this.range;
  }
}
class TrendsTrendsRequest {
  constructor() {
    this.limit = null;
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
    this.link = null;
    this.json = null;
  }
  baf(_set____db54di) {
    this.data = _set____db54di;
  }
  u3a() {
    return this.data;
  }
  nbz(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  obz(_set____db54di) {
    this.link = _set____db54di;
  }
  a2x() {
    return this.link;
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
    this.link = null;
  }
  nbz(_set____db54di) {
    this.limit = _set____db54di;
  }
  o34() {
    return this.limit;
  }
  obz(_set____db54di) {
    this.link = _set____db54di;
  }
  a2x() {
    return this.link;
  }
}
class Companion {
  from(value) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = get_entries();
    // Inline function 'kotlin.collections.find' call
    var tmp0 = copyToArray(this_0);
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(element.r1_1, value, true)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException.o('unsupported service: ' + value);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class Service extends Enum {
  get name() {
    return this.d1();
  }
  get ordinal() {
    return this.q4();
  }
}
class Companion_0 {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.AccessToken', this, 6);
    tmp0_serialDesc.m1a('access_token', true);
    tmp0_serialDesc.m1a('token_type', true);
    tmp0_serialDesc.m1a('scope', true);
    tmp0_serialDesc.m1a('created_at', true);
    tmp0_serialDesc.m1a('refresh_token', true);
    tmp0_serialDesc.m1a('expires_in', true);
    this.sbz_1 = tmp0_serialDesc;
  }
  tbz(encoder, value) {
    var tmp0_desc = this.sbz_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.tokenType == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.scope == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.createdAt === 0)) {
      tmp1_output.e14(tmp0_desc, 3, value.createdAt);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.expiresIn == null)) {
      tmp1_output.m14(tmp0_desc, 5, IntSerializer_getInstance(), value.expiresIn);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.tbz(encoder, value instanceof AccessToken ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.sbz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
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
      tmp7_local3 = tmp10_input.z12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
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
            tmp7_local3 = tmp10_input.z12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return AccessToken.ubz(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.sbz_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class AccessToken {
  constructor() {
    this.accessToken = null;
    this.tokenType = null;
    this.scope = null;
    this.createdAt = 0;
    this.refreshToken = null;
    this.expiresIn = null;
  }
  e9r(_set____db54di) {
    this.accessToken = _set____db54di;
  }
  f9r() {
    return this.accessToken;
  }
  vbz(_set____db54di) {
    this.tokenType = _set____db54di;
  }
  wbz() {
    return this.tokenType;
  }
  xbz(_set____db54di) {
    this.scope = _set____db54di;
  }
  ybz() {
    return this.scope;
  }
  zbz(_set____db54di) {
    this.createdAt = _set____db54di;
  }
  e60() {
    return this.createdAt;
  }
  iby(_set____db54di) {
    this.refreshToken = _set____db54di;
  }
  jby() {
    return this.refreshToken;
  }
  ac0(_set____db54di) {
    this.expiresIn = _set____db54di;
  }
  y3a() {
    return this.expiresIn;
  }
  static ubz(seen0, accessToken, tokenType, scope, createdAt, refreshToken, expiresIn, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().sbz_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.accessToken = null;
    else
      $this.accessToken = accessToken;
    if (0 === (seen0 & 2))
      $this.tokenType = null;
    else
      $this.tokenType = tokenType;
    if (0 === (seen0 & 4))
      $this.scope = null;
    else
      $this.scope = scope;
    if (0 === (seen0 & 8))
      $this.createdAt = 0;
    else
      $this.createdAt = createdAt;
    if (0 === (seen0 & 16))
      $this.refreshToken = null;
    else
      $this.refreshToken = refreshToken;
    if (0 === (seen0 & 32))
      $this.expiresIn = null;
    else
      $this.expiresIn = expiresIn;
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Account$Companion$$childSerializers$_anonymous__ed783n);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bc0_1 = [null, null, null, null, null, null, null, null, null, null, null, tmp_1, lazy(tmp_2, Account$Companion$$childSerializers$_anonymous__ed783n_0), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Account', this, 28);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('username', false);
    tmp0_serialDesc.m1a('acct', false);
    tmp0_serialDesc.m1a('url', false);
    tmp0_serialDesc.m1a('display_name', false);
    tmp0_serialDesc.m1a('note', false);
    tmp0_serialDesc.m1a('avatar', false);
    tmp0_serialDesc.m1a('avatar_static', true);
    tmp0_serialDesc.m1a('header', false);
    tmp0_serialDesc.m1a('header_static', true);
    tmp0_serialDesc.m1a('locked', true);
    tmp0_serialDesc.m1a('fields', true);
    tmp0_serialDesc.m1a('emojis', true);
    tmp0_serialDesc.m1a('bot', true);
    tmp0_serialDesc.m1a('group', true);
    tmp0_serialDesc.m1a('discoverable', true);
    tmp0_serialDesc.m1a('noindex', true);
    tmp0_serialDesc.m1a('moved', true);
    tmp0_serialDesc.m1a('suspended', true);
    tmp0_serialDesc.m1a('limited', true);
    tmp0_serialDesc.m1a('created_at', false);
    tmp0_serialDesc.m1a('last_status_at', true);
    tmp0_serialDesc.m1a('statuses_count', true);
    tmp0_serialDesc.m1a('followers_count', true);
    tmp0_serialDesc.m1a('following_count', true);
    tmp0_serialDesc.m1a('source', true);
    tmp0_serialDesc.m1a('role', true);
    tmp0_serialDesc.m1a('pleroma', true);
    this.cc0_1 = tmp0_serialDesc;
  }
  dc0(encoder, value) {
    var tmp0_desc = this.cc0_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().bc0_1;
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.userName);
    tmp1_output.j14(tmp0_desc, 2, value.account);
    tmp1_output.j14(tmp0_desc, 3, value.url);
    tmp1_output.j14(tmp0_desc, 4, value.displayName);
    tmp1_output.j14(tmp0_desc, 5, value.note);
    tmp1_output.j14(tmp0_desc, 6, value.avatar);
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.avatarStatic == null)) {
      tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.avatarStatic);
    }
    tmp1_output.j14(tmp0_desc, 8, value.header);
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.headerStatic == null)) {
      tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.headerStatic);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.isLocked === false)) {
      tmp1_output.b14(tmp0_desc, 10, value.isLocked);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 11)) {
      tmp = true;
    } else {
      var tmp_0 = value.fields;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals_0(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 11, tmp2_cached[11].y2(), value.fields);
    }
    var tmp_1;
    if (tmp1_output.q14(tmp0_desc, 12)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.emojis;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = [];
      tmp_1 = !equals_0(tmp_2, tmp$ret$3);
    }
    if (tmp_1) {
      tmp1_output.l14(tmp0_desc, 12, tmp2_cached[12].y2(), value.emojis);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.isBot === false)) {
      tmp1_output.b14(tmp0_desc, 13, value.isBot);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.isGroup === false)) {
      tmp1_output.b14(tmp0_desc, 14, value.isGroup);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.isDiscoverable == null)) {
      tmp1_output.m14(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isDiscoverable);
    }
    if (tmp1_output.q14(tmp0_desc, 16) ? true : !(value.isNoindex == null)) {
      tmp1_output.m14(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isNoindex);
    }
    if (tmp1_output.q14(tmp0_desc, 17) ? true : !(value.moved == null)) {
      tmp1_output.m14(tmp0_desc, 17, $serializer_getInstance_0(), value.moved);
    }
    if (tmp1_output.q14(tmp0_desc, 18) ? true : !(value.isSuspended === false)) {
      tmp1_output.b14(tmp0_desc, 18, value.isSuspended);
    }
    if (tmp1_output.q14(tmp0_desc, 19) ? true : !(value.isLimited === false)) {
      tmp1_output.b14(tmp0_desc, 19, value.isLimited);
    }
    tmp1_output.j14(tmp0_desc, 20, value.createdAt);
    if (tmp1_output.q14(tmp0_desc, 21) ? true : !(value.lastStatusAt == null)) {
      tmp1_output.m14(tmp0_desc, 21, StringSerializer_getInstance(), value.lastStatusAt);
    }
    if (tmp1_output.q14(tmp0_desc, 22) ? true : !(value.statusesCount === 0)) {
      tmp1_output.e14(tmp0_desc, 22, value.statusesCount);
    }
    if (tmp1_output.q14(tmp0_desc, 23) ? true : !(value.followersCount === 0)) {
      tmp1_output.e14(tmp0_desc, 23, value.followersCount);
    }
    if (tmp1_output.q14(tmp0_desc, 24) ? true : !(value.followingCount === 0)) {
      tmp1_output.e14(tmp0_desc, 24, value.followingCount);
    }
    if (tmp1_output.q14(tmp0_desc, 25) ? true : !(value.source == null)) {
      tmp1_output.m14(tmp0_desc, 25, $serializer_getInstance_2(), value.source);
    }
    if (tmp1_output.q14(tmp0_desc, 26) ? true : !(value.role == null)) {
      tmp1_output.m14(tmp0_desc, 26, $serializer_getInstance_21(), value.role);
    }
    if (tmp1_output.q14(tmp0_desc, 27) ? true : !(value.pleroma == null)) {
      tmp1_output.m14(tmp0_desc, 27, $serializer_getInstance_65(), value.pleroma);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dc0(encoder, value instanceof Account ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.cc0_1;
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
    var tmp14_local10 = false;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = false;
    var tmp18_local14 = false;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = false;
    var tmp23_local19 = false;
    var tmp24_local20 = null;
    var tmp25_local21 = null;
    var tmp26_local22 = 0;
    var tmp27_local23 = 0;
    var tmp28_local24 = 0;
    var tmp29_local25 = null;
    var tmp30_local26 = null;
    var tmp31_local27 = null;
    var tmp32_input = decoder.u12(tmp0_desc);
    var tmp33_cached = Companion_getInstance_3().bc0_1;
    if (tmp32_input.j13()) {
      tmp4_local0 = tmp32_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp32_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp32_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp32_input.e13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp32_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp32_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp32_input.e13(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp32_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp32_input.e13(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp32_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp32_input.w12(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp32_input.g13(tmp0_desc, 11, tmp33_cached[11].y2(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp32_input.g13(tmp0_desc, 12, tmp33_cached[12].y2(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp32_input.w12(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp32_input.w12(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp32_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp32_input.i13(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp32_input.i13(tmp0_desc, 17, $serializer_getInstance_0(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp32_input.w12(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp32_input.w12(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp32_input.e13(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp32_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp25_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp32_input.z12(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp27_local23 = tmp32_input.z12(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp28_local24 = tmp32_input.z12(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp29_local25 = tmp32_input.i13(tmp0_desc, 25, $serializer_getInstance_2(), tmp29_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp30_local26 = tmp32_input.i13(tmp0_desc, 26, $serializer_getInstance_21(), tmp30_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp31_local27 = tmp32_input.i13(tmp0_desc, 27, $serializer_getInstance_65(), tmp31_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp32_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp32_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp32_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp32_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp32_input.e13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp32_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp32_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp32_input.e13(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp32_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp32_input.e13(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp32_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp32_input.w12(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp32_input.g13(tmp0_desc, 11, tmp33_cached[11].y2(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp32_input.g13(tmp0_desc, 12, tmp33_cached[12].y2(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp32_input.w12(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp32_input.w12(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp32_input.i13(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp32_input.i13(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp32_input.i13(tmp0_desc, 17, $serializer_getInstance_0(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp32_input.w12(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp32_input.w12(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp32_input.e13(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp32_input.i13(tmp0_desc, 21, StringSerializer_getInstance(), tmp25_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp32_input.z12(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp27_local23 = tmp32_input.z12(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp28_local24 = tmp32_input.z12(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp29_local25 = tmp32_input.i13(tmp0_desc, 25, $serializer_getInstance_2(), tmp29_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp30_local26 = tmp32_input.i13(tmp0_desc, 26, $serializer_getInstance_21(), tmp30_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp31_local27 = tmp32_input.i13(tmp0_desc, 27, $serializer_getInstance_65(), tmp31_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp32_input.v12(tmp0_desc);
    return Account.nc0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, tmp27_local23, tmp28_local24, tmp29_local25, tmp30_local26, tmp31_local27, null);
  }
  cy() {
    return this.cc0_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_3().bc0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), tmp0_cached[11].y2(), tmp0_cached[12].y2(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_0()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance_21()), get_nullable($serializer_getInstance_65())];
  }
}
class Account {
  constructor() {
    Companion_getInstance_3();
    this.avatarStatic = null;
    this.headerStatic = null;
    this.isLocked = false;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.fields = [];
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.emojis = [];
    this.isBot = false;
    this.isGroup = false;
    this.isDiscoverable = null;
    this.isNoindex = null;
    this.moved = null;
    this.isSuspended = false;
    this.isLimited = false;
    this.lastStatusAt = null;
    this.statusesCount = 0;
    this.followersCount = 0;
    this.followingCount = 0;
    this.source = null;
    this.role = null;
    this.pleroma = null;
  }
  e7y(_set____db54di) {
    this.ec0_1 = _set____db54di;
  }
  j37() {
    var tmp = this.ec0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  oc0(_set____db54di) {
    this.fc0_1 = _set____db54di;
  }
  pc0() {
    var tmp = this.fc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('userName');
    }
  }
  qc0(_set____db54di) {
    this.gc0_1 = _set____db54di;
  }
  j2q() {
    var tmp = this.gc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('account');
    }
  }
  s9w(_set____db54di) {
    this.hc0_1 = _set____db54di;
  }
  f4k() {
    var tmp = this.hc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('url');
    }
  }
  rc0(_set____db54di) {
    this.ic0_1 = _set____db54di;
  }
  q5z() {
    var tmp = this.ic0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('displayName');
    }
  }
  sc0(_set____db54di) {
    this.jc0_1 = _set____db54di;
  }
  s9q() {
    var tmp = this.jc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('note');
    }
  }
  tc0(_set____db54di) {
    this.kc0_1 = _set____db54di;
  }
  s5z() {
    var tmp = this.kc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('avatar');
    }
  }
  uc0(_set____db54di) {
    this.avatarStatic = _set____db54di;
  }
  vc0() {
    return this.avatarStatic;
  }
  wc0(_set____db54di) {
    this.lc0_1 = _set____db54di;
  }
  wa8() {
    var tmp = this.lc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('header');
    }
  }
  xc0(_set____db54di) {
    this.headerStatic = _set____db54di;
  }
  yc0() {
    return this.headerStatic;
  }
  pai(_set____db54di) {
    this.isLocked = _set____db54di;
  }
  d2k() {
    return this.isLocked;
  }
  zc0(_set____db54di) {
    this.fields = _set____db54di;
  }
  j9a() {
    return this.fields;
  }
  ac1(_set____db54di) {
    this.emojis = _set____db54di;
  }
  f9t() {
    return this.emojis;
  }
  sak(_set____db54di) {
    this.isBot = _set____db54di;
  }
  a9b() {
    return this.isBot;
  }
  ibn(_set____db54di) {
    this.isGroup = _set____db54di;
  }
  jbn() {
    return this.isGroup;
  }
  bc1(_set____db54di) {
    this.isDiscoverable = _set____db54di;
  }
  cc1() {
    return this.isDiscoverable;
  }
  dc1(_set____db54di) {
    this.isNoindex = _set____db54di;
  }
  ec1() {
    return this.isNoindex;
  }
  fc1(_set____db54di) {
    this.moved = _set____db54di;
  }
  gc1() {
    return this.moved;
  }
  uai(_set____db54di) {
    this.isSuspended = _set____db54di;
  }
  vai() {
    return this.isSuspended;
  }
  sai(_set____db54di) {
    this.isLimited = _set____db54di;
  }
  tai() {
    return this.isLimited;
  }
  p7o(_set____db54di) {
    this.mc0_1 = _set____db54di;
  }
  e60() {
    var tmp = this.mc0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('createdAt');
    }
  }
  hc1(_set____db54di) {
    this.lastStatusAt = _set____db54di;
  }
  ic1() {
    return this.lastStatusAt;
  }
  jc1(_set____db54di) {
    this.statusesCount = _set____db54di;
  }
  x30() {
    return this.statusesCount;
  }
  yai(_set____db54di) {
    this.followersCount = _set____db54di;
  }
  b31() {
    return this.followersCount;
  }
  zai(_set____db54di) {
    this.followingCount = _set____db54di;
  }
  z30() {
    return this.followingCount;
  }
  kc1(_set____db54di) {
    this.source = _set____db54di;
  }
  g1z() {
    return this.source;
  }
  lc1(_set____db54di) {
    this.role = _set____db54di;
  }
  mc1() {
    return this.role;
  }
  nc1(_set____db54di) {
    this.pleroma = _set____db54di;
  }
  oc1() {
    return this.pleroma;
  }
  static nc0(seen0, id, userName, account, url, displayName, note, avatar, avatarStatic, header, headerStatic, isLocked, fields, emojis, isBot, isGroup, isDiscoverable, isNoindex, moved, isSuspended, isLimited, createdAt, lastStatusAt, statusesCount, followersCount, followingCount, source, role, pleroma, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(1048959 === (1048959 & seen0))) {
      throwMissingFieldException(seen0, 1048959, $serializer_getInstance_0().cc0_1);
    }
    var $this = createThis(this);
    $this.ec0_1 = id;
    $this.fc0_1 = userName;
    $this.gc0_1 = account;
    $this.hc0_1 = url;
    $this.ic0_1 = displayName;
    $this.jc0_1 = note;
    $this.kc0_1 = avatar;
    if (0 === (seen0 & 128))
      $this.avatarStatic = null;
    else
      $this.avatarStatic = avatarStatic;
    $this.lc0_1 = header;
    if (0 === (seen0 & 512))
      $this.headerStatic = null;
    else
      $this.headerStatic = headerStatic;
    if (0 === (seen0 & 1024))
      $this.isLocked = false;
    else
      $this.isLocked = isLocked;
    if (0 === (seen0 & 2048)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.fields = [];
    } else
      $this.fields = fields;
    if (0 === (seen0 & 4096)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0.emojis = [];
    } else
      $this.emojis = emojis;
    if (0 === (seen0 & 8192))
      $this.isBot = false;
    else
      $this.isBot = isBot;
    if (0 === (seen0 & 16384))
      $this.isGroup = false;
    else
      $this.isGroup = isGroup;
    if (0 === (seen0 & 32768))
      $this.isDiscoverable = null;
    else
      $this.isDiscoverable = isDiscoverable;
    if (0 === (seen0 & 65536))
      $this.isNoindex = null;
    else
      $this.isNoindex = isNoindex;
    if (0 === (seen0 & 131072))
      $this.moved = null;
    else
      $this.moved = moved;
    if (0 === (seen0 & 262144))
      $this.isSuspended = false;
    else
      $this.isSuspended = isSuspended;
    if (0 === (seen0 & 524288))
      $this.isLimited = false;
    else
      $this.isLimited = isLimited;
    $this.mc0_1 = createdAt;
    if (0 === (seen0 & 2097152))
      $this.lastStatusAt = null;
    else
      $this.lastStatusAt = lastStatusAt;
    if (0 === (seen0 & 4194304))
      $this.statusesCount = 0;
    else
      $this.statusesCount = statusesCount;
    if (0 === (seen0 & 8388608))
      $this.followersCount = 0;
    else
      $this.followersCount = followersCount;
    if (0 === (seen0 & 16777216))
      $this.followingCount = 0;
    else
      $this.followingCount = followingCount;
    if (0 === (seen0 & 33554432))
      $this.source = null;
    else
      $this.source = source;
    if (0 === (seen0 & 67108864))
      $this.role = null;
    else
      $this.role = role;
    if (0 === (seen0 & 134217728))
      $this.pleroma = null;
    else
      $this.pleroma = pleroma;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get userName() {
    return this.pc0();
  }
  set userName(value) {
    this.oc0(value);
  }
  get account() {
    return this.j2q();
  }
  set account(value) {
    this.qc0(value);
  }
  get url() {
    return this.f4k();
  }
  set url(value) {
    this.s9w(value);
  }
  get displayName() {
    return this.q5z();
  }
  set displayName(value) {
    this.rc0(value);
  }
  get note() {
    return this.s9q();
  }
  set note(value) {
    this.sc0(value);
  }
  get avatar() {
    return this.s5z();
  }
  set avatar(value) {
    this.tc0(value);
  }
  get header() {
    return this.wa8();
  }
  set header(value) {
    this.wc0(value);
  }
  get createdAt() {
    return this.e60();
  }
  set createdAt(value) {
    this.p7o(value);
  }
}
class Companion_2 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.AccountList', this, 2);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('title', true);
    this.pc1_1 = tmp0_serialDesc;
  }
  qc1(encoder, value) {
    var tmp0_desc = this.pc1_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.title == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.title);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qc1(encoder, value instanceof AccountList ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.pc1_1;
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
    return AccountList.rc1(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.pc1_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class AccountList {
  constructor() {
    this.id = null;
    this.title = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  static rc1(seen0, id, title, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().pc1_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.title = null;
    else
      $this.title = title;
    return $this;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.sc1_1 = [null, null, null, null, lazy(tmp_0, AccountSource$Companion$$childSerializers$_anonymous__lb5ebm)];
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.AccountSource', this, 5);
    tmp0_serialDesc.m1a('privacy', true);
    tmp0_serialDesc.m1a('sensitive', true);
    tmp0_serialDesc.m1a('language', true);
    tmp0_serialDesc.m1a('note', true);
    tmp0_serialDesc.m1a('fields', true);
    this.tc1_1 = tmp0_serialDesc;
  }
  uc1(encoder, value) {
    var tmp0_desc = this.tc1_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().sc1_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.privacy == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.privacy);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.sensitive == null)) {
      tmp1_output.m14(tmp0_desc, 1, BooleanSerializer_getInstance(), value.sensitive);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.language == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.language);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.note == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.note);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.fields == null)) {
      tmp1_output.m14(tmp0_desc, 4, tmp2_cached[4].y2(), value.fields);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uc1(encoder, value instanceof AccountSource ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tc1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.u12(tmp0_desc);
    var tmp10_cached = Companion_getInstance_5().sc1_1;
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
    return AccountSource.vc1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.tc1_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_5().sc1_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].y2())];
  }
}
class AccountSource {
  constructor() {
    Companion_getInstance_5();
    this.privacy = null;
    this.sensitive = null;
    this.language = null;
    this.note = null;
    this.fields = null;
  }
  wc1(_set____db54di) {
    this.privacy = _set____db54di;
  }
  xc1() {
    return this.privacy;
  }
  o95(_set____db54di) {
    this.sensitive = _set____db54di;
  }
  p95() {
    return this.sensitive;
  }
  yc1(_set____db54di) {
    this.language = _set____db54di;
  }
  zc1() {
    return this.language;
  }
  obx(_set____db54di) {
    this.note = _set____db54di;
  }
  s9q() {
    return this.note;
  }
  ac2(_set____db54di) {
    this.fields = _set____db54di;
  }
  j9a() {
    return this.fields;
  }
  static vc1(seen0, privacy, sensitive, language, note, fields, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().tc1_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.privacy = null;
    else
      $this.privacy = privacy;
    if (0 === (seen0 & 2))
      $this.sensitive = null;
    else
      $this.sensitive = sensitive;
    if (0 === (seen0 & 4))
      $this.language = null;
    else
      $this.language = language;
    if (0 === (seen0 & 8))
      $this.note = null;
    else
      $this.note = note;
    if (0 === (seen0 & 16))
      $this.fields = null;
    else
      $this.fields = fields;
    return $this;
  }
}
class Companion_4 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Alert', this, 6);
    tmp0_serialDesc.m1a('follow', true);
    tmp0_serialDesc.m1a('favourite', true);
    tmp0_serialDesc.m1a('reblog', true);
    tmp0_serialDesc.m1a('mention', true);
    tmp0_serialDesc.m1a('poll', true);
    tmp0_serialDesc.m1a('status', true);
    this.bc2_1 = tmp0_serialDesc;
  }
  cc2(encoder, value) {
    var tmp0_desc = this.bc2_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.follow == null)) {
      tmp1_output.m14(tmp0_desc, 0, BooleanSerializer_getInstance(), value.follow);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.favourite == null)) {
      tmp1_output.m14(tmp0_desc, 1, BooleanSerializer_getInstance(), value.favourite);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.reblog == null)) {
      tmp1_output.m14(tmp0_desc, 2, BooleanSerializer_getInstance(), value.reblog);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.mention == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.mention);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.poll == null)) {
      tmp1_output.m14(tmp0_desc, 4, BooleanSerializer_getInstance(), value.poll);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.status == null)) {
      tmp1_output.m14(tmp0_desc, 5, BooleanSerializer_getInstance(), value.status);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.cc2(encoder, value instanceof Alert ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.bc2_1;
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
      tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, BooleanSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.i13(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, BooleanSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.i13(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.i13(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.i13(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.i13(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return Alert.dc2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.bc2_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Alert {
  constructor() {
    this.follow = null;
    this.favourite = null;
    this.reblog = null;
    this.mention = null;
    this.poll = null;
    this.status = null;
  }
  ec2(_set____db54di) {
    this.follow = _set____db54di;
  }
  fc2() {
    return this.follow;
  }
  gc2(_set____db54di) {
    this.favourite = _set____db54di;
  }
  hc2() {
    return this.favourite;
  }
  ic2(_set____db54di) {
    this.reblog = _set____db54di;
  }
  jc2() {
    return this.reblog;
  }
  kc2(_set____db54di) {
    this.mention = _set____db54di;
  }
  lc2() {
    return this.mention;
  }
  y9j(_set____db54di) {
    this.poll = _set____db54di;
  }
  h3a() {
    return this.poll;
  }
  mc2(_set____db54di) {
    this.status = _set____db54di;
  }
  m4k() {
    return this.status;
  }
  static dc2(seen0, follow, favourite, reblog, mention, poll, status, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().bc2_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.follow = null;
    else
      $this.follow = follow;
    if (0 === (seen0 & 2))
      $this.favourite = null;
    else
      $this.favourite = favourite;
    if (0 === (seen0 & 4))
      $this.reblog = null;
    else
      $this.reblog = reblog;
    if (0 === (seen0 & 8))
      $this.mention = null;
    else
      $this.mention = mention;
    if (0 === (seen0 & 16))
      $this.poll = null;
    else
      $this.poll = poll;
    if (0 === (seen0 & 32))
      $this.status = null;
    else
      $this.status = status;
    return $this;
  }
}
class Companion_5 {}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Application', this, 2);
    tmp0_serialDesc.m1a('name', false);
    tmp0_serialDesc.m1a('website', true);
    this.nc2_1 = tmp0_serialDesc;
  }
  oc2(encoder, value) {
    var tmp0_desc = this.nc2_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.name);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.website == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.website);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.oc2(encoder, value instanceof Application ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nc2_1;
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
    return Application.qc2(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.nc2_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Application {
  constructor() {
    this.website = null;
  }
  c31(_set____db54di) {
    this.pc2_1 = _set____db54di;
  }
  d1() {
    var tmp = this.pc2_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  }
  s31(_set____db54di) {
    this.website = _set____db54di;
  }
  t31() {
    return this.website;
  }
  static qc2(seen0, name, website, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().nc2_1);
    }
    var $this = createThis(this);
    $this.pc2_1 = name;
    if (0 === (seen0 & 2))
      $this.website = null;
    else
      $this.website = website;
    return $this;
  }
  get name() {
    return this.d1();
  }
  set name(value) {
    this.c31(value);
  }
}
class Companion_6 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Attachment', this, 9);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('remote_url', true);
    tmp0_serialDesc.m1a('preview_url', true);
    tmp0_serialDesc.m1a('text_url', true);
    tmp0_serialDesc.m1a('optimized_url', true);
    tmp0_serialDesc.m1a('meta', true);
    tmp0_serialDesc.m1a('orientation', true);
    this.rc2_1 = tmp0_serialDesc;
  }
  sc2(encoder, value) {
    var tmp0_desc = this.rc2_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.remoteUrl == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.remoteUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.previewUrl == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.previewUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.textUrl == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.textUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.optimizedUrl == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.optimizedUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.meta == null)) {
      tmp1_output.m14(tmp0_desc, 7, $serializer_getInstance_58(), value.meta);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.orientation == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.orientation);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sc2(encoder, value instanceof Attachment ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rc2_1;
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
      tmp4_local0 = tmp13_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.i13(tmp0_desc, 7, $serializer_getInstance_58(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.i13(tmp0_desc, 7, $serializer_getInstance_58(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp13_input.v12(tmp0_desc);
    return Attachment.tc2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  cy() {
    return this.rc2_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_58()), get_nullable(StringSerializer_getInstance())];
  }
}
class Attachment {
  constructor() {
    this.id = null;
    this.type = null;
    this.url = null;
    this.remoteUrl = null;
    this.previewUrl = null;
    this.textUrl = null;
    this.optimizedUrl = null;
    this.meta = null;
    this.orientation = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  uc2(_set____db54di) {
    this.remoteUrl = _set____db54di;
  }
  vc2() {
    return this.remoteUrl;
  }
  a33(_set____db54di) {
    this.previewUrl = _set____db54di;
  }
  b33() {
    return this.previewUrl;
  }
  wc2(_set____db54di) {
    this.textUrl = _set____db54di;
  }
  xc2() {
    return this.textUrl;
  }
  yc2(_set____db54di) {
    this.optimizedUrl = _set____db54di;
  }
  zc2() {
    return this.optimizedUrl;
  }
  ac3(_set____db54di) {
    this.meta = _set____db54di;
  }
  bc3() {
    return this.meta;
  }
  cc3(_set____db54di) {
    this.orientation = _set____db54di;
  }
  za0() {
    return this.orientation;
  }
  static tc2(seen0, id, type, url, remoteUrl, previewUrl, textUrl, optimizedUrl, meta, orientation, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().rc2_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 8))
      $this.remoteUrl = null;
    else
      $this.remoteUrl = remoteUrl;
    if (0 === (seen0 & 16))
      $this.previewUrl = null;
    else
      $this.previewUrl = previewUrl;
    if (0 === (seen0 & 32))
      $this.textUrl = null;
    else
      $this.textUrl = textUrl;
    if (0 === (seen0 & 64))
      $this.optimizedUrl = null;
    else
      $this.optimizedUrl = optimizedUrl;
    if (0 === (seen0 & 128))
      $this.meta = null;
    else
      $this.meta = meta;
    if (0 === (seen0 & 256))
      $this.orientation = null;
    else
      $this.orientation = orientation;
    return $this;
  }
}
class Companion_7 {}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Card', this, 4);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('title', true);
    tmp0_serialDesc.m1a('description', true);
    tmp0_serialDesc.m1a('image', true);
    this.dc3_1 = tmp0_serialDesc;
  }
  ec3(encoder, value) {
    var tmp0_desc = this.dc3_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.title == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.image == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.image);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ec3(encoder, value instanceof Card ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dc3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return Card.fc3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.dc3_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Card {
  constructor() {
    this.url = null;
    this.title = null;
    this.description = null;
    this.image = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
  gc3(_set____db54di) {
    this.image = _set____db54di;
  }
  y7f() {
    return this.image;
  }
  static fc3(seen0, url, title, description, image, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().dc3_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.image = null;
    else
      $this.image = image;
    return $this;
  }
}
class Companion_8 {}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.ClientCredential', this, 4);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('redirect_uri', true);
    tmp0_serialDesc.m1a('client_id', true);
    tmp0_serialDesc.m1a('client_secret', true);
    this.hc3_1 = tmp0_serialDesc;
  }
  ic3(encoder, value) {
    var tmp0_desc = this.hc3_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.redirectUri == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.redirectUri);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.clientId == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.clientId);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.clientSecret == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.clientSecret);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ic3(encoder, value instanceof ClientCredential ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hc3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return ClientCredential.jc3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.hc3_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class ClientCredential {
  constructor() {
    this.id = null;
    this.redirectUri = null;
    this.clientId = null;
    this.clientSecret = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dby(_set____db54di) {
    this.redirectUri = _set____db54di;
  }
  eby() {
    return this.redirectUri;
  }
  jbk(_set____db54di) {
    this.clientId = _set____db54di;
  }
  kbk() {
    return this.clientId;
  }
  lbk(_set____db54di) {
    this.clientSecret = _set____db54di;
  }
  mbk() {
    return this.clientSecret;
  }
  static jc3(seen0, id, redirectUri, clientId, clientSecret, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().hc3_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.redirectUri = null;
    else
      $this.redirectUri = redirectUri;
    if (0 === (seen0 & 4))
      $this.clientId = null;
    else
      $this.clientId = clientId;
    if (0 === (seen0 & 8))
      $this.clientSecret = null;
    else
      $this.clientSecret = clientSecret;
    return $this;
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Context$Companion$$childSerializers$_anonymous__g0lu11);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kc3_1 = [tmp_1, lazy(tmp_2, Context$Companion$$childSerializers$_anonymous__g0lu11_0)];
  }
}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Context', this, 2);
    tmp0_serialDesc.m1a('ancestors', true);
    tmp0_serialDesc.m1a('descendants', true);
    this.lc3_1 = tmp0_serialDesc;
  }
  mc3(encoder, value) {
    var tmp0_desc = this.lc3_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().kc3_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.ancestors == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.ancestors);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.descendants == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.descendants);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.mc3(encoder, value instanceof Context ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.lc3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().kc3_1;
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, tmp7_cached[0].y2(), tmp4_local0);
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
    return Context.nc3(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.lc3_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_11().kc3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2())];
  }
}
class Context {
  constructor() {
    Companion_getInstance_11();
    this.ancestors = null;
    this.descendants = null;
  }
  oc3(_set____db54di) {
    this.ancestors = _set____db54di;
  }
  a32() {
    return this.ancestors;
  }
  pc3(_set____db54di) {
    this.descendants = _set____db54di;
  }
  c32() {
    return this.descendants;
  }
  static nc3(seen0, ancestors, descendants, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().lc3_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.ancestors = null;
    else
      $this.ancestors = ancestors;
    if (0 === (seen0 & 2))
      $this.descendants = null;
    else
      $this.descendants = descendants;
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
    tmp.qc3_1 = [null, lazy(tmp_0, Conversation$Companion$$childSerializers$_anonymous__u0czaf), null, null];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Conversation', this, 4);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('accounts', true);
    tmp0_serialDesc.m1a('last_status', true);
    tmp0_serialDesc.m1a('unread', true);
    this.rc3_1 = tmp0_serialDesc;
  }
  sc3(encoder, value) {
    var tmp0_desc = this.rc3_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().qc3_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.accounts == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.accounts);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.lastStatus == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_24(), value.lastStatus);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.unread == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.unread);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sc3(encoder, value instanceof Conversation ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rc3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_12().qc3_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, tmp9_cached[1].y2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, $serializer_getInstance_24(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, tmp9_cached[1].y2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, $serializer_getInstance_24(), tmp6_local2);
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
    return Conversation.tc3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.rc3_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_12().qc3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[1].y2()), get_nullable($serializer_getInstance_24()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Conversation {
  constructor() {
    Companion_getInstance_12();
    this.id = null;
    this.accounts = null;
    this.lastStatus = null;
    this.unread = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  uc3(_set____db54di) {
    this.accounts = _set____db54di;
  }
  n37() {
    return this.accounts;
  }
  vc3(_set____db54di) {
    this.lastStatus = _set____db54di;
  }
  wc3() {
    return this.lastStatus;
  }
  xc3(_set____db54di) {
    this.unread = _set____db54di;
  }
  yc3() {
    return this.unread;
  }
  static tc3(seen0, id, accounts, lastStatus, unread, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().rc3_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.accounts = null;
    else
      $this.accounts = accounts;
    if (0 === (seen0 & 4))
      $this.lastStatus = null;
    else
      $this.lastStatus = lastStatus;
    if (0 === (seen0 & 8))
      $this.unread = null;
    else
      $this.unread = unread;
    return $this;
  }
}
class Companion_11 {}
class $serializer_10 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Emoji', this, 5);
    tmp0_serialDesc.m1a('shortcode', true);
    tmp0_serialDesc.m1a('static_url', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('visible_in_picker', true);
    tmp0_serialDesc.m1a('category', true);
    this.zc3_1 = tmp0_serialDesc;
  }
  ac4(encoder, value) {
    var tmp0_desc = this.zc3_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.shortcode == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.shortcode);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.staticUrl == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.staticUrl);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.visibleInPicker == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.visibleInPicker);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.category == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.category);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ac4(encoder, value instanceof Emoji ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zc3_1;
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
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return Emoji.bc4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.zc3_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Emoji {
  constructor() {
    this.shortcode = null;
    this.staticUrl = null;
    this.url = null;
    this.visibleInPicker = null;
    this.category = null;
  }
  cc4(_set____db54di) {
    this.shortcode = _set____db54di;
  }
  dc4() {
    return this.shortcode;
  }
  ec4(_set____db54di) {
    this.staticUrl = _set____db54di;
  }
  fc4() {
    return this.staticUrl;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  gc4(_set____db54di) {
    this.visibleInPicker = _set____db54di;
  }
  hc4() {
    return this.visibleInPicker;
  }
  i32(_set____db54di) {
    this.category = _set____db54di;
  }
  l2y() {
    return this.category;
  }
  static bc4(seen0, shortcode, staticUrl, url, visibleInPicker, category, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().zc3_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.shortcode = null;
    else
      $this.shortcode = shortcode;
    if (0 === (seen0 & 2))
      $this.staticUrl = null;
    else
      $this.staticUrl = staticUrl;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 8))
      $this.visibleInPicker = null;
    else
      $this.visibleInPicker = visibleInPicker;
    if (0 === (seen0 & 16))
      $this.category = null;
    else
      $this.category = category;
    return $this;
  }
}
class Companion_12 {}
class $serializer_11 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Error', this, 2);
    tmp0_serialDesc.m1a('error', true);
    tmp0_serialDesc.m1a('error_description', true);
    this.ic4_1 = tmp0_serialDesc;
  }
  jc4(encoder, value) {
    var tmp0_desc = this.ic4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.error == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.error);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.description == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.description);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jc4(encoder, value instanceof Error_0 ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ic4_1;
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
    return Error_0.kc4(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ic4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Error_0 {
  constructor() {
    this.error = null;
    this.description = null;
  }
  lc4(_set____db54di) {
    this.error = _set____db54di;
  }
  b37() {
    return this.error;
  }
  v31(_set____db54di) {
    this.description = _set____db54di;
  }
  f31() {
    return this.description;
  }
  static kc4(seen0, error, description, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().ic4_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.error = null;
    else
      $this.error = error;
    if (0 === (seen0 & 2))
      $this.description = null;
    else
      $this.description = description;
    return $this;
  }
}
class Companion_13 {}
class $serializer_12 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Field', this, 2);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('value', true);
    this.mc4_1 = tmp0_serialDesc;
  }
  nc4(encoder, value) {
    var tmp0_desc = this.mc4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nc4(encoder, value instanceof Field ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mc4_1;
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
    return Field.oc4(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.mc4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Field {
  constructor() {
    this.name = null;
    this.value = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  aa0(_set____db54di) {
    this.value = _set____db54di;
  }
  y2() {
    return this.value;
  }
  static oc4(seen0, name, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().mc4_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.value = null;
    else
      $this.value = value;
    return $this;
  }
}
class Companion_14 {}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.History', this, 3);
    tmp0_serialDesc.m1a('day', true);
    tmp0_serialDesc.m1a('uses', true);
    tmp0_serialDesc.m1a('accounts', true);
    this.pc4_1 = tmp0_serialDesc;
  }
  qc4(encoder, value) {
    var tmp0_desc = this.pc4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.day == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.day);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.uses == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.uses);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.accounts == null)) {
      tmp1_output.m14(tmp0_desc, 2, IntSerializer_getInstance(), value.accounts);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.qc4(encoder, value instanceof History ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.pc4_1;
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
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return History.rc4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.pc4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class History {
  constructor() {
    this.day = null;
    this.uses = null;
    this.accounts = null;
  }
  sc4(_set____db54di) {
    this.day = _set____db54di;
  }
  p59() {
    return this.day;
  }
  tc4(_set____db54di) {
    this.uses = _set____db54di;
  }
  uc4() {
    return this.uses;
  }
  vc4(_set____db54di) {
    this.accounts = _set____db54di;
  }
  n37() {
    return this.accounts;
  }
  static rc4(seen0, day, uses, accounts, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().pc4_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.day = null;
    else
      $this.day = day;
    if (0 === (seen0 & 2))
      $this.uses = null;
    else
      $this.uses = uses;
    if (0 === (seen0 & 4))
      $this.accounts = null;
    else
      $this.accounts = accounts;
    return $this;
  }
}
class Companion_15 {}
class $serializer_14 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Mention', this, 4);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('username', true);
    tmp0_serialDesc.m1a('acct', true);
    this.wc4_1 = tmp0_serialDesc;
  }
  xc4(encoder, value) {
    var tmp0_desc = this.wc4_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.userName == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.userName);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.account == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.account);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xc4(encoder, value instanceof Mention ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wc4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return Mention.yc4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.wc4_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Mention {
  constructor() {
    this.url = null;
    this.id = null;
    this.userName = null;
    this.account = null;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  zc4(_set____db54di) {
    this.userName = _set____db54di;
  }
  pc0() {
    return this.userName;
  }
  ac5(_set____db54di) {
    this.account = _set____db54di;
  }
  j2q() {
    return this.account;
  }
  static yc4(seen0, url, id, userName, account, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().wc4_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 4))
      $this.userName = null;
    else
      $this.userName = userName;
    if (0 === (seen0 & 8))
      $this.account = null;
    else
      $this.account = account;
    return $this;
  }
}
class Companion_16 {}
class $serializer_15 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Notification', this, 5);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('type', true);
    tmp0_serialDesc.m1a('created_at', true);
    tmp0_serialDesc.m1a('account', true);
    tmp0_serialDesc.m1a('status', true);
    this.bc5_1 = tmp0_serialDesc;
  }
  cc5(encoder, value) {
    var tmp0_desc = this.bc5_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.createdAt == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.createdAt);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.account == null)) {
      tmp1_output.m14(tmp0_desc, 3, $serializer_getInstance_0(), value.account);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.status == null)) {
      tmp1_output.m14(tmp0_desc, 4, $serializer_getInstance_24(), value.status);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.cc5(encoder, value instanceof Notification ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.bc5_1;
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
      tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_24(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.i13(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.i13(tmp0_desc, 4, $serializer_getInstance_24(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return Notification.dc5(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.bc5_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance_24())];
  }
}
class Notification {
  constructor() {
    this.id = null;
    this.type = null;
    this.createdAt = null;
    this.account = null;
    this.status = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  e33(_set____db54di) {
    this.type = _set____db54di;
  }
  x32() {
    return this.type;
  }
  d60(_set____db54di) {
    this.createdAt = _set____db54di;
  }
  e60() {
    return this.createdAt;
  }
  ec5(_set____db54di) {
    this.account = _set____db54di;
  }
  j2q() {
    return this.account;
  }
  fc5(_set____db54di) {
    this.status = _set____db54di;
  }
  m4k() {
    return this.status;
  }
  static dc5(seen0, id, type, createdAt, account, status, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().bc5_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.createdAt = null;
    else
      $this.createdAt = createdAt;
    if (0 === (seen0 & 8))
      $this.account = null;
    else
      $this.account = account;
    if (0 === (seen0 & 16))
      $this.status = null;
    else
      $this.status = status;
    return $this;
  }
}
class Companion_17 {
  constructor() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Poll$Companion$$childSerializers$_anonymous__u2thud);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Poll$Companion$$childSerializers$_anonymous__u2thud_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gc5_1 = [null, null, null, null, null, tmp_1, null, null, tmp_3, lazy(tmp_4, Poll$Companion$$childSerializers$_anonymous__u2thud_1)];
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Poll', this, 10);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('expires_at', true);
    tmp0_serialDesc.m1a('expired', true);
    tmp0_serialDesc.m1a('multiple', true);
    tmp0_serialDesc.m1a('voted', true);
    tmp0_serialDesc.m1a('own_votes', true);
    tmp0_serialDesc.m1a('votes_count', true);
    tmp0_serialDesc.m1a('voters_count', true);
    tmp0_serialDesc.m1a('options', true);
    tmp0_serialDesc.m1a('emojis', true);
    this.hc5_1 = tmp0_serialDesc;
  }
  ic5(encoder, value) {
    var tmp0_desc = this.hc5_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().gc5_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.expiresAt == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.expiresAt);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.isExpired === false)) {
      tmp1_output.b14(tmp0_desc, 2, value.isExpired);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.isMultiple === false)) {
      tmp1_output.b14(tmp0_desc, 3, value.isMultiple);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.isVoted === false)) {
      tmp1_output.b14(tmp0_desc, 4, value.isVoted);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.ownVotes == null)) {
      tmp1_output.m14(tmp0_desc, 5, tmp2_cached[5].y2(), value.ownVotes);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.votesCount == null)) {
      tmp1_output.m14(tmp0_desc, 6, IntSerializer_getInstance(), value.votesCount);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.votersCount == null)) {
      tmp1_output.m14(tmp0_desc, 7, IntSerializer_getInstance(), value.votersCount);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.options == null)) {
      tmp1_output.m14(tmp0_desc, 8, tmp2_cached[8].y2(), value.options);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.emojis == null)) {
      tmp1_output.m14(tmp0_desc, 9, tmp2_cached[9].y2(), value.emojis);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ic5(encoder, value instanceof Poll ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hc5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.u12(tmp0_desc);
    var tmp15_cached = Companion_getInstance_19().gc5_1;
    if (tmp14_input.j13()) {
      tmp4_local0 = tmp14_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.w12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.w12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.w12(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, tmp15_cached[5].y2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.i13(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, tmp15_cached[8].y2(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, tmp15_cached[9].y2(), tmp13_local9);
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
            tmp6_local2 = tmp14_input.w12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.w12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.w12(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.i13(tmp0_desc, 5, tmp15_cached[5].y2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.i13(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.i13(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.i13(tmp0_desc, 8, tmp15_cached[8].y2(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.i13(tmp0_desc, 9, tmp15_cached[9].y2(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp14_input.v12(tmp0_desc);
    return Poll.jc5(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  cy() {
    return this.hc5_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_19().gc5_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(tmp0_cached[5].y2()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[8].y2()), get_nullable(tmp0_cached[9].y2())];
  }
}
class Poll {
  constructor() {
    Companion_getInstance_19();
    this.id = null;
    this.expiresAt = null;
    this.isExpired = false;
    this.isMultiple = false;
    this.isVoted = false;
    this.ownVotes = null;
    this.votesCount = null;
    this.votersCount = null;
    this.options = null;
    this.emojis = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  uaa(_set____db54di) {
    this.expiresAt = _set____db54di;
  }
  a8y() {
    return this.expiresAt;
  }
  c34(_set____db54di) {
    this.isExpired = _set____db54di;
  }
  d34() {
    return this.isExpired;
  }
  e34(_set____db54di) {
    this.isMultiple = _set____db54di;
  }
  f34() {
    return this.isMultiple;
  }
  k34(_set____db54di) {
    this.isVoted = _set____db54di;
  }
  l34() {
    return this.isVoted;
  }
  kc5(_set____db54di) {
    this.ownVotes = _set____db54di;
  }
  lc5() {
    return this.ownVotes;
  }
  g34(_set____db54di) {
    this.votesCount = _set____db54di;
  }
  h34() {
    return this.votesCount;
  }
  i34(_set____db54di) {
    this.votersCount = _set____db54di;
  }
  j34() {
    return this.votersCount;
  }
  mc5(_set____db54di) {
    this.options = _set____db54di;
  }
  n34() {
    return this.options;
  }
  nc5(_set____db54di) {
    this.emojis = _set____db54di;
  }
  f9t() {
    return this.emojis;
  }
  static jc5(seen0, id, expiresAt, isExpired, isMultiple, isVoted, ownVotes, votesCount, votersCount, options, emojis, serializationConstructorMarker) {
    Companion_getInstance_19();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().hc5_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.expiresAt = null;
    else
      $this.expiresAt = expiresAt;
    if (0 === (seen0 & 4))
      $this.isExpired = false;
    else
      $this.isExpired = isExpired;
    if (0 === (seen0 & 8))
      $this.isMultiple = false;
    else
      $this.isMultiple = isMultiple;
    if (0 === (seen0 & 16))
      $this.isVoted = false;
    else
      $this.isVoted = isVoted;
    if (0 === (seen0 & 32))
      $this.ownVotes = null;
    else
      $this.ownVotes = ownVotes;
    if (0 === (seen0 & 64))
      $this.votesCount = null;
    else
      $this.votesCount = votesCount;
    if (0 === (seen0 & 128))
      $this.votersCount = null;
    else
      $this.votersCount = votersCount;
    if (0 === (seen0 & 256))
      $this.options = null;
    else
      $this.options = options;
    if (0 === (seen0 & 512))
      $this.emojis = null;
    else
      $this.emojis = emojis;
    return $this;
  }
}
class Companion_18 {}
class $serializer_17 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.PollOption', this, 2);
    tmp0_serialDesc.m1a('title', true);
    tmp0_serialDesc.m1a('votes_count', true);
    this.oc5_1 = tmp0_serialDesc;
  }
  pc5(encoder, value) {
    var tmp0_desc = this.oc5_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.votesCount == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.votesCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.pc5(encoder, value instanceof PollOption ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.oc5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return PollOption.qc5(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.oc5_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class PollOption {
  constructor() {
    this.title = null;
    this.votesCount = null;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  g34(_set____db54di) {
    this.votesCount = _set____db54di;
  }
  h34() {
    return this.votesCount;
  }
  static qc5(seen0, title, votesCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().oc5_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 2))
      $this.votesCount = null;
    else
      $this.votesCount = votesCount;
    return $this;
  }
}
class Companion_19 {}
class $serializer_18 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Relationship', this, 6);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('following', true);
    tmp0_serialDesc.m1a('followedBy', true);
    tmp0_serialDesc.m1a('blocking', true);
    tmp0_serialDesc.m1a('muting', true);
    tmp0_serialDesc.m1a('requested', true);
    this.rc5_1 = tmp0_serialDesc;
  }
  sc5(encoder, value) {
    var tmp0_desc = this.rc5_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.isFollowing === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.isFollowing);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.isFollowedBy === false)) {
      tmp1_output.b14(tmp0_desc, 2, value.isFollowedBy);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.isBlocking === false)) {
      tmp1_output.b14(tmp0_desc, 3, value.isBlocking);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.isMuting === false)) {
      tmp1_output.b14(tmp0_desc, 4, value.isMuting);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.isRequested === false)) {
      tmp1_output.b14(tmp0_desc, 5, value.isRequested);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.sc5(encoder, value instanceof Relationship ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rc5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.u12(tmp0_desc);
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.w12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.w12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.w12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.w12(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.w12(tmp0_desc, 5);
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
            tmp5_local1 = tmp10_input.w12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.w12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.w12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.w12(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.w12(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return Relationship.tc5(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.rc5_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class Relationship {
  constructor() {
    this.id = null;
    this.isFollowing = false;
    this.isFollowedBy = false;
    this.isBlocking = false;
    this.isMuting = false;
    this.isRequested = false;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  d9y(_set____db54di) {
    this.isFollowing = _set____db54di;
  }
  e9y() {
    return this.isFollowing;
  }
  uc5(_set____db54di) {
    this.isFollowedBy = _set____db54di;
  }
  vc5() {
    return this.isFollowedBy;
  }
  lab(_set____db54di) {
    this.isBlocking = _set____db54di;
  }
  mab() {
    return this.isBlocking;
  }
  wc5(_set____db54di) {
    this.isMuting = _set____db54di;
  }
  xc5() {
    return this.isMuting;
  }
  yc5(_set____db54di) {
    this.isRequested = _set____db54di;
  }
  zc5() {
    return this.isRequested;
  }
  static tc5(seen0, id, isFollowing, isFollowedBy, isBlocking, isMuting, isRequested, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().rc5_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.isFollowing = false;
    else
      $this.isFollowing = isFollowing;
    if (0 === (seen0 & 4))
      $this.isFollowedBy = false;
    else
      $this.isFollowedBy = isFollowedBy;
    if (0 === (seen0 & 8))
      $this.isBlocking = false;
    else
      $this.isBlocking = isBlocking;
    if (0 === (seen0 & 16))
      $this.isMuting = false;
    else
      $this.isMuting = isMuting;
    if (0 === (seen0 & 32))
      $this.isRequested = false;
    else
      $this.isRequested = isRequested;
    return $this;
  }
}
class Companion_20 {}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Report', this, 2);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('actionTaken', true);
    this.ac6_1 = tmp0_serialDesc;
  }
  bc6(encoder, value) {
    var tmp0_desc = this.ac6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.actionTaken == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.actionTaken);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.bc6(encoder, value instanceof Report ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ac6_1;
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
    return Report.cc6(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ac6_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Report {
  constructor() {
    this.id = null;
    this.actionTaken = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  dc6(_set____db54di) {
    this.actionTaken = _set____db54di;
  }
  ec6() {
    return this.actionTaken;
  }
  static cc6(seen0, id, actionTaken, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().ac6_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.actionTaken = null;
    else
      $this.actionTaken = actionTaken;
    return $this;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Results$Companion$$childSerializers$_anonymous__hpv34c);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Results$Companion$$childSerializers$_anonymous__hpv34c_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.fc6_1 = [tmp_1, tmp_3, lazy(tmp_4, Results$Companion$$childSerializers$_anonymous__hpv34c_1)];
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Results', this, 3);
    tmp0_serialDesc.m1a('accounts', true);
    tmp0_serialDesc.m1a('statuses', true);
    tmp0_serialDesc.m1a('hashtags', true);
    this.gc6_1 = tmp0_serialDesc;
  }
  hc6(encoder, value) {
    var tmp0_desc = this.gc6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().fc6_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.accounts == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.accounts);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.statuses == null)) {
      tmp1_output.m14(tmp0_desc, 1, tmp2_cached[1].y2(), value.statuses);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.hashtags == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.hashtags);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hc6(encoder, value instanceof Results ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.gc6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_23().fc6_1;
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
    return Results.ic6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.gc6_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_23().fc6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2()), get_nullable(tmp0_cached[1].y2()), get_nullable(tmp0_cached[2].y2())];
  }
}
class Results {
  constructor() {
    Companion_getInstance_23();
    this.accounts = null;
    this.statuses = null;
    this.hashtags = null;
  }
  uc3(_set____db54di) {
    this.accounts = _set____db54di;
  }
  n37() {
    return this.accounts;
  }
  jc6(_set____db54di) {
    this.statuses = _set____db54di;
  }
  kc6() {
    return this.statuses;
  }
  lc6(_set____db54di) {
    this.hashtags = _set____db54di;
  }
  mc6() {
    return this.hashtags;
  }
  static ic6(seen0, accounts, statuses, hashtags, serializationConstructorMarker) {
    Companion_getInstance_23();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().gc6_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.accounts = null;
    else
      $this.accounts = accounts;
    if (0 === (seen0 & 2))
      $this.statuses = null;
    else
      $this.statuses = statuses;
    if (0 === (seen0 & 4))
      $this.hashtags = null;
    else
      $this.hashtags = hashtags;
    return $this;
  }
}
class Companion_22 {}
class $serializer_21 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Role', this, 5);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('name', false);
    tmp0_serialDesc.m1a('color', false);
    tmp0_serialDesc.m1a('permissions', true);
    tmp0_serialDesc.m1a('highlighted', true);
    this.nc6_1 = tmp0_serialDesc;
  }
  oc6(encoder, value) {
    var tmp0_desc = this.nc6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id === -1)) {
      tmp1_output.e14(tmp0_desc, 0, value.id);
    }
    tmp1_output.j14(tmp0_desc, 1, value.name);
    tmp1_output.j14(tmp0_desc, 2, value.color);
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.permissions === -1)) {
      tmp1_output.e14(tmp0_desc, 3, value.permissions);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.isHighlighted === false)) {
      tmp1_output.b14(tmp0_desc, 4, value.isHighlighted);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.oc6(encoder, value instanceof Role ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nc6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = false;
    var tmp9_input = decoder.u12(tmp0_desc);
    if (tmp9_input.j13()) {
      tmp4_local0 = tmp9_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.z12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.w12(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.z12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.w12(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp9_input.v12(tmp0_desc);
    return Role.rc6(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  cy() {
    return this.nc6_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class Role {
  constructor() {
    this.id = -1;
    this.permissions = -1;
    this.isHighlighted = false;
  }
  sc6(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  c31(_set____db54di) {
    this.pc6_1 = _set____db54di;
  }
  d1() {
    var tmp = this.pc6_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  }
  v9x(_set____db54di) {
    this.qc6_1 = _set____db54di;
  }
  w9x() {
    var tmp = this.qc6_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('color');
    }
  }
  tc6(_set____db54di) {
    this.permissions = _set____db54di;
  }
  uc6() {
    return this.permissions;
  }
  vc6(_set____db54di) {
    this.isHighlighted = _set____db54di;
  }
  wc6() {
    return this.isHighlighted;
  }
  static rc6(seen0, id, name, color, permissions, isHighlighted, serializationConstructorMarker) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_21().nc6_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = -1;
    else
      $this.id = id;
    $this.pc6_1 = name;
    $this.qc6_1 = color;
    if (0 === (seen0 & 8))
      $this.permissions = -1;
    else
      $this.permissions = permissions;
    if (0 === (seen0 & 16))
      $this.isHighlighted = false;
    else
      $this.isHighlighted = isHighlighted;
    return $this;
  }
  get name() {
    return this.d1();
  }
  set name(value) {
    this.c31(value);
  }
  get color() {
    return this.w9x();
  }
  set color(value) {
    this.v9x(value);
  }
}
class Companion_23 {
  constructor() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xc6_1 = [null, null, null, lazy(tmp_0, ScheduledStatus$Companion$$childSerializers$_anonymous__uqmmc5)];
  }
}
class $serializer_22 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.ScheduledStatus', this, 4);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('scheduled_at', false);
    tmp0_serialDesc.m1a('params', true);
    tmp0_serialDesc.m1a('media_attachments', true);
    this.yc6_1 = tmp0_serialDesc;
  }
  zc6(encoder, value) {
    var tmp0_desc = this.yc6_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().xc6_1;
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.scheduledAt);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.params == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_23(), value.params);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.mediaAttachments == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.mediaAttachments);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.zc6(encoder, value instanceof ScheduledStatus ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.yc6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_25().xc6_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, $serializer_getInstance_23(), tmp6_local2);
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
            tmp5_local1 = tmp8_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, $serializer_getInstance_23(), tmp6_local2);
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
    return ScheduledStatus.cc7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.yc6_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_25().xc6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_23()), get_nullable(tmp0_cached[3].y2())];
  }
}
class ScheduledStatus {
  constructor() {
    Companion_getInstance_25();
    this.params = null;
    this.mediaAttachments = null;
  }
  e7y(_set____db54di) {
    this.ac7_1 = _set____db54di;
  }
  j37() {
    var tmp = this.ac7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  dc7(_set____db54di) {
    this.bc7_1 = _set____db54di;
  }
  qby() {
    var tmp = this.bc7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('scheduledAt');
    }
  }
  ec7(_set____db54di) {
    this.params = _set____db54di;
  }
  d2t() {
    return this.params;
  }
  fc7(_set____db54di) {
    this.mediaAttachments = _set____db54di;
  }
  gc7() {
    return this.mediaAttachments;
  }
  static cc7(seen0, id, scheduledAt, params, mediaAttachments, serializationConstructorMarker) {
    Companion_getInstance_25();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_22().yc6_1);
    }
    var $this = createThis(this);
    $this.ac7_1 = id;
    $this.bc7_1 = scheduledAt;
    if (0 === (seen0 & 4))
      $this.params = null;
    else
      $this.params = params;
    if (0 === (seen0 & 8))
      $this.mediaAttachments = null;
    else
      $this.mediaAttachments = mediaAttachments;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get scheduledAt() {
    return this.qby();
  }
  set scheduledAt(value) {
    this.dc7(value);
  }
}
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.hc7_1 = [null, null, lazy(tmp_0, ScheduledStatusParams$Companion$$childSerializers$_anonymous__yi1ipx), null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_23 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.ScheduledStatusParams', this, 12);
    tmp0_serialDesc.m1a('text', true);
    tmp0_serialDesc.m1a('poll', true);
    tmp0_serialDesc.m1a('media_ids', true);
    tmp0_serialDesc.m1a('sensitive', true);
    tmp0_serialDesc.m1a('spoiler_text', true);
    tmp0_serialDesc.m1a('visibility', true);
    tmp0_serialDesc.m1a('in_reply_to_id', true);
    tmp0_serialDesc.m1a('language', true);
    tmp0_serialDesc.m1a('application_id', true);
    tmp0_serialDesc.m1a('scheduled_at', true);
    tmp0_serialDesc.m1a('idempotency', true);
    tmp0_serialDesc.m1a('with_rate_limit', true);
    this.ic7_1 = tmp0_serialDesc;
  }
  jc7(encoder, value) {
    var tmp0_desc = this.ic7_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().hc7_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.text == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.poll == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_16(), value.poll);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.mediaIds == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.mediaIds);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.sensitive == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.sensitive);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.spoilerText == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.spoilerText);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.visibility == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.visibility);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.inReplyToId == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.inReplyToId);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.language == null)) {
      tmp1_output.m14(tmp0_desc, 7, StringSerializer_getInstance(), value.language);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.applicationId == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.applicationId);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.scheduledAt == null)) {
      tmp1_output.m14(tmp0_desc, 9, StringSerializer_getInstance(), value.scheduledAt);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.idempotency == null)) {
      tmp1_output.m14(tmp0_desc, 10, StringSerializer_getInstance(), value.idempotency);
    }
    if (tmp1_output.q14(tmp0_desc, 11) ? true : !(value.withRateLimit == null)) {
      tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.withRateLimit);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jc7(encoder, value instanceof ScheduledStatusParams ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ic7_1;
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
    var tmp16_input = decoder.u12(tmp0_desc);
    var tmp17_cached = Companion_getInstance_26().hc7_1;
    if (tmp16_input.j13()) {
      tmp4_local0 = tmp16_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.i13(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.i13(tmp0_desc, 2, tmp17_cached[2].y2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.i13(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.i13(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.i13(tmp0_desc, 2, tmp17_cached[2].y2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.i13(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.i13(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.i13(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.i13(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp16_input.v12(tmp0_desc);
    return ScheduledStatusParams.kc7(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  cy() {
    return this.ic7_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_26().hc7_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_16()), get_nullable(tmp0_cached[2].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class ScheduledStatusParams {
  constructor() {
    Companion_getInstance_26();
    this.text = null;
    this.poll = null;
    this.mediaIds = null;
    this.sensitive = null;
    this.spoilerText = null;
    this.visibility = null;
    this.inReplyToId = null;
    this.language = null;
    this.applicationId = null;
    this.scheduledAt = null;
    this.idempotency = null;
    this.withRateLimit = null;
  }
  t39(_set____db54di) {
    this.text = _set____db54di;
  }
  h2z() {
    return this.text;
  }
  lc7(_set____db54di) {
    this.poll = _set____db54di;
  }
  h3a() {
    return this.poll;
  }
  bbz(_set____db54di) {
    this.mediaIds = _set____db54di;
  }
  cbz() {
    return this.mediaIds;
  }
  o95(_set____db54di) {
    this.sensitive = _set____db54di;
  }
  p95() {
    return this.sensitive;
  }
  yby(_set____db54di) {
    this.spoilerText = _set____db54di;
  }
  cbn() {
    return this.spoilerText;
  }
  a3a(_set____db54di) {
    this.visibility = _set____db54di;
  }
  b3a() {
    return this.visibility;
  }
  wby(_set____db54di) {
    this.inReplyToId = _set____db54di;
  }
  xby() {
    return this.inReplyToId;
  }
  yc1(_set____db54di) {
    this.language = _set____db54di;
  }
  zc1() {
    return this.language;
  }
  mc7(_set____db54di) {
    this.applicationId = _set____db54di;
  }
  nc7() {
    return this.applicationId;
  }
  pby(_set____db54di) {
    this.scheduledAt = _set____db54di;
  }
  qby() {
    return this.scheduledAt;
  }
  oc7(_set____db54di) {
    this.idempotency = _set____db54di;
  }
  pc7() {
    return this.idempotency;
  }
  qc7(_set____db54di) {
    this.withRateLimit = _set____db54di;
  }
  rc7() {
    return this.withRateLimit;
  }
  static kc7(seen0, text, poll, mediaIds, sensitive, spoilerText, visibility, inReplyToId, language, applicationId, scheduledAt, idempotency, withRateLimit, serializationConstructorMarker) {
    Companion_getInstance_26();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().ic7_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.text = null;
    else
      $this.text = text;
    if (0 === (seen0 & 2))
      $this.poll = null;
    else
      $this.poll = poll;
    if (0 === (seen0 & 4))
      $this.mediaIds = null;
    else
      $this.mediaIds = mediaIds;
    if (0 === (seen0 & 8))
      $this.sensitive = null;
    else
      $this.sensitive = sensitive;
    if (0 === (seen0 & 16))
      $this.spoilerText = null;
    else
      $this.spoilerText = spoilerText;
    if (0 === (seen0 & 32))
      $this.visibility = null;
    else
      $this.visibility = visibility;
    if (0 === (seen0 & 64))
      $this.inReplyToId = null;
    else
      $this.inReplyToId = inReplyToId;
    if (0 === (seen0 & 128))
      $this.language = null;
    else
      $this.language = language;
    if (0 === (seen0 & 256))
      $this.applicationId = null;
    else
      $this.applicationId = applicationId;
    if (0 === (seen0 & 512))
      $this.scheduledAt = null;
    else
      $this.scheduledAt = scheduledAt;
    if (0 === (seen0 & 1024))
      $this.idempotency = null;
    else
      $this.idempotency = idempotency;
    if (0 === (seen0 & 2048))
      $this.withRateLimit = null;
    else
      $this.withRateLimit = withRateLimit;
    return $this;
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Status$Companion$$childSerializers$_anonymous__aiti2w);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Status$Companion$$childSerializers$_anonymous__aiti2w_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, Status$Companion$$childSerializers$_anonymous__aiti2w_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, Status$Companion$$childSerializers$_anonymous__aiti2w_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.sc7_1 = [null, null, null, null, null, null, null, null, tmp_1, null, tmp_3, tmp_5, tmp_7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_8, Status$Companion$$childSerializers$_anonymous__aiti2w_3), null];
  }
}
class $serializer_24 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Status', this, 32);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('uri', false);
    tmp0_serialDesc.m1a('created_at', false);
    tmp0_serialDesc.m1a('account', false);
    tmp0_serialDesc.m1a('content', false);
    tmp0_serialDesc.m1a('visibility', false);
    tmp0_serialDesc.m1a('sensitive', true);
    tmp0_serialDesc.m1a('spoiler_text', false);
    tmp0_serialDesc.m1a('media_attachments', true);
    tmp0_serialDesc.m1a('application', true);
    tmp0_serialDesc.m1a('mentions', true);
    tmp0_serialDesc.m1a('tags', true);
    tmp0_serialDesc.m1a('emojis', true);
    tmp0_serialDesc.m1a('reblogs_count', true);
    tmp0_serialDesc.m1a('favourites_count', true);
    tmp0_serialDesc.m1a('replies_count', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('in_reply_to_id', true);
    tmp0_serialDesc.m1a('in_reply_to_account_id', true);
    tmp0_serialDesc.m1a('reblog', true);
    tmp0_serialDesc.m1a('poll', true);
    tmp0_serialDesc.m1a('card', true);
    tmp0_serialDesc.m1a('language', true);
    tmp0_serialDesc.m1a('text', true);
    tmp0_serialDesc.m1a('edited_at', true);
    tmp0_serialDesc.m1a('reblogged', true);
    tmp0_serialDesc.m1a('favourited', true);
    tmp0_serialDesc.m1a('muted', true);
    tmp0_serialDesc.m1a('bookmarked', true);
    tmp0_serialDesc.m1a('pinned', true);
    tmp0_serialDesc.m1a('filtered', true);
    tmp0_serialDesc.m1a('pleroma', true);
    this.tc7_1 = tmp0_serialDesc;
  }
  uc7(encoder, value) {
    var tmp0_desc = this.tc7_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().sc7_1;
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.uri);
    tmp1_output.j14(tmp0_desc, 2, value.createdAt);
    tmp1_output.l14(tmp0_desc, 3, $serializer_getInstance_0(), value.account);
    tmp1_output.j14(tmp0_desc, 4, value.content);
    tmp1_output.j14(tmp0_desc, 5, value.visibility);
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.isSensitive === false)) {
      tmp1_output.b14(tmp0_desc, 6, value.isSensitive);
    }
    tmp1_output.j14(tmp0_desc, 7, value.spoilerText);
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 8)) {
      tmp = true;
    } else {
      var tmp_0 = value.mediaAttachments;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals_0(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 8, tmp2_cached[8].y2(), value.mediaAttachments);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.application == null)) {
      tmp1_output.m14(tmp0_desc, 9, $serializer_getInstance_4(), value.application);
    }
    var tmp_1;
    if (tmp1_output.q14(tmp0_desc, 10)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.mentions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = [];
      tmp_1 = !equals_0(tmp_2, tmp$ret$3);
    }
    if (tmp_1) {
      tmp1_output.l14(tmp0_desc, 10, tmp2_cached[10].y2(), value.mentions);
    }
    var tmp_3;
    if (tmp1_output.q14(tmp0_desc, 11)) {
      tmp_3 = true;
    } else {
      var tmp_4 = value.tags;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [];
      tmp_3 = !equals_0(tmp_4, tmp$ret$6);
    }
    if (tmp_3) {
      tmp1_output.l14(tmp0_desc, 11, tmp2_cached[11].y2(), value.tags);
    }
    var tmp_5;
    if (tmp1_output.q14(tmp0_desc, 12)) {
      tmp_5 = true;
    } else {
      var tmp_6 = value.emojis;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$9 = [];
      tmp_5 = !equals_0(tmp_6, tmp$ret$9);
    }
    if (tmp_5) {
      tmp1_output.l14(tmp0_desc, 12, tmp2_cached[12].y2(), value.emojis);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.reblogsCount === 0)) {
      tmp1_output.e14(tmp0_desc, 13, value.reblogsCount);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.favouritesCount === 0)) {
      tmp1_output.e14(tmp0_desc, 14, value.favouritesCount);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.repliesCount === 0)) {
      tmp1_output.e14(tmp0_desc, 15, value.repliesCount);
    }
    if (tmp1_output.q14(tmp0_desc, 16) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 16, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 17) ? true : !(value.inReplyToId == null)) {
      tmp1_output.m14(tmp0_desc, 17, StringSerializer_getInstance(), value.inReplyToId);
    }
    if (tmp1_output.q14(tmp0_desc, 18) ? true : !(value.inReplyToAccountId == null)) {
      tmp1_output.m14(tmp0_desc, 18, StringSerializer_getInstance(), value.inReplyToAccountId);
    }
    if (tmp1_output.q14(tmp0_desc, 19) ? true : !(value.reblog == null)) {
      tmp1_output.m14(tmp0_desc, 19, $serializer_getInstance_24(), value.reblog);
    }
    if (tmp1_output.q14(tmp0_desc, 20) ? true : !(value.poll == null)) {
      tmp1_output.m14(tmp0_desc, 20, $serializer_getInstance_16(), value.poll);
    }
    if (tmp1_output.q14(tmp0_desc, 21) ? true : !(value.card == null)) {
      tmp1_output.m14(tmp0_desc, 21, $serializer_getInstance_6(), value.card);
    }
    if (tmp1_output.q14(tmp0_desc, 22) ? true : !(value.language == null)) {
      tmp1_output.m14(tmp0_desc, 22, StringSerializer_getInstance(), value.language);
    }
    if (tmp1_output.q14(tmp0_desc, 23) ? true : !(value.text == null)) {
      tmp1_output.m14(tmp0_desc, 23, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.q14(tmp0_desc, 24) ? true : !(value.editedAt == null)) {
      tmp1_output.m14(tmp0_desc, 24, StringSerializer_getInstance(), value.editedAt);
    }
    if (tmp1_output.q14(tmp0_desc, 25) ? true : !(value.isReblogged === false)) {
      tmp1_output.b14(tmp0_desc, 25, value.isReblogged);
    }
    if (tmp1_output.q14(tmp0_desc, 26) ? true : !(value.isFavourited === false)) {
      tmp1_output.b14(tmp0_desc, 26, value.isFavourited);
    }
    if (tmp1_output.q14(tmp0_desc, 27) ? true : !(value.isMuted === false)) {
      tmp1_output.b14(tmp0_desc, 27, value.isMuted);
    }
    if (tmp1_output.q14(tmp0_desc, 28) ? true : !(value.isBookmarked === false)) {
      tmp1_output.b14(tmp0_desc, 28, value.isBookmarked);
    }
    if (tmp1_output.q14(tmp0_desc, 29) ? true : !(value.isPinned === false)) {
      tmp1_output.b14(tmp0_desc, 29, value.isPinned);
    }
    var tmp_7;
    if (tmp1_output.q14(tmp0_desc, 30)) {
      tmp_7 = true;
    } else {
      var tmp_8 = value.filtered;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$12 = [];
      tmp_7 = !equals_0(tmp_8, tmp$ret$12);
    }
    if (tmp_7) {
      tmp1_output.l14(tmp0_desc, 30, tmp2_cached[30].y2(), value.filtered);
    }
    if (tmp1_output.q14(tmp0_desc, 31) ? true : !(value.pleroma == null)) {
      tmp1_output.m14(tmp0_desc, 31, $serializer_getInstance_68(), value.pleroma);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uc7(encoder, value instanceof Status ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tc7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = false;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = 0;
    var tmp19_local14 = 0;
    var tmp20_local15 = 0;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = false;
    var tmp31_local26 = false;
    var tmp32_local27 = false;
    var tmp33_local28 = false;
    var tmp34_local29 = false;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_input = decoder.u12(tmp0_desc);
    var tmp38_cached = Companion_getInstance_27().sc7_1;
    if (tmp37_input.j13()) {
      tmp5_local0 = tmp37_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp37_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp37_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp37_input.g13(tmp0_desc, 3, $serializer_getInstance_0(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp37_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp37_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp37_input.w12(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp37_input.e13(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp37_input.g13(tmp0_desc, 8, tmp38_cached[8].y2(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp37_input.i13(tmp0_desc, 9, $serializer_getInstance_4(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp37_input.g13(tmp0_desc, 10, tmp38_cached[10].y2(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp37_input.g13(tmp0_desc, 11, tmp38_cached[11].y2(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp37_input.g13(tmp0_desc, 12, tmp38_cached[12].y2(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp37_input.z12(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp37_input.z12(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp37_input.z12(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp37_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp37_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp37_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp37_input.i13(tmp0_desc, 19, $serializer_getInstance_24(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp37_input.i13(tmp0_desc, 20, $serializer_getInstance_16(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp37_input.i13(tmp0_desc, 21, $serializer_getInstance_6(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp37_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp37_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp37_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp37_input.w12(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp37_input.w12(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp37_input.w12(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp37_input.w12(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp37_input.w12(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp37_input.g13(tmp0_desc, 30, tmp38_cached[30].y2(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp37_input.i13(tmp0_desc, 31, $serializer_getInstance_68(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp37_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp37_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp37_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp37_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp37_input.g13(tmp0_desc, 3, $serializer_getInstance_0(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp37_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp37_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp37_input.w12(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp37_input.e13(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp37_input.g13(tmp0_desc, 8, tmp38_cached[8].y2(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp37_input.i13(tmp0_desc, 9, $serializer_getInstance_4(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp37_input.g13(tmp0_desc, 10, tmp38_cached[10].y2(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp37_input.g13(tmp0_desc, 11, tmp38_cached[11].y2(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp37_input.g13(tmp0_desc, 12, tmp38_cached[12].y2(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp37_input.z12(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp37_input.z12(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp37_input.z12(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp37_input.i13(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp37_input.i13(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp37_input.i13(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp37_input.i13(tmp0_desc, 19, $serializer_getInstance_24(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp37_input.i13(tmp0_desc, 20, $serializer_getInstance_16(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp37_input.i13(tmp0_desc, 21, $serializer_getInstance_6(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp37_input.i13(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp37_input.i13(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp37_input.i13(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp37_input.w12(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp37_input.w12(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp37_input.w12(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp37_input.w12(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp37_input.w12(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp37_input.g13(tmp0_desc, 30, tmp38_cached[30].y2(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp37_input.i13(tmp0_desc, 31, $serializer_getInstance_68(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp37_input.v12(tmp0_desc);
    return Status.cc8(tmp3_bitMask0, 0, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, null);
  }
  cy() {
    return this.tc7_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_27().sc7_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_0(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[8].y2(), get_nullable($serializer_getInstance_4()), tmp0_cached[10].y2(), tmp0_cached[11].y2(), tmp0_cached[12].y2(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_24()), get_nullable($serializer_getInstance_16()), get_nullable($serializer_getInstance_6()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[30].y2(), get_nullable($serializer_getInstance_68())];
  }
}
class Status {
  constructor() {
    Companion_getInstance_27();
    this.isSensitive = false;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mediaAttachments = [];
    this.application = null;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.mentions = [];
    var tmp_1 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.tags = [];
    var tmp_2 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_2.emojis = [];
    this.reblogsCount = 0;
    this.favouritesCount = 0;
    this.repliesCount = 0;
    this.url = null;
    this.inReplyToId = null;
    this.inReplyToAccountId = null;
    this.reblog = null;
    this.poll = null;
    this.card = null;
    this.language = null;
    this.text = null;
    this.editedAt = null;
    this.isReblogged = false;
    this.isFavourited = false;
    this.isMuted = false;
    this.isBookmarked = false;
    this.isPinned = false;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.filtered = [];
    this.pleroma = null;
  }
  e7y(_set____db54di) {
    this.vc7_1 = _set____db54di;
  }
  j37() {
    var tmp = this.vc7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  p62(_set____db54di) {
    this.wc7_1 = _set____db54di;
  }
  q62() {
    var tmp = this.wc7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('uri');
    }
  }
  p7o(_set____db54di) {
    this.xc7_1 = _set____db54di;
  }
  e60() {
    var tmp = this.xc7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('createdAt');
    }
  }
  dc8(_set____db54di) {
    this.yc7_1 = _set____db54di;
  }
  j2q() {
    var tmp = this.yc7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('account');
    }
  }
  ec8(_set____db54di) {
    this.zc7_1 = _set____db54di;
  }
  x1n() {
    var tmp = this.zc7_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('content');
    }
  }
  t77(_set____db54di) {
    this.ac8_1 = _set____db54di;
  }
  b3a() {
    var tmp = this.ac8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('visibility');
    }
  }
  c3a(_set____db54di) {
    this.isSensitive = _set____db54di;
  }
  d3a() {
    return this.isSensitive;
  }
  fc8(_set____db54di) {
    this.bc8_1 = _set____db54di;
  }
  cbn() {
    var tmp = this.bc8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('spoilerText');
    }
  }
  gc8(_set____db54di) {
    this.mediaAttachments = _set____db54di;
  }
  gc7() {
    return this.mediaAttachments;
  }
  hc8(_set____db54di) {
    this.application = _set____db54di;
  }
  t2z() {
    return this.application;
  }
  ic8(_set____db54di) {
    this.mentions = _set____db54di;
  }
  ja7() {
    return this.mentions;
  }
  jc8(_set____db54di) {
    this.tags = _set____db54di;
  }
  ga2() {
    return this.tags;
  }
  ac1(_set____db54di) {
    this.emojis = _set____db54di;
  }
  f9t() {
    return this.emojis;
  }
  kc8(_set____db54di) {
    this.reblogsCount = _set____db54di;
  }
  lc8() {
    return this.reblogsCount;
  }
  mc8(_set____db54di) {
    this.favouritesCount = _set____db54di;
  }
  nc8() {
    return this.favouritesCount;
  }
  wa7(_set____db54di) {
    this.repliesCount = _set____db54di;
  }
  xa7() {
    return this.repliesCount;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  wby(_set____db54di) {
    this.inReplyToId = _set____db54di;
  }
  xby() {
    return this.inReplyToId;
  }
  oc8(_set____db54di) {
    this.inReplyToAccountId = _set____db54di;
  }
  pc8() {
    return this.inReplyToAccountId;
  }
  qc8(_set____db54di) {
    this.reblog = _set____db54di;
  }
  jc2() {
    return this.reblog;
  }
  lc7(_set____db54di) {
    this.poll = _set____db54di;
  }
  h3a() {
    return this.poll;
  }
  rc8(_set____db54di) {
    this.card = _set____db54di;
  }
  sc8() {
    return this.card;
  }
  yc1(_set____db54di) {
    this.language = _set____db54di;
  }
  zc1() {
    return this.language;
  }
  t39(_set____db54di) {
    this.text = _set____db54di;
  }
  h2z() {
    return this.text;
  }
  tc8(_set____db54di) {
    this.editedAt = _set____db54di;
  }
  uc8() {
    return this.editedAt;
  }
  vc8(_set____db54di) {
    this.isReblogged = _set____db54di;
  }
  wc8() {
    return this.isReblogged;
  }
  xc8(_set____db54di) {
    this.isFavourited = _set____db54di;
  }
  yc8() {
    return this.isFavourited;
  }
  pab(_set____db54di) {
    this.isMuted = _set____db54di;
  }
  qab() {
    return this.isMuted;
  }
  zc8(_set____db54di) {
    this.isBookmarked = _set____db54di;
  }
  ac9() {
    return this.isBookmarked;
  }
  bc9(_set____db54di) {
    this.isPinned = _set____db54di;
  }
  cc9() {
    return this.isPinned;
  }
  dc9(_set____db54di) {
    this.filtered = _set____db54di;
  }
  ec9() {
    return this.filtered;
  }
  fc9(_set____db54di) {
    this.pleroma = _set____db54di;
  }
  oc1() {
    return this.pleroma;
  }
  static cc8(seen0, seen1, id, uri, createdAt, account, content, visibility, isSensitive, spoilerText, mediaAttachments, application, mentions, tags, emojis, reblogsCount, favouritesCount, repliesCount, url, inReplyToId, inReplyToAccountId, reblog, poll, card, language, text, editedAt, isReblogged, isFavourited, isMuted, isBookmarked, isPinned, filtered, pleroma, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!!(!(191 === (191 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([191, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_24().tc7_1);
    }
    var $this = createThis(this);
    $this.vc7_1 = id;
    $this.wc7_1 = uri;
    $this.xc7_1 = createdAt;
    $this.yc7_1 = account;
    $this.zc7_1 = content;
    $this.ac8_1 = visibility;
    if (0 === (seen0 & 64))
      $this.isSensitive = false;
    else
      $this.isSensitive = isSensitive;
    $this.bc8_1 = spoilerText;
    if (0 === (seen0 & 256)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0.mediaAttachments = [];
    } else
      $this.mediaAttachments = mediaAttachments;
    if (0 === (seen0 & 512))
      $this.application = null;
    else
      $this.application = application;
    if (0 === (seen0 & 1024)) {
      var tmp_1 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1.mentions = [];
    } else
      $this.mentions = mentions;
    if (0 === (seen0 & 2048)) {
      var tmp_2 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2.tags = [];
    } else
      $this.tags = tags;
    if (0 === (seen0 & 4096)) {
      var tmp_3 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3.emojis = [];
    } else
      $this.emojis = emojis;
    if (0 === (seen0 & 8192))
      $this.reblogsCount = 0;
    else
      $this.reblogsCount = reblogsCount;
    if (0 === (seen0 & 16384))
      $this.favouritesCount = 0;
    else
      $this.favouritesCount = favouritesCount;
    if (0 === (seen0 & 32768))
      $this.repliesCount = 0;
    else
      $this.repliesCount = repliesCount;
    if (0 === (seen0 & 65536))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 131072))
      $this.inReplyToId = null;
    else
      $this.inReplyToId = inReplyToId;
    if (0 === (seen0 & 262144))
      $this.inReplyToAccountId = null;
    else
      $this.inReplyToAccountId = inReplyToAccountId;
    if (0 === (seen0 & 524288))
      $this.reblog = null;
    else
      $this.reblog = reblog;
    if (0 === (seen0 & 1048576))
      $this.poll = null;
    else
      $this.poll = poll;
    if (0 === (seen0 & 2097152))
      $this.card = null;
    else
      $this.card = card;
    if (0 === (seen0 & 4194304))
      $this.language = null;
    else
      $this.language = language;
    if (0 === (seen0 & 8388608))
      $this.text = null;
    else
      $this.text = text;
    if (0 === (seen0 & 16777216))
      $this.editedAt = null;
    else
      $this.editedAt = editedAt;
    if (0 === (seen0 & 33554432))
      $this.isReblogged = false;
    else
      $this.isReblogged = isReblogged;
    if (0 === (seen0 & 67108864))
      $this.isFavourited = false;
    else
      $this.isFavourited = isFavourited;
    if (0 === (seen0 & 134217728))
      $this.isMuted = false;
    else
      $this.isMuted = isMuted;
    if (0 === (seen0 & 268435456))
      $this.isBookmarked = false;
    else
      $this.isBookmarked = isBookmarked;
    if (0 === (seen0 & 536870912))
      $this.isPinned = false;
    else
      $this.isPinned = isPinned;
    if (0 === (seen0 & 1073741824)) {
      var tmp_4 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4.filtered = [];
    } else
      $this.filtered = filtered;
    if (0 === (seen0 & -2147483648))
      $this.pleroma = null;
    else
      $this.pleroma = pleroma;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get uri() {
    return this.q62();
  }
  set uri(value) {
    this.p62(value);
  }
  get createdAt() {
    return this.e60();
  }
  set createdAt(value) {
    this.p7o(value);
  }
  get account() {
    return this.j2q();
  }
  set account(value) {
    this.dc8(value);
  }
  get content() {
    return this.x1n();
  }
  set content(value) {
    this.ec8(value);
  }
  get visibility() {
    return this.b3a();
  }
  set visibility(value) {
    this.t77(value);
  }
  get spoilerText() {
    return this.cbn();
  }
  set spoilerText(value) {
    this.fc8(value);
  }
}
class Companion_26 {}
class $serializer_25 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Subscription', this, 4);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('endpoint', true);
    tmp0_serialDesc.m1a('alerts', true);
    tmp0_serialDesc.m1a('server_key', true);
    this.gc9_1 = tmp0_serialDesc;
  }
  hc9(encoder, value) {
    var tmp0_desc = this.gc9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.endpoint == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.endpoint);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.alerts == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_3(), value.alerts);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.serverKey == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.serverKey);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hc9(encoder, value instanceof Subscription ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.gc9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
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
    return Subscription.ic9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.gc9_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_3()), get_nullable(StringSerializer_getInstance())];
  }
}
class Subscription {
  constructor() {
    this.id = null;
    this.endpoint = null;
    this.alerts = null;
    this.serverKey = null;
  }
  r3b(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  z85(_set____db54di) {
    this.endpoint = _set____db54di;
  }
  a86() {
    return this.endpoint;
  }
  jc9(_set____db54di) {
    this.alerts = _set____db54di;
  }
  kc9() {
    return this.alerts;
  }
  lc9(_set____db54di) {
    this.serverKey = _set____db54di;
  }
  mc9() {
    return this.serverKey;
  }
  static ic9(seen0, id, endpoint, alerts, serverKey, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().gc9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.endpoint = null;
    else
      $this.endpoint = endpoint;
    if (0 === (seen0 & 4))
      $this.alerts = null;
    else
      $this.alerts = alerts;
    if (0 === (seen0 & 8))
      $this.serverKey = null;
    else
      $this.serverKey = serverKey;
    return $this;
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
    tmp.nc9_1 = [null, null, lazy(tmp_0, Tag$Companion$$childSerializers$_anonymous__iwpels)];
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Tag', this, 3);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('history', true);
    this.oc9_1 = tmp0_serialDesc;
  }
  pc9(encoder, value) {
    var tmp0_desc = this.oc9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().nc9_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.history == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.history);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.pc9(encoder, value instanceof Tag ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.oc9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_29().nc9_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
    return Tag.qc9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.oc9_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_29().nc9_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].y2())];
  }
}
class Tag {
  constructor() {
    Companion_getInstance_29();
    this.name = null;
    this.url = null;
    this.history = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  rc9(_set____db54di) {
    this.history = _set____db54di;
  }
  sc9() {
    return this.history;
  }
  static qc9(seen0, name, url, history, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().oc9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 4))
      $this.history = null;
    else
      $this.history = history;
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
    tmp.tc9_1 = [null, null, lazy(tmp_0, Trend$Companion$$childSerializers$_anonymous__h9hfpp)];
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.Trend', this, 3);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('url', true);
    tmp0_serialDesc.m1a('history', true);
    this.uc9_1 = tmp0_serialDesc;
  }
  vc9(encoder, value) {
    var tmp0_desc = this.uc9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().tc9_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.history == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.history);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vc9(encoder, value instanceof Trend ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.uc9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    var tmp8_cached = Companion_getInstance_30().tc9_1;
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
    return Trend.wc9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.uc9_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_30().tc9_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].y2())];
  }
}
class Trend {
  constructor() {
    Companion_getInstance_30();
    this.name = null;
    this.url = null;
    this.history = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  t9p(_set____db54di) {
    this.url = _set____db54di;
  }
  f4k() {
    return this.url;
  }
  rc9(_set____db54di) {
    this.history = _set____db54di;
  }
  sc9() {
    return this.history;
  }
  static wc9(seen0, name, url, history, serializationConstructorMarker) {
    Companion_getInstance_30();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().uc9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 4))
      $this.history = null;
    else
      $this.history = history;
    return $this;
  }
}
class Companion_29 {}
class $serializer_28 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.WebPush', this, 7);
    tmp0_serialDesc.m1a('title', true);
    tmp0_serialDesc.m1a('notification_type', true);
    tmp0_serialDesc.m1a('notification_id', true);
    tmp0_serialDesc.m1a('preferred_locale', true);
    tmp0_serialDesc.m1a('access_token', true);
    tmp0_serialDesc.m1a('icon', true);
    tmp0_serialDesc.m1a('body', true);
    this.xc9_1 = tmp0_serialDesc;
  }
  yc9(encoder, value) {
    var tmp0_desc = this.xc9_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.notificationType == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.notificationType);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.notificationId == null)) {
      tmp1_output.m14(tmp0_desc, 2, IntSerializer_getInstance(), value.notificationId);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.preferredLocale == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.preferredLocale);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.access_token == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.access_token);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.icon == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.body == null)) {
      tmp1_output.m14(tmp0_desc, 6, StringSerializer_getInstance(), value.body);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.yc9(encoder, value instanceof WebPush ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.xc9_1;
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
      tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
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
            tmp4_local0 = tmp11_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.i13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
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
            tmp10_local6 = tmp11_input.i13(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return WebPush.zc9(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.xc9_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class WebPush {
  constructor() {
    this.title = null;
    this.notificationType = null;
    this.notificationId = null;
    this.preferredLocale = null;
    this.access_token = null;
    this.icon = null;
    this.body = null;
  }
  ca2(_set____db54di) {
    this.title = _set____db54di;
  }
  m3b() {
    return this.title;
  }
  aca(_set____db54di) {
    this.notificationType = _set____db54di;
  }
  bca() {
    return this.notificationType;
  }
  cca(_set____db54di) {
    this.notificationId = _set____db54di;
  }
  dca() {
    return this.notificationId;
  }
  eca(_set____db54di) {
    this.preferredLocale = _set____db54di;
  }
  fca() {
    return this.preferredLocale;
  }
  gca(_set____db54di) {
    this.access_token = _set____db54di;
  }
  hca() {
    return this.access_token;
  }
  xa8(_set____db54di) {
    this.icon = _set____db54di;
  }
  w9u() {
    return this.icon;
  }
  ta8(_set____db54di) {
    this.body = _set____db54di;
  }
  ua8() {
    return this.body;
  }
  static zc9(seen0, title, notificationType, notificationId, preferredLocale, access_token, icon, body, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().xc9_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 2))
      $this.notificationType = null;
    else
      $this.notificationType = notificationType;
    if (0 === (seen0 & 4))
      $this.notificationId = null;
    else
      $this.notificationId = notificationId;
    if (0 === (seen0 & 8))
      $this.preferredLocale = null;
    else
      $this.preferredLocale = preferredLocale;
    if (0 === (seen0 & 16))
      $this.access_token = null;
    else
      $this.access_token = access_token;
    if (0 === (seen0 & 32))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 64))
      $this.body = null;
    else
      $this.body = body;
    return $this;
  }
}
class Companion_30 {
  constructor() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Filter$Companion$$childSerializers$_anonymous__vy8ea6);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ica_1 = [null, null, null, null, null, tmp_1, lazy(tmp_2, Filter$Companion$$childSerializers$_anonymous__vy8ea6_0)];
  }
}
class $serializer_29 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.filter.Filter', this, 7);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('context', false);
    tmp0_serialDesc.m1a('expires_at', true);
    tmp0_serialDesc.m1a('filter_action', true);
    tmp0_serialDesc.m1a('keywords', true);
    tmp0_serialDesc.m1a('statuses', true);
    this.jca_1 = tmp0_serialDesc;
  }
  kca(encoder, value) {
    var tmp0_desc = this.jca_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().ica_1;
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.title);
    tmp1_output.j14(tmp0_desc, 2, value.context);
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.expiresAt == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.expiresAt);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.filterAction == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.filterAction);
    }
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 5)) {
      tmp = true;
    } else {
      var tmp_0 = value.keywords;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals_0(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 5, tmp2_cached[5].y2(), value.keywords);
    }
    var tmp_1;
    if (tmp1_output.q14(tmp0_desc, 6)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.statuses;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = [];
      tmp_1 = !equals_0(tmp_2, tmp$ret$3);
    }
    if (tmp_1) {
      tmp1_output.l14(tmp0_desc, 6, tmp2_cached[6].y2(), value.statuses);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kca(encoder, value instanceof Filter ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jca_1;
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
    var tmp12_cached = Companion_getInstance_32().ica_1;
    if (tmp11_input.j13()) {
      tmp4_local0 = tmp11_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.g13(tmp0_desc, 5, tmp12_cached[5].y2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.g13(tmp0_desc, 6, tmp12_cached[6].y2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.e13(tmp0_desc, 2);
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
            tmp9_local5 = tmp11_input.g13(tmp0_desc, 5, tmp12_cached[5].y2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.g13(tmp0_desc, 6, tmp12_cached[6].y2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return Filter.oca(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.jca_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_32().ica_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[5].y2(), tmp0_cached[6].y2()];
  }
}
class Filter {
  constructor() {
    Companion_getInstance_32();
    this.expiresAt = null;
    this.filterAction = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.keywords = [];
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.statuses = [];
  }
  e7y(_set____db54di) {
    this.lca_1 = _set____db54di;
  }
  j37() {
    var tmp = this.lca_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  l3b(_set____db54di) {
    this.mca_1 = _set____db54di;
  }
  m3b() {
    var tmp = this.mca_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('title');
    }
  }
  pca(_set____db54di) {
    this.nca_1 = _set____db54di;
  }
  xc() {
    var tmp = this.nca_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('context');
    }
  }
  uaa(_set____db54di) {
    this.expiresAt = _set____db54di;
  }
  a8y() {
    return this.expiresAt;
  }
  qca(_set____db54di) {
    this.filterAction = _set____db54di;
  }
  rca() {
    return this.filterAction;
  }
  sca(_set____db54di) {
    this.keywords = _set____db54di;
  }
  r9v() {
    return this.keywords;
  }
  tca(_set____db54di) {
    this.statuses = _set____db54di;
  }
  kc6() {
    return this.statuses;
  }
  static oca(seen0, id, title, context, expiresAt, filterAction, keywords, statuses, serializationConstructorMarker) {
    Companion_getInstance_32();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_29().jca_1);
    }
    var $this = createThis(this);
    $this.lca_1 = id;
    $this.mca_1 = title;
    $this.nca_1 = context;
    if (0 === (seen0 & 8))
      $this.expiresAt = null;
    else
      $this.expiresAt = expiresAt;
    if (0 === (seen0 & 16))
      $this.filterAction = null;
    else
      $this.filterAction = filterAction;
    if (0 === (seen0 & 32)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.keywords = [];
    } else
      $this.keywords = keywords;
    if (0 === (seen0 & 64)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0.statuses = [];
    } else
      $this.statuses = statuses;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get title() {
    return this.m3b();
  }
  set title(value) {
    this.l3b(value);
  }
  get context() {
    return this.xc();
  }
  set context(value) {
    this.pca(value);
  }
}
class Companion_31 {}
class $serializer_30 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.filter.FilterKeyword', this, 3);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('keyword', false);
    tmp0_serialDesc.m1a('whole_word', true);
    this.uca_1 = tmp0_serialDesc;
  }
  vca(encoder, value) {
    var tmp0_desc = this.uca_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.keyword);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.isWholeWord === false)) {
      tmp1_output.b14(tmp0_desc, 2, value.isWholeWord);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vca(encoder, value instanceof FilterKeyword ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.uca_1;
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
      tmp5_local1 = tmp7_input.e13(tmp0_desc, 1);
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
            tmp5_local1 = tmp7_input.e13(tmp0_desc, 1);
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
    return FilterKeyword.yca(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.uca_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class FilterKeyword {
  constructor() {
    this.isWholeWord = false;
  }
  e7y(_set____db54di) {
    this.wca_1 = _set____db54di;
  }
  j37() {
    var tmp = this.wca_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  zca(_set____db54di) {
    this.xca_1 = _set____db54di;
  }
  acb() {
    var tmp = this.xca_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('keyword');
    }
  }
  bcb(_set____db54di) {
    this.isWholeWord = _set____db54di;
  }
  ccb() {
    return this.isWholeWord;
  }
  static yca(seen0, id, keyword, isWholeWord, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().uca_1);
    }
    var $this = createThis(this);
    $this.wca_1 = id;
    $this.xca_1 = keyword;
    if (0 === (seen0 & 4))
      $this.isWholeWord = false;
    else
      $this.isWholeWord = isWholeWord;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get keyword() {
    return this.acb();
  }
  set keyword(value) {
    this.zca(value);
  }
}
class Companion_32 {}
class $serializer_31 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.filter.FilterStatus', this, 2);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('status_id', false);
    this.dcb_1 = tmp0_serialDesc;
  }
  ecb(encoder, value) {
    var tmp0_desc = this.dcb_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.statusId);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ecb(encoder, value instanceof FilterStatus ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.dcb_1;
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
    return FilterStatus.hcb(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.dcb_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class FilterStatus {
  e7y(_set____db54di) {
    this.fcb_1 = _set____db54di;
  }
  j37() {
    var tmp = this.fcb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  icb(_set____db54di) {
    this.gcb_1 = _set____db54di;
  }
  jcb() {
    var tmp = this.gcb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('statusId');
    }
  }
  static hcb(seen0, id, statusId, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_31().dcb_1);
    }
    var $this = createThis(this);
    $this.fcb_1 = id;
    $this.gcb_1 = statusId;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get statusId() {
    return this.jcb();
  }
  set statusId(value) {
    this.icb(value);
  }
}
class Companion_33 {
  constructor() {
    Companion_instance_33 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, InstanceV1$Companion$$childSerializers$_anonymous__yo85dm);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kcb_1 = [null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, lazy(tmp_2, InstanceV1$Companion$$childSerializers$_anonymous__yo85dm_0)];
  }
}
class $serializer_32 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1', this, 16);
    tmp0_serialDesc.m1a('uri', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('short_description', true);
    tmp0_serialDesc.m1a('description', false);
    tmp0_serialDesc.m1a('email', false);
    tmp0_serialDesc.m1a('version', false);
    tmp0_serialDesc.m1a('urls', false);
    tmp0_serialDesc.m1a('stats', false);
    tmp0_serialDesc.m1a('thumbnail', true);
    tmp0_serialDesc.m1a('languages', true);
    tmp0_serialDesc.m1a('registrations', true);
    tmp0_serialDesc.m1a('approval_required', true);
    tmp0_serialDesc.m1a('invites_enabled', true);
    tmp0_serialDesc.m1a('configuration', true);
    tmp0_serialDesc.m1a('contact_account', true);
    tmp0_serialDesc.m1a('rules', true);
    this.lcb_1 = tmp0_serialDesc;
  }
  mcb(encoder, value) {
    var tmp0_desc = this.lcb_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().kcb_1;
    tmp1_output.j14(tmp0_desc, 0, value.uri);
    tmp1_output.j14(tmp0_desc, 1, value.title);
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.shortDescription == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.shortDescription);
    }
    tmp1_output.j14(tmp0_desc, 3, value.description);
    tmp1_output.j14(tmp0_desc, 4, value.email);
    tmp1_output.j14(tmp0_desc, 5, value.version);
    tmp1_output.l14(tmp0_desc, 6, $serializer_getInstance_40(), value.urls);
    tmp1_output.l14(tmp0_desc, 7, $serializer_getInstance_38(), value.stats);
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.thumbnail == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.thumbnail);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.languages == null)) {
      tmp1_output.m14(tmp0_desc, 9, tmp2_cached[9].y2(), value.languages);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.registrations == null)) {
      tmp1_output.m14(tmp0_desc, 10, BooleanSerializer_getInstance(), value.registrations);
    }
    if (tmp1_output.q14(tmp0_desc, 11) ? true : !(value.approvalRequired == null)) {
      tmp1_output.m14(tmp0_desc, 11, BooleanSerializer_getInstance(), value.approvalRequired);
    }
    if (tmp1_output.q14(tmp0_desc, 12) ? true : !(value.invitesEnabled == null)) {
      tmp1_output.m14(tmp0_desc, 12, BooleanSerializer_getInstance(), value.invitesEnabled);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.configuration == null)) {
      tmp1_output.m14(tmp0_desc, 13, $serializer_getInstance_33(), value.configuration);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.contactAccount == null)) {
      tmp1_output.m14(tmp0_desc, 14, $serializer_getInstance_0(), value.contactAccount);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.rules == null)) {
      tmp1_output.m14(tmp0_desc, 15, tmp2_cached[15].y2(), value.rules);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.mcb(encoder, value instanceof InstanceV1 ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.lcb_1;
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
    var tmp21_cached = Companion_getInstance_35().kcb_1;
    if (tmp20_input.j13()) {
      tmp4_local0 = tmp20_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.e13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.e13(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.g13(tmp0_desc, 6, $serializer_getInstance_40(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.g13(tmp0_desc, 7, $serializer_getInstance_38(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.i13(tmp0_desc, 9, tmp21_cached[9].y2(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.i13(tmp0_desc, 10, BooleanSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.i13(tmp0_desc, 13, $serializer_getInstance_33(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.i13(tmp0_desc, 14, $serializer_getInstance_0(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.i13(tmp0_desc, 15, tmp21_cached[15].y2(), tmp19_local15);
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
            tmp7_local3 = tmp20_input.e13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.e13(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.g13(tmp0_desc, 6, $serializer_getInstance_40(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.g13(tmp0_desc, 7, $serializer_getInstance_38(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.i13(tmp0_desc, 9, tmp21_cached[9].y2(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.i13(tmp0_desc, 10, BooleanSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.i13(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.i13(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.i13(tmp0_desc, 13, $serializer_getInstance_33(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.i13(tmp0_desc, 14, $serializer_getInstance_0(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.i13(tmp0_desc, 15, tmp21_cached[15].y2(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp20_input.v12(tmp0_desc);
    return InstanceV1.ucb(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  cy() {
    return this.lcb_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_35().kcb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_40(), $serializer_getInstance_38(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[9].y2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_33()), get_nullable($serializer_getInstance_0()), get_nullable(tmp0_cached[15].y2())];
  }
}
class InstanceV1 {
  constructor() {
    Companion_getInstance_35();
    this.shortDescription = null;
    this.thumbnail = null;
    this.languages = null;
    this.registrations = null;
    this.approvalRequired = null;
    this.invitesEnabled = null;
    this.configuration = null;
    this.contactAccount = null;
    this.rules = null;
  }
  p62(_set____db54di) {
    this.ncb_1 = _set____db54di;
  }
  q62() {
    var tmp = this.ncb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('uri');
    }
  }
  l3b(_set____db54di) {
    this.ocb_1 = _set____db54di;
  }
  m3b() {
    var tmp = this.ocb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('title');
    }
  }
  vcb(_set____db54di) {
    this.shortDescription = _set____db54di;
  }
  wcb() {
    return this.shortDescription;
  }
  v7e(_set____db54di) {
    this.pcb_1 = _set____db54di;
  }
  f31() {
    var tmp = this.pcb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('description');
    }
  }
  xcb(_set____db54di) {
    this.qcb_1 = _set____db54di;
  }
  b2x() {
    var tmp = this.qcb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('email');
    }
  }
  ycb(_set____db54di) {
    this.rcb_1 = _set____db54di;
  }
  n4k() {
    var tmp = this.rcb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('version');
    }
  }
  zcb(_set____db54di) {
    this.scb_1 = _set____db54di;
  }
  acc() {
    var tmp = this.scb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('urls');
    }
  }
  bcc(_set____db54di) {
    this.tcb_1 = _set____db54di;
  }
  ccc() {
    var tmp = this.tcb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('stats');
    }
  }
  g7k(_set____db54di) {
    this.thumbnail = _set____db54di;
  }
  h7k() {
    return this.thumbnail;
  }
  dcc(_set____db54di) {
    this.languages = _set____db54di;
  }
  ecc() {
    return this.languages;
  }
  fcc(_set____db54di) {
    this.registrations = _set____db54di;
  }
  gcc() {
    return this.registrations;
  }
  hcc(_set____db54di) {
    this.approvalRequired = _set____db54di;
  }
  icc() {
    return this.approvalRequired;
  }
  jcc(_set____db54di) {
    this.invitesEnabled = _set____db54di;
  }
  kcc() {
    return this.invitesEnabled;
  }
  lcc(_set____db54di) {
    this.configuration = _set____db54di;
  }
  mcc() {
    return this.configuration;
  }
  ncc(_set____db54di) {
    this.contactAccount = _set____db54di;
  }
  occ() {
    return this.contactAccount;
  }
  pcc(_set____db54di) {
    this.rules = _set____db54di;
  }
  qcc() {
    return this.rules;
  }
  static ucb(seen0, uri, title, shortDescription, description, email, version, urls, stats, thumbnail, languages, registrations, approvalRequired, invitesEnabled, configuration, contactAccount, rules, serializationConstructorMarker) {
    Companion_getInstance_35();
    if (!(251 === (251 & seen0))) {
      throwMissingFieldException(seen0, 251, $serializer_getInstance_32().lcb_1);
    }
    var $this = createThis(this);
    $this.ncb_1 = uri;
    $this.ocb_1 = title;
    if (0 === (seen0 & 4))
      $this.shortDescription = null;
    else
      $this.shortDescription = shortDescription;
    $this.pcb_1 = description;
    $this.qcb_1 = email;
    $this.rcb_1 = version;
    $this.scb_1 = urls;
    $this.tcb_1 = stats;
    if (0 === (seen0 & 256))
      $this.thumbnail = null;
    else
      $this.thumbnail = thumbnail;
    if (0 === (seen0 & 512))
      $this.languages = null;
    else
      $this.languages = languages;
    if (0 === (seen0 & 1024))
      $this.registrations = null;
    else
      $this.registrations = registrations;
    if (0 === (seen0 & 2048))
      $this.approvalRequired = null;
    else
      $this.approvalRequired = approvalRequired;
    if (0 === (seen0 & 4096))
      $this.invitesEnabled = null;
    else
      $this.invitesEnabled = invitesEnabled;
    if (0 === (seen0 & 8192))
      $this.configuration = null;
    else
      $this.configuration = configuration;
    if (0 === (seen0 & 16384))
      $this.contactAccount = null;
    else
      $this.contactAccount = contactAccount;
    if (0 === (seen0 & 32768))
      $this.rules = null;
    else
      $this.rules = rules;
    return $this;
  }
  get uri() {
    return this.q62();
  }
  set uri(value) {
    this.p62(value);
  }
  get title() {
    return this.m3b();
  }
  set title(value) {
    this.l3b(value);
  }
  get description() {
    return this.f31();
  }
  set description(value) {
    this.v7e(value);
  }
  get email() {
    return this.b2x();
  }
  set email(value) {
    this.xcb(value);
  }
  get version() {
    return this.n4k();
  }
  set version(value) {
    this.ycb(value);
  }
  get urls() {
    return this.acc();
  }
  set urls(value) {
    this.zcb(value);
  }
  get stats() {
    return this.ccc();
  }
  set stats(value) {
    this.bcc(value);
  }
}
class Companion_34 {}
class $serializer_33 {
  constructor() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Configuration', this, 3);
    tmp0_serialDesc.m1a('statuses', false);
    tmp0_serialDesc.m1a('media_attachments', false);
    tmp0_serialDesc.m1a('polls', false);
    this.rcc_1 = tmp0_serialDesc;
  }
  scc(encoder, value) {
    var tmp0_desc = this.rcc_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_39(), value.statuses);
    tmp1_output.l14(tmp0_desc, 1, $serializer_getInstance_35(), value.mediaAttachments);
    tmp1_output.l14(tmp0_desc, 2, $serializer_getInstance_36(), value.polls);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.scc(encoder, value instanceof InstanceV1Configuration ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rcc_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.g13(tmp0_desc, 0, $serializer_getInstance_39(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.g13(tmp0_desc, 1, $serializer_getInstance_35(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.g13(tmp0_desc, 2, $serializer_getInstance_36(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.g13(tmp0_desc, 0, $serializer_getInstance_39(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.g13(tmp0_desc, 1, $serializer_getInstance_35(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.g13(tmp0_desc, 2, $serializer_getInstance_36(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return InstanceV1Configuration.wcc(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.rcc_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_39(), $serializer_getInstance_35(), $serializer_getInstance_36()];
  }
}
class InstanceV1Configuration {
  xcc(_set____db54di) {
    this.tcc_1 = _set____db54di;
  }
  kc6() {
    var tmp = this.tcc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('statuses');
    }
  }
  ycc(_set____db54di) {
    this.ucc_1 = _set____db54di;
  }
  gc7() {
    var tmp = this.ucc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('mediaAttachments');
    }
  }
  zcc(_set____db54di) {
    this.vcc_1 = _set____db54di;
  }
  acd() {
    var tmp = this.vcc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('polls');
    }
  }
  static wcc(seen0, statuses, mediaAttachments, polls, serializationConstructorMarker) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_33().rcc_1);
    }
    var $this = createThis(this);
    $this.tcc_1 = statuses;
    $this.ucc_1 = mediaAttachments;
    $this.vcc_1 = polls;
    return $this;
  }
  get statuses() {
    return this.kc6();
  }
  set statuses(value) {
    this.xcc(value);
  }
  get mediaAttachments() {
    return this.gc7();
  }
  set mediaAttachments(value) {
    this.ycc(value);
  }
  get polls() {
    return this.acd();
  }
  set polls(value) {
    this.zcc(value);
  }
}
class Companion_35 {}
class $serializer_34 {
  constructor() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Fields', this, 3);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('value', true);
    tmp0_serialDesc.m1a('verified_at', true);
    this.bcd_1 = tmp0_serialDesc;
  }
  ccd(encoder, value) {
    var tmp0_desc = this.bcd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.verifiedAt == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.verifiedAt);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ccd(encoder, value instanceof InstanceV1Fields ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.bcd_1;
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
    return InstanceV1Fields.dcd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.bcd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class InstanceV1Fields {
  constructor() {
    this.name = null;
    this.value = null;
    this.verifiedAt = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  aa0(_set____db54di) {
    this.value = _set____db54di;
  }
  y2() {
    return this.value;
  }
  ecd(_set____db54di) {
    this.verifiedAt = _set____db54di;
  }
  fcd() {
    return this.verifiedAt;
  }
  static dcd(seen0, name, value, verifiedAt, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().bcd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 4))
      $this.verifiedAt = null;
    else
      $this.verifiedAt = verifiedAt;
    return $this;
  }
}
class Companion_36 {
  constructor() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gcd_1 = [lazy(tmp_0, InstanceV1MediaAttachments$Companion$$childSerializers$_anonymous__jyx5hu), null, null, null, null, null];
  }
}
class $serializer_35 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1MediaAttachments', this, 6);
    tmp0_serialDesc.m1a('supported_mime_types', true);
    tmp0_serialDesc.m1a('image_size_limit', true);
    tmp0_serialDesc.m1a('image_matrix_limit', true);
    tmp0_serialDesc.m1a('video_size_limit', true);
    tmp0_serialDesc.m1a('video_frame_rate_limit', true);
    tmp0_serialDesc.m1a('video_matrix_limit', true);
    this.hcd_1 = tmp0_serialDesc;
  }
  icd(encoder, value) {
    var tmp0_desc = this.hcd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().gcd_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.supportedMimeTypes;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals_0(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.supportedMimeTypes);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.imageSizeLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.imageSizeLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.imageMatrixLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 2, value.imageMatrixLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.videoSizeLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 3, value.videoSizeLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.videoFrameRateLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 4, value.videoFrameRateLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.videoMatrixLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 5, value.videoMatrixLimit);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.icd(encoder, value instanceof InstanceV1MediaAttachments ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hcd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.u12(tmp0_desc);
    var tmp11_cached = Companion_getInstance_38().gcd_1;
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.g13(tmp0_desc, 0, tmp11_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.z12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.z12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.z12(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.z12(tmp0_desc, 5);
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
            tmp5_local1 = tmp10_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.z12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.z12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.z12(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.z12(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return InstanceV1MediaAttachments.jcd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.hcd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_38().gcd_1[0].y2(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV1MediaAttachments {
  constructor() {
    Companion_getInstance_38();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.supportedMimeTypes = [];
    this.imageSizeLimit = 0;
    this.imageMatrixLimit = 0;
    this.videoSizeLimit = 0;
    this.videoFrameRateLimit = 0;
    this.videoMatrixLimit = 0;
  }
  kcd(_set____db54di) {
    this.supportedMimeTypes = _set____db54di;
  }
  lcd() {
    return this.supportedMimeTypes;
  }
  mcd(_set____db54di) {
    this.imageSizeLimit = _set____db54di;
  }
  ncd() {
    return this.imageSizeLimit;
  }
  ocd(_set____db54di) {
    this.imageMatrixLimit = _set____db54di;
  }
  pcd() {
    return this.imageMatrixLimit;
  }
  qcd(_set____db54di) {
    this.videoSizeLimit = _set____db54di;
  }
  rcd() {
    return this.videoSizeLimit;
  }
  scd(_set____db54di) {
    this.videoFrameRateLimit = _set____db54di;
  }
  tcd() {
    return this.videoFrameRateLimit;
  }
  ucd(_set____db54di) {
    this.videoMatrixLimit = _set____db54di;
  }
  vcd() {
    return this.videoMatrixLimit;
  }
  static jcd(seen0, supportedMimeTypes, imageSizeLimit, imageMatrixLimit, videoSizeLimit, videoFrameRateLimit, videoMatrixLimit, serializationConstructorMarker) {
    Companion_getInstance_38();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().hcd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.supportedMimeTypes = [];
    } else
      $this.supportedMimeTypes = supportedMimeTypes;
    if (0 === (seen0 & 2))
      $this.imageSizeLimit = 0;
    else
      $this.imageSizeLimit = imageSizeLimit;
    if (0 === (seen0 & 4))
      $this.imageMatrixLimit = 0;
    else
      $this.imageMatrixLimit = imageMatrixLimit;
    if (0 === (seen0 & 8))
      $this.videoSizeLimit = 0;
    else
      $this.videoSizeLimit = videoSizeLimit;
    if (0 === (seen0 & 16))
      $this.videoFrameRateLimit = 0;
    else
      $this.videoFrameRateLimit = videoFrameRateLimit;
    if (0 === (seen0 & 32))
      $this.videoMatrixLimit = 0;
    else
      $this.videoMatrixLimit = videoMatrixLimit;
    return $this;
  }
}
class Companion_37 {}
class $serializer_36 {
  constructor() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Polls', this, 4);
    tmp0_serialDesc.m1a('max_options', true);
    tmp0_serialDesc.m1a('max_characters_per_option', true);
    tmp0_serialDesc.m1a('min_expiration', true);
    tmp0_serialDesc.m1a('max_expiration', true);
    this.wcd_1 = tmp0_serialDesc;
  }
  xcd(encoder, value) {
    var tmp0_desc = this.wcd_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.maxOptions == null)) {
      tmp1_output.m14(tmp0_desc, 0, IntSerializer_getInstance(), value.maxOptions);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.maxCharactersPerOption == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.maxCharactersPerOption);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.minExpiration == null)) {
      tmp1_output.m14(tmp0_desc, 2, IntSerializer_getInstance(), value.minExpiration);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.maxExpiration == null)) {
      tmp1_output.m14(tmp0_desc, 3, IntSerializer_getInstance(), value.maxExpiration);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xcd(encoder, value instanceof InstanceV1Polls ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wcd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.i13(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return InstanceV1Polls.ycd(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.wcd_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class InstanceV1Polls {
  constructor() {
    this.maxOptions = null;
    this.maxCharactersPerOption = null;
    this.minExpiration = null;
    this.maxExpiration = null;
  }
  zcd(_set____db54di) {
    this.maxOptions = _set____db54di;
  }
  ace() {
    return this.maxOptions;
  }
  bce(_set____db54di) {
    this.maxCharactersPerOption = _set____db54di;
  }
  cce() {
    return this.maxCharactersPerOption;
  }
  dce(_set____db54di) {
    this.minExpiration = _set____db54di;
  }
  ece() {
    return this.minExpiration;
  }
  fce(_set____db54di) {
    this.maxExpiration = _set____db54di;
  }
  gce() {
    return this.maxExpiration;
  }
  static ycd(seen0, maxOptions, maxCharactersPerOption, minExpiration, maxExpiration, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().wcd_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.maxOptions = null;
    else
      $this.maxOptions = maxOptions;
    if (0 === (seen0 & 2))
      $this.maxCharactersPerOption = null;
    else
      $this.maxCharactersPerOption = maxCharactersPerOption;
    if (0 === (seen0 & 4))
      $this.minExpiration = null;
    else
      $this.minExpiration = minExpiration;
    if (0 === (seen0 & 8))
      $this.maxExpiration = null;
    else
      $this.maxExpiration = maxExpiration;
    return $this;
  }
}
class Companion_38 {}
class $serializer_37 {
  constructor() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Rules', this, 2);
    tmp0_serialDesc.m1a('id', true);
    tmp0_serialDesc.m1a('text', true);
    this.hce_1 = tmp0_serialDesc;
  }
  ice(encoder, value) {
    var tmp0_desc = this.hce_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.text == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.text);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ice(encoder, value instanceof InstanceV1Rules ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hce_1;
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
    return InstanceV1Rules.jce(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.hce_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class InstanceV1Rules {
  constructor() {
    this.id = null;
    this.text = null;
  }
  n84(_set____db54di) {
    this.id = _set____db54di;
  }
  j37() {
    return this.id;
  }
  t39(_set____db54di) {
    this.text = _set____db54di;
  }
  h2z() {
    return this.text;
  }
  static jce(seen0, id, text, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().hce_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.text = null;
    else
      $this.text = text;
    return $this;
  }
}
class Companion_39 {}
class $serializer_38 {
  constructor() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Stats', this, 3);
    tmp0_serialDesc.m1a('user_count', true);
    tmp0_serialDesc.m1a('status_count', true);
    tmp0_serialDesc.m1a('domain_count', true);
    this.kce_1 = tmp0_serialDesc;
  }
  lce(encoder, value) {
    var tmp0_desc = this.kce_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.userCount === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.userCount);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.statusCount === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.statusCount);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.domainCount === 0)) {
      tmp1_output.e14(tmp0_desc, 2, value.domainCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.lce(encoder, value instanceof InstanceV1Stats ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.kce_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return InstanceV1Stats.mce(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.kce_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV1Stats {
  constructor() {
    this.userCount = 0;
    this.statusCount = 0;
    this.domainCount = 0;
  }
  nce(_set____db54di) {
    this.userCount = _set____db54di;
  }
  oce() {
    return this.userCount;
  }
  pce(_set____db54di) {
    this.statusCount = _set____db54di;
  }
  qce() {
    return this.statusCount;
  }
  rce(_set____db54di) {
    this.domainCount = _set____db54di;
  }
  sce() {
    return this.domainCount;
  }
  static mce(seen0, userCount, statusCount, domainCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_38().kce_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.userCount = 0;
    else
      $this.userCount = userCount;
    if (0 === (seen0 & 2))
      $this.statusCount = 0;
    else
      $this.statusCount = statusCount;
    if (0 === (seen0 & 4))
      $this.domainCount = 0;
    else
      $this.domainCount = domainCount;
    return $this;
  }
}
class Companion_40 {}
class $serializer_39 {
  constructor() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Statuses', this, 3);
    tmp0_serialDesc.m1a('max_characters', true);
    tmp0_serialDesc.m1a('max_media_attachments', true);
    tmp0_serialDesc.m1a('characters_reserved_per_url', true);
    this.tce_1 = tmp0_serialDesc;
  }
  uce(encoder, value) {
    var tmp0_desc = this.tce_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.maxCharacters === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.maxCharacters);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.maxMediaAttachments === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.maxMediaAttachments);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.charactersReservedPerUrl === 0)) {
      tmp1_output.e14(tmp0_desc, 2, value.charactersReservedPerUrl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uce(encoder, value instanceof InstanceV1Statuses ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tce_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return InstanceV1Statuses.vce(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.tce_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV1Statuses {
  constructor() {
    this.maxCharacters = 0;
    this.maxMediaAttachments = 0;
    this.charactersReservedPerUrl = 0;
  }
  wce(_set____db54di) {
    this.maxCharacters = _set____db54di;
  }
  xce() {
    return this.maxCharacters;
  }
  yce(_set____db54di) {
    this.maxMediaAttachments = _set____db54di;
  }
  zce() {
    return this.maxMediaAttachments;
  }
  acf(_set____db54di) {
    this.charactersReservedPerUrl = _set____db54di;
  }
  bcf() {
    return this.charactersReservedPerUrl;
  }
  static vce(seen0, maxCharacters, maxMediaAttachments, charactersReservedPerUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_39().tce_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.maxCharacters = 0;
    else
      $this.maxCharacters = maxCharacters;
    if (0 === (seen0 & 2))
      $this.maxMediaAttachments = 0;
    else
      $this.maxMediaAttachments = maxMediaAttachments;
    if (0 === (seen0 & 4))
      $this.charactersReservedPerUrl = 0;
    else
      $this.charactersReservedPerUrl = charactersReservedPerUrl;
    return $this;
  }
}
class Companion_41 {}
class $serializer_40 {
  constructor() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev1.InstanceV1Urls', this, 1);
    tmp0_serialDesc.m1a('streaming_api', false);
    this.ccf_1 = tmp0_serialDesc;
  }
  dcf(encoder, value) {
    var tmp0_desc = this.ccf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.streamingApi);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dcf(encoder, value instanceof InstanceV1Urls ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ccf_1;
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
    return InstanceV1Urls.fcf(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ccf_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class InstanceV1Urls {
  gcf(_set____db54di) {
    this.ecf_1 = _set____db54di;
  }
  hcf() {
    var tmp = this.ecf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('streamingApi');
    }
  }
  static fcf(seen0, streamingApi, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_40().ccf_1);
    }
    var $this = createThis(this);
    $this.ecf_1 = streamingApi;
    return $this;
  }
  get streamingApi() {
    return this.hcf();
  }
  set streamingApi(value) {
    this.gcf(value);
  }
}
class Companion_42 {
  constructor() {
    Companion_instance_42 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, InstanceV2$Companion$$childSerializers$_anonymous__4cfzk7);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.icf_1 = [null, null, null, null, null, null, null, tmp_1, null, null, null, lazy(tmp_2, InstanceV2$Companion$$childSerializers$_anonymous__4cfzk7_0)];
  }
}
class $serializer_41 {
  constructor() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2', this, 12);
    tmp0_serialDesc.m1a('domain', false);
    tmp0_serialDesc.m1a('title', false);
    tmp0_serialDesc.m1a('version', false);
    tmp0_serialDesc.m1a('source_url', false);
    tmp0_serialDesc.m1a('description', false);
    tmp0_serialDesc.m1a('usage', false);
    tmp0_serialDesc.m1a('thumbnail', false);
    tmp0_serialDesc.m1a('languages', false);
    tmp0_serialDesc.m1a('configuration', false);
    tmp0_serialDesc.m1a('registrations', false);
    tmp0_serialDesc.m1a('contact', false);
    tmp0_serialDesc.m1a('rules', false);
    this.jcf_1 = tmp0_serialDesc;
  }
  kcf(encoder, value) {
    var tmp0_desc = this.jcf_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_44().icf_1;
    tmp1_output.j14(tmp0_desc, 0, value.domain);
    tmp1_output.j14(tmp0_desc, 1, value.title);
    tmp1_output.j14(tmp0_desc, 2, value.version);
    tmp1_output.j14(tmp0_desc, 3, value.sourceUrl);
    tmp1_output.j14(tmp0_desc, 4, value.description);
    tmp1_output.l14(tmp0_desc, 5, $serializer_getInstance_54(), value.usage);
    tmp1_output.l14(tmp0_desc, 6, $serializer_getInstance_51(), value.thumbnail);
    tmp1_output.l14(tmp0_desc, 7, tmp2_cached[7].y2(), value.languages);
    tmp1_output.l14(tmp0_desc, 8, $serializer_getInstance_43(), value.configuration);
    tmp1_output.l14(tmp0_desc, 9, $serializer_getInstance_48(), value.registrations);
    tmp1_output.l14(tmp0_desc, 10, $serializer_getInstance_44(), value.contact);
    tmp1_output.l14(tmp0_desc, 11, tmp2_cached[11].y2(), value.rules);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kcf(encoder, value instanceof InstanceV2 ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jcf_1;
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
    var tmp16_input = decoder.u12(tmp0_desc);
    var tmp17_cached = Companion_getInstance_44().icf_1;
    if (tmp16_input.j13()) {
      tmp4_local0 = tmp16_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.e13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.e13(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.e13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.e13(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.g13(tmp0_desc, 5, $serializer_getInstance_54(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.g13(tmp0_desc, 6, $serializer_getInstance_51(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.g13(tmp0_desc, 7, tmp17_cached[7].y2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.g13(tmp0_desc, 8, $serializer_getInstance_43(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.g13(tmp0_desc, 9, $serializer_getInstance_48(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.g13(tmp0_desc, 10, $serializer_getInstance_44(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.g13(tmp0_desc, 11, tmp17_cached[11].y2(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.e13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.e13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.e13(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.e13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.e13(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.g13(tmp0_desc, 5, $serializer_getInstance_54(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.g13(tmp0_desc, 6, $serializer_getInstance_51(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.g13(tmp0_desc, 7, tmp17_cached[7].y2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.g13(tmp0_desc, 8, $serializer_getInstance_43(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.g13(tmp0_desc, 9, $serializer_getInstance_48(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.g13(tmp0_desc, 10, $serializer_getInstance_44(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.g13(tmp0_desc, 11, tmp17_cached[11].y2(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp16_input.v12(tmp0_desc);
    return InstanceV2.xcf(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  cy() {
    return this.jcf_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_44().icf_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_54(), $serializer_getInstance_51(), tmp0_cached[7].y2(), $serializer_getInstance_43(), $serializer_getInstance_48(), $serializer_getInstance_44(), tmp0_cached[11].y2()];
  }
}
class InstanceV2 {
  constructor() {
    Companion_getInstance_44();
  }
  ycf(_set____db54di) {
    this.lcf_1 = _set____db54di;
  }
  ubx() {
    var tmp = this.lcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('domain');
    }
  }
  l3b(_set____db54di) {
    this.mcf_1 = _set____db54di;
  }
  m3b() {
    var tmp = this.mcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('title');
    }
  }
  ycb(_set____db54di) {
    this.ncf_1 = _set____db54di;
  }
  n4k() {
    var tmp = this.ncf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('version');
    }
  }
  zcf(_set____db54di) {
    this.ocf_1 = _set____db54di;
  }
  z32() {
    var tmp = this.ocf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('sourceUrl');
    }
  }
  v7e(_set____db54di) {
    this.pcf_1 = _set____db54di;
  }
  f31() {
    var tmp = this.pcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('description');
    }
  }
  acg(_set____db54di) {
    this.qcf_1 = _set____db54di;
  }
  bcg() {
    var tmp = this.qcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('usage');
    }
  }
  ccg(_set____db54di) {
    this.rcf_1 = _set____db54di;
  }
  h7k() {
    var tmp = this.rcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('thumbnail');
    }
  }
  dcg(_set____db54di) {
    this.scf_1 = _set____db54di;
  }
  ecc() {
    var tmp = this.scf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('languages');
    }
  }
  ecg(_set____db54di) {
    this.tcf_1 = _set____db54di;
  }
  mcc() {
    var tmp = this.tcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('configuration');
    }
  }
  fcg(_set____db54di) {
    this.ucf_1 = _set____db54di;
  }
  gcc() {
    var tmp = this.ucf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('registrations');
    }
  }
  gcg(_set____db54di) {
    this.vcf_1 = _set____db54di;
  }
  hcg() {
    var tmp = this.vcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('contact');
    }
  }
  icg(_set____db54di) {
    this.wcf_1 = _set____db54di;
  }
  qcc() {
    var tmp = this.wcf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('rules');
    }
  }
  static xcf(seen0, domain, title, version, sourceUrl, description, usage, thumbnail, languages, configuration, registrations, contact, rules, serializationConstructorMarker) {
    Companion_getInstance_44();
    if (!(4095 === (4095 & seen0))) {
      throwMissingFieldException(seen0, 4095, $serializer_getInstance_41().jcf_1);
    }
    var $this = createThis(this);
    $this.lcf_1 = domain;
    $this.mcf_1 = title;
    $this.ncf_1 = version;
    $this.ocf_1 = sourceUrl;
    $this.pcf_1 = description;
    $this.qcf_1 = usage;
    $this.rcf_1 = thumbnail;
    $this.scf_1 = languages;
    $this.tcf_1 = configuration;
    $this.ucf_1 = registrations;
    $this.vcf_1 = contact;
    $this.wcf_1 = rules;
    return $this;
  }
  get domain() {
    return this.ubx();
  }
  set domain(value) {
    this.ycf(value);
  }
  get title() {
    return this.m3b();
  }
  set title(value) {
    this.l3b(value);
  }
  get version() {
    return this.n4k();
  }
  set version(value) {
    this.ycb(value);
  }
  get sourceUrl() {
    return this.z32();
  }
  set sourceUrl(value) {
    this.zcf(value);
  }
  get description() {
    return this.f31();
  }
  set description(value) {
    this.v7e(value);
  }
  get usage() {
    return this.bcg();
  }
  set usage(value) {
    this.acg(value);
  }
  get thumbnail() {
    return this.h7k();
  }
  set thumbnail(value) {
    this.ccg(value);
  }
  get languages() {
    return this.ecc();
  }
  set languages(value) {
    this.dcg(value);
  }
  get configuration() {
    return this.mcc();
  }
  set configuration(value) {
    this.ecg(value);
  }
  get registrations() {
    return this.gcc();
  }
  set registrations(value) {
    this.fcg(value);
  }
  get contact() {
    return this.hcg();
  }
  set contact(value) {
    this.gcg(value);
  }
  get rules() {
    return this.qcc();
  }
  set rules(value) {
    this.icg(value);
  }
}
class Companion_43 {}
class $serializer_42 {
  constructor() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Accounts', this, 2);
    tmp0_serialDesc.m1a('max_featured_tags', true);
    tmp0_serialDesc.m1a('max_pinned_statuses', true);
    this.jcg_1 = tmp0_serialDesc;
  }
  kcg(encoder, value) {
    var tmp0_desc = this.jcg_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.maxFeaturedTags === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.maxFeaturedTags);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.maxPinnedStatuses == null)) {
      tmp1_output.m14(tmp0_desc, 1, IntSerializer_getInstance(), value.maxPinnedStatuses);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kcg(encoder, value instanceof InstanceV2Accounts ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jcg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.z12(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.z12(tmp0_desc, 0);
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
    return InstanceV2Accounts.lcg(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jcg_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class InstanceV2Accounts {
  constructor() {
    this.maxFeaturedTags = 0;
    this.maxPinnedStatuses = null;
  }
  mcg(_set____db54di) {
    this.maxFeaturedTags = _set____db54di;
  }
  ncg() {
    return this.maxFeaturedTags;
  }
  ocg(_set____db54di) {
    this.maxPinnedStatuses = _set____db54di;
  }
  pcg() {
    return this.maxPinnedStatuses;
  }
  static lcg(seen0, maxFeaturedTags, maxPinnedStatuses, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_42().jcg_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.maxFeaturedTags = 0;
    else
      $this.maxFeaturedTags = maxFeaturedTags;
    if (0 === (seen0 & 2))
      $this.maxPinnedStatuses = null;
    else
      $this.maxPinnedStatuses = maxPinnedStatuses;
    return $this;
  }
}
class Companion_44 {}
class $serializer_43 {
  constructor() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Configuration', this, 7);
    tmp0_serialDesc.m1a('urls', false);
    tmp0_serialDesc.m1a('vapid', true);
    tmp0_serialDesc.m1a('accounts', false);
    tmp0_serialDesc.m1a('statuses', false);
    tmp0_serialDesc.m1a('media_attachments', false);
    tmp0_serialDesc.m1a('polls', false);
    tmp0_serialDesc.m1a('translation', false);
    this.qcg_1 = tmp0_serialDesc;
  }
  rcg(encoder, value) {
    var tmp0_desc = this.qcg_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_53(), value.urls);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.vapid == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_56(), value.vapid);
    }
    tmp1_output.l14(tmp0_desc, 2, $serializer_getInstance_42(), value.accounts);
    tmp1_output.l14(tmp0_desc, 3, $serializer_getInstance_50(), value.statuses);
    tmp1_output.l14(tmp0_desc, 4, $serializer_getInstance_46(), value.mediaAttachments);
    tmp1_output.l14(tmp0_desc, 5, $serializer_getInstance_47(), value.polls);
    tmp1_output.l14(tmp0_desc, 6, $serializer_getInstance_52(), value.translation);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.rcg(encoder, value instanceof InstanceV2Configuration ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.qcg_1;
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
      tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, $serializer_getInstance_53(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, $serializer_getInstance_56(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.g13(tmp0_desc, 2, $serializer_getInstance_42(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.g13(tmp0_desc, 3, $serializer_getInstance_50(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.g13(tmp0_desc, 4, $serializer_getInstance_46(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.g13(tmp0_desc, 5, $serializer_getInstance_47(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.g13(tmp0_desc, 6, $serializer_getInstance_52(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.g13(tmp0_desc, 0, $serializer_getInstance_53(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.i13(tmp0_desc, 1, $serializer_getInstance_56(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.g13(tmp0_desc, 2, $serializer_getInstance_42(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.g13(tmp0_desc, 3, $serializer_getInstance_50(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.g13(tmp0_desc, 4, $serializer_getInstance_46(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.g13(tmp0_desc, 5, $serializer_getInstance_47(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.g13(tmp0_desc, 6, $serializer_getInstance_52(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp11_input.v12(tmp0_desc);
    return InstanceV2Configuration.ycg(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  cy() {
    return this.qcg_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_53(), get_nullable($serializer_getInstance_56()), $serializer_getInstance_42(), $serializer_getInstance_50(), $serializer_getInstance_46(), $serializer_getInstance_47(), $serializer_getInstance_52()];
  }
}
class InstanceV2Configuration {
  constructor() {
    this.vapid = null;
  }
  zcg(_set____db54di) {
    this.scg_1 = _set____db54di;
  }
  acc() {
    var tmp = this.scg_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('urls');
    }
  }
  ach(_set____db54di) {
    this.vapid = _set____db54di;
  }
  bch() {
    return this.vapid;
  }
  cch(_set____db54di) {
    this.tcg_1 = _set____db54di;
  }
  n37() {
    var tmp = this.tcg_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accounts');
    }
  }
  dch(_set____db54di) {
    this.ucg_1 = _set____db54di;
  }
  kc6() {
    var tmp = this.ucg_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('statuses');
    }
  }
  ech(_set____db54di) {
    this.vcg_1 = _set____db54di;
  }
  gc7() {
    var tmp = this.vcg_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('mediaAttachments');
    }
  }
  fch(_set____db54di) {
    this.wcg_1 = _set____db54di;
  }
  acd() {
    var tmp = this.wcg_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('polls');
    }
  }
  gch(_set____db54di) {
    this.xcg_1 = _set____db54di;
  }
  hch() {
    var tmp = this.xcg_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('translation');
    }
  }
  static ycg(seen0, urls, vapid, accounts, statuses, mediaAttachments, polls, translation, serializationConstructorMarker) {
    if (!(125 === (125 & seen0))) {
      throwMissingFieldException(seen0, 125, $serializer_getInstance_43().qcg_1);
    }
    var $this = createThis(this);
    $this.scg_1 = urls;
    if (0 === (seen0 & 2))
      $this.vapid = null;
    else
      $this.vapid = vapid;
    $this.tcg_1 = accounts;
    $this.ucg_1 = statuses;
    $this.vcg_1 = mediaAttachments;
    $this.wcg_1 = polls;
    $this.xcg_1 = translation;
    return $this;
  }
  get urls() {
    return this.acc();
  }
  set urls(value) {
    this.zcg(value);
  }
  get accounts() {
    return this.n37();
  }
  set accounts(value) {
    this.cch(value);
  }
  get statuses() {
    return this.kc6();
  }
  set statuses(value) {
    this.dch(value);
  }
  get mediaAttachments() {
    return this.gc7();
  }
  set mediaAttachments(value) {
    this.ech(value);
  }
  get polls() {
    return this.acd();
  }
  set polls(value) {
    this.fch(value);
  }
  get translation() {
    return this.hch();
  }
  set translation(value) {
    this.gch(value);
  }
}
class Companion_45 {}
class $serializer_44 {
  constructor() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Contact', this, 2);
    tmp0_serialDesc.m1a('email', false);
    tmp0_serialDesc.m1a('account', true);
    this.ich_1 = tmp0_serialDesc;
  }
  jch(encoder, value) {
    var tmp0_desc = this.ich_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.email);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.account == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_0(), value.account);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.jch(encoder, value instanceof InstanceV2Contact ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ich_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.e13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return InstanceV2Contact.lch(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.ich_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable($serializer_getInstance_0())];
  }
}
class InstanceV2Contact {
  constructor() {
    this.account = null;
  }
  xcb(_set____db54di) {
    this.kch_1 = _set____db54di;
  }
  b2x() {
    var tmp = this.kch_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('email');
    }
  }
  ec5(_set____db54di) {
    this.account = _set____db54di;
  }
  j2q() {
    return this.account;
  }
  static lch(seen0, email, account, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_44().ich_1);
    }
    var $this = createThis(this);
    $this.kch_1 = email;
    if (0 === (seen0 & 2))
      $this.account = null;
    else
      $this.account = account;
    return $this;
  }
  get email() {
    return this.b2x();
  }
  set email(value) {
    this.xcb(value);
  }
}
class Companion_46 {}
class $serializer_45 {
  constructor() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Fields', this, 3);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('value', true);
    tmp0_serialDesc.m1a('verified_at', true);
    this.mch_1 = tmp0_serialDesc;
  }
  nch(encoder, value) {
    var tmp0_desc = this.mch_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.verifiedAt == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.verifiedAt);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.nch(encoder, value instanceof InstanceV2Fields ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mch_1;
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
    return InstanceV2Fields.och(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.mch_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class InstanceV2Fields {
  constructor() {
    this.name = null;
    this.value = null;
    this.verifiedAt = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  aa0(_set____db54di) {
    this.value = _set____db54di;
  }
  y2() {
    return this.value;
  }
  ecd(_set____db54di) {
    this.verifiedAt = _set____db54di;
  }
  fcd() {
    return this.verifiedAt;
  }
  static och(seen0, name, value, verifiedAt, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_45().mch_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 4))
      $this.verifiedAt = null;
    else
      $this.verifiedAt = verifiedAt;
    return $this;
  }
}
class Companion_47 {
  constructor() {
    Companion_instance_47 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pch_1 = [lazy(tmp_0, InstanceV2MediaAttachments$Companion$$childSerializers$_anonymous__uea2hf), null, null, null, null, null];
  }
}
class $serializer_46 {
  constructor() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2MediaAttachments', this, 6);
    tmp0_serialDesc.m1a('supported_mime_types', true);
    tmp0_serialDesc.m1a('image_size_limit', true);
    tmp0_serialDesc.m1a('image_matrix_limit', true);
    tmp0_serialDesc.m1a('video_size_limit', true);
    tmp0_serialDesc.m1a('video_frame_rate_limit', true);
    tmp0_serialDesc.m1a('video_matrix_limit', true);
    this.qch_1 = tmp0_serialDesc;
  }
  rch(encoder, value) {
    var tmp0_desc = this.qch_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_49().pch_1;
    var tmp;
    if (tmp1_output.q14(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.supportedMimeTypes;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals_0(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.l14(tmp0_desc, 0, tmp2_cached[0].y2(), value.supportedMimeTypes);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.imageSizeLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.imageSizeLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.imageMatrixLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 2, value.imageMatrixLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.videoSizeLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 3, value.videoSizeLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.videoFrameRateLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 4, value.videoFrameRateLimit);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.videoMatrixLimit === 0)) {
      tmp1_output.e14(tmp0_desc, 5, value.videoMatrixLimit);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.rch(encoder, value instanceof InstanceV2MediaAttachments ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.qch_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.u12(tmp0_desc);
    var tmp11_cached = Companion_getInstance_49().pch_1;
    if (tmp10_input.j13()) {
      tmp4_local0 = tmp10_input.g13(tmp0_desc, 0, tmp11_cached[0].y2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.z12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.z12(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.z12(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.z12(tmp0_desc, 5);
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
            tmp5_local1 = tmp10_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.z12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.z12(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.z12(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.z12(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp10_input.v12(tmp0_desc);
    return InstanceV2MediaAttachments.sch(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  cy() {
    return this.qch_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_49().pch_1[0].y2(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV2MediaAttachments {
  constructor() {
    Companion_getInstance_49();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.supportedMimeTypes = [];
    this.imageSizeLimit = 0;
    this.imageMatrixLimit = 0;
    this.videoSizeLimit = 0;
    this.videoFrameRateLimit = 0;
    this.videoMatrixLimit = 0;
  }
  kcd(_set____db54di) {
    this.supportedMimeTypes = _set____db54di;
  }
  lcd() {
    return this.supportedMimeTypes;
  }
  mcd(_set____db54di) {
    this.imageSizeLimit = _set____db54di;
  }
  ncd() {
    return this.imageSizeLimit;
  }
  ocd(_set____db54di) {
    this.imageMatrixLimit = _set____db54di;
  }
  pcd() {
    return this.imageMatrixLimit;
  }
  qcd(_set____db54di) {
    this.videoSizeLimit = _set____db54di;
  }
  rcd() {
    return this.videoSizeLimit;
  }
  scd(_set____db54di) {
    this.videoFrameRateLimit = _set____db54di;
  }
  tcd() {
    return this.videoFrameRateLimit;
  }
  ucd(_set____db54di) {
    this.videoMatrixLimit = _set____db54di;
  }
  vcd() {
    return this.videoMatrixLimit;
  }
  static sch(seen0, supportedMimeTypes, imageSizeLimit, imageMatrixLimit, videoSizeLimit, videoFrameRateLimit, videoMatrixLimit, serializationConstructorMarker) {
    Companion_getInstance_49();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_46().qch_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.supportedMimeTypes = [];
    } else
      $this.supportedMimeTypes = supportedMimeTypes;
    if (0 === (seen0 & 2))
      $this.imageSizeLimit = 0;
    else
      $this.imageSizeLimit = imageSizeLimit;
    if (0 === (seen0 & 4))
      $this.imageMatrixLimit = 0;
    else
      $this.imageMatrixLimit = imageMatrixLimit;
    if (0 === (seen0 & 8))
      $this.videoSizeLimit = 0;
    else
      $this.videoSizeLimit = videoSizeLimit;
    if (0 === (seen0 & 16))
      $this.videoFrameRateLimit = 0;
    else
      $this.videoFrameRateLimit = videoFrameRateLimit;
    if (0 === (seen0 & 32))
      $this.videoMatrixLimit = 0;
    else
      $this.videoMatrixLimit = videoMatrixLimit;
    return $this;
  }
}
class Companion_48 {}
class $serializer_47 {
  constructor() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Polls', this, 4);
    tmp0_serialDesc.m1a('max_options', true);
    tmp0_serialDesc.m1a('max_characters_per_option', true);
    tmp0_serialDesc.m1a('min_expiration', true);
    tmp0_serialDesc.m1a('max_expiration', true);
    this.tch_1 = tmp0_serialDesc;
  }
  uch(encoder, value) {
    var tmp0_desc = this.tch_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.maxOptions === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.maxOptions);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.maxCharactersPerOption === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.maxCharactersPerOption);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.minExpiration === 0)) {
      tmp1_output.e14(tmp0_desc, 2, value.minExpiration);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.maxExpiration === 0)) {
      tmp1_output.e14(tmp0_desc, 3, value.maxExpiration);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uch(encoder, value instanceof InstanceV2Polls ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tch_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z12(tmp0_desc, 2);
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
            tmp4_local0 = tmp8_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z12(tmp0_desc, 2);
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
    return InstanceV2Polls.vch(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.tch_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV2Polls {
  constructor() {
    this.maxOptions = 0;
    this.maxCharactersPerOption = 0;
    this.minExpiration = 0;
    this.maxExpiration = 0;
  }
  wch(_set____db54di) {
    this.maxOptions = _set____db54di;
  }
  ace() {
    return this.maxOptions;
  }
  xch(_set____db54di) {
    this.maxCharactersPerOption = _set____db54di;
  }
  cce() {
    return this.maxCharactersPerOption;
  }
  ych(_set____db54di) {
    this.minExpiration = _set____db54di;
  }
  ece() {
    return this.minExpiration;
  }
  zch(_set____db54di) {
    this.maxExpiration = _set____db54di;
  }
  gce() {
    return this.maxExpiration;
  }
  static vch(seen0, maxOptions, maxCharactersPerOption, minExpiration, maxExpiration, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_47().tch_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.maxOptions = 0;
    else
      $this.maxOptions = maxOptions;
    if (0 === (seen0 & 2))
      $this.maxCharactersPerOption = 0;
    else
      $this.maxCharactersPerOption = maxCharactersPerOption;
    if (0 === (seen0 & 4))
      $this.minExpiration = 0;
    else
      $this.minExpiration = minExpiration;
    if (0 === (seen0 & 8))
      $this.maxExpiration = 0;
    else
      $this.maxExpiration = maxExpiration;
    return $this;
  }
}
class Companion_49 {}
class $serializer_48 {
  constructor() {
    $serializer_instance_48 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Registrations', this, 3);
    tmp0_serialDesc.m1a('enabled', true);
    tmp0_serialDesc.m1a('approval_required', true);
    tmp0_serialDesc.m1a('message', true);
    this.aci_1 = tmp0_serialDesc;
  }
  bci(encoder, value) {
    var tmp0_desc = this.aci_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.enabled === false)) {
      tmp1_output.b14(tmp0_desc, 0, value.enabled);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.approvalRequired === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.approvalRequired);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.message == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.message);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.bci(encoder, value instanceof InstanceV2Registrations ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.aci_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.w12(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.w12(tmp0_desc, 1);
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
    return InstanceV2Registrations.cci(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.aci_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class InstanceV2Registrations {
  constructor() {
    this.enabled = false;
    this.approvalRequired = false;
    this.message = null;
  }
  b77(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  dci(_set____db54di) {
    this.approvalRequired = _set____db54di;
  }
  icc() {
    return this.approvalRequired;
  }
  eci(_set____db54di) {
    this.message = _set____db54di;
  }
  r() {
    return this.message;
  }
  static cci(seen0, enabled, approvalRequired, message, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_48().aci_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = false;
    else
      $this.enabled = enabled;
    if (0 === (seen0 & 2))
      $this.approvalRequired = false;
    else
      $this.approvalRequired = approvalRequired;
    if (0 === (seen0 & 4))
      $this.message = null;
    else
      $this.message = message;
    return $this;
  }
}
class Companion_50 {}
class $serializer_49 {
  constructor() {
    $serializer_instance_49 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Rules', this, 2);
    tmp0_serialDesc.m1a('id', false);
    tmp0_serialDesc.m1a('text', false);
    this.fci_1 = tmp0_serialDesc;
  }
  gci(encoder, value) {
    var tmp0_desc = this.fci_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.id);
    tmp1_output.j14(tmp0_desc, 1, value.text);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.gci(encoder, value instanceof InstanceV2Rules ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.fci_1;
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
    return InstanceV2Rules.jci(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.fci_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class InstanceV2Rules {
  e7y(_set____db54di) {
    this.hci_1 = _set____db54di;
  }
  j37() {
    var tmp = this.hci_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('id');
    }
  }
  v69(_set____db54di) {
    this.ici_1 = _set____db54di;
  }
  h2z() {
    var tmp = this.ici_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('text');
    }
  }
  static jci(seen0, id, text, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_49().fci_1);
    }
    var $this = createThis(this);
    $this.hci_1 = id;
    $this.ici_1 = text;
    return $this;
  }
  get id() {
    return this.j37();
  }
  set id(value) {
    this.e7y(value);
  }
  get text() {
    return this.h2z();
  }
  set text(value) {
    this.v69(value);
  }
}
class Companion_51 {}
class $serializer_50 {
  constructor() {
    $serializer_instance_50 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Statuses', this, 3);
    tmp0_serialDesc.m1a('max_characters', true);
    tmp0_serialDesc.m1a('max_media_attachments', true);
    tmp0_serialDesc.m1a('characters_reserved_per_url', true);
    this.kci_1 = tmp0_serialDesc;
  }
  lci(encoder, value) {
    var tmp0_desc = this.kci_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.maxCharacters === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.maxCharacters);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.maxMediaAttachments === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.maxMediaAttachments);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.charactersReservedPerUrl === 0)) {
      tmp1_output.e14(tmp0_desc, 2, value.charactersReservedPerUrl);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.lci(encoder, value instanceof InstanceV2Statuses ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.kci_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.z12(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.z12(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return InstanceV2Statuses.mci(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.kci_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class InstanceV2Statuses {
  constructor() {
    this.maxCharacters = 0;
    this.maxMediaAttachments = 0;
    this.charactersReservedPerUrl = 0;
  }
  wce(_set____db54di) {
    this.maxCharacters = _set____db54di;
  }
  xce() {
    return this.maxCharacters;
  }
  yce(_set____db54di) {
    this.maxMediaAttachments = _set____db54di;
  }
  zce() {
    return this.maxMediaAttachments;
  }
  acf(_set____db54di) {
    this.charactersReservedPerUrl = _set____db54di;
  }
  bcf() {
    return this.charactersReservedPerUrl;
  }
  static mci(seen0, maxCharacters, maxMediaAttachments, charactersReservedPerUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_50().kci_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.maxCharacters = 0;
    else
      $this.maxCharacters = maxCharacters;
    if (0 === (seen0 & 2))
      $this.maxMediaAttachments = 0;
    else
      $this.maxMediaAttachments = maxMediaAttachments;
    if (0 === (seen0 & 4))
      $this.charactersReservedPerUrl = 0;
    else
      $this.charactersReservedPerUrl = charactersReservedPerUrl;
    return $this;
  }
}
class Companion_52 {}
class $serializer_51 {
  constructor() {
    $serializer_instance_51 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Thumbnail', this, 3);
    tmp0_serialDesc.m1a('url', false);
    tmp0_serialDesc.m1a('blurhash', true);
    tmp0_serialDesc.m1a('versions', true);
    this.nci_1 = tmp0_serialDesc;
  }
  oci(encoder, value) {
    var tmp0_desc = this.nci_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.url);
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.blurhash == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.blurhash);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.versions == null)) {
      tmp1_output.m14(tmp0_desc, 2, $serializer_getInstance_57(), value.versions);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.oci(encoder, value instanceof InstanceV2Thumbnail ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nci_1;
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
      tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_57(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.i13(tmp0_desc, 2, $serializer_getInstance_57(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp7_input.v12(tmp0_desc);
    return InstanceV2Thumbnail.qci(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.nci_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_57())];
  }
}
class InstanceV2Thumbnail {
  constructor() {
    this.blurhash = null;
    this.versions = null;
  }
  s9w(_set____db54di) {
    this.pci_1 = _set____db54di;
  }
  f4k() {
    var tmp = this.pci_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('url');
    }
  }
  na0(_set____db54di) {
    this.blurhash = _set____db54di;
  }
  oa0() {
    return this.blurhash;
  }
  rci(_set____db54di) {
    this.versions = _set____db54di;
  }
  sci() {
    return this.versions;
  }
  static qci(seen0, url, blurhash, versions, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_51().nci_1);
    }
    var $this = createThis(this);
    $this.pci_1 = url;
    if (0 === (seen0 & 2))
      $this.blurhash = null;
    else
      $this.blurhash = blurhash;
    if (0 === (seen0 & 4))
      $this.versions = null;
    else
      $this.versions = versions;
    return $this;
  }
  get url() {
    return this.f4k();
  }
  set url(value) {
    this.s9w(value);
  }
}
class Companion_53 {}
class $serializer_52 {
  constructor() {
    $serializer_instance_52 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Translation', this, 1);
    tmp0_serialDesc.m1a('enabled', true);
    this.tci_1 = tmp0_serialDesc;
  }
  uci(encoder, value) {
    var tmp0_desc = this.tci_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.enabled === false)) {
      tmp1_output.b14(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.uci(encoder, value instanceof InstanceV2Translation ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.tci_1;
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
    return InstanceV2Translation.vci(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.tci_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class InstanceV2Translation {
  constructor() {
    this.enabled = false;
  }
  b77(_set____db54di) {
    this.enabled = _set____db54di;
  }
  c77() {
    return this.enabled;
  }
  static vci(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_52().tci_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = false;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class Companion_54 {}
class $serializer_53 {
  constructor() {
    $serializer_instance_53 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Urls', this, 1);
    tmp0_serialDesc.m1a('streaming', false);
    this.wci_1 = tmp0_serialDesc;
  }
  xci(encoder, value) {
    var tmp0_desc = this.wci_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.streaming);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xci(encoder, value instanceof InstanceV2Urls ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wci_1;
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
    return InstanceV2Urls.zci(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.wci_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class InstanceV2Urls {
  acj(_set____db54di) {
    this.yci_1 = _set____db54di;
  }
  bcj() {
    var tmp = this.yci_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('streaming');
    }
  }
  static zci(seen0, streaming, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_53().wci_1);
    }
    var $this = createThis(this);
    $this.yci_1 = streaming;
    return $this;
  }
  get streaming() {
    return this.bcj();
  }
  set streaming(value) {
    this.acj(value);
  }
}
class Companion_55 {}
class $serializer_54 {
  constructor() {
    $serializer_instance_54 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Usage', this, 1);
    tmp0_serialDesc.m1a('users', false);
    this.ccj_1 = tmp0_serialDesc;
  }
  dcj(encoder, value) {
    var tmp0_desc = this.ccj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.l14(tmp0_desc, 0, $serializer_getInstance_55(), value.users);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dcj(encoder, value instanceof InstanceV2Usage ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ccj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_55(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.g13(tmp0_desc, 0, $serializer_getInstance_55(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return InstanceV2Usage.fcj(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ccj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_55()];
  }
}
class InstanceV2Usage {
  gcj(_set____db54di) {
    this.ecj_1 = _set____db54di;
  }
  h33() {
    var tmp = this.ecj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('users');
    }
  }
  static fcj(seen0, users, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_54().ccj_1);
    }
    var $this = createThis(this);
    $this.ecj_1 = users;
    return $this;
  }
  get users() {
    return this.h33();
  }
  set users(value) {
    this.gcj(value);
  }
}
class Companion_56 {}
class $serializer_55 {
  constructor() {
    $serializer_instance_55 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Users', this, 1);
    tmp0_serialDesc.m1a('active_month', true);
    this.hcj_1 = tmp0_serialDesc;
  }
  icj(encoder, value) {
    var tmp0_desc = this.hcj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.activeMonth === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.activeMonth);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.icj(encoder, value instanceof InstanceV2Users ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.hcj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.u12(tmp0_desc);
    if (tmp5_input.j13()) {
      tmp4_local0 = tmp5_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp5_input.v12(tmp0_desc);
    return InstanceV2Users.jcj(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.hcj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance()];
  }
}
class InstanceV2Users {
  constructor(activeMonth) {
    activeMonth = activeMonth === VOID ? 0 : activeMonth;
    this.activeMonth = activeMonth;
  }
  kcj(_set____db54di) {
    this.activeMonth = _set____db54di;
  }
  lcj() {
    return this.activeMonth;
  }
  static jcj(seen0, activeMonth, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_55().hcj_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.activeMonth = 0;
    else
      $this.activeMonth = activeMonth;
    return $this;
  }
}
class Companion_57 {}
class $serializer_56 {
  constructor() {
    $serializer_instance_56 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Vapid', this, 1);
    tmp0_serialDesc.m1a('public_key', false);
    this.mcj_1 = tmp0_serialDesc;
  }
  ncj(encoder, value) {
    var tmp0_desc = this.mcj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    tmp1_output.j14(tmp0_desc, 0, value.publicKey);
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ncj(encoder, value instanceof InstanceV2Vapid ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.mcj_1;
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
    return InstanceV2Vapid.pcj(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.mcj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class InstanceV2Vapid {
  qcj(_set____db54di) {
    this.ocj_1 = _set____db54di;
  }
  rcj() {
    var tmp = this.ocj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('publicKey');
    }
  }
  static pcj(seen0, publicKey, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_56().mcj_1);
    }
    var $this = createThis(this);
    $this.ocj_1 = publicKey;
    return $this;
  }
  get publicKey() {
    return this.rcj();
  }
  set publicKey(value) {
    this.qcj(value);
  }
}
class Companion_58 {}
class $serializer_57 {
  constructor() {
    $serializer_instance_57 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.instancev2.InstanceV2Versions', this, 2);
    tmp0_serialDesc.m1a('@1x', true);
    tmp0_serialDesc.m1a('@2x', true);
    this.scj_1 = tmp0_serialDesc;
  }
  tcj(encoder, value) {
    var tmp0_desc = this.scj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.at1x == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.at1x);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.at2x == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.at2x);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.tcj(encoder, value instanceof InstanceV2Versions ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.scj_1;
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
    return InstanceV2Versions.ucj(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.scj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class InstanceV2Versions {
  constructor() {
    this.at1x = null;
    this.at2x = null;
  }
  vcj(_set____db54di) {
    this.at1x = _set____db54di;
  }
  wcj() {
    return this.at1x;
  }
  xcj(_set____db54di) {
    this.at2x = _set____db54di;
  }
  ycj() {
    return this.at2x;
  }
  static ucj(seen0, at1x, at2x, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_57().scj_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.at1x = null;
    else
      $this.at1x = at1x;
    if (0 === (seen0 & 2))
      $this.at2x = null;
    else
      $this.at2x = at2x;
    return $this;
  }
}
class Companion_59 {}
class $serializer_58 {
  constructor() {
    $serializer_instance_58 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.meta.Meta', this, 2);
    tmp0_serialDesc.m1a('focus', true);
    tmp0_serialDesc.m1a('original', true);
    this.zcj_1 = tmp0_serialDesc;
  }
  ack(encoder, value) {
    var tmp0_desc = this.zcj_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.focus == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_59(), value.focus);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.original == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_60(), value.original);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ack(encoder, value instanceof Meta ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.zcj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, $serializer_getInstance_59(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, $serializer_getInstance_60(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i13(tmp0_desc, 0, $serializer_getInstance_59(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i13(tmp0_desc, 1, $serializer_getInstance_60(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return Meta.bck(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.zcj_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_59()), get_nullable($serializer_getInstance_60())];
  }
}
class Meta {
  constructor() {
    this.focus = null;
    this.original = null;
  }
  cck(_set____db54di) {
    this.focus = _set____db54di;
  }
  dck() {
    return this.focus;
  }
  eck(_set____db54di) {
    this.original = _set____db54di;
  }
  fck() {
    return this.original;
  }
  static bck(seen0, focus, original, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_58().zcj_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.focus = null;
    else
      $this.focus = focus;
    if (0 === (seen0 & 2))
      $this.original = null;
    else
      $this.original = original;
    return $this;
  }
}
class Companion_60 {}
class $serializer_59 {
  constructor() {
    $serializer_instance_59 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.meta.MetaFocus', this, 2);
    tmp0_serialDesc.m1a('x', true);
    tmp0_serialDesc.m1a('y', true);
    this.gck_1 = tmp0_serialDesc;
  }
  hck(encoder, value) {
    var tmp0_desc = this.gck_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !equals_0(value.x, 0.0)) {
      tmp1_output.g14(tmp0_desc, 0, value.x);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !equals_0(value.y, 0.0)) {
      tmp1_output.g14(tmp0_desc, 1, value.y);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.hck(encoder, value instanceof MetaFocus ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.gck_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.u12(tmp0_desc);
    if (tmp6_input.j13()) {
      tmp4_local0 = tmp6_input.b13(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b13(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b13(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b13(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp6_input.v12(tmp0_desc);
    return MetaFocus.ick(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.gck_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [FloatSerializer_getInstance(), FloatSerializer_getInstance()];
  }
}
class MetaFocus {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
  }
  jck(_set____db54di) {
    this.x = _set____db54di;
  }
  kck() {
    return this.x;
  }
  lck(_set____db54di) {
    this.y = _set____db54di;
  }
  mck() {
    return this.y;
  }
  static ick(seen0, x, y, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_59().gck_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.x = 0.0;
    else
      $this.x = x;
    if (0 === (seen0 & 2))
      $this.y = 0.0;
    else
      $this.y = y;
    return $this;
  }
}
class Companion_61 {}
class $serializer_60 {
  constructor() {
    $serializer_instance_60 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.meta.MetaOriginal', this, 4);
    tmp0_serialDesc.m1a('width', true);
    tmp0_serialDesc.m1a('height', true);
    tmp0_serialDesc.m1a('size', true);
    tmp0_serialDesc.m1a('aspect', true);
    this.nck_1 = tmp0_serialDesc;
  }
  ock(encoder, value) {
    var tmp0_desc = this.nck_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.size == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.size);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !equals_0(value.aspect, 0.0)) {
      tmp1_output.g14(tmp0_desc, 3, value.aspect);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.ock(encoder, value instanceof MetaOriginal ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.nck_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = 0.0;
    var tmp8_input = decoder.u12(tmp0_desc);
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b13(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b13(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp8_input.v12(tmp0_desc);
    return MetaOriginal.pck(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.nck_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), FloatSerializer_getInstance()];
  }
}
class MetaOriginal {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.size = null;
    this.aspect = 0.0;
  }
  z7d(_set____db54di) {
    this.width = _set____db54di;
  }
  a7e() {
    return this.width;
  }
  b7e(_set____db54di) {
    this.height = _set____db54di;
  }
  c7e() {
    return this.height;
  }
  qck(_set____db54di) {
    this.size = _set____db54di;
  }
  k2() {
    return this.size;
  }
  rck(_set____db54di) {
    this.aspect = _set____db54di;
  }
  sck() {
    return this.aspect;
  }
  static pck(seen0, width, height, size, aspect, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_60().nck_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.width = 0;
    else
      $this.width = width;
    if (0 === (seen0 & 2))
      $this.height = 0;
    else
      $this.height = height;
    if (0 === (seen0 & 4))
      $this.size = null;
    else
      $this.size = size;
    if (0 === (seen0 & 8))
      $this.aspect = 0.0;
    else
      $this.aspect = aspect;
    return $this;
  }
}
class Companion_62 {
  constructor() {
    Companion_instance_62 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.tck_1 = [null, null, lazy(tmp_0, Node$Companion$$childSerializers$_anonymous__chcd9k), null];
  }
}
class $serializer_61 {
  constructor() {
    $serializer_instance_61 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.node.Node', this, 4);
    tmp0_serialDesc.m1a('version', true);
    tmp0_serialDesc.m1a('software', true);
    tmp0_serialDesc.m1a('protocols', true);
    tmp0_serialDesc.m1a('openRegistrations', true);
    this.uck_1 = tmp0_serialDesc;
  }
  vck(encoder, value) {
    var tmp0_desc = this.uck_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_64().tck_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.version == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.version);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.software == null)) {
      tmp1_output.m14(tmp0_desc, 1, $serializer_getInstance_62(), value.software);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.protocols == null)) {
      tmp1_output.m14(tmp0_desc, 2, tmp2_cached[2].y2(), value.protocols);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.openRegistrations == null)) {
      tmp1_output.m14(tmp0_desc, 3, BooleanSerializer_getInstance(), value.openRegistrations);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.vck(encoder, value instanceof Node ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.uck_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.u12(tmp0_desc);
    var tmp9_cached = Companion_getInstance_64().tck_1;
    if (tmp8_input.j13()) {
      tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, $serializer_getInstance_62(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, tmp9_cached[2].y2(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.i13(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.i13(tmp0_desc, 1, $serializer_getInstance_62(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.i13(tmp0_desc, 2, tmp9_cached[2].y2(), tmp6_local2);
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
    return Node.wck(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  cy() {
    return this.uck_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_64().tck_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_62()), get_nullable(tmp0_cached[2].y2()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Node {
  constructor() {
    Companion_getInstance_64();
    this.version = null;
    this.software = null;
    this.protocols = null;
    this.openRegistrations = null;
  }
  oa3(_set____db54di) {
    this.version = _set____db54di;
  }
  n4k() {
    return this.version;
  }
  xck(_set____db54di) {
    this.software = _set____db54di;
  }
  yck() {
    return this.software;
  }
  zck(_set____db54di) {
    this.protocols = _set____db54di;
  }
  b4f() {
    return this.protocols;
  }
  y9r(_set____db54di) {
    this.openRegistrations = _set____db54di;
  }
  z9r() {
    return this.openRegistrations;
  }
  static wck(seen0, version, software, protocols, openRegistrations, serializationConstructorMarker) {
    Companion_getInstance_64();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_61().uck_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.version = null;
    else
      $this.version = version;
    if (0 === (seen0 & 2))
      $this.software = null;
    else
      $this.software = software;
    if (0 === (seen0 & 4))
      $this.protocols = null;
    else
      $this.protocols = protocols;
    if (0 === (seen0 & 8))
      $this.openRegistrations = null;
    else
      $this.openRegistrations = openRegistrations;
    return $this;
  }
}
class Companion_63 {}
class $serializer_62 {
  constructor() {
    $serializer_instance_62 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.node.NodeSoftware', this, 2);
    tmp0_serialDesc.m1a('name', true);
    tmp0_serialDesc.m1a('version', true);
    this.acl_1 = tmp0_serialDesc;
  }
  bcl(encoder, value) {
    var tmp0_desc = this.acl_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.version == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.version);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.bcl(encoder, value instanceof NodeSoftware ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.acl_1;
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
    return NodeSoftware.ccl(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.acl_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class NodeSoftware {
  constructor() {
    this.name = null;
    this.version = null;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  oa3(_set____db54di) {
    this.version = _set____db54di;
  }
  n4k() {
    return this.version;
  }
  static ccl(seen0, name, version, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_62().acl_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.version = null;
    else
      $this.version = version;
    return $this;
  }
}
class Companion_64 {
  constructor() {
    Companion_instance_64 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.dcl_1 = [lazy(tmp_0, NodeInfo$Companion$$childSerializers$_anonymous__navqe2)];
  }
}
class $serializer_63 {
  constructor() {
    $serializer_instance_63 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.nodeinfo.NodeInfo', this, 1);
    tmp0_serialDesc.m1a('links', true);
    this.ecl_1 = tmp0_serialDesc;
  }
  fcl(encoder, value) {
    var tmp0_desc = this.ecl_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_66().dcl_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.links == null)) {
      tmp1_output.m14(tmp0_desc, 0, tmp2_cached[0].y2(), value.links);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.fcl(encoder, value instanceof NodeInfo ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ecl_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.u12(tmp0_desc);
    var tmp6_cached = Companion_getInstance_66().dcl_1;
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
    return NodeInfo.gcl(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.ecl_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_66().dcl_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].y2())];
  }
}
class NodeInfo {
  constructor() {
    Companion_getInstance_66();
    this.links = null;
  }
  hcl(_set____db54di) {
    this.links = _set____db54di;
  }
  icl() {
    return this.links;
  }
  static gcl(seen0, links, serializationConstructorMarker) {
    Companion_getInstance_66();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_63().ecl_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.links = null;
    else
      $this.links = links;
    return $this;
  }
}
class Companion_65 {}
class $serializer_64 {
  constructor() {
    $serializer_instance_64 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.nodeinfo.NodeInfoLinks', this, 2);
    tmp0_serialDesc.m1a('href', true);
    tmp0_serialDesc.m1a('rel', true);
    this.jcl_1 = tmp0_serialDesc;
  }
  kcl(encoder, value) {
    var tmp0_desc = this.jcl_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.href == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.href);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.rel == null)) {
      tmp1_output.m14(tmp0_desc, 1, StringSerializer_getInstance(), value.rel);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.kcl(encoder, value instanceof NodeInfoLinks ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.jcl_1;
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
    return NodeInfoLinks.lcl(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  cy() {
    return this.jcl_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class NodeInfoLinks {
  constructor() {
    this.href = null;
    this.rel = null;
  }
  mcl(_set____db54di) {
    this.href = _set____db54di;
  }
  ncl() {
    return this.href;
  }
  ocl(_set____db54di) {
    this.rel = _set____db54di;
  }
  pcl() {
    return this.rel;
  }
  static lcl(seen0, href, rel, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_64().jcl_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.href = null;
    else
      $this.href = href;
    if (0 === (seen0 & 2))
      $this.rel = null;
    else
      $this.rel = rel;
    return $this;
  }
}
class Companion_66 {}
class $serializer_65 {
  constructor() {
    $serializer_instance_65 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaAccount', this, 16);
    tmp0_serialDesc.m1a('accepts_chat_messages', true);
    tmp0_serialDesc.m1a('allow_following_move', true);
    tmp0_serialDesc.m1a('ap_id', true);
    tmp0_serialDesc.m1a('chat_token', true);
    tmp0_serialDesc.m1a('email', true);
    tmp0_serialDesc.m1a('hide_favorites', true);
    tmp0_serialDesc.m1a('hide_followers', true);
    tmp0_serialDesc.m1a('hide_followers_count', true);
    tmp0_serialDesc.m1a('hide_follows', true);
    tmp0_serialDesc.m1a('hide_follows_count', true);
    tmp0_serialDesc.m1a('is_admin', true);
    tmp0_serialDesc.m1a('is_confirmed', true);
    tmp0_serialDesc.m1a('is_moderator', true);
    tmp0_serialDesc.m1a('skip_thread_containment', true);
    tmp0_serialDesc.m1a('unread_conversation_count', true);
    tmp0_serialDesc.m1a('unread_notifications_count', true);
    this.qcl_1 = tmp0_serialDesc;
  }
  rcl(encoder, value) {
    var tmp0_desc = this.qcl_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.isAcceptsChatMessages === false)) {
      tmp1_output.b14(tmp0_desc, 0, value.isAcceptsChatMessages);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.isAllowFollowingMove === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.isAllowFollowingMove);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.apId == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.apId);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.chatToken == null)) {
      tmp1_output.m14(tmp0_desc, 3, StringSerializer_getInstance(), value.chatToken);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.email == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.email);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.isHideFavorites === false)) {
      tmp1_output.b14(tmp0_desc, 5, value.isHideFavorites);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.isHideFollowers === false)) {
      tmp1_output.b14(tmp0_desc, 6, value.isHideFollowers);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.isHideFollowersCount === false)) {
      tmp1_output.b14(tmp0_desc, 7, value.isHideFollowersCount);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.isHideFollows === false)) {
      tmp1_output.b14(tmp0_desc, 8, value.isHideFollows);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.isHideFollowsCount === false)) {
      tmp1_output.b14(tmp0_desc, 9, value.isHideFollowsCount);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.isAdmin === false)) {
      tmp1_output.b14(tmp0_desc, 10, value.isAdmin);
    }
    if (tmp1_output.q14(tmp0_desc, 11) ? true : !(value.isConfirmed === false)) {
      tmp1_output.b14(tmp0_desc, 11, value.isConfirmed);
    }
    if (tmp1_output.q14(tmp0_desc, 12) ? true : !(value.isModerator === false)) {
      tmp1_output.b14(tmp0_desc, 12, value.isModerator);
    }
    if (tmp1_output.q14(tmp0_desc, 13) ? true : !(value.isSkipThreadContainment === false)) {
      tmp1_output.b14(tmp0_desc, 13, value.isSkipThreadContainment);
    }
    if (tmp1_output.q14(tmp0_desc, 14) ? true : !(value.unreadConversationCount === 0)) {
      tmp1_output.e14(tmp0_desc, 14, value.unreadConversationCount);
    }
    if (tmp1_output.q14(tmp0_desc, 15) ? true : !(value.unreadNotificationsCount === 0)) {
      tmp1_output.e14(tmp0_desc, 15, value.unreadNotificationsCount);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.rcl(encoder, value instanceof PleromaAccount ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.qcl_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_local6 = false;
    var tmp11_local7 = false;
    var tmp12_local8 = false;
    var tmp13_local9 = false;
    var tmp14_local10 = false;
    var tmp15_local11 = false;
    var tmp16_local12 = false;
    var tmp17_local13 = false;
    var tmp18_local14 = 0;
    var tmp19_local15 = 0;
    var tmp20_input = decoder.u12(tmp0_desc);
    if (tmp20_input.j13()) {
      tmp4_local0 = tmp20_input.w12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.w12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.i13(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.w12(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.w12(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.w12(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.w12(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.w12(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.w12(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.w12(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.w12(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.w12(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.z12(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.z12(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.w12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.w12(tmp0_desc, 1);
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
            tmp9_local5 = tmp20_input.w12(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.w12(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.w12(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.w12(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.w12(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.w12(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.w12(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.w12(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.w12(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.z12(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.z12(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp20_input.v12(tmp0_desc);
    return PleromaAccount.scl(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  cy() {
    return this.qcl_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class PleromaAccount {
  constructor() {
    this.isAcceptsChatMessages = false;
    this.isAllowFollowingMove = false;
    this.apId = null;
    this.chatToken = null;
    this.email = null;
    this.isHideFavorites = false;
    this.isHideFollowers = false;
    this.isHideFollowersCount = false;
    this.isHideFollows = false;
    this.isHideFollowsCount = false;
    this.isAdmin = false;
    this.isConfirmed = false;
    this.isModerator = false;
    this.isSkipThreadContainment = false;
    this.unreadConversationCount = 0;
    this.unreadNotificationsCount = 0;
  }
  tcl(_set____db54di) {
    this.isAcceptsChatMessages = _set____db54di;
  }
  ucl() {
    return this.isAcceptsChatMessages;
  }
  vcl(_set____db54di) {
    this.isAllowFollowingMove = _set____db54di;
  }
  wcl() {
    return this.isAllowFollowingMove;
  }
  xcl(_set____db54di) {
    this.apId = _set____db54di;
  }
  ycl() {
    return this.apId;
  }
  zcl(_set____db54di) {
    this.chatToken = _set____db54di;
  }
  acm() {
    return this.chatToken;
  }
  g6s(_set____db54di) {
    this.email = _set____db54di;
  }
  b2x() {
    return this.email;
  }
  bcm(_set____db54di) {
    this.isHideFavorites = _set____db54di;
  }
  ccm() {
    return this.isHideFavorites;
  }
  dcm(_set____db54di) {
    this.isHideFollowers = _set____db54di;
  }
  ecm() {
    return this.isHideFollowers;
  }
  fcm(_set____db54di) {
    this.isHideFollowersCount = _set____db54di;
  }
  gcm() {
    return this.isHideFollowersCount;
  }
  hcm(_set____db54di) {
    this.isHideFollows = _set____db54di;
  }
  icm() {
    return this.isHideFollows;
  }
  jcm(_set____db54di) {
    this.isHideFollowsCount = _set____db54di;
  }
  kcm() {
    return this.isHideFollowsCount;
  }
  rag(_set____db54di) {
    this.isAdmin = _set____db54di;
  }
  sag() {
    return this.isAdmin;
  }
  lcm(_set____db54di) {
    this.isConfirmed = _set____db54di;
  }
  mcm() {
    return this.isConfirmed;
  }
  pag(_set____db54di) {
    this.isModerator = _set____db54di;
  }
  qag() {
    return this.isModerator;
  }
  ncm(_set____db54di) {
    this.isSkipThreadContainment = _set____db54di;
  }
  ocm() {
    return this.isSkipThreadContainment;
  }
  pcm(_set____db54di) {
    this.unreadConversationCount = _set____db54di;
  }
  qcm() {
    return this.unreadConversationCount;
  }
  wah(_set____db54di) {
    this.unreadNotificationsCount = _set____db54di;
  }
  xah() {
    return this.unreadNotificationsCount;
  }
  static scl(seen0, isAcceptsChatMessages, isAllowFollowingMove, apId, chatToken, email, isHideFavorites, isHideFollowers, isHideFollowersCount, isHideFollows, isHideFollowsCount, isAdmin, isConfirmed, isModerator, isSkipThreadContainment, unreadConversationCount, unreadNotificationsCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_65().qcl_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.isAcceptsChatMessages = false;
    else
      $this.isAcceptsChatMessages = isAcceptsChatMessages;
    if (0 === (seen0 & 2))
      $this.isAllowFollowingMove = false;
    else
      $this.isAllowFollowingMove = isAllowFollowingMove;
    if (0 === (seen0 & 4))
      $this.apId = null;
    else
      $this.apId = apId;
    if (0 === (seen0 & 8))
      $this.chatToken = null;
    else
      $this.chatToken = chatToken;
    if (0 === (seen0 & 16))
      $this.email = null;
    else
      $this.email = email;
    if (0 === (seen0 & 32))
      $this.isHideFavorites = false;
    else
      $this.isHideFavorites = isHideFavorites;
    if (0 === (seen0 & 64))
      $this.isHideFollowers = false;
    else
      $this.isHideFollowers = isHideFollowers;
    if (0 === (seen0 & 128))
      $this.isHideFollowersCount = false;
    else
      $this.isHideFollowersCount = isHideFollowersCount;
    if (0 === (seen0 & 256))
      $this.isHideFollows = false;
    else
      $this.isHideFollows = isHideFollows;
    if (0 === (seen0 & 512))
      $this.isHideFollowsCount = false;
    else
      $this.isHideFollowsCount = isHideFollowsCount;
    if (0 === (seen0 & 1024))
      $this.isAdmin = false;
    else
      $this.isAdmin = isAdmin;
    if (0 === (seen0 & 2048))
      $this.isConfirmed = false;
    else
      $this.isConfirmed = isConfirmed;
    if (0 === (seen0 & 4096))
      $this.isModerator = false;
    else
      $this.isModerator = isModerator;
    if (0 === (seen0 & 8192))
      $this.isSkipThreadContainment = false;
    else
      $this.isSkipThreadContainment = isSkipThreadContainment;
    if (0 === (seen0 & 16384))
      $this.unreadConversationCount = 0;
    else
      $this.unreadConversationCount = unreadConversationCount;
    if (0 === (seen0 & 32768))
      $this.unreadNotificationsCount = 0;
    else
      $this.unreadNotificationsCount = unreadNotificationsCount;
    return $this;
  }
}
class Companion_67 {}
class $serializer_66 {
  constructor() {
    $serializer_instance_66 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaContent', this, 1);
    tmp0_serialDesc.m1a('text/plain', true);
    this.rcm_1 = tmp0_serialDesc;
  }
  scm(encoder, value) {
    var tmp0_desc = this.rcm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.textPlain == null)) {
      tmp1_output.m14(tmp0_desc, 0, StringSerializer_getInstance(), value.textPlain);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.scm(encoder, value instanceof PleromaContent ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.rcm_1;
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
    return PleromaContent.tcm(tmp3_bitMask0, tmp4_local0, null);
  }
  cy() {
    return this.rcm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class PleromaContent {
  constructor() {
    this.textPlain = null;
  }
  ucm(_set____db54di) {
    this.textPlain = _set____db54di;
  }
  vcm() {
    return this.textPlain;
  }
  static tcm(seen0, textPlain, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_66().rcm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.textPlain = null;
    else
      $this.textPlain = textPlain;
    return $this;
  }
}
class Companion_68 {}
class $serializer_67 {
  constructor() {
    $serializer_instance_67 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaReaction', this, 3);
    tmp0_serialDesc.m1a('count', true);
    tmp0_serialDesc.m1a('me', true);
    tmp0_serialDesc.m1a('name', true);
    this.wcm_1 = tmp0_serialDesc;
  }
  xcm(encoder, value) {
    var tmp0_desc = this.wcm_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.count === 0)) {
      tmp1_output.e14(tmp0_desc, 0, value.count);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.isMe === false)) {
      tmp1_output.b14(tmp0_desc, 1, value.isMe);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.xcm(encoder, value instanceof PleromaReaction ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.wcm_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.u12(tmp0_desc);
    if (tmp7_input.j13()) {
      tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.w12(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.z12(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.w12(tmp0_desc, 1);
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
    return PleromaReaction.ycm(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  cy() {
    return this.wcm_1;
  }
  c1b() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class PleromaReaction {
  constructor() {
    this.count = 0;
    this.isMe = false;
    this.name = null;
  }
  n3b(_set____db54di) {
    this.count = _set____db54di;
  }
  u33() {
    return this.count;
  }
  zcm(_set____db54di) {
    this.isMe = _set____db54di;
  }
  acn() {
    return this.isMe;
  }
  r31(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  static ycm(seen0, count, isMe, name, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_67().wcm_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.count = 0;
    else
      $this.count = count;
    if (0 === (seen0 & 2))
      $this.isMe = false;
    else
      $this.isMe = isMe;
    if (0 === (seen0 & 4))
      $this.name = null;
    else
      $this.name = name;
    return $this;
  }
}
class Companion_69 {
  constructor() {
    Companion_instance_69 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bcn_1 = [null, null, null, lazy(tmp_0, PleromaStatus$Companion$$childSerializers$_anonymous__dsf7q6), null, null, null, null, null, null, null];
  }
}
class $serializer_68 {
  constructor() {
    $serializer_instance_68 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmastodon.entity.services.pleroma.PleromaStatus', this, 11);
    tmp0_serialDesc.m1a('content', true);
    tmp0_serialDesc.m1a('conversation_id', true);
    tmp0_serialDesc.m1a('direct_conversation_id', true);
    tmp0_serialDesc.m1a('emoji_reactions', true);
    tmp0_serialDesc.m1a('expires_at', true);
    tmp0_serialDesc.m1a('in_reply_to_account_acct', true);
    tmp0_serialDesc.m1a('local', true);
    tmp0_serialDesc.m1a('parent_visible', true);
    tmp0_serialDesc.m1a('pinned_at', true);
    tmp0_serialDesc.m1a('spoiler_text', true);
    tmp0_serialDesc.m1a('thread_muted', true);
    this.ccn_1 = tmp0_serialDesc;
  }
  dcn(encoder, value) {
    var tmp0_desc = this.ccn_1;
    var tmp1_output = encoder.u12(tmp0_desc);
    var tmp2_cached = Companion_getInstance_71().bcn_1;
    if (tmp1_output.q14(tmp0_desc, 0) ? true : !(value.content == null)) {
      tmp1_output.m14(tmp0_desc, 0, $serializer_getInstance_66(), value.content);
    }
    if (tmp1_output.q14(tmp0_desc, 1) ? true : !(value.conversationId === 0)) {
      tmp1_output.e14(tmp0_desc, 1, value.conversationId);
    }
    if (tmp1_output.q14(tmp0_desc, 2) ? true : !(value.directConversationId == null)) {
      tmp1_output.m14(tmp0_desc, 2, StringSerializer_getInstance(), value.directConversationId);
    }
    if (tmp1_output.q14(tmp0_desc, 3) ? true : !(value.emojiReactions == null)) {
      tmp1_output.m14(tmp0_desc, 3, tmp2_cached[3].y2(), value.emojiReactions);
    }
    if (tmp1_output.q14(tmp0_desc, 4) ? true : !(value.expiresAt == null)) {
      tmp1_output.m14(tmp0_desc, 4, StringSerializer_getInstance(), value.expiresAt);
    }
    if (tmp1_output.q14(tmp0_desc, 5) ? true : !(value.inReplyToAccountAcct == null)) {
      tmp1_output.m14(tmp0_desc, 5, StringSerializer_getInstance(), value.inReplyToAccountAcct);
    }
    if (tmp1_output.q14(tmp0_desc, 6) ? true : !(value.isLocal === false)) {
      tmp1_output.b14(tmp0_desc, 6, value.isLocal);
    }
    if (tmp1_output.q14(tmp0_desc, 7) ? true : !(value.isParentVisible === false)) {
      tmp1_output.b14(tmp0_desc, 7, value.isParentVisible);
    }
    if (tmp1_output.q14(tmp0_desc, 8) ? true : !(value.pinnedAt == null)) {
      tmp1_output.m14(tmp0_desc, 8, StringSerializer_getInstance(), value.pinnedAt);
    }
    if (tmp1_output.q14(tmp0_desc, 9) ? true : !(value.spoilerText == null)) {
      tmp1_output.m14(tmp0_desc, 9, $serializer_getInstance_66(), value.spoilerText);
    }
    if (tmp1_output.q14(tmp0_desc, 10) ? true : !(value.isThreadMuted === false)) {
      tmp1_output.b14(tmp0_desc, 10, value.isThreadMuted);
    }
    tmp1_output.v12(tmp0_desc);
  }
  py(encoder, value) {
    return this.dcn(encoder, value instanceof PleromaStatus ? value : THROW_CCE());
  }
  qy(decoder) {
    var tmp0_desc = this.ccn_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = false;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = false;
    var tmp15_input = decoder.u12(tmp0_desc);
    var tmp16_cached = Companion_getInstance_71().bcn_1;
    if (tmp15_input.j13()) {
      tmp4_local0 = tmp15_input.i13(tmp0_desc, 0, $serializer_getInstance_66(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.z12(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.i13(tmp0_desc, 3, tmp16_cached[3].y2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.w12(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.w12(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.i13(tmp0_desc, 9, $serializer_getInstance_66(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.w12(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.k13(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.i13(tmp0_desc, 0, $serializer_getInstance_66(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.z12(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.i13(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.i13(tmp0_desc, 3, tmp16_cached[3].y2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.i13(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.i13(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.w12(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.w12(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.i13(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.i13(tmp0_desc, 9, $serializer_getInstance_66(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.w12(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException.e10(tmp2_index);
        }
      }
    tmp15_input.v12(tmp0_desc);
    return PleromaStatus.ecn(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  }
  cy() {
    return this.ccn_1;
  }
  c1b() {
    var tmp0_cached = Companion_getInstance_71().bcn_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_66()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].y2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_66()), BooleanSerializer_getInstance()];
  }
}
class PleromaStatus {
  constructor() {
    Companion_getInstance_71();
    this.content = null;
    this.conversationId = 0;
    this.directConversationId = null;
    this.emojiReactions = null;
    this.expiresAt = null;
    this.inReplyToAccountAcct = null;
    this.isLocal = false;
    this.isParentVisible = false;
    this.pinnedAt = null;
    this.spoilerText = null;
    this.isThreadMuted = false;
  }
  fcn(_set____db54di) {
    this.content = _set____db54di;
  }
  x1n() {
    return this.content;
  }
  gcn(_set____db54di) {
    this.conversationId = _set____db54di;
  }
  hcn() {
    return this.conversationId;
  }
  icn(_set____db54di) {
    this.directConversationId = _set____db54di;
  }
  jcn() {
    return this.directConversationId;
  }
  kcn(_set____db54di) {
    this.emojiReactions = _set____db54di;
  }
  lcn() {
    return this.emojiReactions;
  }
  uaa(_set____db54di) {
    this.expiresAt = _set____db54di;
  }
  a8y() {
    return this.expiresAt;
  }
  mcn(_set____db54di) {
    this.inReplyToAccountAcct = _set____db54di;
  }
  ncn() {
    return this.inReplyToAccountAcct;
  }
  ocn(_set____db54di) {
    this.isLocal = _set____db54di;
  }
  pcn() {
    return this.isLocal;
  }
  qcn(_set____db54di) {
    this.isParentVisible = _set____db54di;
  }
  rcn() {
    return this.isParentVisible;
  }
  scn(_set____db54di) {
    this.pinnedAt = _set____db54di;
  }
  tcn() {
    return this.pinnedAt;
  }
  ucn(_set____db54di) {
    this.spoilerText = _set____db54di;
  }
  cbn() {
    return this.spoilerText;
  }
  vcn(_set____db54di) {
    this.isThreadMuted = _set____db54di;
  }
  wcn() {
    return this.isThreadMuted;
  }
  static ecn(seen0, content, conversationId, directConversationId, emojiReactions, expiresAt, inReplyToAccountAcct, isLocal, isParentVisible, pinnedAt, spoilerText, isThreadMuted, serializationConstructorMarker) {
    Companion_getInstance_71();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_68().ccn_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.conversationId = 0;
    else
      $this.conversationId = conversationId;
    if (0 === (seen0 & 4))
      $this.directConversationId = null;
    else
      $this.directConversationId = directConversationId;
    if (0 === (seen0 & 8))
      $this.emojiReactions = null;
    else
      $this.emojiReactions = emojiReactions;
    if (0 === (seen0 & 16))
      $this.expiresAt = null;
    else
      $this.expiresAt = expiresAt;
    if (0 === (seen0 & 32))
      $this.inReplyToAccountAcct = null;
    else
      $this.inReplyToAccountAcct = inReplyToAccountAcct;
    if (0 === (seen0 & 64))
      $this.isLocal = false;
    else
      $this.isLocal = isLocal;
    if (0 === (seen0 & 128))
      $this.isParentVisible = false;
    else
      $this.isParentVisible = isParentVisible;
    if (0 === (seen0 & 256))
      $this.pinnedAt = null;
    else
      $this.pinnedAt = pinnedAt;
    if (0 === (seen0 & 512))
      $this.spoilerText = null;
    else
      $this.spoilerText = spoilerText;
    if (0 === (seen0 & 1024))
      $this.isThreadMuted = false;
    else
      $this.isThreadMuted = isThreadMuted;
    return $this;
  }
}
class Companion_70 {
  constructor() {
    this.xcn_1 = 'link';
  }
  of(response) {
    try {
      var header = response.e55_1.p4('link');
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      if (header == null || header.j1()) {
        return null;
      }
      var tmp0 = header.m2(0);
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.text.split' call
      var tmp0_0 = Regex.wh(',\\s?').ji(tmp0, 0);
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.collections.dropLastWhile' call
        if (!tmp0_0.j1()) {
          var iterator = tmp0_0.p2(tmp0_0.k2());
          while (iterator.o7()) {
            // Inline function 'kotlin.text.isEmpty' call
            var this_0 = iterator.q7();
            if (!(charSequenceLength(this_0) === 0)) {
              tmp$ret$3 = take(tmp0_0, iterator.p7() + 1 | 0);
              break $l$block;
            }
          }
        }
        tmp$ret$3 = emptyList();
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = tmp$ret$3;
      var parts = copyToArray(this_1);
      var link = new Link();
      var inductionVariable = 0;
      var last = parts.length;
      while (inductionVariable < last) {
        var part = parts[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.text.toRegex' call
        // Inline function 'kotlin.text.split' call
        var tmp0_1 = Regex.wh(';\\s?').ji(part, 0);
        var tmp$ret$9;
        $l$block_0: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          if (!tmp0_1.j1()) {
            var iterator_0 = tmp0_1.p2(tmp0_1.k2());
            while (iterator_0.o7()) {
              // Inline function 'kotlin.text.isEmpty' call
              var this_2 = iterator_0.q7();
              if (!(charSequenceLength(this_2) === 0)) {
                tmp$ret$9 = take(tmp0_1, iterator_0.p7() + 1 | 0);
                break $l$block_0;
              }
            }
          }
          tmp$ret$9 = emptyList();
        }
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_3 = tmp$ret$9;
        var elements = copyToArray(this_3);
        if (elements.length === 2) {
          if (contains(elements[1], 'next')) {
            var url = extractUrl(this, elements[0]);
            // Inline function 'kotlin.text.isNotEmpty' call
            if (charSequenceLength(url) > 0) {
              link.nextUrl = url;
              link.nextMaxId = extractValue(this, url, 'max_id');
            }
          } else if (contains(elements[1], 'prev')) {
            var url_0 = extractUrl(this, elements[0]);
            // Inline function 'kotlin.text.isNotEmpty' call
            if (charSequenceLength(url_0) > 0) {
              link.prevUrl = url_0;
              link.prevMinId = extractValue(this, url_0, 'min_id');
            }
          }
        }
      }
      return link;
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
class Link {
  constructor() {
    this.nextUrl = null;
    this.prevUrl = null;
    this.nextMaxId = null;
    this.prevMinId = null;
  }
  ycn(_set____db54di) {
    this.nextUrl = _set____db54di;
  }
  zcn() {
    return this.nextUrl;
  }
  aco(_set____db54di) {
    this.prevUrl = _set____db54di;
  }
  bco() {
    return this.prevUrl;
  }
  cco(_set____db54di) {
    this.nextMaxId = _set____db54di;
  }
  dco() {
    return this.nextMaxId;
  }
  eco(_set____db54di) {
    this.prevMinId = _set____db54di;
  }
  fco() {
    return this.prevMinId;
  }
}
class Companion_71 {
  constructor() {
    this.gco_1 = 'X-RateLimit-Limit';
    this.hco_1 = 'X-RateLimit-Remaining';
    this.ico_1 = 'X-RateLimit-Reset';
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
class Companion_72 {
  constructor() {
    this.kco_1 = 50;
  }
}
class AbstractResourceImpl {
  constructor(uri) {
    this.pco_1 = uri;
  }
  qco(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.w54(key, value);
    }
    return _this__u8e3s4;
  }
  rco(_this__u8e3s4, key, values) {
    if (values == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = values.length;
      while (inductionVariable < last) {
        var element = values[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = key + '[]';
        _this__u8e3s4.w54(tmp, !(element == null) ? element : THROW_CCE());
      }
    }
    return _this__u8e3s4;
  }
  sco(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.u54(key, value);
    }
    return _this__u8e3s4;
  }
  tco(_this__u8e3s4, key, values) {
    if (values == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = values.length;
      while (inductionVariable < last) {
        var element = values[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = key + '[]';
        _this__u8e3s4.u54(tmp, !(element == null) ? element : THROW_CCE());
      }
    }
    return _this__u8e3s4;
  }
  uco(_this__u8e3s4, range, service) {
    if (!(range == null)) {
      var tmp0_safe_receiver = range.limit;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var limit = tmp0_safe_receiver;
        if (service === Service_PIXELFED_getInstance() && limit > 50)
          limit = 50;
        _this__u8e3s4.u54('limit', limit);
      }
      var tmp1_safe_receiver = range.sinceId;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.u54('since_id', tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = range.maxId;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.u54('max_id', tmp2_safe_receiver);
      }
      var tmp3_safe_receiver = range.minId;
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.u54('min_id', tmp3_safe_receiver);
      }
    }
    return _this__u8e3s4;
  }
}
class AbstractAuthResourceImpl extends AbstractResourceImpl {
  constructor(uri, accessToken, service) {
    var tmp;
    if (service === VOID) {
      tmp = AbstractAuthResourceImpl$_init_$lambda_a1qsz;
    } else {
      tmp = service;
    }
    service = tmp;
    super(uri);
    this.mco_1 = accessToken;
    this.nco_1 = service;
  }
  oco() {
    return 'Bearer ' + this.mco_1;
  }
}
class AccountsResourceImpl$verifyCredentialsBlocking$slambda {
  constructor(this$0) {
    this.vco_1 = this$0;
  }
  *wco($this$toBlocking, $completion) {
    return yield* this.vco_1.dbo($completion);
  }
  wd(p1, $completion) {
    return this.wco((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$updateCredentialsBlocking$slambda {
  constructor(this$0, $request) {
    this.xco_1 = this$0;
    this.yco_1 = $request;
  }
  *wco($this$toBlocking, $completion) {
    return yield* this.xco_1.sbo(this.yco_1, $completion);
  }
  wd(p1, $completion) {
    return this.wco((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$accountBlocking$slambda {
  constructor(this$0, $request) {
    this.zco_1 = this$0;
    this.acp_1 = $request;
  }
  *wco($this$toBlocking, $completion) {
    return yield* this.zco_1.ebo(this.acp_1, $completion);
  }
  wd(p1, $completion) {
    return this.wco((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$followersBlocking$slambda {
  constructor(this$0, $request) {
    this.bcp_1 = this$0;
    this.ccp_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.bcp_1.fbo(this.ccp_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$followingBlocking$slambda {
  constructor(this$0, $request) {
    this.ecp_1 = this$0;
    this.fcp_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.ecp_1.gbo(this.fcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$statusesBlocking$slambda {
  constructor(this$0, $request) {
    this.gcp_1 = this$0;
    this.hcp_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.gcp_1.hbo(this.hcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$followBlocking$slambda {
  constructor(this$0, $request) {
    this.jcp_1 = this$0;
    this.kcp_1 = $request;
  }
  *lcp($this$toBlocking, $completion) {
    return yield* this.jcp_1.ibo(this.kcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$unfollowBlocking$slambda {
  constructor(this$0, $request) {
    this.mcp_1 = this$0;
    this.ncp_1 = $request;
  }
  *lcp($this$toBlocking, $completion) {
    return yield* this.mcp_1.jbo(this.ncp_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$blockBlocking$slambda {
  constructor(this$0, $request) {
    this.ocp_1 = this$0;
    this.pcp_1 = $request;
  }
  *lcp($this$toBlocking, $completion) {
    return yield* this.ocp_1.kbo(this.pcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$unblockBlocking$slambda {
  constructor(this$0, $request) {
    this.qcp_1 = this$0;
    this.rcp_1 = $request;
  }
  *lcp($this$toBlocking, $completion) {
    return yield* this.qcp_1.lbo(this.rcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$muteBlocking$slambda {
  constructor(this$0, $request) {
    this.scp_1 = this$0;
    this.tcp_1 = $request;
  }
  *lcp($this$toBlocking, $completion) {
    return yield* this.scp_1.mbo(this.tcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$unmuteBlocking$slambda {
  constructor(this$0, $request) {
    this.ucp_1 = this$0;
    this.vcp_1 = $request;
  }
  *lcp($this$toBlocking, $completion) {
    return yield* this.ucp_1.nbo(this.vcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$relationshipsBlocking$slambda {
  constructor(this$0, $request) {
    this.wcp_1 = this$0;
    this.xcp_1 = $request;
  }
  *ycp($this$toBlocking, $completion) {
    return yield* this.wcp_1.obo(this.xcp_1, $completion);
  }
  wd(p1, $completion) {
    return this.ycp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$searchBlocking$slambda {
  constructor(this$0, $request) {
    this.zcp_1 = this$0;
    this.acq_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.zcp_1.rbp(this.acq_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl extends AbstractAuthResourceImpl {
  *pbo($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/verify_credentials').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  verifyCredentials() {
    return promisify(($completion) => this.pbo($completion));
  }
  *dbo($completion) {
    return this.verifyCredentials === protoOf(AccountsResourceImpl).verifyCredentials ? (yield* this.pbo($completion)) : (yield* await_0(this.verifyCredentials(), $completion));
  }
  qbo() {
    return toBlocking(AccountsResourceImpl$verifyCredentialsBlocking$slambda_0(this));
  }
  *rbo(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco(this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/update_credentials').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'display_name', request.displayName), 'note', request.note), 'avatar', request.avatar), 'header', request.header).c55($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  updateCredentials(request) {
    return promisify(($completion) => this.rbo(request, $completion));
  }
  *sbo(request, $completion) {
    return this.updateCredentials === protoOf(AccountsResourceImpl).updateCredentials ? (yield* this.rbo(request, $completion)) : (yield* await_0(this.updateCredentials(request), $completion));
  }
  tbo(request) {
    return toBlocking(AccountsResourceImpl$updateCredentialsBlocking$slambda_0(this, request));
  }
  *ubo(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  account(request) {
    return promisify(($completion) => this.ubo(request, $completion));
  }
  *ebo(request, $completion) {
    return this.account === protoOf(AccountsResourceImpl).account ? (yield* this.ubo(request, $completion)) : (yield* await_0(this.account(request), $completion));
  }
  vbo(request) {
    return toBlocking(AccountsResourceImpl$accountBlocking$slambda_0(this, request));
  }
  *wbo(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/followers').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  followers(request) {
    return promisify(($completion) => this.wbo(request, $completion));
  }
  *fbo(request, $completion) {
    return this.followers === protoOf(AccountsResourceImpl).followers ? (yield* this.wbo(request, $completion)) : (yield* await_0(this.followers(request), $completion));
  }
  xbo(request) {
    return toBlocking(AccountsResourceImpl$followersBlocking$slambda_0(this, request));
  }
  *ybo(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/following').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  following(request) {
    return promisify(($completion) => this.ybo(request, $completion));
  }
  *gbo(request, $completion) {
    return this.following === protoOf(AccountsResourceImpl).following ? (yield* this.ybo(request, $completion)) : (yield* await_0(this.following(request), $completion));
  }
  zbo(request) {
    return toBlocking(AccountsResourceImpl$followingBlocking$slambda_0(this, request));
  }
  *abp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco(this.sco(this.sco(this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/statuses').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()), 'only_media', request.onlyMedia), 'pinned', request.onlyPinned), 'exclude_replies', request.excludeReplies), 'exclude_reblogs', request.excludeReblogs).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  statuses(request) {
    return promisify(($completion) => this.abp(request, $completion));
  }
  *hbo(request, $completion) {
    return this.statuses === protoOf(AccountsResourceImpl).statuses ? (yield* this.abp(request, $completion)) : (yield* await_0(this.statuses(request), $completion));
  }
  bbp(request) {
    return toBlocking(AccountsResourceImpl$statusesBlocking$slambda_0(this, request));
  }
  *cbp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/follow').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  follow(request) {
    return promisify(($completion) => this.cbp(request, $completion));
  }
  *ibo(request, $completion) {
    return this.follow === protoOf(AccountsResourceImpl).follow ? (yield* this.cbp(request, $completion)) : (yield* await_0(this.follow(request), $completion));
  }
  dbp(request) {
    return toBlocking(AccountsResourceImpl$followBlocking$slambda_0(this, request));
  }
  *ebp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/unfollow').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unfollow(request) {
    return promisify(($completion) => this.ebp(request, $completion));
  }
  *jbo(request, $completion) {
    return this.unfollow === protoOf(AccountsResourceImpl).unfollow ? (yield* this.ebp(request, $completion)) : (yield* await_0(this.unfollow(request), $completion));
  }
  fbp(request) {
    return toBlocking(AccountsResourceImpl$unfollowBlocking$slambda_0(this, request));
  }
  *gbp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/block').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  block(request) {
    return promisify(($completion) => this.gbp(request, $completion));
  }
  *kbo(request, $completion) {
    return this.block === protoOf(AccountsResourceImpl).block ? (yield* this.gbp(request, $completion)) : (yield* await_0(this.block(request), $completion));
  }
  hbp(request) {
    return toBlocking(AccountsResourceImpl$blockBlocking$slambda_0(this, request));
  }
  *ibp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/unblock').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unblock(request) {
    return promisify(($completion) => this.ibp(request, $completion));
  }
  *lbo(request, $completion) {
    return this.unblock === protoOf(AccountsResourceImpl).unblock ? (yield* this.ibp(request, $completion)) : (yield* await_0(this.unblock(request), $completion));
  }
  jbp(request) {
    return toBlocking(AccountsResourceImpl$unblockBlocking$slambda_0(this, request));
  }
  *kbp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/mute').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  mute(request) {
    return promisify(($completion) => this.kbp(request, $completion));
  }
  *mbo(request, $completion) {
    return this.mute === protoOf(AccountsResourceImpl).mute ? (yield* this.kbp(request, $completion)) : (yield* await_0(this.mute(request), $completion));
  }
  lbp(request) {
    return toBlocking(AccountsResourceImpl$muteBlocking$slambda_0(this, request));
  }
  *mbp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/unmute').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Relationship), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unmute(request) {
    return promisify(($completion) => this.mbp(request, $completion));
  }
  *nbo(request, $completion) {
    return this.unmute === protoOf(AccountsResourceImpl).unmute ? (yield* this.mbp(request, $completion)) : (yield* await_0(this.unmute(request), $completion));
  }
  nbp(request) {
    return toBlocking(AccountsResourceImpl$unmuteBlocking$slambda_0(this, request));
  }
  *obp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.tco((new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/relationships').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'id', request.ids).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Relationship), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  relationships(request) {
    return promisify(($completion) => this.obp(request, $completion));
  }
  *obo(request, $completion) {
    return this.relationships === protoOf(AccountsResourceImpl).relationships ? (yield* this.obp(request, $completion)) : (yield* await_0(this.relationships(request), $completion));
  }
  pbp(request) {
    return toBlocking(AccountsResourceImpl$relationshipsBlocking$slambda_0(this, request));
  }
  *qbp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco(this.sco((new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/search').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'q', request.query), 'limit', request.limit).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  search(request) {
    return promisify(($completion) => this.qbp(request, $completion));
  }
  *rbp(request, $completion) {
    return this.search === protoOf(AccountsResourceImpl).search ? (yield* this.qbp(request, $completion)) : (yield* await_0(this.search(request), $completion));
  }
  sbp(request) {
    return toBlocking(AccountsResourceImpl$searchBlocking$slambda_0(this, request));
  }
}
class AppsResourceImpl$registerApplicationBlocking$slambda {
  constructor(this$0, $request) {
    this.gcq_1 = this$0;
    this.hcq_1 = $request;
  }
  *icq($this$toBlocking, $completion) {
    return yield* this.gcq_1.tbp(this.hcq_1, $completion);
  }
  wd(p1, $completion) {
    return this.icq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AppsResourceImpl extends AbstractResourceImpl {
  *ubp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco(this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/apps').o54(MediaType_getInstance().ecq_1), 'client_name', request.name), 'redirect_uris', request.redirectUris), 'scopes', request.scopes), 'website', request.website).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ClientCredential), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  registerApplication(request) {
    return promisify(($completion) => this.ubp(request, $completion));
  }
  *tbp(request, $completion) {
    return this.registerApplication === protoOf(AppsResourceImpl).registerApplication ? (yield* this.ubp(request, $completion)) : (yield* await_0(this.registerApplication(request), $completion));
  }
  vbp(request) {
    return toBlocking(AppsResourceImpl$registerApplicationBlocking$slambda_0(this, request));
  }
}
class BlocksResourceImpl$blocksBlocking$slambda {
  constructor(this$0, $request) {
    this.kcq_1 = this$0;
    this.lcq_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.kcq_1.xbp(this.lcq_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BlocksResourceImpl extends AbstractAuthResourceImpl {
  *wbp(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/blocks').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  blocks(request) {
    return promisify(($completion) => this.wbp(request, $completion));
  }
  *xbp(request, $completion) {
    return this.blocks === protoOf(BlocksResourceImpl).blocks ? (yield* this.wbp(request, $completion)) : (yield* await_0(this.blocks(request), $completion));
  }
  ybp(request) {
    return toBlocking(BlocksResourceImpl$blocksBlocking$slambda_0(this, request));
  }
}
class BookmarksResourceImpl$bookmarksBlocking$slambda {
  constructor(this$0, $request) {
    this.pcq_1 = this$0;
    this.qcq_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.pcq_1.zbp(this.qcq_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BookmarksResourceImpl$unbookmarkBlocking$slambda {
  constructor(this$0, $request) {
    this.rcq_1 = this$0;
    this.scq_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.rcq_1.abq(this.scq_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class BookmarksResourceImpl extends AbstractAuthResourceImpl {
  *bbq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/bookmarks').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  bookmarks(request) {
    return promisify(($completion) => this.bbq(request, $completion));
  }
  *zbp(request, $completion) {
    return this.bookmarks === protoOf(BookmarksResourceImpl).bookmarks ? (yield* this.bbq(request, $completion)) : (yield* await_0(this.bookmarks(request), $completion));
  }
  cbq(request) {
    return toBlocking(BookmarksResourceImpl$bookmarksBlocking$slambda_0(this, request));
  }
  *dbq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/unbookmark').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unbookmark(request) {
    return promisify(($completion) => this.dbq(request, $completion));
  }
  *abq(request, $completion) {
    return this.unbookmark === protoOf(BookmarksResourceImpl).unbookmark ? (yield* this.dbq(request, $completion)) : (yield* await_0(this.unbookmark(request), $completion));
  }
  ebq(request) {
    return toBlocking(BookmarksResourceImpl$unbookmarkBlocking$slambda_0(this, request));
  }
}
class DomainBlocksResourceImpl$domainBlocksBlocking$slambda {
  constructor(this$0, $request) {
    this.xcq_1 = this$0;
    this.ycq_1 = $request;
  }
  *zcq($this$toBlocking, $completion) {
    return yield* this.xcq_1.fbq(this.ycq_1, $completion);
  }
  wd(p1, $completion) {
    return this.zcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DomainBlocksResourceImpl$blockDomainBlocking$slambda {
  constructor(this$0, $request) {
    this.acr_1 = this$0;
    this.bcr_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.acr_1.gbq(this.bcr_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DomainBlocksResourceImpl$unblockDomainBlocking$slambda {
  constructor(this$0, $request) {
    this.dcr_1 = this$0;
    this.ecr_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.dcr_1.hbq(this.ecr_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DomainBlocksResourceImpl extends AbstractAuthResourceImpl {
  *ibq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/domain_blocks').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lg(), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  domainBlocks(request) {
    return promisify(($completion) => this.ibq(request, $completion));
  }
  *fbq(request, $completion) {
    return this.domainBlocks === protoOf(DomainBlocksResourceImpl).domainBlocks ? (yield* this.ibq(request, $completion)) : (yield* await_0(this.domainBlocks(request), $completion));
  }
  jbq(request) {
    return toBlocking(DomainBlocksResourceImpl$domainBlocksBlocking$slambda_0(this, request));
  }
  *kbq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/domain_blocks').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'domain', request.domain).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  blockDomain(request) {
    return promisify(($completion) => this.kbq(request, $completion));
  }
  *gbq(request, $completion) {
    return this.blockDomain === protoOf(DomainBlocksResourceImpl).blockDomain ? (yield* this.kbq(request, $completion)) : (yield* await_0(this.blockDomain(request), $completion));
  }
  lbq(request) {
    return toBlocking(DomainBlocksResourceImpl$blockDomainBlocking$slambda_0(this, request));
  }
  *mbq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/domain_blocks').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'domain', request.domain).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unblockDomain(request) {
    return promisify(($completion) => this.mbq(request, $completion));
  }
  *hbq(request, $completion) {
    return this.unblockDomain === protoOf(DomainBlocksResourceImpl).unblockDomain ? (yield* this.mbq(request, $completion)) : (yield* await_0(this.unblockDomain(request), $completion));
  }
  nbq(request) {
    return toBlocking(DomainBlocksResourceImpl$unblockDomainBlocking$slambda_0(this, request));
  }
}
class EmojisResourceImpl$customEmojisBlocking$slambda {
  constructor(this$0) {
    this.icr_1 = this$0;
  }
  *jcr($this$toBlocking, $completion) {
    return yield* this.icr_1.obq($completion);
  }
  wd(p1, $completion) {
    return this.jcr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class EmojisResourceImpl extends AbstractResourceImpl {
  *pbq($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/custom_emojis').o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Emoji), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  customEmojis() {
    return promisify(($completion) => this.pbq($completion));
  }
  *obq($completion) {
    return this.customEmojis === protoOf(EmojisResourceImpl).customEmojis ? (yield* this.pbq($completion)) : (yield* await_0(this.customEmojis(), $completion));
  }
  qbq() {
    return toBlocking(EmojisResourceImpl$customEmojisBlocking$slambda_0(this));
  }
}
class FavouritesResourceImpl$favouritesBlocking$slambda {
  constructor(this$0, $request) {
    this.lcr_1 = this$0;
    this.mcr_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.lcr_1.rbq(this.mcr_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FavouritesResourceImpl extends AbstractAuthResourceImpl {
  *sbq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/favourites').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  favourites(request) {
    return promisify(($completion) => this.sbq(request, $completion));
  }
  *rbq(request, $completion) {
    return this.favourites === protoOf(FavouritesResourceImpl).favourites ? (yield* this.sbq(request, $completion)) : (yield* await_0(this.favourites(request), $completion));
  }
  tbq(request) {
    return toBlocking(FavouritesResourceImpl$favouritesBlocking$slambda_0(this, request));
  }
}
class FollowRequestsResourceImpl$followRequestsBlocking$slambda {
  constructor(this$0) {
    this.qcr_1 = this$0;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.qcr_1.vbq($completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowRequestsResourceImpl$authorizeFollowRequestBlocking$slambda {
  constructor(this$0, $request) {
    this.rcr_1 = this$0;
    this.scr_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.rcr_1.ybq(this.scr_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowRequestsResourceImpl$rejectFollowRequestBlocking$slambda {
  constructor(this$0, $request) {
    this.tcr_1 = this$0;
    this.ucr_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.tcr_1.bbr(this.ucr_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowRequestsResourceImpl extends AbstractAuthResourceImpl {
  *ubq($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/follow_requests').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  followRequests() {
    return promisify(($completion) => this.ubq($completion));
  }
  *vbq($completion) {
    return this.followRequests === protoOf(FollowRequestsResourceImpl).followRequests ? (yield* this.ubq($completion)) : (yield* await_0(this.followRequests(), $completion));
  }
  wbq() {
    return toBlocking(FollowRequestsResourceImpl$followRequestsBlocking$slambda_0(this));
  }
  *xbq(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/follow_requests/' + request.id + '/authorize').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  authorizeFollowRequest(request) {
    return promisify(($completion) => this.xbq(request, $completion));
  }
  *ybq(request, $completion) {
    return this.authorizeFollowRequest === protoOf(FollowRequestsResourceImpl).authorizeFollowRequest ? (yield* this.xbq(request, $completion)) : (yield* await_0(this.authorizeFollowRequest(request), $completion));
  }
  zbq(request) {
    return toBlocking(FollowRequestsResourceImpl$authorizeFollowRequestBlocking$slambda_0(this, request));
  }
  *abr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/follow_requests/' + request.id + '/reject').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  rejectFollowRequest(request) {
    return promisify(($completion) => this.abr(request, $completion));
  }
  *bbr(request, $completion) {
    return this.rejectFollowRequest === protoOf(FollowRequestsResourceImpl).rejectFollowRequest ? (yield* this.abr(request, $completion)) : (yield* await_0(this.rejectFollowRequest(request), $completion));
  }
  cbr(request) {
    return toBlocking(FollowRequestsResourceImpl$rejectFollowRequestBlocking$slambda_0(this, request));
  }
}
class FollowsResourceImpl$remoteFollowBlocking$slambda {
  constructor(this$0, $request) {
    this.ycr_1 = this$0;
    this.zcr_1 = $request;
  }
  *wco($this$toBlocking, $completion) {
    return yield* this.ycr_1.ebr(this.zcr_1, $completion);
  }
  wd(p1, $completion) {
    return this.wco((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FollowsResourceImpl extends AbstractAuthResourceImpl {
  *dbr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/follow_requests').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'uri', request.uri).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Account), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  remoteFollow(request) {
    return promisify(($completion) => this.dbr(request, $completion));
  }
  *ebr(request, $completion) {
    return this.remoteFollow === protoOf(FollowsResourceImpl).remoteFollow ? (yield* this.dbr(request, $completion)) : (yield* await_0(this.remoteFollow(request), $completion));
  }
  fbr(request) {
    return toBlocking(FollowsResourceImpl$remoteFollowBlocking$slambda_0(this, request));
  }
}
class InstancesResourceImpl$instanceV1Blocking$slambda {
  constructor(this$0) {
    this.dcs_1 = this$0;
  }
  *ecs($this$toBlocking, $completion) {
    return yield* this.dcs_1.hbr($completion);
  }
  wd(p1, $completion) {
    return this.ecs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class InstancesResourceImpl$instanceV2Blocking$slambda {
  constructor(this$0) {
    this.fcs_1 = this$0;
  }
  *gcs($this$toBlocking, $completion) {
    return yield* this.fcs_1.kbr($completion);
  }
  wd(p1, $completion) {
    return this.gcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class InstancesResourceImpl extends AbstractResourceImpl {
  *gbr($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/instance').o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(InstanceV1), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  instanceV1() {
    return promisify(($completion) => this.gbr($completion));
  }
  *hbr($completion) {
    return this.instanceV1 === protoOf(InstancesResourceImpl).instanceV1 ? (yield* this.gbr($completion)) : (yield* await_0(this.instanceV1(), $completion));
  }
  ibr() {
    return toBlocking(InstancesResourceImpl$instanceV1Blocking$slambda_0(this));
  }
  *jbr($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v2/instance').o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(InstanceV2), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  instanceV2() {
    return promisify(($completion) => this.jbr($completion));
  }
  *kbr($completion) {
    return this.instanceV2 === protoOf(InstancesResourceImpl).instanceV2 ? (yield* this.jbr($completion)) : (yield* await_0(this.instanceV2(), $completion));
  }
  lbr() {
    return toBlocking(InstancesResourceImpl$instanceV2Blocking$slambda_0(this));
  }
}
class InternalUtility {
  constructor() {
    InternalUtility_instance = this;
    var tmp = this;
    tmp.fcq_1 = Json(VOID, InternalUtility$json$lambda);
  }
}
class ListsResourceImpl$listsBlocking$slambda {
  constructor(this$0, $request) {
    this.ics_1 = this$0;
    this.jcs_1 = $request;
  }
  *kcs($this$toBlocking, $completion) {
    return yield* this.ics_1.mbr(this.jcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.kcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$listAccountsBlocking$slambda {
  constructor(this$0, $request) {
    this.lcs_1 = this$0;
    this.mcs_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.lcs_1.nbr(this.mcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$listBlocking$slambda {
  constructor(this$0, $request) {
    this.ncs_1 = this$0;
    this.ocs_1 = $request;
  }
  *pcs($this$toBlocking, $completion) {
    return yield* this.ncs_1.tbr(this.ocs_1, $completion);
  }
  wd(p1, $completion) {
    return this.pcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$createListBlocking$slambda {
  constructor(this$0, $request) {
    this.qcs_1 = this$0;
    this.rcs_1 = $request;
  }
  *pcs($this$toBlocking, $completion) {
    return yield* this.qcs_1.wbr(this.rcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.pcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$updateListBlocking$slambda {
  constructor(this$0, $request) {
    this.scs_1 = this$0;
    this.tcs_1 = $request;
  }
  *pcs($this$toBlocking, $completion) {
    return yield* this.scs_1.zbr(this.tcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.pcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$deleteListBlocking$slambda {
  constructor(this$0, $request) {
    this.ucs_1 = this$0;
    this.vcs_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.ucs_1.cbs(this.vcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$addAccountsToListBlocking$slambda {
  constructor(this$0, $request) {
    this.wcs_1 = this$0;
    this.xcs_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.wcs_1.fbs(this.xcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl$deleteAccountsToListBlocking$slambda {
  constructor(this$0, $request) {
    this.ycs_1 = this$0;
    this.zcs_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.ycs_1.ibs(this.zcs_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ListsResourceImpl extends AbstractAuthResourceImpl {
  *obr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/accounts/' + request.id + '/lists').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(AccountList), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  lists(request) {
    return promisify(($completion) => this.obr(request, $completion));
  }
  *mbr(request, $completion) {
    return this.lists === protoOf(ListsResourceImpl).lists ? (yield* this.obr(request, $completion)) : (yield* await_0(this.lists(request), $completion));
  }
  pbr(request) {
    return toBlocking(ListsResourceImpl$listsBlocking$slambda_0(this, request));
  }
  *qbr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp = (new HttpRequest()).n54(this.pco_1 + '/api/v1/lists/' + request.id + '/accounts').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1);
        var tmp0_elvis_lhs = request.limit;
        var response = yield* tmp.u54('limit', tmp0_elvis_lhs == null ? 40 : tmp0_elvis_lhs).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MastodonException.abo(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  listAccounts(request) {
    return promisify(($completion) => this.qbr(request, $completion));
  }
  *nbr(request, $completion) {
    return this.listAccounts === protoOf(ListsResourceImpl).listAccounts ? (yield* this.qbr(request, $completion)) : (yield* await_0(this.listAccounts(request), $completion));
  }
  rbr(request) {
    return toBlocking(ListsResourceImpl$listAccountsBlocking$slambda_0(this, request));
  }
  *sbr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/lists/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccountList), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  list(request) {
    return promisify(($completion) => this.sbr(request, $completion));
  }
  *tbr(request, $completion) {
    return this.list === protoOf(ListsResourceImpl).list ? (yield* this.sbr(request, $completion)) : (yield* await_0(this.list(request), $completion));
  }
  ubr(request) {
    return toBlocking(ListsResourceImpl$listBlocking$slambda_0(this, request));
  }
  *vbr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/lists').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'title', request.title).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccountList), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createList(request) {
    return promisify(($completion) => this.vbr(request, $completion));
  }
  *wbr(request, $completion) {
    return this.createList === protoOf(ListsResourceImpl).createList ? (yield* this.vbr(request, $completion)) : (yield* await_0(this.createList(request), $completion));
  }
  xbr(request) {
    return toBlocking(ListsResourceImpl$createListBlocking$slambda_0(this, request));
  }
  *ybr(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/lists/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'title', request.title).a55($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccountList), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  updateList(request) {
    return promisify(($completion) => this.ybr(request, $completion));
  }
  *zbr(request, $completion) {
    return this.updateList === protoOf(ListsResourceImpl).updateList ? (yield* this.ybr(request, $completion)) : (yield* await_0(this.updateList(request), $completion));
  }
  abs(request) {
    return toBlocking(ListsResourceImpl$updateListBlocking$slambda_0(this, request));
  }
  *bbs(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/lists/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteList(request) {
    return promisify(($completion) => this.bbs(request, $completion));
  }
  *cbs(request, $completion) {
    return this.deleteList === protoOf(ListsResourceImpl).deleteList ? (yield* this.bbs(request, $completion)) : (yield* await_0(this.deleteList(request), $completion));
  }
  dbs(request) {
    return toBlocking(ListsResourceImpl$deleteListBlocking$slambda_0(this, request));
  }
  *ebs(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* this.rco((new HttpRequest()).n54(this.pco_1 + '/api/v1/lists/' + request.id + '/accounts').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'accountIds', request.accountIds).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  addAccountsToList(request) {
    return promisify(($completion) => this.ebs(request, $completion));
  }
  *fbs(request, $completion) {
    return this.addAccountsToList === protoOf(ListsResourceImpl).addAccountsToList ? (yield* this.ebs(request, $completion)) : (yield* await_0(this.addAccountsToList(request), $completion));
  }
  gbs(request) {
    return toBlocking(ListsResourceImpl$addAccountsToListBlocking$slambda_0(this, request));
  }
  *hbs(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* this.rco((new HttpRequest()).n54(this.pco_1 + '/api/v1/lists/' + request.id + '/accounts').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'accountIds', request.accountIds).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteAccountsToList(request) {
    return promisify(($completion) => this.hbs(request, $completion));
  }
  *ibs(request, $completion) {
    return this.deleteAccountsToList === protoOf(ListsResourceImpl).deleteAccountsToList ? (yield* this.hbs(request, $completion)) : (yield* await_0(this.deleteAccountsToList(request), $completion));
  }
  jbs(request) {
    return toBlocking(ListsResourceImpl$deleteAccountsToListBlocking$slambda_0(this, request));
  }
}
class MastodonImpl {
  constructor(uri, accessToken, service) {
    this.dct_1 = uri;
    this.ect_1 = accessToken;
    this.fct_1 = service;
    this.gct_1 = new AppsResourceImpl(this.dct_1);
    this.hct_1 = new OAuthResourceImpl(this.dct_1);
    this.ict_1 = new NodesResourceImpl(this.dct_1);
    this.jct_1 = new EmojisResourceImpl(this.dct_1);
    this.kct_1 = new InstancesResourceImpl(this.dct_1);
    this.lct_1 = new SearchResourceImpl(this.dct_1, this.ect_1);
    this.mct_1 = new MediasResourceImpl(this.dct_1, this.ect_1);
    this.nct_1 = new TrendsResourceImpl(this.dct_1, this.ect_1);
    this.oct_1 = new ListsResourceImpl(this.dct_1, this.ect_1);
    this.pct_1 = new PollsResourceImpl(this.dct_1, this.ect_1);
    this.qct_1 = new MutesResourceImpl(this.dct_1, this.ect_1);
    this.rct_1 = new BlocksResourceImpl(this.dct_1, this.ect_1);
    this.sct_1 = new ReportsResourceImpl(this.dct_1, this.ect_1);
    this.tct_1 = new FollowsResourceImpl(this.dct_1, this.ect_1);
    this.uct_1 = new FollowRequestsResourceImpl(this.dct_1, this.ect_1);
    var tmp = this;
    tmp.vct_1 = new BookmarksResourceImpl(this.dct_1, this.ect_1, MastodonImpl$bookmarks$lambda(this));
    var tmp_0 = this;
    tmp_0.wct_1 = new ScheduledStatusesResourceImpl(this.dct_1, this.ect_1, MastodonImpl$scheduledStatuses$lambda(this));
    var tmp_1 = this;
    tmp_1.xct_1 = new DomainBlocksResourceImpl(this.dct_1, this.ect_1, MastodonImpl$domainBlocks$lambda(this));
    var tmp_2 = this;
    tmp_2.yct_1 = new AccountsResourceImpl(this.dct_1, this.ect_1, MastodonImpl$accounts$lambda(this));
    var tmp_3 = this;
    tmp_3.zct_1 = new StatusesResourceImpl(this.dct_1, this.ect_1, MastodonImpl$statuses$lambda(this));
    var tmp_4 = this;
    tmp_4.acu_1 = new TimelinesResourceImpl(this.dct_1, this.ect_1, MastodonImpl$timelines$lambda(this));
    var tmp_5 = this;
    tmp_5.bcu_1 = new FavouritesResourceImpl(this.dct_1, this.ect_1, MastodonImpl$favourites$lambda(this));
    var tmp_6 = this;
    tmp_6.ccu_1 = new NotificationsResourceImpl(this.dct_1, this.ect_1, MastodonImpl$notifications$lambda(this));
    this.dcu_1 = this.fct_1;
  }
  uri() {
    return this.dct_1;
  }
  accessToken() {
    return this.ect_1;
  }
  service() {
    var tmp0_elvis_lhs = this.dcu_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var tmp0_safe_receiver = this.ict_1.sbs().data.software;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.name;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException.o('cannot get service name.');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var serviceName = tmp_0;
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance.from(serviceName);
      this.dcu_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  apps() {
    return this.gct_1;
  }
  oauth() {
    return this.hct_1;
  }
  nodes() {
    return this.ict_1;
  }
  emojis() {
    return this.jct_1;
  }
  instances() {
    return this.kct_1;
  }
  search() {
    return this.lct_1;
  }
  medias() {
    return this.mct_1;
  }
  trends() {
    return this.nct_1;
  }
  lists() {
    return this.oct_1;
  }
  polls() {
    return this.pct_1;
  }
  mutes() {
    return this.qct_1;
  }
  blocks() {
    return this.rct_1;
  }
  reports() {
    return this.sct_1;
  }
  follows() {
    return this.tct_1;
  }
  followRequests() {
    return this.uct_1;
  }
  bookmarks() {
    return this.vct_1;
  }
  scheduledStatuses() {
    return this.wct_1;
  }
  domainBlocks() {
    return this.xct_1;
  }
  accounts() {
    return this.yct_1;
  }
  statuses() {
    return this.zct_1;
  }
  timelines() {
    return this.acu_1;
  }
  favourites() {
    return this.bcu_1;
  }
  notifications() {
    return this.ccu_1;
  }
}
class MediasResourceImpl$postMediaBlocking$slambda {
  constructor(this$0, $request) {
    this.ecu_1 = this$0;
    this.fcu_1 = $request;
  }
  *gcu($this$toBlocking, $completion) {
    return yield* this.ecu_1.kbs(this.fcu_1, $completion);
  }
  wd(p1, $completion) {
    return this.gcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediasResourceImpl extends AbstractAuthResourceImpl {
  *lbs(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v2/media').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).l53('file', ensureNotNull(request.name), ensureNotNull(request.bytes)), 'description', request.description).q54(true).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Attachment), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  postMedia(request) {
    return promisify(($completion) => this.lbs(request, $completion));
  }
  *kbs(request, $completion) {
    return this.postMedia === protoOf(MediasResourceImpl).postMedia ? (yield* this.lbs(request, $completion)) : (yield* await_0(this.postMedia(request), $completion));
  }
  mbs(request) {
    return toBlocking(MediasResourceImpl$postMediaBlocking$slambda_0(this, request));
  }
}
class MutesResourceImpl$mutesBlocking$slambda {
  constructor(this$0) {
    this.kcu_1 = this$0;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.kcu_1.obs($completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MutesResourceImpl extends AbstractAuthResourceImpl {
  *nbs($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/mutes').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  mutes() {
    return promisify(($completion) => this.nbs($completion));
  }
  *obs($completion) {
    return this.mutes === protoOf(MutesResourceImpl).mutes ? (yield* this.nbs($completion)) : (yield* await_0(this.mutes(), $completion));
  }
  pbs() {
    return toBlocking(MutesResourceImpl$mutesBlocking$slambda_0(this));
  }
}
class NodesResourceImpl$nodeInfoBlocking$slambda {
  constructor(this$0) {
    this.ocu_1 = this$0;
  }
  *pcu($this$toBlocking, $completion) {
    return yield* this.ocu_1.rbs($completion);
  }
  wd(p1, $completion) {
    return this.pcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NodesResourceImpl extends AbstractResourceImpl {
  *qbs($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).m54(this.pco_1 + '/.well-known/nodeinfo').o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(NodeInfo), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    var response_0 = tmp$ret$0;
    var tmp0_safe_receiver = response_0.data.links;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.href;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      throw MastodonException.zbn('no node info links.');
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var link = tmp;
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response_1 = yield* (new HttpRequest()).m54(link).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response_1.d55_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj_0 = response_1.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_4 = tmp0_0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_5 = this_4.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_6 = serializer(this_5, createKType(getKClass(Node), arrayOf([]), false));
          var tmp$ret$12 = isInterface(this_6, KSerializer) ? this_6 : THROW_CCE();
          var tmp$ret$10 = this_4.oz(tmp$ret$12, obj_0);
          // Inline function 'kotlin.also' call
          var this_7 = new Response(tmp$ret$10);
          this_7.limit = Companion_instance_71.of(response_1);
          this_7.link = Companion_instance_70.of(response_1);
          this_7.json = response_1.h55();
          tmp$ret$8 = this_7;
          break $l$block_0;
        }
        throw MastodonException.bbo(response_1.d55_1, response_1.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e_0 = $p;
          var tmp0_elvis_lhs_0 = e_0 instanceof MastodonException ? e_0 : null;
          throw tmp0_elvis_lhs_0 == null ? MastodonException.abo(e_0) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$8;
  }
  nodeInfo() {
    return promisify(($completion) => this.qbs($completion));
  }
  *rbs($completion) {
    return this.nodeInfo === protoOf(NodesResourceImpl).nodeInfo ? (yield* this.qbs($completion)) : (yield* await_0(this.nodeInfo(), $completion));
  }
  sbs() {
    return toBlocking(NodesResourceImpl$nodeInfoBlocking$slambda_0(this));
  }
}
class NotificationsResourceImpl$notificationsBlocking$slambda {
  constructor(this$0, $request) {
    this.rcu_1 = this$0;
    this.scu_1 = $request;
  }
  *tcu($this$toBlocking, $completion) {
    return yield* this.rcu_1.tbs(this.scu_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$notificationBlocking$slambda {
  constructor(this$0, $request) {
    this.ucu_1 = this$0;
    this.vcu_1 = $request;
  }
  *wcu($this$toBlocking, $completion) {
    return yield* this.ucu_1.ubs(this.vcu_1, $completion);
  }
  wd(p1, $completion) {
    return this.wcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$clearNotificationsBlocking$slambda {
  constructor(this$0) {
    this.xcu_1 = this$0;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.xcu_1.bbt($completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$subscriptionBlocking$slambda {
  constructor(this$0) {
    this.ycu_1 = this$0;
  }
  *zcu($this$toBlocking, $completion) {
    return yield* this.ycu_1.ebt($completion);
  }
  wd(p1, $completion) {
    return this.zcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$pushSubscriptionBlocking$slambda {
  constructor(this$0, $request) {
    this.acv_1 = this$0;
    this.bcv_1 = $request;
  }
  *wcu($this$toBlocking, $completion) {
    return yield* this.acv_1.vbs(this.bcv_1, $completion);
  }
  wd(p1, $completion) {
    return this.wcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl$editSubscriptionBlocking$slambda {
  constructor(this$0, $request) {
    this.ccv_1 = this$0;
    this.dcv_1 = $request;
  }
  *wcu($this$toBlocking, $completion) {
    return yield* this.ccv_1.jbt(this.dcv_1, $completion);
  }
  wd(p1, $completion) {
    return this.wcu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl extends AbstractAuthResourceImpl {
  *wbs(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco(this.tco(this.tco(this.sco((new HttpRequest()).n54(this.pco_1 + '/api/v1/notifications').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'account_id', request.id), 'types', request.types), 'exclude_types', request.excludeTypes), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Notification), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  notifications(request) {
    return promisify(($completion) => this.wbs(request, $completion));
  }
  *tbs(request, $completion) {
    return this.notifications === protoOf(NotificationsResourceImpl).notifications ? (yield* this.wbs(request, $completion)) : (yield* await_0(this.notifications(request), $completion));
  }
  xbs(request) {
    return toBlocking(NotificationsResourceImpl$notificationsBlocking$slambda_0(this, request));
  }
  *ybs(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/notifications/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Notification), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  notification(request) {
    return promisify(($completion) => this.ybs(request, $completion));
  }
  *ubs(request, $completion) {
    return this.notification === protoOf(NotificationsResourceImpl).notification ? (yield* this.ybs(request, $completion)) : (yield* await_0(this.notification(request), $completion));
  }
  zbs(request) {
    return toBlocking(NotificationsResourceImpl$notificationBlocking$slambda_0(this, request));
  }
  *abt($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/notifications/clear').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  clearNotifications() {
    return promisify(($completion) => this.abt($completion));
  }
  *bbt($completion) {
    return this.clearNotifications === protoOf(NotificationsResourceImpl).clearNotifications ? (yield* this.abt($completion)) : (yield* await_0(this.clearNotifications(), $completion));
  }
  cbt() {
    return toBlocking(NotificationsResourceImpl$clearNotificationsBlocking$slambda_0(this));
  }
  *dbt($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/push/subscription').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Subscription), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  subscription() {
    return promisify(($completion) => this.dbt($completion));
  }
  *ebt($completion) {
    return this.subscription === protoOf(NotificationsResourceImpl).subscription ? (yield* this.dbt($completion)) : (yield* await_0(this.subscription(), $completion));
  }
  fbt() {
    return toBlocking(NotificationsResourceImpl$subscriptionBlocking$slambda_0(this));
  }
  *gbt(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp = this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/push/subscription').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'subscription[endpoint]', request.endpoint), 'subscription[keys][p256dh]', request.p256dh), 'subscription[keys][auth]', request.auth);
        var tmp0_safe_receiver = request.alert;
        var tmp_0 = this.qco(tmp, 'data[alerts][follow]', tmp0_safe_receiver == null ? null : tmp0_safe_receiver.follow);
        var tmp1_safe_receiver = request.alert;
        var tmp_1 = this.qco(tmp_0, 'data[alerts][favourite]', tmp1_safe_receiver == null ? null : tmp1_safe_receiver.favourite);
        var tmp2_safe_receiver = request.alert;
        var tmp_2 = this.qco(tmp_1, 'data[alerts][reblog]', tmp2_safe_receiver == null ? null : tmp2_safe_receiver.reblog);
        var tmp3_safe_receiver = request.alert;
        var tmp_3 = this.qco(tmp_2, 'data[alerts][mention]', tmp3_safe_receiver == null ? null : tmp3_safe_receiver.mention);
        var tmp4_safe_receiver = request.alert;
        var tmp_4 = this.qco(tmp_3, 'data[alerts][poll]', tmp4_safe_receiver == null ? null : tmp4_safe_receiver.poll);
        var tmp5_safe_receiver = request.alert;
        var response = yield* this.qco(tmp_4, 'data[alerts][status]', tmp5_safe_receiver == null ? null : tmp5_safe_receiver.status).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Notification), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  pushSubscription(request) {
    return promisify(($completion) => this.gbt(request, $completion));
  }
  *vbs(request, $completion) {
    return this.pushSubscription === protoOf(NotificationsResourceImpl).pushSubscription ? (yield* this.gbt(request, $completion)) : (yield* await_0(this.pushSubscription(request), $completion));
  }
  hbt(request) {
    return toBlocking(NotificationsResourceImpl$pushSubscriptionBlocking$slambda_0(this, request));
  }
  *ibt(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp = (new HttpRequest()).n54(this.pco_1 + '/api/v1/push/subscription').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1);
        var tmp0_safe_receiver = request.alert;
        var tmp_0 = this.qco(tmp, 'data[alerts][follow]', tmp0_safe_receiver == null ? null : tmp0_safe_receiver.follow);
        var tmp1_safe_receiver = request.alert;
        var tmp_1 = this.qco(tmp_0, 'data[alerts][favourite]', tmp1_safe_receiver == null ? null : tmp1_safe_receiver.favourite);
        var tmp2_safe_receiver = request.alert;
        var tmp_2 = this.qco(tmp_1, 'data[alerts][reblog]', tmp2_safe_receiver == null ? null : tmp2_safe_receiver.reblog);
        var tmp3_safe_receiver = request.alert;
        var tmp_3 = this.qco(tmp_2, 'data[alerts][mention]', tmp3_safe_receiver == null ? null : tmp3_safe_receiver.mention);
        var tmp4_safe_receiver = request.alert;
        var tmp_4 = this.qco(tmp_3, 'data[alerts][poll]', tmp4_safe_receiver == null ? null : tmp4_safe_receiver.poll);
        var tmp5_safe_receiver = request.alert;
        var response = yield* this.qco(tmp_4, 'data[alerts][status]', tmp5_safe_receiver == null ? null : tmp5_safe_receiver.status).a55($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Notification), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  editSubscription(request) {
    return promisify(($completion) => this.ibt(request, $completion));
  }
  *jbt(request, $completion) {
    return this.editSubscription === protoOf(NotificationsResourceImpl).editSubscription ? (yield* this.ibt(request, $completion)) : (yield* await_0(this.editSubscription(request), $completion));
  }
  kbt(request) {
    return toBlocking(NotificationsResourceImpl$editSubscriptionBlocking$slambda_0(this, request));
  }
}
class OAuthResourceImpl$issueAccessTokenWithCredentialsBlocking$slambda {
  constructor(this$0, $request) {
    this.hcv_1 = this$0;
    this.icv_1 = $request;
  }
  *jcv($this$toBlocking, $completion) {
    return yield* this.hcv_1.pbt(this.icv_1, $completion);
  }
  wd(p1, $completion) {
    return this.jcv((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl$issueAccessTokenWithAuthorizationCodeBlocking$slambda {
  constructor(this$0, $request) {
    this.kcv_1 = this$0;
    this.lcv_1 = $request;
  }
  *jcv($this$toBlocking, $completion) {
    return yield* this.kcv_1.lbt(this.lcv_1, $completion);
  }
  wd(p1, $completion) {
    return this.jcv((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl$refreshAccessTokenBlocking$slambda {
  constructor(this$0, $request) {
    this.mcv_1 = this$0;
    this.ncv_1 = $request;
  }
  *jcv($this$toBlocking, $completion) {
    return yield* this.mcv_1.mbt(this.ncv_1, $completion);
  }
  wd(p1, $completion) {
    return this.jcv((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl$authorizationUrlBlocking$slambda {
  constructor(this$0, $request) {
    this.ocv_1 = this$0;
    this.pcv_1 = $request;
  }
  *qcv($this$toBlocking, $completion) {
    return yield* this.ocv_1.nbt(this.pcv_1, $completion);
  }
  wd(p1, $completion) {
    return this.qcv((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class OAuthResourceImpl extends AbstractResourceImpl {
  *obt(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco(this.qco(this.qco(this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/oauth/token'), 'client_id', request.clientId), 'client_secret', request.clientSecret), 'username', request.emailAddress), 'password', request.password), 'scope', request.scopes), 'grant_type', 'password').o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccessToken), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  issueAccessTokenWithCredentials(request) {
    return promisify(($completion) => this.obt(request, $completion));
  }
  *pbt(request, $completion) {
    return this.issueAccessTokenWithCredentials === protoOf(OAuthResourceImpl).issueAccessTokenWithCredentials ? (yield* this.obt(request, $completion)) : (yield* await_0(this.issueAccessTokenWithCredentials(request), $completion));
  }
  qbt(request) {
    return toBlocking(OAuthResourceImpl$issueAccessTokenWithCredentialsBlocking$slambda_0(this, request));
  }
  *rbt(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco(this.qco(this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/oauth/token'), 'client_id', request.clientId), 'client_secret', request.clientSecret), 'redirect_uri', request.redirectUri), 'code', request.code), 'grant_type', 'authorization_code').o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccessToken), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  issueAccessTokenWithAuthorizationCode(request) {
    return promisify(($completion) => this.rbt(request, $completion));
  }
  *lbt(request, $completion) {
    return this.issueAccessTokenWithAuthorizationCode === protoOf(OAuthResourceImpl).issueAccessTokenWithAuthorizationCode ? (yield* this.rbt(request, $completion)) : (yield* await_0(this.issueAccessTokenWithAuthorizationCode(request), $completion));
  }
  sbt(request) {
    return toBlocking(OAuthResourceImpl$issueAccessTokenWithAuthorizationCodeBlocking$slambda_0(this, request));
  }
  *tbt(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco(this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/oauth/token'), 'client_id', request.clientId), 'client_secret', request.clientSecret), 'refresh_token', request.refreshToken), 'grant_type', 'refresh_token').o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccessToken), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  refreshAccessToken(request) {
    return promisify(($completion) => this.tbt(request, $completion));
  }
  *mbt(request, $completion) {
    return this.refreshAccessToken === protoOf(OAuthResourceImpl).refreshAccessToken ? (yield* this.tbt(request, $completion)) : (yield* await_0(this.refreshAccessToken(request), $completion));
  }
  ubt(request) {
    return toBlocking(OAuthResourceImpl$refreshAccessTokenBlocking$slambda_0(this, request));
  }
  *vbt(request, $completion) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.b45(Companion_getInstance_0().d45_1);
    this_0.s43_1 = Url(this.pco_1).f44_1;
    set_encodedPath(this_0, '/oauth/authorize');
    this_0.b44_1.m3n('response_type', 'code');
    this_0.b44_1.m3n('client_id', ensureNotNull(request.clientId));
    this_0.b44_1.m3n('redirect_uri', ensureNotNull(request.redirectUri));
    this_0.b44_1.m3n('scope', ensureNotNull(request.scopes));
    return new Response(this_0.n45());
  }
  authorizationUrl(request) {
    return promisify(($completion) => this.vbt(request, $completion));
  }
  *nbt(request, $completion) {
    return this.authorizationUrl === protoOf(OAuthResourceImpl).authorizationUrl ? (yield* this.vbt(request, $completion)) : (yield* await_0(this.authorizationUrl(request), $completion));
  }
  wbt(request) {
    return toBlocking(OAuthResourceImpl$authorizationUrlBlocking$slambda_0(this, request));
  }
}
class PollsResourceImpl$votePollBlocking$slambda {
  constructor(this$0, $request) {
    this.scv_1 = this$0;
    this.tcv_1 = $request;
  }
  *ucv($this$toBlocking, $completion) {
    return yield* this.scv_1.xbt(this.tcv_1, $completion);
  }
  wd(p1, $completion) {
    return this.ucv((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PollsResourceImpl extends AbstractAuthResourceImpl {
  *ybt(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.rco((new HttpRequest()).n54(this.pco_1 + '/api/v1/polls/' + request.id + '/votes').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'choices', request.choices).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Poll), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  votePoll(request) {
    return promisify(($completion) => this.ybt(request, $completion));
  }
  *xbt(request, $completion) {
    return this.votePoll === protoOf(PollsResourceImpl).votePoll ? (yield* this.ybt(request, $completion)) : (yield* await_0(this.votePoll(request), $completion));
  }
  zbt(request) {
    return toBlocking(PollsResourceImpl$votePollBlocking$slambda_0(this, request));
  }
}
class ReportsResourceImpl$reportsBlocking$slambda {
  constructor(this$0) {
    this.ycv_1 = this$0;
  }
  *zcv($this$toBlocking, $completion) {
    return yield* this.ycv_1.bbu($completion);
  }
  wd(p1, $completion) {
    return this.zcv((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ReportsResourceImpl$postReportBlocking$slambda {
  constructor(this$0, $request) {
    this.acw_1 = this$0;
    this.bcw_1 = $request;
  }
  *ccw($this$toBlocking, $completion) {
    return yield* this.acw_1.ebu(this.bcw_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccw((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ReportsResourceImpl extends AbstractAuthResourceImpl {
  *abu($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/reports').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Report), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  reports() {
    return promisify(($completion) => this.abu($completion));
  }
  *bbu($completion) {
    return this.reports === protoOf(ReportsResourceImpl).reports ? (yield* this.abu($completion)) : (yield* await_0(this.reports(), $completion));
  }
  cbu() {
    return toBlocking(ReportsResourceImpl$reportsBlocking$slambda_0(this));
  }
  *dbu(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.rco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/reports').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'comment', request.comment), 'account_id', request.accountId), 'status_ids', request.statusIds).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Report), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  postReport(request) {
    return promisify(($completion) => this.dbu(request, $completion));
  }
  *ebu(request, $completion) {
    return this.postReport === protoOf(ReportsResourceImpl).postReport ? (yield* this.dbu(request, $completion)) : (yield* await_0(this.postReport(request), $completion));
  }
  fbu(request) {
    return toBlocking(ReportsResourceImpl$postReportBlocking$slambda_0(this, request));
  }
}
class ScheduledStatusesResourceImpl$scheduledStatusesBlocking$slambda {
  constructor(this$0, $request) {
    this.gcw_1 = this$0;
    this.hcw_1 = $request;
  }
  *icw($this$toBlocking, $completion) {
    return yield* this.gcw_1.gbu(this.hcw_1, $completion);
  }
  wd(p1, $completion) {
    return this.icw((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ScheduledStatusesResourceImpl$scheduledStatusBlocking$slambda {
  constructor(this$0, $request) {
    this.jcw_1 = this$0;
    this.kcw_1 = $request;
  }
  *lcw($this$toBlocking, $completion) {
    return yield* this.jcw_1.hbu(this.kcw_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcw((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ScheduledStatusesResourceImpl$patchScheduledStatusBlocking$slambda {
  constructor(this$0, $request) {
    this.mcw_1 = this$0;
    this.ncw_1 = $request;
  }
  *lcw($this$toBlocking, $completion) {
    return yield* this.mcw_1.ibu(this.ncw_1, $completion);
  }
  wd(p1, $completion) {
    return this.lcw((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ScheduledStatusesResourceImpl$deleteScheduledStatusBlocking$slambda {
  constructor(this$0, $request) {
    this.ocw_1 = this$0;
    this.pcw_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.ocw_1.jbu(this.pcw_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ScheduledStatusesResourceImpl extends AbstractAuthResourceImpl {
  *kbu(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/scheduled_statuses').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ScheduledStatus), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  scheduledStatuses(request) {
    return promisify(($completion) => this.kbu(request, $completion));
  }
  *gbu(request, $completion) {
    return this.scheduledStatuses === protoOf(ScheduledStatusesResourceImpl).scheduledStatuses ? (yield* this.kbu(request, $completion)) : (yield* await_0(this.scheduledStatuses(request), $completion));
  }
  lbu(request) {
    return toBlocking(ScheduledStatusesResourceImpl$scheduledStatusesBlocking$slambda_0(this, request));
  }
  *mbu(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/scheduled_statuses/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ScheduledStatus), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  scheduledStatus(request) {
    return promisify(($completion) => this.mbu(request, $completion));
  }
  *hbu(request, $completion) {
    return this.scheduledStatus === protoOf(ScheduledStatusesResourceImpl).scheduledStatus ? (yield* this.mbu(request, $completion)) : (yield* await_0(this.scheduledStatus(request), $completion));
  }
  nbu(request) {
    return toBlocking(ScheduledStatusesResourceImpl$scheduledStatusBlocking$slambda_0(this, request));
  }
  *obu(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/scheduled_statuses/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'scheduled_at', request.scheduledAt).c55($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ScheduledStatus), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  patchScheduledStatus(request) {
    return promisify(($completion) => this.obu(request, $completion));
  }
  *ibu(request, $completion) {
    return this.patchScheduledStatus === protoOf(ScheduledStatusesResourceImpl).patchScheduledStatus ? (yield* this.obu(request, $completion)) : (yield* await_0(this.patchScheduledStatus(request), $completion));
  }
  pbu(request) {
    return toBlocking(ScheduledStatusesResourceImpl$patchScheduledStatusBlocking$slambda_0(this, request));
  }
  *qbu(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/scheduled_statuses/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteScheduledStatus(request) {
    return promisify(($completion) => this.qbu(request, $completion));
  }
  *jbu(request, $completion) {
    return this.deleteScheduledStatus === protoOf(ScheduledStatusesResourceImpl).deleteScheduledStatus ? (yield* this.qbu(request, $completion)) : (yield* await_0(this.deleteScheduledStatus(request), $completion));
  }
  rbu(request) {
    return toBlocking(ScheduledStatusesResourceImpl$deleteScheduledStatusBlocking$slambda_0(this, request));
  }
}
class SearchResourceImpl$searchBlocking$slambda {
  constructor(this$0, $request) {
    this.tcw_1 = this$0;
    this.ucw_1 = $request;
  }
  *vcw($this$toBlocking, $completion) {
    return yield* this.tcw_1.sbu(this.ucw_1, $completion);
  }
  wd(p1, $completion) {
    return this.vcw((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class SearchResourceImpl extends AbstractAuthResourceImpl {
  *tbu(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp = this.sco(this.sco(this.sco((new HttpRequest()).n54(this.pco_1 + '/api/v2/search').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'q', request.query), 'resolve', request.resolve), 'following', request.onlyFollowing);
        var tmp0_safe_receiver = request.page;
        var tmp_0 = this.sco(tmp, 'limit', tmp0_safe_receiver == null ? null : tmp0_safe_receiver.limit);
        var tmp1_safe_receiver = request.page;
        var response = yield* this.sco(tmp_0, 'offset', tmp1_safe_receiver == null ? null : tmp1_safe_receiver.offset).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Results), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  search(request) {
    return promisify(($completion) => this.tbu(request, $completion));
  }
  *sbu(request, $completion) {
    return this.search === protoOf(SearchResourceImpl).search ? (yield* this.tbu(request, $completion)) : (yield* await_0(this.search(request), $completion));
  }
  ubu(request) {
    return toBlocking(SearchResourceImpl$searchBlocking$slambda_0(this, request));
  }
}
class StatusesResourceImpl$statusBlocking$slambda {
  constructor(this$0, $request) {
    this.zcw_1 = this$0;
    this.acx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.zcw_1.vbu(this.acx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$contextBlocking$slambda {
  constructor(this$0, $request) {
    this.bcx_1 = this$0;
    this.ccx_1 = $request;
  }
  *dcx($this$toBlocking, $completion) {
    return yield* this.bcx_1.wbu(this.ccx_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$cardBlocking$slambda {
  constructor(this$0, $request) {
    this.ecx_1 = this$0;
    this.fcx_1 = $request;
  }
  *gcx($this$toBlocking, $completion) {
    return yield* this.ecx_1.kbv(this.fcx_1, $completion);
  }
  wd(p1, $completion) {
    return this.gcx((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$rebloggedByBlocking$slambda {
  constructor(this$0, $request) {
    this.hcx_1 = this$0;
    this.icx_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.hcx_1.nbv(this.icx_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$favouritedByBlocking$slambda {
  constructor(this$0, $request) {
    this.jcx_1 = this$0;
    this.kcx_1 = $request;
  }
  *dcp($this$toBlocking, $completion) {
    return yield* this.jcx_1.qbv(this.kcx_1, $completion);
  }
  wd(p1, $completion) {
    return this.dcp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$postStatusBlocking$slambda {
  constructor(this$0, $request) {
    this.lcx_1 = this$0;
    this.mcx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.lcx_1.xbu(this.mcx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$deleteStatusBlocking$slambda {
  constructor(this$0, $request) {
    this.ncx_1 = this$0;
    this.ocx_1 = $request;
  }
  *ccr($this$toBlocking, $completion) {
    return yield* this.ncx_1.ybu(this.ocx_1, $completion);
  }
  wd(p1, $completion) {
    return this.ccr((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$reblogBlocking$slambda {
  constructor(this$0, $request) {
    this.pcx_1 = this$0;
    this.qcx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.pcx_1.zbu(this.qcx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$unreblogBlocking$slambda {
  constructor(this$0, $request) {
    this.rcx_1 = this$0;
    this.scx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.rcx_1.abv(this.scx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$favouriteBlocking$slambda {
  constructor(this$0, $request) {
    this.tcx_1 = this$0;
    this.ucx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.tcx_1.bbv(this.ucx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$unfavouriteBlocking$slambda {
  constructor(this$0, $request) {
    this.vcx_1 = this$0;
    this.wcx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.vcx_1.cbv(this.wcx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$pinBlocking$slambda {
  constructor(this$0, $request) {
    this.xcx_1 = this$0;
    this.ycx_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.xcx_1.dbv(this.ycx_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl$unpinBlocking$slambda {
  constructor(this$0, $request) {
    this.zcx_1 = this$0;
    this.acy_1 = $request;
  }
  *tcq($this$toBlocking, $completion) {
    return yield* this.zcx_1.ebv(this.acy_1, $completion);
  }
  wd(p1, $completion) {
    return this.tcq((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class StatusesResourceImpl extends AbstractAuthResourceImpl {
  *fbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  status(request) {
    return promisify(($completion) => this.fbv(request, $completion));
  }
  *vbu(request, $completion) {
    return this.status === protoOf(StatusesResourceImpl).status ? (yield* this.fbv(request, $completion)) : (yield* await_0(this.status(request), $completion));
  }
  gbv(request) {
    return toBlocking(StatusesResourceImpl$statusBlocking$slambda_0(this, request));
  }
  *hbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/context').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Context), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  context(request) {
    return promisify(($completion) => this.hbv(request, $completion));
  }
  *wbu(request, $completion) {
    return this.context === protoOf(StatusesResourceImpl).context ? (yield* this.hbv(request, $completion)) : (yield* await_0(this.context(request), $completion));
  }
  ibv(request) {
    return toBlocking(StatusesResourceImpl$contextBlocking$slambda_0(this, request));
  }
  *jbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/card').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Card), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  card(request) {
    return promisify(($completion) => this.jbv(request, $completion));
  }
  *kbv(request, $completion) {
    return this.card === protoOf(StatusesResourceImpl).card ? (yield* this.jbv(request, $completion)) : (yield* await_0(this.card(request), $completion));
  }
  lbv(request) {
    return toBlocking(StatusesResourceImpl$cardBlocking$slambda_0(this, request));
  }
  *mbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/reblogged_by').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  rebloggedBy(request) {
    return promisify(($completion) => this.mbv(request, $completion));
  }
  *nbv(request, $completion) {
    return this.rebloggedBy === protoOf(StatusesResourceImpl).rebloggedBy ? (yield* this.mbv(request, $completion)) : (yield* await_0(this.rebloggedBy(request), $completion));
  }
  obv(request) {
    return toBlocking(StatusesResourceImpl$rebloggedByBlocking$slambda_0(this, request));
  }
  *pbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/favourited_by').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Account), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  favouritedBy(request) {
    return promisify(($completion) => this.pbv(request, $completion));
  }
  *qbv(request, $completion) {
    return this.favouritedBy === protoOf(StatusesResourceImpl).favouritedBy ? (yield* this.pbv(request, $completion)) : (yield* await_0(this.favouritedBy(request), $completion));
  }
  rbv(request) {
    return toBlocking(StatusesResourceImpl$favouritedByBlocking$slambda_0(this, request));
  }
  *sbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.qco(this.qco(this.qco(this.rco(this.rco(this.qco(this.qco(this.qco(this.qco(this.qco((new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'status', request.status), 'in_reply_to_id', request.inReplyToId), 'sensitive', request.sensitive), 'spoiler_text', request.spoilerText), 'visibility', request.visibility), 'media_ids', request.mediaIds), 'poll[options]', request.pollOptions), 'poll[expires_in]', request.pollExpiresIn), 'poll[multiple]', request.pollMultiple), 'poll[hide_totals]', request.pollHideTotals).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  postStatus(request) {
    return promisify(($completion) => this.sbv(request, $completion));
  }
  *xbu(request, $completion) {
    return this.postStatus === protoOf(StatusesResourceImpl).postStatus ? (yield* this.sbv(request, $completion)) : (yield* await_0(this.postStatus(request), $completion));
  }
  tbv(request) {
    return toBlocking(StatusesResourceImpl$postStatusBlocking$slambda_0(this, request));
  }
  *ubv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).b55($completion);
        if (response.d55_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_71.of(response);
          this_0.link = Companion_instance_70.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteStatus(request) {
    return promisify(($completion) => this.ubv(request, $completion));
  }
  *ybu(request, $completion) {
    return this.deleteStatus === protoOf(StatusesResourceImpl).deleteStatus ? (yield* this.ubv(request, $completion)) : (yield* await_0(this.deleteStatus(request), $completion));
  }
  vbv(request) {
    return toBlocking(StatusesResourceImpl$deleteStatusBlocking$slambda_0(this, request));
  }
  *wbv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/reblog').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  reblog(request) {
    return promisify(($completion) => this.wbv(request, $completion));
  }
  *zbu(request, $completion) {
    return this.reblog === protoOf(StatusesResourceImpl).reblog ? (yield* this.wbv(request, $completion)) : (yield* await_0(this.reblog(request), $completion));
  }
  xbv(request) {
    return toBlocking(StatusesResourceImpl$reblogBlocking$slambda_0(this, request));
  }
  *ybv(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/unreblog').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unreblog(request) {
    return promisify(($completion) => this.ybv(request, $completion));
  }
  *abv(request, $completion) {
    return this.unreblog === protoOf(StatusesResourceImpl).unreblog ? (yield* this.ybv(request, $completion)) : (yield* await_0(this.unreblog(request), $completion));
  }
  zbv(request) {
    return toBlocking(StatusesResourceImpl$unreblogBlocking$slambda_0(this, request));
  }
  *abw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/favourite').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  favourite(request) {
    return promisify(($completion) => this.abw(request, $completion));
  }
  *bbv(request, $completion) {
    return this.favourite === protoOf(StatusesResourceImpl).favourite ? (yield* this.abw(request, $completion)) : (yield* await_0(this.favourite(request), $completion));
  }
  bbw(request) {
    return toBlocking(StatusesResourceImpl$favouriteBlocking$slambda_0(this, request));
  }
  *cbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/unfavourite').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unfavourite(request) {
    return promisify(($completion) => this.cbw(request, $completion));
  }
  *cbv(request, $completion) {
    return this.unfavourite === protoOf(StatusesResourceImpl).unfavourite ? (yield* this.cbw(request, $completion)) : (yield* await_0(this.unfavourite(request), $completion));
  }
  dbw(request) {
    return toBlocking(StatusesResourceImpl$unfavouriteBlocking$slambda_0(this, request));
  }
  *ebw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/pin').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  pin(request) {
    return promisify(($completion) => this.ebw(request, $completion));
  }
  *dbv(request, $completion) {
    return this.pin === protoOf(StatusesResourceImpl).pin ? (yield* this.ebw(request, $completion)) : (yield* await_0(this.pin(request), $completion));
  }
  fbw(request) {
    return toBlocking(StatusesResourceImpl$pinBlocking$slambda_0(this, request));
  }
  *gbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n54(this.pco_1 + '/api/v1/statuses/' + request.id + '/unpin').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1).z54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(Status), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unpin(request) {
    return promisify(($completion) => this.gbw(request, $completion));
  }
  *ebv(request, $completion) {
    return this.unpin === protoOf(StatusesResourceImpl).unpin ? (yield* this.gbw(request, $completion)) : (yield* await_0(this.unpin(request), $completion));
  }
  hbw(request) {
    return toBlocking(StatusesResourceImpl$unpinBlocking$slambda_0(this, request));
  }
}
class TimelinesResourceImpl$homeTimelineBlocking$slambda {
  constructor(this$0, $request) {
    this.ecy_1 = this$0;
    this.fcy_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.ecy_1.ibw(this.fcy_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$publicTimelineBlocking$slambda {
  constructor(this$0, $request) {
    this.gcy_1 = this$0;
    this.hcy_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.gcy_1.jbw(this.hcy_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$hashtagTimelineBlocking$slambda {
  constructor(this$0, $request) {
    this.icy_1 = this$0;
    this.jcy_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.icy_1.kbw(this.jcy_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$listTimelineBlocking$slambda {
  constructor(this$0, $request) {
    this.kcy_1 = this$0;
    this.lcy_1 = $request;
  }
  *icp($this$toBlocking, $completion) {
    return yield* this.kcy_1.lbw(this.lcy_1, $completion);
  }
  wd(p1, $completion) {
    return this.icp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl$conversationsBlocking$slambda {
  constructor(this$0, $request) {
    this.mcy_1 = this$0;
    this.ncy_1 = $request;
  }
  *ocy($this$toBlocking, $completion) {
    return yield* this.mcy_1.mbw(this.ncy_1, $completion);
  }
  wd(p1, $completion) {
    return this.ocy((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TimelinesResourceImpl extends AbstractAuthResourceImpl {
  *nbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/timelines/home').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        var inductionVariable = 0;
        if (inductionVariable <= 9)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (response.d55_1 === 206) {
              yield* delay(5000n, $completion);
              response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/timelines/home').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
            }
          }
           while (inductionVariable <= 9);
        var response_0 = response;
        if (response_0.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response_0.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response_0);
          this_3.link = Companion_instance_70.of(response_0);
          this_3.json = response_0.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response_0.d55_1, response_0.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  homeTimeline(request) {
    return promisify(($completion) => this.nbw(request, $completion));
  }
  *ibw(request, $completion) {
    return this.homeTimeline === protoOf(TimelinesResourceImpl).homeTimeline ? (yield* this.nbw(request, $completion)) : (yield* await_0(this.homeTimeline(request), $completion));
  }
  obw(request) {
    return toBlocking(TimelinesResourceImpl$homeTimelineBlocking$slambda_0(this, request));
  }
  *pbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco(this.sco(this.sco((new HttpRequest()).n54(this.pco_1 + '/api/v1/timelines/public').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'local', request.local), 'only_media', request.onlyMedia), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  publicTimeline(request) {
    return promisify(($completion) => this.pbw(request, $completion));
  }
  *jbw(request, $completion) {
    return this.publicTimeline === protoOf(TimelinesResourceImpl).publicTimeline ? (yield* this.pbw(request, $completion)) : (yield* await_0(this.publicTimeline(request), $completion));
  }
  qbw(request) {
    return toBlocking(TimelinesResourceImpl$publicTimelineBlocking$slambda_0(this, request));
  }
  *rbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco(this.sco(this.sco((new HttpRequest()).n54(this.pco_1 + '/api/v1/timelines/tag/' + request.hashtag).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'local', request.local), 'only_media', request.onlyMedia), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  hashtagTimeline(request) {
    return promisify(($completion) => this.rbw(request, $completion));
  }
  *kbw(request, $completion) {
    return this.hashtagTimeline === protoOf(TimelinesResourceImpl).hashtagTimeline ? (yield* this.rbw(request, $completion)) : (yield* await_0(this.hashtagTimeline(request), $completion));
  }
  sbw(request) {
    return toBlocking(TimelinesResourceImpl$hashtagTimelineBlocking$slambda_0(this, request));
  }
  *tbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/timelines/list/' + request.listId).p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Status), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  listTimeline(request) {
    return promisify(($completion) => this.tbw(request, $completion));
  }
  *lbw(request, $completion) {
    return this.listTimeline === protoOf(TimelinesResourceImpl).listTimeline ? (yield* this.tbw(request, $completion)) : (yield* await_0(this.listTimeline(request), $completion));
  }
  ubw(request) {
    return toBlocking(TimelinesResourceImpl$listTimelineBlocking$slambda_0(this, request));
  }
  *vbw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.uco((new HttpRequest()).n54(this.pco_1 + '/api/v1/conversations').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), request.range, this.nco_1()).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Conversation), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  conversations(request) {
    return promisify(($completion) => this.vbw(request, $completion));
  }
  *mbw(request, $completion) {
    return this.conversations === protoOf(TimelinesResourceImpl).conversations ? (yield* this.vbw(request, $completion)) : (yield* await_0(this.conversations(request), $completion));
  }
  wbw(request) {
    return toBlocking(TimelinesResourceImpl$conversationsBlocking$slambda_0(this, request));
  }
}
class TrendsResourceImpl$trendsBlocking$slambda {
  constructor(this$0, $request) {
    this.scy_1 = this$0;
    this.tcy_1 = $request;
  }
  *ucy($this$toBlocking, $completion) {
    return yield* this.scy_1.xbw(this.tcy_1, $completion);
  }
  wd(p1, $completion) {
    return this.ucy((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TrendsResourceImpl extends AbstractAuthResourceImpl {
  *ybw(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmastodon.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.sco((new HttpRequest()).n54(this.pco_1 + '/api/v1/trends').p54('Authorization', this.oco()).o54(MediaType_getInstance().ecq_1), 'limit', request.limit).y54($completion);
        if (response.d55_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmastodon.internal.InternalUtility.fromJson' call
          var obj = response.h55();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.fcq_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.ny();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().kg(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Trend), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.oz(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_71.of(response);
          this_3.link = Companion_instance_70.of(response);
          this_3.json = response.h55();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MastodonException.bbo(response.d55_1, response.h55());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MastodonException ? e : null;
          throw tmp0_elvis_lhs == null ? MastodonException.abo(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  trends(request) {
    return promisify(($completion) => this.ybw(request, $completion));
  }
  *xbw(request, $completion) {
    return this.trends === protoOf(TrendsResourceImpl).trends ? (yield* this.ybw(request, $completion)) : (yield* await_0(this.trends(request), $completion));
  }
  zbw(request) {
    return toBlocking(TrendsResourceImpl$trendsBlocking$slambda_0(this, request));
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.ecq_1 = Application_getInstance().a3t_1.toString();
  }
}
//endregion
function init_work_socialhub_kmastodon_MastodonException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.ybn_1);
  _this__u8e3s4.wbn_1 = null;
  _this__u8e3s4.xbn_1 = null;
}
var MastodonFactory_instance;
function MastodonFactory_getInstance() {
  return MastodonFactory_instance;
}
function *verifyCredentials$virtualSuspendBridge(_this__u8e3s4, $completion) {
  return jsIsFunction(_this__u8e3s4.dbo) ? (yield* _this__u8e3s4.dbo($completion)) : (yield* await_0(_this__u8e3s4.verifyCredentials(), $completion));
}
function *account$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ebo) ? (yield* _this__u8e3s4.ebo(request, $completion)) : (yield* await_0(_this__u8e3s4.account(request), $completion));
}
function *followers$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.fbo) ? (yield* _this__u8e3s4.fbo(request, $completion)) : (yield* await_0(_this__u8e3s4.followers(request), $completion));
}
function *following$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.gbo) ? (yield* _this__u8e3s4.gbo(request, $completion)) : (yield* await_0(_this__u8e3s4.following(request), $completion));
}
function *statuses$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.hbo) ? (yield* _this__u8e3s4.hbo(request, $completion)) : (yield* await_0(_this__u8e3s4.statuses(request), $completion));
}
function *follow$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ibo) ? (yield* _this__u8e3s4.ibo(request, $completion)) : (yield* await_0(_this__u8e3s4.follow(request), $completion));
}
function *unfollow$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.jbo) ? (yield* _this__u8e3s4.jbo(request, $completion)) : (yield* await_0(_this__u8e3s4.unfollow(request), $completion));
}
function *block$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.kbo) ? (yield* _this__u8e3s4.kbo(request, $completion)) : (yield* await_0(_this__u8e3s4.block(request), $completion));
}
function *unblock$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.lbo) ? (yield* _this__u8e3s4.lbo(request, $completion)) : (yield* await_0(_this__u8e3s4.unblock(request), $completion));
}
function *mute$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.mbo) ? (yield* _this__u8e3s4.mbo(request, $completion)) : (yield* await_0(_this__u8e3s4.mute(request), $completion));
}
function *unmute$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.nbo) ? (yield* _this__u8e3s4.nbo(request, $completion)) : (yield* await_0(_this__u8e3s4.unmute(request), $completion));
}
function *relationships$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.obo) ? (yield* _this__u8e3s4.obo(request, $completion)) : (yield* await_0(_this__u8e3s4.relationships(request), $completion));
}
function *registerApplication$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.tbp) ? (yield* _this__u8e3s4.tbp(request, $completion)) : (yield* await_0(_this__u8e3s4.registerApplication(request), $completion));
}
function *bookmarks$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.zbp) ? (yield* _this__u8e3s4.zbp(request, $completion)) : (yield* await_0(_this__u8e3s4.bookmarks(request), $completion));
}
function *unbookmark$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.abq) ? (yield* _this__u8e3s4.abq(request, $completion)) : (yield* await_0(_this__u8e3s4.unbookmark(request), $completion));
}
function *domainBlocks$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.fbq) ? (yield* _this__u8e3s4.fbq(request, $completion)) : (yield* await_0(_this__u8e3s4.domainBlocks(request), $completion));
}
function *blockDomain$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.gbq) ? (yield* _this__u8e3s4.gbq(request, $completion)) : (yield* await_0(_this__u8e3s4.blockDomain(request), $completion));
}
function *unblockDomain$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.hbq) ? (yield* _this__u8e3s4.hbq(request, $completion)) : (yield* await_0(_this__u8e3s4.unblockDomain(request), $completion));
}
function *customEmojis$virtualSuspendBridge(_this__u8e3s4, $completion) {
  return jsIsFunction(_this__u8e3s4.obq) ? (yield* _this__u8e3s4.obq($completion)) : (yield* await_0(_this__u8e3s4.customEmojis(), $completion));
}
function *favourites$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.rbq) ? (yield* _this__u8e3s4.rbq(request, $completion)) : (yield* await_0(_this__u8e3s4.favourites(request), $completion));
}
function *lists$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.mbr) ? (yield* _this__u8e3s4.mbr(request, $completion)) : (yield* await_0(_this__u8e3s4.lists(request), $completion));
}
function *listAccounts$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.nbr) ? (yield* _this__u8e3s4.nbr(request, $completion)) : (yield* await_0(_this__u8e3s4.listAccounts(request), $completion));
}
function *postMedia$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.kbs) ? (yield* _this__u8e3s4.kbs(request, $completion)) : (yield* await_0(_this__u8e3s4.postMedia(request), $completion));
}
function *notifications$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.tbs) ? (yield* _this__u8e3s4.tbs(request, $completion)) : (yield* await_0(_this__u8e3s4.notifications(request), $completion));
}
function *notification$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ubs) ? (yield* _this__u8e3s4.ubs(request, $completion)) : (yield* await_0(_this__u8e3s4.notification(request), $completion));
}
function *pushSubscription$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.vbs) ? (yield* _this__u8e3s4.vbs(request, $completion)) : (yield* await_0(_this__u8e3s4.pushSubscription(request), $completion));
}
function *issueAccessTokenWithAuthorizationCode$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.lbt) ? (yield* _this__u8e3s4.lbt(request, $completion)) : (yield* await_0(_this__u8e3s4.issueAccessTokenWithAuthorizationCode(request), $completion));
}
function *refreshAccessToken$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.mbt) ? (yield* _this__u8e3s4.mbt(request, $completion)) : (yield* await_0(_this__u8e3s4.refreshAccessToken(request), $completion));
}
function *authorizationUrl$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.nbt) ? (yield* _this__u8e3s4.nbt(request, $completion)) : (yield* await_0(_this__u8e3s4.authorizationUrl(request), $completion));
}
function *votePoll$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.xbt) ? (yield* _this__u8e3s4.xbt(request, $completion)) : (yield* await_0(_this__u8e3s4.votePoll(request), $completion));
}
function *scheduledStatuses$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.gbu) ? (yield* _this__u8e3s4.gbu(request, $completion)) : (yield* await_0(_this__u8e3s4.scheduledStatuses(request), $completion));
}
function *scheduledStatus$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.hbu) ? (yield* _this__u8e3s4.hbu(request, $completion)) : (yield* await_0(_this__u8e3s4.scheduledStatus(request), $completion));
}
function *patchScheduledStatus$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ibu) ? (yield* _this__u8e3s4.ibu(request, $completion)) : (yield* await_0(_this__u8e3s4.patchScheduledStatus(request), $completion));
}
function *deleteScheduledStatus$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.jbu) ? (yield* _this__u8e3s4.jbu(request, $completion)) : (yield* await_0(_this__u8e3s4.deleteScheduledStatus(request), $completion));
}
function *search$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.sbu) ? (yield* _this__u8e3s4.sbu(request, $completion)) : (yield* await_0(_this__u8e3s4.search(request), $completion));
}
function *status$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.vbu) ? (yield* _this__u8e3s4.vbu(request, $completion)) : (yield* await_0(_this__u8e3s4.status(request), $completion));
}
function *context$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.wbu) ? (yield* _this__u8e3s4.wbu(request, $completion)) : (yield* await_0(_this__u8e3s4.context(request), $completion));
}
function *postStatus$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.xbu) ? (yield* _this__u8e3s4.xbu(request, $completion)) : (yield* await_0(_this__u8e3s4.postStatus(request), $completion));
}
function *deleteStatus$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ybu) ? (yield* _this__u8e3s4.ybu(request, $completion)) : (yield* await_0(_this__u8e3s4.deleteStatus(request), $completion));
}
function *reblog$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.zbu) ? (yield* _this__u8e3s4.zbu(request, $completion)) : (yield* await_0(_this__u8e3s4.reblog(request), $completion));
}
function *unreblog$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.abv) ? (yield* _this__u8e3s4.abv(request, $completion)) : (yield* await_0(_this__u8e3s4.unreblog(request), $completion));
}
function *favourite$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.bbv) ? (yield* _this__u8e3s4.bbv(request, $completion)) : (yield* await_0(_this__u8e3s4.favourite(request), $completion));
}
function *unfavourite$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.cbv) ? (yield* _this__u8e3s4.cbv(request, $completion)) : (yield* await_0(_this__u8e3s4.unfavourite(request), $completion));
}
function *pin$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.dbv) ? (yield* _this__u8e3s4.dbv(request, $completion)) : (yield* await_0(_this__u8e3s4.pin(request), $completion));
}
function *unpin$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ebv) ? (yield* _this__u8e3s4.ebv(request, $completion)) : (yield* await_0(_this__u8e3s4.unpin(request), $completion));
}
function *homeTimeline$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.ibw) ? (yield* _this__u8e3s4.ibw(request, $completion)) : (yield* await_0(_this__u8e3s4.homeTimeline(request), $completion));
}
function *publicTimeline$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.jbw) ? (yield* _this__u8e3s4.jbw(request, $completion)) : (yield* await_0(_this__u8e3s4.publicTimeline(request), $completion));
}
function *hashtagTimeline$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.kbw) ? (yield* _this__u8e3s4.kbw(request, $completion)) : (yield* await_0(_this__u8e3s4.hashtagTimeline(request), $completion));
}
function *listTimeline$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.lbw) ? (yield* _this__u8e3s4.lbw(request, $completion)) : (yield* await_0(_this__u8e3s4.listTimeline(request), $completion));
}
function *conversations$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.mbw) ? (yield* _this__u8e3s4.mbw(request, $completion)) : (yield* await_0(_this__u8e3s4.conversations(request), $completion));
}
function *trends$virtualSuspendBridge(_this__u8e3s4, request, $completion) {
  return jsIsFunction(_this__u8e3s4.xbw) ? (yield* _this__u8e3s4.xbw(request, $completion)) : (yield* await_0(_this__u8e3s4.trends(request), $completion));
}
var Service_MASTODON_instance;
var Service_PIXELFED_instance;
var Service_PLEROMA_instance;
var Companion_instance;
function Companion_getInstance_1() {
  return Companion_instance;
}
function values() {
  return [Service_MASTODON_getInstance(), Service_PIXELFED_getInstance(), Service_PLEROMA_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'MASTODON':
      return Service_MASTODON_getInstance();
    case 'PIXELFED':
      return Service_PIXELFED_getInstance();
    case 'PLEROMA':
      return Service_PLEROMA_getInstance();
    default:
      Service_initEntries();
      THROW_IAE('No enum constant work.socialhub.kmastodon.domain.Service.' + value);
      break;
  }
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var Service_entriesInitialized;
function Service_initEntries() {
  if (Service_entriesInitialized)
    return Unit_instance;
  Service_entriesInitialized = true;
  Service_MASTODON_instance = new Service('MASTODON', 0);
  Service_PIXELFED_instance = new Service('PIXELFED', 1);
  Service_PLEROMA_instance = new Service('PLEROMA', 2);
}
var $ENTRIES;
function Service_MASTODON_getInstance() {
  Service_initEntries();
  return Service_MASTODON_instance;
}
function Service_PIXELFED_getInstance() {
  Service_initEntries();
  return Service_PIXELFED_instance;
}
function Service_PLEROMA_getInstance() {
  Service_initEntries();
  return Service_PLEROMA_instance;
}
var Companion_instance_0;
function Companion_getInstance_2() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
function Account$Companion$$childSerializers$_anonymous__ed783n() {
  return new ReferenceArraySerializer(getKClass(Field), $serializer_getInstance_12());
}
function Account$Companion$$childSerializers$_anonymous__ed783n_0() {
  return new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_10());
}
var Companion_instance_1;
function Companion_getInstance_3() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
var Companion_instance_2;
function Companion_getInstance_4() {
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
function AccountSource$Companion$$childSerializers$_anonymous__lb5ebm() {
  return new ReferenceArraySerializer(getKClass(Field), $serializer_getInstance_12());
}
var Companion_instance_3;
function Companion_getInstance_5() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
var Companion_instance_4;
function Companion_getInstance_6() {
  return Companion_instance_4;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
var Companion_instance_5;
function Companion_getInstance_7() {
  return Companion_instance_5;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_6;
function Companion_getInstance_8() {
  return Companion_instance_6;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
var Companion_instance_7;
function Companion_getInstance_9() {
  return Companion_instance_7;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
var Companion_instance_8;
function Companion_getInstance_10() {
  return Companion_instance_8;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
function Context$Companion$$childSerializers$_anonymous__g0lu11() {
  return new ReferenceArraySerializer(getKClass(Status), $serializer_getInstance_24());
}
function Context$Companion$$childSerializers$_anonymous__g0lu11_0() {
  return new ReferenceArraySerializer(getKClass(Status), $serializer_getInstance_24());
}
var Companion_instance_9;
function Companion_getInstance_11() {
  if (Companion_instance_9 === VOID)
    new Companion_9();
  return Companion_instance_9;
}
var $serializer_instance_8;
function $serializer_getInstance_8() {
  if ($serializer_instance_8 === VOID)
    new $serializer_8();
  return $serializer_instance_8;
}
function Conversation$Companion$$childSerializers$_anonymous__u0czaf() {
  return new ReferenceArraySerializer(getKClass(Account), $serializer_getInstance_0());
}
var Companion_instance_10;
function Companion_getInstance_12() {
  if (Companion_instance_10 === VOID)
    new Companion_10();
  return Companion_instance_10;
}
var $serializer_instance_9;
function $serializer_getInstance_9() {
  if ($serializer_instance_9 === VOID)
    new $serializer_9();
  return $serializer_instance_9;
}
var Companion_instance_11;
function Companion_getInstance_13() {
  return Companion_instance_11;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_10();
  return $serializer_instance_10;
}
var Companion_instance_12;
function Companion_getInstance_14() {
  return Companion_instance_12;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_11();
  return $serializer_instance_11;
}
var Companion_instance_13;
function Companion_getInstance_15() {
  return Companion_instance_13;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_12();
  return $serializer_instance_12;
}
var Companion_instance_14;
function Companion_getInstance_16() {
  return Companion_instance_14;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_13();
  return $serializer_instance_13;
}
var Companion_instance_15;
function Companion_getInstance_17() {
  return Companion_instance_15;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_14();
  return $serializer_instance_14;
}
var Companion_instance_16;
function Companion_getInstance_18() {
  return Companion_instance_16;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_15();
  return $serializer_instance_15;
}
function Poll$Companion$$childSerializers$_anonymous__u2thud() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().gg(), IntSerializer_getInstance());
}
function Poll$Companion$$childSerializers$_anonymous__u2thud_0() {
  return new ReferenceArraySerializer(getKClass(PollOption), $serializer_getInstance_17());
}
function Poll$Companion$$childSerializers$_anonymous__u2thud_1() {
  return new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_10());
}
var Companion_instance_17;
function Companion_getInstance_19() {
  if (Companion_instance_17 === VOID)
    new Companion_17();
  return Companion_instance_17;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_16();
  return $serializer_instance_16;
}
var Companion_instance_18;
function Companion_getInstance_20() {
  return Companion_instance_18;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_17();
  return $serializer_instance_17;
}
var Companion_instance_19;
function Companion_getInstance_21() {
  return Companion_instance_19;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_18();
  return $serializer_instance_18;
}
var Companion_instance_20;
function Companion_getInstance_22() {
  return Companion_instance_20;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_19();
  return $serializer_instance_19;
}
function Results$Companion$$childSerializers$_anonymous__hpv34c() {
  return new ReferenceArraySerializer(getKClass(Account), $serializer_getInstance_0());
}
function Results$Companion$$childSerializers$_anonymous__hpv34c_0() {
  return new ReferenceArraySerializer(getKClass(Status), $serializer_getInstance_24());
}
function Results$Companion$$childSerializers$_anonymous__hpv34c_1() {
  return new ReferenceArraySerializer(getKClass(Tag), $serializer_getInstance_26());
}
var Companion_instance_21;
function Companion_getInstance_23() {
  if (Companion_instance_21 === VOID)
    new Companion_21();
  return Companion_instance_21;
}
var $serializer_instance_20;
function $serializer_getInstance_20() {
  if ($serializer_instance_20 === VOID)
    new $serializer_20();
  return $serializer_instance_20;
}
var Companion_instance_22;
function Companion_getInstance_24() {
  return Companion_instance_22;
}
var $serializer_instance_21;
function $serializer_getInstance_21() {
  if ($serializer_instance_21 === VOID)
    new $serializer_21();
  return $serializer_instance_21;
}
function ScheduledStatus$Companion$$childSerializers$_anonymous__uqmmc5() {
  return new ReferenceArraySerializer(getKClass(Attachment), $serializer_getInstance_5());
}
var Companion_instance_23;
function Companion_getInstance_25() {
  if (Companion_instance_23 === VOID)
    new Companion_23();
  return Companion_instance_23;
}
var $serializer_instance_22;
function $serializer_getInstance_22() {
  if ($serializer_instance_22 === VOID)
    new $serializer_22();
  return $serializer_instance_22;
}
function ScheduledStatusParams$Companion$$childSerializers$_anonymous__yi1ipx() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_24;
function Companion_getInstance_26() {
  if (Companion_instance_24 === VOID)
    new Companion_24();
  return Companion_instance_24;
}
var $serializer_instance_23;
function $serializer_getInstance_23() {
  if ($serializer_instance_23 === VOID)
    new $serializer_23();
  return $serializer_instance_23;
}
function Status$Companion$$childSerializers$_anonymous__aiti2w() {
  return new ReferenceArraySerializer(getKClass(Attachment), $serializer_getInstance_5());
}
function Status$Companion$$childSerializers$_anonymous__aiti2w_0() {
  return new ReferenceArraySerializer(getKClass(Mention), $serializer_getInstance_14());
}
function Status$Companion$$childSerializers$_anonymous__aiti2w_1() {
  return new ReferenceArraySerializer(getKClass(Tag), $serializer_getInstance_26());
}
function Status$Companion$$childSerializers$_anonymous__aiti2w_2() {
  return new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_10());
}
function Status$Companion$$childSerializers$_anonymous__aiti2w_3() {
  return new ReferenceArraySerializer(getKClass(Filter), $serializer_getInstance_29());
}
var Companion_instance_25;
function Companion_getInstance_27() {
  if (Companion_instance_25 === VOID)
    new Companion_25();
  return Companion_instance_25;
}
var $serializer_instance_24;
function $serializer_getInstance_24() {
  if ($serializer_instance_24 === VOID)
    new $serializer_24();
  return $serializer_instance_24;
}
var Companion_instance_26;
function Companion_getInstance_28() {
  return Companion_instance_26;
}
var $serializer_instance_25;
function $serializer_getInstance_25() {
  if ($serializer_instance_25 === VOID)
    new $serializer_25();
  return $serializer_instance_25;
}
function Tag$Companion$$childSerializers$_anonymous__iwpels() {
  return new ReferenceArraySerializer(getKClass(History), $serializer_getInstance_13());
}
var Companion_instance_27;
function Companion_getInstance_29() {
  if (Companion_instance_27 === VOID)
    new Companion_27();
  return Companion_instance_27;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_26();
  return $serializer_instance_26;
}
function Trend$Companion$$childSerializers$_anonymous__h9hfpp() {
  return new ReferenceArraySerializer(getKClass(History), $serializer_getInstance_13());
}
var Companion_instance_28;
function Companion_getInstance_30() {
  if (Companion_instance_28 === VOID)
    new Companion_28();
  return Companion_instance_28;
}
var $serializer_instance_27;
function $serializer_getInstance_27() {
  if ($serializer_instance_27 === VOID)
    new $serializer_27();
  return $serializer_instance_27;
}
var Companion_instance_29;
function Companion_getInstance_31() {
  return Companion_instance_29;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_28();
  return $serializer_instance_28;
}
function Filter$Companion$$childSerializers$_anonymous__vy8ea6() {
  return new ReferenceArraySerializer(getKClass(FilterKeyword), $serializer_getInstance_30());
}
function Filter$Companion$$childSerializers$_anonymous__vy8ea6_0() {
  return new ReferenceArraySerializer(getKClass(FilterStatus), $serializer_getInstance_31());
}
var Companion_instance_30;
function Companion_getInstance_32() {
  if (Companion_instance_30 === VOID)
    new Companion_30();
  return Companion_instance_30;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_29();
  return $serializer_instance_29;
}
var Companion_instance_31;
function Companion_getInstance_33() {
  return Companion_instance_31;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_30();
  return $serializer_instance_30;
}
var Companion_instance_32;
function Companion_getInstance_34() {
  return Companion_instance_32;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_31();
  return $serializer_instance_31;
}
function InstanceV1$Companion$$childSerializers$_anonymous__yo85dm() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function InstanceV1$Companion$$childSerializers$_anonymous__yo85dm_0() {
  return new ReferenceArraySerializer(getKClass(InstanceV1Rules), $serializer_getInstance_37());
}
var Companion_instance_33;
function Companion_getInstance_35() {
  if (Companion_instance_33 === VOID)
    new Companion_33();
  return Companion_instance_33;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_32();
  return $serializer_instance_32;
}
var Companion_instance_34;
function Companion_getInstance_36() {
  return Companion_instance_34;
}
var $serializer_instance_33;
function $serializer_getInstance_33() {
  if ($serializer_instance_33 === VOID)
    new $serializer_33();
  return $serializer_instance_33;
}
var Companion_instance_35;
function Companion_getInstance_37() {
  return Companion_instance_35;
}
var $serializer_instance_34;
function $serializer_getInstance_34() {
  if ($serializer_instance_34 === VOID)
    new $serializer_34();
  return $serializer_instance_34;
}
function InstanceV1MediaAttachments$Companion$$childSerializers$_anonymous__jyx5hu() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_36;
function Companion_getInstance_38() {
  if (Companion_instance_36 === VOID)
    new Companion_36();
  return Companion_instance_36;
}
var $serializer_instance_35;
function $serializer_getInstance_35() {
  if ($serializer_instance_35 === VOID)
    new $serializer_35();
  return $serializer_instance_35;
}
var Companion_instance_37;
function Companion_getInstance_39() {
  return Companion_instance_37;
}
var $serializer_instance_36;
function $serializer_getInstance_36() {
  if ($serializer_instance_36 === VOID)
    new $serializer_36();
  return $serializer_instance_36;
}
var Companion_instance_38;
function Companion_getInstance_40() {
  return Companion_instance_38;
}
var $serializer_instance_37;
function $serializer_getInstance_37() {
  if ($serializer_instance_37 === VOID)
    new $serializer_37();
  return $serializer_instance_37;
}
var Companion_instance_39;
function Companion_getInstance_41() {
  return Companion_instance_39;
}
var $serializer_instance_38;
function $serializer_getInstance_38() {
  if ($serializer_instance_38 === VOID)
    new $serializer_38();
  return $serializer_instance_38;
}
var Companion_instance_40;
function Companion_getInstance_42() {
  return Companion_instance_40;
}
var $serializer_instance_39;
function $serializer_getInstance_39() {
  if ($serializer_instance_39 === VOID)
    new $serializer_39();
  return $serializer_instance_39;
}
var Companion_instance_41;
function Companion_getInstance_43() {
  return Companion_instance_41;
}
var $serializer_instance_40;
function $serializer_getInstance_40() {
  if ($serializer_instance_40 === VOID)
    new $serializer_40();
  return $serializer_instance_40;
}
function InstanceV2$Companion$$childSerializers$_anonymous__4cfzk7() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
function InstanceV2$Companion$$childSerializers$_anonymous__4cfzk7_0() {
  return new ReferenceArraySerializer(getKClass(InstanceV2Rules), $serializer_getInstance_49());
}
var Companion_instance_42;
function Companion_getInstance_44() {
  if (Companion_instance_42 === VOID)
    new Companion_42();
  return Companion_instance_42;
}
var $serializer_instance_41;
function $serializer_getInstance_41() {
  if ($serializer_instance_41 === VOID)
    new $serializer_41();
  return $serializer_instance_41;
}
var Companion_instance_43;
function Companion_getInstance_45() {
  return Companion_instance_43;
}
var $serializer_instance_42;
function $serializer_getInstance_42() {
  if ($serializer_instance_42 === VOID)
    new $serializer_42();
  return $serializer_instance_42;
}
var Companion_instance_44;
function Companion_getInstance_46() {
  return Companion_instance_44;
}
var $serializer_instance_43;
function $serializer_getInstance_43() {
  if ($serializer_instance_43 === VOID)
    new $serializer_43();
  return $serializer_instance_43;
}
var Companion_instance_45;
function Companion_getInstance_47() {
  return Companion_instance_45;
}
var $serializer_instance_44;
function $serializer_getInstance_44() {
  if ($serializer_instance_44 === VOID)
    new $serializer_44();
  return $serializer_instance_44;
}
var Companion_instance_46;
function Companion_getInstance_48() {
  return Companion_instance_46;
}
var $serializer_instance_45;
function $serializer_getInstance_45() {
  if ($serializer_instance_45 === VOID)
    new $serializer_45();
  return $serializer_instance_45;
}
function InstanceV2MediaAttachments$Companion$$childSerializers$_anonymous__uea2hf() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_47;
function Companion_getInstance_49() {
  if (Companion_instance_47 === VOID)
    new Companion_47();
  return Companion_instance_47;
}
var $serializer_instance_46;
function $serializer_getInstance_46() {
  if ($serializer_instance_46 === VOID)
    new $serializer_46();
  return $serializer_instance_46;
}
var Companion_instance_48;
function Companion_getInstance_50() {
  return Companion_instance_48;
}
var $serializer_instance_47;
function $serializer_getInstance_47() {
  if ($serializer_instance_47 === VOID)
    new $serializer_47();
  return $serializer_instance_47;
}
var Companion_instance_49;
function Companion_getInstance_51() {
  return Companion_instance_49;
}
var $serializer_instance_48;
function $serializer_getInstance_48() {
  if ($serializer_instance_48 === VOID)
    new $serializer_48();
  return $serializer_instance_48;
}
var Companion_instance_50;
function Companion_getInstance_52() {
  return Companion_instance_50;
}
var $serializer_instance_49;
function $serializer_getInstance_49() {
  if ($serializer_instance_49 === VOID)
    new $serializer_49();
  return $serializer_instance_49;
}
var Companion_instance_51;
function Companion_getInstance_53() {
  return Companion_instance_51;
}
var $serializer_instance_50;
function $serializer_getInstance_50() {
  if ($serializer_instance_50 === VOID)
    new $serializer_50();
  return $serializer_instance_50;
}
var Companion_instance_52;
function Companion_getInstance_54() {
  return Companion_instance_52;
}
var $serializer_instance_51;
function $serializer_getInstance_51() {
  if ($serializer_instance_51 === VOID)
    new $serializer_51();
  return $serializer_instance_51;
}
var Companion_instance_53;
function Companion_getInstance_55() {
  return Companion_instance_53;
}
var $serializer_instance_52;
function $serializer_getInstance_52() {
  if ($serializer_instance_52 === VOID)
    new $serializer_52();
  return $serializer_instance_52;
}
var Companion_instance_54;
function Companion_getInstance_56() {
  return Companion_instance_54;
}
var $serializer_instance_53;
function $serializer_getInstance_53() {
  if ($serializer_instance_53 === VOID)
    new $serializer_53();
  return $serializer_instance_53;
}
var Companion_instance_55;
function Companion_getInstance_57() {
  return Companion_instance_55;
}
var $serializer_instance_54;
function $serializer_getInstance_54() {
  if ($serializer_instance_54 === VOID)
    new $serializer_54();
  return $serializer_instance_54;
}
var Companion_instance_56;
function Companion_getInstance_58() {
  return Companion_instance_56;
}
var $serializer_instance_55;
function $serializer_getInstance_55() {
  if ($serializer_instance_55 === VOID)
    new $serializer_55();
  return $serializer_instance_55;
}
var Companion_instance_57;
function Companion_getInstance_59() {
  return Companion_instance_57;
}
var $serializer_instance_56;
function $serializer_getInstance_56() {
  if ($serializer_instance_56 === VOID)
    new $serializer_56();
  return $serializer_instance_56;
}
var Companion_instance_58;
function Companion_getInstance_60() {
  return Companion_instance_58;
}
var $serializer_instance_57;
function $serializer_getInstance_57() {
  if ($serializer_instance_57 === VOID)
    new $serializer_57();
  return $serializer_instance_57;
}
var Companion_instance_59;
function Companion_getInstance_61() {
  return Companion_instance_59;
}
var $serializer_instance_58;
function $serializer_getInstance_58() {
  if ($serializer_instance_58 === VOID)
    new $serializer_58();
  return $serializer_instance_58;
}
var Companion_instance_60;
function Companion_getInstance_62() {
  return Companion_instance_60;
}
var $serializer_instance_59;
function $serializer_getInstance_59() {
  if ($serializer_instance_59 === VOID)
    new $serializer_59();
  return $serializer_instance_59;
}
var Companion_instance_61;
function Companion_getInstance_63() {
  return Companion_instance_61;
}
var $serializer_instance_60;
function $serializer_getInstance_60() {
  if ($serializer_instance_60 === VOID)
    new $serializer_60();
  return $serializer_instance_60;
}
function Node$Companion$$childSerializers$_anonymous__chcd9k() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().lg(), StringSerializer_getInstance());
}
var Companion_instance_62;
function Companion_getInstance_64() {
  if (Companion_instance_62 === VOID)
    new Companion_62();
  return Companion_instance_62;
}
var $serializer_instance_61;
function $serializer_getInstance_61() {
  if ($serializer_instance_61 === VOID)
    new $serializer_61();
  return $serializer_instance_61;
}
var Companion_instance_63;
function Companion_getInstance_65() {
  return Companion_instance_63;
}
var $serializer_instance_62;
function $serializer_getInstance_62() {
  if ($serializer_instance_62 === VOID)
    new $serializer_62();
  return $serializer_instance_62;
}
function NodeInfo$Companion$$childSerializers$_anonymous__navqe2() {
  return new ReferenceArraySerializer(getKClass(NodeInfoLinks), $serializer_getInstance_64());
}
var Companion_instance_64;
function Companion_getInstance_66() {
  if (Companion_instance_64 === VOID)
    new Companion_64();
  return Companion_instance_64;
}
var $serializer_instance_63;
function $serializer_getInstance_63() {
  if ($serializer_instance_63 === VOID)
    new $serializer_63();
  return $serializer_instance_63;
}
var Companion_instance_65;
function Companion_getInstance_67() {
  return Companion_instance_65;
}
var $serializer_instance_64;
function $serializer_getInstance_64() {
  if ($serializer_instance_64 === VOID)
    new $serializer_64();
  return $serializer_instance_64;
}
var Companion_instance_66;
function Companion_getInstance_68() {
  return Companion_instance_66;
}
var $serializer_instance_65;
function $serializer_getInstance_65() {
  if ($serializer_instance_65 === VOID)
    new $serializer_65();
  return $serializer_instance_65;
}
var Companion_instance_67;
function Companion_getInstance_69() {
  return Companion_instance_67;
}
var $serializer_instance_66;
function $serializer_getInstance_66() {
  if ($serializer_instance_66 === VOID)
    new $serializer_66();
  return $serializer_instance_66;
}
var Companion_instance_68;
function Companion_getInstance_70() {
  return Companion_instance_68;
}
var $serializer_instance_67;
function $serializer_getInstance_67() {
  if ($serializer_instance_67 === VOID)
    new $serializer_67();
  return $serializer_instance_67;
}
function PleromaStatus$Companion$$childSerializers$_anonymous__dsf7q6() {
  return new ReferenceArraySerializer(getKClass(PleromaReaction), $serializer_getInstance_67());
}
var Companion_instance_69;
function Companion_getInstance_71() {
  if (Companion_instance_69 === VOID)
    new Companion_69();
  return Companion_instance_69;
}
var $serializer_instance_68;
function $serializer_getInstance_68() {
  if ($serializer_instance_68 === VOID)
    new $serializer_68();
  return $serializer_instance_68;
}
function extractUrl($this, element) {
  // Inline function 'kotlin.text.toRegex' call
  var this_0 = '^\\s?<(.+)>\\s?$';
  // Inline function 'kotlin.text.replace' call
  return Regex.wh(this_0).bi(element, '$1');
}
function extractValue($this, url, key) {
  // Inline function 'kotlin.text.toRegex' call
  // Inline function 'kotlin.text.split' call
  var tmp0 = Regex.wh('\\?').ji(url, 0);
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.collections.dropLastWhile' call
    if (!tmp0.j1()) {
      var iterator = tmp0.p2(tmp0.k2());
      while (iterator.o7()) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = iterator.q7();
        if (!(charSequenceLength(this_0) === 0)) {
          tmp$ret$2 = take(tmp0, iterator.p7() + 1 | 0);
          break $l$block;
        }
      }
    }
    tmp$ret$2 = emptyList();
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_1 = tmp$ret$2;
  var tmp$ret$5 = copyToArray(this_1);
  var tmp0_0 = split(tmp$ret$5[1], ['&']);
  var tmp$ret$6;
  $l$block_0: {
    // Inline function 'kotlin.collections.dropLastWhile' call
    if (!tmp0_0.j1()) {
      var iterator_0 = tmp0_0.p2(tmp0_0.k2());
      while (iterator_0.o7()) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = iterator_0.q7();
        if (!(charSequenceLength(this_2) === 0)) {
          tmp$ret$6 = take(tmp0_0, iterator_0.p7() + 1 | 0);
          break $l$block_0;
        }
      }
    }
    tmp$ret$6 = emptyList();
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_3 = tmp$ret$6;
  var params = copyToArray(this_3);
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.d2(params.length);
  var inductionVariable = 0;
  var last = params.length;
  while (inductionVariable < last) {
    var item = params[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp0_1 = split(item, ['=']);
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      if (!tmp0_1.j1()) {
        var iterator_1 = tmp0_1.p2(tmp0_1.k2());
        while (iterator_1.o7()) {
          // Inline function 'kotlin.text.isEmpty' call
          var this_4 = iterator_1.q7();
          if (!(charSequenceLength(this_4) === 0)) {
            tmp$ret$13 = take(tmp0_1, iterator_1.p7() + 1 | 0);
            break $l$block_1;
          }
        }
      }
      tmp$ret$13 = emptyList();
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_5 = tmp$ret$13;
    var tmp$ret$12 = copyToArray(this_5);
    destination.e2(tmp$ret$12);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.o2();
  var _iterator__ex2g4s = destination.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    if (equals(element[0], key, true)) {
      destination_0.e2(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList.d2(collectionSizeOrDefault(destination_0, 10));
  var _iterator__ex2g4s_0 = destination_0.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var item_0 = _iterator__ex2g4s_0.n1();
    var tmp$ret$22 = item_0[1];
    destination_1.e2(tmp$ret$22);
  }
  return firstOrNull(destination_1);
}
var Companion_instance_70;
function Companion_getInstance_72() {
  return Companion_instance_70;
}
var Companion_instance_71;
function Companion_getInstance_73() {
  return Companion_instance_71;
}
var Companion_instance_72;
function Companion_getInstance_74() {
  return Companion_instance_72;
}
function AbstractAuthResourceImpl$_init_$lambda_a1qsz() {
  return Service_MASTODON_getInstance();
}
function AccountsResourceImpl$verifyCredentialsBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$verifyCredentialsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.wco($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$updateCredentialsBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$updateCredentialsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.wco($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$accountBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$accountBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.wco($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$followersBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$followersBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$followingBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$followingBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$statusesBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$statusesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$followBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$followBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$unfollowBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$unfollowBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$blockBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$blockBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$unblockBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$unblockBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$muteBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$muteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$unmuteBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$unmuteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$relationshipsBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$relationshipsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ycp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$searchBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$searchBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AppsResourceImpl$registerApplicationBlocking$slambda_0(this$0, $request) {
  var i = new AppsResourceImpl$registerApplicationBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BlocksResourceImpl$blocksBlocking$slambda_0(this$0, $request) {
  var i = new BlocksResourceImpl$blocksBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BookmarksResourceImpl$bookmarksBlocking$slambda_0(this$0, $request) {
  var i = new BookmarksResourceImpl$bookmarksBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function BookmarksResourceImpl$unbookmarkBlocking$slambda_0(this$0, $request) {
  var i = new BookmarksResourceImpl$unbookmarkBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DomainBlocksResourceImpl$domainBlocksBlocking$slambda_0(this$0, $request) {
  var i = new DomainBlocksResourceImpl$domainBlocksBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.zcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DomainBlocksResourceImpl$blockDomainBlocking$slambda_0(this$0, $request) {
  var i = new DomainBlocksResourceImpl$blockDomainBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DomainBlocksResourceImpl$unblockDomainBlocking$slambda_0(this$0, $request) {
  var i = new DomainBlocksResourceImpl$unblockDomainBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function EmojisResourceImpl$customEmojisBlocking$slambda_0(this$0) {
  var i = new EmojisResourceImpl$customEmojisBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.jcr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FavouritesResourceImpl$favouritesBlocking$slambda_0(this$0, $request) {
  var i = new FavouritesResourceImpl$favouritesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FollowRequestsResourceImpl$followRequestsBlocking$slambda_0(this$0) {
  var i = new FollowRequestsResourceImpl$followRequestsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FollowRequestsResourceImpl$authorizeFollowRequestBlocking$slambda_0(this$0, $request) {
  var i = new FollowRequestsResourceImpl$authorizeFollowRequestBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FollowRequestsResourceImpl$rejectFollowRequestBlocking$slambda_0(this$0, $request) {
  var i = new FollowRequestsResourceImpl$rejectFollowRequestBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FollowsResourceImpl$remoteFollowBlocking$slambda_0(this$0, $request) {
  var i = new FollowsResourceImpl$remoteFollowBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.wco($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function InstancesResourceImpl$instanceV1Blocking$slambda_0(this$0) {
  var i = new InstancesResourceImpl$instanceV1Blocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.ecs($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function InstancesResourceImpl$instanceV2Blocking$slambda_0(this$0) {
  var i = new InstancesResourceImpl$instanceV2Blocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.gcs($this$toBlocking, $completion);
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
function ListsResourceImpl$listsBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$listsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.kcs($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$listAccountsBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$listAccountsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$listBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$listBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.pcs($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$createListBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$createListBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.pcs($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$updateListBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$updateListBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.pcs($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$deleteListBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$deleteListBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$addAccountsToListBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$addAccountsToListBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ListsResourceImpl$deleteAccountsToListBlocking$slambda_0(this$0, $request) {
  var i = new ListsResourceImpl$deleteAccountsToListBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MastodonImpl$bookmarks$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$scheduledStatuses$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$domainBlocks$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$accounts$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$statuses$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$timelines$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$favourites$lambda(this$0) {
  return () => this$0.service();
}
function MastodonImpl$notifications$lambda(this$0) {
  return () => this$0.service();
}
function MediasResourceImpl$postMediaBlocking$slambda_0(this$0, $request) {
  var i = new MediasResourceImpl$postMediaBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.gcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MutesResourceImpl$mutesBlocking$slambda_0(this$0) {
  var i = new MutesResourceImpl$mutesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NodesResourceImpl$nodeInfoBlocking$slambda_0(this$0) {
  var i = new NodesResourceImpl$nodeInfoBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.pcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$notificationsBlocking$slambda_0(this$0, $request) {
  var i = new NotificationsResourceImpl$notificationsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$notificationBlocking$slambda_0(this$0, $request) {
  var i = new NotificationsResourceImpl$notificationBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.wcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$clearNotificationsBlocking$slambda_0(this$0) {
  var i = new NotificationsResourceImpl$clearNotificationsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$subscriptionBlocking$slambda_0(this$0) {
  var i = new NotificationsResourceImpl$subscriptionBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.zcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$pushSubscriptionBlocking$slambda_0(this$0, $request) {
  var i = new NotificationsResourceImpl$pushSubscriptionBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.wcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$editSubscriptionBlocking$slambda_0(this$0, $request) {
  var i = new NotificationsResourceImpl$editSubscriptionBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.wcu($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$issueAccessTokenWithCredentialsBlocking$slambda_0(this$0, $request) {
  var i = new OAuthResourceImpl$issueAccessTokenWithCredentialsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jcv($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$issueAccessTokenWithAuthorizationCodeBlocking$slambda_0(this$0, $request) {
  var i = new OAuthResourceImpl$issueAccessTokenWithAuthorizationCodeBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jcv($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$refreshAccessTokenBlocking$slambda_0(this$0, $request) {
  var i = new OAuthResourceImpl$refreshAccessTokenBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.jcv($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function OAuthResourceImpl$authorizationUrlBlocking$slambda_0(this$0, $request) {
  var i = new OAuthResourceImpl$authorizationUrlBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.qcv($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PollsResourceImpl$votePollBlocking$slambda_0(this$0, $request) {
  var i = new PollsResourceImpl$votePollBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ucv($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ReportsResourceImpl$reportsBlocking$slambda_0(this$0) {
  var i = new ReportsResourceImpl$reportsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.zcv($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ReportsResourceImpl$postReportBlocking$slambda_0(this$0, $request) {
  var i = new ReportsResourceImpl$postReportBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccw($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ScheduledStatusesResourceImpl$scheduledStatusesBlocking$slambda_0(this$0, $request) {
  var i = new ScheduledStatusesResourceImpl$scheduledStatusesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icw($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ScheduledStatusesResourceImpl$scheduledStatusBlocking$slambda_0(this$0, $request) {
  var i = new ScheduledStatusesResourceImpl$scheduledStatusBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcw($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ScheduledStatusesResourceImpl$patchScheduledStatusBlocking$slambda_0(this$0, $request) {
  var i = new ScheduledStatusesResourceImpl$patchScheduledStatusBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.lcw($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ScheduledStatusesResourceImpl$deleteScheduledStatusBlocking$slambda_0(this$0, $request) {
  var i = new ScheduledStatusesResourceImpl$deleteScheduledStatusBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function SearchResourceImpl$searchBlocking$slambda_0(this$0, $request) {
  var i = new SearchResourceImpl$searchBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.vcw($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$statusBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$statusBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$contextBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$contextBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$cardBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$cardBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.gcx($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$rebloggedByBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$rebloggedByBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$favouritedByBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$favouritedByBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.dcp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$postStatusBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$postStatusBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$deleteStatusBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$deleteStatusBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ccr($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$reblogBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$reblogBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$unreblogBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$unreblogBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$favouriteBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$favouriteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$unfavouriteBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$unfavouriteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$pinBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$pinBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function StatusesResourceImpl$unpinBlocking$slambda_0(this$0, $request) {
  var i = new StatusesResourceImpl$unpinBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.tcq($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$homeTimelineBlocking$slambda_0(this$0, $request) {
  var i = new TimelinesResourceImpl$homeTimelineBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$publicTimelineBlocking$slambda_0(this$0, $request) {
  var i = new TimelinesResourceImpl$publicTimelineBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$hashtagTimelineBlocking$slambda_0(this$0, $request) {
  var i = new TimelinesResourceImpl$hashtagTimelineBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$listTimelineBlocking$slambda_0(this$0, $request) {
  var i = new TimelinesResourceImpl$listTimelineBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.icp($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TimelinesResourceImpl$conversationsBlocking$slambda_0(this$0, $request) {
  var i = new TimelinesResourceImpl$conversationsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ocy($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TrendsResourceImpl$trendsBlocking$slambda_0(this$0, $request) {
  var i = new TrendsResourceImpl$trendsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.ucy($this$toBlocking, $completion);
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
initMetadataForInterface(Mastodon, 'Mastodon');
initMetadataForClass(MastodonException, 'MastodonException');
initMetadataForObject(MastodonFactory, 'MastodonFactory');
initMetadataForInterface(AccountsResource, 'AccountsResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(AppsResource, 'AppsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(BlocksResource, 'BlocksResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(BookmarksResource, 'BookmarksResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(DomainBlocksResource, 'DomainBlocksResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(EmojisResource, 'EmojisResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(FavouritesResource, 'FavouritesResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(FollowRequestsResource, 'FollowRequestsResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(FollowsResource, 'FollowsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(InstancesResource, 'InstancesResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(ListsResource, 'ListsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(MediasResource, 'MediasResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(MutesResource, 'MutesResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(NodesResource, 'NodesResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(NotificationsResource, 'NotificationsResource', VOID, VOID, VOID, [1, 2, 0]);
initMetadataForInterface(OAuthResource, 'OAuthResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(PollsResource, 'PollsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(ReportsResource, 'ReportsResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(ScheduledStatusesResource, 'ScheduledStatusesResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(SearchResource, 'SearchResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(StatusesResource, 'StatusesResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(TimelinesResource, 'TimelinesResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(TrendsResource, 'TrendsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForClass(Page, 'Page', Page);
initMetadataForClass(Range, 'Range', Range);
initMetadataForClass(AccountsAccountRequest, 'AccountsAccountRequest', AccountsAccountRequest);
initMetadataForClass(AccountsBlockRequest, 'AccountsBlockRequest', AccountsBlockRequest);
initMetadataForClass(AccountsFollowRequest, 'AccountsFollowRequest', AccountsFollowRequest);
initMetadataForClass(AccountsFollowersRequest, 'AccountsFollowersRequest', AccountsFollowersRequest);
initMetadataForClass(AccountsFollowingRequest, 'AccountsFollowingRequest', AccountsFollowingRequest);
initMetadataForClass(AccountsMuteRequest, 'AccountsMuteRequest', AccountsMuteRequest);
initMetadataForClass(AccountsRelationshipsRequest, 'AccountsRelationshipsRequest', AccountsRelationshipsRequest);
initMetadataForClass(AccountsSearchRequest, 'AccountsSearchRequest', AccountsSearchRequest);
initMetadataForClass(AccountsStatusesRequest, 'AccountsStatusesRequest', AccountsStatusesRequest);
initMetadataForClass(AccountsUnblockRequest, 'AccountsUnblockRequest', AccountsUnblockRequest);
initMetadataForClass(AccountsUnfollowRequest, 'AccountsUnfollowRequest', AccountsUnfollowRequest);
initMetadataForClass(AccountsUnmuteRequest, 'AccountsUnmuteRequest', AccountsUnmuteRequest);
initMetadataForClass(AccountsUpdateCredentialsRequest, 'AccountsUpdateCredentialsRequest', AccountsUpdateCredentialsRequest);
initMetadataForClass(AppsRegisterApplicationRequest, 'AppsRegisterApplicationRequest', AppsRegisterApplicationRequest);
initMetadataForClass(BlocksBlocksRequest, 'BlocksBlocksRequest', BlocksBlocksRequest);
initMetadataForClass(BookmarksGetBookmarksRequest, 'BookmarksGetBookmarksRequest', BookmarksGetBookmarksRequest);
initMetadataForClass(BookmarksUnbookmarkRequest, 'BookmarksUnbookmarkRequest', BookmarksUnbookmarkRequest);
initMetadataForClass(DomainBlocksBlockDomainRequest, 'DomainBlocksBlockDomainRequest', DomainBlocksBlockDomainRequest);
initMetadataForClass(DomainBlocksGetDomainBlocksRequest, 'DomainBlocksGetDomainBlocksRequest', DomainBlocksGetDomainBlocksRequest);
initMetadataForClass(DomainBlocksUnblockDomainRequest, 'DomainBlocksUnblockDomainRequest', DomainBlocksUnblockDomainRequest);
initMetadataForClass(FavouritesFavouritesRequest, 'FavouritesFavouritesRequest', FavouritesFavouritesRequest);
initMetadataForClass(FollowRequestsAuthorizeFollowRequestRequest, 'FollowRequestsAuthorizeFollowRequestRequest', FollowRequestsAuthorizeFollowRequestRequest);
initMetadataForClass(FollowRequestsRejectFollowRequestRequest, 'FollowRequestsRejectFollowRequestRequest', FollowRequestsRejectFollowRequestRequest);
initMetadataForClass(FollowsRemoteFollowRequest, 'FollowsRemoteFollowRequest', FollowsRemoteFollowRequest);
initMetadataForClass(ListsAddAccountsToListRequest, 'ListsAddAccountsToListRequest', ListsAddAccountsToListRequest);
initMetadataForClass(ListsCreateListRequest, 'ListsCreateListRequest', ListsCreateListRequest);
initMetadataForClass(ListsDeleteAccountsToListRequest, 'ListsDeleteAccountsToListRequest', ListsDeleteAccountsToListRequest);
initMetadataForClass(ListsDeleteListRequest, 'ListsDeleteListRequest', ListsDeleteListRequest);
initMetadataForClass(ListsListAccountsRequest, 'ListsListAccountsRequest', ListsListAccountsRequest);
initMetadataForClass(ListsListRequest, 'ListsListRequest', ListsListRequest);
initMetadataForClass(ListsListsRequest, 'ListsListsRequest', ListsListsRequest);
initMetadataForClass(ListsUpdateListRequest, 'ListsUpdateListRequest', ListsUpdateListRequest);
initMetadataForClass(MediasPostMediaRequest, 'MediasPostMediaRequest', MediasPostMediaRequest);
initMetadataForClass(NotificationsEditSubscriptionRequest, 'NotificationsEditSubscriptionRequest', NotificationsEditSubscriptionRequest);
initMetadataForClass(NotificationsNotificationRequest, 'NotificationsNotificationRequest', NotificationsNotificationRequest);
initMetadataForClass(NotificationsNotificationsRequest, 'NotificationsNotificationsRequest', NotificationsNotificationsRequest);
initMetadataForClass(NotificationsPostSubscriptionRequest, 'NotificationsPostSubscriptionRequest', NotificationsPostSubscriptionRequest);
initMetadataForClass(OAuthAuthorizationUrlRequest, 'OAuthAuthorizationUrlRequest', OAuthAuthorizationUrlRequest);
initMetadataForClass(OAuthIssueAccessTokenWithAuthorizationCodeRequest, 'OAuthIssueAccessTokenWithAuthorizationCodeRequest', OAuthIssueAccessTokenWithAuthorizationCodeRequest);
initMetadataForClass(OAuthIssueAccessTokenWithCredentialsRequest, 'OAuthIssueAccessTokenWithCredentialsRequest', OAuthIssueAccessTokenWithCredentialsRequest);
initMetadataForClass(OAuthRefreshAccessTokenRequest, 'OAuthRefreshAccessTokenRequest', OAuthRefreshAccessTokenRequest);
initMetadataForClass(PollsVotePollRequest, 'PollsVotePollRequest', PollsVotePollRequest);
initMetadataForClass(ReportsPostReportRequest, 'ReportsPostReportRequest', ReportsPostReportRequest);
initMetadataForClass(ScheduledStatusesGetScheduledStatusesRequest, 'ScheduledStatusesGetScheduledStatusesRequest', ScheduledStatusesGetScheduledStatusesRequest);
initMetadataForClass(ScheduledStatusesPatchScheduledStatusRequest, 'ScheduledStatusesPatchScheduledStatusRequest', ScheduledStatusesPatchScheduledStatusRequest);
initMetadataForClass(ScheduledStatusesScheduledStatusRequest, 'ScheduledStatusesScheduledStatusRequest', ScheduledStatusesScheduledStatusRequest);
initMetadataForClass(SearchSearchRequest, 'SearchSearchRequest', SearchSearchRequest);
initMetadataForClass(StatusesCardRequest, 'StatusesCardRequest', StatusesCardRequest);
initMetadataForClass(StatusesContextRequest, 'StatusesContextRequest', StatusesContextRequest);
initMetadataForClass(StatusesDeleteStatusRequest, 'StatusesDeleteStatusRequest', StatusesDeleteStatusRequest);
initMetadataForClass(StatusesFavouriteRequest, 'StatusesFavouriteRequest', StatusesFavouriteRequest);
initMetadataForClass(StatusesFavouritedByRequest, 'StatusesFavouritedByRequest', StatusesFavouritedByRequest);
initMetadataForClass(StatusesPinRequest, 'StatusesPinRequest', StatusesPinRequest);
initMetadataForClass(StatusesPostStatusRequest, 'StatusesPostStatusRequest', StatusesPostStatusRequest);
initMetadataForClass(StatusesReblogRequest, 'StatusesReblogRequest', StatusesReblogRequest);
initMetadataForClass(StatusesRebloggedByRequest, 'StatusesRebloggedByRequest', StatusesRebloggedByRequest);
initMetadataForClass(StatusesStatusRequest, 'StatusesStatusRequest', StatusesStatusRequest);
initMetadataForClass(StatusesUnfavouriteRequest, 'StatusesUnfavouriteRequest', StatusesUnfavouriteRequest);
initMetadataForClass(StatusesUnpinRequest, 'StatusesUnpinRequest', StatusesUnpinRequest);
initMetadataForClass(StatusesUnreblogRequest, 'StatusesUnreblogRequest', StatusesUnreblogRequest);
initMetadataForClass(TimelinesConversationsRequest, 'TimelinesConversationsRequest', TimelinesConversationsRequest);
initMetadataForClass(TimelinesHashTagTimelineRequest, 'TimelinesHashTagTimelineRequest', TimelinesHashTagTimelineRequest);
initMetadataForClass(TimelinesHomeTimelineRequest, 'TimelinesHomeTimelineRequest', TimelinesHomeTimelineRequest);
initMetadataForClass(TimelinesListTimelineRequest, 'TimelinesListTimelineRequest', TimelinesListTimelineRequest);
initMetadataForClass(TimelinesPublicTimelineRequest, 'TimelinesPublicTimelineRequest', TimelinesPublicTimelineRequest);
initMetadataForClass(TrendsTrendsRequest, 'TrendsTrendsRequest', TrendsTrendsRequest);
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit', ResponseUnit);
initMetadataForCompanion(Companion);
initMetadataForClass(Service, 'Service');
initMetadataForCompanion(Companion_0);
protoOf($serializer).d1b = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccessToken, 'AccessToken', AccessToken, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_0).d1b = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Account, 'Account', Account, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_2);
protoOf($serializer_1).d1b = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccountList, 'AccountList', AccountList, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).d1b = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccountSource, 'AccountSource', AccountSource, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).d1b = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Alert, 'Alert', Alert, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).d1b = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Application, 'Application', Application, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_6);
protoOf($serializer_5).d1b = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Attachment, 'Attachment', Attachment, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_7);
protoOf($serializer_6).d1b = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Card, 'Card', Card, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_8);
protoOf($serializer_7).d1b = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ClientCredential, 'ClientCredential', ClientCredential, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_9);
protoOf($serializer_8).d1b = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Context, 'Context', Context, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_10);
protoOf($serializer_9).d1b = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Conversation, 'Conversation', Conversation, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_11);
protoOf($serializer_10).d1b = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Emoji, 'Emoji', Emoji, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_12);
protoOf($serializer_11).d1b = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Error_0, 'Error', Error_0, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForCompanion(Companion_13);
protoOf($serializer_12).d1b = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Field, 'Field', Field, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_14);
protoOf($serializer_13).d1b = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(History, 'History', History, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_15);
protoOf($serializer_14).d1b = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Mention, 'Mention', Mention, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_16);
protoOf($serializer_15).d1b = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Notification, 'Notification', Notification, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_17);
protoOf($serializer_16).d1b = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Poll, 'Poll', Poll, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_18);
protoOf($serializer_17).d1b = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PollOption, 'PollOption', PollOption, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_19);
protoOf($serializer_18).d1b = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Relationship, 'Relationship', Relationship, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_20);
protoOf($serializer_19).d1b = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Report, 'Report', Report, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_21);
protoOf($serializer_20).d1b = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Results, 'Results', Results, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_22);
protoOf($serializer_21).d1b = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Role, 'Role', Role, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_23);
protoOf($serializer_22).d1b = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ScheduledStatus, 'ScheduledStatus', ScheduledStatus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_24);
protoOf($serializer_23).d1b = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ScheduledStatusParams, 'ScheduledStatusParams', ScheduledStatusParams, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_25);
protoOf($serializer_24).d1b = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Status, 'Status', Status, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_26);
protoOf($serializer_25).d1b = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Subscription, 'Subscription', Subscription, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_27);
protoOf($serializer_26).d1b = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Tag, 'Tag', Tag, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_28);
protoOf($serializer_27).d1b = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Trend, 'Trend', Trend, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_29);
protoOf($serializer_28).d1b = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(WebPush, 'WebPush', WebPush, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_30);
protoOf($serializer_29).d1b = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Filter, 'Filter', Filter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_31);
protoOf($serializer_30).d1b = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterKeyword, 'FilterKeyword', FilterKeyword, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_32);
protoOf($serializer_31).d1b = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterStatus, 'FilterStatus', FilterStatus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_33);
protoOf($serializer_32).d1b = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1, 'InstanceV1', InstanceV1, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_34);
protoOf($serializer_33).d1b = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Configuration, 'InstanceV1Configuration', InstanceV1Configuration, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_35);
protoOf($serializer_34).d1b = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Fields, 'InstanceV1Fields', InstanceV1Fields, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_36);
protoOf($serializer_35).d1b = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1MediaAttachments, 'InstanceV1MediaAttachments', InstanceV1MediaAttachments, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForCompanion(Companion_37);
protoOf($serializer_36).d1b = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Polls, 'InstanceV1Polls', InstanceV1Polls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_36});
initMetadataForCompanion(Companion_38);
protoOf($serializer_37).d1b = typeParametersSerializers;
initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Rules, 'InstanceV1Rules', InstanceV1Rules, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
initMetadataForCompanion(Companion_39);
protoOf($serializer_38).d1b = typeParametersSerializers;
initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Stats, 'InstanceV1Stats', InstanceV1Stats, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_38});
initMetadataForCompanion(Companion_40);
protoOf($serializer_39).d1b = typeParametersSerializers;
initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Statuses, 'InstanceV1Statuses', InstanceV1Statuses, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_39});
initMetadataForCompanion(Companion_41);
protoOf($serializer_40).d1b = typeParametersSerializers;
initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV1Urls, 'InstanceV1Urls', InstanceV1Urls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_40});
initMetadataForCompanion(Companion_42);
protoOf($serializer_41).d1b = typeParametersSerializers;
initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2, 'InstanceV2', InstanceV2, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
initMetadataForCompanion(Companion_43);
protoOf($serializer_42).d1b = typeParametersSerializers;
initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Accounts, 'InstanceV2Accounts', InstanceV2Accounts, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
initMetadataForCompanion(Companion_44);
protoOf($serializer_43).d1b = typeParametersSerializers;
initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Configuration, 'InstanceV2Configuration', InstanceV2Configuration, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
initMetadataForCompanion(Companion_45);
protoOf($serializer_44).d1b = typeParametersSerializers;
initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Contact, 'InstanceV2Contact', InstanceV2Contact, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
initMetadataForCompanion(Companion_46);
protoOf($serializer_45).d1b = typeParametersSerializers;
initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Fields, 'InstanceV2Fields', InstanceV2Fields, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
initMetadataForCompanion(Companion_47);
protoOf($serializer_46).d1b = typeParametersSerializers;
initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2MediaAttachments, 'InstanceV2MediaAttachments', InstanceV2MediaAttachments, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_46});
initMetadataForCompanion(Companion_48);
protoOf($serializer_47).d1b = typeParametersSerializers;
initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Polls, 'InstanceV2Polls', InstanceV2Polls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_47});
initMetadataForCompanion(Companion_49);
protoOf($serializer_48).d1b = typeParametersSerializers;
initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Registrations, 'InstanceV2Registrations', InstanceV2Registrations, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_48});
initMetadataForCompanion(Companion_50);
protoOf($serializer_49).d1b = typeParametersSerializers;
initMetadataForObject($serializer_49, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Rules, 'InstanceV2Rules', InstanceV2Rules, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_49});
initMetadataForCompanion(Companion_51);
protoOf($serializer_50).d1b = typeParametersSerializers;
initMetadataForObject($serializer_50, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Statuses, 'InstanceV2Statuses', InstanceV2Statuses, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_50});
initMetadataForCompanion(Companion_52);
protoOf($serializer_51).d1b = typeParametersSerializers;
initMetadataForObject($serializer_51, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Thumbnail, 'InstanceV2Thumbnail', InstanceV2Thumbnail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_51});
initMetadataForCompanion(Companion_53);
protoOf($serializer_52).d1b = typeParametersSerializers;
initMetadataForObject($serializer_52, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Translation, 'InstanceV2Translation', InstanceV2Translation, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_52});
initMetadataForCompanion(Companion_54);
protoOf($serializer_53).d1b = typeParametersSerializers;
initMetadataForObject($serializer_53, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Urls, 'InstanceV2Urls', InstanceV2Urls, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_53});
initMetadataForCompanion(Companion_55);
protoOf($serializer_54).d1b = typeParametersSerializers;
initMetadataForObject($serializer_54, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Usage, 'InstanceV2Usage', InstanceV2Usage, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_54});
initMetadataForCompanion(Companion_56);
protoOf($serializer_55).d1b = typeParametersSerializers;
initMetadataForObject($serializer_55, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Users, 'InstanceV2Users', InstanceV2Users, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_55});
initMetadataForCompanion(Companion_57);
protoOf($serializer_56).d1b = typeParametersSerializers;
initMetadataForObject($serializer_56, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Vapid, 'InstanceV2Vapid', InstanceV2Vapid, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_56});
initMetadataForCompanion(Companion_58);
protoOf($serializer_57).d1b = typeParametersSerializers;
initMetadataForObject($serializer_57, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InstanceV2Versions, 'InstanceV2Versions', InstanceV2Versions, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_57});
initMetadataForCompanion(Companion_59);
protoOf($serializer_58).d1b = typeParametersSerializers;
initMetadataForObject($serializer_58, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_58});
initMetadataForCompanion(Companion_60);
protoOf($serializer_59).d1b = typeParametersSerializers;
initMetadataForObject($serializer_59, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MetaFocus, 'MetaFocus', MetaFocus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_59});
initMetadataForCompanion(Companion_61);
protoOf($serializer_60).d1b = typeParametersSerializers;
initMetadataForObject($serializer_60, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MetaOriginal, 'MetaOriginal', MetaOriginal, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_60});
initMetadataForCompanion(Companion_62);
protoOf($serializer_61).d1b = typeParametersSerializers;
initMetadataForObject($serializer_61, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Node, 'Node', Node, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_61});
initMetadataForCompanion(Companion_63);
protoOf($serializer_62).d1b = typeParametersSerializers;
initMetadataForObject($serializer_62, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NodeSoftware, 'NodeSoftware', NodeSoftware, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_62});
initMetadataForCompanion(Companion_64);
protoOf($serializer_63).d1b = typeParametersSerializers;
initMetadataForObject($serializer_63, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NodeInfo, 'NodeInfo', NodeInfo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_63});
initMetadataForCompanion(Companion_65);
protoOf($serializer_64).d1b = typeParametersSerializers;
initMetadataForObject($serializer_64, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NodeInfoLinks, 'NodeInfoLinks', NodeInfoLinks, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_64});
initMetadataForCompanion(Companion_66);
protoOf($serializer_65).d1b = typeParametersSerializers;
initMetadataForObject($serializer_65, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaAccount, 'PleromaAccount', PleromaAccount, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_65});
initMetadataForCompanion(Companion_67);
protoOf($serializer_66).d1b = typeParametersSerializers;
initMetadataForObject($serializer_66, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaContent, 'PleromaContent', PleromaContent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_66});
initMetadataForCompanion(Companion_68);
protoOf($serializer_67).d1b = typeParametersSerializers;
initMetadataForObject($serializer_67, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaReaction, 'PleromaReaction', PleromaReaction, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_67});
initMetadataForCompanion(Companion_69);
protoOf($serializer_68).d1b = typeParametersSerializers;
initMetadataForObject($serializer_68, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PleromaStatus, 'PleromaStatus', PleromaStatus, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_68});
initMetadataForCompanion(Companion_70);
initMetadataForClass(Link, 'Link', Link);
initMetadataForCompanion(Companion_71);
initMetadataForClass(RateLimit, 'RateLimit', RateLimit);
initMetadataForCompanion(Companion_72);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForClass(AbstractAuthResourceImpl, 'AbstractAuthResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$verifyCredentialsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$updateCredentialsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$accountBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$followersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$followingBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$statusesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$followBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$unfollowBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$blockBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$unblockBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$muteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$unmuteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$relationshipsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$searchBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AccountsResourceImpl, 'AccountsResourceImpl', VOID, VOID, [AccountsResource], [0, 1]);
initMetadataForLambda(AppsResourceImpl$registerApplicationBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AppsResourceImpl, 'AppsResourceImpl', VOID, VOID, [AppsResource], [1]);
initMetadataForLambda(BlocksResourceImpl$blocksBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(BlocksResourceImpl, 'BlocksResourceImpl', VOID, VOID, [BlocksResource], [1]);
initMetadataForLambda(BookmarksResourceImpl$bookmarksBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(BookmarksResourceImpl$unbookmarkBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(BookmarksResourceImpl, 'BookmarksResourceImpl', VOID, VOID, [BookmarksResource], [1]);
initMetadataForLambda(DomainBlocksResourceImpl$domainBlocksBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DomainBlocksResourceImpl$blockDomainBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DomainBlocksResourceImpl$unblockDomainBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(DomainBlocksResourceImpl, 'DomainBlocksResourceImpl', VOID, VOID, [DomainBlocksResource], [1]);
initMetadataForLambda(EmojisResourceImpl$customEmojisBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(EmojisResourceImpl, 'EmojisResourceImpl', VOID, VOID, [EmojisResource], [0, 1]);
initMetadataForLambda(FavouritesResourceImpl$favouritesBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(FavouritesResourceImpl, 'FavouritesResourceImpl', VOID, VOID, [FavouritesResource], [1]);
initMetadataForLambda(FollowRequestsResourceImpl$followRequestsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(FollowRequestsResourceImpl$authorizeFollowRequestBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(FollowRequestsResourceImpl$rejectFollowRequestBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(FollowRequestsResourceImpl, 'FollowRequestsResourceImpl', VOID, VOID, [FollowRequestsResource], [0, 1]);
initMetadataForLambda(FollowsResourceImpl$remoteFollowBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(FollowsResourceImpl, 'FollowsResourceImpl', VOID, VOID, [FollowsResource], [1]);
initMetadataForLambda(InstancesResourceImpl$instanceV1Blocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(InstancesResourceImpl$instanceV2Blocking$slambda, VOID, VOID, [1]);
initMetadataForClass(InstancesResourceImpl, 'InstancesResourceImpl', VOID, VOID, [InstancesResource], [0, 1]);
initMetadataForObject(InternalUtility, 'InternalUtility');
initMetadataForLambda(ListsResourceImpl$listsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$listAccountsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$listBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$createListBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$updateListBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$deleteListBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$addAccountsToListBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ListsResourceImpl$deleteAccountsToListBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(ListsResourceImpl, 'ListsResourceImpl', VOID, VOID, [ListsResource], [1]);
initMetadataForClass(MastodonImpl, 'MastodonImpl', VOID, VOID, [Mastodon]);
initMetadataForLambda(MediasResourceImpl$postMediaBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(MediasResourceImpl, 'MediasResourceImpl', VOID, VOID, [MediasResource], [1]);
initMetadataForLambda(MutesResourceImpl$mutesBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(MutesResourceImpl, 'MutesResourceImpl', VOID, VOID, [MutesResource], [0, 1]);
initMetadataForLambda(NodesResourceImpl$nodeInfoBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(NodesResourceImpl, 'NodesResourceImpl', VOID, VOID, [NodesResource], [0, 1]);
initMetadataForLambda(NotificationsResourceImpl$notificationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$notificationBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$clearNotificationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$subscriptionBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$pushSubscriptionBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(NotificationsResourceImpl$editSubscriptionBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(NotificationsResourceImpl, 'NotificationsResourceImpl', VOID, VOID, [NotificationsResource], [1, 0]);
initMetadataForLambda(OAuthResourceImpl$issueAccessTokenWithCredentialsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(OAuthResourceImpl$issueAccessTokenWithAuthorizationCodeBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(OAuthResourceImpl$refreshAccessTokenBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(OAuthResourceImpl$authorizationUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(OAuthResourceImpl, 'OAuthResourceImpl', VOID, VOID, [OAuthResource], [1]);
initMetadataForLambda(PollsResourceImpl$votePollBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PollsResourceImpl, 'PollsResourceImpl', VOID, VOID, [PollsResource], [1]);
initMetadataForLambda(ReportsResourceImpl$reportsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ReportsResourceImpl$postReportBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(ReportsResourceImpl, 'ReportsResourceImpl', VOID, VOID, [ReportsResource], [0, 1]);
initMetadataForLambda(ScheduledStatusesResourceImpl$scheduledStatusesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ScheduledStatusesResourceImpl$scheduledStatusBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ScheduledStatusesResourceImpl$patchScheduledStatusBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ScheduledStatusesResourceImpl$deleteScheduledStatusBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(ScheduledStatusesResourceImpl, 'ScheduledStatusesResourceImpl', VOID, VOID, [ScheduledStatusesResource], [1]);
initMetadataForLambda(SearchResourceImpl$searchBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(SearchResourceImpl, 'SearchResourceImpl', VOID, VOID, [SearchResource], [1]);
initMetadataForLambda(StatusesResourceImpl$statusBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$contextBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$cardBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$rebloggedByBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$favouritedByBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$postStatusBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$deleteStatusBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$reblogBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$unreblogBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$favouriteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$unfavouriteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$pinBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(StatusesResourceImpl$unpinBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(StatusesResourceImpl, 'StatusesResourceImpl', VOID, VOID, [StatusesResource], [1]);
initMetadataForLambda(TimelinesResourceImpl$homeTimelineBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$publicTimelineBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$hashtagTimelineBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$listTimelineBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TimelinesResourceImpl$conversationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(TimelinesResourceImpl, 'TimelinesResourceImpl', VOID, VOID, [TimelinesResource], [1]);
initMetadataForLambda(TrendsResourceImpl$trendsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(TrendsResourceImpl, 'TrendsResourceImpl', VOID, VOID, [TrendsResource], [1]);
initMetadataForObject(MediaType, 'MediaType');
//endregion
//region block: init
MastodonFactory_instance = new MastodonFactory();
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_2 = new Companion_2();
Companion_instance_4 = new Companion_4();
Companion_instance_5 = new Companion_5();
Companion_instance_6 = new Companion_6();
Companion_instance_7 = new Companion_7();
Companion_instance_8 = new Companion_8();
Companion_instance_11 = new Companion_11();
Companion_instance_12 = new Companion_12();
Companion_instance_13 = new Companion_13();
Companion_instance_14 = new Companion_14();
Companion_instance_15 = new Companion_15();
Companion_instance_16 = new Companion_16();
Companion_instance_18 = new Companion_18();
Companion_instance_19 = new Companion_19();
Companion_instance_20 = new Companion_20();
Companion_instance_22 = new Companion_22();
Companion_instance_26 = new Companion_26();
Companion_instance_29 = new Companion_29();
Companion_instance_31 = new Companion_31();
Companion_instance_32 = new Companion_32();
Companion_instance_34 = new Companion_34();
Companion_instance_35 = new Companion_35();
Companion_instance_37 = new Companion_37();
Companion_instance_38 = new Companion_38();
Companion_instance_39 = new Companion_39();
Companion_instance_40 = new Companion_40();
Companion_instance_41 = new Companion_41();
Companion_instance_43 = new Companion_43();
Companion_instance_44 = new Companion_44();
Companion_instance_45 = new Companion_45();
Companion_instance_46 = new Companion_46();
Companion_instance_48 = new Companion_48();
Companion_instance_49 = new Companion_49();
Companion_instance_50 = new Companion_50();
Companion_instance_51 = new Companion_51();
Companion_instance_52 = new Companion_52();
Companion_instance_53 = new Companion_53();
Companion_instance_54 = new Companion_54();
Companion_instance_55 = new Companion_55();
Companion_instance_56 = new Companion_56();
Companion_instance_57 = new Companion_57();
Companion_instance_58 = new Companion_58();
Companion_instance_59 = new Companion_59();
Companion_instance_60 = new Companion_60();
Companion_instance_61 = new Companion_61();
Companion_instance_63 = new Companion_63();
Companion_instance_65 = new Companion_65();
Companion_instance_66 = new Companion_66();
Companion_instance_67 = new Companion_67();
Companion_instance_68 = new Companion_68();
Companion_instance_70 = new Companion_70();
Companion_instance_71 = new Companion_71();
Companion_instance_72 = new Companion_72();
//endregion
//region block: exports
var MastodonFactory_0 = {getInstance: MastodonFactory_getInstance};
Service.values = values;
Service.valueOf = valueOf;
defineProp(Service, 'MASTODON', Service_MASTODON_getInstance, VOID, true);
defineProp(Service, 'PIXELFED', Service_PIXELFED_getInstance, VOID, true);
defineProp(Service, 'PLEROMA', Service_PLEROMA_getInstance, VOID, true);
defineProp(Service, 'Companion', Companion_getInstance_1, VOID, true);
defineProp(Link, 'Companion', Companion_getInstance_72, VOID, true);
defineProp(RateLimit, 'Companion', Companion_getInstance_73, VOID, true);
export {
  MastodonFactory_0 as MastodonFactory,
  Page as Page,
  Range as Range,
  AccountsAccountRequest as AccountsAccountRequest,
  AccountsBlockRequest as AccountsBlockRequest,
  AccountsFollowRequest as AccountsFollowRequest,
  AccountsFollowersRequest as AccountsFollowersRequest,
  AccountsFollowingRequest as AccountsFollowingRequest,
  AccountsMuteRequest as AccountsMuteRequest,
  AccountsRelationshipsRequest as AccountsRelationshipsRequest,
  AccountsSearchRequest as AccountsSearchRequest,
  AccountsStatusesRequest as AccountsStatusesRequest,
  AccountsUnblockRequest as AccountsUnblockRequest,
  AccountsUnfollowRequest as AccountsUnfollowRequest,
  AccountsUnmuteRequest as AccountsUnmuteRequest,
  AccountsUpdateCredentialsRequest as AccountsUpdateCredentialsRequest,
  AppsRegisterApplicationRequest as AppsRegisterApplicationRequest,
  BlocksBlocksRequest as BlocksBlocksRequest,
  BookmarksGetBookmarksRequest as BookmarksGetBookmarksRequest,
  BookmarksUnbookmarkRequest as BookmarksUnbookmarkRequest,
  DomainBlocksBlockDomainRequest as DomainBlocksBlockDomainRequest,
  DomainBlocksGetDomainBlocksRequest as DomainBlocksGetDomainBlocksRequest,
  DomainBlocksUnblockDomainRequest as DomainBlocksUnblockDomainRequest,
  FavouritesFavouritesRequest as FavouritesFavouritesRequest,
  FollowRequestsAuthorizeFollowRequestRequest as FollowRequestsAuthorizeFollowRequestRequest,
  FollowRequestsRejectFollowRequestRequest as FollowRequestsRejectFollowRequestRequest,
  FollowsRemoteFollowRequest as FollowsRemoteFollowRequest,
  ListsAddAccountsToListRequest as ListsAddAccountsToListRequest,
  ListsCreateListRequest as ListsCreateListRequest,
  ListsDeleteAccountsToListRequest as ListsDeleteAccountsToListRequest,
  ListsDeleteListRequest as ListsDeleteListRequest,
  ListsListAccountsRequest as ListsListAccountsRequest,
  ListsListRequest as ListsListRequest,
  ListsListsRequest as ListsListsRequest,
  ListsUpdateListRequest as ListsUpdateListRequest,
  MediasPostMediaRequest as MediasPostMediaRequest,
  NotificationsEditSubscriptionRequest as NotificationsEditSubscriptionRequest,
  NotificationsNotificationRequest as NotificationsNotificationRequest,
  NotificationsNotificationsRequest as NotificationsNotificationsRequest,
  NotificationsPostSubscriptionRequest as NotificationsPostSubscriptionRequest,
  OAuthAuthorizationUrlRequest as OAuthAuthorizationUrlRequest,
  OAuthIssueAccessTokenWithAuthorizationCodeRequest as OAuthIssueAccessTokenWithAuthorizationCodeRequest,
  OAuthIssueAccessTokenWithCredentialsRequest as OAuthIssueAccessTokenWithCredentialsRequest,
  OAuthRefreshAccessTokenRequest as OAuthRefreshAccessTokenRequest,
  PollsVotePollRequest as PollsVotePollRequest,
  ReportsPostReportRequest as ReportsPostReportRequest,
  ScheduledStatusesGetScheduledStatusesRequest as ScheduledStatusesGetScheduledStatusesRequest,
  ScheduledStatusesPatchScheduledStatusRequest as ScheduledStatusesPatchScheduledStatusRequest,
  ScheduledStatusesScheduledStatusRequest as ScheduledStatusesScheduledStatusRequest,
  SearchSearchRequest as SearchSearchRequest,
  StatusesCardRequest as StatusesCardRequest,
  StatusesContextRequest as StatusesContextRequest,
  StatusesDeleteStatusRequest as StatusesDeleteStatusRequest,
  StatusesFavouriteRequest as StatusesFavouriteRequest,
  StatusesFavouritedByRequest as StatusesFavouritedByRequest,
  StatusesPinRequest as StatusesPinRequest,
  StatusesPostStatusRequest as StatusesPostStatusRequest,
  StatusesReblogRequest as StatusesReblogRequest,
  StatusesRebloggedByRequest as StatusesRebloggedByRequest,
  StatusesStatusRequest as StatusesStatusRequest,
  StatusesUnfavouriteRequest as StatusesUnfavouriteRequest,
  StatusesUnpinRequest as StatusesUnpinRequest,
  StatusesUnreblogRequest as StatusesUnreblogRequest,
  TimelinesConversationsRequest as TimelinesConversationsRequest,
  TimelinesHashTagTimelineRequest as TimelinesHashTagTimelineRequest,
  TimelinesHomeTimelineRequest as TimelinesHomeTimelineRequest,
  TimelinesListTimelineRequest as TimelinesListTimelineRequest,
  TimelinesPublicTimelineRequest as TimelinesPublicTimelineRequest,
  TrendsTrendsRequest as TrendsTrendsRequest,
  Response as Response,
  ResponseUnit as ResponseUnit,
  Service as Service,
  AccessToken as AccessToken,
  Account as Account,
  AccountList as AccountList,
  AccountSource as AccountSource,
  Alert as Alert,
  Application as Application,
  Attachment as Attachment,
  Card as Card,
  ClientCredential as ClientCredential,
  Context as Context,
  Conversation as Conversation,
  Emoji as Emoji,
  Error_0 as Error,
  Field as Field,
  History as History,
  Mention as Mention,
  Notification as Notification,
  Poll as Poll,
  PollOption as PollOption,
  Relationship as Relationship,
  Report as Report,
  Results as Results,
  Role as Role,
  ScheduledStatus as ScheduledStatus,
  ScheduledStatusParams as ScheduledStatusParams,
  Status as Status,
  Subscription as Subscription,
  Tag as Tag,
  Trend as Trend,
  WebPush as WebPush,
  Filter as Filter,
  FilterKeyword as FilterKeyword,
  FilterStatus as FilterStatus,
  InstanceV1 as InstanceV1,
  InstanceV1Configuration as InstanceV1Configuration,
  InstanceV1Fields as InstanceV1Fields,
  InstanceV1MediaAttachments as InstanceV1MediaAttachments,
  InstanceV1Polls as InstanceV1Polls,
  InstanceV1Rules as InstanceV1Rules,
  InstanceV1Stats as InstanceV1Stats,
  InstanceV1Statuses as InstanceV1Statuses,
  InstanceV1Urls as InstanceV1Urls,
  InstanceV2 as InstanceV2,
  InstanceV2Accounts as InstanceV2Accounts,
  InstanceV2Configuration as InstanceV2Configuration,
  InstanceV2Contact as InstanceV2Contact,
  InstanceV2Fields as InstanceV2Fields,
  InstanceV2MediaAttachments as InstanceV2MediaAttachments,
  InstanceV2Polls as InstanceV2Polls,
  InstanceV2Registrations as InstanceV2Registrations,
  InstanceV2Rules as InstanceV2Rules,
  InstanceV2Statuses as InstanceV2Statuses,
  InstanceV2Thumbnail as InstanceV2Thumbnail,
  InstanceV2Translation as InstanceV2Translation,
  InstanceV2Urls as InstanceV2Urls,
  InstanceV2Usage as InstanceV2Usage,
  InstanceV2Users as InstanceV2Users,
  InstanceV2Vapid as InstanceV2Vapid,
  InstanceV2Versions as InstanceV2Versions,
  Meta as Meta,
  MetaFocus as MetaFocus,
  MetaOriginal as MetaOriginal,
  Node as Node,
  NodeSoftware as NodeSoftware,
  NodeInfo as NodeInfo,
  NodeInfoLinks as NodeInfoLinks,
  PleromaAccount as PleromaAccount,
  PleromaContent as PleromaContent,
  PleromaReaction as PleromaReaction,
  PleromaStatus as PleromaStatus,
  Link as Link,
  RateLimit as RateLimit,
};
export {
  Companion_instance as Companion_instanceveqylgm9tsu5,
  InternalUtility_getInstance as InternalUtility_getInstance3h89e0a5dc6eb,
  MastodonFactory_instance as MastodonFactory_instance2u9vsvt4i09j7,
  account$virtualSuspendBridge as account$virtualSuspendBridge2bjdo5evv8zbv,
  block$virtualSuspendBridge as block$virtualSuspendBridge2m9p11gty6f2o,
  followers$virtualSuspendBridge as followers$virtualSuspendBridge1c9i70tx4g41j,
  following$virtualSuspendBridge as following$virtualSuspendBridge2a5rruj1qxyvm,
  follow$virtualSuspendBridge as follow$virtualSuspendBridge2mvbpul40dg4t,
  mute$virtualSuspendBridge as mute$virtualSuspendBridgeuy63hh0twy2k,
  relationships$virtualSuspendBridge as relationships$virtualSuspendBridge1xqhxhiicwp2k,
  statuses$virtualSuspendBridge as statuses$virtualSuspendBridgetjjsgf80q6rh,
  unblock$virtualSuspendBridge as unblock$virtualSuspendBridgeeevr3xrr0c20,
  unfollow$virtualSuspendBridge as unfollow$virtualSuspendBridge2ol91ibhgljix,
  unmute$virtualSuspendBridge as unmute$virtualSuspendBridge39o5bp7xw9yse,
  verifyCredentials$virtualSuspendBridge as verifyCredentials$virtualSuspendBridge20z7rqst12qqz,
  registerApplication$virtualSuspendBridge as registerApplication$virtualSuspendBridge3nxpkaz5v361o,
  bookmarks$virtualSuspendBridge as bookmarks$virtualSuspendBridge7df6zwgf7z01,
  unbookmark$virtualSuspendBridge as unbookmark$virtualSuspendBridge18cm3sk27nn58,
  blockDomain$virtualSuspendBridge as blockDomain$virtualSuspendBridge2x0rybpmyru8a,
  domainBlocks$virtualSuspendBridge as domainBlocks$virtualSuspendBridgelg10eodf3wxk,
  unblockDomain$virtualSuspendBridge as unblockDomain$virtualSuspendBridge18vbv317louqf,
  customEmojis$virtualSuspendBridge as customEmojis$virtualSuspendBridge1m9c9qkzmo0ft,
  favourites$virtualSuspendBridge as favourites$virtualSuspendBridge1h0dhv32b79fp,
  listAccounts$virtualSuspendBridge as listAccounts$virtualSuspendBridge3dkrgmd7vi92x,
  lists$virtualSuspendBridge as lists$virtualSuspendBridge4i415148h4j,
  postMedia$virtualSuspendBridge as postMedia$virtualSuspendBridgezycniy8szi9x,
  notifications$virtualSuspendBridge as notifications$virtualSuspendBridge37x1a513pa0bs,
  notification$virtualSuspendBridge as notification$virtualSuspendBridge9cztlmp1lwso,
  pushSubscription$virtualSuspendBridge as pushSubscription$virtualSuspendBridge2i36l5r4u9qdb,
  authorizationUrl$virtualSuspendBridge as authorizationUrl$virtualSuspendBridge1dqt390crvjcn,
  issueAccessTokenWithAuthorizationCode$virtualSuspendBridge as issueAccessTokenWithAuthorizationCode$virtualSuspendBridgepwfzei5wr2jc,
  refreshAccessToken$virtualSuspendBridge as refreshAccessToken$virtualSuspendBridge1eqiygg2m363q,
  votePoll$virtualSuspendBridge as votePoll$virtualSuspendBridge31viar27woac7,
  deleteScheduledStatus$virtualSuspendBridge as deleteScheduledStatus$virtualSuspendBridge811d0sfzhia8,
  patchScheduledStatus$virtualSuspendBridge as patchScheduledStatus$virtualSuspendBridge15zl7zch5t1sl,
  scheduledStatuses$virtualSuspendBridge as scheduledStatuses$virtualSuspendBridge1mlvo88cgaiel,
  scheduledStatus$virtualSuspendBridge as scheduledStatus$virtualSuspendBridge25kjmr0j4trwn,
  search$virtualSuspendBridge as search$virtualSuspendBridge28fe2o4goa6dh,
  context$virtualSuspendBridge as context$virtualSuspendBridgepnx10p4a9aer,
  deleteStatus$virtualSuspendBridge as deleteStatus$virtualSuspendBridgecggondkrwcvi,
  favourite$virtualSuspendBridge as favourite$virtualSuspendBridge1354vcsjemad2,
  pin$virtualSuspendBridge as pin$virtualSuspendBridge1tj40x5txa0kl,
  postStatus$virtualSuspendBridge as postStatus$virtualSuspendBridgeanaooyf6ef6m,
  reblog$virtualSuspendBridge as reblog$virtualSuspendBridge4wreh9xu1kdx,
  status$virtualSuspendBridge as status$virtualSuspendBridgewyxmkqtpl43z,
  unfavourite$virtualSuspendBridge as unfavourite$virtualSuspendBridge1t5y46zkfsh3y,
  unpin$virtualSuspendBridge as unpin$virtualSuspendBridge2bjpu1193n1mh,
  unreblog$virtualSuspendBridge as unreblog$virtualSuspendBridge1b4pamvwjz4su,
  conversations$virtualSuspendBridge as conversations$virtualSuspendBridgefmayq7fynreq,
  hashtagTimeline$virtualSuspendBridge as hashtagTimeline$virtualSuspendBridge3m4wdjmgxg1tj,
  homeTimeline$virtualSuspendBridge as homeTimeline$virtualSuspendBridge2zitvfhfncg20,
  listTimeline$virtualSuspendBridge as listTimeline$virtualSuspendBridge28rcf6c58l3ca,
  publicTimeline$virtualSuspendBridge as publicTimeline$virtualSuspendBridge3c8h6b1be6qp0,
  trends$virtualSuspendBridge as trends$virtualSuspendBridgedcf0cij8zdd7,
  AccountsAccountRequest as AccountsAccountRequest29zswz11pq091,
  AccountsBlockRequest as AccountsBlockRequest3jd4ef7tz1ygj,
  AccountsFollowRequest as AccountsFollowRequestcfdhvtnyabrx,
  AccountsFollowersRequest as AccountsFollowersRequest3iemjj17j3ri1,
  AccountsFollowingRequest as AccountsFollowingRequest9w35em4ieeak,
  AccountsMuteRequest as AccountsMuteRequest2kzuwk9f2zz36,
  AccountsRelationshipsRequest as AccountsRelationshipsRequestzlfj7tmd2a3p,
  AccountsStatusesRequest as AccountsStatusesRequest39yhvx1rg1xg,
  AccountsUnblockRequest as AccountsUnblockRequest2wekwuowxsek3,
  AccountsUnfollowRequest as AccountsUnfollowRequestdnw6sf5ytjpy,
  AccountsUnmuteRequest as AccountsUnmuteRequestlh1ns68um5xw,
  AppsRegisterApplicationRequest as AppsRegisterApplicationRequest310c6nrkemajw,
  BookmarksGetBookmarksRequest as BookmarksGetBookmarksRequest35u3zs3o8wd51,
  BookmarksUnbookmarkRequest as BookmarksUnbookmarkRequest3pxr95u3t9szt,
  DomainBlocksBlockDomainRequest as DomainBlocksBlockDomainRequestxcas83i84n3t,
  DomainBlocksGetDomainBlocksRequest as DomainBlocksGetDomainBlocksRequest3g0wv1bb4cnm0,
  DomainBlocksUnblockDomainRequest as DomainBlocksUnblockDomainRequest263p5bi923ya8,
  FavouritesFavouritesRequest as FavouritesFavouritesRequest30ln4dkkek9bt,
  ListsListAccountsRequest as ListsListAccountsRequest3hvy6m74ac5xt,
  ListsListsRequest as ListsListsRequest3k7xjxw0wedd0,
  MediasPostMediaRequest as MediasPostMediaRequestaqiru5iaew5q,
  NotificationsNotificationRequest as NotificationsNotificationRequest3h1w7hgisa7dc,
  NotificationsNotificationsRequest as NotificationsNotificationsRequest2ucefsxhlpsij,
  NotificationsPostSubscriptionRequest as NotificationsPostSubscriptionRequestno656mxianeu,
  OAuthAuthorizationUrlRequest as OAuthAuthorizationUrlRequest32hocn5klzmnj,
  OAuthIssueAccessTokenWithAuthorizationCodeRequest as OAuthIssueAccessTokenWithAuthorizationCodeRequestawn02xkynl6b,
  OAuthRefreshAccessTokenRequest as OAuthRefreshAccessTokenRequest3fy2ymc5hjw04,
  PollsVotePollRequest as PollsVotePollRequestw59j46gukx9c,
  ScheduledStatusesGetScheduledStatusesRequest as ScheduledStatusesGetScheduledStatusesRequest7diftd47rqx0,
  ScheduledStatusesPatchScheduledStatusRequest as ScheduledStatusesPatchScheduledStatusRequest38o1q4n39t8k0,
  ScheduledStatusesScheduledStatusRequest as ScheduledStatusesScheduledStatusRequest1hh2b1mzs9w04,
  SearchSearchRequest as SearchSearchRequest3ldvpkvsul6fl,
  StatusesContextRequest as StatusesContextRequest3s3sk8l2tfn39,
  StatusesDeleteStatusRequest as StatusesDeleteStatusRequest2dpbdt97sq1dg,
  StatusesFavouriteRequest as StatusesFavouriteRequest2uzfr3x33e2a3,
  StatusesPinRequest as StatusesPinRequest2wyu5lvgi6fzt,
  StatusesPostStatusRequest as StatusesPostStatusRequest11rvzmm2tc6nn,
  StatusesReblogRequest as StatusesReblogRequest25g9wb0z0sfcm,
  StatusesStatusRequest as StatusesStatusRequest3afpuqkn7w2cj,
  StatusesUnfavouriteRequest as StatusesUnfavouriteRequestt2g5c8xqeeel,
  StatusesUnpinRequest as StatusesUnpinRequest3m2xhtxcme4vv,
  StatusesUnreblogRequest as StatusesUnreblogRequest34n7s4iwf5cbf,
  TimelinesConversationsRequest as TimelinesConversationsRequest24gzvzl1v19u1,
  TimelinesHashTagTimelineRequest as TimelinesHashTagTimelineRequest1i4olwp36hpat,
  TimelinesHomeTimelineRequest as TimelinesHomeTimelineRequest3eu983xf2s0en,
  TimelinesListTimelineRequest as TimelinesListTimelineRequest94ael6xi2vrl,
  TimelinesPublicTimelineRequest as TimelinesPublicTimelineRequest26flsoi6fsame,
  TrendsTrendsRequest as TrendsTrendsRequest1ijp9zl1cyvsv,
  Page as Page1vhh2krehzyhv,
  Range as Ranget0f9xwl0d6o7,
  Alert as Alert32c2i102y2tax,
  Notification as Notificationa10f1ufmxcmw,
  Status as Status35n2t50a43r3h,
  MastodonException as MastodonException3h9mke7plzrf0,
};
//endregion

//# sourceMappingURL=kmastodon-core.mjs.map
